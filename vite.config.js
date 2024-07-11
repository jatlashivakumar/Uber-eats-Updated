import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-icons/ai': 'react-icons/ai/index.esm.js',
      'react-icons/tb': 'react-icons/tb/index.esm.js',
      'react-icons/fa': 'react-icons/fa/index.esm.js',
      'react-icons/md': 'react-icons/md/index.esm.js',
      'react-icons/bs': 'react-icons/bs/index.esm.js',
    },
  },
  build: {
    rollupOptions: {
      external: ['react', 'react-dom', 'react-icons/ai', 'react-icons/tb', 'react-icons/fa', 'react-icons/md', 'react-icons/bs'],
    },
  },
});
