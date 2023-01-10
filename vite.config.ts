import { resolve } from 'path'
import { builtinModules } from 'module'
import { defineConfig } from 'vite'
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      formats: ['es'],
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
      // '#ansi-styles': resolve(__dirname, './node_modules/.pnpm/chalk@5.2.0/node_modules/chalk/source/vendor/ansi-styles/index.js'),
      // '#supports-color': resolve(__dirname, './node_modules/.pnpm/chalk@5.2.0/node_modules/chalk/source/vendor/supports-color/index.js'),
    },
  },
})
