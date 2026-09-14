import type { LearnArticle } from '../learnArticles';

/** Deutsche Übersetzung des Artikels `russian-pronouns-declension` (englische Quelle: `learnArticles.ts`). */
export const russianPronounsDeclensionDe: LearnArticle = {
  slug: 'russian-pronouns-declension',
  introByline: {
    text: '**Geschrieben von Nathan** — Muttersprachler Französisch, der Russisch lernt; ich teile, was für Grammatik, Fälle und tägliche Praxis wirklich funktioniert.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, Gründer von Russian Cases with Anna',
    imageWidth: 256,
    imageHeight: 256,
  },
  title: 'Russische Pronomen-Deklination: Personal, Possessiv & Demonstrativ',
  metaTitle: 'Russische Pronomen-Deklination Tabelle | Russian Cases with Anna',
  metaDescription:
    'Russische Pronomen in allen 6 Fällen: Personal (я, ты, он…), Possessiv (мой, наш), Demonstrativ (этот/тот) plus die него/неё-Präpositionsfalle.',
  keywords: [
    'russische Pronomen Deklination',
    'russische Personalpronomen Fälle',
    'Pronomen russisch deklinieren',
    'мой наш Deklination',
    'этот тот russisch',
    'него неё russisch',
    'russische Possessivpronomen',
    'russische Demonstrativpronomen',
  ],
  h1: 'Russische Pronomen-Deklination: Personal, Possessiv & Demonstrativ',
  heroImage: {
    src: '/articles/russian-pronouns-declension-header.webp',
    alt: 'Karteikarten mit russischen Personalpronomen я ты он она мы вы они auf einem Schreibtisch',
    width: 1280,
    height: 720,
  },
  intro:
    'Substantive und Adjektive folgen recht regelmäßigen Endungstabellen. **Pronomen tun das nicht.** Formen wie **меня, ему, неё, этом** wirken unverbunden mit **я, он, она, этот** — bis man sie als geschlossenes System sieht, das man einfach lernen muss.\n\nDieser Leitfaden deckt die drei Pronomengruppen ab, die Sie jeden Tag brauchen: **Personal** (я, ты, он…), **Possessiv** (мой, наш, свой…) und **Demonstrativ** (этот / тот). Dazu kommt die Präpositionsfalle (**него / неё / них**) und 20 Beispielsätze mit Transliteration.',
  whatYouLearn: [
    'Warum Pronomen die regulären Substantivmuster durchbrechen',
    'Vollständige Personalpronomen-Tabellen für alle 6 Fälle',
    'Possessivpronomen und Kongruenz (мой, наш, свой)',
    'Demonstrativa: этот und тот dekliniert',
    'Die Präpositionsfalle: него, неё, них',
    '20 echte Beispielsätze mit Transliteration',
  ],
  leadMagnetCta: {
    title: 'Pronomen + Fälle = echte Sätze',
    description:
      'Russian Cases with Anna trainiert Endungen im Kontext — inklusive der Pronomen, die in jedem Dialog vorkommen. Kostenlos für iOS und Android.',
    ctaText: 'App herunterladen — Kostenlos',
    ctaHref: '/',
  },
  tableAccentVariant: 'dative',
  sections: [
    {
      h2: 'Warum Pronomen nicht den Substantivmustern folgen',
      content:
        'Russische Substantivendungen sind meist vorhersehbar, sobald man das Genus kennt. Pronomen sind **suppletiv**: viele Kasusformen stammen von älteren Stämmen, daher ist **я → меня → мне → мной** ein Paradigma, das man als Set auswendig lernt — nicht Buchstabe für Buchstabe baut.\n\nDas klingt schlimmer, als es ist. Es gibt nur eine Handvoll Personalpronomen, und Sie nutzen sie ständig — deshalb zahlt sich das Drill der Tabellen schneller aus als bei fast jeder anderen Grammatik-Übersicht.',
      bullets: [
        'Personalpronomen wechseln den **Stamm** über die Fälle (я / меня / мной).',
        'Possessiv- und Demonstrativpronomen verhalten sich eher wie **Adjektive** — sie kongruieren in Genus, Numerus und Kasus.',
        'Nach den meisten Präpositionen fügen Pronomen der 3. Person **н-** hinzu: него, неё, них (nicht *его, *её, *их).',
      ],
    },
    {
      h2: 'Personalpronomen in allen 6 Fällen',
      content:
        'Lernen Sie diese als vertikale Spalten. Der Nominativ ist die Zitierform; jeder andere Fall ist eine Sprechform, die Sie in echten Sätzen hören werden.',
      table: {
        headers: ['Fall', 'я', 'ты', 'он', 'она', 'оно', 'мы', 'вы', 'они'],
        rows: [
          ['Nominativ', 'я', 'ты', 'он', 'она', 'оно', 'мы', 'вы', 'они'],
          ['Genitiv', 'меня', 'тебя', 'его', 'её', 'его', 'нас', 'вас', 'их'],
          ['Dativ', 'мне', 'тебе', 'ему', 'ей', 'ему', 'нам', 'вам', 'им'],
          ['Akkusativ', 'меня', 'тебя', 'его', 'её', 'его', 'нас', 'вас', 'их'],
          ['Instrumental', 'мной (-ою)', 'тобой (-ою)', 'им', 'ей (-ею)', 'им', 'нами', 'вами', 'ими'],
          ['Präpositional', 'мне', 'тебе', 'нём', 'ней', 'нём', 'нас', 'вас', 'них'],
        ],
        caption: 'Personalpronomen in allen sechs Fällen dekliniert',
        boldColumnIndices: [0],
      },
      subsections: [
        {
          h3: 'Muster, die sich lohnen',
          content:
            '**Genitiv = Akkusativ** für я, ты, он, она, оно, мы, вы, они (gleiche Formen: меня, тебя, его…). Das halbiert die Auswendiglernarbeit fast.\n\n**Dativ und Präpositional** teilen **мне / тебе** für die 1. und 2. Person Singular.\n\n**Вы** ist sowohl Plural-„ihr/Sie“ als auch höfliches Singular-„Sie“ — die Formen sind identisch; nur Verbalkongruenz und sozialer Kontext ändern sich.',
        },
      ],
      bullets: [
        'Instrumental **мной / тобой** erscheinen manchmal als **мною / тобою** im formellen oder poetischen Stil — im Alltag selten.',
        '**Он / оно** teilen fast alle Formen außerhalb des Nominativs (**его, ему, им, нём**).',
        'Üben Sie mit Verben, die Sie schon kennen: **дай мне**, **я вижу тебя**, **мы говорим о нём**.',
      ],
    },
    {
      h2: 'Possessivpronomen und Kongruenz',
      content:
        'Possessiva beantworten **чей? чья? чьё? чьи?** (wessen?). Anders als englisches „my“ verändert sich russisches **мой** mit dem Substantiv — genau wie ein Adjektiv.',
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
        caption: 'Deklination von мой — Modell für твой und свой',
        boldColumnIndices: [0],
      },
      subsections: [
        {
          h3: 'наш / ваш',
          content:
            '**Наш** und **ваш** folgen einem weich wirkenden Muster: нашего, нашей, нашему, наши… Dieselbe Kongruenzlogik wie мой.',
        },
        {
          h3: 'свой vs его / её / их',
          content:
            '**Свой** bedeutet „sein/ihr eigenes“ und verweist auf das **Subjekt**: **Он читает свою книгу** (sein eigenes Buch).\n\n**Его / её / их** bedeuten „sein / ihr / ihr(e)“ und **deklinieren nicht**: **Я вижу его книгу** (Ich sehe sein Buch). Nur das Substantiv (und etwaige Adjektive) ändern sich.',
        },
      ],
      bullets: [
        'Akkusativ-Belebtheit gilt: **я вижу моего брата**, aber **я вижу мой дом**.',
        'Zur vollständigen adjektivartigen Logik hinter diesen Endungen siehe [Russische Adjektivdeklination](/learn/articles/russian-adjective-declension).',
      ],
    },
    {
      h2: 'Demonstrativa: этот / тот',
      content:
        '**Этот** = dieser (nah); **тот** = jener (fern / zuvor erwähnt). Beide deklinieren und kongruieren mit dem Substantiv.',
      table: {
        headers: ['Fall', 'этот', 'эта', 'это', 'эти'],
        rows: [
          ['Nominativ', 'этот', 'эта', 'это', 'эти'],
          ['Genitiv', 'этого', 'этой', 'этого', 'этих'],
          ['Dativ', 'этому', 'этой', 'этому', 'этим'],
          ['Akkusativ', 'этот / этого', 'эту', 'это', 'эти / этих'],
          ['Instrumental', 'этим', 'этой', 'этим', 'этими'],
          ['Präpositional', 'этом', 'этой', 'этом', 'этих'],
        ],
        caption: 'Deklination von этот (dieser)',
        boldColumnIndices: [0],
      },
      subsections: [
        {
          h3: 'тот kurz gefasst',
          content:
            '**Тот / та / то / те** folgen derselben Kasuslogik mit anderen Stämmen: того, той, тому, ту, тем, том, тех…\n\nNützlicher Kontrast: **Эта книга интересная, а та — скучная.** (Dieses Buch ist interessant, und jenes ist langweilig.)',
        },
        {
          h3: 'это vs этот',
          content:
            'Invariantes **это** im Sinne von „das ist / das sind“ **deklinieren in dieser Rolle nicht**: **Это мой брат.** Dekliniertes **этот/эта/это/эти** modifiziert ein Substantiv: **Этот брат живёт в Москве.**',
        },
      ],
    },
    {
      h2: 'Die Präpositionsfalle (него, неё, них)',
      content:
        'Nach den meisten Präpositionen erhalten Pronomen der 3. Person ein anlautendes **н-**. Es zu vergessen ist einer der häufigsten Fehler auf Mittelstufe.',
      table: {
        headers: ['Ohne Präposition', 'Mit Präposition', 'Deutsch'],
        rows: [
          ['я знаю его', 'я думаю о нём', 'ich kenne ihn / ich denke an ihn'],
          ['я вижу её', 'я иду к ней', 'ich sehe sie / ich gehe zu ihr'],
          ['я слушаю их', 'я говорю с ними', 'ich höre ihnen zu / ich spreche mit ihnen'],
          ['это его книга', 'книга у него', 'das ist sein Buch / er hat ein Buch'],
        ],
        caption: 'Pronomen der 3. Person mit und ohne Präpositionen',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Formen zum Lernen: **него, нему, ним, нём** (он/оно); **неё, ней** (она); **них, ним, ними** (они).',
        'Das **н-** erscheint nach Präpositionen wie **о, у, к, с, для, без, из, от…**',
        'Possessives **его / её / их** („sein/ihr/ihr(e)“) deklinieren weiterhin nicht — aber als Objektpronomen nach einer Präposition nutzen Sie die Personalformen mit **н-**.',
      ],
    },
    {
      h2: '20 Beispielsätze',
      content:
        'Zwanzig Sätze zu Personal-, Possessiv- und Demonstrativpronomen. **1–8** Personal · **9–14** Possessiv · **15–20** Demonstrativ / Präpositionsfalle.',
      table: {
        headers: ['#', 'Russisch', 'Transliteration', 'Deutsch'],
        rows: [
          ['1', 'Дай мне книгу.', 'Day mne knigu.', 'Gib mir das Buch.'],
          ['2', 'Я вижу тебя.', 'Ya vizhu tebya.', 'Ich sehe dich.'],
          ['3', 'Мы говорим о нём.', 'My govorim o nyom.', 'Wir sprechen über ihn.'],
          ['4', 'Скажи ей правду.', 'Skazhi yey pravdu.', 'Sag ihr die Wahrheit.'],
          ['5', 'Он идёт с нами.', 'On idyot s nami.', 'Er geht mit uns.'],
          ['6', 'Это письмо для вас.', "Eto pis'mo dlya vas.", 'Dieser Brief ist für Sie/euch.'],
          ['7', 'Я их не знаю.', 'Ya ikh ne znayu.', 'Ich kenne sie nicht.'],
          ['8', 'У неё есть сестра.', "U neyo yest' sestra.", 'Sie hat eine Schwester.'],
          ['9', 'Это мой брат.', 'Eto moy brat.', 'Das ist mein Bruder.'],
          ['10', 'Я читаю свою книгу.', 'Ya chitayu svoyu knigu.', 'Ich lese mein (eigenes) Buch.'],
          ['11', 'Где наша машина?', 'Gde nasha mashina?', 'Wo ist unser Auto?'],
          ['12', 'Я вижу моего друга.', 'Ya vizhu moyego druga.', 'Ich sehe meinen Freund.'],
          ['13', 'Его дом большой.', "Yego dom bol'shoy.", 'Sein Haus ist groß.'],
          ['14', 'Она любит свою работу.', 'Ona lyubit svoyu rabotu.', 'Sie liebt ihre (eigene) Arbeit.'],
          ['15', 'Этот город красивый.', 'Etot gorod krasivyy.', 'Diese Stadt ist schön.'],
          ['16', 'Я живу в этом доме.', 'Ya zhivu v etom dome.', 'Ich wohne in diesem Haus.'],
          ['17', 'Дай мне ту ручку.', 'Day mne tu ruchku.', 'Gib mir diesen Stift (dort).'],
          ['18', 'Мы говорим об этой проблеме.', 'My govorim ob etoy probleme.', 'Wir sprechen über dieses Problem.'],
          ['19', 'Кто это? — Это она.', 'Kto eto? — Eto ona.', 'Wer ist das? — Das ist sie.'],
          ['20', 'Я иду к нему.', 'Ya idu k nemu.', 'Ich gehe zu ihm.'],
        ],
        caption: '20 Pronomen-Beispiele mit Transliteration',
        boldColumnIndices: [0, 1],
      },
    },
    {
      h2: 'Häufige Fehler bei russischen Pronomen',
      bullets: [
        '**Его nach einer Präposition:** *о его* ✗ → **о нём** ✓ (wenn „ihn“ Objekt der Präposition ist).',
        '**Свой und его verwechseln:** eigene Sache des Subjekts → **свой**; Sache eines anderen → **его/её/их**.',
        '**Kongruenz bei мой vergessen:** *мой книга* ✗ → **моя книга** ✓.',
        '**Это (das ist) wie этот (dieser + Substantiv) behandeln:** **Это мама** vs **Эта мама**.',
        '**Dativ und Akkusativ mischen:** **дай мне** (Dativ) vs **вижу меня** (Akkusativ).',
      ],
    },
  ],
  faq: [
    {
      question: 'Haben russische Personalpronomen für jeden Fall andere Formen?',
      answer:
        'Ja. Jedes Personalpronomen hat ein vollständiges Sechs-Fälle-Paradigma. Die gute Nachricht: Genitiv und Akkusativ sind bei allen identisch — das reduziert, was Sie auswendig lernen müssen.',
    },
    {
      question: 'Wann benutzt man него statt его?',
      answer:
        'Nutzen Sie него / неё / них (und verwandte н-Formen) nach Präpositionen, wenn das Pronomen Objekt dieser Präposition ist: о нём, у неё, с ними. Bloßes его / её / их steht ohne regierende Präposition oder als undeklinierbare Possessiva im Sinne von sein / ihr / ihr(e).',
    },
    {
      question: 'Was ist der Unterschied zwischen мой und свой?',
      answer:
        'Мой bedeutet „mein“ aus Sicht des Sprechers. Свой bedeutet „sein/ihr eigenes“ und verweist auf das Subjekt des Satzes: Он взял свою сумку (Er nahm seine eigene Tasche).',
    },
    {
      question: 'Wie unterscheiden sich этот und это?',
      answer:
        'Это als „das ist / das sind“ ist invariant: Это мой брат. Этот / эта / это / эти sind Demonstrativadjektive, die mit einem Substantiv kongruieren: Этот брат живёт здесь.',
    },
    {
      question: 'Ist вы immer Plural?',
      answer:
        'Grammatisch sind die Formen dieselben. Вы kann mehrere Personen oder eine Person höflich ansprechen. Verben und Vergangenheitsformen kongruieren mit pluralem вы auch beim höflichen Singular: Вы были правы.',
    },
  ],
  conclusionIntro: 'Pronomen-Deklination ist endlich — und sie öffnet fast jeden russischen Satz.',
  conclusionBullets: [
    '**Personalpronomen** als volle Spalten lernen (Genitiv = Akkusativ)',
    '**мой / твой / свой / наш / ваш** wie Adjektive deklinieren',
    'Possessives **его / её / их** unverändert lassen',
    '**н-** nach Präpositionen setzen: него, неё, них',
    '**этот / тот** mit echten Substantiven üben, bis Kongruenz automatisch wirkt',
  ],
  conclusionOutro:
    'Als Nächstes verknüpfen Sie Pronomen mit Fragen (кто? кому? о ком?) im Alltag und üben Sie weiter Fälle mit unserem kostenlosen [Übungstool](/practice). Für adjektivartige Endungen im Detail siehe den [Leitfaden zur Adjektivdeklination](/learn/articles/russian-adjective-declension).',
  internalLinks: [
    {
      href: '/learn/articles/russian-adjective-declension',
      label: 'Russische Adjektivdeklination: Endungstabelle für alle 6 Fälle',
    },
    {
      href: '/learn/articles/russian-case-endings-cheatsheet',
      label: 'Russische Fallendungen: Die ultimative Spickzettel-Übersicht',
    },
    {
      href: '/learn/articles/russian-dative-case',
      label: 'Leitfaden zum russischen Dativ',
    },
    {
      href: '/learn/articles/russian-genitive-case',
      label: 'Leitfaden zum russischen Genitiv',
    },
    {
      href: '/learn/articles/top-10-russian-case-mistakes',
      label: 'Top 10 Fehler bei russischen Fällen',
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
    headline: 'Russische Pronomen-Deklination: Personal, Possessiv & Demonstrativ',
    description:
      'Russische Pronomen in allen 6 Fällen: Personal (я, ты, он…), Possessiv (мой, наш), Demonstrativ (этот/тот) plus die него/неё-Präpositionsfalle.',
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
      '@id': 'https://russiandeclensions.com/learn/articles/russian-pronouns-declension',
    },
    keywords:
      'russische Pronomen Deklination, russische Personalpronomen Fälle, мой наш Deklination, этот тот russisch, него неё russisch',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russian-pronouns-declension-header.webp',
      width: 1280,
      height: 720,
    },
  },
};
