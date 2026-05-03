import { readFile } from 'fs/promises';
import { join } from 'path';
import sharp from 'sharp';
import { ImageResponse } from 'next/og';
import { getLearnArticle, getAllLearnArticleSlugs } from '@/data/learnArticles';
import type { LearnArticle, LearnArticleTierListChart } from '@/data/learnArticles';
import { LEARN_ARTICLE_STATIC_OG } from '@/data/learnArticleStaticOg';
import { getOgAppIconDataUrl } from '@/lib/ogAppIconDataUrl';

export const size = { width: 1200, height: 630 };

export function generateStaticParams() {
  return getAllLearnArticleSlugs().map((slug) => ({ slug }));
}

const siteLearnPath = `${(process.env.NEXT_PUBLIC_SITE_URL || 'https://russiandeclensions.com').replace(/\/$/, '')}/learn`;

async function imageResponseFromPublicAsset(publicRelativePath: string) {
  const dataUrl = await readPublicImageDataUrl(`/${publicRelativePath}`);
  if (!dataUrl) return null;
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'hsl(220 14% 7%)',
      }}
    >
      <img
        src={dataUrl}
        alt=""
        width={1200}
        height={630}
        style={{
          width: 1200,
          height: 630,
          objectFit: 'contain',
          display: 'block',
        }}
      />
    </div>,
    { ...size }
  );
}

/** Badge label based on article type */
function getBadge(article: { items?: unknown[]; sections?: unknown[] }): string {
  if (article.items && (article.items as unknown[]).length > 0) return '📋 Review';
  return '📖 Guide';
}

/** Accent color based on article content */
function getAccentColor(slug: string): string {
  if (slug.includes('cheat-sheet') || slug.includes('cheatsheet')) return '#059669';
  if (slug.includes('apps') || slug.includes('resources')) return '#7c3aed';
  if (slug.includes('torfl') || slug.includes('exam')) return '#dc2626';
  if (slug.includes('mistakes')) return '#ea580c';
  return '#0066FF';
}

const TIER_LABEL_BG: Record<string, string> = {
  s: 'hsl(350 75% 82%)',
  a: 'hsl(28 90% 78%)',
  b: 'hsl(48 92% 76%)',
  c: 'hsl(142 55% 72%)',
  d: 'hsl(205 85% 78%)',
};

async function readPublicImageDataUrl(publicPath: string): Promise<string | null> {
  try {
    const clean = publicPath.replace(/^\//, '');
    const full = join(process.cwd(), 'public', clean);
    const ext = clean.split('.').pop()?.toLowerCase();
    const raw = await readFile(full);
    const buf = ext === 'webp' ? Buffer.from(await sharp(raw).png().toBuffer()) : raw;
    const mime =
      ext === 'png' || ext === 'webp'
        ? 'image/png'
        : ext === 'jpg' || ext === 'jpeg'
          ? 'image/jpeg'
          : 'image/png';
    return `data:${mime};base64,${buf.toString('base64')}`;
  } catch {
    return null;
  }
}

async function loadTierListIconDataUrls(
  chart: LearnArticleTierListChart
): Promise<Record<string, string>> {
  const unique = new Set<string>();
  for (const tier of chart.tiers) {
    for (const app of tier.apps) {
      unique.add(app.src);
    }
  }
  const out: Record<string, string> = {};
  await Promise.all(
    [...unique].map(async (src) => {
      const dataUrl = await readPublicImageDataUrl(src);
      if (dataUrl) out[src] = dataUrl;
    })
  );
  return out;
}

function TierListOpenGraph({
  article,
  chart,
  icons,
  slug,
}: {
  article: LearnArticle;
  chart: LearnArticleTierListChart;
  icons: Record<string, string>;
  slug: string;
}) {
  const accentColor = getAccentColor(slug);
  const title = chart.title ?? article.h1;
  const iconPxDefault = 36;

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        fontFamily: 'ui-sans-serif, system-ui, sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          paddingTop: 28,
          paddingRight: 40,
          paddingBottom: 16,
          paddingLeft: 40,
          backgroundColor: accentColor,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
          <div
            style={{
              display: 'flex',
              fontSize: 15,
              fontWeight: 600,
              color: '#ffffff',
              marginBottom: 8,
            }}
          >
            {getBadge(article)}
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: title.length > 72 ? 24 : 28,
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.25,
            }}
          >
            {title.length > 110 ? `${title.slice(0, 107)}…` : title}
          </div>
        </div>
      </div>

      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          paddingTop: 14,
          paddingRight: 36,
          paddingBottom: 12,
          paddingLeft: 36,
          backgroundColor: '#f3f4f6',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            minHeight: 0,
            borderRadius: 10,
            overflow: 'hidden',
            border: '1px solid hsl(220 12% 18%)',
            backgroundColor: 'hsl(220 14% 7%)',
            padding: 12,
            gap: 4,
            aspectRatio: '16 / 9',
          }}
        >
          {chart.tiers.map((tier) => {
            const tierOgColumns = 3;
            type TierApp = (typeof tier.apps)[number];
            const slots: (TierApp | null)[] = tier.apps.slice(0, tierOgColumns);
            while (slots.length < tierOgColumns) slots.push(null);
            return (
              <div
                key={tier.letter}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'stretch',
                  flex: 1,
                  minHeight: 0,
                  width: '100%',
                }}
              >
                <div
                  style={{
                    width: 52,
                    minWidth: 52,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: TIER_LABEL_BG[tier.tone] ?? TIER_LABEL_BG.s,
                    fontSize: 26,
                    fontWeight: 900,
                    color: 'hsl(220 18% 10%)',
                  }}
                >
                  {tier.letter}
                </div>
                <div
                  style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    paddingLeft: 10,
                    paddingRight: 8,
                    gap: 23,
                    backgroundColor: 'hsl(220 8% 20%)',
                    border: '1px solid hsl(220 8% 28%)',
                    borderLeft: 'none',
                  }}
                >
                  {slots.map((app, slotIdx) => {
                    if (!app) {
                      return (
                        <div
                          key={`${tier.letter}-col-${slotIdx}`}
                          style={{ flex: '1 1 0', minWidth: 0 }}
                          aria-hidden
                        />
                      );
                    }
                    const src = icons[app.src];
                    const iconPx = app.tierIconSmaller
                      ? Math.round(iconPxDefault * 0.85)
                      : iconPxDefault;
                    const labelText = app.label ?? app.alt;
                    return (
                      <div
                        key={`${tier.letter}-${app.src}`}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 3,
                          flex: '0 0 auto',
                          minWidth: 0,
                          maxWidth: 120,
                        }}
                      >
                        {src ? (
                          <img
                            src={src}
                            alt=""
                            width={iconPx}
                            height={iconPx}
                            style={{
                              width: iconPx,
                              height: iconPx,
                              borderRadius: 0,
                              objectFit: 'contain',
                              display: 'block',
                              backgroundColor: 'transparent',
                            }}
                          />
                        ) : (
                          <div
                            style={{
                              width: iconPx,
                              height: iconPx,
                              borderRadius: 0,
                              backgroundColor: 'hsl(220 10% 35%)',
                            }}
                          />
                        )}
                        {app.showLabel ? (
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              fontSize: app.tierIconSmaller ? 8 : 9,
                              fontWeight: 600,
                              color: 'hsl(220 8% 94%)',
                              maxWidth: 72,
                              textAlign: 'center',
                              lineHeight: 1.1,
                            }}
                          >
                            {labelText.split('\n').map((line, li) => (
                              <div key={li} style={{ display: 'flex' }}>
                                {line}
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: 12,
          paddingRight: 40,
          paddingBottom: 14,
          paddingLeft: 40,
          backgroundColor: '#f9fafb',
          borderTop: '1px solid #e5e7eb',
          fontSize: 14,
          color: '#9ca3af',
        }}
      >
        <div style={{ display: 'flex' }}>{siteLearnPath}</div>
        <div style={{ display: 'flex', fontWeight: 600, color: '#6b7280' }}>
          Russian Cases with Anna®
        </div>
      </div>
    </div>
  );
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getLearnArticle(slug);

  if (!article) {
    return new ImageResponse(
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#f9fafb',
          fontSize: 32,
          color: '#6b7280',
        }}
      >
        Article not found
      </div>,
      { ...size }
    );
  }

  const staticOgEntry = LEARN_ARTICLE_STATIC_OG[slug];
  if (staticOgEntry) {
    const staticOg = await imageResponseFromPublicAsset(staticOgEntry.relativeToPublic);
    if (staticOg) return staticOg;
  }

  const chart = article.tierListChart;
  if (chart?.tiers?.length) {
    const icons = await loadTierListIconDataUrls(chart);
    return new ImageResponse(
      <TierListOpenGraph article={article} chart={chart} icons={icons} slug={slug} />,
      { ...size }
    );
  }

  const iconUrl = await getOgAppIconDataUrl();
  const badge = getBadge(article);
  const accentColor = getAccentColor(slug);
  const faqCount = article.faq?.length ?? 0;
  const sectionCount = article.sections?.length ?? article.items?.length ?? 0;

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: 'white',
        fontFamily: 'ui-sans-serif, system-ui, sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '48px 56px 40px',
          background: `linear-gradient(135deg, ${accentColor}CC 0%, ${accentColor} 100%)`,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, maxWidth: 900 }}>
          <div
            style={{
              display: 'flex',
              fontSize: 18,
              fontWeight: 600,
              color: 'rgba(255,255,255,0.9)',
              marginBottom: 16,
              background: 'rgba(255,255,255,0.2)',
              padding: '6px 16px',
              borderRadius: 20,
              width: 'auto',
              alignSelf: 'flex-start',
            }}
          >
            {badge}
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: article.h1.length > 60 ? 36 : 44,
              fontWeight: 700,
              color: 'white',
              lineHeight: 1.2,
            }}
          >
            {article.h1.length > 80 ? article.h1.slice(0, 77) + '...' : article.h1}
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexShrink: 0,
            width: 100,
            height: 100,
            borderRadius: 50,
            overflow: 'hidden',
            border: '3px solid rgba(255,255,255,0.4)',
            marginLeft: 32,
          }}
        >
          <img
            src={iconUrl}
            alt=""
            width={100}
            height={100}
            style={{ display: 'block', objectFit: 'cover' }}
          />
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 32,
          padding: '24px 56px',
          borderBottom: '1px solid #e5e7eb',
        }}
      >
        {sectionCount > 0 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div
              style={{
                display: 'flex',
                fontSize: 28,
                fontWeight: 700,
                color: accentColor,
              }}
            >
              {sectionCount}
            </div>
            <div style={{ display: 'flex', fontSize: 16, color: '#6b7280' }}>
              {article.items ? 'apps reviewed' : 'sections'}
            </div>
          </div>
        )}
        {faqCount > 0 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div
              style={{
                display: 'flex',
                fontSize: 28,
                fontWeight: 700,
                color: accentColor,
              }}
            >
              {faqCount}
            </div>
            <div style={{ display: 'flex', fontSize: 16, color: '#6b7280' }}>FAQ answered</div>
          </div>
        )}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div
            style={{
              display: 'flex',
              fontSize: 28,
              fontWeight: 700,
              color: accentColor,
            }}
          >
            Free
          </div>
          <div style={{ display: 'flex', fontSize: 16, color: '#6b7280' }}>to read</div>
        </div>
      </div>

      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          padding: '0 56px',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 20,
            color: '#4b5563',
            lineHeight: 1.5,
          }}
        >
          {article.metaDescription.length > 160
            ? article.metaDescription.slice(0, 157) + '...'
            : article.metaDescription}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px 56px',
          background: '#f9fafb',
          borderTop: '1px solid #e5e7eb',
          fontSize: 16,
          color: '#9ca3af',
        }}
      >
        <div style={{ display: 'flex' }}>russiandeclensions.com/learn</div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: 2,
          }}
        >
          <div style={{ display: 'flex', fontWeight: 600 }}>Russian Cases with Anna®</div>
          <div style={{ display: 'flex', fontSize: 14, color: '#9ca3af' }}>
            free grammar lessons & practice quizzes
          </div>
        </div>
      </div>
    </div>,
    { ...size }
  );
}
