/**
 * Traductions pour la page index des mots (/words)
 */

import type { LandingLanguage } from './landingTranslations';

export interface WordsIndexPageTranslations {
  breadcrumb: { home: string; learn: string; words: string };
  title: string;
  titleWithCount: (total: number) => string;
  subtitle: (total: number) => string;
  /** Long intro paragraphs for SEO (150-300 words) */
  intro: { paragraphs: (total: number) => string[] };
  /** H2 section "Why these words will transform your Russian" */
  heroH2: { title: (total: number) => string; body: (total: number) => string };
  filterAll: string;
  filterByLetter: string;
  level1: string;
  level2: string;
  level3: string;
  tableHeaders: { russian: string; translation: string; gender: string; level: string; viewDeclension: string };
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
  relatedLinks: {
    title: string;
    learnLabel: string;
    caseArticlesTitle: string;
    blogLabel: string;
    popularWordsTitle: string;
  };
}

const translations: Record<LandingLanguage, WordsIndexPageTranslations> = {
  en_en: {
    breadcrumb: { home: 'App', learn: 'Free Grammar Lessons', words: 'Russian Declensions' },
    title: 'Russian Word Declensions — Complete List',
    titleWithCount: (total) =>
      `${total} Most Useful Russian Words with Full Declension Tables (All 6 Cases)`,
    subtitle: (total) =>
      `Browse ${total.toLocaleString()} most useful Russian words with full declension tables for all 6 cases. Free interactive charts + examples. Master Russian grammar fast.`,
    intro: {
      paragraphs: (total) => [
        `Discover the ${total.toLocaleString()} most useful **Russian words** with their complete **declension tables** for all **6 Russian cases**.`,
        `Whether you're a beginner or intermediate learner, this free tool shows exactly how every noun changes in **nominative, genitive, dative, accusative, instrumental and prepositional** cases — with **singular and plural** forms.`,
        `Click any word below to open its full **declension chart** (including pronunciation and English translation). Each declension page includes **free interactive exercises** to practice what you've learned. These ${total.toLocaleString()} words cover **80%** of everyday Russian conversations, making them the fastest way to master **Russian grammar and cases** without memorizing hundreds of rules.`,
        `Perfect for **students, travelers, and self-learners** who want real examples instead of dry theory.`,
        `Start browsing now or search any Russian word above.`,
      ],
    },
    heroH2: {
      title: (t) => `Why These ${t.toLocaleString()} Words Will Transform Your Russian`,
      body: (t) =>
        `These ${t.toLocaleString()} words were carefully selected to cover the vast majority of everyday Russian. By learning their declensions, you'll understand how Russian cases work in practice — without memorizing abstract rules. Each word links to a complete chart with all 6 cases in singular and plural.`,
    },
    filterAll: 'All',
    filterByLetter: 'Filter by letter',
    level1: 'Level 1 — Most common',
    level2: 'Level 2',
    level3: 'Level 3+',
    tableHeaders: { russian: 'Russian', translation: 'Translation', gender: 'Gender', level: 'Level', viewDeclension: 'See declension' },
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
        `${total} Most Useful Russian Words with Full Declension Tables (All 6 Cases) | RussianDeclensions`,
      description: (total) =>
        `Browse ${total} most useful Russian words with full declension tables for all 6 cases. Free interactive charts + examples. Master Russian grammar fast.`,
    },
    relatedLinks: {
      title: 'Learn more about Russian cases',
      learnLabel: 'Grammar lessons',
      caseArticlesTitle: 'Russian case guides',
      blogLabel: 'Blog & tips',
      popularWordsTitle: 'Popular words',
    },
  },
  fr_fr: {
    breadcrumb: { home: 'App', learn: 'Leçons de grammaire gratuites', words: 'Déclinaisons russes' },
    title: 'Déclinaisons des mots russes — Liste complète',
    titleWithCount: (total) =>
      `${total} mots russes les plus utiles avec tableaux de déclinaison complets (6 cas)`,
    subtitle: (total) =>
      `Parcourez ${total.toLocaleString('fr-FR')} mots russes avec tableaux de déclinaison pour les 6 cas. Exemples interactifs gratuits. Maîtrisez la grammaire russe rapidement.`,
    intro: {
      paragraphs: (total) => [
        `Découvrez les ${total.toLocaleString('fr-FR')} **mots russes** les plus utiles avec leurs **tableaux de déclinaison** complets pour les **6 cas russes**.`,
        `Que vous soyez débutant ou intermédiaire, cet outil gratuit montre exactement comment chaque nom change au **nominatif, génitif, datif, accusatif, instrumental et prépositionnel** — au **singulier et au pluriel**.`,
        `Cliquez sur n'importe quel mot pour afficher son **tableau de déclinaison** complet (avec prononciation et traduction). Chaque page de déclinaison inclut des **exercices interactifs gratuits** pour pratiquer. Ces ${total.toLocaleString('fr-FR')} mots couvrent **80 %** des conversations quotidiennes en russe, pour maîtriser la **grammaire russe** sans mémoriser des centaines de règles.`,
        `Idéal pour les **étudiants, voyageurs et autodidactes** qui préfèrent des exemples concrets à la théorie.`,
        `Parcourez la liste ou recherchez un mot russe ci-dessus.`,
      ],
    },
    heroH2: {
      title: (t) => `Pourquoi ces ${t.toLocaleString('fr-FR')} mots vont transformer votre russe`,
      body: (t) =>
        `Ces ${t.toLocaleString('fr-FR')} mots ont été sélectionnés pour couvrir l'essentiel du russe quotidien. En apprenant leurs déclinaisons, vous comprendrez comment les cas russes fonctionnent en pratique — sans règles abstraites. Chaque mot mène à un tableau complet avec les 6 cas au singulier et au pluriel.`,
    },
    filterAll: 'Tous',
    filterByLetter: 'Filtrer par lettre',
    level1: 'Niveau 1 — Les plus courants',
    level2: 'Niveau 2',
    level3: 'Niveau 3+',
    tableHeaders: { russian: 'Russe', translation: 'Traduction', gender: 'Genre', level: 'Niveau', viewDeclension: 'Voir la déclinaison' },
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
        `${total} mots russes les plus utiles avec tableaux de déclinaison (6 cas) | RussianDeclensions`,
      description: (total) =>
        `Parcourez ${total} mots russes avec tableaux de déclinaison pour les 6 cas. Exemples interactifs gratuits. Maîtrisez la grammaire russe rapidement.`,
    },
    relatedLinks: {
      title: 'En savoir plus sur les cas russes',
      learnLabel: 'Leçons de grammaire',
      caseArticlesTitle: 'Guides des cas russes',
      blogLabel: 'Blog et conseils',
      popularWordsTitle: 'Mots populaires',
    },
  },
  de_de: {
    breadcrumb: { home: 'App', learn: 'Kostenlose Grammatik-Lektionen', words: 'Russische Deklinationen' },
    title: 'Russische Wortdeklinationen — Vollständige Liste',
    titleWithCount: (total) =>
      `${total} nützlichste russische Wörter mit vollständigen Deklinationstabellen (6 Fälle)`,
    subtitle: (total) =>
      `Durchsuchen Sie ${total.toLocaleString('de-DE')} russische Wörter mit Deklinationstabellen für alle 6 Fälle. Kostenlose interaktive Beispiele. Meistern Sie die russische Grammatik schnell.`,
    intro: {
      paragraphs: (total) => [
        `Entdecken Sie die ${total.toLocaleString('de-DE')} nützlichsten **russischen Wörter** mit vollständigen **Deklinationstabellen** für alle **6 russischen Fälle**.`,
        `Ob Anfänger oder Fortgeschrittener — dieses kostenlose Tool zeigt genau, wie sich jedes Nomen im **Nominativ, Genitiv, Dativ, Akkusativ, Instrumental und Präpositional** verändert — im **Singular und Plural**.`,
        `Klicken Sie auf ein Wort für die vollständige **Deklinationstabelle** (mit Aussprache und Übersetzung). Jede Deklinationsseite enthält **kostenlose interaktive Übungen**. Diese ${total.toLocaleString('de-DE')} Wörter decken **80 %** des Alltagsrussisch ab — die schnellste Methode, **Grammatik und Fälle** zu meistern, ohne hunderte Regeln auswendig zu lernen.`,
        `Perfekt für **Studenten, Reisende und Selbstlerner**, die echte Beispiele statt trockener Theorie wollen.`,
        `Durchsuchen Sie jetzt oder suchen Sie oben nach einem russischen Wort.`,
      ],
    },
    heroH2: {
      title: (t) => `Warum diese ${t.toLocaleString('de-DE')} Wörter Ihr Russisch verändern werden`,
      body: (t) =>
        `Diese ${t.toLocaleString('de-DE')} Wörter wurden sorgfältig ausgewählt, um den Großteil des Alltagsrussisch abzudecken. Indem Sie ihre Deklinationen lernen, verstehen Sie die russischen Fälle in der Praxis — ohne abstrakte Regeln. Jedes Wort führt zu einer vollständigen Tabelle mit allen 6 Fällen im Singular und Plural.`,
    },
    filterAll: 'Alle',
    filterByLetter: 'Nach Buchstabe filtern',
    level1: 'Stufe 1 — Am häufigsten',
    level2: 'Stufe 2',
    level3: 'Stufe 3+',
    tableHeaders: { russian: 'Russisch', translation: 'Übersetzung', gender: 'Genus', level: 'Stufe', viewDeclension: 'Deklination anzeigen' },
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
        `${total} nützlichste russische Wörter mit Deklinationstabellen (6 Fälle) | RussianDeclensions`,
      description: (total) =>
        `Durchsuchen Sie ${total} russische Wörter mit Deklinationstabellen für alle 6 Fälle. Kostenlose interaktive Beispiele. Meistern Sie die russische Grammatik schnell.`,
    },
    relatedLinks: {
      title: 'Mehr über russische Fälle erfahren',
      learnLabel: 'Grammatik-Lektionen',
      caseArticlesTitle: 'Russische Fall-Guides',
      blogLabel: 'Blog & Tipps',
      popularWordsTitle: 'Beliebte Wörter',
    },
  },
  tr_tr: {
    breadcrumb: { home: 'App', learn: 'Ücretsiz Gramer Dersleri', words: 'Rusça Çekimler' },
    title: 'Rusça Kelime Çekimleri — Tam Liste',
    titleWithCount: (total) =>
      `Tam çekim tablolarıyla en yararlı ${total.toLocaleString('tr-TR')} Rusça kelime (6 hal)`,
    subtitle: (total) =>
      `${total.toLocaleString('tr-TR')} Rusça kelimeyi 6 hal için tam çekim tablolarıyla inceleyin. Ücretsiz interaktif örnekler. Rusça grameri hızlıca öğrenin.`,
    intro: {
      paragraphs: (total) => [
        `6 Rusça halinin **tam çekim tabloları**yla en yararlı ${total.toLocaleString('tr-TR')} kelimeyi keşfedin.`,
        `İster başlangıç ister orta seviye olun, bu ücretsiz araç her ismin **nominatif, genitif, datif, akuzatif, enstrümantal ve prepozisyonel** hallerde — **tekil ve çoğul** — nasıl değiştiğini gösterir.`,
        `Herhangi bir kelimeye tıklayarak **tam çekim tablosunu** (telaffuz ve İngilizce çeviri ile) açın. Her çekim sayfası **ücretsiz interaktif alıştırmalar** içerir. Bu ${total.toLocaleString('tr-TR')} kelime günlük Rusça konuşmaların **%80**'ini kapsar — yüzlerce kural ezberlemeden **gramer ve halleri** öğrenmenin en hızlı yolu.`,
        `**Öğrenciler, gezginler ve öz öğrenenler** için ideal.`,
        `Listeyi inceleyin veya yukarıdan bir Rusça kelime arayın.`,
      ],
    },
    heroH2: {
      title: (t) => `Bu ${t.toLocaleString('tr-TR')} kelime Rusçanızı nasıl dönüştürecek`,
      body: (t) =>
        `Bu ${t.toLocaleString('tr-TR')} kelime günlük Rusçanın büyük kısmını kapsayacak şekilde özenle seçildi. Çekimlerini öğrenerek Rusça halleri pratikte anlayacaksınız — soyut kurallar olmadan. Her kelime tekil ve çoğulda 6 halin tamamını içeren bir tabloya bağlanır.`,
    },
    filterAll: 'Tümü',
    filterByLetter: 'Harfe göre filtrele',
    level1: 'Seviye 1 — En yaygın',
    level2: 'Seviye 2',
    level3: 'Seviye 3+',
    tableHeaders: { russian: 'Rusça', translation: 'Çeviri', gender: 'Cinsiyet', level: 'Seviye', viewDeclension: 'Çekimi görüntüle' },
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
        `Tam çekim tablolarıyla en yararlı ${total} Rusça kelime (6 hal) | RussianDeclensions`,
      description: (total) =>
        `${total} Rusça kelimeyi 6 hal için tam çekim tablolarıyla inceleyin. Ücretsiz interaktif örnekler. Rusça grameri hızlıca öğrenin.`,
    },
    relatedLinks: {
      title: 'Rusça haller hakkında daha fazla bilgi',
      learnLabel: 'Gramer dersleri',
      caseArticlesTitle: 'Rusça hal rehberleri',
      blogLabel: 'Blog ve ipuçları',
      popularWordsTitle: 'Popüler kelimeler',
    },
  },
  pl_pl: {
    breadcrumb: { home: 'App', learn: 'Darmowe lekcje gramatyki', words: 'Rosyjskie odmiany' },
    title: 'Odmiany rosyjskich słów — Pełna lista',
    titleWithCount: (total) =>
      `Najbardziej przydatne ${total.toLocaleString('pl-PL')} rosyjskich słów z pełnymi tabelami odmian (6 przypadków)`,
    subtitle: (total) =>
      `Przeglądaj ${total.toLocaleString('pl-PL')} rosyjskich słów z tabelami odmian dla 6 przypadków. Darmowe interaktywne przykłady. Opanuj rosyjską gramatykę szybko.`,
    intro: {
      paragraphs: (total) => [
        `Odkryj ${total.toLocaleString('pl-PL')} najbardziej przydatnych **rosyjskich słów** z pełnymi **tabelami odmian** dla **6 rosyjskich przypadków**.`,
        `Niezależnie od tego, czy jesteś początkujący, czy średniozaawansowany — to darmowe narzędzie pokazuje dokładnie, jak każde rzeczownik zmienia się w **mianowniku, dopełniaczu, celowniku, bierniku, narzędniku i miejscowniku** — w **liczbie pojedynczej i mnogiej**.`,
        `Kliknij dowolne słowo, aby otworzyć pełną **tabelę odmian** (z wymową i angielskim tłumaczeniem). Każda strona odmiany zawiera **darmowe interaktywne ćwiczenia**. Te ${total.toLocaleString('pl-PL')} słów pokrywa **80%** codziennych rosyjskich rozmów — najszybszy sposób na opanowanie **gramatyki i przypadków** bez zapamiętywania setek zasad.`,
        `Idealne dla **studentów, podróżników i samouków**, którzy wolą prawdziwe przykłady zamiast suchej teorii.`,
        `Przeglądaj teraz lub wyszukaj rosyjskie słowo powyżej.`,
      ],
    },
    heroH2: {
      title: (t) => `Dlaczego te ${t.toLocaleString('pl-PL')} słów zmienią Twoją znajomość rosyjskiego`,
      body: (t) =>
        `Te ${t.toLocaleString('pl-PL')} słów zostały starannie wybrane, aby pokryć większość codziennego rosyjskiego. Ucząc się ich odmian, zrozumiesz, jak rosyjskie przypadki działają w praktyce — bez abstrakcyjnych zasad. Każde słowo prowadzi do pełnej tabeli ze wszystkimi 6 przypadkami w liczbie pojedynczej i mnogiej.`,
    },
    filterAll: 'Wszystkie',
    filterByLetter: 'Filtruj według litery',
    level1: 'Poziom 1 — Najpopularniejsze',
    level2: 'Poziom 2',
    level3: 'Poziom 3+',
    tableHeaders: { russian: 'Rosyjski', translation: 'Tłumaczenie', gender: 'Rodzaj', level: 'Poziom', viewDeclension: 'Zobacz odmianę' },
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
        `Najbardziej przydatne ${total} rosyjskich słów z tabelami odmian (6 przypadków) | RussianDeclensions`,
      description: (total) =>
        `Przeglądaj ${total} rosyjskich słów z tabelami odmian dla 6 przypadków. Darmowe interaktywne przykłady. Opanuj rosyjską gramatykę szybko.`,
    },
    relatedLinks: {
      title: 'Więcej o rosyjskich przypadkach',
      learnLabel: 'Lekcje gramatyki',
      caseArticlesTitle: 'Przewodniki po przypadkach',
      blogLabel: 'Blog i porady',
      popularWordsTitle: 'Popularne słowa',
    },
  },
  es_es: {
    breadcrumb: { home: 'App', learn: 'Lecciones de gramática gratis', words: 'Declinaciones rusas' },
    title: 'Declinaciones de palabras rusas — Lista completa',
    titleWithCount: (total) =>
      `${total} palabras rusas más útiles con tablas de declinación completas (6 casos)`,
    subtitle: (total) =>
      `Explora ${total.toLocaleString('es-ES')} palabras rusas más útiles con tablas de declinación para los 6 casos. Ejemplos interactivos gratuitos. Domina la gramática rusa rápido.`,
    intro: {
      paragraphs: (total) => [
        `Descubre las ${total.toLocaleString('es-ES')} **palabras rusas** más útiles con sus **tablas de declinación** completas para los **6 casos rusos**.`,
        `Tanto si eres principiante como intermedio, esta herramienta gratuita muestra exactamente cómo cambia cada sustantivo en **nominativo, genitivo, dativo, acusativo, instrumental y preposicional** — en **singular y plural**.`,
        `Haz clic en cualquier palabra para ver su **tabla de declinación** completa (con pronunciación y traducción). Cada página de declinación incluye **ejercicios interactivos gratuitos**. Estas ${total.toLocaleString('es-ES')} palabras cubren el **80%** de las conversaciones cotidianas en ruso — la forma más rápida de dominar la **gramática y los casos** sin memorizar cientos de reglas.`,
        `Perfecto para **estudiantes, viajeros y autodidactas** que prefieren ejemplos reales a la teoría.`,
        `Explora la lista o busca una palabra rusa arriba.`,
      ],
    },
    heroH2: {
      title: (t) => `Por qué estas ${t.toLocaleString('es-ES')} palabras transformarán tu ruso`,
      body: (t) =>
        `Estas ${t.toLocaleString('es-ES')} palabras fueron seleccionadas para cubrir la gran mayoría del ruso cotidiano. Aprendiendo sus declinaciones entenderás cómo funcionan los casos rusos en la práctica — sin reglas abstractas. Cada palabra enlaza a una tabla completa con los 6 casos en singular y plural.`,
    },
    filterAll: 'Todos',
    filterByLetter: 'Filtrar por letra',
    level1: 'Nivel 1 — Más comunes',
    level2: 'Nivel 2',
    level3: 'Nivel 3+',
    tableHeaders: { russian: 'Ruso', translation: 'Traducción', gender: 'Género', level: 'Nivel', viewDeclension: 'Ver declinación' },
    levelBadgeTitle: (level) => `Nivel ${level}`,
    emptyState: 'No se encontraron palabras. Prueba a cambiar los filtros.',
    pagination: {
      showing: (from, to, total) =>
        `Mostrando ${from}-${to} de ${total.toLocaleString('es-ES')} palabras`,
      previous: '← Anterior',
      next: 'Siguiente →',
    },
    gender: { masculine: 'masculino', feminine: 'femenino', neuter: 'neutro' },
    metadata: {
      title: (total) =>
        `${total} palabras rusas más útiles con tablas de declinación (6 casos) | RussianDeclensions`,
      description: (total) =>
        `Explora ${total} palabras rusas con tablas de declinación para los 6 casos. Ejemplos interactivos gratuitos. Domina la gramática rusa rápido.`,
    },
    relatedLinks: {
      title: 'Más sobre los casos rusos',
      learnLabel: 'Lecciones de gramática',
      caseArticlesTitle: 'Guías de casos rusos',
      blogLabel: 'Blog y consejos',
      popularWordsTitle: 'Palabras populares',
    },
  },
  it_it: {
    breadcrumb: { home: 'App', learn: 'Lezioni di grammatica gratuite', words: 'Declinazioni russe' },
    title: 'Declinazioni delle parole russe — Lista completa',
    titleWithCount: (total) =>
      `${total} parole russe più utili con tabelle di declinazione complete (6 casi)`,
    subtitle: (total) =>
      `Sfoglia le ${total.toLocaleString('it-IT')} parole russe più utili con tabelle di declinazione per i 6 casi. Esempi interattivi gratuiti. Padroneggia la grammatica russa velocemente.`,
    intro: {
      paragraphs: (total) => [
        `Scopri le ${total.toLocaleString('it-IT')} **parole russe** più utili con le loro **tabelle di declinazione** complete per i **6 casi russi**.`,
        `Sia che tu sia principiante o intermedio, questo strumento gratuito mostra esattamente come ogni sostantivo cambia in **nominativo, genitivo, dativo, accusativo, strumentale e preposizionale** — al **singolare e plurale**.`,
        `Clicca su qualsiasi parola per vedere la sua **tabella di declinazione** completa (con pronuncia e traduzione). Ogni pagina di declinazione include **esercizi interattivi gratuiti**. Queste ${total.toLocaleString('it-IT')} parole coprono l'**80%** delle conversazioni quotidiane in russo — il modo più veloce per padroneggiare **grammatica e casi** senza memorizzare centinaia di regole.`,
        `Perfetto per **studenti, viaggiatori e autodidatti** che preferiscono esempi concreti alla teoria.`,
        `Sfoglia la lista o cerca una parola russa sopra.`,
      ],
    },
    heroH2: {
      title: (t) => `Perché queste ${t.toLocaleString('it-IT')} parole trasformeranno il tuo russo`,
      body: (t) =>
        `Queste ${t.toLocaleString('it-IT')} parole sono state selezionate per coprire la stragrande maggioranza del russo quotidiano. Imparando le loro declinazioni capirai come funzionano i casi russi nella pratica — senza regole astratte. Ogni parola porta a una tabella completa con i 6 casi al singolare e plurale.`,
    },
    filterAll: 'Tutti',
    filterByLetter: 'Filtra per lettera',
    level1: 'Livello 1 — Più comuni',
    level2: 'Livello 2',
    level3: 'Livello 3+',
    tableHeaders: { russian: 'Russo', translation: 'Traduzione', gender: 'Genere', level: 'Livello', viewDeclension: 'Vedi declinazione' },
    levelBadgeTitle: (level) => `Livello ${level}`,
    emptyState: 'Nessuna parola trovata. Prova a modificare i filtri.',
    pagination: {
      showing: (from, to, total) =>
        `Mostrando ${from}-${to} di ${total.toLocaleString('it-IT')} parole`,
      previous: '← Precedente',
      next: 'Successivo →',
    },
    gender: { masculine: 'maschile', feminine: 'femminile', neuter: 'neutro' },
    metadata: {
      title: (total) =>
        `${total} parole russe più utili con tabelle di declinazione (6 casi) | RussianDeclensions`,
      description: (total) =>
        `Sfoglia ${total} parole russe con tabelle di declinazione per i 6 casi. Esempi interattivi gratuiti. Padroneggia la grammatica russa velocemente.`,
    },
    relatedLinks: {
      title: 'Scopri di più sui casi russi',
      learnLabel: 'Lezioni di grammatica',
      caseArticlesTitle: 'Guide ai casi russi',
      blogLabel: 'Blog e consigli',
      popularWordsTitle: 'Parole popolari',
    },
  },
  pt_pt: {
    breadcrumb: { home: 'App', learn: 'Lições de gramática grátis', words: 'Declinações russas' },
    title: 'Declinações de palavras russas — Lista completa',
    titleWithCount: (total) =>
      `${total} palavras russas mais úteis com tabelas de declinação completas (6 casos)`,
    subtitle: (total) =>
      `Explora as ${total.toLocaleString('pt-PT')} palavras russas mais úteis com tabelas de declinação para os 6 casos. Exemplos interativos gratuitos. Domina a gramática russa rapidamente.`,
    intro: {
      paragraphs: (total) => [
        `Descobre as ${total.toLocaleString('pt-PT')} **palavras russas** mais úteis com as suas **tabelas de declinação** completas para os **6 casos russos**.`,
        `Sejas iniciante ou intermédio, esta ferramenta gratuita mostra exatamente como cada substantivo muda no **nominativo, genitivo, dativo, acusativo, instrumental e preposicional** — no **singular e plural**.`,
        `Clica em qualquer palavra para ver a sua **tabela de declinação** completa (com pronúncia e tradução). Cada página de declinação inclui **exercícios interativos gratuitos**. Estas ${total.toLocaleString('pt-PT')} palavras cobrem **80%** das conversas quotidianas em russo — a forma mais rápida de dominar **gramática e casos** sem memorizar centenas de regras.`,
        `Perfeito para **estudantes, viajantes e autodidatas** que preferem exemplos concretos à teoria.`,
        `Explora a lista ou pesquisa uma palavra russa acima.`,
      ],
    },
    heroH2: {
      title: (t) => `Por que estas ${t.toLocaleString('pt-PT')} palavras vão transformar o teu russo`,
      body: (t) =>
        `Estas ${t.toLocaleString('pt-PT')} palavras foram selecionadas para cobrir a vasta maioria do russo quotidiano. Aprendendo as suas declinações entenderás como funcionam os casos russos na prática — sem regras abstratas. Cada palavra leva a uma tabela completa com os 6 casos no singular e plural.`,
    },
    filterAll: 'Todos',
    filterByLetter: 'Filtrar por letra',
    level1: 'Nível 1 — Mais comuns',
    level2: 'Nível 2',
    level3: 'Nível 3+',
    tableHeaders: { russian: 'Russo', translation: 'Tradução', gender: 'Género', level: 'Nível', viewDeclension: 'Ver declinação' },
    levelBadgeTitle: (level) => `Nível ${level}`,
    emptyState: 'Nenhuma palavra encontrada. Tenta alterar os filtros.',
    pagination: {
      showing: (from, to, total) =>
        `A mostrar ${from}-${to} de ${total.toLocaleString('pt-PT')} palavras`,
      previous: '← Anterior',
      next: 'Seguinte →',
    },
    gender: { masculine: 'masculino', feminine: 'feminino', neuter: 'neutro' },
    metadata: {
      title: (total) =>
        `${total} palavras russas mais úteis com tabelas de declinação (6 casos) | RussianDeclensions`,
      description: (total) =>
        `Explora ${total} palavras russas com tabelas de declinação para os 6 casos. Exemplos interativos gratuitos. Domina a gramática russa rapidamente.`,
    },
    relatedLinks: {
      title: 'Saber mais sobre os casos russos',
      learnLabel: 'Lições de gramática',
      caseArticlesTitle: 'Guias dos casos russos',
      blogLabel: 'Blog e dicas',
      popularWordsTitle: 'Palavras populares',
    },
  },
  nl_nl: {
    breadcrumb: { home: 'App', learn: 'Gratis grammatica-lessen', words: 'Russische verbuigingen' },
    title: 'Russische woordverbuigingen — Volledige lijst',
    titleWithCount: (total) =>
      `${total} meest nuttige Russische woorden met volledige verbuigingstabellen (6 gevallen)`,
    subtitle: (total) =>
      `Blader door de ${total.toLocaleString('nl-NL')} meest nuttige Russische woorden met verbuigingstabellen voor alle 6 gevallen. Gratis interactieve voorbeelden. Beheers Russische grammatica snel.`,
    intro: {
      paragraphs: (total) => [
        `Ontdek de ${total.toLocaleString('nl-NL')} meest nuttige **Russische woorden** met hun volledige **verbuigingstabellen** voor alle **6 Russische gevallen**.`,
        `Of je nu beginner of gevorderde bent, deze gratis tool laat precies zien hoe elk zelfstandig naamwoord verandert in **nominatief, genitief, datief, accusatief, instrumentaal en prepositioneel** — in **enkelvoud en meervoud**.`,
        `Klik op een willekeurig woord om de volledige **verbuigingstabel** te bekijken (met uitspraak en vertaling). Elke verbuigingspagina bevat **gratis interactieve oefeningen**. Deze ${total.toLocaleString('nl-NL')} woorden dekken **80%** van de dagelijkse Russische gesprekken — de snelste manier om **grammatica en gevallen** te beheersen zonder honderden regels te memoriseren.`,
        `Perfect voor **studenten, reizigers en zelfstandige leerders** die echte voorbeelden prefereren boven droge theorie.`,
        `Blader nu door de lijst of zoek naar een Russisch woord hierboven.`,
      ],
    },
    heroH2: {
      title: (t) => `Waarom deze ${t.toLocaleString('nl-NL')} woorden je Russisch transformeren`,
      body: (t) =>
        `Deze ${t.toLocaleString('nl-NL')} woorden zijn zorgvuldig geselecteerd om het overgrote deel van het dagelijks Russisch te dekken. Door hun verbuigingen te leren begrijp je hoe Russische gevallen in de praktijk werken — zonder abstracte regels. Elk woord leidt naar een volledige tabel met alle 6 gevallen in enkelvoud en meervoud.`,
    },
    filterAll: 'Alle',
    filterByLetter: 'Filter op letter',
    level1: 'Niveau 1 — Meest voorkomend',
    level2: 'Niveau 2',
    level3: 'Niveau 3+',
    tableHeaders: { russian: 'Russisch', translation: 'Vertaling', gender: 'Geslacht', level: 'Niveau', viewDeclension: 'Bekijk verbuiging' },
    levelBadgeTitle: (level) => `Niveau ${level}`,
    emptyState: 'Geen woorden gevonden. Probeer de filters te wijzigen.',
    pagination: {
      showing: (from, to, total) =>
        `Toont ${from}-${to} van ${total.toLocaleString('nl-NL')} woorden`,
      previous: '← Vorige',
      next: 'Volgende →',
    },
    gender: { masculine: 'mannelijk', feminine: 'vrouwelijk', neuter: 'onzijdig' },
    metadata: {
      title: (total) =>
        `${total} meest nuttige Russische woorden met verbuigingstabellen (6 gevallen) | RussianDeclensions`,
      description: (total) =>
        `Blader door ${total} meest nuttige Russische woorden met verbuigingstabellen voor alle 6 gevallen. Gratis interactieve voorbeelden. Beheers Russische grammatica snel.`,
    },
    relatedLinks: {
      title: 'Meer over Russische gevallen',
      learnLabel: 'Grammatica-lessen',
      caseArticlesTitle: 'Russische geval-gidsen',
      blogLabel: 'Blog en tips',
      popularWordsTitle: 'Populaire woorden',
    },
  },
  ru_ru: {
    breadcrumb: { home: 'App', learn: 'Бесплатные уроки грамматики', words: 'Русские склонения' },
    title: 'Склонения русских слов — Полный список',
    titleWithCount: (total) =>
      `${total.toLocaleString('ru-RU')} самых полезных русских слов с полными таблицами склонений (6 падежей)`,
    subtitle: (total) =>
      `Просмотрите ${total.toLocaleString('ru-RU')} русских слов с таблицами склонений для 6 падежей. Бесплатные интерактивные примеры. Освойте русскую грамматику быстро.`,
    intro: {
      paragraphs: (total) => [
        `Откройте для себя ${total.toLocaleString('ru-RU')} самых полезных **русских слов** с полными **таблицами склонений** для **6 падежей**.`,
        `Будьте вы новичком или продолжающим — этот бесплатный инструмент показывает, как каждое существительное меняется в **именительном, родительном, дательном, винительном, творительном и предложном** падежах — в **единственном и множественном числе**.`,
        `Нажмите на любое слово, чтобы открыть полную **таблицу склонений** (с произношением и переводом). Каждая страница склонения включает **бесплатные интерактивные упражнения**. Эти ${total.toLocaleString('ru-RU')} слов покрывают **80%** повседневного общения на русском — самый быстрый способ освоить **грамматику и падежи** без заучивания сотен правил.`,
        `Идеально для **студентов, путешественников и самоучек**, которые хотят реальные примеры вместо сухой теории.`,
        `Просматривайте список или ищите русское слово выше.`,
      ],
    },
    heroH2: {
      title: (t) => `Почему эти ${t.toLocaleString('ru-RU')} слов преобразят ваш русский`,
      body: (t) =>
        `Эти ${t.toLocaleString('ru-RU')} слов тщательно отобраны для покрытия большинства повседневного русского. Изучая их склонения, вы поймёте, как работают русские падежи на практике — без абстрактных правил. Каждое слово ведёт к полной таблице со всеми 6 падежами в единственном и множественном числе.`,
    },
    filterAll: 'Все',
    filterByLetter: 'Фильтр по букве',
    level1: 'Уровень 1 — Самые частые',
    level2: 'Уровень 2',
    level3: 'Уровень 3+',
    tableHeaders: { russian: 'Русский', translation: 'Перевод', gender: 'Род', level: 'Уровень', viewDeclension: 'Склонение' },
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
        `${total} самых полезных русских слов с таблицами склонений (6 падежей) | RussianDeclensions`,
      description: (total) =>
        `Просмотрите ${total} русских слов с таблицами склонений для 6 падежей. Бесплатные интерактивные примеры. Освойте русскую грамматику быстро.`,
    },
    relatedLinks: {
      title: 'Подробнее о падежах русского языка',
      learnLabel: 'Уроки грамматики',
      caseArticlesTitle: 'Руководства по падежам',
      blogLabel: 'Блог и советы',
      popularWordsTitle: 'Популярные слова',
    },
  },
};

export function getWordsIndexPageTranslations(
  language: LandingLanguage
): WordsIndexPageTranslations {
  return translations[language] ?? translations.en_en;
}
