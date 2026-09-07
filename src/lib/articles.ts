import { PRODUCTS } from "@/lib/products";
import { UPDATED_AT_LABEL } from "@/lib/site";

export type Article = {
  slug: string;
  path: string;
  title: string;
  description: string;
  keywords: string[];
  h1: string;
  updatedLabel: string;
  intro: string[];
  sections: {
    id: string;
    heading: string;
    body: string[];
  }[];
  faqs: { q: string; a: string }[];
  related: { href: string; label: string }[];
};

export const FREE_VPN_ARTICLE: Article = {
  slug: "免费vpn推荐",
  path: "/免费vpn推荐",
  title: `免费VPN推荐 ${new Date().getFullYear()} - 中国能用的免费VPN`,
  description:
    "2026 免费VPN推荐：UmiVPN 与 努努加速器。",
  keywords: [
    "免费VPN",
    "免费vpn推荐",
    "梯子",
    "翻墙",
    "科学上网",
    "免费梯子",
    "中国可用VPN",
    "UmiVPN",
    "努努加速器",
  ],
  h1: `免费VPN推荐 ${new Date().getFullYear()} - 中国能用`,
  updatedLabel: UPDATED_AT_LABEL,
  intro: [
    "随着AI的日益增强，越来越多的人开始使用AI工具，但是国内无法正常使用海外AI，需要使用VPN才可以访问。本站推荐的两款产品都是免费且好用，帮助您流畅的使用AI工具，提高生产力/学习效率。",
  ],
  sections: [
    {
      id: "umivpn",
      heading: "全平台首选：UmiVPN",
      body: [
        `UmiVPN 由开发完全开源免费的 [VX代理客户端](https://vx.5vnetwork.com) 的团队开发，采用了独家的开源 [VX内核](https://github.com/5VNetwork/vx-core)，安全可靠，功能齐全。`,
        "免费套餐每月3GB流量，虽说不算特别多，但是足够轻度用户使用，如果你平常只是用用ChatGPT，搜搜谷歌，偶尔看几个视频，那么3GB足够你用一个月。",
        "付费套餐不限流量，有十几个地区可选，适合对地区有要求，或者重度使用VPN的用户"
      ],
    },
    {
      id: "nunu",
      heading: "手机端选择：努努加速器",
      body: [
        `${PRODUCTS[1].tagline}。`,
        "努努加速器并不是全局VPN，只会加速无法访问的站点，并不会加速所有站点。它符合大部分普通用户的手机上网需求。如需要指定某特定未被封网站走代理，请使用UmiVPN。",
      ],
    },
    {
      id: "safety",
      heading: "推荐的VPN安全吗",
      body: [
        "本站推荐的两款产品都有正规官网，且都有可核对的运营主体 / 联系方式。",
        "两者的隐私政策都写清了记什么、不记什么。",
        "两者均上架各大应用商店，受应用商店审核与监管，安全性有保障。",
      ],
    },
  ],
  faqs: [
    {
      q: "2026 年哪个免费 VPN 比较稳？",
      a: "稳不稳用过才知道。本站推荐的产品都有自动化代码确保节点稳定性。",
    },
    {
      q: "本站和 UmiVPN、努努是什么关系？",
      a: "本站由相关产品方运营，专门推荐 UmiVPN 与 努努加速器。我们不会夸大宣传我们的产品。",
    },
  ],
  related: [
    { href: "/about", label: "关于本站 / 披露" },
  ],
};

export const ARTICLES: Article[] = [FREE_VPN_ARTICLE];

export function getArticleByPath(path: string): Article | undefined {
  return ARTICLES.find((a) => a.path === path || a.slug === path.replace(/^\//, ""));
}
