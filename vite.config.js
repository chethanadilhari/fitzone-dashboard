import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000,
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // NestJS backend
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // replace /api with '' when sending requests to the backend
      },
    },
  },
});

