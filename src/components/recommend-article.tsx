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

export function RecommendArticle({ article }: { article: Article }) {
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
    dateModified: article.updatedLabel,
    inLanguage: "zh-CN",
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

      <Separator className="my-10" />

      <section>
        <h2 className="text-2xl font-semibold tracking-tight">
          {article.productsHeading}
        </h2>
        <div className="mt-6 grid gap-4">
          {PRODUCTS.map((product, index) => (
            <ProductCard key={product.id} product={product} rank={index + 1} />
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight">对比</h2>
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
                <TableCell className="pl-4 text-muted-foreground">平台</TableCell>
                <TableCell>Win / macOS / iOS / Android</TableCell>
                <TableCell className="pr-4">iOS / Android</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="pl-4 text-muted-foreground">价格</TableCell>
                <TableCell>
                  免费套餐可用。付费套餐 14 元/月，104 元/年
                </TableCell>
                <TableCell className="pr-4">¥0 永久免费</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="pl-4 text-muted-foreground">流量</TableCell>
                <TableCell>
                  每月 3GB，付费套餐不限量
                </TableCell>
                <TableCell className="pr-4">不限流量</TableCell>
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

      <section className="mt-10">
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
            </a>
            {" "}
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
