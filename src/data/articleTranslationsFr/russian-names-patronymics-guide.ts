import type { LearnArticle } from '../learnArticles';

/** Traduction française de l'article `russian-names-patronymics-guide` (source EN : `learnArticles.ts`). */
export const russianNamesPatronymicsGuideFr: LearnArticle = {
  slug: 'russian-names-patronymics-guide',
  introByline: {
    text: '**Rédigé par Nathan** — francophone passionné de russe ; je partage ce qui fonctionne vraiment pour la grammaire, les cas et la pratique au quotidien.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, fondateur de Russian Cases with Anna',
    imageWidth: 256,
    imageHeight: 256,
  },
  title: 'Les noms russes expliqués : prénom, patronyme, nom de famille (et leur déclinaison)',
  metaTitle: 'Noms et patronymes russes expliqués | Russian Cases with Anna',
  metaDescription:
    'Comprendre les noms russes : prénom, patronyme (отчество), terminaisons de nom de famille, diminutifs, adresse formelle, et leur déclinaison par cas.',
  keywords: [
    'noms russes guide',
    'patronyme russe',
    'отчество signification',
    'déclinaison des noms russes',
    'diminutifs russes',
    'ты vs вy noms russes',
    'terminaisons noms de famille russes',
    'comment fonctionnent les noms russes',
  ],
  h1: 'Les noms russes expliqués : prénom, patronyme, nom de famille (et leur déclinaison)',
  heroImage: {
    src: '/articles/russian-names-patronymics-guide-header.webp',
    alt: 'Femme tenant un passeport russe à côté d’un carnet avec le nom Иван Иванович Смирнов, avec la cathédrale Saint-Basile en arrière-plan',
    width: 1536,
    height: 1024,
  },
  intro:
    'Un nom russe n’est pas un mot — ce sont trois : un **prénom** (имя), un **patronyme** (отчество, construit à partir du prénom du père) et un **nom de famille** (фамилия). Se tromper dans la combinaison peut vous faire paraître impoli avec un inconnu ou étrangement formel avec un ami. Et dès que vous utilisez des noms dans de vraies phrases, ils se comportent comme n’importe quel autre nom russe : ils **se déclinent**.\n\nCe guide explique comment fonctionne le système à trois parties, comment se construisent patronymes et diminutifs, quelle terminaison de nom de famille utiliser pour une femme ou un homme, et comment un nom comme Иван change à travers les six cas.',
  whatYouLearn: [
    'Comment fonctionne le système имя / отчество / фамилия',
    'Construire un patronyme à partir du prénom du père',
    'Diminutifs courants pour les prénoms russes populaires',
    'Terminaisons de noms de famille et leur accord en genre',
    'Quand utiliser ты plutôt que prénom + patronyme formel',
    'Comment les noms se déclinent à travers les six cas russes',
  ],
  leadMagnetCta: {
    title: 'Les noms se déclinent aussi — pas seulement les noms communs',
    description:
      'Иван devient Ивана, Ивану, Иваном selon le cas. Entraînez-vous sur de vrais schémas de déclinaison, noms compris, avec Russian Cases with Anna — gratuit sur iOS et Android.',
    ctaText: 'Téléchargez l’app — Gratuit',
    ctaHref: '/',
  },
  tableAccentVariant: 'genitive',
  sections: [
    {
      h2: 'Comment fonctionne le système de noms russe',
      content:
        'Les documents officiels, les registres scolaires et les présentations formelles utilisent trois parties : **имя** (prénom), **отчество** (patronyme, issu du prénom du père) et **фамилия** (nom de famille). Ensemble, elles identifient une personne comme le fait un nom légal complet en français — sauf que la partie du milieu n’est pas un « deuxième prénom », elle est générée à partir de votre père.',
      table: {
        headers: ['Partie', 'Terme russe', 'Exemple (fils d’Иван)'],
        rows: [
          ['Prénom', 'имя', 'Пётр'],
          ['Patronyme', 'отчество', 'Иванович'],
          ['Nom de famille', 'фамилия', 'Соколов'],
        ],
        caption: 'Les trois parties d’un nom russe complet',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Le patronyme signifie littéralement « fils d’Иван » ou « fille d’Иван » — **Иванович** / **Ивановна**.',
        'Les trois parties figurent sur un passeport ; seules les deux premières sont utilisées à l’oral, dans une adresse polie.',
        'Les noms de famille sont hérités de la famille, comme en français — ils ne dépendent ni du prénom du père ni de celui de la mère.',
      ],
    },
    {
      h2: 'Prénoms et leurs diminutifs',
      content:
        'Les Russes utilisent constamment des formes courtes et affectueuses — entre amis, en famille, avec les enfants, le prénom complet peut même sonner froid. Chaque prénom a une ou plusieurs formes diminutives standard.',
      table: {
        headers: ['Prénom complet', 'Diminutifs courants', 'Genre'],
        rows: [
          ['Александр', 'Саша, Саня, Шура', 'Masculin'],
          ['Александра', 'Саша, Шура', 'Féminin'],
          ['Дмитрий', 'Дима, Митя', 'Masculin'],
          ['Мария', 'Маша, Маруся', 'Féminin'],
          ['Иван', 'Ваня', 'Masculin'],
          ['Екатерина', 'Катя, Катюша', 'Féminin'],
          ['Николай', 'Коля', 'Masculin'],
          ['Наталья', 'Наташа', 'Féminin'],
          ['Михаил', 'Миша', 'Masculin'],
          ['Елена', 'Лена, Алёна', 'Féminin'],
        ],
        caption: 'Prénoms russes populaires et leurs diminutifs',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Les diminutifs sont pour les contextes **informels avec ты** — ne combinez jamais un diminutif avec un patronyme (pas de « Саша Иванович »).',
        'Ajouter des suffixes comme **-очка/-енька** rend les prénoms encore plus affectueux : Машенька, Ванечка.',
        'Pour les règles de genre derrière ces terminaisons, voir le [guide du genre des noms](/learn/articles/russian-noun-gender-guide).',
      ],
    },
    {
      h2: 'Construire le patronyme (Отчество)',
      content:
        'Le patronyme se forme à partir du **prénom du père** plus un suffixe qui dépend du genre : **-ович / -евич** pour les fils, **-овна / -евна** pour les filles. Les prénoms se terminant par une consonne douce ou une voyelle prennent un suffixe légèrement différent.',
      table: {
        headers: ['Prénom du père', 'Patronyme du fils', 'Patronyme de la fille'],
        rows: [
          ['Иван', 'Иванович', 'Ивановна'],
          ['Сергей', 'Сергеевич', 'Сергеевна'],
          ['Александр', 'Александрович', 'Александровна'],
          ['Дмитрий', 'Дмитриевич', 'Дмитриевна'],
          ['Никита', 'Никитич', 'Никитична'],
          ['Илья', 'Ильич', 'Ильинична'],
        ],
        caption: 'Schémas de patronymes courants',
        boldColumnIndices: [0],
      },
      bullets: [
        'Le patronyme s’utilise avec le prénom — **Иван Иванович**, pas seul dans la plupart des contextes.',
        'Chez les générations plus âgées, utiliser le patronyme **seul** (par ex. appeler quelqu’un juste « Ивановна ») marque un respect familier, courant pour les femmes plus âgées dans un village ou au travail.',
        'Vous ne choisissez jamais votre propre patronyme — il découle automatiquement du prénom de votre père.',
      ],
    },
    {
      h2: 'Noms de famille et accord en genre',
      content:
        'Contrairement aux noms de famille français, la plupart des noms de famille russes changent de forme selon qu’ils appartiennent à un homme ou une femme — car beaucoup de noms de famille sont grammaticalement des **adjectifs**.',
      table: {
        headers: ['Nom de famille masculin', 'Nom de famille féminin', 'Schéma'],
        rows: [
          ['Иванов', 'Иванова', '-ов / -ова'],
          ['Смирнов', 'Смирнова', '-ов / -ова'],
          ['Достоевский', 'Достоевская', '-ский / -ская'],
          ['Толстой', 'Толстая', '-ой / -ая'],
        ],
        caption: 'Comment les terminaisons de nom de famille changent avec le genre',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Les noms de famille en **-ский/-ская** se déclinent exactement comme des adjectifs — voir le [guide de déclinaison des adjectifs](/learn/articles/russian-adjective-declension).',
        'Les noms de famille en **-ов/-ев/-ин** se déclinent comme des noms, avec quelques terminaisons de type adjectif mêlées (instrumental **-ым**).',
        'Certains noms de famille sont **indéclinables** : les noms d’origine étrangère et ceux en **-ко, -их, -ых** (par ex. Шевченко, Седых) ne changent jamais, pour aucun genre ni aucun cas.',
      ],
    },
    {
      h2: 'Adresse formelle vs informelle : ты, вы et formes de noms',
      content:
        'Choisir la bonne forme de nom relève autant de la relation que de la grammaire. Mélanger un diminutif avec вы, ou un nom complet + patronyme avec ты, sonne faux à une oreille russe.',
      table: {
        headers: ['Contexte', 'Forme d’adresse', 'Exemple'],
        rows: [
          ['Inconnu, médecin, fonctionnaire', 'Имя + Отчество + вы', 'Иван Иванович, вы не подскажете...?'],
          ['Nouveau collègue, professeur', 'Имя + Отчество + вы', 'Мария Сергеевна, у меня вопрос.'],
          ['Ami proche, famille', 'Diminutif + ты', 'Ваня, ты идёшь?'],
          ['Enfant parlant à un pair', 'Diminutif + ты', 'Саша, пойдём!'],
        ],
        caption: 'Adapter la forme d’adresse au contexte',
        boldColumnIndices: [1],
      },
      bullets: [
        'Dans le doute, optez par défaut pour **Имя + Отчество + вы** — ce n’est jamais impoli, seulement toujours sûr.',
        'On pardonne souvent aux étrangers de ne pas utiliser le patronyme, mais essayer est réellement apprécié.',
        'Les lieux de travail évoluent vers l’usage du prénom seul pour le personnel plus jeune — suivez l’usage de la pièce.',
      ],
    },
    {
      h2: 'Décliner les noms par cas',
      content:
        'Les noms sont des noms communs grammaticalement, donc ils prennent des terminaisons de cas comme tout le reste dans une phrase russe. Les prénoms suivent les schémas réguliers des noms ; les patronymes et les noms de famille de type adjectif combinent terminaisons de nom et d’adjectif.',
      table: {
        headers: ['Cas', 'Иван (prénom)', 'Ивановна (patronyme)', 'Иванов (nom de famille)'],
        rows: [
          ['Nominatif', 'Иван', 'Ивановна', 'Иванов'],
          ['Génitif', 'Ивана', 'Ивановны', 'Иванова'],
          ['Datif', 'Ивану', 'Ивановне', 'Иванову'],
          ['Accusatif', 'Ивана', 'Ивановну', 'Иванова'],
          ['Instrumental', 'Иваном', 'Ивановной', 'Ивановым'],
          ['Prépositionnel', 'об Иване', 'об Ивановне', 'об Иванове'],
        ],
        caption: 'Un nom décliné à travers les six cas',
        boldColumnIndices: [0],
      },
      bullets: [
        '**Я иду к Ивану** (« Je vais chez Ivan ») utilise le datif, comme tout autre nom après к.',
        '**Я говорю об Ивановне** (« Je parle d’Ivanovna ») utilise le prépositionnel après об.',
        'Pour le schéma complet de chaque cas, voir nos guides du [génitif](/learn/articles/russian-genitive-case), du [datif](/learn/articles/russian-dative-case) et du [prépositionnel](/learn/articles/russian-prepositional-case).',
      ],
      subsections: [
        {
          h3: 'Et les noms de famille comme Толстой ou Достоевская ?',
          content:
            'Ils se déclinent exactement comme des adjectifs : **Толстого** (génitif), **Толстому** (datif), **Толстым** (instrumental). Si vous connaissez déjà les terminaisons des adjectifs, vous connaissez déjà ces noms de famille.',
        },
      ],
    },
    {
      h2: 'Erreurs courantes avec les noms russes',
      content: 'Quelques habitudes trahissent immédiatement un débutant — et sont faciles à corriger.',
      bullets: [
        '**Саша Иванович** ✗ — ne jamais associer un diminutif à un patronyme ; utilisez soit **Иван Иванович**, soit simplement **Ваня**.',
        '**Мария Ивановна** pour une femme dont le père s’appelle Иван ✓ — mais vérifiez le genre : un père nommé **Илья** donne **Ильинична**, pas « Ильевна ».',
        'Oublier que les noms de famille comme **Достоевский** doivent s’accorder en genre : une femme est **Достоевская**, jamais « Достоевский ».',
        'Utiliser вы avec un diminutif (« Ваня, вы... ») — choisissez un seul registre : soit nom complet + вы, soit diminutif + ты.',
      ],
    },
  ],
  faq: [
    {
      question: 'Qu’est-ce qu’un patronyme russe (отчество) ?',
      answer:
        'C’est un nom construit à partir du prénom de votre père, utilisé comme partie centrale d’un nom russe formel. Les fils reçoivent -ович/-евич (par ex. Иванович) ; les filles reçoivent -овна/-евна (par ex. Ивановна).',
    },
    {
      question: 'Dois-je utiliser le patronyme de quelqu’un ?',
      answer:
        'Dans les contextes formels, professionnels ou lors d’une première rencontre, oui — utilisez prénom + patronyme avec вы. Entre amis et en famille, un diminutif avec ты est normal et les patronymes disparaissent complètement.',
    },
    {
      question: 'Pourquoi les noms de famille russes changent-ils entre hommes et femmes ?',
      answer:
        'Beaucoup de noms de famille russes sont grammaticalement des adjectifs ou des noms de type adjectif, donc ils s’accordent en genre : Иванов (lui) / Иванова (elle), Достоевский (lui) / Достоевская (elle).',
    },
    {
      question: 'Les prénoms russes se déclinent-ils par cas ?',
      answer:
        'Oui. Les prénoms suivent la déclinaison régulière des noms : Иван → Ивана (génitif/accusatif), Ивану (datif), Иваном (instrumental), об Иване (prépositionnel).',
    },
    {
      question: 'Est-il impoli d’utiliser un diminutif avec un inconnu ?',
      answer:
        'Oui, cela peut paraître trop familier. Optez par défaut pour prénom + patronyme + вы jusqu’à ce que l’autre personne invite un registre plus informel.',
    },
  ],
  conclusionIntro:
    'Trois parties, deux genres, six cas — mais une poignée de schémas couvre presque toutes les personnes que vous rencontrerez.',
  conclusionBullets: [
    'Utilisez **имя + отчество + вы** avec les inconnus et en contexte formel',
    'Passez à un **diminutif + ты** avec les amis et la famille',
    'Accordez les **terminaisons de nom de famille** au genre : -ов/-ова, -ский/-ская',
    'Souvenez-vous que les noms **se déclinent** comme tout autre nom russe',
    'En cas de doute, la forme formelle est toujours le choix sûr',
  ],
  conclusionOutro:
    'Une fois ces formes naturelles, renforcez les terminaisons de cas derrière elles avec nos guides du [génitif](/learn/articles/russian-genitive-case) et du [datif](/learn/articles/russian-dative-case), et entraînez les schémas de déclinaison dans l’[outil de pratique](/practice) gratuit.',
  internalLinks: [
    {
      href: '/learn/articles/russian-adjective-declension',
      label: 'Guide de déclinaison des adjectifs russes',
    },
    {
      href: '/learn/articles/russian-genitive-case',
      label: 'Guide du génitif russe',
    },
    {
      href: '/learn/articles/russian-dative-case',
      label: 'Guide du datif russe',
    },
    {
      href: '/learn/articles/russian-noun-gender-guide',
      label: 'Guide du genre des noms russes',
    },
    {
      href: '/learn/articles/russian-greetings-guide',
      label: 'Guide des salutations russes',
    },
    { href: '/practice', label: 'Quiz gratuit de déclinaison russe' },
  ],
  ctaText: 'Entraînez-vous aux cas russes — Gratuit →',
  ctaHref: '/practice',
  conclusion: '',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Les noms russes expliqués : prénom, patronyme, nom de famille (et leur déclinaison)',
    description:
      'Comprendre les noms russes : prénom, patronyme (отчество), terminaisons de nom de famille, diminutifs, adresse formelle, et leur déclinaison par cas.',
    datePublished: '2026-09-14',
    dateModified: '2026-09-14',
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
      '@id': 'https://russiandeclensions.com/learn/articles/russian-names-patronymics-guide',
    },
    keywords:
      'noms russes guide, patronyme russe, отчество signification, déclinaison des noms russes, diminutifs russes',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russian-names-patronymics-guide-header.webp',
      width: 1536,
      height: 1024,
    },
  },
};
