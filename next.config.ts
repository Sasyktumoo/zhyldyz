import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // No basePath needed for custom domain (frenchwithzhyldyz.online)
  // basePath: process.env.NODE_ENV === 'production' ? '/zhyldyz' : '',
};

export default nextConfig;
