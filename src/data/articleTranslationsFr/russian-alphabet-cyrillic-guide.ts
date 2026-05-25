import type { LearnArticle } from '../learnArticles';

/** Traduction française de l'article `russian-alphabet-cyrillic-guide` (source EN : `learnArticles.ts`). */
export const russianAlphabetCyrillicGuideFr: LearnArticle = {
  slug: 'russian-alphabet-cyrillic-guide',
  title: "L'alphabet russe : apprendre le cyrillique en 3 étapes simples",
  metaTitle:
    "L'alphabet russe : apprendre le cyrillique en 3 étapes simples (guide complet 2026) | Russian Cases with Anna",
  metaDescription:
    "Apprenez l'alphabet cyrillique russe en 3 étapes claires : lettres familières, faux amis et lettres nouvelles — avec des conseils de prononciation, des astuces mnémotechniques et un plan de 7 jours.",
  keywords: [
    'alphabet russe',
    'alphabet cyrillique',
    'apprendre alphabet russe',
    'lettres russes',
    'cyrillique pour débutants',
    'comment lire le russe',
  ],
  h1: "L'alphabet russe : apprendre le cyrillique en 3 étapes simples",
  heroImage: {
    src: '/articles/russian-alphabet-cyrillic-guide.webp',
    alt: "Lettres de l'alphabet cyrillique russe sur un cahier d'apprentissage",
    width: 1200,
    height: 630,
  },
  introByline: {
    text: "**Rédigé par Nathan** — francophone natif ; j'apprends le russe et je partage ce qui fonctionne vraiment pour la grammaire, les cas et la pratique au quotidien.",
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, fondateur de Russian Cases with Anna',
    imageWidth: 256,
    imageHeight: 256,
  },
  intro:
    "Apprendre à lire le russe ressemble à se retrouver devant une porte verrouillée — jusqu'au moment où l'on réalise qu'on en a déjà la plupart des clés.\n\nL'alphabet cyrillique compte **33 lettres**, contre 26 en français. Un tiers d'entre elles semblent immédiatement familières ; un autre tiers sont des imposteurs visuels qui ressemblent à des lettres latines mais produisent des sons complètement différents ; le dernier tiers est véritablement nouveau — mais plus simple à apprendre qu'il n'y paraît. L'ensemble peut s'assimiler en **une à deux semaines** de pratique quotidienne courte.\n\nCe guide classe les 33 lettres en trois groupes, fournit des astuces mnémotechniques pour chaque lettre difficile, et explique les règles de prononciation — accent tonique et réduction vocalique — qui donnent au russe son sonorité caractéristique. À la fin, vous pourrez déchiffrer **n'importe quel mot russe correctement**, ce qui est la base sur laquelle tout le reste se construit.",
  whatYouLearn: [
    'Les 33 lettres cyrilliques réparties en 3 groupes gérables',
    'Des astuces mnémotechniques pour chaque lettre difficile ou inconnue',
    "Pourquoi l'accent tonique (ударение) est la clé d'une prononciation correcte",
    'Comment la réduction vocalique change la façon dont le russe sonne réellement',
    'Un plan pratique de 7 jours pour passer de zéro à une lecture cyrillique assurée',
  ],
  sections: [
    {
      h2: "Pourquoi le cyrillique est plus facile qu'il n'y paraît",
      content:
        "La plupart des apprenants redoutent le cyrillique parce qu'il semble étranger au premier coup d'œil. En pratique, c'est l'un des alphabets les plus **phonétiquement cohérents** couramment utilisés — bien plus régulier que l'orthographe française, où la même lettre peut produire des dizaines de sons différents selon le contexte.\n\nVoici trois éléments qui rendent le cyrillique accessible :\n\n**1. Il est phonétique.** Chaque lettre a approximativement un son. Une fois les sons connus, vous pouvez lire n'importe quel mot russe correctement (avec quelques nuances d'accent tonique — plus de détails ci-dessous).\n\n**2. Un tiers des lettres sont déjà familières.** Cinq lettres ressemblent à leurs équivalents latins et produisent le même son. Huit autres ressemblent à des lettres familières mais ont des sons différents — ce qui est en fait utile, car vous reconnaissez déjà leur forme.\n\n**3. Vous n'avez pas besoin d'apprendre l'écriture cursive pour commencer.** Le cyrillique imprimé est ce que vous rencontrerez dans les livres, les applis et les contenus numériques. Apprenez d'abord à lire les caractères d'imprimerie.",
      table: {
        caption: "Les 33 lettres russes en un coup d'œil",
        headers: ['Lettre', 'Nom', 'Son approximatif', 'Groupe'],
        rows: [
          ['А а', 'a', '/a/ — « père »', 'Familière'],
          ['Б б', 'be', '/b/ — « beau »', 'Nouvelle'],
          ['В в', 've', '/v/ — « voix »', 'Faux ami'],
          ['Г г', 'gue', '/g/ — « gare »', 'Nouvelle'],
          ['Д д', 'de', '/d/ — « dos »', 'Nouvelle'],
          ['Е е', 'ye', '/je/ — « yeux »', 'Faux ami'],
          ['Ё ё', 'yo', '/jo/ — « yogi »', 'Faux ami'],
          ['Ж ж', 'je', '/ʒ/ — « joie »', 'Nouvelle'],
          ['З з', 'ze', '/z/ — « zéro »', 'Nouvelle'],
          ['И и', 'i', '/i/ — « île »', 'Nouvelle'],
          ['Й й', 'i bref', '/j/ — « paille »', 'Nouvelle'],
          ['К к', 'ka', '/k/ — « car »', 'Familière'],
          ['Л л', 'el', '/l/ — « lune »', 'Nouvelle'],
          ['М м', 'em', '/m/ — « mer »', 'Familière'],
          ['Н н', 'en', '/n/ — « nuit »', 'Faux ami'],
          ['О о', 'o', '/o/ — « or » (tonique)', 'Familière'],
          ['П п', 'pe', '/p/ — « par »', 'Nouvelle'],
          ['Р р', 'er', '/r/ — r roulé', 'Faux ami'],
          ['С с', 'es', '/s/ — « sel »', 'Faux ami'],
          ['Т т', 'te', '/t/ — « toit »', 'Familière'],
          ['У у', 'ou', '/u/ — « lune »', 'Faux ami'],
          ['Ф ф', 'ef', '/f/ — « feu »', 'Nouvelle'],
          ['Х х', 'kha', '/x/ — « jota » espagnol', 'Faux ami'],
          ['Ц ц', 'tse', '/ts/ — « tsé-tsé »', 'Nouvelle'],
          ['Ч ч', 'tche', '/tʃ/ — « tchèque »', 'Nouvelle'],
          ['Ш ш', 'cha', '/ʃ/ — « chat »', 'Nouvelle'],
          ['Щ щ', 'chtcha', '/ʃtʃ/ — ch + tch enchaînés', 'Nouvelle'],
          ['Ъ ъ', 'signe dur', '(muet — signe dur)', 'Nouvelle'],
          ['Ы ы', 'yery', '/ɨ/ — i sombre', 'Nouvelle'],
          ['Ь ь', 'signe mou', '(muet — signe mou)', 'Nouvelle'],
          ['Э э', 'e', '/e/ — « fête »', 'Nouvelle'],
          ['Ю ю', 'you', '/ju/ — « yeux »', 'Nouvelle'],
          ['Я я', 'ya', '/ja/ — « yoga »', 'Nouvelle'],
        ],
        boldColumnIndices: [0, 3],
      },
    },
    {
      h2: 'Étape 1 : les 5 lettres familières',
      content:
        'Commencez par là. Ces cinq lettres ressemblent à leurs équivalents latins et produisent le même son — aucun piège, aucune surprise. Les apprendre prend environ dix minutes.',
      table: {
        headers: ['Lettre', 'Son', 'Comme en français', 'Exemple'],
        rows: [
          ['А а', '/a/', '« a » de « patte »', 'атом (atome)'],
          ['К к', '/k/', '« k » de « kilo »', 'кот (chat)'],
          ['М м', '/m/', '« m » de « mer »', 'мама (maman)'],
          ['О о', '/o/', '« o » de « or » (tonique)', 'он (il)'],
          ['Т т', '/t/', '« t » de « toit »', 'там (là-bas)'],
        ],
        boldColumnIndices: [0],
      },
      bullets: [
        "**О** sonne comme « o » uniquement quand il est **accentué**. Non accentué, il se réduit vers « a » (voir la section sur la réduction vocalique).",
        'Ces cinq lettres sont extrêmement fréquentes — on les rencontre dans presque chaque phrase russe.',
        "Entraînez-vous en repérant ces lettres dans n'importe quel texte russe et en les prononçant à voix haute.",
      ],
    },
    {
      h2: 'Étape 2 : les 8 faux amis',
      content:
        "Ces huit lettres ressemblent à des lettres latines connues — mais elles produisent des sons totalement différents. C'est la principale source de confusion pour les débutants. Apprenez-les soigneusement ; une fois assimilées, vous aurez appris 13 des 33 lettres.",
      table: {
        headers: ['Lettre', 'Ressemble à', 'Son réel', 'Astuce mnémotechnique'],
        rows: [
          ['В в', 'B', '/v/ — « voix »', 'Pensez à « vodka » — commence par В, se prononce V'],
          ['Е е', 'E', '/je/ — « yeux »', '« YE » — comme « yes » en anglais'],
          ['Ё ё', 'E avec points', '/jo/ — « yogi »', '« YO » — les deux points signalent le son « yo »'],
          ['Н н', 'H', '/n/ — « nuit »', 'Pensez « eN » — le nom de la lettre donne le son'],
          ['Р р', 'P', '/r/ — roulé', 'R roulé — Р pour Россия (Russie)'],
          ['С с', 'C', '/s/ — « sel »', '« С » comme « S » — même idée, même forme'],
          ['У у', 'Y', '/u/ — « lune »', "« OU » — imaginez le son d'un fer à cheval"],
          ['Х х', 'X', '/x/ — jota espagnol', 'KH — comme le « ch » allemand de « Bach »'],
        ],
        boldColumnIndices: [0, 1],
      },
      bullets: [
        "La confusion **В / B** est l'erreur la plus fréquente. Travaillez-la séparément jusqu'à ce que В dise toujours « V ».",
        '**Р** est un r roulé ou légèrement battu, pas le r français standard. Même un battement léger suffit pour la plupart des contextes.',
        "**Х** n'existe pas en français standard mais apparaît dans « jota » espagnol ou « Bach » allemand. Pratiquez-le comme un « h » aspiré doux.",
        "Une fois ces 8 lettres reconnues sans hésitation, vous maîtrisez 13 des 33 lettres — près de **40 % de l'alphabet**.",
      ],
    },
    {
      h2: 'Étape 3 : les 20 nouvelles lettres',
      content:
        "Les 20 lettres restantes n'ont pas d'équivalent visuel évident en latin. Certaines correspondent à des sons qui existent en français (Б = B, Д = D, Л = L, П = P, Ф = F) ; d'autres introduisent des sons absents du français (Ж, Ц, Щ, Ы). Regroupez-les par difficulté.",
      subsections: [
        {
          h3: '3a — Nouvelles lettres avec des sons français familiers',
          content:
            "Ces lettres ont une forme inconnue mais produisent des sons que vous articulez déjà en français. Apprenez d'abord le son, puis la forme.",
          table: {
            headers: ['Lettre', 'Son', 'Comme en français', 'Astuce mnémotechnique'],
            rows: [
              ['Б б', '/b/ — « beau »', '« b »', 'Ressemble à un 6 — « Б comme B-six »'],
              ['Г г', '/g/ — « gare »', '« g »', 'Ressemble à un Γ grec — son « G »'],
              ['Д д', '/d/ — « dos »', '« d »', 'Ressemble à une tente — « Д pour Dom (maison) »'],
              ['З з', '/z/ — « zéro »', '« z »', 'Ressemble au chiffre 3 — « З pour Zéro »'],
              ['И и', '/i/ — « île »', '« i »', "Comme un N à l'envers — « И = I »"],
              ['Й й', '/j/ — « paille »', '« y » de « yeux »', 'И avec un accent bref — И court, son « Y »'],
              ['Л л', '/l/ — « lune »', '« l »', 'Ressemble à un V renversé — « Л pour Lampe »'],
              ['П п', '/p/ — « par »', '« p »', 'Ressemble à un portique П — « П pour Port »'],
              ['Ф ф', '/f/ — « feu »', '« f »', 'Ressemble au phi grec Φ — son F'],
            ],
          },
        },
        {
          h3: '3b — Nouvelles lettres avec des sons nouveaux',
          content:
            'Ces lettres introduisent des sons qui nécessitent un peu de pratique — mais chacun est phonétiquement stable, ce qui signifie que le son ne change jamais une fois acquis.',
          table: {
            headers: ['Lettre', 'Son', 'Le plus proche en français', 'Astuce mnémotechnique'],
            rows: [
              ['Ж ж', '/ʒ/ — « je »', '« j » de « joie »', 'Ressemble à un insecte — « Ж bourdonne »'],
              ['Ц ц', '/ts/ — « ts »', '« ts » de « tsé-tsé »', 'Deux lettres en une : T + S = Ц'],
              ['Ч ч', '/tʃ/ — « tch »', '« tch » de « tchèque »', "Ressemble à un 4 à l'envers — « Ч pour Tchetyre (quatre) »"],
              ['Ш ш', '/ʃ/ — « ch »', '« ch » de « chat »', 'Ressemble à un peigne — « Ш fait le son CH »'],
              ['Щ щ', '/ʃtʃ/ — « chtch »', 'CH + TCH enchaînés', 'Ш avec une queue = Ш plus mouillé'],
              ['Э э', '/e/ — « fête »', '« é » de « fête »', "С à l'envers avec une langue — « Э = E pur »"],
              ['Ю ю', '/ju/ — « yeux »', '« you » anglais', 'О avec un bâton — « Ю = YOU »'],
              ['Я я', '/ja/ — « yoga »', '« ya » de « yoga »', "R à l'envers — « Я signifie Je (moi) »"],
            ],
          },
        },
        {
          h3: '3c — Les signes spéciaux : Ъ, Ы, Ь',
          content:
            "Trois lettres méritent un traitement particulier : **Ь** (signe mou), **Ъ** (signe dur) et **Ы** (une voyelle unique).\n\n**Ь (signe mou)** n'a pas de son propre. Il « mouille » la consonne qui le précède — imaginez que vous appuyez la langue contre le palais en terminant la consonne. Exemple : брат (frère) vs брать (prendre).\n\n**Ъ (signe dur)** est rare. Il crée une brève pause entre un préfixe et la syllabe suivante (ex. съезд — congrès). Ne vous en préoccupez pas avant le niveau intermédiaire.\n\n**Ы** est la voyelle la plus difficile pour les francophones. C'est un « i » sombre, central — pour l'approximer, dites « i » puis retirez légèrement la langue vers l'arrière. Exemples : ты (tu), мы (nous). Cela devient naturel avec la pratique.",
        },
      ],
    },
    {
      h2: "Réduction vocalique : pourquoi le russe sonne différemment de ce qu'on lit",
      content:
        "Voici la règle qui perturbe la plupart des débutants : **les voyelles russes changent de son selon qu'elles sont accentuées ou non.**\n\nL'exemple le plus notable est la lettre О :\n- **О accentué** sonne comme le « o » de « or » : большой (grand) — le О de большой est accentué : bol-CHOY.\n- **О non accentué** se réduit vers un « a » atone (comme le « e » de « le ») : молоко (lait) — se prononce « muh-luh-KO », pas « MO-lo-KO ».\n\nА se réduit aussi légèrement quand il n'est pas accentué. C'est ce qu'on appelle la **réduction vocalique** (редукция), et c'est pourquoi le russe parlé peut sembler très différent d'une lecture phonétique.",
      table: {
        headers: ['Voyelle', 'Accentuée', 'Non accentuée', 'Exemple'],
        rows: [
          ['О', '/o/ — « or »', '/ə/ — se réduit vers « a »', 'молоко → muh-luh-KO'],
          ['Е', '/je/ — « yeux »', '/jɪ/ — se réduit vers « yi »', 'телефон → tyi-lyi-FON'],
          ['А', '/a/ — « patte »', '/ə/ — « a » plus léger', 'трамвай → truhm-VAY'],
          ['Я', '/ja/ — « yoga »', '/jɪ/ — se réduit vers « yi »', 'язык → yi-ZYIK'],
        ],
        boldColumnIndices: [0],
      },
      bullets: [
        "Les dictionnaires indiquent l'accent par un signe sur la voyelle tonique (ex. молоко́). Utilisez-les — l'accent n'est pas prévisible.",
        "Vous n'avez pas besoin de maîtriser la réduction vocalique avant de commencer à lire ; sachez simplement qu'elle existe pour que la langue parlée ne vous déroute pas.",
        "La réduction s'assimile naturellement dès lors qu'on écoute beaucoup de russe en suivant la lecture.",
      ],
    },
    {
      h2: "L'accent tonique (ударение) : le défi invisible",
      content:
        "L'accent russe est libre (il peut tomber sur n'importe quelle syllabe) et mobile (il peut se déplacer selon les formes grammaticales du même mot). Il n'existe aucune règle qui indique où tombe l'accent — il faut l'apprendre avec chaque mot.\n\nPourquoi est-ce important ?\n\n1. **Les sons des voyelles changent** (comme vu ci-dessus).\n2. **Le sens du mot peut changer** : за́мок signifie « château » ; замо́к signifie « serrure ». Mêmes lettres, accent différent, mot différent.\n3. **Les formes grammaticales changent de sens** : я пишу́ (j'écris) vs они́ пи́шут (ils écrivent) — les terminaisons verbales et l'accent se déplacent tous les deux.\n\nConseil pratique : **notez toujours l'accent lorsque vous écrivez un nouveau mot dans votre cahier.** Avec le temps, les schémas deviennent intuitifs.",
      table: {
        headers: ['Mot', 'Accent', 'Sens', 'Remarque'],
        rows: [
          ['за́мок', '1re syllabe', 'château', 'ZA-mok'],
          ['замо́к', '2e syllabe', 'serrure (cadenas)', 'za-MOK'],
          ['до́рога', '1re syllabe', 'route', 'DO-ro-ga'],
          ['дорога́', '3e syllabe', 'cher / précieux', 'do-ro-GA'],
        ],
        boldColumnIndices: [0],
      },
    },
    {
      h2: 'Taper en cyrillique : mise en place rapide',
      content:
        "La saisie est l'un des moyens les plus rapides de mémoriser les lettres. Configurer un clavier cyrillique prend deux minutes.",
      subsections: [
        {
          h3: 'Sur iOS (iPhone / iPad)',
          content:
            "Allez dans **Réglages → Général → Clavier → Claviers → Ajouter un clavier**. Choisissez **Russe**. Une fois ajouté, appuyez sur l'icône du globe pour basculer entre le français et le russe. La disposition standard est phonétique pour les locuteurs de langues latines.",
        },
        {
          h3: 'Sur Android',
          content:
            "Allez dans **Paramètres → Gestion générale → Langue et saisie → Clavier à l'écran**. Ajoutez le russe. Basculez en appuyant sur l'indicateur de langue dans la barre d'espace. Gboard et SwiftKey prennent tous deux en charge le russe.",
        },
        {
          h3: 'Sur ordinateur (Windows / Mac)',
          content:
            "Windows : Paramètres → Heure et langue → Langue → Ajouter le russe → Russe phonétique (ou standard). Mac : Réglages → Clavier → Sources d'entrée → ajouter Russe (la disposition phonétique est la plus facile pour les débutants). Basculez via le menu de langues dans la barre des menus.",
        },
      ],
      bullets: [
        "Utilisez une **disposition phonétique** si disponible — elle associe les lettres cyrilliques aux touches latines de son similaire, réduisant considérablement la courbe d'apprentissage.",
        'Écrire un mot cinq fois vaut mieux que le lire vingt fois pour la mémorisation des lettres.',
        'Utilisez le clavier cyrillique dans vos messages dès le début — la pratique en contexte réel est la plus efficace.',
      ],
    },
    {
      h2: "Votre plan de 7 jours pour maîtriser l'alphabet russe",
      content:
        "Dix minutes par jour pendant sept jours suffisent pour atteindre une lecture cyrillique fonctionnelle. Voici un programme jour par jour :",
      table: {
        headers: ['Jour', 'Objectif', 'Cible', "Méthode d'entraînement"],
        rows: [
          ['Jour 1', '5 lettres familières (А К М О Т)', 'Reconnaissance instantanée', 'Écrire chaque lettre 10× ; lire 5 mots courts'],
          ['Jour 2', '8 faux amis (В Е Ё Н Р С У Х)', 'Connaître le piège de chaque lettre', 'Cacher la colonne du son et réciter ; vérifier'],
          ['Jour 3', 'Nouvelles lettres à sons familiers (Б Г Д З И Й Л П Ф)', 'Pouvoir lire un mot de base avec chaque lettre', '3 mots par lettre ; ajouter à Anki'],
          ['Jour 4', 'Nouvelles lettres à sons nouveaux (Ж Ц Ч Ш Щ Э Ю Я)', 'Produire chaque son correctement', 'Shadowing : écouter + répéter 10×'],
          ['Jour 5', 'Signes spéciaux (Ъ Ы Ь) + réduction vocalique', 'Comprendre leur fonction ; produire Ы', 'Paires minimales : брат / брать ; мы / ми'],
          ['Jour 6', "Révision complète de l'alphabet", 'Lire les 33 lettres sans hésitation', 'Test flash aléatoire : mélanger et identifier'],
          ['Jour 7', 'Lire un court texte russe à voix haute', "Épeler chaque mot d'un paragraphe", "Utiliser Duolingo / Babbel / n'importe quel texte"],
        ],
        boldColumnIndices: [0],
      },
      bullets: [
        'Tenez un cahier avec les 33 lettres, leurs sons et un exemple de mot pour chacune.',
        "Après le Jour 7, consacrez 5 minutes par jour à lire un texte russe à voix haute — même si vous ne comprenez pas encore les mots.",
        'Ajoutez un clavier cyrillique à votre téléphone dès le Jour 1 et utilisez-le dès le début.',
      ],
    },
  ],
  leadMagnetCta: {
    title: "De l'alphabet à la grammaire : pratiquez les 6 cas russes",
    description:
      "Une fois que vous lisez le cyrillique, l'étape suivante est la grammaire russe — et les cas en sont le cœur. Russian Cases with Anna vous permet de travailler les six cas avec un retour immédiat, à votre rythme, sur iOS et Android.",
    ctaText: 'Télécharger Russian Cases with Anna — gratuit pour commencer →',
    ctaHref: '/',
  },
  faq: [
    {
      question: "Combien de temps faut-il pour apprendre l'alphabet russe ?",
      answer:
        "La plupart des apprenants peuvent déchiffrer lentement mais correctement des textes russes en une à deux semaines de pratique quotidienne de 10 à 15 minutes. La lecture confortable et naturelle se développe généralement au cours du mois suivant, à mesure que l'on rencontre davantage de vocabulaire en contexte.",
    },
    {
      question: "Le cyrillique est-il difficile à apprendre pour les francophones ?",
      answer:
        "Le cyrillique est généralement considéré comme l'un des aspects les plus faciles de l'apprentissage du russe. Contrairement à la grammaire russe (cas, aspects, conjugaisons), l'alphabet est fini et peut s'apprendre en quelques jours. La cohérence phonétique du cyrillique est un véritable avantage — une fois les sons connus, vous pouvez lire n'importe quel mot.",
    },
    {
      question: "Dois-je apprendre l'écriture cursive russe ?",
      answer:
        "Non, pas au départ. Le cyrillique imprimé est ce que vous rencontrerez dans les livres, les applis, les sites web et les textes tapés. La cursive russe est véritablement différente (plusieurs lettres ne ressemblent en rien à leurs équivalents imprimés) et n'est nécessaire que si vous envisagez de lire des notes manuscrites ou des documents anciens. Concentrez-vous d'abord sur les caractères d'imprimerie.",
    },
    {
      question: "Dois-je mémoriser les 33 lettres avant de commencer la grammaire russe ?",
      answer:
        "Non — et attendre de connaître chaque lettre parfaitement est un piège de procrastination courant. Au Jour 7 du plan ci-dessus, vous devriez commencer à toucher à la grammaire de base même si Ы et Щ ne sont pas encore automatiques. La lecture et la grammaire peuvent se développer en parallèle.",
    },
    {
      question: 'Quelle est la différence entre Ш et Щ ?',
      answer:
        "Ш est un son « ch » dur, comme dans « chat ». Щ est un son « chtch » plus doux et plus long — comme la fin de « fresh cheese » en anglais dit rapidement. Dans le discours courant, la distinction est importante : шить (coudre) vs считать (compter). Pratiquez en écoutant et en répétant des paires minimales russes.",
    },
    {
      question: "Qu'est-ce que le signe mou (Ь) et dois-je m'en préoccuper ?",
      answer:
        "Le signe mou mouille la consonne qui le précède — linguistiquement, il la palatalise. En pratique, il change la prononciation et affecte aussi la grammaire (certains noms féminins se terminent par Ь ; la présence ou l'absence de Ь dans les infinitifs verbaux est importante). Vous le rencontrerez constamment. Reconnaissez-le dès le Jour 1 et apprenez progressivement son effet à travers des exemples réels.",
    },
  ],
  conclusionIntro:
    "Apprendre le cyrillique est un investissement unique qui ouvre tout le reste du russe. Voici l'essentiel à retenir :",
  conclusionBullets: [
    '**5 lettres familières** (А К М О Т) — à apprendre en une session',
    '**8 faux amis** (В Е Ё Н Р С У Х) — le groupe le plus important à travailler soigneusement',
    '**20 nouvelles lettres** — à classer par difficulté ; la plupart correspondent à des sons que vous articulez déjà',
    'Le russe est **phonétiquement cohérent** — apprenez les sons une fois et lisez tout',
    "**L'accent tonique et la réduction vocalique** expliquent pourquoi le russe parlé sonne différemment d'une lecture phonétique",
    "Un **plan de 7 jours** à 10 min/jour vous amène de zéro à une lecture fonctionnelle",
  ],
  conclusionOutro:
    "Une fois que vous lisez le cyrillique, le vrai défi commence : la grammaire russe, et surtout les six cas grammaticaux. Commencez à les travailler tôt sur russiandeclensions.com/practice — c'est gratuit et ne nécessite aucune inscription.",
  internalLinks: [
    { href: '/practice', label: 'Entraînement gratuit aux déclinaisons russes — les 6 cas' },
    {
      href: '/learn/articles/russian-cases-explained-beginners-guide',
      label: 'Les cas russes expliqués simplement : guide visuel pour débutants',
    },
    {
      href: '/learn/articles/learn-russian-on-your-own',
      label: 'Peut-on apprendre le russe seul ? Feuille de route complète',
    },
    {
      href: '/learn/articles/best-free-resources-learn-russian',
      label: '15 meilleures ressources gratuites pour apprendre le russe',
    },
  ],
  ctaText: 'Pratiquer les cas russes — gratuit →',
  ctaHref: '/practice',
  conclusion: '',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "L'alphabet russe : apprendre le cyrillique en 3 étapes simples",
    description:
      "Apprenez l'alphabet cyrillique russe en 3 étapes claires : lettres familières, faux amis et lettres nouvelles — avec des conseils de prononciation, des astuces mnémotechniques et un plan de 7 jours.",
    datePublished: '2026-05-25',
    dateModified: '2026-05-25',
    author: {
      '@type': 'Person',
      name: 'Nathan',
      url: 'https://russiandeclensions.com/',
    },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://russiandeclensions.com/learn/articles/russian-alphabet-cyrillic-guide',
    },
  },
};
