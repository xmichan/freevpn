import type { MetadataRoute } from "next";
import { ARTICLES } from "@/lib/articles";
import { SITE_ORIGIN, UPDATED_AT } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(UPDATED_AT);
  const staticPaths = ["", "/about", "/privacy"];

  return [
    ...staticPaths.map((path) => ({
      url: `${SITE_ORIGIN}${path || "/"}`,
      lastModified,
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : 0.6,
    })),
    ...ARTICLES.map((article) => ({
      url: `${SITE_ORIGIN}${article.path}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.95,
    })),
  ];
}
