import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: { unoptimized: false },
  serverExternalPackages: ['@supabase/supabase-js'],
  poweredByHeader: false,
  experimental: {
    devtoolSegmentExplorer: false,
  },
  outputFileTracingRoot: path.join(__dirname),
  async redirects() {
    return [
      { source: '/landing-cases', destination: '/', permanent: true },
      { source: '/landing-cases/', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
