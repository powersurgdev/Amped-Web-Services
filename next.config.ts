import type { NextConfig } from 'next';
import path from 'node:path';

const nextConfig: NextConfig = {
  allowedDevOrigins: ['*.picard.replit.dev'],
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@assets': path.resolve(process.cwd(), 'attached_assets'),
    };
    return config;
  },
  images: {
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;
