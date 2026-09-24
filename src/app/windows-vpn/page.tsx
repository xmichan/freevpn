import type { Metadata } from "next";
import { RecommendArticle } from "@/components/recommend-article";
import { WINDOWS_VPN_ARTICLE } from "@/lib/guide-articles";
import { SITE_ORIGIN } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: WINDOWS_VPN_ARTICLE.title },
  description: WINDOWS_VPN_ARTICLE.description,
  keywords: WINDOWS_VPN_ARTICLE.keywords,
  alternates: { canonical: WINDOWS_VPN_ARTICLE.path },
  openGraph: {
    title: WINDOWS_VPN_ARTICLE.title,
    description: WINDOWS_VPN_ARTICLE.description,
    url: `${SITE_ORIGIN}${WINDOWS_VPN_ARTICLE.path}`,
    locale: "zh_CN",
    type: "article",
    modifiedTime: WINDOWS_VPN_ARTICLE.updatedIso,
  },
};

export default function WindowsVpnPage() {
  return <RecommendArticle article={WINDOWS_VPN_ARTICLE} />;
}
