import type { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://russiandeclensions.com';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteUrl.replace(/\/$/, '');
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/static/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
