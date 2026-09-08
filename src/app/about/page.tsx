import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "关于本站与披露",
  description:
    "免费VPN推荐站 由 UmiVPN / 努努加速器相关产品方运营，本页说明推荐范围与利益关系。",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight">关于本站与披露</h1>
      <Separator className="my-6" />
      <div className="space-y-4 text-base leading-relaxed text-foreground/80">
        <p>
          <strong className="text-foreground">免费VPN推荐</strong>
          是一个中文 VPN 推荐站，当前只收录并推荐两款产品：
          <a
            className="mx-1 font-medium text-foreground underline-offset-4 hover:underline"
            href="https://www.umivpn.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            UmiVPN
          </a>
          与
          <a
            className="mx-1 font-medium text-foreground underline-offset-4 hover:underline"
            href="https://www.nunu.monster"
            target="_blank"
            rel="noopener noreferrer"
          >
            努努加速器
          </a>
          。
        </p>
        <p>请遵守你所在地的法律法规，合理合规使用网络工具。本站内容仅供参考。</p>
      </div>
      <div className="mt-8 flex flex-wrap gap-2">
        <Button variant="outline" asChild>
          <Link href="/">返回首页</Link>
        </Button>
        <Button asChild>
          <Link href="/免费vpn推荐">免费VPN推荐</Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link href="/梯子推荐">梯子推荐</Link>
        </Button>
      </div>
    </div>
  );
}
