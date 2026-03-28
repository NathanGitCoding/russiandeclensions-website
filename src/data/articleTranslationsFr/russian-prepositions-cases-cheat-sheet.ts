import type { LearnArticle } from '../learnArticles';

/** Traduction française de l'article `russian-prepositions-cases-cheat-sheet` (source EN : `learnArticles.ts`). Cyrillique des exemples identique à l’EN. */
export const russianPrepositionsCasesCheatSheetFr: LearnArticle = {
  slug: 'russian-prepositions-cases-cheat-sheet',
  title:
    'Anti-sèche prépositions et cas russe : quel cas après chaque préposition',
  metaTitle:
    'Anti-sèche prépositions russe et cas — Quel cas utiliser | Russian Cases with Anna',
  metaDescription:
    'Anti-sèche gratuit : quel cas russe suit chaque préposition. в + accusatif vs prépositionnel, на, с, о, за, под, над, etc. Tableau clair avec exemples. Mettez cette page en favori.',
  keywords: [
    'prépositions russe et cas',
    'quel cas après в',
    'anti-sèche prépositions russe',
    'в accusatif ou prépositionnel',
    'tableau prépositions russe',
    'cas russe après prépositions',
    'на accusatif ou prépositionnel',
    'с génitif ou instrumental',
  ],
  h1: 'Anti-sèche prépositions et cas russe : quel cas après chaque préposition',
  intro:
    "L’un des passages les plus déroutants de la grammaire russe est de savoir **quel cas employer après chaque préposition**. La même préposition peut exiger des cas différents selon le sens — « в школу » (accusatif, direction) vs « в школе » (prépositionnel, lieu) — et se tromper change entièrement la phrase.\n\nCet anti-sèche regroupe **toutes les principales prépositions russes** avec le(s) cas requis, des exemples clairs et des astuces de mémorisation. Mettez cette page en favori — vous y reviendrez souvent.",
  whatYouLearn: [
    'Quel cas exige chaque grande préposition russe',
    'Les prépositions dont le cas dépend du sens (в, на, за, под, с)',
    'Les 10 prépositions les plus fréquentes avec phrases d’exemple',
    'Des astuces pour ne plus confondre les cas après les prépositions',
  ],
  sections: [
    {
      h2: 'La règle d’or : les prépositions imposent le cas',
      content:
        'En russe, **les prépositions gouvernent les cas** — elles obligent le nom qui suit à prendre un cas grammatical précis. Contrairement à l’anglais où les prépositions se placent simplement devant le nom (« in the house », « to the school »), en russe elles modifient activement la terminaison du nom.\n\nCertaines prépositions exigent toujours le même cas. D’autres — les piégeuses — exigent **des cas différents selon que vous parlez de direction (mouvement) ou de lieu (fixe)**. Cette opposition direction / lieu est la première source d’erreurs de cas pour les apprenants.',
    },
    {
      h2: 'Tableau maître : chaque préposition par cas',
      content:
        'Voici la référence complète. Les prépositions marquées d’une ★ peuvent prendre plusieurs cas (détaillé plus bas).',
      table: {
        headers: ['Cas', 'Prépositions', 'Sens / emploi'],
        rows: [
          [
            'Génitif',
            'без, для, до, из, от, у, после, около, вокруг, кроме, вместо, из-за, из-под',
            'Sans, pour, jusqu’à / avant, de (origine), de / loin de, chez / près de, après, autour de, sauf, à la place de, à cause de, de dessous',
          ],
          [
            'Datif',
            'к, по, благодаря, вопреки, навстречу, согласно',
            'Vers, le long de / selon, grâce à, malgré, à la rencontre de, conformément à',
          ],
          [
            'Accusatif',
            'через, про, сквозь',
            'À travers / de part en part, à propos de, à travers',
          ],
          [
            'Accusatif ★',
            'в (direction), на (direction), за (direction), под (direction)',
            'Dans (vers l’intérieur), sur (vers le dessus), derrière / au-delà, sous (mouvement vers)',
          ],
          [
            'Instrumental',
            'с, между, над, перед, за ★, под ★',
            'Avec, entre, au-dessus de, devant, derrière (lieu fixe), sous (lieu fixe)',
          ],
          [
            'Prépositionnel',
            'о (об, обо), при',
            'À propos de, en présence de / pendant',
          ],
          [
            'Prépositionnel ★',
            'в (lieu), на (lieu)',
            'Dans (fixe), sur / à (fixe)',
          ],
        ],
        caption: 'Tableau de référence complet prépositions russes — cas',
        boldColumnIndices: [0],
      },
    },
    {
      h2: 'Les piègeuses : prépositions à cas variables',
      content:
        'Ces 5 prépositions expliquent l’immense majorité des confusions de cas. Maîtrisez-les et vous éliminez la plupart des erreurs sur les prépositions.',
      subsections: [
        {
          h3: 'в — « dans » / « dans (vers) »',
          content:
            '**в + accusatif** = direction (mouvement VERS l’intérieur)\n**в + prépositionnel** = lieu (être DANS quelque chose)\n\nC’est la distinction de préposition la plus importante en russe. La question à se poser : **j’y vais ou j’y suis déjà ?**',
          bullets: [
            '**в школу** (accusatif) — à l’école / vers l’école (j’y vais)',
            '**в школе** (prépositionnel) — à l’école (j’y suis)',
            '**в город** (accusatif) — vers la ville (on s’y dirige)',
            '**в городе** (prépositionnel) — dans la ville (on y est déjà)',
            '**в Россию** (accusatif) — vers la Russie (voyage)',
            '**в России** (prépositionnel) — en Russie (on y est)',
          ],
        },
        {
          h3: 'на — « sur » / « sur (vers) »',
          content:
            '**на + accusatif** = direction (mouvement SUR quelque chose)\n**на + prépositionnel** = lieu (être SUR quelque chose)\n\nMême logique que « в » — direction vs. lieu. Remarque : « на » s’emploie aussi pour certains lieux qu’un anglophone n’attend pas (на работе = au travail, на вокзале = à la gare).',
          bullets: [
            '**на стол** (accusatif) — sur la table (on pose quelque chose)',
            '**на столе** (prépositionnel) — sur la table (c’est là)',
            '**на работу** (accusatif) — au travail (on y va)',
            '**на работе** (prépositionnel) — au travail (on y est)',
            '**на урок** (accusatif) — au cours / à la leçon',
            '**на уроке** (prépositionnel) — pendant / au cours',
          ],
        },
        {
          h3: 'за — « derrière » / « pour » / « au-delà »',
          content:
            '**за + accusatif** = direction (mouvement derrière / au-delà) OU « pour » (en échange, en faveur de)\n**за + instrumental** = lieu (derrière, fixe)\n\nCelle-ci bloque même des niveaux intermédiaires car « за » a tant de sens.',
          bullets: [
            '**за дом** (accusatif) — derrière la maison (on va derrière)',
            '**за домом** (instrumental) — derrière la maison (c’est là)',
            '**за хлебом** (instrumental) — pour du pain (aller en acheter)',
            '**Спасибо за помощь** (accusatif) — Merci pour l’aide',
            '**Я за тебя** (accusatif) — Je suis pour toi (de ton côté)',
          ],
        },
        {
          h3: 'под — « sous »',
          content:
            '**под + accusatif** = direction (mouvement sous quelque chose)\n**под + instrumental** = lieu (sous quelque chose, fixe)',
          bullets: [
            '**под стол** (accusatif) — sous la table (le chat a couru dessous)',
            '**под столом** (instrumental) — sous la table (le chat est assis)',
            '**под дождём** (instrumental) — sous la pluie (on y est)',
            '**под дождь** (accusatif) — sous la pluie (on sort dedans)',
          ],
        },
        {
          h3: 'с — « avec » / « de (depuis) »',
          content:
            '**с + instrumental** = avec (accompagnement)\n**с + génitif** = de (à partir de, en descendant de)\n\nCes deux sens sont totalement différents ; la distinction de cas aide à comprendre lequel est visé.',
          bullets: [
            '**с другом** (instrumental) — avec un ami',
            '**с молоком** (instrumental) — avec du lait',
            '**с горы** (génitif) — de / depuis la montagne',
            '**с работы** (génitif) — du travail (on en revient)',
            '**с утра** (génitif) — depuis le matin',
          ],
        },
      ],
    },
    {
      h2: 'Les 10 prépositions les plus courantes (avec exemples)',
      content:
        'Ces 10 prépositions représentent environ 80 % de l’usage des prépositions en russe. Si vous ne retenez que celles-là, vous couvrez la plupart des situations :',
      table: {
        headers: ['#', 'Préposition', 'Cas', 'Exemple', 'Traduction'],
        rows: [
          [
            '1',
            'в',
            'Acc. / prép.',
            'Я иду **в магазин**. Я **в магазине**.',
            'Je vais au magasin. Je suis dans le magasin.',
          ],
          [
            '2',
            'на',
            'Acc. / prép.',
            'Иди **на кухню**. Я **на кухне**.',
            'Va à la cuisine. Je suis dans la cuisine.',
          ],
          [
            '3',
            'с',
            'Instr. / gén.',
            'Кофе **с молоком**. Пришёл **с работы**.',
            'Café avec du lait. Il est venu du travail.',
          ],
          [
            '4',
            'к',
            'Dat.',
            'Иду **к врачу**.',
            'Je vais chez le médecin.',
          ],
          [
            '5',
            'из',
            'Gén.',
            'Вышел **из дома**.',
            'Il est sorti de la maison.',
          ],
          [
            '6',
            'о (об)',
            'Prép.',
            'Думаю **о тебе**.',
            'Je pense à toi.',
          ],
          [
            '7',
            'для',
            'Gén.',
            'Подарок **для мамы**.',
            'Un cadeau pour maman.',
          ],
          [
            '8',
            'от',
            'Gén.',
            'Письмо **от друга**.',
            'Une lettre d’un ami.',
          ],
          [
            '9',
            'за',
            'Acc. / instr.',
            'Спасибо **за помощь**. Сижу **за столом**.',
            'Merci pour l’aide. Je suis assis à la table.',
          ],
          [
            '10',
            'по',
            'Dat.',
            'Гуляю **по парку**.',
            'Je me promène dans le parc.',
          ],
        ],
        caption: 'Les 10 prépositions russes les plus courantes : cas et exemples',
        boldColumnIndices: [1],
      },
    },
    {
      h2: 'Prépositions au génitif — le plus grand groupe',
      content:
        'Le génitif a le plus de prépositions — ce qui est logique : le génitif exprime l’origine, la possession, l’absence, la cause. Voici les principales :',
      table: {
        headers: ['Préposition', 'Sens', 'Exemple', 'Traduction'],
        rows: [
          ['без', 'sans', 'без **сахара**', 'sans sucre'],
          ['для', 'pour (but)', 'для **студентов**', 'pour les étudiants'],
          ['до', "jusqu'à, avant, au plus tard", 'до **утра**', "jusqu'au matin"],
          ['из', 'de, hors de', 'из **России**', 'de Russie'],
          ['от', 'de (personne / source)', 'от **врача**', 'du médecin'],
          ['у', 'chez, près de, possession', 'у **меня**', 'j’ai (chez moi)'],
          ['после', 'après', 'после **обеда**', 'après le déjeuner'],
          ['около', 'près de, environ', 'около **дома**', 'près de la maison'],
          ['вокруг', 'autour de', 'вокруг **города**', 'autour de la ville'],
          ['кроме', 'sauf, en plus de', 'кроме **меня**', 'sauf moi'],
          ['вместо', 'à la place de', 'вместо **воды**', 'à la place de l’eau'],
          ['из-за', 'à cause de, de derrière', 'из-за **дождя**', 'à cause de la pluie'],
          ['из-под', 'de dessous', 'из-под **стола**', 'de sous la table'],
        ],
        caption: 'Prépositions au génitif avec exemples',
        boldColumnIndices: [0],
        accentColumnIndices: [0],
      },
    },
    {
      h2: 'Prépositions au datif',
      content:
        'Le datif a moins de prépositions mais elles sont très fréquentes :',
      table: {
        headers: ['Préposition', 'Sens', 'Exemple', 'Traduction'],
        rows: [
          ['к', 'vers, chez (personne)', 'к **другу**', 'chez un ami'],
          ['по', 'le long de, selon', 'по **улице**', 'le long de la rue'],
          ['благодаря', 'grâce à', 'благодаря **учителю**', 'grâce au professeur'],
          ['вопреки', 'malgré, en dépit de', 'вопреки **правилам**', 'malgré les règles'],
          ['навстречу', 'à la rencontre de', 'навстречу **мне**', 'à ma rencontre'],
          ['согласно', 'conformément à', 'согласно **закону**', 'conformément à la loi'],
        ],
        caption: 'Prépositions au datif avec exemples',
        boldColumnIndices: [0],
        accentColumnIndices: [0],
      },
    },
    {
      h2: 'Prépositions à l’instrumental',
      content:
        'L’instrumental marque l’accompagnement, le lieu derrière / sous / au-dessus, et le moyen par lequel on fait quelque chose :',
      table: {
        headers: ['Préposition', 'Sens', 'Exemple', 'Traduction'],
        rows: [
          ['с', 'avec', 'с **друзьями**', 'avec des amis'],
          ['между', 'entre', 'между **нами**', 'entre nous'],
          ['над', 'au-dessus de', 'над **городом**', 'au-dessus de la ville'],
          ['перед', 'devant, avant', 'перед **домом**', 'devant la maison'],
          ['за', 'derrière (lieu)', 'за **дверью**', 'derrière la porte'],
          ['под', 'sous (lieu)', 'под **деревом**', 'sous l’arbre'],
        ],
        caption: 'Prépositions à l’instrumental avec exemples',
        boldColumnIndices: [0],
        accentColumnIndices: [0],
      },
    },
    {
      h2: 'Prépositions au cas prépositionnel',
      content:
        'Malgré son nom, le cas prépositionnel a le moins de prépositions dédiées. On l’emploie surtout avec в/на (lieu) et о (à propos de) :',
      table: {
        headers: ['Préposition', 'Sens', 'Exemple', 'Traduction'],
        rows: [
          ['в', 'dans (lieu)', 'в **доме**', 'dans la maison'],
          ['на', 'sur, à (lieu)', 'на **столе**', 'sur la table'],
          ['о (об, обо)', 'à propos de', 'о **России**', 'à propos de la Russie'],
          ['при', 'en présence de, sous (règne)', 'при **Петре I**', 'sous Pierre Ier'],
        ],
        caption: 'Prépositions au cas prépositionnel avec exemples',
        boldColumnIndices: [0],
        accentColumnIndices: [0],
      },
    },
    {
      h2: 'Astuces de mémoire : comment retenir le cas',
      content:
        'Voici des moyens mnémotechniques qui aident à retenir préposition + cas :',
      bullets: [
        '**Direction = accusatif, lieu = prépositionnel / instrumental.** Si vous allez quelque part (в/на + mouvement), accusatif. Si vous y êtes déjà, prépositionnel (в/на) ou instrumental (за/под).',
        '**« Avec » = instrumental.** L’instrumental signifie littéralement « au moyen de » — donc « avec » (accompagnement ou outil) prend toujours l’instrumental : с другом, с ножом.',
        '**« De (origine) » = génitif.** Origine, source, éloignement — tout ce qui veut dire « de » ou « sans » prend le génitif : из России, от друга, с горы, без воды.',
        '**« Vers une personne » = datif.** Aller chez quelqu’un ou donner à quelqu’un : к другу, по улице.',
        '**« À propos de » = prépositionnel.** Parler ou penser à quelque chose : о книге, о России.',
        '**Travaillez par paires.** Apprenez ensemble direction / lieu : в школу / в школе, на работу / на работе, за дом / за домом. La paire renforce les deux cas à la fois.',
      ],
    },
    {
      h2: 'Erreurs fréquentes à éviter',
      content:
        'Voici les erreurs préposition + cas que nous voyons le plus souvent chez les apprenants :',
      mistakeCards: [
        {
          title: 'в + mauvais cas pour le lieu',
          wrong: 'Я живу в Москва.',
          correct: 'Я живу в Москве.',
          why: '« В » avec lieu exige le prépositionnel. Москва → Москве.',
          fix: 'Demandez-vous : je bouge ou je suis fixe ? Fixe = prépositionnel.',
          fixHref: '/practice/prepositional',
        },
        {
          title: 'с + génitif au lieu d’instrumental',
          wrong: 'Я пошёл с друга.',
          correct: 'Я пошёл с другом.',
          why: '« С » au sens « avec » prend l’instrumental. « С » au sens « de (depuis) » prend le génitif (с горы). Ici : « avec un ami ».',
          fix: 'Si vous pouvez remplacer « с » par « ensemble avec », utilisez l’instrumental.',
          fixHref: '/practice/instrumental',
        },
        {
          title: 'к + mauvais cas',
          wrong: 'Я иду к друг.',
          correct: 'Я иду к другу.',
          why: '« К » exige toujours le datif. друг → другу.',
          fix: 'к = toujours datif. Sans exception.',
          fixHref: '/practice/dative',
        },
        {
          title: 'Confondre из et от',
          wrong: 'Я получил письмо из друга.',
          correct: 'Я получил письмо от друга.',
          why: '« Из » = de l’intérieur (из дома = de la maison). « От » = de la part d’une personne ou d’une source. Une lettre vient d’une personne → от.',
          fix: 'из = de l’intérieur d’un lieu. от = d’une personne / d’une source.',
        },
        {
          title: 'на + accusatif pour un lieu fixe',
          wrong: 'Книга лежит на стол.',
          correct: 'Книга лежит на столе.',
          why: 'Le livre est posé (fixe) sur la table → на + prépositionnel. « На стол » (accusatif) = « sur la table » en mouvement.',
          fix: 'Verbes de position (лежать, стоять, сидеть) → prépositionnel. Verbes de mouvement (идти, ставить, класть) → accusatif.',
          fixHref: '/practice/prepositional',
        },
      ],
    },
    {
      h2: 'Référence rapide : préposition → cas en un coup d’œil',
      content:
        'Imprimez-la ou enregistrez-la sur le téléphone — le moyen le plus rapide de vérifier une préposition :',
      table: {
        headers: ['Préposition', 'Cas', 'Sens rapide'],
        rows: [
          ['без', 'Gén.', 'sans'],
          ['благодаря', 'Dat.', 'grâce à'],
          ['в', 'Acc. → / prép. ●', 'vers l’intérieur → / dans ●'],
          ['вместо', 'Gén.', 'à la place de'],
          ['вокруг', 'Gén.', 'autour de'],
          ['вопреки', 'Dat.', 'malgré'],
          ['для', 'Gén.', 'pour (but)'],
          ['до', 'Gén.', "jusqu'à, avant"],
          ['за', 'Acc. → / instr. ●', 'derrière → / derrière ● / pour'],
          ['из', 'Gén.', 'de (intérieur)'],
          ['из-за', 'Gén.', 'à cause de'],
          ['из-под', 'Gén.', 'de dessous'],
          ['к', 'Dat.', 'vers, chez'],
          ['кроме', 'Gén.', 'sauf'],
          ['между', 'Instr.', 'entre'],
          ['на', 'Acc. → / prép. ●', 'sur (vers) → / sur ●'],
          ['над', 'Instr.', 'au-dessus de'],
          ['навстречу', 'Dat.', 'à la rencontre de'],
          ['о (об)', 'Prép.', 'à propos de'],
          ['около', 'Gén.', 'près de'],
          ['от', 'Gén.', 'de (personne / source)'],
          ['перед', 'Instr.', 'devant'],
          ['по', 'Dat.', 'le long de, selon'],
          ['под', 'Acc. → / instr. ●', 'sous → / sous ●'],
          ['после', 'Gén.', 'après'],
          ['при', 'Prép.', 'en présence de, sous'],
          ['про', 'Acc.', 'à propos de (fam.)'],
          ['с', 'Instr. / gén.', 'avec / de (depuis)'],
          ['согласно', 'Dat.', 'conformément à'],
          ['у', 'Gén.', 'chez, près de, avoir'],
          ['через', 'Acc.', 'à travers, de l’autre côté'],
        ],
        caption: '→ = direction / mouvement, ● = lieu / fixe',
        boldColumnIndices: [0],
      },
    },
    {
      h2: 'Conclusion : la pratique ancre les acquis',
      content:
        'Savoir quel cas suit quelle préposition, c’est **la moitié du combat** de la grammaire russe. L’autre moitié, c’est produire automatiquement la bonne terminaison du nom — sans s’arrêter pour réfléchir.\n\nCet anti-sèche vous donne les règles. Il vous faut maintenant de la répétition. Utilisez le **quiz de déclinaisons gratuit** pour travailler chaque cas jusqu’à ce que les terminaisons deviennent un réflexe. Commencez par l’accusatif et le prépositionnel (les plus liés aux prépositions), puis ajoutez génitif, datif et instrumental.\n\nGardez cette page en favori et revenez-y dès qu’un doute subsiste. Avec le temps, vous en aurez de moins en moins besoin — et ce sera le signe que les cas sont vraiment entrés.',
    },
  ],
  conclusion: '',
  ctaText: 'Pratiquer les déclinaisons — quiz gratuit',
  ctaHref: '/practice',
  faq: [
    {
      question: 'Quel cas russe suit в ?',
      answer:
        'Cela dépend du sens. « В » + accusatif = direction / mouvement (в школу = à l’école / vers l’école). « В » + prépositionnel = lieu (в школе = à l’école, sur place). Demandez-vous : j’y vais ou j’y suis ?',
    },
    {
      question: 'Combien y a-t-il de prépositions en russe ?',
      answer:
        'Environ 30 prépositions courantes. Environ 10 (в, на, с, к, из, о, для, от, за, по) représentent à elles seules quelque 80 % de l’usage. Les maîtriser couvre la plupart des situations.',
    },
    {
      question: 'Quel cas a le plus de prépositions en russe ?',
      answer:
        'Le génitif en a le plus — plus d’une douzaine : без, для, до, из, от, у, после, около, вокруг, кроме, вместо, из-за, из-под. C’est cohérent : le génitif exprime l’origine, l’absence et la possession.',
    },
    {
      question: 'Quelle est la différence entre из et от en russe ?',
      answer:
        'Les deux signifient « de » mais autrement. « Из » = de l’intérieur d’un lieu (из дома = de la maison, из России = de Russie). « От » = de la part d’une personne ou source (от друга = d’un ami, от врача = du médecin). Les deux prennent le génitif.',
    },
    {
      question: 'Comment savoir si une préposition prend l’accusatif ou le prépositionnel ?',
      answer:
        'Pour celles qui peuvent prendre les deux (в, на) : direction / mouvement → accusatif (в школу, на работу), lieu / fixe → prépositionnel (в школе, на работе). Pour за et под : mouvement → accusatif, lieu → instrumental (за столом, под деревом).',
    },
  ],
  leadMagnetCta: {
    title: 'Répétez les terminaisons jusqu’à ce qu’elles soient automatiques',
    description:
      'Savoir quel cas impose une préposition, c’est l’étape 1. L’étape 2, c’est produire instantanément la bonne terminaison. Entraînez les 6 cas avec plus de 400 mots — gratuit, sans inscription.',
    ctaText: 'Commencer le quiz gratuit →',
    ctaHref: '/practice',
  },
  internalLinks: [
    { href: '/practice', label: 'Quiz gratuit de déclinaisons russe' },
    { href: '/practice/accusative', label: 'Pratiquer l’accusatif' },
    { href: '/practice/genitive', label: 'Pratiquer le génitif' },
    { href: '/practice/dative', label: 'Pratiquer le datif' },
    { href: '/practice/instrumental', label: 'Pratiquer l’instrumental' },
    { href: '/practice/prepositional', label: 'Pratiquer le prépositionnel' },
    {
      href: '/learn/articles/russian-cases-explained-beginners-guide',
      label: 'Les cas russes expliqués : guide du débutant',
    },
    {
      href: '/learn/articles/top-10-russian-case-mistakes',
      label: 'Top 10 des erreurs sur les cas russes',
    },
    { href: '/words', label: 'Parcourir les 400+ tableaux de déclinaison' },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      'Anti-sèche prépositions et cas russe : quel cas après chaque préposition',
    description:
      'Anti-sèche complet : quel cas russe suit chaque préposition. Tableaux, exemples, astuces et erreurs fréquentes.',
    datePublished: '2026-03-22',
    dateModified: '2026-03-22',
    author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id':
        'https://russiandeclensions.com/learn/articles/russian-prepositions-cases-cheat-sheet',
    },
    keywords:
      'prépositions russe et cas, quel cas après в, anti-sèche prépositions russe, cas russe après prépositions',
  },
};
