/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig, configDefaults } from 'vitest/config';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react({
      babel: {
        plugins: [['istanbul']],
      },
    }),
    eslint(),
    tsconfigPaths(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'setup.ts',
    coverage: {
      provider: 'c8',
      all: true,
      include: ['src/**/*'],
      exclude: [
        ...configDefaults.exclude,
        'src/types/',
        'public/',
        '**/*.d.ts',
        '**/*.test.tsx',
        'src/**/*.test.*',
        'src/**/interface.ts',
      ],
      reportsDirectory: './src/tests/coverage',
    },
  },
});
