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
  practiceQuiz: {
    title: string;
    lead: string;
    cta: string;
    byCaseTitle: string;
    allCases: string;
    cases: Record<string, string>;
  };
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
  'best-free-resources-learn-russian',
  'russian-cases-explained-beginners-guide',
  'best-apps-learn-russian-grammar',
  'how-long-learn-russian',
  'torfl-trki-russian-language-exam-guide',
  'russian-prepositions-cases-cheat-sheet',
] as const;

const en: LearnPageTranslations = {
  breadcrumb: { home: 'App', learn: 'Free Grammar Lessons' },
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
    'best-free-resources-learn-russian': '15 Best Free Resources to Learn Russian in 2026',
    'russian-cases-explained-beginners-guide': 'Russian Cases Explained Simply: A Beginner\'s Visual Guide',
    'best-apps-learn-russian-grammar': 'Best Apps to Learn Russian Grammar in 2026 (Honest Review)',
    'how-long-learn-russian': 'How Long Does It Take to Learn Russian? (Realistic Timeline)',
    'torfl-trki-russian-language-exam-guide': 'TORFL Exam (ТРКИ): Complete Guide to the Russian Language Proficiency Test',
    'russian-prepositions-cases-cheat-sheet': 'Russian Prepositions & Cases Cheat Sheet: Which Case After Every Preposition',
  },
  practiceQuiz: {
    title: 'Practice Quiz',
    lead: 'Ready to test your knowledge? Try our free interactive declension quiz with 400+ Russian nouns across all cases and genders.',
    cta: 'Start a Declension Quiz →',
    byCaseTitle: 'Or practice a specific case:',
    allCases: 'All cases',
    cases: {
      accusative: 'Accusative',
      genitive: 'Genitive',
      dative: 'Dative',
      instrumental: 'Instrumental',
      prepositional: 'Prepositional',
    },
  },
};

const fr: LearnPageTranslations = {
  breadcrumb: { home: 'App', learn: 'Leçons de grammaire gratuites' },
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
    'best-free-resources-learn-russian': '15 meilleures ressources gratuites pour apprendre le russe en 2026',
    'russian-cases-explained-beginners-guide': 'Les cas russes expliqués simplement : guide visuel pour débutants',
    'best-apps-learn-russian-grammar': 'Meilleures applis pour apprendre la grammaire russe en 2026 (Revue honnête)',
    'how-long-learn-russian': 'Combien de temps faut-il pour apprendre le russe ? (Délai réaliste)',
    'torfl-trki-russian-language-exam-guide': 'Examen TORFL (ТРКИ) : guide complet du test de russe',
    'russian-prepositions-cases-cheat-sheet': 'Aide-mémoire prépositions et cas russes : quel cas après chaque préposition',
  },
  practiceQuiz: {
    title: 'Quiz de pratique',
    lead: 'Prêt à tester vos connaissances ? Essayez notre quiz interactif gratuit avec plus de 400 noms russes, tous les cas et tous les genres.',
    cta: 'Lancer un quiz de déclinaisons →',
    byCaseTitle: 'Ou pratiquer un cas spécifique :',
    allCases: 'Tous les cas',
    cases: {
      accusative: 'Accusatif',
      genitive: 'Génitif',
      dative: 'Datif',
      instrumental: 'Instrumental',
      prepositional: 'Prépositionnel',
    },
  },
};

const tr: LearnPageTranslations = {
  breadcrumb: { home: 'App', learn: 'Ücretsiz Gramer Dersleri' },
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
    'best-free-resources-learn-russian': '2026\'da Rusça öğrenmek için en iyi 15 ücretsiz kaynak',
    'russian-cases-explained-beginners-guide': 'Rusça haller basitçe açıklandı: Yeni başlayanlar için görsel rehber',
    'best-apps-learn-russian-grammar': 'Rusça grameri öğrenmek için en iyi uygulamalar 2026 (Dürüst inceleme)',
    'how-long-learn-russian': 'Rusçayı Öğrenmek Ne Kadar Sürer? (Gerçekçi Zaman Çizelgesi)',
    'torfl-trki-russian-language-exam-guide': 'TORFL Sınavı (ТРКИ): Rusça Yeterlilik Testi Tam Rehberi',
    'russian-prepositions-cases-cheat-sheet': 'Rusça edatlar ve haller: Her edattan sonra hangi hal kullanılır',
  },
  practiceQuiz: {
    title: 'Alıştırma Testi',
    lead: 'Bilginizi test etmeye hazır mısınız? 400+ Rusça isim, tüm haller ve cinsiyetlerle ücretsiz interaktif çekim testimizi deneyin.',
    cta: 'Çekim Testine Başla →',
    byCaseTitle: 'Veya belirli bir hali pratik edin:',
    allCases: 'Tüm haller',
    cases: {
      accusative: 'Akkusatif',
      genitive: 'Genitif',
      dative: 'Datif',
      instrumental: 'Enstrumental',
      prepositional: 'Lokatif',
    },
  },
};

const de: LearnPageTranslations = {
  breadcrumb: { home: 'App', learn: 'Kostenlose Grammatik-Lektionen' },
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
    'best-free-resources-learn-russian': '15 beste kostenlose Ressourcen zum Russischlernen 2026',
    'russian-cases-explained-beginners-guide': 'Russische Fälle einfach erklärt: Ein visueller Leitfaden für Anfänger',
    'best-apps-learn-russian-grammar': 'Beste Apps zum Russisch-Grammatiklernen 2026 (Ehrliche Bewertung)',
    'how-long-learn-russian': 'Wie lange dauert es, Russisch zu lernen? (Realistischer Zeitplan)',
    'torfl-trki-russian-language-exam-guide': 'TORFL-Prüfung (ТРКИ): Kompletter Leitfaden zum Russisch-Zertifikat',
    'russian-prepositions-cases-cheat-sheet': 'Russische Präpositionen und Fälle: Welcher Fall nach jeder Präposition',
  },
  practiceQuiz: {
    title: 'Übungsquiz',
    lead: 'Bereit, Ihr Wissen zu testen? Probieren Sie unser kostenloses interaktives Deklinationsquiz mit über 400 russischen Substantiven in allen Fällen und Geschlechtern.',
    cta: 'Deklinationsquiz starten →',
    byCaseTitle: 'Oder einen bestimmten Fall üben:',
    allCases: 'Alle Fälle',
    cases: {
      accusative: 'Akkusativ',
      genitive: 'Genitiv',
      dative: 'Dativ',
      instrumental: 'Instrumental',
      prepositional: 'Präpositional',
    },
  },
};

const pl: LearnPageTranslations = {
  breadcrumb: { home: 'App', learn: 'Darmowe lekcje gramatyki' },
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
    'best-free-resources-learn-russian': '15 najlepszych darmowych zasobów do nauki rosyjskiego w 2026',
    'russian-cases-explained-beginners-guide': 'Rosyjskie przypadki wyjaśnione prosto: przewodnik wizualny dla początkujących',
    'best-apps-learn-russian-grammar': 'Najlepsze aplikacje do nauki gramatyki rosyjskiej w 2026 (Szczera recenzja)',
    'how-long-learn-russian': 'Ile czasu zajmuje nauka rosyjskiego? (Realistyczny harmonogram)',
    'torfl-trki-russian-language-exam-guide': 'Egzamin TORFL (ТРКИ): Kompletny przewodnik',
    'russian-prepositions-cases-cheat-sheet': 'Rosyjskie przyimki i przypadki: Który przypadek po każdym przyimku',
  },
  practiceQuiz: {
    title: 'Quiz praktyczny',
    lead: 'Gotowy przetestować swoją wiedzę? Wypróbuj nasz darmowy interaktywny quiz deklinacyjny z ponad 400 rosyjskimi rzeczownikami we wszystkich przypadkach i rodzajach.',
    cta: 'Rozpocznij quiz deklinacyjny →',
    byCaseTitle: 'Lub ćwicz konkretny przypadek:',
    allCases: 'Wszystkie przypadki',
    cases: {
      accusative: 'Biernik',
      genitive: 'Dopełniacz',
      dative: 'Celownik',
      instrumental: 'Narzędnik',
      prepositional: 'Miejscownik',
    },
  },
};

const ru: LearnPageTranslations = {
  breadcrumb: { home: 'App', learn: 'Бесплатные уроки грамматики' },
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
    'best-free-resources-learn-russian': '15 лучших бесплатных ресурсов для изучения русского в 2026',
    'russian-cases-explained-beginners-guide': 'Русские падежи объяснены просто: визуальный гид для начинающих',
    'best-apps-learn-russian-grammar': 'Лучшие приложения для изучения русской грамматики в 2026 (Честный обзор)',
    'how-long-learn-russian': 'Сколько времени нужно, чтобы выучить русский? (Реалистичные сроки)',
    'torfl-trki-russian-language-exam-guide': 'Экзамен TORFL (ТРКИ): полный гид',
    'russian-prepositions-cases-cheat-sheet': 'Русские предлоги и падежи: какой падеж после каждого предлога',
  },
  practiceQuiz: {
    title: 'Тренировочный тест',
    lead: 'Готовы проверить свои знания? Попробуйте наш бесплатный интерактивный тест на склонения с более чем 400 русскими существительными по всем падежам и родам.',
    cta: 'Начать тест на склонения →',
    byCaseTitle: 'Или практикуйте конкретный падеж:',
    allCases: 'Все падежи',
    cases: {
      accusative: 'Винительный',
      genitive: 'Родительный',
      dative: 'Дательный',
      instrumental: 'Творительный',
      prepositional: 'Предложный',
    },
  },
};

const es: LearnPageTranslations = {
  breadcrumb: { home: 'App', learn: 'Lecciones de gramática gratis' },
  header: {
    title: 'Aprende gramática rusa y casos',
    lead: 'Lecciones y artículos gratuitos sobre declinaciones rusas, casos gramaticales y vocabulario.',
  },
  sections: { grammarLessons: 'Lecciones de gramática', articles: 'Artículos' },
  badges: { lesson: 'Lección', article: 'Artículo' },
  lessonTitles: {
    'russian-cases-complete-guide': 'Guía completa de los casos rusos',
    'dative-case-declension': 'Cómo declinar en dativo en ruso',
    'russian-case-endings-cheatsheet': 'Terminaciones de los casos rusos: la chuleta definitiva',
    'russian-prepositions-and-cases':
      'Preposiciones rusas y casos: ¿qué preposición rige qué caso?',
    'russian-genitive-case': 'Casos genitivo ruso: reglas, terminaciones y 32 ejemplos',
    'russian-dative-case': 'Caso dativo ruso: cómo decir «a» y «para» en ruso',
    'russian-prepositional-case': 'Caso preposicional ruso: el único caso que nunca va solo',
    'russian-accusative-case':
      'Caso acusativo ruso: objetos directos, animado vs inanimado y verbos de movimiento',
    'russian-instrumental-case':
      'Caso instrumental ruso: cuándo usarlo y por qué es más fácil de lo que crees',
  },
  articleTitles: {
    'top-10-apps-russian': 'Top 10 apps para aprender ruso en 2026',
    'top-10-russian-case-mistakes':
      'Top 10 errores de angloparlantes con los casos rusos (y cómo corregirlos)',
    'how-to-practice-russian-cases': 'Cómo practicar los casos rusos: 5 métodos probados',
    'best-free-resources-learn-russian': '15 mejores recursos gratuitos para aprender ruso en 2026',
    'russian-cases-explained-beginners-guide': 'Casos rusos explicados de forma simple: guía visual para principiantes',
    'best-apps-learn-russian-grammar': 'Mejores apps para aprender gramática rusa en 2026 (Reseña honesta)',
    'how-long-learn-russian': '¿Cuánto tiempo se tarda en aprender ruso? (Cronología realista)',
    'torfl-trki-russian-language-exam-guide': 'Examen TORFL (ТРКИ): guía completa del test de ruso',
    'russian-prepositions-cases-cheat-sheet': 'Chuleta de preposiciones y casos rusos: qué caso después de cada preposición',
  },
  practiceQuiz: {
    title: 'Cuestionario de práctica',
    lead: '¿Listo para poner a prueba tus conocimientos? Prueba nuestro cuestionario interactivo gratuito con más de 400 sustantivos rusos, todos los casos y géneros.',
    cta: 'Iniciar cuestionario de declinaciones →',
    byCaseTitle: 'O practica un caso específico:',
    allCases: 'Todos los casos',
    cases: {
      accusative: 'Acusativo',
      genitive: 'Genitivo',
      dative: 'Dativo',
      instrumental: 'Instrumental',
      prepositional: 'Preposicional',
    },
  },
};

const it: LearnPageTranslations = {
  breadcrumb: { home: 'App', learn: 'Lezioni di grammatica gratuite' },
  header: {
    title: 'Impara la grammatica russa e i casi',
    lead: 'Lezioni e articoli gratuiti su declinazioni russe, casi grammaticali e lessico.',
  },
  sections: { grammarLessons: 'Lezioni di grammatica', articles: 'Articoli' },
  badges: { lesson: 'Lezione', article: 'Articolo' },
  lessonTitles: {
    'russian-cases-complete-guide': 'Guida completa ai casi russi',
    'dative-case-declension': 'Come declinare al dativo in russo',
    'russian-case-endings-cheatsheet': 'Terminazioni dei casi russi: il prontuario definitivo',
    'russian-prepositions-and-cases':
      'Preposizioni russe e casi: quale preposizione richiede quale caso?',
    'russian-genitive-case': 'Caso genitivo russo: regole, terminazioni e 32 esempi',
    'russian-dative-case': 'Caso dativo russo: come dire «a» e «per» in russo',
    'russian-prepositional-case': 'Caso preposizionale russo: l\'unico caso che non sta mai da solo',
    'russian-accusative-case':
      'Caso accusativo russo: complementi oggetto, animato vs inanimato e verbi di moto',
    'russian-instrumental-case':
      'Caso strumentale russo: quando usarlo e perché è più facile di quanto pensi',
  },
  articleTitles: {
    'top-10-apps-russian': 'Top 10 app per imparare il russo nel 2026',
    'top-10-russian-case-mistakes':
      'Top 10 errori degli anglofoni con i casi russi (e come correggerli)',
    'how-to-practice-russian-cases': 'Come esercitarsi sui casi russi: 5 metodi collaudati',
    'best-free-resources-learn-russian': '15 migliori risorse gratuite per imparare il russo nel 2026',
    'russian-cases-explained-beginners-guide': 'Casi russi spiegati in modo semplice: guida visiva per principianti',
    'best-apps-learn-russian-grammar': 'Migliori app per imparare la grammatica russa nel 2026 (Recensione onesta)',
    'how-long-learn-russian': 'Quanto tempo ci vuole per imparare il russo? (Cronologia realistica)',
    'torfl-trki-russian-language-exam-guide': 'Esame TORFL (ТРКИ): guida completa al test di russo',
    'russian-prepositions-cases-cheat-sheet': 'Prontuario preposizioni e casi russi: quale caso dopo ogni preposizione',
  },
  practiceQuiz: {
    title: 'Quiz di esercizio',
    lead: 'Pronto a mettere alla prova le tue conoscenze? Prova il nostro quiz interattivo gratuito con oltre 400 sostantivi russi, tutti i casi e generi.',
    cta: 'Inizia un quiz di declinazioni →',
    byCaseTitle: 'Oppure esercitati su un caso specifico:',
    allCases: 'Tutti i casi',
    cases: {
      accusative: 'Accusativo',
      genitive: 'Genitivo',
      dative: 'Dativo',
      instrumental: 'Strumentale',
      prepositional: 'Preposizionale',
    },
  },
};

const pt: LearnPageTranslations = {
  breadcrumb: { home: 'App', learn: 'Lições de gramática grátis' },
  header: {
    title: 'Aprende gramática russa e casos',
    lead: 'Lições e artigos gratuitos sobre declinações russas, casos gramaticais e vocabulário.',
  },
  sections: { grammarLessons: 'Lições de gramática', articles: 'Artigos' },
  badges: { lesson: 'Lição', article: 'Artigo' },
  lessonTitles: {
    'russian-cases-complete-guide': 'Guia completo dos casos russos',
    'dative-case-declension': 'Como declinar no dativo em russo',
    'russian-case-endings-cheatsheet': 'Terminações dos casos russos: o resumo definitivo',
    'russian-prepositions-and-cases':
      'Preposições russas e casos: que preposição rege que caso?',
    'russian-genitive-case': 'Caso genitivo russo: regras, terminações e 32 exemplos',
    'russian-dative-case': 'Caso dativo russo: como dizer «a» e «para» em russo',
    'russian-prepositional-case': 'Caso preposicional russo: o único caso que nunca fica sozinho',
    'russian-accusative-case':
      'Caso acusativo russo: complementos diretos, animado vs inanimado e verbos de movimento',
    'russian-instrumental-case':
      'Caso instrumental russo: quando usar e por que é mais fácil do que pensas',
  },
  articleTitles: {
    'top-10-apps-russian': 'Top 10 apps para aprender russo em 2026',
    'top-10-russian-case-mistakes':
      'Top 10 erros de anglófonos com os casos russos (e como corrigir)',
    'how-to-practice-russian-cases': 'Como praticar os casos russos: 5 métodos comprovados',
    'best-free-resources-learn-russian': '15 melhores recursos gratuitos para aprender russo em 2026',
    'russian-cases-explained-beginners-guide': 'Casos russos explicados de forma simples: guia visual para iniciantes',
    'best-apps-learn-russian-grammar': 'Melhores apps para aprender gramática russa em 2026 (Análise honesta)',
    'how-long-learn-russian': 'Quanto tempo demora a aprender russo? (Cronologia realista)',
    'torfl-trki-russian-language-exam-guide': 'Exame TORFL (ТРКИ): guia completo do teste de russo',
    'russian-prepositions-cases-cheat-sheet': 'Resumo de preposições e casos russos: que caso após cada preposição',
  },
  practiceQuiz: {
    title: 'Questionário de prática',
    lead: 'Pronto para testar os teus conhecimentos? Experimenta o nosso questionário interativo gratuito com mais de 400 substantivos russos, todos os casos e géneros.',
    cta: 'Iniciar questionário de declinações →',
    byCaseTitle: 'Ou pratica um caso específico:',
    allCases: 'Todos os casos',
    cases: {
      accusative: 'Acusativo',
      genitive: 'Genitivo',
      dative: 'Dativo',
      instrumental: 'Instrumental',
      prepositional: 'Preposicional',
    },
  },
};

const nl: LearnPageTranslations = {
  breadcrumb: { home: 'App', learn: 'Gratis grammatica-lessen' },
  header: {
    title: 'Leer Russische grammatica en gevallen',
    lead: 'Gratis lessen en artikelen over Russische verbuigingen, grammaticale gevallen en vocabulaire.',
  },
  sections: { grammarLessons: 'Grammatica-lessen', articles: 'Artikelen' },
  badges: { lesson: 'Les', article: 'Artikel' },
  lessonTitles: {
    'russian-cases-complete-guide': 'De complete gids voor Russische gevallen',
    'dative-case-declension': 'Hoe te verbuigen in de datief in het Russisch',
    'russian-case-endings-cheatsheet': 'Russische geval-eindes: het ultieme spiekbriefje',
    'russian-prepositions-and-cases':
      'Russische voorzetsels en gevallen: welk voorzetsel eist welk geval?',
    'russian-genitive-case': 'Russisch genitief: regels, eindes en 32 voorbeelden',
    'russian-dative-case': 'Russisch datief: hoe «aan» en «voor» te zeggen in het Russisch',
    'russian-prepositional-case': 'Russisch prepositioneel: het enige geval dat nooit alleen staat',
    'russian-accusative-case':
      'Russisch accusatief: lijdende voorwerpen, bezield vs onbezield en bewegingswerkwoorden',
    'russian-instrumental-case':
      'Russisch instrumentaal: wanneer te gebruiken en waarom het makkelijker is dan je denkt',
  },
  articleTitles: {
    'top-10-apps-russian': 'Top 10 apps om Russisch te leren in 2026',
    'top-10-russian-case-mistakes':
      'Top 10 fouten van Engelstaligen met Russische gevallen (en hoe ze te corrigeren)',
    'how-to-practice-russian-cases': 'Hoe Russische gevallen te oefenen: 5 bewezen methodes',
    'best-free-resources-learn-russian': '15 beste gratis bronnen om Russisch te leren in 2026',
    'russian-cases-explained-beginners-guide': 'Russische gevallen eenvoudig uitgelegd: een visuele gids voor beginners',
    'best-apps-learn-russian-grammar': 'Beste apps om Russische grammatica te leren in 2026 (Eerlijke recensie)',
    'how-long-learn-russian': 'Hoe lang duurt het om Russisch te leren? (Realistisch tijdschema)',
    'torfl-trki-russian-language-exam-guide': 'TORFL-examen (ТРКИ): complete gids voor de Russische taalvaardigheidstest',
    'russian-prepositions-cases-cheat-sheet': 'Russische voorzetsels en gevallen spiekbriefje: welk geval na elk voorzetsel',
  },
  practiceQuiz: {
    title: 'Oefenquiz',
    lead: 'Klaar om je kennis te testen? Probeer onze gratis interactieve verbuigingsquiz met meer dan 400 Russische zelfstandige naamwoorden, alle gevallen en geslachten.',
    cta: 'Start een verbuigingsquiz →',
    byCaseTitle: 'Of oefen een specifiek geval:',
    allCases: 'Alle gevallen',
    cases: {
      accusative: 'Accusatief',
      genitive: 'Genitief',
      dative: 'Datief',
      instrumental: 'Instrumentaal',
      prepositional: 'Prepositioneel',
    },
  },
};

const translations: Record<LandingLanguage, LearnPageTranslations> = {
  en_en: en,
  fr_fr: fr,
  tr_tr: tr,
  de_de: de,
  pl_pl: pl,
  es_es: es,
  it_it: it,
  pt_pt: pt,
  nl_nl: nl,
  ru_ru: ru,
};

export function getLearnPageTranslations(language: LandingLanguage): LearnPageTranslations {
  return translations[language] ?? translations.en_en;
}
