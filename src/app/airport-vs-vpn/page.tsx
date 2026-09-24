import type { Metadata } from "next";
import { RecommendArticle } from "@/components/recommend-article";
import { AIRPORT_VS_VPN_ARTICLE } from "@/lib/guide-articles";
import { SITE_ORIGIN } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: AIRPORT_VS_VPN_ARTICLE.title },
  description: AIRPORT_VS_VPN_ARTICLE.description,
  keywords: AIRPORT_VS_VPN_ARTICLE.keywords,
  alternates: { canonical: AIRPORT_VS_VPN_ARTICLE.path },
  openGraph: {
    title: AIRPORT_VS_VPN_ARTICLE.title,
    description: AIRPORT_VS_VPN_ARTICLE.description,
    url: `${SITE_ORIGIN}${AIRPORT_VS_VPN_ARTICLE.path}`,
    locale: "zh_CN",
    type: "article",
    modifiedTime: AIRPORT_VS_VPN_ARTICLE.updatedIso,
  },
};

export default function AirportVsVpnPage() {
  return <RecommendArticle article={AIRPORT_VS_VPN_ARTICLE} />;
}
