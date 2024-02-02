import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/your-app/", // Specify the base URL for your app
  server: {
    port: 3000, // Change the default port
  },
  build: {
    outDir: "dist", // Specify the output directory for the build
    sourcemap: true, // Generate source maps for better debugging
  },
  resolve: {
    alias: {
      "@": "/src", // Set up path aliases for easier imports
    },
  },
});
