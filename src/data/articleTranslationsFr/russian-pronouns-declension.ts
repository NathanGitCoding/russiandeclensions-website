import type { LearnArticle } from '../learnArticles';

/** Traduction française de l'article `russian-pronouns-declension` (source EN : `learnArticles.ts`). */
export const russianPronounsDeclensionFr: LearnArticle = {
  slug: 'russian-pronouns-declension',
  introByline: {
    text: '**Rédigé par Nathan** — francophone passionné de russe ; je partage ce qui fonctionne vraiment pour la grammaire, les cas et la pratique au quotidien.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, fondateur de Russian Cases with Anna',
    imageWidth: 256,
    imageHeight: 256,
  },
  title: 'Déclinaison des pronoms russes : personnels, possessifs et démonstratifs',
  metaTitle: 'Déclinaison des pronoms russes | Russian Cases with Anna',
  metaDescription:
    'Déclinez les pronoms russes aux 6 cas : personnels (я, ты, он…), possessifs (мой, наш), démonstratifs (этот/тот), et le piège него/неё.',
  keywords: [
    'déclinaison pronoms russes',
    'pronoms personnels russes cas',
    'décliner les pronoms russes',
    'мой наш déclinaison',
    'этот тот russe',
    'него неё russe',
    'pronoms possessifs russes',
    'pronoms démonstratifs russes',
  ],
  h1: 'Déclinaison des pronoms russes : personnels, possessifs et démonstratifs',
  heroImage: {
    src: '/articles/russian-pronouns-declension-header.webp',
    alt: 'Flashcards avec les pronoms personnels russes я ты он она мы вы они sur un bureau d’étude',
    width: 1280,
    height: 720,
  },
  intro:
    'Les noms et les adjectifs suivent des tableaux de terminaisons assez réguliers. **Les pronoms, non.** Des formes comme **меня, ему, неё, этом** semblent sans lien avec **я, он, она, этот** — jusqu’à ce qu’on les voie comme un système fermé à apprendre tel quel.\n\nCe guide couvre les trois groupes de pronoms dont vous avez besoin chaque jour : **personnels** (я, ты, он…), **possessifs** (мой, наш, свой…) et **démonstratifs** (этот / тот). Vous aurez aussi le piège des prépositions (**него / неё / них**) et 20 phrases d’exemple avec translittération.',
  whatYouLearn: [
    'Pourquoi les pronoms cassent les schémas réguliers des noms',
    'Tableaux complets des pronoms personnels pour les 6 cas',
    'Pronoms possessifs et accord (мой, наш, свой)',
    'Démonstratifs : этот et тот déclinés',
    'Le piège des prépositions : него, неё, них',
    '20 vraies phrases d’exemple avec translittération',
  ],
  leadMagnetCta: {
    title: 'Pronoms + cas = de vraies phrases',
    description:
      'Russian Cases with Anna entraîne les terminaisons en contexte — y compris les pronoms qui apparaissent dans chaque dialogue. Gratuit sur iOS et Android.',
    ctaText: 'Téléchargez l’app — Gratuit',
    ctaHref: '/',
  },
  tableAccentVariant: 'dative',
  sections: [
    {
      h2: 'Pourquoi les pronoms ne suivent pas les schémas des noms',
      content:
        'Les terminaisons des noms russes sont en grande partie prévisibles une fois le genre connu. Les pronoms sont **supplétifs** : beaucoup de formes de cas viennent de radicaux plus anciens, donc **я → меня → мне → мной** est un paradigme que l’on mémorise comme un ensemble, pas lettre par lettre.\n\nCela paraît pire qu’il ne l’est. Il n’y a qu’une poignée de pronoms personnels, et vous les utilisez sans cesse — donc entraîner les tableaux rapporte plus vite que presque n’importe quel autre tableau de grammaire.',
      bullets: [
        'Les pronoms personnels changent de **radical** selon les cas (я / меня / мной).',
        'Les possessifs et démonstratifs se comportent davantage comme des **adjectifs** — ils s’accordent en genre, nombre et cas.',
        'Après la plupart des prépositions, les pronoms de 3e personne ajoutent **н-** : него, неё, них (pas *его, *её, *их).',
      ],
    },
    {
      h2: 'Pronoms personnels dans les 6 cas',
      content:
        'Apprenez-les en colonnes verticales. Le nominatif est la forme de citation ; chaque autre cas est une forme parlée que vous entendrez dans de vraies phrases.',
      table: {
        headers: ['Cas', 'я', 'ты', 'он', 'она', 'оно', 'мы', 'вы', 'они'],
        rows: [
          ['Nominatif', 'я', 'ты', 'он', 'она', 'оно', 'мы', 'вы', 'они'],
          ['Génitif', 'меня', 'тебя', 'его', 'её', 'его', 'нас', 'вас', 'их'],
          ['Datif', 'мне', 'тебе', 'ему', 'ей', 'ему', 'нам', 'вам', 'им'],
          ['Accusatif', 'меня', 'тебя', 'его', 'её', 'его', 'нас', 'вас', 'их'],
          ['Instrumental', 'мной (-ою)', 'тобой (-ою)', 'им', 'ей (-ею)', 'им', 'нами', 'вами', 'ими'],
          ['Prépositionnel', 'мне', 'тебе', 'нём', 'ней', 'нём', 'нас', 'вас', 'них'],
        ],
        caption: 'Pronoms personnels déclinés dans les six cas',
        boldColumnIndices: [0],
      },
      subsections: [
        {
          h3: 'Schémas utiles à remarquer',
          content:
            '**Génitif = accusatif** pour я, ты, он, она, оно, мы, вы, они (mêmes formes : меня, тебя, его…). Cela divise presque par deux la mémorisation.\n\n**Datif et prépositionnel** partagent **мне / тебе** pour la 1re et 2e personne du singulier.\n\n**Вы** est à la fois « vous » pluriel et « vous » de politesse au singulier — les formes sont identiques ; seuls l’accord du verbe et le contexte social changent.',
        },
      ],
      bullets: [
        'À l’instrumental, **мной / тобой** apparaissent parfois comme **мною / тобою** dans un style formel ou poétique — rare à l’oral courant.',
        '**Он / оно** partagent presque toutes les formes hors nominatif (**его, ему, им, нём**).',
        'Entraînez-vous avec des verbes que vous connaissez déjà : **дай мне**, **я вижу тебя**, **мы говорим о нём**.',
      ],
    },
    {
      h2: 'Pronoms possessifs et accord',
      content:
        'Les possessifs répondent à **чей? чья? чьё? чьи?** (à qui ?). Contrairement au français « mon », le russe **мой** change avec le nom qu’il modifie — exactement comme un adjectif.',
      table: {
        headers: ['Cas', 'мой (masc.)', 'моя (fém.)', 'моё (neutre)', 'мои (pl.)'],
        rows: [
          ['Nominatif', 'мой', 'моя', 'моё', 'мои'],
          ['Génitif', 'моего', 'моей', 'моего', 'моих'],
          ['Datif', 'моему', 'моей', 'моему', 'моим'],
          ['Accusatif', 'мой / моего', 'мою', 'моё', 'мои / моих'],
          ['Instrumental', 'моим', 'моей', 'моим', 'моими'],
          ['Prépositionnel', 'моём', 'моей', 'моём', 'моих'],
        ],
        caption: 'Déclinaison de мой — modèle pour твой et свой',
        boldColumnIndices: [0],
      },
      subsections: [
        {
          h3: 'наш / ваш',
          content:
            '**Наш** et **ваш** suivent un schéma d’apparence « molle » : нашего, нашей, нашему, наши… Même logique d’accord que мой.',
        },
        {
          h3: 'свой vs его / её / их',
          content:
            '**Свой** signifie « le sien / le propre » et renvoie au **sujet** : **Он читает свою книгу** (son propre livre).\n\n**Его / её / их** signifient « son / sa / leur » et **ne se déclinent pas** : **Я вижу его книгу** (je vois son livre). Seuls le nom (et d’éventuels adjectifs) changent.',
        },
      ],
      bullets: [
        'L’animacité à l’accusatif s’applique : **я вижу моего брата**, mais **я вижу мой дом**.',
        'Pour la logique complète de type adjectif derrière ces terminaisons, voir [Déclinaison des adjectifs russes](/learn/articles/russian-adjective-declension).',
      ],
    },
    {
      h2: 'Démonstratifs : этот / тот',
      content:
        '**Этот** = celui-ci / ce (proche) ; **тот** = celui-là / ce (loin / déjà mentionné). Les deux se déclinent et s’accordent avec le nom.',
      table: {
        headers: ['Cas', 'этот', 'эта', 'это', 'эти'],
        rows: [
          ['Nominatif', 'этот', 'эта', 'это', 'эти'],
          ['Génitif', 'этого', 'этой', 'этого', 'этих'],
          ['Datif', 'этому', 'этой', 'этому', 'этим'],
          ['Accusatif', 'этот / этого', 'эту', 'это', 'эти / этих'],
          ['Instrumental', 'этим', 'этой', 'этим', 'этими'],
          ['Prépositionnel', 'этом', 'этой', 'этом', 'этих'],
        ],
        caption: 'Déclinaison de этот (ce / celui-ci)',
        boldColumnIndices: [0],
      },
      subsections: [
        {
          h3: 'тот en bref',
          content:
            '**Тот / та / то / те** suivent la même logique de cas avec d’autres radicaux : того, той, тому, ту, тем, том, тех…\n\nContraste utile : **Эта книга интересная, а та — скучная.** (Ce livre est intéressant, et celui-là est ennuyeux.)',
        },
        {
          h3: 'это vs этот',
          content:
            'L’**это** invariant au sens de « c’est / ce sont » **ne se décline pas** dans ce rôle : **Это мой брат.** Le **этот/эта/это/эти** décliné modifie un nom : **Этот брат живёт в Москве.**',
        },
      ],
    },
    {
      h2: 'Le piège des prépositions (него, неё, них)',
      content:
        'Après la plupart des prépositions, les pronoms de 3e personne prennent un **н-** initial. L’oublier est l’une des erreurs intermédiaires les plus fréquentes.',
      table: {
        headers: ['Sans préposition', 'Avec préposition', 'Français'],
        rows: [
          ['я знаю его', 'я думаю о нём', 'je le connais / je pense à lui'],
          ['я вижу её', 'я иду к ней', 'je la vois / je vais vers elle'],
          ['я слушаю их', 'я говорю с ними', 'je les écoute / je parle avec eux'],
          ['это его книга', 'книга у него', 'c’est son livre / il a un livre'],
        ],
        caption: 'Pronoms de 3e personne avec et sans prépositions',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Formes à mémoriser : **него, нему, ним, нём** (он/оно) ; **неё, ней** (она) ; **них, ним, ними** (они).',
        'Le **н-** apparaît après des prépositions comme **о, у, к, с, для, без, из, от…**',
        'Les possessifs **его / её / их** (« son / sa / leur ») ne se déclinent toujours pas — mais comme pronoms objets après une préposition, utilisez les formes personnelles avec **н-**.',
      ],
    },
    {
      h2: '20 phrases d’exemple',
      content:
        'Vingt phrases couvrant les pronoms personnels, possessifs et démonstratifs. **1–8** personnels · **9–14** possessifs · **15–20** démonstratifs / piège des prépositions.',
      table: {
        headers: ['#', 'Russe', 'Translittération', 'Français'],
        rows: [
          ['1', 'Дай мне книгу.', 'Day mne knigu.', 'Donne-moi le livre.'],
          ['2', 'Я вижу тебя.', 'Ya vizhu tebya.', 'Je te vois.'],
          ['3', 'Мы говорим о нём.', 'My govorim o nyom.', 'Nous parlons de lui.'],
          ['4', 'Скажи ей правду.', 'Skazhi yey pravdu.', 'Dis-lui la vérité.'],
          ['5', 'Он идёт с нами.', 'On idyot s nami.', 'Il vient avec nous.'],
          ['6', 'Это письмо для вас.', "Eto pis'mo dlya vas.", 'Cette lettre est pour vous.'],
          ['7', 'Я их не знаю.', 'Ya ikh ne znayu.', 'Je ne les connais pas.'],
          ['8', 'У неё есть сестра.', "U neyo yest' sestra.", 'Elle a une sœur.'],
          ['9', 'Это мой брат.', 'Eto moy brat.', 'C’est mon frère.'],
          ['10', 'Я читаю свою книгу.', 'Ya chitayu svoyu knigu.', 'Je lis mon (propre) livre.'],
          ['11', 'Где наша машина?', 'Gde nasha mashina?', 'Où est notre voiture ?'],
          ['12', 'Я вижу моего друга.', 'Ya vizhu moyego druga.', 'Je vois mon ami.'],
          ['13', 'Его дом большой.', "Yego dom bol'shoy.", 'Sa maison est grande.'],
          ['14', 'Она любит свою работу.', 'Ona lyubit svoyu rabotu.', 'Elle aime son (propre) travail.'],
          ['15', 'Этот город красивый.', 'Etot gorod krasivyy.', 'Cette ville est belle.'],
          ['16', 'Я живу в этом доме.', 'Ya zhivu v etom dome.', 'J’habite dans cette maison.'],
          ['17', 'Дай мне ту ручку.', 'Day mne tu ruchku.', 'Donne-moi ce stylo-là.'],
          ['18', 'Мы говорим об этой проблеме.', 'My govorim ob etoy probleme.', 'Nous parlons de ce problème.'],
          ['19', 'Кто это? — Это она.', 'Kto eto? — Eto ona.', 'Qui est-ce ? — C’est elle.'],
          ['20', 'Я иду к нему.', 'Ya idu k nemu.', 'Je vais vers lui.'],
        ],
        caption: '20 exemples de pronoms avec translittération',
        boldColumnIndices: [0, 1],
      },
    },
    {
      h2: 'Erreurs fréquentes avec les pronoms russes',
      bullets: [
        '**Utiliser его après une préposition :** *о его* ✗ → **о нём** ✓ (quand « lui » est le complément de la préposition).',
        '**Confondre свой et его :** chose propre au sujet → **свой** ; chose d’un autre → **его/её/их**.',
        '**Oublier l’accord de мой :** *мой книга* ✗ → **моя книга** ✓.',
        '**Traiter это (c’est) comme этот (ce + nom) :** **Это мама** vs **Эта мама**.',
        '**Mélanger datif et accusatif :** **дай мне** (datif) vs **вижу меня** (accusatif).',
      ],
    },
  ],
  faq: [
    {
      question: 'Les pronoms personnels russes ont-ils des formes différentes pour chaque cas ?',
      answer:
        'Oui. Chaque pronom personnel a un paradigme complet à six cas. La bonne nouvelle : génitif et accusatif sont identiques pour tous, ce qui réduit ce qu’il faut mémoriser.',
    },
    {
      question: 'Quand utilise-t-on него au lieu de его ?',
      answer:
        'Utilisez него / неё / них (et les formes en н- associées) après les prépositions quand le pronom est le complément de cette préposition : о нём, у неё, с ними. Его / её / их « nus » s’emploient sans préposition régissante, ou comme possessifs indéclinables au sens de son / sa / leur.',
    },
    {
      question: 'Quelle est la différence entre мой et свой ?',
      answer:
        'Мой signifie « mon / ma » du point de vue du locuteur. Свой signifie « le sien / le propre » et renvoie au sujet de la proposition : Он взял свою сумку (Il a pris son propre sac).',
    },
    {
      question: 'En quoi этот et это diffèrent-ils ?',
      answer:
        'Это au sens de « c’est / ce sont » est invariant : Это мой брат. Этот / эта / это / эти sont des adjectifs démonstratifs qui s’accordent avec un nom : Этот брат живёт здесь.',
    },
    {
      question: 'Вы est-il toujours pluriel ?',
      answer:
        'Grammaticalement, les formes sont les mêmes. Вы peut s’adresser à plusieurs personnes ou à une seule poliment. Les verbes et les formes du passé s’accordent avec вы pluriel même pour le singulier de politesse : Вы были правы.',
    },
  ],
  conclusionIntro: 'La déclinaison des pronoms est finie — et elle débloque presque chaque phrase russe.',
  conclusionBullets: [
    'Mémorisez les **pronoms personnels** en colonnes complètes (génitif = accusatif)',
    'Déclinez **мой / твой / свой / наш / ваш** comme des adjectifs',
    'Laissez les possessifs **его / её / их** inchangés',
    'Ajoutez **н-** après les prépositions : него, неё, них',
    'Entraînez **этот / тот** avec de vrais noms jusqu’à ce que l’accord soit automatique',
  ],
  conclusionOutro:
    'Ensuite, reliez les pronoms aux questions (кто? кому? о ком?) dans la parole quotidienne, et continuez à entraîner les cas avec notre [outil de pratique](/practice) gratuit. Pour les terminaisons de type adjectif plus en détail, revisitez le [guide de déclinaison des adjectifs](/learn/articles/russian-adjective-declension).',
  internalLinks: [
    {
      href: '/learn/articles/russian-adjective-declension',
      label: 'Déclinaison des adjectifs russes : tableau des terminaisons pour les 6 cas',
    },
    {
      href: '/learn/articles/russian-case-endings-cheatsheet',
      label: 'Les terminaisons de cas russes : l’anti-sèche ultime',
    },
    {
      href: '/learn/articles/russian-dative-case',
      label: 'Guide du cas datif russe',
    },
    {
      href: '/learn/articles/russian-genitive-case',
      label: 'Guide du cas génitif russe',
    },
    {
      href: '/learn/articles/top-10-russian-case-mistakes',
      label: 'Top 10 des erreurs sur les cas russes',
    },
    {
      href: '/practice',
      label: 'Quiz de déclinaisons russes gratuit',
    },
  ],
  ctaText: 'Entraînez les cas russes — Gratuit →',
  ctaHref: '/practice',
  conclusion: '',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Déclinaison des pronoms russes : personnels, possessifs et démonstratifs',
    description:
      'Déclinez les pronoms russes aux 6 cas : personnels (я, ты, он…), possessifs (мой, наш), démonstratifs (этот/тот), et le piège него/неё.',
    datePublished: '2026-09-13',
    dateModified: '2026-09-13',
    author: {
      '@type': 'Person',
      name: 'Nathan',
      url: 'https://russiandeclensions.com/',
      image: 'https://russiandeclensions.com/landing-cases/founder-photo.webp',
      description:
        'Francophone passionné de russe ; écrit sur la grammaire, les cas et les habitudes d’auto-apprentissage concrètes.',
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
      '@id': 'https://russiandeclensions.com/learn/articles/russian-pronouns-declension',
    },
    keywords:
      'déclinaison pronoms russes, pronoms personnels russes cas, мой наш déclinaison, этот тот russe, него неё russe',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russian-pronouns-declension-header.webp',
      width: 1280,
      height: 720,
    },
  },
};
