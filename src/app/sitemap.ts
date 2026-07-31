import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", ...projects.map((project) => project.caseStudyHref)].map(
    (path) => ({
      url: new URL(path || "/", siteConfig.url).toString(),
      changeFrequency: "monthly",
      priority: path ? 0.8 : 1,
    }),
  );
}
