import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default async () =>
  defineConfig({
    plugins: [
      await import("@mdx-js/rollup").then(({ default: mdx }) => ({
        enforce: "pre",
        ...mdx(),
      })),
      react(),
    ],
    build: {
      outDir: "./dist/client",
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
  });
