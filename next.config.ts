import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["next-mdx-remote"],
  allowedDevOrigins: ["chanhdai-macbook.local"],
  turbopack: {
    root: path.join(__dirname, "."),
  },
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.chanhdai.com",
        port: "",
      },
    ],
    qualities: [75, 100],
  },
  async rewrites() {
    return [
      {
        source: "/blog/:slug.mdx",
        destination: "/blog.mdx/:slug",
      },
      {
        source: "/components/:slug.mdx",
        destination: "/blog.mdx/:slug",
      },
      {
        source: "/rss",
        destination: "/blog/rss",
      },
      {
        source: "/registry/rss",
        destination: "/components/rss",
      },
    ];
  },
  async headers() {
    const cacheHeaders = [
      {
        key: "Cache-Control",
        value: "public, max-age=0, s-maxage=31536000, stale-while-revalidate=86400",
      },
    ];

    return [
      {
        source: "/:path*.txt",
        headers: cacheHeaders,
      },
      {
        source: "/:path*.md",
        headers: cacheHeaders,
      },
    ];
  },
};

export default nextConfig;
