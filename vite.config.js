import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import VitePrerender from 'vite-plugin-prerender'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  plugins: [
    vue(),
    VitePrerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: ['/'],

      rendererOptions: {
        renderAfterDocumentEvent: 'custom-render-trigger',
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
