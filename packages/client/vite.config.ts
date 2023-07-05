import react from "@vitejs/plugin-react-swc";
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
      minify: mode !== "development",
      template: "index.html",
      inject: {
        data: {
          new_relic_loader_config: process.env.NEW_RELIC_LOADER_CONFIG ?? '""',
          new_relic_info: process.env.NEW_RELIC_INFO ?? '""',
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
