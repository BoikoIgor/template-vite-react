import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/boikoigor.github.io/template-vite-react/',
  plugins: [react()],
});
