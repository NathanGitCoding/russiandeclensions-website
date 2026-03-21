/**
 * Helpers pour générer des sitemaps XML.
 * Utilisé par les route handlers pour les sitemaps découpés.
 */

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://russiandeclensions.com';
const baseUrl = siteUrl.replace(/\/$/, '');

export function getBaseUrl(): string {
  return baseUrl;
}

export function buildUrlSetXml(
  entries: Array<{
    url: string;
    lastModified?: Date;
    changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority?: number;
  }>
): string {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  for (const entry of entries) {
    const loc = entry.url.startsWith('http') ? entry.url : `${baseUrl}${entry.url.startsWith('/') ? '' : '/'}${entry.url}`;
    xml += '<url>';
    xml += `<loc>${escapeXml(loc)}</loc>`;
    if (entry.lastModified) {
      xml += `<lastmod>${entry.lastModified.toISOString()}</lastmod>`;
    }
    if (entry.changeFrequency) {
      xml += `<changefreq>${entry.changeFrequency}</changefreq>`;
    }
    if (entry.priority !== undefined) {
      xml += `<priority>${entry.priority}</priority>`;
    }
    xml += '</url>';
  }
  xml += '</urlset>';
  return xml;
}

export function buildSitemapIndexXml(sitemaps: Array<{ url: string; lastModified?: Date }>): string {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>';
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  for (const s of sitemaps) {
    const loc = s.url.startsWith('http') ? s.url : `${baseUrl}${s.url.startsWith('/') ? '' : '/'}${s.url}`;
    xml += '<sitemap>';
    xml += `<loc>${escapeXml(loc)}</loc>`;
    if (s.lastModified) {
      xml += `<lastmod>${s.lastModified.toISOString()}</lastmod>`;
    }
    xml += '</sitemap>';
  }
  xml += '</sitemapindex>';
  return xml;
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
