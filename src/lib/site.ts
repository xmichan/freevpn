/** Production origin. Override with NEXT_PUBLIC_SITE_URL. */
export const SITE_ORIGIN =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://www.freevpn.website";

export const SITE_NAME = "Free VPN Recommendation";
/** Brand + primary search intent for Bing China. */
export const SITE_NAME_ZH = "免费VPN推荐";

export const SITE_TAGLINE =
  "2026年中国可用免费VPN推荐：UmiVPN（全平台）与努努加速器（手机永久免费）。应用商店可下，开源内核，适合轻度翻墙与海外 AI。";

export const UPDATED_AT = "2026-09-24";
export const UPDATED_AT_LABEL = "2026年9月24日";

/** Primary search intents we optimize for on Bing China. */
export const PRIMARY_KEYWORDS = [
  "免费VPN",
  "免费vpn",
  "VPN",
  "中国可用VPN",
  "免费梯子",
  "梯子推荐",
  "翻墙软件",
  "翻墙指南",
  "VPN下载",
  "电脑VPN",
  "苹果VPN",
  "安卓VPN",
  "AI免流",
  "机场和VPN的区别",
] as const;
