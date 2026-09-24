import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { SITE_NAME_ZH, SITE_TAGLINE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t bg-muted/40">
      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4 sm:px-6">
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="text-sm font-medium">{SITE_NAME_ZH}</p>
          <p className="mt-2 text-sm text-muted-foreground">{SITE_TAGLINE}</p>
        </div>
        <div className="text-sm">
          <p className="mb-3 font-medium">推荐</p>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <Link href="/免费vpn推荐" className="hover:text-foreground">
                免费VPN推荐
              </Link>
            </li>
            <li>
              <Link href="/中国可用vpn" className="hover:text-foreground">
                中国可用VPN排行
              </Link>
            </li>
            <li>
              <Link href="/梯子推荐" className="hover:text-foreground">
                梯子推荐
              </Link>
            </li>
            <li>
              <Link href="/翻墙指南" className="hover:text-foreground">
                翻墙指南
              </Link>
            </li>
            <li>
              <Link href="/vpn下载" className="hover:text-foreground">
                VPN下载教程
              </Link>
            </li>
            <li>
              <Link href="/海外ai" className="hover:text-foreground">
                海外AI免流
              </Link>
            </li>
            <li>
              <Link href="/机场和vpn的区别" className="hover:text-foreground">
                机场和VPN的区别
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="mb-3 font-medium">按设备</p>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <Link href="/电脑vpn" className="hover:text-foreground">
                电脑 Windows VPN
              </Link>
            </li>
            <li>
              <Link href="/苹果vpn" className="hover:text-foreground">
                苹果 iPhone VPN
              </Link>
            </li>
            <li>
              <Link href="/安卓vpn" className="hover:text-foreground">
                安卓 VPN
              </Link>
            </li>
            <li>
              <Link href="/mac电脑vpn" className="hover:text-foreground">
                Mac VPN
              </Link>
            </li>
            <li>
              <Link href="/恶意VPN的危害" className="hover:text-foreground">
                Windows恶意VPN风险
              </Link>
            </li>
            <li>
              <Link href="/安卓恶意VPN的危害" className="hover:text-foreground">
                安卓恶意VPN风险
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="mb-3 font-medium">本站</p>
          <ul className="space-y-2 text-muted-foreground">
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
            <li>
              <Link href="/sitemap.xml" className="hover:text-foreground">
                网站地图
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Separator />
      <div className="py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {SITE_NAME_ZH} ·
        请遵守当地法律法规合理使用网络工具
      </div>
    </footer>
  );
}
