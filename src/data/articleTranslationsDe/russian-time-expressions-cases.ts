import type { LearnArticle } from '../learnArticles';

/** Deutsche Übersetzung des Artikels `russian-time-expressions-cases` (englische Quelle: `learnArticles.ts`). */
export const russianTimeExpressionsCasesDe: LearnArticle = {
  slug: 'russian-time-expressions-cases',
  introByline: {
    text: '**Geschrieben von Nathan** — Muttersprachler Französisch, der Russisch lernt; ich teile, was für Grammatik, Fälle und tägliche Praxis wirklich funktioniert.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, Gründer von Russian Cases with Anna',
    imageWidth: 256,
    imageHeight: 256,
  },
  title: 'Russische Zeitausdrücke & Fälle: sagen, wann etwas passiert',
  metaTitle: 'Russische Zeitausdrücke & Fälle | Russian Cases with Anna',
  metaDescription:
    'Sagen Sie „wann“ auf Russisch mit dem richtigen Fall: Tageszeiten, Tage, Daten, Dauer und Häufigkeit — plus Übersichtstabelle und 30 Beispiele.',
  keywords: [
    'russische Zeitausdrücke',
    'russische Zeitausdrücke Fälle',
    'Tage Monate Fälle Russisch',
    'в + Akkusativ Zeit',
    'russische Dauer Genitiv',
    'утром вечером Instrumental',
    'wie sagt man wann auf Russisch',
    'russische Häufigkeitsausdrücke',
  ],
  h1: 'Russische Zeitausdrücke & Fälle: sagen, wann etwas passiert',
  heroImage: {
    src: '/articles/russian-time-expressions-cases-header.webp',
    alt: 'Uhr, Kalender und Notizbuch mit russischen Zeitausdrücken утром вечером',
    width: 1280,
    height: 720,
  },
  intro:
    'Im Deutschen ändern „am Montag“, „am Morgen“, „zwei Stunden lang“ und „jede Woche“ die Substantive kaum. Im Russischen ist **Zeit ein Fallproblem**. Dieselbe Idee von „wann“ kann den **Instrumental**, **Akkusativ**, **Genitiv** oder **Präpositional** verlangen — manchmal mit **в**, **по**, **за** oder **в течение**.\n\nDieser Leitfaden ordnet Zeitausdrücke nach dem Fall, den sie auslösen, mit einer Übersichtstabelle und 30 Beispielen. Für die vollständigen Tages-/Monatswortschatzlisten siehe unseren [Leitfaden zu Tagen und Monaten](/learn/articles/russian-days-months-guide).',
  whatYouLearn: [
    'Warum Zeitausdrücke im Russischen Fallentscheidungen erzwingen',
    'Tageszeiten (утром, вечером…) und verwandte Muster',
    'Tage und Daten: Akkusativ vs. Genitiv vs. Präpositional',
    'Dauer und „wie lange“-Strukturen',
    'Häufigkeit: каждый, раз в…, по + Dativ',
    'Eine Übersichtstabelle (Ausdruck → Fall) und 30 Beispiele',
  ],
  leadMagnetCta: {
    title: 'Zeitphrasen bleiben hängen, wenn Fallendungen automatisch sind',
    description:
      'Russian Cases with Anna trainiert alle sechs Fälle in echten Sätzen — inklusive der Endungen in Zeitausdrücken. Kostenlos für iOS und Android.',
    ctaText: 'App herunterladen — Kostenlos',
    ctaHref: '/',
  },
  tableAccentVariant: 'instrumental',
  sections: [
    {
      h2: 'Warum Zeit im Russischen ein Fallproblem ist',
      content:
        'Russisch hat keinen einzigen „Zeitfall“. Stattdessen entsprechen unterschiedliche **Zeitbedeutungen** unterschiedlichen Fällen und Präpositionen:',
      table: {
        headers: ['Zeitbedeutung', 'Typischer Fall', 'Beispiel'],
        rows: [
          ['Uhrzeit / Uhrpunkte', 'Akkusativ (oft)', 'в три часа'],
          ['Wochentage', 'в + Akkusativ', 'в понедельник'],
          ['Monate / Jahre (im…)', 'в + Präpositional', 'в январе / в 2026 году'],
          ['Daten (am 5.)', 'Genitiv', 'пятого мая'],
          ['Tageszeiten (nackte Adverbiale)', 'Instrumental', 'утром, вечером'],
          ['Dauer', 'Akkusativ- / Genitivmuster', 'два часа / в течение часа'],
          [
            'Häufigkeit',
            'Akkusativ / Dativ / feste Rahmen',
            'каждый день / раз в неделю / по понедельникам',
          ],
        ],
        caption: 'Zeitbedeutungen den Fällen zugeordnet',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Lernen Sie **Rahmen**, nicht isolierte Wörter: в + Tag, в + Monat, утром, каждый…',
        'Tage- und Monatsfälle zu vermischen ist die klassische Falle — ausführlich im [Artikel zu Tagen & Monaten](/learn/articles/russian-days-months-guide).',
      ],
    },
    {
      h2: 'Tageszeiten (Instrumental und mehr)',
      content:
        'Das alltägliche Set „am Morgen / Nachmittag / Abend / in der Nacht“ nutzt oft den **Instrumental** als nacktes Adverbial — ohne Präposition.',
      table: {
        headers: ['Russisch', 'Fall / Muster', 'Deutsch'],
        rows: [
          ['утром', 'Instrumental', 'am Morgen'],
          ['днём', 'Instrumental', 'am Nachmittag / tagsüber'],
          ['вечером', 'Instrumental', 'am Abend'],
          ['ночью', 'Instrumental', 'in der Nacht'],
          ['сегодня утром', 'fest + Instrumental', 'heute Morgen'],
          ['завтра вечером', 'fest + Instrumental', 'morgen Abend'],
          ['в три часа', 'в + Akkusativ', 'um drei Uhr'],
          [
            'в половине шестого',
            'в + präpositionale Wendung',
            'um halb sechs (übliche Uhrzeitsprache)',
          ],
        ],
        caption: 'Tageszeiten und Uhrzeit',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        '**Утром / вечером** sind Instrumentalformen von утро / вечер, die als Zeitadverbien dienen.',
        'Uhrzeiten mit **в** nehmen meist den **Akkusativ**: **в два часа**, **в пять минут шестого** (Muster variieren je nach genauer Formulierung).',
        'Zu Zahlenformen in der Uhrzeitsprache siehe den [Zahlenleitfaden](/learn/articles/russian-numbers-guide).',
      ],
    },
    {
      h2: 'Tage und Daten (Akkusativ + Genitiv)',
      content: 'Tage und Kalenderdaten nutzen unterschiedliche Fallsysteme. Halten Sie sie getrennt.',
      subsections: [
        {
          h3: 'Wochentage — в + Akkusativ',
          content:
            '**В понедельник**, **во вторник**, **в среду**, **в пятницу**…\nFeminine Tage zeigen den Akkusativ klar (**среду, пятницу, субботу**). Maskuline Tage sehen oft wie der Nominativ aus.',
        },
        {
          h3: 'Monate „im …“ — в + Präpositional',
          content: '**В январе**, **в июне**, **в декабре**. Verwenden Sie hier nicht das Tagesmuster.',
        },
        {
          h3: 'Daten — Genitiv',
          content:
            '**Сегодня пятое мая.** Wenn man „am fünften Mai“ sagt, nutzt Russisch typischerweise Genitivformen: **пятого мая**, **первого сентября**.\nJahre erscheinen oft als **в 2026 году** (Präpositional) oder in Genitiv-Datumssträngen je nach voller Formel.',
        },
      ],
      bullets: [
        'Wiederkehrende Tage: **по понедельникам** (по + Dativ Plural) = montags.',
        'Vollständige Wortschatztabellen: [Wochentage und Monate](/learn/articles/russian-days-months-guide).',
      ],
    },
    {
      h2: 'Dauerausdrücke',
      content: '„Wie lange?“ ist im Russischen nicht eine einzige Struktur. Das sind die häufigsten Rahmen:',
      table: {
        headers: ['Rahmen', 'Fallmuster', 'Beispiel', 'Deutsch'],
        rows: [
          ['Nackte Dauer', 'Akkusativ Zeitmenge', 'Я ждал час.', 'Ich habe (eine) Stunde gewartet.'],
          ['два / три / четыре + …', 'Genitiv Singular des Substantivs', 'два часа, три дня', 'zwei Stunden, drei Tage'],
          ['пять+ / много…', 'Genitiv Plural', 'пять часов, много лет', 'fünf Stunden, viele Jahre'],
          ['в течение + …', 'Genitiv', 'в течение недели', 'während / für eine Woche'],
          ['за + …', 'Akkusativ (oft „innerhalb“)', 'за два дня', 'innerhalb von zwei Tagen / in zwei Tagen'],
          ['с … до …', 'Genitiv … Genitiv', 'с утра до вечера', 'von morgens bis abends'],
        ],
        caption: 'Dauerrahmen und ihre Fälle',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Zahl + Zeiteinheit folgt denselben Genitivregeln wie andere quantifizierte Substantive — siehe [Genitiv](/learn/articles/russian-genitive-case).',
        '**За** + Akkusativ bedeutet oft „innerhalb einer Spanne“ oder „im Austausch für Zeit“, je nach Kontext — lernen Sie häufige Kollokationen.',
      ],
    },
    {
      h2: 'Häufigkeitsausdrücke',
      content: 'Wie oft etwas passiert, hat ein eigenes kleines Werkzeugset:',
      table: {
        headers: ['Russisch', 'Muster', 'Deutsch'],
        rows: [
          ['каждый день', 'каждый + Akkusativ (Kongruenz)', 'jeden Tag'],
          ['каждую неделю', 'femininer Akkusativ', 'jede Woche'],
          ['каждый месяц / год', 'Kongruenz mit dem Substantiv', 'jeden Monat / jedes Jahr'],
          ['раз в неделю', 'раз в + Akkusativ', 'einmal pro Woche'],
          ['два раза в день', 'раз(а) в + Akk.', 'zweimal am Tag'],
          ['по вечерам', 'по + Dativ Plural', 'abends (gewohnheitsmäßig)'],
          ['по понедельникам', 'по + Dativ Plural', 'montags'],
          ['иногда / часто / редко', 'Adverbien (kein Fall)', 'manchmal / oft / selten'],
        ],
        caption: 'Häufigkeitsausdrücke',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        '**Каждый** kongruiert wie ein Adjektiv mit dem Zeitnomen.',
        '**По + Dativ Plural** ist das Muster „gewohnheitsmäßig an X-Tagen / abends“.',
      ],
    },
    {
      h2: 'Übersichtstabelle: Zeitausdruck → Fall',
      content: 'Ein Bildschirm zum Wiederholen vor dem Sprechen oder Schreiben.',
      table: {
        headers: ['Wenn Sie sagen wollen…', 'Verwenden Sie…', 'Fall'],
        rows: [
          ['am Morgen/Abend', 'утром / вечером', 'Instrumental'],
          ['am Montag', 'в понедельник', 'в + Akkusativ'],
          ['montags (Gewohnheit)', 'по понедельникам', 'по + Dativ Pl.'],
          ['im Januar', 'в январе', 'в + Präpositional'],
          ['am 5. Mai', 'пятого мая', 'Genitiv'],
          ['um 3 Uhr', 'в три часа', 'в + Akkusativ'],
          ['eine Stunde lang', 'час / в течение часа', 'Akk. / в течение + Gen.'],
          ['jeden Tag', 'каждый день', 'каждый + Akk.'],
          ['einmal pro Woche', 'раз в неделю', 'в + Akkusativ'],
          ['von morgens bis abends', 'с утра до вечера', 'с/до + Genitiv'],
        ],
        caption: 'Übersichtstabelle russische Zeit → Fall',
        boldColumnIndices: [0, 2],
      },
    },
    {
      h2: '30 Beispielsätze',
      content:
        '**1–8** Tageszeiten & Uhr · **9–16** Tage/Daten · **17–23** Dauer · **24–30** Häufigkeit.',
      table: {
        headers: ['#', 'Russisch', 'Deutsch'],
        rows: [
          ['1', 'Я встаю рано утром.', 'Ich stehe früh am Morgen auf.'],
          ['2', 'Вечером мы смотрим фильм.', 'Am Abend schauen wir einen Film.'],
          ['3', 'Ночью было холодно.', 'In der Nacht war es kalt.'],
          ['4', 'Встретимся в три часа.', 'Treffen wir uns um drei Uhr.'],
          ['5', 'Занятия начинаются в девять.', 'Der Unterricht beginnt um neun.'],
          ['6', 'Сегодня днём идёт дождь.', 'Heute Nachmittag regnet es.'],
          ['7', 'Завтра утром звони мне.', 'Ruf mich morgen früh an.'],
          ['8', 'Он работает до позднего вечера.', 'Er arbeitet bis spät am Abend.'],
          ['9', 'В понедельник у меня экзамен.', 'Am Montag habe ich eine Prüfung.'],
          ['10', 'Мы едем в пятницу.', 'Wir fahren am Freitag.'],
          ['11', 'По субботам я сплю дольше.', 'Samstags schlafe ich länger.'],
          ['12', 'Я родился в марте.', 'Ich wurde im März geboren.'],
          ['13', 'Свадьба в июне.', 'Die Hochzeit ist im Juni.'],
          ['14', 'Сегодня первое сентября.', 'Heute ist der erste September.'],
          ['15', 'Концерт пятого мая.', 'Das Konzert ist am fünften Mai.'],
          ['16', 'В 2024 году я начал учить русский.', 'Im Jahr 2024 habe ich angefangen, Russisch zu lernen.'],
          ['17', 'Я ждал тебя час.', 'Ich habe eine Stunde auf dich gewartet.'],
          ['18', 'Фильм шёл два часа.', 'Der Film dauerte zwei Stunden.'],
          ['19', 'Мы жили там пять лет.', 'Wir haben fünf Jahre dort gelebt.'],
          ['20', 'В течение недели будет тепло.', 'Im Laufe der Woche wird es warm.'],
          ['21', 'За три дня я прочитал книгу.', 'In drei Tagen habe ich das Buch gelesen.'],
          ['22', 'С утра до вечера на работе.', 'Von morgens bis abends bei der Arbeit.'],
          ['23', 'Отпуск длится две недели.', 'Der Urlaub dauert zwei Wochen.'],
          ['24', 'Я тренируюсь каждый день.', 'Ich trainiere jeden Tag.'],
          ['25', 'Она звонит раз в неделю.', 'Sie ruft einmal pro Woche an.'],
          ['26', 'Мы встречаемся два раза в месяц.', 'Wir treffen uns zweimal im Monat.'],
          ['27', 'По вечерам я читаю.', 'Abends lese ich.'],
          ['28', 'По воскресеньям мы ходим в парк.', 'Sonntags gehen wir in den Park.'],
          ['29', 'Иногда я опаздываю.', 'Manchmal komme ich zu spät.'],
          ['30', 'Редко смотрю телевизор.', 'Ich schaue selten fern.'],
        ],
        caption: '30 Beispiele für Zeitausdrücke',
        boldColumnIndices: [0, 1],
      },
    },
    {
      h2: 'Häufige Fehler bei russischen Zeitausdrücken',
      bullets: [
        '**в январь** ✗ → **в январе** ✓ (Monat = Präpositional).',
        '**в понедельнике** ✗ → **в понедельник** ✓ (Tag = Akkusativ).',
        '**каждый днём** ✗ → **каждый день** ✓.',
        'Deutsches „für/lang“ überall wörtlich übersetzen — Russisch nutzt oft nackte Akkusativdauer (**час**) oder **в течение**.',
        'Genitiv nach Zahlen vergessen: **два часа**, **пять часов**.',
      ],
    },
  ],
  faq: [
    {
      question: 'Welchen Fall verwende ich für Wochentage auf Russisch?',
      answer:
        'Mit в im Sinn von „am [Tag]“ nehmen Sie den Akkusativ: в понедельник, в среду. Für gewohnheitsmäßiges „montags“: по + Dativ Plural: по понедельникам.',
    },
    {
      question: 'Warum ist „im Januar“ nicht derselbe Fall wie „am Montag“?',
      answer:
        'Tage mit в nehmen den Akkusativ; Monate mit в den Präpositional (в январе). Das ist eine feste Verteilung, die Lernende auswendig lernen müssen — kein Logikfehler Ihrer deutschen Intuition.',
    },
    {
      question: 'Wie sage ich „am Morgen“ auf Russisch?',
      answer:
        'Die häufigste Alltagsform ist утром (Instrumental als Adverb). Sie hören auch сегодня утром, завтра утром für „heute/morgen früh“.',
    },
    {
      question: 'Wie drücke ich Dauer wie „zwei Stunden lang“ aus?',
      answer:
        'Oft mit einer Akkusativ-Zeitmenge (два часа) in Sätzen wie Фильм шёл два часа, oder mit в течение + Genitiv (в течение двух часов). Zahlenregeln gelten weiterhin (два часа vs пять часов).',
    },
    {
      question: 'Wie sage ich „jeden Tag“ und „einmal pro Woche“?',
      answer:
        'Каждый день (каждый kongruiert mit день) und раз в неделю (в + Akkusativ). Gewohnheitsmäßige Abende/Tage nutzen auch по + Dativ Plural: по вечерам, по пятницам.',
    },
  ],
  conclusionIntro: 'Zeitgespräch wird leicht, wenn Sie jede Bedeutung an einen Fallrahmen koppeln.',
  conclusionBullets: [
    '**Tageszeiten** → oft Instrumental (утром)',
    '**Tage** → в + Akkusativ; Gewohnheiten → по + Dativ Plural',
    '**Monate** → в + Präpositional; **Daten** → Genitiv',
    '**Dauer / Häufigkeit** → lernen Sie die festen Rahmen',
    'Üben Sie mit der **Übersichtstabelle**, bis die Fallwahl automatisch wirkt',
  ],
  conclusionOutro:
    'Halten Sie die Listen zu [Tagen & Monaten](/learn/articles/russian-days-months-guide) bereit, vertiefen Sie [Akkusativ](/learn/articles/russian-accusative-case), [Genitiv](/learn/articles/russian-genitive-case) und [Instrumental](/learn/articles/russian-instrumental-case), und üben Sie Endungen in unserem kostenlosen [Deklinationsquiz](/practice).',
  internalLinks: [
    {
      href: '/learn/articles/russian-days-months-guide',
      label: 'Wochentage und Monate auf Russisch',
    },
    {
      href: '/learn/articles/russian-numbers-guide',
      label: 'Russischer Zahlenleitfaden',
    },
    {
      href: '/learn/articles/russian-accusative-case',
      label: 'Russischer Akkusativ',
    },
    {
      href: '/learn/articles/russian-genitive-case',
      label: 'Russischer Genitiv',
    },
    {
      href: '/learn/articles/russian-instrumental-case',
      label: 'Russischer Instrumental',
    },
    {
      href: '/learn/articles/russian-prepositional-case',
      label: 'Russischer Präpositional',
    },
    {
      href: '/practice',
      label: 'Kostenloses russisches Deklinationsquiz',
    },
  ],
  ctaText: 'Russische Fälle üben — Kostenlos →',
  ctaHref: '/practice',
  conclusion: '',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Russische Zeitausdrücke & Fälle: sagen, wann etwas passiert',
    description:
      'Sagen Sie „wann“ auf Russisch mit dem richtigen Fall: Tageszeiten, Tage, Daten, Dauer und Häufigkeit — plus Übersichtstabelle und 30 Beispiele.',
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
      '@id': 'https://russiandeclensions.com/learn/articles/russian-time-expressions-cases',
    },
    keywords:
      'russische Zeitausdrücke, russische Zeitausdrücke Fälle, утром вечером Instrumental, в + Akkusativ Zeit, russische Dauer Genitiv',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russian-time-expressions-cases-header.webp',
      width: 1280,
      height: 720,
    },
  },
};
