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
    const duplicatedBlogSlugs = [
      'how-to-practice-russian-cases',
      'russian-accusative-case',
      'russian-case-endings-cheatsheet',
      'russian-dative-case',
      'russian-genitive-case',
      'russian-instrumental-case',
      'russian-prepositional-case',
      'russian-prepositions-and-cases',
      'top-10-apps-russian',
      'top-10-russian-case-mistakes',
    ];

    const blogToArticleRedirects = duplicatedBlogSlugs.map((slug) => ({
      source: `/blog/${slug}`,
      destination: `/learn/articles/${slug}`,
      permanent: true,
    }));

    return [
      { source: '/landing-cases', destination: '/', permanent: true },
      { source: '/landing-cases/', destination: '/', permanent: true },
      // Thin content — redirect to learn hub
      { source: '/blog/understanding-russian-cases', destination: '/learn', permanent: true },
      // Blog index — all posts now live under /learn/articles
      { source: '/blog', destination: '/learn', permanent: true },
      // Deduplicate blog posts → learn articles (301)
      ...blogToArticleRedirects,
      // SEO keyword-rich aliases → practice quiz
      { source: '/russian-declension-quiz', destination: '/practice', permanent: true },
      { source: '/russian-cases-quiz', destination: '/practice', permanent: true },
      { source: '/russian-grammar-quiz', destination: '/practice', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      {
        source: '/(.*)\\.(ico|png|jpg|jpeg|webp|svg|gif|woff|woff2)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'X-Robots-Tag', value: 'noindex' },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex' }],
      },
    ];
  },
  async rewrites() {
    return [
      { source: '/sitemap.xml', destination: '/api/sitemap-index' },
      { source: '/sitemap-pages.xml', destination: '/api/sitemap-pages' },
      { source: '/sitemap-learn.xml', destination: '/api/sitemap-learn' },
      { source: '/sitemap-words.xml', destination: '/api/sitemap-words' },
    ];
  },
};

export default nextConfig;
