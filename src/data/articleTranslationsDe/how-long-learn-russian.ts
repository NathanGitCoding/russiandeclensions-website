import type { LearnArticle } from '../learnArticles';

/** Deutsche Übersetzung von `how-long-learn-russian` (EN-Quelle: `learnArticles.ts`). Kyrillisch unverändert. */
export const howLongLearnRussianDe: LearnArticle = {
  slug: 'how-long-learn-russian',
  title:
    'Wie lange braucht man, um Russisch zu lernen? (realistischer Zeitplan)',
  metaTitle:
    'Wie lange dauert Russisch lernen? Realistischer Zeitplan nach Niveau | Russian Cases with Anna',
  metaDescription:
    'Realistischer Zeitplan Russisch A1–C2: Stundenbedarf, Einflussfaktoren, konkreter Lernplan. FSI-Daten und Lernerfahrung.',
  keywords: [
    'wie lange Russisch lernen',
    'Russisch lernen Dauer',
    'Russisch Zeitplan CEFR',
    'Russisch fließend Zeit',
    'Stunden Russisch FSI',
    'FSI Russisch schwierig',
  ],
  h1: 'Wie lange braucht man, um Russisch zu lernen? Ein realistischer Zeitplan',
  intro:
    '„Wie lange brauche ich für Russisch?“ — die erste Frage aller Lerner, und die ehrliche Antwort: **es kommt darauf an**. Das US Foreign Service Institute (FSI) stuft Russisch als **Kategorie IV** ein und schätzt **1.100 Unterrichtsstunden** bis berufliche Kompetenz. Diese Zahl ist ein Benchmark, erzählt aber nicht alles.\n\nDein Zeitplan hängt von Muttersprache, täglicher Lernzeit, Methoden, Motivation und davon ab, was „Russisch lernen“ für dich bedeutet. In Moskau essen bestellen? Sechs Monate. Dostojewski im Original? Mehrere Jahre. Realistisch aufgeschlüsselt:',
  whatYouLearn: [
    'Offizielle FSI-Schätzungen vs. echte Zeiträume',
    'Stunden pro CEFR-Niveau (A1 → C2)',
    '7 Faktoren, die beschleunigen oder bremsen',
    'Konkreter Tagesplan mit empfohlenen Tools',
  ],
  sections: [
    {
      h2: 'Was das FSI sagt (und was es wirklich bedeutet)',
      content:
        'Das **Foreign Service Institute** teilt Sprachen für englischsprachige Lerner in 4 Schwierigkeitsstufen. Russisch ist **Kategorie IV** („super-schwer“), mit Griechisch, Polnisch und Türkisch. Schätzung: **1.100 Stunden intensiven Unterrichts** bis „Professional Working Proficiency“ (etwa CEFR B2/C1).\n\nWas die FSI-Zahlen verschweigen: Diese 1.100 h setzen **Vollzeit-Immersion** (~25 h/Woche Klasse + Hausaufgaben), erfahrene Lehrkräfte und strukturierte diplomatische Programme voraus. Viele Selbstlernende lernen 30–60 Minuten täglich — die Rechnung ändert sich stark.',
      table: {
        headers: [
          'Tempo',
          'Std./Tag',
          'Zeit bis ~1.100 h',
          'Realistisches Niveau',
        ],
        rows: [
          ['FSI intensiv', '5–6 h', '~44 Wo. (10 Mon.)', 'B2/C1'],
          ['Fokussiertes Selbststudium', '2 h', '~18 Mon.', 'B1/B2'],
          ['Gelegenheitslerner', '30 Min.', '~6 Jahre', 'A2/B1'],
          ['Nur Wochenende', '3 h/Wo.', '~7 Jahre', 'A2'],
        ],
        caption: 'Geschätzte Zeiträume nach FSI-Benchmark 1.100 Stunden',
      },
    },
    {
      h2: 'Zeitplan nach CEFR-Niveau',
      content:
        'Besser die Reise in CEFR-Stufen teilen. Jedes Niveau hat klare Meilensteine.',
      subsections: [
        {
          h3: 'A1 — Überlebensrussisch (60–150 h)',
          content:
            'Vorstellung, Essen bestellen, Weg fragen, einfache Geschäfte. Kyrillisch, Präsens gängiger Verben, **Nominativ und Akkusativ**. Meist **2–4 Monate** bei 30 Min./Tag.',
          bullets: [
            'Kyrillisch sicher lesen und schreiben',
            'Nominativ und Akkusativ korrekt',
            'Begrüßungen, Zahlen, einfache Fragen',
            'Kurze Texte mit Wörterbuch verstehen',
          ],
        },
        {
          h3: 'A2 — Touristenniveau (150–300 h)',
          content:
            'Alltag: Einkaufen, Verkehr, einfache Gespräche. **Genitiv und Präpositional**, Vergangenheit. **4–8 Monate** bei konstantem Lernen.',
          bullets: [
            '4 von 6 Fällen (Nom., Akk., Gen., Präp.)',
            'Vergangenheit und Zukunft',
            'Kern einfacher Gespräche verstehen',
            'Kurze Nachrichten schreiben',
          ],
        },
        {
          h3: 'B1 — Gesprächsfähig (300–500 h)',
          content:
            'Echte Gespräche zu vertrauten Themen, Hauptpunkt klarer Sprache, zusammenhängende Texte. **Alle 6 Fälle**, Verb-aspekte, Bewegungsverben. **8–14 Monate** fokussiertes Lernen.',
          bullets: [
            'Alle 6 Fälle Singular und Plural',
            'Perfektiv vs. imperfektiv',
            'Russische Serien mit Untertiteln folgen',
            'Meinungen und Begründungen',
          ],
        },
        {
          h3: 'B2 — berufliches Arbeiten (500–800 h)',
          content:
            'Komplexe Diskussionen, Nachrichten, adaptierte Literatur, ausführliche Texte. Kasus meist **automatisch**. **14–24 Monate** ernsthaftes Lernen.',
          bullets: [
            'Kasusendungen größtenteils automatisch',
            'Zeitungsartikel ohne Wörterbuch',
            'Muttersprachler in normalem Tempo (meiste Themen)',
            'Berufliche E-Mails und Aufsätze',
          ],
        },
        {
          h3: 'C1/C2 — fortgeschritten / nahezu muttersprachlich (800–1.500+ h)',
          content:
            'Fast alles verstehen, fließend zu jedem Thema, Kultur und Humor, Literatur im Original. **2–4+ Jahre** mit idealerweise Aufenthalt in russischsprachigem Land.',
          bullets: [
            'Umgangssprache, Slang, regionale Akzente',
            'Tschechow, Bulgakow oder Pelevin im Original',
            'Stilistische Nuancen beim Schreiben',
            'TORFL-III/IV bestehen',
          ],
        },
      ],
    },
    {
      h2: '7 Faktoren für deine Lerngeschwindigkeit',
      content: 'Zwei Lerner am selben Tag können B1 Monate auseinander erreichen:',
      subsections: [
        {
          h3: '1. Muttersprache',
          content:
            'Polnisch, Tschechisch, Ukrainisch: Russisch deutlich einfacher. Deutsch oder Latein helfen bei Kasus. Englischsprachige starten am weitesten hinten.',
        },
        {
          h3: '2. Tägliche Zeit (Konstanz > Intensität)',
          content:
            '**30 Minuten täglich schlagen 3 Stunden am Wochenende.** Sprachenlernen braucht tägliche Exposition.',
        },
        {
          h3: '3. Methoden',
          content:
            'Passiv reicht nicht. **Aktives Abrufen** ist 3–5× effektiver. Quiz (z. B. **kostenloses Deklinations-Quiz** auf russiandeclensions.com) nutzen dieses Prinzip.',
        },
        {
          h3: '4. Grammatik zuerst vs. Vokabular zuerst',
          content:
            'Ohne Grammatik keine korrekten Sätze. **Grammatik schaltet alles frei** — besonders Kasus.',
        },
        {
          h3: '5. Immersion',
          content:
            'Leben in Russland kann den Zeitplan halbieren. „Light-Immersion“: Medien, Handy auf Russisch, Tandempartner, Etiketten zu Hause.',
        },
        {
          h3: '6. Alter',
          content:
            'Kinder lernen schneller natürlich; Erwachsene systematisieren Grammatik besser. **Effiziente Erwachsene überholen Kinder oft anfangs.**',
        },
        {
          h3: '7. Motivation',
          content:
            'Persönliche Gründe (Partner, Job, Literatur) halten durch.',
        },
      ],
    },
    {
      h2: 'Die größte Zeitfalle: Grammatik vermeiden',
      content:
        'Typisch: 6 Monate Duolingo, 2.000 Wörter, aber kein „Ich gab dem Freund das Buch“ ohne **Dativ**. **друг** gelernt, aber nicht **другу** nach **дать**.\n\nRussische Kasus lernt man nicht nur durch Hören. **Explizites Lernen und aktives Üben** nötig.\n\nDafür das **kostenlose Übungsquiz**: gezieltes Drillen bis zur Automatik.',
    },
    {
      h2: 'Konkreter Plan: 30 Min./Tag bis B1',
      content: 'Realistische Tagesroutine für **~12 Monate** bis B1:',
      table: {
        headers: ['Zeit', 'Aktivität', 'Tool', 'Zweck'],
        rows: [
          ['5 Min.', 'Karten wiederholen', 'Anki / Memrise', 'Vokabular'],
          ['10 Min.', 'Grammatiklektion', 'Russian Cases with Anna / Babbel', 'Kasus & Verben'],
          ['10 Min.', 'Aktives Quiz', 'russiandeclensions.com/practice', 'Deklinationen'],
          ['5 Min.', 'Lesen/Hören', 'News in Slow Russian / kurze Texte', 'Input'],
        ],
        caption: 'Beispiel: 30-Minuten-Tagesroutine',
      },
      bullets: [
        '**Wo. 1–8:** Kyrillisch, Nom. & Akk., Präsens',
        '**Wo. 9–16:** Gen. & Präp., Vergangenheit, häufige Präpositionen',
        '**Wo. 17–24:** Dat. & Instr., Aspekte, einfache Texte',
        '**Wo. 25–36:** alle 6 Fälle Plural, Bewegungsverben, native Medien',
        '**Wo. 37–52:** Genauigkeit, Wortschatz, regelmäßig mit Muttersprachlern sprechen',
      ],
    },
    {
      h2: 'Bist du auf Kurs?',
      content: 'Meilensteine:',
      bullets: [
        '**Monat 2:** Kyrillisch flüssig, Nom./Akk.',
        '**Monat 4:** Vorstellung, Tag beschreiben, einfache Dialoge',
        '**Monat 6:** 4+ Fälle mündlich korrekt',
        '**Monat 9:** Anfänger-Podcast: meiste Wörter',
        '**Monat 12:** ~10 Min. Gespräch zu vertrautem Thema',
        '**Monat 18:** Zeitungsartikel 80 %+ ohne Wörterbuch',
      ],
    },
    {
      h2: 'Fazit: Marathon, kein Sprint',
      content:
        'Russisch braucht Zeit — keine Abkürzung an 6 Fällen, 2 Aspekten und Vokabular vorbei. Aber **du musst nicht „fertig“ sein, um Russisch zu nutzen**. Nach 2–3 Monaten: Schilder, Restaurant. Nach 6 Monaten: Reisen. Nach einem Jahr: echte Gespräche.\n\nKonstanz schlägt Geschwindigkeit. Täglich 30 Minuten, früh Grammatik (besonders Kasus), aktives Üben.',
    },
  ],
  conclusion: '',
  ctaText: 'Jetzt Russische Fälle üben — kostenlos',
  ctaHref: '/practice',
  faq: [
    {
      question: 'Wie lange braucht ein englischsprachiger Lerner für Russisch?',
      answer:
        'FSI: ~1.100 h intensives Studium bis berufliche Kompetenz (B2/C1). Mit 30 Min./Tag oft B1 in 12–14 Monaten, B2 in 18–24 Monaten.',
    },
    {
      question: 'Ist Russisch schwerer als andere Sprachen?',
      answer:
        'Kategorie IV FSI: schwerer als Französisch, Spanisch, Deutsch; leichter als Mandarin, Arabisch, Japanisch. Hauptthemen: Kyrillisch (1–2 Wochen), 6 Fälle, Verb-aspekte.',
    },
    {
      question: 'Kann ich in 6 Monaten Russisch lernen?',
      answer:
        'A2 (Touristenniveau) ist in 6 Monaten mit täglichem Lernen realistisch. B1 brauft typischerweise 12+ Monate.',
    },
    {
      question: 'Was ist der schnellste Weg?',
      answer:
        'Immersion + strukturierte Grammatik mit aktivem Üben (besonders Kasus), tägliche Spaced-Repetition-Karten, regelmäßige Gespräche mit Muttersprachlern. Frühe Grammatik vermeidet den häufigsten Engpass.',
    },
    {
      question: 'Muss ich alle 6 Fälle lernen?',
      answer:
        'Ja, langfristig. Schrittweise: Nom. & Akk., dann Gen. & Präp., dann Dat. & Instr. Unser kostenloses Quiz pro Fall.',
    },
  ],
  leadMagnetCta: {
    title: 'Heute Russische Fälle drillen',
    description:
      'Kasus sind die wichtigste Zeitinvestition. Kostenloses interaktives Quiz — 400+ Wörter, sofortiges Feedback, ohne Anmeldung.',
    ctaText: 'Kostenloses Deklinations-Quiz testen →',
    ctaHref: '/practice',
  },
  internalLinks: [
    { href: '/practice', label: 'Kostenloses Deklinations-Quiz' },
    { href: '/practice/accusative', label: 'Akkusativ üben' },
    { href: '/practice/genitive', label: 'Genitiv üben' },
    { href: '/practice/dative', label: 'Dativ üben' },
    { href: '/practice/instrumental', label: 'Instrumental üben' },
    { href: '/practice/prepositional', label: 'Präpositional üben' },
    {
      href: '/learn/articles/russian-cases-explained-beginners-guide',
      label: 'Russische Fälle erklärt: Einsteiger-Guide',
    },
    {
      href: '/learn/articles/best-apps-learn-russian-grammar',
      label: 'Beste Apps Russisch-Grammatik',
    },
    { href: '/words', label: '400+ Deklinations-Tabellen' },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      'Wie lange braucht man, um Russisch zu lernen? Ein realistischer Zeitplan',
    description:
      'Realistischer Zeitplan A1–C2, FSI, CEFR-Meilensteine, Faktoren, Tagesplan.',
    datePublished: '2026-03-22',
    dateModified: '2026-03-22',
    author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id':
        'https://russiandeclensions.com/learn/articles/how-long-learn-russian',
    },
    keywords:
      'wie lange Russisch lernen, Russisch Zeitplan, Stunden Russisch, FSI Russisch',
  },
};
