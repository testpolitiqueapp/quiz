// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'; // <-- 1. NOUVEL IMPORT

export default defineConfig({
  plugins: [
    react(), 
    svgr(),
    
    // 👇 2. NOUVELLE CONFIGURATION (BEAUCOUP PLUS SIMPLE)
    ViteImageOptimizer({
      /* options pour les fichiers png */
      png: {
        quality: 80,
      },
      /* options pour les fichiers jpeg */
      jpeg: {
        quality: 80,
      },
      /* génère une version webp à côté de vos png/jpeg */
      webp: {
        quality: 75,
      },
    }),
  ],
});