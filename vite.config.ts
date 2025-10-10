// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import javascriptObfuscator from 'vite-plugin-javascript-obfuscator';

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    ViteImageOptimizer({ /* ... vos options ... */ }),

    process.env.NODE_ENV !== 'development' && javascriptObfuscator({
      options: {
        // --- OPTIONS RENFORCÉES ---

        // Force TOUTES les chaînes de caractères (même les longues descriptions)
        // à être déplacées dans le tableau encodé.
        stringArray: true,
        stringArrayThreshold: 1, // 1 = 100% des chaînes

        // C'est l'option la plus importante : elle va renommer les clés des objets.
        // "description" deviendra "_0xabc123", "LFI" deviendra "_0xdef456", etc.
        transformObjectKeys: true,

        // Rend les chaînes de caractères encore plus illisibles
        unicodeEscapeSequence: true,
        
        // --- Options de base que nous gardons ---
        rotateStringArray: true,
        compact: true,
      },
    }),
  ].filter(Boolean),
});