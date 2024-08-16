import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "favicon.svg",
        "favicon.ico",
        "robots.txt",
        "apple-touch-icon.png",
      ],
      manifest: {
        name: "ZaykobLab",
        short_name: "ZaykobLab",
        description: "ZaykobLab application",
        theme_color: "#ffffff",
        icons: [
          {
            src: "logo-stroke.svg",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
