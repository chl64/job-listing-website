import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        // regular expression literal in JS has the pattern enclosed between forward-slashes.
        // So the re pattern below is "^\/api", i.e. begins with "/api".
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
