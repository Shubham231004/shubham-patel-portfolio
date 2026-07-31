import type { MetadataRoute } from "next";
import { profile } from "@/content/profile";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Shubham Patel — Software, AI and Data",
    short_name: "Shubham Patel",
    description: profile.metadata.description,
    start_url: "/",
    display: "standalone",
    background_color: "#151614",
    theme_color: "#151614",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
