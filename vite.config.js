import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  root: 'src', // 🔥 IMPORTANTE: aponta para o diretório onde está o index.html
  plugins: [react()],
  build: {
    outDir: '../dist',   // 🔥 Saída da build fora de src
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
