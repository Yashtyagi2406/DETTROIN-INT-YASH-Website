import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // CSS minification
    cssMinify: true,
    // Suppress large chunk warnings
    chunkSizeWarningLimit: 600,
    // Disable source maps for production
    sourcemap: false,
  },
})
