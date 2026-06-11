import type { LearnArticle } from '../learnArticles';

/** Deutsche Übersetzung des Artikels `russian-numbers-guide` (Quelle EN: `learnArticles.ts`). */
export const russianNumbersGuideDe: LearnArticle = {
  slug: 'russian-numbers-guide',
  title: 'Russische Zahlen: Auf Russisch zählen (vollständiger Leitfaden 2026)',
  metaTitle:
    'Russische Zahlen: Auf Russisch zählen | Vollständiger Leitfaden 2026 | Russian Cases with Anna',
  metaDescription:
    'Russische Zahlen von 1 bis 1000 lernen: Grundzahlen, Ordinalzahlen, Zahlen mit russischen Fällen, Altersangaben und Datumsangaben — vollständiger Leitfaden mit Tabellen.',
  keywords: [
    'russische Zahlen',
    'auf Russisch zählen',
    'Zahlen auf Russisch',
    'russische Zahlen 1-10',
    'russische Grundzahlen',
    'russische Ordinalzahlen',
    'Russisch zählen lernen',
    'russische Zahlen Aussprache',
    'wie sagt man Zahlen auf Russisch',
    'russische Zahlen 1-100',
  ],
  h1: 'Russische Zahlen: Auf Russisch zählen (vollständiger Leitfaden)',
  heroImage: {
    src: '/articles/russia-kremlin-moscow.webp',
    alt: 'Russische Zahlen lernen — vollständiger Leitfaden zum Zählen',
    width: 1200,
    height: 630,
  },
  intro:
    'Das Lernen russischer Zahlen wirkt zunächst überschaubar — bis man versucht, sie in einem Satz zu verwenden. **Russische Zahlen sind nicht bloße Etiketten, die man an Gegenstände heftet.** Sie interagieren mit dem grammatischen Kasussystem auf eine Weise, die selbst fortgeschrittene Lernende stolpern lässt, und manche Zahlen verhalten sich völlig unerwartet.\n\nDie gute Nachricht: Russische Zahlen folgen klaren Mustern, sobald man die Logik versteht. **Die ersten zehn Zahlen erschließen das gesamte System.** Die „Teenagerzahlen" folgen einer einzigen Regel. Die Zehner sind vorhersehbar. Und sobald man versteht, wie Zahlen mit Kasus interagieren, kann man zählen, das Alter angeben und Preise lesen.\n\nDieser Leitfaden behandelt alles: **Grundzahlen von 1 bis 1000**, Ordinalzahlen, Altersangaben, Datums- und Jahresangaben sowie die eine Grammatikregel (Zahlen + Kasus), die im echten Russisch alles entscheidet.',
  introByline: {
    text: '**Geschrieben von Nathan** — Muttersprachler Französisch; ich lerne Russisch und teile, was für Grammatik, Kasus und den Alltag wirklich funktioniert.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, Gründer von Russian Cases with Anna',
    imageWidth: 256,
    imageHeight: 256,
  },
  whatYouLearn: [
    'Grundzahlen 1–1000 mit Aussprachehilfe',
    'Die irregulären Zahlen, die man auswendig lernen muss: **40, 90, 100**',
    'Wie russische Zahlen mit **grammatischen Kasus** interagieren — die Regel, die die meisten Lernenden übersehen',
    'Ordinalzahlen: erst-, zweit-, dritt-…',
    'Wie man sein **Alter** auf Russisch sagt (мне X лет)',
    'Wie man **Datum und Jahr** auf Russisch ausdrückt',
  ],
  leadMagnetCta: {
    title: 'Russische Grammatik über Zahlen hinaus meistern — kostenlose App',
    description:
      'Zahlen sind nur der Anfang. Russische Grammatik, Kasus und Deklinationen sind der Schlüssel zur echten Sprachkompetenz. Russian Cases with Anna bietet strukturierte Lektionen und intelligente Quizze — kostenlos für iOS und Android.',
    ctaText: 'App herunterladen — Kostenlos',
    ctaHref: '/',
  },
  sections: [
    {
      h2: 'Russische Zahlen 1–10: Das Fundament',
      content:
        'Die zehn Grundzahlen unten bilden das Fundament des gesamten russischen Zahlensystems. Beachten Sie sofort, dass **1** und **2** Genusformen haben — das wird wichtig, wenn man sie mit Substantiven verwendet.',
      table: {
        headers: ['Zahl', 'Russisch', 'Transliteration', 'Genus-Hinweis'],
        rows: [
          ['1', 'один / одна / одно', 'odin / odna / odno', 'Maskulinum / Femininum / Neutrum'],
          ['2', 'два / две', 'dva / dve', 'Mask.–Neutr. / Femininum'],
          ['3', 'три', 'tri', '—'],
          ['4', 'четыре', 'chetyre', '—'],
          ['5', 'пять', "pyat'", '—'],
          ['6', 'шесть', "shest'", '—'],
          ['7', 'семь', "sem'", '—'],
          ['8', 'восемь', "vosem'", '—'],
          ['9', 'девять', "devyat'", '—'],
          ['10', 'десять', "desyat'", '—'],
        ],
        caption: 'Russische Grundzahlen 1–10',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        '**Один** (maskulin) wird mit maskulinen Substantiven verwendet: один брат (ein Bruder)',
        '**Одна** (feminin) wird mit femininen Substantiven verwendet: одна книга (ein Buch)',
        '**Одно** (neutral) wird mit neutralen Substantiven verwendet: одно окно (ein Fenster)',
        '**Два** wird mit maskulinen und neutralen Substantiven verwendet; **две** mit femininen',
        'Zahlen 3–10 ändern sich nicht nach Genus',
        'Zahlen 5–10 enden auf ein weiches Zeichen (ь) — ein wichtiges Muster für das Kasussystem',
      ],
    },
    {
      h2: 'Zahlen 11–19: Die russischen Teenager',
      content:
        'Die Teenagerzahlen im Russischen werden durch Hinzufügen des Suffixes **-надцать** (eine Form von „auf zehn") gebildet. Sobald man das Muster erkennt, erschließen sich alle elf Teenagerzahlen auf einmal.',
      table: {
        headers: ['Zahl', 'Russisch', 'Transliteration', 'Bildungsmuster'],
        rows: [
          ['11', 'одиннадцать', "odinnadtsat'", 'один + надцать'],
          ['12', 'двенадцать', "dvenadtsat'", 'две + надцать'],
          ['13', 'тринадцать', "trinadtsat'", 'три + надцать'],
          ['14', 'четырнадцать', "chetyrnadtsat'", 'четыре + надцать'],
          ['15', 'пятнадцать', "pyatnadtsat'", 'пять + надцать'],
          ['16', 'шестнадцать', "shestnadtsat'", 'шесть + надцать'],
          ['17', 'семнадцать', "semnadtsat'", 'семь + надцать'],
          ['18', 'восемнадцать', "vosemnadtsat'", 'восемь + надцать'],
          ['19', 'девятнадцать', "devyatnadtsat'", 'девять + надцать'],
        ],
        caption: 'Russische Zahlen 11–19 mit Bildungsmuster',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Alle Teenagerzahlen enden auf **-надцать** — sobald man dieses Suffix hört, weiß man, dass es sich um eine Teenagerzahl handelt',
        'Im Gespräch kürzt sich der Stamm oft ab: четыре → четыр- in четырнадцать; пять → пят- in пятнадцать',
        '**Одиннадцать** verdoppelt das н — die am häufigsten falsch geschriebene russische Teenagerzahl',
        'Anders als 1 und 2 ändern sich die Teenagerzahlen **nicht** nach Genus',
      ],
    },
    {
      h2: 'Zehner und Hunderter: Bis 1000 zählen',
      content:
        'Die Zehner (20–90) und Hunderter (100–900) folgen meist regelmäßigen Mustern mit einigen wichtigen Ausnahmen. Die kritischen drei zum Auswendiglernen: **сорок** (40), **девяносто** (90) und **сто** (100) sind vollständig unregelmäßig.',
      subsections: [
        {
          h3: 'Zehner: 20 bis 90',
          content:
            'Die Zehner von 20 bis 80 folgen einem zusammengesetzten Muster. Beachten Sie, dass 40 und 90 vollständig aus dem Muster herausfallen.',
          table: {
            headers: ['Zahl', 'Russisch', 'Transliteration'],
            rows: [
              ['20', 'двадцать', "dvadtsat'"],
              ['30', 'тридцать', "tridtsat'"],
              ['40', 'сорок', 'sorok'],
              ['50', 'пятьдесят', "pyat'desyat"],
              ['60', 'шестьдесят', "shest'desyat"],
              ['70', 'семьдесят', "sem'desyat"],
              ['80', 'восемьдесят', "vosem'desyat"],
              ['90', 'девяносто', 'devyanosto'],
            ],
            caption: 'Russische Zehner 20–90',
            boldColumnIndices: [0, 1],
          },
        },
        {
          h3: 'Hunderter: 100 bis 1000',
          content:
            'Die Hunderter folgen ebenfalls einem Muster — aber 100 ist unregelmäßig (сто), und 200–400 haben eigene Formen, bevor das Muster ab 500–900 wieder einsetzt.',
          table: {
            headers: ['Zahl', 'Russisch', 'Transliteration'],
            rows: [
              ['100', 'сто', 'sto'],
              ['200', 'двести', 'dvesti'],
              ['300', 'триста', 'trista'],
              ['400', 'четыреста', 'chetyresta'],
              ['500', 'пятьсот', "pyat'sot"],
              ['600', 'шестьсот', "shest'sot"],
              ['700', 'семьсот', "sem'sot"],
              ['800', 'восемьсот', "vosem'sot"],
              ['900', 'девятьсот', "devyat'sot"],
              ['1000', 'тысяча', 'tysyacha'],
            ],
            caption: 'Russische Hunderter 100–1000',
            boldColumnIndices: [0, 1],
          },
        },
      ],
      bullets: [
        'Zusammengesetzte Zahlen werden von links nach rechts gelesen: **347 = триста сорок семь**',
        '**Сорок** (40) und **девяносто** (90) sind vollständig unregelmäßig — sie müssen auswendig gelernt werden',
        '**Двести** (200) und **триста / четыреста** (300/400) sind ebenfalls unregelmäßige Formen',
        'Ab 500 folgen die Hunderter dem Muster: Zahl + сот (z. B. пять + сот = пятьсот)',
        '**Тысяча** (1000) ist ein feminines Substantiv und wird entsprechend dekliniert',
      ],
    },
    {
      h2: 'Russische Zahlen und Kasus: Die Grammatikregel, die alles verändert',
      content:
        'Hier stoßen die meisten Lernenden auf eine Hürde. Im Russischen **ändert das Substantiv nach einer Zahl seinen grammatischen Kasus** je nach der Zahl. Das ist keine Option — es betrifft jeden Satz, in dem man etwas zählt.\n\nDie Regel hat drei Ebenen:\n\n**Ebene 1: 1 → Nominativ Singular.** Один стол (ein Tisch), одна книга (ein Buch).\n\n**Ebene 2: 2, 3, 4 → Genitiv Singular.** Два стол**а** (zwei Tische), три книг**и** (drei Bücher).\n\n**Ebene 3: 5 und mehr → Genitiv Plural.** Пять стол**ов** (fünf Tische), десять книг (zehn Bücher).\n\nDie Regel gilt für die **letzte Ziffer** einer zusammengesetzten Zahl — 21 verhält sich wie 1, 22 wie 2, 25 wie 5. Aber 11–14 nehmen immer Ebene 3, unabhängig von ihrer letzten Ziffer.',
      table: {
        headers: ['Zahlentyp', 'Erforderlicher Kasus', 'Beispiel'],
        rows: [
          ['1, 21, 31, 41…', 'Nominativ Singular', 'один стол, двадцать один студент'],
          ['2, 3, 4 / 22, 23, 24…', 'Genitiv Singular', 'два стола, тридцать четыре книги'],
          ['5–20 / 25–30 / 11–14…', 'Genitiv Plural', 'пять столов, одиннадцать студентов'],
        ],
        caption: 'Zahlen und Substantivkasus im Russischen',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Die Regel basiert auf der **letzten Ziffer** zusammengesetzter Zahlen (außer Teenagerzahlen 11–19)',
        '**11–19 nehmen immer den Genitiv Plural** — unabhängig von ihrer letzten Ziffer',
        'Diese Regel gilt für Substantive; Adjektive müssen sich ebenfalls nach dem Kasus des Substantivs richten',
        'Der Genitiv Plural ist eine der unregelmäßigsten Substantivformen im Russischen — früh üben',
        'Preise folgen derselben Regel: **один рубль**, **два рубля**, **пять рублей**',
      ],
    },
    {
      h2: 'Ordinalzahlen auf Russisch: Erst-, Zweit-, Dritt-…',
      content:
        'Ordinalzahlen (erst-, zweit-, dritt-…) sind Adjektive im Russischen — sie **stimmen in Genus, Zahl und Kasus** mit dem Substantiv überein, das sie beschreiben. Hier sind die wichtigsten Ordinalzahlen:',
      table: {
        headers: ['Rang', 'Ordinalzahl (Mask.)', 'Transliteration', 'Femininum'],
        rows: [
          ['1.', 'первый', 'pervyy', 'первая'],
          ['2.', 'второй', 'vtoroy', 'вторая'],
          ['3.', 'третий', 'tretiy', 'третья'],
          ['4.', 'четвёртый', 'chetvyortyy', 'четвёртая'],
          ['5.', 'пятый', 'pyatyy', 'пятая'],
          ['6.', 'шестой', 'shestoy', 'шестая'],
          ['7.', 'седьмой', "sed'moy", 'седьмая'],
          ['8.', 'восьмой', "vos'moy", 'восьмая'],
          ['9.', 'девятый', 'devyatyy', 'девятая'],
          ['10.', 'десятый', 'desyatyy', 'десятая'],
        ],
        caption: 'Russische Ordinalzahlen 1. bis 10.',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        '**Третий** (dritte) ist unregelmäßig — es folgt dem Muster des weichen Adjektivs (третья, третьего…)',
        'Bei zusammengesetzten Ordinalzahlen ändert sich nur das letzte Wort: **двадцать первый** (einundzwanzigste)',
        'Ordinalzahlen werden in Datumsangaben verwendet: **первое января** (der erste Januar)',
        'Stockwerke: **на первом этаже** (im ersten Stock) — Ordinalzahl im Präpositiv',
      ],
    },
    {
      h2: 'Das Alter auf Russisch angeben',
      content:
        'Das Alter auf Russisch wird mit dem Dativ und dem Wort **лет** (Jahre) ausgedrückt. Die Struktur ist: **Мне + [Zahl] + лет / года / год**.\n\nDas Substantiv nach der Zahl folgt derselben Drei-Ebenen-Regel:\n\n- **год** (Nominativ Singular) nach 1: **Мне двадцать один год** (Ich bin 21)\n- **года** (Genitiv Singular) nach 2, 3, 4: **Мне тридцать два года** (Ich bin 32)\n- **лет** (Genitiv Plural) nach 5+: **Мне пятьдесят лет** (Ich bin 50)',
      table: {
        headers: ['Alter', 'Russisch', 'Wörtliche Bedeutung'],
        rows: [
          ['Ich bin 1 (Jahr alt)', 'Мне один год', 'Mir ein Jahr'],
          ['Ich bin 2 (Jahre alt)', 'Мне два года', 'Mir zwei Jahre'],
          ['Ich bin 5 (Jahre alt)', 'Мне пять лет', 'Mir fünf Jahre'],
          ['Ich bin 21 (Jahre alt)', 'Мне двадцать один год', 'Mir einundzwanzig Jahre'],
          ['Ich bin 35 (Jahre alt)', 'Мне тридцать пять лет', 'Mir fünfunddreißig Jahre'],
          ['Wie alt sind Sie?', 'Сколько вам лет?', 'Wie viele Jahre Ihnen?'],
        ],
        caption: 'Altersangaben auf Russisch',
        boldColumnIndices: [0, 1],
      },
    },
    {
      h2: 'Datum und Jahr auf Russisch',
      content:
        'Datumsangaben auf Russisch verwenden **Ordinalzahlen in der Neutrum-Form** (Neutrum, weil das implizierte Wort **число** — Datum/Zahl — ein neutrales Substantiv ist) gefolgt vom Monat im **Genitiv**.\n\n**Heute ist der 5. Juni → Сегодня пятое июня.**\n\nFür Jahresangaben verwendet das Russische die Ordinalzahl mit dem Wort год (Jahr) im Präpositiv: **Im Jahr 2026 → В две тысячи двадцать шестом году.**',
      table: {
        headers: ['Monat', 'Russisch', 'Genitiv (für Datumsangaben)'],
        rows: [
          ['Januar', 'январь', 'января'],
          ['Februar', 'февраль', 'февраля'],
          ['März', 'март', 'марта'],
          ['April', 'апрель', 'апреля'],
          ['Mai', 'май', 'мая'],
          ['Juni', 'июнь', 'июня'],
          ['Juli', 'июль', 'июля'],
          ['August', 'август', 'августа'],
          ['September', 'сентябрь', 'сентября'],
          ['Oktober', 'октябрь', 'октября'],
          ['November', 'ноябрь', 'ноября'],
          ['Dezember', 'декабрь', 'декабря'],
        ],
        caption: 'Russische Monatsnamen mit Genitivform (für Datumsangaben)',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        '**Какое сегодня число?** = Welches Datum ist heute? (wörtlich: welche Zahl ist heute?)',
        '**Сегодня первое января** = Heute ist der erste Januar',
        'Für Geburtstage: **Мой день рождения — второе марта** (Mein Geburtstag ist der 2. März)',
        'Jahresangaben verwenden lange Ordinalzahlen: **в две тысячи двадцать шестом году** (im Jahr 2026)',
        'Umgangssprachlich sagen Russen oft die Kurzform des Jahres: **в двадцать шестом году** für 2026',
      ],
    },
    {
      h2: 'Häufige Fehler mit russischen Zahlen',
      content:
        'Selbst fortgeschrittene Lernende machen vorhersehbare Fehler mit russischen Zahlen. Hier sind die vier häufigsten:',
      bullets: [
        '**Nominativ nach allen Zahlen verwenden.** Der häufigste Fehler: **пять стол** statt **пять столов**. Merken: 2–4 → Genitiv Singular; 5+ → Genitiv Plural.',
        '**Genus bei 1 und 2 vergessen.** **Два книга** statt **две книги** (книга ist feminin, also два → две).',
        '**11–14 wie ihre letzte Ziffer behandeln.** 11 sieht aus, als würde es auf 1 enden, aber es verlangt den Genitiv Plural: **одиннадцать студентов**, nicht одиннадцать студент.',
        '**год / года / лет für Altersangaben verwechseln.** Das Jahreswort folgt derselben Drei-Ebenen-Regel: один год, два года, пять лет.',
        '**Сорок (40) falsch betonen.** Es ist **CO-rok**, der Akzent liegt auf der ersten Silbe.',
      ],
    },
  ],
  faq: [
    {
      question: 'Was ist das russische Wort für „eins"?',
      answer:
        'Das russische Wort für „eins" hat drei Genusformen: **один** (maskulin — один брат), **одна** (feminin — одна сестра) und **одно** (neutral — одно окно). Verwenden Sie die Form, die dem Genus des Substantivs entspricht.',
    },
    {
      question: 'Wie interagieren russische Zahlen mit Substantivkasus?',
      answer:
        'Russische Substantive ändern ihren Kasus nach Zahlen. Die Regel: 1 → Nominativ Singular (один стол); 2, 3, 4 → Genitiv Singular (два стола); 5 und mehr → Genitiv Plural (пять столов). Bei zusammengesetzten Zahlen hängt die Regel von der letzten Ziffer ab — aber 11–14 nehmen immer den Genitiv Plural.',
    },
    {
      question: 'Was ist der Unterschied zwischen два und две?',
      answer:
        '**Два** wird mit maskulinen und neutralen Substantiven verwendet: два брата (zwei Brüder), два окна (zwei Fenster). **Две** wird mit femininen Substantiven verwendet: две сестры (zwei Schwestern), две книги (zwei Bücher). Der Unterschied ist wichtig — два mit einem femininen Substantiv ist ein Grammatikfehler.',
    },
    {
      question: 'Wie sagt man „Ich bin 25 Jahre alt" auf Russisch?',
      answer:
        'Man sagt **Мне двадцать пять лет** (wörtlich: „mir fünfundzwanzig Jahre"). Die Zahl 25 endet auf 5, also ist das Substantiv **лет** (Genitiv Plural). Bei 21 Jahren sagt man **Мне двадцать один год** (год — Nominativ Singular, weil die letzte Ziffer 1 ist).',
    },
    {
      question: 'Wie sagt man „100" auf Russisch?',
      answer:
        '100 auf Russisch ist **сто** — eine unregelmäßige Form. 200 ist **двести**, 300 ist **триста**, 400 ist **четыреста**. Ab 500 folgen die Hunderter einem regelmäßigen Muster: **пятьсот, шестьсот, семьсот, восемьсот, девятьсот**.',
    },
  ],
  conclusion:
    'Russische Zahlen gehören zu jenen Sprachbereichen, die auf einer Liste einfach wirken, aber echte Übung brauchen, um in der gesprochenen Sprache korrekt eingesetzt zu werden. Die gute Nachricht: Das System ist **logisch**. Sobald die Drei-Ebenen-Kasusregel klar ist, man сорок (40), девяносто (90) und сто (100) auswendig gelernt hat und die Genuskongruenz von один / одна / два / две automatisch wird — beherrscht man das gesamte Zahlensystem.\n\nDer wichtigste nächste Schritt ist, **Zahlen in echten Sätzen zu üben** — Gegenstände mit dem richtigen Kasus zählen, Preise nennen, Datumsangaben laut lesen. Dort wird das passive Wissen von Zahlentabellen zu aktivem Russisch.',
  conclusionBullets: [
    'Zahlen 1–10 sind das Fundament — mit ihren Genusvarianten auswendig lernen',
    'Die Teenagerzahlen (11–19) enden alle auf **-надцать** — das Muster einmal lernen',
    'Die drei Unregelmäßigen merken: **сорок** (40), **девяносто** (90), **сто** (100)',
    'Kasusregel anwenden: 1 → Nominativ, 2–4 → Genitiv Singular, 5+ → Genitiv Plural',
    'Ordinalzahlen sind Adjektive und müssen in Genus, Kasus und Zahl übereinstimmen',
  ],
  conclusionOutro:
    'Zahlen sind Ihr Einstieg in das russische grammatische Kasussystem — und dieses Kasussystem ist der Schlüssel zur echten Sprachkompetenz. Jedes Substantiv, Pronomen und Adjektiv ändert sich je nach seiner Rolle im Satz, und **das Beherrschen dieser Deklinationen ist es, was funktionsfähiges Russisch von echter Flüssigkeit unterscheidet**.',
  ctaText: 'Russian Cases with Anna herunterladen — Kostenlos',
  ctaHref: '/',
  internalLinks: [
    {
      href: '/learn/articles/russian-greetings-guide',
      label: 'Russische Begrüßungen: Wie man auf Russisch Hallo sagt (vollständiger Leitfaden)',
    },
    {
      href: '/learn/articles/russian-most-common-words',
      label: '100 häufigste russische Wörter: Die essentielle Vokabelliste für Anfänger',
    },
    {
      href: '/learn/articles/russian-alphabet-cyrillic-guide',
      label: 'Russisches Alphabet: Kyrillisch in 3 einfachen Schritten lernen',
    },
    {
      href: '/learn/articles/russian-cases-explained-beginners-guide',
      label: 'Russische Fälle einfach erklärt: Ein visueller Leitfaden für Anfänger',
    },
    {
      href: '/learn/articles/how-long-learn-russian',
      label: 'Wie lange dauert es, Russisch zu lernen? (Realistischer Zeitplan)',
    },
    { href: '/practice', label: 'Kostenloses russisches Deklinationsquiz (alle sechs Fälle)' },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Russische Zahlen: Auf Russisch zählen (vollständiger Leitfaden 2026)',
    description:
      'Russische Zahlen von 1 bis 1000 lernen: Grundzahlen, Ordinalzahlen, Zahlen mit russischen Fällen, Altersangaben und Datumsangaben — vollständiger Leitfaden mit Tabellen.',
    datePublished: '2026-06-11',
    dateModified: '2026-06-11',
    author: {
      '@type': 'Person',
      name: 'Nathan',
      url: 'https://russiandeclensions.com/',
      image: 'https://russiandeclensions.com/landing-cases/founder-photo.webp',
      description: 'Muttersprachler Französisch; lernt Russisch und teilt, was wirklich funktioniert.',
      worksFor: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://russiandeclensions.com/learn/articles/russian-numbers-guide',
    },
    keywords:
      'russische Zahlen, auf Russisch zählen, Zahlen auf Russisch, russische Grundzahlen, russische Ordinalzahlen, Russisch zählen',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russia-kremlin-moscow.webp',
      width: 1200,
      height: 630,
    },
  },
};
