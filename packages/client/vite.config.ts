import react from "@vitejs/plugin-react-swc";
import { readFileSync } from "node:fs";
import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => ({
  plugins: [
    svgr(),
    await import("@mdx-js/rollup").then(({ default: mdx }) => ({
      enforce: "pre",
      ...mdx(),
    })),
    react(),
    createHtmlPlugin({
      template: "index.html",
      inject: {
        data: {
          head: mode === "development" ? `` : readFileSync("newrelic", "utf-8"),
        },
      },
    }),
  ],
  build: {
    outDir: "./dist",
    sourcemap: true,
  },
  server: {
    proxy: {
      "/trpc": {
        target: "http://localhost:2022",
        changeOrigin: true,
        ws: true,
      },
    },
  },
}));
