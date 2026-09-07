import type { Metadata } from "next";
import { Noto_Sans_SC } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SITE_NAME_ZH, SITE_ORIGIN, SITE_TAGLINE } from "@/lib/site";
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
    default: `${SITE_NAME_ZH} - 免费VPN / 梯子推荐`,
    template: `%s | ${SITE_NAME_ZH}`,
  },
  description: SITE_TAGLINE,
  keywords: [
    "免费VPN",
    "VPN推荐",
    "梯子",
    "翻墙",
    "科学上网",
    "UmiVPN",
    "努努加速器",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: SITE_NAME_ZH,
    title: `${SITE_NAME_ZH} - 免费VPN / 梯子推荐`,
    description: SITE_TAGLINE,
    url: SITE_ORIGIN,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME_ZH,
    url: SITE_ORIGIN,
    description: SITE_TAGLINE,
    inLanguage: "zh-CN",
  };

  return (
    <html lang="zh-CN" className={cn(noto.variable, "h-full antialiased")}>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
