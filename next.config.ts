import type { NextConfig } from "next";

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
    ];
  },
};

export default nextConfig;
