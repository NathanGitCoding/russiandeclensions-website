/**
 * Traductions pour les pages de mots (/russian-declension/[slug])
 */

import type { LandingLanguage } from './landingTranslations';

export interface CaseConfigItem {
  key: string;
  label: string;
  hint: string;
}

export interface WordPageTranslations {
  breadcrumb: { home: string; learn: string; words: string };
  /** H1: Russian Declension: [Word] ([Translation]) */
  h1Title: (baseForm: string, translation: string) => string;
  /** H2 #1: Full Declension Table of [Word] */
  h2FullTable: (baseForm: string) => string;
  /** H2 #2: How to use "[Word]" in Russian (Examples) */
  h2HowToUse: (baseForm: string) => string;
  /** H2 #3: FAQ about [Word] Declension */
  h2Faq: (baseForm: string) => string;
  /** Context snippet - type of word */
  contextSnippetType: (baseForm: string, genderLabel: string, declensionOrdinal: string) => string;
  /** Context snippet - usage frequency */
  contextSnippetUsage: (levelLabel: string) => string;
  /** Footer block - internal linking */
  peopleAlsoSearchedFor: string;
  /** Level labels for context snippet: beginners, intermediate, advanced */
  levelLabels: { beginners: string; intermediate: string; advanced: string };
  /** Declension ordinals for context snippet: 1st, 2nd, 3rd */
  declensionOrdinals: { first: string; second: string; third: string };
  fullDeclensionTable: string;
  indeclinableNotice: (baseForm: string) => string;
  indeclinableFormLabel: string;
  introParagraph1: (type: string, baseForm: string, translation: string, gender: string) => string;
  introParagraph3: (caseLabels: string) => string;
  howToDecline: string;
  tableHeaders: { case: string; singular: string; plural: string };
  caseLabel: string;
  /** Format (genericLabel, caseName) → e.g. "Cas Nominatif" (FR) or "Nominativ Fall" (DE) */
  formatCaseDisplay: (genericLabel: string, caseName: string) => string;
  /** ToC link text for case: (baseForm, caseLabel) → e.g. "книга Nominative Case declension" (EN) or "Déclinaison de книга au nominatif" (FR) */
  tocCaseDeclensionLink: (baseForm: string, caseLabel: string) => string;
  /** Table of contents section title */
  tocTitle: string;
  cases: CaseConfigItem[];
  learnMoreAboutCase: string;
  russianCaseEndingsCheatsheet: string;
  usageNotes: string;
  usageNotesContent: (translation: string, baseForm: string, gender: string) => string;
  usageNotesCaseEndings: string;
  usageNotesAnd: string;
  usageNotesGrammar: string;
  usageNotesForMore: string;
  exampleSentences: string;
  comingSoon: string;
  leadMagnet: {
    title: string;
    description: (baseForm: string) => string;
    ctaText: string;
  };
  faq: {
    howToTranslate: (translation: string) => string;
    translateAnswer: (translation: string, baseForm: string, slug: string) => string;
    whatIsMeaning: (baseForm: string) => string;
    meaningAnswer: (baseForm: string, translation: string, gender: string) => string;
    whatIsCaseOf: (caseLabel: string, baseForm: string) => string;
    caseAnswer: (caseLabel: string, baseForm: string, sg: string, pl: string) => string;
    isMasculineOrFeminine: (baseForm: string) => string;
    genderAnswer: (baseForm: string, gender: string) => string;
    isRegularOrIrregular: (baseForm: string) => string;
    regularAnswer: (baseForm: string, gender: string) => string;
    indeclinableAnswer: (baseForm: string) => string;
  };
  gender: Record<string, string>;
  type: Record<string, string>;
  metadata: {
    title: (translation: string, baseForm: string) => string;
    description: (baseForm: string, translation: string, gender: string) => string;
    wordNotFound: string;
  };
  nav: {
    previousWord: string;
    nextWord: string;
  };
  /** Section title for the quiz block (e.g. "Exercices QCM", "MCQ Exercises") */
  quizSectionTitle: string;
  /** SEO-optimized intro paragraph for the quiz section (free exercise, etc.) */
  quizSectionIntro: (baseForm: string) => string;
  quiz: {
    triggerTitle: string;
    triggerDescription: (baseForm: string) => string;
    triggerCta: string;
    singular: string;
    plural: string;
    next: string;
    seeResults: string;
    tryAgain: string;
    close: string;
    score: string;
    /** Label prefix for "Question" — displayed as "Question X / Y" */
    questionLabel: string;
    correct: string;
    incorrect: string;
  };
}

const caseConfigEn: CaseConfigItem[] = [
  { key: 'nominative', label: 'Nominative', hint: 'subject' },
  { key: 'accusative', label: 'Accusative', hint: 'direct object' },
  { key: 'genitive', label: 'Genitive', hint: 'possession / absence' },
  { key: 'dative', label: 'Dative', hint: 'to / for' },
  { key: 'instrumental', label: 'Instrumental', hint: 'with / by means of' },
  { key: 'prepositional', label: 'Prepositional', hint: 'location / topic' },
  { key: 'locative', label: 'Locative', hint: 'specific location (в/на)' },
];

const caseConfigFr: CaseConfigItem[] = [
  { key: 'nominative', label: 'Nominatif', hint: 'sujet' },
  { key: 'accusative', label: 'Accusatif', hint: "complément d'objet direct" },
  { key: 'genitive', label: 'Génitif', hint: 'possession / absence' },
  { key: 'dative', label: 'Datif', hint: 'à / pour' },
  { key: 'instrumental', label: 'Instrumental', hint: 'avec / au moyen de' },
  { key: 'prepositional', label: 'Prépositionnel', hint: 'lieu / thème' },
  { key: 'locative', label: 'Locatif', hint: 'lieu spécifique (в/на)' },
];

const caseConfigDe: CaseConfigItem[] = [
  { key: 'nominative', label: 'Nominativ', hint: 'Subjekt' },
  { key: 'accusative', label: 'Akkusativ', hint: 'direktes Objekt' },
  { key: 'genitive', label: 'Genitiv', hint: 'Besitz / Abwesenheit' },
  { key: 'dative', label: 'Dativ', hint: 'an / für' },
  { key: 'instrumental', label: 'Instrumental', hint: 'mit / durch' },
  { key: 'prepositional', label: 'Präpositional', hint: 'Ort / Thema' },
  { key: 'locative', label: 'Lokativ', hint: 'spezifischer Ort (в/на)' },
];

const caseConfigPl: CaseConfigItem[] = [
  { key: 'nominative', label: 'Mianownik', hint: 'podmiot' },
  { key: 'accusative', label: 'Biernik', hint: 'dopełnienie bliższe' },
  { key: 'genitive', label: 'Dopełniacz', hint: 'posiadanie / brak' },
  { key: 'dative', label: 'Celownik', hint: 'dla / ku' },
  { key: 'instrumental', label: 'Narzędnik', hint: 'z / przy pomocy' },
  { key: 'prepositional', label: 'Miejscownik', hint: 'miejsce / temat' },
  { key: 'locative', label: 'Lokatyw', hint: 'miejsce (в/на)' },
];

const caseConfigTr: CaseConfigItem[] = [
  { key: 'nominative', label: 'Nominatif', hint: 'özne' },
  { key: 'accusative', label: 'Akuzatif', hint: 'belirtme nesnesi' },
  { key: 'genitive', label: 'Genitif', hint: 'aidiyet / yokluk' },
  { key: 'dative', label: 'Datif', hint: 'yönelme (-e/-a)' },
  { key: 'instrumental', label: 'Enstrümantal', hint: 'ile / vasıta' },
  { key: 'prepositional', label: 'Prepozisyonel', hint: 'yer / konu' },
  { key: 'locative', label: 'Lokatif', hint: 'yer (в/на)' },
];

const caseConfigRu: CaseConfigItem[] = [
  { key: 'nominative', label: 'Именительный', hint: 'подлежащее' },
  { key: 'accusative', label: 'Винительный', hint: 'прямое дополнение' },
  { key: 'genitive', label: 'Родительный', hint: 'принадлежность / отсутствие' },
  { key: 'dative', label: 'Дательный', hint: 'кому / чему' },
  { key: 'instrumental', label: 'Творительный', hint: 'с / при помощи' },
  { key: 'prepositional', label: 'Предложный', hint: 'место / тема' },
  { key: 'locative', label: 'Местный', hint: 'место (в/на)' },
];

const translations: Record<LandingLanguage, WordPageTranslations> = {
  en_en: {
    breadcrumb: { home: 'App', learn: 'Free Grammar Lessons', words: 'Russian Declensions' },
    h1Title: (base, trans) => `Russian Declension: ${base} (${trans})`,
    h2FullTable: (base) => `Full Declension Table of ${base}`,
    h2HowToUse: (base) => `How to use "${base}" in Russian (Examples)`,
    h2Faq: (base) => `FAQ about ${base} Declension`,
    contextSnippetType: (base, gender, decl) =>
      `${base} is a ${gender} noun belonging to the ${decl} declension.`,
    contextSnippetUsage: (level) =>
      `It is one of the most common words in Russian, essential for ${level} learners.`,
    peopleAlsoSearchedFor: 'People also searched for',
    levelLabels: { beginners: 'Beginners', intermediate: 'Intermediate', advanced: 'Advanced' },
    declensionOrdinals: { first: '1st', second: '2nd', third: '3rd' },
    fullDeclensionTable: 'Full declension table of',
    indeclinableNotice: (baseForm) =>
      `${baseForm} is indeclinable — it stays the same in all cases. There is no singular/plural distinction.`,
    indeclinableFormLabel: 'Invariant form',
    introParagraph1: (type, baseForm, translation, gender) =>
      `The Russian ${type} **${baseForm}** (${translation}) is a **${gender}** noun.`,
    introParagraph3: (caseLabels) =>
      `Below is its full declension across all **Russian cases** (${caseLabels}) in **singular** and **plural** forms.`,
    howToDecline: 'How to decline',
    tableHeaders: { case: 'Case', singular: 'Singular', plural: 'Plural' },
    caseLabel: 'Case',
    formatCaseDisplay: (generic, name) => `${name} ${generic}`,
    tocCaseDeclensionLink: (baseForm, caseLabel) => `${baseForm} ${caseLabel} Case declension`,
    tocTitle: 'Table of Contents',
    cases: caseConfigEn,
    learnMoreAboutCase: 'Learn more about each case:',
    russianCaseEndingsCheatsheet: 'Russian case endings cheatsheet',
    usageNotes: 'Usage notes',
    usageNotesContent: (translation, baseForm, gender) =>
      `The Russian word for ${translation}, ${baseForm}, follows the standard declension pattern for ${gender} nouns. Use the nominative for the subject, accusative for the direct object, genitive for possession or absence, dative for indirect objects (to/for), instrumental with/by, and prepositional after в, на, о. See our guides on `,
    usageNotesCaseEndings: 'Russian case endings',
    usageNotesAnd: ' and ',
    usageNotesGrammar: 'Russian grammar',
    usageNotesForMore: ' for more.',
    exampleSentences: 'Example sentences',
    comingSoon: 'Coming soon...',
    leadMagnet: {
      title: 'Practice Russian declensions on your phone',
      description: (baseForm) =>
        `Stop memorizing tables, start practicing how to decline ${baseForm} and thousands of other Russian words in interactive quizzes.`,
      ctaText: 'Download the app and start drilling today',
    },
    faq: {
      howToTranslate: (t) => `How to translate ${t} in Russian?`,
      translateAnswer: (t, base, slug) =>
        `The Russian word for "${t}" is **${base}** (${slug}).`,
      whatIsMeaning: (base) => `What is the meaning of ${base}?`,
      meaningAnswer: (base, t, gender) =>
        `**${base}** means "${t}" in English. It is a ${gender} noun in Russian.`,
      whatIsCaseOf: (caseLabel, base) =>
        `What is the ${caseLabel.toLowerCase()} of ${base}?`,
      caseAnswer: (caseLabel, base, sg, pl) =>
        `The ${caseLabel.toLowerCase()} singular of ${base} is **${sg}**. The ${caseLabel.toLowerCase()} plural is **${pl}**.`,
      isMasculineOrFeminine: (base) => `Is ${base} masculine or feminine?`,
      genderAnswer: (base, gender) => `**${base}** is a ${gender} noun in Russian.`,
      isRegularOrIrregular: (base) => `Is ${base} regular or irregular?`,
      regularAnswer: (base, gender) =>
        `**${base}** is a **regular** noun. It follows the standard declension pattern for ${gender} nouns.`,
      indeclinableAnswer: (base) =>
        `**${base}** is **indeclinable**. It does not change in any case — the same form is used for nominative, accusative, genitive, and all other cases.`,
    },
    gender: {
      masculine: 'masculine',
      feminine: 'feminine',
      neuter: 'neuter',
    },
    type: {
      noun: 'noun',
      proper_noun: 'proper noun',
    },
    metadata: {
      title: (t, base) => `Declension of ${base} (${t}) in Russian - All 6 Cases Table`,
      description: (base, t) =>
        `Learn how to decline the Russian noun ${base} (${t}). Full declension table for all 6 cases, singular and plural. Free grammar guide with examples.`,
      wordNotFound: 'Word not found',
    },
    nav: {
      previousWord: 'Previous word',
      nextWord: 'Next word',
    },
    quizSectionTitle: 'MCQ Exercises',
    quizSectionIntro: (baseForm) =>
      `Free exercise: test your mastery of the declension of ${baseForm} with this interactive multiple-choice quiz. A practical, no-signup drill to review all 6 Russian cases.`,
    quiz: {
      triggerTitle: 'Test your knowledge',
      triggerDescription: (baseForm) => `Practice declining ${baseForm} across different cases.`,
      triggerCta: 'Start quiz',
      singular: 'Singular',
      plural: 'Plural',
      next: 'Next',
      seeResults: 'See results',
      tryAgain: 'Try again',
      close: 'Close',
      score: 'Score',
      questionLabel: 'Question',
      correct: 'Correct',
      incorrect: 'Incorrect',
    },
  },
  fr_fr: {
    breadcrumb: { home: 'App', learn: 'Leçons de grammaire gratuites', words: 'Déclinaisons russes' },
    h1Title: (base, trans) => `Déclinaison russe : ${base} (${trans})`,
    h2FullTable: (base) => `Tableau complet de déclinaison de ${base}`,
    h2HowToUse: (base) => `Comment utiliser « ${base} » en russe (exemples)`,
    h2Faq: (base) => `FAQ sur la déclinaison de ${base}`,
    contextSnippetType: (base, gender, decl) =>
      `${base} est un nom ${gender} appartenant à la ${decl} déclinaison.`,
    contextSnippetUsage: (level) =>
      `C'est l'un des mots les plus courants en russe, essentiel pour les apprenants ${level}.`,
    peopleAlsoSearchedFor: 'Les internautes ont aussi recherché',
    levelLabels: { beginners: 'débutants', intermediate: 'intermédiaires', advanced: 'avancés' },
    declensionOrdinals: { first: '1re', second: '2e', third: '3e' },
    fullDeclensionTable: 'Tableau de déclinaison complet de',
    indeclinableNotice: (baseForm) =>
      `${baseForm} est indéclinable — il reste identique dans tous les cas. Pas de distinction singulier/pluriel.`,
    indeclinableFormLabel: 'Forme invariante',
    introParagraph1: (type, baseForm, translation, gender) =>
      `Le ${type} russe **${baseForm}** (${translation}) est un nom **${gender}**.`,
    introParagraph3: (caseLabels) =>
      `Voici sa déclinaison complète pour tous les **cas russes** (${caseLabels}) au **singulier** et au **pluriel**.`,
    howToDecline: 'Comment décliner',
    tableHeaders: { case: 'Cas', singular: 'Singulier', plural: 'Pluriel' },
    caseLabel: 'Cas',
    formatCaseDisplay: (generic, name) => `${generic} ${name}`,
    tocCaseDeclensionLink: (baseForm, caseLabel) => `Déclinaison de ${baseForm} au ${caseLabel.toLowerCase()}`,
    tocTitle: 'Sommaire',
    cases: caseConfigFr,
    learnMoreAboutCase: 'En savoir plus sur chaque cas :',
    russianCaseEndingsCheatsheet: 'Antisèche des terminaisons des cas russes',
    usageNotes: 'Notes d\'utilisation',
    usageNotesContent: (translation, baseForm, gender) =>
      `Le mot russe pour ${translation}, ${baseForm}, suit le modèle de déclinaison standard des noms ${gender}. Utilisez le nominatif pour le sujet, l'accusatif pour le complément d'objet direct, le génitif pour la possession ou l'absence, le datif pour les compléments d'objet indirect (à/pour), l'instrumental avec/au moyen de, et le prépositionnel après в, на, о. Consultez nos guides sur les `,
    usageNotesCaseEndings: 'terminaisons des cas russes',
    usageNotesAnd: ' et la ',
    usageNotesGrammar: 'grammaire russe',
    usageNotesForMore: ' pour en savoir plus.',
    exampleSentences: 'Exemples de phrases',
    comingSoon: 'Bientôt disponible...',
    leadMagnet: {
      title: 'Pratiquez les déclinaisons russes sur votre téléphone',
      description: (baseForm) =>
        `Arrêtez de mémoriser des tableaux, commencez à pratiquer la déclinaison de ${baseForm} et de milliers d'autres mots russes dans des quiz interactifs.`,
      ctaText: 'Téléchargez l\'app et commencez à vous entraîner aujourd\'hui',
    },
    faq: {
      howToTranslate: (t) => `Comment traduire ${t} en russe ?`,
      translateAnswer: (t, base, slug) =>
        `Le mot russe pour « ${t} » est **${base}** (${slug}).`,
      whatIsMeaning: (base) => `Quel est le sens de ${base} ?`,
      meaningAnswer: (base, t, gender) =>
        `**${base}** signifie « ${t} » en français. C'est un nom ${gender} en russe.`,
      whatIsCaseOf: (caseLabel, base) =>
        `Quelle est la forme au ${caseLabel.toLowerCase()} de ${base} ?`,
      caseAnswer: (caseLabel, base, sg, pl) =>
        `Le singulier au ${caseLabel.toLowerCase()} de ${base} est **${sg}**. Le pluriel au ${caseLabel.toLowerCase()} est **${pl}**.`,
      isMasculineOrFeminine: (base) => `${base} est-il masculin ou féminin ?`,
      genderAnswer: (base, gender) => `**${base}** est un nom ${gender} en russe.`,
      isRegularOrIrregular: (base) => `${base} est-il régulier ou irrégulier ?`,
      regularAnswer: (base, gender) =>
        `**${base}** est un nom **régulier**. Il suit le modèle de déclinaison standard des noms ${gender}.`,
      indeclinableAnswer: (base) =>
        `**${base}** est **indéclinable**. Il ne change dans aucun cas — la même forme est utilisée au nominatif, accusatif, génitif et tous les autres cas.`,
    },
    gender: {
      masculine: 'masculin',
      feminine: 'féminin',
      neuter: 'neutre',
    },
    type: {
      noun: 'nom',
      proper_noun: 'nom propre',
    },
    metadata: {
      title: (_t, base) => `Comment décliner ${base} en russe dans les 6 cas`,
      description: (base, t, gender) => {
        const decl = gender === 'feminine' ? 'première' : 'deuxième';
        const g = gender === 'masculine' ? 'masculin' : gender === 'feminine' ? 'féminin' : 'neutre';
        return `Tableau de déclinaison complet de ${base} (${t}) en russe. Les 6 cas, singulier et pluriel, avec exemples de phrases. Nom ${g}, ${decl} déclinaison.`;
      },
      wordNotFound: 'Mot non trouvé',
    },
    nav: {
      previousWord: 'Mot précédent',
      nextWord: 'Mot suivant',
    },
    quizSectionTitle: 'Exercices QCM',
    quizSectionIntro: (baseForm) =>
      `Exercice gratuit : testez votre maîtrise de la déclinaison de ${baseForm} avec ce quiz interactif à choix multiples. Un entraînement pratique et sans inscription pour réviser les 6 cas du russe.`,
    quiz: {
      triggerTitle: 'Testez vos connaissances',
      triggerDescription: (baseForm) => `Entraînez-vous à décliner ${baseForm} dans différents cas.`,
      triggerCta: 'Lancer le quiz',
      singular: 'Singulier',
      plural: 'Pluriel',
      next: 'Suivant',
      seeResults: 'Voir les résultats',
      tryAgain: 'Recommencer',
      close: 'Fermer',
      score: 'Score',
      questionLabel: 'Question',
      correct: 'Correct',
      incorrect: 'Incorrect',
    },
  },
  tr_tr: {
    breadcrumb: { home: 'App', learn: 'Ücretsiz Gramer Dersleri', words: 'Rusça Çekimler' },
    h1Title: (base, trans) => `Rusça çekim: ${base} (${trans})`,
    h2FullTable: (base) => `${base} için tam çekim tablosu`,
    h2HowToUse: (base) => `"${base}" Rusçada nasıl kullanılır (örnekler)`,
    h2Faq: (base) => `${base} çekimi hakkında SSS`,
    contextSnippetType: (base, gender, decl) =>
      `${base}, ${decl} çekime ait ${gender} bir isimdir.`,
    contextSnippetUsage: (level) =>
      `Rusçanın en yaygın kelimelerinden biridir, ${level} öğrenenler için vazgeçilmezdir.`,
    peopleAlsoSearchedFor: 'İnsanlar bunları da aradı',
    levelLabels: { beginners: 'başlangıç', intermediate: 'orta', advanced: 'ileri' },
    declensionOrdinals: { first: '1.', second: '2.', third: '3.' },
    fullDeclensionTable: 'Tam çekim tablosu',
    indeclinableNotice: (baseForm) =>
      `${baseForm} çekimsizdir — tüm hallerde aynı kalır. Tekil/çoğul ayrımı yoktur.`,
    indeclinableFormLabel: 'Değişmeyen form',
    introParagraph1: (type, baseForm, translation, gender) =>
      `Rusça ${type} **${baseForm}** (${translation}) ${gender} bir isimdir.`,
    introParagraph3: (caseLabels) =>
      `Tüm **Rusça durumlar** (${caseLabels}) için tekil ve çoğul formlarda tam çekimi aşağıdadır.`,
    howToDecline: 'Nasıl çekilir',
    tableHeaders: { case: 'Durum', singular: 'Tekil', plural: 'Çoğul' },
    caseLabel: 'Durum',
    formatCaseDisplay: (generic, name) => `${name} ${generic}`,
    tocCaseDeclensionLink: (baseForm, caseLabel) => `${baseForm} ${caseLabel} hali — çekim`,
    tocTitle: 'İçindekiler',
    cases: caseConfigTr,
    learnMoreAboutCase: 'Her durum hakkında daha fazla bilgi edinin:',
    russianCaseEndingsCheatsheet: 'Rusça durum son ekleri kopya kağıdı',
    usageNotes: 'Kullanım notları',
    usageNotesContent: (translation, baseForm, gender) =>
        `Rusça „${translation}" kelimesi ${baseForm}, ${gender} isimler için standart çekim modelini takip eder. Özne için nominatif, belirtme nesnesi için akuzatif, aidiyet veya yokluk için genitif, dolaylı tümleç için datif (-e/-a), araç için enstrümantal (ile) ve в, на, о sonrası prepozisyonel kullanın. Rehberlerimize bakın: `,
    usageNotesCaseEndings: 'Rusça durum son ekleri',
    usageNotesAnd: ' ve ',
    usageNotesGrammar: 'Rusça grameri',
    usageNotesForMore: ' daha fazlası için.',
    exampleSentences: 'Örnek cümleler',
    comingSoon: 'Yakında...',
    leadMagnet: {
      title: 'Rusça çekimleri telefonunuzda pratik yapın',
      description: (baseForm) =>
        `Tabloları ezberlemeyi bırakın, ${baseForm} ve binlerce Rusça kelimeyi interaktif testlerde çekim pratiği yapmaya başlayın.`,
      ctaText: 'Uygulamayı indirin ve bugün çalışmaya başlayın',
    },
    faq: {
      howToTranslate: (t) => `Rusçada ${t} nasıl çevrilir?`,
      translateAnswer: (t, base, slug) =>
        `"${t}" için Rusça kelime **${base}** (${slug}).`,
      whatIsMeaning: (base) => `${base} ne anlama geliyor?`,
      meaningAnswer: (base, t, gender) =>
        `**${base}** Türkçede „${t}" anlamına gelir. Rusçada ${gender} bir isimdir.`,
      whatIsCaseOf: (caseLabel, base) =>
        `${base} kelimesinin ${caseLabel.toLowerCase()} hali nedir?`,
      caseAnswer: (caseLabel, base, sg, pl) =>
        `**${base}** kelimesinin ${caseLabel.toLowerCase()} tekil hâli **${sg}**. Çoğul hâli **${pl}**.`,
      isMasculineOrFeminine: (base) => `${base} eril mi dişil mi?`,
      genderAnswer: (base, gender) => `**${base}** Rusça'da ${gender} bir isimdir.`,
      isRegularOrIrregular: (base) => `${base} düzenli mi düzensiz mi?`,
      regularAnswer: (base, gender) =>
        `**${base}** **düzenli** bir isimdir. ${gender} isimler için standart çekim modelini takip eder.`,
      indeclinableAnswer: (base) =>
        `**${base}** **çekimsizdir**. Hiçbir durumda değişmez — nominatif, akuzatif, genitif ve tüm diğer durumlar için aynı form kullanılır.`,
    },
    gender: { masculine: 'eril', feminine: 'dişil', neuter: 'nötr' },
    type: { noun: 'isim', proper_noun: 'özel isim' },
    metadata: {
      title: (_t, base) => `Rusçada ${base} 6 durumda nasıl çekilir`,
      description: (base, t, gender) => {
        const decl = gender === 'feminine' ? 'birinci' : 'ikinci';
        const g = gender === 'masculine' ? 'eril' : gender === 'feminine' ? 'dişil' : 'nötr';
        return `Rusçada ${base} (${t}) için tam çekim tablosu. 6 durum, tekil ve çoğul, örnek cümlelerle. ${g} isim, ${decl} çekim.`;
      },
      wordNotFound: 'Kelime bulunamadı',
    },
    nav: { previousWord: 'Önceki kelime', nextWord: 'Sonraki kelime' },
    quizSectionTitle: 'Çoktan seçmeli alıştırmalar',
    quizSectionIntro: (baseForm) =>
      `Ücretsiz alıştırma: ${baseForm} kelimesinin çekiminde ustalığınızı bu interaktif çoktan seçmeli test ile deneyin. Tüm 6 Rusça durumu gözden geçirmek için pratik ve kayıt gerektirmeyen bir egzersiz.`,
    quiz: {
      triggerTitle: 'Bilginizi test edin',
      triggerDescription: (baseForm) => `${baseForm} kelimesini farklı durumlarda çekim pratiği yapın.`,
      triggerCta: 'Teste başla',
      singular: 'Tekil',
      plural: 'Çoğul',
      next: 'Sonraki',
      seeResults: 'Sonuçları gör',
      tryAgain: 'Tekrar dene',
      close: 'Kapat',
      score: 'Puan',
      questionLabel: 'Soru',
      correct: 'Doğru',
      incorrect: 'Yanlış',
    },
  },
  de_de: {
    breadcrumb: { home: 'App', learn: 'Kostenlose Grammatik-Lektionen', words: 'Russische Deklinationen' },
    h1Title: (base, trans) => `Russische Deklination: ${base} (${trans})`,
    h2FullTable: (base) => `Vollständige Deklinationstabelle von ${base}`,
    h2HowToUse: (base) => `Wie man „${base}" auf Russisch verwendet (Beispiele)`,
    h2Faq: (base) => `FAQ zur Deklination von ${base}`,
    contextSnippetType: (base, gender, decl) =>
      `${base} ist ein ${gender} Substantiv der ${decl} Deklination.`,
    contextSnippetUsage: (level) =>
      `Es ist eines der gebräuchlichsten Wörter im Russischen, unverzichtbar für ${level} Lernende.`,
    peopleAlsoSearchedFor: 'Nutzer suchten auch nach',
    levelLabels: { beginners: 'Anfänger', intermediate: 'Fortgeschrittene', advanced: 'Profi' },
    declensionOrdinals: { first: '1.', second: '2.', third: '3.' },
    fullDeclensionTable: 'Vollständige Deklinationstabelle von',
    indeclinableNotice: (baseForm) =>
      `${baseForm} ist unveränderlich — es bleibt in allen Fällen gleich. Kein Singular/Plural-Unterschied.`,
    indeclinableFormLabel: 'Unveränderliche Form',
    introParagraph1: (type, baseForm, translation, gender) =>
      `Das russische ${type} **${baseForm}** (${translation}) ist ein **${gender}** Substantiv.`,
    introParagraph3: (caseLabels) =>
      `Unten ist seine vollständige Deklination für alle **russischen Fälle** (${caseLabels}) in **Singular** und **Plural**.`,
    howToDecline: 'Wie deklinieren',
    tableHeaders: { case: 'Fall', singular: 'Singular', plural: 'Plural' },
    caseLabel: 'Fall',
    formatCaseDisplay: (generic, name) => `${name} ${generic}`,
    tocCaseDeclensionLink: (baseForm, caseLabel) => `${baseForm} im ${caseLabel} — Deklination`,
    tocTitle: 'Inhaltsverzeichnis',
    cases: caseConfigDe,
    learnMoreAboutCase: 'Erfahren Sie mehr über jeden Fall:',
    russianCaseEndingsCheatsheet: 'Russische Fallendungen Spickzettel',
    usageNotes: 'Verwendungshinweise',
    usageNotesContent: (translation, baseForm, gender) =>
      `Das russische Wort für ${translation}, ${baseForm}, folgt dem Standarddeklinationsmuster für ${gender} Substantive. Verwenden Sie den Nominativ für das Subjekt, den Akkusativ für das direkte Objekt, den Genitiv für Besitz oder Abwesenheit, den Dativ für indirekte Objekte (an/für), den Instrumental mit/durch und den Präpositional nach в, на, о. Siehe unsere Anleitungen zu `,
    usageNotesCaseEndings: 'Russische Fallendungen',
    usageNotesAnd: ' und ',
    usageNotesGrammar: 'Russische Grammatik',
    usageNotesForMore: ' für mehr.',
    exampleSentences: 'Beispielsätze',
    comingSoon: 'Demnächst...',
    leadMagnet: {
      title: 'Russische Deklinationen auf Ihrem Handy üben',
      description: (baseForm) =>
        `Hören Sie auf, Tabellen auswendig zu lernen, und üben Sie stattdessen die Deklination von ${baseForm} und Tausenden anderer russischer Wörter in interaktiven Quiz.`,
      ctaText: 'App herunterladen und heute mit dem Üben beginnen',
    },
    faq: {
      howToTranslate: (t) => `Wie übersetzt man ${t} ins Russische?`,
      translateAnswer: (t, base, slug) =>
        `Das russische Wort für "${t}" ist **${base}** (${slug}).`,
      whatIsMeaning: (base) => `Was bedeutet ${base}?`,
      meaningAnswer: (base, t, gender) =>
        `**${base}** bedeutet „${t}" auf Deutsch. Es ist ein ${gender} Substantiv im Russischen.`,
      whatIsCaseOf: (caseLabel, base) =>
        `Was ist der ${caseLabel} von ${base}?`,
      caseAnswer: (caseLabel, base, sg, pl) =>
        `**${base}** im ${caseLabel} Singular ist **${sg}**. Im Plural ist es **${pl}**.`,
      isMasculineOrFeminine: (base) => `Ist ${base} maskulin oder feminin?`,
      genderAnswer: (base, gender) => `**${base}** ist ein ${gender} Substantiv im Russischen.`,
      isRegularOrIrregular: (base) => `Ist ${base} regelmäßig oder unregelmäßig?`,
      regularAnswer: (base, gender) =>
        `**${base}** ist ein **regelmäßiges** Substantiv. Es folgt dem Standarddeklinationsmuster für ${gender} Substantive.`,
      indeclinableAnswer: (base) =>
        `**${base}** ist **unveränderlich**. Es ändert sich in keinem Fall — dieselbe Form wird für Nominativ, Akkusativ, Genitiv und alle anderen Fälle verwendet.`,
    },
    gender: { masculine: 'Maskulinum', feminine: 'Femininum', neuter: 'Neutrum' },
    type: { noun: 'Substantiv', proper_noun: 'Eigenname' },
    metadata: {
      title: (_t, base) => `Wie man ${base} auf Russisch in allen 6 Fällen dekliniert`,
      description: (base, t, gender) => {
        const decl = gender === 'feminine' ? 'erste' : 'zweite';
        const g = gender === 'masculine' ? 'Maskulinum' : gender === 'feminine' ? 'Femininum' : 'Neutrum';
        return `Vollständige Deklinationstabelle für ${base} (${t}) auf Russisch. Alle 6 Fälle, Singular und Plural, mit Beispielsätzen. ${g} Substantiv, ${decl} Deklination.`;
      },
      wordNotFound: 'Wort nicht gefunden',
    },
    nav: { previousWord: 'Vorheriges Wort', nextWord: 'Nächstes Wort' },
    quizSectionTitle: 'Multiple-Choice-Übungen',
    quizSectionIntro: (baseForm) =>
      `Kostenlose Übung: Testen Sie Ihre Beherrschung der Deklination von ${baseForm} mit diesem interaktiven Multiple-Choice-Quiz. Eine praktische Übung ohne Anmeldung, um alle 6 russischen Fälle zu wiederholen.`,
    quiz: {
      triggerTitle: 'Testen Sie Ihr Wissen',
      triggerDescription: (baseForm) => `Üben Sie die Deklination von ${baseForm} in verschiedenen Fällen.`,
      triggerCta: 'Quiz starten',
      singular: 'Singular',
      plural: 'Plural',
      next: 'Weiter',
      seeResults: 'Ergebnisse anzeigen',
      tryAgain: 'Nochmal versuchen',
      close: 'Schließen',
      score: 'Ergebnis',
      questionLabel: 'Frage',
      correct: 'Richtig',
      incorrect: 'Falsch',
    },
  },
  pl_pl: {
    breadcrumb: { home: 'App', learn: 'Darmowe lekcje gramatyki', words: 'Rosyjskie odmiany' },
    h1Title: (base, trans) => `Rosyjska odmiana: ${base} (${trans})`,
    h2FullTable: (base) => `Pełna tabela odmian ${base}`,
    h2HowToUse: (base) => `Jak używać „${base}" po rosyjsku (przykłady)`,
    h2Faq: (base) => `FAQ o odmianie ${base}`,
    contextSnippetType: (base, gender, decl) =>
      `${base} to rzeczownik ${gender} należący do ${decl} odmiany.`,
    contextSnippetUsage: (level) =>
      `To jedno z najczęściej używanych słów w języku rosyjskim, niezbędne dla uczących się na poziomie ${level}.`,
    peopleAlsoSearchedFor: 'Użytkownicy szukali także',
    levelLabels: { beginners: 'początkujących', intermediate: 'średniozaawansowanych', advanced: 'zaawansowanych' },
    declensionOrdinals: { first: '1.', second: '2.', third: '3.' },
    fullDeclensionTable: 'Pełna tabela odmian',
    indeclinableNotice: (baseForm) =>
      `${baseForm} jest nieodmienne — pozostaje takie samo we wszystkich przypadkach. Brak rozróżnienia liczba pojedyncza/mnoga.`,
    indeclinableFormLabel: 'Forma nieodmienna',
    introParagraph1: (type, baseForm, translation, gender) =>
      `Rosyjski ${type} **${baseForm}** (${translation}) to rzeczownik **${gender}**.`,
    introParagraph3: (caseLabels) =>
      `Poniżej pełna odmiana we wszystkich **rosyjskich przypadkach** (${caseLabels}) w **liczbie pojedynczej** i **mnogiej**.`,
    howToDecline: 'Jak odmieniać',
    tableHeaders: { case: 'Przypadek', singular: 'Liczba pojedyncza', plural: 'Liczba mnoga' },
    caseLabel: 'Przypadek',
    formatCaseDisplay: (generic, name) => `${name} ${generic}`,
    tocCaseDeclensionLink: (baseForm, caseLabel) => `${baseForm} ${caseLabel} — odmiana`,
    tocTitle: 'Spis treści',
    cases: caseConfigPl,
    learnMoreAboutCase: 'Dowiedz się więcej o każdym przypadku:',
    russianCaseEndingsCheatsheet: 'Ściągawka rosyjskich końcówek przypadków',
    usageNotes: 'Uwagi dotyczące użycia',
    usageNotesContent: (translation, baseForm, gender) =>
      `Rosyjskie słowo oznaczające ${translation}, ${baseForm}, zgodnie ze standardowym wzorcem odmiany dla rzeczowników ${gender}. Użyj mianownika dla podmiotu, biernika dla dopełnienia bliższego, dopełniacza dla posiadania lub braku, celownika dla dopełnień dalszych (dla), narzędnika z/przez i miejscownika po в, на, о. Zobacz nasze przewodniki: `,
    usageNotesCaseEndings: 'rosyjskie końcówki przypadków',
    usageNotesAnd: ' i ',
    usageNotesGrammar: 'gramatyka rosyjska',
    usageNotesForMore: ' po więcej.',
    exampleSentences: 'Przykładowe zdania',
    comingSoon: 'Wkrótce...',
    leadMagnet: {
      title: 'Ćwicz rosyjskie odmiany na telefonie',
      description: (baseForm) =>
        `Przestań zapamiętywać tabele, zacznij ćwiczyć odmianę ${baseForm} i tysięcy innych rosyjskich słów w interaktywnych quizach.`,
      ctaText: 'Pobierz aplikację i zacznij ćwiczyć już dziś',
    },
    faq: {
      howToTranslate: (t) => `Jak przetłumaczyć ${t} na rosyjski?`,
      translateAnswer: (t, base, slug) =>
        `Rosyjskie słowo oznaczające "${t}" to **${base}** (${slug}).`,
      whatIsMeaning: (base) => `Co oznacza ${base}?`,
      meaningAnswer: (base, t, gender) =>
        `**${base}** oznacza „${t}" po polsku. To rzeczownik ${gender} w języku rosyjskim.`,
      whatIsCaseOf: (caseLabel, base) =>
        `Jaka jest forma ${base} w ${caseLabel.toLowerCase()}?`,
      caseAnswer: (caseLabel, base, sg, pl) =>
        `**${base}** w ${caseLabel.toLowerCase()} w liczbie pojedynczej to **${sg}**. W liczbie mnogiej to **${pl}**.`,
      isMasculineOrFeminine: (base) => `Czy ${base} jest rodzaju męskiego czy żeńskiego?`,
      genderAnswer: (base, gender) => `**${base}** to rzeczownik ${gender} w języku rosyjskim.`,
      isRegularOrIrregular: (base) => `Czy ${base} jest regularny czy nieregularny?`,
      regularAnswer: (base, gender) =>
        `**${base}** to rzeczownik **regularny**. Zgodny ze standardowym wzorcem odmiany dla rzeczowników ${gender}.`,
      indeclinableAnswer: (base) =>
        `**${base}** jest **nieodmienne**. Nie zmienia się w żadnym przypadku — ta sama forma jest używana w mianowniku, bierniku, dopełniaczu i wszystkich innych przypadkach.`,
    },
    gender: { masculine: 'męski', feminine: 'żeński', neuter: 'nijaki' },
    type: { noun: 'rzeczownik', proper_noun: 'nazwa własna' },
    metadata: {
      title: (_t, base) => `Jak odmieniać ${base} po rosyjsku we wszystkich 6 przypadkach`,
      description: (base, t, gender) => {
        const decl = gender === 'feminine' ? 'pierwsza' : 'druga';
        const g = gender === 'masculine' ? 'męski' : gender === 'feminine' ? 'żeński' : 'nijaki';
        return `Pełna tabela odmian ${base} (${t}) w języku rosyjskim. Wszystkie 6 przypadków, liczba pojedyncza i mnoga, z przykładami zdań. Rzeczownik ${g}, ${decl} odmiana.`;
      },
      wordNotFound: 'Słowo nie znalezione',
    },
    nav: { previousWord: 'Poprzednie słowo', nextWord: 'Następne słowo' },
    quizSectionTitle: 'Ćwiczenia testowe',
    quizSectionIntro: (baseForm) =>
      `Darmowe ćwiczenie: sprawdź swoją znajomość odmiany ${baseForm} w tym interaktywnym quizie wielokrotnego wyboru. Praktyczny trening bez rejestracji, aby powtórzyć wszystkie 6 rosyjskich przypadków.`,
    quiz: {
      triggerTitle: 'Sprawdź swoją wiedzę',
      triggerDescription: (baseForm) => `Ćwicz odmienianie ${baseForm} w różnych przypadkach.`,
      triggerCta: 'Rozpocznij quiz',
      singular: 'Liczba pojedyncza',
      plural: 'Liczba mnoga',
      next: 'Dalej',
      seeResults: 'Zobacz wyniki',
      tryAgain: 'Spróbuj ponownie',
      close: 'Zamknij',
      score: 'Wynik',
      questionLabel: 'Pytanie',
      correct: 'Poprawnie',
      incorrect: 'Niepoprawnie',
    },
  },
  ru_ru: {
    breadcrumb: { home: 'App', learn: 'Бесплатные уроки грамматики', words: 'Русские склонения' },
    h1Title: (base, trans) => `Склонение: ${base} (${trans})`,
    h2FullTable: (base) => `Полная таблица склонений ${base}`,
    h2HowToUse: (base) => `Как использовать «${base}» в русском языке (примеры)`,
    h2Faq: (base) => `Вопросы о склонении ${base}`,
    contextSnippetType: (base, gender, decl) =>
      `${base} — существительное ${gender} рода, относится к ${decl} склонению.`,
    contextSnippetUsage: (level) =>
      `Одно из самых употребительных слов в русском языке, необходимо для изучающих на уровне ${level}.`,
    peopleAlsoSearchedFor: 'Пользователи также искали',
    levelLabels: { beginners: 'начинающих', intermediate: 'среднего уровня', advanced: 'продвинутых' },
    declensionOrdinals: { first: '1-го', second: '2-го', third: '3-го' },
    fullDeclensionTable: 'Полная таблица склонений',
    indeclinableNotice: (baseForm) =>
      `${baseForm} несклоняемое — не меняется во всех падежах. Нет различия единственное/множественное число.`,
    indeclinableFormLabel: 'Неизменяемая форма',
    introParagraph1: (type, baseForm, translation, gender) =>
      `Русское существительное **${baseForm}** (${translation}) — это существительное **${gender}** рода.`,
    introParagraph3: (caseLabels) =>
      `Ниже представлено полное склонение по всем **русским падежам** (${caseLabels}) в **единственном** и **множественном** числе.`,
    howToDecline: 'Как склонять',
    tableHeaders: { case: 'Падеж', singular: 'Ед. число', plural: 'Мн. число' },
    caseLabel: 'Падеж',
    formatCaseDisplay: (generic, name) => `${name} ${generic}`,
    tocCaseDeclensionLink: (baseForm, caseLabel) => `${baseForm} в ${caseLabel} падеже`,
    tocTitle: 'Содержание',
    cases: caseConfigRu,
    learnMoreAboutCase: 'Подробнее о каждом падеже:',
    russianCaseEndingsCheatsheet: 'Шпаргалка по окончаниям падежей',
    usageNotes: 'Заметки об использовании',
    usageNotesContent: (translation, baseForm, gender) =>
      `Русское слово для ${translation}, ${baseForm}, следует стандартной схеме склонения для существительных ${gender}. Используйте именительный для подлежащего, винительный для прямого дополнения, родительный для принадлежности или отсутствия, дательный для косвенных дополнений (кому/чему), творительный с/при помощи, предложный после в, на, о. См. наши руководства: `,
    usageNotesCaseEndings: 'окончания падежей',
    usageNotesAnd: ' и ',
    usageNotesGrammar: 'русская грамматика',
    usageNotesForMore: ' для подробностей.',
    exampleSentences: 'Примеры предложений',
    comingSoon: 'Скоро...',
    leadMagnet: {
      title: 'Тренируйте русские склонения на телефоне',
      description: (baseForm) =>
        `Перестаньте зубрить таблицы, начните тренировать склонение ${baseForm} и тысяч других русских слов в интерактивных викторинах.`,
      ctaText: 'Скачайте приложение и начните тренироваться сегодня',
    },
    faq: {
      howToTranslate: (t) => `Как перевести ${t} на русский?`,
      translateAnswer: (t, base, slug) =>
        `Русское слово для «${t}» — **${base}** (${slug}).`,
      whatIsMeaning: (base) => `Что означает ${base}?`,
      meaningAnswer: (base, t, gender) =>
        `**${base}** означает «${t}». Это существительное ${gender} в русском языке.`,
      whatIsCaseOf: (caseLabel, base) =>
        `Какая форма ${base} в ${caseLabel.toLowerCase()} падеже?`,
      caseAnswer: (caseLabel, base, sg, pl) =>
        `Форма **${base}** (${caseLabel}): ед. ч. — **${sg}**, мн. ч. — **${pl}**.`,
      isMasculineOrFeminine: (base) => `${base} — мужского или женского рода?`,
      genderAnswer: (base, gender) => `**${base}** — существительное ${gender} в русском языке.`,
      isRegularOrIrregular: (base) => `${base} — правильное или неправильное?`,
      regularAnswer: (base, gender) =>
        `**${base}** — **правильное** существительное. Следует стандартной схеме склонения для существительных ${gender}.`,
      indeclinableAnswer: (base) =>
        `**${base}** — **несклоняемое** существительное. Не изменяется ни в одном падеже — одна и та же форма используется в именительном, винительном, родительном и всех остальных падежах.`,
    },
    gender: { masculine: 'мужской', feminine: 'женский', neuter: 'средний' },
    type: { noun: 'существительное', proper_noun: 'имя собственное' },
    metadata: {
      title: (_t, base) => `Как склонять ${base} в русском языке во всех 6 падежах`,
      description: (base, t, gender) => {
        const decl = gender === 'feminine' ? 'первое' : 'второе';
        const g = gender === 'masculine' ? 'мужского' : gender === 'feminine' ? 'женского' : 'среднего';
        return `Полная таблица склонений ${base} (${t}) в русском языке. Все 6 падежей, единственное и множественное число, с примерами предложений. Существительное ${g} рода, ${decl} склонение.`;
      },
      wordNotFound: 'Слово не найдено',
    },
    nav: { previousWord: 'Предыдущее слово', nextWord: 'Следующее слово' },
    quizSectionTitle: 'Упражнения с выбором ответа',
    quizSectionIntro: (baseForm) =>
      `Бесплатное упражнение: проверьте своё знание склонения ${baseForm} с помощью этого интерактивного теста с выбором ответа. Практическая тренировка без регистрации для повторения всех 6 падежей русского языка.`,
    quiz: {
      triggerTitle: 'Проверьте свои знания',
      triggerDescription: (baseForm) => `Потренируйтесь склонять ${baseForm} в разных падежах.`,
      triggerCta: 'Начать тест',
      singular: 'Ед. число',
      plural: 'Мн. число',
      next: 'Далее',
      seeResults: 'Результаты',
      tryAgain: 'Ещё раз',
      close: 'Закрыть',
      score: 'Результат',
      questionLabel: 'Вопрос',
      correct: 'Верно',
      incorrect: 'Неверно',
    },
  },
};

export function getWordPageTranslations(language: LandingLanguage): WordPageTranslations {
  return translations[language] ?? translations.en_en;
}
