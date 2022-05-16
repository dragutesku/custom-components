import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001,
    open: '/index.html'
  },
  build: {
    lib: {
      name: '{{ dashCase name}}',
      entry: 'src/{{ dashCase name }}.ts',
      formats: ['es', 'umd']
    },
  }
})
