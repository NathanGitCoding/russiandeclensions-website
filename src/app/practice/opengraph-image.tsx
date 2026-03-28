import { ImageResponse } from 'next/og';
import { getLandingLangFromRequest } from '@/lib/landingLangServer';
import { getPracticeTranslations } from '@/data/website/practicePageTranslations';
import { getOgAppIconDataUrl } from '@/lib/ogAppIconDataUrl';

export const size = { width: 1200, height: 630 };

const CASE_KEYS = [
  'nominative',
  'accusative',
  'genitive',
  'dative',
  'instrumental',
  'prepositional',
] as const;

export default async function Image() {
  const lang = await getLandingLangFromRequest();
  const t = getPracticeTranslations(lang);
  const iconUrl = await getOgAppIconDataUrl();

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
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '48px 56px 40px',
            background: 'linear-gradient(135deg, #4A90FF 0%, #0066FF 100%)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <div
              style={{
                display: 'flex',
                fontSize: 48,
                fontWeight: 700,
                color: 'white',
                marginBottom: 12,
                lineHeight: 1.15,
              }}
            >
              {t.og.bannerTitle}
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: 22,
                color: 'rgba(255,255,255,0.85)',
                fontWeight: 400,
                lineHeight: 1.3,
              }}
            >
              {t.og.bannerSubtitle}
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexShrink: 0,
              width: 120,
              height: 120,
              borderRadius: 60,
              overflow: 'hidden',
              border: '3px solid rgba(255,255,255,0.4)',
            }}
          >
            <img
              src={iconUrl}
              alt=""
              width={120}
              height={120}
              style={{ display: 'block', objectFit: 'cover' }}
            />
          </div>
        </div>

        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            padding: '32px 56px',
            gap: 16,
          }}
        >
          {CASE_KEYS.map((key) => (
            <div
              key={key}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: 340,
                padding: '20px 24px',
                borderRadius: 16,
                background: '#f0f6ff',
                border: '2px solid #bfdbfe',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  fontSize: 22,
                  fontWeight: 700,
                  color: '#1e40af',
                  textAlign: 'center',
                }}
              >
                {t.config.cases[key]}
              </div>
            </div>
          ))}
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
          <div style={{ display: 'flex' }}>russiandeclensions.com/practice</div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: 2,
            }}
          >
            <div style={{ display: 'flex', fontWeight: 600 }}>Russian Cases with Anna®</div>
            <div style={{ display: 'flex', fontSize: 14, color: '#9ca3af', textAlign: 'right' }}>
              {t.og.footerTagline}
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
