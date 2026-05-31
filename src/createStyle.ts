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
    if (typedStyleObj.hover) {
      const hoverCss = styleObjectToCss(typedStyleObj.hover);
      injectCSS(className, hoverCss, 'hover');
    }
    if (typedStyleObj.focus) {
      const focusCss = styleObjectToCss(typedStyleObj.focus);
      injectCSS(className, focusCss, 'focus');
    }
    if (typedStyleObj.active) {
      const activeCss = styleObjectToCss(typedStyleObj.active);
      injectCSS(className, activeCss, 'active');
    }

    // Process responsive breakpoints
    const breakpoints = ['sm', 'md', 'lg', 'xl', '2xl'] as const;
    for (const bp of breakpoints) {
      if (typedStyleObj[bp]) {
        const bpCss = styleObjectToCss(typedStyleObj[bp]!);
        const mediaQuery = `(min-width: ${tokens.breakpoints[bp]})`;
        injectCSS(className, bpCss, undefined, mediaQuery);
        
        // Handle pseudo-classes inside breakpoints
        if (typedStyleObj[bp]!.hover) {
          const bpHoverCss = styleObjectToCss(typedStyleObj[bp]!.hover!);
          injectCSS(className, bpHoverCss, 'hover', mediaQuery);
        }
        if (typedStyleObj[bp]!.focus) {
          const bpFocusCss = styleObjectToCss(typedStyleObj[bp]!.focus!);
          injectCSS(className, bpFocusCss, 'focus', mediaQuery);
        }
        if (typedStyleObj[bp]!.active) {
          const bpActiveCss = styleObjectToCss(typedStyleObj[bp]!.active!);
          injectCSS(className, bpActiveCss, 'active', mediaQuery);
        }
      }
    }

    result[key] = { className };
  }

  return result;
}
