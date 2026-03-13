/**
 * Constantes et utilitaires pour les langues supportées
 */

export type Language = 'fr_fr' | 'en_en' | 'tr_tr' | 'de_de' | 'pl_pl';

export interface LanguageInfo {
  code: Language;
  name: {
    fr: string;
    en: string;
    tr: string;
    de: string;
    pl: string;
    native: string;
  };
  flag: string;
  locale: string;
}

export const SUPPORTED_LANGUAGES: LanguageInfo[] = [
  {
    code: 'fr_fr',
    name: {
      fr: 'Français',
      en: 'French',
      tr: 'Fransızca',
      de: 'Französisch',
      pl: 'Francuski',
      native: 'Français',
    },
    flag: '🇫🇷',
    locale: 'fr-FR',
  },
  {
    code: 'en_en',
    name: {
      fr: 'Anglais',
      en: 'English',
      tr: 'İngilizce',
      de: 'Englisch',
      pl: 'Angielski',
      native: 'English',
    },
    flag: '🇬🇧',
    locale: 'en-EN',
  },
  {
    code: 'tr_tr',
    name: {
      fr: 'Turc',
      en: 'Turkish',
      tr: 'Türkçe',
      de: 'Türkisch',
      pl: 'Turecki',
      native: 'Türkçe',
    },
    flag: '🇹🇷',
    locale: 'tr-TR',
  },
  {
    code: 'de_de',
    name: {
      fr: 'Allemand',
      en: 'German',
      tr: 'Almanca',
      de: 'Deutsch',
      pl: 'Niemiecki',
      native: 'Deutsch',
    },
    flag: '🇩🇪',
    locale: 'de-DE',
  },
  {
    code: 'pl_pl',
    name: {
      fr: 'Polonais',
      en: 'Polish',
      tr: 'Lehçe',
      de: 'Polnisch',
      pl: 'Polski',
      native: 'Polski',
    },
    flag: '🇵🇱',
    locale: 'pl-PL',
  },
];

/**
 * Obtient les informations d'une langue par son code
 */
export function getLanguageInfo(code: Language): LanguageInfo | undefined {
  return SUPPORTED_LANGUAGES.find((lang) => lang.code === code);
}

/**
 * Obtient le nom d'une langue dans la langue actuelle
 */
export function getLanguageName(code: Language, displayLanguage: Language = 'en_en'): string {
  const info = getLanguageInfo(code);
  if (!info) return code;

  switch (displayLanguage) {
    case 'fr_fr':
      return info.name.fr;
    case 'tr_tr':
      return info.name.tr;
    case 'de_de':
      return info.name.de;
    case 'pl_pl':
      return info.name.pl;
    case 'en_en':
    default:
      return info.name.en;
  }
}

/**
 * Obtient le nom natif d'une langue (toujours dans sa propre langue)
 */
export function getNativeLanguageName(code: Language): string {
  const info = getLanguageInfo(code);
  return info?.name.native || code;
}

/**
 * Obtient le drapeau d'une langue
 */
export function getLanguageFlag(code: Language): string {
  const info = getLanguageInfo(code);
  return info?.flag || '🌐';
}

/**
 * Détecte la langue du navigateur/device et retourne le code Language correspondant
 * Fonctionne sur Web, PWA et apps mobiles (Capacitor)
 */
export function detectBrowserLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'en_en';
  }

  // Méthode 1: navigator.language (Web standard, fonctionne aussi sur mobile)
  // Sur iOS/Android, cela retourne la langue du système
  let browserLang = navigator.language;

  // Méthode 2: Fallback pour anciens navigateurs
  if (!browserLang) {
    browserLang = (navigator as any).userLanguage;
  }

  // Méthode 3: Fallback pour Capacitor/WebView
  // Dans Capacitor, navigator.language est toujours disponible et retourne
  // la langue système du téléphone
  if (!browserLang) {
    browserLang = (navigator as any).systemLanguage || 'en';
  }

  // Méthode 4: Vérifier les langues préférées (plus fiable sur mobile)
  if (typeof navigator !== 'undefined' && (navigator as any).languages) {
    const preferredLang = (navigator as any).languages[0];
    if (preferredLang) {
      browserLang = preferredLang;
    }
  }

  // Normaliser la langue
  const langLower = (browserLang || 'en').toLowerCase();

  // Vérifier dans l'ordre : turc, polonais, allemand, français, anglais
  // Format attendu: "tr-TR", "tr", etc.
  if (langLower.startsWith('tr') || langLower.includes('tr')) {
    return 'tr_tr';
  }
  if (langLower.startsWith('pl') || langLower.includes('pl')) {
    return 'pl_pl';
  }
  if (langLower.startsWith('de') || langLower.includes('de')) {
    return 'de_de';
  }
  if (langLower.startsWith('fr') || langLower.includes('fr')) {
    return 'fr_fr';
  }
  if (langLower.startsWith('en') || langLower.includes('en')) {
    return 'en_en';
  }

  // Par défaut, retourner l'anglais
  return 'en_en';
}
