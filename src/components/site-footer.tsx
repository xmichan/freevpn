import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { SITE_NAME_ZH } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t bg-muted/40">
      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6">
        <div>
          <p className="text-sm font-medium">{SITE_NAME_ZH}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            只推荐我们维护的产品：UmiVPN 与 努努加速器。
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <p className="mb-3 font-medium">推荐</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/免费vpn推荐" className="hover:text-foreground">
                  免费VPN推荐
                </Link>
              </li>
              <li>
                <a
                  href="https://www.umivpn.com"
                  className="hover:text-foreground"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  UmiVPN
                </a>
              </li>
              <li>
                <a
                  href="https://www.nunu.monster"
                  className="hover:text-foreground"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  努努加速器
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-3 font-medium">本站</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground">
                  关于与披露
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-foreground">
                  隐私政策
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Separator />
      <div className="py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {SITE_NAME_ZH} · 请遵守当地法律法规合理使用网络工具
      </div>
    </footer>
  );
}
