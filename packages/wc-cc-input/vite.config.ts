import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001,
    open: '/index.html'
  },
  build: {
    lib: {
      name: 'retail-input',
      entry: 'src/wc-cc-input.ts',
      formats: ['es', 'umd']
    },
  }
})
