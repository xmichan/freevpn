import type { Metadata } from "next";
import { Noto_Sans_SC } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  PRIMARY_KEYWORDS,
  SITE_NAME_ZH,
  SITE_ORIGIN,
  SITE_TAGLINE,
} from "@/lib/site";
import { cn } from "@/lib/utils";
import "./globals.css";

const noto = Noto_Sans_SC({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: `${SITE_NAME_ZH} - 中国能用的免费VPN / 梯子`,
    template: `%s | ${SITE_NAME_ZH}`,
  },
  description: SITE_TAGLINE,
  keywords: [...PRIMARY_KEYWORDS, "UmiVPN", "努努加速器", "免费VPN下载"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: SITE_NAME_ZH,
    title: `${SITE_NAME_ZH} - 免费VPN / 中国可用VPN`,
    description: SITE_TAGLINE,
    url: SITE_ORIGIN,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME_ZH} - 免费VPN / 中国可用VPN`,
    description: SITE_TAGLINE,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  other: {
    // Helps some CN search engines pick language / region.
    "applicable-device": "pc,mobile",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME_ZH,
    alternateName: ["VPN推荐", "免费梯子推荐", "中国可用VPN"],
    url: SITE_ORIGIN,
    description: SITE_TAGLINE,
    inLanguage: "zh-CN",
  };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME_ZH,
    url: SITE_ORIGIN,
    description: SITE_TAGLINE,
  };

  return (
    <html lang="zh-CN" className={cn(noto.variable, "h-full antialiased")}>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
