const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const siteConfig = {
  name: "Shubham Patel",
  url: new URL(configuredUrl || "http://localhost:3000"),
} as const;
