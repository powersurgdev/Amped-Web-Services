import type { NextConfig } from 'next';
import path from 'node:path';

const nextConfig: NextConfig = {
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@assets': path.resolve(process.cwd(), 'attached_assets'),
    };
    return config;
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
