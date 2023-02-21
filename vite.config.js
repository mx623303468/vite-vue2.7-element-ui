import vue from '@vitejs/plugin-vue2';
import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  plugins: [vue(), legacy({ targets: ['defaults', 'not IE 11'] })],
});
