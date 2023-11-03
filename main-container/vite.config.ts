import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host-app",
      filename: "remoteEntry.js",
      remotes: {
        remoteApp: "http://localhost:5001/assets/remoteEntry.js",
        remoteApp2: "http://localhost:5002/assets/remoteEntry.js",
      },
      exposes: {
        "./store": "./src/store",
      },
      shared: ["react", "react-dom", "tailwindcss", "jotai"],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
