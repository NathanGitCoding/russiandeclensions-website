import type { LearnArticle } from '../learnArticles';

/** Deutsche Übersetzung des Artikels `russian-noun-gender-guide` (englische Quelle: `learnArticles.ts`). */
export const russianNounGenderGuideDe: LearnArticle = {
  slug: 'russian-noun-gender-guide',
  title: 'Genus russischer Substantive: Maskulin, Feminin, Neutrum (vollständiger Leitfaden)',
  metaTitle:
    'Genus russischer Substantive: Maskulin, Feminin, Neutrum erklärt | Russian Cases with Anna',
  metaDescription:
    'Lernen Sie, das Genus russischer Substantive an der Endung zu erkennen, die -ь-Wörter, die jeden verwirren, die Ausnahmen (кофе, папа) und wie Genus Adjektive, Verben und Fälle steuert.',
  keywords: [
    'genus russischer substantive',
    'maskulin feminin neutrum russisch',
    'wie erkennt man das genus russischer wörter',
    'russisches grammatisches geschlecht',
    'russische endungen genus regeln',
    'weiches zeichen genus russisch',
    'ausnahmen genus russisch',
    'adjektivkongruenz russisch',
    'ist кофе maskulin oder neutrum',
    'russisch genus leitfaden',
  ],
  h1: 'Genus russischer Substantive: Maskulin, Feminin, Neutrum (vollständiger Leitfaden)',
  heroImage: {
    src: '/articles/russian-noun-gender-chalkboard.webp',
    alt: 'Eine Tafel, die russische Substantive in maskuline, feminine und neutrale Spalten einordnet',
    width: 1536,
    height: 1024,
  },
  intro:
    'Jedes russische Substantiv gehört zu einem von drei Genera — maskulin, feminin oder neutrum —, und dieses eine Merkmal steuert leise fast alles andere im umgebenden Satz. Wählt man das falsche Genus, können das Adjektiv, das Possessivpronomen, das Verb in der Vergangenheit und schließlich die folgende Fallendung allesamt falsch werden, selbst wenn das Substantiv selbst perfekt sitzt.\n\nDie gute Nachricht: Russisches Genus ist **nicht willkürlich**. **Etwa 90 % der Substantive verraten ihr Genus allein durch den letzten Buchstaben** — eine schnelle, verlässliche Abkürzung, sobald man das Muster kennt. Die schlechte Nachricht sind die restlichen 10 %: Substantive, die auf das weiche Zeichen **-ь** enden, können maskulin oder feminin sein, ganz ohne sichtbaren Hinweis, und eine Handvoll Alltagswörter (папа, кофе) ignorieren die Rechtschreibregel schlicht, weil die Bedeutung gewinnt.\n\nDieser Leitfaden gibt Ihnen die Endungsregel, die die meisten Substantive abdeckt, die -ь-Falle und den Trick, der sie zähmt, die auswendig zu lernenden Ausnahmen, und genau, wie sich Genus anschließend auf Adjektive, Vergangenheitsverben und das Sechs-Fälle-System selbst auswirkt.',
  introByline: {
    text: '**Geschrieben von Nathan** — Muttersprachler Französisch, der Russisch lernt; ich teile, was für Grammatik, Fälle und tägliche Praxis wirklich funktioniert.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, Gründer von Russian Cases with Anna',
    imageWidth: 256,
    imageHeight: 256,
  },
  whatYouLearn: [
    'Die Drei-Endungen-Regel, die das Genus für etwa **90 % der russischen Substantive** vorhersagt',
    'Warum Substantive auf **-ь** die größte Genus-Falle sind — und der **-ость**-Trick, der hilft',
    'Die Ausnahmen, bei denen natürliches Geschlecht die Rechtschreibung schlägt (**папа**, **дедушка**) und bei denen Lehnwörter standardmäßig neutrum sind (**кино**, **пальто**)',
    'Wie Genus **Adjektivendungen**, **Possessivpronomen** und **Vergangenheitsverben** steuert',
    'Warum Genus der eigentliche Ausgangspunkt für das Erlernen der **russischen Fallendungen** ist',
  ],
  leadMagnetCta: {
    title: 'Meistern Sie russische Fälle über das Genus hinaus — kostenlose App',
    description:
      'Genus ist nur die erste Schicht — jedes Substantiv dekliniert sich danach je nach diesem Genus über sechs Fälle unterschiedlich. Russian Cases with Anna bietet strukturierte Lektionen und intelligente Quizze, um jeden Fall zu automatisieren — kostenlos für iOS und Android.',
    ctaText: 'App herunterladen — Kostenlos',
    ctaHref: '/',
  },
  sections: [
    {
      h2: 'Warum das Genus russischer Substantive wichtig ist (es ist kein bloßes Etikett)',
      content:
        'Im Deutschen ist grammatisches Geschlecht schon spürbar, aber im Russischen ist es **strukturell**: Es bestimmt die Endung jedes beschreibenden Adjektivs, die Form von Possessivpronomen wie „mein" oder „dein", die Endung des Vergangenheitsverbs, wenn dieses Substantiv das Subjekt ist, und — später — welchen Satz von sechs Fallendungen das Substantiv für den Rest seines grammatischen Lebens befolgt.\n\nSehen Sie, wie viel sich über drei sonst identische Sätze hinweg ändert, nur weil sich das Genus des Substantivs ändert:',
      table: {
        headers: ['Genus', 'Russisch', 'Deutsch'],
        rows: [
          ['Maskulin', 'Мой новый дом стоял здесь.', 'Mein neues Haus stand hier.'],
          ['Feminin', 'Моя новая книга лежала здесь.', 'Mein neues Buch lag hier.'],
          ['Neutrum', 'Моё новое окно было здесь.', 'Mein neues Fenster war hier.'],
        ],
        caption: 'Dasselbe Satzmuster, drei Genera: Pronomen, Adjektiv und Verb ändern sich alle',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Das Possessivpronomen ändert sich: **мой → моя → моё** („mein")',
        'Die Adjektivendung ändert sich: **новый → новая → новое** („neu")',
        'Die Vergangenheitsverb-Endung ändert sich: **стоял → лежала → было** (Kongruenz, keine Bedeutungsänderung)',
        'Später hängen auch die **Fallendungen** des Substantivs selbst von diesem gleichen Genus ab',
      ],
    },
    {
      h2: 'Wie man das Genus an der Endung erkennt (die 90-%-Regel)',
      content:
        'Bei der großen Mehrheit der russischen Substantive kann man das Genus direkt am letzten Buchstaben der **Wörterbuchform** (Nominativ Singular) ablesen. Lernen Sie diese Tabelle, und Sie liegen fast jedes Mal richtig, wenn Sie einem neuen Substantiv begegnen.',
      table: {
        headers: ['Endung', 'Genus', 'Beispiele'],
        rows: [
          ['Konsonant', 'Maskulin', 'стол (Tisch), дом (Haus), город (Stadt)'],
          ['-й', 'Maskulin', 'музей (Museum), герой (Held), чай (Tee)'],
          ['-а', 'Feminin', 'книга (Buch), школа (Schule), мама (Mama)'],
          ['-я', 'Feminin', 'неделя (Woche), земля (Land), тётя (Tante)'],
          ['-о', 'Neutrum', 'окно (Fenster), слово (Wort), молоко (Milch)'],
          ['-е / -ё', 'Neutrum', 'море (Meer), поле (Feld), бельё (Wäsche)'],
          ['-ь', 'Maskulin **oder** feminin', 'siehe nächster Abschnitt — dies ist die einzige Ausnahme'],
        ],
        caption: 'Das Genus russischer Substantive anhand des letzten Buchstabens vorhersagen',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Ein Substantiv, das auf einen **harten Konsonanten** oder **-й** endet, ist fast immer maskulin — keine nennenswerten Ausnahmen an dieser Stelle',
        'Ein Substantiv, das auf **-о** oder **-е/-ё** endet, ist fast immer neutrum',
        'Ein Substantiv, das auf **-а** oder **-я** endet, ist meist feminin — aber beachten Sie den Ausnahmen-Abschnitt unten, denn hier kann Bedeutung die Rechtschreibung überstimmen',
        'Diese Regel funktioniert nur bei der **Wörterbuchform (Nominativ Singular)** — Endungen ändern sich, sobald ein Substantiv dekliniert wird, prüfen Sie also immer zuerst die Grundform',
      ],
    },
    {
      h2: 'Die Falle des weichen Zeichens: Substantive auf -ь',
      content:
        'Substantive, die auf das weiche Zeichen **-ь** enden, sind der einzige Ort, an dem die Rechtschreibung überhaupt keinen Hinweis gibt — sie können maskulin oder feminin sein, und beide Gruppen sind häufig. Es gibt hier keine visuelle Abkürzung; Muttersprachler kennen einfach jedes Wort, und Lernende müssen die Liste auswendig lernen.',
      table: {
        headers: ['Feminine -ь-Substantive', 'Maskuline -ь-Substantive'],
        rows: [
          ['ночь (Nacht)', 'день (Tag)'],
          ['дверь (Tür)', 'конь (Pferd)'],
          ['мышь (Maus)', 'словарь (Wörterbuch)'],
          ['кровать (Bett)', 'учитель (Lehrer)'],
          ['тетрадь (Heft)', 'дождь (Regen)'],
          ['любовь (Liebe)', 'гость (Gast)'],
          ['осень (Herbst)', 'рубль (Rubel)'],
        ],
        caption: 'Häufige -ь-Substantive nach Genus geordnet — keine Rechtschreibregel unterscheidet sie',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Die eine verlässliche Abkürzung: Substantive, die auf **-ость** oder **-есть** enden, sind fast immer feminin — радость (Freude), скорость (Geschwindigkeit), известность (Bekanntheit)',
        'Abgesehen von diesem Suffix gibt es kein Muster nach Klang oder Rechtschreibung — **дверь** und **словарь** reimen sich, haben aber entgegengesetztes Genus',
        'Wenn Sie ein neues -ь-Substantiv lernen, lernen Sie es mit einem passenden Adjektiv oder einer Zahl (**одна дверь**, „eine Tür"), damit das Genus vom ersten Tag an am Wort haftet',
        'Dies ist die größte Fehlerquelle für Genus bei fortgeschrittenen Anfängern — planen Sie hierfür echte Auswendiglernzeit ein',
      ],
    },
    {
      h2: 'Häufige Ausnahmen, die die Endungsregel brechen',
      content:
        'Eine kleine Zahl von Alltagswörtern ignoriert die Endungsregel vollständig, aus zwei unterschiedlichen Gründen: **natürliches Geschlecht** (das reale Geschlecht einer Person überstimmt die Rechtschreibung) und **indeklinable Lehnwörter** (entlehnte Wörter, die nie ihre Form ändern und standardmäßig neutrum sind, sofern die Bedeutung nichts anderes sagt).',
      table: {
        headers: ['Wort', 'Endung deutet auf', 'Tatsächliches Genus', 'Warum'],
        rows: [
          ['папа (Papa)', 'Feminin (-а)', 'Maskulin', 'Natürliches Geschlecht: die Person ist männlich'],
          ['дедушка (Opa)', 'Feminin (-а)', 'Maskulin', 'Natürliches Geschlecht: die Person ist männlich'],
          ['дядя (Onkel)', 'Feminin (-я)', 'Maskulin', 'Natürliches Geschlecht: die Person ist männlich'],
          ['мужчина (Mann)', 'Feminin (-а)', 'Maskulin', 'Natürliches Geschlecht: die Person ist männlich'],
          ['кофе (Kaffee)', 'Weder klare Endung noch eindeutig neutrum', 'Maskulin (traditionell)', 'Durch Konvention festgelegt; Neutrum ist in der Umgangssprache verbreitet, gilt aber als nicht standardgemäß'],
          ['кино (Kino)', 'Wirkt neutrum (-о)', 'Neutrum', 'Indeklinables Lehnwort — Standardgenus für entlehnte unbelebte Substantive'],
          ['пальто (Mantel)', 'Wirkt neutrum (-о)', 'Neutrum', 'Indeklinables Lehnwort — Standardgenus'],
          ['такси (Taxi)', 'Keine klare Endung', 'Neutrum', 'Indeklinables Lehnwort — Standardgenus'],
        ],
        caption: 'Ausnahmen: wenn natürliches Geschlecht oder Lehnwort-Konvention die Endungsregel überstimmt',
        boldColumnIndices: [0, 2],
      },
      bullets: [
        'Eine Handvoll **Substantive auf -а/-я für männliche Personen** (папа, дедушка, дядя, мужчина) sind grammatisch maskulin — sie nehmen trotzdem maskuline Adjektive und Vergangenheitsverben: **мой добрый дедушка** („mein lieber Opa")',
        'Indeklinable Lehnwörter (die auf einen Vokal enden, der sich nie ändert: -о, -е, -и, -у) sind standardmäßig **neutrum**, sofern die Bedeutung des Wortes nicht anderswohin zeigt — **кофе** ist die berühmte Ausnahme, durch lange Konvention maskulin gehalten',
        'Ein paar Lehnwörter übernehmen ihr Genus von der **Kategorie**, zu der sie gehören: **авеню** (Avenue) ist feminin, weil „улица" (Straße) feminin ist — Bedeutung, nicht Rechtschreibung, entscheidet',
        'Diese Ausnahmen sind eine kurze, gut lernbare Liste — lassen Sie sich davon nicht das Vertrauen in die 90-%-Endungsregel nehmen',
      ],
    },
    {
      h2: 'Wie Genus Adjektiv- und Pronomenkongruenz steuert',
      content:
        'Jedes Adjektiv und jedes Possessivpronomen im Russischen muss im **Genus mit dem Substantiv übereinstimmen**, das es beschreibt. Im Nominativ hat jedes Genus seine eigene Adjektivendung — hier „spüren" Anfänger das Genus zum ersten Mal bewusst am Werk.',
      table: {
        headers: ['Genus', 'Adjektivendung', 'Beispiel', 'Bedeutung'],
        rows: [
          ['Maskulin', '-ый / -ий', 'новый дом', 'ein neues Haus'],
          ['Feminin', '-ая / -яя', 'новая книга', 'ein neues Buch'],
          ['Neutrum', '-ое / -ее', 'новое окно', 'ein neues Fenster'],
        ],
        caption: 'Adjektivkongruenz nach Genus (Nominativ)',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Possessivpronomen folgen derselben Dreiteilung: **мой чай** (mein Tee, mask.), **моя сумка** (meine Tasche, fem.), **моё имя** (mein Name, neutr.)',
        'Das Demonstrativpronomen „dieser/diese/dieses" macht dasselbe: **этот дом**, **эта книга**, **это окно**',
        'Diese Kongruenz ist kein optionaler Stil — die falsche Endung zu verwenden ist ein Grammatikfehler, kein bloßer Akzent',
      ],
    },
    {
      h2: 'Wie Genus Vergangenheitsverben steuert',
      content:
        'Russische Vergangenheitsverben stimmen im Singular mit dem Genus ihres Subjekts überein — ein Merkmal, das das Deutsche nicht auf diese Weise kennt, weshalb es Lernende oft überrascht. Das Verb selbst ändert nicht seine Bedeutung; nur seine Endung passt sich an, wer oder was die Handlung ausgeführt hat.',
      table: {
        headers: ['Genus des Subjekts', 'Beispiel', 'Bedeutung'],
        rows: [
          ['Maskulin', 'Он читал.', 'Er las / hat gelesen.'],
          ['Feminin', 'Она читала.', 'Sie las / hat gelesen.'],
          ['Neutrum', 'Оно читало.', 'Es las / hat gelesen.'],
        ],
        caption: 'Kongruenz des Vergangenheitsverbs nach Genus des Subjekts',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Das Muster ist einfach, sobald man es sieht: **-л** (mask.), **-ла** (fem.), **-ло** (neutr.), **-ли** (jeder Plural)',
        'Deshalb muss man das Genus eines Substantivs sogar für einen einfachen Vergangenheitssatz kennen — „das Buch fiel" heißt **книга упала**, nicht упал oder упало',
        'Die Regel gilt für das **grammatische Genus** des Substantivs, nicht notwendigerweise für das biologische Geschlecht, bei unbelebten Objekten',
      ],
    },
    {
      h2: 'Wie Genus die Fallendungen formt (das größere Bild)',
      content:
        'Genus betrifft nicht nur Adjektive und Vergangenheit — es ist das **Ordnungsprinzip** hinter dem gesamten Sechs-Fälle-Deklinationssystem. Maskuline, feminine und neutrale Substantive folgen jeweils einem unterschiedlichen Endungsmuster durch Nominativ, Genitiv, Dativ, Akkusativ, Instrumental und Präpositiv. Lernen Sie zuerst das Genus eines Substantivs, und der Rest seiner Deklination wird zur Anwendung des richtigen Musters statt zum Raten.\n\nWenn Sie die einzelnen Fälle noch nicht durchgearbeitet haben, fasst unser [vollständiger Leitfaden zu russischen Fallendungen](/learn/articles/russian-case-endings-cheatsheet) jede Endung nach Genus zusammen, und [Russische Fälle einfach erklärt: ein Leitfaden für Anfänger](/learn/articles/russian-cases-explained-beginners-guide) ist die beste nächste Station nach diesem Artikel.',
      bullets: [
        'Feminine Substantive auf -а/-я teilen sich ein Deklinationsmuster; maskuline Substantive auf Konsonant/-й ein anderes; neutrale Substantive auf -о/-е ein drittes',
        'Auch -ь-Substantive teilen ihr Deklinationsmuster nach Genus auf — ein weiterer Grund, warum die Unterscheidung maskulin/feminin wichtig ist, nicht nur die Rechtschreibung',
        'Sobald Genus automatisch ist, fügt sich jedes neu gelernte Substantiv direkt in ein bekanntes Deklinationsmuster ein, statt separates Auswendiglernen zu erfordern',
      ],
    },
    {
      h2: 'Häufige Fehler beim Genus russischer Substantive',
      bullets: [
        '**Annehmen, jedes -а/-я-Substantiv sei feminin.** Wörter für männliche Personen (папа, дедушка, дядя, мужчина) bleiben maskulin, unabhängig von der Endung — prüfen Sie zuerst die Bedeutung, dann die Rechtschreibung.',
        '**-ь-Substantive nach Klang erraten.** дверь (fem.) und словарь (mask.) reimen sich, haben aber entgegengesetztes Genus — es gibt keine Abkürzung außer Auswendiglernen und dem -ость-Muster.',
        '**Neutrale Adjektive mit кофе verwenden.** Das traditionelle Russisch hält кофе maskulin (**чёрный кофе**, nicht чёрное кофе), auch wenn viele Muttersprachler im Alltag das Neutrum verwenden — die maskuline Form ist weiterhin das, was Grammatikleitfäden und Prüfungen erwarten.',
        '**Vergessen, dass indeklinable Lehnwörter trotzdem ein Genus haben.** Wörter wie пальто, метро und такси ändern ihre Endung nie, sind aber grammatisch trotzdem neutrum und brauchen neutrale Adjektive: **новое пальто** (ein neuer Mantel).',
        '**Maskuline und feminine Adjektivendungen unter Zeitdruck verwechseln.** -ый/-ая und -ой/-ая sehen sich bei hoher Geschwindigkeit ähnlich — verlangsamen Sie sich bei neuem Vokabular, bis die Zuordnung automatisch sitzt.',
      ],
    },
  ],
  faq: [
    {
      question: 'Wie viele Genera hat das Russische?',
      answer:
        'Das Russische hat **drei grammatische Genera**: maskulin, feminin und neutrum. Jedes Substantiv gehört zu genau einem davon, und diese Wahl steuert die Form von Adjektiven, Possessivpronomen, Vergangenheitsverben und Fallendungen, die mit diesem Substantiv verwendet werden.',
    },
    {
      question: 'Wie erkennt man, ob ein russisches Substantiv maskulin oder feminin ist?',
      answer:
        'Prüfen Sie den **letzten Buchstaben der Wörterbuchform (Nominativ Singular)**: Ein Konsonant oder **-й** ist meist maskulin, **-а/-я** meist feminin, und **-о/-е** meist neutrum. Diese Regel deckt etwa 90 % der Substantive ab. Substantive, die auf das weiche Zeichen **-ь** enden, sind die Ausnahme — sie können maskulin oder feminin sein und müssen einzeln auswendig gelernt werden.',
    },
    {
      question: 'Sind alle russischen Substantive auf -а feminin?',
      answer:
        'Fast, aber nicht ganz. Eine Handvoll Wörter für **männliche Personen** — папа (Papa), дедушка (Opa), дядя (Onkel), мужчина (Mann) — enden auf -а oder -я, sind aber grammatisch **maskulin**, weil natürliches Geschlecht die Rechtschreibregel überstimmt. Sie nehmen trotzdem maskuline Adjektive und Vergangenheitsverben.',
    },
    {
      question: 'Welches Genus hat кофе (Kaffee) auf Russisch?',
      answer:
        'Traditionell und grammatisch ist **кофе maskulin** (**чёрный кофе**, „schwarzer Kaffee"), obwohl es ein indeklinables Lehnwort ist, das eigentlich standardmäßig neutrum sein müsste. Neutrale Kongruenz (**чёрное кофе**) ist in der Umgangssprache verbreitet, gilt aber von den meisten Grammatikreferenzen und Prüfungen weiterhin als nicht standardgemäß.',
    },
    {
      question: 'Ändert sich das Genus eines Substantivs im Plural?',
      answer:
        'Nein — ein Substantiv behält in jedem Fall und jeder Zahl dasselbe grammatische Genus, aber im **Plural unterscheiden Adjektive und Vergangenheitsverben nicht mehr nach Genus**: Alle drei Genera teilen dieselbe Plural-Adjektivendung (**новые**) und dieselbe Plural-Vergangenheitsendung (**читали**). Genuskongruenz zählt nur im Singular.',
    },
  ],
  conclusion:
    'Das Genus russischer Substantive wirkt zunächst einschüchternd, weil es so viel vom Satz berührt — Adjektive, Pronomen, Verben und schließlich jede Fallendung. In der Praxis läuft es auf eine verlässliche Regel hinaus, die die meisten Substantive abdeckt, eine wirklich knifflige Gruppe (-ь-Substantive), die einfach Auswendiglernen braucht, und eine kurze Liste von Ausnahmen, die es sich lohnt, auswendig zu lernen.\n\nDer schnellste Weg, Genus zu automatisieren, ist, es vom ersten Tag an an jedes neue Wort zu heften: Lernen Sie Substantive mit ihrem Adjektiv (**новый дом**, **новая книга**, **новое окно**) statt isoliert, damit das Genus nie eine separate Tatsache ist, die Sie später abrufen müssen.',
  conclusionBullets: [
    'Drei Genera: **maskulin, feminin, neutrum** — jedes Substantiv hat genau eines',
    'Die 90-%-Regel: **Konsonant/-й = maskulin**, **-а/-я = feminin**, **-о/-е = neutrum**',
    '**-ь-Substantive** sind die eigentliche Ausnahme — kein Rechtschreibhinweis, jedes einzeln auswendig lernen (das Suffix **-ость** ist zuverlässig feminin)',
    'Eine kurze auswendig zu lernende Ausnahmenliste: **папа, дедушка, дядя** (maskulin trotz -а/-я), **кофе** (maskulin), **кино/пальто/такси** (neutrale Lehnwörter)',
    'Genus steuert **Adjektivendungen, Possessivpronomen, Vergangenheitsverben** und das gesamte **Fall-Deklinationssystem**',
  ],
  conclusionOutro:
    'Genus ist das Fundament, auf dem die gesamte russische Grammatik aufbaut. Sobald es automatisch sitzt, hören die sechs Fälle auf, sechs getrennte Rätsel zu sein, und werden zu drei vertrauten Mustern, die konsequent angewendet werden — **dieser Wandel ist es, der fließend klingendes Russisch möglich macht.**',
  ctaText: 'Russian Cases with Anna herunterladen — Kostenlos',
  ctaHref: '/',
  internalLinks: [
    {
      href: '/learn/articles/russian-case-endings-cheatsheet',
      label: 'Russische Fallendungen: Die ultimative Spickzettel-Übersicht',
    },
    {
      href: '/learn/articles/russian-cases-explained-beginners-guide',
      label: 'Russische Fälle einfach erklärt: Ein visueller Leitfaden für Anfänger',
    },
    {
      href: '/learn/articles/russian-genitive-case',
      label: 'Der russische Genitiv: Vollständiger Leitfaden',
    },
    {
      href: '/learn/articles/russian-accusative-case',
      label: 'Der russische Akkusativ: Vollständiger Leitfaden',
    },
    {
      href: '/learn/articles/russian-alphabet-cyrillic-guide',
      label: 'Das russische Alphabet: Ein vollständiger Leitfaden zum Kyrillischen',
    },
    { href: '/practice', label: 'Kostenloses russisches Deklinations-Quiz (alle sechs Fälle)' },
    { href: '/words', label: 'Über 400 russische Wörter mit vollständigen Deklinationstabellen durchsuchen' },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Genus russischer Substantive: Maskulin, Feminin, Neutrum (vollständiger Leitfaden)',
    description:
      'Lernen Sie, das Genus russischer Substantive an der Endung zu erkennen, die -ь-Wörter, die jeden verwirren, die Ausnahmen (кофе, папа) und wie Genus Adjektive, Verben und Fälle steuert.',
    datePublished: '2026-09-10',
    dateModified: '2026-09-10',
    author: {
      '@type': 'Person',
      name: 'Nathan',
      url: 'https://russiandeclensions.com/',
      image: 'https://russiandeclensions.com/landing-cases/founder-photo.webp',
      description: 'Muttersprachler Französisch, der Russisch lernt; teilt, was wirklich funktioniert.',
      worksFor: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://russiandeclensions.com/learn/articles/russian-noun-gender-guide',
    },
    keywords:
      'genus russischer substantive, maskulin feminin neutrum russisch, wie erkennt man das genus russischer wörter, russisches grammatisches geschlecht, weiches zeichen genus russisch, ausnahmen genus russisch',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russian-noun-gender-chalkboard.webp',
      width: 1536,
      height: 1024,
    },
  },
};
