import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/ArendaPrime/',  // ← Это ключевой фикс! Для GitHub Pages используй имя репозитория
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),  // Если у тебя есть src/ — это поможет с импортами
    },
  },
  server: {
    port: 3000,
    host: '0.0.0.0',  // Для локального dev
  },
})
