import type { LandingLanguage } from '@/data/website/landingTranslations';

export type WordTranslationsForUi = {
  translation_en: string;
  translation_fr: string;
  translation_de: string;
  translation_tr: string;
  translation_pl: string;
  translation_es?: string;
  translation_it?: string;
  translation_pt?: string;
  translation_nl?: string;
};

/** Word gloss in the UI language (falls back to English if empty). */
export function getWordTranslationForLandingLang(
  w: WordTranslationsForUi,
  lang: LandingLanguage,
): string {
  const en = (w.translation_en ?? '').trim();
  switch (lang) {
    case 'fr_fr':
      return (w.translation_fr ?? '').trim() || en;
    case 'de_de':
      return (w.translation_de ?? '').trim() || en;
    case 'tr_tr':
      return (w.translation_tr ?? '').trim() || en;
    case 'pl_pl':
      return (w.translation_pl ?? '').trim() || en;
    case 'es_es':
      return (w.translation_es ?? '').trim() || en;
    case 'it_it':
      return (w.translation_it ?? '').trim() || en;
    case 'pt_pt':
      return (w.translation_pt ?? '').trim() || en;
    case 'nl_nl':
      return (w.translation_nl ?? '').trim() || en;
    case 'ru_ru':
      return en;
    default:
      return en;
  }
}
