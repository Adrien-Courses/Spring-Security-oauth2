import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Keep the Host header (localhost:5173) so Spring resolves {baseUrl} to the React origin.
// The string shorthand ('/api': 'http://...') would set changeOrigin: true and break this.
const backend = { target: 'http://localhost:8080', changeOrigin: false }

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // /api/me -> http://localhost:8080/me, so React keeps its own /me page
      '/api': { ...backend, rewrite: (path) => path.replace(/^\/api/, '') },
      '/oauth2': backend,
      '/login': backend,
    },
  },
})
