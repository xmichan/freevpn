import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import { SITE_NAME_ZH } from "@/lib/site";

export const metadata: Metadata = {
  title: "隐私政策",
  description: `${SITE_NAME_ZH}站点隐私政策说明。`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight">隐私政策</h1>
      <Separator className="my-6" />
      <div className="space-y-4 text-base leading-relaxed text-foreground/80">
        <p>
          本站（{SITE_NAME_ZH}
          ）是内容型推荐网站。我们可能使用基础访问统计（例如页面浏览量）以改进内容；不会出售你的个人浏览数据。
        </p>
        <p>
          当你点击前往 UmiVPN 或 努努加速器 官网 / 应用商店时，将适用对方站点或商店的隐私政策。
        </p>
        <p>
          若启用第三方广告或分析脚本，将在此页补充具体供应商与用途说明。
        </p>
      </div>
    </div>
  );
}
