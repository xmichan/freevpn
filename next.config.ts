import type { NextConfig } from "next";

/**
 * Public Chinese paths match search intent (免费vpn / VPN / 翻墙).
 * Latin aliases mirror competitor URL patterns Bing already indexes.
 */
const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/%E5%85%8D%E8%B4%B9vpn%E6%8E%A8%E8%8D%90",
        destination: "/free-vpn-recommend",
      },
      {
        source: "/免费vpn推荐",
        destination: "/free-vpn-recommend",
      },
      {
        source: "/%E6%A2%AF%E5%AD%90%E6%8E%A8%E8%8D%90",
        destination: "/ladder-recommend",
      },
      {
        source: "/梯子推荐",
        destination: "/ladder-recommend",
      },
      {
        source: "/%E4%B8%AD%E5%9B%BD%E5%8F%AF%E7%94%A8vpn",
        destination: "/china-vpn",
      },
      {
        source: "/中国可用vpn",
        destination: "/china-vpn",
      },
      {
        source: "/%E6%81%B6%E6%84%8FVPN%E7%9A%84%E5%8D%B1%E5%AE%B3",
        destination: "/malware-vpn-windows",
      },
      {
        source: "/恶意VPN的危害",
        destination: "/malware-vpn-windows",
      },
      {
        source: "/%E5%AE%89%E5%8D%93%E6%81%B6%E6%84%8FVPN%E7%9A%84%E5%8D%B1%E5%AE%B3",
        destination: "/malware-vpn-android",
      },
      {
        source: "/安卓恶意VPN的危害",
        destination: "/malware-vpn-android",
      },
      {
        source: "/%E7%BF%BB%E5%A2%99%E6%8C%87%E5%8D%97",
        destination: "/fanqiang-guide",
      },
      {
        source: "/翻墙指南",
        destination: "/fanqiang-guide",
      },
      {
        source: "/vpn%E4%B8%8B%E8%BD%BD",
        destination: "/vpn-download",
      },
      {
        source: "/vpn下载",
        destination: "/vpn-download",
      },
      {
        source: "/%E7%94%B5%E8%84%91vpn",
        destination: "/windows-vpn",
      },
      {
        source: "/电脑vpn",
        destination: "/windows-vpn",
      },
      {
        source: "/%E8%8B%B9%E6%9E%9Cvpn",
        destination: "/iphone-vpn",
      },
      {
        source: "/苹果vpn",
        destination: "/iphone-vpn",
      },
      {
        source: "/%E5%AE%89%E5%8D%93vpn",
        destination: "/android-vpn",
      },
      {
        source: "/安卓vpn",
        destination: "/android-vpn",
      },
      {
        source: "/mac%E7%94%B5%E8%84%91vpn",
        destination: "/mac-vpn",
      },
      {
        source: "/mac电脑vpn",
        destination: "/mac-vpn",
      },
      {
        source: "/%E6%9C%BA%E5%9C%BA%E5%92%8Cvpn%E7%9A%84%E5%8C%BA%E5%88%AB",
        destination: "/airport-vs-vpn",
      },
      {
        source: "/机场和vpn的区别",
        destination: "/airport-vs-vpn",
      },
      {
        source: "/%E6%B5%B7%E5%A4%96ai",
        destination: "/ai-free",
      },
      {
        source: "/海外ai",
        destination: "/ai-free",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/free-vpn-recommend",
        destination: "/免费vpn推荐",
        permanent: true,
      },
      {
        source: "/ladder-recommend",
        destination: "/梯子推荐",
        permanent: true,
      },
      {
        source: "/china-vpn",
        destination: "/中国可用vpn",
        permanent: true,
      },
      {
        source: "/malware-vpn-windows",
        destination: "/恶意VPN的危害",
        permanent: true,
      },
      {
        source: "/malware-vpn-android",
        destination: "/安卓恶意VPN的危害",
        permanent: true,
      },
      {
        source: "/fanqiang-guide",
        destination: "/翻墙指南",
        permanent: true,
      },
      {
        source: "/vpn-download",
        destination: "/vpn下载",
        permanent: true,
      },
      {
        source: "/windows-vpn",
        destination: "/电脑vpn",
        permanent: true,
      },
      {
        source: "/iphone-vpn",
        destination: "/苹果vpn",
        permanent: true,
      },
      {
        source: "/android-vpn",
        destination: "/安卓vpn",
        permanent: true,
      },
      {
        source: "/mac-vpn",
        destination: "/mac电脑vpn",
        permanent: true,
      },
      {
        source: "/airport-vs-vpn",
        destination: "/机场和vpn的区别",
        permanent: true,
      },
      {
        source: "/ai-free",
        destination: "/海外ai",
        permanent: true,
      },
      {
        source: "/恶意vpn风险",
        destination: "/恶意VPN的危害",
        permanent: true,
      },
      {
        source: "/%E6%81%B6%E6%84%8Fvpn%E9%A3%8E%E9%99%A9",
        destination: "/恶意VPN的危害",
        permanent: true,
      },
      // Old path aliases (不安全 → 恶意)
      {
        source: "/不安全VPN的危害",
        destination: "/恶意VPN的危害",
        permanent: true,
      },
      {
        source: "/安卓不安全VPN的危害",
        destination: "/安卓恶意VPN的危害",
        permanent: true,
      },
      // Competitor-style Latin paths → Chinese canonicals
      {
        source: "/free",
        destination: "/免费vpn推荐",
        permanent: true,
      },
      {
        source: "/free/",
        destination: "/免费vpn推荐",
        permanent: true,
      },
      {
        source: "/free-vpn",
        destination: "/免费vpn推荐",
        permanent: true,
      },
      {
        source: "/free-vpn/",
        destination: "/免费vpn推荐",
        permanent: true,
      },
      {
        source: "/ranks-vpn",
        destination: "/中国可用vpn",
        permanent: true,
      },
      {
        source: "/ranks-vpn/",
        destination: "/中国可用vpn",
        permanent: true,
      },
      {
        source: "/cn-use-vpn",
        destination: "/中国可用vpn",
        permanent: true,
      },
      {
        source: "/cn-use-vpn/",
        destination: "/中国可用vpn",
        permanent: true,
      },
      {
        source: "/vpn",
        destination: "/中国可用vpn",
        permanent: true,
      },
      {
        source: "/vpn/",
        destination: "/中国可用vpn",
        permanent: true,
      },
      {
        source: "/免费vpn",
        destination: "/免费vpn推荐",
        permanent: true,
      },
      {
        source: "/免费VPN",
        destination: "/免费vpn推荐",
        permanent: true,
      },
      {
        source: "/windows-malware-vpn",
        destination: "/恶意VPN的危害",
        permanent: true,
      },
      {
        source: "/windows-malware-vpn/",
        destination: "/恶意VPN的危害",
        permanent: true,
      },
      {
        source: "/android-malware-vpn",
        destination: "/安卓恶意VPN的危害",
        permanent: true,
      },
      {
        source: "/android-malware-vpn/",
        destination: "/安卓恶意VPN的危害",
        permanent: true,
      },
      {
        source: "/download",
        destination: "/vpn下载",
        permanent: true,
      },
      {
        source: "/download/",
        destination: "/vpn下载",
        permanent: true,
      },
      {
        source: "/vpn-download-guide",
        destination: "/vpn下载",
        permanent: true,
      },
      {
        source: "/tizi",
        destination: "/梯子推荐",
        permanent: true,
      },
      {
        source: "/tizi/",
        destination: "/梯子推荐",
        permanent: true,
      },
      {
        source: "/fanqiang",
        destination: "/翻墙指南",
        permanent: true,
      },
      {
        source: "/fanqiang/",
        destination: "/翻墙指南",
        permanent: true,
      },
      {
        source: "/chatgpt-vpn",
        destination: "/海外ai",
        permanent: true,
      },
      {
        source: "/chatgpt-vpn/",
        destination: "/海外ai",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
