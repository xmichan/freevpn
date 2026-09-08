import type { Metadata } from "next";
import { RecommendArticle } from "@/components/recommend-article";
import { LADDER_ARTICLE } from "@/lib/articles";
import { SITE_ORIGIN } from "@/lib/site";

export const metadata: Metadata = {
  title: LADDER_ARTICLE.title,
  description: LADDER_ARTICLE.description,
  keywords: LADDER_ARTICLE.keywords,
  alternates: {
    canonical: LADDER_ARTICLE.path,
  },
  openGraph: {
    title: LADDER_ARTICLE.title,
    description: LADDER_ARTICLE.description,
    url: `${SITE_ORIGIN}${LADDER_ARTICLE.path}`,
    locale: "zh_CN",
    type: "article",
  },
};

export default function LadderRecommendPage() {
  return <RecommendArticle article={LADDER_ARTICLE} />;
}
