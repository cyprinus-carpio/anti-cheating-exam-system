import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: 'globalThis',
  },
  build: {
    target: 'es2020'
  }
})
