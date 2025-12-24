import { defineConfig } from "vite";
import inspectorPlugin from "instantcode/vite-plugin";
import dns from "node:dns";

// Set DNS result order to 'verbatim' for consistent localhost resolution
dns.setDefaultResultOrder("verbatim");

export default defineConfig({
  plugins: [
    // Your existing plugins...
    inspectorPlugin(),
  ],
  root: ".",
  server: {
    host: "localhost",
    port: 3000,
    open: true,
  },
  appType: "mpa", // Multi-page application mode
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: "./index.html",
        game: "./game.html",
        "tax-calculate": "./tax-calculate.html",
      },
    },
  },
});
//
