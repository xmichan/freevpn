import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/lib/products";
import { SITE_NAME_ZH, UPDATED_AT_LABEL } from "@/lib/site";

export default function HomePage() {
  return (
    <div>
      <section className="border-b">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
          <Badge variant="secondary" className="mb-4">
            更新于 {UPDATED_AT_LABEL}
          </Badge>
          <h1 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            {SITE_NAME_ZH}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            本站只推荐两款我们自己维护的产品：
            <span className="font-medium text-foreground"> UmiVPN </span>
            （全平台）与
            <span className="font-medium text-foreground"> 努努加速器 </span>
            （手机永久免费）。
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            <Button size="lg" asChild>
              <Link href="/免费vpn推荐">查看完整推荐</Link>
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
            <h2 className="text-2xl font-semibold tracking-tight">推荐产品</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              按设备选择，先实测再长期使用。
            </p>
          </div>
          <div className="grid gap-4">
            {PRODUCTS.map((product, index) => (
              <ProductCard key={product.id} product={product} rank={index + 1} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
