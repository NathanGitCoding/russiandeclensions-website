import type { LearnArticle } from '../learnArticles';

/** Deutsche Übersetzung des Artikels `russian-question-words` (EN-Quelle: `learnArticles.ts`). */
export const russianQuestionWordsDe: LearnArticle = {
  slug: 'russian-question-words',
  introByline: {
    text: '**Geschrieben von Nathan** — Muttersprachler Französisch, der Russisch lernt; ich teile, was für Grammatik, Fälle und tägliche Praxis wirklich funktioniert.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, Gründer von Russian Cases with Anna',
    imageWidth: 256,
    imageHeight: 256,
  },
  title: 'Russische Fragewörter: Wer, Was, Wo, Wann & Wie (kompletter Leitfaden)',
  metaTitle: 'Leitfaden zu russischen Fragewörtern | Russian Cases with Anna',
  metaDescription:
    'Lernen Sie russische Fragewörter: кто, что, где, куда, какой, сколько — und welchen Fall jedes auslöst, mit 25 fertigen Fragen.',
  keywords: [
    'russische Fragewörter',
    'russische Interrogativpronomen',
    'кто что где куда',
    'Liste russischer Fragewörter',
    'Fragen stellen auf Russisch',
    'какой который чей russisch',
    'сколько Genitiv russisch',
    'где vs куда vs откуда',
  ],
  h1: 'Russische Fragewörter: Wer, Was, Wo, Wann & Wie (kompletter Leitfaden)',
  heroImage: {
    src: '/articles/russian-question-words-header.webp',
    alt: 'Notizbuch mit handgeschriebenen russischen Fragewörtern кто что где куда когда как почему',
    width: 1280,
    height: 720,
  },
  intro:
    'Wenn Sie auf Russisch fragen können, steuern Sie fast jedes Gespräch. Der Haken: Viele russische Fragewörter sind **an Fälle gebunden**. **Кого?** ist nicht nur „wer?“ — es ist „wen/wessen?“ im Genitiv/Akkusativ. **Сколько?** zieht das folgende Nomen in den **Genitiv**. **Где?** und **куда?** wirken im Deutschen ähnlich („wo?“), verlangen aber unterschiedliche Grammatik.\n\nDieser Leitfaden liefert das komplette Anfänger-Set, zeigt die Deklination von **кто/что**, trennt **где / куда / откуда**, deckt **какой / который / чей** ab, erklärt **сколько + Genitiv** und endet mit **25 fertigen Fragen**.',
  whatYouLearn: [
    'Eine vollständige Liste der nützlichsten russischen Fragewörter',
    'Wie кто und что über die Fälle deklinieren',
    'Где vs куда vs откуда (Ort vs Richtung vs Herkunft)',
    'Какой, который und чей — und wie sie kongruieren',
    'Сколько und warum es den Genitiv verlangt',
    '25 fertige Fragen für echte Gespräche',
  ],
  leadMagnetCta: {
    title: 'Fragen werden leichter, wenn Fallendungen automatisch sitzen',
    description:
      'Russian Cases with Anna trainiert die Endungen hinter кого, чему, о ком und сколько + Genitiv. Kostenlos für iOS und Android.',
    ctaText: 'App herunterladen — Kostenlos',
    ctaHref: '/',
  },
  tableAccentVariant: 'genitive',
  sections: [
    {
      h2: 'Vollständige Liste russischer Fragewörter',
      content:
        'Beginnen Sie mit diesem Überblick. Speichern Sie ihn, und vertiefen Sie danach in den Abschnitten unten die Grammatik, die jedes Wort auslöst.',
      table: {
        headers: ['Russisch', 'Transliteration', 'Deutsch', 'Grammatikhinweis'],
        rows: [
          ['кто', 'kto', 'wer', 'Dekliniert (кого, кому…)'],
          ['что', 'chto', 'was', 'Dekliniert (чего, чему…)'],
          ['где', 'gde', 'wo (Ort)', 'Antwort oft im Präpositional'],
          ['куда', 'kuda', 'wohin (Richtung)', 'Antwort oft im Akkusativ'],
          ['откуда', 'otkuda', 'woher', 'Antwort oft aus + Genitiv'],
          ['когда', 'kogda', 'wann', 'Zeitausdrücke / Fälle variieren'],
          ['почему', 'pochemu', 'warum (Grund)', 'Oft потому что…'],
          ['зачем', 'zachem', 'wozu (Zweck)', 'Ziel / wofür'],
          ['как', 'kak', 'wie', 'Art und Weise; auch „wie ist…?“'],
          ['какой / какая / какое / какие', 'kakoy…', 'welch- / was für ein', 'Kongruiert wie ein Adjektiv'],
          ['который', 'kotoryy', 'welch- (aus einer Menge) / der', 'Relativ / welcher'],
          ['чей / чья / чьё / чьи', 'chey…', 'wessen', 'Kongruiert mit dem Nomen'],
          ['сколько', "skol'ko", 'wie viele / wie viel', 'Nomen im Genitiv'],
          ['сколько стоит…?', "skol'ko stoit", 'wie viel kostet…?', 'Feste Einkaufsfrage'],
        ],
        caption: 'Zentrale russische Fragewörter auf einen Blick',
        boldColumnIndices: [0, 3],
      },
    },
    {
      h2: 'Кто und Что — und wie sie deklinieren',
      content:
        '**Кто?** (wer?) und **Что?** (was?) sind die Grundlage. Im Nominativ wirken sie einfach. In anderen Fällen werden sie zu den Formen, die Lernende zuerst vergessen: **кого, чему, о ком…**',
      table: {
        headers: ['Fall', 'кто', 'что', 'Deutscher Hinweis'],
        rows: [
          ['Nominativ', 'кто', 'что', 'wer? / was? (Subjekt)'],
          ['Genitiv', 'кого', 'чего', 'wessen? / von was? / нет кого?'],
          ['Dativ', 'кому', 'чему', 'wem? / wozu?'],
          ['Akkusativ', 'кого', 'что', 'wen? / was? (Objekt)'],
          ['Instrumental', 'кем', 'чем', 'mit wem? / womit?'],
          ['Präpositional', 'о ком', 'о чём', 'über wen? / worüber?'],
        ],
        caption: 'Deklination von кто und что',
        boldColumnIndices: [0, 1, 2],
      },
      subsections: [
        {
          h3: 'Schnelle Beispiele',
          content:
            '**Кто это?** — Wer ist das?\n**Кого ты видишь?** — Wen siehst du?\n**Кому дать книгу?** — Wem soll ich das Buch geben?\n**О чём вы говорите?** — Worüber sprechen Sie?\n**Чем ты пишешь?** — Womit schreibst du?',
        },
      ],
      bullets: [
        '**Кого** ist sowohl Genitiv als auch Akkusativ von кто — der Kontext zeigt, welcher Fall vorliegt.',
        'Zu Pronomen-Parallelen (мне, его, неё…) siehe [Deklination der russischen Pronomen](/learn/articles/russian-pronouns-declension).',
      ],
    },
    {
      h2: 'Где vs Куда vs Откуда',
      content:
        'Im Deutschen gibt es oft „wo?“ und „wohin?“ — im Russischen sind Ort, Ziel und Herkunft klar getrennt. Sie zu vermischen ist einer der häufigsten Anfängerfehler.',
      table: {
        headers: ['Frage', 'Bedeutung', 'Typisches Antwortmuster', 'Beispiel'],
        rows: [
          ['Где?', 'Wo (an/in)?', 'в/на + Präpositional', 'Где книга? — На столе.'],
          ['Куда?', 'Wohin?', 'в/на + Akkusativ', 'Куда ты идёшь? — В школу.'],
          ['Откуда?', 'Woher?', 'из/с/от + Genitiv', 'Откуда ты? — Из Франции.'],
        ],
        caption: 'Ort vs Richtung vs Herkunft',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        '**Где?** → statischer Ort (oft [Präpositionalfall](/learn/articles/russian-prepositional-case)).',
        '**Куда?** → Bewegung hin (oft [Akkusativ](/learn/articles/russian-accusative-case) nach в/на).',
        '**Откуда?** → Herkunft (oft [Genitiv](/learn/articles/russian-genitive-case) nach из/с/от).',
        'Dasselbe Nomen, drei Formen: **в школе** / **в школу** / **из школы**.',
      ],
    },
    {
      h2: 'Какой, Который und Чей',
      content:
        'Diese drei wirken in deutschen Übersetzungen ähnlich („welch- / was für / wessen“), sind aber nicht austauschbar.',
      subsections: [
        {
          h3: 'Какой — was für ein / welch-',
          content:
            '**Какой?** kongruiert wie ein Adjektiv: какая, какое, какие + Fallendungen.\n**Какой это фильм?** — Was für ein Film ist das?\n**В каком доме ты живёшь?** — In welchem Haus wohnst du?',
        },
        {
          h3: 'Который — welcher / der (Relativ)',
          content:
            '**Который** wählt aus einer bekannten Menge oder leitet einen Relativsatz ein.\n**Который час?** — Wie spät ist es?\n**Книга, которую я читаю…** — Das Buch, das ich lese…',
        },
        {
          h3: 'Чей — wessen',
          content:
            '**Чей / чья / чьё / чьи** kongruieren mit dem **besessenen Ding**, nicht mit dem Besitzer.\n**Чья это сумка?** — Wessen Tasche ist das?\n**Чьи это ключи?** — Wessen Schlüssel sind das?',
        },
      ],
      bullets: [
        'Für Adjektiv-Kongruenztabellen siehe [Adjektivdeklination](/learn/articles/russian-adjective-declension).',
        '**Какой** ist das Alltags-Arbeitspferd für „welch-/was für ein + Nomen“.',
      ],
    },
    {
      h2: 'Сколько und der Genitiv',
      content:
        '**Сколько?** bedeutet „wie viele?“ oder „wie viel?“. Das folgende Nomen steht normalerweise im **Genitiv**.',
      table: {
        headers: ['Russisch', 'Deutsch', 'Hinweis'],
        rows: [
          ['Сколько у тебя братьев?', 'Wie viele Brüder hast du?', 'братьев = Genitiv Plural'],
          ['Сколько это стоит?', 'Wie viel kostet das?', 'Feste Handelsfrage'],
          ['Сколько времени?', 'Wie viel Zeit?', 'времени = Genitiv'],
          ['Сколько лет тебе?', 'Wie alt bist du?', 'Altersmuster mit Dativ тебе'],
        ],
        caption: 'Сколько-Fragen mit Genitiv',
        boldColumnIndices: [0],
      },
      bullets: [
        'Auch Zahlen interagieren mit dem Genitiv — Details im [Zahlen-Leitfaden](/learn/articles/russian-numbers-guide) und im [Genitiv-Leitfaden](/learn/articles/russian-genitive-case).',
        'Nach **сколько** das Nomen nicht im Nominativ lassen: *сколько братья* ✗ → **сколько братьев** ✓.',
      ],
    },
    {
      h2: '25 fertige Fragen',
      content:
        'Lernen Sie diese als Rahmen auswendig. Tauschen Sie eigene Nomen ein, sobald das Muster sitzt.',
      table: {
        headers: ['#', 'Russisch', 'Deutsch'],
        rows: [
          ['1', 'Кто это?', 'Wer ist das?'],
          ['2', 'Что это?', 'Was ist das?'],
          ['3', 'Как тебя зовут?', 'Wie heißt du?'],
          ['4', 'Откуда ты?', 'Woher kommst du?'],
          ['5', 'Где ты живёшь?', 'Wo wohnst du?'],
          ['6', 'Куда ты идёшь?', 'Wohin gehst du?'],
          ['7', 'Когда мы встретимся?', 'Wann treffen wir uns?'],
          ['8', 'Почему ты устал?', 'Warum bist du müde?'],
          ['9', 'Зачем тебе это?', 'Wozu brauchst du das?'],
          ['10', 'Как дела?', 'Wie geht’s?'],
          ['11', 'Какой сегодня день?', 'Welcher Tag ist heute?'],
          ['12', 'Который час?', 'Wie spät ist es?'],
          ['13', 'Чья это книга?', 'Wessen Buch ist das?'],
          ['14', 'Сколько это стоит?', 'Wie viel kostet das?'],
          ['15', 'Сколько тебе лет?', 'Wie alt bist du?'],
          ['16', 'Кого ты ждёшь?', 'Wen wartest du?'],
          ['17', 'Кому позвонить?', 'Wen soll ich anrufen?'],
          ['18', 'О чём фильм?', 'Worum geht es in dem Film?'],
          ['19', 'Чем ты занимаешься?', 'Was machst du? / Womit beschäftigst du dich?'],
          ['20', 'В каком городе ты был?', 'In welcher Stadt warst du?'],
          ['21', 'Как пройти к метро?', 'Wie komme ich zur Metro?'],
          ['22', 'Где можно купить билет?', 'Wo kann man eine Fahrkarte kaufen?'],
          ['23', 'Когда открывается музей?', 'Wann öffnet das Museum?'],
          ['24', 'Почему здесь так шумно?', 'Warum ist es hier so laut?'],
          ['25', 'Сколько остановок до центра?', 'Wie viele Haltestellen bis zur Innenstadt?'],
        ],
        caption: '25 häufige russische Fragen',
        boldColumnIndices: [0, 1],
      },
    },
    {
      h2: 'Häufige Fehler mit russischen Fragewörtern',
      bullets: [
        '**Где für Richtung verwenden:** *Где ты идёшь?* ✗ → **Куда ты идёшь?** ✓.',
        '**Genitiv nach сколько vergessen:** *Сколько братья?* ✗ → **Сколько братьев?** ✓.',
        '**Кто/что im Nominativ stecken lassen** nach Präpositionen: nötig sind **о ком / о чём**, **с кем / с чем**.',
        '**Почему und зачем verwechseln** — Grund vs Zweck.',
        '**Который verwenden, wenn какой** die natürliche Alltagsfrage für „was für ein…“ ist.',
      ],
    },
  ],
  faq: [
    {
      question: 'Welche russischen Fragewörter sind für Anfänger am wichtigsten?',
      answer:
        'Beginnen Sie mit кто, что, где, куда, откуда, когда, почему, как, какой, чей und сколько. Damit decken Sie Vorstellungen, Richtungen, Zeit, Gründe und Einkaufen ab.',
    },
    {
      question: 'Was ist der Unterschied zwischen где und куда?',
      answer:
        'Где fragt nach dem Ort (Wo bist du?). Куда fragt nach dem Ziel (Wohin gehst du?). Antworten nutzen meist unterschiedliche Fälle: Präpositional für где, Richtungssatz-Akkusativ für куда nach в/на.',
    },
    {
      question: 'Ändern sich кто und что mit den Fällen?',
      answer:
        'Ja. Sie deklinieren vollständig: кого/чего, кому/чему, кем/чем, о ком/о чём usw. Diese Formen zu lernen ist essenziell für natürliche Fragen.',
    },
    {
      question: 'Warum steht nach сколько der Genitiv?',
      answer:
        'Weil Mengenausdrücke im Russischen typischerweise den Genitiv des gezählten Nomens verlangen: сколько братьев, сколько времени. Das gehört zur gleichen Regelgruppe wie Zahlen und нет + Genitiv.',
    },
    {
      question: 'Wann verwendet man какой vs который?',
      answer:
        'Какой ist die übliche Frage für „welch-/was für ein“ mit einem Nomen. Который bedeutet oft „welcher“ aus einer Menge oder leitet einen Relativsatz ein (das Buch, das…).',
    },
  ],
  conclusionIntro: 'Fragewörter sind Vokabeln plus Fall-Logik in einem Paket.',
  conclusionBullets: [
    'Lernen Sie die **Kernliste**, dann die **Fallformen** von кто/что',
    'Vermischen Sie nie **где / куда / откуда**',
    'Deklinieren Sie **какой / чей** wie Adjektive',
    'Setzen Sie Nomen nach **сколько** in den **Genitiv**',
    'Üben Sie die **25 Rahmen**, bis sie automatisch kommen',
  ],
  conclusionOutro:
    'Als Nächstes verbinden Sie diese Fragen mit vollständigen Fall-Drills in unserem kostenlosen [Übungstool](/practice), und halten Sie die Leitfäden zu [Pronomen](/learn/articles/russian-pronouns-declension) und [Genitiv](/learn/articles/russian-genitive-case) offen, während die Formen sich setzen.',
  internalLinks: [
    {
      href: '/learn/articles/russian-pronouns-declension',
      label: 'Deklination der russischen Pronomen',
    },
    {
      href: '/learn/articles/russian-genitive-case',
      label: 'Leitfaden zum russischen Genitiv',
    },
    {
      href: '/learn/articles/russian-accusative-case',
      label: 'Leitfaden zum russischen Akkusativ',
    },
    {
      href: '/learn/articles/russian-prepositional-case',
      label: 'Leitfaden zum russischen Präpositional',
    },
    {
      href: '/learn/articles/russian-greetings-guide',
      label: 'Leitfaden zu russischen Begrüßungen',
    },
    {
      href: '/practice',
      label: 'Kostenloses russisches Deklinations-Quiz',
    },
  ],
  ctaText: 'Russische Fälle üben — Kostenlos →',
  ctaHref: '/practice',
  conclusion: '',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Russische Fragewörter: Wer, Was, Wo, Wann & Wie (kompletter Leitfaden)',
    description:
      'Lernen Sie russische Fragewörter: кто, что, где, куда, какой, сколько — und welchen Fall jedes auslöst, mit 25 fertigen Fragen.',
    datePublished: '2026-09-13',
    dateModified: '2026-09-13',
    author: {
      '@type': 'Person',
      name: 'Nathan',
      url: 'https://russiandeclensions.com/',
      image: 'https://russiandeclensions.com/landing-cases/founder-photo.webp',
      description:
        'Französischer Muttersprachler, der Russisch lernt; schreibt über Grammatik, Fälle und praktische Selbstlerngewohnheiten.',
      worksFor: {
        '@type': 'Organization',
        name: 'Russian Cases with Anna®',
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Russian Cases with Anna®',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://russiandeclensions.com/learn/articles/russian-question-words',
    },
    keywords:
      'russische Fragewörter, russische Interrogativpronomen, кто что где куда, сколько Genitiv russisch, где vs куда vs откуда',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russian-question-words-header.webp',
      width: 1280,
      height: 720,
    },
  },
};
