/**
 * Traductions pour la page /learn (index)
 * Langues de l'appli: fr, en, tr, de, pl + ru (landing)
 */

import type { LandingLanguage } from './landingTranslations';

export interface LearnPageTranslations {
  breadcrumb: { home: string; learn: string };
  header: { title: string; lead: string };
  sections: { grammarLessons: string; articles: string };
  badges: { lesson: string; article: string };
  lessonTitles: Record<string, string>;
  articleTitles: Record<string, string>;
}

/** Slugs des leçons (2 leçons + 7 articles dans la section "Grammar Lessons") */
export const LESSON_SLUGS = [
  'russian-cases-complete-guide',
  'dative-case-declension',
  'russian-case-endings-cheatsheet',
  'russian-prepositions-and-cases',
  'russian-genitive-case',
  'russian-dative-case',
  'russian-prepositional-case',
  'russian-accusative-case',
  'russian-instrumental-case',
] as const;

/** Slugs des articles (section "Articles") */
export const ARTICLE_SLUGS = [
  'top-10-apps-russian',
  'top-10-russian-case-mistakes',
  'how-to-practice-russian-cases',
] as const;

const en: LearnPageTranslations = {
  breadcrumb: { home: 'Home', learn: 'Learn' },
  header: {
    title: 'Learn Russian Grammar & Cases',
    lead: 'Free lessons and articles on Russian declensions, grammatical cases, and vocabulary.',
  },
  sections: { grammarLessons: 'Grammar Lessons', articles: 'Articles' },
  badges: { lesson: 'Lesson', article: 'Article' },
  lessonTitles: {
    'russian-cases-complete-guide': 'The Complete Guide to Russian Cases',
    'dative-case-declension': 'How to Decline in the Dative Case in Russian',
    'russian-case-endings-cheatsheet': 'Russian Case Endings: The Ultimate Cheat Sheet & Chart',
    'russian-prepositions-and-cases':
      'Russian Prepositions and Cases: Which Case Does Each Preposition Take?',
    'russian-genitive-case': 'Russian Genitive Case: Rules, Endings & 32 Real Examples',
    'russian-dative-case': 'Russian Dative Case: How to Say "To" and "For" in Russian',
    'russian-prepositional-case':
      'Russian Prepositional Case: The Only Case That Never Stands Alone',
    'russian-accusative-case':
      'Russian Accusative Case: Direct Objects, Animate vs. Inanimate & Motion Verbs',
    'russian-instrumental-case':
      "Russian Instrumental Case: When to Use It and Why It's Easier Than You Think",
  },
  articleTitles: {
    'top-10-apps-russian': 'Top 10 Apps to Learn Russian in 2026',
    'top-10-russian-case-mistakes':
      'Top 10 Mistakes English Speakers Make with Russian Cases (And How to Fix Them)',
    'how-to-practice-russian-cases': 'How to Practice Russian Cases: 5 Proven Methods',
  },
};

const fr: LearnPageTranslations = {
  breadcrumb: { home: 'Accueil', learn: 'Apprendre' },
  header: {
    title: 'Apprendre la grammaire russe et les cas',
    lead: 'Leçons et articles gratuits sur les déclinaisons russes, les cas grammaticaux et le vocabulaire.',
  },
  sections: { grammarLessons: 'Leçons de grammaire', articles: 'Articles' },
  badges: { lesson: 'Leçon', article: 'Article' },
  lessonTitles: {
    'russian-cases-complete-guide': 'Le guide complet des cas russes',
    'dative-case-declension': 'Comment décliner au datif en russe',
    'russian-case-endings-cheatsheet': "Terminaisons des cas russes : l'antisèche ultime",
    'russian-prepositions-and-cases':
      'Prépositions russes et cas : quelle préposition régit quel cas ?',
    'russian-genitive-case': 'Cas génitif russe : règles, terminaisons et 32 exemples',
    'russian-dative-case': 'Cas datif russe : comment dire « à » et « pour » en russe',
    'russian-prepositional-case': 'Cas prépositionnel russe : le seul cas qui ne va jamais seul',
    'russian-accusative-case':
      "Cas accusatif russe : compléments d'objet, animé vs inanimé et verbes de mouvement",
    'russian-instrumental-case':
      "Cas instrumental russe : quand l'utiliser et pourquoi c'est plus simple qu'il n'y paraît",
  },
  articleTitles: {
    'top-10-apps-russian': 'Top 10 des applications pour apprendre le russe en 2026',
    'top-10-russian-case-mistakes':
      'Top 10 des erreurs des anglophones avec les cas russes (et comment les corriger)',
    'how-to-practice-russian-cases': 'Comment pratiquer les cas russes : 5 méthodes éprouvées',
  },
};

const tr: LearnPageTranslations = {
  breadcrumb: { home: 'Ana Sayfa', learn: 'Öğren' },
  header: {
    title: 'Rusça grameri ve halleri öğrenin',
    lead: 'Rusça çekimler, gramer halleri ve kelime bilgisi hakkında ücretsiz dersler ve makaleler.',
  },
  sections: { grammarLessons: 'Gramer Dersleri', articles: 'Makaleler' },
  badges: { lesson: 'Ders', article: 'Makale' },
  lessonTitles: {
    'russian-cases-complete-guide': 'Rusça Haller: Kapsamlı Rehber',
    'dative-case-declension': 'Rusçada datif halinde nasıl çekim yapılır',
    'russian-case-endings-cheatsheet': 'Rusça hal ekleri: Nihai kopya kağıdı ve tablo',
    'russian-prepositions-and-cases': 'Rusça edatlar ve haller: Her edat hangi halde kullanılır?',
    'russian-genitive-case': 'Rusça genitif: Kurallar, ekler ve 32 gerçek örnek',
    'russian-dative-case': 'Rusça datif: Rusçada "kime" ve "için" nasıl söylenir',
    'russian-prepositional-case': 'Rusça lokatif: Tek başına asla durmayan tek hal',
    'russian-accusative-case': 'Rusça akkusatif: Nesneler, canlı vs cansız ve hareket fiilleri',
    'russian-instrumental-case':
      'Rusça enstrumental: Ne zaman kullanılır ve neden düşündüğünüzden kolay',
  },
  articleTitles: {
    'top-10-apps-russian': "2026'da Rusça öğrenmek için en iyi 10 uygulama",
    'top-10-russian-case-mistakes':
      'İngilizce konuşanların Rusça hallerle yaptığı 10 hata (ve nasıl düzeltilir)',
    'how-to-practice-russian-cases': 'Rusça halleri nasıl pratik edersiniz: 5 kanıtlanmış yöntem',
  },
};

const de: LearnPageTranslations = {
  breadcrumb: { home: 'Startseite', learn: 'Lernen' },
  header: {
    title: 'Russische Grammatik und Fälle lernen',
    lead: 'Kostenlose Lektionen und Artikel zu russischen Deklinationen, grammatischen Fällen und Wortschatz.',
  },
  sections: { grammarLessons: 'Grammatik-Lektionen', articles: 'Artikel' },
  badges: { lesson: 'Lektion', article: 'Artikel' },
  lessonTitles: {
    'russian-cases-complete-guide': 'Der vollständige Leitfaden zu den russischen Fällen',
    'dative-case-declension': 'Wie man im Dativ im Russischen dekliniert',
    'russian-case-endings-cheatsheet': 'Russische Fallendungen: Die ultimative Spickzettel-Tabelle',
    'russian-prepositions-and-cases':
      'Russische Präpositionen und Fälle: Welche Präposition verlangt welchen Fall?',
    'russian-genitive-case': 'Russischer Genitiv: Regeln, Endungen und 32 Beispiele',
    'russian-dative-case': 'Russischer Dativ: „An“ und „für“ auf Russisch sagen',
    'russian-prepositional-case': 'Russischer Präpositiv: Der einzige Fall, der nie allein steht',
    'russian-accusative-case':
      'Russischer Akkusativ: Objekte, belebt vs unbelebt und Bewegungsverben',
    'russian-instrumental-case':
      'Russischer Instrumental: Wann man ihn verwendet und warum er einfacher ist als gedacht',
  },
  articleTitles: {
    'top-10-apps-russian': 'Top 10 Apps zum Russischlernen 2026',
    'top-10-russian-case-mistakes':
      'Top 10 Fehler von Englischsprechern bei russischen Fällen (und wie man sie behebt)',
    'how-to-practice-russian-cases': 'Russische Fälle üben: 5 bewährte Methoden',
  },
};

const pl: LearnPageTranslations = {
  breadcrumb: { home: 'Strona główna', learn: 'Nauka' },
  header: {
    title: 'Naucz się gramatyki rosyjskiej i przypadków',
    lead: 'Darmowe lekcje i artykuły o rosyjskich deklinacjach, przypadkach gramatycznych i słownictwie.',
  },
  sections: { grammarLessons: 'Lekcje gramatyki', articles: 'Artykuły' },
  badges: { lesson: 'Lekcja', article: 'Artykuł' },
  lessonTitles: {
    'russian-cases-complete-guide': 'Kompletny przewodnik po rosyjskich przypadkach',
    'dative-case-declension': 'Jak odmieniać w celowniku po rosyjsku',
    'russian-case-endings-cheatsheet': 'Końcówki przypadków rosyjskich: ostateczna ściąga',
    'russian-prepositions-and-cases':
      'Rosyjskie przyimki i przypadki: który przyimek wymaga którego przypadku?',
    'russian-genitive-case': 'Rosyjski dopełniacz: zasady, końcówki i 32 przykłady',
    'russian-dative-case': 'Rosyjski celownik: jak powiedzieć „do" i „dla" po rosyjsku',
    'russian-prepositional-case':
      'Rosyjski miejscownik: jedyny przypadek, który nigdy nie stoi sam',
    'russian-accusative-case':
      'Rosyjski biernik: dopełnienia bliższe, żywotny vs nieżywotny i czasowniki ruchu',
    'russian-instrumental-case':
      'Rosyjski narzędnik: kiedy go używać i dlaczego jest prostszy niż myślisz',
  },
  articleTitles: {
    'top-10-apps-russian': 'Top 10 aplikacji do nauki rosyjskiego w 2026',
    'top-10-russian-case-mistakes':
      'Top 10 błędów osób anglojęzycznych w rosyjskich przypadkach (i jak je naprawić)',
    'how-to-practice-russian-cases': 'Jak ćwiczyć rosyjskie przypadki: 5 sprawdzonych metod',
  },
};

const ru: LearnPageTranslations = {
  breadcrumb: { home: 'Главная', learn: 'Обучение' },
  header: {
    title: 'Русская грамматика и падежи',
    lead: 'Бесплатные уроки и статьи о русских склонениях, падежах и лексике.',
  },
  sections: { grammarLessons: 'Уроки грамматики', articles: 'Статьи' },
  badges: { lesson: 'Урок', article: 'Статья' },
  lessonTitles: {
    'russian-cases-complete-guide': 'Полное руководство по русским падежам',
    'dative-case-declension': 'Как склонять в дательном падеже',
    'russian-case-endings-cheatsheet': 'Окончания падежей: справочная таблица',
    'russian-prepositions-and-cases':
      'Русские предлоги и падежи: какой предлог требует какой падеж?',
    'russian-genitive-case': 'Родительный падеж: правила, окончания и 32 примера',
    'russian-dative-case': 'Дательный падеж: как сказать «кому» и «для»',
    'russian-prepositional-case': 'Предложный падеж: единственный падеж, который не стоит один',
    'russian-accusative-case': 'Винительный падеж: дополнения, одушевлённость и глаголы движения',
    'russian-instrumental-case':
      'Творительный падеж: когда использовать и почему это проще, чем кажется',
  },
  articleTitles: {
    'top-10-apps-russian': 'Топ-10 приложений для изучения русского в 2026',
    'top-10-russian-case-mistakes':
      '10 ошибок англоговорящих в русских падежах (и как их исправить)',
    'how-to-practice-russian-cases': 'Как практиковать русские падежи: 5 проверенных методов',
  },
};

const translations: Record<LandingLanguage, LearnPageTranslations> = {
  en_en: en,
  fr_fr: fr,
  tr_tr: tr,
  de_de: de,
  pl_pl: pl,
  ru_ru: ru,
};

export function getLearnPageTranslations(language: LandingLanguage): LearnPageTranslations {
  return translations[language] ?? translations.en_en;
}
