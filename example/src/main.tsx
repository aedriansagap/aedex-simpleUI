import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styling-simplified';
import { App } from './App';

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
