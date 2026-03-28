/**
 * Traductions pour la page /practice (quiz de déclinaisons multi-mots)
 */

import type { LandingLanguage } from './landingTranslations';

export interface PracticeTranslations {
  metadata: {
    title: string;
    description: string;
    keywords: string;
  };
  /** Libellé d’accessibilité pour la navigation du fil d’Ariane */
  breadcrumbAria: string;
  breadcrumb: { home: string; practice: string };
  h1: string;
  subtitle: string;
  config: {
    title: string;
    casesLabel: string;
    gendersLabel: string;
    singular: string;
    plural: string;
    masculine: string;
    feminine: string;
    neuter: string;
    startQuiz: string;
    cases: Record<string, string>;
    wordsAvailable: (count: number) => string;
  };
  quiz: {
    questionLabel: string;
    singular: string;
    plural: string;
    next: string;
    seeResults: string;
    correct: string;
    incorrect: string;
  };
  results: {
    score: string;
    tryAgain: string;
    newQuiz: string;
  };
  faq: {
    title: string;
    items: { question: string; answer: string }[];
  };
  /** Bloc de liens sous la FAQ */
  faqLinks: {
    diveDeeper: string;
    grammarLessons: string;
    russianWords: string;
    chelovekExample: string;
  };
  /** Texte SEO sous le quiz (crawl + utilisateurs) */
  seo: {
    whyTitle: string;
    introP1: string;
    introP2: string;
    introP3: string;
    howItWorksTitle: string;
    howItWorksSteps: { title: string; desc: string }[];
    practiceByCaseTitle: string;
    footerIntro: string;
    footerWordsLink: string;
    footerMid: string;
    footerLessonsLink: string;
    footerOutro: string;
  };
  leadMagnet: {
    title: string;
    description: string;
    ctaText: string;
  };
  /** Open Graph (image partagée) */
  og: {
    bannerTitle: string;
    bannerSubtitle: string;
    footerTagline: string;
  };
}

const en: PracticeTranslations = {
  metadata: {
    title: 'Practice Russian Declensions Online — Free Quiz',
    description:
      'Free interactive quiz to practice Russian noun declensions. Choose cases, genders, and test your knowledge with 10 multiple-choice questions.',
    keywords:
      'practice Russian declensions, Russian cases quiz, Russian grammar test, declension exercises, Russian noun quiz',
  },
  breadcrumbAria: 'Breadcrumb',
  breadcrumb: { home: 'Home', practice: 'Practice' },
  h1: 'Practice Russian Declensions',
  subtitle: 'Test your knowledge of Russian noun cases with a customizable quiz. Select which cases and genders to practice, then answer 10 questions.',
  config: {
    title: 'Configure your quiz',
    casesLabel: 'Cases',
    gendersLabel: 'Genders',
    singular: 'Singular',
    plural: 'Plural',
    masculine: 'Masculine',
    feminine: 'Feminine',
    neuter: 'Neuter',
    startQuiz: 'Start Quiz',
    cases: {
      nominative: 'Nominative',
      accusative: 'Accusative',
      genitive: 'Genitive',
      dative: 'Dative',
      instrumental: 'Instrumental',
      prepositional: 'Prepositional',
    },
    wordsAvailable: (n) => `${n} words available`,
  },
  quiz: {
    questionLabel: 'Question',
    singular: 'Singular',
    plural: 'Plural',
    next: 'Next',
    seeResults: 'See results',
    correct: 'Correct!',
    incorrect: 'Incorrect',
  },
  results: {
    score: 'Score',
    tryAgain: 'Try again (same settings)',
    newQuiz: 'New quiz',
  },
  faq: {
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'How does this Russian declension quiz work?',
        answer: 'Select which grammatical cases (accusative, genitive, dative, instrumental, prepositional) and genders (masculine, feminine, neuter) you want to practice. The quiz generates 10 multiple-choice questions from our database of 400+ Russian nouns. For each question, you see a word in its base form and must select the correct declined form.',
      },
      {
        question: 'What are the 6 Russian grammatical cases?',
        answer: 'Russian has 6 grammatical cases: Nominative (именительный) — the subject, Accusative (винительный) — the direct object, Genitive (родительный) — possession, Dative (дательный) — indirect object, Instrumental (творительный) — means or instrument, and Prepositional (предложный) — location or topic. This quiz covers all cases except Nominative, since it is the base (dictionary) form.',
      },
      {
        question: 'How many words are available in the quiz?',
        answer: 'The quiz draws from a database of over 400 Russian nouns, covering masculine, feminine, and neuter genders. Each word has been fully declined across all 6 cases in both singular and plural forms, giving you thousands of possible questions.',
      },
      {
        question: 'Is this Russian declension quiz free?',
        answer: 'Yes, this quiz is completely free with no account required. You can take as many quizzes as you want, with different case and gender combinations each time. For mobile practice on the go, you can also download the Russian Cases with Anna app.',
      },
      {
        question: 'How can I practice specific Russian cases?',
        answer: 'Use the configuration panel above to select exactly which cases you want to focus on. For example, beginners can start with just Accusative and Genitive, while advanced learners can practice the more challenging Instrumental and Prepositional cases. You can also filter by gender to focus on specific declension patterns.',
      },
      {
        question: 'What is the difference between singular and plural declensions?',
        answer: 'Russian nouns change their endings differently in singular and plural forms. For example, "книга" (book) becomes "книгу" in accusative singular, but "книги" in accusative plural. You can toggle singular and plural independently for each case to focus on the forms you find most challenging.',
      },
    ],
  },
  faqLinks: {
    diveDeeper: 'Want to dive deeper into Russian grammar?',
    grammarLessons: 'Grammar lessons',
    russianWords: '400+ Russian words',
    chelovekExample: 'человек declension',
  },
  seo: {
    whyTitle: 'Why practice Russian declensions online?',
    introP1:
      'Russian has 6 grammatical cases — Nominative, Accusative, Genitive, Dative, Instrumental, and Prepositional — and every noun changes its ending depending on its role in a sentence. Mastering these declension patterns is essential for speaking and writing correct Russian.',
    introP2:
      'This free online quiz lets you practice Russian noun declensions with over 400 words across all genders (masculine, feminine, neuter). Each quiz generates 10 multiple-choice questions, showing you a word in its base form and asking you to select the correct declined form for a specific case.',
    introP3:
      'You can customize your practice by selecting which cases and number forms (singular or plural) to focus on. Beginners often start with accusative and genitive; intermediate learners can work on dative, instrumental, and prepositional. Use the case-specific links below for targeted practice.',
    howItWorksTitle: 'How it works',
    howItWorksSteps: [
      {
        title: 'Choose your focus',
        desc: 'Select which cases (accusative, genitive, dative, instrumental, prepositional) and genders to practice.',
      },
      {
        title: 'Answer 10 questions',
        desc: 'For each question, see a noun in its base form and pick the correct declined form from 4 options.',
      },
      {
        title: 'Review and improve',
        desc: 'Get instant feedback on every answer, then review your score and the correct forms you missed.',
      },
    ],
    practiceByCaseTitle: 'Practice by case',
    footerIntro: 'Want to see the full declension tables? ',
    footerWordsLink: 'Browse all 400+ Russian words',
    footerMid: ' or explore our ',
    footerLessonsLink: 'grammar lessons',
    footerOutro: ' for in-depth explanations of each case.',
  },
  leadMagnet: {
    title: 'Want more practice?',
    description:
      'Download Russian Cases with Anna for 136 interactive quizzes, 128 grammar lessons, and complete declension tables.',
    ctaText: 'Get the app',
  },
  og: {
    bannerTitle: 'Practice Russian declensions',
    bannerSubtitle: 'Free interactive quiz — 400+ words — all 6 cases',
    footerTagline: 'Free online tool to practice Russian cases',
  },
};

const fr: PracticeTranslations = {
  metadata: {
    title: 'Pratiquer les déclinaisons russes en ligne — Quiz gratuit',
    description:
      'Quiz interactif gratuit pour pratiquer les déclinaisons des noms russes. Choisissez les cas, les genres et testez vos connaissances avec 10 questions.',
    keywords:
      'déclinaisons russes, quiz cas russes, grammaire russe, exercices de déclinaison, quiz noms russes',
  },
  breadcrumbAria: 'Fil d’Ariane',
  breadcrumb: { home: 'Accueil', practice: 'Entraînement' },
  h1: 'Pratiquer les déclinaisons russes',
  subtitle: 'Testez vos connaissances des cas russes avec un quiz personnalisable. Sélectionnez les cas et les genres à pratiquer, puis répondez à 10 questions.',
  config: {
    title: 'Configurez votre quiz',
    casesLabel: 'Cas',
    gendersLabel: 'Genres',
    singular: 'Singulier',
    plural: 'Pluriel',
    masculine: 'Masculin',
    feminine: 'Féminin',
    neuter: 'Neutre',
    startQuiz: 'Lancer le quiz',
    cases: {
      nominative: 'Nominatif',
      accusative: 'Accusatif',
      genitive: 'Génitif',
      dative: 'Datif',
      instrumental: 'Instrumental',
      prepositional: 'Prépositionnel',
    },
    wordsAvailable: (n) => `${n} mots disponibles`,
  },
  quiz: {
    questionLabel: 'Question',
    singular: 'Singulier',
    plural: 'Pluriel',
    next: 'Suivant',
    seeResults: 'Voir les résultats',
    correct: 'Correct !',
    incorrect: 'Incorrect',
  },
  results: {
    score: 'Score',
    tryAgain: 'Recommencer (mêmes réglages)',
    newQuiz: 'Nouveau quiz',
  },
  faq: {
    title: 'Questions fréquentes',
    items: [
      {
        question: 'Comment fonctionne ce quiz de déclinaisons russes ?',
        answer: 'Sélectionnez les cas grammaticaux (accusatif, génitif, datif, instrumental, prépositionnel) et les genres (masculin, féminin, neutre) que vous souhaitez pratiquer. Le quiz génère 10 questions à choix multiples à partir de notre base de plus de 400 noms russes. Pour chaque question, vous voyez un mot dans sa forme de base et devez sélectionner la forme déclinée correcte.',
      },
      {
        question: 'Quels sont les 6 cas grammaticaux russes ?',
        answer: 'Le russe a 6 cas grammaticaux : Nominatif (именительный) — le sujet, Accusatif (винительный) — le complément d\'objet direct, Génitif (родительный) — la possession, Datif (дательный) — le complément d\'objet indirect, Instrumental (творительный) — le moyen ou l\'instrument, et Prépositionnel (предложный) — le lieu ou le sujet. Ce quiz couvre tous les cas sauf le Nominatif, car c\'est la forme de base (dictionnaire).',
      },
      {
        question: 'Combien de mots sont disponibles dans le quiz ?',
        answer: 'Le quiz puise dans une base de données de plus de 400 noms russes, couvrant les genres masculin, féminin et neutre. Chaque mot a été entièrement décliné dans les 6 cas au singulier et au pluriel, offrant des milliers de questions possibles.',
      },
      {
        question: 'Ce quiz de déclinaisons russes est-il gratuit ?',
        answer: 'Oui, ce quiz est entièrement gratuit et sans inscription. Vous pouvez faire autant de quiz que vous voulez, avec différentes combinaisons de cas et de genres à chaque fois. Pour vous entraîner sur mobile, vous pouvez aussi télécharger l\'app Russian Cases with Anna.',
      },
      {
        question: 'Comment puis-je pratiquer des cas russes spécifiques ?',
        answer: 'Utilisez le panneau de configuration ci-dessus pour sélectionner exactement les cas sur lesquels vous souhaitez vous concentrer. Par exemple, les débutants peuvent commencer avec l\'accusatif et le génitif uniquement, tandis que les apprenants avancés peuvent pratiquer l\'instrumental et le prépositionnel, plus difficiles.',
      },
      {
        question: 'Quelle est la différence entre les déclinaisons au singulier et au pluriel ?',
        answer: 'Les noms russes changent leurs terminaisons différemment au singulier et au pluriel. Par exemple, « книга » (livre) devient « книгу » à l\'accusatif singulier, mais « книги » à l\'accusatif pluriel. Vous pouvez activer le singulier et le pluriel indépendamment pour chaque cas afin de vous concentrer sur les formes qui vous posent le plus de difficultés.',
      },
    ],
  },
  faqLinks: {
    diveDeeper: 'Envie d’aller plus loin en grammaire russe ?',
    grammarLessons: 'Leçons de grammaire',
    russianWords: 'Plus de 400 mots russes',
    chelovekExample: 'Déclinaison de человек',
  },
  seo: {
    whyTitle: 'Pourquoi pratiquer les déclinaisons russes en ligne ?',
    introP1:
      'Le russe compte 6 cas grammaticaux — nominatif, accusatif, génitif, datif, instrumental et prépositionnel — et chaque nom change de terminaison selon son rôle dans la phrase. Maîtriser ces schémas est indispensable pour parler et écrire correctement.',
    introP2:
      'Ce quiz en ligne gratuit vous permet de pratiquer les déclinaisons avec plus de 400 mots et tous les genres (masculin, féminin, neutre). Chaque partie comporte 10 questions à choix multiples : vous voyez la forme de base et choisissez la bonne forme déclinée pour un cas donné.',
    introP3:
      'Vous choisissez les cas et les nombres (singulier ou pluriel) à travailler. Les débutants commencent souvent par l’accusatif et le génitif ; les niveaux intermédiaires peuvent se concentrer sur le datif, l’instrumental et le prépositionnel. Utilisez les liens par cas ci-dessous pour un entraînement ciblé.',
    howItWorksTitle: 'Comment ça marche',
    howItWorksSteps: [
      {
        title: 'Choisissez votre objectif',
        desc: 'Sélectionnez les cas (accusatif, génitif, datif, instrumental, prépositionnel) et les genres à pratiquer.',
      },
      {
        title: 'Répondez à 10 questions',
        desc: 'Pour chaque question, un nom à la forme de base : choisissez la bonne forme parmi 4 propositions.',
      },
      {
        title: 'Corrigez et progressez',
        desc: 'Retour immédiat après chaque réponse, puis récapitulatif du score et des formes à revoir.',
      },
    ],
    practiceByCaseTitle: 'Pratiquer par cas',
    footerIntro: 'Voir les tableaux de déclinaison complets ? ',
    footerWordsLink: 'Parcourir les 400+ mots russes',
    footerMid: ' ou consulter nos ',
    footerLessonsLink: 'leçons de grammaire',
    footerOutro: ' pour des explications détaillées sur chaque cas.',
  },
  leadMagnet: {
    title: 'Encore plus d’entraînement ?',
    description:
      'Téléchargez Russian Cases with Anna : 136 quiz interactifs, 128 leçons de grammaire et des tableaux de déclinaison complets.',
    ctaText: 'Télécharger l’app',
  },
  og: {
    bannerTitle: 'Pratiquer les déclinaisons russes',
    bannerSubtitle: 'Quiz interactif gratuit — 400+ mots — les 6 cas',
    footerTagline: 'Outil en ligne gratuit pour les cas russes',
  },
};

const de: PracticeTranslations = {
  metadata: {
    title: 'Russische Deklinationen online üben — Kostenloses Quiz',
    description:
      'Kostenloses interaktives Quiz zum Üben russischer Substantiv-Deklinationen. Wählen Sie Fälle, Geschlechter und testen Sie Ihr Wissen mit 10 Fragen.',
    keywords:
      'Russische Deklinationen üben, Kasus-Quiz Russisch, Russisch Grammatik Test, Deklinationsübungen, Substantiv-Quiz',
  },
  breadcrumbAria: 'Brotkrümelnavigation',
  breadcrumb: { home: 'Startseite', practice: 'Übung' },
  h1: 'Russische Deklinationen üben',
  subtitle: 'Testen Sie Ihr Wissen über russische Fälle mit einem anpassbaren Quiz. Wählen Sie Fälle und Geschlechter, dann beantworten Sie 10 Fragen.',
  config: {
    title: 'Quiz konfigurieren',
    casesLabel: 'Fälle',
    gendersLabel: 'Geschlechter',
    singular: 'Singular',
    plural: 'Plural',
    masculine: 'Maskulin',
    feminine: 'Feminin',
    neuter: 'Neutrum',
    startQuiz: 'Quiz starten',
    cases: {
      nominative: 'Nominativ',
      accusative: 'Akkusativ',
      genitive: 'Genitiv',
      dative: 'Dativ',
      instrumental: 'Instrumental',
      prepositional: 'Präpositional',
    },
    wordsAvailable: (n) => `${n} Wörter verfügbar`,
  },
  quiz: {
    questionLabel: 'Frage',
    singular: 'Singular',
    plural: 'Plural',
    next: 'Weiter',
    seeResults: 'Ergebnisse anzeigen',
    correct: 'Richtig!',
    incorrect: 'Falsch',
  },
  results: {
    score: 'Ergebnis',
    tryAgain: 'Nochmal versuchen (gleiche Einstellungen)',
    newQuiz: 'Neues Quiz',
  },
  faq: {
    title: 'Häufig gestellte Fragen',
    items: [
      {
        question: 'Wie funktioniert dieses Quiz zur russischen Deklination?',
        answer: 'Wählen Sie die grammatischen Fälle (Akkusativ, Genitiv, Dativ, Instrumental, Präpositional) und Geschlechter (männlich, weiblich, sächlich) aus, die Sie üben möchten. Das Quiz generiert 10 Multiple-Choice-Fragen aus unserer Datenbank von über 400 russischen Substantiven.',
      },
      {
        question: 'Welche 6 grammatischen Fälle gibt es im Russischen?',
        answer: 'Russisch hat 6 grammatische Fälle: Nominativ (именительный), Akkusativ (винительный), Genitiv (родительный), Dativ (дательный), Instrumental (творительный) und Präpositional (предложный). Dieses Quiz deckt alle Fälle außer dem Nominativ ab.',
      },
      {
        question: 'Wie viele Wörter sind im Quiz verfügbar?',
        answer: 'Das Quiz greift auf eine Datenbank von über 400 russischen Substantiven zurück, die männliche, weibliche und sächliche Geschlechter abdecken. Jedes Wort wurde vollständig in allen 6 Fällen im Singular und Plural dekliniert.',
      },
      {
        question: 'Ist dieses Quiz kostenlos?',
        answer: 'Ja, dieses Quiz ist völlig kostenlos und ohne Registrierung. Sie können so viele Quiz machen, wie Sie möchten. Für mobiles Üben können Sie auch die App Russian Cases with Anna herunterladen.',
      },
      {
        question: 'Wie kann ich bestimmte russische Fälle üben?',
        answer: 'Verwenden Sie das Konfigurationspanel oben, um genau auszuwählen, welche Fälle Sie üben möchten. Anfänger können mit Akkusativ und Genitiv beginnen, fortgeschrittene Lernende können Instrumental und Präpositional üben.',
      },
      {
        question: 'Was ist der Unterschied zwischen Singular- und Pluraldeklinationen?',
        answer: 'Russische Substantive ändern ihre Endungen im Singular und Plural unterschiedlich. Zum Beispiel wird „книга" (Buch) im Akkusativ Singular zu „книгу", aber im Akkusativ Plural zu „книги".',
      },
    ],
  },
  faqLinks: {
    diveDeeper: 'Möchten Sie die russische Grammatik vertiefen?',
    grammarLessons: 'Grammatiklektionen',
    russianWords: 'Über 400 russische Wörter',
    chelovekExample: 'Deklination von человек',
  },
  seo: {
    whyTitle: 'Warum russische Deklinationen online üben?',
    introP1:
      'Im Russischen gibt es 6 grammatische Fälle — Nominativ, Akkusativ, Genitiv, Dativ, Instrumental und Präpositional — und jedes Substantiv ändert je nach Satzrolle seine Endung. Diese Muster zu beherrschen ist die Basis für korrektes Russisch.',
    introP2:
      'Dieses kostenlose Online-Quiz lässt Sie mit über 400 Wörtern und allen Geschlechtern üben. Pro Durchlauf erhalten Sie 10 Multiple-Choice-Fragen: Basisform des Nomens und die richtige Form für einen bestimmten Fall wählen.',
    introP3:
      'Sie wählen Fälle und Numerus (Singular/Plural). Anfänger beginnen oft mit Akkusativ und Genitiv; Fortgeschrittene üben Dativ, Instrumental und Präpositional. Nutzen Sie die fallbezogenen Links unten für gezieltes Training.',
    howItWorksTitle: 'So funktioniert es',
    howItWorksSteps: [
      {
        title: 'Schwerpunkt wählen',
        desc: 'Fälle (Akkusativ, Genitiv, Dativ, Instrumental, Präpositional) und Geschlechter auswählen.',
      },
      {
        title: '10 Fragen beantworten',
        desc: 'Pro Frage ein Nomen in der Grundform — die richtige Form aus 4 Optionen wählen.',
      },
      {
        title: 'Auswerten und verbessern',
        desc: 'Sofortiges Feedback, danach Punktzahl und übersehene Formen nachlesen.',
      },
    ],
    practiceByCaseTitle: 'Nach Fall üben',
    footerIntro: 'Vollständige Deklinationstabellen? ',
    footerWordsLink: 'Alle 400+ russischen Wörter durchsuchen',
    footerMid: ' oder unsere ',
    footerLessonsLink: 'Grammatiklektionen',
    footerOutro: ' mit ausführlichen Erklärungen zu jedem Fall.',
  },
  leadMagnet: {
    title: 'Noch mehr üben?',
    description:
      'Russian Cases with Anna: 136 interaktive Quiz, 128 Grammatiklektionen und vollständige Deklinationstabellen.',
    ctaText: 'App holen',
  },
  og: {
    bannerTitle: 'Russische Deklinationen üben',
    bannerSubtitle: 'Kostenloses Quiz — 400+ Wörter — alle 6 Fälle',
    footerTagline: 'Kostenloses Online-Tool für russische Fälle',
  },
};

const pl: PracticeTranslations = {
  metadata: {
    title: 'Ćwicz rosyjskie deklinacje online — Darmowy quiz',
    description:
      'Darmowy interaktywny quiz do ćwiczenia deklinacji rosyjskich rzeczowników. Wybierz przypadki, rodzaje i sprawdź swoją wiedzę w 10 pytaniach.',
    keywords:
      'deklinacja rosyjska, quiz przypadków, gramatyka rosyjska, ćwiczenia deklinacji, quiz rzeczowników',
  },
  breadcrumbAria: 'Ścieżka nawigacyjna',
  breadcrumb: { home: 'Strona główna', practice: 'Ćwiczenia' },
  h1: 'Ćwicz rosyjskie deklinacje',
  subtitle: 'Sprawdź swoją wiedzę o rosyjskich przypadkach z konfigurowalnym quizem. Wybierz przypadki i rodzaje, a następnie odpowiedz na 10 pytań.',
  config: {
    title: 'Skonfiguruj quiz',
    casesLabel: 'Przypadki',
    gendersLabel: 'Rodzaje',
    singular: 'Liczba pojedyncza',
    plural: 'Liczba mnoga',
    masculine: 'Męski',
    feminine: 'Żeński',
    neuter: 'Nijaki',
    startQuiz: 'Rozpocznij quiz',
    cases: {
      nominative: 'Mianownik',
      accusative: 'Biernik',
      genitive: 'Dopełniacz',
      dative: 'Celownik',
      instrumental: 'Narzędnik',
      prepositional: 'Miejscownik',
    },
    wordsAvailable: (n) => `${n} słów dostępnych`,
  },
  quiz: {
    questionLabel: 'Pytanie',
    singular: 'Liczba pojedyncza',
    plural: 'Liczba mnoga',
    next: 'Dalej',
    seeResults: 'Zobacz wyniki',
    correct: 'Poprawnie!',
    incorrect: 'Niepoprawnie',
  },
  results: {
    score: 'Wynik',
    tryAgain: 'Spróbuj ponownie (te same ustawienia)',
    newQuiz: 'Nowy quiz',
  },
  faq: {
    title: 'Najczęściej zadawane pytania',
    items: [
      {
        question: 'Jak działa ten quiz z deklinacji rosyjskiej?',
        answer: 'Wybierz przypadki gramatyczne (biernik, dopełniacz, celownik, narzędnik, miejscownik) i rodzaje (męski, żeński, nijaki), które chcesz ćwiczyć. Quiz generuje 10 pytań wielokrotnego wyboru z naszej bazy ponad 400 rosyjskich rzeczowników.',
      },
      {
        question: 'Jakie są 6 przypadków gramatycznych w języku rosyjskim?',
        answer: 'Rosyjski ma 6 przypadków: Mianownik (именительный), Biernik (винительный), Dopełniacz (родительный), Celownik (дательный), Narzędnik (творительный) i Miejscownik (предложный). Ten quiz obejmuje wszystkie przypadki oprócz mianownika.',
      },
      {
        question: 'Ile słów jest dostępnych w quizie?',
        answer: 'Quiz korzysta z bazy danych ponad 400 rosyjskich rzeczowników, obejmujących rodzaj męski, żeński i nijaki. Każde słowo zostało w pełni odmienione we wszystkich 6 przypadkach w liczbie pojedynczej i mnogiej.',
      },
      {
        question: 'Czy ten quiz jest darmowy?',
        answer: 'Tak, ten quiz jest całkowicie darmowy i nie wymaga rejestracji. Możesz rozwiązywać tyle quizów, ile chcesz. Aby ćwiczyć na telefonie, możesz pobrać aplikację Russian Cases with Anna.',
      },
      {
        question: 'Jak mogę ćwiczyć konkretne przypadki rosyjskie?',
        answer: 'Użyj panelu konfiguracji powyżej, aby wybrać dokładnie, które przypadki chcesz ćwiczyć. Początkujący mogą zacząć od biernika i dopełniacza, zaawansowani mogą ćwiczyć narzędnik i miejscownik.',
      },
      {
        question: 'Jaka jest różnica między deklinacją w liczbie pojedynczej a mnogiej?',
        answer: 'Rosyjskie rzeczowniki zmieniają końcówki inaczej w liczbie pojedynczej i mnogiej. Na przykład „книга" (książka) w bierniku liczby pojedynczej to „книгу", ale w bierniku liczby mnogiej to „книги".',
      },
    ],
  },
  faqLinks: {
    diveDeeper: 'Chcesz pogłębić znajomość gramatyki rosyjskiej?',
    grammarLessons: 'Lekcje gramatyki',
    russianWords: 'Ponad 400 słów rosyjskich',
    chelovekExample: 'Odmiana: человек',
  },
  seo: {
    whyTitle: 'Dlaczego ćwiczyć rosyjskie deklinacje online?',
    introP1:
      'Rosyjski ma 6 przypadków — mianownik, biernik, dopełniacz, celownik, narzędnik i miejscownik — a każdy rzeczownik zmienia końcówkę w zależności od roli w zdaniu. Opanowanie tych wzorców jest niezbędne do poprawnego mówienia i pisania po rosyjsku.',
    introP2:
      'Ten darmowy quiz online pozwala ćwiczyć deklinacje z ponad 400 słowami i wszystkimi rodzajami. W każdej rundzie 10 pytań wielokrotnego wyboru: widzisz formę podstawową i wybierasz właściwą formę dla danego przypadku.',
    introP3:
      'Sam wybierasz przypadki i liczbę (pojedynczą lub mnogą). Początkujący często zaczynają od biernika i dopełniacza; średniozaawansowani od celownika, narzędnika i miejscownika. Poniższe linki prowadzą do ćwiczeń dla każdego przypadku osobno.',
    howItWorksTitle: 'Jak to działa',
    howItWorksSteps: [
      {
        title: 'Wybierz zakres',
        desc: 'Przypadki (biernik, dopełniacz, celownik, narzędnik, miejscownik) i rodzaje do ćwiczeń.',
      },
      {
        title: 'Odpowiedz na 10 pytań',
        desc: 'Przy każdym pytaniu rzeczownik w formie podstawowej — wybierz poprawną formę spośród 4 opcji.',
      },
      {
        title: 'Sprawdź i poprawiaj',
        desc: 'Natychmiastowa informacja zwrotna, potem wynik i formy do powtórki.',
      },
    ],
    practiceByCaseTitle: 'Ćwicz według przypadku',
    footerIntro: 'Chcesz zobaczyć pełne tabele deklinacji? ',
    footerWordsLink: 'Przeglądaj ponad 400 słów rosyjskich',
    footerMid: ' lub nasze ',
    footerLessonsLink: 'lekcje gramatyki',
    footerOutro: ' ze szczegółowymi wyjaśnieniami każdego przypadku.',
  },
  leadMagnet: {
    title: 'Chcesz więcej ćwiczeń?',
    description:
      'Pobierz Russian Cases with Anna: 136 quizów interaktywnych, 128 lekcji gramatyki i pełne tabele deklinacji.',
    ctaText: 'Pobierz aplikację',
  },
  og: {
    bannerTitle: 'Ćwicz rosyjskie deklinacje',
    bannerSubtitle: 'Darmowy quiz — 400+ słów — wszystkie 6 przypadków',
    footerTagline: 'Darmowe narzędzie online do przypadków rosyjskich',
  },
};

const tr: PracticeTranslations = {
  metadata: {
    title: 'Rusça çekimleri çevrimiçi pratik yapın — Ücretsiz quiz',
    description:
      'Rusça isim çekimlerini pratik yapmak için ücretsiz interaktif quiz. Durumları, cinsiyetleri seçin ve 10 soruyla bilginizi test edin.',
    keywords:
      'Rusça çekim, Rusça durum quiz, Rusça dilbilgisi, çekim alıştırmaları, isim quiz',
  },
  breadcrumbAria: 'Sayfa konumu',
  breadcrumb: { home: 'Ana Sayfa', practice: 'Alıştırma' },
  h1: 'Rusça çekimleri pratik yapın',
  subtitle: 'Özelleştirilebilir bir quiz ile Rusça isim durumlarındaki bilginizi test edin. Durumları ve cinsiyetleri seçin, ardından 10 soruyu yanıtlayın.',
  config: {
    title: 'Quizi yapılandırın',
    casesLabel: 'Durumlar',
    gendersLabel: 'Cinsiyetler',
    singular: 'Tekil',
    plural: 'Çoğul',
    masculine: 'Eril',
    feminine: 'Dişil',
    neuter: 'Nötr',
    startQuiz: 'Quize başla',
    cases: {
      nominative: 'Yalın',
      accusative: 'Belirtme',
      genitive: 'Tamlayan',
      dative: 'Yönelme',
      instrumental: 'Araç',
      prepositional: 'Edat',
    },
    wordsAvailable: (n) => `${n} kelime mevcut`,
  },
  quiz: {
    questionLabel: 'Soru',
    singular: 'Tekil',
    plural: 'Çoğul',
    next: 'Sonraki',
    seeResults: 'Sonuçları gör',
    correct: 'Doğru!',
    incorrect: 'Yanlış',
  },
  results: {
    score: 'Puan',
    tryAgain: 'Tekrar dene (aynı ayarlar)',
    newQuiz: 'Yeni quiz',
  },
  faq: {
    title: 'Sıkça Sorulan Sorular',
    items: [
      {
        question: 'Bu Rusça çekim testi nasıl çalışıyor?',
        answer: 'Pratik yapmak istediğiniz dilbilgisi durumlarını (yükleme, tamlayan, yönelme, araç, edat) ve cinsiyetleri (eril, dişil, nötr) seçin. Test, 400\'den fazla Rusça isim içeren veritabanımızdan 10 çoktan seçmeli soru oluşturur.',
      },
      {
        question: 'Rusçada 6 dilbilgisi durumu nelerdir?',
        answer: 'Rusçada 6 dilbilgisi durumu vardır: Yalın (именительный), Yükleme (винительный), Tamlayan (родительный), Yönelme (дательный), Araç (творительный) ve Edat (предложный). Bu test, Yalın dışındaki tüm durumları kapsar.',
      },
      {
        question: 'Testte kaç kelime mevcut?',
        answer: 'Test, eril, dişil ve nötr cinsiyetleri kapsayan 400\'den fazla Rusça isim içeren bir veritabanından yararlanır. Her kelime, tekil ve çoğul olarak 6 durumda tam olarak çekimlenmiştir.',
      },
      {
        question: 'Bu test ücretsiz mi?',
        answer: 'Evet, bu test tamamen ücretsiz ve kayıt gerektirmez. İstediğiniz kadar test yapabilirsiniz. Mobil pratik için Russian Cases with Anna uygulamasını da indirebilirsiniz.',
      },
      {
        question: 'Belirli Rusça durumları nasıl çalışabilirim?',
        answer: 'Yukarıdaki yapılandırma panelini kullanarak tam olarak hangi durumları çalışmak istediğinizi seçin. Yeni başlayanlar yükleme ve tamlayan ile başlayabilir, ileri düzey öğrenciler araç ve edat durumlarını çalışabilir.',
      },
      {
        question: 'Tekil ve çoğul çekimler arasındaki fark nedir?',
        answer: 'Rusça isimler tekil ve çoğulda farklı ekler alır. Örneğin, «книга» (kitap) yükleme tekilde «книгу» olurken, yükleme çoğulda «книги» olur.',
      },
    ],
  },
  faqLinks: {
    diveDeeper: 'Rusça dilbilgisinde daha derine inmek ister misiniz?',
    grammarLessons: 'Dilbilgisi dersleri',
    russianWords: '400+ Rusça kelime',
    chelovekExample: 'человек çekimi',
  },
  seo: {
    whyTitle: 'Rusça çekimlerini neden çevrimiçi çalışmalısınız?',
    introP1:
      'Rusçada 6 dilbilgisi durumu vardır — yalın, belirtme, tamlayan, yönelme, araç ve edat — ve her isim cümledeki rolüne göre son ekini değiştirir. Bu kalıpları bilmek doğru Rusça için temeldir.',
    introP2:
      'Bu ücretsiz çevrimiçi quiz, 400’den fazla kelime ve tüm cinsiyetlerle çekim pratiği yapmanızı sağlar. Her turda 10 çoktan seçmeli soru: temel formu görürsünüz ve belirli durum için doğru çekimi seçersiniz.',
    introP3:
      'Hangi durumları ve tekil/çoğulu çalışacağınızı siz seçersiniz. Yeni başlayanlar genelde belirtme ve tamlayanla başlar; orta seviye öğrenciler yönelme, araç ve edata odaklanır. Aşağıdaki duruma özel bağlantıları kullanın.',
    howItWorksTitle: 'Nasıl çalışır',
    howItWorksSteps: [
      {
        title: 'Odak seçin',
        desc: 'Çalışmak istediğiniz durumları (belirtme, tamlayan, yönelme, araç, edat) ve cinsiyetleri seçin.',
      },
      {
        title: '10 soruyu yanıtlayın',
        desc: 'Her soruda bir isim temel halde — 4 seçenekten doğru çekimi seçin.',
      },
      {
        title: 'Gözden geçirin',
        desc: 'Her yanıtta anında geri bildirim, ardından puan ve kaçırdığınız formlar.',
      },
    ],
    practiceByCaseTitle: 'Duruma göre pratik',
    footerIntro: 'Tam çekim tablolarını görmek ister misiniz? ',
    footerWordsLink: '400+ Rusça kelimeye göz atın',
    footerMid: ' veya ',
    footerLessonsLink: 'dilbilgisi derslerimizi inceleyin',
    footerOutro: ' — her durum için ayrıntılı açıklamalar.',
  },
  leadMagnet: {
    title: 'Daha fazla pratik?',
    description:
      'Russian Cases with Anna: 136 interaktif quiz, 128 dilbilgisi dersi ve tam çekim tabloları.',
    ctaText: 'Uygulamayı indir',
  },
  og: {
    bannerTitle: 'Rusça çekimleri pratik',
    bannerSubtitle: 'Ücretsiz quiz — 400+ kelime — 6 durum',
    footerTagline: 'Rusça durumları için ücretsiz çevrimiçi araç',
  },
};

const es: PracticeTranslations = {
  metadata: {
    title: 'Practica declinaciones rusas online — Cuestionario gratuito',
    description:
      'Cuestionario interactivo gratuito para practicar las declinaciones de sustantivos rusos. Elige casos, géneros y pon a prueba tus conocimientos con 10 preguntas.',
    keywords:
      'declinaciones rusas, quiz casos rusos, gramática rusa, ejercicios declinación, quiz sustantivos rusos',
  },
  breadcrumbAria: 'Migas de pan',
  breadcrumb: { home: 'Inicio', practice: 'Práctica' },
  h1: 'Practicar declinaciones rusas',
  subtitle:
    'Pon a prueba tus conocimientos de los casos rusos con un cuestionario personalizable. Selecciona qué casos y géneros practicar y responde 10 preguntas.',
  config: {
    title: 'Configura tu cuestionario',
    casesLabel: 'Casos',
    gendersLabel: 'Géneros',
    singular: 'Singular',
    plural: 'Plural',
    masculine: 'Masculino',
    feminine: 'Femenino',
    neuter: 'Neutro',
    startQuiz: 'Iniciar cuestionario',
    cases: {
      nominative: 'Nominativo',
      accusative: 'Acusativo',
      genitive: 'Genitivo',
      dative: 'Dativo',
      instrumental: 'Instrumental',
      prepositional: 'Preposicional',
    },
    wordsAvailable: (n) => `${n} palabras disponibles`,
  },
  quiz: {
    questionLabel: 'Pregunta',
    singular: 'Singular',
    plural: 'Plural',
    next: 'Siguiente',
    seeResults: 'Ver resultados',
    correct: '¡Correcto!',
    incorrect: 'Incorrecto',
  },
  results: {
    score: 'Puntuación',
    tryAgain: 'Intentar de nuevo (misma configuración)',
    newQuiz: 'Nuevo cuestionario',
  },
  faq: {
    title: 'Preguntas frecuentes',
    items: [
      {
        question: '¿Cómo funciona este cuestionario de declinaciones rusas?',
        answer:
          'Selecciona los casos gramaticales (acusativo, genitivo, dativo, instrumental, preposicional) y géneros (masculino, femenino, neutro) que quieres practicar. El cuestionario genera 10 preguntas de opción múltiple a partir de nuestra base de más de 400 sustantivos rusos. Para cada pregunta, ves una palabra en su forma base y debes elegir la forma declinada correcta.',
      },
      {
        question: '¿Cuáles son los 6 casos gramaticales del ruso?',
        answer:
          'El ruso tiene 6 casos gramaticales: Nominativo (именительный) — el sujeto, Acusativo (винительный) — el objeto directo, Genitivo (родительный) — posesión, Dativo (дательный) — objeto indirecto, Instrumental (творительный) — medio o instrumento, y Preposicional (предложный) — lugar o tema. Este cuestionario cubre todos los casos excepto el Nominativo, que es la forma base (del diccionario).',
      },
      {
        question: '¿Cuántas palabras hay disponibles en el cuestionario?',
        answer:
          'El cuestionario utiliza una base de datos de más de 400 sustantivos rusos, que cubren los géneros masculino, femenino y neutro. Cada palabra ha sido totalmente declinada en los 6 casos en singular y plural, ofreciendo miles de preguntas posibles.',
      },
      {
        question: '¿Es gratuito este cuestionario de declinaciones rusas?',
        answer:
          'Sí, este cuestionario es completamente gratuito y no requiere cuenta. Puedes hacer tantos cuestionarios como quieras, con distintas combinaciones de casos y géneros. Para practicar en el móvil, también puedes descargar la app Russian Cases with Anna.',
      },
      {
        question: '¿Cómo puedo practicar casos rusos específicos?',
        answer:
          'Usa el panel de configuración de arriba para seleccionar exactamente qué casos quieres trabajar. Por ejemplo, los principiantes pueden empezar solo con Acusativo y Genitivo, mientras que los avanzados pueden practicar Instrumental y Preposicional. También puedes filtrar por género para centrarte en patrones de declinación concretos.',
      },
      {
        question: '¿Cuál es la diferencia entre declinaciones en singular y plural?',
        answer:
          'Los sustantivos rusos cambian sus terminaciones de forma distinta en singular y plural. Por ejemplo, «книга» (libro) se convierte en «книгу» en acusativo singular, pero «книги» en acusativo plural. Puedes activar singular y plural de forma independiente para cada caso.',
      },
    ],
  },
  faqLinks: {
    diveDeeper: '¿Quieres profundizar en la gramática rusa?',
    grammarLessons: 'Lecciones de gramática',
    russianWords: 'Más de 400 palabras rusas',
    chelovekExample: 'Declinación de человек',
  },
  seo: {
    whyTitle: '¿Por qué practicar declinaciones rusas en línea?',
    introP1:
      'El ruso tiene 6 casos gramaticales — nominativo, acusativo, genitivo, dativo, instrumental y preposicional — y cada sustantivo cambia su terminación según su función en la frase. Dominar estos patrones es esencial para hablar y escribir bien.',
    introP2:
      'Este cuestionario en línea gratuito te permite practicar con más de 400 palabras y los tres géneros. Cada partida incluye 10 preguntas tipo test: ves la forma base y eliges la forma declinada correcta para un caso concreto.',
    introP3:
      'Tú eliges qué casos y qué número (singular o plural) quieres trabajar. Los principiantes suelen empezar por acusativo y genitivo; los niveles intermedios pueden centrarse en dativo, instrumental y preposicional. Usa los enlaces por caso más abajo.',
    howItWorksTitle: 'Cómo funciona',
    howItWorksSteps: [
      {
        title: 'Elige el enfoque',
        desc: 'Selecciona casos (acusativo, genitivo, dativo, instrumental, preposicional) y géneros.',
      },
      {
        title: 'Responde a 10 preguntas',
        desc: 'En cada una, un sustantivo en forma base — elige la forma correcta entre 4 opciones.',
      },
      {
        title: 'Revisa y mejora',
        desc: 'Feedback al instante, luego puntuación y formas que fallaste.',
      },
    ],
    practiceByCaseTitle: 'Practicar por caso',
    footerIntro: '¿Quieres ver las tablas de declinación completas? ',
    footerWordsLink: 'Explora las más de 400 palabras rusas',
    footerMid: ' o nuestras ',
    footerLessonsLink: 'lecciones de gramática',
    footerOutro: ' con explicaciones detalladas de cada caso.',
  },
  leadMagnet: {
    title: '¿Quieres más práctica?',
    description:
      'Descarga Russian Cases with Anna: 136 cuestionarios interactivos, 128 lecciones y tablas de declinación completas.',
    ctaText: 'Obtener la app',
  },
  og: {
    bannerTitle: 'Practicar declinaciones rusas',
    bannerSubtitle: 'Cuestionario gratuito — 400+ palabras — los 6 casos',
    footerTagline: 'Herramienta online gratuita para los casos rusos',
  },
};

const it: PracticeTranslations = {
  metadata: {
    title: 'Esercitati con le declinazioni russe online — Quiz gratuito',
    description:
      'Quiz interattivo gratuito per esercitarsi sulle declinazioni dei sostantivi russi. Scegli casi, generi e metti alla prova le tue conoscenze con 10 domande.',
    keywords:
      'declinazioni russe, quiz casi russi, grammatica russa, esercizi declinazione, quiz sostantivi russi',
  },
  breadcrumbAria: 'Percorso di navigazione',
  breadcrumb: { home: 'Home', practice: 'Esercizi' },
  h1: 'Esercitati con le declinazioni russe',
  subtitle:
    'Metti alla prova le tue conoscenze dei casi russi con un quiz personalizzabile. Seleziona quali casi e generi esercitare, poi rispondi a 10 domande.',
  config: {
    title: 'Configura il tuo quiz',
    casesLabel: 'Casi',
    gendersLabel: 'Generi',
    singular: 'Singolare',
    plural: 'Plurale',
    masculine: 'Maschile',
    feminine: 'Femminile',
    neuter: 'Neutro',
    startQuiz: 'Inizia quiz',
    cases: {
      nominative: 'Nominativo',
      accusative: 'Accusativo',
      genitive: 'Genitivo',
      dative: 'Dativo',
      instrumental: 'Strumentale',
      prepositional: 'Preposizionale',
    },
    wordsAvailable: (n) => `${n} parole disponibili`,
  },
  quiz: {
    questionLabel: 'Domanda',
    singular: 'Singolare',
    plural: 'Plurale',
    next: 'Avanti',
    seeResults: 'Vedi risultati',
    correct: 'Corretto!',
    incorrect: 'Sbagliato',
  },
  results: {
    score: 'Punteggio',
    tryAgain: 'Riprova (stesse impostazioni)',
    newQuiz: 'Nuovo quiz',
  },
  faq: {
    title: 'Domande frequenti',
    items: [
      {
        question: 'Come funziona questo quiz sulle declinazioni russe?',
        answer:
          'Seleziona i casi grammaticali (accusativo, genitivo, dativo, strumentale, preposizionale) e i generi (maschile, femminile, neutro) che vuoi esercitare. Il quiz genera 10 domande a scelta multipla dalla nostra banca dati di oltre 400 sostantivi russi. Per ogni domanda, vedi una parola nella forma base e devi selezionare la forma declinata corretta.',
      },
      {
        question: 'Quali sono i 6 casi grammaticali del russo?',
        answer:
          'Il russo ha 6 casi grammaticali: Nominativo (именительный) — il soggetto, Accusativo (винительный) — il complemento oggetto, Genitivo (родительный) — possesso, Dativo (дательный) — complemento di termine, Strumentale (творительный) — mezzo o strumento, e Preposizionale (предложный) — luogo o argomento. Questo quiz copre tutti i casi tranne il Nominativo, che è la forma base (da dizionario).',
      },
      {
        question: 'Quante parole sono disponibili nel quiz?',
        answer:
          'Il quiz attinge da una banca dati di oltre 400 sostantivi russi, che coprono i generi maschile, femminile e neutro. Ogni parola è stata completamente declinata in tutti e 6 i casi al singolare e al plurale, offrendo migliaia di domande possibili.',
      },
      {
        question: 'Questo quiz sulle declinazioni russe è gratuito?',
        answer:
          'Sì, questo quiz è completamente gratuito e non richiede registrazione. Puoi fare tutti i quiz che vuoi, con diverse combinazioni di casi e generi. Per esercitarti su smartphone, puoi anche scaricare l\'app Russian Cases with Anna.',
      },
      {
        question: 'Come posso esercitarmi su casi russi specifici?',
        answer:
          'Usa il pannello di configurazione sopra per selezionare esattamente quali casi vuoi esercitare. Ad esempio, i principianti possono iniziare solo con Accusativo e Genitivo, mentre gli avanzati possono esercitarsi su Strumentale e Preposizionale. Puoi anche filtrare per genere per concentrarti su schemi di declinazione specifici.',
      },
      {
        question: 'Qual è la differenza tra declinazioni al singolare e al plurale?',
        answer:
          'I sostantivi russi cambiano le loro terminazioni in modo diverso al singolare e al plurale. Ad esempio, «книга» (libro) diventa «книгу» all\'accusativo singolare, ma «книги» all\'accusativo plurale. Puoi attivare singolare e plurale indipendentemente per ogni caso.',
      },
    ],
  },
  faqLinks: {
    diveDeeper: 'Vuoi approfondire la grammatica russa?',
    grammarLessons: 'Lezioni di grammatica',
    russianWords: 'Oltre 400 parole russe',
    chelovekExample: 'Declinazione di человек',
  },
  seo: {
    whyTitle: 'Perché esercitarsi con le declinazioni russe online?',
    introP1:
      'Il russo ha 6 casi grammaticali — nominativo, accusativo, genitivo, dativo, strumentale e preposizionale — e ogni sostantivo cambia desinenza a seconda del ruolo nella frase. Padroneggiare questi schemi è fondamentale per parlare e scrivere correttamente.',
    introP2:
      'Questo quiz online gratuito ti fa esercitare con oltre 400 parole e tutti i generi. Ogni sessione ha 10 domande a scelta multipla: vedi la forma base e scegli quella declinata corretta per un dato caso.',
    introP3:
      'Scegli tu casi e numero (singolare o plurale). I principianti spesso iniziano da accusativo e genitivo; chi è intermedio può concentrarsi su dativo, strumentale e preposizionale. Usa i link per caso qui sotto.',
    howItWorksTitle: 'Come funziona',
    howItWorksSteps: [
      {
        title: 'Scegli il focus',
        desc: 'Casi (accusativo, genitivo, dativo, strumentale, preposizionale) e generi da esercitare.',
      },
      {
        title: 'Rispondi a 10 domande',
        desc: 'Per ogni domanda un sostantivo alla forma base — scegli la forma giusta tra 4 opzioni.',
      },
      {
        title: 'Controlla e migliora',
        desc: 'Feedback immediato, poi punteggio e forme sbagliate da rivedere.',
      },
    ],
    practiceByCaseTitle: 'Esercitati per caso',
    footerIntro: 'Vuoi le tabelle di declinazione complete? ',
    footerWordsLink: 'Sfoglia oltre 400 parole russe',
    footerMid: ' o le nostre ',
    footerLessonsLink: 'lezioni di grammatica',
    footerOutro: ' con spiegazioni approfondite per ogni caso.',
  },
  leadMagnet: {
    title: 'Vuoi più pratica?',
    description:
      'Scarica Russian Cases with Anna: 136 quiz interattivi, 128 lezioni di grammatica e tabelle complete.',
    ctaText: 'Scarica l’app',
  },
  og: {
    bannerTitle: 'Esercitati con le declinazioni russe',
    bannerSubtitle: 'Quiz gratuito — 400+ parole — tutti e 6 i casi',
    footerTagline: 'Strumento online gratuito per i casi russi',
  },
};

const pt: PracticeTranslations = {
  metadata: {
    title: 'Pratica declinações russas online — Questionário gratuito',
    description:
      'Questionário interativo gratuito para praticar declinações de substantivos russos. Escolhe casos, géneros e testa os teus conhecimentos com 10 perguntas.',
    keywords:
      'declinações russas, quiz casos russos, gramática russa, exercícios declinação, quiz substantivos russos',
  },
  breadcrumbAria: 'Navegação estrutural',
  breadcrumb: { home: 'Início', practice: 'Prática' },
  h1: 'Praticar declinações russas',
  subtitle:
    'Testa os teus conhecimentos dos casos russos com um questionário personalizável. Seleciona quais casos e géneros praticar, depois responde a 10 perguntas.',
  config: {
    title: 'Configura o teu questionário',
    casesLabel: 'Casos',
    gendersLabel: 'Géneros',
    singular: 'Singular',
    plural: 'Plural',
    masculine: 'Masculino',
    feminine: 'Feminino',
    neuter: 'Neutro',
    startQuiz: 'Iniciar questionário',
    cases: {
      nominative: 'Nominativo',
      accusative: 'Acusativo',
      genitive: 'Genitivo',
      dative: 'Dativo',
      instrumental: 'Instrumental',
      prepositional: 'Preposicional',
    },
    wordsAvailable: (n) => `${n} palavras disponíveis`,
  },
  quiz: {
    questionLabel: 'Pergunta',
    singular: 'Singular',
    plural: 'Plural',
    next: 'Seguinte',
    seeResults: 'Ver resultados',
    correct: 'Correto!',
    incorrect: 'Incorreto',
  },
  results: {
    score: 'Pontuação',
    tryAgain: 'Tentar novamente (mesmas definições)',
    newQuiz: 'Novo questionário',
  },
  faq: {
    title: 'Perguntas frequentes',
    items: [
      {
        question: 'Como funciona este questionário de declinações russas?',
        answer:
          'Seleciona os casos gramaticais (acusativo, genitivo, dativo, instrumental, preposicional) e géneros (masculino, feminino, neutro) que queres praticar. O questionário gera 10 perguntas de escolha múltipla a partir da nossa base de dados de mais de 400 substantivos russos. Para cada pergunta, vês uma palavra na sua forma base e deves selecionar a forma declinada correta.',
      },
      {
        question: 'Quais são os 6 casos gramaticais do russo?',
        answer:
          'O russo tem 6 casos gramaticais: Nominativo (именительный) — o sujeito, Acusativo (винительный) — o complemento direto, Genitivo (родительный) — posse, Dativo (дательный) — complemento indireto, Instrumental (творительный) — meio ou instrumento, e Preposicional (предложный) — local ou tópico. Este questionário cobre todos os casos exceto o Nominativo, que é a forma base (de dicionário).',
      },
      {
        question: 'Quantas palavras estão disponíveis no questionário?',
        answer:
          'O questionário utiliza uma base de dados de mais de 400 substantivos russos, cobrindo os géneros masculino, feminino e neutro. Cada palavra foi totalmente declinada nos 6 casos no singular e plural, oferecendo milhares de perguntas possíveis.',
      },
      {
        question: 'Este questionário de declinações russas é gratuito?',
        answer:
          'Sim, este questionário é completamente gratuito e não requer registo. Podes fazer quantos questionários quiseres, com diferentes combinações de casos e géneros. Para praticar no telemóvel, podes também descarregar a app Russian Cases with Anna.',
      },
      {
        question: 'Como posso praticar casos russos específicos?',
        answer:
          'Usa o painel de configuração acima para selecionar exatamente quais casos queres praticar. Por exemplo, iniciantes podem começar só com Acusativo e Genitivo, enquanto avançados podem praticar Instrumental e Preposicional. Também podes filtrar por género para te concentrares em padrões de declinação específicos.',
      },
      {
        question: 'Qual é a diferença entre declinações no singular e plural?',
        answer:
          'Os substantivos russos mudam as suas terminações de forma diferente no singular e plural. Por exemplo, «книга» (livro) torna-se «книгу» no acusativo singular, mas «книги» no acusativo plural. Podes ativar singular e plural independentemente para cada caso.',
      },
    ],
  },
  faqLinks: {
    diveDeeper: 'Queres aprofundar a gramática russa?',
    grammarLessons: 'Lições de gramática',
    russianWords: 'Mais de 400 palavras russas',
    chelovekExample: 'Declinação de человек',
  },
  seo: {
    whyTitle: 'Porquê praticar declinações russas online?',
    introP1:
      'O russo tem 6 casos gramaticais — nominativo, acusativo, genitivo, dativo, instrumental e preposicional — e cada substantivo muda a terminação consoante o papel na frase. Dominar estes padrões é essencial para falar e escrever corretamente.',
    introP2:
      'Este questionário online gratuito permite praticar com mais de 400 palavras e todos os géneros. Cada sessão tem 10 perguntas de escolha múltipla: vês a forma base e escolhes a forma declinada certa para um caso específico.',
    introP3:
      'Escolhes casos e número (singular ou plural). Iniciantes costumam começar pelo acusativo e genitivo; níveis intermédios podem focar-se no dativo, instrumental e preposicional. Usa as ligações por caso abaixo.',
    howItWorksTitle: 'Como funciona',
    howItWorksSteps: [
      {
        title: 'Escolhe o foco',
        desc: 'Casos (acusativo, genitivo, dativo, instrumental, preposicional) e géneros a praticar.',
      },
      {
        title: 'Responde a 10 perguntas',
        desc: 'Em cada uma, um substantivo na forma base — escolhe a forma certa entre 4 opções.',
      },
      {
        title: 'Rever e melhorar',
        desc: 'Feedback imediato, depois pontuação e formas que erraste.',
      },
    ],
    practiceByCaseTitle: 'Praticar por caso',
    footerIntro: 'Queres ver as tabelas de declinação completas? ',
    footerWordsLink: 'Explora as mais de 400 palavras russas',
    footerMid: ' ou as nossas ',
    footerLessonsLink: 'lições de gramática',
    footerOutro: ' com explicações detalhadas de cada caso.',
  },
  leadMagnet: {
    title: 'Queres mais prática?',
    description:
      'Descarrega Russian Cases with Anna: 136 questionários interactivos, 128 lições e tabelas completas.',
    ctaText: 'Obter a app',
  },
  og: {
    bannerTitle: 'Praticar declinações russas',
    bannerSubtitle: 'Questionário gratuito — 400+ palavras — os 6 casos',
    footerTagline: 'Ferramenta online gratuita para os casos russos',
  },
};

const nl: PracticeTranslations = {
  metadata: {
    title: 'Oefen Russische verbuigingen online — Gratis quiz',
    description:
      'Gratis interactieve quiz om Russische zelfstandige naamwoorden te verbuigen. Kies gevallen, geslachten en test je kennis met 10 vragen.',
    keywords:
      'Russische verbuigingen oefenen, Russische naamvallen quiz, Russische grammatica, verbuigingsoefeningen, zelfstandig naamwoord quiz',
  },
  breadcrumbAria: 'Broodkruimelpad',
  breadcrumb: { home: 'Home', practice: 'Oefenen' },
  h1: 'Oefen Russische verbuigingen',
  subtitle:
    'Test je kennis van Russische naamwoordgevallen met een aanpasbare quiz. Selecteer welke gevallen en geslachten je wilt oefenen, beantwoord dan 10 vragen.',
  config: {
    title: 'Configureer je quiz',
    casesLabel: 'Gevallen',
    gendersLabel: 'Geslachten',
    singular: 'Enkelvoud',
    plural: 'Meervoud',
    masculine: 'Mannelijk',
    feminine: 'Vrouwelijk',
    neuter: 'Onzijdig',
    startQuiz: 'Start quiz',
    cases: {
      nominative: 'Nominatief',
      accusative: 'Accusatief',
      genitive: 'Genitief',
      dative: 'Datief',
      instrumental: 'Instrumentaal',
      prepositional: 'Prepositioneel',
    },
    wordsAvailable: (n) => `${n} woorden beschikbaar`,
  },
  quiz: {
    questionLabel: 'Vraag',
    singular: 'Enkelvoud',
    plural: 'Meervoud',
    next: 'Volgende',
    seeResults: 'Bekijk resultaten',
    correct: 'Correct!',
    incorrect: 'Incorrect',
  },
  results: {
    score: 'Score',
    tryAgain: 'Opnieuw proberen (zelfde instellingen)',
    newQuiz: 'Nieuwe quiz',
  },
  faq: {
    title: 'Veelgestelde vragen',
    items: [
      {
        question: 'Hoe werkt deze Russische verbuigingsquiz?',
        answer:
          'Selecteer de grammaticale gevallen (accusatief, genitief, datief, instrumentaal, prepositioneel) en geslachten (mannelijk, vrouwelijk, onzijdig) die je wilt oefenen. De quiz genereert 10 meerkeuzevragen uit onze database van meer dan 400 Russische zelfstandige naamwoorden. Bij elke vraag zie je een woord in zijn basisvorm en moet je de juiste verbogen vorm selecteren.',
      },
      {
        question: 'Wat zijn de 6 grammaticale gevallen in het Russisch?',
        answer:
          'Russisch heeft 6 grammaticale gevallen: Nominatief (именительный) — het onderwerp, Accusatief (винительный) — het lijdend voorwerp, Genitief (родительный) — bezit, Datief (дательный) — meewerkend voorwerp, Instrumentaal (творительный) — middel of instrument, en Prepositioneel (предложный) — plaats of onderwerp. Deze quiz behandelt alle gevallen behalve de Nominatief, aangezien dat de basisvorm (woordenboekvorm) is.',
      },
      {
        question: 'Hoeveel woorden zijn beschikbaar in de quiz?',
        answer:
          'De quiz put uit een database van meer dan 400 Russische zelfstandige naamwoorden, die mannelijke, vrouwelijke en onzijdige geslachten omvatten. Elk woord is volledig verbogen in alle 6 gevallen in enkelvoud en meervoud, wat duizenden mogelijke vragen oplevert.',
      },
      {
        question: 'Is deze Russische verbuigingsquiz gratis?',
        answer:
          'Ja, deze quiz is volledig gratis en vereist geen account. Je kunt zoveel quizzen maken als je wilt, met verschillende combinaties van gevallen en geslachten. Voor mobiel oefenen kun je ook de Russian Cases with Anna-app downloaden.',
      },
      {
        question: 'Hoe kan ik specifieke Russische gevallen oefenen?',
        answer:
          'Gebruik het configuratiepaneel hierboven om exact te selecteren welke gevallen je wilt oefenen. Beginners kunnen bijvoorbeeld beginnen met alleen Accusatief en Genitief, terwijl gevorderden Instrumentaal en Prepositioneel kunnen oefenen. Je kunt ook op geslacht filteren om je te concentreren op specifieke verbuigingspatronen.',
      },
      {
        question: 'Wat is het verschil tussen verbuigingen in enkelvoud en meervoud?',
        answer:
          'Russische zelfstandige naamwoorden veranderen hun uitgangen anders in enkelvoud en meervoud. Zo wordt «книга» (boek) «книгу» in de accusatief enkelvoud, maar «книги» in de accusatief meervoud. Je kunt enkelvoud en meervoud onafhankelijk per geval inschakelen.',
      },
    ],
  },
  faqLinks: {
    diveDeeper: 'Wil je dieper ingaan op de Russische grammatica?',
    grammarLessons: 'Grammaticalessen',
    russianWords: '400+ Russische woorden',
    chelovekExample: 'Verbuiging van человек',
  },
  seo: {
    whyTitle: 'Waarom Russische verbuigingen online oefenen?',
    introP1:
      'Het Russisch kent 6 naamvallen — nominatief, accusatief, genitief, datief, instrumentalis en prepositioneel — en elk zelfstandig naamwoord verandert van uitgang naargelang de rol in de zin. Deze patronen beheersen is essentieel voor correct Russisch.',
    introP2:
      'Deze gratis online quiz laat je oefenen met meer dan 400 woorden en alle geslachten. Elke ronde heeft 10 meerkeuzevragen: je ziet de stamvorm en kiest de juiste verbogen vorm voor een bepaald geval.',
    introP3:
      'Jij kiest welke gevallen en getallen (enkelvoud/meervoud) je wilt. Beginners beginnen vaak met accusatief en genitief; gevorderden oefenen datief, instrumentalis en prepositioneel. Gebruik de koppelingen per geval hieronder.',
    howItWorksTitle: 'Zo werkt het',
    howItWorksSteps: [
      {
        title: 'Kies je focus',
        desc: 'Selecteer gevallen (accusatief, genitief, datief, instrumentalis, prepositioneel) en geslachten.',
      },
      {
        title: 'Beantwoord 10 vragen',
        desc: 'Per vraag een zelfstandig naamwoord in de basisvorm — kies de juiste vorm uit 4 opties.',
      },
      {
        title: 'Bekijk en verbeter',
        desc: 'Directe feedback, daarna je score en de gemiste vormen.',
      },
    ],
    practiceByCaseTitle: 'Oefenen per geval',
    footerIntro: 'Volledige verbuigingstabellen bekijken? ',
    footerWordsLink: 'Blader door 400+ Russische woorden',
    footerMid: ' of onze ',
    footerLessonsLink: 'grammaticalessen',
    footerOutro: ' met uitgebreide uitleg per geval.',
  },
  leadMagnet: {
    title: 'Meer willen oefenen?',
    description:
      'Download Russian Cases with Anna: 136 interactieve quizzen, 128 grammaticalessen en complete tabellen.',
    ctaText: 'App downloaden',
  },
  og: {
    bannerTitle: 'Russische verbuigingen oefenen',
    bannerSubtitle: 'Gratis quiz — 400+ woorden — alle 6 gevallen',
    footerTagline: 'Gratis online hulpmiddel voor Russische naamvallen',
  },
};

const ru: PracticeTranslations = {
  metadata: {
    title: 'Практика склонений русских существительных — Бесплатный тест',
    description:
      'Бесплатный интерактивный тест для практики склонений русских существительных. Выберите падежи, рода и проверьте свои знания в 10 вопросах.',
    keywords:
      'склонения русский язык, тест падежи, грамматика русского, упражнения склонение, существительные тест',
  },
  breadcrumbAria: 'Навигационная цепочка',
  breadcrumb: { home: 'Главная', practice: 'Практика' },
  h1: 'Практика склонений',
  subtitle: 'Проверьте свои знания падежей русских существительных с помощью настраиваемого теста. Выберите падежи и рода, затем ответьте на 10 вопросов.',
  config: {
    title: 'Настройте тест',
    casesLabel: 'Падежи',
    gendersLabel: 'Рода',
    singular: 'Единственное',
    plural: 'Множественное',
    masculine: 'Мужской',
    feminine: 'Женский',
    neuter: 'Средний',
    startQuiz: 'Начать тест',
    cases: {
      nominative: 'Именительный',
      accusative: 'Винительный',
      genitive: 'Родительный',
      dative: 'Дательный',
      instrumental: 'Творительный',
      prepositional: 'Предложный',
    },
    wordsAvailable: (n) => `${n} слов доступно`,
  },
  quiz: {
    questionLabel: 'Вопрос',
    singular: 'Единственное',
    plural: 'Множественное',
    next: 'Далее',
    seeResults: 'Результаты',
    correct: 'Правильно!',
    incorrect: 'Неправильно',
  },
  results: {
    score: 'Результат',
    tryAgain: 'Ещё раз (те же настройки)',
    newQuiz: 'Новый тест',
  },
  faq: {
    title: 'Часто задаваемые вопросы',
    items: [
      {
        question: 'Как работает этот тест по склонению русских существительных?',
        answer: 'Выберите падежи (винительный, родительный, дательный, творительный, предложный) и роды (мужской, женский, средний), которые хотите практиковать. Тест генерирует 10 вопросов с выбором ответа из базы более 400 русских существительных.',
      },
      {
        question: 'Какие 6 падежей есть в русском языке?',
        answer: 'В русском языке 6 падежей: Именительный, Винительный, Родительный, Дательный, Творительный и Предложный. Этот тест охватывает все падежи, кроме Именительного, так как это словарная форма.',
      },
      {
        question: 'Сколько слов доступно в тесте?',
        answer: 'Тест использует базу данных из более чем 400 русских существительных мужского, женского и среднего рода. Каждое слово полностью просклонено во всех 6 падежах в единственном и множественном числе.',
      },
      {
        question: 'Этот тест бесплатный?',
        answer: 'Да, этот тест полностью бесплатный и не требует регистрации. Вы можете проходить столько тестов, сколько хотите. Для мобильной практики скачайте приложение Russian Cases with Anna.',
      },
      {
        question: 'Как практиковать определённые падежи?',
        answer: 'Используйте панель настройки выше, чтобы выбрать именно те падежи, которые хотите отработать. Начинающие могут начать с Винительного и Родительного, продвинутые — с Творительного и Предложного.',
      },
      {
        question: 'В чём разница между склонением в единственном и множественном числе?',
        answer: 'Русские существительные меняют окончания по-разному в единственном и множественном числе. Например, «книга» в Винительном единственного числа — «книгу», а во множественном — «книги».',
      },
    ],
  },
  faqLinks: {
    diveDeeper: 'Хотите глубже разобраться в русской грамматике?',
    grammarLessons: 'Уроки грамматики',
    russianWords: 'Более 400 русских слов',
    chelovekExample: 'Склонение слова человек',
  },
  seo: {
    whyTitle: 'Зачем практиковать склонения русских слов онлайн?',
    introP1:
      'В русском языке 6 падежей — именительный, винительный, родительный, дательный, творительный и предложный — и у каждого существительного меняется окончание в зависимости от роли в предложении. Без этих шаблонов нельзя говорить и писать грамотно.',
    introP2:
      'Этот бесплатный онлайн-тест помогает тренировать склонения на базе более 400 слов и всех родов. В каждом прохождении — 10 вопросов с вариантами ответа: показана начальная форма, нужно выбрать верную форму для заданного падежа.',
    introP3:
      'Вы сами выбираете падежи и число (единственное или множественное). Начинающие часто начинают с винительного и родительного; на среднем уровне полезны дательный, творительный и предложный. Ниже — ссылки на отдельные страницы по каждому падежу.',
    howItWorksTitle: 'Как это устроено',
    howItWorksSteps: [
      {
        title: 'Выберите фокус',
        desc: 'Падежи (винительный, родительный, дательный, творительный, предложный) и роды для тренировки.',
      },
      {
        title: 'Ответьте на 10 вопросов',
        desc: 'В каждом вопросе существительное в начальной форме — выберите правильный вариант из 4.',
      },
      {
        title: 'Проверьте результат',
        desc: 'Мгновенная обратная связь, затем счёт и формы, в которых были ошибки.',
      },
    ],
    practiceByCaseTitle: 'Практика по падежам',
    footerIntro: 'Нужны полные таблицы склонений? ',
    footerWordsLink: 'Просмотрите более 400 русских слов',
    footerMid: ' или наши ',
    footerLessonsLink: 'уроки грамматики',
    footerOutro: ' с подробными объяснениями каждого падежа.',
  },
  leadMagnet: {
    title: 'Нужно больше практики?',
    description:
      'Скачайте Russian Cases with Anna: 136 интерактивных тестов, 128 уроков грамматики и полные таблицы склонений.',
    ctaText: 'Скачать приложение',
  },
  og: {
    bannerTitle: 'Практика склонений',
    bannerSubtitle: 'Бесплатный тест — 400+ слов — все 6 падежей',
    footerTagline: 'Бесплатный онлайн-инструмент для падежей русского языка',
  },
};
const translations: Record<LandingLanguage, PracticeTranslations> = {
  en_en: en,
  fr_fr: fr,
  de_de: de,
  pl_pl: pl,
  tr_tr: tr,
  es_es: es,
  it_it: it,
  pt_pt: pt,
  nl_nl: nl,
  ru_ru: ru,
};

export function getPracticeTranslations(lang: LandingLanguage): PracticeTranslations {
  return translations[lang] ?? en;
}
