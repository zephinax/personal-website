import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    short_name: SITE_INFO.name,
    name: SITE_INFO.name,
    description: SITE_INFO.description,
    icons: [
      {
        src: "/icon-vector.svg",
        type: "image/svg+xml",
        sizes: "any",
        purpose: "any",
      },
      {
        src: "/icon-192x192.png",
        type: "image/png",
        sizes: "192x192",
        purpose: "any",
      },
      {
        src: "/icon-512x512.png",
        type: "image/png",
        sizes: "512x512",
        purpose: "any",
      },
      {
        src: "/maskable-icon.png",
        type: "image/png",
        sizes: "512x512",
        purpose: "maskable",
      },
    ],
    id: "/?pwa=true",
    start_url: "/?pwa=true",
    display: "standalone",
    scope: "/",
    screenshots: [
      {
        src: "/screenshot-narrow.png",
        type: "image/png",
        sizes: "720x1558",
        form_factor: "narrow",
      },
      {
        src: "/screenshot-wide.png",
        type: "image/png",
        sizes: "1920x1088",
        form_factor: "wide",
      },
    ],
  };
}
