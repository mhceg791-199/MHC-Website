import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: "../../var/www/mosaicholding.com", // Replace with your desired directory path
  },
  plugins: [
    react(),
    visualizer({
      open: true, // Automatically opens the report after build
      filename: "bundle-analysis.html", // Output file
      template: "treemap", // or 'sunburst', 'network' for different layouts
    }),
  ],
});
