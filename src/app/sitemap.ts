import type { MetadataRoute } from "next";
import { ARTICLES } from "@/lib/articles";
import { SITE_ORIGIN, UPDATED_AT } from "@/lib/site";

function absoluteUrl(path: string): string {
  // Ensures Chinese paths (e.g. /免费vpn推荐) are percent-encoded in sitemap.xml
  return new URL(path || "/", `${SITE_ORIGIN}/`).href;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(UPDATED_AT);

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/about"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: absoluteUrl("/privacy"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];

  const articleEntries: MetadataRoute.Sitemap = ARTICLES.map((article) => ({
    url: absoluteUrl(article.path),
    lastModified,
    changeFrequency: "weekly",
    priority: 0.95,
  }));

  return [...staticEntries, ...articleEntries];
}
