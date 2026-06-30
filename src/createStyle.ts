import { StyleDefinitions, StyleObject } from './types';
import { generateClassName, styleObjectToCss, injectCSS } from './engine';
import { tokens } from './tokens';

export function createStyle<T extends string>(styles: StyleDefinitions<T>): Record<T, { className: string }> {
  const result: any = {};

  for (const [key, styleObj] of Object.entries(styles)) {
    const typedStyleObj = styleObj as StyleObject;
    const className = generateClassName(typedStyleObj);
    
    // Process base styles
    const baseCss = styleObjectToCss(typedStyleObj);
    injectCSS(className, baseCss);

    // Process pseudo-classes
    const pseudoClasses = ['hover', 'focus', 'active', 'before', 'after'] as const;
    for (const pseudo of pseudoClasses) {
      if (typedStyleObj[pseudo]) {
        const pseudoCss = styleObjectToCss(typedStyleObj[pseudo]!);
        injectCSS(className, pseudoCss, pseudo);
      }
    }

    // Process responsive breakpoints
    const breakpoints = ['sm', 'md', 'lg', 'xl', '2xl'] as const;
    for (const bp of breakpoints) {
      if (typedStyleObj[bp]) {
        const bpCss = styleObjectToCss(typedStyleObj[bp]!);
        const mediaQuery = `(min-width: ${tokens.breakpoints[bp]})`;
        injectCSS(className, bpCss, undefined, mediaQuery);
        
        // Handle pseudo-classes inside breakpoints
        for (const pseudo of pseudoClasses) {
          if (typedStyleObj[bp]![pseudo]) {
            const bpPseudoCss = styleObjectToCss(typedStyleObj[bp]![pseudo]!);
            injectCSS(className, bpPseudoCss, pseudo, mediaQuery);
          }
        }
      }
    }

    // Process dark mode
    if (typedStyleObj.dark) {
      const darkCss = styleObjectToCss(typedStyleObj.dark);
      const darkMediaQuery = '(prefers-color-scheme: dark)';
      injectCSS(className, darkCss, undefined, darkMediaQuery);
      
      // Handle pseudo-classes inside dark mode
      for (const pseudo of pseudoClasses) {
        if (typedStyleObj.dark[pseudo]) {
          const darkPseudoCss = styleObjectToCss(typedStyleObj.dark[pseudo]!);
          injectCSS(className, darkPseudoCss, pseudo, darkMediaQuery);
        }
      }
    }

    result[key] = { className };
  }

  return result;
}
