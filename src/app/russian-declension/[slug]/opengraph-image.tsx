import { ImageResponse } from 'next/og';
import { getWordBySlug, type WordWithDeclensions } from '@/lib/words';

export const size = { width: 1200, height: 630 };
/* runtime: nodejs (défaut) — nécessaire pour lire data/words.json via fs */

const CASE_ROWS = [
  { key: 'nominative', label: 'Nominative' },
  { key: 'accusative', label: 'Accusative' },
  { key: 'genitive', label: 'Genitive' },
  { key: 'dative', label: 'Dative' },
  { key: 'instrumental', label: 'Instrumental' },
  { key: 'prepositional', label: 'Prepositional' },
] as const;

const GENDER_STYLES: Record<string, { bg: string; text: string }> = {
  feminine: { bg: '#ffe4e6', text: '#be123c' },
  masculine: { bg: '#dbeafe', text: '#1d4ed8' },
  neuter: { bg: '#f3e8ff', text: '#7c3aed' },
};

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const word = await getWordBySlug(slug);

  if (!word) {
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'white',
            border: '2px solid #e5e7eb',
          }}
        >
          <div style={{ display: 'flex', fontSize: 36, color: '#6b7280' }}>Word not found</div>
        </div>
      ),
      { ...size }
    );
  }

  const genderStyle = GENDER_STYLES[word.gender] ?? {
    bg: '#f3f4f6',
    text: '#6b7280',
  };

  const iconUrl = 'https://russiandeclensions.com/landing-cases/icon-app-russian-cases-with-anna.webp';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: 'white',
          border: '2px solid #e5e7eb',
          fontFamily: 'ui-sans-serif, system-ui, sans-serif',
        }}
      >
        {/* Top section */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            padding: '48px 56px 32px',
            borderBottom: '1px solid #e5e7eb',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
            <div
              style={{
                display: 'flex',
                fontSize: 72,
                fontWeight: 700,
                color: '#111827',
              }}
            >
              {word.base_form}
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: 18,
                padding: '6px 14px',
                borderRadius: 9999,
                background: genderStyle.bg,
                color: genderStyle.text,
                fontWeight: 600,
              }}
            >
              {word.gender}
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 18,
              fontFamily: 'ui-monospace, monospace',
              color: '#9ca3af',
              marginBottom: 8,
            }}
          >
            /{word.slug}/
          </div>
          <div style={{ display: 'flex', fontSize: 28, color: '#374151', fontWeight: 500 }}>
            {word.translation_en}
          </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexShrink: 0,
              width: 140,
              height: 140,
              borderRadius: 70,
              overflow: 'hidden',
            }}
          >
            <img
              src={iconUrl}
              alt=""
              width={140}
              height={140}
              style={{ display: 'block', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Middle section — mini declension table */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            padding: '24px 56px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              padding: '12px 20px',
              background: '#f9fafb',
              borderBottom: '1px solid #e5e7eb',
              fontSize: 14,
              fontWeight: 600,
              color: '#6b7280',
            }}
          >
            <div style={{ display: 'flex', flex: 1.2 }}>Case</div>
            <div style={{ display: 'flex', flex: 1 }}>Singular</div>
            <div style={{ display: 'flex', flex: 1 }}>Plural</div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
          {CASE_ROWS.map((row, index) => {
            const sg = (word as WordWithDeclensions)[
              `${row.key}_sg` as keyof WordWithDeclensions
            ] as string;
            const pl = (word as WordWithDeclensions)[
              `${row.key}_pl` as keyof WordWithDeclensions
            ] as string;
            const isNominative = row.key === 'nominative';
            return (
              <div
                key={row.key}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  padding: '14px 20px',
                  background: isNominative ? '#eff6ff' : index % 2 === 0 ? '#ffffff' : '#f9fafb',
                  borderBottom: index < CASE_ROWS.length - 1 ? '1px solid #e5e7eb' : 'none',
                  fontSize: 16,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flex: 1.2,
                    color: '#6b7280',
                    fontWeight: 500,
                  }}
                >
                  {row.label}
                </div>
                <div
                  style={{
                    display: 'flex',
                    flex: 1,
                    color: '#111827',
                    fontWeight: 600,
                  }}
                >
                  {sg || '—'}
                </div>
                <div
                  style={{
                    display: 'flex',
                    flex: 1,
                    color: '#111827',
                    fontWeight: 600,
                  }}
                >
                  {pl || '—'}
                </div>
              </div>
            );
          })}
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
          <div style={{ display: 'flex' }}>russiandeclensions.com</div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 2 }}>
            <div style={{ display: 'flex', fontWeight: 600 }}>Russian Cases with Anna®</div>
            <div style={{ display: 'flex', fontSize: 14, color: '#9ca3af' }}>
              free mobile app to practice your russian cases
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
