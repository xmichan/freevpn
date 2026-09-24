import type { Metadata } from "next";
import { RecommendArticle } from "@/components/recommend-article";
import { ANDROID_VPN_ARTICLE } from "@/lib/guide-articles";
import { SITE_ORIGIN } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: ANDROID_VPN_ARTICLE.title },
  description: ANDROID_VPN_ARTICLE.description,
  keywords: ANDROID_VPN_ARTICLE.keywords,
  alternates: { canonical: ANDROID_VPN_ARTICLE.path },
  openGraph: {
    title: ANDROID_VPN_ARTICLE.title,
    description: ANDROID_VPN_ARTICLE.description,
    url: `${SITE_ORIGIN}${ANDROID_VPN_ARTICLE.path}`,
    locale: "zh_CN",
    type: "article",
    modifiedTime: ANDROID_VPN_ARTICLE.updatedIso,
  },
};

export default function AndroidVpnPage() {
  return <RecommendArticle article={ANDROID_VPN_ARTICLE} />;
}
