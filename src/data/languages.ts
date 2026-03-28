/**
 * Constantes et utilitaires pour les langues supportées
 */

export type Language = 'fr_fr' | 'en_en' | 'tr_tr' | 'de_de' | 'pl_pl' | 'es_es' | 'it_it' | 'pt_pt' | 'nl_nl';

export interface LanguageInfo {
  code: Language;
  name: {
    fr: string;
    en: string;
    tr: string;
    de: string;
    pl: string;
    es: string;
    it: string;
    pt: string;
    nl: string;
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
      es: 'Francés',
      it: 'Italiano',
      pt: 'Português',
      nl: 'Nederlands',
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
      es: 'Inglés',
      it: 'Italiano',
      pt: 'Portuguese',
      nl: 'Dutch',
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
      es: 'Turco',
      it: 'Italiano',
      pt: 'Portekizce',
      nl: 'Hollandaca',
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
      es: 'Alemán',
      it: 'Tedesco',
      pt: 'Portugiesisch',
      nl: 'Niederländisch',
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
      es: 'Polaco',
      it: 'Polacco',
      pt: 'Portugalski',
      nl: 'Niderlandzki',
      native: 'Polski',
    },
    flag: '🇵🇱',
    locale: 'pl-PL',
  },
  {
    code: 'es_es',
    name: {
      fr: 'Espagnol',
      en: 'Spanish',
      tr: 'İspanyolca',
      de: 'Spanisch',
      pl: 'Hiszpański',
      es: 'Español',
      it: 'Italiano',
      pt: 'Portugués',
      nl: 'Neerlandés',
      native: 'Español',
    },
    flag: '🇪🇸',
    locale: 'es-ES',
  },
  {
    code: 'it_it',
    name: {
      fr: 'Italien',
      en: 'Italian',
      tr: 'İtalyanca',
      de: 'Italienisch',
      pl: 'Włoski',
      es: 'Italiano',
      it: 'Italiano',
      pt: 'Portoghese',
      nl: 'Olandese',
      native: 'Italiano',
    },
    flag: '🇮🇹',
    locale: 'it-IT',
  },
  {
    code: 'pt_pt',
    name: {
      fr: 'Portugais',
      en: 'Portuguese',
      tr: 'Portekizce',
      de: 'Portugiesisch',
      pl: 'Portugalski',
      es: 'Portugués',
      it: 'Portoghese',
      pt: 'Português',
      nl: 'Nederlands',
      native: 'Português',
    },
    flag: '🇵🇹',
    locale: 'pt-PT',
  },
  {
    code: 'nl_nl',
    name: {
      fr: 'Néerlandais',
      en: 'Dutch',
      tr: 'Hollandaca',
      de: 'Niederländisch',
      pl: 'Niderlandzki',
      es: 'Neerlandés',
      it: 'Olandese',
      pt: 'Neerlandês',
      nl: 'Nederlands',
      native: 'Nederlands',
    },
    flag: '🇳🇱',
    locale: 'nl-NL',
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
    case 'es_es':
      return info.name.es;
    case 'it_it':
      return info.name.it;
    case 'pt_pt':
      return info.name.pt;
    case 'nl_nl':
      return info.name.nl;
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
  const nav = navigator as Navigator & { userLanguage?: string; systemLanguage?: string };
  let browserLang = navigator.language;

  // Méthode 2: Fallback pour anciens navigateurs
  if (!browserLang) {
    browserLang = nav.userLanguage ?? '';
  }

  // Méthode 3: Fallback pour Capacitor/WebView
  // Dans Capacitor, navigator.language est toujours disponible et retourne
  // la langue système du téléphone
  if (!browserLang) {
    browserLang = nav.systemLanguage || 'en';
  }

  // Méthode 4: Vérifier les langues préférées (plus fiable sur mobile)
  const preferredLang = navigator.languages?.[0];
  if (preferredLang) {
    browserLang = preferredLang;
  }

  // Normaliser la langue
  const langLower = (browserLang || 'en').toLowerCase();

  // Vérifier dans l'ordre : turc, polonais, allemand, espagnol, français, anglais
  // Format attendu: "tr-TR", "tr", etc.
  if (langLower.startsWith('tr') || langLower.includes('tr')) {
    return 'tr_tr';
  }
  if (langLower.startsWith('es') || langLower.includes('es')) {
    return 'es_es';
  }
  if (langLower.startsWith('it') || langLower.includes('it')) {
    return 'it_it';
  }
  if (langLower.startsWith('pt') || langLower.includes('pt')) {
    return 'pt_pt';
  }
  if (langLower.startsWith('nl') || langLower.includes('nl')) {
    return 'nl_nl';
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
