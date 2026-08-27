import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.dirname(fileURLToPath(import.meta.url))

// Site multi-página: cada .html do repositório é uma rota real e um entry
// point separado do build (mesma URL de hoje, sem router client-side).
const pages = [
  'index.html',
  'portfolio.html',
  'daniel.html',
  'eduardo.html',
  'matheus.html',
  'projeto-cafeteria-aroma-sabor.html',
  'projeto-modo-dark.html',
  'projeto-relogio-digital.html',
  'privacidade.html',
  'cookies.html',
  '404.html',
]

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(root, './src'),
    },
  },
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        pages.map((page) => [page.replace(/\.html$/, ''), path.resolve(root, page)]),
      ),
    },
  },
  server: {
    port: 5173,
  },
})
