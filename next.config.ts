import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: ["kennyperezlaw.com", "c8.alamy.com"],
  },
};

export default nextConfig;
