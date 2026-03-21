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
