export type Product = {
  id: "umivpn" | "nunu";
  name: string;
  nameEn: string;
  rankLabel: string;
  badge: string;
  tagline: string;
  priceLabel: string;
  platforms: string[];
  chinaUsable: string;
  obfuscation: string;
  logs: string;
  traffic: string;
  devices: string;
  highlights: string[];
  caveats: string[];
  ctaLabel: string;
  url: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "umivpn",
    name: "UmiVPN",
    nameEn: "UmiVPN",
    rankLabel: "全平台可用",
    badge: "桌面 + 手机",
    tagline: "免费套餐可用，无日志，支持 Windows / macOS / iOS / Android",
    priceLabel: "有免费套餐 · 可选付费升级（月付14元，年付104元）",
    platforms: ["Windows", "macOS", "iOS", "Android"],
    chinaUsable: "针对受限网络优化，一键直连",
    obfuscation: "支持通用和专有协议，适配复杂网络环境",
    logs: "无日志",
    traffic: "免费套餐每月3GB，付费套餐不限量",
    devices: "多平台客户端",
    highlights: [
      "全平台",
      "不记日志政策",
      "开源核心",
      "客服支持",
      "支持自定义分流",
      "支持地区选择",
      "各大应用商店均可下载"
    ],
    caveats: [
      "非顶级优质BGP/CN2线路，但性价比高",
      "虽然不限制登录设备数量，但只支持3台设备同时连接",
      "不支持种子下载"
    ],
    ctaLabel: "前往 UmiVPN 官网",
    url: "https://www.umivpn.com",
  },
  {
    id: "nunu",
    name: "努努加速器",
    nameEn: "NUNU",
    rankLabel: "手机免费首选",
    badge: "永久免费",
    tagline: "永久免费、不限流量的手机 VPN / 网络加速器，广告维持运营",
    priceLabel: "¥0 · 永久免费",
    platforms: ["iOS", "Android"],
    chinaUsable: "针对受限网络优化，一键直连",
    obfuscation: "支持通用和专有协议，适配复杂网络环境",
    logs: "不记录",
    traffic: "不限流量、不限速",
    devices: "手机（iOS / Android）",
    highlights: [
      "永久免费",
      "不限流量、不限速",
      "开源核心",
      "App Store / Google Play 双端上架",
      "不限制设备数量",
      "支持地区选择"
    ],
    caveats: [
      "不支持桌面端",
      "有广告",
      "每次连接只持续30分钟-3小时（初始是30分钟，可通过观看广告延长）",
      "不支持种子下载",
      "不支持分流"
    ],
    ctaLabel: "前往 努努加速器 官网",
    url: "https://www.nunu.monster",
  },
];

export function getProduct(id: Product["id"]): Product {
  const found = PRODUCTS.find((p) => p.id === id);
  if (!found) throw new Error(`Unknown product: ${id}`);
  return found;
}
