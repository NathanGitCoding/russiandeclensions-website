import type { LearnArticle } from '../learnArticles';

/** Traduction française de l'article `russian-time-expressions-cases` (source EN : `learnArticles.ts`). */
export const russianTimeExpressionsCasesFr: LearnArticle = {
  slug: 'russian-time-expressions-cases',
  introByline: {
    text: '**Rédigé par Nathan** — francophone passionné de russe ; je partage ce qui fonctionne vraiment pour la grammaire, les cas et la pratique au quotidien.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, fondateur de Russian Cases with Anna',
    imageWidth: 256,
    imageHeight: 256,
  },
  title: 'Expressions de temps et cas en russe : dire quand quelque chose se passe',
  metaTitle: 'Expressions de temps et cas en russe | Russian Cases with Anna',
  metaDescription:
    'Dites « quand » en russe avec le bon cas : moments de la journée, jours, dates, durée et fréquence — plus un tableau récapitulatif et 30 exemples.',
  keywords: [
    'expressions de temps russe',
    'expressions de temps cas russe',
    'jours mois cas russe',
    'в + accusatif temps',
    'durée génitif russe',
    'утром вечером instrumental',
    'comment dire quand en russe',
    'expressions de fréquence russe',
  ],
  h1: 'Expressions de temps et cas en russe : dire quand quelque chose se passe',
  heroImage: {
    src: '/articles/russian-time-expressions-cases-header.webp',
    alt: 'Horloge, calendrier et carnet avec les expressions de temps russes утром вечером',
    width: 1280,
    height: 720,
  },
  intro:
    'En français, « lundi », « le matin », « pendant deux heures » et « chaque semaine » changent à peine les noms. En russe, **le temps est un problème de cas**. La même idée de « quand » peut exiger l’**instrumental**, l’**accusatif**, le **génitif** ou le **prépositionnel** — parfois avec **в**, **по**, **за** ou **в течение**.\n\nCe guide organise les expressions de temps selon le cas qu’elles déclenchent, avec un tableau récapitulatif et 30 exemples. Pour les listes complètes de jours et de mois, voir notre [guide des jours et mois](/learn/articles/russian-days-months-guide).',
  whatYouLearn: [
    'Pourquoi les expressions de temps forcent des choix de cas en russe',
    'Moments de la journée (утром, вечером…) et schémas associés',
    'Jours et dates : accusatif vs génitif vs prépositionnel',
    'Durée et structures « pendant combien de temps »',
    'Fréquence : каждый, раз в…, по + datif',
    'Un tableau récapitulatif (expression → cas) et 30 exemples',
  ],
  leadMagnetCta: {
    title: 'Les expressions de temps s’ancrent quand les terminaisons sont automatiques',
    description:
      'Russian Cases with Anna entraîne les six cas dans de vraies phrases — y compris les terminaisons dans les expressions de temps. Gratuit sur iOS et Android.',
    ctaText: 'Téléchargez l’app — Gratuit',
    ctaHref: '/',
  },
  tableAccentVariant: 'instrumental',
  sections: [
    {
      h2: 'Pourquoi le temps en russe est un problème de cas',
      content:
        'Le russe n’a pas un seul « cas du temps ». Différents **sens temporels** correspondent à différents cas et prépositions :',
      table: {
        headers: ['Sens temporel', 'Cas typique', 'Exemple'],
        rows: [
          ['Heure / points d’horloge', 'Accusatif (souvent)', 'в три часа'],
          ['Jours de la semaine', 'в + Accusatif', 'в понедельник'],
          ['Mois / années (en…)', 'в + Prépositionnel', 'в январе / в 2026 году'],
          ['Dates (le 5)', 'Génitif', 'пятого мая'],
          ['Parties du jour (adverbiaux nus)', 'Instrumental', 'утром, вечером'],
          ['Durée', 'Schémas Accusatif / Génitif', 'два часа / в течение часа'],
          [
            'Fréquence',
            'Accusatif / Datif / cadres fixes',
            'каждый день / раз в неделю / по понедельникам',
          ],
        ],
        caption: 'Sens temporels associés aux cas',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Apprenez des **cadres**, pas des mots isolés : в + jour, в + mois, утром, каждый…',
        'Mélanger les cas du jour et du mois est le piège classique — traité en profondeur dans l’[article jours & mois](/learn/articles/russian-days-months-guide).',
      ],
    },
    {
      h2: 'Moments de la journée (instrumental et plus)',
      content:
        'Le set quotidien « le matin / l’après-midi / le soir / la nuit » utilise souvent l’**instrumental** comme adverbial nu — sans préposition.',
      table: {
        headers: ['Russe', 'Cas / schéma', 'Français'],
        rows: [
          ['утром', 'Instrumental', 'le matin'],
          ['днём', 'Instrumental', 'l’après-midi / en journée'],
          ['вечером', 'Instrumental', 'le soir'],
          ['ночью', 'Instrumental', 'la nuit'],
          ['сегодня утром', 'fixe + instrumental', 'ce matin'],
          ['завтра вечером', 'fixe + instrumental', 'demain soir'],
          ['в три часа', 'в + Accusatif', 'à trois heures'],
          [
            'в половине шестого',
            'в + locution prépositionnelle',
            'à cinq heures et demie (horloge courante)',
          ],
        ],
        caption: 'Parties du jour et heure',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        '**Утром / вечером** sont des formes instrumentales de утро / вечер utilisées comme adverbes de temps.',
        'Les heures avec **в** prennent en général l’**accusatif** : **в два часа**, **в пять минут шестого** (les schémas varient selon la formulation exacte).',
        'Pour les formes de nombres dans le langage de l’horloge, voir le [guide des nombres](/learn/articles/russian-numbers-guide).',
      ],
    },
    {
      h2: 'Jours et dates (accusatif + génitif)',
      content: 'Les jours et les dates du calendrier utilisent des systèmes de cas différents. Gardez-les séparés.',
      subsections: [
        {
          h3: 'Jours de la semaine — в + accusatif',
          content:
            '**В понедельник**, **во вторник**, **в среду**, **в пятницу**…\nLes jours féminins montrent clairement l’accusatif (**среду, пятницу, субботу**). Les jours masculins ressemblent souvent au nominatif.',
        },
        {
          h3: 'Mois « en… » — в + prépositionnel',
          content: '**В январе**, **в июне**, **в декабре**. N’utilisez pas le schéma des jours ici.',
        },
        {
          h3: 'Dates — génitif',
          content:
            '**Сегодня пятое мая.** Pour dire « le cinq mai », le russe utilise en général des formes au génitif : **пятого мая**, **первого сентября**.\nLes années apparaissent souvent comme **в 2026 году** (prépositionnel) ou dans des chaînes de date au génitif selon la formule complète.',
        },
      ],
      bullets: [
        'Jours récurrents : **по понедельникам** (по + datif pluriel) = le lundi / les lundis.',
        'Tableaux de vocabulaire complets : [jours de la semaine et mois](/learn/articles/russian-days-months-guide).',
      ],
    },
    {
      h2: 'Expressions de durée',
      content: '« Pendant combien de temps ? » n’est pas une seule structure en russe. Voici les cadres les plus fréquents :',
      table: {
        headers: ['Cadre', 'Schéma de cas', 'Exemple', 'Français'],
        rows: [
          ['Durée nue', 'Quantité de temps à l’accusatif', 'Я ждал час.', 'J’ai attendu (pendant) une heure.'],
          ['два / три / четыре + …', 'Nom au génitif singulier', 'два часа, три дня', 'deux heures, trois jours'],
          ['пять+ / много…', 'Génitif pluriel', 'пять часов, много лет', 'cinq heures, beaucoup d’années'],
          ['в течение + …', 'Génitif', 'в течение недели', 'pendant / durant une semaine'],
          ['за + …', 'Accusatif (souvent « en l’espace de »)', 'за два дня', 'en deux jours / en l’espace de deux jours'],
          ['с … до …', 'Génitif … Génitif', 'с утра до вечера', 'du matin au soir'],
        ],
        caption: 'Cadres de durée et leurs cas',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Nombre + unité de temps suit les mêmes règles de génitif que les autres noms quantifiés — voir le [génitif](/learn/articles/russian-genitive-case).',
        '**За** + accusatif signifie souvent « en l’espace de » ou « en échange de temps », selon le contexte — apprenez les collocations courantes.',
      ],
    },
    {
      h2: 'Expressions de fréquence',
      content: 'La fréquence a sa propre petite boîte à outils :',
      table: {
        headers: ['Russe', 'Schéma', 'Français'],
        rows: [
          ['каждый день', 'каждый + Accusatif (accord)', 'chaque jour'],
          ['каждую неделю', 'accusatif féminin', 'chaque semaine'],
          ['каждый месяц / год', 'accord avec le nom', 'chaque mois / année'],
          ['раз в неделю', 'раз в + Accusatif', 'une fois par semaine'],
          ['два раза в день', 'раз(а) в + Acc.', 'deux fois par jour'],
          ['по вечерам', 'по + Datif pluriel', 'le soir (habituellement)'],
          ['по понедельникам', 'по + Datif pluriel', 'le lundi / les lundis'],
          ['иногда / часто / редко', 'adverbes (pas de cas)', 'parfois / souvent / rarement'],
        ],
        caption: 'Expressions de fréquence',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        '**Каждый** s’accorde comme un adjectif avec le nom de temps.',
        '**По + datif pluriel** est le schéma « habituellement les X-jours / le soir ».',
      ],
    },
    {
      h2: 'Tableau récapitulatif : expression de temps → cas',
      content: 'Un seul écran à revoir avant de parler ou d’écrire.',
      table: {
        headers: ['Si vous voulez dire…', 'Utilisez…', 'Cas'],
        rows: [
          ['le matin / le soir', 'утром / вечером', 'Instrumental'],
          ['lundi', 'в понедельник', 'в + Accusatif'],
          ['les lundis (habitude)', 'по понедельникам', 'по + Datif pl.'],
          ['en janvier', 'в январе', 'в + Prépositionnel'],
          ['le 5 mai', 'пятого мая', 'Génitif'],
          ['à 3 heures', 'в три часа', 'в + Accusatif'],
          ['pendant une heure', 'час / в течение часа', 'Acc. / в течение + Gén.'],
          ['chaque jour', 'каждый день', 'каждый + Acc.'],
          ['une fois par semaine', 'раз в неделю', 'в + Accusatif'],
          ['du matin au soir', 'с утра до вечера', 'с/до + Génitif'],
        ],
        caption: 'Tableau récapitulatif temps russe → cas',
        boldColumnIndices: [0, 2],
      },
    },
    {
      h2: '30 phrases d’exemple',
      content:
        '**1–8** parties du jour & heure · **9–16** jours/dates · **17–23** durée · **24–30** fréquence.',
      table: {
        headers: ['#', 'Russe', 'Français'],
        rows: [
          ['1', 'Я встаю рано утром.', 'Je me lève tôt le matin.'],
          ['2', 'Вечером мы смотрим фильм.', 'Le soir, nous regardons un film.'],
          ['3', 'Ночью было холодно.', 'Il faisait froid la nuit.'],
          ['4', 'Встретимся в три часа.', 'Retrouvons-nous à trois heures.'],
          ['5', 'Занятия начинаются в девять.', 'Les cours commencent à neuf heures.'],
          ['6', 'Сегодня днём идёт дождь.', 'Il pleut cet après-midi.'],
          ['7', 'Завтра утром звони мне.', 'Appelle-moi demain matin.'],
          ['8', 'Он работает до позднего вечера.', 'Il travaille jusqu’à tard le soir.'],
          ['9', 'В понедельник у меня экзамен.', 'Lundi j’ai un examen.'],
          ['10', 'Мы едем в пятницу.', 'Nous partons vendredi.'],
          ['11', 'По субботам я сплю дольше.', 'Le samedi, je dors plus longtemps.'],
          ['12', 'Я родился в марте.', 'Je suis né en mars.'],
          ['13', 'Свадьба в июне.', 'Le mariage est en juin.'],
          ['14', 'Сегодня первое сентября.', 'Aujourd’hui c’est le premier septembre.'],
          ['15', 'Концерт пятого мая.', 'Le concert est le cinq mai.'],
          ['16', 'В 2024 году я начал учить русский.', 'En 2024 j’ai commencé à apprendre le russe.'],
          ['17', 'Я ждал тебя час.', 'Je t’ai attendu pendant une heure.'],
          ['18', 'Фильм шёл два часа.', 'Le film a duré deux heures.'],
          ['19', 'Мы жили там пять лет.', 'Nous y avons vécu pendant cinq ans.'],
          ['20', 'В течение недели будет тепло.', 'Il fera chaud pendant la semaine.'],
          ['21', 'За три дня я прочитал книгу.', 'En trois jours j’ai lu le livre.'],
          ['22', 'С утра до вечера на работе.', 'Du matin au soir au travail.'],
          ['23', 'Отпуск длится две недели.', 'Les vacances durent deux semaines.'],
          ['24', 'Я тренируюсь каждый день.', 'Je m’entraîne chaque jour.'],
          ['25', 'Она звонит раз в неделю.', 'Elle appelle une fois par semaine.'],
          ['26', 'Мы встречаемся два раза в месяц.', 'Nous nous voyons deux fois par mois.'],
          ['27', 'По вечерам я читаю.', 'Le soir, je lis.'],
          ['28', 'По воскресеньям мы ходим в парк.', 'Le dimanche, nous allons au parc.'],
          ['29', 'Иногда я опаздываю.', 'Parfois je suis en retard.'],
          ['30', 'Редко смотрю телевизор.', 'Je regarde rarement la télé.'],
        ],
        caption: '30 exemples d’expressions de temps',
        boldColumnIndices: [0, 1],
      },
    },
    {
      h2: 'Erreurs courantes avec les expressions de temps russes',
      bullets: [
        '**в январь** ✗ → **в январе** ✓ (mois = prépositionnel).',
        '**в понедельнике** ✗ → **в понедельник** ✓ (jour = accusatif).',
        '**каждый днём** ✗ → **каждый день** ✓.',
        'Traduire « pendant » / « for » littéralement partout — le russe utilise souvent une durée à l’accusatif nu (**час**) ou **в течение**.',
        'Oublier le génitif après les nombres : **два часа**, **пять часов**.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quel cas utiliser pour les jours de la semaine en russe ?',
      answer:
        'Avec в au sens de « le [jour] », utilisez l’accusatif : в понедельник, в среду. Pour l’habitude « le lundi », utilisez по + datif pluriel : по понедельникам.',
    },
    {
      question: 'Pourquoi « en janvier » n’est-il pas le même cas que « lundi » ?',
      answer:
        'Les jours avec в prennent l’accusatif ; les mois avec в prennent le prépositionnel (в январе). C’est une répartition fixe à mémoriser — pas une erreur de logique par rapport au français.',
    },
    {
      question: 'Comment dire « le matin » en russe ?',
      answer:
        'La forme quotidienne la plus courante est утром (instrumental utilisé adverbialement). On entend aussi сегодня утром, завтра утром pour « ce matin / demain matin ».',
    },
    {
      question: 'Comment exprimer une durée comme « pendant deux heures » ?',
      answer:
        'Souvent avec une quantité de temps à l’accusatif (два часа) dans des phrases comme Фильм шёл два часа, ou avec в течение + génitif (в течение двух часов). Les règles des nombres s’appliquent toujours (два часа vs пять часов).',
    },
    {
      question: 'Comment dire « chaque jour » et « une fois par semaine » ?',
      answer:
        'Каждый день (каждый s’accorde avec день) et раз в неделю (в + accusatif). Les soirs/jours habituels utilisent aussi по + datif pluriel : по вечерам, по пятницам.',
    },
  ],
  conclusionIntro: 'Parler du temps devient simple quand on attache chaque sens à un cadre de cas.',
  conclusionBullets: [
    '**Parties du jour** → souvent instrumental (утром)',
    '**Jours** → в + accusatif ; habitudes → по + datif pluriel',
    '**Mois** → в + prépositionnel ; **dates** → génitif',
    '**Durée / fréquence** → apprenez les cadres fixes',
    'Entraînez-vous avec le **tableau récapitulatif** jusqu’à ce que le choix du cas soit automatique',
  ],
  conclusionOutro:
    'Gardez les listes [jours & mois](/learn/articles/russian-days-months-guide) à portée de main, approfondissez l’[accusatif](/learn/articles/russian-accusative-case), le [génitif](/learn/articles/russian-genitive-case) et l’[instrumental](/learn/articles/russian-instrumental-case), et pratiquez les terminaisons dans notre [quiz de déclinaison](/practice) gratuit.',
  internalLinks: [
    {
      href: '/learn/articles/russian-days-months-guide',
      label: 'Jours de la semaine et mois en russe',
    },
    {
      href: '/learn/articles/russian-numbers-guide',
      label: 'Guide des nombres russes',
    },
    {
      href: '/learn/articles/russian-accusative-case',
      label: 'Cas accusatif russe',
    },
    {
      href: '/learn/articles/russian-genitive-case',
      label: 'Cas génitif russe',
    },
    {
      href: '/learn/articles/russian-instrumental-case',
      label: 'Cas instrumental russe',
    },
    {
      href: '/learn/articles/russian-prepositional-case',
      label: 'Cas prépositionnel russe',
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
    headline: 'Expressions de temps et cas en russe : dire quand quelque chose se passe',
    description:
      'Dites « quand » en russe avec le bon cas : moments de la journée, jours, dates, durée et fréquence — plus un tableau récapitulatif et 30 exemples.',
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
      '@id': 'https://russiandeclensions.com/learn/articles/russian-time-expressions-cases',
    },
    keywords:
      'expressions de temps russe, expressions de temps cas russe, утром вечером instrumental, в + accusatif temps, durée génitif russe',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russian-time-expressions-cases-header.webp',
      width: 1280,
      height: 720,
    },
  },
};
