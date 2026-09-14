import type { LearnArticle } from '../learnArticles';

/** Deutsche Übersetzung des Artikels `russian-adjective-declension` (englische Quelle: `learnArticles.ts`). */
export const russianAdjectiveDeclensionDe: LearnArticle = {
  slug: 'russian-adjective-declension',
  introByline: {
    text: '**Geschrieben von Nathan** — Muttersprachler Französisch, der Russisch lernt; ich teile, was für Grammatik, Fälle und tägliche Praxis wirklich funktioniert.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, Gründer von Russian Cases with Anna',
    imageWidth: 256,
    imageHeight: 256,
  },
  title: 'Russische Adjektivdeklination: Endungstabelle für alle 6 Fälle',
  metaTitle: 'Russische Adjektivendungen Tabelle | Russian Cases with Anna',
  metaDescription:
    'Vollständige Tabelle der russischen Adjektivendungen: harte & weiche Stämme, alle 6 Fälle, belebter Akkusativ, Kurzformen und Possessiva — mit echten Beispielen.',
  keywords: [
    'russische Adjektivendungen',
    'russische Adjektivdeklination',
    'Adjektivkongruenz Russisch',
    'harte und weiche Adjektivstämme Russisch',
    'Adjektiv Falltabelle Russisch',
    'Kurzformen Adjektive Russisch',
    'Possessivadjektive Russisch',
    'Adjektive Russisch deklinieren',
  ],
  h1: 'Russische Adjektivdeklination: Endungstabelle für alle 6 Fälle',
  heroImage: {
    src: '/articles/russian-adjective-declension-header.webp',
    alt: 'Notizbuch mit russischen Adjektivkongruenz-Beispielen новый новая новое für Fallendungen',
    width: 1280,
    height: 720,
  },
  intro:
    'Substantive stehen im Mittelpunkt, wenn Lernende über russische Fälle sprechen — aber **auch Adjektive werden dekliniert**, und sie müssen dem Substantiv jedes Mal in **Genus, Numerus und Kasus** entsprechen. Fehlt die Endung, klingt der Satz falsch, selbst wenn das Substantiv perfekt sitzt.\n\nDie gute Nachricht: Adjektivendungen sind **regelmäßiger als Substantivendungen**. Kennen Sie das harte Muster (`новый`) und das weiche (`синий`), können Sie Tausende Adjektive deklinieren. Dieser Leitfaden liefert die vollständigen Tabellen, die Regel belebt/unbelebt im Akkusativ, Kurzformen, Possessiva und die Fehler, die Deutschsprachige am häufigsten machen.',
  whatYouLearn: [
    'Was russische Adjektivkongruenz bedeutet (Genus × Numerus × Kasus)',
    'Vollständige Tabelle der harten Stämme mit `новый`',
    'Vollständige Tabelle der weichen Stämme mit `синий`',
    'Wie belebt vs. unbelebt den Akkusativ verändert',
    'Volle Substantiv- + Adjektivgruppen in allen 6 Fällen',
    'Kurzformen (prädikativ) vs. Langformen',
    'Possessivadjektive: `мой`, `наш`, `свой`',
    '8 typische Fehler — und wie man sie behebt',
  ],
  leadMagnetCta: {
    title: 'Adjektiv- + Substantivkongruenz in allen 6 Fällen üben',
    description:
      'Russian Cases with Anna trainiert die Endungen, die Adjektive und Substantive teilen — mit Spaced Repetition, echten Sätzen und sofortigem Feedback. Kostenlos für iOS und Android.',
    ctaText: 'App herunterladen und heute mit dem Üben starten',
    ctaHref: '/',
  },
  tableAccentVariant: 'nominative',
  sections: [
    {
      h2: 'Was russische Adjektivkongruenz bedeutet',
      content:
        'Im Deutschen ändern sich Adjektive bereits stark; im Russischen müssen sie dem Substantiv auch im **Kasus** folgen. Ist das Substantiv feminin Genitiv Singular, muss das Adjektiv ebenfalls feminin Genitiv Singular sein.\n\nDiese dreifache Kongruenz — **Genus × Numerus × Kasus** — ist die gesamte Aufgabe der Adjektivdeklination.',
      table: {
        headers: ['Nominalphrase', 'Genus / Numerus / Kasus', 'Deutsch'],
        rows: [
          ['новый дом', 'mask. Sg. Nominativ', 'ein neues Haus'],
          ['новой книги', 'fem. Sg. Genitiv', 'eines neuen Buches'],
          ['новым окнам', 'neutr. Pl. Dativ', 'den neuen Fenstern'],
          ['о синих глазах', 'Pl. Präpositional', 'über blaue Augen'],
        ],
        caption: 'Die Adjektivendung spiegelt immer die Grammatik des Substantivs',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Lernen Sie zuerst das **Genus des Substantivs** — ohne es können Sie die richtige Adjektivendung nicht wählen (siehe unseren [Genus-Leitfaden](/learn/articles/russian-noun-gender-guide)).',
        'Adjektive beantworten dieselben Kasusfragen wie Substantive: **какой? какая? какое? какие?** plus die deklinierten Formen dieser Fragen.',
        'Rechtschreibregeln gelten weiterhin: nach **г, к, х, ж, ш, щ, ч, ц** bevorzugt Russisch in vielen Endungen **и** statt **ы** — deshalb schreibt man **хороший**, nicht *хорошый*.',
      ],
    },
    {
      h2: 'Endungstabelle harter Stämme (новый)',
      content:
        'Harte Adjektivstämme sind das Standardmuster. Im Nominativ Maskulinum enden sie meist auf **-ый** (новый, красный) oder betontes **-ой** (молодой, большой). Alle anderen Endungen folgen derselben harten Tabelle.',
      table: {
        headers: ['Fall', 'Maskulinum', 'Neutrum', 'Femininum', 'Plural'],
        rows: [
          ['Nominativ', 'новый', 'новое', 'новая', 'новые'],
          ['Genitiv', 'нового', 'нового', 'новой', 'новых'],
          ['Dativ', 'новому', 'новому', 'новой', 'новым'],
          ['Akkusativ', 'новый / нового', 'новое', 'новую', 'новые / новых'],
          ['Instrumental', 'новым', 'новым', 'новой', 'новыми'],
          ['Präpositional', 'новом', 'новом', 'новой', 'новых'],
        ],
        caption: 'Endungen harter Adjektivstämme — Beispiel: новый (neu)',
        boldColumnIndices: [0],
      },
      bullets: [
        '**Maskulinum und Neutrum teilen** Genitiv-, Dativ-, Instrumental- und Präpositionalendungen — ein Satz, zwei Genera.',
        '**Femininum verschmilzt** Genitiv, Dativ, Instrumental und Präpositional zu **-ой** (manchmal poetisch **-ою** im Instrumental).',
        'Adjektive mit betontem **-ой** (большой, молодой) unterscheiden sich nur im Nominativ Maskulinum — jede andere Zelle folgt der harten Tabelle.',
      ],
      subsections: [
        {
          h3: 'Schnelle Merkhilfen',
          content:
            'Wenn Sie nur drei Fakten über harte Adjektive behalten, behalten Sie diese: oblique Formen Maskulinum/Neutrum teilen **-ого / -ому / -ым / -ом**; oblique Feminina teilen **-ой**; Genitiv und Präpositional Plural nutzen beide **-ых**.',
        },
      ],
    },
    {
      h2: 'Endungstabelle weicher Stämme (синий)',
      content:
        'Weiche Adjektivstämme enden im Nominativ Maskulinum auf **-ий** (синий, летний, последний). Ihre Endungen tauschen harte Vokale gegen weiche: **о→е**, **ы→и**, **у→ю**, **а→я**.',
      table: {
        headers: ['Fall', 'Maskulinum', 'Neutrum', 'Femininum', 'Plural'],
        rows: [
          ['Nominativ', 'синий', 'синее', 'синяя', 'синие'],
          ['Genitiv', 'синего', 'синего', 'синей', 'синих'],
          ['Dativ', 'синему', 'синему', 'синей', 'синим'],
          ['Akkusativ', 'синий / синего', 'синее', 'синюю', 'синие / синих'],
          ['Instrumental', 'синим', 'синим', 'синей', 'синими'],
          ['Präpositional', 'синем', 'синем', 'синей', 'синих'],
        ],
        caption: 'Endungen weicher Adjektivstämme — Beispiel: синий (blau)',
        boldColumnIndices: [0],
      },
      bullets: [
        'Weiche Stämme sind seltener als harte, umfassen aber hochfrequente Wörter: **синий, русский, хороший, последний, летний**.',
        '**Хороший** sieht weich aus (-ий) und dekliniert weich — ein sehr häufiges Anfängeradjektiv.',
        'Endet der Nominativ Maskulinum auf **-ий** (nicht -ый/-ой), starten Sie mit der weichen Tabelle.',
      ],
    },
    {
      h2: 'Akkusativ: belebte vs. unbelebte Adjektive',
      content:
        'Wie Substantive folgen Adjektive der **Belebtheitsregel** im Akkusativ bei Maskulinum Singular und bei allen Pluralen. Femininum und Neutrum Singular behalten je eine Akkusativform.',
      table: {
        headers: ['Situation', 'Adjektivform', 'Beispiel', 'Deutsch'],
        rows: [
          ['Mask. unbelebt', '= Nominativ', 'Я вижу новый дом.', 'Ich sehe ein neues Haus.'],
          ['Mask. belebt', '= Genitiv', 'Я вижу нового друга.', 'Ich sehe einen neuen Freund.'],
          ['Femininum', '-ую / -юю', 'Я вижу новую книгу.', 'Ich sehe ein neues Buch.'],
          ['Neutrum', '= Nominativ', 'Я вижу новое окно.', 'Ich sehe ein neues Fenster.'],
          ['Plural unbelebt', '= Nominativ', 'Я вижу новые дома.', 'Ich sehe neue Häuser.'],
          ['Plural belebt', '= Genitiv', 'Я вижу новых друзей.', 'Ich sehe neue Freunde.'],
        ],
        caption: 'Akkusativ-Adjektivendungen hängen von der Belebtheit ab',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Substantiv und Adjektiv **müssen in der Belebtheit übereinstimmen** — nimmt das Substantiv den genitivförmigen Akkusativ, tut es das Adjektiv auch.',
        'Dieselbe Regel wie in unserem [Akkusativ-Leitfaden](/learn/articles/russian-accusative-case) — Adjektive erben sie einfach.',
        'Anfänger deklinieren oft das Substantiv richtig und lassen das Adjektiv im Nominativ: *Я вижу новый друга* ✗ → **нового друга** ✓.',
      ],
    },
    {
      h2: 'Volle Substantiv- + Adjektivgruppen in allen 6 Fällen',
      content:
        'Tabellen helfen; volle Phrasen lassen das System klicken. Hier sind **новый дом** (hart, mask. unbelebt), **новая книга** (hart, fem.) und **синий карандаш** (weich, mask. unbelebt) gemeinsam dekliniert.',
      table: {
        headers: ['Fall', 'новый дом', 'новая книга', 'синий карандаш'],
        rows: [
          ['Nominativ', 'новый дом', 'новая книга', 'синий карандаш'],
          ['Genitiv', 'нового дома', 'новой книги', 'синего карандаша'],
          ['Dativ', 'новому дому', 'новой книге', 'синему карандашу'],
          ['Akkusativ', 'новый дом', 'новую книгу', 'синий карандаш'],
          ['Instrumental', 'новым домом', 'новой книгой', 'синим карандашом'],
          ['Präpositional', 'о новом доме', 'о новой книге', 'о синем карандаше'],
        ],
        caption: 'Adjektiv- + Substantivgruppen durch alle sechs Fälle',
        boldColumnIndices: [0],
      },
      subsections: [
        {
          h3: 'Kontrast maskulin belebt',
          content:
            'Ersetzen Sie дом durch **друг**, und nur der Akkusativ ändert sich: **нового друга**, nicht новый друг. Der Genitiv sah schon so aus — deshalb „borgt“ der belebte Akkusativ die Genitivform.',
        },
        {
          h3: 'Fall für Fall vertiefen',
          content:
            'Sobald Adjektivendungen vertraut wirken, üben Sie sie in jedem Fallartikel: [Nominativ](/learn/articles/russian-nominative-case), [Genitiv](/learn/articles/russian-genitive-case), [Dativ](/learn/articles/russian-dative-case), [Akkusativ](/learn/articles/russian-accusative-case), [Instrumental](/learn/articles/russian-instrumental-case), [Präpositional](/learn/articles/russian-prepositional-case).',
        },
      ],
    },
    {
      h2: 'Kurzformen der Adjektive (prädikativ)',
      content:
        'Russisch hat ein zweites Adjektivsystem: **Kurzformen**, vor allem als Prädikat (nach weggelassenem „sein“). Sie beantworten „wie ist X?“ statt „welches X?“.',
      table: {
        headers: ['Langform', 'Kurz mask.', 'Kurz fem.', 'Kurz neutr.', 'Kurz Plural'],
        rows: [
          ['новый', 'нов', 'нова', 'ново', 'новы'],
          ['красивый', 'красив', 'красива', 'красиво', 'красивы'],
          ['интересный', 'интересен', 'интересна', 'интересно', 'интересны'],
          ['занятый', 'занят', 'занята', 'занято', 'заняты'],
        ],
        caption: 'Langformen vs. Kurzformen der Adjektive',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Die **Langform** dekliniert nach Kasus und steht neben einem Substantiv: **новая книга** (ein neues Buch).',
        'Die **Kurzform** dekliniert **nicht** nach Kasus und steht meist allein als Prädikat: **Книга нова.** / natürlicher **Книга новая.** in der modernen Sprache.',
        'Viele Kurzformen sind in festen Wendungen üblich: **Он занят** (Er ist beschäftigt), **Мне холодно** (Mir ist kalt — adverbiales Neutrum der Kurzform).',
        'Wenn Sie noch Fälle meistern, priorisieren Sie zuerst **Langformen** — die brauchen Sie für die Kongruenz in Nominalphrasen.',
      ],
    },
    {
      h2: 'Possessivadjektive: мой, наш, свой',
      content:
        'Possessiva verhalten sich wie Adjektive: sie kongruieren in Genus, Numerus und Kasus. `мой` / `твой` / `свой` teilen ein Muster; `наш` / `ваш` ein anderes. `его` / `её` / `их` („sein / ihr / deren“) **werden nicht dekliniert**.',
      table: {
        headers: ['Fall', 'мой (mask.)', 'моя (fem.)', 'моё (neutr.)', 'мои (Pl.)'],
        rows: [
          ['Nominativ', 'мой', 'моя', 'моё', 'мои'],
          ['Genitiv', 'моего', 'моей', 'моего', 'моих'],
          ['Dativ', 'моему', 'моей', 'моему', 'моим'],
          ['Akkusativ', 'мой / моего', 'мою', 'моё', 'мои / моих'],
          ['Instrumental', 'моим', 'моей', 'моим', 'моими'],
          ['Präpositional', 'моём', 'моей', 'моём', 'моих'],
        ],
        caption: 'Deklination von мой — das Modell für твой und свой',
        boldColumnIndices: [0],
      },
      bullets: [
        '**Свой** verweist auf das Subjekt („sein eigenes“): **Он читает свою книгу** (Er liest sein eigenes Buch) vs **его книгу** (jemand anderes).',
        '**Наш / ваш** folgen weich wirkenden Endungen: нашего, нашей, наши…',
        '**Его / её / их** ändern sich nie: **о его новой машине** — nur Adjektiv und Substantiv deklinieren.',
      ],
    },
    {
      h2: '8 typische Fehler bei russischen Adjektiven',
      content:
        'Das sind die Fehler, die Deutschsprachige am häufigsten machen — jeder lässt sich mit einer einzigen Regel beheben.',
      bullets: [
        '**Adjektiv im Nominativ lassen**, während das Substantiv dekliniert wird: *в новый доме* ✗ → **в новом доме** ✓.',
        '**Belebtheit im Akkusativ vergessen**: *Я знаю хороший врача* ✗ → **хорошего врача** ✓.',
        '**Harte und weiche Tabellen vermischen**: синий nimmt **синего**, nicht *синого*.',
        '**-ый nach ш/ж/ч/щ/ц**: schreiben Sie **хороший**, **свежий** (Rechtschreibregel).',
        '**Его / её / их deklinieren**: sie bleiben fest — deklinieren Sie nur die folgenden Wörter.',
        '**Свой und его verwechseln**: свой = gehört dem Subjekt; его = gehört jemand anderem, bereits Genanntem.',
        '**Kurzformen als kasusmarkiert behandeln**: Kurzformen nehmen keine Kasusendungen.',
        '**Neutrum-Kongruenz ignorieren**: окно ist Neutrum → **новое окно**, nicht *новый окно*.',
      ],
    },
    {
      h2: 'So üben Sie die Adjektivdeklination',
      content:
        'Tabellen einmal lesen reicht nicht. Nutzen Sie eine Schleife, die Kongruenz unter Zeitdruck erzwingt:',
      bullets: [
        'Wählen Sie ein gut bekanntes Substantiv und deklinieren Sie **Adjektiv + Substantiv** laut durch alle 6 Fälle.',
        'Wechseln Sie das Genus (дом → книга → окно) und wiederholen Sie mit demselben Adjektiv.',
        'Fügen Sie den Belebtheitskontrast hinzu: новый стол vs новый друг im Akkusativ.',
        'Üben Sie in echten Sätzen mit unserem [kostenlosen Übungs-Tool](/practice) und dem [Fallendungen-Spickzettel](/learn/articles/russian-case-endings-cheatsheet).',
      ],
    },
  ],
  faq: [
    {
      question: 'Ändern sich russische Adjektive mit jedem Fall?',
      answer:
        'Ja. Langformen kongruieren mit dem Substantiv in Genus, Numerus und Kasus, daher ändert sich die Endung meist, sobald sich der Kasus des Substantivs ändert. Kurzformen sind die Ausnahme: sie sind prädikativ und deklinieren nicht nach Kasus.',
    },
    {
      question: 'Was ist der Unterschied zwischen harten und weichen Adjektivstämmen?',
      answer:
        'Harte Stämme enden typischerweise auf -ый oder -ой im Nominativ Maskulinum (новый, большой) und nutzen Endungen mit о/ы/у. Weiche Stämme enden auf -ий (синий, летний) und nutzen е/и/ю. Das logische Muster ist dasselbe; nur der Vokalsatz wechselt.',
    },
    {
      question: 'Warum wirkt новый друга falsch, aber нового друга richtig?',
      answer:
        'Weil друг maskulin belebt ist. Im Akkusativ nehmen belebte Maskulina (und belebte Plurale) die genitivförmige Endung — und das Adjektiv muss mitgehen: нового друга, nicht новый друга.',
    },
    {
      question: 'Sollten Anfänger Kurzformen früh lernen?',
      answer:
        'Lernen Sie ein paar hochfrequente Kurzformen (занят, рад, должен, нужно/можно als verwandte Prädikative), priorisieren Sie aber zuerst die Langform-Deklination. Langformen brauchen Sie für Nominalphrasen in allen sechs Fällen.',
    },
    {
      question: 'Wie unterscheiden sich мой und его?',
      answer:
        'Мой, твой, свой, наш und ваш deklinieren wie Adjektive. Его, её und их ändern nie die Form; nur das Substantiv und weitere Adjektive darumherum deklinieren.',
    },
  ],
  conclusionIntro:
    'Adjektivdeklination wirkt auf dem Papier groß, verdichtet sich aber zu einem kleinen Satz von Gewohnheiten:',
  conclusionBullets: [
    'Immer **Genus × Numerus × Kasus** abgleichen — das Adjektiv bleibt nie standardmäßig im Nominativ',
    'Zuerst die **harte Tabelle** meistern, dann auf die **weiche Tabelle** abbilden',
    'Die **Belebtheitsregel** im Akkusativ für Maskulinum und Plural anwenden',
    '**Langformen** in Nominalphrasen nutzen; **Kurzformen** für Prädikate behalten',
    '**Мой/твой/свой/наш/ваш** deklinieren; **его/её/их** unverändert lassen',
  ],
  conclusionOutro:
    'Wenn Adjektiv- + Substantivpaare automatischer werden, sind Sie bereit, in jedem Fall Tempo aufzunehmen. Üben Sie mit unserem kostenlosen Tool — und halten Sie den [Spickzettel der russischen Fallendungen](/learn/articles/russian-case-endings-cheatsheet) offen, solange die Tabellen noch einrasten.',
  internalLinks: [
    {
      href: '/learn/articles/russian-case-endings-cheatsheet',
      label: 'Russische Fallendungen: Die ultimative Spickzettel-Übersicht',
    },
    {
      href: '/learn/articles/russian-noun-gender-guide',
      label: 'Genus russischer Substantive: Maskulin, Feminin, Neutrum',
    },
    {
      href: '/learn/articles/russian-nominative-case',
      label: 'Russischer Nominativ: Regeln, Endungen und Beispiele',
    },
    {
      href: '/learn/articles/russian-accusative-case',
      label: 'Russischer Akkusativ: belebt vs. unbelebt',
    },
    {
      href: '/practice',
      label: 'Kostenloses russisches Deklinations-Quiz — alle 6 Fälle',
    },
  ],
  ctaText: 'Russische Fälle üben — Kostenlos →',
  ctaHref: '/practice',
  conclusion: '',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Russische Adjektivdeklination: Endungstabelle für alle 6 Fälle',
    description:
      'Vollständige Tabelle der russischen Adjektivendungen: harte & weiche Stämme, alle 6 Fälle, belebter Akkusativ, Kurzformen und Possessiva — mit echten Beispielen.',
    datePublished: '2026-09-13',
    dateModified: '2026-09-13',
    author: {
      '@type': 'Person',
      name: 'Nathan',
      url: 'https://russiandeclensions.com/',
      image: 'https://russiandeclensions.com/landing-cases/founder-photo.webp',
      description:
        'Muttersprachler Französisch, der Russisch lernt; schreibt über Grammatik, Fälle und praktische Selbstlerngewohnheiten.',
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
      '@id': 'https://russiandeclensions.com/learn/articles/russian-adjective-declension',
    },
    keywords:
      'russische Adjektivendungen, russische Adjektivdeklination, Adjektivkongruenz Russisch, harte und weiche Adjektivstämme Russisch, Adjektiv Falltabelle Russisch, Kurzformen Adjektive Russisch',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russian-adjective-declension-header.webp',
      width: 1280,
      height: 720,
    },
  },
};
