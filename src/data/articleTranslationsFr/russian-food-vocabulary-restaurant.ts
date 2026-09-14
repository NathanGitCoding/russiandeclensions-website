import type { LearnArticle } from '../learnArticles';

/** Traduction française de l'article `russian-food-vocabulary-restaurant` (source EN : `learnArticles.ts`). */
export const russianFoodVocabularyRestaurantFr: LearnArticle = {
  slug: 'russian-food-vocabulary-restaurant',
  introByline: {
    text: '**Rédigé par Nathan** — francophone passionné de russe ; je partage ce qui fonctionne vraiment pour la grammaire, les cas et la pratique au quotidien.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, fondateur de Russian Cases with Anna',
    imageWidth: 256,
    imageHeight: 256,
  },
  title: 'Vocabulaire de la nourriture en russe : commander au restaurant sans bloquer',
  metaTitle: 'Phrases restaurant & nourriture en russe | Russian Cases with Anna',
  metaDescription:
    'Commander à manger en russe : phrases de restaurant, vocabulaire alimentaire, accusatif pour commander, без + génitif, dialogue complet et politesse.',
  keywords: [
    'phrases restaurant russe',
    'vocabulaire nourriture russe',
    'commander en russe',
    'phrases café russe',
    'без génitif russe',
    'я возьму russe',
    'vocabulaire menu russe',
    'commander au restaurant en russe',
  ],
  h1: 'Vocabulaire de la nourriture en russe : commander au restaurant sans bloquer',
  heroImage: {
    src: '/articles/russian-food-vocabulary-restaurant-header.webp',
    alt: 'Table de café russe avec борщ, thé et un menu pour le vocabulaire restaurant',
    width: 1280,
    height: 720,
  },
  intro:
    'Le russe au restaurant est stressant pour les débutants : vous avez faim, quelqu’un attend, et la grammaire exige encore l’**accusatif** pour ce que vous commandez et le **génitif** pour « sans oignons ». Vous bloquez — et vous pointez le menu. Ce guide vous donne des phrases de survie, le vocabulaire alimentaire, les schémas de cas derrière la commande, un dialogue serveur–client complet, et les détails de politesse qui vous font sonner humain.\n\nVous n’avez pas besoin de cas parfaits pour manger — mais quelques cadres rendent toute l’interaction plus fluide.',
  whatYouLearn: [
    'Les phrases restaurant indispensables (menu, commande, addition, à emporter)',
    'Le vocabulaire de base pour la nourriture et les boissons',
    'Commander avec l’accusatif (Я возьму…)',
    '« Sans… » et les quantités avec le génitif',
    'Un dialogue serveur–client complet à réutiliser',
    'Politesse, ты/вы, et pièges fréquents',
  ],
  leadMagnetCta: {
    title: 'Parler au restaurant, c’est de l’accusatif + du génitif déguisés',
    description:
      'Entraînez ces cas jusqu’à ce que Я возьму… et без лука deviennent automatiques. Russian Cases with Anna — gratuit sur iOS et Android.',
    ctaText: 'Téléchargez l’app — Gratuit',
    ctaHref: '/',
  },
  tableAccentVariant: 'accusative',
  sections: [
    {
      h2: 'Phrases restaurant indispensables',
      content:
        'Mémorisez celles-ci en premier. Elles couvrent environ 80 % des interactions au café et au restaurant.',
      table: {
        headers: ['Russe', 'Translittération', 'Français'],
        rows: [
          ['Можно меню, пожалуйста?', 'Mozhno menyu, pozhaluysta?', 'Puis-je avoir le menu, s’il vous plaît ?'],
          ['Что вы посоветуете?', 'Chto vy posovetuyete?', 'Que me conseillez-vous ?'],
          ['Я буду / Я возьму…', "Ya budu / Ya voz'mu…", 'Je vais prendre…'],
          ['Для меня…', 'Dlya menya…', 'Pour moi…'],
          ['Ещё один, пожалуйста.', 'Yeshchyo odin, pozhaluysta.', 'Encore un, s’il vous plaît.'],
          ['Это остро?', 'Eto ostro?', 'C’est épicé ?'],
          ['Можно без лука?', 'Mozhno bez luka?', 'Sans oignon, s’il vous plaît ?'],
          ['С собой, пожалуйста.', 'S soboy, pozhaluysta.', 'À emporter, s’il vous plaît.'],
          ['Здесь / в зале.', "Zdes' / v zale.", 'Sur place / en salle.'],
          ['Счёт, пожалуйста.', 'Schyot, pozhaluysta.', 'L’addition, s’il vous plaît.'],
          ['Можно картой?', 'Mozhno kartoy?', 'Puis-je payer par carte ?'],
          ['Спасибо, всё было вкусно!', 'Spasibo, vsyo bylo vkusno!', 'Merci, c’était délicieux !'],
        ],
        caption: 'Phrases de survie au restaurant',
        boldColumnIndices: [0],
      },
      bullets: [
        '**Пожалуйста** adoucit presque chaque demande — utilisez-le sans retenue.',
        '**Я буду** et **Я возьму** sont tous deux naturels pour commander ; **возьму** sonne un peu plus comme « je prends ».',
        'Pour les salutations à l’arrivée, voir le [guide des salutations](/learn/articles/russian-greetings-guide).',
      ],
    },
    {
      h2: 'Vocabulaire nourriture et boissons',
      content:
        'Un mini-menu de mots très fréquents. Le genre compte pour l’accord plus tard.',
      table: {
        headers: ['Russe', 'Français', 'Genre'],
        rows: [
          ['меню', 'menu', 'Neutre (indéclinable)'],
          ['заказ', 'commande', 'Masculin'],
          ['счёт', 'addition', 'Masculin'],
          ['официант / официантка', 'serveur / serveuse', 'Masc. / Fém.'],
          ['суп', 'soupe', 'Masculin'],
          ['салат', 'salade', 'Masculin'],
          ['борщ', 'bortsch', 'Masculin'],
          ['пельмени', 'pelmeni (raviolis)', 'Pluriel'],
          ['блины', 'blinis / crêpes', 'Pluriel'],
          ['мясо', 'viande', 'Neutre'],
          ['курица', 'poulet', 'Féminin'],
          ['рыба', 'poisson', 'Féminin'],
          ['овощи', 'légumes', 'Pluriel'],
          ['хлеб', 'pain', 'Masculin'],
          ['сыр', 'fromage', 'Masculin'],
          ['рис', 'riz', 'Masculin'],
          ['картошка / картофель', 'pomme(s) de terre', 'Fém. courant / Masc.'],
          ['вода', 'eau', 'Féminin'],
          ['сок', 'jus', 'Masculin'],
          ['чай', 'thé', 'Masculin'],
          ['кофе', 'café', 'Masculin (traditionnellement)'],
          ['пиво', 'bière', 'Neutre'],
          ['вино', 'vin', 'Neutre'],
          ['десерт', 'dessert', 'Masculin'],
          ['мороженое', 'glace', 'Neutre'],
          ['соль / перец / сахар', 'sel / poivre / sucre', 'Fém. / Masc. / Masc.'],
        ],
        caption: 'Mots nourriture et boissons très fréquents',
        boldColumnIndices: [0, 2],
      },
      subsections: [
        {
          h3: 'Extras alimentaires',
          content:
            '**вегетарианский** (végétarien), **без мяса** (sans viande), **без глютена** (sans gluten), **аллергия на…** (allergie à…).\n**Я не ем мясо.** — Je ne mange pas de viande.',
        },
      ],
    },
    {
      h2: 'Commander avec l’accusatif',
      content:
        'Ce que vous commandez est en général un **complément d’objet direct** → **accusatif**. Les noms féminins en **-а/-я** montrent clairement le changement.',
      table: {
        headers: ['Nominatif (forme menu)', 'Accusatif dans la commande', 'Exemple'],
        rows: [
          ['вода', 'воду', 'Я возьму воду.'],
          ['рыба', 'рыбу', 'Для меня рыбу.'],
          ['курица', 'курицу', 'Я буду курицу.'],
          ['пицца*', 'пиццу', 'Одну пиццу, пожалуйста.'],
          ['чай', 'чай', 'Я возьму чай. (masc. inanimé = même forme)'],
          ['кофе', 'кофе', 'Кофе, пожалуйста. (indéclinable en pratique)'],
          ['пельмени', 'пельмени', 'Пельмени, пожалуйста. (plur. inanimé)'],
        ],
        caption: 'Formes à l’accusatif pour commander',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        '*пицца est un emprunt courant ; l’accusatif **пиццу** est largement utilisé.',
        'Les objets animés (rares sur les menus) prendraient un accusatif en forme de génitif — voir le [guide de l’accusatif](/learn/articles/russian-accusative-case).',
        'Nombres : **два чая**, **две воды** suivent les règles nombre+cas du [guide des nombres](/learn/articles/russian-numbers-guide).',
      ],
    },
    {
      h2: '« Sans… » et quantités (génitif)',
      content:
        '**Без** exige toujours le **génitif**. C’est la grammaire de restaurant la plus utile après l’accusatif.',
      table: {
        headers: ['Russe', 'Français', 'Repère génitif'],
        rows: [
          ['без лука', 'sans oignon', 'лук → лука'],
          ['без сахара', 'sans sucre', 'сахар → сахара'],
          ['без мяса', 'sans viande', 'мясо → мяса'],
          ['без молока', 'sans lait', 'молоко → молока'],
          ['без льда', 'sans glaçons', 'лёд → льда'],
          ['чашка чая', 'une tasse de thé', 'génitif « partitif »'],
          ['тарелка супа', 'une assiette / bol de soupe', 'quantité + génitif'],
          ['бутылка воды', 'une bouteille d’eau', 'quantité + génitif'],
        ],
        caption: 'Génitif après без et les mots de quantité',
        boldColumnIndices: [0],
      },
      bullets: [
        '**Можно без лука?** est poli et parfaitement clair.',
        'Les noms de quantité (**чашка, тарелка, бутылка**) mettent la nourriture/boisson au génitif.',
        'Règles plus profondes : [guide du génitif](/learn/articles/russian-genitive-case).',
      ],
    },
    {
      h2: 'Dialogue serveur–client complet',
      content:
        'Un script réutilisable. Changez les plats ; gardez les cadres.',
      table: {
        headers: ['Locuteur', 'Russe', 'Français'],
        rows: [
          ['Serveur', 'Здравствуйте! Что будете заказывать?', 'Bonjour ! Que souhaitez-vous commander ?'],
          ['Vous', 'Здравствуйте. Можно меню, пожалуйста?', 'Bonjour. Puis-je avoir le menu, s’il vous plaît ?'],
          ['Serveur', 'Конечно. Вот меню.', 'Bien sûr. Voici le menu.'],
          ['Vous', 'Что вы посоветуете?', 'Que me conseillez-vous ?'],
          ['Serveur', 'Борщ очень хороший. И пирожки свежие.', 'Le bortsch est très bon. Et les pirojki sont frais.'],
          ['Vous', 'Тогда я возьму борщ и чай без сахара.', 'Alors je prends le bortsch et un thé sans sucre.'],
          ['Serveur', 'Вам здесь или с собой?', 'Sur place ou à emporter ?'],
          ['Vous', 'Здесь, пожалуйста.', 'Sur place, s’il vous plaît.'],
          ['Serveur', 'Хорошо. Минутку!', 'D’accord. Une minute !'],
          ['Vous', 'Счёт, пожалуйста. Можно картой?', 'L’addition, s’il vous plaît. Puis-je payer par carte ?'],
          ['Serveur', 'Да, конечно.', 'Oui, bien sûr.'],
          ['Vous', 'Спасибо, всё было вкусно!', 'Merci, c’était délicieux !'],
        ],
        caption: 'Dialogue café / restaurant',
        boldColumnIndices: [1],
      },
    },
    {
      h2: 'Politesse et pièges fréquents',
      content:
        'Les petits détails sociaux comptent autant que le vocabulaire.',
      bullets: [
        'Par défaut, utilisez **вы** avec le personnel : **Что вы посоветуете?** — pas ты.',
        '**Пожалуйста** pour les demandes ; **спасибо** quand le plat arrive et en partant.',
        'Les normes de pourboire varient selon la ville et le lieu — suivez les indices locaux ; la phrase **оставьте сдачу** (gardez la monnaie) apparaît dans certains contextes.',
        'Ne paniquez pas si vous oubliez une terminaison — pointer + **это, пожалуйста** marche encore ; puis passez aux phrases complètes.',
        '**Кофе** est traditionnellement masculin (**чёрный кофе**) ; beaucoup de locuteurs utilisent le neutre au quotidien — le masculin est plus sûr en registre soigné.',
      ],
      subsections: [
        {
          h3: 'Erreurs à éviter',
          content:
            '**без лук** ✗ → **без лука** ✓.\n**Я возьму вода** ✗ → **воду** ✓.\n**Счёт?** seul peut sonner brusque — ajoutez **пожалуйста**.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Comment commander poliment à manger en russe ?',
      answer:
        'Utilisez Я возьму… ou Я буду… plus пожалуйста. Exemple : Я возьму борщ и чай, пожалуйста. Vouvoyer le personnel avec вы garde un ton poli.',
    },
    {
      question: 'Quel cas utiliser pour commander ?',
      answer:
        'Ce que vous commandez est en général à l’accusatif (COD) : Я возьму воду, Я буду рыбу. Les noms masculins inanimés ont souvent la même forme qu’au nominatif (чай, суп).',
    },
    {
      question: 'Comment dire « sans sucre » ou « sans oignon » ?',
      answer:
        'Utilisez без + génitif : без сахара, без лука, без молока. Можно без лука? est une demande polie et naturelle.',
    },
    {
      question: 'Comment demander l’addition en russe ?',
      answer:
        'Dites Счёт, пожалуйста. Pour payer par carte : Можно картой?',
    },
    {
      question: 'Comment commander à emporter ?',
      answer:
        'Dites С собой, пожалуйста (à emporter / avec moi). Pour manger sur place : Здесь ou В зале.',
    },
  ],
  conclusionIntro:
    'Un petit kit de phrases plus deux cas suffisent pour la plupart des cafés russes.',
  conclusionBullets: [
    'Apprenez les **phrases de survie** (menu, commande, addition, carte)',
    'Commandez avec l’**accusatif** (Я возьму…)',
    'Utilisez **без + génitif** pour personnaliser',
    'Restez sur **вы + пожалуйста**',
    'Pratiquez le **dialogue** jusqu’à ce qu’il vous ennuie — alors vous êtes prêt',
  ],
  conclusionOutro:
    'Quand ces cadres deviennent faciles, renforcez la grammaire avec nos guides de l’[accusatif](/learn/articles/russian-accusative-case) et du [génitif](/learn/articles/russian-genitive-case), et entraînez les terminaisons dans l’[outil de pratique](/practice) gratuit.',
  internalLinks: [
    {
      href: '/learn/articles/russian-accusative-case',
      label: 'Guide de l’accusatif russe',
    },
    {
      href: '/learn/articles/russian-genitive-case',
      label: 'Guide du génitif russe',
    },
    {
      href: '/learn/articles/russian-greetings-guide',
      label: 'Guide des salutations russes',
    },
    {
      href: '/learn/articles/russian-numbers-guide',
      label: 'Guide des nombres russes',
    },
    {
      href: '/learn/articles/russian-most-common-words',
      label: 'Les 100 mots russes les plus fréquents',
    },
    { href: '/practice', label: 'Quiz gratuit de déclinaison russe' },
  ],
  ctaText: 'Entraînez-vous aux cas russes — Gratuit →',
  ctaHref: '/practice',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Vocabulaire de la nourriture en russe : commander au restaurant sans bloquer',
    description:
      'Commander à manger en russe : phrases de restaurant, vocabulaire alimentaire, accusatif pour commander, без + génitif, dialogue complet et politesse.',
    datePublished: '2026-09-13',
    dateModified: '2026-09-13',
    author: {
      '@type': 'Person',
      name: 'Nathan',
      url: 'https://russiandeclensions.com/',
      image: 'https://russiandeclensions.com/landing-cases/founder-photo.webp',
      description:
        'Francophone passionné de russe ; écrit sur la grammaire, les cas et les habitudes d’auto-apprentissage concrètes.',
      worksFor: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://russiandeclensions.com/learn/articles/russian-food-vocabulary-restaurant',
    },
    keywords:
      'phrases restaurant russe, vocabulaire nourriture russe, commander en russe, без génitif russe, я возьму russe',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russian-food-vocabulary-restaurant-header.webp',
      width: 1280,
      height: 720,
    },
  },
};
