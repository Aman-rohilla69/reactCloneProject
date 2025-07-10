import { defineConfig } from "vite";
import tailwindcss from '@tailwindcss/vite'
import react from "@vitejs/plugin-react";

export default defineConfig({
  content:[
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  server: {
    host: "0.0.0.0",
    proxy: {
      "/api": "http://localhost:5000",
    },
  },
  plugins: [react(), tailwindcss()],
  base:"/reactCloneProject/",
});




