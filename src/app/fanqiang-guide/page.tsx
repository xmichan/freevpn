import type { Metadata } from "next";
import { RecommendArticle } from "@/components/recommend-article";
import { FANQIANG_GUIDE_ARTICLE } from "@/lib/guide-articles";
import { SITE_ORIGIN } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: FANQIANG_GUIDE_ARTICLE.title },
  description: FANQIANG_GUIDE_ARTICLE.description,
  keywords: FANQIANG_GUIDE_ARTICLE.keywords,
  alternates: { canonical: FANQIANG_GUIDE_ARTICLE.path },
  openGraph: {
    title: FANQIANG_GUIDE_ARTICLE.title,
    description: FANQIANG_GUIDE_ARTICLE.description,
    url: `${SITE_ORIGIN}${FANQIANG_GUIDE_ARTICLE.path}`,
    locale: "zh_CN",
    type: "article",
    modifiedTime: FANQIANG_GUIDE_ARTICLE.updatedIso,
  },
};

export default function FanqiangGuidePage() {
  return <RecommendArticle article={FANQIANG_GUIDE_ARTICLE} />;
}
