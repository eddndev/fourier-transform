import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  resolve: {
    alias: {
      '@app': '/src/app',
      '@ui': '/src/ui',
      '@math': '/src/math',
      '@vendor': '/src/vendor',
    }
  },
  optimizeDeps: {
    include: [
      '@mathjax/src/mjs/mathjax.js',
      '@mathjax/src/mjs/input/tex.js',
      '@mathjax/src/mjs/output/chtml.js',
      '@mathjax/src/mjs/adaptors/browserAdaptor.js',
      '@mathjax/src/mjs/handlers/html.js',
      '@mathjax/mathjax-newcm-font/mjs/chtml.js',
    ],
    force: true, // evita “Outdated Optimize Dep” cuando cambia la huella
  },
})
