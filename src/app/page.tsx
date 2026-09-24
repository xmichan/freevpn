import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PRODUCTS } from "@/lib/products";
import {
  PRIMARY_KEYWORDS,
  SITE_NAME_ZH,
  SITE_ORIGIN,
  SITE_TAGLINE,
  UPDATED_AT_LABEL,
} from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: `${SITE_NAME_ZH} ${new Date().getFullYear()}｜中国能用的免费VPN / 梯子`,
  },
  description: SITE_TAGLINE,
  keywords: [...PRIMARY_KEYWORDS, "UmiVPN", "努努加速器"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${SITE_NAME_ZH}｜免费VPN / 中国可用VPN`,
    description: SITE_TAGLINE,
    url: SITE_ORIGIN,
    locale: "zh_CN",
    type: "website",
  },
};

const HOME_FAQS = [
  {
    q: "免费VPN在中国还能用吗？",
    a: "部分可以，但很多海外免费VPN在国内连不上。本站推荐面向中国网络优化的 UmiVPN 与努努加速器，并以官网/应用商店下载为准。",
  },
  {
    q: "电脑和手机该怎么选？",
    a: "电脑 + 手机都要用，选 UmiVPN；主要用手机且希望永久免费，选努努加速器。详细对比见「免费VPN推荐」页。",
  },
  {
    q: "用 ChatGPT / Claude 会消耗 UmiVPN 的 3GB 吗？",
    a: "不会。UmiVPN 对 ChatGPT、Gemini、Claude 等常用 AI 站点提供免计量：这些流量不计入免费套餐 3GB。其它网站仍会计入；完整域名列表见 UmiVPN 官网 AI 免流页。",
  },
  {
    q: "本站只推荐这两款吗？",
    a: "是的。本站由相关产品方运营，只收录我们维护的 UmiVPN 与努努加速器，并在关于页披露利益关系。",
  },
];

export default function HomePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOME_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="border-b">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
          <Badge variant="secondary" className="mb-4">
            更新于 {UPDATED_AT_LABEL}
          </Badge>
          <h1 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            免费VPN推荐 - 2026年中国可用的免费VPN / 梯子
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            寻找
            <span className="font-medium text-foreground"> 免费VPN </span>、
            <span className="font-medium text-foreground">中国可用VPN</span>
            、免费梯子或翻墙方案？本站只推荐两款我们维护的产品：
            <span className="font-medium text-foreground"> UmiVPN </span>
            （全平台）与
            <span className="font-medium text-foreground"> 努努加速器 </span>
            （手机永久免费）。应用商店可下，开源内核，适合海外 AI 与轻度上网。
            UmiVPN 对 ChatGPT / Gemini / Claude 等常用 AI 站点流量免计量，不占用免费 3GB。
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            <Button size="lg" asChild>
              <Link href="/免费vpn推荐">免费VPN推荐</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/中国可用vpn">中国可用VPN排行</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/梯子推荐">梯子推荐</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/翻墙指南">翻墙指南</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/vpn下载">VPN下载</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://www.umivpn.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                UmiVPN
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://www.nunu.monster"
                target="_blank"
                rel="noopener noreferrer"
              >
                努努加速器
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-5xl space-y-6 px-4 py-12 sm:px-6 sm:py-16">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              推荐产品（免费VPN / VPN）
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              按设备选择：电脑优先 UmiVPN，手机永久免费优先努努加速器。
            </p>
          </div>
          <div className="grid gap-4">
            {PRODUCTS.map((product, index) => (
              <ProductCard key={product.id} product={product} rank={index + 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t bg-muted/20">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
          <h2 className="text-2xl font-semibold tracking-tight">继续了解</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/免费vpn推荐"
              className="rounded-xl border bg-background p-5 transition-colors hover:border-foreground/20"
            >
              <h3 className="font-semibold">免费VPN推荐</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                两款免费方案怎么选、流量与安全说明。
              </p>
            </Link>
            <Link
              href="/中国可用vpn"
              className="rounded-xl border bg-background p-5 transition-colors hover:border-foreground/20"
            >
              <h3 className="font-semibold">中国可用VPN</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                按设备与预算快速选型。
              </p>
            </Link>
            <Link
              href="/梯子推荐"
              className="rounded-xl border bg-background p-5 transition-colors hover:border-foreground/20"
            >
              <h3 className="font-semibold">梯子推荐</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                翻墙软件下载与使用说明。
              </p>
            </Link>
            <Link
              href="/翻墙指南"
              className="rounded-xl border bg-background p-5 transition-colors hover:border-foreground/20"
            >
              <h3 className="font-semibold">翻墙指南</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                翻墙入门：先分清 VPN / 机场，再按设备下载。
              </p>
            </Link>
            <Link
              href="/vpn下载"
              className="rounded-xl border bg-background p-5 transition-colors hover:border-foreground/20"
            >
              <h3 className="font-semibold">VPN下载教程</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Windows / Mac / iPhone / Android 官方安装步骤。
              </p>
            </Link>
            <Link
              href="/海外ai"
              className="rounded-xl border bg-background p-5 transition-colors hover:border-foreground/20"
            >
              <h3 className="font-semibold">海外AI免流</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                ChatGPT / Claude 用不耗尽免费流量的办法。
              </p>
            </Link>
            <Link
              href="/电脑vpn"
              className="rounded-xl border bg-background p-5 transition-colors hover:border-foreground/20"
            >
              <h3 className="font-semibold">电脑 Windows VPN</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                桌面端选型与商店版安装建议。
              </p>
            </Link>
            <Link
              href="/苹果vpn"
              className="rounded-xl border bg-background p-5 transition-colors hover:border-foreground/20"
            >
              <h3 className="font-semibold">苹果 VPN</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                iPhone / iPad 上 UmiVPN 与努努怎么选。
              </p>
            </Link>
            <Link
              href="/安卓vpn"
              className="rounded-xl border bg-background p-5 transition-colors hover:border-foreground/20"
            >
              <h3 className="font-semibold">安卓 VPN</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                优先 Google Play，避开侧载假包。
              </p>
            </Link>
            <Link
              href="/机场和vpn的区别"
              className="rounded-xl border bg-background p-5 transition-colors hover:border-foreground/20"
            >
              <h3 className="font-semibold">机场和VPN的区别</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                计费、客户端与适合人群一次讲清。
              </p>
            </Link>
            <Link
              href="/恶意VPN的危害"
              className="rounded-xl border bg-background p-5 transition-colors hover:border-foreground/20"
            >
              <h3 className="font-semibold">Windows恶意VPN风险</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                管理员权限下恶意 VPN 的危害，以及为何选商店上架的 UmiVPN。
              </p>
            </Link>
            <Link
              href="/安卓恶意VPN的危害"
              className="rounded-xl border bg-background p-5 transition-colors hover:border-foreground/20"
            >
              <h3 className="font-semibold">安卓恶意VPN风险</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                手机 VPN 权限与假 App 危害，以及如何选 UmiVPN / 努努加速器。
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight">
            常见问题
          </h2>
          <Accordion type="single" collapsible className="rounded-xl border px-4">
            {HOME_FAQS.map((faq, index) => (
              <AccordionItem key={faq.q} value={`home-faq-${index}`}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
