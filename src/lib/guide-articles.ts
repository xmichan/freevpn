import type { Article } from "@/lib/articles";
import { PRODUCTS } from "@/lib/products";
import { UPDATED_AT, UPDATED_AT_LABEL } from "@/lib/site";

const YEAR = 2026;

const PRODUCT_BLURBS: Article["sections"] = [
  {
    id: "umivpn",
    heading: "全平台：UmiVPN",
    body: [
      `UmiVPN 由开发开源 [VX代理客户端](https://vx.5vnetwork.com) 的团队出品，采用开源 [VX内核](https://github.com/5VNetwork/vx-core)。官网：[https://www.umivpn.com](https://www.umivpn.com)。`,
      "免费套餐每月 3GB（ChatGPT、Gemini、Claude 等常用 AI 站点免计量）；付费套餐不限流量。支持 Windows / macOS / iOS / Android，各大应用商店可下。",
    ],
  },
  {
    id: "nunu",
    heading: "手机永久免费：努努加速器",
    body: [
      `${PRODUCTS[1].tagline}。官网：[https://www.nunu.monster](https://www.nunu.monster)。`,
      "¥0 永久免费、不限流量；上架 App Store / Google Play；通过广告维持运营。适合主要用手机、想长期免费的用户。需要分流或电脑端请用 UmiVPN。",
    ],
  },
];

/** 翻墙 / 科学上网入门 — matches Bing「翻墙」「科学上网」intent. */
export const FANQIANG_GUIDE_ARTICLE: Article = {
  slug: "翻墙指南",
  path: "/翻墙指南",
  title: `翻墙指南 ${YEAR}｜科学上网入门：VPN 怎么选、怎么下`,
  description: `【${UPDATED_AT_LABEL}更新】翻墙指南与科学上网入门：先分清 VPN / 机场 / 自建，再按设备选 UmiVPN 或努努加速器。只从官网与应用商店下载。`,
  keywords: [
    "翻墙",
    "翻墙指南",
    "科学上网",
    "科学上网入门",
    "翻墙软件",
    "翻墙教程",
    "梯子",
    "VPN",
    "免费VPN",
    "UmiVPN",
    "努努加速器",
  ],
  h1: `翻墙指南 ${YEAR}：科学上网入门，先选对工具再下载`,
  breadcrumb: "翻墙指南",
  productsHeading: "入门推荐：两款面向中国网络优化的方案",
  summary: "先弄清 VPN 和机场的差别，再按电脑 / 手机选 UmiVPN 或努努加速器。",
  updatedLabel: UPDATED_AT_LABEL,
  updatedIso: UPDATED_AT,
  intro: [
    "搜「翻墙」「科学上网」「梯子」的人，真正想解决的通常是同一件事：在中国大陆网络环境下，怎样安全、稳定地访问被限制的海外网站与 AI 服务。",
    "本页不做违法用途指导，只讲选型逻辑：工具分哪几类、新手该从哪一步开始、怎么避开来路不明的安装包，以及本站维护的两款产品分别适合谁。",
  ],
  sections: [
    {
      id: "what-is",
      heading: "「翻墙」到底指什么？",
      body: [
        "口语里的「翻墙」「科学上网」「梯子」，多半不是某一种固定软件名，而是对「帮助访问受限网络资源」工具的统称。常见形态有三类：官方客户端式的 VPN、订阅制节点服务（常被叫「机场」）、以及自己搭代理。",
        "对大多数只想用海外 AI、查资料、轻度看视频的用户，装好就能用的 VPN / 加速器门槛最低。想自己配规则、按流量买节点，再考虑机场；对运维有要求的人可考虑自建——但对新手不划算。",
        "更细的对比见 [机场和VPN的区别](/机场和vpn的区别)。",
      ],
    },
    {
      id: "three-steps",
      heading: "新手三步：定设备 → 定形态 → 定渠道",
      body: [
        "第 1 步定设备：电脑 + 手机都要用 → 选全平台 VPN（本站推荐 UmiVPN）；主要用手机且预算为 0 → 选手机永久免费方案（努努加速器）。",
        "第 2 步定形态：想「装上点一下就连」选 VPN；愿意折腾客户端与订阅链接再看机场。不确定就先从 VPN 开始，成本更低、出错更少。",
        "第 3 步定渠道：只从品牌官网或应用商店下载。网盘「绿色版 / 破解版」对 VPN 尤其危险——客户端能接管系统网络，被改过的安装包等于把流量钥匙交给陌生人。分平台步骤见 [VPN下载教程](/vpn下载)。",
      ],
    },
    {
      id: "why-many-fail",
      heading: "为什么很多「全球最佳 VPN」在国内连不上？",
      body: [
        "海外评测多基于海外网络。中国网络环境对常见 VPN 协议识别更严，需要面向该环境做协议与节点维护；很多海外免费档也不提供这类能力。",
        "所以「国际榜单第一」不等于「中国能用」。本站只推荐我们实际维护、面向中国网络优化、且可在正规商店核对的产品，而不是抄一份全球品牌列表。",
      ],
    },
    ...PRODUCT_BLURBS,
    {
      id: "safety",
      heading: "入门阶段最重要的安全习惯",
      body: [
        "看这家有没有正规官网、隐私政策与可核对主体；免费产品要说清靠什么赚钱（广告、免费档引流付费等）。",
        "Windows 用户优先考虑商店 / MSIX 渠道，详见 [Windows恶意VPN风险](/恶意VPN的危害)；安卓用户优先 Google Play，详见 [安卓恶意VPN风险](/安卓恶意VPN的危害)。",
        "请遵守当地法律法规合理使用网络工具。本站内容仅供产品选型参考。",
      ],
    },
  ],
  faqs: [
    {
      q: "翻墙和 VPN 是一回事吗？",
      a: "口语里常混用。「翻墙 / 科学上网」是需求描述；VPN 是常见实现方式之一。本站推荐的 UmiVPN 与努努加速器，就是面向该需求的可用方案。",
    },
    {
      q: "完全小白应该先下哪个？",
      a: "有电脑就下 UmiVPN；只有手机且想永久免费，下努努加速器。下载请走官网或应用商店，步骤见 VPN下载教程。",
    },
    {
      q: "免费方案够不够用？",
      a: "轻度使用（海外 AI、查资料、偶尔网页）通常够用。UmiVPN 常用 AI 站点免计量；手机不限流量可用努努。重度流媒体或不限速需求，再考虑 UmiVPN 付费档。",
    },
    {
      q: "本站和推荐产品是什么关系？",
      a: "本站由相关产品方运营，只推荐 UmiVPN 与努努加速器，并在关于页披露利益关系。",
    },
  ],
  related: [
    { href: "/免费vpn推荐", label: "免费VPN推荐" },
    { href: "/梯子推荐", label: "梯子推荐" },
    { href: "/中国可用vpn", label: "中国可用VPN排行" },
    { href: "/机场和vpn的区别", label: "机场和VPN的区别" },
    { href: "/vpn下载", label: "VPN下载教程" },
    { href: "/about", label: "关于本站 / 披露" },
  ],
};

/** VPN 下载 — matches competitor「VPN下载教程」intent. */
export const VPN_DOWNLOAD_ARTICLE: Article = {
  slug: "vpn下载",
  path: "/vpn下载",
  title: `VPN下载 ${YEAR}｜UmiVPN / 努努加速器官方安装教程`,
  description: `【${UPDATED_AT_LABEL}更新】VPN下载教程：Windows / Mac / iPhone / Android 怎么从官网与应用商店安装 UmiVPN、努努加速器。避开破解版与网盘包。`,
  keywords: [
    "VPN下载",
    "VPN下载教程",
    "免费VPN下载",
    "梯子下载",
    "翻墙软件下载",
    "UmiVPN下载",
    "努努加速器下载",
    "Windows VPN",
    "苹果VPN",
    "安卓VPN",
  ],
  h1: `VPN下载 ${YEAR}：官方渠道安装，避开破解版`,
  breadcrumb: "VPN下载",
  productsHeading: "下载前先选对产品",
  summary: "只从官网与应用商店下载。电脑用 UmiVPN，手机永久免费用努努加速器。",
  updatedLabel: UPDATED_AT_LABEL,
  updatedIso: UPDATED_AT,
  intro: [
    "「VPN下载」这件事，渠道比功能更重要。VPN 客户端拥有系统级网络权限，来路不明的「绿色版 / 破解版」可能窃听流量、植入后门。",
    "本页只说明本站两款产品的官方下载路径与安装顺序，不提供任何第三方镜像包。",
  ],
  sections: [
    {
      id: "before",
      heading: "下载前必须确认的三件事",
      body: [
        "域名是否官方：UmiVPN 为 [umivpn.com](https://www.umivpn.com)；努努加速器为 [nunu.monster](https://www.nunu.monster)。不要相信搜索结果里仿冒的「高速下载站」。",
        "是否需要绑卡：正规免费档通常注册即可用。若一上来就强制要银行卡却说不清套餐，提高警惕。",
        "系统是否匹配：努努加速器仅手机；Windows / macOS 请用 UmiVPN。",
      ],
    },
    {
      id: "windows",
      heading: "Windows 电脑怎么下 UmiVPN",
      body: [
        "打开 [umivpn.com](https://www.umivpn.com)，选择 Windows 下载；或在 [Microsoft Store](https://apps.microsoft.com/detail/9N9HJP6DB31L) 搜索 UmiVPN 安装商店版（MSIX）。商店版带沙盒隔离，更难被静默读取个人文件夹。",
        "安装后登录账号，选节点一键连接。若系统弹出管理员权限提示，属于创建虚拟网卡的常见要求——前提是安装包来自官网或商店。",
        "更完整的风险说明见 [Windows恶意VPN风险](/恶意VPN的危害) 与 [电脑VPN推荐](/电脑vpn)。",
      ],
    },
    {
      id: "mac",
      heading: "Mac 怎么下 UmiVPN",
      body: [
        "官网按 macOS 下载，或从 Mac App Store 搜索 UmiVPN（以官网当前指引为准）。安装后在系统设置中按提示允许 VPN 配置。",
        "详见 [Mac VPN推荐](/mac电脑vpn)。",
      ],
    },
    {
      id: "iphone",
      heading: "iPhone / iPad 怎么下",
      body: [
        "UmiVPN：App Store 搜索 UmiVPN，或打开官网 iOS 入口。安装后允许添加 VPN 配置，登录即可连接。",
        "努努加速器：App Store 搜索「努努加速器」，或打开 [nunu.monster](https://www.nunu.monster)。适合想永久免费、不限流量的手机用户。",
        "详见 [苹果VPN推荐](/苹果vpn)。",
      ],
    },
    {
      id: "android",
      heading: "安卓怎么下",
      body: [
        "优先 Google Play：UmiVPN 与努努加速器均有正式上架页。也可从官网跳转到对应商店链接。",
        "不要安装 Telegram / 网盘里的「xxx_vpn.apk」。安卓 VpnService 可成为流量中间层，侧载假包风险很高。详见 [安卓恶意VPN风险](/安卓恶意VPN的危害) 与 [安卓VPN推荐](/安卓vpn)。",
      ],
    },
    {
      id: "after",
      heading: "装好后怎么确认能用？",
      body: [
        "登录成功 → 选一个节点连接 → 打开需要访问的海外页面或 AI 站点试一下。",
        "UmiVPN：常用 AI 站点免计量，不占用免费 3GB；完整列表见 [UmiVPN AI 免流页](https://www.umivpn.com/ai-free)。更多说明见 [海外AI免流](/海外ai)。",
        "努努：单次连接有时长，可看广告延长；它侧重加速无法访问的站点，不是全局精细分流。",
      ],
    },
  ],
  faqs: [
    {
      q: "必须翻墙才能下载 VPN 吗？",
      a: "部分应用商店在国内访问不稳定。可优先官网直链；已有一台能上网的设备时，建议提前装好。具体以官网当时提供的渠道为准。",
    },
    {
      q: "免费下载要不要付钱？",
      a: "UmiVPN 免费档与努努加速器均可先免费使用。付费是可选升级，不是下载门槛。",
    },
    {
      q: "下载了连不上怎么办？",
      a: "先确认安装包来源正确、账号已登录、网络不是访客 Wi-Fi 限制。仍不行可换节点或联系产品客服。本站不提供破解或非官方节点。",
    },
  ],
  related: [
    { href: "/翻墙指南", label: "翻墙指南" },
    { href: "/电脑vpn", label: "电脑 Windows VPN" },
    { href: "/苹果vpn", label: "苹果 VPN" },
    { href: "/安卓vpn", label: "安卓 VPN" },
    { href: "/mac电脑vpn", label: "Mac VPN" },
    { href: "/免费vpn推荐", label: "免费VPN推荐" },
  ],
};

/** Windows / 电脑 VPN. */
export const WINDOWS_VPN_ARTICLE: Article = {
  slug: "电脑vpn",
  path: "/电脑vpn",
  title: `电脑VPN推荐 ${YEAR}｜Windows 翻墙软件怎么选`,
  description: `【${UPDATED_AT_LABEL}更新】电脑VPN / Windows VPN推荐：优先 UmiVPN（官网或 Microsoft Store）。说明管理员权限、商店沙盒与免费档用法。`,
  keywords: [
    "电脑VPN",
    "Windows VPN",
    "Windows翻墙",
    "电脑翻墙软件",
    "Win10 VPN",
    "Win11 VPN",
    "UmiVPN",
    "免费VPN",
  ],
  h1: `电脑VPN推荐 ${YEAR}：Windows 上怎么选、怎么装`,
  breadcrumb: "电脑VPN",
  productsHeading: "本站电脑端推荐",
  productIds: ["umivpn"],
  showCompare: false,
  summary: "Windows / 桌面端优先 UmiVPN；商店版更有利于降低来路不明 exe 风险。",
  updatedLabel: UPDATED_AT_LABEL,
  updatedIso: UPDATED_AT,
  intro: [
    "搜「电脑VPN」「Windows翻墙软件」时，重点通常不是节点数量广告，而是：能不能装上、权限是否合理、安装包是否可信。",
    "努努加速器不做桌面端。电脑请用 [UmiVPN](https://www.umivpn.com)。",
  ],
  sections: [
    {
      id: "why-umivpn",
      heading: "为什么电脑端推荐 UmiVPN？",
      body: [
        "全平台客户端，Windows 与手机账号可共用；免费档可先试用，付费档不限流量。",
        "采用开源 VX 内核，技术路线可核对；官网与 Microsoft Store 均可下载。",
        "支持自定义分流与地区选择，适合既要科学上网、又要指定网站走代理的桌面用户。",
      ],
    },
    {
      id: "install",
      heading: "Windows 安装建议",
      body: [
        "优先：[Microsoft Store 商店版](https://apps.microsoft.com/detail/9N9HJP6DB31L)（MSIX 沙盒）或官网给出的官方安装包。",
        "安装时若出现 UAC 管理员提示，对正规 VPN 属于常见现象（虚拟网卡 / 路由）。危险的是来源不明仍要求管理员的「加速器」。",
        "完整风险教育见 [Windows恶意VPN风险](/恶意VPN的危害)。分步下载见 [VPN下载教程](/vpn下载)。",
      ],
    },
    {
      id: "usage",
      heading: "轻度够用还是该升级？",
      body: [
        "日常查资料、海外 AI：免费 3GB + AI 免计量通常够用。",
        "长时间高清视频、多设备重度使用：升级 UmiVPN 付费不限量更省心（月付约 14 元、年付约 104 元，以官网为准）。",
      ],
    },
  ],
  faqs: [
    {
      q: "电脑能用努努加速器吗？",
      a: "不能。努努仅 iOS / Android。电脑请用 UmiVPN。",
    },
    {
      q: "Win10 和 Win11 都支持吗？",
      a: "UmiVPN 提供 Windows 客户端；具体系统要求以官网下载页说明为准。",
    },
    {
      q: "一定要商店版吗？",
      a: "不是强制，但商店 MSIX 沙盒版对担心个人文件被静默读取的用户更友好。官网包请确认域名正确。",
    },
  ],
  related: [
    { href: "/vpn下载", label: "VPN下载教程" },
    { href: "/恶意VPN的危害", label: "Windows恶意VPN风险" },
    { href: "/mac电脑vpn", label: "Mac VPN" },
    { href: "/免费vpn推荐", label: "免费VPN推荐" },
    { href: "/中国可用vpn", label: "中国可用VPN排行" },
  ],
};

/** iPhone / 苹果 VPN. */
export const IPHONE_VPN_ARTICLE: Article = {
  slug: "苹果vpn",
  path: "/苹果vpn",
  title: `苹果VPN推荐 ${YEAR}｜iPhone / iPad 梯子怎么选`,
  description: `【${UPDATED_AT_LABEL}更新】苹果VPN / iPhone VPN推荐：UmiVPN 适合分流与多端；努努加速器适合手机永久免费。均走 App Store。`,
  keywords: [
    "苹果VPN",
    "iPhone VPN",
    "iPad VPN",
    "ios VPN",
    "苹果翻墙",
    "手机VPN",
    "UmiVPN",
    "努努加速器",
  ],
  h1: `苹果VPN推荐 ${YEAR}：iPhone / iPad 怎么选`,
  breadcrumb: "苹果VPN",
  productsHeading: "iOS 上的两款选择",
  summary: "要分流或多端同步选 UmiVPN；只要手机永久免费用努努加速器。",
  updatedLabel: UPDATED_AT_LABEL,
  updatedIso: UPDATED_AT,
  intro: [
    "iPhone / iPad 装 VPN 必须通过系统「VPN 配置」授权。因此更应坚持 App Store 正版，避免描述文件乱装、企业签不明来源包。",
    "本站在 iOS 上推荐两款均可在 App Store 找到的产品。",
  ],
  sections: [
    {
      id: "choose",
      heading: "iPhone 上怎么二选一？",
      body: [
        "需要和电脑共用、要自定义分流、常用 ChatGPT 等 AI：选 [UmiVPN](https://www.umivpn.com)（AI 站点免计量）。",
        "只用手机、想 ¥0 永久免费不限流量：选 [努努加速器](https://www.nunu.monster)（广告维持；单次连接有时长）。",
        "两者都不是「破解版」。安装后按系统提示允许 VPN。",
      ],
    },
    ...PRODUCT_BLURBS,
    {
      id: "tips",
      heading: "iOS 使用注意",
      body: [
        "首次连接会弹出添加 VPN 配置，需输入锁屏密码确认——这是系统机制，不是木马特有行为。",
        "若 App Store 账号地区导致搜不到，可改用官网提供的商店跳转链接，仍以苹果官方商店为准。",
        "下载步骤汇总见 [VPN下载教程](/vpn下载)。",
      ],
    },
  ],
  faqs: [
    {
      q: "苹果自带 VPN 设置能用吗？",
      a: "系统设置里的 VPN 多用于企业配置或手动填写协议参数，普通用户更适合装官方 App 一键连接。",
    },
    {
      q: "TestFlight / 企业签靠谱吗？",
      a: "对陌生来源不建议。优先 App Store 上架应用。",
    },
  ],
  related: [
    { href: "/安卓vpn", label: "安卓 VPN" },
    { href: "/vpn下载", label: "VPN下载教程" },
    { href: "/免费vpn推荐", label: "免费VPN推荐" },
    { href: "/海外ai", label: "海外 AI 免流" },
    { href: "/梯子推荐", label: "梯子推荐" },
  ],
};

/** Android VPN. */
export const ANDROID_VPN_ARTICLE: Article = {
  slug: "安卓vpn",
  path: "/安卓vpn",
  title: `安卓VPN推荐 ${YEAR}｜Android 手机翻墙软件`,
  description: `【${UPDATED_AT_LABEL}更新】安卓VPN推荐：优先 Google Play 下载 UmiVPN 或努努加速器。说明 VpnService 风险与怎么选。`,
  keywords: [
    "安卓VPN",
    "Android VPN",
    "手机VPN",
    "安卓翻墙",
    "Google Play VPN",
    "UmiVPN",
    "努努加速器",
  ],
  h1: `安卓VPN推荐 ${YEAR}：优先商店下载`,
  breadcrumb: "安卓VPN",
  productsHeading: "本站安卓推荐",
  summary: "Play 可下。要分流用 UmiVPN；永久免费用努努加速器。",
  updatedLabel: UPDATED_AT_LABEL,
  updatedIso: UPDATED_AT,
  intro: [
    "安卓 VPN 一旦获得 VpnService，就能成为流量中间层。因此「从哪下载」往往比「广告里写多快」更关键。",
    "本站推荐均可在 Google Play 下载的 UmiVPN 与努努加速器；详细安全清单见 [安卓恶意VPN风险](/安卓恶意VPN的危害)。",
  ],
  sections: [
    {
      id: "choose",
      heading: "安卓上怎么选？",
      body: [
        "要和电脑同步、要分流、常用海外 AI → [UmiVPN](https://play.google.com/store/apps/details?id=com5vnetwork.umi)。",
        "只要手机、预算 0、接受广告 → [努努加速器](https://play.google.com/store/apps/details?id=monster.nunu.wqeeer)。",
        "不要装网盘 APK「破解加速器」。",
      ],
    },
    ...PRODUCT_BLURBS,
    {
      id: "permissions",
      heading: "权限怎么看？",
      body: [
        "合理常见：VpnService、网络、前台服务 / 通知。",
        "通常不需要：通讯录、短信、照片、无障碍、设备管理员。若 VPN 强索这些，直接卸载。",
      ],
    },
  ],
  faqs: [
    {
      q: "没有 Google Play 怎么办？",
      a: "以官网提供的其他正规应用商店链接为准，仍避免侧载陌生 APK。",
    },
    {
      q: "免费安卓 VPN 安全吗？",
      a: "看商业模式是否说清。努努公开靠广告；UmiVPN 用免费档 + 付费升级。说不清赚钱方式还要离谱权限的，避开。",
    },
  ],
  related: [
    { href: "/苹果vpn", label: "苹果 VPN" },
    { href: "/安卓恶意VPN的危害", label: "安卓恶意VPN风险" },
    { href: "/vpn下载", label: "VPN下载教程" },
    { href: "/免费vpn推荐", label: "免费VPN推荐" },
  ],
};

/** Mac VPN. */
export const MAC_VPN_ARTICLE: Article = {
  slug: "mac电脑vpn",
  path: "/mac电脑vpn",
  title: `Mac VPN推荐 ${YEAR}｜苹果电脑翻墙软件`,
  description: `【${UPDATED_AT_LABEL}更新】Mac VPN / 苹果电脑VPN：推荐 UmiVPN（macOS 客户端）。说明系统权限与免费档用法。`,
  keywords: [
    "Mac VPN",
    "macOS VPN",
    "苹果电脑VPN",
    "Mac翻墙",
    "UmiVPN",
    "免费VPN",
  ],
  h1: `Mac VPN推荐 ${YEAR}：苹果电脑怎么选`,
  breadcrumb: "Mac VPN",
  productsHeading: "Mac 端推荐",
  productIds: ["umivpn"],
  showCompare: false,
  summary: "macOS 请用 UmiVPN；努努加速器无桌面端。",
  updatedLabel: UPDATED_AT_LABEL,
  updatedIso: UPDATED_AT,
  intro: [
    "Mac 用户搜 VPN，通常要的是稳定客户端 + 可信分发渠道，而不是再装一套来路不明的「加速器」。",
    "本站在 macOS 上推荐 [UmiVPN](https://www.umivpn.com)。",
  ],
  sections: [
    {
      id: "why",
      heading: "Mac 为何选 UmiVPN？",
      body: [
        "与 Windows / iOS / Android 共用账号；免费档可试用，AI 站点免计量。",
        "开源内核可核对；从官网或 Mac 应用商店（以官网指引为准）安装。",
        "支持分流，适合开发者与需要指定站点代理的用户。",
      ],
    },
    {
      id: "install",
      heading: "安装与系统权限",
      body: [
        "按官网 macOS 说明下载安装；首次连接时在「系统设置」中允许 VPN 配置。",
        "完整下载路径见 [VPN下载教程](/vpn下载)。电脑端对比也可看 [电脑VPN](/电脑vpn)。",
      ],
    },
  ],
  faqs: [
    {
      q: "Apple Silicon 和 Intel 都支持吗？",
      a: "以 UmiVPN 官网下载页当前标注为准；一般提供适配现代 macOS 的客户端。",
    },
    {
      q: "能用努努加速器吗？",
      a: "不能，努努仅手机。Mac 请用 UmiVPN。",
    },
  ],
  related: [
    { href: "/电脑vpn", label: "电脑 Windows VPN" },
    { href: "/苹果vpn", label: "苹果 iPhone VPN" },
    { href: "/vpn下载", label: "VPN下载教程" },
    { href: "/免费vpn推荐", label: "免费VPN推荐" },
  ],
};

/** 机场 vs VPN — educational, like netaccesslab dual taxonomy. */
export const AIRPORT_VS_VPN_ARTICLE: Article = {
  slug: "机场和vpn的区别",
  path: "/机场和vpn的区别",
  title: `机场和VPN的区别 ${YEAR}｜哪种梯子适合你`,
  description: `【${UPDATED_AT_LABEL}更新】机场和VPN的区别：计费、客户端、责任模型不同。新手优先 VPN（UmiVPN / 努努）；愿意自配订阅再考虑机场。`,
  keywords: [
    "机场和VPN的区别",
    "机场VPN",
    "什么是机场",
    "VPN和机场",
    "梯子",
    "科学上网",
    "订阅节点",
    "UmiVPN",
  ],
  h1: `机场和VPN的区别：先分清再选梯子`,
  breadcrumb: "机场和VPN的区别",
  productsHeading: "若你更适合 VPN：本站推荐",
  summary: "VPN 是装上即用的一揽子服务；机场是按流量买的节点订阅。新手多数从 VPN 开始更省事。",
  updatedLabel: UPDATED_AT_LABEL,
  updatedIso: UPDATED_AT,
  intro: [
    "中文语境里「梯子」常同时指 VPN 和「机场」。二者都能用于科学上网，但计费、客户端和维护责任完全不同。把它们塞进同一张「总分排行」往往会造成虚假精确。",
    "本页只讲差异与选型，不测评具体机场品牌。本站产品属于 VPN / 加速器形态。",
  ],
  sections: [
    {
      id: "vpn",
      heading: "VPN / 官方加速器是什么？",
      body: [
        "你购买（或免费使用）的是「一揽子服务」：官方维护客户端、节点与协议；通常按时长订阅或提供免费档；常有设备数限制。",
        "优点：上手快、客服与更新路径清晰、应用商店可核对。缺点：自定义空间相对小，免费档常有流量或时长限制。",
        "本站的 [UmiVPN](https://www.umivpn.com) 与 [努努加速器](https://www.nunu.monster) 属于这一类。",
      ],
    },
    {
      id: "airport",
      heading: "「机场」通常指什么？",
      body: [
        "口语里的机场，多指卖「订阅链接 / 节点接入权」的服务：按流量计费较常见，设备往往不限，但客户端要自己选（各类代理工具）。",
        "优点：节点切换灵活、适合会配置分流规则的人。缺点：服务商披露质量参差、稳定性与售后因家而异，新手容易卡在导入订阅与规则上。",
        "本站不运营机场，也不在此排名具体机场。",
      ],
    },
    {
      id: "compare",
      heading: "一张表看差异（概念层）",
      body: [
        "客户端：VPN 多为官方 App；机场多为自选第三方客户端。",
        "计费：VPN 常见包月/包年 + 设备限制；机场常见流量包 + 重置周期。",
        "责任：VPN 厂商对客户端与节点一起负责；机场主要卖接入，客户端问题常需用户自行处理。",
        "适合谁：只想点一下就连 → VPN；要精细分流、按流量弹性买 → 再评估机场。",
      ],
    },
    {
      id: "advice",
      heading: "怎么选？",
      body: [
        "完全新手、只要海外 AI 与轻度上网：先 VPN。电脑 + 手机用 UmiVPN；仅手机永久免费用努努。",
        "已经会用代理客户端、清楚自己要什么规则：可以自行调研机场，并仔细看条款、客服与退款——本站不代为背书。",
        "无论选哪类，都请遵守当地法律，只通过可核对的官方渠道付款与下载。",
      ],
    },
  ],
  faqs: [
    {
      q: "机场是不是一定比 VPN 快？",
      a: "不一定。速度取决于线路、拥堵与你的本地网络，不是「机场」这个名字本身。",
    },
    {
      q: "UmiVPN 算机场吗？",
      a: "不算。UmiVPN 是官方客户端式的 VPN 产品；努努加速器是手机网络加速器。",
    },
    {
      q: "可以 VPN 和机场一起用吗？",
      a: "技术上可能，但容易规则冲突。新手建议先固定一种方案用熟。",
    },
  ],
  related: [
    { href: "/翻墙指南", label: "翻墙指南" },
    { href: "/梯子推荐", label: "梯子推荐" },
    { href: "/中国可用vpn", label: "中国可用VPN排行" },
    { href: "/免费vpn推荐", label: "免费VPN推荐" },
    { href: "/about", label: "关于本站 / 披露" },
  ],
};

/** AI 免流 / ChatGPT — differentiator intent. */
export const AI_FREE_ARTICLE: Article = {
  slug: "海外ai",
  path: "/海外ai",
  title: `海外AI免流 ${YEAR}｜ChatGPT / Claude VPN 怎么选`,
  description: `【${UPDATED_AT_LABEL}更新】用 ChatGPT、Gemini、Claude 会不会耗尽免费VPN流量？UmiVPN 对常用 AI 站点免计量；手机也可用努努加速器。`,
  keywords: [
    "AI免流",
    "ChatGPT VPN",
    "Claude VPN",
    "Gemini VPN",
    "海外AI",
    "ChatGPT中国",
    "免费VPN",
    "UmiVPN",
  ],
  h1: `海外AI免流 ${YEAR}：ChatGPT / Claude 用哪个VPN`,
  breadcrumb: "海外AI",
  productsHeading: "访问海外 AI 的推荐",
  summary: "电脑与多端优先 UmiVPN（AI 免计量）；仅手机也可用努努加速器。",
  updatedLabel: UPDATED_AT_LABEL,
  updatedIso: UPDATED_AT,
  intro: [
    "很多人找免费VPN，是为了稳定使用 ChatGPT、Gemini、Claude 等海外 AI，而不是为了刷一夜视频。这时「免不免计量」比「名义上有多少 GB」更重要。",
    "[UmiVPN](https://www.umivpn.com) 对常用 AI 站点提供免计量：这些流量不占用免费套餐 3GB。完整域名列表见 [UmiVPN AI 免流页](https://www.umivpn.com/ai-free)。",
  ],
  sections: [
    {
      id: "why",
      heading: "为什么普通免费额度很快不够？",
      body: [
        "网页对话本身不一定吃很多流量，但若同一账号还在看视频、下大文件，3GB 级免费档会很快见底。",
        "UmiVPN 把常用 AI 站点单独免计量，就是为了让「只为 AI 而来」的用户把额度留给其它网站。",
      ],
    },
    {
      id: "how",
      heading: "怎么连最省事？",
      body: [
        "安装 UmiVPN（电脑或手机）→ 登录 → 连接节点 → 打开对应 AI 网站或 App。",
        "主要用手机且接受广告、不需要精细分流：也可用努努加速器访问被限制站点。",
        "下载渠道见 [VPN下载教程](/vpn下载)；入门概念见 [翻墙指南](/翻墙指南)。",
      ],
    },
    {
      id: "limits",
      heading: "免流不等于无限一切",
      body: [
        "免计量覆盖的是官网公布的 AI 相关域名列表，不是整个互联网。",
        "视频站、网盘、其它工具仍可能计入免费 3GB；重度非 AI 使用请考虑付费不限量。",
        "请遵守 AI 服务自身条款与当地法律法规。",
      ],
    },
  ],
  faqs: [
    {
      q: "ChatGPT 流量真的不计费吗？",
      a: "在 UmiVPN 上，官网列出的常用 AI 站点免计量。列表可能更新，以 umivpn.com/ai-free 为准。",
    },
    {
      q: "只有手机能用吗？",
      a: "UmiVPN 支持电脑与手机。仅手机也可用努努加速器，但其模式是加速受限站点，不是 AI 免流量账本。",
    },
  ],
  related: [
    { href: "/免费vpn推荐", label: "免费VPN推荐" },
    { href: "/vpn下载", label: "VPN下载教程" },
    { href: "/苹果vpn", label: "苹果 VPN" },
    { href: "/电脑vpn", label: "电脑 VPN" },
    { href: "/中国可用vpn", label: "中国可用VPN排行" },
  ],
};

export const GUIDE_ARTICLES: Article[] = [
  FANQIANG_GUIDE_ARTICLE,
  VPN_DOWNLOAD_ARTICLE,
  WINDOWS_VPN_ARTICLE,
  IPHONE_VPN_ARTICLE,
  ANDROID_VPN_ARTICLE,
  MAC_VPN_ARTICLE,
  AIRPORT_VS_VPN_ARTICLE,
  AI_FREE_ARTICLE,
];
