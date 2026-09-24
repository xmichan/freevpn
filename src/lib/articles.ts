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
  /** Which product cards to show; defaults to all PRODUCTS. */
  productIds?: Array<"umivpn" | "nunu">;
  /** Show UmiVPN vs 努努 comparison table; defaults to true when 2+ products. */
  showCompare?: boolean;
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
      "UmiVPN：前往官网 [umivpn.com](https://www.umivpn.com) 按系统下载，或从对应应用商店搜索 UmiVPN。安装后登录，选择节点一键连接即可用于翻墙与海外 AI。",
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
  {
    id: "permanent-free",
    heading: "「永久免费」是真的吗？",
    body: [
      "永久免费的档位确实存在——例如努努加速器公开以广告维持 ¥0 不限流量；UmiVPN 则长期提供免费 3GB 档作为试用入口。但「永久免费又不限量、又无广告、又完全不靠付费用户」的小众软件，成本从哪来往往说不清。",
      "判断方法很简单：这家有没有说清商业模式？有付费升级或广告变现的，免费档通常是获客或补贴；完全说不清却要你装不明安装包的，风险更高。",
      "免费额度适合应急与轻度使用；每天重度流媒体，升级付费往往比反复换免费额度更省时间。",
    ],
  },
  {
    id: "traffic-math",
    heading: "免费额度够不够用？算一笔账",
    body: [
      "网页浏览、收发邮件、查资料：每小时大约几十 MB 量级，UmiVPN 免费 3GB 对轻度用户通常能撑较久；且 ChatGPT / Gemini / Claude 等常用 AI 站点免计量，不占这 3GB。",
      "社交刷图文：消耗高于纯网页，但仍可能以小时计用完数 GB。",
      "1080p 视频大约每小时吃 2–3GB——也就是说，靠免费档「天天看高清」并不现实。手机端若主要是访问被限制站点、接受广告，努努加速器的不限流量更对口。",
      "结论：免费VPN是应急与轻度工具；长期重度使用，看 [中国可用VPN排行](/中国可用vpn) 里的付费档说明更合适。",
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
  description: `【${UPDATED_AT_LABEL}更新】免费VPN推荐：UmiVPN 全平台免费VPN，努努加速器手机永久免费。中国可用、应用商店可下，适合翻墙与海外 AI。`,
  keywords: [
    "免费VPN",
    "免费vpn",
    "免费vpn推荐",
    "免费梯子",
    "免费VPN下载",
    "中国可用VPN",
    "手机永久免费VPN",
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
    SHARED_GUIDE_SECTIONS[5],
    SHARED_GUIDE_SECTIONS[6],
    SHARED_GUIDE_SECTIONS[3],
    SHARED_GUIDE_SECTIONS[4],
  ],
  faqs: FREE_VPN_FAQS,
  related: [
    { href: "/中国可用vpn", label: "中国可用VPN排行" },
    { href: "/梯子推荐", label: "梯子推荐" },
    { href: "/恶意VPN的危害", label: "Windows恶意VPN风险" },
    { href: "/安卓恶意VPN的危害", label: "安卓恶意VPN风险" },
    { href: "/翻墙指南", label: "翻墙指南" },
    { href: "/vpn下载", label: "VPN下载教程" },
    { href: "/about", label: "关于本站 / 披露" },
  ],
};

export const LADDER_ARTICLE: Article = {
  slug: "梯子推荐",
  path: "/梯子推荐",
  title: `梯子推荐 ${YEAR}｜中国可用翻墙软件 / 免费梯子下载`,
  description: `【${UPDATED_AT_LABEL}更新】梯子推荐与翻墙软件下载：UmiVPN、努努加速器。中国可用免费梯子，支持电脑与手机，适合翻墙。`,
  keywords: [
    "梯子推荐",
    "梯子",
    "免费梯子",
    "翻墙软件",
    "翻墙软件下载",
    "中国可用",
    "免费VPN",
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
        "口语里三者经常混用。技术上 VPN 是一类加密隧道工具；「梯子」「翻墙软件」更多是中文用户对翻墙工具的统称，可能包含 VPN、代理客户端等形态。",
        "选购时不必纠结名词：看能不能连、安不安全、适不适合你的设备。本页推荐的 UmiVPN 与努努加速器，就是面向中国网络环境的可用方案。",
        "若还在纠结「机场」和 VPN 谁更好，先读 [机场和VPN的区别](/机场和vpn的区别)；完全新手建议先看 [翻墙指南](/翻墙指南)。",
      ],
    },
    {
      id: "good-ladder",
      heading: "好梯子的几条硬标准",
      body: [
        "能在你的网络环境下连上——空谈国际服务器数量没有意义。",
        "下载渠道可核对：官网或应用商店，而不是网盘破解包。",
        "商业模式说得清：广告、免费档引流付费等都可以，关键是别装「永久免费无限速却完全不透明」的来路不明软件。",
        "设备覆盖符合你的需求：电脑用 UmiVPN；手机永久免费用努努加速器。",
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
    {
      q: "免费梯子能长期用吗？",
      a: "可以轻度长期用，但要接受流量或广告限制。重度使用更建议 UmiVPN 付费档。详见免费VPN推荐页的额度说明。",
    },
    FREE_VPN_FAQS[2],
    FREE_VPN_FAQS[4],
  ],
  related: [
    { href: "/免费vpn推荐", label: "免费VPN推荐" },
    { href: "/中国可用vpn", label: "中国可用VPN排行" },
    { href: "/翻墙指南", label: "翻墙指南" },
    { href: "/vpn下载", label: "VPN下载教程" },
    { href: "/机场和vpn的区别", label: "机场和VPN的区别" },
    { href: "/about", label: "关于本站 / 披露" },
  ],
};

/** Targets Bing China queries like「VPN」「中国可用VPN」「VPN排行」. */
export const CHINA_VPN_ARTICLE: Article = {
  slug: "中国可用vpn",
  path: "/中国可用vpn",
  title: `中国可用VPN排行 ${YEAR}｜${UPDATED_AT_LABEL}实测推荐`,
  description: `【${UPDATED_AT_LABEL}更新】中国可用VPN排行：按设备与预算推荐 UmiVPN、努努加速器。适合搜 VPN、中国VPN、翻墙的用户快速选型。`,
  keywords: [
    "VPN",
    "中国可用VPN",
    "中国VPN",
    "VPN排行",
    "VPN推荐",
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
    { href: "/翻墙指南", label: "翻墙指南" },
    { href: "/电脑vpn", label: "电脑 Windows VPN" },
    { href: "/恶意VPN的危害", label: "Windows恶意VPN风险" },
    { href: "/安卓恶意VPN的危害", label: "安卓恶意VPN风险" },
    { href: "/about", label: "关于本站 / 披露" },
  ],
};

/** Windows malware VPN risk education + UmiVPN recommendation. */
export const MALWARE_VPN_ARTICLE: Article = {
  slug: "恶意VPN的危害",
  path: "/恶意VPN的危害",
  title: `Windows恶意VPN风险与危害 ${YEAR}｜如何挑选Windows VPN`,
  description: `【${UPDATED_AT_LABEL}更新】Windows 上多数 VPN 需要管理员权限。说明流氓 / 来路不明 VPN 可能造成的危害，并推荐应用商店上架、经审核的 UmiVPN。`,
  keywords: [
    "恶意VPN",
    "不安全VPN",
    "Windows VPN",
    "VPN管理员权限",
    "假VPN",
    "山寨VPN",
    "VPN木马",
    "安全VPN",
    "UmiVPN",
    "VX代理客户端",
  ],
  h1: `Windows恶意VPN风险：管理员权限下可能造成多大危害？`,
  breadcrumb: "恶意VPN风险",
  productsHeading: "更稳妥的选择：应用商店上架的 UmiVPN",
  productIds: ["umivpn"],
  showCompare: false,
  summary:
    "由应用商店审核上架，适合不想在 Windows 上安装来路不明 VPN 的用户。",
  updatedLabel: UPDATED_AT_LABEL,
  updatedIso: UPDATED_AT,
  intro: [
    "在 Windows 上安装 VPN，系统几乎总会弹出「需要管理员权限」的提示。这不是软件故意刁难你：要创建虚拟网卡、改路由、接管系统流量，本来就需要较高权限。",
    "问题在于：一旦你点了「是」，这款软件就拥有了接近系统管理员的能力。正规 VPN 用它来建立加密隧道；流氓或来路不明的「VPN / 加速器」也可以用同样的权限，对电脑造成远超「连不上网」的损害。",
    `因此，选 Windows VPN 时，渠道往往比功能更重要。本站推荐应用商店可下、经商店审核的 [UmiVPN](https://www.umivpn.com)：由开发 [VX代理客户端](https://vx.5vnetwork.com) 的同一团队出品——VX代理客户端 是首款对标 V2rayN、Clash、Shadowrocket 的全平台完全开源代理客户端。`,
  ],
  sections: [
    {
      id: "why-admin",
      heading: "为什么 Windows VPN 几乎都要管理员权限？",
      body: [
        "常见 VPN 客户端会安装或启用虚拟网卡（TAP / TUN）、写入路由表、配置系统代理或网络扩展。这些操作属于系统级网络改动，Windows 默认要求提升权限（UAC）。",
        "对用户来说，这意味着：你不是在装一个普通聊天软件，而是在授权一个能深度改动本机网络栈的程序。权限越大，流氓软件的危害也越大。",
      ],
    },
    {
      id: "silent-read",
      heading: "即使不点「管理员」，普通程序也能偷看你的文件",
      body: [
        "很多人以为：只要没点 UAC 的「是」，软件就碰不到「下载」「文档」这些文件夹。在 Windows 上通常不是这样。",
        "经典 Win32 桌面程序（随意下载的 .exe）默认以「当前用户」身份运行。你的「下载」「文档」「桌面」「图片」等个人文件夹，对你自己是可读写的——因此对以你身份运行的程序，也往往可以直接列出、读取里面的文件。",
        "系统一般不会像手机那样弹出「是否允许访问下载文件夹？」；正常读文件也不会主动提醒你。用户往往毫无察觉。",
        "所以：就算某个「VPN」暂时没要管理员权限，只要你已经运行了它，它仍可能静默翻看下载目录里的安装包、证件扫描件、聊天导出、工作文档等。要了管理员之后，还能进一步改系统、装后门、关杀软——危害会再上一个台阶。",
      ],
    },
    {
      id: "damage",
      heading: "流氓 VPN 拿到管理员权限后，可能做什么？",
      body: [
        "它几乎可以做一切事情，下面是一些例子。",
        "窃取账号与财产相关数据：读取浏览器已保存密码、Cookie、聊天与支付相关本地数据；配合剪贴板监控，还可能盯上加密货币地址或验证码。即使用户文件夹本就可被普通程序读取，有了管理员后，还能更容易绕过部分防护、触及更广的系统与其他账户数据。",
        "持久化后门：用管理员权限写入启动项、计划任务、服务或驱动级组件，让木马在你卸载「VPN」之后仍能悄悄运行。",
        "劫持与窃听流量：以 VPN 之名接管全部或关键流量，做中间人窃听、注入广告、跳转到钓鱼页，或把 DNS 改到攻击者控制的服务器。",
        "挖矿与勒索：占用 CPU / GPU 挖矿导致发热卡顿；或加密个人文件勒索赎金。管理员权限让这类行为更容易绕过普通用户防护。",
        "破坏系统与隐私：关闭或篡改安全软件、篡改 hosts、收集摄像头 / 麦克风权限相关配置、批量上传文档与截图。对办公电脑而言，还可能波及公司内网凭证。",
        "一句话：你以为只是「翻墙」，对方拿到的却是「整台 Windows 的钥匙」。",
      ],
    },
    {
      id: "how-bad-spreads",
      heading: "这些「坏 VPN」通常从哪里来？",
      body: [
        "由搜索引擎搜索到：搜索引擎上搜到的不一定就是正规产品，因为搜索引擎并不会审核网站里的内容是否真实可靠，只有在有受害者反馈时，搜索引擎才会下架这些网站。",
        "山寨官网：仿冒知名品牌下载页，安装包被二次打包。",
        "网盘 / 群组 /「破解版」「高速版」「免费用」分享：宣称永久免费、无限速。",
        "来路不明的绿色版 / 免安装包：跳过商店与签名校验，用户更难核对发布者身份。",
        "共同特征往往是：没有可核对的正式官网与隐私政策、无法在 Microsoft Store 等正规渠道搜到同名产品、不知道谁开发的。",
      ],
    },
    {
      id: "how-to-choose",
      heading: "Windows 上怎样降低中招概率？",
      body: [
        "选择知名VPN，尽管这在中国很难做到，因为知名VPN通常无法在中国正常使用",
        "优先走应用商店或厂商官网：商店上架通常经过身份与基础安全审核，流氓软件大规模分发成本更高；官网域名应可交叉验证（官网 ↔ 商店开发者主体）。",
        "不要为了「免费高速」关闭杀软、忽略证书警告，或按陌生教程一键「关闭 Windows Defender」。",
        "安装前看发布者、版本更新记录与用户评价；安装后若出现莫名开机启动项、异常外连、风扇狂转，应立即断网排查。",
        "需要翻墙时，选可说明技术路线、有客服与披露信息的产品，而不是来路不明的「神器」。",
        "优先选「沙盒版」商店应用，而不是随便一个 .exe：沙盒（App Container / MSIX 打包）里的应用默认进不了你的「下载」「文档」等个人文件夹，除非你主动用系统文件选择器授权，或对方申请了很宽的能力——这和普通 Win32 安装包「一运行就能翻你磁盘」差别很大。",
        "怎么判断是不是沙盒版：① 从 [Microsoft Store](https://apps.microsoft.com) 安装，且页面/名称写明 MSIX、UWP 或「商店应用」，而不是「Win32 / EXE 安装包」；② 安装后打开「设置 → 应用 → 已安装的应用」，该应用的来源显示为 Microsoft Store，且通常没有传统的 Setup.exe 解压到任意目录；③ 真正的沙盒应用一般装在系统的 WindowsApps 包目录下，不能像绿色软件那样拷来拷去随便跑。注意：微软商店里也可能上架「完整信任」的 Win32/EXE 版，那种权限更接近普通桌面软件，不能当作沙盒。",
        `[UmiVPN](https://www.umivpn.com) 提供 Microsoft Store 的沙盒版（[商店版 MSIX](https://apps.microsoft.com/detail/9N9HJP6DB31L)）：走商店分发与审核，并受 MSIX 沙盒隔离，比网盘里的来路不明 exe 更难静默读取你的下载文件夹。`,
      ],
    },
    {
      id: "umivpn",
      heading: "为什么推荐 UmiVPN？",
      body: [
        `[UmiVPN](https://www.umivpn.com) 上架各大应用商店，安装包与更新走商店分发与审核流程，比随意下载的 exe 更可核对。Windows 用户若特别担心个人文件被静默读取，可安装 [Microsoft Store 商店版（MSIX）](https://apps.microsoft.com/detail/9N9HJP6DB31L)，该版本在沙盒中运行。`,
        "由开发完全开源免费的 [VX代理客户端](https://vx.5vnetwork.com) 的同一团队打造。VX 是首款功能上可对标 V2rayN、Clash、Shadowrocket 的全平台完全开源代理客户端；UmiVPN 采用独家开源 [VX内核](https://github.com/5VNetwork/vx-core)，技术路线可公开核查。",
        "支持 Windows / macOS / iOS / Android；免费套餐每月 3GB（ChatGPT、Gemini、Claude 等常用 AI 站点免计量）；有无日志政策与正规客服渠道。适合既要 Windows 可用、又不想赌来路不明安装包的用户。",
        "下载建议：打开 [umivpn.com](https://www.umivpn.com) 按系统选择，或在对应应用商店搜索 UmiVPN，避免第三方「镜像站」。",
      ],
    },
  ],
  faqs: [
    {
      q: "Windows VPN 一定要管理员权限吗？",
      a: "多数需要创建虚拟网卡或改系统路由的客户端都会触发 UAC。这本身不等于木马，但说明该程序权限很高，下载渠道必须可信。",
    },
    {
      q: "没点管理员权限，软件还能读我的「下载」文件夹吗？",
      a: "普通 Win32 / EXE 程序通常可以：以当前用户身份运行，默认可访问下载、文档、桌面等，且一般不弹「是否允许访问」。沙盒版（如 Microsoft Store 的 MSIX）默认不能随便翻这些文件夹。UmiVPN 提供商店 MSIX 沙盒版；不点管理员也不等于 EXE 版就不能读你的文件。",
    },
    {
      q: "怎么确认装的是沙盒版而不是普通 exe？",
      a: "看是否从 Microsoft Store 安装且标明 MSIX / 商店应用；在「设置 → 应用」里来源为 Microsoft Store。商店里的 Win32/EXE 版通常不是完整沙盒。UmiVPN 的沙盒版是 Microsoft Store 的 MSIX 列表（商店页可搜 UmiVPN 或打开官网下载区的「商店版 MSIX」链接）。",
    },
    {
      q: "应用商店上的 VPN 就一定安全吗？",
      a: "商店审核不能保证零风险，但能显著提高流氓软件分发门槛，并便于核对开发者主体与版本更新。若再选 MSIX 沙盒版，还能限制对个人文件夹的默认访问。仍远优于来路不明的网盘安装包。",
    },
    {
      q: "UmiVPN 和 VX代理客户端是什么关系？",
      a: "同一团队开发。VX 是对标 V2rayN / Clash / Shadowrocket 的全平台完全开源代理客户端；UmiVPN 面向普通用户提供可商店下载的 VPN 产品，并采用开源 VX 内核。",
    },
    {
      q: "已经装了来路不明的 VPN 怎么办？",
      a: "先断网，在「应用和功能」中卸载，并检查启动项、计划任务与浏览器扩展；用系统或第三方安全软件全盘扫描。若涉及网银 / 邮箱密码，应在干净设备上修改密码并开启二次验证。",
    },
    {
      q: "本站为什么推荐 UmiVPN？",
      a: "本站由相关产品方运营，只推荐我们维护的产品，并在关于页披露。针对 Windows 流氓 VPN 风险，我们强调商店渠道与可核对的开源技术路线。",
    },
  ],
  related: [
    { href: "/免费vpn推荐", label: "免费VPN推荐" },
    { href: "/中国可用vpn", label: "中国可用VPN排行" },
    { href: "/梯子推荐", label: "梯子推荐" },
    { href: "/电脑vpn", label: "电脑 Windows VPN" },
    { href: "/安卓恶意VPN的危害", label: "安卓恶意VPN风险" },
    { href: "/about", label: "关于本站 / 披露" },
  ],
};

/** Android malware VPN risk education + UmiVPN / Nunu recommendation. */
export const ANDROID_MALWARE_VPN_ARTICLE: Article = {
  slug: "安卓恶意VPN的危害",
  path: "/安卓恶意VPN的危害",
  title: `安卓恶意VPN风险与危害 ${YEAR}｜如何挑选 Android VPN`,
  description: `【${UPDATED_AT_LABEL}更新】安卓流氓 VPN 为何比普通流氓 App 更危险：VpnService 可成为流量中间层。说明危害、挑选清单，并推荐 Google Play 可下的 UmiVPN 与努努加速器。`,
  keywords: [
    "安卓VPN",
    "Android VPN",
    "恶意VPN",
    "不安全VPN",
    "VpnService",
    "假VPN",
    "山寨VPN",
    "手机VPN安全",
    "Google Play VPN",
    "UmiVPN",
    "努努加速器",
  ],
  h1: `安卓恶意VPN为何更值得警惕？以及怎么挑`,
  breadcrumb: "安卓恶意VPN风险",
  productsHeading: "本站推荐：Google Play 可下的 UmiVPN 与努努加速器",
  summary:
    "优先从 Google Play 安装。需要分流 / 电脑同步用 UmiVPN；只要手机永久免费用努努加速器。",
  updatedLabel: UPDATED_AT_LABEL,
  updatedIso: UPDATED_AT,
  intro: [
    "Android 上的流氓 VPN 往往比普通流氓 App 更值得警惕。核心原因是：一旦获得系统的 [VpnService](https://developer.android.com/reference/android/net/VpnService) 权限，它就可以成为设备网络流量的中间层。Android 官方文档也指出，允许 App 拦截网络数据包本身存在很大的安全风险。",
    "可以把它理解成：你原本是「手机 → 网站」；安装并连接 VPN 后变成「手机 → VPN App → VPN 服务器 → 网站」。你实际上把一部分网络信任，从运营商 / Wi-Fi 转移给了 VPN 提供商。[美国联邦贸易委员会（FTC）](https://www.ftc.gov/business-guidance/blog/2018/02/market-vpn-app) 也提醒：VPN 并不会让用户「完全匿名」，而是把信任关系转移到了 VPN 服务商。",
    `选安卓 VPN 时，下载渠道、权限与隐私披露往往比「节点多少、评分高低」更重要。本站推荐均可在 Google Play 下载的 [UmiVPN](https://www.umivpn.com) 与 [努努加速器](https://www.nunu.monster)。`,
  ],
  sections: [
    {
      id: "damage",
      heading: "流氓 VPN 可能造成什么危害？",
      body: [
        "收集网络浏览元数据：访问了哪些域名、何时访问、DNS 查询、IP 地址、流量大小、哪些 App 在联网，甚至拼出较完整的上网行为画像。",
        "窃取未正确加密的流量：若某些连接本身没有 HTTPS / TLS，流氓 VPN 服务器理论上可以看到甚至修改通信内容。即使网站使用 HTTPS，VPN 通常仍可能看到目标 IP、DNS / 域名相关信息（取决于 DNS、DoH 与协议）、连接时间与流量特征。FTC 也提醒：并非所有自称 VPN 的 App 都真正正确加密流量。",
        "广告与流量劫持：例如修改 DNS、重定向网站、注入广告、把流量导向自己的服务器、操纵部分 HTTP 流量。[Google Play 的 VpnService 政策](https://support.google.com/googleplay/android-developer/answer/12564964?hl=zh-Hans)明确禁止 VPN 为变现目的重定向或操纵其他 App 的流量。",
        "顺带收集其他敏感信息：若 VPN 还要求通讯录、短信、文件、精确位置、已安装应用列表、照片、麦克风等，就要非常警惕。一个正常的 VPN 通常不需要通讯录、短信、照片这类权限。",
        "把你的设备变成代理节点：更恶劣的实现可能把用户设备或 IP 用作代理出口、爬虫、广告流量、垃圾邮件或欺诈流量。表面上只是「VPN 正在运行」，实际上出口可能被别人利用。",
        "服务商侧记录：即使 App 本身没有流氓代码，VPN 服务商也可能记录「账号 → IP → 时间 → 目标服务器 → 流量」。「加密了我的流量」并不等于「提供商看不到元数据或明文路径上的信息」。",
      ],
    },
    {
      id: "https-vs-vpn",
      heading: "容易被忽略：HTTPS 和 VPN 是两层不同的安全",
      body: [
        "例如打开 https://example.com：即使中间是流氓 VPN，HTTPS 仍会保护网页内容本身；但 VPN 往往仍能知道你在连接 example.com（具体可见程度取决于 DNS、协议和配置），并决定你的网络出口。",
        "因此现代互联网里，更常见的风险往往不是「VPN 直接看到所有密码」，而是：VPN 拿到大量网络元数据 + 能决定出口 + 能看到没有端到端加密保护的通信。这已足够构成很大的隐私风险。",
      ],
    },
    {
      id: "how-to-choose",
      heading: "安卓 VPN 应该怎么挑？（按顺序检查）",
      body: [
        "① 优先从 Google Play 下载。不要随便装 xxx_vpn.apk、「免费高速VPN.apk」、Telegram 群或网盘里的 APK——尤其是拥有网络拦截能力的软件。Play 对使用 VpnService 的 App 有专门政策：须把 VPN 作为核心功能、对设备到 VPN 端点的数据进行加密，并对敏感数据收集进行披露与取得同意。",
        "② 看开发者是谁。值得核对：公司名称 → 官网 → 隐私政策 → 联系方式 → 公司与 App 历史。若只是「Super Fast VPN 2026」之类名字、开发者无法验证身份，应明显提高警惕。",
        "③ 看 Data safety，而不是只看五星好评。Play 对敏感类 App 有额外安全相关机制，也曾推动 VPN 等应用的独立安全审查标识；但 Data safety 主要是「开发者向 Google 声明收集/分享什么」，不是绝对安全证明，应结合隐私政策与（若有）第三方审查一起看。",
        "④ 用权限当红旗检测器。通常合理：VpnService、网络、通知、前台服务。需解释：精确位置、读取已安装应用列表。通常不需要 / 应警惕：通讯录、短信、通话记录、照片、麦克风。非常值得警惕：无障碍（Accessibility）、设备管理员（Device Admin）。FTC 也建议仔细检查权限是否真正与 VPN 功能相关。",
        "⑤ 看有没有独立安全审计（以及审计了哪一年、审计范围是 App 还是整条服务、有无公开报告）。有审计不等于永远安全，但比完全不透明更好。",
        "⑥ 读隐私政策，重点搜 logs、browsing history、IP address、DNS、third parties、advertising、sell、share、retain。若写「可能与广告合作伙伴分享信息」，值得深究。免费 VPN 尤其要问清商业模式：服务器与带宽都要钱，用户不付钱时靠什么赚钱？FTC 指出部分免费 VPN 靠应用内广告或与第三方分享信息变现——这不等于「免费=流氓」，但模式必须说得通。努努加速器即公开以广告维持永久免费；UmiVPN 则用免费档试用、付费升级的模式。",
      ],
    },
    {
      id: "checklist",
      heading: "实用判断清单",
      body: [
        "比较令人放心（绿）：Google Play 正规上架；开发公司可验证；官网长期存在；隐私政策清楚；权限需求合理；明确日志政策；使用现代协议；有独立审计或漏洞披露渠道；开发历史较长；没有奇怪广告行为。",
        "需要进一步调查（黄）：完全免费但模式说不清；公司信息不透明；隐私政策含糊；大量第三方 SDK；额外权限很多；无安全审计；新 App / 新公司；评论大量重复或异常。",
        "建议直接避开（红）：APK 来历不明；VPN + 无障碍；VPN + 短信 / 通讯录 / 照片等明显无关权限；强制安装其他 App；强制开启设备管理员；宣称「永久免费、无限流量、完全匿名」却无法解释商业模式与日志政策；安装后乱弹广告或关 VPN 后网络仍被重定向；开发者身份无法验证。",
      ],
    },
    {
      id: "umivpn",
      heading: "推荐一：UmiVPN（全平台，适合要分流的用户）",
      body: [
        `[UmiVPN](https://www.umivpn.com) 可在 [Google Play](https://play.google.com/store/apps/details?id=com5vnetwork.umi) 下载，亦上架其他主要应用商店；安装与更新走商店审核。我们明确将 VpnService 用于建立加密隧道与分流，不索取通讯录、短信、照片等与 VPN 无关的权限。`,
        "由开发完全开源免费的 [VX代理客户端](https://vx.5vnetwork.com) 的同一团队打造；采用开源 [VX内核](https://github.com/5VNetwork/vx-core)，技术路线可公开核查。免费套餐每月 3GB（ChatGPT / Gemini / Claude 等常用 AI 站点免计量）；有无日志政策与正规客服。",
        "适合：安卓 + 电脑都要用，或需要指定网站走代理的用户。",
      ],
    },
    {
      id: "nunu",
      heading: "推荐二：努努加速器（手机永久免费）",
      body: [
        `[努努加速器](https://www.nunu.monster) 上架 [Google Play](https://play.google.com/store/apps/details?id=monster.nunu.wqeeer) 与 App Store。¥0 永久免费、不限流量，商业模式公开为广告维持运营——对应上文「免费要说清靠什么赚钱」。`,
        "它不是把所有流量乱代理一遍，而侧重加速无法访问的站点，符合多数手机轻度需求。每次连接有时长，可通过广告延长。",
        "适合：主要用手机、预算为 0 的用户。若需要精细分流，请用 UmiVPN。",
      ],
    },
  ],
  faqs: [
    {
      q: "为什么说安卓流氓 VPN 比普通流氓 App 更危险？",
      a: "因为 VpnService 让应用成为网络流量中间层，可观察元数据、决定出口，并在未加密链路上看到或篡改内容。Android 官方也强调拦截数据包本身风险很高。",
    },
    {
      q: "用了 HTTPS，流氓 VPN 是不是就看不到任何东西？",
      a: "HTTPS 保护的是内容层；VPN 仍可能看到你连接了哪些站点（程度视 DNS/协议而定）、连接时间与流量特征，并控制出口。危险往往来自元数据与未端到端加密的通信。",
    },
    {
      q: "只能从网盘装 APK 吗？",
      a: "不建议。优先 Google Play 或官网指向的官方商店链接。侧载 APK 缺少商店审核与统一更新，假冒「破解版」风险很高。",
    },
    {
      q: "免费 VPN 一定不安全吗？",
      a: "不一定。关键是商业模式说不说得清。例如努努加速器公开靠广告维持免费；UmiVPN 用免费档试用、付费升级。要警惕的是「永久免费无限速却完全说不清靠什么赚钱、权限还很夸张」的产品。",
    },
    {
      q: "UmiVPN 和努努加速器在安卓上怎么选？",
      a: "要分流、要和电脑共用、或常用海外 AI：选 UmiVPN。只要手机、想永久免费不限流量：选努努加速器。",
    },
    {
      q: "本站和这两款产品是什么关系？",
      a: "本站由相关产品方运营，只推荐我们维护的 UmiVPN 与努努加速器，并在关于页披露利益关系。",
    },
  ],
  related: [
    { href: "/恶意VPN的危害", label: "Windows恶意VPN风险" },
    { href: "/安卓vpn", label: "安卓 VPN 推荐" },
    { href: "/免费vpn推荐", label: "免费VPN推荐" },
    { href: "/中国可用vpn", label: "中国可用VPN排行" },
    { href: "/梯子推荐", label: "梯子推荐" },
    { href: "/about", label: "关于本站 / 披露" },
  ],
};

import { GUIDE_ARTICLES } from "@/lib/guide-articles";

export { GUIDE_ARTICLES };

export const ARTICLES: Article[] = [
  FREE_VPN_ARTICLE,
  LADDER_ARTICLE,
  CHINA_VPN_ARTICLE,
  MALWARE_VPN_ARTICLE,
  ANDROID_MALWARE_VPN_ARTICLE,
  ...GUIDE_ARTICLES,
];

export function getArticleByPath(path: string): Article | undefined {
  return ARTICLES.find(
    (a) => a.path === path || a.slug === path.replace(/^\//, ""),
  );
}
