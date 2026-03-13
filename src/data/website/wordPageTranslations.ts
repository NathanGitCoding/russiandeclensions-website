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
    breadcrumb: { home: 'App', learn: 'Free Grammar Lessons', words: 'Declensions' },
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
      title: (t, base) => `${t} in Russian — Declension of ${base}`,
      description: (base, t, gender) => {
        const decl = gender === 'feminine' ? 'first' : gender === 'neuter' ? 'second' : 'second';
        return `Complete declension table for ${base} (${t}) in Russian. All 6 cases, singular and plural, with example sentences. ${gender.charAt(0).toUpperCase() + gender.slice(1)} noun, ${decl} declension.`;
      },
      wordNotFound: 'Word not found',
    },
    nav: {
      previousWord: 'Previous word',
      nextWord: 'Next word',
    },
  },
  fr_fr: {
    breadcrumb: { home: 'App', learn: 'Leçons de grammaire gratuites', words: 'Déclinaisons' },
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
      title: (t, base) => `${t} en russe — Déclinaison de ${base}`,
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
  },
  tr_tr: {
    breadcrumb: { home: 'App', learn: 'Ücretsiz Gramer Dersleri', words: 'Çekimler' },
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
      title: (t, base) => `Rusçada ${t} — ${base} çekimi`,
      description: (base, t, gender) => {
        const decl = gender === 'feminine' ? 'birinci' : 'ikinci';
        const g = gender === 'masculine' ? 'eril' : gender === 'feminine' ? 'dişil' : 'nötr';
        return `Rusçada ${base} (${t}) için tam çekim tablosu. 6 durum, tekil ve çoğul, örnek cümlelerle. ${g} isim, ${decl} çekim.`;
      },
      wordNotFound: 'Kelime bulunamadı',
    },
    nav: { previousWord: 'Önceki kelime', nextWord: 'Sonraki kelime' },
  },
  de_de: {
    breadcrumb: { home: 'App', learn: 'Kostenlose Grammatik-Lektionen', words: 'Deklinationen' },
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
      title: (t, base) => `${t} auf Russisch — Deklination von ${base}`,
      description: (base, t, gender) => {
        const decl = gender === 'feminine' ? 'erste' : 'zweite';
        const g = gender === 'masculine' ? 'Maskulinum' : gender === 'feminine' ? 'Femininum' : 'Neutrum';
        return `Vollständige Deklinationstabelle für ${base} (${t}) auf Russisch. Alle 6 Fälle, Singular und Plural, mit Beispielsätzen. ${g} Substantiv, ${decl} Deklination.`;
      },
      wordNotFound: 'Wort nicht gefunden',
    },
    nav: { previousWord: 'Vorheriges Wort', nextWord: 'Nächstes Wort' },
  },
  pl_pl: {
    breadcrumb: { home: 'App', learn: 'Darmowe lekcje gramatyki', words: 'Odmiany' },
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
      title: (t, base) => `${t} po rosyjsku — Odmiana ${base}`,
      description: (base, t, gender) => {
        const decl = gender === 'feminine' ? 'pierwsza' : 'druga';
        const g = gender === 'masculine' ? 'męski' : gender === 'feminine' ? 'żeński' : 'nijaki';
        return `Pełna tabela odmian ${base} (${t}) w języku rosyjskim. Wszystkie 6 przypadków, liczba pojedyncza i mnoga, z przykładami zdań. Rzeczownik ${g}, ${decl} odmiana.`;
      },
      wordNotFound: 'Słowo nie znalezione',
    },
    nav: { previousWord: 'Poprzednie słowo', nextWord: 'Następne słowo' },
  },
  ru_ru: {
    breadcrumb: { home: 'App', learn: 'Бесплатные уроки грамматики', words: 'Склонения' },
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
      title: (t, base) => `${t} по-русски — Склонение ${base}`,
      description: (base, t, gender) => {
        const decl = gender === 'feminine' ? 'первое' : 'второе';
        const g = gender === 'masculine' ? 'мужского' : gender === 'feminine' ? 'женского' : 'среднего';
        return `Полная таблица склонений ${base} (${t}) в русском языке. Все 6 падежей, единственное и множественное число, с примерами предложений. Существительное ${g} рода, ${decl} склонение.`;
      },
      wordNotFound: 'Слово не найдено',
    },
    nav: { previousWord: 'Предыдущее слово', nextWord: 'Следующее слово' },
  },
};

export function getWordPageTranslations(language: LandingLanguage): WordPageTranslations {
  return translations[language] ?? translations.en_en;
}
