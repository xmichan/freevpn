import type { Metadata } from "next";
import { RecommendArticle } from "@/components/recommend-article";
import { FREE_VPN_ARTICLE } from "@/lib/articles";
import { SITE_ORIGIN } from "@/lib/site";

export const metadata: Metadata = {
  title: FREE_VPN_ARTICLE.title,
  description: FREE_VPN_ARTICLE.description,
  keywords: FREE_VPN_ARTICLE.keywords,
  alternates: {
    canonical: FREE_VPN_ARTICLE.path,
  },
  openGraph: {
    title: FREE_VPN_ARTICLE.title,
    description: FREE_VPN_ARTICLE.description,
    url: `${SITE_ORIGIN}${FREE_VPN_ARTICLE.path}`,
    locale: "zh_CN",
    type: "article",
  },
};

export default function FreeVpnRecommendPage() {
  return <RecommendArticle article={FREE_VPN_ARTICLE} />;
}
