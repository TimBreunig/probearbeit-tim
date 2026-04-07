/// <reference types="vitest/config" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgrPlugin from 'vite-plugin-svgr'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [
    react(),
    svgrPlugin(),
    tailwindcss()
  ],
  optimizeDeps: {
    include: ['react/jsx-runtime', 'react/jsx-dev-runtime']
  },
   test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/_tests_/setup.ts',
  },
})
