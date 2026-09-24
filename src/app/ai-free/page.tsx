import type { Metadata } from "next";
import { RecommendArticle } from "@/components/recommend-article";
import { AI_FREE_ARTICLE } from "@/lib/guide-articles";
import { SITE_ORIGIN } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: AI_FREE_ARTICLE.title },
  description: AI_FREE_ARTICLE.description,
  keywords: AI_FREE_ARTICLE.keywords,
  alternates: { canonical: AI_FREE_ARTICLE.path },
  openGraph: {
    title: AI_FREE_ARTICLE.title,
    description: AI_FREE_ARTICLE.description,
    url: `${SITE_ORIGIN}${AI_FREE_ARTICLE.path}`,
    locale: "zh_CN",
    type: "article",
    modifiedTime: AI_FREE_ARTICLE.updatedIso,
  },
};

export default function AiFreePage() {
  return <RecommendArticle article={AI_FREE_ARTICLE} />;
}
