import type { LearnArticle } from '../learnArticles';

/** Traduction française de l'article `russian-noun-gender-guide` (source EN : `learnArticles.ts`). */
export const russianNounGenderGuideFr: LearnArticle = {
  slug: 'russian-noun-gender-guide',
  title: 'Le genre des noms russes : masculin, féminin, neutre (guide complet)',
  metaTitle:
    'Le genre des noms russes : masculin, féminin, neutre expliqué | Russian Cases with Anna',
  metaDescription:
    "Apprenez à reconnaître le genre d'un nom russe grâce à sa terminaison, les noms en -ь qui piègent tout le monde, les exceptions (кофе, папа), et comment le genre régit adjectifs, verbes et cas.",
  keywords: [
    'genre des noms russes',
    'masculin féminin neutre en russe',
    'comment reconnaître le genre en russe',
    'genre grammatical russe',
    'terminaisons et genre en russe',
    'signe mou et genre russe',
    'exceptions genre russe',
    'accord des adjectifs en russe',
    'кофе masculin ou neutre',
    'guide du genre en russe',
  ],
  h1: 'Le genre des noms russes : masculin, féminin, neutre (guide complet)',
  heroImage: {
    src: '/articles/russian-noun-gender-chalkboard.webp',
    alt: 'Un tableau noir classant les noms russes en colonnes masculin, féminin et neutre',
    width: 1536,
    height: 1024,
  },
  intro:
    "Chaque nom russe appartient à l'un des trois genres — masculin, féminin ou neutre — et cette simple étiquette contrôle discrètement presque tout le reste dans la phrase qui l'entoure. Se tromper de genre, et l'adjectif, le pronom possessif, le verbe au passé, puis la terminaison de cas qui suit peuvent tous devenir incorrects, même quand le nom lui-même est parfaitement connu.\n\nLa bonne nouvelle, c'est que le genre russe **n'est pas aléatoire**. **Environ 90 % des noms révèlent leur genre rien qu'à leur dernière lettre** — un raccourci rapide et fiable une fois le schéma connu. La mauvaise nouvelle, ce sont les 10 % restants : les noms terminés par le signe mou **-ь** peuvent être masculins ou féminins sans aucun indice visuel, et une poignée de mots courants (папа, кофе) ignorent tout simplement la règle orthographique parce que le sens l'emporte.\n\nCe guide vous donne la règle de terminaison qui couvre la majorité des noms, le piège du -ь et l'astuce qui l'apprivoise, les exceptions à retenir par cœur, et exactement comment le genre irrigue ensuite les adjectifs, les verbes au passé et le système des six cas lui-même.",
  introByline: {
    text: '**Rédigé par Nathan** — francophone passionné de russe ; je partage ce qui fonctionne vraiment pour la grammaire, les cas et la pratique au quotidien.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, fondateur de Russian Cases with Anna',
    imageWidth: 256,
    imageHeight: 256,
  },
  whatYouLearn: [
    'La règle des trois terminaisons qui prédit le genre pour environ **90 % des noms russes**',
    'Pourquoi les noms terminés en **-ь** sont le plus grand piège de genre — et l\'astuce **-ость** qui aide',
    'Les exceptions où le genre naturel l\'emporte sur l\'orthographe (**папа**, **дедушка**) et où les emprunts prennent le neutre par défaut (**кино**, **пальто**)',
    'Comment le genre contrôle les **terminaisons d\'adjectifs**, les **pronoms possessifs** et les **verbes au passé**',
    'Pourquoi le genre est le vrai point de départ pour apprendre les **terminaisons de cas russes**',
  ],
  leadMagnetCta: {
    title: 'Maîtrisez les cas russes au-delà du genre — appli gratuite',
    description:
      "Le genre n'est que la première couche — chaque nom se décline ensuite différemment selon ce genre, à travers six cas. Russian Cases with Anna propose des leçons structurées et des quiz intelligents pour automatiser chaque cas — gratuit sur iOS et Android.",
    ctaText: "Télécharger l'appli — Gratuit",
    ctaHref: '/',
  },
  sections: [
    {
      h2: "Pourquoi le genre des noms russes compte (ce n'est pas qu'une étiquette)",
      content:
        "En français, le genre grammatical influence déjà pas mal de choses, mais en russe, il est **structurel** : il détermine la terminaison de tout adjectif décrivant le nom, la forme des pronoms possessifs comme « mon » ou « ton », la terminaison du verbe au passé quand ce nom est le sujet, et — plus tard — le jeu de six terminaisons de cas que le nom suit pour le reste de sa vie grammaticale.\n\nRegardez tout ce qui change entre trois phrases par ailleurs identiques, uniquement parce que le genre du nom change :",
      table: {
        headers: ['Genre', 'Russe', 'Français'],
        rows: [
          ['Masculin', 'Мой новый дом стоял здесь.', 'Ma nouvelle maison se tenait ici.'],
          ['Féminin', 'Моя новая книга лежала здесь.', 'Mon nouveau livre était posé ici.'],
          ['Neutre', 'Моё новое окно было здесь.', 'Ma nouvelle fenêtre était ici.'],
        ],
        caption: "Le même schéma de phrase, trois genres : pronom, adjectif et verbe changent tous",
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Le pronom possessif change : **мой → моя → моё** (« mon/ma »)',
        "La terminaison de l'adjectif change : **новый → новая → новое** (« nouveau/nouvelle »)",
        "La terminaison du verbe au passé change : **стоял → лежала → было** (accord, pas de sens différent)",
        "Plus tard, les **terminaisons de cas** attachées au nom lui-même dépendent aussi de ce même genre",
      ],
    },
    {
      h2: 'Comment reconnaître le genre à la terminaison (la règle des 90 %)',
      content:
        "Pour la grande majorité des noms russes, on peut lire le genre directement sur la dernière lettre de la **forme du dictionnaire** (nominatif singulier). Apprenez ce tableau et vous devinerez juste presque à chaque fois face à un nouveau nom.",
      table: {
        headers: ['Terminaison', 'Genre', 'Exemples'],
        rows: [
          ['Consonne', 'Masculin', 'стол (table), дом (maison), город (ville)'],
          ['-й', 'Masculin', 'музей (musée), герой (héros), чай (thé)'],
          ['-а', 'Féminin', 'книга (livre), школа (école), мама (maman)'],
          ['-я', 'Féminin', 'неделя (semaine), земля (terre), тётя (tante)'],
          ['-о', 'Neutre', 'окно (fenêtre), слово (mot), молоко (lait)'],
          ['-е / -ё', 'Neutre', 'море (mer), поле (champ), бельё (linge)'],
          ['-ь', 'Masculin **ou** féminin', 'voir la section suivante — c\'est la seule exception'],
        ],
        caption: "Prédire le genre d'un nom russe à partir de sa dernière lettre",
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Un nom terminé par une **consonne dure** ou **-й** est presque toujours masculin — pas d\'exception notable à ce stade',
        'Un nom terminé par **-о** ou **-е/-ё** est presque toujours neutre',
        'Un nom terminé par **-а** ou **-я** est en général féminin — mais surveillez les exceptions ci-dessous, car c\'est là que le sens peut l\'emporter sur l\'orthographe',
        "Cette règle fonctionne uniquement sur la **forme du dictionnaire (nominatif singulier)** — les terminaisons changent une fois le nom décliné, vérifiez toujours d'abord la forme de base",
      ],
    },
    {
      h2: 'Le piège du signe mou : les noms en -ь',
      content:
        "Les noms terminés par le signe mou **-ь** sont le seul endroit où l'orthographe ne donne aucun indice — ils peuvent être masculins ou féminins, et les deux groupes sont fréquents. Il n'y a aucun raccourci visuel ici ; les locuteurs natifs connaissent simplement chaque mot, et les apprenants doivent mémoriser la liste.",
      table: {
        headers: ['Noms féminins en -ь', 'Noms masculins en -ь'],
        rows: [
          ['ночь (nuit)', 'день (jour)'],
          ['дверь (porte)', 'конь (cheval)'],
          ['мышь (souris)', 'словарь (dictionnaire)'],
          ['кровать (lit)', 'учитель (professeur)'],
          ['тетрадь (cahier)', 'дождь (pluie)'],
          ['любовь (amour)', 'гость (invité)'],
          ['осень (automne)', 'рубль (rouble)'],
        ],
        caption: 'Noms en -ь courants, répartis par genre — aucune règle orthographique ne les distingue',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'L\'unique raccourci fiable : les noms terminés par **-ость** ou **-есть** sont presque toujours féminins — радость (joie), скорость (vitesse), известность (notoriété)',
        'En dehors de ce suffixe, il n\'y a aucun schéma de son ou d\'orthographe — **дверь** et **словарь** riment mais ont des genres opposés',
        'Quand vous apprenez un nouveau nom en -ь, apprenez-le avec un adjectif ou un nombre assorti (**одна дверь**, « une porte ») pour que le genre reste attaché au mot dès le premier jour',
        'C\'est la plus grande source d\'erreurs de genre chez les apprenants intermédiaires — prévoyez un vrai temps de mémorisation pour cela',
      ],
    },
    {
      h2: 'Les exceptions courantes qui brisent la règle',
      content:
        "Une poignée de mots courants ignorent totalement la règle de terminaison, pour deux raisons différentes : le **genre naturel** (le sexe réel d'une personne l'emporte sur l'orthographe) et les **emprunts indéclinables** (mots empruntés qui ne changent jamais de forme et prennent le neutre par défaut, sauf si le sens dit autrement).",
      table: {
        headers: ['Mot', 'La terminaison suggère', 'Genre réel', 'Pourquoi'],
        rows: [
          ['папа (papa)', 'Féminin (-а)', 'Masculin', 'Genre naturel : la personne est un homme'],
          ['дедушка (grand-père)', 'Féminin (-а)', 'Masculin', 'Genre naturel : la personne est un homme'],
          ['дядя (oncle)', 'Féminin (-я)', 'Masculin', 'Genre naturel : la personne est un homme'],
          ['мужчина (homme)', 'Féminin (-а)', 'Masculin', 'Genre naturel : la personne est un homme'],
          ['кофе (café)', 'Ni terminaison claire ni neutre évident', 'Masculin (traditionnellement)', "Fixé par convention ; le neutre est courant à l'oral mais reste marqué non standard"],
          ['кино (cinéma)', 'Semble neutre (-о)', 'Neutre', 'Emprunt indéclinable — genre par défaut des noms inanimés empruntés'],
          ['пальто (manteau)', 'Semble neutre (-о)', 'Neutre', 'Emprunt indéclinable — genre par défaut'],
          ['такси (taxi)', 'Pas de terminaison claire', 'Neutre', 'Emprunt indéclinable — genre par défaut'],
        ],
        caption: "Exceptions : quand le genre naturel ou la convention des emprunts l'emporte sur la règle",
        boldColumnIndices: [0, 2],
      },
      bullets: [
        'Une poignée de **noms en -а/-я désignant des hommes** (папа, дедушка, дядя, мужчина) sont grammaticalement masculins — ils prennent tout de même des adjectifs et des verbes au passé masculins : **мой добрый дедушка** (« mon gentil grand-père »)',
        'Les emprunts indéclinables (terminés par une voyelle qui ne change jamais : -о, -е, -и, -у) prennent le genre **neutre** par défaut, sauf si le sens du mot indique autre chose — **кофе** est l\'exception célèbre, resté masculin par convention établie',
        'Quelques emprunts tirent leur genre de la **catégorie** à laquelle ils appartiennent : **авеню** (avenue) est féminin parce que « улица » (rue) est féminin — c\'est le sens, pas l\'orthographe, qui décide',
        'Cette liste d\'exceptions est courte et facile à apprendre — ne laissez pas cela ébranler votre confiance dans la règle des 90 %',
      ],
    },
    {
      h2: 'Comment le genre régit accord des adjectifs et des pronoms',
      content:
        "Chaque adjectif et chaque pronom possessif russe doit **s'accorder en genre** avec le nom qu'il décrit. Au nominatif, chaque genre a sa propre terminaison d'adjectif — c'est le premier endroit où les débutants « ressentent » consciemment le genre à l'œuvre.",
      table: {
        headers: ['Genre', "Terminaison de l'adjectif", 'Exemple', 'Sens'],
        rows: [
          ['Masculin', '-ый / -ий', 'новый дом', 'une nouvelle maison'],
          ['Féminin', '-ая / -яя', 'новая книга', 'un nouveau livre'],
          ['Neutre', '-ое / -ее', 'новое окно', 'une nouvelle fenêtre'],
        ],
        caption: "Accord de l'adjectif selon le genre (au nominatif)",
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Les pronoms possessifs suivent la même répartition en trois : **мой чай** (mon thé, masc.), **моя сумка** (mon sac, fém.), **моё имя** (mon nom, neutre)',
        'Le démonstratif « ce/cette » fait de même : **этот дом**, **эта книга**, **это окно**',
        "Cet accord n'est pas un style facultatif — utiliser la mauvaise terminaison est une erreur de grammaire, pas seulement un accent",
      ],
    },
    {
      h2: 'Comment le genre régit les verbes au passé',
      content:
        "Les verbes russes au passé s'accordent avec le genre de leur sujet au singulier — un trait que le français a conservé dans une moindre mesure (participes passés), mais qui surprend souvent les apprenants par sa systématicité en russe. Le verbe ne change pas de sens ; seule sa terminaison s'adapte à qui ou quoi a fait l'action.",
      table: {
        headers: ['Genre du sujet', 'Exemple', 'Sens'],
        rows: [
          ['Masculin', 'Он читал.', 'Il lisait / a lu.'],
          ['Féminin', 'Она читала.', 'Elle lisait / a lu.'],
          ['Neutre', 'Оно читало.', 'Il/elle lisait / a lu (neutre).'],
        ],
        caption: 'Accord du verbe au passé selon le genre du sujet',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Le schéma est simple une fois qu\'on le voit : **-л** (masc.), **-ла** (fém.), **-ло** (neutre), **-ли** (tout pluriel)',
        'C\'est pourquoi il faut connaître le genre d\'un nom même pour une simple phrase au passé — « le livre est tombé » se dit **книга упала**, pas упал ni упало',
        "La règle s'applique au **genre grammatical** du nom, pas nécessairement au sexe biologique, pour les objets inanimés",
      ],
    },
    {
      h2: "Comment le genre façonne les terminaisons de cas (la vue d'ensemble)",
      content:
        "Le genre ne concerne pas seulement les adjectifs et le passé — c'est le **principe organisateur** de tout le système de déclinaison à six cas. Les noms masculins, féminins et neutres suivent chacun un schéma de terminaisons différent à travers le nominatif, le génitif, le datif, l'accusatif, l'instrumental et le prépositionnel. Apprenez d'abord le genre d'un nom, et le reste de sa déclinaison devient une question d'application du bon schéma plutôt que de devinette.\n\nSi vous n'avez pas encore travaillé les cas un par un, notre [guide complet des terminaisons de cas russes](/learn/articles/russian-case-endings-cheatsheet) regroupe chaque terminaison par genre, et [Les cas russes expliqués simplement : guide pour débutants](/learn/articles/russian-cases-explained-beginners-guide) est la meilleure étape suivante après cet article.",
      bullets: [
        'Les noms féminins en -а/-я partagent un schéma de déclinaison ; les noms masculins en consonne/-й en partagent un autre ; les noms neutres en -о/-е un troisième',
        'Les noms en -ь répartissent aussi leur schéma de déclinaison selon le genre — une raison de plus pour laquelle la distinction masculin/féminin compte, pas seulement l\'orthographe',
        'Une fois le genre automatique, chaque nouveau nom appris s\'intègre directement dans un schéma de déclinaison connu au lieu d\'exiger une mémorisation séparée',
      ],
    },
    {
      h2: 'Erreurs fréquentes sur le genre des noms russes',
      bullets: [
        '**Supposer que tout nom en -а/-я est féminin.** Les mots désignant des hommes (папа, дедушка, дядя, мужчина) restent masculins quelle que soit la terminaison — vérifiez le sens avant l\'orthographe.',
        '**Deviner les noms en -ь au son.** дверь (fém.) et словарь (masc.) riment mais ont des genres opposés — il n\'y a pas de raccourci en dehors de la mémorisation et du schéma -ость.',
        '**Utiliser des adjectifs neutres avec кофе.** Le russe traditionnel garde кофе masculin (**чёрный кофе**, pas чёрное кофе), même si de nombreux locuteurs natifs utilisent le neutre à l\'oral — la forme masculine reste ce qu\'attendent les manuels de grammaire et les examens.',
        '**Oublier que les emprunts indéclinables ont quand même un genre.** Des mots comme пальто, метро et такси ne changent jamais de terminaison, mais restent grammaticalement neutres et nécessitent des adjectifs neutres : **новое пальто** (un nouveau manteau).',
        '**Confondre les terminaisons d\'adjectifs masculines et féminines sous la pression du temps.** -ый/-ая et -ой/-ая se ressemblent à vitesse rapide — ralentissez sur le nouveau vocabulaire jusqu\'à ce que l\'association devienne automatique.',
      ],
    },
  ],
  faq: [
    {
      question: 'Combien de genres le russe possède-t-il ?',
      answer:
        'Le russe possède **trois genres grammaticaux** : masculin, féminin et neutre. Chaque nom appartient à exactement un seul de ces genres, et ce choix contrôle la forme des adjectifs, des pronoms possessifs, des verbes au passé et des terminaisons de cas utilisés avec ce nom.',
    },
    {
      question: "Comment savoir si un nom russe est masculin ou féminin ?",
      answer:
        "Regardez la **dernière lettre de la forme du dictionnaire (nominatif singulier)** : une consonne ou **-й** indique généralement le masculin, **-а/-я** le féminin, et **-о/-е** le neutre. Cette règle couvre environ 90 % des noms. Les noms terminés par le signe mou **-ь** font exception — ils peuvent être masculins ou féminins et doivent être mémorisés individuellement.",
    },
    {
      question: 'Tous les noms russes en -а sont-ils féminins ?',
      answer:
        "Presque, mais pas tout à fait. Une poignée de mots désignant des **hommes** — папа (papa), дедушка (grand-père), дядя (oncle), мужчина (homme) — se terminent par -а ou -я mais sont grammaticalement **masculins**, car le genre naturel l'emporte sur la règle orthographique. Ils prennent quand même des adjectifs et des verbes au passé masculins.",
    },
    {
      question: 'Quel est le genre de кофе (café) en russe ?',
      answer:
        "Traditionnellement et grammaticalement, **кофе est masculin** (**чёрный кофе**, « café noir »), même si c'est un emprunt indéclinable qui semble devoir prendre le neutre par défaut. L'accord au neutre (**чёрное кофе**) est courant à l'oral familier, mais reste considéré comme non standard par la plupart des références grammaticales et des examens.",
    },
    {
      question: "Le genre d'un nom change-t-il au pluriel ?",
      answer:
        "Non — un nom garde le même genre grammatical à tous les cas et à tous les nombres, mais au **pluriel, les adjectifs et les verbes au passé ne distinguent plus le genre** : les trois genres partagent la même terminaison d'adjectif au pluriel (**новые**) et la même terminaison de passé pluriel (**читали**). L'accord de genre ne compte qu'au singulier.",
    },
  ],
  conclusion:
    "Le genre des noms russes paraît intimidant au premier abord car il touche une grande partie de la phrase — adjectifs, pronoms, verbes, et finalement chaque terminaison de cas. En pratique, cela se résume à une règle fiable qui couvre la plupart des noms, un groupe réellement délicat (les noms en -ь) qui demande simplement de la mémorisation, et une courte liste d'exceptions à apprendre par cœur.\n\nLe moyen le plus rapide de rendre le genre automatique est de l'attacher à chaque nouveau mot dès le premier jour : apprenez les noms avec leur adjectif (**новый дом**, **новая книга**, **новое окно**) plutôt qu'isolément, pour que le genre ne soit jamais un fait séparé à retenir plus tard.",
  conclusionBullets: [
    'Trois genres : **masculin, féminin, neutre** — chaque nom en a exactement un',
    'La règle des 90 % : **consonne/-й = masculin**, **-а/-я = féminin**, **-о/-е = neutre**',
    'Les **noms en -ь** sont la vraie exception — aucun indice orthographique, mémorisez chacun (le suffixe **-ость** est fiablement féminin)',
    'Une courte liste d\'exceptions à apprendre par cœur : **папа, дедушка, дядя** (masculins malgré -а/-я), **кофе** (masculin), **кино/пальто/такси** (emprunts neutres)',
    "Le genre régit les **terminaisons d'adjectifs, les pronoms possessifs, les verbes au passé**, et tout le **système de déclinaison des cas**",
  ],
  conclusionOutro:
    "Le genre est le fondement sur lequel repose toute la grammaire russe. Une fois qu'il devient automatique, apprendre les six cas cesse d'être six mystères séparés et devient trois schémas familiers appliqués systématiquement — **c'est ce basculement qui rend possible un russe qui sonne fluide.**",
  ctaText: 'Télécharger Russian Cases with Anna — Gratuit',
  ctaHref: '/',
  internalLinks: [
    {
      href: '/learn/articles/russian-case-endings-cheatsheet',
      label: 'Les terminaisons de cas russes : l\'anti-sèche ultime',
    },
    {
      href: '/learn/articles/russian-cases-explained-beginners-guide',
      label: 'Les cas russes expliqués simplement : guide visuel pour débutants',
    },
    {
      href: '/learn/articles/russian-genitive-case',
      label: 'Le cas génitif russe : guide complet',
    },
    {
      href: '/learn/articles/russian-accusative-case',
      label: 'Le cas accusatif russe : guide complet',
    },
    {
      href: '/learn/articles/russian-alphabet-cyrillic-guide',
      label: "L'alphabet russe : guide complet du cyrillique",
    },
    { href: '/practice', label: 'Quiz de déclinaisons russes gratuit (les six cas)' },
    { href: '/words', label: 'Parcourez 400+ mots russes avec tableaux de déclinaison complets' },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Le genre des noms russes : masculin, féminin, neutre (guide complet)',
    description:
      "Apprenez à reconnaître le genre d'un nom russe grâce à sa terminaison, les noms en -ь qui piègent tout le monde, les exceptions (кофе, папа), et comment le genre régit adjectifs, verbes et cas.",
    datePublished: '2026-09-10',
    dateModified: '2026-09-10',
    author: {
      '@type': 'Person',
      name: 'Nathan',
      url: 'https://russiandeclensions.com/',
      image: 'https://russiandeclensions.com/landing-cases/founder-photo.webp',
      description: 'Francophone passionné de russe, partage ce qui fonctionne vraiment.',
      worksFor: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://russiandeclensions.com/learn/articles/russian-noun-gender-guide',
    },
    keywords:
      'genre des noms russes, masculin féminin neutre en russe, comment reconnaître le genre en russe, genre grammatical russe, signe mou et genre russe, exceptions genre russe',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russian-noun-gender-chalkboard.webp',
      width: 1536,
      height: 1024,
    },
  },
};
