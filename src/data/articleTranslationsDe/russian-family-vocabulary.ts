import type { LearnArticle } from '../learnArticles';

/** Deutsche Übersetzung des Artikels `russian-family-vocabulary` (englische Quelle: `learnArticles.ts`). */
export const russianFamilyVocabularyDe: LearnArticle = {
  slug: 'russian-family-vocabulary',
  introByline: {
    text: '**Geschrieben von Nathan** — Muttersprachler Französisch, der Russisch lernt; ich teile, was für Grammatik, Fälle und tägliche Praxis wirklich funktioniert.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, Gründer von Russian Cases with Anna',
    imageWidth: 256,
    imageHeight: 256,
  },
  title: 'Russischer Familienwortschatz: Wörter für Mama, Papa, Geschwister & Verwandte',
  metaTitle: 'Russischer Familienwortschatz | Russian Cases with Anna',
  metaDescription:
    'Lernen Sie russische Familienwörter: мама, папа, Geschwister, Verwandte, unregelmäßige Plurals und „ich habe…“ mit у + Genitiv — plus Mini-Dialog.',
  keywords: [
    'russischer familienwortschatz',
    'familienmitglieder auf russisch',
    'russische wörter für familie',
    'мама папа russisch',
    'russische verwandte vokabeln',
    'über familie auf russisch sprechen',
    'у меня есть familie russisch',
    'russische familienmitglieder liste',
  ],
  h1: 'Russischer Familienwortschatz: Wörter für Mama, Papa, Geschwister & Verwandte',
  heroImage: {
    src: '/articles/russian-family-vocabulary-header.webp',
    alt: 'Offenes Familienfotoalbum und Notizbuch mit den russischen Wörtern мама папа брат сестра',
    width: 1280,
    height: 720,
  },
  intro:
    'Familienwörter gehören zu den ersten Substantiven, die Sie im Russischen brauchen — und zu den nützlichsten. Sie verwenden sie, um sich vorzustellen, nach anderen zu fragen und über den Alltag zu sprechen. Sie ziehen Sie außerdem direkt in die **echte Grammatik**: unregelmäßige Plurals wie **брат → братья** und das klassische Besitzmuster **у меня есть…** mit dem **Genitiv**.\n\nDieser Leitfaden liefert Ihnen den Wortschatz der engen und erweiterten Familie, die Plurals, die das reguläre Muster brechen, fertige Vorstellungssätze und einen kurzen Dialog zum lauten Üben.',
  whatYouLearn: [
    'Zentrale Wörter der engen Familie (Eltern, Geschwister, Kinder, Ehepartner)',
    'Wortschatz der erweiterten Familie (Großeltern, Tanten, Onkel, Schwiegereltern)',
    'Unregelmäßige Plurals zum Auswendiglernen (братья, сёстры, дети…)',
    'Wie man „ich habe einen/eine…“ mit **у + Genitiv** sagt',
    'Nützliche Sätze zur Vorstellung Ihrer Familie',
    'Einen Mini-Dialog, den Sie in echten Gesprächen wiederverwenden können',
  ],
  leadMagnetCta: {
    title: 'Familienwörter bleiben besser haften, wenn Fälle automatisch sitzen',
    description:
      'У меня есть брата ist falsch — у меня есть брат ist richtig, aber der Genitiv taucht überall sonst rund um Familienthemen auf. Russian Cases with Anna trainiert alle sechs Fälle mit echten Sätzen. Kostenlos für iOS und Android.',
    ctaText: 'App herunterladen — Kostenlos',
    ctaHref: '/',
  },
  tableAccentVariant: 'genitive',
  sections: [
    {
      h2: 'Wörter der engen Familie',
      content:
        'Beginnen Sie hier. Das sind die häufigsten Familiensubstantive im Alltagsrussischen — die, die Sie in fast jeder persönlichen Vorstellung hören werden.',
      table: {
        headers: ['Russisch', 'Transliteration', 'Deutsch', 'Genus'],
        rows: [
          ['мама / мать', "mama / mat'", 'Mama / Mutter', 'Feminin'],
          ['папа / отец', 'papa / otets', 'Papa / Vater', 'Maskulin'],
          ['родители', 'roditeli', 'Eltern', 'Plural'],
          ['сын', 'syn', 'Sohn', 'Maskulin'],
          ['дочь', "doch'", 'Tochter', 'Feminin'],
          ['ребёнок / дети', 'rebyonok / deti', 'Kind / Kinder', 'Mask. / Plural'],
          ['брат', 'brat', 'Bruder', 'Maskulin'],
          ['сестра', 'sestra', 'Schwester', 'Feminin'],
          ['муж', 'muzh', 'Ehemann', 'Maskulin'],
          ['жена', 'zhena', 'Ehefrau', 'Feminin'],
          ['семья', "sem'ya", 'Familie', 'Feminin'],
        ],
        caption: 'Enge Familie — Kernwortschatz für Anfänger',
        boldColumnIndices: [0, 3],
      },
      bullets: [
        '**Мама / папа** sind die Alltagsformen; **мать / отец** klingen formeller oder offizieller (Dokumente, formelle Rede).',
        '**Ребёнок** ist Singular „Kind“; der Plural ist unregelmäßig **дети** — nicht *ребёнки*.',
        '**Семья** („Familie“) ist feminin Singular, obwohl es eine Gruppe meint: **моя семья большая** (Meine Familie ist groß).',
        'Natürliches Geschlecht siegt: **папа**, **мужчина**, **дедушка** enden auf **-а/-я**, sind aber **grammatisch maskulin** — sie nehmen maskuline Adjektive (**мой папа**, nicht *моя папа*).',
      ],
    },
    {
      h2: 'Wörter der erweiterten Familie',
      content:
        'Wenn der Kern sitzt, ergänzen Sie die Verwandten, die Sie für Geschichten, Feiertage und längere Vorstellungen brauchen.',
      table: {
        headers: ['Russisch', 'Transliteration', 'Deutsch', 'Genus'],
        rows: [
          ['бабушка', 'babushka', 'Großmutter', 'Feminin'],
          ['дедушка', 'dedushka', 'Großvater', 'Maskulin'],
          ['бабушка и дедушка', 'babushka i dedushka', 'Großeltern', '—'],
          ['внук', 'vnuk', 'Enkel', 'Maskulin'],
          ['внучка', 'vnuchka', 'Enkelin', 'Feminin'],
          ['дядя', 'dyadya', 'Onkel', 'Maskulin'],
          ['тётя', 'tyotya', 'Tante', 'Feminin'],
          ['двоюродный брат', 'dvoyurodnyy brat', 'Cousin (männlich)', 'Maskulin'],
          ['двоюродная сестра', 'dvoyurodnaya sestra', 'Cousine', 'Feminin'],
          ['племянник', 'plemyannik', 'Neffe', 'Maskulin'],
          ['племянница', 'plemyannitsa', 'Nichte', 'Feminin'],
          ['свекровь', "svekrov'", 'Schwiegermutter (Mutter des Mannes)', 'Feminin'],
          ['тёща', 'tyoshcha', 'Schwiegermutter (Mutter der Frau)', 'Feminin'],
          ['свёкор', 'svyokor', 'Schwiegervater (Vater des Mannes)', 'Maskulin'],
          ['тесть', "test'", 'Schwiegervater (Vater der Frau)', 'Maskulin'],
        ],
        caption: 'Erweiterte Familie und Schwiegereltern',
        boldColumnIndices: [0, 3],
      },
      bullets: [
        'Russisch unterscheidet oft, **wessen** Elternteil ein Schwiegerelternteil ist — englisch „mother-in-law“ teilt sich in **свекровь** vs **тёща**.',
        '**Дядя** und **дедушка** wirken feminin (-я/-а), sind aber maskulin: **мой дядя**, **добрый дедушка**.',
        '„Cousin“ heißt meist **двоюродный брат / двоюродная сестра** — Russisch hat kein einzelnes alltagsübliches geschlechtsneutrales Wort wie englisch „cousin“.',
      ],
    },
    {
      h2: 'Unregelmäßige Plurals zum Auswendiglernen',
      content:
        'Mehrere Familiensubstantive verweigern das reguläre Pluralmuster. Lernen Sie sie als feste Paare — sie kommen ständig im Gespräch vor.',
      table: {
        headers: ['Singular', 'Plural', 'Deutsch', 'Hinweis'],
        rows: [
          ['брат', 'бра́тья', 'Bruder → Brüder', 'Unregelmäßiger -ья-Plural'],
          ['сын', 'сыновья́ / сыны́', 'Sohn → Söhne', 'сыновья ist der übliche gesprochene Plural'],
          ['друг', 'друзья́', 'Freund → Freunde', 'Gleiches -ья-Muster; keine Familie, aber dieselbe Falle'],
          ['ребёнок', 'де́ти', 'Kind → Kinder', 'Suppletiver Plural (andere Wurzel)'],
          ['человек', 'лю́ди', 'Person → Leute', 'Suppletiv; nützlich bei Familiengröße'],
          ['мать', 'ма́тери', 'Mutter → Mütter', 'Stammwechsel'],
          ['дочь', 'до́чери', 'Tochter → Töchter', 'Stammwechsel'],
          ['сестра', 'сёстры', 'Schwester → Schwestern', 'Betonung + ё'],
          ['муж', 'мужья́', 'Ehemann → Ehemänner', 'Unregelmäßig -ья'],
          ['жена', 'жёны', 'Ehefrau → Ehefrauen', 'Betonung + ё'],
        ],
        caption: 'Familienplurals, die das reguläre Muster brechen',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        '**Брат → братья** gehört zu den wertvollsten Unregelmäßigkeiten im Anfänger-Russisch — früh üben.',
        '**Дети** ist der einzige normale Plural von **ребёнок** in der Alltagssprache.',
        'Mehr zu unregelmäßigen Nominativ-Plurals im [Nominativ-Leitfaden](/learn/articles/russian-nominative-case).',
      ],
    },
    {
      h2: 'Über Ihre Familie sprechen mit У + Genitiv',
      content:
        'Englisch „I have…“ wird im Russischen meist als **у + Genitiv + есть** ausgedrückt. Der **Besitzer** steht im Genitiv nach **у**; das Besessene bleibt im **Nominativ**.',
      table: {
        headers: ['Russisch', 'Transliteration', 'Deutsch'],
        rows: [
          ['У меня есть брат.', "U menya yest' brat.", 'Ich habe einen Bruder.'],
          ['У меня есть сестра.', "U menya yest' sestra.", 'Ich habe eine Schwester.'],
          ['У него есть жена.', "U nego yest' zhena.", 'Er hat eine Frau.'],
          ['У неё есть дети.', "U neyo yest' deti.", 'Sie hat Kinder.'],
          ["У нас большая семья.", "U nas bol'shaya sem'ya.", 'Wir haben eine große Familie.'],
          ['У вас есть дети?', "U vas yest' deti?", 'Haben Sie Kinder? (formell/Plural)'],
        ],
        caption: 'Besitz mit у + Genitiv',
        boldColumnIndices: [0],
      },
      subsections: [
        {
          h3: 'Das Muster in einer Zeile',
          content:
            '**У + ich/du/er… (Genitiv) + есть + Person/Sache (Nominativ).**\n\nAlso: **у меня** (Genitiv von я), **у тебя**, **у него / у неё**, **у нас**, **у вас**, **у них**. Nach einer Präposition nehmen **он/она/они** die **н-**-Formen: него, неё, них.',
        },
        {
          h3: 'Verneinung setzt das Besessene in den Genitiv',
          content:
            'Positiv: **У меня есть брат.** (брат = Nominativ)\nNegativ: **У меня нет брата.** (брата = Genitiv)\n\nHier spüren Lernende zum ersten Mal, warum der [Genitiv](/learn/articles/russian-genitive-case) so wichtig ist.',
        },
      ],
      bullets: [
        'Sagen Sie **nicht** *Я имею брата* für normales „ich habe einen Bruder“ — das klingt in dieser Bedeutung unnatürlich.',
        '**Есть** kann in der Umgangssprache wegfallen, wenn ein Adjektiv da ist: **У нас большая семья.**',
        'Nachfragen mit demselben Muster: **А у тебя?** (Und du?).',
      ],
    },
    {
      h2: 'Nützliche Sätze für Vorstellungen',
      content:
        'Prägen Sie sich einen kleinen Satzvorrat ein. Er recyclt den Wortschatz oben und klingt bei ersten Begegnungen natürlich.',
      table: {
        headers: ['Russisch', 'Deutsch'],
        rows: [
          ['Это моя семья.', 'Das ist meine Familie.'],
          ['Это мой папа и моя мама.', 'Das sind mein Papa und meine Mama.'],
          ['У меня два брата и одна сестра.', 'Ich habe zwei Brüder und eine Schwester.'],
          ['Мой младший брат студент.', 'Mein jüngerer Bruder ist Student.'],
          ['Моя старшая сестра живёт в Москве.', 'Meine ältere Schwester lebt in Moskau.'],
          ['Мы из большой семьи.', 'Wir kommen aus einer großen Familie.'],
          ['Знакомьтесь: это мой муж / моя жена.', 'Darf ich vorstellen: mein Mann / meine Frau.'],
          ['У нас трое детей.', 'Wir haben drei Kinder.'],
        ],
        caption: 'Häufige Vorstellungssätze zur Familie',
        boldColumnIndices: [0],
      },
      bullets: [
        '**Старший / младший** (älter / jünger) kongruieren wie Adjektive: **старшая сестра**, **младший брат**.',
        'Zahlen lösen Fallregeln aus: **два брата**, **три сестры**, **пять детей** — Details im [Zahlen-Leitfaden](/learn/articles/russian-numbers-guide) und Genitiv-Artikel.',
        'Zeigen mit **это** lässt das folgende Substantiv im **Nominativ**: **Это моя мама.**',
      ],
    },
    {
      h2: 'Mini-Dialog: Lernen Sie meine Familie kennen',
      content:
        'Ein kurzes Gespräch zum Anpassen. Laut lesen, dann eigene Verwandte einsetzen.',
      table: {
        headers: ['Sprecher', 'Russisch', 'Deutsch'],
        rows: [
          ['Anna', 'Привет! Расскажи о своей семье.', 'Hallo! Erzähl mir von deiner Familie.'],
          [
            'Ivan',
            'У меня есть мама, папа и младшая сестра.',
            'Ich habe eine Mama, einen Papa und eine jüngere Schwester.',
          ],
          ['Anna', 'А братья у тебя есть?', 'Und hast du Brüder?'],
          ['Ivan', 'Нет, у меня нет братьев. А у тебя?', 'Nein, ich habe keine Brüder. Und du?'],
          [
            'Anna',
            'У меня два брата. Старший брат женат.',
            'Ich habe zwei Brüder. Der ältere ist verheiratet.',
          ],
          ['Ivan', 'Круто. А родители где живут?', 'Cool. Und wo leben deine Eltern?'],
          [
            'Anna',
            'В Казани. А моя бабушка живёт с нами.',
            'In Kasan. Und meine Großmutter lebt bei uns.',
          ],
        ],
        caption: 'Wiederverwendbarer Mini-Dialog über die Familie',
        boldColumnIndices: [1],
      },
      bullets: [
        'Beachten Sie **нет братьев** — die Verneinung setzt „Brüder“ in den **Genitiv Plural**.',
        '**Женат** (verheiratet, Mann) / **замужем** (verheiratet, Frau) sind wertvolle Anschlüsse nach Familienthemen.',
        'Namen und Städte tauschen, den Grammatikrahmen behalten.',
      ],
    },
    {
      h2: 'Häufige Fehler beim russischen Familienwortschatz',
      bullets: [
        '***Моя папа* sagen.** Папа ist maskulin → **мой папа**.',
        '***Ребёнки* als Plural verwenden.** Nutzen Sie **дети**.',
        '**Genitiv nach нет vergessen:** *У меня нет брат* ✗ → **У меня нет брата** ✓.',
        '**Свекровь und тёща verwechseln** — sie sind nicht austauschbar.',
        '**„Ich habe“ als я имею** im lockeren Familiengespräch — besser **у меня есть**.',
      ],
    },
  ],
  faq: [
    {
      question: 'Welche russischen Familienwörter sind für Anfänger am wichtigsten?',
      answer:
        'Beginnen Sie mit мама, папа, брат, сестра, сын, дочь, муж, жена, ребёнок/дети und семья. Als Nächstes: бабушка, дедушка, дядя und тётя. Das deckt fast jede Anfänger-Vorstellung ab.',
    },
    {
      question: 'Wie sagt man „ich habe einen Bruder“ auf Russisch?',
      answer:
        'Sagen Sie У меня есть брат. Der Besitzer (меня) steht im Genitiv nach у, und брат bleibt Nominativ. Für „ich habe keinen Bruder“: У меня нет брата — брата ist Genitiv.',
    },
    {
      question: 'Warum ist папа maskulin, obwohl es auf -а endet?',
      answer:
        'Weil natürliches Geschlecht bei Männern gewinnt. Wörter wie папа, дедушка, дядя und мужчина wirken in der Schreibweise feminin, nehmen aber maskuline Kongruenz: мой папа, добрый дедушка.',
    },
    {
      question: 'Was ist der Plural von брат und ребёнок?',
      answer:
        'Брат → братья (unregelmäßig). Ребёнок → дети (ganz andere Wurzel). Beide Formen muss man für Familiengespräche auswendig lernen.',
    },
    {
      question: 'Wie sagen Russen „Cousin“?',
      answer:
        'Meist двоюродный брат für einen männlichen Cousin und двоюродная сестра für eine Cousine. Es gibt kein einzelnes alltagsübliches geschlechtsneutrales Wort wie englisch „cousin“ in allen Kontexten.',
    },
  ],
  conclusion: '',
  conclusionIntro:
    'Familienwortschatz ist ein perfektes Anfänger-Paket: nützliche Wörter plus Grammatik, die wirklich im Sprechen vorkommt.',
  conclusionBullets: [
    'Zuerst die **enge Familie** lernen, dann **erweiterte Verwandte** und Schwiegereltern',
    'Die **unregelmäßigen Plurals** merken: братья, дети, мужья, сёстры…',
    'Jeden „ich habe…“-Satz mit **у + Genitiv + (есть) + Nominativ** bauen',
    'Für „ich habe kein…“ **нет + Genitiv** verwenden',
    'Mit einem kurzen Dialog üben, bis die Rahmen automatisch sitzen',
  ],
  conclusionOutro:
    'Wenn diese Sätze leicht fallen, gehen Sie mit unserem [Genitiv-Leitfaden](/learn/articles/russian-genitive-case) und dem kostenlosen [Deklinations-Training](/practice) weiter — Familienthemen gehören zu den schnellsten Wegen, Fälle greifbar zu machen.',
  internalLinks: [
    {
      href: '/learn/articles/russian-genitive-case',
      label: 'Russischer Genitiv: Regeln, Endungen und 32 echte Beispiele',
    },
    {
      href: '/learn/articles/russian-greetings-guide',
      label: 'Russische Begrüßungen: Wie man auf Russisch Hallo sagt',
    },
    {
      href: '/learn/articles/russian-most-common-words',
      label: '100 häufigste russische Wörter',
    },
    {
      href: '/learn/articles/russian-nominative-case',
      label: 'Russischer Nominativ: Regeln, Endungen und 24 echte Beispiele',
    },
    {
      href: '/learn/articles/russian-noun-gender-guide',
      label: 'Genus russischer Substantive: Maskulin, Feminin, Neutrum',
    },
    {
      href: '/practice',
      label: 'Kostenloses russisches Deklinations-Quiz',
    },
  ],
  ctaText: 'Russische Fälle üben — Kostenlos →',
  ctaHref: '/practice',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Russischer Familienwortschatz: Wörter für Mama, Papa, Geschwister & Verwandte',
    description:
      'Lernen Sie russische Familienwörter: мама, папа, Geschwister, Verwandte, unregelmäßige Plurals und „ich habe…“ mit у + Genitiv — plus Mini-Dialog.',
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
      '@id': 'https://russiandeclensions.com/learn/articles/russian-family-vocabulary',
    },
    keywords:
      'russischer familienwortschatz, familienmitglieder auf russisch, russische wörter für familie, über familie auf russisch sprechen, у меня есть familie russisch',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russian-family-vocabulary-header.webp',
      width: 1280,
      height: 720,
    },
  },
};
