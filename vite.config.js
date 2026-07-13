import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  ssr: {
    noExternal: ['react-helmet-async']
  },
  build: {
    target: 'es2018',
    cssCodeSplit: true,
    sourcemap: false,
    manifest: !isSsrBuild,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-router')) return 'router';
            if (id.includes('react-helmet')) return 'helmet';
            return 'vendor';
          }
        }
      }
    }
  }
}));
