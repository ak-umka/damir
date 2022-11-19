import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    host: true,
    port: 3000,
    // cors: false,
    // proxy: {
    //   "/api/v0": {
    //     target: "http://localhost:8000",
    //     secure: false,
    //     changeOrigin: true,
    //   },
    // },
  },
});
