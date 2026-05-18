import type { LandingLanguage } from '@/data/website/landingTranslations';

const LANDING_TO_DATE_LOCALE: Record<LandingLanguage, string> = {
  en_en: 'en-US',
  fr_fr: 'fr-FR',
  tr_tr: 'tr-TR',
  de_de: 'de-DE',
  pl_pl: 'pl-PL',
  es_es: 'es-ES',
  it_it: 'it-IT',
  pt_pt: 'pt-PT',
  nl_nl: 'nl-NL',
  ru_ru: 'ru-RU',
};

/** Format an ISO date (YYYY-MM-DD or full ISO) for a landing language; null if invalid. */
export function formatLandingDate(
  raw: string | undefined | null,
  lang: LandingLanguage
): string | null {
  if (!raw) return null;
  try {
    const d = new Date(raw.includes('T') ? raw : `${raw}T12:00:00.000Z`);
    if (Number.isNaN(d.getTime())) return null;
    return new Intl.DateTimeFormat(LANDING_TO_DATE_LOCALE[lang] ?? 'en-US', {
      dateStyle: 'medium',
    }).format(d);
  } catch {
    return null;
  }
}
