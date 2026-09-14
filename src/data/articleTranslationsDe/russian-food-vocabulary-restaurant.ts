import type { LearnArticle } from '../learnArticles';

/** Deutsche Übersetzung des Artikels `russian-food-vocabulary-restaurant` (englische Quelle: `learnArticles.ts`). */
export const russianFoodVocabularyRestaurantDe: LearnArticle = {
  slug: 'russian-food-vocabulary-restaurant',
  introByline: {
    text: '**Geschrieben von Nathan** — französischer Muttersprachler, der Russisch lernt; ich teile, was bei Grammatik, Fällen und Alltagspraxis wirklich funktioniert.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, Gründer von Russian Cases with Anna',
    imageWidth: 256,
    imageHeight: 256,
  },
  title: 'Russischer Essenswortschatz: im Restaurant bestellen ohne Panik',
  metaTitle: 'Russische Restaurant-Phrasen & Essen | Russian Cases with Anna',
  metaDescription:
    'Auf Russisch bestellen: Restaurant-Phrasen, Essenswortschatz, Akkusativ beim Bestellen, без + Genitiv, voller Dialog und Höflichkeitstipps.',
  keywords: [
    'russische restaurant phrasen',
    'russischer essenswortschatz',
    'essen bestellen auf russisch',
    'russische café phrasen',
    'без genitiv russisch',
    'я возьму russisch',
    'russischer menü wortschatz',
    'im restaurant auf russisch bestellen',
  ],
  h1: 'Russischer Essenswortschatz: im Restaurant bestellen ohne Panik',
  heroImage: {
    src: '/articles/russian-food-vocabulary-restaurant-header.webp',
    alt: 'Russischer Café-Tisch mit Borschtsch, Tee und Speisekarte für Restaurantwortschatz',
    width: 1280,
    height: 720,
  },
  intro:
    'Restaurant-Russisch ist für Anfänger heikel: Sie haben Hunger, jemand wartet, und die Grammatik will trotzdem den **Akkusativ** für das Bestellte und den **Genitiv** für „ohne Zwiebeln“. Einfrieren — und Sie zeigen auf die Karte. Dieser Leitfaden liefert Überlebensphrasen, Essenswortschatz, die Fallmuster hinter dem Bestellen, einen vollen Kellner–Gast-Dialog und Höflichkeitsdetails, die menschlich klingen.\n\nSie brauchen keine perfekten Fälle zum Essen — aber ein paar Rahmen machen die ganze Interaktion flüssiger.',
  whatYouLearn: [
    'Muss-Phrasen im Restaurant (Karte, Bestellung, Rechnung, zum Mitnehmen)',
    'Kernwortschatz für Essen und Getränke',
    'Bestellen mit dem Akkusativ (Я возьму…)',
    '„Ohne…“ und Mengen mit dem Genitiv',
    'Einen vollen Kellner–Gast-Dialog zum Wiederverwenden',
    'Höflichkeit, ты/вы und häufige Fallen',
  ],
  leadMagnetCta: {
    title: 'Restaurantgespräche sind Akkusativ + Genitiv in Verkleidung',
    description:
      'Trainieren Sie diese Fälle, bis Я возьму… und без лука automatisch sitzen. Russian Cases with Anna — kostenlos für iOS und Android.',
    ctaText: 'App herunterladen — Kostenlos',
    ctaHref: '/',
  },
  tableAccentVariant: 'accusative',
  sections: [
    {
      h2: 'Muss-Phrasen im Restaurant',
      content:
        'Lernen Sie diese zuerst auswendig. Sie decken etwa 80 % der Café- und Restaurantgespräche ab.',
      table: {
        headers: ['Russisch', 'Transliteration', 'Deutsch'],
        rows: [
          ['Можно меню, пожалуйста?', 'Mozhno menyu, pozhaluysta?', 'Kann ich bitte die Speisekarte haben?'],
          ['Что вы посоветуете?', 'Chto vy posovetuyete?', 'Was empfehlen Sie?'],
          ['Я буду / Я возьму…', "Ya budu / Ya voz'mu…", 'Ich nehme…'],
          ['Для меня…', 'Dlya menya…', 'Für mich…'],
          ['Ещё один, пожалуйста.', 'Yeshchyo odin, pozhaluysta.', 'Noch einen, bitte.'],
          ['Это остро?', 'Eto ostro?', 'Ist das scharf?'],
          ['Можно без лука?', 'Mozhno bez luka?', 'Kann ich das ohne Zwiebel haben?'],
          ['С собой, пожалуйста.', 'S soboy, pozhaluysta.', 'Zum Mitnehmen, bitte.'],
          ['Здесь / в зале.', "Zdes' / v zale.", 'Hier / im Gastraum.'],
          ['Счёт, пожалуйста.', 'Schyot, pozhaluysta.', 'Die Rechnung, bitte.'],
          ['Можно картой?', 'Mozhno kartoy?', 'Kann ich mit Karte zahlen?'],
          ['Спасибо, всё было вкусно!', 'Spasibo, vsyo bylo vkusno!', 'Danke, alles war lecker!'],
        ],
        caption: 'Zentrale Überlebensphrasen im Restaurant',
        boldColumnIndices: [0],
      },
      bullets: [
        '**Пожалуйста** mildert fast jede Bitte — nutzen Sie es freizügig.',
        '**Я буду** und **Я возьму** sind beide natürlich beim Bestellen; **возьму** klingt etwas mehr nach „ich nehme“.',
        'Für Begrüßungen beim Ankommen siehe den [Begrüßungsleitfaden](/learn/articles/russian-greetings-guide).',
      ],
    },
    {
      h2: 'Essens- und Getränkewortschatz',
      content:
        'Ein kompaktes Menü hochfrequenter Wörter. Das Genus zählt später für die Kongruenz.',
      table: {
        headers: ['Russisch', 'Deutsch', 'Genus'],
        rows: [
          ['меню', 'Speisekarte / Menü', 'Neutrum (nicht deklinierbar)'],
          ['заказ', 'Bestellung', 'Maskulin'],
          ['счёт', 'Rechnung', 'Maskulin'],
          ['официант / официантка', 'Kellner / Kellnerin', 'Mask. / Fem.'],
          ['суп', 'Suppe', 'Maskulin'],
          ['салат', 'Salat', 'Maskulin'],
          ['борщ', 'Borschtsch', 'Maskulin'],
          ['пельмени', 'Pelmeni (Teigtaschen)', 'Plural'],
          ['блины', 'Bliny / Pfannkuchen', 'Plural'],
          ['мясо', 'Fleisch', 'Neutrum'],
          ['курица', 'Hähnchen', 'Feminin'],
          ['рыба', 'Fisch', 'Feminin'],
          ['овощи', 'Gemüse', 'Plural'],
          ['хлеб', 'Brot', 'Maskulin'],
          ['сыр', 'Käse', 'Maskulin'],
          ['рис', 'Reis', 'Maskulin'],
          ['картошка / картофель', 'Kartoffel(n)', 'Fem. umgangssprachlich / Mask.'],
          ['вода', 'Wasser', 'Feminin'],
          ['сок', 'Saft', 'Maskulin'],
          ['чай', 'Tee', 'Maskulin'],
          ['кофе', 'Kaffee', 'Maskulin (traditionell)'],
          ['пиво', 'Bier', 'Neutrum'],
          ['вино', 'Wein', 'Neutrum'],
          ['десерт', 'Dessert', 'Maskulin'],
          ['мороженое', 'Eis', 'Neutrum'],
          ['соль / перец / сахар', 'Salz / Pfeffer / Zucker', 'Fem. / Mask. / Mask.'],
        ],
        caption: 'Hochfrequente Essens- und Getränkewörter',
        boldColumnIndices: [0, 2],
      },
      subsections: [
        {
          h3: 'Ernährungsextras',
          content:
            '**вегетарианский** (vegetarisch), **без мяса** (ohne Fleisch), **без глютена** (ohne Gluten), **аллергия на…** (Allergie gegen…).\n**Я не ем мясо.** — Ich esse kein Fleisch.',
        },
      ],
    },
    {
      h2: 'Bestellen mit dem Akkusativ',
      content:
        'Was Sie bestellen, ist meist ein **direktes Objekt** → **Akkusativ**. Feminine Nomen auf **-а/-я** zeigen den Wechsel klar.',
      table: {
        headers: ['Nominativ (Menüform)', 'Akkusativ in der Bestellung', 'Beispiel'],
        rows: [
          ['вода', 'воду', 'Я возьму воду.'],
          ['рыба', 'рыбу', 'Для меня рыбу.'],
          ['курица', 'курицу', 'Я буду курицу.'],
          ['пицца*', 'пиццу', 'Одну пиццу, пожалуйста.'],
          ['чай', 'чай', 'Я возьму чай. (mask. unbelebt = gleiche Form)'],
          ['кофе', 'кофе', 'Кофе, пожалуйста. (praktisch nicht deklinierbar)'],
          ['пельмени', 'пельмени', 'Пельмени, пожалуйста. (Pl. unbelebt)'],
        ],
        caption: 'Akkusativformen beim Bestellen',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        '*пицца ist ein häufiges Lehnwort; der Akkusativ **пиццу** ist weit verbreitet.',
        'Belebte Objekte (selten auf Speisekarten) würden einen genitivförmigen Akkusativ nehmen — siehe den [Akkusativ-Leitfaden](/learn/articles/russian-accusative-case).',
        'Zahlen: **два чая**, **две воды** folgen den Zahl+Fall-Regeln aus dem [Zahlenleitfaden](/learn/articles/russian-numbers-guide).',
      ],
    },
    {
      h2: '„Ohne…“ und Mengen (Genitiv)',
      content:
        '**Без** steht immer mit dem **Genitiv**. Das ist die nützlichste Restaurantgrammatik nach dem Akkusativ.',
      table: {
        headers: ['Russisch', 'Deutsch', 'Genitiv-Hinweis'],
        rows: [
          ['без лука', 'ohne Zwiebel', 'лук → лука'],
          ['без сахара', 'ohne Zucker', 'сахар → сахара'],
          ['без мяса', 'ohne Fleisch', 'мясо → мяса'],
          ['без молока', 'ohne Milch', 'молоко → молока'],
          ['без льда', 'ohne Eis', 'лёд → льда'],
          ['чашка чая', 'eine Tasse Tee', 'partitiv-ähnlicher Genitiv'],
          ['тарелка супа', 'ein Teller / eine Schüssel Suppe', 'Menge + Genitiv'],
          ['бутылка воды', 'eine Flasche Wasser', 'Menge + Genitiv'],
        ],
        caption: 'Genitiv nach без und Mengenangaben',
        boldColumnIndices: [0],
      },
      bullets: [
        '**Можно без лука?** ist höflich und glasklar.',
        'Mengenomen (**чашка, тарелка, бутылка**) setzen Essen/Getränk in den Genitiv.',
        'Tiefere Regeln: [Genitiv-Leitfaden](/learn/articles/russian-genitive-case).',
      ],
    },
    {
      h2: 'Voller Kellner–Gast-Dialog',
      content:
        'Ein wiederverwendbares Skript. Gerichte tauschen; Rahmen behalten.',
      table: {
        headers: ['Sprecher', 'Russisch', 'Deutsch'],
        rows: [
          ['Kellner', 'Здравствуйте! Что будете заказывать?', 'Guten Tag! Was möchten Sie bestellen?'],
          ['Sie', 'Здравствуйте. Можно меню, пожалуйста?', 'Guten Tag. Kann ich bitte die Speisekarte haben?'],
          ['Kellner', 'Конечно. Вот меню.', 'Natürlich. Hier ist die Karte.'],
          ['Sie', 'Что вы посоветуете?', 'Was empfehlen Sie?'],
          ['Kellner', 'Борщ очень хороший. И пирожки свежие.', 'Der Borschtsch ist sehr gut. Und die Piroschki sind frisch.'],
          ['Sie', 'Тогда я возьму борщ и чай без сахара.', 'Dann nehme ich Borschtsch und Tee ohne Zucker.'],
          ['Kellner', 'Вам здесь или с собой?', 'Zum Hieressen oder zum Mitnehmen?'],
          ['Sie', 'Здесь, пожалуйста.', 'Hier, bitte.'],
          ['Kellner', 'Хорошо. Минутку!', 'Gut. Einen Moment!'],
          ['Sie', 'Счёт, пожалуйста. Можно картой?', 'Die Rechnung, bitte. Kann ich mit Karte zahlen?'],
          ['Kellner', 'Да, конечно.', 'Ja, natürlich.'],
          ['Sie', 'Спасибо, всё было вкусно!', 'Danke, alles war lecker!'],
        ],
        caption: 'Café-/Restaurant-Dialog',
        boldColumnIndices: [1],
      },
    },
    {
      h2: 'Höflichkeit und häufige Fallen',
      content:
        'Kleine soziale Details zählen so viel wie der Wortschatz.',
      bullets: [
        'Standard ist **вы** gegenüber dem Personal: **Что вы посоветуете?** — nicht ты.',
        '**Пожалуйста** bei Bitten; **спасибо**, wenn das Essen kommt und beim Gehen.',
        'Trinkgeldnormen variieren nach Stadt und Ort — folgen Sie lokalen Signalen; die Phrase **оставьте сдачу** (das Wechselgeld behalten) kommt in manchen Kontexten vor.',
        'Keine Panik bei vergessener Endung — zeigen + **это, пожалуйста** funktioniert weiterhin; danach auf volle Phrasen umsteigen.',
        '**Кофе** ist traditionell maskulin (**чёрный кофе**); viele Sprecher nutzen umgangssprachlich Neutrum — maskulin ist in sorgfältiger Sprache sicherer.',
      ],
      subsections: [
        {
          h3: 'Fehler vermeiden',
          content:
            '**без лук** ✗ → **без лука** ✓.\n**Я возьму вода** ✗ → **воду** ✓.\n**Счёт?** allein kann abrupt wirken — **пожалуйста** ergänzen.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Wie bestellt man höflich Essen auf Russisch?',
      answer:
        'Nutzen Sie Я возьму… oder Я буду… plus пожалуйста. Beispiel: Я возьму борщ и чай, пожалуйста. Personal mit вы ansprechen hält den Ton höflich.',
    },
    {
      question: 'Welchen Fall verwende ich beim Bestellen?',
      answer:
        'Das Bestellte steht meist im Akkusativ (direktes Objekt): Я возьму воду, Я буду рыбу. Maskuline unbelebte Nomen sehen oft aus wie der Nominativ (чай, суп).',
    },
    {
      question: 'Wie sage ich „ohne Zucker“ oder „ohne Zwiebel“?',
      answer:
        'Mit без + Genitiv: без сахара, без лука, без молока. Можно без лука? ist eine natürliche höfliche Bitte.',
    },
    {
      question: 'Wie bitte ich auf Russisch um die Rechnung?',
      answer:
        'Sagen Sie Счёт, пожалуйста. Für Kartenzahlung: Можно картой?',
    },
    {
      question: 'Wie bestelle ich zum Mitnehmen?',
      answer:
        'Sagen Sie С собой, пожалуйста (zum Mitnehmen / mit mir). Zum Hieressen: Здесь oder В зале.',
    },
  ],
  conclusionIntro:
    'Ein kurzes Phrasen-Set plus zwei Fälle bringen Sie durch die meisten russischen Cafés.',
  conclusionBullets: [
    'Die **Überlebensphrasen** lernen (Speisekarte, Bestellung, Rechnung, Kartenzahlung)',
    'Mit dem **Akkusativ** bestellen (Я возьму…)',
    '**без + Genitiv** für Anpassungen nutzen',
    'Bei **вы + пожалуйста** bleiben',
    'Den **Dialog** üben, bis er langweilig wirkt — dann sind Sie bereit',
  ],
  conclusionOutro:
    'Wenn diese Rahmen leicht sitzen, festigen Sie die Grammatik mit unseren [Akkusativ-](/learn/articles/russian-accusative-case) und [Genitiv-Leitfäden](/learn/articles/russian-genitive-case) und trainieren Sie Endungen im kostenlosen [Übungstool](/practice).',
  internalLinks: [
    {
      href: '/learn/articles/russian-accusative-case',
      label: 'Russischer Akkusativ: Leitfaden',
    },
    {
      href: '/learn/articles/russian-genitive-case',
      label: 'Russischer Genitiv: Leitfaden',
    },
    {
      href: '/learn/articles/russian-greetings-guide',
      label: 'Russische Begrüßungen',
    },
    {
      href: '/learn/articles/russian-numbers-guide',
      label: 'Russische Zahlen: Leitfaden',
    },
    {
      href: '/learn/articles/russian-most-common-words',
      label: '100 häufigste russische Wörter',
    },
    { href: '/practice', label: 'Kostenloses russisches Deklinations-Quiz' },
  ],
  ctaText: 'Russische Fälle üben — Kostenlos →',
  ctaHref: '/practice',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Russischer Essenswortschatz: im Restaurant bestellen ohne Panik',
    description:
      'Auf Russisch bestellen: Restaurant-Phrasen, Essenswortschatz, Akkusativ beim Bestellen, без + Genitiv, voller Dialog und Höflichkeitstipps.',
    datePublished: '2026-09-13',
    dateModified: '2026-09-13',
    author: {
      '@type': 'Person',
      name: 'Nathan',
      url: 'https://russiandeclensions.com/',
      image: 'https://russiandeclensions.com/landing-cases/founder-photo.webp',
      description:
        'Französischer Muttersprachler, der Russisch lernt; schreibt über Grammatik, Fälle und praktische Selbstlerngewohnheiten.',
      worksFor: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://russiandeclensions.com/learn/articles/russian-food-vocabulary-restaurant',
    },
    keywords:
      'russische restaurant phrasen, russischer essenswortschatz, essen bestellen auf russisch, без genitiv russisch, я возьму russisch',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russian-food-vocabulary-restaurant-header.webp',
      width: 1280,
      height: 720,
    },
  },
};
