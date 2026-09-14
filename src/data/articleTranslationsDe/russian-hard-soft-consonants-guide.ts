import type { LearnArticle } from '../learnArticles';

/** Deutsche Übersetzung des Artikels `russian-hard-soft-consonants-guide` (Quelle EN: `learnArticles.ts`). */
export const russianHardSoftConsonantsGuideDe: LearnArticle = {
  slug: 'russian-hard-soft-consonants-guide',
  introByline: {
    text: '**Geschrieben von Nathan** — Muttersprachler Französisch, der Russisch lernt; ich teile, was für Grammatik, Fälle und tägliche Praxis wirklich funktioniert.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, Gründer von Russian Cases with Anna',
    imageWidth: 256,
    imageHeight: 256,
  },
  title: 'Harte und weiche Konsonanten im Russischen: Der Aussprache-Guide, den Anfänger überspringen',
  metaTitle: 'Harte vs. weiche Konsonanten im Russischen | Russian Cases with Anna',
  metaDescription:
    'Lernen Sie harte und weiche russische Konsonanten: Paare, Weichheitszeichen, weiche Vokale, ы vs и und wie Weichheit Endungen verändert — mit Minimalpaaren und Lesepraxis.',
  keywords: [
    'harte und weiche Konsonanten Russisch',
    'weiche Konsonanten Russisch',
    'harte weiche Paare Russisch',
    'Weichheitszeichen Russisch',
    'ы vs и Russisch',
    'Palatalisierung Russisch',
    'russische Aussprache Anfänger',
    'harte vs weiche russische Konsonanten',
  ],
  h1: 'Harte und weiche Konsonanten im Russischen: Der Aussprache-Guide, den Anfänger überspringen',
  heroImage: {
    src: '/articles/russian-hard-soft-consonants-header.webp',
    alt: 'Tafel mit russischen harten und weichen Konsonantenpaaren zur Aussprache',
    width: 1280,
    height: 720,
  },
  intro:
    'Die meisten Anfänger lernen das kyrillische Alphabet und stürzen sich dann auf den Wortschatz — und überspringen das eine Aussprache-System, das Russisch *russisch klingen* lässt: **harte vs. weiche Konsonanten**.\n\nWeichheit (Palatalisierung) ist keine Dekoration. Sie kann die Bedeutung ändern (**угол** „Ecke“ vs **уголь** „Kohle“), entscheidet, ob man **ы** oder **и** schreibt, und erklärt, warum Adjektive und Substantive mit weichem Stamm andere Endungen nehmen. Dieser Guide gibt Ihnen die Paare, die Regeln zu Weichheitszeichen / weichen Vokalen, die Falle **ы vs и**, Minimalpaare und kurze Lesepraxis.',
  whatYouLearn: [
    'Was „hart“ und „weich“ in der russischen Aussprache bedeuten',
    'Die harten/weichen Konsonantenpaare (mit ungefähren deutschen/englischen Ankern)',
    'Wie Weichheitszeichen, weiche Vokale und й Weichheit erzeugen',
    'Wie Weichheit in Wortendungen erscheint (Grammatik-Link)',
    'Ы vs и — die klassische Verwechslung',
    'Minimalpaare und eine kurze Leseübung',
  ],
  leadMagnetCta: {
    title: 'Aussprache + Fälle = Wörter, die Sie wirklich nutzen können',
    description:
      'Sobald Endungen klar klingen, üben Sie sie im Kontext. Russian Cases with Anna trainiert alle sechs Fälle mit Spaced Repetition. Kostenlos auf iOS und Android.',
    ctaText: 'App herunterladen — Kostenlos',
    ctaHref: '/',
  },
  tableAccentVariant: 'nominative',
  sections: [
    {
      h2: 'Was „hart“ und „weich“ im Russischen bedeuten',
      content:
        'Im Russischen kommen viele Konsonanten in **Paaren**: einer **harten** und einer **weichen** Variante. Weiche Konsonanten werden mit der Zungenmitte zum Gaumen hin angehoben ausgesprochen — eine leichte „j“-Qualität, ohne eine volle Extra-Silbe.\n\nDeutsch und Englisch tun das nur gelegentlich (das n in „Zwiebel“ ist weicher als das n in „nein“). Russisch macht es **systematisch**, bei den meisten Konsonanten, in fast jedem Wort.',
      bullets: [
        'Hart ≠ „laut“ und weich ≠ „leise.“ Weich bedeutet **palatalisiert**.',
        'Dieselbe Buchstabenform kann je nach Folgendem (oder einem Weichheitszeichen) hart oder weich klingen.',
        'Einige Konsonanten sind **immer hart** oder **immer weich** — sie haben kein Paar.',
      ],
    },
    {
      h2: 'Die harten/weichen Konsonantenpaare',
      content:
        'Das sind die gepaarten Konsonanten. Lernen Sie sie als Zwillinge: gleicher Artikulationsort, unterschiedliche Weichheit.',
      table: {
        headers: ['Hart', 'Weich', 'Ungefährer Anker', 'Beispiel hart → weich'],
        rows: [
          ['б', "б'", 'b / by', 'был → бил'],
          ['п', "п'", 'p / py', 'пыль → пить'],
          ['м', "м'", 'm / my', 'мы → мир'],
          ['в', "в'", 'v / vy', 'вы → вид'],
          ['ф', "ф'", 'f / fy', 'факт → фильм'],
          ['д', "д'", 'd / dy', 'дышать → диван'],
          ['т', "т'", 't / ty', 'ты → тихо'],
          ['н', "н'", 'n / ny', 'ныть → низ'],
          ['з', "з'", 'z / zy', 'зыбкий → зима'],
          ['с', "с'", 's / sy', 'сын → синий'],
          ['л', "л'", 'l / ly (dunkel vs. hell)', 'лыжи → лиса'],
          ['р', "р'", 'gerolltes r / weiches r', 'рынок → рис'],
          ['г', "г'", 'g / gy', 'гусь → гимн'],
          ['к', "к'", 'k / ky', 'куст → кино'],
          ['х', "х'", 'loch / weicheres ch', 'хата → химия'],
        ],
        caption: 'Russische harte/weiche Konsonantenpaare',
        boldColumnIndices: [0, 1],
      },
      subsections: [
        {
          h3: 'Immer hart (kein weicher Zwilling in der Standard-Paarung)',
          content:
            '**ж, ш, ц** sind hart. Auch wenn die Schreibweise „weich“ wirkt, bleibt die Aussprache hart: **жить**, **шире**, **цикл**.',
        },
        {
          h3: 'Immer weich',
          content:
            '**ч, щ, й** sind weich. **Чай**, **щека**, **мой** werden nie zu einem harten Zwilling desselben Buchstabens.',
        },
      ],
    },
    {
      h2: 'Weichheitszeichen, weiche Vokale und Й',
      content:
        'Russisch markiert Weichheit auf drei Hauptwegen. Sie brauchen alle drei, um genau zu lesen.',
      subsections: [
        {
          h3: '1. Weiche Vokale: е, ё, и, ю, я',
          content:
            'Nach einem Konsonanten signalisieren sie meist, dass der Konsonant weich ist: **нет** (weiches n), **мёд**, **пила**, **люблю**, **мяч**.\n\nAm Wortanfang (oder nach einem Vokal) enthalten sie oft einen **j-Gleitlaut**: **ель**, **ёлка**, **юбка**, **яблоко**.',
        },
        {
          h3: '2. Weichheitszeichen ь',
          content:
            'Das Weichheitszeichen hat **keinen eigenen Laut**. Es weicht den Konsonanten davor: **мать**, **день**, **соль**, **словарь**.\n\nEs erscheint auch mitten im Wort, um einen Konsonanten vor einem anderen Buchstaben weich zu halten: **семья**.',
        },
        {
          h3: '3. Härtezeichen ъ',
          content:
            'Das Härtezeichen hat ebenfalls keinen Laut. Es blockiert das Weichen / trennt ein Präfix von einem weichen Vokal: **объект**, **съесть**. Anfänger treffen es seltener als ь — lernen Sie es als Trenner, nicht als „Knopf für harte Aussprache“.',
        },
        {
          h3: '4. Й',
          content:
            '**Й** ist der Konsonant „j“ (wie in „Boy“). Er ist in der Qualität immer weich und häufig in Endungen und diphthongartigen Sequenzen: **мой**, **русский**, **чай**.',
        },
      ],
      bullets: [
        'Harte Vokale, die typischerweise harten Konsonanten folgen: **а, о, у, ы, э**.',
        'Wenn Sie nur Buchstaben ohne Weichheit lernen, klingt Russisch „flach“ und Akzent-/Endungs-Hinweise sind schwerer zu hören.',
      ],
    },
    {
      h2: 'Wie Weichheit Wortendungen verändert',
      content:
        'Weichheit ist nicht nur Aussprache — sie speist die Grammatik. Weiche Stämme nehmen den „weichen“ Endungssatz.',
      table: {
        headers: ['Beispiel harter Stamm', 'Beispiel weicher Stamm', 'Was sich ändert'],
        rows: [
          [
            'новый (Adj.)',
            'синий (Adj.)',
            'Adjektivendungen: -ого vs -его, -ым vs -им…',
          ],
          ['стол → стола', 'словарь → словаря', 'Genitiv des Substantivs: -а vs -я'],
          [
            'карта → карте',
            'земля → земле',
            'Weiche feminine Stämme bevorzugen -е/-и-Muster',
          ],
          ['мы', 'милиция', 'ы erscheint nach harten Stämmen; и nach weichen'],
        ],
        caption: 'Weichheit verbindet Aussprache mit Deklinationsendungen',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Deshalb werden weiche Adjektive separat in unserem [Adjektivdeklination-Guide](/learn/articles/russian-adjective-declension) behandelt.',
        'Genus + harter/weicher Stamm wählen zusammen die Endungstabelle — siehe auch [Genus der Substantive](/learn/articles/russian-noun-gender-guide) und den [Spickzettel der Fallendungen](/learn/articles/russian-case-endings-cheatsheet).',
      ],
    },
    {
      h2: 'Ы vs И: Die klassische Verwechslung',
      content:
        'Deutschsprachige hören **ы** und **и** oft als dasselbe „i“. Russische Muttersprachler nicht.',
      table: {
        headers: ['Buchstabe', 'Wann er erscheint', 'Gefühl / Tipp', 'Beispiel'],
        rows: [
          [
            'и',
            'Nach weichen Konsonanten; Standard-„i“',
            'Zunge nach vorn, leichtes Lächeln',
            'мир, синий, пить',
          ],
          [
            'ы',
            'Nach harten Konsonanten',
            'Zunge zurückgezogen, dunkleres „i“',
            'мы, сын, ты',
          ],
        ],
        caption: 'Ы vs и — Verteilung und Gefühl',
        boldColumnIndices: [0],
      },
      subsections: [
        {
          h3: 'Schreibregel (praktisch)',
          content:
            'Nach **г, к, х, ж, ш, щ, ч** schreibt Russisch **и**, nicht **ы** (жир, шить, чистый) — auch wenn ж/ш in der Aussprache hart bleiben. Das ist eine Schreibkonvention, die Sie auswendig lernen müssen.',
        },
      ],
      bullets: [
        'Minimaler Kontrast: **бил** (er schlug) vs **был** (er war) — weiches б+и vs hartes б+ы.',
        'Wenn Ihr **ы** identisch wie **и** klingt, nehmen Sie sich auf und vergleichen Sie mit nativem Audio; die Zungenposition ist die Lösung, nicht die Lautstärke.',
      ],
    },
    {
      h2: 'Minimalpaare zum Ohrtraining',
      content:
        'Trainieren Sie mit Kontrasten. Sagen Sie jedes Paar langsam, dann in Gesprächstempo.',
      table: {
        headers: ['Hart-nah', 'Weich-nah', 'Bedeutungsunterschied'],
        rows: [
          ['угол', 'уголь', 'Ecke / Kohle'],
          ['был', 'бил', 'war / schlug'],
          ['мат', 'мать', 'Matte (auch vulgärer Slang) / Mutter'],
          ['мол', 'моль', 'Mole / Motte'],
          ['рад', 'ряд', 'froh / Reihe'],
          ['нос', 'нёс', 'Nase / trug (Präteritum von нести)'],
        ],
        caption: 'Minimalpaare für hart-vs-weich-Übung',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Nicht jedes Paar ist ein perfekter Wörterbuch-Zwilling — das Ziel ist, die weiche Geste zu **hören und zu produzieren**.',
        'Nehmen Sie Audio aus jedem Wörterbuch mit Ton dazu; visuelle Tabellen allein reparieren das Ohr nicht.',
      ],
    },
    {
      h2: 'Lesepraxis',
      content:
        'Lesen Sie diese Sätze laut. Markieren Sie weiche Konsonanten mental mit einem Apostroph.',
      table: {
        headers: ['Russisch', 'Fokus', 'Deutsch'],
        rows: [
          [
            'Синий словарь на столе.',
            'weiches с, н, р in словарь',
            'Ein blaues Wörterbuch liegt auf dem Tisch.',
          ],
          [
            'Мать и дочь дома.',
            'Wörter mit Weichheitszeichen',
            'Mutter und Tochter sind zu Hause.',
          ],
          [
            'Мы были в кино.',
            'ы vs и; weiches н in кино',
            'Wir waren im Kino.',
          ],
          [
            'Холодный день в январе.',
            'hartes д/н vs weiches д in день; я-',
            'Ein kalter Tag im Januar.',
          ],
          [
            'Русский язык трудный, но красивый.',
            'immer weiches ч; weiches к in русский',
            'Russisch ist schwer, aber schön.',
          ],
        ],
        caption: 'Kurze Leseübung für hart/weich-Bewusstsein',
        boldColumnIndices: [0],
      },
      bullets: [
        'Lesen Sie eine Woche lang täglich erneut; Tempo kommt nach Genauigkeit.',
        'Dann gehen Sie den [Alphabet-Guide](/learn/articles/russian-alphabet-cyrillic-guide) und den [Wortakzent-Guide](/learn/articles/russian-word-stress-guide) erneut durch — Akzent + Weichheit zusammen erzeugen den echten russischen Rhythmus.',
      ],
    },
    {
      h2: 'Häufige Fehler bei harten und weichen Konsonanten',
      bullets: [
        '**ь ignorieren** — мать wie мат lesen.',
        '**ы = и machen** — мы und ми verschmelzen zu einem Laut.',
        '**ж/ш weichen** — sie bleiben hart, auch vor и.',
        '**ч/щ härten** — sie bleiben weich.',
        '**Endungen ohne Weichheit lernen** — Tabellen mit weichem Stamm wirken zufällig, bis das Ohr nachzieht.',
      ],
    },
  ],
  faq: [
    {
      question: 'Was sind harte und weiche Konsonanten im Russischen?',
      answer:
        'Viele russische Konsonanten kommen in Paaren: ein harter (nicht palatalisierter) und ein weicher (palatalisierter) Laut. Weiche Konsonanten werden mit zur Gaumen angehobener Zunge gesprochen. Der Unterschied kann die Bedeutung ändern und beeinflusst Schreibweise und Grammatikendungen.',
    },
    {
      question: 'Woran erkenne ich, ob ein Konsonant weich ist?',
      answer:
        'Schauen Sie, was folgt. Weiche Vokale е, ё, и, ю, я markieren meist einen weichen Konsonanten; das Weichheitszeichen ь weicht ebenfalls den vorherigen Konsonanten. Einige Buchstaben sind immer weich (ч, щ, й) oder immer hart (ж, ш, ц).',
    },
    {
      question: 'Was ist der Unterschied zwischen ы und и?',
      answer:
        'И ist ein vorderes „i“, das typischerweise weichen Konsonanten folgt. Ы ist ein dunklerer, zurückgezogener Vokal, der harten Konsonanten folgt (мы, сын). Deutschsprachige verschmelzen sie anfangs oft; die Zungenposition ist der Schlüssel.',
    },
    {
      question: 'Macht das Weichheitszeichen einen Laut?',
      answer:
        'Nein. Das Weichheitszeichen ь hat keinen eigenen Laut. Es weicht den Konsonanten davor (und kann Laute innerhalb eines Wortes trennen). Das Härtezeichen ъ ist ebenfalls stumm und trennt vor allem ein Präfix von einem folgenden weichen Vokal.',
    },
    {
      question: 'Warum ist Weichheit für die russischen Fälle wichtig?',
      answer:
        'Substantive und Adjektive mit weichem Stamm nehmen andere Endungsvokale als harte Stämme (z. B. -я/-ю/-е-Muster vs -а/-у/-о und weiche Adjektivendungen wie -его/-ему). Weichheit zu hören hilft, automatisch die richtige Deklinationstabelle zu wählen.',
    },
  ],
  conclusionIntro:
    'Hart vs. weich ist die verborgene Schicht unter dem Kyrillisch-Lesen — und unter vielen Endungen.',
  conclusionBullets: [
    'Behandeln Sie gepaarte Konsonanten als **harte/weiche Zwillinge**',
    'Lesen Sie Weichheit aus **weichen Vokalen**, **ь** und immer weichen Buchstaben',
    'Trennen Sie **ы** (hart) von **и** (weich / vorn)',
    'Verbinden Sie Weichheit mit **Endungstabellen** für Substantive und Adjektive',
    'Trainieren Sie mit **Minimalpaaren** und kurzem täglichen Lautlesen',
  ],
  conclusionOutro:
    'Wenn Weichheit automatisch wird, wirken Grammatiktabellen nicht mehr willkürlich. Machen Sie weiter mit den Guides zu [Alphabet](/learn/articles/russian-alphabet-cyrillic-guide), [Akzent](/learn/articles/russian-word-stress-guide) und [Adjektivendungen](/learn/articles/russian-adjective-declension) — und üben Sie Formen in unserem kostenlosen [Übungstool](/practice).',
  internalLinks: [
    {
      href: '/learn/articles/russian-alphabet-cyrillic-guide',
      label: 'Russisches Alphabet: Kyrillisch in 3 einfachen Schritten',
    },
    {
      href: '/learn/articles/russian-word-stress-guide',
      label: 'Russischer Wortakzent: Warum er alles verändert',
    },
    {
      href: '/learn/articles/russian-adjective-declension',
      label: 'Russische Adjektivdeklination: Endungstabelle',
    },
    {
      href: '/learn/articles/russian-case-endings-cheatsheet',
      label: 'Spickzettel der russischen Fallendungen',
    },
    {
      href: '/learn/articles/russian-nominative-case',
      label: 'Guide zum russischen Nominativ',
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
    headline:
      'Harte und weiche Konsonanten im Russischen: Der Aussprache-Guide, den Anfänger überspringen',
    description:
      'Lernen Sie harte und weiche russische Konsonanten: Paare, Weichheitszeichen, weiche Vokale, ы vs и und wie Weichheit Endungen verändert — mit Minimalpaaren und Lesepraxis.',
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
      '@id': 'https://russiandeclensions.com/learn/articles/russian-hard-soft-consonants-guide',
    },
    keywords:
      'harte und weiche Konsonanten Russisch, weiche Konsonanten Russisch, Weichheitszeichen Russisch, ы vs и Russisch, Palatalisierung Russisch',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russian-hard-soft-consonants-header.webp',
      width: 1280,
      height: 720,
    },
  },
};
