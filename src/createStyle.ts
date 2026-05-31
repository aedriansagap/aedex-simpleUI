import { StyleDefinitions, StyleObject } from './types';
import { generateClassName, styleObjectToCss, injectCSS } from './engine';

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

    result[key] = { className };
  }

  return result;
}
