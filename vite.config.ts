/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({
      tsconfigPath: "./tsconfig.app.json",
      exclude: ["**/*.test.tsx", "src/setup-tests.ts", "**/*.stories.ts"],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      formats: ["es"],
    },
    copyPublicDir: false,
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", "tailwindcss"],
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setup-tests.ts",
    css: false,
    coverage: {
      include: ["src/components"],
    },
  },
});
