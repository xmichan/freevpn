import { PRODUCTS } from "@/lib/products";
import { UPDATED_AT, UPDATED_AT_LABEL } from "@/lib/site";

export type Article = {
  slug: string;
  path: string;
  title: string;
  description: string;
  keywords: string[];
  h1: string;
  breadcrumb: string;
  productsHeading: string;
  summary: string;
  updatedLabel: string;
  updatedIso: string;
  intro: string[];
  sections: {
    id: string;
    heading: string;
    body: string[];
  }[];
  faqs: { q: string; a: string }[];
  related: { href: string; label: string }[];
};

const YEAR = 2026;

const PRODUCT_SECTIONS: Article["sections"] = [
  {
    id: "umivpn",
    heading: "全平台免费VPN：UmiVPN",
    body: [
      `UmiVPN 由开发完全开源免费的 [VX代理客户端](https://vx.5vnetwork.com) 的团队开发，采用独家开源 [VX内核](https://github.com/5VNetwork/vx-core)，安全可靠，功能齐全。官网：[https://www.umivpn.com](https://www.umivpn.com)。`,
      "免费套餐每月 3GB 流量（ChatGPT、Gemini、Claude AI 站点免计量，不占用这 3GB）：日常查资料、用海外 AI、搜谷歌、偶尔看视频，轻度用户通常够用一个月。付费套餐不限流量，有十几个地区可选，适合对地区有要求或重度使用的用户。完整 AI 域名列表见 [UmiVPN AI 免流页](https://www.umivpn.com/ai-free)。",
      "支持 Windows、macOS、iOS、Android；各大应用商店可下载；无日志政策；支持自定义分流与地区选择。适合需要电脑和手机都能用的免费VPN用户。",
    ],
  },
  {
    id: "nunu",
    heading: "手机永久免费VPN：努努加速器",
    body: [
      `${PRODUCTS[1].tagline}。官网：[https://www.nunu.monster](https://www.nunu.monster)。`,
      "努努加速器并不是全局 VPN：只会加速无法访问的站点，不会代理所有流量，符合大部分普通用户的手机上网需求。如需要指定某站点走代理，请使用 UmiVPN。",
      "¥0 永久免费、不限流量；上架 App Store / Google Play；通过广告维持运营。每次连接至少持续约 30 分钟至 3 小时（可看广告延长,流量用的不多的话会持续更长的时间）。适合主要用手机、想要长期免费方案的用户。",
    ],
  },
];

const SHARED_GUIDE_SECTIONS: Article["sections"] = [
  {
    id: "china-2026",
    heading: "2026年中国免费VPN还能不能用？",
    body: [
      "搜「免费VPN」的人，真正想问的往往是：在中国大陆网络环境下，还有没有能连上、能下载、能放心用的免费方案。现实是：很多海外知名免费VPN在国内根本连不上，或很快失效；来路不明的「永久免费」还可能有隐私风险。",
      "因此本站不做「堆砌几十个国外品牌」的空榜，只推荐两款我们自己维护、面向中国网络优化、且可在正规应用商店下载的产品：UmiVPN（全平台）与努努加速器（手机永久免费）。",
      "如果你只是轻度使用（海外 AI、查资料、偶尔视频），免费VPN完全够用；若需要分流/更多的地区选择，可升级 UmiVPN 付费套餐。",
    ],
  },
  {
    id: "how-to-choose",
    heading: "怎么选免费VPN / 免费梯子？",
    body: [
      "先看设备：电脑 + 手机都要用 → 优先 UmiVPN；主要用手机且希望永久免费 → 优先努努加速器。",
      "再看流量：轻度（AI、搜索、网页）→ UmiVPN 免费 3GB 通常够用，且常用 AI 站点免计量；手机端不限流量 → 努努加速器。",
      "再看安全：优先选有官网、隐私政策、应用商店上架、可核对主体信息的产品。避免来源不明的安装包。",
      "最后看场景：需要分流 / 指定网站代理 → UmiVPN；只想一键加速被墙站点 → 努努加速器更简单。",
    ],
  },
  {
    id: "platforms",
    heading: "Windows / Mac / iPhone / Android 怎么下？",
    body: [
      "UmiVPN：前往官网 [umivpn.com](https://www.umivpn.com) 按系统下载，或从对应应用商店搜索 UmiVPN。安装后登录，选择节点一键连接即可用于科学上网与海外 AI。",
      "努努加速器：仅支持手机。在 App Store 或 Google Play 搜索「努努加速器」，或打开 [nunu.monster](https://www.nunu.monster) 按指引下载。适合 iOS / Android 用户找手机永久免费VPN。",
      "下载建议：尽量走官网或应用商店，不要使用来源不明的第三方「破解版 / 高速版」安装包。",
    ],
  },
  {
    id: "safety",
    heading: "免费VPN安全吗？",
    body: [
      "本站推荐的两款产品都有正规官网与可核对的运营主体 / 联系方式，隐私政策写清记什么、不记什么，且均上架各大应用商店，受商店审核与监管。",
      "两者均采用开源核心相关技术路线（VX 内核），便于技术用户自行核对。使用任何网络工具都请遵守当地法律法规，本站内容仅供参考。",
    ],
  },
  {
    id: "limits",
    heading: "推荐的VPN的不足之处",
    body: [
      "流量或时长限制：UmiVPN 免费档每月 3GB（AI 站点免计量除外）；努努加速器单次连接有时长，可通过广告延长。",
      "平台覆盖：努努加速器不做桌面端；需要 Windows / macOS 请用 UmiVPN。",
    ],
  },
];

const FREE_VPN_FAQS: Article["faqs"] = [
  {
    q: "2026年哪个免费VPN比较稳、中国能用？",
    a: "没有永远「永远第一」的免费VPN。本站推荐面向中国网络优化的 UmiVPN（全平台）与努努加速器（手机永久免费），并以应用商店可下、可核对官网为底线。稳不稳以你本机实测为准。",
  },
  {
    q: "免费VPN和免费梯子、翻墙软件是一回事吗？",
    a: "日常口语里常混用。用户搜「免费VPN」「免费梯子」「翻墙软件下载」时，通常都是想找能在中国网络环境下访问海外网站 / AI 的工具。本站两款产品都按这个需求推荐。",
  },
  {
    q: "免费VPN能用来看 YouTube、用 ChatGPT 吗？",
    a: "可以。UmiVPN 对 ChatGPT、Gemini、Claude 等常用 AI 站点免计量，不占用免费 3GB；查资料与轻度上网也够用。手机端不限流量可用努努加速器。高清长时间看视频更容易耗尽非 AI 流量，这时可考虑 UmiVPN 付费不限量套餐。",
  },
  {
    q: "为什么有些免费VPN可以永久免费？",
    a: "常见模式包括：广告变现（如努努加速器）、免费档引流付费（如 UmiVPN 免费 3GB）、公益项目等。需要警惕的是来路不明、强制索权、无隐私政策的「永久免费」。",
  },
  {
    q: "本站和 UmiVPN、努努是什么关系？",
    a: "本站由相关产品方运营，专门推荐 UmiVPN 与 努努加速器，并在关于页披露利益关系。我们不会夸大宣传，也不假装「中立测评几十个品牌」。",
  },
];

export const FREE_VPN_ARTICLE: Article = {
  slug: "免费vpn推荐",
  path: "/免费vpn推荐",
  title: `免费VPN推荐 ${YEAR}｜中国能用的免费VPN / 免费梯子下载`,
  description: `【${UPDATED_AT_LABEL}更新】免费VPN推荐：UmiVPN 全平台免费VPN，努努加速器手机永久免费。中国可用、应用商店可下，适合科学上网与海外 AI。`,
  keywords: [
    "免费VPN",
    "免费vpn",
    "免费vpn推荐",
    "免费梯子",
    "免费VPN下载",
    "中国可用VPN",
    "手机永久免费VPN",
    "科学上网",
    "翻墙软件",
    "UmiVPN",
    "努努加速器",
  ],
  h1: `免费VPN推荐 ${YEAR}：中国能用的免费VPN / 免费梯子`,
  breadcrumb: "免费VPN推荐",
  productsHeading: "本站推荐的两款免费VPN",
  summary:
    "电脑优先 UmiVPN，手机永久免费优先努努加速器。",
  updatedLabel: UPDATED_AT_LABEL,
  updatedIso: UPDATED_AT,
  intro: [
    `本站只推荐两款我们自己维护的免费VPN：[UmiVPN](https://www.umivpn.com)（Windows / macOS / iOS / Android）与 [努努加速器](https://www.nunu.monster)（手机永久免费）。`,
    "适合访问海外 AI、查资料、轻度上网。下面按设备、流量和安全说明怎么选，并给出下载入口。",
  ],
  sections: [
    SHARED_GUIDE_SECTIONS[0],
    ...PRODUCT_SECTIONS,
    SHARED_GUIDE_SECTIONS[1],
    SHARED_GUIDE_SECTIONS[2],
    SHARED_GUIDE_SECTIONS[3],
    SHARED_GUIDE_SECTIONS[4],
  ],
  faqs: FREE_VPN_FAQS,
  related: [
    { href: "/中国可用vpn", label: "中国可用VPN排行" },
    { href: "/梯子推荐", label: "梯子推荐" },
    { href: "/about", label: "关于本站 / 披露" },
  ],
};

export const LADDER_ARTICLE: Article = {
  slug: "梯子推荐",
  path: "/梯子推荐",
  title: `梯子推荐 ${YEAR}｜中国可用翻墙软件 / 免费梯子下载`,
  description: `【${UPDATED_AT_LABEL}更新】梯子推荐与翻墙软件下载：UmiVPN、努努加速器。中国可用免费梯子，支持电脑与手机，适合科学上网。`,
  keywords: [
    "梯子推荐",
    "梯子",
    "免费梯子",
    "翻墙软件",
    "翻墙软件下载",
    "中国可用",
    "免费VPN",
    "科学上网",
    "UmiVPN",
    "努努加速器",
  ],
  h1: `梯子推荐 ${YEAR}：中国可用翻墙软件 / 免费梯子`,
  breadcrumb: "梯子推荐",
  productsHeading: "本站推荐的两款梯子 / 翻墙软件",
  summary:
    "需要电脑用 UmiVPN，手机永久免费用努努加速器。",
  updatedLabel: UPDATED_AT_LABEL,
  updatedIso: UPDATED_AT,
  intro: [
    `想找能用的梯子 / 翻墙软件？本站推荐两款我们自己维护的产品：[UmiVPN](https://www.umivpn.com)（电脑和手机都有）与 [努努加速器](https://www.nunu.monster)（手机永久免费）。`,
    "下面说明怎么按设备选择、从哪里下载，以及免费方案各自的限制。",
  ],
  sections: [
    {
      id: "ladder-vs-vpn",
      heading: "梯子、VPN、翻墙软件有什么区别？",
      body: [
        "口语里三者经常混用。技术上 VPN 是一类加密隧道工具；「梯子」「翻墙软件」更多是中文用户对科学上网工具的统称，可能包含 VPN、代理客户端等形态。",
        "选购时不必纠结名词：看能不能连、安不安全、适不适合你的设备。本页推荐的 UmiVPN 与努努加速器，就是面向中国网络环境的可用方案。",
      ],
    },
    ...PRODUCT_SECTIONS,
    SHARED_GUIDE_SECTIONS[1],
    SHARED_GUIDE_SECTIONS[2],
    SHARED_GUIDE_SECTIONS[3],
  ],
  faqs: [
    {
      q: "2026年哪个梯子比较稳？",
      a: "稳不稳用过才知道。本站推荐的产品有自动化机制维护节点可用性；请按设备选择 UmiVPN 或努努加速器，并以官网/应用商店下载为准。",
    },
    {
      q: "梯子和 VPN、翻墙软件是一回事吗？",
      a: "日常口语里常混用。本页推荐的 UmiVPN 与努努加速器，就是面向中国网络环境的可用方案，可按设备下载使用。",
    },
    FREE_VPN_FAQS[2],
    FREE_VPN_FAQS[4],
  ],
  related: [
    { href: "/免费vpn推荐", label: "免费VPN推荐" },
    { href: "/中国可用vpn", label: "中国可用VPN排行" },
    { href: "/about", label: "关于本站 / 披露" },
  ],
};

/** Targets Bing China queries like「VPN」「中国可用VPN」「VPN排行」. */
export const CHINA_VPN_ARTICLE: Article = {
  slug: "中国可用vpn",
  path: "/中国可用vpn",
  title: `中国可用VPN排行 ${YEAR}｜${UPDATED_AT_LABEL}实测推荐`,
  description: `【${UPDATED_AT_LABEL}更新】中国可用VPN排行：按设备与预算推荐 UmiVPN、努努加速器。适合搜 VPN、中国VPN、科学上网的用户快速选型。`,
  keywords: [
    "VPN",
    "中国可用VPN",
    "中国VPN",
    "VPN排行",
    "VPN推荐",
    "科学上网",
    "免费VPN",
    "UmiVPN",
    "努努加速器",
  ],
  h1: `中国可用VPN排行 ${YEAR}：按设备与预算选`,
  breadcrumb: "中国可用VPN",
  productsHeading: "本站中国可用VPN推荐（仅收录两款）",
  summary:
    "电脑优先 UmiVPN，手机永久免费优先努努加速器。",
  updatedLabel: UPDATED_AT_LABEL,
  updatedIso: UPDATED_AT,
  intro: [
    `很多「全球最佳VPN」榜单里的产品，在中国往往连不上、不好下载，或不好付款。`,
    `本站不测评几十个品牌，只推荐我们维护、面向中国网络优化的两款：[UmiVPN](https://www.umivpn.com) 与 [努努加速器](https://www.nunu.monster)，并说明各自适合谁。`,
  ],
  sections: [
    {
      id: "ranking-logic",
      heading: "这份VPN排行先看什么？",
      body: [
        "对中国用户，排名数字不如这四件事：能不能下载、能不能连上、设备是否覆盖、有没有正规渠道与隐私说明。",
        "本站排序逻辑：全平台主力 → UmiVPN；手机永久免费 → 努努加速器。",
      ],
    },
    {
      id: "by-scenario",
      heading: "按场景选VPN（比死磕第一名有用）",
      body: [
        "长期电脑 + 手机都用：优先 UmiVPN，免费档试用，不够再升级不限量。",
        "主要用手机、预算为 0：优先努努加速器（广告维持免费）。",
        "海外 AI / 查资料轻度使用：两款都可以；电脑端使用 UmiVPN（常用 AI 站点免计量）。",
        "需要自定义分流、指定站点走代理：选 UmiVPN。",
        "只想一键加速被墙网站、无需全局代理：选努努加速器。",
      ],
    },
    ...PRODUCT_SECTIONS,
    {
      id: "paid-note",
      heading: "要不要直接买付费VPN？",
      body: [
        "如果你每天重度流媒体、需要不断线，付费往往更省心。UmiVPN 付费套餐不限流量，月付约 14 元、年付约 104 元。",
        "若你只是偶尔用、或主要用手机，先从免费方案开始更合理。",
      ],
    },
    SHARED_GUIDE_SECTIONS[2],
    SHARED_GUIDE_SECTIONS[3],
  ],
  faqs: [
    {
      q: "中国用VPN合法吗？",
      a: "请遵守你所在地的法律法规合理使用网络工具。本站仅提供产品信息与选型参考，不鼓励任何违法用途。",
    },
    {
      q: "为什么很多「最佳VPN」在中国没用？",
      a: "海外评测多基于海外网络；中国网络环境与付款、下载渠道不同。本站只推荐我们实际维护、面向该环境优化的产品。",
    },
    {
      q: "VPN和免费VPN怎么选？",
      a: "先确认设备与预算。免费够用就从 UmiVPN 免费档或努努加速器开始；不够再升级。",
    },
    FREE_VPN_FAQS[4],
  ],
  related: [
    { href: "/免费vpn推荐", label: "免费VPN推荐" },
    { href: "/梯子推荐", label: "梯子推荐" },
    { href: "/about", label: "关于本站 / 披露" },
  ],
};

export const ARTICLES: Article[] = [
  FREE_VPN_ARTICLE,
  LADDER_ARTICLE,
  CHINA_VPN_ARTICLE,
];

export function getArticleByPath(path: string): Article | undefined {
  return ARTICLES.find(
    (a) => a.path === path || a.slug === path.replace(/^\//, ""),
  );
}
