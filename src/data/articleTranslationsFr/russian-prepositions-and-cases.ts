import type { LearnArticle } from '../learnArticles';

/** Traduction française de l'article `russian-prepositions-and-cases` (source EN : `learnArticles.ts`). Cyrillique des exemples copié à l'identique */
export const russianPrepositionsAndCasesFr: LearnArticle = {
  slug: 'russian-prepositions-and-cases',
  title:
    'Prépositions et cas en russe : quel cas après chaque préposition ?',
  metaTitle:
    'Prépositions et cas en russe | Guide de référence complet | Russian Cases with Anna',
  metaDescription:
    'La référence complète : chaque préposition russe et le cas qu\'elle exige. Tableau maître de 44 prépositions, règles doubles (в/на/за/под), approfondissement par cas, stratégies de mémorisation.',
  keywords: [
    'prépositions cas russe',
    'prépositions russe génitif',
    'liste prépositions russe cas',
    'в на с по cas russe',
    'prépositions russe accusatif prépositionnel',
    'tableau prépositions grammaire russe',
  ],
  h1: 'Prépositions et cas en russe : quel cas après chaque préposition ?',
  heroImage: {
    src: '/articles/russian-prepositions-case-grammar-reference.webp',
    alt: 'Tableau de référence des prépositions russes et des cas',
    width: 1200,
    height: 630,
  },
  intro:
    'L\'une des **compétences les plus utiles** en russe est de savoir **quel cas exige chaque préposition**. Quand vous savez que **без** régit toujours le génitif, que **к** régit toujours le datif, et que **с** peut prendre le génitif **ou** l\'instrumental selon le sens — votre précision grimpe en flèche.\n\nVoici le **guide de référence complet**. Chaque grande préposition russe est listée avec son cas, son sens et un exemple authentique. Servez-vous-en pour vérifier quand vous hésitez, et peu à peu les paires préposition–cas deviendront automatiques.',
  whatYouLearn: [
    'Tableau maître : chaque préposition russe et son cas',
    'Prépositions + génitif (18)',
    'Prépositions + datif (6)',
    'Prépositions + accusatif (8)',
    'Prépositions + instrumental (7)',
    'Prépositions + prépositionnel (5)',
    'Prépositions à double cas — deux cas selon le sens',
    'В vs НА — la paire lieu / direction la plus importante',
    'Stratégies pour ancrer les paires préposition–cas',
  ],
  leadMagnetCta: {
    title: 'Entraînez prépositions et cas avec notre appli mobile',
    description: 'Exercices ciblés pour chaque paire préposition–cas — Android et iOS.',
    ctaText: 'Télécharger l\'appli',
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
      label: 'Terminaisons des cas russes : l\'aide-mémoire ultime',
    },
    {
      href: '/learn/articles/russian-genitive-case',
      label:
        'Cas génitif russe : règles, terminaisons et 32 exemples réels',
    },
  ],
  tableAccentVariant: 'genitive',
  sections: [
    {
      h2: 'Tableau maître : chaque préposition russe et son cas',
      content:
        'Le tableau ci-dessous liste **toutes les grandes prépositions russes**, classées par cas. Code couleur par cas.\n\n**Légende :** Génitif (bleu marine) · Datif (violet) · Accusatif (rouge) · Instrumental (sarcelle) · Prépositionnel (orange).',
      table: {
        caption: '44 prépositions russes selon le cas requis',
        boldColumnIndices: [0, 1],
        headers: ['Cas', 'Prép.', 'Sens', 'Avec le nom', 'Phrase complète + traduction'],
        rows: [
            [
              'Génitif',
              'без',
              'sans',
              'без молока',
              'Я пью кофе без молока. — Je bois mon café sans lait.',
            ],
            [
              'Génitif',
              'до',
              'jusqu’à / avant / au plus tard',
              'до урока',
              'Позвони мне до урока. — Appelle-moi avant le cours.',
            ],
            [
              'Génitif',
              'из',
              'de (de l’intérieur)',
              'из России',
              'Она приехала из России. — Elle est venue de Russie.',
            ],
            [
              'Génitif',
              'с',
              'de (d’une surface)',
              'с полки',
              'Книга упала с полки. — Le livre est tombé de l’étagère.',
            ],
            [
              'Génitif',
              'у',
              'chez / près de / auprès de',
              'у меня',
              'У меня есть кошка. — J’ai un chat.',
            ],
            [
              'Génitif',
              'от',
              'de (personne / source)',
              'от друга',
              'Письмо от друга. — Une lettre d’un ami.',
            ],
            [
              'Génitif',
              'после',
              'après',
              'после работы',
              'После работы я устал. — Après le travail j’étais fatigué.',
            ],
            [
              'Génitif',
              'для',
              'pour (au profit de)',
              'для тебя',
              'Это подарок для тебя. — C’est un cadeau pour toi.',
            ],
            [
              'Génitif',
              'кроме',
              'sauf / outre',
              'кроме меня',
              'Все кроме меня пришли. — Tout le monde est venu sauf moi.',
            ],
            [
              'Génitif',
              'вокруг',
              'autour de',
              'вокруг города',
              'Мы ехали вокруг города. — Nous avons fait le tour de la ville.',
            ],
            [
              'Génitif',
              'мимо',
              'en passant devant / le long de',
              'мимо школы',
              'Он прошёл мимо школы. — Il est passé devant l’école.',
            ],
            [
              'Génitif',
              'вместо',
              'à la place de',
              'вместо кофе',
              'Выпей воды вместо кофе. — Bois de l’eau à la place du café.',
            ],
            [
              'Génitif',
              'напротив',
              'en face de',
              'напротив банка',
              'Кафе напротив банка. — Le café est en face de la banque.',
            ],
            [
              'Génitif',
              'из-за',
              'à cause de / de derrière',
              'из-за дождя',
              'Из-за дождя мы остались дома. — À cause de la pluie nous sommes restés à la maison.',
            ],
            [
              'Génitif',
              'из-под',
              'de dessous',
              'из-под стола',
              'Кот вылез из-под стола. — Le chat est sorti de sous la table.',
            ],
            [
              'Génitif',
              'ради',
              'pour (au sens sacrifice / profit)',
              'ради тебя',
              'Ради тебя я на всё готов. — Pour toi je suis prêt à tout.',
            ],
            [
              'Génitif',
              'около',
              'près de / vers',
              'около школы',
              'Встретимся около школы. — Retrouvons-nous près de l’école.',
            ],
            [
              'Génitif',
              'вдоль',
              'le long de',
              'вдоль реки',
              'Мы шли вдоль реки. — Nous marchions le long de la rivière.',
            ],
            [
              'Datif',
              'к',
              'vers / chez (personne ou but)',
              'к врачу, к морю',
              'Иди к врачу! — Va chez le médecin !',
            ],
            [
              'Datif',
              'по',
              'le long de / dans / selon',
              'по улице, по закону',
              'Мы гуляли по парку. — Nous nous promenions dans le parc.',
            ],
            [
              'Datif',
              'благодаря',
              'grâce à',
              'благодаря тебе',
              'Благодаря тебе всё получилось! — Grâce à toi tout a réussi !',
            ],
            [
              'Datif',
              'вопреки',
              'malgré',
              'вопреки прогнозу',
              'Вопреки прогнозу, погода была хорошей. — Malgré les prévisions, il a fait beau.',
            ],
            [
              'Datif',
              'согласно',
              'selon (soutenu)',
              'согласно закону',
              'Согласно закону, это запрещено. — Selon la loi, c’est interdit.',
            ],
            [
              'Datif',
              'навстречу',
              'au-devant de / à la rencontre de',
              'навстречу ветру',
              'Она шла навстречу ветру. — Elle marchait face au vent.',
            ],
            [
              'Accusatif',
              'в',
              'dans / vers (direction)',
              'в школу',
              'Я иду в школу. — Je vais à l’école.',
            ],
            [
              'Accusatif',
              'на',
              'sur / vers (direction)',
              'на работу',
              'Она едет на работу. — Elle va au travail.',
            ],
            [
              'Accusatif',
              'за',
              'derrière (mouvement) / pour',
              'за угол',
              'Он зашёл за угол. — Il a tourné le coin.',
            ],
            [
              'Accusatif',
              'под',
              'sous (mouvement)',
              'под стол',
              'Кот залез под стол. — Le chat s’est glissé sous la table.',
            ],
            [
              'Accusatif',
              'через',
              'à travers / par / dans (temps)',
              'через час',
              'Приходи через час. — Viens dans une heure.',
            ],
            [
              'Accusatif',
              'про',
              'à propos de (familier)',
              'про тебя',
              'Он рассказал про тебя. — Il a parlé de toi.',
            ],
            [
              'Accusatif',
              'спустя',
              'après / plus tard (temps)',
              'спустя год',
              'Спустя год он вернулся. — Un an plus tard il est revenu.',
            ],
            [
              'Accusatif',
              'о/об',
              'contre (se cogner à)',
              'о камень',
              'Он споткнулся о камень. — Il a trébuché sur une pierre.',
            ],
            [
              'Instrumental',
              'с',
              'avec / de concert avec',
              'с другом',
              'Я иду с другом. — Je vais avec un ami.',
            ],
            [
              'Instrumental',
              'за',
              'derrière / à (position)',
              'за столом',
              'Он сидит за столом. — Il est assis à table.',
            ],
            [
              'Instrumental',
              'перед',
              'devant / avant',
              'перед домом',
              'Стой перед домом. — Tiens-toi devant la maison.',
            ],
            [
              'Instrumental',
              'над',
              'au-dessus de / sur',
              'над городом',
              'Самолёт летит над городом. — L’avion survole la ville.',
            ],
            [
              'Instrumental',
              'под',
              'sous (position)',
              'под столом',
              'Книга под столом. — Le livre est sous la table.',
            ],
            [
              'Instrumental',
              'между',
              'entre',
              'между нами',
              'Это между нами. — Ça reste entre nous.',
            ],
            [
              'Instrumental',
              'рядом с',
              'à côté de',
              'рядом с банком',
              'Кафе рядом с банком. — Le café est à côté de la banque.',
            ],
            [
              'Prépositionnel',
              'в',
              'dans / à l’intérieur (lieu)',
              'в Москве',
              'Я живу в Москве. — Je vis à Moscou.',
            ],
            [
              'Prépositionnel',
              'на',
              'sur / à (lieu)',
              'на столе',
              'Книга на столе. — Le livre est sur la table.',
            ],
            [
              'Prépositionnel',
              'о/об',
              'à propos de / concernant',
              'о работе',
              'Мы говорим о работе. — Nous parlons du travail.',
            ],
            [
              'Prépositionnel',
              'при',
              'en présence de / sous',
              'при Сталине',
              'При Сталине жизнь была трудной. — Sous Staline la vie était dure.',
            ],
            [
              'Prépositionnel',
              'по',
              'à / dès (formel, après arrivée)',
              'по приезде',
              'По приезде он позвонил. — À son arrivée il a téléphoné.',
            ],
        ],
      },
    },


      {
        h2: 'Prépositions à double cas : deux cas selon le sens',
        content:
          'Certaines prépositions russes peuvent prendre **deux cas différents** ; le sens change selon le cas. Ce sont les **plus importantes à maîtriser** : un seul mauvais cas change le sens de la phrase.',
        table: {
          caption: 'Prépositions à deux cas (в, на, за, под, о/об)',
          boldColumnIndices: [0, 1, 2],
          headers: ['Prép.', 'Cas 1', 'Exemple 1', 'Cas 2', 'Exemple 2'],
          rows: [
            ['в', 'Accusatif', 'в школу (à l’école, direction)', 'Prépositionnel', 'в школе (à l’école, lieu)'],
            ['на', 'Accusatif', 'на работу (au travail, direction)', 'Prépositionnel', 'на работе (au travail, lieu)'],
            [
              'за',
              'Accusatif',
              'сесть за стол (s’asseoir à table)',
              'Instrumental',
              'за столом (assis à table)',
            ],
            [
              'под',
              'Accusatif',
              'положить под стол (mettre sous la table)',
              'Instrumental',
              'под столом (sous la table)',
            ],
            [
              'о/об',
              'Accusatif',
              'споткнуться о порог (trébucher sur le seuil)',
              'Prépositionnel',
              'говорить о работе (parler du travail)',
            ],
          ],
        },
        bullets: [
          '**Règle В/НА direction vs. lieu** — le schéma à double cas le plus testé :',
          '**В/НА + accusatif = DIRECTION** (mouvement vers) : Я иду в школу. Положи книгу на стол.',
          '**В/НА + prépositionnel = LIEU** (être quelque part, statique) : Я нахожусь в школе. Книга лежит на столе.',
        ],
      },
      {
        h2: 'Prépositions + génitif — approfondissement',
        content:
          'Le **génitif** a plus de prépositions que tout autre cas. Voici les plus importantes regroupées par sens.',
        subsections: [
          {
            h3: 'Origine et séparation : из, с, от',
            content:
              '**из** — de l’intérieur d’un lieu : из России, из дома, из школы. **с** — de (d’une surface) : с полки, с работы (fam.), с крыши. **от** — de (personne ou source) : от друга, от врача, от боли. **À distinguer :** из vs. от — **из** pour les lieux (intérieur) ; **от** pour les personnes et sources. Я вернулся из Москвы vs. Я получил письмо от Ивана.',
          },
          {
            h3: 'Temps : до, после, с (…до)',
            content:
              '**до** — jusqu’à / avant : до урока, до свидания. **после** — après : после работы, после дождя. **с … до** — de … à : с утра до вечера.',
          },
          {
            h3: 'Espace : у, около, вокруг, вдоль, мимо, напротив',
            content:
              '**у** — chez / près de : у окна, у меня. **около** — près de : около школы, около часа. **вокруг** — autour : вокруг стола, вокруг города. **вдоль** — le long de : вдоль реки, вдоль дороги. **мимо** — devant / en passant : мимо нас, пройти мимо. **напротив** — en face : напротив банка.',
          },
        ],
      },
      {
        h2: 'Prépositions + datif — approfondissement',
        subsections: [
          {
            h3: 'К — direction vers',
            content:
              "**К** exprime le mouvement ou l’orientation vers une personne, un objet ou un but abstrait — **contrepartie datif** de в/на pour la direction : к врачу, к другу, к окну, стремиться к цели.",
          },
          {
            h3: 'По — la préposition polyvalente',
            content:
              '**Le long de / dans** une surface : гулять по парку, идти по улице. **Moyen de communication :** по телефону, по почте, по интернету. **Matière :** урок по математике, книга по истории. **Temps récurrent :** по понедельникам, по вечерам. **Selon :** по закону, по правилам.',
          },
        ],
      },
      {
        h2: 'Prépositions + accusatif — approfondissement',
        subsections: [
          {
            h3: 'В et НА pour la direction',
            content:
              '**В** et **на** sont les principales prépositions d’**accusatif de direction**. **В** = mouvement vers un espace fermé : в школу, в Россию, в магазин. **НА** = vers une surface ou certains lieux : на стол, на работу, на Кубу.',
          },
          {
            h3: 'ЧЕРЕЗ — à travers / dans (temps)',
            content:
              '**À travers :** переплыть через реку, пройти через лес. **Dans (temps) :** через час, через неделю, через год.',
          },
          {
            h3: 'ЗА et ПОД pour le mouvement',
            content:
              '**За + accusatif** = mouvement derrière : зайти за угол, сесть за стол. **Под + accusatif** = mouvement sous : положить под стол, залезть под кровать.',
          },
        ],
      },
      {
        h2: 'Prépositions + instrumental — approfondissement',
        subsections: [
          {
            h3: 'С — avec',
            content:
              '**С + instrumental** est très fréquent. **Accompagnement :** с другом, с семьёй. **Ingrédients :** кофе с молоком, суп с грибами.',
          },
          {
            h3: 'Prépositions de position spatiale',
            content:
              '**За + instrumental** = derrière / à : за столом, за горой. **Перед + instrumental** = devant : перед домом, перед сном. **Над + instrumental** = au-dessus : над городом, над столом. **Под + instrumental** = en dessous : под столом, под землёй. **Между + instrumental** = entre : между нами, между домами.',
          },
        ],
      },
      {
        h2: 'Prépositions + prépositionnel — approfondissement',
        subsections: [
          {
            h3: 'В et НА pour le lieu',
            content:
              '**В** et **на** au prépositionnel = **lieu statique** — où quelque chose est déjà : **В** : в Москве, в школе, в доме, в России. **НА** : на столе, на работе, на улице, на Кубе.',
          },
          {
            h3: 'О/ОБ — à propos de',
            content:
              '**О + prépositionnel** = sujet de la pensée ou de la parole : говорить о, думать о, мечтать о, писать о. **О чём ?** | **О ком ?** **об** devant voyelle : об этом, об Иване.',
          },
        ],
      },
      {
        h2: 'Stratégies pour mémoriser préposition + cas',
        subsections: [
          {
            h3: 'Stratégie 1 : apprendre par groupes de cas',
            content:
              "Plutôt qu’une préposition isolée, apprenez des **paquets par cas**. Commencez par le bloc génitif (без, до, из, у, от, после, для, кроме) jusqu’à automatisation, puis datif (к, по).",
          },
          {
            h3: 'Stratégie 2 : une phrase mémorable par préposition',
            content:
              'Pour chaque préposition, créez **une phrase personnelle** correcte. Без тебя мне плохо restera plus longtemps que « без + nom ».',
          },
          {
            h3: 'Stratégie 3 : priorité aux doubles cas',
            content:
              '**В, на, за**, **под** : deux cas chacune. **Phrases jumelles** : Я иду в школу / Я в школе. Я поставил книгу за шкаф / Книга за шкафом.',
          },
          {
            h3: 'Stratégie 4 : test « Où ? » vs « Où aller ? »',
            content:
              'Pour **в** et **на** : est-ce **« Où ? »** (prépositionnel) ou **« Où aller ? »** (accusatif) ?',
          },
        ],
      },
    ],
    conclusion:
      'Maîtriser **prépositions et cas** est un levier rapide pour la précision. La clé est la **paire préposition → cas** : sans → génitif, к → datif, etc.\\n\\nCommencez par les **doubles cas** (в, на, за, под). Test **« Où ? » / « Où aller ? »** pour в/на. Phrases réelles — et les paires deviendront automatiques.',
    conclusionBullets: [
      'Le **génitif** a le plus de prépositions (18) — bloc без, до, из, у, от, после, для, кроме.',
      '**В/НА + accusatif** = direction. **В/НА + prépositionnel** = lieu.',
      '**Doubles cas** (в, на, за, под) : mouvement vs position.',
      'Utilisez le tableau maître comme **référence** jusqu’à automatisation.',
    ],
    ctaText: 'Entraînez les prépositions dans l’appli',
    ctaHref: '/',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Prépositions et cas en russe : quel cas après chaque préposition ?',
      description:
        'Guide complet : chaque préposition russe et son cas. 44 prépositions, doubles cas, approfondissement, mémorisation.',
      datePublished: '2026-03-12',
      dateModified: '2026-03-12',
      author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
      publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id':
          'https://russiandeclensions.com/learn/articles/russian-prepositions-and-cases',
      },
      keywords:
        'prépositions cas russe, prépositions génitif russe, в на с по cas russe',
    },
    faq: [
      {
        question: 'Quelles prépositions russes régent le génitif ?',
        answer:
          'Les principales : **без**, **до**, **из**, **с**, **у**, **от**, **после**, **для**, **кроме**, **вокруг**, **мимо**, **вместо**, **напротив**, **из-за**, **из-под**, **ради**, **около**, **вдоль**. Mnémo **БДИ-УОП-ДК** pour les plus fréquentes.',
      },
      {
        question: 'Différence entre в + accusatif et в + prépositionnel ?',
        answer:
          '**в + Accusatif** = **direction** : Я иду в школу. **в + Prépositionnel** = **lieu** : Я в школе. Idem pour на.',
      },
      {
        question: 'Quand с prend-il le génitif ou l’instrumental ?',
        answer:
          '**с + génitif** = « de » (d’une surface) : книга упала с полки. **с + instrumental** = « avec » : я иду с другом. Sens totalement différent.',
      },
    ],
};

