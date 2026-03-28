import { ImageResponse } from 'next/og';
import { getLearnArticle, getAllLearnArticleSlugs } from '@/data/learnArticles';
import { getOgAppIconDataUrl } from '@/lib/ogAppIconDataUrl';

export const size = { width: 1200, height: 630 };

export function generateStaticParams() {
  return getAllLearnArticleSlugs().map((slug) => ({ slug }));
}

/** Badge label based on article type */
function getBadge(article: { items?: unknown[]; sections?: unknown[] }): string {
  if (article.items && (article.items as unknown[]).length > 0) return '📋 Review';
  return '📖 Guide';
}

/** Accent color based on article content */
function getAccentColor(slug: string): string {
  if (slug.includes('cheat-sheet') || slug.includes('cheatsheet')) return '#059669'; // green
  if (slug.includes('apps') || slug.includes('resources')) return '#7c3aed'; // purple
  if (slug.includes('torfl') || slug.includes('exam')) return '#dc2626'; // red
  if (slug.includes('mistakes')) return '#ea580c'; // orange
  return '#0066FF'; // default blue
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getLearnArticle(slug);

  if (!article) {
    return new ImageResponse(
      (
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
        </div>
      ),
      { ...size }
    );
  }

  const iconUrl = await getOgAppIconDataUrl();
  const badge = getBadge(article);
  const accentColor = getAccentColor(slug);
  const faqCount = article.faq?.length ?? 0;
  const sectionCount = article.sections?.length ?? article.items?.length ?? 0;

  return new ImageResponse(
    (
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
        {/* Header with gradient */}
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
            {/* Badge */}
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
            {/* Title */}
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

        {/* Stats bar */}
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

        {/* Keywords / meta description preview */}
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

        {/* Bottom bar */}
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
      </div>
    ),
    { ...size }
  );
}
