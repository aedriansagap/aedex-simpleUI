import { GlobalStyleObject } from './types';
import { styleObjectToCss, injectBaseCSS } from './engine';

export function createGlobalStyle(styles: GlobalStyleObject): void {
  let globalCss = '';

  for (const [selector, styleObj] of Object.entries(styles)) {
    const cssRules = styleObjectToCss(styleObj);
    globalCss += `\n${selector} {\n  ${cssRules}\n}`;
  }

  if (globalCss) {
    injectBaseCSS(globalCss);
  }
}
