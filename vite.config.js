import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Code splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libraries into their own chunk
          vendor: ['react', 'react-dom', 'react-router-dom'],
          icons: ['react-icons'],
          motion: ['framer-motion'],
        },
      },
    },
    // Minify CSS
    cssMinify: true,
    // Generate source maps only in dev
    sourcemap: false,
    // Set chunk size warning limit
    chunkSizeWarningLimit: 600,
  },
  // Enable asset optimization
  assetsInclude: ['**/*.webp', '**/*.avif'],
})
