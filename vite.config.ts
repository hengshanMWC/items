/// <reference types="vitest" />
/// <reference types="vitest/globals" />
import { resolve } from 'path'
import { builtinModules } from 'module'
import { defineConfig } from 'vitest/config'
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      formats: ['cjs'],
    },
    rollupOptions: {
      external: [
        ...builtinModules,
      ],
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  test: {
    threads: false, // process.chdir() is not supported in workers
    globals: true,
    watch: false,
  },
})
