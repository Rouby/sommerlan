import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import codegen from "vite-plugin-graphql-codegen";
import { createHtmlPlugin } from "vite-plugin-html";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => ({
  plugins: [
    codegen(),
    svgr(),
    react(),
    createHtmlPlugin({
      minify: mode !== "development",
      template: "index.html",
    }),
  ],
  build: {
    outDir: "./dist",
    sourcemap: true,
  },
  server: {
    proxy: {
      "/graphql": {
        target: `http://localhost:${process.env.PORT ?? 2022}`,
        changeOrigin: true,
      },
      "/uploads": {
        target: `http://localhost:${process.env.PORT ?? 2022}`,
        changeOrigin: true,
      },
    },
  },
}));
