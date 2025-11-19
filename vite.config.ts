import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    // CRITICAL for GitHub Pages:
    base: '/tafsikCFRaudit/',

    plugins: [react()],

    server: { host: '0.0.0.0', port: 3000 },

    build: { outDir: 'dist', sourcemap: true },

    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY ?? ''),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY ?? ''),
      'process.env.NODE_ENV': JSON.stringify(mode),
    },

    resolve: {
      alias: { '@': path.resolve(__dirname, 'src') }
    }
  }
})

