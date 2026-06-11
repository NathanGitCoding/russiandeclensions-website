import type { LearnArticle } from '../learnArticles';

/** Traduction FR de `russian-word-stress-guide` (source EN : `learnArticles.ts`). */
export const russianWordStressGuideFr: LearnArticle = {
  slug: 'russian-word-stress-guide',
  title: "L’accent tonique en russe : pourquoi il change tout (et comment le maîtriser)",
  metaTitle:
    "Accent tonique en russe : le guide complet | Russian Cases with Anna",
  metaDescription:
    "Maîtrisez l’accent tonique russe : comprenez pourquoi il est imprévisible, comment il change le sens, comment il se déplace lors des déclinaisons, et des stratégies pratiques pour entraîner votre oreille.",
  keywords: [
    'accent tonique russe',
    'accentuation en russe',
    'accent russe règles',
    'prononciation russe accent',
    'accent tonique en russe',
    "règles d’accent russe",
  ],
  h1: "L’accent tonique en russe : pourquoi il change tout (et comment le maîtriser)",
  heroImage: {
    src: '/articles/russian-word-stress-guide.webp',
    alt: "Manuel de russe et matériel d’étude avec texte cyrillique",
    width: 1200,
    height: 630,
  },
  intro:
    "Demandez à n’importe quel apprenant de russe de niveau intermédiaire ce qui le bloque le plus, et après les cas, la réponse est presque toujours la même : **l’accent tonique**. Non pas parce qu’il est conceptuellement compliqué — chaque mot a simplement une syllabe accentuée. Le problème, c’est que l’accent tonique russe est **libre**, **mobile** et **invisible**.\n\nEn français ou en espagnol, l’accent suit des règles prévisibles. En russe, ce n’est pas le cas. Il peut tomber sur n’importe quelle syllabe, il n’est pas marqué dans les textes imprimés courants et il peut se déplacer lorsque vous changez le cas d’un nom ou la personne d’un verbe. Deux mots qui s’écrivent de façon identique (за́мок vs замо́к) signifient des choses complètement différentes — l’un est un château, l’autre est une serrure — uniquement en raison de la place de l’accent.\n\nCe guide couvre tout ce dont vous avez besoin : pourquoi l’accent tonique russe est difficile, comment il change le sens, comment il se déplace dans la déclinaison et la conjugaison, et surtout des stratégies pratiques pour vraiment le maîtriser.",
  introByline: {
    text: "**Rédigé par Nathan** — francophone natif ; j’apprends le russe et je partage ce qui fonctionne vraiment pour la grammaire, les cas et la pratique au quotidien.",
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, fondateur de Russian Cases with Anna',
    imageWidth: 256,
    imageHeight: 256,
  },
  whatYouLearn: [
    'Pourquoi l’accent tonique russe est différent de la plupart des langues européennes',
    'Les paires minimales : mots où l’accent est la seule différence de sens',
    'Comment l’accent se déplace lors de la déclinaison des noms russes',
    'Comment l’accent se déplace dans la conjugaison verbale russe',
    'Des régularités utiles pour prédire la place de l’accent',
    'Des stratégies pratiques pour entraîner votre oreille',
  ],
  leadMagnetCta: {
    title: 'Pratiquez la grammaire russe — les cas et au-delà',
    description:
      'Russian Cases with Anna vous propose 128 leçons structurées et 136 quiz pour travailler les déclinaisons, les terminaisons de cas et les structures grammaticales russes. Gratuit sur iOS et Android.',
    ctaText: "Télécharger l’appli — Gratuit",
    ctaHref: '/',
  },
  sections: [
    {
      h2: "Qu’est-ce que l’accent tonique en russe ?",
      content:
        "En russe, chaque mot polysyllabique a exactement **une syllabe accentuée**. Cette syllabe est prononcée plus fort, plus longtemps et à une hauteur légèrement plus élevée que les autres. La voyelle de cette syllabe est aussi prononcée plus clairement — tandis que les voyelles inaccentuées sont réduites.\n\nL’exemple de réduction vocalique le plus important : **о** en position inaccentuée se prononce comme « а » (ou un schwa). C’est pourquoi молоко (lait) se prononce « малако » et non « молоко ». De même, **е** et **я** inaccentués se rapprochent d’un son « и » neutre.\n\nDans les manuels de russe pour apprenants, l’accent est marqué par un accent aigu (′) sur la voyelle accentuée : молоко́, рабо́та, понима́ть. Mais dans les **textes imprimés courants** — livres, articles de presse, sites web — l’accent n’est jamais marqué. On suppose que vous savez où il tombe.",
      bullets: [
        'Chaque mot russe a exactement **une syllabe accentuée**',
        'Le **о** inaccentué se prononce comme « а » — c’est la source de nombreuses erreurs de prononciation',
        'L’accent est marqué dans les dictionnaires d’apprentissage (молоко́) mais **pas** dans les textes courants',
        'Il n’existe pas de position fixe pour l’accent — contrairement au français (dernière syllabe) ou au polonais (avant-dernière)',
      ],
    },
    {
      h2: "Pourquoi l’accent tonique russe est-il particulièrement difficile ?",
      content:
        "Pour les locuteurs de français, d’anglais, d’espagnol ou d’italien, l’accent tonique russe pose un défi qui n’existe pas de la même façon dans leur langue.\n\n**1. Aucune règle de position fixe.** En français, l’accent est toujours sur la dernière syllabe. En polonais, toujours sur l’avant-dernière. En russe, l’accent peut tomber sur n’importe quelle syllabe — première, dernière ou entre les deux. Il n’existe aucune règle universelle sur laquelle s’appuyer.\n\n**2. L’accent n’est pas écrit.** Dès que vous dépassez les supports d’apprentissage, vous lisez du texte cyrillique sans marques d’accent. Chaque nouveau mot est une devinette si vous ne l’avez pas entendu.\n\n**3. L’accent est mobile.** Même si vous apprenez correctement le nominatif singulier d’un nom, l’accent peut se déplacer dans d’autres cas. Même si vous apprenez correctement l’infinitif d’un verbe, l’accent peut changer dans certaines conjugaisons.\n\n**4. L’accent change le sens.** Se tromper d’accent peut vous faire dire un mot complètement différent.\n\nRésultat : l’accent tonique russe s’apprend **mot par mot**, à partir de l’audio — il n’y a pas de raccourci.",
      bullets: [
        "Aucune règle de position : l’accent peut tomber sur **n’importe quelle** syllabe",
        'Non marqué dans les textes courants — chaque nouveau mot doit être confirmé à l’oral',
        'Accent mobile : peut changer selon le cas (noms) et la personne (verbes)',
        'Mauvais accent = **mot différent** dans plusieurs paires bien connues',
      ],
    },
    {
      h2: 'Quand l’accent change le sens : les paires minimales',
      content:
        "Le russe possède plusieurs paires de mots qui s’écrivent de façon identique mais ont des significations complètement différentes selon la syllabe accentuée. Ces paires sont un vrai danger dans la communication orale.",
      table: {
        headers: ['Accent sur la 1re syllabe', 'Accent sur la 2e syllabe', 'Changement de sens'],
        rows: [
          ['за́мок', 'замо́к', 'château vs serrure'],
          ['му́ка', 'мука́', 'tourment / souffrance vs farine'],
          ['а́тлас', 'атла́с', 'atlas (livre de cartes) vs satin (tissu)'],
          ['о́рган', 'орга́н', 'organe (corps) vs orgue (instrument)'],
          ['хло́пок', 'хлопо́к', 'coton vs claquement'],
          ['по́лки', 'полки́', 'étagères vs régiments'],
          ['пи́сать', 'писа́ть', 'uriner (familier) vs écrire'],
        ],
        caption: 'Paires minimales russes : même orthographe, accent différent, sens différent',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'La paire **замок/замок** est l’exemple le plus cité dans les manuels de grammaire russe',
        'La paire **писать/писать** est une erreur que tout apprenant doit absolument éviter',
        'Les erreurs d’accent sur ces mots ne sonnent pas simplement étranger — elles communiquent **le mauvais mot**',
      ],
    },
    {
      h2: 'Comment l’accent se déplace lors de la déclinaison des noms russes',
      content:
        "La plupart des noms russes ont un **accent fixe** : l’accent reste sur la même syllabe pour tous les cas et les deux nombres. Mais un groupe significatif de noms a un **accent mobile** : l’accent se déplace lors de la déclinaison.\n\nIl existe trois schémas d’accent mobile courants :",
      subsections: [
        {
          h3: 'Schéma A : accent sur le radical (singulier) → accent sur la terminaison (pluriel)',
          content:
            "L’accent se trouve sur le radical au singulier mais saute sur la terminaison au pluriel.\n\n— **го́род** (ville) → города́, городо́в, города́м\n— **лес** (forêt) → леса́, лесо́в, леса́м\n— **о́стров** (île) → острова́, острово́в\n\nCe schéma est très courant parmi les noms masculins.",
        },
        {
          h3: "Schéma B : accent sur la terminaison (la plupart des formes) → accent sur le radical (accusatif singulier)",
          content:
            "L’accent est sur la terminaison dans la plupart des formes, mais recule sur le radical à l’accusatif singulier — typique des noms féminins en -а/-я.\n\n— **рука́** (main) : руки́, руке́... mais accusatif sg. = **ру́ку**\n— **нога́** (jambe) : ноги́, ноге́... mais accusatif sg. = **но́гу**\n— **голова́** (tête) : головы́... mais accusatif sg. = **го́лову**\n\nC’est l’un des schémas les plus délicats car l’accent à l’accusatif doit être appris séparément.",
        },
        {
          h3: 'Schéma C : mobilité complète — le tableau complet avec рука',
          content:
            'Certains noms changent d’accent dans presque tous les cas. Le nom рука (main/bras) est l’exemple d’enseignement classique :',
          table: {
            headers: ['Cas', 'Singulier', 'Pluriel'],
            rows: [
              ['Nominatif', 'рука́', 'ру́ки'],
              ['Accusatif', 'ру́ку', 'ру́ки'],
              ['Génitif', 'руки́', 'ру́к'],
              ['Datif', 'руке́', 'рука́м'],
              ['Instrumental', 'руко́й', 'рука́ми'],
              ['Prépositionnel', 'руке́', 'рука́х'],
            ],
            caption: "Déplacements d’accent dans tous les cas de рука (main/bras)",
            boldColumnIndices: [1, 2],
          },
        },
      ],
      bullets: [
        'La plupart des noms = **accent fixe** (même syllabe dans tous les cas)',
        'Les noms à **accent mobile** exigent d’apprendre où tombe l’accent à chaque cas',
        'Un bon dictionnaire indique l’accent sur toutes les formes de déclinaison — utilisez-le systématiquement',
      ],
    },
    {
      h2: 'Comment l’accent se déplace dans la conjugaison verbale russe',
      content:
        "Tout comme pour les noms, certains verbes russes ont un **accent fixe** tout au long de la conjugaison, tandis que d’autres ont un **accent mobile**. Le schéma le plus courant : les verbes perfectifs accentués sur la terminaison déplacent souvent l’accent vers le radical à la 1re personne du singulier (я).",
      table: {
        headers: ['Personne', 'понять (comprendre)', 'начать (commencer)', 'взять (prendre)'],
        rows: [
          ['я (je)', 'пойму́', 'начну́', 'возьму́'],
          ['ты (tu)', 'поймёшь', 'начнёшь', 'возьмёшь'],
          ['он/она (il/elle)', 'поймёт', 'начнёт', 'возьмёт'],
          ['мы (nous)', 'поймём', 'начнём', 'возьмём'],
          ['вы (vous)', 'поймёте', 'начнёте', 'возьмёте'],
          ['они (ils/elles)', 'поймут', 'начнут', 'возьмут'],
        ],
        caption:
          "Accent dans la conjugaison : notez comment la 1re personne du singulier diffère des autres",
        accentColumnIndices: [1, 2, 3],
      },
      subsections: [
        {
          h3: 'Passé : masculin vs autres formes',
          content:
            "Certains verbes déplacent aussi l’accent au passé. Le passé masculin singulier a souvent un accent différent du féminin, du neutre et du pluriel.\n\n— **жить** (vivre) : жил — жила́ — жи́ло — жи́ли\n— **брать** (prendre) : брал — брала́ — бра́ло — бра́ли\n— **пить** (boire) : пил — пила́ — пи́ло — пи́ли\n— **дать** (donner) : дал — дала́ — да́ло — да́ли\n\nRemarque : les formes du **passé féminin** attirent presque toujours l’accent sur la syllabe finale dans ces verbes.",
        },
      ],
      bullets: [
        'Les **verbes perfectifs** déplacent souvent l’accent du radical vers la terminaison dans la conjugaison',
        'Le **passé féminin** a fréquemment l’accent sur la terminaison même quand les autres formes ne l’ont pas',
        'Les verbes irréguliers à haute fréquence (жить, брать, пить, дать) doivent être mémorisés individuellement',
      ],
    },
    {
      h2: '5 régularités pour prédire l’accent tonique russe',
      content:
        "Il n’existe pas de règles absolues pour l’accent tonique russe — mais il y a des **tendances** qui couvrent une grande partie du vocabulaire courant. Apprendre ces schémas ne remplacera pas l’exposition à l’audio, mais vous donnera de meilleures suppositions face à un mot inconnu.",
      subsections: [
        {
          h3: '1. Les suffixes qui attirent systématiquement l’accent',
          content:
            "Certains suffixes attirent de façon fiable l’accent sur eux-mêmes :\n\n— **-ость** (noms abstraits) : ра́дость (joie), го́рдость (fierté), но́вость (nouvelle)\n— **-ение/-ание** (noms verbaux) : реше́ние (décision), созда́ние (création)\n— **-ия** (emprunts étrangers) : исто́рия (histoire), тера́пия (thérapie)\n— **-ист** (noms de professions) : журнали́ст (journaliste), пиани́ст (pianiste)",
        },
        {
          h3: "2. Les préfixes portent rarement l’accent",
          content:
            "Les préfixes (по-, пере-, вы-, за-, при-, etc.) reçoivent presque jamais l’accent dans les verbes et les adjectifs. L’accent tombe presque toujours sur la **racine ou le suffixe**.\n\nException principale : le préfixe **вы-** dans les verbes perfectifs porte toujours l’accent — вы́йти (sortir), вы́пить (boire complètement), вы́учить (apprendre entièrement). Cette règle est quasi absolue.",
        },
        {
          h3: '3. Les mots composés : accent sur le deuxième élément',
          content:
            "Dans les noms et adjectifs composés, l’accent tombe généralement sur la **deuxième racine**.\n\n— **самолёт** (avion) : само + лёт → accent sur лёт\n— **водопад** (cascade) : водо + пад → accent sur пад\n— **землетрясение** (tremblement de terre) : земле + трясение → accent sur трясение",
        },
        {
          h3: "4. Les emprunts conservent souvent l’accent d’origine",
          content:
            "Les mots internationaux empruntés au français, à l’anglais ou à l’allemand conservent fréquemment l’accent de la langue source. Les emprunts au français tendent à accentuer la dernière syllabe.\n\n— теа́тр (théâtre)\n— шокола́д (chocolat)\n— телефо́н (téléphone)\n— университе́т (université)",
        },
        {
          h3: "5. La règle du préfixe вы- — la règle la plus fiable du russe",
          content:
            "Quand le préfixe **вы-** crée un verbe perfectif, il porte toujours l’accent — quelle que soit la syllabe accentuée de l’imperfectif.\n\n— учи́ть → **вы́**учить\n— пи́ть → **вы́**пить\n— ходи́ть → **вы́**ходить\n\nC’est l’une des rares règles d’accent quasi absolues en russe, et elle s’applique sans exception.",
        },
      ],
      bullets: [
        "Ces schémas sont des **tendances, pas des règles** — des exceptions existent pour tous sauf вы-",
        'La règle du préfixe **вы-** est la plus fiable : il porte toujours l’accent',
        "Utilisez ces schémas comme premières suppositions, puis vérifiez toujours avec l’audio",
      ],
    },
    {
      h2: "Stratégies pratiques pour maîtriser l’accent tonique russe",
      content:
        "Puisque l’accent tonique russe ne peut pas être pleinement déduit de l’orthographe, la seule approche fiable est de **constituer un vocabulaire oral étendu**. Voici les stratégies les plus efficaces :",
      subsections: [
        {
          h3: '1. Apprenez toujours les mots à partir de l’audio',
          content:
            "Ne jamais apprendre un nouveau mot russe uniquement à partir du texte. Associez-le toujours à de l’audio — un dictionnaire avec prononciation (Forvo, Wiktionary), un cours, un podcast ou un tuteur. Si vous ne voyez que la forme écrite, vous ne saurez pas où tombe l’accent, et une mauvaise supposition peut devenir une erreur fossilisée.",
        },
        {
          h3: '2. Utilisez un dictionnaire avec marques d’accent',
          content:
            "Faites des marques d’accent votre norme. Utilisez des dictionnaires qui indiquent l’accent sur chaque forme (Wiktionary en russe marque clairement les accents ; les dictionnaires d’apprentissage russes comme Кузнецов ou Ожегов les indiquent aussi). Lorsque vous ajoutez un mot à votre système de cartes mémoire (Anki, etc.), incluez toujours la marque d’accent.",
        },
        {
          h3: '3. Pratiquez le shadowing avec des locuteurs natifs',
          content:
            "Le shadowing — écouter un locuteur natif et répéter immédiatement en imitant son rythme et ses accents — est l’une des méthodes les plus efficaces pour intérioriser les schémas d’accent. Les podcasts russes, les journaux télévisés et les chaînes YouTube pour apprenants sont de bonnes sources.",
        },
        {
          h3: '4. Signalez les mots à accent mobile dans vos notes',
          content:
            "Quand vous apprenez un nouveau nom ou verbe, vérifiez s’il a un accent mobile. Un bon dictionnaire indique toutes les formes de cas avec les marques d’accent. Pour les verbes, consultez la conjugaison complète. Marquez spécialement les mots à accent mobile dans vos notes de vocabulaire pour les réviser avec plus d’attention.",
        },
      ],
      bullets: [
        "Ne jamais apprendre de nouveaux mots **uniquement à partir du texte** — confirmez toujours avec l’audio",
        "Ajoutez les marques d’accent à chaque mot dans votre système de cartes mémoire",
        "Le shadowing est la façon la plus rapide de développer des habitudes d’accent précises et automatiques",
      ],
    },
    {
      h2: "10 mots que les apprenants accentuent presque toujours de façon incorrecte",
      content:
        "Ce sont les mots que même les apprenants de niveau intermédiaire prononcent fréquemment de façon incorrecte — l’accent est contre-intuitif ou ne correspond pas à la première supposition d’un apprenant :",
      table: {
        headers: ['Mot', 'Accent correct', 'Erreur fréquente', 'Sens'],
        rows: [
          ['звони́т', 'звони́т (2e syllabe)', 'зво́нит', 'il/elle téléphone'],
          ['позвони́шь', 'позвони́шь (3e syllabe)', 'позво́нишь', 'tu téléphoneras'],
          ['на́чать', 'на́чать (1re syllabe)', 'нача́ть', 'commencer (infinitif)'],
          ['по́нял', 'по́нял (1re syllabe)', 'поня́л', 'il a compris (passé m.)'],
          ['ку́хня', 'ку́хня (1re syllabe)', 'кухня́', 'cuisine'],
          ['то́рты', 'то́рты (1re syllabe)', 'торты́', 'gâteaux (pluriel de торт)'],
          ['ша́рфы', 'ша́рфы (1re syllabe)', 'шарфы́', 'écharpes (pluriel de шарф)'],
          ['краси́вее', 'краси́вее (2e syllabe)', 'красиве́е', 'plus beau/belle'],
          ['алфави́т', 'алфави́т (3e syllabe)', 'алфа́вит', 'alphabet'],
          ['столя́р', 'столя́р (2e syllabe)', 'сто́ляр', 'menuisier'],
        ],
        caption: "Erreurs d’accent fréquentes chez les apprenants — formes correctes",
        boldColumnIndices: [1],
        accentColumnIndices: [1],
      },
      bullets: [
        '**Звонит/позвонишь** comptent parmi les erreurs d’accent les plus discutées en russe — même les natifs se corrigent entre eux',
        '**Торты** et **шарфы** sont des pièges classiques — l’accent au pluriel ne se déplace pas sur la terminaison',
        "En cas de doute : consultez Wiktionary en version russe, qui indique l’accent sur chaque forme",
      ],
    },
  ],
  faq: [
    {
      question: "L’accent tonique russe est-il toujours imprévisible ?",
      answer:
        "Pas entièrement. Il existe des schémas et des tendances — par exemple, le préfixe вы- porte toujours l’accent, et certains suffixes (-ость, -ение, -ист) l’attirent de façon systématique. Mais contrairement au français ou au polonais, il n’y a pas de règle de position universelle. Vous devez apprendre la plupart des mots individuellement à partir de l’audio.",
    },
    {
      question: "Comment l’accent est-il marqué en russe ?",
      answer:
        "Dans les supports d’apprentissage et les dictionnaires, l’accent est indiqué par un accent aigu (′) sur la voyelle accentuée : молоко́, говори́т, рабо́та. Dans les textes russes imprimés standard (livres, presse, sites web), l’accent n’est pas marqué. La lettre ё porte toujours l’accent lorsqu’elle apparaît — c’est la seule marque d’accent présente dans les textes courants.",
    },
    {
      question: "La lettre ё indique-t-elle toujours l’accent ?",
      answer:
        "Oui. En russe, ё porte toujours l’accent. C’est pourquoi il est important de distinguer е de ё : все (tout le monde, accent sur е) vs всё (tout, ё accentué). De nombreux textes russes remplacent ё par е pour des raisons typographiques, ce qui peut créer de la confusion — mais dans un texte correctement orthographié, ё est toujours utilisé pour la voyelle accentuée.",
    },
    {
      question: "Les locuteurs natifs russes savent-ils toujours où tombe l’accent ?",
      answer:
        "Oui — les locuteurs natifs ont intériorisé l’accent dans leur vocabulaire. Ils débattent cependant parfois de certains mots (notamment звонит vs зво́нит) car les normes d’accent peuvent évoluer selon les générations ou les dialectes. La référence est toujours un dictionnaire normatif tel que l'Орфоэпический словарь, qui précise l’accent correct pour chaque mot.",
    },
    {
      question: "Combien de temps faut-il pour maîtriser l’accent tonique russe ?",
      answer:
        "Il n’y a pas de moment où l’on « termine » d’apprendre l’accent tonique russe — c’est un processus continu de construction du vocabulaire oral. La plupart des apprenants atteignent un niveau confortable (sans fautes fréquentes sur le vocabulaire courant) après 6 à 12 mois d’étude régulière avec exposition à l’audio. Les apprenants avancés rencontrent encore des mots inconnus où ils doivent vérifier l’accent.",
    },
  ],
  conclusionIntro:
    "L’accent tonique russe est l’un de ces aspects de la langue qui récompense l’étude patiente et orientée vers l’audio :",
  conclusionBullets: [
    "L’accent est **libre** en russe — il peut tomber sur n’importe quelle syllabe, sans règle universelle",
    "L’accent **n’est pas écrit** dans les textes courants — vous devez l’apprendre à partir de l’audio",
    "L’accent est **mobile** — il se déplace selon les formes de cas et les conjugaisons verbales pour de nombreux mots",
    'Certaines paires de mots ne diffèrent **que** par l’accent — un mauvais accent signifie le mauvais mot',
    'Le préfixe **вы-** porte toujours l’accent — la règle la plus fiable du russe',
    "Apprenez chaque nouveau mot **à partir de l’audio**, marquez l’accent sur vos cartes mémoire et pratiquez le shadowing",
  ],
  conclusionOutro:
    "La bonne nouvelle : plus vous entendez et pratiquez le russe, plus l’accent devient naturel. Commencez par le vocabulaire à haute fréquence — les 500 mots que vous utiliserez tous les jours — et apprenez leur accent correctement dès le début. Corriger de mauvaises habitudes d’accent plus tard est bien plus difficile que de les acquérir correctement dès le départ.",
  internalLinks: [
    {
      href: '/learn/articles/russian-verbal-aspect-perfective-imperfective',
      label: "L’aspect verbal russe : perfectif vs imperfectif — guide complet",
    },
    {
      href: '/learn/articles/russian-alphabet-cyrillic-guide',
      label: "L’alphabet russe : apprendre le cyrillique en 3 étapes simples",
    },
    {
      href: '/learn/articles/how-long-learn-russian',
      label: "Combien de temps faut-il pour apprendre le russe ?",
    },
    {
      href: '/learn/articles/learn-russian-on-your-own',
      label: "Peut-on apprendre le russe seul ?",
    },
    { href: '/practice', label: 'Quiz gratuit de déclinaisons — pratiquer les 6 cas' },
  ],
  ctaText: 'Pratiquer les cas russes — Gratuit →',
  ctaHref: '/practice',
  conclusion: '',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "L’accent tonique en russe : pourquoi il change tout (et comment le maîtriser)",
    description:
      "Maîtrisez l’accent tonique russe : comprenez pourquoi il est imprévisible, comment il change le sens, comment il se déplace lors des déclinaisons, et des stratégies pratiques pour entraîner votre oreille.",
    datePublished: '2026-05-30',
    dateModified: '2026-05-30',
    author: {
      '@type': 'Person',
      name: 'Nathan',
      url: 'https://russiandeclensions.com/',
      image: 'https://russiandeclensions.com/landing-cases/founder-photo.webp',
      description:
        "Francophone natif apprenant le russe ; écrit sur la grammaire, les cas et les habitudes d’auto-apprentissage pratiques.",
      worksFor: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://russiandeclensions.com/learn/articles/russian-word-stress-guide',
    },
    keywords:
      "accent tonique russe, accentuation en russe, accent russe règles, prononciation russe accent",
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russian-word-stress-guide.webp',
      width: 1200,
      height: 630,
    },
  },
};
