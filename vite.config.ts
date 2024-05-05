import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  preview: {
    port: 8080,
    strictPort: false,
  },
  server: {
    port: 8080,
    strictPort: false,
    host: true,
    origin: "http://0.0.0.0:8080",
  },
});
