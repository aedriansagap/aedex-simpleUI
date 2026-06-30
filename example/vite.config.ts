import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vitePluginSimpleUI } from '../src/plugin';

export default defineConfig({
  plugins: [react(), vitePluginSimpleUI()],
});
