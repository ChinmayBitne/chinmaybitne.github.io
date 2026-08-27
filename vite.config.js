import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // This repository publishes as the root GitHub Pages user site.
  base: "/",
});
