import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        // 1) New minimal landing page at the root
        main: path.resolve(__dirname, 'index.html'),
        // 2) Old Windows 95 site in /desktop folder
        desktop: path.resolve(__dirname, 'desktop/index.html'),
      },
    },
  },
  server: {
    port: process.env.PORT || 3000,
    proxy: {
      '/j-garden': {
        target: 'https://publish.obsidian.md/serve?url=malleablemind.ai/j-garden',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/j-garden/, ''),
      },
    },
  },
  resolve: {
    alias: {
      '@react95/core/esm/shared/events.mjs': path.resolve(
        __dirname,
        'node_modules/@react95/core/esm/shared/events.mjs'
      ),
    },
  },
});
