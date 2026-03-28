import type { LandingLanguage } from '@/data/website/landingTranslations';
import type { WordWithDeclensions } from '@/lib/words';

/** Traduction affichée sur les pages mot selon la langue UI (aligné sur russian-declension/[slug]). */
export function getWordDisplayTranslation(
  word: WordWithDeclensions,
  lang: LandingLanguage
): string {
  if (lang === 'fr_fr') return word.translation_fr || word.translation_en;
  if (lang === 'de_de') return word.translation_de || word.translation_en;
  if (lang === 'tr_tr') return word.translation_tr || word.translation_en;
  if (lang === 'pl_pl') return word.translation_pl || word.translation_en;
  if (lang === 'es_es') return word.translation_es || word.translation_en;
  if (lang === 'it_it') return word.translation_it || word.translation_en;
  if (lang === 'pt_pt') return word.translation_pt || word.translation_en;
  if (lang === 'nl_nl') return word.translation_nl || word.translation_en;
  return word.translation_en;
}
