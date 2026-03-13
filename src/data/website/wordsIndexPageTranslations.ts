/**
 * Traductions pour la page index des mots (/words)
 */

import type { LandingLanguage } from './landingTranslations';

export interface WordsIndexPageTranslations {
  breadcrumb: { home: string; learn: string; words: string };
  title: string;
  titleWithCount: (total: number) => string;
  subtitle: (total: number) => string;
  filterAll: string;
  filterByLetter: string;
  level1: string;
  level2: string;
  level3: string;
  tableHeaders: { russian: string; translation: string; gender: string; level: string };
  levelBadgeTitle: (level: number) => string;
  emptyState: string;
  pagination: {
    showing: (from: number, to: number, total: number) => string;
    previous: string;
    next: string;
  };
  gender: Record<string, string>;
  metadata: {
    title: (total: number) => string;
    description: (total: number) => string;
  };
}

const translations: Record<LandingLanguage, WordsIndexPageTranslations> = {
  en_en: {
    breadcrumb: { home: 'App', learn: 'Free Grammar Lessons', words: 'Declensions' },
    title: 'Russian Word Declensions — Complete List',
    titleWithCount: (total) =>
      `The ${total.toLocaleString()} Most Useful Words in Russian`,
    subtitle: (total) =>
      `Browse ${total.toLocaleString()} Russian words with their full declension tables. Click any word to see all cases.`,
    filterAll: 'All',
    filterByLetter: 'Filter by letter',
    level1: 'Level 1 — Most common',
    level2: 'Level 2',
    level3: 'Level 3+',
    tableHeaders: { russian: 'Russian', translation: 'Translation', gender: 'Gender', level: 'Level' },
    levelBadgeTitle: (level) => `Level ${level}`,
    emptyState: 'No words found. Try changing the filters.',
    pagination: {
      showing: (from, to, total) => `Showing ${from}-${to} of ${total.toLocaleString()} words`,
      previous: '← Previous',
      next: 'Next →',
    },
    gender: { masculine: 'masculine', feminine: 'feminine', neuter: 'neuter' },
    metadata: {
      title: (total) =>
        `The ${total} Most Useful Words in Russian | RussianDeclensions`,
      description: (total) =>
        `Master Russian with the ${total} most useful words. Full declension tables for all 6 cases: nominative, accusative, genitive, dative, instrumental, prepositional.`,
    },
  },
  fr_fr: {
    breadcrumb: { home: 'App', learn: 'Leçons de grammaire gratuites', words: 'Déclinaisons' },
    title: 'Déclinaisons des mots russes — Liste complète',
    titleWithCount: (total) =>
      `Les ${total.toLocaleString('fr-FR')} mots russes les plus utiles`,
    subtitle: (total) =>
      `Parcourez ${total.toLocaleString('fr-FR')} mots russes avec leurs tableaux de déclinaison complets. Cliquez sur un mot pour voir tous les cas.`,
    filterAll: 'Tous',
    filterByLetter: 'Filtrer par lettre',
    level1: 'Niveau 1 — Les plus courants',
    level2: 'Niveau 2',
    level3: 'Niveau 3+',
    tableHeaders: { russian: 'Russe', translation: 'Traduction', gender: 'Genre', level: 'Niveau' },
    levelBadgeTitle: (level) => `Niveau ${level}`,
    emptyState: 'Aucun mot trouvé. Essayez de modifier les filtres.',
    pagination: {
      showing: (from, to, total) =>
        `Affichage de ${from} à ${to} sur ${total.toLocaleString('fr-FR')} mots`,
      previous: '← Précédent',
      next: 'Suivant →',
    },
    gender: { masculine: 'masculin', feminine: 'féminin', neuter: 'neutre' },
    metadata: {
      title: (total) =>
        `Les ${total} mots russes les plus utiles | RussianDeclensions`,
      description: (total) =>
        `Maîtrisez le russe avec les ${total} mots les plus utiles. Tableaux de déclinaison complets pour les 6 cas : nominatif, accusatif, génitif, datif, instrumental, prépositionnel.`,
    },
  },
  de_de: {
    breadcrumb: { home: 'App', learn: 'Kostenlose Grammatik-Lektionen', words: 'Deklinationen' },
    title: 'Russische Wortdeklinationen — Vollständige Liste',
    titleWithCount: (total) =>
      `Die ${total.toLocaleString('de-DE')} nützlichsten russischen Wörter`,
    subtitle: (total) =>
      `Durchsuchen Sie ${total.toLocaleString('de-DE')} russische Wörter mit vollständigen Deklinationstabellen. Klicken Sie auf ein Wort, um alle Fälle zu sehen.`,
    filterAll: 'Alle',
    filterByLetter: 'Nach Buchstabe filtern',
    level1: 'Stufe 1 — Am häufigsten',
    level2: 'Stufe 2',
    level3: 'Stufe 3+',
    tableHeaders: { russian: 'Russisch', translation: 'Übersetzung', gender: 'Genus', level: 'Stufe' },
    levelBadgeTitle: (level) => `Stufe ${level}`,
    emptyState: 'Keine Wörter gefunden. Versuchen Sie, die Filter zu ändern.',
    pagination: {
      showing: (from, to, total) =>
        `Anzeige ${from}-${to} von ${total.toLocaleString('de-DE')} Wörtern`,
      previous: '← Zurück',
      next: 'Weiter →',
    },
    gender: { masculine: 'Maskulinum', feminine: 'Femininum', neuter: 'Neutrum' },
    metadata: {
      title: (total) =>
        `Die ${total} nützlichsten russischen Wörter | RussianDeclensions`,
      description: (total) =>
        `Meistern Sie Russisch mit den ${total} nützlichsten Wörtern. Vollständige Deklinationstabellen für alle 6 Fälle: Nominativ, Akkusativ, Genitiv, Dativ, Instrumental, Präpositional.`,
    },
  },
  tr_tr: {
    breadcrumb: { home: 'App', learn: 'Ücretsiz Gramer Dersleri', words: 'Çekimler' },
    title: 'Rusça Kelime Çekimleri — Tam Liste',
    titleWithCount: (total) =>
      `Rusçadaki en yararlı ${total.toLocaleString('tr-TR')} kelime`,
    subtitle: (total) =>
      `${total.toLocaleString('tr-TR')} Rusça kelimeyi tam çekim tablolarıyla göz atın. Tüm durumları görmek için bir kelimeye tıklayın.`,
    filterAll: 'Tümü',
    filterByLetter: 'Harfe göre filtrele',
    level1: 'Seviye 1 — En yaygın',
    level2: 'Seviye 2',
    level3: 'Seviye 3+',
    tableHeaders: { russian: 'Rusça', translation: 'Çeviri', gender: 'Cinsiyet', level: 'Seviye' },
    levelBadgeTitle: (level) => `Seviye ${level}`,
    emptyState: 'Kelime bulunamadı. Filtreleri değiştirmeyi deneyin.',
    pagination: {
      showing: (from, to, total) =>
        `${total.toLocaleString('tr-TR')} kelimeden ${from}-${to} gösteriliyor`,
      previous: '← Önceki',
      next: 'Sonraki →',
    },
    gender: { masculine: 'eril', feminine: 'dişil', neuter: 'nötr' },
    metadata: {
      title: (total) =>
        `Rusçadaki en yararlı ${total} kelime | RussianDeclensions`,
      description: (total) =>
        `En yararlı ${total} kelimeyle Rusçayı öğrenin. 6 durumun tamamı için çekim tabloları: nominatif, akuzatif, genitif, datif, enstrümantal, prepozisyonel.`,
    },
  },
  pl_pl: {
    breadcrumb: { home: 'App', learn: 'Darmowe lekcje gramatyki', words: 'Odmiany' },
    title: 'Odmiany rosyjskich słów — Pełna lista',
    titleWithCount: (total) =>
      `Najbardziej przydatne ${total.toLocaleString('pl-PL')} rosyjskich słów`,
    subtitle: (total) =>
      `Przeglądaj ${total.toLocaleString('pl-PL')} rosyjskich słów z pełnymi tabelami odmian. Kliknij słowo, aby zobaczyć wszystkie przypadki.`,
    filterAll: 'Wszystkie',
    filterByLetter: 'Filtruj według litery',
    level1: 'Poziom 1 — Najpopularniejsze',
    level2: 'Poziom 2',
    level3: 'Poziom 3+',
    tableHeaders: { russian: 'Rosyjski', translation: 'Tłumaczenie', gender: 'Rodzaj', level: 'Poziom' },
    levelBadgeTitle: (level) => `Poziom ${level}`,
    emptyState: 'Nie znaleziono słów. Spróbuj zmienić filtry.',
    pagination: {
      showing: (from, to, total) =>
        `Wyświetlanie ${from}-${to} z ${total.toLocaleString('pl-PL')} słów`,
      previous: '← Poprzednia',
      next: 'Następna →',
    },
    gender: { masculine: 'męski', feminine: 'żeński', neuter: 'nijaki' },
    metadata: {
      title: (total) =>
        `Najbardziej przydatne ${total} rosyjskich słów | RussianDeclensions`,
      description: (total) =>
        `Opanuj rosyjski z ${total} najbardziej przydatnymi słowami. Pełne tabele odmian dla 6 przypadków: mianownik, biernik, dopełniacz, celownik, narzędnik, miejscownik.`,
    },
  },
  ru_ru: {
    breadcrumb: { home: 'App', learn: 'Бесплатные уроки грамматики', words: 'Склонения' },
    title: 'Склонения русских слов — Полный список',
    titleWithCount: (total) =>
      `${total.toLocaleString('ru-RU')} самых полезных русских слов`,
    subtitle: (total) =>
      `Просмотрите ${total.toLocaleString('ru-RU')} русских слов с полными таблицами склонений. Нажмите на слово, чтобы увидеть все падежи.`,
    filterAll: 'Все',
    filterByLetter: 'Фильтр по букве',
    level1: 'Уровень 1 — Самые частые',
    level2: 'Уровень 2',
    level3: 'Уровень 3+',
    tableHeaders: { russian: 'Русский', translation: 'Перевод', gender: 'Род', level: 'Уровень' },
    levelBadgeTitle: (level) => `Уровень ${level}`,
    emptyState: 'Слова не найдены. Попробуйте изменить фильтры.',
    pagination: {
      showing: (from, to, total) =>
        `Показано ${from}-${to} из ${total.toLocaleString('ru-RU')} слов`,
      previous: '← Назад',
      next: 'Вперёд →',
    },
    gender: { masculine: 'мужской', feminine: 'женский', neuter: 'средний' },
    metadata: {
      title: (total) =>
        `${total} самых полезных русских слов | RussianDeclensions`,
      description: (total) =>
        `Освойте русский язык с ${total} самыми полезными словами. Полные таблицы склонений для 6 падежей: именительный, винительный, родительный, дательный, творительный, предложный.`,
    },
  },
};

export function getWordsIndexPageTranslations(
  language: LandingLanguage
): WordsIndexPageTranslations {
  return translations[language] ?? translations.en_en;
}
