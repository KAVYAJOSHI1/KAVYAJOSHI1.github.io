import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/kavyaverse",
  assetPrefix: "/kavyaverse/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
