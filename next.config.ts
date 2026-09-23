import type { NextConfig } from "next";

/**
 * Public Chinese paths match search intent (免费vpn / VPN).
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
        source: "/恶意vpn风险",
        destination: "/恶意VPN的危害",
        permanent: true,
      },
      {
        source: "/%E6%81%B6%E6%84%8Fvpn%E9%A3%8E%E9%99%A9",
        destination: "/恶意VPN的危害",
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
    ];
  },
};

export default nextConfig;
