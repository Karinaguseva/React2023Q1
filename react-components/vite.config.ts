import { defineConfig, configDefaults } from 'vitest/config';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/React2023Q1/react-components',
  plugins: [react(), eslint(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'setup.ts',
    coverage: {
      all: true,
      exclude: [...configDefaults.exclude, 'src/types/', 'public/', '**/*.d.ts', '**/*.test.tsx'],
      reportsDirectory: './src/tests/coverage',
    },
  },
});
