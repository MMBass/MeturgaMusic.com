import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import babel from "vite-plugin-babel";
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/repo-name', // use if no custom domain
  plugins: [react(), babel()],
  resolve: {
    alias: {
      '@pages': path.resolve(__dirname, './src/pages'),
      '@pages_songs': path.resolve(__dirname, './src/pages_songs'),
      '@components': path.resolve(__dirname, './src/components'),
      '@context': path.resolve(__dirname, './src/context'),
      '@': path.resolve(__dirname, './src'),
    },
  },
});
