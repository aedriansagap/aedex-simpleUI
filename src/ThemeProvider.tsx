import React, { useLayoutEffect } from 'react';
import { injectGlobalCSS } from './engine';

export type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;

export interface Theme {
  colors: Record<string, string>;
  spacing: Record<string, string>;
  radii: Record<string, string>;
  shadows: Record<string, string>;
  typography: Record<string, any>;
}

export interface ThemeProviderProps {
  theme: DeepPartial<Theme>;
  children: React.ReactNode;
}

export function ThemeProvider({ theme, children }: ThemeProviderProps) {
  useLayoutEffect(() => {
    let cssVars = '';
    
    const processTheme = (obj: any, prefix = '') => {
      for (const [key, value] of Object.entries(obj)) {
        if (typeof value === 'object' && value !== null) {
          processTheme(value, `${prefix}${key}-`);
        } else {
          cssVars += `  --sx-${prefix}${key}: ${value};\n`;
        }
      }
    };
    
    if (theme) {
      processTheme(theme);
      injectGlobalCSS(`:root {\n${cssVars}}`);
    }
  }, [theme]);

  return <>{children}</>;
}
