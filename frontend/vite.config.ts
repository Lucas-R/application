import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import "dotenv/config";

const PORT = Number(process.env.VITE_PORT) || 8080;
const HOST = process.env.VITE_HOST || "localhost";
const BACKEND = process.env.VITE_BACKEND;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: PORT,
    host: HOST,
    proxy: {
      "/api": {
        target: BACKEND,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  }
})
