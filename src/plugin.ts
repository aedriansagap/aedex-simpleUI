import { Plugin } from 'vite';
import { parse as babelParse, parseExpression } from '@babel/parser';
import _traverse from '@babel/traverse';
import _generate from '@babel/generator';
import { generateClassName, styleObjectToCss } from './engine';
import { tokens } from './tokens';
import { StyleObject } from './types';

// Handle Babel ESM/CJS interop safely
const traverse = typeof _traverse === 'function' ? _traverse : (_traverse as any).default;
const generate = typeof _generate === 'function' ? _generate : (_generate as any).default;

export function vitePluginSimpleUI(): Plugin {
  const virtualModuleId = 'virtual:styling-simplified.css';
  const resolvedVirtualModuleId = '\0' + virtualModuleId;
  
  let extractedCSS = '';

  return {
    name: 'vite-plugin-styling-simplified',
    enforce: 'pre',
    
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    
    load(id) {
      if (id === resolvedVirtualModuleId) {
        return extractedCSS;
      }
    },

    transform(code, id) {
      if (!/\.[jt]sx?$/.test(id) || id.includes('node_modules')) {
        return null;
      }

      if (!code.includes('createStyle')) {
        return null;
      }

      const ast = babelParse(code, {
        sourceType: 'module',
        plugins: ['typescript', 'jsx']
      });

      if (!ast) return null;

      let hasModifications = false;

      traverse(ast, {
        CallExpression(path: any) {
          if (path.node.callee.name === 'createStyle') {
            const arg = path.node.arguments[0];
            if (arg && arg.type === 'ObjectExpression') {
              try {
                // Generate raw code for the object literal
                const objCode = generate(arg).code;
                
                // Safe eval to parse the static object. 
                // Will throw if dynamic variables are used, triggering graceful fallback.
                const styleObj = new Function(`return ${objCode}`)() as Record<string, StyleObject>;
                
                const resultObj: Record<string, { className: string }> = {};
                
                for (const [key, typedStyleObj] of Object.entries(styleObj)) {
                  const className = generateClassName(typedStyleObj);
                  resultObj[key] = { className };
                  
                  // Base styles
                  const baseCss = styleObjectToCss(typedStyleObj);
                  extractedCSS += `\n.${className} { ${baseCss} }`;
                  
                  const pseudoClasses = ['hover', 'focus', 'active', 'before', 'after'] as const;
                  for (const pseudo of pseudoClasses) {
                    if (typedStyleObj[pseudo]) {
                      const pseudoCss = styleObjectToCss(typedStyleObj[pseudo]!);
                      const pseudoSelector = ['before', 'after'].includes(pseudo) ? `::${pseudo}` : `:${pseudo}`;
                      extractedCSS += `\n.${className}${pseudoSelector} { ${pseudoCss} }`;
                    }
                  }
                  
                  // Breakpoints
                  const breakpoints = ['sm', 'md', 'lg', 'xl', '2xl'] as const;
                  for (const bp of breakpoints) {
                    if (typedStyleObj[bp]) {
                      const bpCss = styleObjectToCss(typedStyleObj[bp]!);
                      const mediaQuery = `(min-width: ${tokens.breakpoints[bp]})`;
                      extractedCSS += `\n@media ${mediaQuery} {\n  .${className} { ${bpCss} }\n}`;
                      
                      for (const pseudo of pseudoClasses) {
                        if (typedStyleObj[bp]![pseudo]) {
                          const bpPseudoCss = styleObjectToCss(typedStyleObj[bp]![pseudo]!);
                          const pseudoSelector = ['before', 'after'].includes(pseudo) ? `::${pseudo}` : `:${pseudo}`;
                          extractedCSS += `\n@media ${mediaQuery} {\n  .${className}${pseudoSelector} { ${bpPseudoCss} }\n}`;
                        }
                      }
                    }
                  }
                  
                  // Dark Mode
                  if (typedStyleObj.dark) {
                    const darkCss = styleObjectToCss(typedStyleObj.dark);
                    const darkMediaQuery = '(prefers-color-scheme: dark)';
                    extractedCSS += `\n@media ${darkMediaQuery} {\n  .${className} { ${darkCss} }\n}`;
                    
                    for (const pseudo of pseudoClasses) {
                      if (typedStyleObj.dark[pseudo]) {
                        const darkPseudoCss = styleObjectToCss(typedStyleObj.dark[pseudo]!);
                        const pseudoSelector = ['before', 'after'].includes(pseudo) ? `::${pseudo}` : `:${pseudo}`;
                        extractedCSS += `\n@media ${darkMediaQuery} {\n  .${className}${pseudoSelector} { ${darkPseudoCss} }\n}`;
                      }
                    }
                  }
                }

                // Replace createStyle(...) with the statically computed classNames
                const resultAst = parseExpression(JSON.stringify(resultObj));
                path.replaceWith(resultAst);
                hasModifications = true;
                
              } catch (e) {
                console.warn(`\n[vite-plugin-styling-simplified] Fallback to runtime evaluation for createStyle in ${id} (likely due to dynamic variables).`);
              }
            }
          }
        }
      });

      if (hasModifications) {
        const output = generate(ast).code;
        return `import "${virtualModuleId}";\n${output}`;
      }

      return null;
    }
  };
}
