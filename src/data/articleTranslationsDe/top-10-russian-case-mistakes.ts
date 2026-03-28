import type { LearnArticle } from '../learnArticles';

/** Deutsche Übersetzung des Artikels `top-10-russian-case-mistakes` (EN-Quelle: `learnArticles.ts`). Kyrillische Beispiele zeichengenau. */
export const top10RussianCaseMistakesDe: LearnArticle = {
  slug: 'top-10-russian-case-mistakes',
  title:
    'Top 10 Fehler englischsprachiger Lerner bei russischen Fällen (und wie man sie behebt)',
  metaTitle:
    'Top 10 russische Kasusfehler (englischsprachige Lerner) | Grammatik verbessern | Russian Cases with Anna',
  metaDescription:
    'Die 10 häufigsten Kasusfehler englischsprachiger Lerner — diagnostiziert und behoben. Falsch vs. richtig, warum jeder Fehler entsteht, und wie man ihn dauerhaft vermeidet.',
  keywords: [
    'russische kasusfehler',
    'russische grammatikfehler englisch',
    'warum sind russische fälle schwer',
    'russische fälle verwirrend',
    'häufige russische grammatikfehler',
  ],
  h1: 'Top 10 Fehler englischsprachiger Lerner bei russischen Fällen (und wie man sie behebt)',
  heroImage: {
    src: '/articles/top-russian-case-errors-and-mistakes-by-english-speakers.webp',
    alt:
      'Häufigste Kasusfehler im Russischen bei englischsprachigen Lernern',
    width: 1200,
    height: 630,
  },
  intro:
    'Die häufigsten russischen Grammatikfehler — diagnostiziert und behoben. Dieser Artikel bündelt die **10 häufigsten Kasusfehler** englischsprachiger Lerner — dokumentiert aus Tausenden von Lernerkontakten, Foren und Übungen.\n\nJeder Fehler wird mit falscher Form, richtiger Form und klarer Erklärung von **warum** er passiert und **wie** man ihn dauerhaft vermeidet, dargestellt. Nutzen Sie ihn als Diagnose-Checkliste — wie viele treffen auf Sie zu?',
  whatYouLearn: [
    'Die **10 häufigsten Kasusfehler** mit falsch vs. richtig',
    'Warum jeder Fehler entsteht (Ursachenanalyse)',
    'Wie man jeden Fehler dauerhaft behebt',
    'Schnellübersichtstabelle aller 10 Fehler',
    '**5 praktische Strategien**, um diese Fehler zu vermeiden',
    'Selbsttest zur Einschätzung Ihres Niveaus',
  ],
  tableAccentVariant: 'orange',
  leadMagnetCta: {
    title: 'Beheben Sie Kasusfehler mit gezielten Drills',
    description:
      'Unsere Mobile-App erkennt Ihre Schwächen und trainiert sie bis zur Beherrschung. Intelligente Übungen, Spaced Repetition — für Android und iOS.',
    ctaText: 'App herunterladen und heute noch üben',
    ctaHref: '/',
  },
  internalLinks: [
    {
      href: '/learn/lessons/russian-cases-complete-guide',
      label:
        'Vollständiger Leitfaden zu den russischen Fällen: alle 6 Fälle mit Beispielen',
    },
    {
      href: '/learn/articles/russian-case-endings-cheatsheet',
      label: 'Russische Kasusendungen: der ultimative Spickzettel',
    },
    {
      href: '/learn/articles/how-to-practice-russian-cases',
      label: 'Russische Fälle üben: 5 bewährte Methoden',
    },
  ],
  sections: [
    {
      h2: 'Warum englischsprachige Lerner mit russischen Fällen kämpfen',
      content:
        'Bevor wir zu den Fehlern kommen, lohnt es sich zu verstehen, warum russische Fälle **für Englischsprecher** so schwer sind:',
      bullets: [
        '**Englisch hat fast keine Flexion** — die Wortstellung (nicht Endungen) signalisiert die grammatische Rolle. Russisch nutzt beides.',
        '**Englischlerner haben keine Intuition** für „welcher Fall?“ — die muss von Grund auf aufgebaut werden.',
        '**Russisch hat 6 Fälle**, und jedes Nomen, Adjektiv, Pronomen und Zahlwort dekliniert. Das sind sehr viele Formen.',
        '**Manche russischen Konstruktionen** sind konzeptuell umgekehrt zum Englischen (wie **нравиться** — „gefallen/mögen“).',
        '**Die Unterscheidung belebt/unbelebt** im Akkusativ hat im Englischen kein Äquivalent.',
      ],
    },
    {
      h2: 'Die 10 häufigsten Kasusfehler',
      content:
        'Diese Ursachen zu verstehen hilft. Jetzt die 10 konkreten Fehler, die daraus entstehen.',
      mistakeCards: [
        {
          title: 'FEHLER #1: Nominativ nach НЕТ',
          wrong: 'Нет кот. | У меня нет машина. | Здесь нет сахар.',
          correct: 'Нет кота. | У меня нет машины. | Здесь нет сахара.',
          why: 'Als feste Regel drillen: **нет = „kein X“ = immer Genitiv**. Jedes Mal.',
          fix: 'Russischer Genitiv — Verwendung 2 (Abwesenheit und Negation)',
          fixHref: '/learn/articles/russian-genitive-case',
        },
        {
          title: 'FEHLER #2: Nominativ als direktes Objekt',
          wrong: 'Я вижу кот. | Я читаю книга. | Она любит музыка.',
          correct: 'Я вижу кота. | Я читаю книгу. | Она любит музыку.',
          why: 'Bei transitiven Verben (**вижу**, **читаю**, **люблю**, **покупаю**…) das Objekt prüfen. **Fem. -а → -у.** Mask. belebt → Genitivform. Mask. unbelebt → keine Änderung.',
          fix: 'Russischer Akkusativ — direkte Objekte',
          fixHref: '/learn/articles/russian-accusative-case',
        },
        {
          title: 'FEHLER #3: Belebtes Maskulinum wie Unbelebtes behandelt',
          wrong: 'Я вижу студент. | Я встретил врач. | Полиция ищет преступник.',
          correct: 'Я вижу студента. | Я встретил врача. | Полиция ищет преступника.',
          why: 'Merken: **Akkusativ mask. belebt = Genitivform**. **студент** → **студента**. **врач** → **врача**. Immer fragen: Person oder Tier? Wenn ja, Genitivform als Akkusativ.',
          fix: 'Russischer Akkusativ — belebt vs. unbelebt',
          fixHref: '/learn/articles/russian-accusative-case',
        },
        {
          title: 'FEHLER #4: Я mit НРАВИТЬСЯ statt Мне',
          wrong: 'Я нравится музыка. | Я нравятся эти книги. | Он нравится футбол.',
          correct: 'Мне нравится музыка. | Мне нравятся эти книги. | Ему нравится футбол.',
          why: 'Muster verankern: **[Person im Dativ] + нравится + [Subjekt]**. **нравится** (Sg.) / **нравятся** (Pl.) stimmt mit dem GEFALLENEN überein, nicht mit der Person.',
          fix: 'Russischer Dativ — die Konstruktion НРАВИТЬСЯ',
          fixHref: '/learn/articles/russian-dative-case',
        },
        {
          title: 'FEHLER #5: в + Akkusativ für Ort (statt Präpositional)',
          wrong: 'Я сейчас в школу. | Он живёт в Москву. | Книга в сумку.',
          correct: 'Я сейчас в школе. | Он живёт в Москве. | Книга в сумке.',
          why: 'Vor **в** oder **на** eine Frage: **Ist die Sache/Person schon da (Ort → Präpositional)** oder **bewegt sie sich dorthin (Richtung → Akkusativ)**?',
          fix: 'Russischer Präpositional — В vs. НА',
          fixHref: '/learn/lessons/russian-cases-complete-guide',
        },
        {
          title: 'FEHLER #6: Nominativ für Berufe nach Был/Стала/Работает',
          wrong: 'Она была учитель. | Мой отец был врач. | Он работает инженер.',
          correct: 'Она была учительницей. | Мой отец был врачом. | Он работает инженером.',
          why: 'Regel: **sein in Vergangenheit oder Zukunft + Beruf = Instrumental**. **Стать** + Beruf = Instrumental. **Работать** + Beruf = Instrumental. Nur Präsens erlaubt oft Nominativ.',
          fix: 'Russischer Instrumental — Berufe und Rollen',
          fixHref: '/learn/articles/russian-instrumental-case',
        },
        {
          title: 'FEHLER #7: -ОВ bei allen Nomen im Genitiv Plural',
          wrong: 'много женщинов | много книгов | много окнов | нет девушков',
          correct: 'много женщин | много книг | много окон | нет девушек',
          why: 'Das **Null-Endungsmuster** merken: Feminina auf -а verlieren alles (**женщина** → **женщин**, **книга** → **книг**). Neutra auf -о ebenfalls, mit möglichen flüchtigen Vokalen (**окно** → **окон**, **яблоко** → **яблок**). Sehr häufige Wörter — separat drillen.',
          fix: 'Russischer Genitiv — Genitiv Plural Endungen',
          fixHref: '/learn/articles/russian-genitive-case',
        },
        {
          title: 'FEHLER #8: falscher Fall nach Zahlen',
          wrong: 'пять стол | три книга | много студент',
          correct: 'пять столов | три книги | много студентов',
          why: 'Drei Gruppen: **1 = Nominativ Sg.** | **2/3/4 = Genitiv Sg.** | **5+ = Genitiv Pl.** Bei jeder Zahl im Russischen. Außerdem: **много**, **мало**, **несколько**, **сколько** → Genitiv Plural.',
          fix: 'Russischer Genitiv — Zahlen und Mengen',
          fixHref: '/learn/articles/russian-genitive-case',
        },
        {
          title: 'FEHLER #9: -Е statt -ИИ bei -ий/-ие/-ия',
          wrong: 'в Россие | в здание | на станцие | о путешествие',
          correct: 'в России | в здании | на станции | о путешествии',
          why: 'Regel: **-ий/-ие/-ия → immer -ИИ** im Präpositional (und Dativ bei -ия). Ländernamen auf -ия sind besonders wichtig: **в России**, **в Италии**, **в Германии**, **в Австралии**.',
          fix: 'Russischer Präpositional — die spezielle Endung -ИИ',
          fixHref: '/learn/lessons/russian-cases-complete-guide',
        },
        {
          title: 'FEHLER #10: Akkusativ mit ЗАНИМАТЬСЯ und anderen reflexiven Verben',
          wrong: 'Я занимаюсь музыку. | Она интересуется историю. | Он увлекается футбол.',
          correct: 'Я занимаюсь музыкой. | Она интересуется историей. | Он увлекается футболом.',
          why: 'Diese reflexiven Verben mit **Instrumental** lernen: **заниматься** + Instrumental, **интересоваться** + Instrumental, **гордиться** + Instrumental, **восхищаться** + Instrumental. Dafür ein eigenes Karteikartenset.',
          fix: 'Russischer Instrumental — Verben mit Instrumental',
          fixHref: '/learn/articles/russian-instrumental-case',
        },
      ],
    },
    {
      h2: 'Bonus-Fehler außerhalb der Top 10',
      content:
        'Ehrenvolle Erwähnungen — sehr häufig, etwas weniger universal als die Top 10:',
      bullets: [
        '**Н- bei Pronomen nach Präposition vergessen:** к ему ✗ → к нему ✓ | от ей ✗ → от неё ✓',
        '**из (von innen) und от (von Person) verwechseln:** из врача ✗ → от врача ✓',
        '**Dativ statt Genitiv beim Besitz:** книга другу ✗ → книга друга ✓',
        '**Adjektiv-Kasus vergessen:** Я вижу красивый женщину ✗ → красивую женщину ✓',
        '**Akkusativ statt Präpositional mit о:** о что ты думаешь? ✗ → о чём ты думаешь? ✓',
        '**Flüchtige Vokale im Genitiv Plural vergessen:** ручков ✗ → ручек ✓ | окнов ✗ → окон ✓',
      ],
    },
    {
      h2: 'Schnellübersicht: alle 10 Fehler auf einen Blick',
      content:
        'Nutzen Sie die Tabelle als Checkliste beim Korrekturlesen:',
      table: {
        caption: 'Übersicht der 10 häufigsten Kasusfehler',
        headers: ['#', 'Fehlermuster', 'Falsch', 'Richtig', 'Kernregel'],
        boldColumnIndices: [4],
        rows: [
          ['#1', 'нет + Nominativ', 'нет кот', 'нет кота', 'нет verlangt immer Genitiv'],
          [
            '#2',
            'Direktes Objekt → Nominativ',
            'Я вижу кот',
            'Я вижу кота',
            'Transitive Verben: Akkusativ',
          ],
          [
            '#3',
            'Belebt Akk. = Nominativ',
            'Я вижу студент',
            'Я вижу студента',
            'Mask. belebt Akk. = Genitivform',
          ],
          [
            '#4',
            'я нравится (falsche Person)',
            'Я нравится музыка',
            'Мне нравится музыка',
            'Wer mag → Dativ',
          ],
          [
            '#5',
            'Richtung = Präpositional',
            'Я в школу сейчас',
            'Я в школе сейчас',
            'Statischer Ort → Präpositional',
          ],
          [
            '#6',
            'Berufe nach был/стала',
            'Она была учитель',
            'Она была учителем',
            'Vergangenheit sein + Beruf → Instrumental',
          ],
          [
            '#7',
            'Genitiv Plural → -ов',
            'много женщинов',
            'много женщин',
            'Fem. -а → Nullendung im Gen. Pl.',
          ],
          [
            '#8',
            'Zahlen: überall gleicher Fall',
            'пять стол',
            'пять столов',
            '5+ → Genitiv Plural',
          ],
          [
            '#9',
            '-ий/-ие/-ия → -е',
            'в Россие (falsch)',
            'в России (richtig)',
            'Diese Nomen: -ИИ, nicht -Е',
          ],
          [
            '#10',
            'Заниматься + Akkusativ',
            'заниматься музыку',
            'заниматься музыкой',
            'заниматься verlangt immer Instrumental',
          ],
        ],
      },
    },
    {
      h2: 'So vermeiden Sie diese Fehler: 5 praktische Strategien',
      content: '',
      subsections: [
        {
          h3: '1. Grammatikregeln lernen, nicht nur Vokabeln',
          content:
            'Die meisten Fehler kommen daher, dass Wörter ohne grammatischen Kontext gelernt werden. Zu **нет** gleich lernen: **нет verlangt immer Genitiv**. Zu **заниматься**: **заниматься + Instrumental**. Regeln mit den Wörtern bündeln, die sie steuern.',
        },
        {
          h3: '2. Den „Kasusfragen“-Trick nutzen',
          content:
            'Vor dem Nomen die Kasusfrage laut stellen: **Кого? Что?** (Akkusativ) — **Кому? Чему?** (Dativ) — **Кем? Чем?** (Instrumental). Aktiviert das Kasussystem bewusst und bremst englische Automatismen.',
        },
        {
          h3: '3. Die kniffigsten Muster separat drillen',
          content:
            'Drei Muster verursachen **80 % der Fehler**: **нет** + Genitiv, Akkusativ belebt vs. unbelebt, Richtung (Akkusativ) vs. Ort (Präpositional). Dafür eigene Drills, bis sie automatisch sind.',
        },
        {
          h3: '4. Russisch lesen und Endungen jagen',
          content:
            '**Aktives Lesen** — den Fall jedes Nomens bestimmen — baut Kasusintuition auf. Bei **Я вижу студента** nicht nur die Bedeutung: **студента** = Akkusativ belebt = Genitivform. Mit der Zeit wird es Instinkt.',
        },
        {
          h3: '5. Sofort korrigieren lassen',
          content:
            'Unkorrigierte Kasusfehler **fossilisieren** — werden zur Gewohnheit. App, Tutor oder Tandem für Echtzeit-Feedback nutzen. Je früher korrigiert, desto weniger verfestigt.',
        },
      ],
    },
    {
      h2: 'Selbsttest: Wie viele Fehler machen Sie?',
      content: 'Gehen Sie ehrlich die Top-10-Liste durch:',
      bullets: [
        '**0–2 Fehler:** Fortgeschritten — Bonus-Fehler und Feinschliff',
        '**3–5 Fehler:** Mittelstufe — die 3 häufigsten zuerst drillen',
        '**6–8 Fehler:** Anfänger-Mittelstufe — mit #1, #2, #5 beginnen (am häufigsten)',
        '**9–10 Fehler:** Anfänger — strukturierte App zum systematischen Drillen',
      ],
    },
  ],
  faq: [
    {
      question: 'Warum sind russische Fälle für Englischsprecher so schwer?',
      answer:
        'Weil **Englisch sein Kasussystem vor Jahrhunderten aufgegeben hat**. Modernes Englisch markiert grammatische Rollen fast nur über Wortstellung. Russisch markiert über Endungen. Englischsprecher haben **keine** grammatische Kasusintuition — die muss von Grund auf mit Zeit und bewusster Übung aufgebaut werden.',
    },
    {
      question: 'Wie lange dauert es, russische Fälle zu meistern?',
      answer:
        'Die meisten Lerner erreichen solide Genauigkeit bei den häufigsten Fällen (Nominativ, Akkusativ, Genitiv) in **6–12 Monaten** konsequenten Lernens. Volle Beherrschung aller 6 Fälle inkl. unregelmäßigem Genitiv Plural und Lokativ-Ausnahmen dauert typischerweise **2–4 Jahre** ernsthaften Studiums. Mit fokussierter Übung sind in wenigen Monaten aber schon große Fortschritte bei den häufigsten Mustern möglich.',
    },
    {
      question: 'Was ist der häufigste russische Kasusfehler?',
      answer:
        'Laut Fehleranalyse ist der **häufigste Einzelfehler** der Nominativ nach **нет** — **Нет кот** statt **Нет кота**. Der zweithäufigste ist, das direkte Objekt nicht in den Akkusativ zu setzen (**Я вижу кот** statt **кота**). Diese beiden Fehler tauchen in fast jedem Anfängersatz auf — höchste Priorität zur Korrektur.',
    },
  ],
  conclusionIntro:
    'Russische Fälle sind wirklich schwer — aber die typischen Fehler englischsprachiger Lerner sind **vorhersehbar, diagnostizierbar und behebbar**. Die 10 Fehler in diesem Artikel decken den Großteil der Kasusfehler ab. Der Weg ist klar: eigene Fehler identifizieren, verstehen **warum** sie passieren (meist weil Englisch anders funktioniert), und das richtige Muster drillen, bis es das falsche ersetzt.',
  conclusionBullets: [],
  conclusion:
    'Beheben Sie Kasusfehler mit gezielten Drills in unserer Mobile-App. Intelligente Übungen erkennen Ihre Schwächen und trainieren sie bis zur Beherrschung. Für Android und iOS.',
  ctaText: 'App herunterladen',
  ctaHref: '/',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      'Top 10 Fehler englischsprachiger Lerner bei russischen Fällen (und wie man sie behebt)',
    description:
      'Die 10 häufigsten Kasusfehler englischsprachiger Lerner — diagnostiziert und behoben. Beispiele, Ursachen, Lösungen.',
    datePublished: '2026-03-12',
    dateModified: '2026-03-12',
    author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id':
        'https://russiandeclensions.com/learn/articles/top-10-russian-case-mistakes',
    },
    keywords:
      'russische kasusfehler, russische grammatik englisch, russische fälle schwer, häufige grammatikfehler russisch',
  },
};
