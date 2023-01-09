import { resolve } from "path";
import { builtinModules } from "module";
import { defineConfig } from "vite";
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "./src/index.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: [
        ...builtinModules
      ],
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
