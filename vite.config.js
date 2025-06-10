import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/anti-cheating-exam-system/',
  plugins: [react()],
  define: {
    global: 'globalThis',
  },
  build: {
    outDir: 'build', 
    target: 'es2020',
  }
})
