import { defineConfig } from 'vitest/config'
import path from 'node:path'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup/vitest.setup.ts'],
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      thresholds: {
        lines: 76,
        functions: 76,
        statements: 76,
        branches: 70,
      },
      exclude: [
        'node_modules/',
        '.next/',
        'coverage/',
        'cypress/',
        '**/*.d.ts',
        '**/page.tsx',
        '**/layout.tsx',
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
