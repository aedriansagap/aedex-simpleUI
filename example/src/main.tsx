import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createGlobalStyle } from '@aedriansagap/styling-simplified';
import { App } from './App';

createGlobalStyle({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },
  'html, body': {
    fontFamily: 'system-ui, -apple-system, sans-serif',
    bg: 'gray900',
    color: 'white'
  }
});

const customTheme = {
  colors: {
    primary: '#ec4899', // Change primary from blue to pink!
    gray900: '#000000', // Make background pure black
  }
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
