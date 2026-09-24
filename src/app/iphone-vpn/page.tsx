import type { Metadata } from "next";
import { RecommendArticle } from "@/components/recommend-article";
import { IPHONE_VPN_ARTICLE } from "@/lib/guide-articles";
import { SITE_ORIGIN } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: IPHONE_VPN_ARTICLE.title },
  description: IPHONE_VPN_ARTICLE.description,
  keywords: IPHONE_VPN_ARTICLE.keywords,
  alternates: { canonical: IPHONE_VPN_ARTICLE.path },
  openGraph: {
    title: IPHONE_VPN_ARTICLE.title,
    description: IPHONE_VPN_ARTICLE.description,
    url: `${SITE_ORIGIN}${IPHONE_VPN_ARTICLE.path}`,
    locale: "zh_CN",
    type: "article",
    modifiedTime: IPHONE_VPN_ARTICLE.updatedIso,
  },
};

export default function IphoneVpnPage() {
  return <RecommendArticle article={IPHONE_VPN_ARTICLE} />;
}
