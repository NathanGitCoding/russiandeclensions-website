import { ImageResponse } from 'next/og';
import { getWordBySlug, getAllSlugsWithBaseForm, type WordWithDeclensions } from '@/lib/words';
import { getLandingLangFromRequest } from '@/lib/landingLangServer';
import { getWordPageTranslations } from '@/data/website/wordPageTranslations';
import { getWordDisplayTranslation } from '@/lib/wordPageLang';
import { getOgAppIconDataUrl } from '@/lib/ogAppIconDataUrl';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const CASE_ROW_KEYS = [
  'nominative',
  'accusative',
  'genitive',
  'dative',
  'instrumental',
  'prepositional',
] as const;

const GENDER_STYLES: Record<string, { accent: string; bg: string; text: string }> = {
  masculine: { accent: '#2563eb', bg: '#dbeafe', text: '#1e40af' },
  feminine: { accent: '#db2777', bg: '#fce7f3', text: '#9d174d' },
  neuter: { accent: '#9333ea', bg: '#f3e8ff', text: '#6b21a8' },
};

export async function generateStaticParams() {
  const items = await getAllSlugsWithBaseForm();
  return items.map(({ slug }: { slug: string }) => ({ slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const word = await getWordBySlug(slug);
  const lang = await getLandingLangFromRequest();
  const og = getWordPageTranslations(lang).ogImage;

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
            background: '#f9fafb',
            fontSize: 32,
            color: '#6b7280',
          }}
        >
          {og.wordNotFound}
        </div>
      ),
      { ...size },
    );
  }

  const gender = GENDER_STYLES[word.gender] ?? GENDER_STYLES.masculine;
  const genderLabel = og.genderBadges[word.gender as 'masculine' | 'feminine' | 'neuter'] ?? word.gender;
  const typeLabel =
    getWordPageTranslations(lang).type[word.type] ?? word.type.replace(/_/g, ' ');
  const translation = getWordDisplayTranslation(word, lang);
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
            padding: '44px 56px 36px',
            background: `linear-gradient(135deg, ${gender.accent}DD 0%, ${gender.accent} 100%)`,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <div
              style={{
                display: 'flex',
                fontSize: 18,
                fontWeight: 600,
                color: 'rgba(255,255,255,0.9)',
                marginBottom: 14,
                background: 'rgba(255,255,255,0.2)',
                padding: '5px 16px',
                borderRadius: 20,
                alignSelf: 'flex-start',
              }}
            >
              {genderLabel} · {typeLabel}
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: word.base_form.length > 16 ? 52 : 64,
                fontWeight: 700,
                color: 'white',
                lineHeight: 1.15,
                marginBottom: 8,
              }}
            >
              {word.base_form}
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: 26,
                color: 'rgba(255,255,255,0.85)',
                fontWeight: 500,
              }}
            >
              {translation}
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexShrink: 0,
              width: 90,
              height: 90,
              borderRadius: 45,
              overflow: 'hidden',
              border: '3px solid rgba(255,255,255,0.4)',
              marginLeft: 32,
            }}
          >
            <img
              src={iconUrl}
              alt=""
              width={90}
              height={90}
              style={{ display: 'block', objectFit: 'cover' }}
            />
          </div>
        </div>

        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            padding: '20px 56px 16px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              padding: '10px 20px',
              background: '#f9fafb',
              borderBottom: '2px solid #e5e7eb',
              fontSize: 14,
              fontWeight: 700,
              color: '#6b7280',
            }}
          >
            <div style={{ display: 'flex', width: 110 }}>{og.tableCase}</div>
            <div style={{ display: 'flex', flex: 1 }}>{og.tableSingular}</div>
            <div style={{ display: 'flex', flex: 1 }}>{og.tablePlural}</div>
          </div>

          {CASE_ROW_KEYS.map((key, index) => {
            const sg = (word as WordWithDeclensions)[`${key}_sg` as keyof WordWithDeclensions] as string;
            const pl = (word as WordWithDeclensions)[`${key}_pl` as keyof WordWithDeclensions] as string;
            const isNominative = key === 'nominative';
            const rowLabel = og.caseAbbr[key] ?? key;
            return (
              <div
                key={key}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: '8px 20px',
                  background: isNominative ? `${gender.bg}` : index % 2 === 0 ? '#ffffff' : '#f9fafb',
                  borderBottom: index < CASE_ROW_KEYS.length - 1 ? '1px solid #f3f4f6' : 'none',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    width: 110,
                    fontSize: 15,
                    fontWeight: 600,
                    color: isNominative ? gender.text : '#374151',
                  }}
                >
                  {rowLabel}
                </div>
                <div
                  style={{
                    display: 'flex',
                    flex: 1,
                    fontSize: 18,
                    color: '#111827',
                    fontWeight: isNominative ? 700 : 500,
                  }}
                >
                  {sg || '—'}
                </div>
                <div
                  style={{
                    display: 'flex',
                    flex: 1,
                    fontSize: 18,
                    color: '#111827',
                    fontWeight: isNominative ? 700 : 500,
                  }}
                >
                  {pl || '—'}
                </div>
              </div>
            );
          })}
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 56px',
            background: '#f9fafb',
            borderTop: '1px solid #e5e7eb',
            fontSize: 15,
            color: '#9ca3af',
          }}
        >
          <div style={{ display: 'flex' }}>russiandeclensions.com</div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: 2,
            }}
          >
            <div style={{ display: 'flex', fontWeight: 600 }}>Russian Cases with Anna®</div>
            <div style={{ display: 'flex', fontSize: 13, color: '#9ca3af' }}>{og.footerTagline}</div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
