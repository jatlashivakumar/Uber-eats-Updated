import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-icons/ai', 'react-icons/tb', 'react-icons/fa', 'react-icons/md', 'react-icons/bs'],
    },
  },
});
