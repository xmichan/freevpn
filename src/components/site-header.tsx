import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SITE_NAME_ZH } from "@/lib/site";

const NAV = [
  { href: "/", label: "首页" },
  { href: "/免费vpn推荐", label: "免费VPN推荐" },
  { href: "/about", label: "关于" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          {SITE_NAME_ZH}
        </Link>
        <nav className="flex items-center gap-1">
          {NAV.map((item) => (
            <Button key={item.href} variant="ghost" size="sm" asChild>
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
}
