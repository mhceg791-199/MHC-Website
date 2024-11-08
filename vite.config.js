import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true, // Automatically opens the report after build
      filename: "bundle-analysis.html", // Output file
      template: "treemap", // or 'sunburst', 'network' for different layouts
    }),
  ],
});
