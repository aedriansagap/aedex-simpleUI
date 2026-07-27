const createVar = (category: string, key: string, defaultValue: string) => 
  `var(--sx-${category}-${key}, ${defaultValue})`;

export const tokens = {
  colors: {
    // Semantic Colors
    primary: createVar('colors', 'primary', '#3b82f6'),
    secondary: createVar('colors', 'secondary', '#8b5cf6'),
    success: createVar('colors', 'success', '#10b981'),
    danger: createVar('colors', 'danger', '#e11d48'),
    warning: createVar('colors', 'warning', '#f59e0b'),
    info: createVar('colors', 'info', '#3b82f6'),
    white: createVar('colors', 'white', '#ffffff'),
    black: createVar('colors', 'black', '#000000'),

    // Slate
    slate50: createVar('colors', 'slate50', '#f8fafc'),
    slate100: createVar('colors', 'slate100', '#f1f5f9'),
    slate200: createVar('colors', 'slate200', '#e2e8f0'),
    slate300: createVar('colors', 'slate300', '#cbd5e1'),
    slate400: createVar('colors', 'slate400', '#94a3b8'),
    slate500: createVar('colors', 'slate500', '#64748b'),
    slate600: createVar('colors', 'slate600', '#475569'),
    slate700: createVar('colors', 'slate700', '#334155'),
    slate800: createVar('colors', 'slate800', '#1e293b'),
    slate900: createVar('colors', 'slate900', '#0f172a'),

    // Blue
    blue50: createVar('colors', 'blue50', '#eff6ff'),
    blue100: createVar('colors', 'blue100', '#dbeafe'),
    blue200: createVar('colors', 'blue200', '#bfdbfe'),
    blue300: createVar('colors', 'blue300', '#93c5fd'),
    blue400: createVar('colors', 'blue400', '#60a5fa'),
    blue500: createVar('colors', 'blue500', '#3b82f6'),
    blue600: createVar('colors', 'blue600', '#2563eb'),
    blue700: createVar('colors', 'blue700', '#1d4ed8'),
    blue800: createVar('colors', 'blue800', '#1e40af'),
    blue900: createVar('colors', 'blue900', '#1e3a8a'),

    // Emerald
    emerald50: createVar('colors', 'emerald50', '#ecfdf5'),
    emerald100: createVar('colors', 'emerald100', '#d1fae5'),
    emerald200: createVar('colors', 'emerald200', '#a7f3d0'),
    emerald300: createVar('colors', 'emerald300', '#6ee7b7'),
    emerald400: createVar('colors', 'emerald400', '#34d399'),
    emerald500: createVar('colors', 'emerald500', '#10b981'),
    emerald600: createVar('colors', 'emerald600', '#059669'),
    emerald700: createVar('colors', 'emerald700', '#047857'),
    emerald800: createVar('colors', 'emerald800', '#065f46'),
    emerald900: createVar('colors', 'emerald900', '#064e3b'),

    // Rose
    rose50: createVar('colors', 'rose50', '#fff1f2'),
    rose100: createVar('colors', 'rose100', '#ffe4e6'),
    rose200: createVar('colors', 'rose200', '#fecdd3'),
    rose300: createVar('colors', 'rose300', '#fda4af'),
    rose400: createVar('colors', 'rose400', '#fb7185'),
    rose500: createVar('colors', 'rose500', '#f43f5e'),
    rose600: createVar('colors', 'rose600', '#e11d48'),
    rose700: createVar('colors', 'rose700', '#be123c'),
    rose800: createVar('colors', 'rose800', '#9f1239'),
    rose900: createVar('colors', 'rose900', '#881337'),

    // Amber
    amber50: createVar('colors', 'amber50', '#fffbeb'),
    amber100: createVar('colors', 'amber100', '#fef3c7'),
    amber200: createVar('colors', 'amber200', '#fde68a'),
    amber300: createVar('colors', 'amber300', '#fcd34d'),
    amber400: createVar('colors', 'amber400', '#fbbf24'),
    amber500: createVar('colors', 'amber500', '#f59e0b'),
    amber600: createVar('colors', 'amber600', '#d97706'),
    amber700: createVar('colors', 'amber700', '#b45309'),
    amber800: createVar('colors', 'amber800', '#92400e'),
    amber900: createVar('colors', 'amber900', '#78350f'),

    // Legacy Grays mapped to Slate for backward compatibility
    gray100: createVar('colors', 'gray100', '#f1f5f9'),
    gray200: createVar('colors', 'gray200', '#e2e8f0'),
    gray300: createVar('colors', 'gray300', '#cbd5e1'),
    gray800: createVar('colors', 'gray800', '#1e293b'),
    gray900: createVar('colors', 'gray900', '#0f172a'),
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
