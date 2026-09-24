import type { Metadata } from "next";
import { RecommendArticle } from "@/components/recommend-article";
import { VPN_DOWNLOAD_ARTICLE } from "@/lib/guide-articles";
import { SITE_ORIGIN } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: VPN_DOWNLOAD_ARTICLE.title },
  description: VPN_DOWNLOAD_ARTICLE.description,
  keywords: VPN_DOWNLOAD_ARTICLE.keywords,
  alternates: { canonical: VPN_DOWNLOAD_ARTICLE.path },
  openGraph: {
    title: VPN_DOWNLOAD_ARTICLE.title,
    description: VPN_DOWNLOAD_ARTICLE.description,
    url: `${SITE_ORIGIN}${VPN_DOWNLOAD_ARTICLE.path}`,
    locale: "zh_CN",
    type: "article",
    modifiedTime: VPN_DOWNLOAD_ARTICLE.updatedIso,
  },
};

export default function VpnDownloadPage() {
  return <RecommendArticle article={VPN_DOWNLOAD_ARTICLE} />;
}
