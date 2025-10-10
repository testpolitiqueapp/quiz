// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
// 👇 1. ON SIMPLIFIE L'IMPORTATION. C'EST LA CORRECTION PRINCIPALE.
import javascriptObfuscator from 'vite-plugin-javascript-obfuscator';

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      webp: { quality: 75 },
    }),

    // 👇 2. ON UTILISE DIRECTEMENT LA VARIABLE IMPORTÉE
    process.env.NODE_ENV !== 'development' && javascriptObfuscator({
      options: {
        stringArray: true,
        rotateStringArray: true,
        stringArrayThreshold: 0.8,
        compact: true,
      },
    }),
  ].filter(Boolean),
});