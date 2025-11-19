import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Must match your repo name for GitHub Pages
  base: '/tafsikCFRaudit/',

  plugins: [react()],

  server: {
    host: '0.0.0.0',
    port: 3000,
  },

  build: {
    outDir: 'dist',
    sourcemap: true,
  },

  resolve: {
    alias: {
      '@': '/src', // so you can import from "@/components/…" etc.
    },
  },
})
