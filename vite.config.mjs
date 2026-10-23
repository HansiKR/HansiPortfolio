import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // This repository is published at username.github.io/HansiPortfolio/.
  base: '/HansiPortfolio/',
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
  },
});
