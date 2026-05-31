const createVar = (category: string, key: string, defaultValue: string) => 
  `var(--sx-${category}-${key}, ${defaultValue})`;

export const tokens = {
  colors: {
    primary: createVar('colors', 'primary', '#3b82f6'),
    secondary: createVar('colors', 'secondary', '#8b5cf6'),
    success: createVar('colors', 'success', '#10b981'),
    danger: createVar('colors', 'danger', '#ef4444'),
    warning: createVar('colors', 'warning', '#f59e0b'),
    info: createVar('colors', 'info', '#3b82f6'),
    white: createVar('colors', 'white', '#ffffff'),
    black: createVar('colors', 'black', '#000000'),
    gray100: createVar('colors', 'gray100', '#f3f4f6'),
    gray200: createVar('colors', 'gray200', '#e5e7eb'),
    gray300: createVar('colors', 'gray300', '#d1d5db'),
    gray800: createVar('colors', 'gray800', '#1f2937'),
    gray900: createVar('colors', 'gray900', '#111827'),
  },
  spacing: {
    0: createVar('spacing', '0', '0px'),
    xs: createVar('spacing', 'xs', '4px'),
    sm: createVar('spacing', 'sm', '8px'),
    md: createVar('spacing', 'md', '16px'),
    lg: createVar('spacing', 'lg', '24px'),
    xl: createVar('spacing', 'xl', '32px'),
    '2xl': createVar('spacing', '2xl', '48px'),
    '3xl': createVar('spacing', '3xl', '64px'),
  },
  radii: {
    none: createVar('radii', 'none', '0'),
    sm: createVar('radii', 'sm', '4px'),
    md: createVar('radii', 'md', '8px'),
    lg: createVar('radii', 'lg', '12px'),
    xl: createVar('radii', 'xl', '16px'),
    '2xl': createVar('radii', '2xl', '24px'),
    full: createVar('radii', 'full', '9999px'),
  },
  shadows: {
    none: createVar('shadows', 'none', 'none'),
    sm: createVar('shadows', 'sm', '0 1px 2px 0 rgba(0, 0, 0, 0.05)'),
    md: createVar('shadows', 'md', '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'),
    lg: createVar('shadows', 'lg', '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'),
    xl: createVar('shadows', 'xl', '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'),
  },
  typography: {
    h1: { fontSize: createVar('typography', 'h1-fontSize', '2.25rem'), fontWeight: createVar('typography', 'h1-fontWeight', '700'), lineHeight: createVar('typography', 'h1-lineHeight', '2.5rem') },
    h2: { fontSize: createVar('typography', 'h2-fontSize', '1.5rem'), fontWeight: createVar('typography', 'h2-fontWeight', '700'), lineHeight: createVar('typography', 'h2-lineHeight', '2rem') },
    h3: { fontSize: createVar('typography', 'h3-fontSize', '1.25rem'), fontWeight: createVar('typography', 'h3-fontWeight', '600'), lineHeight: createVar('typography', 'h3-lineHeight', '1.75rem') },
    body: { fontSize: createVar('typography', 'body-fontSize', '1rem'), fontWeight: createVar('typography', 'body-fontWeight', '400'), lineHeight: createVar('typography', 'body-lineHeight', '1.5rem') },
    small: { fontSize: createVar('typography', 'small-fontSize', '0.875rem'), fontWeight: createVar('typography', 'small-fontWeight', '400'), lineHeight: createVar('typography', 'small-lineHeight', '1.25rem') },
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  }
};
