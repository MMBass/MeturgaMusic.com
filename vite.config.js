import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // prod - to MeturgaMusic repo
  // base: '/MeturgaMusic/', // dev - to MeturgaMusic-dev gh-pages branch

  plugins: [react()],
  resolve: {
    alias: {
      '@pages': path.resolve(__dirname, './src/pages'),
      '@pages_songs': path.resolve(__dirname, './src/pages_songs'),
      '@components': path.resolve(__dirname, './src/components'),
      '@context': path.resolve(__dirname, './src/context'),
      '@' : path.resolve(__dirname, './src'),
    },
  }
});
