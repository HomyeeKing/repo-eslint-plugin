import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    dedupe: ['rax-image'],
  },
  test: {
    globals: true,
    // environment: 'happy-dom',
    server: {
      deps: {
        inline: [
          "@ice/appear"
        ]
      }
    }
  },
});
