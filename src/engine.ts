import { StyleObject, LayoutShorthand } from './types';
import { tokens } from './tokens';

// Cache for injected styles to avoid duplicate injections
const injectedCache = new Set<string>();

// Simple hash function for generating unique class names
const hash = (str: string) => {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h).toString(36);
};

const resolveColor = (val: any) => tokens.colors[val as keyof typeof tokens.colors] || val;
const resolveSpacing = (val: any) => {
  if (typeof val === 'number') return `${val}px`;
  return tokens.spacing[val as keyof typeof tokens.spacing] || val;
};
const resolveRadius = (val: any) => {
  if (typeof val === 'number') return `${val}px`;
  return tokens.radii[val as keyof typeof tokens.radii] || val;
};

const toKebabCase = (str: string) => str.replace(/([A-Z])/g, '-$1').toLowerCase();

function parseLayout(layout: LayoutShorthand): Record<string, string> {
  const styles: Record<string, string> = { display: 'flex' };
  switch (layout) {
    case 'center':
      styles.justifyContent = 'center';
      styles.alignItems = 'center';
      break;
    case 'col':
      styles.flexDirection = 'column';
      break;
    case 'col-center':
      styles.flexDirection = 'column';
      styles.justifyContent = 'center';
      styles.alignItems = 'center';
      break;
    case 'col-between':
      styles.flexDirection = 'column';
      styles.justifyContent = 'space-between';
      break;
    case 'row':
      styles.flexDirection = 'row';
      break;
    case 'row-center':
      styles.flexDirection = 'row';
      styles.justifyContent = 'center';
      styles.alignItems = 'center';
      break;
    case 'row-between':
      styles.flexDirection = 'row';
      styles.justifyContent = 'space-between';
      styles.alignItems = 'center';
      break;
  }
  return styles;
}

export function styleObjectToCss(styleObj: StyleObject): string {
  const cssRules: Record<string, string> = {};
  
  for (const [key, value] of Object.entries(styleObj)) {
    if (value === undefined || value === null) continue;

    // Pseudo classes and breakpoints handled separately in createStyle
    if (['hover', 'focus', 'active', 'before', 'after', 'sm', 'md', 'lg', 'xl', '2xl'].includes(key)) continue;

    if (key === 'layout') {
      Object.assign(cssRules, parseLayout(value as LayoutShorthand));
    } else if (key === 'bg') {
      cssRules.backgroundColor = resolveColor(value);
    } else if (key === 'color') {
      cssRules.color = resolveColor(value);
    } else if (key === 'borderColor') {
      cssRules.borderColor = resolveColor(value);
    } else if (key === 'text') {
      const typeStyle = tokens.typography[value as keyof typeof tokens.typography];
      if (typeStyle) {
        Object.assign(cssRules, typeStyle);
      }
    } else if (key === 'rounded') {
      cssRules.borderRadius = resolveRadius(value);
    } else if (key === 'shadow') {
      cssRules.boxShadow = tokens.shadows[value as keyof typeof tokens.shadows] || value;
    } else if (key === 'p') {
      cssRules.padding = resolveSpacing(value);
    } else if (key === 'px') {
      cssRules.paddingLeft = resolveSpacing(value);
      cssRules.paddingRight = resolveSpacing(value);
    } else if (key === 'py') {
      cssRules.paddingTop = resolveSpacing(value);
      cssRules.paddingBottom = resolveSpacing(value);
    } else if (['pt', 'pb', 'pl', 'pr'].includes(key)) {
      const prop = `padding${key.charAt(1).toUpperCase()}${key.charAt(1) === 't' ? 'op' : key.charAt(1) === 'b' ? 'ottom' : key.charAt(1) === 'l' ? 'eft' : 'ight'}`;
      cssRules[prop] = resolveSpacing(value);
    } else if (key === 'm') {
      cssRules.margin = resolveSpacing(value);
    } else if (key === 'mx') {
      cssRules.marginLeft = resolveSpacing(value);
      cssRules.marginRight = resolveSpacing(value);
    } else if (key === 'my') {
      cssRules.marginTop = resolveSpacing(value);
      cssRules.marginBottom = resolveSpacing(value);
    } else if (['mt', 'mb', 'ml', 'mr'].includes(key)) {
      const prop = `margin${key.charAt(1).toUpperCase()}${key.charAt(1) === 't' ? 'op' : key.charAt(1) === 'b' ? 'ottom' : key.charAt(1) === 'l' ? 'eft' : 'ight'}`;
      cssRules[prop] = resolveSpacing(value);
    } else {
      // Direct pass-through, handling numbers for dimensions
      const isDimension = ['width', 'height', 'minWidth', 'minHeight', 'maxWidth', 'maxHeight', 'top', 'right', 'bottom', 'left', 'borderWidth'].includes(key);
      cssRules[key] = isDimension && typeof value === 'number' ? `${value}px` : (value as string);
    }
  }

  // Convert to actual CSS string
  return Object.entries(cssRules)
    .map(([k, v]) => `${toKebabCase(k)}: ${v};`)
    .join(' ');
}

export function injectCSS(className: string, cssRules: string, pseudo?: string, mediaQuery?: string) {
  if (typeof document === 'undefined') return; // For SSR
  
  const pseudoSelector = pseudo ? (['before', 'after'].includes(pseudo) ? `::${pseudo}` : `:${pseudo}`) : '';
  const cacheKey = `${className}${pseudoSelector}${mediaQuery ? `@${mediaQuery}` : ''}`;
  if (injectedCache.has(cacheKey)) return;
  injectedCache.add(cacheKey);

  let styleTag = document.getElementById('styling-simplified-styles');
  if (!styleTag) {
    styleTag = document.createElement('style');
    styleTag.id = 'styling-simplified-styles';
    document.head.appendChild(styleTag);
  }

  const selector = `.${className}${pseudoSelector}`;
  let css = `\n${selector} { ${cssRules} }`;
  if (mediaQuery) {
    css = `\n@media ${mediaQuery} {${css}\n}`;
  }
  styleTag.appendChild(document.createTextNode(css));
}

export function injectKeyframes(name: string, keyframeRules: string) {
  if (typeof document === 'undefined') return;
  
  const cacheKey = `@keyframes ${name}`;
  if (injectedCache.has(cacheKey)) return;
  injectedCache.add(cacheKey);

  let styleTag = document.getElementById('styling-simplified-styles');
  if (!styleTag) {
    styleTag = document.createElement('style');
    styleTag.id = 'styling-simplified-styles';
    document.head.appendChild(styleTag);
  }

  const css = `\n@keyframes ${name} {\n${keyframeRules}\n}`;
  styleTag.appendChild(document.createTextNode(css));
}

export function generateClassName(styleObj: StyleObject): string {
  const jsonStr = JSON.stringify(styleObj);
  return `sx-${hash(jsonStr)}`;
}

export function createKeyframes(frames: Record<string, StyleObject>): string {
  let rulesString = '';
  for (const [percentage, styleObj] of Object.entries(frames)) {
    const cssString = styleObjectToCss(styleObj);
    rulesString += `  ${percentage} { ${cssString} }\n`;
  }
  
  const name = `anim-${hash(rulesString)}`;
  injectKeyframes(name, rulesString);
  return name;
}

export function injectGlobalCSS(cssRules: string) {
  if (typeof document === 'undefined') return;
  
  let styleTag = document.getElementById('styling-simplified-theme');
  if (!styleTag) {
    styleTag = document.createElement('style');
    styleTag.id = 'styling-simplified-theme';
    document.head.appendChild(styleTag);
  }
  
  styleTag.textContent = cssRules;
}

export function injectBaseCSS(cssRules: string) {
  if (typeof document === 'undefined') return;
  
  let styleTag = document.getElementById('styling-simplified-global');
  if (!styleTag) {
    styleTag = document.createElement('style');
    styleTag.id = 'styling-simplified-global';
    document.head.appendChild(styleTag);
  }
  
  styleTag.appendChild(document.createTextNode(cssRules));
}
