import Link from "next/link";
import { LinkedText } from "@/components/linked-text";
import { ProductCard } from "@/components/product-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Article } from "@/lib/articles";
import { PRODUCTS } from "@/lib/products";
import { SITE_NAME_ZH, SITE_ORIGIN } from "@/lib/site";

export function RecommendArticle({ article }: { article: Article }) {
  const pageUrl = `${SITE_ORIGIN}${article.path}`;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.h1,
    description: article.description,
    dateModified: article.updatedIso,
    datePublished: article.updatedIso,
    inLanguage: "zh-CN",
    mainEntityOfPage: pageUrl,
    author: {
      "@type": "Organization",
      name: SITE_NAME_ZH,
      url: SITE_ORIGIN,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME_ZH,
      url: SITE_ORIGIN,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "首页",
        item: SITE_ORIGIN,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: article.breadcrumb,
        item: pageUrl,
      },
    ],
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: article.productsHeading,
    itemListElement: PRODUCTS.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product.name,
      url: product.url,
      description: product.tagline,
    })),
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <nav className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          首页
        </Link>
        <span>/</span>
        <span className="text-foreground">{article.breadcrumb}</span>
      </nav>

      <div className="mt-6 space-y-3">
        <Badge variant="secondary">更新于 {article.updatedLabel}</Badge>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {article.h1}
        </h1>
      </div>

      <div className="mt-8 space-y-4 text-base leading-relaxed text-muted-foreground">
        {article.intro.map((p) => (
          <p key={p.slice(0, 24)} className="text-foreground/80">
            <LinkedText text={p} />
          </p>
        ))}
      </div>

      <nav
        aria-label="目录"
        className="mt-8 rounded-xl border bg-muted/30 px-4 py-4 text-sm"
      >
        <p className="mb-2 font-medium text-foreground">本页目录</p>
        <ol className="list-decimal space-y-1.5 pl-5 text-muted-foreground">
          <li>
            <a href="#products" className="hover:text-foreground">
              {article.productsHeading}
            </a>
          </li>
          <li>
            <a href="#compare" className="hover:text-foreground">
              对比
            </a>
          </li>
          {article.sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} className="hover:text-foreground">
                {section.heading}
              </a>
            </li>
          ))}
          <li>
            <a href="#faq" className="hover:text-foreground">
              常见问题
            </a>
          </li>
        </ol>
      </nav>

      <Separator className="my-10" />

      <section id="products">
        <h2 className="text-2xl font-semibold tracking-tight">
          {article.productsHeading}
        </h2>
        <div className="mt-6 grid gap-4">
          {PRODUCTS.map((product, index) => (
            <ProductCard key={product.id} product={product} rank={index + 1} />
          ))}
        </div>
      </section>

      <section id="compare" className="mt-10">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight">
          UmiVPN vs 努努加速器对比
        </h2>
        <Card className="overflow-hidden py-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="pl-4">对比项</TableHead>
                <TableHead>UmiVPN</TableHead>
                <TableHead className="pr-4">努努加速器</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="pl-4 text-muted-foreground">定位</TableCell>
                <TableCell>全平台免费VPN（可升级）</TableCell>
                <TableCell className="pr-4">手机永久免费VPN</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="pl-4 text-muted-foreground">平台</TableCell>
                <TableCell>Win / macOS / iOS / Android</TableCell>
                <TableCell className="pr-4">iOS / Android</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="pl-4 text-muted-foreground">价格</TableCell>
                <TableCell>
                  免费套餐可用。付费套餐 14 元/月，104 元/年
                </TableCell>
                <TableCell className="pr-4">¥0 永久免费（有广告）</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="pl-4 text-muted-foreground">流量</TableCell>
                <TableCell>每月 3GB，付费套餐不限量</TableCell>
                <TableCell className="pr-4">不限流量</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="pl-4 text-muted-foreground">
                  适合谁
                </TableCell>
                <TableCell>电脑 + 手机、需要分流</TableCell>
                <TableCell className="pr-4">主要用手机、预算为 0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="pl-4 text-muted-foreground">下载</TableCell>
                <TableCell>官网 / 应用商店</TableCell>
                <TableCell className="pr-4">App Store / Google Play</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </section>

      {article.sections.map((section) => (
        <section key={section.id} id={section.id} className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight">
            {section.heading}
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-foreground/80">
            {section.body.map((p) => (
              <p key={p.slice(0, 32)}>
                <LinkedText text={p} />
              </p>
            ))}
          </div>
        </section>
      ))}

      <section id="faq" className="mt-10">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight">常见问题</h2>
        <Accordion type="single" collapsible className="rounded-xl border px-4">
          {article.faqs.map((faq, index) => (
            <AccordionItem key={faq.q} value={`faq-${index}`}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <Card className="mt-10">
        <CardHeader>
          <CardTitle>总结</CardTitle>
          <CardDescription>
            <a
              className="font-medium text-foreground underline-offset-4 hover:underline"
              href="https://www.umivpn.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              UmiVPN
            </a>
            {" 和 "}
            <a
              className="font-medium text-foreground underline-offset-4 hover:underline"
              href="https://www.nunu.monster"
              target="_blank"
              rel="noopener noreferrer"
            >
              努努加速器
            </a>{" "}
            {article.summary}
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="mt-8 flex flex-wrap gap-2">
        {article.related.map((link) => (
          <Button key={link.href} variant="outline" size="sm" asChild>
            <Link href={link.href}>{link.label}</Link>
          </Button>
        ))}
      </div>
    </article>
  );
}
