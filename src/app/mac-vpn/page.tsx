import type { Metadata } from "next";
import { RecommendArticle } from "@/components/recommend-article";
import { MAC_VPN_ARTICLE } from "@/lib/guide-articles";
import { SITE_ORIGIN } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: MAC_VPN_ARTICLE.title },
  description: MAC_VPN_ARTICLE.description,
  keywords: MAC_VPN_ARTICLE.keywords,
  alternates: { canonical: MAC_VPN_ARTICLE.path },
  openGraph: {
    title: MAC_VPN_ARTICLE.title,
    description: MAC_VPN_ARTICLE.description,
    url: `${SITE_ORIGIN}${MAC_VPN_ARTICLE.path}`,
    locale: "zh_CN",
    type: "article",
    modifiedTime: MAC_VPN_ARTICLE.updatedIso,
  },
};

export default function MacVpnPage() {
  return <RecommendArticle article={MAC_VPN_ARTICLE} />;
}
