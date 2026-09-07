import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Product } from "@/lib/products";

export function ProductCard({
  product,
  rank,
}: {
  product: Product;
  rank: number;
}) {
  const specs = [
    ["价格", product.priceLabel],
    ["平台", product.platforms.join(" / ")],
    ["网络环境", product.chinaUsable],
    ["日志", product.logs],
    ["流量", product.traffic],
    ["协议", product.obfuscation],
  ] as const;

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary">#{rank}</Badge>
          <Badge variant="outline">{product.rankLabel}</Badge>
        </div>
        <CardTitle className="text-xl">{product.name}</CardTitle>
        <CardDescription className="text-sm leading-relaxed">
          {product.tagline}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <dl className="grid gap-3 text-sm sm:grid-cols-2">
          {specs.map(([label, value]) => (
            <div key={label} className="space-y-1">
              <dt className="text-muted-foreground">{label}</dt>
              <dd className="font-medium">{value}</dd>
            </div>
          ))}
        </dl>

        <Separator />

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-medium">优势</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {product.highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-foreground">+</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-2 text-sm font-medium">注意</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {product.caveats.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-foreground">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <a href={product.url} target="_blank" rel="noopener noreferrer">
            {product.ctaLabel}
            <ArrowUpRight data-icon="inline-end" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
