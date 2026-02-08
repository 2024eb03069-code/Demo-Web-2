import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  // Frontend source folder
  root: "client",

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },

  build: {
    // Output build in root/dist (for Cloudflare Pages)
    outDir: "../dist",
    emptyOutDir: true,

    // Force Vite to use client/index.html as entry
    rollupOptions: {
      input: path.resolve(__dirname, "client/index.html"),
    },
  },
});
