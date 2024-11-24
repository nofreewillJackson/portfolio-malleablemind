import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Import path module to resolve aliases

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    port: process.env.PORT || 3000,
    proxy: {
      '/j-garden': {
        target: 'https://publish.obsidian.md/serve?url=malleablemind.ai/j-garden',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/j-garden/, ''),
      },
    },
  },
  resolve: {
    alias: {
      '@react95/core/esm/shared/events.mjs': path.resolve(__dirname, 'node_modules/@react95/core/esm/shared/events.mjs'),
    },
  },
});
