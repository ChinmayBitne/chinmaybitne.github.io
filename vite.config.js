import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Relative base keeps assets working on GitHub Pages project URLs.
  base: "./",
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          const normalizedId = id.split("\\").join("/");

          if (normalizedId.includes("/node_modules/")) {
            return "vendor";
          }

          if (
            normalizedId.includes("/src/portfolio/config/data.js") ||
            normalizedId.includes("/src/portfolio/config/certDriveLinks.js")
          ) {
            return "portfolio-data";
          }

          if (
            normalizedId.includes("/src/Portfolio.jsx") ||
            normalizedId.includes("/src/portfolio/")
          ) {
            return "portfolio-ui";
          }
        },
      },
    },
  },
});
