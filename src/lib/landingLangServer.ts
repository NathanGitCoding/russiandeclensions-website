/**
 * Lecture de la langue landing côté serveur (articles, leçons)
 * Utilise le cookie pour connaître la langue sélectionnée par l'utilisateur.
 */

import { cookies } from 'next/headers';
import type { LandingLanguage } from '@/data/website/landingTranslations';

const LANDING_LANG_COOKIE = 'russian-coach-landing-lang';

const VALID_LANGS: LandingLanguage[] = ['en_en', 'fr_fr', 'tr_tr', 'de_de', 'pl_pl', 'ru_ru'];

function isValidLandingLang(val: string | undefined): val is LandingLanguage {
  return !!val && VALID_LANGS.includes(val as LandingLanguage);
}

export async function getLandingLangFromRequest(): Promise<LandingLanguage> {
  const cookieStore = await cookies();
  const val = cookieStore.get(LANDING_LANG_COOKIE)?.value;
  return isValidLandingLang(val) ? val : 'en_en';
}
