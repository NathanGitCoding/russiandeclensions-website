import type { LearnArticle } from '../learnArticles';

/** Übersetzung DE von `russian-verbs-of-motion` (Quelle EN: `learnArticles.ts`). Kyrillisch unverändert. */
export const russianVerbsOfMotionDe: LearnArticle = {
  slug: 'russian-verbs-of-motion',
  title: 'Russische Bewegungsverben: Der vollständige Leitfaden (идти, ходить, ехать, ездить)',
  metaTitle:
    'Russische Bewegungsverben: идти, ходить, ехать, ездить erklärt | Russian Cases with Anna',
  metaDescription:
    'Russische Bewegungsverben meistern: Unterschied zwischen идти/ходить (zu Fuß) und ехать/ездить (mit Fahrzeug), unidirektionale vs. multidirektionale Verben, Präfixverben und die ausgelösten Kasus.',
  keywords: [
    'russische Bewegungsverben',
    'идти ходить',
    'ехать ездить',
    'unidirektionale Verben Russisch',
    'Bewegungsverben Grammatik Russisch',
    'determinierte indeterminierte Verben Russisch',
  ],
  h1: 'Russische Bewegungsverben: Der vollständige Leitfaden zu идти, ходить, ехать und ездить',
  heroImage: {
    src: '/articles/russian-verbs-of-motion-complete-guide.webp',
    alt: 'Leitfaden zu russischen Bewegungsverben — идти, ходить, ехать, ездить',
    width: 1200,
    height: 630,
  },
  intro:
    'Russische Bewegungsverben gehören zu den faszinierendsten — und am meisten gefürchteten — Bereichen der russischen Grammatik. Anders als im Deutschen, wo man für fast jede Art von Bewegung einfach „gehen" oder „fahren" sagt, **zwingt das Russische Sie dazu, genau anzugeben, wie Sie sich fortbewegen**: zu Fuß oder mit einem Fahrzeug, einseitig oder gewohnheitsmäßig. Ein Fehler hier und ein Muttersprachler versteht Sie zwar, erkennt aber sofort, dass Sie ein Lernender sind.\n\nDie gute Nachricht: Das System ist logisch. Sobald Sie die beiden Schlüsselunterscheidungen verstehen — **unidirektional vs. multidirektional** und **zu Fuß vs. mit Fahrzeug** — folgt alles andere vorhersehbaren Regeln. Dieser Leitfaden erläutert das gesamte System mit klaren Tabellen, echten Beispielen und Verbindungen zum **russischen Kasussystem**, damit Sie diese Verben vom ersten Tag an korrekt verwenden können.',
  whatYouLearn: [
    'Der grundlegende Unterschied zwischen **идти** und **ходить** (und wann man welches verwendet)',
    'Der grundlegende Unterschied zwischen **ехать** und **ездить** (Fahrzeugbewegung)',
    'Die 14 wichtigsten russischen Bewegungsverben mit ihren Paaren',
    'Wie Präfixe Bewegungsverben transformieren (приходить, уходить, приезжать…)',
    'Welche russischen Kasus Bewegungsverben auslösen — und warum',
  ],
  leadMagnetCta: {
    title: 'Russische Kasus mit Bewegungsverben üben',
    description:
      'Russian Cases with Anna ist die einzige App, die sich auf russische Deklinationen und Kasus spezialisiert hat. Bewegungsverben lösen Akkusativ und Dativ aus — unsere interaktiven Quizze helfen Ihnen, diese zu automatisieren. Kostenloser Download auf iOS und Android.',
    ctaText: 'App herunterladen — Kostenlos',
    ctaHref: '/',
  },
  sections: [
    {
      h2: 'Was russische Bewegungsverben einzigartig macht',
      content:
        'Das Deutsche hat ein Allzweckwort für Bewegung: „gehen" oder „fahren". Man sagt „Ich gehe zur Schule", „Ich fahre täglich zur Arbeit" — immer das gleiche Verb, der Kontext liefert den Rest.\n\nDas Russische funktioniert anders. Es besitzt eine eigene Klasse von **Bewegungsverben** (глаголы движения), die zwei Informationen enkodieren, die das Deutsche ignoriert:\n\n1. **Bewegungsrichtung:** Handelt es sich um eine einmalige, gerichtete Fahrt (ich gehe jetzt genau dorthin) — oder um eine allgemeine, gewohnheitsmäßige oder Hin-und-Her-Bewegung (ich gehe dort regelmäßig hin)?\n2. **Transportmittel:** Bewege ich mich **zu Fuß** (идти / ходить) oder **mit einem Fahrzeug** (ехать / ездить)?',
      subsections: [
        {
          h3: 'Unidirektional vs. multidirektional: Das Kernkonzept',
          content:
            '**Unidirektionale Verben** (auch determinierte genannt) beschreiben eine Bewegung in eine bestimmte Richtung, in einem bestimmten Moment. Stellen Sie sich einen geraden Pfeil vor, der irgendwohin zeigt.\n\n**Multidirektionale Verben** (auch indeterminierte genannt) beschreiben Bewegungen, die gewohnheitsmäßig, wiederholt, hin und zurück oder allgemein sind — keine einzelne, fokussierte Fahrt. Stellen Sie sich ein Zickzack oder einen Kreis vor.',
          bullets: [
            '**Unidirektional (идти, ехать):** Ich gehe *gerade jetzt* zur Arbeit / Sie geht auf uns zu / Der Zug fährt ab',
            '**Multidirektional (ходить, ездить):** Ich gehe jeden Tag zur Arbeit / Sie geht oft im Park spazieren / Er hat früher viel gereist',
          ],
        },
        {
          h3: 'Der schnelle Test',
          content:
            'Wenn Sie ein russisches Bewegungsverb verwenden möchten, stellen Sie sich zwei Fragen:\n\n**Frage 1:** Beschreibe ich eine Bewegung, die gerade in eine Richtung stattfindet, oder eine gewohnheitsmäßige/wiederholte/Hin-und-Her-Bewegung?\n• Jetzt, eine Richtung → verwenden Sie **unidirektional** (идти / ехать)\n• Gewohnheitsmäßig, wiederholt oder allgemein → verwenden Sie **multidirektional** (ходить / ездить)\n\n**Frage 2:** Bewege ich mich zu Fuß oder mit einem Fahrzeug (Auto, Bus, Zug, Fahrrad…)?\n• Zu Fuß → идти / ходить\n• Mit Fahrzeug → ехать / ездить',
        },
      ],
    },
    {
      h2: 'Die zwei Kernverbpaare: Zu Fuß und mit Fahrzeug',
      content:
        'Die wichtigsten Verbpaare sind **идти/ходить** (Bewegung zu Fuß) und **ехать/ездить** (Bewegung mit Fahrzeug). Hier ein Vergleich:',
      table: {
        headers: ['', 'Zu Fuß', 'Mit Fahrzeug'],
        rows: [
          ['**Unidirektional**', 'идти', 'ехать'],
          ['**Multidirektional**', 'ходить', 'ездить'],
        ],
        caption: 'Die vier grundlegenden russischen Bewegungsverben',
        boldColumnIndices: [0],
      },
      subsections: [
        {
          h3: 'идти — gehen (zu Fuß, gerade jetzt, eine Richtung)',
          content:
            'Verwenden Sie **идти**, wenn Sie eine Fußbewegung beschreiben, die gerade jetzt stattfindet, in eine bestimmte Richtung, als einzelne Einwegfahrt.',
          bullets: [
            '**Я иду в магазин.** — Ich gehe in den Laden. (gerade jetzt, zu Fuß)',
            '**Она идёт к нам.** — Sie kommt auf uns zu. (in Bewegung, zu Fuß)',
            '**Поезд идёт в Москву.** — Der Zug fährt nach Moskau. (gerichtet — sogar Züge „gehen" auf Russisch!)',
            '**Дети идут в школу.** — Die Kinder gehen in die Schule. (gerade jetzt, zu Fuß)',
          ],
        },
        {
          h3: 'ходить — gehen (zu Fuß, gewohnheitsmäßig oder hin und zurück)',
          content:
            'Verwenden Sie **ходить**, wenn die Fußbewegung gewohnheitsmäßig, wiederholt oder die allgemeine Fähigkeit/Tendenz beschreibt, irgendwohin zu gehen.',
          bullets: [
            '**Я хожу в спортзал каждый день.** — Ich gehe jeden Tag ins Fitnessstudio. (gewohnheitsmäßig)',
            '**Мы часто ходим в кино.** — Wir gehen oft ins Kino. (wiederholt)',
            '**Вчера я ходил в банк.** — Gestern bin ich zur Bank gegangen (und zurückgekommen). (abgeschlossener Hin-und-Her-Trip in der Vergangenheit)',
            '**Она хорошо ходит.** — Sie geht gut. (allgemeine Fähigkeit)',
          ],
        },
        {
          h3: 'ехать — fahren (mit Fahrzeug, gerade jetzt, eine Richtung)',
          content:
            'Verwenden Sie **ехать**, wenn eine Fahrzeugbewegung (Auto, Zug, Bus, Fahrrad…) gerade jetzt in eine bestimmte Richtung stattfindet.',
          bullets: [
            '**Мы едем в Москву.** — Wir fahren nach Moskau. (mit Fahrzeug, gerade jetzt)',
            '**Автобус едет медленно.** — Der Bus fährt langsam. (in Bewegung)',
            '**Я еду на такси.** — Ich fahre mit dem Taxi. (bestimmte Fahrt, gerade jetzt)',
            '**Машина едет быстро.** — Das Auto fährt schnell. (gerichtete Bewegung)',
          ],
        },
        {
          h3: 'ездить — fahren (mit Fahrzeug, gewohnheitsmäßig oder hin und zurück)',
          content:
            'Verwenden Sie **ездить**, wenn Fahrzeugreisen gewohnheitsmäßig, wiederholt oder allgemein sind.',
          bullets: [
            '**Я езжу на работу на метро.** — Ich fahre täglich mit der U-Bahn zur Arbeit. (tägliche Gewohnheit)',
            '**Она часто ездит за границу.** — Sie reist oft ins Ausland. (wiederholt)',
            '**Вчера мы ездили на дачу.** — Gestern sind wir zur Datsche gefahren (und zurückgekommen). (Hin-und-Her in der Vergangenheit)',
            '**Он умеет ездить на велосипеде.** — Er kann Fahrrad fahren. (Fähigkeit)',
          ],
        },
        {
          h3: 'Die vollständige Tabelle: 14 Bewegungsverben',
          content:
            'Das Russische hat tatsächlich 14 Bewegungsverbpaare — jedes enkodiert eine andere Art von Bewegung. Die häufigsten sind unten aufgeführt.',
          table: {
            headers: ['Unidirektional', 'Multidirektional', 'Bedeutung'],
            rows: [
              ['идти', 'ходить', 'zu Fuß gehen'],
              ['ехать', 'ездить', 'mit Fahrzeug fahren'],
              ['бежать', 'бегать', 'laufen'],
              ['лететь', 'летать', 'fliegen'],
              ['плыть', 'плавать', 'schwimmen / segeln'],
              ['нести', 'носить', 'tragen (zu Fuß)'],
              ['везти', 'возить', 'transportieren (mit Fahrzeug)'],
              ['вести', 'водить', 'führen / fahren (jmdn.)'],
              ['ползти', 'ползать', 'kriechen'],
              ['лезть', 'лазить', 'klettern'],
            ],
            caption: 'Die häufigsten russischen Bewegungsverbpaare',
            boldColumnIndices: [0, 1],
          },
        },
      ],
    },
    {
      h2: 'Russische Bewegungsverben mit Präfixen: Die nächste Stufe',
      content:
        'Sobald man einem Bewegungsverb ein **Präfix** hinzufügt, passiert etwas Wichtiges: Das Verb **verliert die unidirektionale/multidirektionale Unterscheidung** und wird stattdessen ein gewöhnliches imperfektives/perfektives Paar. Präfixe geben eine bestimmte Art oder Richtung der Bewegung an und werden immer an die multidirektionale Basis angehängt.',
      subsections: [
        {
          h3: 'Wie Präfixe funktionieren',
          content:
            'Nehmen wir das Präfix **при-** (bedeutet „Ankunft, Kommen zu"). Es wird an beide Formen angehängt:\n\n• **при-** + ходить → **приходить** (kommen/ankommen regelmäßig — imperfektiv)\n• **при-** + йти → **прийти** (kommen/ankommen — perfektiv)\n\nHinweis: **идти** ändert seine Schreibweise mit Präfixen (→ -йти). **ехать** wird zu **-езжать** (imperfektiv) und **-ехать** (perfektiv).',
          bullets: [
            '**приходить / прийти** — ankommen (zu Fuß)',
            '**уходить / уйти** — weggehen, abreisen (zu Fuß)',
            '**выходить / выйти** — hinausgehen, austreten (zu Fuß)',
            '**входить / войти** — hineingehen, eintreten (zu Fuß)',
            '**переходить / перейти** — überqueren, wechseln (zu Fuß)',
            '**приезжать / приехать** — ankommen (mit Fahrzeug)',
            '**уезжать / уехать** — abreisen (mit Fahrzeug)',
            '**выезжать / выехать** — herausfahren (mit Fahrzeug)',
          ],
        },
        {
          h3: 'Die häufigsten Präfixe',
          content:
            'Hier sind die wichtigsten Präfixe, die Sie täglich begegnen werden, mit ihren Bedeutungen:',
          table: {
            headers: ['Präfix', 'Bedeutung', 'Beispiel (zu Fuß)', 'Beispiel (mit Fahrzeug)'],
            rows: [
              ['при-', 'Ankunft', 'приходить (kommen)', 'приезжать (ankommen)'],
              ['у-', 'Abreise', 'уходить (weggehen)', 'уезжать (abreisen)'],
              ['вы-', 'Ausgang', 'выходить (herausgehen)', 'выезжать (herausfahren)'],
              ['в-/вой-', 'Eintritt', 'входить (eintreten)', 'въезжать (einfahren)'],
              [
                'пере-',
                'Überquerung',
                'переходить (überqueren)',
                'переезжать (überfahren/umziehen)',
              ],
              ['под-', 'Annäherung', 'подходить (sich nähern)', 'подъезжать (heranfahren)'],
              ['от-', 'Entfernung', 'отходить (zurücktreten)', 'отъезжать (wegfahren)'],
              ['за-', 'Vorbeigehen', 'заходить (vorbeikommen)', 'заезжать (vorbeifahren)'],
              ['до-', 'Erreichen', 'доходить (erreichen)', 'доезжать (herfahren bis)'],
            ],
            caption: 'Präfixe russischer Bewegungsverben — zu Fuß vs. mit Fahrzeug',
            boldColumnIndices: [0],
          },
        },
        {
          h3: 'Beispiele in echten Sätzen',
          content:
            'So funktionieren Bewegungsverben mit Präfixen im Kontext. Beachten Sie, wie das Präfix die Bewegungsrichtung völlig eindeutig macht:',
          bullets: [
            '**Он пришёл домой в 6 часов.** — Er kam um 6 Uhr nach Hause. (прийти — zu Fuß angekommen, perfektiv)',
            '**Она ушла из офиса.** — Sie hat das Büro verlassen. (уйти — zu Fuß weggegangen, perfektiv)',
            '**Они приехали из Лондона.** — Sie sind aus London angekommen. (приехать — mit Fahrzeug angekommen, perfektiv)',
            '**Я выхожу из дома каждое утро.** — Ich verlasse jeden Morgen das Haus. (выходить — gewohnheitsmäßig, imperfektiv)',
            '**Когда ты придёшь?** — Wann wirst du kommen? (прийти — Zukunft, perfektiv)',
          ],
        },
      ],
    },
    {
      h2: 'Bewegungsverben und russische Kasus',
      content:
        'Russische Bewegungsverben sind direkt mit dem **grammatischen Kasussystem** verbunden. Der benötigte Kasus hängt davon ab, ob Sie über ein **Ziel (wohin gehen Sie?)** oder einen **Ort (wo sind Sie?)** sprechen.',
      subsections: [
        {
          h3: 'Richtung (куда?) → Akkusativ',
          content:
            'Bei der Beantwortung der Frage **куда?** (wohin?) verwendet das Russische den **Akkusativ** nach Bewegungsverben. Dies gilt mit den Präpositionen **в** und **на** zur Angabe der Richtung.',
          bullets: [
            '**Я иду в школу.** — Ich gehe in die Schule. (школу = Akkusativ von школа)',
            '**Мы едем на работу.** — Wir fahren zur Arbeit. (работу = Akkusativ von работа)',
            '**Она идёт в магазин.** — Sie geht in den Laden. (магазин = Akkusativ)',
            '**Он едет на вокзал.** — Er fährt zum Bahnhof. (вокзал = Akkusativ)',
          ],
        },
        {
          h3: 'Ort (где?) → Präpositional',
          content:
            'Bei der Beantwortung der Frage **где?** (wo?) verwendet das Russische den **Präpositional** mit denselben Präpositionen **в** und **на** — diesmal zeigen sie aber einen statischen Ort an, keine Bewegung.',
          bullets: [
            '**Я учусь в школе.** — Ich lerne in der Schule. (школе = Präpositional von школа)',
            '**Мы работаем на заводе.** — Wir arbeiten in der Fabrik. (заводе = Präpositional)',
            '**Она живёт в Москве.** — Sie lebt in Moskau. (Москве = Präpositional)',
          ],
        },
        {
          h3: 'Der Richtungs-Orts-Gegensatz',
          content:
            'Dieser Kontrast — **Akkusativ für Richtung, Präpositional für Ort** — ist die wichtigste Kasusregel im Zusammenhang mit Bewegungsverben:',
          table: {
            headers: ['Frage', 'Kasus', 'Präposition', 'Beispiel'],
            rows: [
              ['куда? (wohin?)', 'Akkusativ', 'в / на', 'Я иду **в школу**'],
              ['где? (wo?)', 'Präpositional', 'в / на', 'Я нахожусь **в школе**'],
            ],
            caption: 'Richtung vs. Ort: Akkusativ vs. Präpositional',
            boldColumnIndices: [1],
          },
        },
        {
          h3: 'Dativ mit к (auf eine Person zu)',
          content:
            'Wenn man sich **auf eine Person zu** bewegt (im Gegensatz zu einem Ort), verwendet das Russische die Präposition **к** + **Dativ**.',
          bullets: [
            '**Я иду к врачу.** — Ich gehe zum Arzt. (врачу = Dativ von врач)',
            '**Она едет к маме.** — Sie fährt zu ihrer Mutter. (маме = Dativ von мама)',
            '**Мы идём к другу.** — Wir gehen zu einem Freund. (другу = Dativ von друг)',
          ],
        },
      ],
      bullets: [
        '**куда?** (wohin?) → **в/на + Akkusativ** nach Richtungsverben',
        '**где?** (wo?) → **в/на + Präpositional** für statischen Ort',
        '**к кому?** (auf wen zu?) → **к + Dativ** wenn man sich auf eine Person zubewegt',
        'Merken Sie sich dieses Trio und Sie eliminieren 80 % der Kasusfehler bei Bewegungsverben',
      ],
    },
  ],
  faq: [
    {
      question: 'Was ist der Unterschied zwischen идти und ходить?',
      answer:
        '**идти** ist unidirektional: Es beschreibt eine Fußbewegung, die gerade jetzt, in eine bestimmte Richtung stattfindet (z. B. „Ich gehe gerade in den Laden"). **ходить** ist multidirektional: Es beschreibt gewohnheitsmäßige, wiederholte oder Hin-und-Her-Fußbewegungen (z. B. „Ich gehe jeden Tag in den Laden" oder „Gestern bin ich in den Laden gegangen und zurückgekommen"). Die Schlüsselfrage: Beschreibe ich gerade eine einzelne gerichtete Fahrt oder ein allgemeines Muster?',
    },
    {
      question: 'Was ist der Unterschied zwischen ехать und ездить?',
      answer:
        '**ехать** ist das unidirektionale Verb für Fahrzeugbewegungen — es beschreibt eine bestimmte gerade stattfindende Fahrt (z. B. „Wir fahren gerade mit dem Zug nach Moskau"). **ездить** ist das multidirektionale Verb — es beschreibt gewohnheitsmäßige oder wiederholte Fahrzeugbewegungen (z. B. „Ich fahre täglich mit der U-Bahn zur Arbeit" oder „Sie reist oft ins Ausland"). Die Logik ist identisch mit идти vs. ходить, aber für Fahrzeugbewegungen.',
    },
    {
      question: 'Wann verwenden Bewegungsverben den Akkusativ?',
      answer:
        'Bewegungsverben verwenden den **Akkusativ**, wenn ein **Ziel** ausgedrückt wird (куда? — wohin?). Mit den Präpositionen **в** und **на** zur Angabe der Richtung steht das folgende Nomen im Akkusativ: „Я иду **в школу**" (Ich gehe in die Schule), „Мы едем **на работу**" (Wir fahren zur Arbeit). Dies steht im Kontrast zum Präpositional, der für den statischen Ort verwendet wird.',
    },
    {
      question: 'Wie funktionieren Bewegungsverben mit Präfixen?',
      answer:
        'Wenn man einem Bewegungsverb ein Präfix hinzufügt, verschiebt sich der Fokus vom Bewegungstyp (Hin-und-Her vs. gewohnheitsmäßig) auf die **Richtung oder Art** der Bewegung. Das Präfix wird an beide Formen (imperfektiv und perfektiv) angehängt. Beispiel: **при-** (Ankunft) + ходить/идти = **приходить** (imperfektiv: regelmäßig kommen) / **прийти** (perfektiv: einmal ankommen). Häufige Präfixe: при- (Ankunft), у- (Abreise), вы- (Ausgang), в- (Eintritt), пере- (Überquerung).',
    },
  ],
  conclusion: '',
  conclusionIntro:
    'Russische Bewegungsverben sind ein leistungsstarkes System, das Ihr Russisch — einmal verstanden — deutlich präziser und natürlicher macht. Hier die wichtigste Zusammenfassung:',
  conclusionBullets: [
    '**идти** = zu Fuß, jetzt, eine Richtung | **ходить** = zu Fuß, gewohnheitsmäßig oder hin und zurück',
    '**ехать** = mit Fahrzeug, jetzt, eine Richtung | **ездить** = mit Fahrzeug, gewohnheitsmäßig oder hin und zurück',
    'Mit Präfixen (при-, у-, вы-, в-…) wird die unidirektionale/multidirektionale Unterscheidung zu imperfektiv/perfektiv',
    'Richtung (куда?) → Akkusativ; Ort (где?) → Präpositional; Auf eine Person zu (к кому?) → Dativ',
    'Üben Sie mit echten Sätzen — Bewegungsverben festigen sich im Kontext viel schneller als mit Tabellen allein',
  ],
  conclusionOutro:
    'Bereit, russische Kasus zu üben, die durch Bewegungsverben ausgelöst werden? Unser kostenloses interaktives Quiz unter russiandeclensions.com/practice ermöglicht es Ihnen, Akkusativ, Dativ und Präpositional mit sofortigem Feedback zu üben.',
  internalLinks: [
    { href: '/practice', label: 'Kostenloses Russisch-Deklinationsquiz — alle 6 Kasus üben' },
    {
      href: '/learn/articles/russian-accusative-case',
      label: 'Leitfaden zum russischen Akkusativ',
    },
    { href: '/learn/articles/russian-dative-case', label: 'Leitfaden zum russischen Dativ' },
    {
      href: '/learn/articles/russian-prepositional-case',
      label: 'Leitfaden zum russischen Präpositional',
    },
    {
      href: '/learn/articles/russian-prepositions-and-cases',
      label: 'Russische Präpositionen und Kasus: Vollständige Referenz',
    },
    {
      href: '/learn/articles/how-to-practice-russian-cases',
      label: 'Russische Kasus üben: 5 bewährte Methoden',
    },
  ],
  ctaText: 'Russische Kasus üben — Kostenlos →',
  ctaHref: '/practice',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      'Russische Bewegungsverben: Der vollständige Leitfaden zu идти, ходить, ехать und ездить',
    description:
      'Russische Bewegungsverben meistern: идти/ходить vs. ехать/ездить, die unidirektionale/multidirektionale Unterscheidung, Präfixverben und ausgelöste Kasus.',
    datePublished: '2026-05-18',
    dateModified: '2026-05-18',
    author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://russiandeclensions.com/learn/articles/russian-verbs-of-motion',
    },
    keywords:
      'russische Bewegungsverben, идти ходить, ехать ездить, unidirektionale Verben Russisch, determinierte indeterminierte Verben Russisch',
  },
};
