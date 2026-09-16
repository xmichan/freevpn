import type { Metadata } from "next";
import { RecommendArticle } from "@/components/recommend-article";
import { CHINA_VPN_ARTICLE } from "@/lib/articles";
import { SITE_ORIGIN } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: CHINA_VPN_ARTICLE.title },
  description: CHINA_VPN_ARTICLE.description,
  keywords: CHINA_VPN_ARTICLE.keywords,
  alternates: {
    canonical: CHINA_VPN_ARTICLE.path,
  },
  openGraph: {
    title: CHINA_VPN_ARTICLE.title,
    description: CHINA_VPN_ARTICLE.description,
    url: `${SITE_ORIGIN}${CHINA_VPN_ARTICLE.path}`,
    locale: "zh_CN",
    type: "article",
    modifiedTime: CHINA_VPN_ARTICLE.updatedIso,
  },
};

export default function ChinaVpnPage() {
  return <RecommendArticle article={CHINA_VPN_ARTICLE} />;
}
