import type { LearnArticle } from '../learnArticles';

/** Traduction française de l’article `russian-accusative-case` (source EN : `learnArticles.ts`). Cyrillique copié à l’identique. */
export const russianAccusativeCaseFr: LearnArticle = {
  slug: 'russian-accusative-case',
  title:
    'Cas accusatif russe : compléments directs, animé vs inanimé et verbes de mouvement',
  metaTitle:
    'Cas accusatif russe : règles, terminaisons et 30 exemples | Russian Cases with Anna',
  metaDescription:
    'Guide complet du cas accusatif en russe : tableau des terminaisons, règle animé/inanimé, verbes de mouvement, в/на direction vs lieu, 9 prépositions, 15 verbes transitifs, 30 exemples réels.',
  keywords: [
    'cas accusatif russe',
    'terminaisons accusatif russe',
    'animé inanimé accusatif russe',
    'complément d’objet direct russe',
    'verbes de mouvement accusatif russe',
    'в на accusatif russe',
  ],
  h1: 'Cas accusatif russe : compléments directs, animé vs inanimé et verbes de mouvement',
  heroImage: {
    src: '/articles/free-russian-lesson-accusative-case.webp',
    alt: 'Leçon de russe gratuite sur le cas accusatif : compléments directs et verbes de mouvement',
    width: 1200,
    height: 630,
  },
  intro:
    'Le cas accusatif russe est le **deuxième cas le plus important** à maîtriser après le génitif — et à bien des égards, c’est le plus intuitif. Il marque le **complément d’objet direct** de la phrase : la personne ou la chose directement affectée par l’action du verbe.\n\nMais l’accusatif a une particularité qui surprend tout apprenant : la **distinction animé / inanimé**. Pour les noms masculins, les référents animés et inanimés ne se déclinent pas pareil à l’accusatif — et comprendre cette règle est indispensable pour parler russe correctement.',
  whatYouLearn: [
    'Ce qu’est le cas accusatif russe et ses **4 emplois centraux**',
    'Terminaisons de l’accusatif pour **tous les genres** (singulier et pluriel)',
    'La **distinction animé / inanimé** — la principale source de confusion',
    'Les **verbes de mouvement** russes et l’emploi de l’accusatif',
    '**В et НА** avec l’accusatif (direction) vs prépositionnel (lieu)',
    'Les **9 prépositions** qui exigent l’accusatif',
    'Les **expressions de temps** avec l’accusatif',
    '**15 verbes** incontournables avec complément à l’accusatif',
    '**30 exemples** russes réels avec translittération et traduction',
    'Accusatif vs génitif — comment les distinguer',
  ],
  leadMagnetCta: {
    title: 'Entraînez le cas accusatif russe avec des exercices intelligents',
    description:
      'Notre application mobile couvre les 6 cas du russe — avec un accent sur animé/inanimé, les verbes de mouvement et в/на (direction vs lieu). Disponible sur Android et iOS.',
    ctaText: 'Téléchargez l’app et commencez à vous entraîner dès aujourd’hui',
    ctaHref: '/',
  },
  internalLinks: [
    {
      href: '/learn/lessons/russian-cases-complete-guide',
      label:
        'Guide complet des cas russes : les 6 cas expliqués avec des exemples',
    },
    {
      href: '/learn/articles/russian-case-endings-cheatsheet',
      label: 'Terminaisons des cas russes : l’aide-mémoire ultime',
    },
    {
      href: '/learn/articles/russian-genitive-case',
      label:
        'Cas génitif russe : règles, terminaisons et 32 exemples réels',
    },
    {
      href: '/learn/lessons/dative-case-declension',
      label:
        'Cas datif russe : comment dire « à » et « pour » en russe',
    },
  ],
  sections: [
    {
      h2: 'Réponse rapide',
      content:
        'Le cas accusatif en russe répond aux questions **Кого ? (qui ? / qui est-ce que ?)** et **Что ? (quoi ?)**. Il marque les compléments d’objet direct, exprime la direction avec в et на, et apparaît dans les expressions de temps.\n\nSa principale difficulté est la **distinction animé / inanimé** pour les noms masculins.',
    },
    {
      h2: 'Qu’est-ce que le cas accusatif russe ?',
      content:
        'Le cas accusatif (**Винительный падеж**) est le quatrième des six cas russes. Son rôle principal est de marquer le **complément d’objet direct** d’un verbe transitif — le nom qui reçoit directement l’action.\n\nEn anglais, on ne modifie pas le mot selon son rôle. En russe, le nom change de terminaison pour signaler qu’il est complément d’objet direct.',
      subsections: [
        {
          h3: 'Le cas accusatif s’emploie pour :',
          content: '',
          bullets: [
            'Les **compléments d’objet direct** des verbes transitifs (Я вижу кота. — Je vois le chat.)',
            'La **direction** avec в et на (Я иду в школу. — Je vais à l’école.)',
            'Les **expressions de temps** (всю неделю — toute la semaine ; через час — dans une heure)',
            'Les **jours de la semaine** avec в (в понедельник — lundi)',
            'Après plusieurs prépositions précises : **за**, **через**, **про**, **под**, **сквозь**, **спустя**, **о**',
          ],
        },
      ],
    },
    {
      h2: 'Terminaisons du cas accusatif russe — tableau complet',
      content:
        'Les terminaisons de l’accusatif dépendent du **genre** du nom, de la **base** (dure ou molle) et — pour les masculins — du fait que le nom soit **animé** ou **inanimé**.\n\nVoici le tableau de référence complet :',
      table: {
        caption: 'Terminaisons à l’accusatif selon le type de nom — singulier et pluriel',
        boldColumnIndices: [3],
        headers: [
          'Type de nom',
          'Règle',
          'Nominatif',
          'Accusatif',
          'Phrase d’exemple',
        ],
        rows: [
          [
            'Masc. inanimé (dur)',
            '= nom. (inchangé)',
            'стол',
            'стол',
            'Я вижу стол. — Je vois la table.',
          ],
          [
            'Masc. inanimé (mou)',
            '= nom. (inchangé)',
            'музей',
            'музей',
            'Я вижу музей. — Je vois le musée.',
          ],
          [
            'Masc. animé (dur)',
            '= gén. (-а)',
            'студент',
            'студента',
            'Я вижу студента. — Je vois l’étudiant.',
          ],
          [
            'Masc. animé (mou)',
            '= gén. (-я)',
            'гений',
            'гения',
            'Я вижу гения. — Je vois le génie.',
          ],
          [
            'Fém. dur (-а)',
            '-у',
            'женщина',
            'женщину',
            'Я вижу женщину. — Je vois la femme.',
          ],
          [
            'Fém. mou (-я)',
            '-ю',
            'земля',
            'землю',
            'Я вижу землю. — Je vois la terre.',
          ],
          [
            'Fém. (-ь) inanimé',
            '= nom. (-ь)',
            'ночь',
            'ночь',
            'Я люблю ночь. — J’aime la nuit.',
          ],
          [
            'Fém. (-ь) animé',
            '= nom. (-ь)',
            'мышь',
            'мышь',
            'Я вижу мышь. — Je vois la souris.',
          ],
          [
            'Neutre (dur -о)',
            '= nom. (-о)',
            'окно',
            'окно',
            'Я вижу окно. — Je vois la fenêtre.',
          ],
          [
            'Neutre (mou -е)',
            '= nom. (-е)',
            'море',
            'море',
            'Я вижу море. — Je vois la mer.',
          ],
          [
            'Pluriel inanimé',
            '= nom. pl.',
            'столы',
            'столы',
            'Я вижу столы. — Je vois les tables.',
          ],
          [
            'Pluriel animé',
            '= gén. pl.',
            'студенты',
            'студентов',
            'Я вижу студентов. — Je vois les étudiants.',
          ],
        ],
      },
      bullets: [
        '**Féminin -а** — -а → -у : книга → книгу',
        '**Féminin -я** — -я → -ю : неделя → неделю',
        '**Masculin inanimé** — pas de changement (nominatif) : стол → стол',
        '**Masculin animé** — forme du génitif : студент → студента',
        '**Neutre** et **féminin -ь** — inchangé (= nominatif)',
      ],
    },
    {
      h2: 'Animé vs inanimé : la règle accusative la plus importante',
      content:
        'Les **noms masculins animés** (personnes et animaux) prennent la **forme du génitif** à l’accusatif. Les **noms masculins inanimés** restent inchangés (forme du nominatif).\n\nC’est la caractéristique distinctive de l’accusatif russe — et la première source d’erreurs.',
      subsections: [
        {
          h3: 'Qu’est-ce qui compte comme « animé » ?',
          content:
            'En grammaire russe, **animé** désigne les personnes et les animaux — les êtres vivants.\n\nIl existe toutefois des **exceptions surprenantes** :',
        },
      ],
      table: {
        caption:
          '12 exemples concrets, y compris des cas animé/inanimé surprenants',
        boldColumnIndices: [2],
        headers: ['Nom', 'Animé / inanimé', 'Forme à l’accusatif', 'Remarque'],
        rows: [
          [
            '🤝 друг (ami)',
            'animé',
            'Я вижу друга.',
            'Accusatif = forme du génitif (друга)',
          ],
          [
            '👨‍⚕️ врач (médecin)',
            'animé',
            'Я слушаю врача.',
            'Accusatif = forme du génitif (врача)',
          ],
          [
            '🐱 кот (chat)',
            'animé',
            'Я глажу кота.',
            'Les animaux sont animés (кота)',
          ],
          [
            '👶 ребёнок (enfant)',
            'animé',
            'Мама видит ребёнка.',
            'Accusatif = génitif (ребёнка)',
          ],
          [
            '🏛️ президент (président)',
            'animé',
            'Я уважаю президента.',
            'Les personnes sont toujours animées',
          ],
          [
            '🪑 стол (table)',
            'inanimé',
            'Я вижу стол.',
            'Accusatif = nominatif (inchangé)',
          ],
          [
            '🎬 фильм (film)',
            'inanimé',
            'Я смотрю фильм.',
            'Accusatif = nominatif (inchangé)',
          ],
          [
            '🏙️ город (ville)',
            'inanimé',
            'Я люблю этот город.',
            'Les lieux sont inanimés',
          ],
          [
            '💀 труп (cadavre)',
            'inanimé',
            'Детектив нашёл труп.',
            'Les cadavres sont grammaticalement inanimés !',
          ],
          [
            '🪆 кукла (poupée)',
            'inanimé',
            'Девочка любит куклу.',
            'Les jouets sont inanimés (куклу — fém.)',
          ],
          [
            '🃏 туз (as aux cartes)',
            'animé*',
            'Он поставил туза.',
            'Les cartes à jouer = animées par convention !',
          ],
          [
            '♕ ферзь (dame aux échecs)',
            'animé*',
            'Он взял ферзя.',
            'Les pièces d’échecs = animées par convention !',
          ],
        ],
      },
      bullets: [
        '**Animé (inattendu) :** cartes à jouer (туз, король, дама), pièces d’échecs (ферзь, конь)',
        '**Inanimé (inattendu) :** труп (cadavre), кукла (poupée), снеговик (bonhomme de neige)',
        '**Pluriel inanimé** — pluriel du nominatif : Я вижу столы',
        '**Pluriel animé** — pluriel du génitif : Я вижу студентов',
      ],
    },
    {
      h2: 'Verbes de mouvement russes et cas accusatif',
      content:
        'Les verbes de mouvement emploient **в ou на + accusatif** pour indiquer la direction. Le russe possède un système riche de verbes de mouvement.\n\nTous emploient в/на + accusatif pour la direction :',
      table: {
        caption:
          '10 verbes de mouvement principaux + unidirectionnel vs multidirectionnel',
        boldColumnIndices: [2],
        headers: [
          'Verbe',
          'Sens',
          'Exemple avec В/НА + acc.',
          'Traduction',
        ],
        rows: [
          [
            'идти / ходить',
            '🚶 aller (à pied)',
            'Я иду в школу.',
            'Je vais à l’école (en ce moment)',
          ],
          [
            'ехать / ездить',
            '🚗 aller (en véhicule)',
            'Мы едем на работу.',
            'Nous allons au travail',
          ],
          [
            'бежать / бегать',
            '🏃 courir',
            'Он бежит на стадион.',
            'Il court vers le stade',
          ],
          [
            'лететь / летать',
            '✈️ voler',
            'Самолёт летит в Москву.',
            'L’avion vole vers Moscou',
          ],
          [
            'плыть / плавать',
            '🏊 nager / naviguer',
            'Корабль плывёт в порт.',
            'Le navire entre au port',
          ],
          [
            'везти / возить',
            '🚐 transporter (véhicule)',
            'Он везёт детей в школу.',
            'Il conduit les enfants à l’école',
          ],
          [
            'нести / носить',
            '📦 porter (à pied)',
            'Она несёт цветы на стол.',
            'Elle apporte des fleurs sur la table',
          ],
          [
            'ползти / ползать',
            '🐛 ramper',
            'Ребёнок ползёт на диван.',
            'L’enfant rampe vers le canapé',
          ],
          [
            'прийти (perf.)',
            '🎯 arriver / venir',
            'Приходи на вечеринку!',
            'Viens à la fête !',
          ],
          [
            'вернуться (perf.)',
            '↩️ revenir',
            'Он вернулся в город.',
            'Il est revenu en ville',
          ],
        ],
      },
      bullets: [
        '**Unidirectionnel** (un trajet, maintenant) : идти, ехать, лететь — Я иду в школу.',
        '**Multidirectionnel** (habituel, allers-retours) : ходить, ездить, летать — Я хожу в школу каждый день.',
        'Les deux emploient **в + accusatif** pour la direction — la règle de cas est la même.',
      ],
    },
    {
      h2: 'В et НА avec l’accusatif : direction vs lieu',
      content:
        'Les prépositions **в** et **на** s’emploient chacune avec **deux cas différents** selon que la phrase exprime la **direction** (mouvement vers) ou le **lieu** (être quelque part).\n\nÉtudiez bien ces paires :',
      image: {
        src: '/articles/russian-accusative-case-direction-vs-location.webp',
        alt: 'Schéma du cas accusatif russe : direction vs lieu avec в et на',
        width: 1200,
        height: 630,
      },
      table: {
        caption:
          '10 paires côte à côte : accusatif (direction) vs prépositionnel (lieu)',
        boldColumnIndices: [0, 1],
        headers: [
          'Construction',
          'Exemple russe',
          'Sens',
          'Traduction',
        ],
        rows: [
          [
            'в + accusatif',
            'Я иду в магазин.',
            'Direction : dans / vers',
            'Je vais au magasin.',
          ],
          [
            'в + prépositionnel',
            'Я нахожусь в магазине.',
            'Lieu : dans / chez',
            'Je suis au magasin.',
          ],
          [
            'на + accusatif',
            'Она едет на работу.',
            'Direction : sur / vers',
            'Elle va au travail.',
          ],
          [
            'на + prépositionnel',
            'Она работает на заводе.',
            'Lieu : sur / à',
            'Elle travaille à l’usine.',
          ],
          [
            'в + accusatif',
            'Дети пошли в школу.',
            'Direction : vers l’école',
            'Les enfants sont allés à l’école.',
          ],
          [
            'в + prépositionnel',
            'Дети учатся в школе.',
            'Lieu : à l’école',
            'Les enfants étudient à l’école.',
          ],
          [
            'на + accusatif',
            'Мы летим на Кубу.',
            'Direction : vers Cuba',
            'Nous volons vers Cuba.',
          ],
          [
            'на + prépositionnel',
            'Мы отдыхаем на Кубе.',
            'Lieu : à Cuba',
            'Nous sommes en vacances à Cuba.',
          ],
          [
            'на + accusatif',
            'Поставь книгу на стол.',
            'Direction : sur la table',
            'Mets le livre sur la table.',
          ],
          [
            'на + prépositionnel',
            'Книга лежит на столе.',
            'Lieu : sur la table',
            'Le livre est sur la table.',
          ],
        ],
      },
      subsections: [
        {
          h3: 'В vs НА — lequel pour le lieu ?',
          content:
            '**Employez В (dans)** pour : espaces fermés, pays, villes, bâtiments — в доме, в России, в школе. **Employez НА (sur / à)** pour : espaces ouverts, événements, îles, certaines institutions — на улице, на концерте, на Кубе, на работе, на почте, на рынке.\n\nCertains noms exigent на par convention — mémorisez-les.',
        },
      ],
    },
    {
      h2: 'Toutes les prépositions qui exigent l’accusatif',
      content:
        'Au-delà de в et на, d’autres prépositions exigent l’accusatif.\n\nVoici la **liste complète** avec un exemple nominalisé et une phrase entière :',
      table: {
        caption: '9 prépositions à l’accusatif : sens et exemple complet',
        boldColumnIndices: [0],
        headers: [
          'Prép.',
          'Sens',
          'Avec un nom',
          'Phrase complète + traduction',
        ],
        rows: [
          [
            'в',
            'dans / vers (direction)',
            'в Москву, в школу',
            'Я лечу в Москву. — Je vole vers Moscou.',
          ],
          [
            'на',
            'sur / vers (direction)',
            'на работу, на стол',
            'Она идёт на работу. — Elle va au travail.',
          ],
          [
            'за',
            'derrière / pour (mouvement)',
            'за угол, за хлебом',
            'Он зашёл за угол. — Il a tourné le coin.',
          ],
          [
            'под',
            'sous (mouvement)',
            'под стол',
            'Кот залез под стол. — Le chat s’est glissé sous la table.',
          ],
          [
            'через',
            'à travers / de l’autre côté / dans (temps)',
            'через реку, через час',
            'Мы переехали через реку. — Nous avons traversé la rivière.',
          ],
          [
            'про',
            'à propos de (familier)',
            'про тебя',
            'Он рассказал про тебя. — Il a parlé de toi.',
          ],
          [
            'сквозь',
            'à travers (pénétration)',
            'сквозь стекло',
            'Свет проходил сквозь стекло. — La lumière passait à travers la vitre.',
          ],
          [
            'спустя',
            'après / plus tard (temps)',
            'спустя год',
            'Спустя год он вернулся. — Un an plus tard, il est revenu.',
          ],
          [
            'о/об',
            'contre (contact physique)',
            'споткнуться о камень',
            'Он споткнулся о камень. — Il a trébuché contre une pierre.',
          ],
        ],
      },
      bullets: [
        '**Prépositions à double régime :** В, НА, ЗА, ПОД — accusatif = mouvement / direction ; instrumental ou prépositionnel = position statique.',
        'за стол (acc. → s’asseoir À table) vs. за столом (instr. → être assis À table)',
      ],
    },
    {
      h2: 'Expressions de temps avec l’accusatif',
      content:
        'L’accusatif apparaît dans plusieurs **expressions de temps** importantes en russe.\n\nCe sont des modèles figés à mémoriser :',
      table: {
        caption: 'через, за, весь/всю, в + jour, спустя',
        boldColumnIndices: [0],
        headers: [
          'Type d’expression',
          'Exemples',
          'Phrase complète + traduction',
        ],
        rows: [
          [
            'Durée (весь / целый)',
            'всю неделю, целый день',
            'Я работал всю неделю. — J’ai travaillé toute la semaine.',
          ],
          [
            'Jours de la semaine (в + acc.)',
            'в понедельник, в пятницу',
            'Я иду туда в среду. — J’y vais mercredi.',
          ],
          [
            'через (dans / après)',
            'через час, через неделю',
            'Приходи через час. — Viens dans une heure.',
          ],
          [
            'за (en / dans le délai de)',
            'за час, за неделю',
            'Я сделал это за час. — Je l’ai fait en une heure.',
          ],
          [
            'спустя (après / plus tard)',
            'спустя год',
            'Спустя год он вернулся. — Un an plus tard, il est revenu.',
          ],
        ],
      },
      bullets: [
        '**Jours de la semaine :** В понедельник, в среду, в пятницу — tous avec **в** prennent l’accusatif.',
      ],
    },
    {
      h2: '15 verbes clés avec complément d’objet direct à l’accusatif',
      content:
        'Tout verbe transitif en russe peut prendre un complément à l’accusatif.\n\nVoici les **15 plus courants**, avec l’exception importante de **ждать** (accusatif ou génitif) :',
      table: {
        caption: '15 verbes transitifs avec exemples',
        boldColumnIndices: [0],
        headers: ['Verbe', 'Exemple', 'Traduction', 'Remarque'],
        rows: [
          [
            'видеть (voir)',
            'Я вижу тебя.',
            'Je te vois.',
            'Perception visuelle directe',
          ],
          [
            'любить (aimer)',
            'Я люблю музыку.',
            "J'aime la musique.",
            'Objet d’affection',
          ],
          [
            'знать (savoir / connaître)',
            'Я знаю этот город.',
            'Je connais cette ville.',
            'Chose ou personne connue',
          ],
          [
            'читать (lire)',
            'Она читает книгу.',
            'Elle lit un livre.',
            'Objet lu',
          ],
          [
            'слушать (écouter)',
            'Мы слушаем музыку.',
            'Nous écoutons de la musique.',
            'Objet d’écoute',
          ],
          [
            'смотреть (regarder)',
            'Он смотрит фильм.',
            'Il regarde un film.',
            'Objet du regard',
          ],
          [
            'купить (acheter)',
            'Я купил машину.',
            "J'ai acheté une voiture.",
            'Objet acheté',
          ],
          [
            'взять (prendre)',
            'Возьми зонтик.',
            'Prends un parapluie.',
            'Objet pris',
          ],
          [
            'понимать (comprendre)',
            'Я понимаю тебя.',
            'Je te comprends.',
            'Personne ou chose comprise',
          ],
          [
            'помнить (se souvenir)',
            'Я помню этот день.',
            'Je me souviens de ce jour.',
            'Chose dont on se souvient',
          ],
          [
            'встречать (rencontrer)',
            'Я встречаю друга.',
            'Je retrouve un ami.',
            'Personne rencontrée (animé)',
          ],
          [
            'ждать (attendre)',
            'Я жду автобус / автобуса.',
            "J'attends le bus.",
            'Accusatif et génitif possibles !',
          ],
          [
            'спрашивать (demander)',
            'Он спрашивает меня.',
            'Il me demande.',
            'Personne interrogée',
          ],
          [
            'благодарить (remercier)',
            'Я благодарю вас.',
            'Je vous remercie.',
            'Personne remerciée',
          ],
          [
            'изучать (étudier)',
            'Она изучает русский язык.',
            'Elle étudie le russe.',
            'Matière étudiée',
          ],
        ],
      },
      bullets: [
        '**Exception ЖДАТЬ :** Я жду автобус (acc.) = j’attends ce bus précis. Я жду автобуса (gén.) = j’attends un bus. Les deux sont corrects. Pour l’animé : Я жду друга (acc. préféré).',
      ],
    },
    {
      h2: '30 exemples réels du cas accusatif en russe',
      content:
        'Ci-dessous **30 phrases authentiques** couvrant les principaux emplois de l’accusatif. **1–6 :** objets inanimés | **7–12 :** objets animés | **13–18 :** direction | **19–23 :** temps | **24–30 :** autres prépositions.',
      table: {
        caption: '30 phrases d’exemple avec translittération',
        boldColumnIndices: [1],
        headers: ['#', 'Russe', 'Translittération', 'Traduction et remarques'],
        rows: [
          [
            '1',
            'Он читает интересную книгу.',
            'On chitayet interesnuyu knigu.',
            'Il lit un livre intéressant. (книга → книгу)',
          ],
          [
            '2',
            'Я купила новое платье.',
            'Ya kupila novoye plate.',
            "J'ai acheté une nouvelle robe. (платье neutre → inchangé)",
          ],
          [
            '3',
            'Мы смотрим старый фильм.',
            'My smotrim staryy film.',
            'Nous regardons un vieux film. (masc. inanimé)',
          ],
          [
            '4',
            'Она пьёт горячий кофе.',
            'Ona pyot goryachiy kofe.',
            'Elle boit un café chaud. (кофе invariable)',
          ],
          [
            '5',
            'Я слышу странный звук.',
            'Ya slyshu strannyy zvuk.',
            "J'entends un bruit étrange. (masc. inanimé)",
          ],
          [
            '6',
            'Дети любят мороженое.',
            'Deti lyubyat morozhenoye.',
            'Les enfants adorent la glace. (neutre)',
          ],
          [
            '7',
            'Я вижу своего брата.',
            'Ya vizhu svoyego brata.',
            'Je vois mon frère. (брат animé → брата)',
          ],
          [
            '8',
            'Она любит своего кота.',
            'Ona lyubit svoyego kota.',
            'Elle aime son chat. (кот animé)',
          ],
          [
            '9',
            'Врач осматривает пациента.',
            'Vrach osmotrivayet patsienta.',
            'Le médecin examine le patient.',
          ],
          [
            '10',
            'Мы приглашаем всех друзей.',
            'My priglashaem vsekh druzey.',
            'Nous invitons tous nos amis. (pl. animé)',
          ],
          [
            '11',
            'Я встретил старого учителя.',
            'Ya vstretil starogo uchitelya.',
            "J'ai retrouvé mon ancien professeur.",
          ],
          [
            '12',
            'Полиция ищет преступника.',
            'Politsiya ishchet prestupnika.',
            'La police cherche le criminel.',
          ],
          [
            '13',
            'Я иду в супермаркет.',
            'Ya idu v supermarket.',
            'Je vais au supermarché. (в + acc.)',
          ],
          [
            '14',
            'Дети едут на море.',
            'Deti edut na more.',
            'Les enfants vont au bord de la mer. (на + acc.)',
          ],
          [
            '15',
            'Он положил ключи на стол.',
            'On polozhil klyuchi na stol.',
            'Il a posé les clés sur la table.',
          ],
          [
            '16',
            'Мы летим в Санкт-Петербург.',
            'My letim v Sankt-Peterburg.',
            'Nous volons vers Saint-Pétersbourg.',
          ],
          [
            '17',
            'Она поехала на конференцию.',
            'Ona poyekhala na konferentsiyu.',
            'Elle est allée à la conférence.',
          ],
          [
            '18',
            'Кот прыгнул под кровать.',
            'Kot prygnul pod krovat.',
            'Le chat a sauté sous le lit. (под + acc.)',
          ],
          [
            '19',
            'Я работал всю ночь.',
            'Ya rabotal vsyu noch.',
            "J'ai travaillé toute la nuit. (всю = acc.)",
          ],
          [
            '20',
            'Встреча в четверг в три часа.',
            'Vstrecha v chetverg v tri chasa.',
            'Réunion jeudi à trois heures.',
          ],
          [
            '21',
            'Он вернётся через месяц.',
            'On vernyotsya cherez mesyats.',
            'Il reviendra dans un mois. (через + acc.)',
          ],
          [
            '22',
            'Я сделал домашнее задание за час.',
            'Ya sdelal domashneye zadaniye za chas.',
            "J'ai fait mes devoirs en une heure.",
          ],
          [
            '23',
            'Они не виделись целый год.',
            'Oni ne videlis tselyy god.',
            'Ils ne s’étaient pas vus pendant une année entière.',
          ],
          [
            '24',
            'Он рассказал про свою жизнь.',
            'On rasskazal pro svoyu zhizn.',
            'Il a parlé de sa vie. (про + acc.)',
          ],
          [
            '25',
            'Мы переплыли через реку.',
            'My pereplyli cherez reku.',
            'Nous avons traversé la rivière à la nage.',
          ],
          [
            '26',
            'Он споткнулся о порог.',
            'On spotknulsya o porog.',
            'Il a trébuché sur le seuil. (о + acc.)',
          ],
          [
            '27',
            'Спустя два часа он позвонил.',
            'Spustya dva chasa on pozvonil.',
            'Deux heures plus tard, il a téléphoné.',
          ],
          [
            '28',
            'Перенеси встречу на пятницу.',
            'Perenesi vstrechu na pyatnitsu.',
            'Reporte la réunion à vendredi.',
          ],
          [
            '29',
            'Я учу русский язык каждый день.',
            'Ya uchu russkiy yazyk kazhdyy den.',
            "J'étudie le russe tous les jours.",
          ],
          [
            '30',
            'Она смотрит на меня.',
            'Ona smotrit na menya.',
            'Elle me regarde. (смотреть на + acc.)',
          ],
        ],
      },
    },
    {
      h2: 'Accusatif vs génitif : comment les distinguer',
      content:
        'Comme la forme accusatif animé masculin coïncide avec le génitif, on confond souvent les deux.\n\nVoici une comparaison directe :',
      table: {
        caption: 'Comparaison accusatif vs génitif',
        boldColumnIndices: [0, 1],
        headers: ['Contexte', 'Exemple russe', 'Explication du cas'],
        rows: [
          [
            'Complément d’objet direct (transitif)',
            'Я вижу студента.',
            'ACCUSATIF animé (= forme du génitif, mais ici accusatif)',
          ],
          [
            'Absence (нет)',
            'Нет студента.',
            'GÉNITIF — нет exige toujours le génitif',
          ],
          [
            'Objet direct inanimé',
            'Я вижу стол.',
            'ACCUSATIF inanimé (= nominatif)',
          ],
          [
            'Absence inanimée',
            'Нет стола.',
            'GÉNITIF (стол → стола)',
          ],
          [
            'Direction vers un lieu',
            'Я иду в парк.',
            'ACCUSATIF (в + direction)',
          ],
          [
            'Durée',
            'Я работал всю неделю.',
            'ACCUSATIF — всю неделю',
          ],
          [
            'Quantité / partie de',
            'Я выпил стакан воды.',
            'GÉNITIF — воды (un verre d’eau)',
          ],
        ],
      },
      bullets: [
        '**Question clé :** le verbe est-il transitif (il agit sur quelque chose) → accusatif. Absence, possession, quantité, préposition au génitif → génitif.',
      ],
    },
    {
      h2: 'Les 6 erreurs les plus fréquentes à l’accusatif (et comment les corriger)',
      bullets: [
        '**Oublier le féminin -а → -у** — Я вижу женщина ✗ → Я вижу женщину ✓',
        '**Traiter le masculin animé comme inanimé** — Я вижу студент ✗ → Я вижу студента ✓',
        '**Employer l’accusatif pour le lieu** — Я в школу сейчас ✗ → Я в школе сейчас ✓ (lieu = prépositionnel)',
        '**Pluriel nominatif pour les pluriels animés** — Я вижу студенты ✗ → Я вижу студентов ✓',
        '**Oublier l’accord de l’adjectif** — Я вижу красивый женщину ✗ → Я вижу красивую женщину ✓',
        '**Confondre через et за** — через = dans X temps (futur) ; за = en X temps (pour achever quelque chose)',
      ],
    },
  ],
  conclusion:
    'Le cas accusatif russe est indispensable à la communication quotidienne. Dès que vous parlez de faire quelque chose à quelque chose — lire un livre, voir une personne, aller quelque part — vous employez l’accusatif.\n\n**Féminin -А/-Я** change toujours (-а → -у, -я → -ю). **Masculin inanimé** = inchangé. **Masculin animé** = forme du génitif. **В/НА + accusatif** = direction | **В/НА + prépositionnel** = lieu. **Pluriel animé** → pluriel du génitif (студентов).',
  conclusionOutro: 'Poursuivez votre parcours de grammaire russe :',
  ctaText: 'Entraînez les cas russes avec notre application',
  ctaHref: '/',
  faq: [
    {
      question: 'À quoi sert le cas accusatif en russe ?',
      answer:
        'Le cas accusatif russe marque le **complément d’objet direct** des verbes transitifs (Я читаю книгу), la **direction** avec в et на (Я иду в школу), les **expressions de temps** (через час, всю ночь), et s’emploie après des prépositions comme за, через, про, под, сквозь.',
    },
    {
      question:
        'Comment fonctionne la distinction animé / inanimé en russe ?',
      answer:
        'Les **noms masculins animés** (personnes, animaux) prennent la **forme du génitif** à l’accusatif (студент → студента). Les **masculins inanimés** restent au nominatif (стол → стол). Surprenant : труп = inanimé ; cartes à jouer et pièces d’échecs = animés.',
    },
    {
      question:
        'Quelle est la différence entre в + accusatif et в + prépositionnel ?',
      answer:
        '**в + accusatif** = direction (Я иду в школу — Je vais à l’école). **в + prépositionnel** = lieu (Я в школе — Je suis à l’école). Idem pour на : на работу (y aller) vs. на работе (au travail).',
    },
    {
      question: 'Que sont les verbes de mouvement en russe ?',
      answer:
        'Verbes de mouvement : идти/ходить (aller à pied), ехать/ездить (aller en véhicule), лететь/летать (voler), бежать/бегать (courir), плыть/плавать (nager). Chaque paire a des formes unidirectionnelles et multidirectionnelles. Tous emploient **в/на + accusatif** pour la direction.',
    },
    {
      question: 'Le cas accusatif modifie-t-il aussi les adjectifs ?',
      answer:
        'Oui. Les adjectifs doivent **s’accorder** avec le nom. Féminin accusatif : **-ую/-юю** (красивую женщину). Masculin inanimé : reste nominatif. Masculin animé : forme du génitif (красивого студента).',
    },
    {
      question:
        'Quels verbes russes se construisent avec le génitif plutôt qu’avec l’accusatif ?',
      answer:
        'La plupart des verbes transitifs prennent l’accusatif. Exceptions avec **génitif** : бояться, ждать (inanimé), желать, избегать, достигать, лишать. Хотеть peut prendre les deux : хочу воды (gén., partitif) vs. хочу воду (acc.).',
    },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      'Cas accusatif russe : compléments directs, animé vs inanimé et verbes de mouvement',
    description:
      'Guide complet du cas accusatif en russe : terminaisons, animé vs inanimé, verbes de mouvement, в/на, 9 prépositions, 30 exemples.',
    datePublished: '2026-03-12',
    dateModified: '2026-03-12',
    author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id':
        'https://russiandeclensions.com/learn/articles/russian-accusative-case',
    },
    keywords:
      'cas accusatif russe, terminaisons accusatif russe, animé inanimé accusatif russe, complément d’objet direct russe, verbes de mouvement accusatif russe',
  },
  tableAccentVariant: 'accusative',
};
