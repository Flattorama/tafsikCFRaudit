import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // UPDATED: Set to '/' because you are now on a custom subdomain (reports.tafsik.com)
  // which treats the site as living at the root, not in a /repo-name/ subfolder.
  base: '/',

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
