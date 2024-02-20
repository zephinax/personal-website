/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 152, 256, 304, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/iamncdai/iamncdai/main/devcard.png",
      }
    ]
  },
}

module.exports = nextConfig
