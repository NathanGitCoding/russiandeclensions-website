import type { LearnArticle } from '../learnArticles';

/** Traduction française de l'article `russian-hard-soft-consonants-guide` (source EN : `learnArticles.ts`). */
export const russianHardSoftConsonantsGuideFr: LearnArticle = {
  slug: 'russian-hard-soft-consonants-guide',
  introByline: {
    text: '**Rédigé par Nathan** — francophone passionné de russe ; je partage ce qui fonctionne vraiment pour la grammaire, les cas et la pratique au quotidien.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, fondateur de Russian Cases with Anna',
    imageWidth: 256,
    imageHeight: 256,
  },
  title: 'Consonnes dures et molles en russe : le guide de prononciation que les débutants sautent',
  metaTitle: 'Consonnes dures et molles en russe | Russian Cases with Anna',
  metaDescription:
    'Apprenez les consonnes dures et molles en russe : paires, signe mou, voyelles molles, ы vs и, et l’effet sur les terminaisons — avec paires minimales.',
  keywords: [
    'consonnes dures et molles russe',
    'consonnes molles russe',
    'paires dures molles russe',
    'signe mou russe',
    'ы vs и russe',
    'palatalisation russe',
    'prononciation russe débutants',
    'consonnes dures vs molles russe',
  ],
  h1: 'Consonnes dures et molles en russe : le guide de prononciation que les débutants sautent',
  heroImage: {
    src: '/articles/russian-hard-soft-consonants-header.webp',
    alt: 'Tableau avec des paires de consonnes dures et molles russes pour la prononciation',
    width: 1280,
    height: 720,
  },
  intro:
    'La plupart des débutants apprennent l’alphabet cyrillique, puis se précipitent sur le vocabulaire — et sautent le système de prononciation qui fait *sonner* le russe comme du russe : **consonnes dures vs molles**.\n\nLa mollesse (palatalisation) n’est pas décorative. Elle peut changer le sens (**угол** « coin » vs **уголь** « charbon »), elle décide si l’on écrit **ы** ou **и**, et elle explique pourquoi les adjectifs et noms à thème mou prennent des terminaisons différentes. Ce guide vous donne les paires, les règles du signe mou / des voyelles molles, le piège **ы vs и**, des paires minimales et un court exercice de lecture.',
  whatYouLearn: [
    'Ce que signifient « dure » et « molle » en prononciation russe',
    'Les paires de consonnes dures/molles (avec ancres approximatives en français/anglais)',
    'Comment le signe mou, les voyelles molles et й créent la mollesse',
    'Comment la mollesse apparaît dans les terminaisons (lien avec la grammaire)',
    'Ы vs и — la confusion classique',
    'Paires minimales et un court exercice de lecture',
  ],
  leadMagnetCta: {
    title: 'Prononciation + cas = des mots vraiment utilisables',
    description:
      'Une fois les terminaisons claires à l’oreille, entraînez-les en contexte. Russian Cases with Anna entraîne les six cas avec la répétition espacée. Gratuit sur iOS et Android.',
    ctaText: 'Téléchargez l’app — Gratuit',
    ctaHref: '/',
  },
  tableAccentVariant: 'nominative',
  sections: [
    {
      h2: 'Ce que signifient « dure » et « molle » en russe',
      content:
        'En russe, beaucoup de consonnes viennent en **paires** : une version **dure** et une version **molle**. Les consonnes molles se prononcent avec le milieu de la langue relevé vers le palais — une légère qualité « y » sans ajouter une syllabe entière.\n\nLe français et l’anglais ne le font qu’occasionnellement (le n de « oignon » est plus proche du mou que le n de « non »). Le russe le fait **systématiquement**, sur la plupart des consonnes, dans presque chaque mot.',
      bullets: [
        'Dure ≠ « fort » et molle ≠ « faible ». Molle signifie **palatalisée**.',
        'La même forme de lettre peut représenter un son dur ou mou selon ce qui suit (ou un signe mou).',
        'Certaines consonnes sont **toujours dures** ou **toujours molles** — elles n’ont pas de paire.',
      ],
    },
    {
      h2: 'Les paires de consonnes dures/molles',
      content:
        'Voici les consonnes appariées. Apprenez-les comme des jumeaux : même lieu d’articulation, mollesse différente.',
      table: {
        headers: ['Dure', 'Molle', 'Ancre approximative', 'Exemple dure → molle'],
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
          ['л', "л'", 'l / ly (sombre vs clair)', 'лыжи → лиса'],
          ['р', "р'", 'r roulé / r mou', 'рынок → рис'],
          ['г', "г'", 'g / gy', 'гусь → гимн'],
          ['к', "к'", 'k / ky', 'куст → кино'],
          ['х', "х'", 'loch / kh plus doux', 'хата → химия'],
        ],
        caption: 'Paires de consonnes dures/molles en russe',
        boldColumnIndices: [0, 1],
      },
      subsections: [
        {
          h3: 'Toujours dures (pas de jumeau mou dans l’appariement standard)',
          content:
            '**ж, ш, ц** sont dures. Même quand l’orthographe a l’air « molle », la prononciation reste dure : **жить**, **шире**, **цикл**.',
        },
        {
          h3: 'Toujours molles',
          content:
            '**ч, щ, й** sont molles. **Чай**, **щека**, **мой** ne durcissent jamais en un jumeau dur de la même lettre.',
        },
      ],
    },
    {
      h2: 'Signe mou, voyelles molles et Й',
      content:
        'Le russe marque la mollesse de trois façons principales. Il vous faut les trois pour lire correctement.',
      subsections: [
        {
          h3: '1. Voyelles molles : е, ё, и, ю, я',
          content:
            'Après une consonne, elles signalent en général que la consonne est molle : **нет** (n mou), **мёд**, **пила**, **люблю**, **мяч**.\n\nEn début de mot (ou après une voyelle), elles incluent souvent une **glisse en y** : **ель**, **ёлка**, **юбка**, **яблоко**.',
        },
        {
          h3: '2. Signe mou ь',
          content:
            'Le signe mou n’a **aucun son propre**. Il amollit la consonne qui le précède : **мать**, **день**, **соль**, **словарь**.\n\nIl apparaît aussi au milieu des mots pour garder une consonne molle devant une autre lettre : **семья**.',
        },
        {
          h3: '3. Signe dur ъ',
          content:
            'Le signe dur n’a pas non plus de son. Il bloque l’amollissement / sépare un préfixe d’une voyelle molle : **объект**, **съесть**. Les débutants le rencontrent moins souvent que ь — apprenez-le comme un séparateur, pas comme un « bouton de prononciation dure ».',
        },
        {
          h3: '4. Й',
          content:
            '**Й** est la consonne « y » (comme dans « boy »). Elle est toujours molle en qualité et fréquente dans les terminaisons et les séquences de type diphtongue : **мой**, **русский**, **чай**.',
        },
      ],
      bullets: [
        'Voyelles dures qui suivent typiquement les consonnes dures : **а, о, у, ы, э**.',
        'Si vous ne mémorisez que les lettres sans la mollesse, le russe sonnera « plat » et les indices d’accent/terminaison seront plus durs à entendre.',
      ],
    },
    {
      h2: 'Comment la mollesse change les terminaisons',
      content:
        'La mollesse n’est pas seulement de la prononciation — elle nourrit la grammaire. Les thèmes mous prennent le jeu de terminaisons « molles ».',
      table: {
        headers: ['Exemple thème dur', 'Exemple thème mou', 'Ce qui change'],
        rows: [
          [
            'новый (adj.)',
            'синий (adj.)',
            'Terminaisons d’adjectifs : -ого vs -его, -ым vs -им…',
          ],
          ['стол → стола', 'словарь → словаря', 'Génitif du nom : -а vs -я'],
          [
            'карта → карте',
            'земля → земле',
            'Les thèmes féminins mous privilégient les schémas -е/-и',
          ],
          ['мы', 'милиция', 'ы apparaît après les thèmes durs ; и après les mous'],
        ],
        caption: 'La mollesse relie la prononciation aux terminaisons de déclinaison',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'C’est pourquoi les adjectifs mous sont traités à part dans notre [guide de déclinaison des adjectifs](/learn/articles/russian-adjective-declension).',
        'Genre du nom + thème dur/mou choisissent ensemble le tableau de terminaisons — voir aussi [le genre des noms](/learn/articles/russian-noun-gender-guide) et l’[aide-mémoire des terminaisons de cas](/learn/articles/russian-case-endings-cheatsheet).',
      ],
    },
    {
      h2: 'Ы vs И : la confusion classique',
      content:
        'Les francophones entendent souvent **ы** et **и** comme le même « i ». L’oreille russe native, non.',
      table: {
        headers: ['Lettre', 'Quand elle apparaît', 'Sensation / astuce', 'Exemple'],
        rows: [
          [
            'и',
            'Après les consonnes molles ; « i » par défaut',
            'Langue en avant, léger sourire',
            'мир, синий, пить',
          ],
          [
            'ы',
            'Après les consonnes dures',
            'Langue tirée en arrière, « i » plus sombre',
            'мы, сын, ты',
          ],
        ],
        caption: 'Ы vs и — distribution et sensation',
        boldColumnIndices: [0],
      },
      subsections: [
        {
          h3: 'Règle d’orthographe (pratique)',
          content:
            'Après **г, к, х, ж, ш, щ, ч**, le russe écrit **и**, pas **ы** (жир, шить, чистый) — même quand ж/ш restent dures à la prononciation. C’est une convention orthographique à mémoriser.',
        },
      ],
      bullets: [
        'Contraste minimal : **бил** (il a battu) vs **был** (il était) — б mou+и vs б dur+ы.',
        'Si votre **ы** sonne identique à **и**, enregistrez-vous et comparez à un audio natif ; c’est la position de la langue qui corrige, pas le volume.',
      ],
    },
    {
      h2: 'Paires minimales pour entraîner l’oreille',
      content:
        'Entraînez-vous avec des contrastes. Dites chaque paire lentement, puis à vitesse de conversation.',
      table: {
        headers: ['Versant dur', 'Versant mou', 'Contraste de sens'],
        rows: [
          ['угол', 'уголь', 'coin / charbon'],
          ['был', 'бил', 'était / a battu'],
          ['мат', 'мать', 'mat (argot vulgaire aussi) / mère'],
          ['мол', 'моль', 'jetée / mite'],
          ['рад', 'ряд', 'content / rangée'],
          ['нос', 'нёс', 'nez / a porté (passé de нести)'],
        ],
        caption: 'Paires minimales pour s’entraîner au dur vs mou',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Toutes les paires ne sont pas des jumeaux parfaits de dictionnaire — le but est **d’entendre et de produire** le geste mou.',
        'Ajoutez de l’audio depuis n’importe quel dictionnaire avec son ; les tableaux seuls ne corrigeront pas l’oreille.',
      ],
    },
    {
      h2: 'Exercice de lecture',
      content:
        'Lisez à voix haute. Marquez mentalement les consonnes molles d’une apostrophe au fur et à mesure.',
      table: {
        headers: ['Russe', 'Focus', 'Français'],
        rows: [
          [
            'Синий словарь на столе.',
            'с, н, р mous dans словарь',
            'Un dictionnaire bleu est sur la table.',
          ],
          [
            'Мать и дочь дома.',
            'mots avec signe mou',
            'La mère et la fille sont à la maison.',
          ],
          [
            'Мы были в кино.',
            'ы vs и ; н mou dans кино',
            'Nous étions au cinéma.',
          ],
          [
            'Холодный день в январе.',
            'д/н durs vs д mou dans день ; я-',
            'Une journée froide en janvier.',
          ],
          [
            'Русский язык трудный, но красивый.',
            'ч toujours mou ; к mou dans русский',
            'Le russe est difficile mais beau.',
          ],
        ],
        caption: 'Court exercice de lecture pour la conscience dure/molle',
        boldColumnIndices: [0],
      },
      bullets: [
        'Relisez chaque jour pendant une semaine ; la vitesse vient après la précision.',
        'Puis revisitez le [guide de l’alphabet](/learn/articles/russian-alphabet-cyrillic-guide) et le [guide de l’accent](/learn/articles/russian-word-stress-guide) — accent + mollesse créent ensemble le vrai rythme russe.',
      ],
    },
    {
      h2: 'Erreurs fréquentes avec les consonnes dures et molles',
      bullets: [
        '**Ignorer ь** — lire мать comme мат.',
        '**Faire ы = и** — мы et ми fusionnent en un seul son.',
        '**Amollir ж/ш** — elles restent dures même devant и.',
        '**Durcir ч/щ** — elles restent molles.',
        '**Apprendre les terminaisons sans la mollesse** — les tableaux à thème mou sembleront aléatoires jusqu’à ce que l’oreille rattrape.',
      ],
    },
  ],
  faq: [
    {
      question: 'Que sont les consonnes dures et molles en russe ?',
      answer:
        'Beaucoup de consonnes russes viennent en paires : un son dur (non palatalisé) et un son mou (palatalisé). Les consonnes molles se prononcent avec la langue relevée vers le palais. La différence peut changer le sens et affecte l’orthographe et les terminaisons grammaticales.',
    },
    {
      question: 'Comment savoir si une consonne est molle ?',
      answer:
        'Regardez ce qui la suit. Les voyelles molles е, ё, и, ю, я marquent en général une consonne molle ; le signe mou ь amollit aussi la consonne précédente. Certaines lettres sont toujours molles (ч, щ, й) ou toujours dures (ж, ш, ц).',
    },
    {
      question: 'Quelle est la différence entre ы et и ?',
      answer:
        'И est un « i » antérieur qui suit typiquement les consonnes molles. Ы est une voyelle plus sombre, plus rétractée, qui suit les consonnes dures (мы, сын). Les francophones les fusionnent souvent au début ; la position de la langue est la distinction clé.',
    },
    {
      question: 'Le signe mou produit-il un son ?',
      answer:
        'Non. Le signe mou ь n’a aucun son propre. Il amollit la consonne qui le précède (et peut séparer des sons à l’intérieur d’un mot). Le signe dur ъ est aussi silencieux et sépare surtout un préfixe d’une voyelle molle qui suit.',
    },
    {
      question: 'Pourquoi la mollesse compte-t-elle pour les cas russes ?',
      answer:
        'Les noms et adjectifs à thème mou prennent des voyelles de terminaison différentes des thèmes durs (par exemple schémas -я/-ю/-е vs -а/-у/-о, et terminaisons d’adjectifs molles comme -его/-ему). Entendre la mollesse aide à choisir automatiquement le bon tableau de déclinaison.',
    },
  ],
  conclusionIntro:
    'Dure vs molle est la couche cachée sous la lecture cyrillique — et sous beaucoup de terminaisons.',
  conclusionBullets: [
    'Traitez les consonnes appariées comme des **jumeaux durs/mous**',
    'Lisez la mollesse via les **voyelles molles**, **ь**, et les lettres toujours molles',
    'Séparez **ы** (dur) de **и** (mou / antérieur)',
    'Reliez la mollesse aux **tableaux de terminaisons** des noms et adjectifs',
    'Entraînez-vous avec des **paires minimales** et une courte lecture quotidienne à voix haute',
  ],
  conclusionOutro:
    'Quand la mollesse commence à devenir automatique, les tableaux de grammaire cessent de paraître arbitraires. Continuez avec les guides de l’[alphabet](/learn/articles/russian-alphabet-cyrillic-guide), de l’[accent](/learn/articles/russian-word-stress-guide) et des [terminaisons d’adjectifs](/learn/articles/russian-adjective-declension) — puis entraînez les formes dans notre [outil de pratique](/practice) gratuit.',
  internalLinks: [
    {
      href: '/learn/articles/russian-alphabet-cyrillic-guide',
      label: 'Alphabet russe : apprendre le cyrillique en 3 étapes simples',
    },
    {
      href: '/learn/articles/russian-word-stress-guide',
      label: 'Accent des mots russes : pourquoi tout change',
    },
    {
      href: '/learn/articles/russian-adjective-declension',
      label: 'Déclinaison des adjectifs russes : tableau des terminaisons',
    },
    {
      href: '/learn/articles/russian-case-endings-cheatsheet',
      label: 'Aide-mémoire des terminaisons de cas russes',
    },
    {
      href: '/learn/articles/russian-nominative-case',
      label: 'Guide du nominatif russe',
    },
    {
      href: '/practice',
      label: 'Quiz gratuit de déclinaison russe',
    },
  ],
  ctaText: 'Entraînez les cas russes — Gratuit →',
  ctaHref: '/practice',
  conclusion: '',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      'Consonnes dures et molles en russe : le guide de prononciation que les débutants sautent',
    description:
      'Apprenez les consonnes dures et molles en russe : paires, signe mou, voyelles molles, ы vs и, et comment la mollesse change les terminaisons — avec paires minimales et lecture.',
    datePublished: '2026-09-13',
    dateModified: '2026-09-13',
    author: {
      '@type': 'Person',
      name: 'Nathan',
      url: 'https://russiandeclensions.com/',
      image: 'https://russiandeclensions.com/landing-cases/founder-photo.webp',
      description:
        'Francophone passionné de russe ; écrit sur la grammaire, les cas et les habitudes d’auto-apprentissage pratiques.',
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
      'consonnes dures et molles russe, consonnes molles russe, signe mou russe, ы vs и russe, palatalisation russe',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russian-hard-soft-consonants-header.webp',
      width: 1280,
      height: 720,
    },
  },
};
