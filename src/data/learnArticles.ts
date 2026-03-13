/**
 * SEO article content for /learn/articles/[slug]
 * Target: listicles, guides, app reviews
 */

/** Image 1200×630 pour screenshot app, lazy loading */
export interface LearnArticleImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface LearnArticleItem {
  rank: number;
  title: string;
  description: string;
  /** Screenshot ou logo de l'app */
  image?: LearnArticleImage;
  /** Note /10 pour angle "Russian cases" */
  rating?: number;
  pros?: string[];
  cons?: string[];
  price?: string;
  affiliateLink?: string;
}

/** Tableau comparatif : App | Russian Cases | Price | ... */
export interface LearnArticleComparisonTable {
  headers: string[];
  rows: Record<string, string>[];
}

/** Tableau pour cheat sheet / guides (headers + rows de cellules) */
export interface LearnArticleTable {
  headers: string[];
  rows: string[][];
  caption?: string;
  boldColumnIndices?: number[];
  /** Colonnes avec accent color (bleu). Si absent, = boldColumnIndices */
  accentColumnIndices?: number[];
}

/** Carte d'erreur pour articles type "Top 10 mistakes" : Wrong / Correct / Why / Fix */
export interface LearnArticleMistakeCard {
  title: string;
  wrong: string;
  correct: string;
  why: string;
  fix: string;
  fixHref?: string;
}

/** Image optionnelle pour une section d'article */
export interface LearnArticleSectionImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

/** Section pour articles type cheat sheet / guide */
export interface LearnArticleSection {
  h2: string;
  content?: string;
  /** Image illustrative pour la section */
  image?: LearnArticleSectionImage;
  subsections?: { h3: string; content: string; bullets?: string[] }[];
  table?: LearnArticleTable;
  bullets?: string[];
  /** Cartes d'erreurs (format ✗ Wrong / ✓ Correct / 📌 Why / 🔧 Fix) */
  mistakeCards?: LearnArticleMistakeCard[];
}

export interface LearnArticleFaqItem {
  question: string;
  answer: string;
}

export interface LearnArticleLeadMagnet {
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
}

export interface LearnArticle {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  intro: string;
  /** Items pour listicles (Top 10, etc.) — vide ou absent si sections utilisées */
  items?: LearnArticleItem[];
  conclusion: string;
  ctaText: string;
  ctaHref: string;
  jsonLd: Record<string, unknown>;
  /** Tableau comparatif des apps */
  comparisonTable?: LearnArticleComparisonTable;
  /** FAQ pour schema FAQPage */
  faq?: LearnArticleFaqItem[];
  /** Lead magnet CTA (ex. cheat sheet gratuit) */
  leadMagnetCta?: LearnArticleLeadMagnet;
  /** Sections pour articles type cheat sheet / guide (prioritaire sur items si présent) */
  sections?: LearnArticleSection[];
  /** Points clés en gras dans l'intro (réduit le bounce) */
  whatYouLearn?: string[];
  /** Conclusion structurée (bullet points) */
  conclusionIntro?: string;
  conclusionBullets?: string[];
  conclusionOutro?: string;
  /** Liens internes (ex. vers autres leçons) */
  internalLinks?: { href: string; label: string }[];
  /** Image hero en haut de l'article */
  heroImage?: { src: string; alt: string; width?: number; height?: number };
  /** Couleur d'accent pour les colonnes des tableaux (accusatif=rouge, datif=violet, instrumental=teal, prépositionnel=marron, génitif=bleu marine, orange=erreurs) */
  tableAccentVariant?:
    | 'accusative'
    | 'dative'
    | 'instrumental'
    | 'prepositional'
    | 'genitive'
    | 'orange';
}

export const learnArticles: Record<string, LearnArticle> = {
  'top-10-apps-russian': {
    slug: 'top-10-apps-russian',
    title: 'Top 10 Apps to Learn Russian in 2026',
    metaTitle: 'Top 10 Apps to Learn Russian in 2026 | Russian Cases with Anna',
    metaDescription:
      'Discover the best apps for learning Russian in 2026: grammar, vocabulary, cases, and conversation. Our top 10 picks help you master Russian at your own pace.',
    keywords: [
      'learn Russian app',
      'best Russian learning apps',
      'Russian grammar app',
      'Russian cases app',
      'top apps to learn Russian',
    ],
    h1: 'Top 10 Apps to Learn Russian in 2026: The Ultimate Guide',
    intro:
      "Learning Russian can feel like climbing a mountain. Between the Cyrillic alphabet, the six grammatical cases, and verbs of motion, it's easy to get overwhelmed. However, with the right tools in your pocket, that mountain becomes a series of manageable steps.\n\nIn 2026, language learning technology has reached new heights. Whether you are a total beginner or an advanced learner looking to polish your fluency, we've tested and ranked the 10 best apps to learn Russian. Here is our detailed breakdown to help you find your perfect match.",
    heroImage: {
      src: '/articles/top-10-apps-to-learn-russian-2026.webp',
      alt: 'Infographic: top 10 apps to learn Russian in 2026 with app logos and rankings',
      width: 1200,
      height: 630,
    },
    items: [
      {
        rank: 1,
        title: "Russian Cases with Anna: The Specialist's Choice to Learn Grammar",
        description:
          'For serious learners who want to start building solid grammar foundations, Russian Cases with Anna is the ultimate tool. While other apps skim the surface, this one **dives deep into the heart of the Russian language**: the case system and declensions. It perfectly balances short lessons with engaging, interactive quizzes.',
        image: {
          src: '/articles/logos/russian-cases-with-anna-icon-app-logo.webp',
          alt: 'Russian Cases with Anna app icon',
          width: 256,
          height: 256,
        },
        pros: [
          'Unmatched focus on cases and declensions',
          'High-speed learning modules',
          'Engaging quizzes',
        ],
        cons: [
          'Hyper-focused on grammar; you will need a secondary tool for general vocabulary and conversational practice',
        ],
      },
      {
        rank: 2,
        title: 'Duolingo: The Best When You Are Starting',
        description:
          'Duolingo remains the most famous gateway into the Russian language. It **turns learning into a game**, making it nearly impossible to forget your daily practice. Gamified "tree" structure focusing on basic vocabulary and simple sentence construction.',
        image: {
          src: '/articles/logos/duolingo-icon-app-logo.webp',
          alt: 'Duolingo app icon',
          width: 256,
          height: 256,
        },
        pros: [
          'Completely free (with a premium tier)',
          'Excellent UI',
          'High "stickiness" that keeps you coming back',
        ],
        cons: [
          'Light on grammar explanations (which Russian desperately needs)',
          'Uses some "nonsense" sentences',
          'Lacks deep speaking practice',
        ],
      },
      {
        rank: 3,
        title: 'Babbel: A Solid Pick for Grammar',
        description:
          'If you prefer a more "classroom-style" structure without the boring lectures, Babbel is the top choice. It is specifically designed to **get you conversational quickly**. Expert-crafted lessons that balance dialogue, grammar rules, and cultural context.',
        image: {
          src: '/articles/logos/babel-app-icon-logo.webp',
          alt: 'Babbel app icon',
          width: 256,
          height: 256,
        },
        pros: [
          'Very clear explanations of the Russian case system',
          'High-quality audio',
          'Practical vocabulary',
        ],
        cons: ['Requires a paid subscription', 'The content can feel a bit repetitive for some'],
      },
      {
        rank: 4,
        title: 'Memrise: Learn from Real Locals',
        description:
          "Memrise stands out because it doesn't just use robotic voices. It uses **thousands of short video clips of real Russian people** speaking in their natural environment. Uses Spaced Repetition Systems (SRS) and immersive video content to burn words into your memory.",
        image: {
          src: '/articles/logos/memrise-icon-app-logo.webp',
          alt: 'Memrise app icon',
          width: 256,
          height: 256,
        },
        pros: [
          'You hear different accents and speeds, which is vital for real-world listening',
          'The "Learn with Locals" feature is a game-changer',
        ],
        cons: ['Not great for learning complex sentence structures or deep grammar'],
      },
      {
        rank: 5,
        title: 'Busuu: The Community-Driven App',
        description:
          'Busuu offers a complete course that follows the CEFR levels (A1 to B2). Its "killer feature" is the ability to **have your exercises corrected by native speakers**. Structured lessons combined with a social network of language learners.',
        image: {
          src: '/articles/logos/busuu-icon-app-logo.webp',
          alt: 'Busuu app icon',
          width: 256,
          height: 256,
        },
        pros: [
          'Real-time feedback from Russians',
          'Offline mode',
          'Very logical progression of difficulty',
        ],
        cons: [
          'The free version is quite limited; you really need the Premium version to see progress',
        ],
      },
      {
        rank: 6,
        title: 'Pimsleur: The King of Audio & Pronunciation',
        description:
          'If you want to **sound like a native** and don\'t care about reading or writing yet, Pimsleur is the "gold standard." It\'s perfect for commuters. A 100% audio-based method focusing on active recall and organic conversation.',
        image: {
          src: '/articles/logos/Pimsleur-app-icon-logo.webp',
          alt: 'Pimsleur app icon',
          width: 256,
          height: 256,
        },
        pros: [
          'Develops an authentic accent and builds "muscle memory" for speaking',
          'No screen time required',
        ],
        cons: [
          "Doesn't teach the Cyrillic alphabet or writing",
          'It can feel a bit "old school" for younger learners',
        ],
      },
      {
        rank: 7,
        title: 'italki: Real Human Connection',
        description:
          'Sometimes, you just need a human. italki isn\'t a "course" app; it\'s a platform that **connects you with professional Russian teachers** for 1-on-1 lessons. Personalized video lessons tailored to your specific goals.',
        image: {
          src: '/articles/logos/italki-icon-app-logo.webp',
          alt: 'italki app icon',
          width: 256,
          height: 256,
        },
        pros: [
          'Total flexibility',
          'Very affordable (you can find tutors for under $10/hour)',
          'The fastest way to overcome the "fear of speaking"',
        ],
        cons: ['Not an "on-the-go" app; requires scheduling and a stable internet connection'],
      },
      {
        rank: 8,
        title: 'RussianPod101: The Infinite Audio Library',
        description:
          "This is perhaps **the most comprehensive resource on the list**. It's essentially a massive library of podcasts covering every possible topic in Russian. Learning through listening to natural dialogues with detailed PDF lesson notes.",
        image: {
          src: '/articles/logos/RussianPod101-icon-app-logo.webp',
          alt: 'RussianPod101 app icon',
          width: 256,
          height: 256,
        },
        pros: [
          'Covers everything from "Slang" to "Business Russian"',
          'Excellent for intermediate learners who have plateaued',
        ],
        cons: ['The interface can be overwhelming because there is too much content'],
      },
      {
        rank: 9,
        title: 'Clozemaster: For the Intermediate Learner',
        description:
          'Once you know the basics, Duolingo becomes too easy. Clozemaster **fills that gap** by using "cloze" tests (fill-in-the-blank) in thousands of real-world sentences. Mass immersion through sentences to learn how words actually function in context.',
        image: {
          src: '/articles/logos/clozemaster-icon-app-logo.webp',
          alt: 'Clozemaster app icon',
          width: 256,
          height: 256,
        },
        pros: [
          'Best app for expanding vocabulary rapidly once you reach the B1 level',
          'Retro 8-bit design is fun',
        ],
        cons: ["Not beginner-friendly. If you don't know the alphabet, stay away for now."],
      },
      {
        rank: 10,
        title: 'Drops: The Visual Vocabulary Builder',
        description:
          'Drops is a beautifully designed app that limits you to **5 minutes of study per day** (unless you pay). It treats vocabulary like a fast-paced visual game. Associating minimalist icons with Russian words—no translations involved.',
        image: {
          src: '/articles/logos/drops-icon-app-logo.webp',
          alt: 'Drops app icon',
          width: 256,
          height: 256,
        },
        pros: [
          'Stunning design',
          'Great for learning the Cyrillic alphabet and basic nouns without stress',
        ],
        cons: ["Zero grammar. It's a supplement, not a full course."],
      },
    ],
    conclusionIntro: 'To master Russian, we recommend a **hybrid approach**:',
    conclusionBullets: [
      '**A Core App:** Use **Russian Cases with Anna** or **Busuu** to build your grammatical foundation.',
      "**A Speaking Tool:** Use **italki** once a week to practice what you've learned with a human.",
      '**A "Gap-Filler":** Use **Duolingo** during your commute to keep your vocabulary fresh.',
    ],
    conclusion: '',
    ctaText: 'See Russian Cases with Anna',
    ctaHref: '/',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Top 10 Apps to Learn Russian in 2026: The Ultimate Guide',
      description:
        'The best mobile apps for learning Russian grammar, vocabulary, and conversation in 2026.',
      datePublished: '2026-03-11',
      dateModified: '2026-03-11',
      author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
      publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://russiandeclensions.com/learn/articles/top-10-apps-russian',
      },
      keywords: 'learn Russian app, best Russian learning apps, Russian grammar app',
    },
  },
  'russian-case-endings-cheatsheet': {
    slug: 'russian-case-endings-cheatsheet',
    title: 'Russian Case Endings: The Ultimate Cheat Sheet & Chart',
    metaTitle:
      'Russian Case Endings Cheat Sheet | Complete Declension Chart | Russian Cases with Anna',
    metaDescription:
      'Free Russian case endings cheat sheet: noun declension table, adjective endings, pronouns (мой, этот), prepositions by case. All 6 cases, color-coded chart. Print or bookmark.',
    keywords: [
      'russian case endings',
      'russian case endings chart',
      'russian declension table',
      'russian noun endings by case',
      'russian cases cheat sheet',
      'russian adjective declension',
    ],
    h1: 'Russian Case Endings: The Ultimate Cheat Sheet',
    heroImage: {
      src: '/articles/russian-cases-endings-master-chart.webp',
      alt: 'Russian case endings master chart with declension table for all 6 cases',
      width: 1200,
      height: 630,
    },
    intro:
      'Mastering Russian case endings is the backbone of Russian grammar. Whether you are a complete beginner trying to understand what cases are, or an intermediate learner who keeps mixing up endings, this cheat sheet gives you every declension table you need in one place.\n\nBookmark this page. Print it out. Screenshot it. This is the Russian declension chart resource you will come back to again and again.',
    whatYouLearn: [
      'Complete Russian noun declension table (all genders, singular & plural)',
      'Russian adjective declension chart (hard & soft stems)',
      'Personal pronoun declension (я, ты, он, она, мы, вы, они)',
      'Possessive pronoun declension (мой, наш — and how to derive the others)',
      'Demonstrative pronouns (этот / тот)',
      'Preposition → case reference table',
      'Key spelling rules that affect endings',
    ],
    leadMagnetCta: {
      title: 'Practice Russian declensions interactively',
      description:
        'Our mobile app is built specifically for drilling Russian cases and declensions. Smart exercises, spaced repetition, and real Russian examples — on Android and iOS.',
      ctaText: 'Download the app and start drilling today',
      ctaHref: '/',
    },
    internalLinks: [
      {
        href: '/learn/lessons/russian-cases-complete-guide',
        label: 'The Complete Guide to Russian Cases: All 6 Cases Explained with Examples',
      },
      {
        href: '/learn/lessons/dative-case-declension',
        label: 'Russian Dative Case: How to Say "To" and "For" in Russian',
      },
    ],
    sections: [
      {
        h2: 'Part 1: Russian Noun Case Endings — Complete Chart',
        content:
          'The table below shows the Russian noun endings for **all 6 cases**, all genders (masculine, feminine, neuter), both **singular and plural**.\n\nHard stems (most common) and soft stems are shown separately.',
        subsections: [
          {
            h3: 'How to read this table',
            content:
              '**M. Hard** = Masculine hard stem (стол, брат). **M. Soft** = Masculine soft stem (музей, гений). **F. Hard** = Feminine in -а (женщина, книга). **F. Soft** = Feminine in -я (неделя, земля). **F. (-ь)** = Feminine soft sign (ночь, дочь).\n\n**N. (-о)** = Neuter hard (окно, слово). **N. (-е)** = Neuter soft (море, поле).',
          },
        ],
        table: {
          caption: 'Noun endings by case, gender, and number',
          boldColumnIndices: [0, 1, 2, 3, 4, 5, 6, 7],
          accentColumnIndices: [0],
          headers: [
            'Case',
            'M. Hard',
            'M. Soft',
            'F. Hard (-а)',
            'F. Soft (-я)',
            'F. (-ь)',
            'N. (-о)',
            'N. (-е)',
          ],
          rows: [
            ['SINGULAR', '', '', '', '', '', '', ''],
            ['Nominative', '-Ø', '-й / -ь', '-а', '-я', '-ь', '-о', '-е'],
            ['Genitive', '-а', '-я', '-ы / -и', '-и', '-и', '-а', '-я'],
            ['Dative', '-у', '-ю', '-е / -и', '-е / -и', '-и', '-у', '-ю'],
            ['Accusative (inanim.)', '= Nom.', '= Nom.', '-у', '-ю', '-ь', '= Nom.', '= Nom.'],
            ['Accusative (anim.)', '= Gen.', '= Gen.', '-у', '-ю', '-ь', '= Nom.', '= Nom.'],
            ['Instrumental', '-ом', '-ем / -ём', '-ой / -ей', '-ей', '-ью', '-ом', '-ем'],
            ['Prepositional', '-е', '-е / -и', '-е / -и', '-е / -и', '-и', '-е', '-е'],
            ['PLURAL', '', '', '', '', '', '', ''],
            ['Nominative', '-ы / -и', '-и', '-ы / -и', '-и', '-и', '-а / -я', '-я'],
            ['Genitive', '-ов / -ев', '-ев / -ей', '-Ø / -ей', '-ей', '-ей', '-Ø / -ей', '-ей'],
            ['Dative', '-ам', '-ям', '-ам', '-ям', '-ям', '-ам', '-ям'],
            [
              'Accusative',
              '= Nom./Gen.',
              '= Nom./Gen.',
              '= Nom./Gen.',
              '= Nom./Gen.',
              '= Nom./Gen.',
              '= Nom./Gen.',
              '= Nom./Gen.',
            ],
            ['Instrumental', '-ами', '-ями', '-ами', '-ями', '-ями', '-ами', '-ями'],
            ['Prepositional', '-ах', '-ях', '-ах', '-ях', '-ях', '-ах', '-ях'],
          ],
        },
        bullets: [
          '**Accusative animate (masc.):** animate masculine nouns take the **genitive form** in the accusative. Inanimate masculine nouns stay identical to the nominative.',
          '**Accusative plural:** inanimate plurals = nominative plural; animate plurals = genitive plural.',
          '**Genitive plural zero ending:** many feminine -а nouns have a **zero ending** in genitive plural (женщина → женщин). This is one of the trickiest areas of Russian declension.',
          '**8-letter spelling rule:** after **г, к, х, ж, ш, щ, ч, ц** — write **И** not Ы (e.g., книги not книгы).',
          '**7-letter spelling rule:** after ж, ш, щ, ч, ц — write **А** not Я, **У** not Ю in stressed positions.',
        ],
      },
      {
        h2: 'Part 2: Russian Adjective Declension Chart',
        content:
          'Russian adjectives must **agree with the noun** they modify in gender, number, and case.\n\nBelow is the full Russian adjective declension chart for **hard-stem** and **soft-stem** adjectives.',
        subsections: [
          {
            h3: 'Hard vs. Soft adjective stems',
            content: 'Adjectives fall into two groups based on their stem:',
            bullets: [
              '**Hard stem** (красный, новый, старый) — Nominative M: -ый/-ой | Endings use Ы, О, У',
              '**Soft stem** (синий, последний, летний) — Nominative M: -ий | Endings use И, Е, Ю',
            ],
          },
        ],
        table: {
          caption: 'Adjective endings by case, gender, and stem type',
          boldColumnIndices: [0, 1, 2, 3, 4, 5],
          accentColumnIndices: [0],
          headers: ['Case', 'M. Hard', 'M. Soft', 'Fem. Hard', 'Fem. Soft', 'Neuter', 'Plural'],
          rows: [
            ['Nominative', '-ый/-ой', '-ий', '-ая', '-яя', '-ое', '-ые/-ие'],
            ['Genitive', '-ого', '-его', '-ой', '-ей', '-ого', '-ых/-их'],
            ['Dative', '-ому', '-ему', '-ой', '-ей', '-ому', '-ым/-им'],
            ['Acc. (inan.)', '= Nom.', '= Nom.', '-ую', '-юю', '= Nom.', '= Nom.'],
            ['Acc. (anim.)', '= Gen.', '= Gen.', '-ую', '-юю', '= Nom.', '= Gen.'],
            ['Instrumental', '-ым', '-им', '-ой/-ей', '-ей', '-ым', '-ыми/-ими'],
            ['Prepositional', '-ом', '-ем', '-ой/-ей', '-ей', '-ом', '-ых/-их'],
          ],
        },
        bullets: [
          '**Hard adjective example** — новый (new): новый / нового / новому / **новый(ого)** / новым / новом',
          '**Soft adjective example** — синий (blue): синий / синего / синему / **синий(его)** / синим / синем',
          '**Stress-shifted adjectives** (like молодой): nominative ends in **-ой** instead of -ый, but all other endings follow the hard pattern identically.',
          '**Adjective-noun agreement:** the adjective **ALWAYS** matches its noun. красная книга (gen: красной книги) — every word in the phrase declines together.',
          '**Short-form adjectives:** Russian also has short-form adjectives (краток, красив) used predicatively (after быть). These **do not decline** by case.',
        ],
      },
      {
        h2: 'Part 3: Russian Personal Pronoun Declension',
        content:
          'Personal pronouns **change dramatically** across Russian cases — far more than nouns or adjectives. These must be **memorized individually**.\n\nThe table below gives the full declension for all Russian personal pronouns.',
        table: {
          boldColumnIndices: [0, 1, 2, 3, 4, 5, 6],
          accentColumnIndices: [0],
          headers: [
            'Case',
            'я (I)',
            'ты (you)',
            'он/оно (he/it)',
            'она (she)',
            'мы (we)',
            'вы (you pl.)',
            'они (they)',
          ],
          rows: [
            ['Nominative', 'я', 'ты', 'он/оно', 'она', 'мы', 'вы', 'они'],
            ['Genitive', 'меня', 'тебя', 'его', 'её', 'нас', 'вас', 'их'],
            ['Dative', 'мне', 'тебе', 'ему', 'ей', 'нам', 'вам', 'им'],
            ['Accusative', 'меня', 'тебя', 'его', 'её', 'нас', 'вас', 'их'],
            ['Instrumental', 'мной', 'тобой', 'им', 'ей', 'нами', 'вами', 'ими'],
            ['Prepositional', 'мне', 'тебе', 'нём', 'ней', 'нас', 'вас', 'них'],
          ],
        },
        bullets: [
          '**Н- prefix rule:** when a third-person pronoun (он, она, оно, они) follows a preposition, an **Н-** is added: у него (not у его), к ней (not к ей), с ними (not с ими).',
          '**Genitive = Accusative** for personal pronouns: меня, тебя, его, её, нас, вас, их are **identical** for both cases.',
          '**Prepositional forms:** after о/об — обо мне, о тебе, о нём, о ней, о нас, о вас, о них.',
        ],
      },
      {
        h2: 'Part 4: Russian Possessive Pronoun Declension (мой, наш)',
        content:
          'Possessive pronouns in Russian also decline for case, gender, and number. The table below covers **мой** (my) and **наш** (our) — the two most irregular and important sets.\n\nThe others follow similar patterns: **твой** (your, informal) — declines exactly like мой. **ваш** (your, formal/plural) — declines exactly like наш. **его / её / их** (his / her / their) — these do **NOT** decline! They remain unchanged in all cases.',
        table: {
          caption: 'мой (my) and наш (our) full declension',
          boldColumnIndices: [0, 1, 2, 3, 4],
          accentColumnIndices: [0],
          headers: ['Case', 'Masc.', 'Neuter', 'Fem.', 'Plural'],
          rows: [
            ['МОЙ — my', '', '', '', ''],
            ['Nominative', 'мой', 'моё', 'моя', 'мои'],
            ['Genitive', 'моего', 'моего', 'моей', 'моих'],
            ['Dative', 'моему', 'моему', 'моей', 'моим'],
            ['Acc. (inan.)', 'мой', 'моё', 'мою', 'мои'],
            ['Acc. (anim.)', 'моего', 'моё', 'мою', 'моих'],
            ['Instrumental', 'моим', 'моим', 'моей', 'моими'],
            ['Prepositional', 'моём', 'моём', 'моей', 'моих'],
            ['НАШ — our', '', '', '', ''],
            ['Nominative', 'наш', 'наше', 'наша', 'наши'],
            ['Genitive', 'нашего', 'нашего', 'нашей', 'наших'],
            ['Dative', 'нашему', 'нашему', 'нашей', 'нашим'],
            ['Acc. (inan.)', 'наш', 'наше', 'нашу', 'наши'],
            ['Acc. (anim.)', 'нашего', 'наше', 'нашу', 'наших'],
            ['Instrumental', 'нашим', 'нашим', 'нашей', 'нашими'],
            ['Prepositional', 'нашем', 'нашем', 'нашей', 'наших'],
          ],
        },
      },
      {
        h2: 'Part 5: Demonstrative Pronoun Declension (этот / тот)',
        content:
          '**Этот** (this) and **тот** (that) are demonstrative pronouns that also function as determiners.\n\nThey decline for **case, gender, and number** and are extremely common in spoken Russian.',
        table: {
          boldColumnIndices: [0, 1, 2, 3, 4, 5, 6],
          accentColumnIndices: [0],
          headers: [
            'Case',
            'этот (M)',
            'это (N)',
            'эта (F)',
            'эти (Pl)',
            'тот (M) / та (F)',
            'те (Pl)',
          ],
          rows: [
            ['Nominative', 'этот', 'это', 'эта', 'эти', 'тот / та', 'те'],
            ['Genitive', 'этого', 'этого', 'этой', 'этих', 'того / той', 'тех'],
            ['Dative', 'этому', 'этому', 'этой', 'этим', 'тому / той', 'тем'],
            ['Acc. (inan.)', 'этот', 'это', 'эту', 'эти', 'тот / ту', 'те'],
            ['Acc. (anim.)', 'этого', 'это', 'эту', 'этих', 'того / ту', 'тех'],
            ['Instrumental', 'этим', 'этим', 'этой', 'этими', 'тем / той', 'теми'],
            ['Prepositional', 'этом', 'этом', 'этой', 'этих', 'том / той', 'тех'],
          ],
        },
      },
      {
        h2: 'Part 6: Russian Prepositions → Case Quick-Reference',
        content:
          'This table maps every major Russian preposition to the **case it requires**.\n\nLearning prepositions **together with their case** is essential — it eliminates one of the biggest sources of error for Russian learners.',
        subsections: [
          {
            h3: 'Important: В and НА are dual-case prepositions',
            content:
              '**в / на + Accusative** = DIRECTION (motion toward a place). **в / на + Prepositional** = LOCATION (being in/at a place).\n\nExample: Я иду в школу. (going → accusative) vs. Я в школе. (being there → prepositional).',
          },
        ],
        table: {
          boldColumnIndices: [0, 1],
          accentColumnIndices: [0],
          headers: ['Case', 'Prepositions', 'Examples'],
          rows: [
            [
              'Genitive',
              'без, до, из, у, от, после, для, кроме, вокруг, вместо, мимо',
              'из России, без воды, после урока',
            ],
            [
              'Dative',
              'к, по, благодаря, вопреки, согласно, навстречу',
              'к другу, по улице, благодаря тебе',
            ],
            [
              'Accusative',
              'в, на (direction), за, через, под (motion), про, о (hit/bump)',
              'в школу, на работу, через час',
            ],
            [
              'Instrumental',
              'с, за (position), над, под (position), перед, между, рядом с',
              'с другом, над столом, перед домом',
            ],
            [
              'Prepositional',
              'в, на (location), о/об, при, по (after certain verbs)',
              'в Москве, о работе, при советах',
            ],
          ],
        },
      },
      {
        h2: 'Part 7: The 7 Spelling Rules That Affect Case Endings',
        content:
          'Russian spelling rules can **override** the expected case ending.\n\nEvery Russian learner needs to know these rules — they explain why certain nouns and adjectives **do not follow** the standard pattern.',
        subsections: [
          {
            h3: 'Rule 1: The 8-Letter Rule (Spelling Rule К, Г, Х, Ж, Ш, Щ, Ч, Ц)',
            content:
              'After **г, к, х, ж, ш, щ, ч, ц** — always write **И** instead of Ы. книга → книги (not книгы), ручка → ручки (not ручкы).\n\nThis affects nominative plural, genitive singular of feminine nouns, and adjective endings.',
          },
          {
            h3: 'Rule 2: The 7-Letter Rule (Ж, Ш, Щ, Ч, Ц — Stressed Vowels)',
            content:
              'After ж, ш, щ, ч, ц — write **А** not Я, **У** not Ю (in stressed syllables); write **Е** not О in unstressed syllables.\n\nInstrumental singular feminine: большой → большой (stressed **-ой** is fine), but тушь → **тушью**. This rule interacts with the instrumental endings **-ом/-ем** for neuter nouns.',
          },
          {
            h3: 'Rule 3: Fleeting Vowels',
            content:
              'Some nouns **lose a vowel** (о or е) when declined — this is called a **fleeting vowel** (беглая гласная).\n\nотец → отца (the е disappears). день → дня (the е disappears). лёд → льда (the е/ё disappears).',
          },
          {
            h3: 'Rule 4: Ь (Soft Sign) Behavior',
            content:
              'Feminine nouns ending in **-ь** do not drop the soft sign before case endings — instead, it merges into the ending.\n\nночь → **ночи** (genitive/dative/prepositional), **ночью** (instrumental). The **-ью** in the instrumental is characteristic of these nouns.',
          },
          {
            h3: 'Rule 5: The Prepositional -У Ending (Locative Remnant)',
            content:
              'A small group of masculine nouns use an irregular **-у/-ю** ending in the prepositional when expressing **location** (not topic). **в лесу** (in the forest) — not в лесе. **в году** (in the year). **на берегу** (on the shore). **на полу** (on the floor).\n\nThis only applies with в/на + location. О + these nouns uses the regular -е: о лесе (about the forest).',
          },
        ],
      },
      {
        h2: 'How to Use This Cheat Sheet Effectively',
        subsections: [
          {
            h3: 'Step 1 — Start with Nouns',
            content:
              'The **noun declension table** is the foundation. Master it first. Focus on the most common patterns: **masculine hard stem** (-стол), **feminine hard stem** (-книга), and **neuter hard stem** (-окно).\n\nThese cover the majority of Russian nouns.',
          },
          {
            h3: 'Step 2 — Learn Adjectives Next',
            content:
              'Once you know noun endings, adjective endings become much easier — they follow a similar logic.\n\nFocus on **hard-stem adjectives** (новый) first, then add **soft-stem** (синий).',
          },
          {
            h3: 'Step 3 — Memorize Pronouns Separately',
            content:
              '**Pronoun forms are irregular** and must be memorized individually. They do not follow the noun or adjective patterns.\n\nUse flashcards or a spaced repetition app to drill pronoun declensions.',
          },
          {
            h3: 'Step 4 — Prepositions Lock In the Cases',
            content:
              'Prepositions are the **fastest shortcut** for correct case usage: if you know that **без** always takes the genitive and **к** always takes the dative, you have already locked in the case.\n\nMake the **preposition → case pairings** your top priority.',
          },
          {
            h3: 'Step 5 — Practice with Real Sentences',
            content:
              'Tables alone are not enough. After drilling the endings, practice them in **real Russian sentences**.\n\nRead texts, listen to audio, and pay attention to how native speakers use declined forms in context.',
          },
        ],
      },
    ],
    conclusion:
      'This Russian case endings cheat sheet covers **everything** you need: **all 6 cases** for nouns (all genders, singular and plural), adjectives (hard and soft stems), personal pronouns, possessive pronouns, demonstrative pronouns, and preposition-case pairings.\n\n**Keep this reference close** as you study. The more you use it alongside real Russian practice, the sooner these endings will move from conscious memory to automatic recognition.',
    conclusionOutro:
      'For a complete explanation of what each case means and how to use it, explore our full guides:',
    ctaText: 'Practice Russian cases with our app',
    ctaHref: '/',
    faq: [
      {
        question: 'What is the hardest Russian case ending to learn?',
        answer:
          'The **genitive plural** is widely considered the most difficult because it has multiple competing forms depending on the noun class. For example, feminine nouns in -а have a **zero ending** (женщина → женщин), while others add **-ей** (ночь → ночей) or **-ов/-ев** (for certain masculine nouns).',
      },
      {
        question: 'Do Russian adjectives always match the noun?',
        answer:
          'Yes, **always**. A Russian adjective must **agree** with its noun in gender, number, and case. If the noun changes its ending, the adjective must change too. This is called **grammatical agreement** and is non-negotiable in Russian.',
      },
      {
        question: 'Are there Russian nouns that do not decline at all?',
        answer:
          'Yes. A small set of **borrowed foreign words** (несклоняемые существительные) never change: **кофе** (coffee), **метро** (metro), **пальто** (coat), **такси** (taxi), **кино** (cinema). These are an exception to the Russian case system.',
      },
      {
        question: 'How do I know if a noun is animate or inanimate?',
        answer:
          '**Animate nouns** are people and animals (человек, кот, студент, врач). **Inanimate nouns** are objects, concepts, and abstractions (стол, книга, любовь, время). Russian grammar considers some things as animate that English speakers would not expect — e.g. some card game and chess pieces.',
      },
      {
        question: 'What is the difference between the genitive and accusative for animate nouns?',
        answer:
          'For **animate masculine** nouns, the accusative form is **identical** to the genitive. This is the famous **animate accusative = genitive** rule. Example: студент → студента (gen.) = студента (acc.). The only way to tell which case it is is by the sentence structure.',
      },
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Russian Case Endings: The Ultimate Cheat Sheet',
      description:
        'Complete Russian case endings cheat sheet: noun declension table, adjective endings, pronouns, prepositions by case. All 6 cases in one chart.',
      datePublished: '2025-03-11',
      dateModified: '2025-03-11',
      author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
      publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id':
          'https://russiandeclensions.com/learn/articles/russian-case-endings-cheatsheet',
      },
      keywords:
        'russian case endings, russian case endings chart, russian declension table, russian noun endings by case, russian cases cheat sheet, russian adjective declension',
    },
  },
  'russian-genitive-case': {
    slug: 'russian-genitive-case',
    title: 'Russian Genitive Case: Rules, Endings & 32 Real Examples',
    metaTitle: 'Russian Genitive Case: Rules, Endings & Examples | Russian Cases with Anna',
    metaDescription:
      'The most complete guide to genitive case Russian: 7 uses, singular & plural endings, irregular forms, 16 prepositions, numbers, У + genitive. 32 real examples with transliteration.',
    keywords: [
      'russian genitive case',
      'russian genitive case endings',
      'genitive case russian rules',
      'russian genitive plural',
      'genitive case russian examples',
      'russian possession grammar',
    ],
    h1: 'Russian Genitive Case: Rules, Endings & 32 Real Examples',
    heroImage: {
      src: '/articles/free-russian-lesson-genitive-case.webp',
      alt: 'Free Russian lesson on the genitive case: possession, negation, and quantities',
      width: 1200,
      height: 630,
    },
    intro:
      'If you could only master **one Russian case** beyond the nominative, make it the **genitive**. The Russian genitive case is by far the **most frequently used case** after the nominative — it appears in **possession** structures, **negation**, **quantities**, **dates**, and after more **prepositions** than any other case.\n\nThis guide covers everything: the rules, all the endings, the irregular forms that trip everyone up, and **32 real Russian example sentences** so you can see exactly how the genitive case works in practice.',
    whatYouLearn: [
      'What the Russian genitive case is and when to use it (7 core uses)',
      'Genitive singular endings — all noun genders with examples',
      'Genitive plural endings — including the "zero ending" and fleeting vowels',
      '11 irregular genitive plurals to memorize (человек → людей, глаз → глаз, etc.)',
      '16 prepositions that require the genitive',
      'Numbers & quantities with the genitive (2/3/4 vs 5+, 21, 22, 25…)',
      'Genitive vs accusative — the animate masculine trap',
      'У + genitive construction for "to have" in Russian',
    ],
    leadMagnetCta: {
      title: 'Practice the Russian genitive case with smart exercises',
      description:
        'Our mobile app drills all 6 Russian cases — including the genitive plural — with spaced repetition, real sentences, and instant feedback. Available on Android and iOS.',
      ctaText: 'Download the app and start drilling today',
      ctaHref: '/',
    },
    internalLinks: [
      {
        href: '/learn/lessons/russian-cases-complete-guide',
        label: 'The Complete Guide to Russian Cases: All 6 Cases Explained with Examples',
      },
      {
        href: '/learn/articles/russian-case-endings-cheatsheet',
        label: 'Russian Case Endings: The Ultimate Cheat Sheet',
      },
      {
        href: '/learn/lessons/dative-case-declension',
        label: 'Russian Dative Case: How to Say "To" and "For" in Russian',
      },
    ],
    sections: [
      {
        h2: 'What Is the Russian Genitive Case?',
        content:
          "The **genitive case** (Родительный падеж — literally, the 'birth/origin case') is the second of the six Russian cases. Its name hints at its primary function: showing **origin, belonging, or relation** — answering the questions **Кого?** (Of whom?) and **Чего?** (Of what?). In English, we express genitive relationships using the word **'of'** or the possessive apostrophe-s (**'s**).\n\nRussian accomplishes this entirely through **word endings** — no extra word needed. Example: The name of the city = **название города** (города is город in the genitive case).",
        subsections: [
          {
            h3: 'Quick answer',
            content:
              'The genitive case in Russian answers the questions **Кого?** (Of whom?) and **Чего?** (Of what?).\n\nIt is used primarily to express **possession**, **absence**, **quantity**, and is required after a large number of common **prepositions**.',
          },
        ],
      },
      {
        h2: '7 Core Uses of the Russian Genitive Case',
        content:
          'The genitive case is the **most versatile case** in Russian.\n\nIt appears in **possession**, **negation**, **quantities**, **prepositions**, **comparisons**, **dates**, and with **certain verbs**.',
        image: {
          src: '/articles/when-to-use-the-genitive-case-in-russian-cheat-sheet.webp',
          alt: 'Cheat sheet: when to use the genitive case in Russian',
          width: 1200,
          height: 630,
        },
        subsections: [
          {
            h3: 'Use 1 — Possession and Belonging',
            content:
              "The genitive case replaces the English **'of'** or the possessive **'s**. Whenever one noun belongs to another, the **owner** goes into the **genitive**.",
            bullets: [
              "**дом отца** — the father's house (lit: the house of the father)",
              '**столица России** — the capital of Russia',
              '**конец фильма** — the end of the film',
            ],
          },
          {
            h3: 'Use 2 — Absence and Negation (нет, не было, не будет)',
            content:
              'Whenever you say something **does not exist**, is not available, or is absent, the Russian genitive case is required. The structures **нет**, **не было**, and **не будет** always take the genitive.',
            bullets: [
              "**У меня нет машины.** — I don't have a car. (нет + genitive)",
              "**Здесь нет сахара.** — There's no sugar here.",
              "**Его не было дома.** — He wasn't at home. (не было + genitive)",
              "**Завтра не будет дождя.** — There won't be rain tomorrow.",
            ],
          },
          {
            h3: 'Use 3 — Quantity, Numbers, and Measure',
            content:
              'The genitive case is required after most **numbers** and **quantity words**.\n\nAfter **1**: nominative singular. After **2, 3, 4**: genitive singular. After **5–20** and larger numbers: genitive plural. After **много**, **мало**, **несколько**, **сколько**: genitive plural.',
          },
          {
            h3: 'Use 4 — Prepositions',
            content:
              '**More prepositions** require the genitive than any other case. Key examples: **без**, **до**, **из**, **у**, **от**, **после**, **для**, **кроме**. See the full table in the Prepositions section below.',
          },
          {
            h3: 'Use 5 — Comparison',
            content:
              'In Russian, **comparisons** using the comparative adjective take the **genitive**: **Он старше меня.** — He is older than me. (меня = genitive of я)',
          },
          {
            h3: 'Use 6 — Dates',
            content:
              'The genitive case is used when specifying a **date** — the **day and month** both take the genitive: **Он родился пятого марта.** — He was born on March 5th.',
          },
          {
            h3: 'Use 7 — Certain Verbs (Genitive Objects)',
            content:
              'A small but important set of Russian **verbs** take their object in the **genitive**: **ждать** (to wait for), **желать** (to wish), **бояться** (to be afraid of), **избегать** (to avoid), **достигать** (to achieve).',
          },
        ],
      },
      {
        h2: 'Genitive Case Endings — Singular',
        content:
          "The table below shows how to form the **genitive singular** for every Russian noun type. Identify the noun's **gender** and its final letter(s) in the nominative, then apply the correct **ending**.\n\nNote: the **8-letter spelling rule** replaces **Ы** with **И** after **Г, К, Х, Ж, Ш, Щ, Ч, Ц**.",
        table: {
          caption: 'Genitive singular endings by noun type',
          boldColumnIndices: [1, 3],
          headers: ['Noun type', 'Ending', 'Formation', 'Result', 'Example in context'],
          rows: [
            ['Masculine hard', '-а', 'стол → стол+а', 'стола', "нет стола — there's no table"],
            ['Masculine soft', '-я', 'гений → гени+я', 'гения', 'без гения — without a genius'],
            ['Masculine in -ж/ш/щ/ч', '-а', 'нож → нож+а', 'ножа', 'без ножа — without a knife'],
            ['Feminine -а (hard)', '-ы', 'книга → книг+ы', 'книги', 'нет книги — there is no book'],
            [
              'Feminine -а (after г/к/х/ж/ш/щ/ч/ц)',
              '-и',
              'подруга → подруг+и',
              'подруги',
              'без подруги — without a friend (f.)',
            ],
            ['Feminine -я', '-и', 'неделя → недел+и', 'недели', 'нет недели — there is no week'],
            ['Feminine -ь', '-и', 'ночь → ноч+и', 'ночи', 'до ночи — until night'],
            ['Neuter -о', '-а', 'окно → окн+а', 'окна', 'нет окна — there is no window'],
            ['Neuter -е', '-я', 'море → мор+я', 'моря', 'до моря — to the sea'],
            ['Neuter -мя', '-ени', 'имя → имен+и', 'имени', 'без имени — without a name'],
          ],
        },
      },
      {
        h2: 'Genitive Case Endings — Plural (The Hardest Part)',
        content:
          'The **genitive plural** is widely considered the **most difficult area** of Russian declension. It has more forms and more exceptions than any other case.\n\nMany feminine **-а** nouns and neuter **-о** nouns have a **zero ending** (**-Ø**) — the stem stands alone. With **окон** and **яблок**, a **fleeting vowel** **О** is inserted between consonants to aid pronunciation.',
        table: {
          caption: 'Genitive plural endings by noun type',
          boldColumnIndices: [1, 3],
          headers: ['Noun type', 'Ending', 'Formation', 'Result', 'Example in context'],
          rows: [
            ['Masculine hard', '-ов', 'стол → стол+ов', 'столов', 'пять столов — five tables'],
            [
              'Masculine in -ж/ш/щ/ч/ц (stressed)',
              '-ей',
              'нож → нож+ей',
              'ножей',
              'несколько ножей — several knives',
            ],
            [
              'Masculine in -ж/ш/щ/ч/ц (unstressed)',
              '-ей',
              'врач → врач+ей',
              'врачей',
              'много врачей — many doctors',
            ],
            ['Masculine soft -й', '-ев', 'музей → музе+ев', 'музеев', 'три музея — three museums'],
            [
              'Masculine soft -ь',
              '-ей',
              'словарь → словар+ей',
              'словарей',
              'много словарей — many dictionaries',
            ],
            [
              'Feminine -а (hard)',
              '-Ø (zero)',
              'женщина → женщин',
              'женщин',
              'много женщин — many women',
            ],
            [
              'Feminine -а (after к/г)',
              '-Ø',
              'подруга → подруг',
              'подруг',
              'нет подруг — no friends (f.)',
            ],
            [
              'Feminine -я',
              '-ей / -й',
              'неделя → недель',
              'недель',
              'несколько недель — several weeks',
            ],
            ['Feminine -ь', '-ей', 'ночь → ноч+ей', 'ночей', 'пять ночей — five nights'],
            ['Neuter -о (hard)', '-Ø', 'окно → окон', 'окон', 'много окон — many windows'],
            ['Neuter -е', '-ей', 'море → мор+ей', 'морей', 'пять морей — five seas'],
            [
              'Neuter -ие/-ия',
              '-ий',
              'здание → здани+й',
              'зданий',
              'много зданий — many buildings',
            ],
          ],
        },
      },
      {
        h2: 'Irregular Genitive Plurals — Must-Know List',
        content:
          'Some of the most common Russian nouns have **highly irregular** genitive plural forms that must simply be **memorized**. These are **high-frequency words**.',
        table: {
          caption: '11 ultra-frequent irregular genitive plurals',
          boldColumnIndices: [1, 2],
          headers: ['Nominative singular', 'Genitive plural', 'Example', 'Note'],
          rows: [
            ['человек (person)', 'людей', 'много людей', 'suppletion from люди'],
            ['ребёнок (child)', 'детей', 'много детей', 'suppletion from дети'],
            ['глаз (eye)', 'глаз', 'пара глаз', 'zero ending (not глазов)'],
            ['раз (time/instance)', 'раз', 'несколько раз', 'zero ending (not разов)'],
            ['солдат (soldier)', 'солдат', 'отряд солдат', 'zero ending'],
            ['носок (sock)', 'носков', 'пара носков', 'keeps -ов'],
            ['чулок (stocking)', 'чулок', 'пара чулок', 'zero ending (not чулков)'],
            ['яблоко (apple)', 'яблок', 'килограмм яблок', 'zero ending'],
            ['имя (name)', 'имён', 'список имён', 'neuter -мя type'],
            ['мать (mother)', 'матерей', 'двое матерей', 'special declension'],
            ['дочь (daughter)', 'дочерей', 'трое дочерей', 'special declension'],
          ],
        },
      },
      {
        h2: 'Russian Genitive Case Prepositions — Complete List',
        content:
          'The following **prepositions** always require the **genitive case**. Memory tip — the acronym **БДИ-УОП-ДК**: **Без · До · Из · У · От · После · Для · Кроме**.\n\nThese 8 prepositions cover **90%** of genitive preposition usage.',
        table: {
          caption: '16 genitive prepositions with examples',
          boldColumnIndices: [0, 2],
          headers: ['Prep.', 'Meaning', 'With a noun', 'Full example + translation'],
          rows: [
            ['без', 'without', 'без молока', 'Я пью чай без молока. — I drink tea without milk.'],
            [
              'до',
              'until / before / up to',
              'до урока',
              'Позвони мне до урока. — Call me before the lesson.',
            ],
            ['из', 'from (inside of)', 'из России', 'Он приехал из России. — He came from Russia.'],
            [
              'с',
              'from (off a surface)',
              'с полки',
              'Книга упала с полки. — The book fell off the shelf.',
            ],
            ['у', 'at / near / by', 'у меня', 'У меня есть кошка. — I have a cat.'],
            [
              'от',
              'from (a person/source)',
              'от друга',
              'Письмо от друга. — A letter from a friend.',
            ],
            ['после', 'after', 'после работы', 'После работы я устал. — After work I was tired.'],
            [
              'для',
              'for (the benefit of)',
              'для тебя',
              'Это подарок для тебя. — This is a gift for you.',
            ],
            [
              'кроме',
              'except / besides',
              'кроме меня',
              'Все кроме меня пришли. — Everyone except me came.',
            ],
            [
              'вокруг',
              'around',
              'вокруг города',
              'Мы ехали вокруг города. — We drove around the city.',
            ],
            [
              'мимо',
              'past / by',
              'мимо школы',
              'Он прошёл мимо школы. — He walked past the school.',
            ],
            [
              'вместо',
              'instead of',
              'вместо кофе',
              'Выпей воды вместо кофе. — Drink water instead of coffee.',
            ],
            [
              'напротив',
              'opposite / across from',
              'напротив банка',
              'Кафе напротив банка. — The café is across from the bank.',
            ],
            [
              'из-за',
              'because of / from behind',
              'из-за дождя',
              'Из-за дождя мы остались дома. — Because of the rain we stayed home.',
            ],
            [
              'из-под',
              'from under',
              'из-под стола',
              'Кот вылез из-под стола. — The cat crawled out from under the table.',
            ],
            [
              'ради',
              'for the sake of',
              'ради тебя',
              'Ради твоего счастья. — For the sake of your happiness.',
            ],
          ],
        },
      },
      {
        h2: 'Russian Numbers and the Genitive Case',
        content:
          'Counting in Russian requires the **genitive case** — and the exact form (**singular** or **plural**) depends on the number.\n\nRussian counts in **"groups"**: numbers ending in **1** use the nominative; **2–4** use genitive singular; **5–0** use genitive plural.',
        table: {
          caption: 'Number + case rules with examples',
          boldColumnIndices: [1, 2],
          headers: ['Number / Quantifier', 'Case required', 'Example (стол)', 'Translation'],
          rows: [
            ['1', 'Nominative singular', 'один стол', 'one table'],
            ['2, 3, 4', 'Genitive singular', 'два стола / три стола', 'two / three tables'],
            ['5–20', 'Genitive plural', 'пять столов', 'five tables'],
            [
              '21, 31, 41… (ends in 1)',
              'Nominative singular',
              'двадцать один стол',
              'twenty-one tables',
            ],
            [
              '22–24, 32–34… (ends in 2-4)',
              'Genitive singular',
              'двадцать два стола',
              'twenty-two tables',
            ],
            [
              '25–30, etc. (ends in 5–9, 0)',
              'Genitive plural',
              'двадцать пять столов',
              'twenty-five tables',
            ],
            ['100, 200, 1000…', 'Genitive plural', 'сто столов', 'a hundred tables'],
            [
              'много / несколько / мало',
              'Genitive plural',
              'много столов',
              'many / several / few tables',
            ],
            ['сколько / столько', 'Genitive plural', 'сколько столов?', 'how many tables?'],
          ],
        },
      },
      {
        h2: 'Genitive vs. Accusative: How to Tell Them Apart',
        content:
          'One of the most common points of confusion is distinguishing the **genitive** from the **accusative**. For **animate masculine** nouns, the accusative form is **identical** to the genitive — the form **студента** can be either case.\n\n**Context** and **sentence structure** tell you which it is.',
        table: {
          caption: 'Genitive vs accusative comparison',
          boldColumnIndices: [0, 1],
          headers: ['Situation', 'Russian sentence', 'Explanation'],
          rows: [
            [
              'Possession / belonging',
              'Это книга студента.',
              "This is the student's book. (genitive marks the owner)",
            ],
            ['Absence (нет)', 'Нет студента.', 'There is no student. (нет always takes genitive)'],
            [
              'Direct object (animate)',
              'Я вижу студента.',
              'I see the student. (accusative of animate masc. = genitive form)',
            ],
            [
              'Direct object (inanim.)',
              'Я вижу стол.',
              'I see the table. (accusative of inanimate = nominative — no genitive)',
            ],
            [
              'After numerals 2–4',
              'Я вижу двух студентов.',
              'I see two students. (animate → genitive plural with numerals)',
            ],
            [
              'Partial genitive',
              'Хочешь чаю?',
              "Do you want some tea? (partitive — genitive expresses 'some of')",
            ],
          ],
        },
      },
      {
        h2: '32 Real Russian Genitive Case Examples',
        content:
          'Below are **32 authentic Russian sentences** demonstrating every major use of the genitive case. Each includes transliteration and translation. **1–5:** Possession | **6–10:** Absence/negation | **11–15:** Quantity & numbers | **16–22:** Prepositions | **23–32:** Expressions & miscellaneous.',
        table: {
          caption: '32 example sentences with genitive',
          boldColumnIndices: [1, 2],
          headers: ['#', 'Russian', 'Transliteration', 'Translation & notes'],
          rows: [
            [
              '1',
              'Это машина моего брата.',
              'Eto mashina moyego brata.',
              "This is my brother's car. (брат → брата, gen. sg. masc.)",
            ],
            [
              '2',
              'Адрес нашей компании.',
              'Adres nashey kompanii.',
              "Our company's address. (компания → компании)",
            ],
            [
              '3',
              'Столица России — Москва.',
              'Stolitsa Rossii — Moskva.',
              'The capital of Russia is Moscow. (Россия → России)',
            ],
            [
              '4',
              'Конец фильма был неожиданным.',
              'Konets filma byl neozhidannym.',
              'The end of the film was unexpected. (фильм → фильма)',
            ],
            [
              '5',
              'Цвет её глаз — карий.',
              'Tsvet yeyo glaz — kariy.',
              'The color of her eyes is brown. (глаза → глаз, gen. pl.)',
            ],
            [
              '6',
              'У меня нет времени.',
              'U menya net vremeni.',
              'I have no time. (время → времени, neuter -мя)',
            ],
            [
              '7',
              'Здесь нет молока.',
              "Zdes' net moloka.",
              "There's no milk here. (молоко → молока)",
            ],
            [
              '8',
              'Я не видел его несколько дней.',
              'Ya ne videl yego neskolko dney.',
              "I hadn't seen him for several days. (день → дней)",
            ],
            [
              '9',
              'В холодильнике нет яиц.',
              'V kholodilnike net yaits.',
              'There are no eggs in the fridge. (яйцо → яиц, gen. pl.)',
            ],
            [
              '10',
              'Без тебя мне плохо.',
              'Bez tebya mne plokho.',
              'I feel bad without you. (ты → тебя, gen. pronoun)',
            ],
            [
              '11',
              'Два стакана воды, пожалуйста.',
              'Dva stakana vody, pozhaluysta.',
              'Two glasses of water, please. (два + gen. sg.)',
            ],
            [
              '12',
              'Пять минут ходьбы отсюда.',
              "Pyat' minut khod'by otsyuda.",
              "Five minutes' walk from here. (пять + gen. pl.)",
            ],
            [
              '13',
              'Много людей пришло на концерт.',
              'Mnogo lyudey prishlo na kontsert.',
              'Many people came to the concert. (много + людей)',
            ],
            [
              '14',
              'Несколько студентов опоздало.',
              'Neskolko studentov opozdalo.',
              'Several students were late. (несколько + gen. pl.)',
            ],
            [
              '15',
              'Килограмм помидоров.',
              'Kilogramm pomidorov.',
              'A kilogram of tomatoes. (помидоры → помидоров)',
            ],
            [
              '16',
              'Она пришла из Германии.',
              'Ona prishla iz Germanii.',
              'She came from Germany. (из + gen.)',
            ],
            ['17', 'До свидания!', 'Do svidaniya!', 'Goodbye! Lit: Until the meeting. (до + gen.)'],
            [
              '18',
              'Без усилий нет результатов.',
              'Bez usiliy net rezultatov.',
              'No pain, no gain. (без + gen. pl.)',
            ],
            [
              '19',
              'У врача очередь.',
              "U vracha ochered'.",
              "There's a queue at the doctor's. (у + gen.)",
            ],
            [
              '20',
              'После дождя — солнце.',
              'Posle dozhdya — solntse.',
              'After rain comes sunshine. (после + gen.)',
            ],
            [
              '21',
              'Вокруг парка — красивые дома.',
              'Vokrug parka — krasivye doma.',
              'Beautiful houses surround the park. (вокруг + gen.)',
            ],
            [
              '22',
              'Из-за пробок я опоздал.',
              'Iz-za probok ya opozdal.',
              'I was late because of traffic jams. (из-за + gen.)',
            ],
            [
              '23',
              'Ни слова правды.',
              'Ni slova pravdy.',
              'Not a word of truth. (genitive of negation)',
            ],
            [
              '24',
              'Не было смысла спорить.',
              "Ne bylo smysla sporit'.",
              'There was no point in arguing. (не было + gen.)',
            ],
            [
              '25',
              'Час от часу не легче.',
              'Chas ot chasu ne legche.',
              'It keeps getting harder. (idiomatic: от + gen.)',
            ],
            [
              '26',
              'Ради твоего счастья.',
              'Radi tvoyego schastya.',
              'For the sake of your happiness. (ради + gen.)',
            ],
            [
              '27',
              'Сколько стоит бутылка воды?',
              'Skolko stoit butylka vody?',
              'How much is a bottle of water? (воды = gen. sg. of вода)',
            ],
            [
              '28',
              'Мне не хватает денег.',
              'Mne ne khvatayet deneg.',
              "I don't have enough money. (не хватает + gen.)",
            ],
            [
              '29',
              'Желаю тебе счастья и здоровья!',
              'Zhelayu tebe schastya i zdorovya!',
              'I wish you happiness and health! (желать + gen.)',
            ],
            [
              '30',
              'Начало нового года.',
              'Nachalo novogo goda.',
              'The start of the new year. (gen. chain: нового + года)',
            ],
            [
              '31',
              'У неё голубые глаза.',
              'U neyo golubye glaza.',
              'She has blue eyes. (у + gen. pronoun construction)',
            ],
            [
              '32',
              'Вкус победы.',
              'Vkus pobedy.',
              'The taste of victory. (победа → победы, gen. sg.)',
            ],
          ],
        },
      },
      {
        h2: 'Russian Possession Grammar: У + Genitive (To Have)',
        content:
          "Russian has **two main ways** to express possession, both using the genitive. **Construction 1 — Noun + Genitive:** **машина друга** — the friend's car (lit: car of friend). **Construction 2 — У + Genitive + есть:** Used to say that someone possesses something.\n\nRussian does not have a direct verb for **'to have'**. Instead: **У** [person in genitive] **есть** [thing].",
        subsections: [
          {
            h3: 'The У construction in all tenses',
            content:
              '**Present:** **У меня есть кошка.** (I have a cat — есть is often omitted in speech). **Past:** **У меня была кошка.** (I had a cat — была agrees with кошка). **Future:** **У меня будет кошка.** (I will have a cat).\n\n**Negation — present:** **У меня нет кошки.** (нет + genitive). **Negation — past:** **У меня не было кошки.** **Negation — future:** **У меня не будет кошки.**',
          },
        ],
      },
      {
        h2: 'Top 7 Genitive Case Mistakes (And How to Fix Them)',
        content: 'The most common **errors** learners make with the genitive case:',
        bullets: [
          '**Using nominative after НЕТ** — Нет кот. ✗ → Нет кота. ✓ (нет always takes genitive)',
          '**Forgetting the 8-letter spelling rule** — книгы ✗ → книги ✓ (after г → и not ы)',
          '**Wrong number agreement** — пять стол ✗ → пять столов ✓ (5+ requires genitive plural)',
          '**Using -ов for feminine zero-ending nouns** — много женщинов ✗ → много женщин ✓',
          '**Confusing из and от** — из means "from inside / from a place"; от means "from a person or source". Он пришёл от врача vs. Он вернулся из больницы.',
          '**Using accusative instead of genitive after comparison** — Он старше я ✗ → Он старше меня ✓',
          '**Forgetting fleeting vowels in genitive plural** — окнов ✗ → окон ✓; ручков ✗ → ручек ✓',
        ],
      },
    ],
    conclusion:
      'The Russian genitive case is the **workhorse** of the Russian case system. It handles **possession**, **negation**, **quantity**, **comparison**, **dates**, and is required by more **prepositions** than any other case.\n\nTo recap: **genitive singular** — masculine → **-а/-я** | feminine → **-ы/-и** | neuter → **-а/-я**. **Genitive plural** — memorize the patterns and high-frequency exceptions. After **НЕТ**, **НЕ БЫЛО**, **НЕ БУДЕТ**: always genitive. After **2/3/4**: genitive singular | after **5+**, **много**, **несколько**: genitive plural. Key prepositions: **без**, **до**, **из**, **у**, **от**, **после**, **для**, **кроме**.',
    conclusionOutro:
      'Ready to continue? Explore the other cases in our complete Russian grammar series:',
    ctaText: 'Practice Russian cases with our app',
    ctaHref: '/',
    faq: [
      {
        question: 'What is the Russian genitive case used for?',
        answer:
          "The Russian genitive case is used for possession (книга студента — the student's book), absence/negation (нет воды — no water), quantity and numbers (два стакана — two glasses; много людей — many people), after numerous prepositions (без, до, из, у, от, после, для…), comparisons (старше меня — older than me), and dates.",
      },
      {
        question: 'How do I form the genitive plural in Russian?',
        answer:
          'Genitive plural formation depends on the noun type: masculine hard-stem nouns add -ов (стол → столов); masculine/feminine soft nouns often add -ей (ночь → ночей; словарь → словарей); feminine -а nouns have a zero ending (женщина → женщин, книга → книг). Neuter -о nouns also have zero endings with occasional fleeting vowels (окно → окон). This is the hardest part of Russian declension.',
      },
      {
        question: 'Is the Russian genitive case the same as the accusative?',
        answer:
          'Not exactly, but they overlap for animate masculine nouns: Я вижу студента (accusative) and Нет студента (genitive) use the same form студента. For inanimate nouns, the accusative of masculine equals the nominative (Я вижу стол), while the genitive adds -а (Нет стола). For feminine nouns, accusative changes -а to -у (Я читаю книгу), while genitive changes -а to -ы/-и (Нет книги).',
      },
      {
        question: 'What verbs require the genitive case in Russian?',
        answer:
          'Several common Russian verbs take their object in the genitive: бояться (to be afraid of), ждать (to wait for), желать (to wish), избегать (to avoid), достигать (to achieve/reach), лишать (to deprive of), касаться (to touch/concern), and хотеть in some partitive constructions (хочешь чаю? — do you want some tea?).',
      },
      {
        question: "How do you say 'I have' in Russian?",
        answer:
          'Russian does not have a direct verb for "to have". Use the construction У + [person in genitive] + есть + [thing]: У меня есть машина (I have a car). For negation: У меня нет машины (I don\'t have a car) — the thing not owned goes into the genitive after нет.',
      },
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Russian Genitive Case: Rules, Endings & 32 Real Examples',
      description:
        'The most complete guide to genitive case Russian: 7 uses, singular & plural endings, irregular forms, 16 prepositions, numbers, У + genitive. 32 real examples with transliteration.',
      datePublished: '2025-03-11',
      dateModified: '2025-03-11',
      author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
      publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://russiandeclensions.com/learn/articles/russian-genitive-case',
      },
      keywords:
        'russian genitive case, russian genitive case endings, genitive case russian rules, russian genitive plural, genitive case russian examples, russian possession grammar',
    },
  },
  'russian-accusative-case': {
    slug: 'russian-accusative-case',
    title: 'Russian Accusative Case: Direct Objects, Animate vs. Inanimate & Motion Verbs',
    metaTitle: 'Russian Accusative Case: Rules, Endings & 30 Examples | Russian Cases with Anna',
    metaDescription:
      'Complete guide to the Russian accusative case: endings table, animate vs. inanimate rule, motion verbs, в/на direction vs. location, 9 prepositions, 15 transitive verbs, 30 real examples.',
    keywords: [
      'russian accusative case',
      'russian accusative case endings',
      'animate inanimate russian accusative',
      'russian direct object case',
      'russian motion verbs accusative',
      'в на accusative russian',
    ],
    h1: 'Russian Accusative Case: Direct Objects, Animate vs. Inanimate & Motion Verbs',
    heroImage: {
      src: '/articles/free-russian-lesson-accusative-case.webp',
      alt: 'Free Russian lesson on the accusative case: direct objects and motion verbs',
      width: 1200,
      height: 630,
    },
    intro:
      "The Russian accusative case is the **second most important case** to master after the genitive — and in many ways, it is the most intuitive. It marks the **direct object** of a sentence: the person or thing that is directly affected by the verb's action.\n\nBut the accusative has a twist that catches every Russian learner off-guard: the **animate vs. inanimate distinction**. For masculine nouns, animate and inanimate objects decline differently in the accusative — and understanding this rule is essential for speaking Russian correctly.",
    whatYouLearn: [
      'What the Russian accusative case is and its **4 core uses**',
      'Accusative case endings for **all noun genders** (singular & plural)',
      'The **animate vs. inanimate distinction** — the #1 source of confusion',
      'Russian **motion verbs** and how they use the accusative',
      '**В and НА** with the accusative (direction) vs. prepositional (location)',
      'All **9 prepositions** that require the accusative',
      '**Time expressions** with the accusative',
      '**15 must-know verbs** that take accusative direct objects',
      '**30 real Russian examples** with transliteration and translation',
      'Accusative vs. genitive — how to tell them apart',
    ],
    leadMagnetCta: {
      title: 'Drill the Russian accusative case with smart exercises',
      description:
        'Our mobile app covers all 6 Russian cases — with special focus on animate/inanimate, motion verbs, and в/на direction vs. location. Available on Android and iOS.',
      ctaText: 'Download the app and start drilling today',
      ctaHref: '/',
    },
    internalLinks: [
      {
        href: '/learn/lessons/russian-cases-complete-guide',
        label: 'The Complete Guide to Russian Cases: All 6 Cases Explained with Examples',
      },
      {
        href: '/learn/articles/russian-case-endings-cheatsheet',
        label: 'Russian Case Endings: The Ultimate Cheat Sheet',
      },
      {
        href: '/learn/articles/russian-genitive-case',
        label: 'Russian Genitive Case: Rules, Endings & 32 Real Examples',
      },
      {
        href: '/learn/lessons/dative-case-declension',
        label: 'Russian Dative Case: How to Say "To" and "For" in Russian',
      },
    ],
    sections: [
      {
        h2: 'Quick Answer',
        content:
          'The accusative case in Russian answers the questions **Кого? (Whom?)** and **Что? (What?)**. It marks direct objects, expresses direction with в and на, and appears in time expressions.\n\nIts key complexity is the **animate vs. inanimate distinction** for masculine nouns.',
      },
      {
        h2: 'What Is the Russian Accusative Case?',
        content:
          "The accusative case (**Винительный падеж**) is the fourth of the six Russian cases. Its primary job is to mark the **direct object** of a transitive verb — the noun that receives the action directly.\n\nIn English, we don't change the word based on its role. In Russian, the noun changes its ending to signal that it's the direct object.",
        subsections: [
          {
            h3: 'The accusative case is used for:',
            content: '',
            bullets: [
              '**Direct objects** of transitive verbs (Я вижу кота. — I see the cat.)',
              '**Direction** with в and на (Я иду в школу. — I am going to school.)',
              '**Time expressions** (всю неделю — all week; через час — in an hour)',
              '**Days of the week** with в (в понедельник — on Monday)',
              'After several specific prepositions: **за**, **через**, **про**, **под**, **сквозь**, **спустя**, **о**',
            ],
          },
        ],
      },
      {
        h2: 'Russian Accusative Case Endings — Complete Table',
        content:
          "The accusative endings depend on the noun's **gender**, its **stem** (hard or soft), and — crucially for masculine nouns — whether the noun is **animate** or **inanimate**.\n\nHere is the full reference table:",
        table: {
          caption: 'Accusative endings by noun type — singular & plural',
          boldColumnIndices: [3],
          headers: ['Noun type', 'Rule', 'Nominative', 'Accusative', 'Example sentence'],
          rows: [
            [
              'Masc. inanimate (hard)',
              '= Nom. (no change)',
              'стол',
              'стол',
              'Я вижу стол. — I see the table.',
            ],
            [
              'Masc. inanimate (soft)',
              '= Nom. (no change)',
              'музей',
              'музей',
              'Я вижу музей. — I see the museum.',
            ],
            [
              'Masc. animate (hard)',
              '= Gen. (-а)',
              'студент',
              'студента',
              'Я вижу студента. — I see the student.',
            ],
            [
              'Masc. animate (soft)',
              '= Gen. (-я)',
              'гений',
              'гения',
              'Я вижу гения. — I see the genius.',
            ],
            ['Fem. hard (-а)', '-у', 'женщина', 'женщину', 'Я вижу женщину. — I see the woman.'],
            ['Fem. soft (-я)', '-ю', 'земля', 'землю', 'Я вижу землю. — I see the earth.'],
            [
              'Fem. (-ь) inanimate',
              '= Nom. (-ь)',
              'ночь',
              'ночь',
              'Я люблю ночь. — I love the night.',
            ],
            ['Fem. (-ь) animate', '= Nom. (-ь)', 'мышь', 'мышь', 'Я вижу мышь. — I see the mouse.'],
            ['Neuter (hard -о)', '= Nom. (-о)', 'окно', 'окно', 'Я вижу окно. — I see the window.'],
            ['Neuter (soft -е)', '= Nom. (-е)', 'море', 'море', 'Я вижу море. — I see the sea.'],
            [
              'Plural inanimate',
              '= Nom. pl.',
              'столы',
              'столы',
              'Я вижу столы. — I see the tables.',
            ],
            [
              'Plural animate',
              '= Gen. pl.',
              'студенты',
              'студентов',
              'Я вижу студентов. — I see the students.',
            ],
          ],
        },
        bullets: [
          '**Feminine -а** — -а → -у: книга → книгу',
          '**Feminine -я** — -я → -ю: неделя → неделю',
          '**Masculine inanimate** — no change (nominative): стол → стол',
          '**Masculine animate** — genitive form: студент → студента',
          '**Neuter** and **feminine -ь** — no change (= nominative)',
        ],
      },
      {
        h2: 'Animate vs. Inanimate: The Most Important Accusative Rule',
        content:
          '**Animate masculine nouns** (people and animals) take the **genitive form** in the accusative case. **Inanimate masculine nouns** stay unchanged (nominative form).\n\nThis is the defining feature of the Russian accusative — and the #1 source of mistakes.',
        subsections: [
          {
            h3: 'What Counts as Animate?',
            content:
              'In Russian grammar, **animate** means people and animals — living beings.\n\nHowever, there are some **surprising exceptions**:',
          },
        ],
        table: {
          caption: '12 concrete examples including surprising animate/inanimate cases',
          boldColumnIndices: [2],
          headers: ['Noun', 'Animate / Inanimate', 'Accusative form', 'Note'],
          rows: [
            ['🤝 друг (friend)', 'animate', 'Я вижу друга.', 'Accusative = genitive form (друга)'],
            [
              '👨‍⚕️ врач (doctor)',
              'animate',
              'Я слушаю врача.',
              'Accusative = genitive form (врача)',
            ],
            ['🐱 кот (cat)', 'animate', 'Я глажу кота.', 'Animals are animate (кота)'],
            [
              '👶 ребёнок (child)',
              'animate',
              'Мама видит ребёнка.',
              'Accusative = genitive (ребёнка)',
            ],
            [
              '🏛️ президент (president)',
              'animate',
              'Я уважаю президента.',
              'People are always animate',
            ],
            ['🪑 стол (table)', 'inanimate', 'Я вижу стол.', 'Accusative = nominative (no change)'],
            [
              '🎬 фильм (film)',
              'inanimate',
              'Я смотрю фильм.',
              'Accusative = nominative (no change)',
            ],
            ['🏙️ город (city)', 'inanimate', 'Я люблю этот город.', 'Places are inanimate'],
            [
              '💀 труп (corpse)',
              'inanimate',
              'Детектив нашёл труп.',
              'Corpses are grammatically inanimate!',
            ],
            [
              '🪆 кукла (doll)',
              'inanimate',
              'Девочка любит куклу.',
              'Toys are inanimate (куклу — fem.)',
            ],
            [
              '🃏 туз (ace in cards)',
              'animate*',
              'Он поставил туза.',
              'Card game pieces = animate by convention!',
            ],
            [
              '♕ ферзь (queen in chess)',
              'animate*',
              'Он взял ферзя.',
              'Chess pieces = animate by convention!',
            ],
          ],
        },
        bullets: [
          '**Animate (unexpected):** playing cards (туз, король, дама), chess pieces (ферзь, конь)',
          '**Inanimate (unexpected):** труп (corpse), кукла (doll), снеговик (snowman)',
          '**Inanimate plural** — nominative plural: Я вижу столы',
          '**Animate plural** — genitive plural: Я вижу студентов',
        ],
      },
      {
        h2: 'Russian Motion Verbs and the Accusative Case',
        content:
          'Verbs of motion use **в or на + accusative** to indicate where someone or something is going. Russian has a rich system of motion verbs.\n\nAll use в/на + accusative for direction:',
        table: {
          caption: '10 main motion verbs + unidirectional vs. multidirectional explanation',
          boldColumnIndices: [2],
          headers: ['Verb', 'Meaning', 'Example with В/НА + acc.', 'Translation'],
          rows: [
            [
              'идти / ходить',
              '🚶 to go (on foot)',
              'Я иду в школу.',
              'I am going to school (right now)',
            ],
            [
              'ехать / ездить',
              '🚗 to go (by vehicle)',
              'Мы едем на работу.',
              'We are going to work',
            ],
            [
              'бежать / бегать',
              '🏃 to run',
              'Он бежит на стадион.',
              'He is running to the stadium',
            ],
            [
              'лететь / летать',
              '✈️ to fly',
              'Самолёт летит в Москву.',
              'The plane is flying to Moscow',
            ],
            [
              'плыть / плавать',
              '🏊 to swim / sail',
              'Корабль плывёт в порт.',
              'The ship is sailing into port',
            ],
            [
              'везти / возить',
              '🚐 to carry (vehicle)',
              'Он везёт детей в школу.',
              'He is driving the children to school',
            ],
            [
              'нести / носить',
              '📦 to carry (on foot)',
              'Она несёт цветы на стол.',
              'She is carrying flowers to the table',
            ],
            [
              'ползти / ползать',
              '🐛 to crawl',
              'Ребёнок ползёт на диван.',
              'The child is crawling onto the sofa',
            ],
            [
              'прийти (perf.)',
              '🎯 to arrive / come',
              'Приходи на вечеринку!',
              'Come to the party!',
            ],
            [
              'вернуться (perf.)',
              '↩️ to return',
              'Он вернулся в город.',
              'He returned to the city',
            ],
          ],
        },
        bullets: [
          '**Unidirectional** (one trip, right now): идти, ехать, лететь — Я иду в школу.',
          '**Multidirectional** (habitual, back-and-forth): ходить, ездить, летать — Я хожу в школу каждый день.',
          'Both use **в + accusative** for direction — the case rule is the same.',
        ],
      },
      {
        h2: 'В and НА with the Accusative: Direction vs. Location',
        content:
          'The prepositions **в** and **на** are each used with **two different cases** depending on whether the sentence expresses **direction** (movement toward) or **location** (being somewhere).\n\nStudy these pairs carefully:',
        image: {
          src: '/articles/russian-accusative-case-direction-vs-location.webp',
          alt: 'Russian accusative case chart: direction vs location with в and на',
          width: 1200,
          height: 630,
        },
        table: {
          caption: '10 side-by-side pairs: accusative (direction) vs. prepositional (location)',
          boldColumnIndices: [0, 1],
          headers: ['Construction', 'Russian example', 'Meaning', 'Translation'],
          rows: [
            [
              'в + Accusative',
              'Я иду в магазин.',
              'Direction: into / to',
              'I am going to the store.',
            ],
            [
              'в + Prepositional',
              'Я нахожусь в магазине.',
              'Location: inside / at',
              'I am at the store.',
            ],
            [
              'на + Accusative',
              'Она едет на работу.',
              'Direction: onto / to',
              'She is going to work.',
            ],
            [
              'на + Prepositional',
              'Она работает на заводе.',
              'Location: on / at',
              'She works at the factory.',
            ],
            [
              'в + Accusative',
              'Дети пошли в школу.',
              'Direction: to school',
              'The children went to school.',
            ],
            [
              'в + Prepositional',
              'Дети учатся в школе.',
              'Location: at school',
              'The children study at school.',
            ],
            [
              'на + Accusative',
              'Мы летим на Кубу.',
              'Direction: to Cuba',
              'We are flying to Cuba.',
            ],
            [
              'на + Prepositional',
              'Мы отдыхаем на Кубе.',
              'Location: in Cuba',
              'We are vacationing in Cuba.',
            ],
            [
              'на + Accusative',
              'Поставь книгу на стол.',
              'Direction: onto table',
              'Put the book on the table.',
            ],
            [
              'на + Prepositional',
              'Книга лежит на столе.',
              'Location: on table',
              'The book is on the table.',
            ],
          ],
        },
        subsections: [
          {
            h3: 'В vs. НА — Which One to Use for Location?',
            content:
              '**Use В (in/inside)** for: enclosed spaces, countries, cities, buildings — в доме, в России, в школе. **Use НА (on/at)** for: open spaces, events, islands, some institutions — на улице, на концерте, на Кубе, на работе, на почте, на рынке.\n\nSome nouns simply require на by convention — memorize these.',
          },
        ],
      },
      {
        h2: 'All Prepositions That Require the Accusative Case',
        content:
          'Beyond в and на, several other prepositions require the accusative.\n\nHere is the **complete list** with nominalized example and full sentence:',
        table: {
          caption: '9 accusative prepositions with meaning and full example',
          boldColumnIndices: [0],
          headers: ['Prep.', 'Meaning', 'With a noun', 'Full example + translation'],
          rows: [
            [
              'в',
              'into / to (direction)',
              'в Москву, в школу',
              'Я лечу в Москву. — I am flying to Moscow.',
            ],
            [
              'на',
              'onto / to (direction)',
              'на работу, на стол',
              'Она идёт на работу. — She is going to work.',
            ],
            [
              'за',
              'behind / for (motion)',
              'за угол, за хлебом',
              'Он зашёл за угол. — He went around the corner.',
            ],
            [
              'под',
              'under (motion)',
              'под стол',
              'Кот залез под стол. — The cat crawled under the table.',
            ],
            [
              'через',
              'across / through / in (time)',
              'через реку, через час',
              'Мы переехали через реку. — We crossed the river.',
            ],
            [
              'про',
              'about (informal)',
              'про тебя',
              'Он рассказал про тебя. — He talked about you.',
            ],
            [
              'сквозь',
              'through (penetrating)',
              'сквозь стекло',
              'Свет проходил сквозь стекло. — Light passed through the glass.',
            ],
            [
              'спустя',
              'after / later (time)',
              'спустя год',
              'Спустя год он вернулся. — A year later he returned.',
            ],
            [
              'о/об',
              'against (physical contact)',
              'споткнуться о камень',
              'Он споткнулся о камень. — He stumbled over a stone.',
            ],
          ],
        },
        bullets: [
          '**Dual-case prepositions:** В, НА, ЗА, ПОД — accusative = motion/direction; instrumental/prepositional = static position.',
          'за стол (acc. → sit down AT the table) vs. за столом (instr. → sitting AT the table)',
        ],
      },
      {
        h2: 'Time Expressions with the Accusative Case',
        content:
          'The accusative appears in several important **Russian time expressions**.\n\nThese are fixed patterns to memorize:',
        table: {
          caption: 'через, за, весь/всю, в + day, спустя',
          boldColumnIndices: [0],
          headers: ['Expression type', 'Examples', 'Full sentence + translation'],
          rows: [
            [
              'Duration (весь / целый)',
              'всю неделю, целый день',
              'Я работал всю неделю. — I worked all week.',
            ],
            [
              'Days of week (в + acc.)',
              'в понедельник, в пятницу',
              'Я иду туда в среду. — I am going there on Wednesday.',
            ],
            [
              'через (in / after)',
              'через час, через неделю',
              'Приходи через час. — Come in an hour.',
            ],
            [
              'за (within / in)',
              'за час, за неделю',
              'Я сделал это за час. — I did it in (within) an hour.',
            ],
            [
              'спустя (after / later)',
              'спустя год',
              'Спустя год он вернулся. — A year later he returned.',
            ],
          ],
        },
        bullets: [
          '**Days of the week:** В понедельник, в среду, в пятницу — all with **в** take the accusative.',
        ],
      },
      {
        h2: '15 Key Verbs That Take the Accusative Direct Object',
        content:
          'Any transitive verb in Russian can take an accusative direct object.\n\nHere are the **15 most common** with the important exception of **ждать** (accusative or genitive):',
        table: {
          caption: '15 transitive verbs with examples',
          boldColumnIndices: [0],
          headers: ['Verb', 'Example', 'Translation', 'Note'],
          rows: [
            ['видеть (to see)', 'Я вижу тебя.', 'I see you.', 'Direct visual perception'],
            ['любить (to love/like)', 'Я люблю музыку.', 'I love music.', 'Object of affection'],
            ['знать (to know)', 'Я знаю этот город.', 'I know this city.', 'Known thing/person'],
            [
              'читать (to read)',
              'Она читает книгу.',
              'She is reading a book.',
              'Object being read',
            ],
            [
              'слушать (to listen to)',
              'Мы слушаем музыку.',
              'We are listening to music.',
              'Object of listening',
            ],
            [
              'смотреть (to watch)',
              'Он смотрит фильм.',
              'He is watching a film.',
              'Object of watching',
            ],
            ['купить (to buy)', 'Я купил машину.', 'I bought a car.', 'Object purchased'],
            ['взять (to take)', 'Возьми зонтик.', 'Take an umbrella.', 'Object taken'],
            [
              'понимать (to understand)',
              'Я понимаю тебя.',
              'I understand you.',
              'Person/thing understood',
            ],
            [
              'помнить (to remember)',
              'Я помню этот день.',
              'I remember that day.',
              'Thing remembered',
            ],
            [
              'встречать (to meet)',
              'Я встречаю друга.',
              'I am meeting a friend.',
              'Person met (animate)',
            ],
            [
              'ждать (to wait for)',
              'Я жду автобус / автобуса.',
              'I am waiting for the bus.',
              'Both acc. and gen. possible!',
            ],
            ['спрашивать (to ask)', 'Он спрашивает меня.', 'He is asking me.', 'Person asked'],
            ['благодарить (to thank)', 'Я благодарю вас.', 'I thank you.', 'Person thanked'],
            [
              'изучать (to study)',
              'Она изучает русский язык.',
              'She is studying Russian.',
              'Subject studied',
            ],
          ],
        },
        bullets: [
          '**ЖДАТЬ exception:** Я жду автобус (acc.) = I am waiting for the specific bus. Я жду автобуса (gen.) = I am waiting for a bus. Both correct. For animate: Я жду друга (acc. preferred).',
        ],
      },
      {
        h2: '30 Real Russian Accusative Case Examples',
        content:
          'Below are **30 authentic sentences** demonstrating every major use of the accusative. **1–6:** Inanimate objects | **7–12:** Animate objects | **13–18:** Direction | **19–23:** Time | **24–30:** Other prepositions.',
        table: {
          caption: '30 example sentences with transliteration',
          boldColumnIndices: [1],
          headers: ['#', 'Russian', 'Transliteration', 'Translation & notes'],
          rows: [
            [
              '1',
              'Он читает интересную книгу.',
              'On chitayet interesnuyu knigu.',
              'He is reading an interesting book. (книга → книгу)',
            ],
            [
              '2',
              'Я купила новое платье.',
              'Ya kupila novoye plate.',
              'I bought a new dress. (платье neuter → no change)',
            ],
            [
              '3',
              'Мы смотрим старый фильм.',
              'My smotrim staryy film.',
              'We are watching an old film. (inanimate masc.)',
            ],
            [
              '4',
              'Она пьёт горячий кофе.',
              'Ona pyot goryachiy kofe.',
              'She is drinking hot coffee. (кофе indeclinable)',
            ],
            [
              '5',
              'Я слышу странный звук.',
              'Ya slyshu strannyy zvuk.',
              'I hear a strange sound. (inanimate masc.)',
            ],
            [
              '6',
              'Дети любят мороженое.',
              'Deti lyubyat morozhenoye.',
              'Children love ice cream. (neuter)',
            ],
            [
              '7',
              'Я вижу своего брата.',
              'Ya vizhu svoyego brata.',
              'I see my brother. (брат animate → брата)',
            ],
            [
              '8',
              'Она любит своего кота.',
              'Ona lyubit svoyego kota.',
              'She loves her cat. (кот animate)',
            ],
            [
              '9',
              'Врач осматривает пациента.',
              'Vrach osmotrivayet patsienta.',
              'The doctor is examining the patient.',
            ],
            [
              '10',
              'Мы приглашаем всех друзей.',
              'My priglashaem vsekh druzey.',
              'We are inviting all our friends. (animate pl.)',
            ],
            [
              '11',
              'Я встретил старого учителя.',
              'Ya vstretil starogo uchitelya.',
              'I met my old teacher.',
            ],
            [
              '12',
              'Полиция ищет преступника.',
              'Politsiya ishchet prestupnika.',
              'The police are looking for the criminal.',
            ],
            [
              '13',
              'Я иду в супермаркет.',
              'Ya idu v supermarket.',
              'I am going to the supermarket. (в + acc.)',
            ],
            [
              '14',
              'Дети едут на море.',
              'Deti edut na more.',
              'The children are going to the seaside. (на + acc.)',
            ],
            [
              '15',
              'Он положил ключи на стол.',
              'On polozhil klyuchi na stol.',
              'He put the keys on the table.',
            ],
            [
              '16',
              'Мы летим в Санкт-Петербург.',
              'My letim v Sankt-Peterburg.',
              'We are flying to Saint Petersburg.',
            ],
            [
              '17',
              'Она поехала на конференцию.',
              'Ona poyekhala na konferentsiyu.',
              'She went to the conference.',
            ],
            [
              '18',
              'Кот прыгнул под кровать.',
              'Kot prygnul pod krovat.',
              'The cat jumped under the bed. (под + acc.)',
            ],
            [
              '19',
              'Я работал всю ночь.',
              'Ya rabotal vsyu noch.',
              'I worked all night. (всю = acc.)',
            ],
            [
              '20',
              'Встреча в четверг в три часа.',
              'Vstrecha v chetverg v tri chasa.',
              "Meeting on Thursday at three o'clock.",
            ],
            [
              '21',
              'Он вернётся через месяц.',
              'On vernyotsya cherez mesyats.',
              'He will return in a month. (через + acc.)',
            ],
            [
              '22',
              'Я сделал домашнее задание за час.',
              'Ya sdelal domashneye zadaniye za chas.',
              'I did my homework in an hour.',
            ],
            [
              '23',
              'Они не виделись целый год.',
              'Oni ne videlis tselyy god.',
              "They hadn't seen each other for a whole year.",
            ],
            [
              '24',
              'Он рассказал про свою жизнь.',
              'On rasskazal pro svoyu zhizn.',
              'He talked about his life. (про + acc.)',
            ],
            [
              '25',
              'Мы переплыли через реку.',
              'My pereplyli cherez reku.',
              'We swam across the river.',
            ],
            [
              '26',
              'Он споткнулся о порог.',
              'On spotknulsya o porog.',
              'He tripped over the threshold. (о + acc.)',
            ],
            [
              '27',
              'Спустя два часа он позвонил.',
              'Spustya dva chasa on pozvonil.',
              'Two hours later, he called.',
            ],
            [
              '28',
              'Перенеси встречу на пятницу.',
              'Perenesi vstrechu na pyatnitsu.',
              'Reschedule the meeting to Friday.',
            ],
            [
              '29',
              'Я учу русский язык каждый день.',
              'Ya uchu russkiy yazyk kazhdyy den.',
              'I study Russian every day.',
            ],
            [
              '30',
              'Она смотрит на меня.',
              'Ona smotrit na menya.',
              'She is looking at me. (смотреть на + acc.)',
            ],
          ],
        },
      },
      {
        h2: 'Accusative vs. Genitive: How to Tell Them Apart',
        content:
          'Since the accusative animate form equals the genitive for masculine nouns, learners often confuse the two.\n\nHere is a direct comparison:',
        table: {
          caption: 'Accusative vs. genitive comparison',
          boldColumnIndices: [0, 1],
          headers: ['Context', 'Russian example', 'Case explanation'],
          rows: [
            [
              'Direct object (transitive)',
              'Я вижу студента.',
              'ACCUSATIVE animate (= genitive form, but accusative here)',
            ],
            ['Absence (нет)', 'Нет студента.', 'GENITIVE — нет always requires genitive'],
            ['Inanimate direct object', 'Я вижу стол.', 'ACCUSATIVE inanimate (= nominative)'],
            ['Absence inanimate', 'Нет стола.', 'GENITIVE (стол → стола)'],
            ['Direction toward place', 'Я иду в парк.', 'ACCUSATIVE (в + direction)'],
            ['Duration', 'Я работал всю неделю.', 'ACCUSATIVE — всю неделю'],
            ['Quantity / part of', 'Я выпил стакан воды.', 'GENITIVE — воды (a glass of water)'],
          ],
        },
        bullets: [
          '**Key question:** Is the verb transitive (acting on something) → accusative. Or absence, possession, quantity, genitive preposition → genitive.',
        ],
      },
      {
        h2: 'Top 6 Accusative Case Mistakes (And How to Fix Them)',
        bullets: [
          '**Forgetting feminine -а → -у** — Я вижу женщина ✗ → Я вижу женщину ✓',
          '**Treating animate masculine as inanimate** — Я вижу студент ✗ → Я вижу студента ✓',
          '**Using accusative for location** — Я в школу сейчас ✗ → Я в школе сейчас ✓ (location = prepositional)',
          '**Nominative plural for animate plurals** — Я вижу студенты ✗ → Я вижу студентов ✓',
          '**Forgetting adjective agreement** — Я вижу красивый женщину ✗ → Я вижу красивую женщину ✓',
          '**Confusing через and за** — через = in X time (future); за = within X time (to complete something)',
        ],
      },
    ],
    conclusion:
      "The Russian accusative case is essential for everyday communication. Every time you talk about doing something to something — reading a book, seeing a person, going somewhere — you're using the accusative.\n\n**Feminine -А/-Я** always change (-а → -у, -я → -ю). **Masculine inanimate** = no change. **Masculine animate** = genitive form. **В/НА + accusative** = direction | **В/НА + prepositional** = location. **Animate plural** → genitive plural (студентов).",
    conclusionOutro: 'Continue your Russian grammar journey:',
    ctaText: 'Practice Russian cases with our app',
    ctaHref: '/',
    faq: [
      {
        question: 'What is the accusative case used for in Russian?',
        answer:
          'The Russian accusative case marks the **direct object** of transitive verbs (Я читаю книгу), **direction** with в and на (Я иду в школу), **time expressions** (через час, всю ночь), and appears after prepositions like за, через, про, под, сквозь.',
      },
      {
        question: 'How does the animate vs. inanimate distinction work in Russian?',
        answer:
          '**Animate masculine nouns** (people, animals) take the **genitive form** in the accusative (студент → студента). **Inanimate masculine** stay as nominative (стол → стол). Surprising: труп = inanimate; playing cards and chess pieces = animate.',
      },
      {
        question: 'What is the difference between в + accusative and в + prepositional?',
        answer:
          '**в + accusative** = direction (Я иду в школу — I am going to school). **в + prepositional** = location (Я в школе — I am at school). Same for на: на работу (going) vs. на работе (at work).',
      },
      {
        question: 'What are Russian motion verbs?',
        answer:
          'Russian motion verbs: идти/ходить (go on foot), ехать/ездить (go by vehicle), лететь/летать (fly), бежать/бегать (run), плыть/плавать (swim). Each has unidirectional and multidirectional forms. All use **в/на + accusative** for direction.',
      },
      {
        question: 'Does the accusative case change adjectives too?',
        answer:
          'Yes. Adjectives must **agree** with the noun. Feminine accusative: **-ую/-юю** (красивую женщину). Masculine inanimate: stays nominative. Masculine animate: genitive form (красивого студента).',
      },
      {
        question: 'Which Russian verbs take the genitive instead of the accusative?',
        answer:
          'Most transitive verbs take accusative. Exceptions taking **genitive**: бояться, ждать (inanimate), желать, избегать, достигать, лишать. Хотеть can take both: хочу воды (gen., partitive) vs. хочу воду (acc.).',
      },
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Russian Accusative Case: Direct Objects, Animate vs. Inanimate & Motion Verbs',
      description:
        'Complete guide to the Russian accusative case: endings, animate vs. inanimate, motion verbs, в/на, 9 prepositions, 30 examples.',
      datePublished: '2026-03-12',
      dateModified: '2026-03-12',
      author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
      publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://russiandeclensions.com/learn/articles/russian-accusative-case',
      },
      keywords:
        'russian accusative case, russian accusative case endings, animate inanimate russian accusative, russian direct object case, russian motion verbs accusative',
    },
    tableAccentVariant: 'accusative',
  },
  'russian-dative-case': {
    slug: 'russian-dative-case',
    title: 'Russian Dative Case: How to Say "To" and "For" in Russian',
    metaTitle:
      'Russian Dative Case: Rules, Endings, нравиться & 30 Examples | Russian Cases with Anna',
    metaDescription:
      'Complete guide to the Russian dative case: noun endings, adjectives, нравиться construction, age expressions, impersonal constructions, 8 prepositions, 15 verbs, 30 real examples.',
    keywords: [
      'russian dative case',
      'russian dative case endings',
      'мне нравится grammar',
      'russian indirect object',
      'russian dative prepositions к по',
      'how to say to someone in russian',
    ],
    h1: 'Russian Dative Case: How to Say "To" and "For" in Russian',
    heroImage: {
      src: '/articles/free-russian-lesson-dative-case.webp',
      alt: 'Russian dative case: free lesson on how to say to and for in Russian',
      width: 1200,
      height: 630,
    },
    intro:
      'The Russian dative case is one of the most **versatile** — and most fascinating — cases in the Russian language. While its textbook role is to mark the **indirect object** (the recipient of an action), the dative goes far beyond "giving things to people".\n\nIt is the case of **experience**, **sensation**, **age**, **permission**, and personal relevance. If you\'ve ever wondered how to say "I like", "I am cold", "I need", "I am allowed to", or "I am 25 years old" in Russian — the answer in every case involves the **dative**.',
    whatYouLearn: [
      'What the Russian dative case is and its **6 core uses**',
      '**Dative endings** for nouns (all genders, singular & plural)',
      'Dative endings for **adjectives**',
      '**Personal pronouns** in the dative (мне, тебе, ему, ей, нам, вам, им)',
      'The **НРАВИТЬСЯ construction** — how to say "I like" in Russian',
      '**Age expressions** (Мне 25 лет.)',
      '**Impersonal expressions** (нужно, можно, нельзя, холодно, скучно…)',
      '**Prepositions** к, по, благодаря, вопреки…',
      '**15 verbs** that take dative indirect objects',
      '**30 real examples** with transliteration',
      'Dative vs. other cases — how to tell them apart',
    ],
    leadMagnetCta: {
      title: 'Practice Russian dative case exercises on your phone',
      description:
        'Our mobile app drills all 6 Russian cases — with special focus on нравиться, age expressions, impersonal constructions, and indirect objects. Available on Android and iOS.',
      ctaText: 'Download the app and start drilling today',
      ctaHref: '/',
    },
    internalLinks: [
      {
        href: '/learn/lessons/russian-cases-complete-guide',
        label: 'The Complete Guide to Russian Cases',
      },
      {
        href: '/learn/articles/russian-case-endings-cheatsheet',
        label: 'Russian Case Endings: The Ultimate Cheat Sheet',
      },
      {
        href: '/learn/articles/russian-genitive-case',
        label: 'Russian Genitive Case: Rules, Endings & 32 Real Examples',
      },
      {
        href: '/learn/articles/russian-accusative-case',
        label: 'Russian Accusative Case: Direct Objects, Animate vs. Inanimate',
      },
      {
        href: '/learn/lessons/dative-case-declension',
        label: 'How to Decline in the Dative Case in Russian',
      },
    ],
    tableAccentVariant: 'dative',
    sections: [
      {
        h2: 'Quick Answer',
        content: 'The Russian dative case answers **Кому? (To whom?)** and **Чему? (To what?)**.',
        bullets: [
          '**Indirect objects** — the recipient of an action',
          '**Age expressions** — Мне 25 лет (I am 25 years old)',
          '**Experiencer of emotions** — мне нравится (I like), мне холодно (I am cold)',
          '**Required after prepositions** — к (toward) and по (along/according to)',
        ],
      },
      {
        h2: 'What Is the Russian Dative Case?',
        content:
          'The dative case (**Дательный падеж** — from дать, "to give") is the third of the six Russian cases. Its name reflects its original function: it marks the **recipient of giving**.\n\nIn modern Russian, it does far more.',
        subsections: [
          {
            h3: 'The dative case is used for:',
            content: '',
            bullets: [
              '**Indirect objects** — the recipient (Я дал маме цветы — I gave mom flowers)',
              'The **НРАВИТЬСЯ** construction — "to like" (Мне нравится… — I like…)',
              '**Age expressions** (Мне двадцать лет. — I am twenty years old.)',
              '**Impersonal/modal** expressions (Мне нужно, мне можно, мне холодно, мне скучно)',
              'After prepositions **К** (toward) and **ПО** (along/according to/after)',
              'After verbs of communication, help, instruction, belief, envy',
            ],
          },
        ],
      },
      {
        h2: 'Russian Dative Case Endings — Nouns',
        content:
          'The dative is one of the most **regular cases** in Russian.\n\nThe endings follow clear patterns based on gender and stem type:',
        table: {
          caption: 'Dative noun endings — all genders, singular & plural',
          boldColumnIndices: [1, 3],
          headers: ['Noun type', 'Ending', 'Formation', 'Result', 'Example in context'],
          rows: [
            [
              'Masc. hard (consonant)',
              '-у',
              'брат → брат+у',
              'брату',
              'Я дал книгу брату. — I gave the book to my brother.',
            ],
            [
              'Masc. soft (-й)',
              '-ю',
              'музей → музе+ю',
              'музею',
              'Подари это музею. — Donate this to the museum.',
            ],
            [
              'Masc. soft (-ь)',
              '-ю',
              'словарь → словар+ю',
              'словарю',
              'Я доверяю словарю. — I trust the dictionary.',
            ],
            [
              'Fem. hard (-а)',
              '-е',
              'сестра → сестр+е',
              'сестре',
              'Я звоню сестре. — I am calling my sister.',
            ],
            [
              'Fem. soft (-я)',
              '-е',
              'земля → земл+е',
              'земле',
              'Привет земле! — Hello to the earth!',
            ],
            [
              'Fem. in -ия',
              '-ии',
              'станция → станци+и',
              'станции',
              'Иди к станции метро. — Go to the metro station.',
            ],
            [
              'Fem. (-ь)',
              '-и',
              'ночь → ноч+и',
              'ночи',
              'К ночи похолодало. — It got cold by night.',
            ],
            [
              'Neuter (-о) hard',
              '-у',
              'окно → окн+у',
              'окну',
              'Подойди к окну. — Come to the window.',
            ],
            [
              'Neuter (-е) soft',
              '-ю',
              'море → мор+ю',
              'морю',
              'Мы едем к морю. — We are going to the sea.',
            ],
            [
              'Neuter (-ие)',
              '-ию',
              'здание → здани+ю',
              'зданию',
              'Иди к зданию. — Go to the building.',
            ],
            [
              'Masc./Neuter plural',
              '-ам/-ям',
              'братья → брать+ям',
              'братьям',
              'Я помогаю братьям. — I help my brothers.',
            ],
            [
              'Fem. plural',
              '-ам/-ям',
              'сёстры → сёстр+ам',
              'сёстрам',
              'Я пишу сёстрам. — I am writing to my sisters.',
            ],
          ],
        },
        bullets: [
          '**Masc. & Neuter (hard stem)** — -У: брат→брату, окно→окну',
          '**Masc. & Neuter (soft stem)** — -Ю: музей→музею, море→морю',
          '**Feminine -а** — -Е: сестра→сестре',
          '**Feminine -я** — -Е: земля→земле',
          '**Feminine -ия** — -ИИ: станция→станции',
          '**Feminine -ь** — -И: ночь→ночи',
          '**Plural (hard stem)** — -АМ: братья→братьям',
          '**Plural (soft stem)** — -ЯМ: сёстры→сёстрам',
        ],
      },
      {
        h2: 'Russian Dative Case Endings — Adjectives',
        content:
          'Adjectives must **agree** with their noun in gender, number, and case.\n\nIn the dative:',
        bullets: [
          '**Masc./Neuter hard** → -ому (новый → новому брату)',
          '**Masc./Neuter soft** → -ему (синий → синему морю)',
          '**Feminine hard** → -ой (красивая → красивой подруге)',
          '**Feminine soft** → -ей (летняя → летней школе)',
          '**Plural (all genders)** → -ым/-им (новые → новым студентам)',
          '**Example:** Я пишу **старому другу** — I am writing to my old friend.',
        ],
        table: {
          caption: '5 adjective forms with full sentence examples',
          boldColumnIndices: [1],
          headers: ['Gender/Number', 'Ending', 'Example form', 'Meaning', 'Sentence'],
          rows: [
            [
              'Masc./Neuter hard',
              '-ому',
              'новый → новому брату',
              'new brother (dat.)',
              'Я помогаю новому брату.',
            ],
            [
              'Masc./Neuter soft',
              '-ему',
              'синий → синему морю',
              'blue sea (dat.)',
              'Мы едем к синему морю.',
            ],
            [
              'Fem. hard',
              '-ой',
              'красивая → красивой',
              'beautiful (dat.)',
              'Я звоню красивой подруге.',
            ],
            ['Fem. soft', '-ей', 'летняя → летней', 'summer (dat.)', 'В летней школе нравится.'],
            [
              'Plural all genders',
              '-ым/-им',
              'новые → новым',
              'new ones (dat. pl.)',
              'Помоги новым студентам.',
            ],
          ],
        },
      },
      {
        h2: 'Personal Pronouns in the Dative Case',
        content:
          "Personal pronouns have **unique dative forms** that must be memorized.\n\nThese are among the most frequently used words — you'll need them for нравиться, age expressions, and impersonal sentences.",
        table: {
          caption: '7 forms with нравится examples',
          boldColumnIndices: [0, 1, 2, 3, 4, 5, 6],
          headers: [
            'я (I)',
            'ты (you)',
            'он/оно (he/it)',
            'она (she)',
            'мы (we)',
            'вы (you pl.)',
            'они (they)',
          ],
          rows: [
            ['мне', 'тебе', 'ему', 'ей', 'нам', 'вам', 'им'],
            [
              'Мне нравится.',
              'Тебе нравится.',
              'Ему нравится.',
              'Ей нравится.',
              'Нам нравится.',
              'Вам нравится.',
              'Им нравится.',
            ],
          ],
        },
        bullets: [
          '**After к:** к нему, к ней, к ним (add Н- to third-person pronouns)',
          '**After по:** по нему, по ней (add Н- to third-person pronouns)',
          '**Never:** к ему, к ей — always add the Н- prefix',
        ],
      },
      {
        h2: 'The НРАВИТЬСЯ Construction: How to Say "I Like" in Russian',
        content:
          'The most important use of the dative is **нравиться** (to like / to please). In English: subject LIKES object.\n\nIn Russian: **object PLEASES dative person** → Мне нравится музыка. (Music pleases me.)',
        subsections: [
          {
            h3: 'The #1 mistake with нравиться',
            content:
              'The verb **НРАВИТЬСЯ** agrees with the **SUBJECT** (the thing that is liked), not the person. Мне **нравится** музыка. (singular) Мне **нравятся** фильмы. (plural) The person goes in the **DATIVE** — never nominative! ✗ Я нравится музыка. ✓ Мне нравится музыка.',
          },
        ],
        table: {
          caption: '10 forms: present, past, future, negation',
          boldColumnIndices: [1],
          headers: ['English', 'Russian (нравиться)', 'Notes'],
          rows: [
            ['I like', 'Мне нравится музыка.', 'нравится agrees with музыка — singular'],
            ['You like', 'Тебе нравятся фильмы.', 'нравятся agrees with фильмы — plural'],
            ['He likes', 'Ему нравится эта книга.', 'He likes this book.'],
            ['She likes', 'Ей нравится твой голос.', 'She likes your voice.'],
            ['We like', 'Нам нравится здесь.', 'здесь = here, no subject noun'],
            ['You (pl.) like', 'Вам нравятся эти места.', 'You like these places.'],
            ['They like', 'Им нравится русский язык.', 'They like the Russian language.'],
            ['I liked', 'Мне понравился фильм.', 'perfective past, masc. agreement'],
            ['I will like', 'Мне понравится этот город.', 'future perfective'],
            ["I don't like", 'Мне не нравится шум.', 'negation: не + нравится'],
          ],
        },
        bullets: [
          '**Нравиться** = spontaneous appreciation. **Любить** = deeper, habitual love. Both common. Нравиться more neutral; любить stronger.',
        ],
      },
      {
        h2: 'Age Expressions: How to Say How Old Someone Is in Russian',
        image: {
          src: '/articles/how-to-say-your-age-in-russian-grammar-rule-table.webp',
          alt: 'Grammar rule table: how to say your age in Russian (dative case)',
          width: 1200,
          height: 630,
        },
        content:
          'Russian expresses age using the **dative case**: [Person in dative] + [number] + [год/года/лет].',
        bullets: [
          '**1 year** → год (Мне один год. — I am one year old.)',
          '**2–4 years** → года (Мне два года. Тебе четыре года.)',
          '**5+ years** → лет (Мне двадцать пять лет. — I am 25 years old.)',
          '**Birthdays:** Ивану исполнилось тридцать лет. — Ivan turned 30. Когда тебе исполнится восемнадцать? — When will you turn 18?',
        ],
        table: {
          caption: '9 examples covering 1/2-4/5+ + questions and birthdays',
          boldColumnIndices: [1],
          headers: ['English', 'Russian', 'Grammar note'],
          rows: [
            ['I am 10 years old', 'Мне десять лет.', 'Мне (dative of я) + 10 + лет'],
            ['You are 25 years old', 'Тебе двадцать пять лет.', 'Тебе (dative of ты)'],
            ['He is 30 years old', 'Ему тридцать лет.', 'Ему (dative of он)'],
            ['She is 18 years old', 'Ей восемнадцать лет.', 'Ей (dative of она)'],
            ['We are 40 years old', 'Нам сорок лет.', 'Нам (dative of мы)'],
            ['Ivan is 2 years old', 'Ивану два года.', 'Ивану + 2 + года (gen. sg. after 2)'],
            ['Anna is 5 years old', 'Анне пять лет.', 'Анне + 5 + лет (gen. pl.)'],
            ['The cat is 3 years old', 'Коту три года.', 'Works for animals too!'],
            ['How old are you?', 'Сколько тебе лет?', 'Сколько + dative pronoun + лет'],
          ],
        },
      },
      {
        h2: 'Impersonal and Modal Expressions with the Dative',
        content:
          'Some of the most common everyday Russian expressions use the **dative** to mark the person who experiences a state, feeling, or obligation.\n\nThese are **impersonal constructions** — no grammatical subject.',
        bullets: [
          '**Obligation / permission** — мне нужно (I need), тебе можно (you may), ему нельзя (he must not)',
          '**Physical sensations** — мне холодно (I am cold), мне жарко (I am hot)',
          '**Emotions / states** — ей скучно (she is bored), ему грустно (he is sad), нам весело (we have fun)',
          '**Difficulty / evaluation** — ей трудно (it is hard for her), мне лучше (I feel better)',
          '**Pattern:** [Person in dative] + [predicative word] + [optional infinitive] — Мне нужно купить продукты. Тебе можно отдохнуть. Ему нельзя курить.',
        ],
        table: {
          caption: '12 constructions: нужно, можно, нельзя, etc.',
          boldColumnIndices: [0, 1],
          headers: ['Expression', 'Russian example', 'Translation', 'Grammar note'],
          rows: [
            ['нужно / надо', 'Мне нужно работать.', 'I need to work.', 'Dative = person who needs'],
            ['можно', 'Тебе можно идти.', 'You may go.', 'Dative = person who is allowed'],
            [
              'нельзя',
              'Ему нельзя есть сахар.',
              'He must not eat sugar.',
              'Dative = person forbidden',
            ],
            [
              'нужен/нужна/нужно',
              'Мне нужна помощь.',
              'I need help.',
              'Agrees with the needed thing',
            ],
            ['интересно', 'Мне интересно.', 'I find it interesting.', 'Dative = interested person'],
            ['скучно', 'Ей скучно на уроке.', 'She is bored in class.', 'Dative = bored one'],
            ['весело', 'Нам было весело.', 'We had fun.', 'Past: было + dative'],
            ['грустно', 'Ему грустно без тебя.', 'He is sad without you.', 'Emotional state'],
            ['холодно / жарко', 'Мне холодно.', 'I am cold.', 'Physical sensation'],
            ['стыдно', 'Мне стыдно за тебя.', 'I am ashamed of you.', 'Dative experiencer'],
            ['трудно', 'Ей трудно учиться.', 'It is hard for her to study.', 'Difficulty'],
            ['лучше / хуже', 'Мне лучше сегодня.', 'I feel better today.', 'Health/state'],
          ],
        },
      },
      {
        h2: 'Dative Case Prepositions: К and ПО (and Others)',
        content:
          'Two major Russian prepositions always require the **dative case**: **к** and **по**.\n\nSeveral others also take the dative:',
        table: {
          caption: '8 prepositions with meaning and full examples',
          boldColumnIndices: [0],
          headers: ['Prep.', 'Meaning', 'With a noun', 'Full example + translation'],
          rows: [
            [
              'к',
              'toward / to (person or place)',
              'к другу, к врачу, к окну',
              'Иди к врачу! — Go to the doctor!',
            ],
            [
              'по',
              'along / around / according to / by',
              'по улице, по правилам, по почте',
              'Мы гуляли по парку. — We walked around the park.',
            ],
            [
              'благодаря',
              'thanks to (positive)',
              'благодаря тебе',
              'Благодаря тебе всё получилось! — Thanks to you!',
            ],
            [
              'вопреки',
              'contrary to / despite',
              'вопреки правилам',
              'Вопреки прогнозу, погода была хорошей.',
            ],
            [
              'согласно',
              'according to (formal)',
              'согласно закону',
              'Согласно закону, это запрещено.',
            ],
            [
              'навстречу',
              'toward / to meet',
              'навстречу ветру',
              'Она шла навстречу ветру. — She walked into the wind.',
            ],
            [
              'наперекор',
              'in defiance of',
              'наперекор судьбе',
              'Наперекор судьбе он добился успеха.',
            ],
            [
              'подобно',
              'similar to / like (literary)',
              'подобно птице',
              'Подобно птице, он был свободен.',
            ],
          ],
        },
        subsections: [
          {
            h3: 'К (Toward / To) — Direction Preposition',
            content:
              '**К** expresses movement toward a person, place, or goal. It is the dative equivalent of в/на for direction — but **к** is used when moving **toward a person or object**, not into an enclosed space.\n\nИди к врачу. Подойди к доске. Мы стремимся к цели.',
          },
          {
            h3: 'ПО — The Multi-Purpose Preposition',
            content:
              '**По** is one of the most versatile prepositions in Russian. With the dative:',
            bullets: [
              '**Movement along** — гулять по парку (to walk around the park)',
              '**Distribution** — по одному яблоку (one apple each)',
              '**Means / channel** — по телефону, по почте (by phone, by mail)',
              '**Subject / topic** — урок по математике (math lesson)',
              '**Recurring time** — по понедельникам (on Mondays, every Monday)',
              '**According to** — по закону (according to the law)',
              '**По + dative plural** = every [day]: по понедельникам — on Mondays | в понедельник — on (a specific) Monday',
            ],
          },
        ],
      },
      {
        h2: '15 Essential Verbs That Take the Dative Case',
        content:
          'These verbs take their **indirect object in the dative**. Essential to learn with their dative object.',
        bullets: [
          '**Giving & transferring** — давать/дать (to give), показывать (to show)',
          '**Communication** — говорить/сказать (to tell), писать (to write), звонить (to call), объяснять (to explain), отвечать (to answer)',
          '**Help & permission** — помогать (to help), разрешать (to allow), советовать (to advise)',
          '**Feelings & states** — нравиться (to like), верить (to believe), завидовать (to envy), мешать (to bother)',
          '**Possession** — принадлежать (to belong to)',
        ],
        table: {
          caption: '15 verbs with examples and notes',
          boldColumnIndices: [0],
          headers: ['Verb', 'Example', 'Translation', 'Note'],
          rows: [
            ['давать / дать', 'Я дал ему книгу.', 'I gave him a book.', 'Classic indirect object'],
            ['говорить / сказать', 'Скажи мне правду.', 'Tell me the truth.', 'Telling to someone'],
            [
              'писать / написать',
              'Я написал тебе письмо.',
              'I wrote you a letter.',
              'Writing to someone',
            ],
            ['звонить / позвонить', 'Позвони маме.', 'Call your mother.', 'Calling someone'],
            ['помогать / помочь', 'Помоги мне!', 'Help me!', 'Helping someone'],
            [
              'нравиться / понравиться',
              'Мне нравится музыка.',
              'I like music.',
              'Dative = experiencer',
            ],
            [
              'показывать / показать',
              'Покажи мне карту.',
              'Show me the map.',
              'Showing to someone',
            ],
            [
              'объяснять / объяснить',
              'Объясни мне это.',
              'Explain this to me.',
              'Explaining to someone',
            ],
            [
              'отвечать / ответить',
              'Ответь мне на вопрос.',
              'Answer my question.',
              'Answering to someone',
            ],
            [
              'разрешать / разрешить',
              'Разреши мне уйти.',
              'Allow me to leave.',
              'Giving permission',
            ],
            ['мешать / помешать', 'Не мешай мне!', "Don't bother me!", 'Disturbing someone'],
            ['советовать', 'Советую тебе поехать.', 'I advise you to go.', 'Giving advice'],
            ['верить / поверить', 'Я верю тебе.', 'I believe you.', 'Trusting someone'],
            ['завидовать', 'Он завидует другу.', 'He envies his friend.', 'Feeling envy'],
            ['принадлежать', 'Это принадлежит мне.', 'This belongs to me.', 'Belonging to someone'],
          ],
        },
      },
      {
        h2: '30 Real Russian Dative Case Examples',
        content:
          'Below are **30 authentic sentences** demonstrating every major use of the dative.',
        bullets: [
          '**1–6:** Indirect objects (giving, telling, helping, etc.)',
          '**7–10:** Нравиться construction',
          '**11–13:** Age expressions',
          '**14–19:** Prepositions (к, навстречу, благодаря, вопреки, по)',
          '**20–26:** Impersonal expressions (нужно, можно, холодно, скучно…)',
          '**27–30:** Other verbs (советовать, завидовать, верить, желать)',
        ],
        table: {
          caption: '30 examples grouped by usage',
          boldColumnIndices: [1],
          headers: ['#', 'Russian', 'Transliteration', 'Translation & notes'],
          rows: [
            [
              '1',
              'Я дал маме цветы.',
              'Ya dal mame tsvety.',
              'I gave flowers to my mother. (мама → маме)',
            ],
            [
              '2',
              'Скажи мне правду.',
              'Skazhi mne pravdu.',
              'Tell me the truth. (мне = dative of я)',
            ],
            [
              '3',
              'Он написал другу длинное письмо.',
              'On napisal drugu dlinnoye pismo.',
              'He wrote a long letter to his friend.',
            ],
            ['4', 'Помогите мне, пожалуйста!', 'Pomogite mne, pozhaluysta!', 'Please help me!'],
            [
              '5',
              'Я позвонила бабушке.',
              'Ya pozvonila babushke.',
              'I called my grandmother. (бабушка → бабушке)',
            ],
            [
              '6',
              'Преподаватель объяснил нам грамматику.',
              'Prepodavatel obyasnil nam grammatiku.',
              'The teacher explained grammar to us.',
            ],
            [
              '7',
              'Мне нравится русская музыка.',
              'Mne nravitsya russkaya muzyka.',
              'I like Russian music. (мне = experiencer)',
            ],
            [
              '8',
              'Тебе понравился фильм?',
              'Tebe ponravilsya film?',
              'Did you like the film? (понравился agrees with фильм)',
            ],
            [
              '9',
              'Ей не нравятся эти правила.',
              'Ey ne nravyatsya eti pravila.',
              "She doesn't like these rules.",
            ],
            [
              '10',
              'Нам понравилась Москва.',
              'Nam ponravilas Moskva.',
              'We liked Moscow. (понравилась agrees with Москва)',
            ],
            ['11', 'Мне двадцать три года.', 'Mne dvadtsat tri goda.', 'I am 23 years old.'],
            [
              '12',
              'Брату исполнилось пять лет.',
              'Bratu ispolnilos pyat let.',
              'My brother turned five.',
            ],
            ['13', 'Сколько лет вашей маме?', 'Skolko let vashey mame?', 'How old is your mother?'],
            [
              '14',
              'Иди к врачу немедленно!',
              'Idi k vrachu nemedlenno!',
              'Go to the doctor! (к + dat.)',
            ],
            [
              '15',
              'Мы подошли к морю на закате.',
              'My podoshli k moryu na zakate.',
              'We came to the sea at sunset.',
            ],
            [
              '16',
              'Она шла навстречу судьбе.',
              'Ona shla navstrechu sudbe.',
              'She walked toward her destiny.',
            ],
            [
              '17',
              'Благодаря вам проект удался.',
              'Blagodarya vam proyekt udalsya.',
              'Thanks to you, the project succeeded.',
            ],
            [
              '18',
              'Вопреки ожиданиям, всё получилось.',
              'Vopreki ozhidaniyam, vsyo poluchilos.',
              'Contrary to expectations.',
            ],
            [
              '19',
              'По правилам, это запрещено.',
              'Po pravilam, eto zapreshcheno.',
              'According to the rules.',
            ],
            [
              '20',
              'Мне нужно поговорить с тобой.',
              'Mne nuzhno pogovorit s toboy.',
              'I need to talk to you.',
            ],
            ['21', 'Тебе можно идти домой.', 'Tebe mozhno iti domoy.', 'You may go home.'],
            ['22', 'Ему нельзя пить кофе.', 'Emu nelzya pit kofe.', 'He must not drink coffee.'],
            [
              '23',
              'Мне холодно, закрой окно.',
              'Mne holodno, zakroy okno.',
              'I am cold, close the window.',
            ],
            [
              '24',
              'Ей скучно одной дома.',
              'Ey skuchno odnoy doma.',
              'She is bored at home alone.',
            ],
            [
              '25',
              'Нам было очень весело на вечеринке.',
              'Nam bylo ochen veselo na vecherinke.',
              'We had a great time at the party.',
            ],
            [
              '26',
              'Мне стыдно за своё поведение.',
              'Mne stydno za svoyo povedeniye.',
              'I am ashamed of my behavior.',
            ],
            [
              '27',
              'Советую вам прочитать эту книгу.',
              'Sovetuyu vam prochitat etu knigu.',
              'I advise you to read this book.',
            ],
            [
              '28',
              'Он завидует нашему успеху.',
              'On zaviduyet nashemu uspekhu.',
              'He envies our success.',
            ],
            [
              '29',
              'Я верю каждому его слову.',
              'Ya veryu kazhdomu yego slovu.',
              'I believe his every word.',
            ],
            [
              '30',
              'Желаю вам счастья и здоровья!',
              'Zhelayu vam schastya i zdorovya!',
              'I wish you happiness and health!',
            ],
          ],
        },
      },
      {
        h2: 'Dative vs. Other Cases: How to Tell Them Apart',
        content:
          'The dative is sometimes confused with the **genitive** (possession) and **accusative** (direct objects).\n\nThis table will help:',
        table: {
          caption: 'Dative vs. other cases comparison',
          boldColumnIndices: [0, 1],
          headers: ['Context', 'Russian example', 'Case explanation'],
          rows: [
            [
              'Indirect object → Dative',
              'Я дал книгу другу.',
              'DATIVE: другу (to a friend). Book given TO the friend.',
            ],
            [
              'Direct object → Accusative',
              'Я купил книгу.',
              'ACCUSATIVE: книгу (the book itself).',
            ],
            ['Possession → Genitive', 'Это книга друга.', "GENITIVE: друга (the friend's book)."],
            [
              'Liking (нравиться) → Dative',
              'Мне нравится книга.',
              'DATIVE: мне. Do NOT use я here.',
            ],
            [
              'Need (нужен) → Dative',
              'Мне нужна эта книга.',
              'DATIVE: мне (I am the one who needs it).',
            ],
            ['Direction к → Dative', 'Иди к другу.', 'DATIVE after к: другу (toward the friend).'],
            [
              'Location у → Genitive',
              'Я у друга.',
              "GENITIVE after у: друга (at the friend's place).",
            ],
            ['Age expression → Dative', 'Другу двадцать лет.', 'DATIVE: другу (the friend is 20).'],
          ],
        },
        bullets: [
          '**Key question:** Is the noun the **RECEIVER** of an action (→ dative)? Or OWNED (→ genitive), ACTED UPON (→ accusative), or LOCATION (→ prepositional)?',
        ],
      },
      {
        h2: 'Top 6 Dative Case Mistakes (And How to Fix Them)',
        bullets: [
          '**Using nominative for the "liker"** — Я нравится музыка ✗ → Мне нравится музыка ✓',
          '**Verb agreement with нравиться** — Мне нравится фильмы ✗ → Мне нравятся фильмы ✓ (agrees with subject)',
          '**Wrong pronoun after preposition** — к ей ✗ → к ней ✓ (add Н- to third-person pronouns)',
          '**Confusing к with в/на** — Иди к школу ✗ → Иди в школу ✓ (к = toward person/object; в = into space)',
          '**Forgetting -ии for -ия nouns** — к станце ✗ → к станции ✓ (станция → станции)',
          '**нужен agreement** — Мне нужен помощь ✗ → Мне нужна помощь ✓ (agrees with the THING needed)',
        ],
      },
    ],
    conclusion: 'The Russian dative case is far richer than "the giving case" suggests.',
    conclusionBullets: [
      '**Uses:** indirect object, experiencer of нравиться, age, impersonal expressions (мне нужно, мне холодно), after prepositions к and по',
      '**Noun endings:** Masc./Neut. hard→-У, soft→-Ю | Fem. -а/-я→-Е, -ия→-ИИ, -ь→-И | Plural hard→-АМ, soft→-ЯМ',
      '**Personal pronouns:** мне, тебе, ему, ей, нам, вам, им',
      '**НРАВИТЬСЯ:** person in dative; verb agrees with thing liked',
      '**Age:** [dative] + number + год/года/лет',
      '**After prepositions:** add Н- to third-person pronouns (к нему, к ней, к ним)',
    ],
    conclusionOutro: 'Continue with the rest of our Russian grammar series:',
    ctaText: 'Practice Russian cases with our app',
    ctaHref: '/',
    faq: [
      {
        question: 'What is the dative case used for in Russian?',
        answer:
          'The Russian dative case is used for: **indirect objects** (Я дал маме цветы), the **нравиться** construction (Мне нравится — I like), **age expressions** (Мне 25 лет), **impersonal expressions** (Мне нужно, Мне холодно), and after prepositions **к** (toward) and **по** (along/according to).',
      },
      {
        question: 'How do you say "I like" in Russian?',
        answer:
          'Use [person in dative] + нравится/нравятся + [subject]. Мне нравится музыка (Music appeals to me = I like music). **Нравится** for singular, **нравятся** for plural. For stronger preference: Я люблю классическую музыку.',
      },
      {
        question: 'How do you express age in Russian?',
        answer:
          '[Person in dative] + [number] + год/года/лет. один год (1), два/три/четыре года (2-4), пять лет (5+). Мне двадцать пять лет. To ask: Сколько тебе лет?',
      },
      {
        question: 'What is the difference between к and в/на for direction?',
        answer:
          '**К + dative** = toward a person or object: Иди к врачу. **В/НА + accusative** = into/onto a place: Иди в магазин. К is for people/objects; в/на for locations and spaces.',
      },
      {
        question: 'What does по mean in Russian?',
        answer:
          '**По** with dative expresses: movement along (гулять по парку), distribution (по одному), means (по телефону), subject (урок по математике), recurring time (по понедельникам), conformity (по закону).',
      },
      {
        question: 'Which verbs take the dative case in Russian?',
        answer:
          'давать/дать, говорить/сказать, писать, звонить, помогать, показывать, объяснять, советовать, верить, завидовать, мешать, принадлежать. **Нравиться** takes the experiencer in the dative.',
      },
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Russian Dative Case: How to Say "To" and "For" in Russian',
      description:
        'Complete guide to the Russian dative case: noun endings, нравиться, age expressions, impersonal constructions, 8 prepositions, 15 verbs, 30 examples.',
      datePublished: '2026-03-12',
      dateModified: '2026-03-12',
      author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
      publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://russiandeclensions.com/learn/articles/russian-dative-case',
      },
      keywords:
        'russian dative case, russian dative case endings, мне нравится grammar, russian indirect object',
    },
  },
  'russian-instrumental-case': {
    slug: 'russian-instrumental-case',
    title: "Russian Instrumental Case: When to Use It and Why It's Easier Than You Think",
    metaTitle:
      'Russian Instrumental Case: Endings, Professions, с + Instrumental, 30 Examples | Russian Cases with Anna',
    metaDescription:
      'Complete guide to the Russian instrumental case: noun endings, adjectives, professions (быть/стать/работать), с + instrumental, spatial prepositions (за/перед/над/под), time expressions, 15 verbs, 30 real examples.',
    keywords: [
      'russian instrumental case',
      'russian instrumental case endings',
      'с + instrumental russian',
      'russian instrumental prepositions',
      'быть стать работать instrumental',
      'russian instrumental professions',
    ],
    h1: "Russian Instrumental Case: When to Use It and Why It's Easier Than You Think",
    heroImage: {
      src: '/articles/free-russian-lesson-instrumental-case.webp',
      alt: 'Free Russian lesson on the instrumental case: professions, с + instrumental, and more',
      width: 1200,
      height: 630,
    },
    intro:
      'Of all the Russian cases, the instrumental has a reputation for being intimidating. Learners see endings like **-ом**, **-ей**, **-ью**, **-ями** and feel overwhelmed.\n\nBut the **instrumental case** has some of the most regular, predictable endings in Russian — and once you understand its core uses, it becomes one of the more logical cases to work with. This guide will demystify it completely.',
    whatYouLearn: [
      'What the instrumental case is and its **6 core uses**',
      '**Instrumental endings** for nouns — all genders, singular & plural',
      'Instrumental endings for **adjectives**',
      '**Professions and roles** with the instrumental (работать врачом, стать учителем)',
      '**С + instrumental** — how to say "with" in Russian',
      'All prepositions that require the instrumental (**за, перед, над, под, между**)',
      '**Time expressions** with the instrumental (утром, летом, ночью)',
      '**15 key verbs** that take the instrumental',
      '**30 real Russian example sentences** with transliteration',
    ],
    leadMagnetCta: {
      title: 'Practice Russian instrumental case exercises on your phone',
      description:
        'Our mobile app drills all 6 Russian cases — with special focus on professions, с + instrumental, spatial prepositions, and reflexive verbs. Available on Android and iOS.',
      ctaText: 'Download the app and start drilling today',
      ctaHref: '/',
    },
    internalLinks: [
      {
        href: '/learn/lessons/russian-cases-complete-guide',
        label: 'The Complete Guide to Russian Cases',
      },
      {
        href: '/learn/articles/russian-case-endings-cheatsheet',
        label: 'Russian Case Endings: The Ultimate Cheat Sheet',
      },
      { href: '/learn/articles/russian-genitive-case', label: 'Russian Genitive Case' },
      { href: '/learn/articles/russian-accusative-case', label: 'Russian Accusative Case' },
      { href: '/learn/articles/russian-dative-case', label: 'Russian Dative Case' },
    ],
    tableAccentVariant: 'instrumental',
    sections: [
      {
        h2: 'Quick Answer',
        content:
          'The instrumental case answers **Кем? (By whom?)** and **Чем? (By what? / With what?)**.\n\nIt is used for instruments and means, accompaniment (with **с**), professions and roles (after **быть/стать**), and is required by several important prepositions (**за**, **перед**, **над**, **под**, **между**).',
      },
      {
        h2: 'What Is the Russian Instrumental Case?',
        content:
          'The instrumental case (**Творительный падеж** — from творить, "to create/do") is the fifth of the six Russian cases. Its name reveals its original purpose: marking the **instrument or tool** by which an action is performed.\n\nCore example: **Он пишет ручкой.** — He writes with a pen. (ручка → ручкой — the pen is the instrument)',
        subsections: [
          {
            h3: 'The instrumental case is used for:',
            content: '',
            bullets: [
              '**Instrument or means** of action (писать ручкой — to write with a pen)',
              '**Accompaniment** with С (идти с другом — to go with a friend)',
              '**Profession or role** after быть/стать/работать (быть врачом — to be a doctor)',
              '**Time expressions** (утром — in the morning, летом — in summer, ночью — at night)',
              '**Spatial position** after за, перед, над, под, между (за столом — at the table)',
              '**Verbs of reflexive engagement** (заниматься, интересоваться, гордиться…)',
            ],
          },
        ],
      },
      {
        h2: 'Russian Instrumental Case Endings — Nouns',
        content:
          'Here is the complete table of instrumental endings for Russian nouns.\n\nThe patterns are **consistent**, and the plural is the same for all genders (**-ами/-ями**).',
        image: {
          src: '/articles/instrumental-case-russian-noun-endings-declension-table.webp',
          alt: 'Instrumental case declension table: Russian noun endings by gender',
          width: 1200,
          height: 630,
        },
        table: {
          caption: 'Instrumental noun endings — all genders, singular & plural',
          boldColumnIndices: [1, 3],
          headers: ['Noun type', 'Ending', 'Formation', 'Result', 'Example in context'],
          rows: [
            [
              'Masc. hard (consonant)',
              '-ом',
              'стол → стол+ом',
              'столом',
              'Он пишет карандашом. — He writes with a pencil.',
            ],
            [
              'Masc. soft (-й)',
              '-ем',
              'музей → музе+ем',
              'музеем',
              'перед музеем — in front of the museum',
            ],
            [
              'Masc. soft (-ь)',
              '-ем',
              'словарь → словар+ём',
              'словарём',
              'Он машет словарём. — He waves the dictionary.',
            ],
            [
              'Masc. after ж/ш/щ/ч/ц',
              '-ем (unstressed)',
              'врач → врач+ом',
              'врачом',
              'Он работает врачом. — He works as a doctor.',
            ],
            [
              'Fem. hard (-а)',
              '-ой / -ею',
              'женщина → женщин+ой',
              'женщиной',
              'с красивой женщиной — with a beautiful woman',
            ],
            [
              'Fem. soft (-я)',
              '-ей / -ею',
              'земля → земл+ёй',
              'землёй',
              'под землёй — under the ground',
            ],
            ['Fem. (-ь)', '-ью', 'ночь → ноч+ью', 'ночью', 'ночью — at night / by night'],
            ['Neuter hard (-о)', '-ом', 'окно → окн+ом', 'окном', 'за окном — outside the window'],
            [
              'Neuter soft (-е)',
              '-ем',
              'море → мор+ем',
              'морем',
              'за морем — overseas / beyond the sea',
            ],
            [
              'Plural (hard)',
              '-ами',
              'столы → стол+ами',
              'столами',
              'между столами — between the tables',
            ],
            ['Plural (soft)', '-ями', 'моря → мор+ями', 'морями', 'над морями — above the seas'],
          ],
        },
        bullets: [
          '**Masculine & Neuter (hard stem)** — -ОМ: стол→столом, окно→окном',
          '**Masculine & Neuter (soft stem)** — -ЕМ/-ЁМ: музей→музеем, море→морем',
          '**Feminine -а** — -ОЙ: женщина→женщиной',
          '**Feminine -я** — -ЕЙ: земля→землёй',
          '**Feminine -ь** — -ЬЮ: ночь→ночью (unique to instrumental!)',
          '**Plural (hard stem)** — -АМИ: столы→столами',
          '**Plural (soft stem)** — -ЯМИ: моря→морями',
        ],
      },
      {
        h2: 'Russian Instrumental Case Endings — Adjectives',
        content:
          'Adjectives agree with their noun in gender, number, and case.\n\nIn the instrumental, the endings are **distinctive and consistent**:',
        table: {
          caption: 'Adjective instrumental endings',
          boldColumnIndices: [1, 2],
          headers: ['Gender/Number', 'Ending', 'Adj. form', 'Full phrase', 'Meaning'],
          rows: [
            ['Masc./Neuter hard', '-ым', 'новый → новым', 'новым другом', 'with a new friend'],
            ['Masc./Neuter soft', '-им', 'синий → синим', 'синим морем', 'with the blue sea'],
            [
              'Feminine hard',
              '-ой / -ою',
              'красивая → красивой',
              'с красивой девушкой',
              'with a beautiful girl',
            ],
            ['Feminine soft', '-ей', 'летняя → летней', 'летней ночью', 'on a summer night'],
            [
              'Plural all genders',
              '-ыми / -ими',
              'новые → новыми',
              'новыми словами',
              'with new words',
            ],
          ],
        },
        bullets: [
          '**Full phrase example:** Я горжусь умным сыном — I am proud of my intelligent son. (умным = masc. instr. adj.; сыном = masc. instr. noun)',
        ],
      },
      {
        h2: 'Professions and Roles with the Instrumental',
        content:
          'One of the most distinctive uses of the Russian instrumental case is to express a person\'s **profession, role, or status** — especially after the verbs **быть** (to be), **стать** (to become), **работать** (to work as), and **назначить** (to appoint).\n\nIn English we say "He is a doctor". In Russian, the predicate noun goes into the instrumental: **Он был врачом** (He was a doctor — instrumental required).',
        subsections: [
          {
            h3: 'Present vs. past/future tense rule',
            content: '',
            bullets: [
              '**Present** with omitted быть: nominative is common (Он — врач. / Она — учитель.)',
              '**Past** (был/была): instrumental is **required** (Он был врачом. / Она была учителем.)',
              '**Future** (будет): instrumental is **required** (Он будет врачом.)',
              'After **стать**: always instrumental (Она стала врачом.)',
              'After **работать**: always instrumental (Он работает врачом.)',
            ],
          },
        ],
        table: {
          caption: 'Professions with instrumental',
          boldColumnIndices: [1],
          headers: ['Profession (nominative)', 'Russian sentence', 'Translation', 'Grammar note'],
          rows: [
            ['врач (doctor)', 'Он работает врачом.', 'He works as a doctor.', 'Masc. → -ом'],
            [
              'учитель (teacher)',
              'Она работает учительницей.',
              'She works as a teacher.',
              'Fem. profession → -ей',
            ],
            [
              'инженер (engineer)',
              'Мой брат — инженером.',
              'My brother is an engineer.',
              'Predicate with быть → instrumental',
            ],
            [
              'переводчик (translator)',
              'Она стала переводчиком.',
              'She became a translator.',
              'Стать + instrumental',
            ],
            [
              'президент (president)',
              'Он был президентом.',
              'He was president.',
              'Быть in past + instrumental',
            ],
            [
              'директор (director)',
              'Её назначили директором.',
              'She was appointed director.',
              'Назначить + instrumental',
            ],
          ],
        },
      },
      {
        h2: 'С + Instrumental: How to Say "With" in Russian',
        content:
          'The preposition **с** (with) followed by the instrumental case is one of the most common constructions in Russian.\n\nIt expresses **accompaniment** — doing something together with someone or something.',
        subsections: [
          {
            h3: 'Examples',
            content:
              'Я иду с другом. — I am going with a friend. | Выпей чай с лимоном. — Drink tea with lemon. | Мы живём с родителями. — We live with our parents.\n\nКофе с молоком. — Coffee with milk. | Бутерброд с сыром. — A sandwich with cheese.',
          },
          {
            h3: 'С vs. СО — when to use which',
            content: '',
            bullets: [
              '**С** is the standard form: с другом, с мамой, с молоком',
              '**СО** is used before consonant clusters (especially starting with с/з/ш): со мной, со временем, со вкусом',
              'Also: со мной (инстр.) vs. с тобой (инстр.) vs. с ним/с ней/с ними (Н- rule with prepositions)',
            ],
          },
        ],
        bullets: [
          '**The с + instrumental "ingredients" pattern:** Russian uses с + instrumental to describe food and drinks: суп с грибами — mushroom soup | пицца с сыром — cheese pizza | чай с лимоном и мёдом — tea with lemon and honey',
        ],
      },
      {
        h2: 'Russian Instrumental Prepositions — Complete Reference',
        content:
          "Eight major Russian prepositions require the instrumental case. Most express **spatial position** — where something is located in relation to something else.\n\n**⚠️ Dual-case prepositions:** За, под, перед, над can take either instrumental OR accusative. **Instrumental** = static position (where something IS): за столом, под столом. **Accusative** = motion toward (where something is GOING): сесть за стол, положить под стол. Memory trick: **Instrumental = I'm already THERE. Accusative = I'm going THERE.**",
        table: {
          caption: '8 prepositions with instrumental',
          boldColumnIndices: [0],
          headers: ['Prep.', 'Meaning', 'With a noun', 'Full example + translation'],
          rows: [
            [
              'с',
              'with / together with',
              'с другом, с молоком',
              'Я иду с другом. — I am going with a friend.',
            ],
            [
              'со',
              'with (before clusters)',
              'со мной, со временем',
              'Иди со мной! — Come with me!',
            ],
            [
              'за',
              'behind / at (position)',
              'за столом, за дверью',
              'Он сидит за столом. — He is sitting at the table.',
            ],
            [
              'перед',
              'in front of / before',
              'перед домом, перед сном',
              'Стой перед домом. — Stand in front of the house.',
            ],
            [
              'над',
              'above / over',
              'над городом, над столом',
              'Самолёт летит над городом. — The plane flies above the city.',
            ],
            [
              'под',
              'under (position)',
              'под столом, под землёй',
              'Кот под столом. — The cat is under the table.',
            ],
            [
              'между',
              'between',
              'между домами, между нами',
              'Это между нами. — This is between us.',
            ],
            [
              'рядом с',
              'next to / beside',
              'рядом с домом',
              'Кафе рядом с метро. — The café is next to the metro.',
            ],
          ],
        },
      },
      {
        h2: 'Time Expressions with the Instrumental',
        content:
          'Russian uses the instrumental case for many time adverbs — particularly for **parts of the day** and **seasons**. These are extremely common in everyday speech and worth memorizing as fixed forms.\n\nThey are technically instrumental forms of nouns: утро → утром (morning → in the morning), вечер → вечером, ночь → ночью (note the -ЬЮ ending!), лето → летом, зима → зимой, осень → осенью.',
        table: {
          caption: 'Time expressions in instrumental',
          boldColumnIndices: [0],
          headers: ['Russian expressions', 'Example sentence + translation'],
          rows: [
            ['утром, вечером, ночью', 'Утром я пью кофе. — In the morning I drink coffee.'],
            ['весной, летом, осенью, зимой', 'Летом жарко. — In summer it is hot.'],
            ['днём, ночью', 'Он работает ночью. — He works at night.'],
            ['годом раньше / позже', 'Годом раньше он уехал. — A year earlier he left.'],
          ],
        },
        bullets: [
          '**Fixed forms to memorize:** утром, днём, вечером, ночью | весной, летом, осенью, зимой',
        ],
      },
      {
        h2: '15 Key Verbs That Require the Instrumental Case',
        content:
          'A significant group of Russian verbs take their object in the **instrumental**, not the accusative.\n\nThese are mostly **reflexive verbs** (-ся ending) that express engagement, passion, or attitude toward something:',
        table: {
          caption: '15 verbs with instrumental',
          boldColumnIndices: [0],
          headers: ['Verb', 'Example', 'Translation', 'Note'],
          rows: [
            [
              'заниматься',
              'Я занимаюсь русским языком.',
              'I study Russian.',
              'Reflexive verb of engagement',
            ],
            [
              'интересоваться',
              'Она интересуется историей.',
              'She is interested in history.',
              'Object of interest',
            ],
            ['гордиться', 'Мы гордимся тобой.', 'We are proud of you.', 'Object of pride'],
            [
              'восхищаться',
              'Он восхищается закатом.',
              'He admires the sunset.',
              'Object of admiration',
            ],
            ['увлекаться', 'Он увлекается музыкой.', 'He is into music.', 'Passion / hobby'],
            [
              'пользоваться',
              'Я пользуюсь словарём.',
              'I use a dictionary.',
              'Tool or resource used',
            ],
            [
              'владеть',
              'Она владеет тремя языками.',
              'She speaks three languages.',
              'Mastery / possession',
            ],
            ['управлять', 'Он управляет машиной.', 'He drives a car.', 'Control of a vehicle'],
            ['являться', 'Москва является столицей.', 'Moscow is the capital.', 'Formal = быть'],
            ['служить', 'Это служит примером.', 'This serves as an example.', 'Role / function'],
            ['стать', 'Она стала врачом.', 'She became a doctor.', 'Change of state → profession'],
            ['быть', 'Он был студентом.', 'He was a student.', 'Past/future "to be"'],
            [
              'называть',
              'Все называют его гением.',
              'Everyone calls him a genius.',
              'Naming / labeling',
            ],
            ['считать', 'Я считаю его другом.', 'I consider him a friend.', 'Opinion / judgment'],
            ['махать', 'Она машет рукой.', 'She waves her hand.', 'Body part used in action'],
          ],
        },
      },
      {
        h2: '30 Real Russian Instrumental Case Examples',
        content:
          'Below are **30 authentic sentences** demonstrating every major use of the instrumental. **1–5:** Instrument/tool | **6–10:** Professions | **11–14:** С + accompaniment | **15–20:** Spatial prepositions | **21–23:** Time expressions | **24–30:** Verbs taking instrumental.',
        table: {
          caption: '30 examples grouped by usage',
          boldColumnIndices: [1],
          headers: ['#', 'Russian sentence', 'Transliteration', 'Translation & notes'],
          rows: [
            [
              '1',
              'Он пишет ручкой.',
              'On pishet ruchkoy.',
              'He writes with a pen. (ручка → ручкой)',
            ],
            ['2', 'Я режу хлеб ножом.', 'Ya rezhu khleb nozhom.', 'I cut bread with a knife.'],
            ['3', 'Мы едем поездом.', 'My yedyom poyezdom.', 'We travel by train.'],
            ['4', 'Она рисует карандашом.', 'Ona risuyet karandashom.', 'She draws with a pencil.'],
            ['5', 'Открой дверь ключом.', 'Otkroy dver klyuchom.', 'Open the door with the key.'],
            ['6', 'Он работает врачом.', 'On rabotayet vrachom.', 'He works as a doctor.'],
            ['7', 'Она стала учительницей.', 'Ona stala uchitelnitsyey.', 'She became a teacher.'],
            [
              '8',
              'Мой отец был инженером.',
              'Moy otets byl inzhenyerom.',
              'My father was an engineer.',
            ],
            [
              '9',
              'Его назначили директором.',
              'Yego naznachili direktorom.',
              'He was appointed director.',
            ],
            [
              '10',
              'Я хочу стать космонавтом.',
              'Ya khochu stat kosmonavtom.',
              'I want to become an astronaut.',
            ],
            ['11', 'Я иду с другом.', 'Ya idu s drugom.', 'I am going with a friend.'],
            ['12', 'Он пришёл с женой.', 'On prishol s zhonoy.', 'He came with his wife.'],
            ['13', 'Выпей кофе с молоком.', 'Vypey kofe s molokom.', 'Have coffee with milk.'],
            [
              '14',
              'Мы живём с родителями.',
              'My zhivyom s roditelyami.',
              'We live with our parents.',
            ],
            [
              '15',
              'Книга лежит под лампой.',
              'Kniga lezhit pod lampoy.',
              'The book is under the lamp. (под + instr.)',
            ],
            [
              '16',
              'Они сидят за столом.',
              'Oni sidyat za stolom.',
              'They are sitting at the table.',
            ],
            [
              '17',
              'Самолёт летит над облаками.',
              'Samolyot letit nad oblakami.',
              'The plane flies above the clouds.',
            ],
            [
              '18',
              'Дом стоит перед лесом.',
              'Dom stoit pered lesom.',
              'The house stands before the forest.',
            ],
            [
              '19',
              'Мы договорились между собой.',
              'My dogovorilis mezhdu soboy.',
              'We agreed among ourselves.',
            ],
            [
              '20',
              'Кафе рядом с банком.',
              'Kafe ryadom s bankom.',
              'The café is next to the bank.',
            ],
            [
              '21',
              'Утром я бегаю в парке.',
              'Utrom ya begayu v parke.',
              'In the morning I jog in the park.',
            ],
            [
              '22',
              'Летом мы ездим на море.',
              'Letom my yezdim na more.',
              'In summer we go to the sea.',
            ],
            [
              '23',
              'Ночью город красив.',
              'Nochyu gorod krasiv.',
              'At night the city is beautiful.',
            ],
            ['24', 'Я занимаюсь спортом.', 'Ya zanimayus sportom.', 'I do sports.'],
            ['25', 'Она гордится сыном.', 'Ona gorditsya synom.', 'She is proud of her son.'],
            [
              '26',
              'Мы восхищаемся закатом.',
              'My voskhishchaemsa zakatom.',
              'We admire the sunset.',
            ],
            [
              '27',
              'Он увлекается музыкой.',
              'On uvlekayetsya muzykoy.',
              'He is passionate about music.',
            ],
            ['28', 'Пахнет свежей травой.', 'Pakhnet svezhey travoy.', 'It smells of fresh grass.'],
            [
              '29',
              'Она машет рукой на прощание.',
              'Ona mashet rukoy na proshchaniye.',
              'She waves her hand in farewell.',
            ],
            [
              '30',
              'Он стал известным писателем.',
              'On stal izvestnym pisatelem.',
              'He became a famous writer.',
            ],
          ],
        },
      },
      {
        h2: 'Top 5 Instrumental Case Mistakes (And How to Fix Them)',
        bullets: [
          '**Using nominative for profession after был/стала** — Она была учитель ✗ → Она была учителем ✓ (past быть requires instrumental)',
          '**Forgetting -ЬЮ for feminine -ь nouns** — ночь → ночью ✓ (the -ЬЮ ending is unique)',
          '**Wrong spatial case** — Он за стол ✗ → Он за столом ✓ (static position → instrumental)',
          '**Forgetting adjective agreement** — горжусь умный сын ✗ → горжусь умным сыном ✓ (both noun and adj. take instrumental)',
          '**Using accusative with заниматься** — Я занимаюсь музыку ✗ → Я занимаюсь музыкой ✓ (заниматься always takes instrumental)',
        ],
      },
    ],
    conclusion:
      "The Russian instrumental case is less intimidating than its reputation suggests. Its endings are regular, its uses are logical.\n\nOnce you learn the key patterns — instruments, accompaniment, professions, spatial prepositions, and time expressions — you'll find it appearing naturally everywhere in Russian.",
    conclusionBullets: [
      '**Noun endings:** masc./neuter -ОМ/-ЕМ | fem. -ОЙ/-ЕЙ | fem. -ь → -ЬЮ | plural -АМИ/-ЯМИ',
      '**С + instrumental** = "with someone/something"',
      '**Professions/roles** after работать, стать, быть (past/future) → always instrumental',
      '**Time:** утром, вечером, ночью, летом, зимой, осенью',
      '**Position prepositions:** за/перед/над/под/между + instrumental (static)',
      '**Verbs:** заниматься, гордиться, интересоваться, восхищаться + instrumental',
    ],
    conclusionOutro: 'Continue with the rest of our Russian grammar series:',
    ctaText: 'Practice Russian instrumental case with our app',
    ctaHref: '/',
    faq: [
      {
        question: 'What is the Russian instrumental case used for?',
        answer:
          'The Russian instrumental case is used for: the **instrument or means** by which an action is performed (писать ручкой), **accompaniment** with с (с другом), **profession or role** after быть/стать/работать (работать врачом), **time expressions** (утром, летом, ночью), **spatial positions** with prepositions за/перед/над/под/между, and with reflexive verbs like заниматься, гордиться, интересоваться.',
      },
      {
        question: 'How do you say professions in Russian?',
        answer:
          'Use the **instrumental case** of the profession noun after the relevant verb: работать + instrumental (работает врачом), стать + instrumental (стала учителем), быть in past/future + instrumental (был инженером). In the present tense with omitted быть, the nominative is also acceptable: Он — врач.',
      },
      {
        question: 'How do you use с + instrumental in Russian?',
        answer:
          '**С + instrumental** expresses accompaniment — doing something with someone or describing something that comes with something else. Examples: Я иду с другом, Кофе с молоком, Мы живём с родителями. Before consonant clusters, с becomes со: со мной, со временем.',
      },
      {
        question:
          'What is the difference between instrumental and accusative for position prepositions?',
        answer:
          "Prepositions like за, под, перед, над can take either **instrumental** or **accusative**. **Instrumental** = static position (where something is): книга под столом. **Accusative** = motion toward: положи книгу под стол. Instrumental = I'm already THERE. Accusative = I'm going THERE.",
      },
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "Russian Instrumental Case: When to Use It and Why It's Easier Than You Think",
      description:
        'Complete guide to the Russian instrumental case: noun endings, professions, с + instrumental, prepositions, time expressions, 15 verbs, 30 examples.',
      datePublished: '2026-03-12',
      dateModified: '2026-03-12',
      author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
      publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://russiandeclensions.com/learn/articles/russian-instrumental-case',
      },
      keywords:
        'russian instrumental case, russian instrumental case endings, с + instrumental russian, russian instrumental prepositions',
    },
  },
  'russian-prepositional-case': {
    slug: 'russian-prepositional-case',
    title: 'Russian Prepositional Case: The Only Case That Never Stands Alone',
    metaTitle:
      'Russian Prepositional Case: Endings, в vs на, о чём & 30 Examples | Russian Cases with Anna',
    metaDescription:
      'Complete guide to the Russian prepositional case: location, topic (о чём), endings table, -ИИ rule, locative -У forms, в vs на, о/об, 10 verbs + о, 30 real examples with transliteration.',
    keywords: [
      'russian prepositional case',
      'russian prepositional case endings',
      'в на о prepositional russian',
      'russian location grammar',
      'о чём russian grammar',
    ],
    h1: 'Russian Prepositional Case: The Only Case That Never Stands Alone',
    heroImage: {
      src: '/articles/free-russian-lesson-prepositional-case.webp',
      alt: 'Free Russian lesson on the prepositional case: location, topic, and в/на/о',
      width: 1200,
      height: 630,
    },
    intro:
      'The Russian prepositional case has a distinction no other case can claim: it is the **only Russian case** that is never used without a preposition. Every other case can appear in a sentence on its own — a noun in the nominative is simply the subject, a noun in the instrumental can be a tool. But a noun in the prepositional? It always comes attached to **в**, **на**, **о**, **при**, or **по**.\n\nThis makes it paradoxically one of the easiest to master: if you see one of those five prepositions, you know the prepositional case follows. And the endings themselves are among the most consistent in Russian grammar.',
    whatYouLearn: [
      'What makes the prepositional case **unique** among the 6 Russian cases',
      'Its **3 core uses**: location, topic, and conditions',
      'Complete **endings table** for nouns (all genders, singular & plural)',
      'The special **-ИИ** ending for nouns in -ий/-ие/-ия',
      'The **locative remnant**: irregular **-У** endings (в лесу, на полу, в году)',
      '**В vs. НА** — when to use each for location',
      '**О/ОБ** — the "about" preposition and how to use it correctly',
      '**О чём?** — how to ask "about what?" in Russian',
      '**10 key verbs** that use о + prepositional',
      '**30 real Russian** example sentences with transliteration',
    ],
    leadMagnetCta: {
      title: 'Practice Russian location grammar and the prepositional case',
      description:
        'Our mobile app drills all 6 Russian cases — including в/на location and о + topic — with real sentences and instant feedback. Available on Android and iOS.',
      ctaText: 'Download the app and start drilling today',
      ctaHref: '/',
    },
    internalLinks: [
      {
        href: '/learn/lessons/russian-cases-complete-guide',
        label: 'The Complete Guide to Russian Cases: All 6 Cases Explained with Examples',
      },
      {
        href: '/learn/articles/russian-case-endings-cheatsheet',
        label: 'Russian Case Endings: The Ultimate Cheat Sheet',
      },
      {
        href: '/learn/lessons/russian-prepositions-cases',
        label: 'Russian Prepositions and Cases: Which Case Does Each Preposition Take?',
      },
    ],
    tableAccentVariant: 'prepositional',
    sections: [
      {
        h2: 'Quick Answer',
        content:
          'The prepositional case answers **О ком?** (About whom?) and **О чём?** (About what?) — and also **Где?** (Where?) when expressing location.\n\nIt is used for **location** (в школе — at school), **topic** (о работе — about work), and **conditions** (при Сталине — under Stalin).',
      },
      {
        h2: 'What Is the Russian Prepositional Case?',
        content:
          "The prepositional case (**Предложный падеж** — literally 'the proposed/prepositional case') is the sixth and last of the Russian cases. Unlike the other five cases which can sometimes function without a preposition, the prepositional is always preceded by one of five prepositions: **в**, **на**, **о/об**, **при**, or **по** (in certain constructions).\n\nCore examples: **Я живу в Москве.** — I live in Moscow. | **Мы говорим о работе.** — We talk about work.",
        subsections: [
          {
            h3: 'The prepositional case is used with:',
            content: '',
            bullets: [
              '**В + location** (in/inside a place): Я в школе. — I am at school.',
              '**НА + location** (on/at a place): Книга на столе. — The book is on the table.',
              '**О/ОБ + topic** (about): Мы говорим о погоде. — We talk about the weather.',
              '**ПРИ + conditions/presence** (under/in the presence of): при Сталине, при свидетелях',
              '**ПО + certain fixed expressions** (upon, after): по приезде (upon arrival)',
            ],
          },
          {
            h3: 'Key rule',
            content:
              'The prepositional **NEVER** appears without one of these prepositions — guaranteed!',
          },
        ],
      },
      {
        h2: 'Russian Prepositional Case Endings — Complete Table',
        content:
          'The prepositional case has some of the **most regular endings** in Russian. Most nouns simply take **-Е** in the singular.\n\nThe key exceptions are nouns ending in **-ий**, **-ие**, **-ия** (which take **-ИИ**) and a small group with irregular locative **-У** forms.',
        image: {
          src: '/articles/russian-prepositional-case-endings-table-complete.webp',
          alt: 'Complete Russian prepositional case endings declension table',
          width: 1200,
          height: 630,
        },
        table: {
          caption: 'Prepositional case endings by noun type',
          boldColumnIndices: [1, 3],
          headers: ['Noun type', 'Ending', 'Formation', 'Result', 'Example in context'],
          rows: [
            [
              'Masc. hard (consonant)',
              '-е',
              'стол → стол+е',
              'столе',
              'книга на столе — book on the table',
            ],
            ['Masc. soft (-й)', '-е', 'музей → музе+е', 'музее', 'в музее — in the museum'],
            [
              'Masc. soft (-ь)',
              '-е',
              'словарь → словар+е',
              'словаре',
              'в словаре — in the dictionary',
            ],
            [
              'Masc./Neut. in -ий/-ие',
              '-ии',
              'гений → гени+и / здание → здани+и',
              'гении / здании',
              'в здании — in the building',
            ],
            ['Fem. hard (-а)', '-е', 'страна → стран+е', 'стране', 'в стране — in the country'],
            ['Fem. soft (-я)', '-е', 'земля → земл+е', 'земле', 'на земле — on the ground'],
            ['Fem. in -ия', '-ии', 'станция → станци+и', 'станции', 'на станции — at the station'],
            ['Fem. (-ь)', '-и', 'ночь → ноч+и', 'ночи', 'в ночи — in the night'],
            ['Neuter (-о)', '-е', 'окно → окн+е', 'окне', 'в окне — in the window'],
            ['Neuter (-е)', '-е', 'море → мор+е', 'море', 'в море — in the sea'],
            ['Neuter in -ие', '-ии', 'здание → здани+и', 'здании', 'в здании — in the building'],
            [
              'Plural (all genders)',
              '-ах/-ях',
              'столы→столах / моря→морях',
              'столах / морях',
              'в домах — in the houses',
            ],
          ],
        },
        bullets: [
          '**The golden rule:** almost everything takes **-Е** in the prepositional singular.',
          '**Masculine -ий** — -ИИ: гений → о гении',
          '**Neuter -ие** — -ИИ: здание → в здании, упражнение → в упражнении',
          '**Feminine -ия** — -ИИ: станция → на станции, Россия → в России',
          '**Feminine -ь** — -И: ночь → о ночи',
          '**Plural (hard stem)** — -АХ: в домах',
          '**Plural (soft stem)** — -ЯХ: в морях, о людях',
        ],
      },
      {
        h2: 'The Special -ИИ Ending: Nouns in -ий, -ие, -ия',
        content:
          'The most important exception to the standard **-Е** ending is the group of nouns ending in **-ий** (masculine), **-ие** (neuter), and **-ия** (feminine). These take **-ИИ** in the prepositional case instead of the expected -Е.\n\nThis is a very common source of errors.',
        subsections: [
          {
            h3: 'The -ИИ rule — examples you MUST know:',
            content: '',
            bullets: [
              '**Masculine -ий** — гений → о гении (not о гение)',
              '**Neuter -ие** — здание → в здании, упражнение → в упражнении, путешествие → о путешествии',
              '**Feminine -ия** — станция → на станции, Россия → в России, революция → о революции, Италия → в Италии',
            ],
          },
          {
            h3: 'Memory trick',
            content: '-ий/-ие/-ия all end in И — they keep that И in the prepositional.',
          },
        ],
      },
      {
        h2: 'The Locative Case Remnant: Irregular -У Endings',
        content:
          "A small but very common group of masculine nouns have an irregular prepositional ending: **-У** (or **-Ю** for soft stems) instead of the standard **-Е**. This special form is called the **'locative'** (местный падеж) — a remnant of an older Russian case, used exclusively with **в** and **на** when expressing **location** (not topic).\n\nThese nouns have TWO prepositional forms: the **-У** form for location (в/на + place) and the regular **-Е** form for topic (о + subject).",
        table: {
          caption: 'Locative -У vs regular prepositional -Е',
          boldColumnIndices: [1, 2],
          headers: [
            'Noun',
            'Locative (в/на + location)',
            'Regular prep. (о + topic)',
            'Example sentence',
          ],
          rows: [
            [
              'лес (forest)',
              'в лесу',
              'о лесе',
              'Мы заблудились в лесу. — We got lost in the forest.',
            ],
            [
              'сад (garden)',
              'в саду',
              'о саде',
              'Дети играют в саду. — Children play in the garden.',
            ],
            ['год (year)', 'в году', 'о годе', 'Сколько дней в году? — How many days in a year?'],
            ['пол (floor)', 'на полу', 'о поле', 'Кот лежит на полу. — The cat lies on the floor.'],
            [
              'берег (shore)',
              'на берегу',
              'о береге',
              'Мы отдыхали на берегу. — We rested on the shore.',
            ],
            [
              'угол (corner)',
              'в углу',
              'об угле',
              'Стол стоит в углу. — The table stands in the corner.',
            ],
            ['нос (nose/bow)', 'на носу', 'о носе', 'Очки на носу. — Glasses are on the nose.'],
            ['порт (port)', 'в порту', 'о порте', 'Корабль в порту. — The ship is in port.'],
            [
              'мост (bridge)',
              'на мосту',
              'о мосте',
              "Встретимся на мосту. — Let's meet on the bridge.",
            ],
            [
              'снег (snow)',
              'в снегу',
              'о снеге',
              'Дети играли в снегу. — Children played in the snow.',
            ],
          ],
        },
        bullets: [
          '**В/НА + [locative -У]** = physical location (where something IS): в лесу, на полу, в порту',
          '**О + [regular -Е]** = topic, subject of discussion: о лесе, о поле, о порте',
          'These nouns are common and high-frequency — worth memorizing as a set.',
        ],
      },
      {
        h2: 'В vs. НА — Which to Use for Location?',
        content:
          "Two prepositions — **в** and **на** — can both mean 'at' or 'in' for location in the prepositional case.\n\nChoosing the right one is one of the trickiest aspects of Russian location grammar.",
        table: {
          caption: 'В vs. НА for location and direction',
          boldColumnIndices: [1, 2],
          headers: [
            'Location type',
            'В/НА + prepositional (location)',
            'В/НА + accusative (direction)',
            'Example',
          ],
          rows: [
            [
              'Country',
              'в России, в Германии, в Китае',
              'в Россию (acc.)',
              'В России холодно зимой. — It is cold in Russia in winter.',
            ],
            [
              'City',
              'в Москве, в Лондоне, в Париже',
              'в Москву (acc.)',
              'Он живёт в Москве. — He lives in Moscow.',
            ],
            [
              'Building',
              'в школе, в банке, в больнице',
              'в школу (acc.)',
              'Дети в школе. — The children are at school.',
            ],
            [
              'Island/peninsula',
              'на Кубе, на Сахалине',
              'на Кубу (acc.)',
              'Они отдыхают на Кубе. — They vacation in Cuba.',
            ],
            [
              'Open space',
              'на улице, на площади',
              'на улицу (acc.)',
              'Дети играют на улице. — Children play outside.',
            ],
            [
              'Event',
              'на концерте, на конференции',
              'на концерт (acc.)',
              'Я был на концерте. — I was at the concert.',
            ],
            [
              'Work/institution',
              'на работе, на заводе, на почте',
              'на работу (acc.)',
              'Она на работе. — She is at work.',
            ],
            [
              'Floor/surface',
              'на полу, на столе, на крыше',
              'на пол (acc.)',
              'Кот сидит на полу. — The cat sits on the floor.',
            ],
          ],
        },
        bullets: [
          '**В (in/inside)** is used for enclosed spaces: rooms, buildings, countries, cities.',
          '**НА (on/at)** is used for surfaces, open spaces, events, and certain institutions by convention.',
          '**Tricky НА locations** (use на, not в): на работе, на почте, на заводе, на рынке, на вокзале, на стадионе, на Украине, на Кубе, на Сахалине.',
        ],
      },
      {
        h2: 'О/ОБ: The "About" Preposition in Russian',
        content:
          'The preposition **о** (or **об** before words starting with a vowel sound) followed by the prepositional case is used to express the **topic** of conversation, thought, writing, or any form of mental engagement.',
        subsections: [
          {
            h3: 'О vs. ОБ',
            content:
              'Use **ОБ** when the next word starts with a vowel (а, е, ё, и, о, у, э, ю, я) or with Ъ or Ь. In all other cases, use **О**.',
            bullets: [
              'о работе (about work) — standard О',
              'об этом (about this) — ОБ before э',
              'о ней (about her) — standard О',
              'об Иване (about Ivan) — ОБ before И',
              'об ошибке (about the mistake) — ОБ before О',
            ],
          },
        ],
      },
      {
        h2: 'О чём? — How to Ask "About What?" in Russian',
        content:
          'The question form **О чём?** (About what?) is the prepositional form of **что** (what).\n\nThis is one of the most useful question words in Russian.',
        bullets: [
          '**О чём вы говорите?** — What are you talking about?',
          '**О чём эта книга?** — What is this book about?',
          '**О чём ты думаешь?** — What are you thinking about?',
          '**О чём ты мечтаешь?** — What do you dream about?',
          '**О ком вы говорите?** — Who are you talking about? (О ком = about whom)',
          '**О ком написана эта статья?** — Who is this article about?',
        ],
      },
      {
        h2: '10 Key Verbs That Use О + Prepositional',
        content:
          'These verbs all take their object in the prepositional case with **о**.\n\nThey are high-frequency verbs in everyday Russian.',
        table: {
          caption: '10 verbs + о + prepositional',
          boldColumnIndices: [0, 1],
          headers: ['Verb + о', 'Russian example', 'Translation + notes'],
          rows: [
            [
              'говорить о (to talk about)',
              'Мы говорим о политике.',
              'We are talking about politics. (политика → о политике)',
            ],
            [
              'думать о (to think about)',
              'Она думает о будущем.',
              'She thinks about the future. (будущее → о будущем)',
            ],
            [
              'мечтать о (to dream about)',
              'Я мечтаю о путешествии.',
              'I dream about travelling. (путешествие → о путешествии)',
            ],
            [
              'заботиться о (to take care of)',
              'Он заботится о детях.',
              'He takes care of the children. (дети → о детях)',
            ],
            [
              'беспокоиться о (to worry about)',
              'Мама беспокоится о нас.',
              'Mom worries about us. (мы → о нас)',
            ],
            [
              'спрашивать о (to ask about)',
              'Она спросила о тебе.',
              'She asked about you. (ты → о тебе)',
            ],
            [
              'знать о (to know about)',
              'Ты знаешь об этом?',
              'Do you know about this? (это → об этом — об before vowel)',
            ],
            [
              'писать о (to write about)',
              'Он пишет о войне.',
              'He writes about war. (война → о войне)',
            ],
            [
              'читать о (to read about)',
              'Я читал о Гагарине.',
              'I read about Gagarin. (proper name — prepositional)',
            ],
            [
              'рассказывать о (to tell about)',
              'Расскажи мне о себе.',
              'Tell me about yourself. (себя → о себе, reflexive)',
            ],
          ],
        },
      },
      {
        h2: '30 Real Russian Prepositional Case Examples',
        content:
          'Here are **30 authentic Russian sentences** showing the prepositional case in action. **1–8:** Location with В | **9–15:** О/ОБ (about) | **16–18:** ПРИ and ПО | **19–30:** Mixed location (НА) and special forms.',
        table: {
          caption: '30 prepositional case examples',
          boldColumnIndices: [1],
          headers: ['#', 'Russian sentence', 'Transliteration', 'Translation & Grammar Notes'],
          rows: [
            [
              '1',
              'Я живу в Москве.',
              'Ya zhivu v Moskve.',
              'I live in Moscow. (Москва → в Москве — location in a city)',
            ],
            [
              '2',
              'Книга лежит на столе.',
              'Kniga lezhit na stole.',
              'The book is on the table. (стол → на столе — on a surface)',
            ],
            [
              '3',
              'Он учился в университете.',
              'On uchilsya v universitete.',
              'He studied at university. (университет → в университете)',
            ],
            [
              '4',
              'Кошка спит на диване.',
              'Koshka spit na divane.',
              'The cat is sleeping on the sofa. (диван → на диване)',
            ],
            [
              '5',
              'Мы отдыхаем на море.',
              'My otdykhaem na more.',
              'We are on holiday at the sea. (море → на море)',
            ],
            [
              '6',
              'Дети играют в саду.',
              'Deti igrayut v sadu.',
              'Children are playing in the garden. (сад → в саду — locative!)',
            ],
            [
              '7',
              'Машина стоит на улице.',
              'Mashina stoit na ulitse.',
              'The car is parked on the street. (улица → на улице)',
            ],
            [
              '8',
              'Я работаю в офисе.',
              'Ya rabotayu v ofise.',
              'I work in an office. (офис → в офисе)',
            ],
            [
              '9',
              'Мы говорим о погоде.',
              'My govorim o pogode.',
              'We are talking about the weather. (погода → о погоде)',
            ],
            [
              '10',
              'Она думает о тебе.',
              'Ona dumayet o tebe.',
              'She thinks about you. (ты → о тебе — pronoun)',
            ],
            [
              '11',
              'Я мечтаю о путешествии.',
              'Ya mechtayu o puteshestvii.',
              'I dream about travelling. (-ие noun → о путешествии with -ии)',
            ],
            [
              '12',
              'Расскажи мне о себе.',
              'Rasskazhi mne o sebe.',
              'Tell me about yourself. (себя → о себе — reflexive pronoun)',
            ],
            [
              '13',
              'Он написал книгу о войне.',
              'On napisal knigu o voyne.',
              'He wrote a book about war. (война → о войне)',
            ],
            [
              '14',
              'Ты знаешь об этом?',
              'Ty znayesh ob etom?',
              'Do you know about this? (это → об этом — об before vowel)',
            ],
            [
              '15',
              'Мы говорили о ваших планах.',
              'My govorili o vashikh planakh.',
              'We talked about your plans. (планы → о планах — prep. pl.)',
            ],
            [
              '16',
              'При советской власти жизнь была иной.',
              'Pri sovetskoy vlasti zhizn byla inoy.',
              'Under Soviet rule, life was different. (при + prepositional)',
            ],
            [
              '17',
              'Не говори об этом при детях.',
              'Ne govori ob etom pri detyakh.',
              "Don't talk about this in front of the children. (при + prep.)",
            ],
            [
              '18',
              'По приезде в Москву он позвонил.',
              'Po priyezde v Moskvu on pozvonil.',
              'Upon arriving in Moscow he called. (по + prepositional, formal)',
            ],
            [
              '19',
              'Самолёт был в воздухе три часа.',
              'Samolyot byl v vozdukhe tri chasa.',
              'The plane was in the air for three hours. (воздух → в воздухе)',
            ],
            [
              '20',
              'Он заблудился в лесу.',
              'On zabludilsya v lesu.',
              'He got lost in the forest. (лес → в лесу — locative form!)',
            ],
            [
              '21',
              'Картина висит на стене.',
              'Kartina visit na stene.',
              'The painting hangs on the wall. (стена → на стене)',
            ],
            [
              '22',
              'Встреча состоится в конференц-зале.',
              'Vstrecha sostoyitsya v konferents-zale.',
              'The meeting will take place in the conference room.',
            ],
            [
              '23',
              'Она нашла ошибку в тексте.',
              'Ona nashla oshibku v tekste.',
              'She found an error in the text. (текст → в тексте)',
            ],
            [
              '24',
              'Что написано в книге?',
              'Chto napisano v knige?',
              'What is written in the book? (книга → в книге)',
            ],
            [
              '25',
              'Мы живём на третьем этаже.',
              'My zhivyom na tretyem etazhe.',
              'We live on the third floor. (этаж → на этаже; adj: третьем)',
            ],
            [
              '26',
              'В этом году исполняется 100 лет.',
              'V etom godu ispolnyaetsya 100 let.',
              'This year marks 100 years. (год → в году — locative!)',
            ],
            [
              '27',
              'Он стоит на мосту.',
              'On stoit na mostu.',
              'He is standing on the bridge. (мост → на мосту — locative!)',
            ],
            [
              '28',
              'Они живут в Санкт-Петербурге.',
              'Oni zhivut v Sankt-Peterburge.',
              'They live in Saint Petersburg. (prepositional of proper name)',
            ],
            [
              '29',
              'На станции метро было много людей.',
              'Na stantsii metro bylo mnogo lyudey.',
              'There were many people at the metro station. (-ия → на станции)',
            ],
            [
              '30',
              'О чём вы думаете?',
              'O chom vy dumayete?',
              'What are you thinking about? (что → о чём — question form)',
            ],
          ],
        },
      },
      {
        h2: 'Prepositional vs. Accusative with В and НА',
        content:
          'The most important contrast involving the prepositional case is the **direction (accusative)** vs. **location (prepositional)** distinction with в and на.',
        subsections: [
          {
            h3: 'Summary of the contrast:',
            content: '',
            bullets: [
              '**В/НА + Accusative** = DIRECTION (motion toward): Я иду в школу. | Она едет на работу. | Он положил книгу на стол.',
              '**В/НА + Prepositional** = LOCATION (being somewhere, static): Я нахожусь в школе. | Она работает на заводе. | Книга лежит на столе.',
            ],
          },
          {
            h3: 'Key question',
            content: 'Is something MOVING there (accusative) or IS IT THERE (prepositional)?',
          },
        ],
      },
      {
        h2: 'Top 5 Prepositional Case Mistakes (And How to Fix Them)',
        bullets: [
          '**Forgetting -ИИ for -ий/-ие/-ия nouns** — в здание ✗ → в здании ✓ | в Россие ✗ → в России ✓',
          '**Using accusative for location** — Я в школу сейчас. ✗ → Я в школе сейчас. ✓',
          '**Using В instead of НА for certain locations** — в работе ✗ → на работе ✓ | в вокзале ✗ → на вокзале ✓',
          '**Forgetting the locative -У form** — в лесе ✗ → в лесу ✓ | на полу ✓ (not на поле — поле is a different word!)',
          '**Using О before a vowel without ОБ** — о этом ✗ → об этом ✓ | о Иване ✗ → об Иване ✓',
        ],
      },
    ],
    conclusion: '',
    conclusionIntro:
      'The Russian prepositional case is arguably the most beginner-friendly case to start with — its endings are regular, it always appears with a preposition (so you always know when to use it), and its uses are clear and logical.',
    conclusionBullets: [
      '**Prepositional singular:** almost everything → **-Е**',
      '**Exception -ИИ:** nouns in -ий/-ие/-ия (гений→о гении, здание→в здании, станция→на станции)',
      '**Exception -И:** feminine -ь nouns (ночь → о ночи)',
      '**Locative -У:** small set of masc. nouns with в/на (в лесу, на полу, в году)',
      '**Plural:** hard → **-АХ**, soft → **-ЯХ**',
      '**В** = in/inside | **НА** = on/at — both take prepositional for location, accusative for direction',
      '**О/ОБ** = about — always prepositional | **О чём?** = about what?',
    ],
    conclusionOutro:
      'Practice Russian location grammar and the prepositional case with our mobile app. All 6 cases drilled with real sentences — Android and iOS.',
    ctaText: 'Practice Russian cases with our app',
    ctaHref: '/',
    faq: [
      {
        question: 'Why is it called the "prepositional" case?',
        answer:
          'The Russian prepositional case gets its name because it is the **only case** that always requires a preposition. No other Russian case has this property — the nominative, genitive, dative, accusative, and instrumental can all appear without a preposition. The prepositional, by definition, cannot.',
      },
      {
        question: 'What is the difference between в and на for location in Russian?',
        answer:
          '**В** (in) is used for enclosed or interior spaces: countries, cities, buildings, and rooms. **НА** (on/at) is used for surfaces, open spaces, islands, and a set of specific institutions by convention (на работе, на почте, на вокзале). Both take the prepositional for location and the accusative for direction.',
      },
      {
        question: 'What is о чём in Russian?',
        answer:
          '**О чём** is the prepositional form of **что** (what), used with the preposition **о** (about). It means "about what" and is used to ask what something is about: О чём эта книга? (What is this book about?), О чём вы думаете? (What are you thinking about?). The related form **О ком?** (about whom?) uses the prepositional form of кто.',
      },
      {
        question: 'What are locative forms in Russian?',
        answer:
          'Locative forms are irregular prepositional endings (**-У/-Ю** instead of **-Е**) used with a small group of masculine nouns when expressing **physical location** with в or на. Examples: в лесу (in the forest), на полу (on the floor), в году (in the year), на берегу (on the shore). These same nouns use the standard -Е ending when used with о to express topic: о лесе (about the forest), о поле (about the field).',
      },
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Russian Prepositional Case: The Only Case That Never Stands Alone',
      description:
        'Complete guide to the Russian prepositional case: location, topic (о чём), endings, -ИИ rule, locative -У forms, в vs на, о/об, 10 verbs + о, 30 examples.',
      datePublished: '2026-03-12',
      dateModified: '2026-03-12',
      author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
      publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://russiandeclensions.com/learn/articles/russian-prepositional-case',
      },
      keywords:
        'russian prepositional case, russian prepositional case endings, в на о prepositional russian, russian location grammar, о чём russian grammar',
    },
  },
  'how-to-practice-russian-cases': {
    slug: 'how-to-practice-russian-cases',
    title: 'How to Practice Russian Cases: 5 Proven Methods',
    metaTitle: 'How to Practice Russian Cases: 5 Proven Methods to Finally Make Them Stick',
    metaDescription:
      'Evidence-based techniques for memorizing Russian declensions — SRS, drills, active reading, writing & speaking. 12-week plan, comparison table, common mistakes to avoid.',
    keywords: [
      'how to practice russian cases',
      'russian cases exercises',
      'russian declension practice',
      'best app to learn russian cases',
      'russian cases drills',
      'how to memorize russian cases',
    ],
    h1: 'How to Practice Russian Cases: 5 Proven Methods to Finally Make Them Stick',
    heroImage: {
      src: '/articles/what-is-the-best-russian-grammar-app-to-learn-cases.webp',
      alt: 'Best Russian grammar apps to learn cases – comparison chart',
      width: 1200,
      height: 630,
    },
    intro:
      "You've read the grammar explanations. You've studied the tables. You understand how Russian cases work — in theory. And then you open your mouth, or start writing, and everything falls apart. The endings vanish. The rules blur. You freeze.\n\nThis is the **knowing-doing gap**: understanding a rule and automatically applying it in real speech are completely different skills. This guide gives you **5 proven methods** to practice Russian cases in ways that actually work.",
    whatYouLearn: [
      "Why Russian cases don't stick with traditional study methods",
      '5 proven methods for practicing Russian cases effectively',
      'A 12-week case study plan from beginner to confident user',
      'The role of spaced repetition in case memorization',
      'How to use a Russian cases app to accelerate your learning',
      'Common practice mistakes that waste your time',
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'How to Practice Russian Cases: 5 Proven Methods to Finally Make Them Stick',
      description:
        'Evidence-based techniques for memorizing Russian declensions: SRS, drills, active reading, writing, speaking. 12-week plan and common mistakes to avoid.',
      datePublished: '2026-03-12',
      dateModified: '2026-03-12',
      author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
      publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://russiandeclensions.com/learn/articles/how-to-practice-russian-cases',
      },
    },
    sections: [
      {
        h2: "Why Russian Cases Don't Stick with Traditional Study",
        content:
          "Most learners study Russian cases by reading grammar explanations and trying to memorize tables. This approach has a fundamental problem: **passive recognition is not the same as active production**. You can recognize that студента is the accusative of студент without being able to produce it automatically under time pressure.\n\nEffective case practice requires: **Active retrieval** — forcing yourself to produce the form, not just recognize it. **Spaced repetition** — returning to the same forms at increasing intervals. **Contextual exposure** — seeing forms used in real Russian, not just isolated tables. **Error correction** — getting immediate feedback when you're wrong. **Volume** — enough repetitions that the form becomes automatic.\n\nThe 5 methods below incorporate all of these principles.",
      },
      {
        h2: 'Method #1: Spaced Repetition Flashcards for Case Endings',
        content: 'The scientifically proven method for long-term retention.',
        subsections: [
          {
            h3: 'Why it works',
            content:
              "**Spaced repetition (SRS)** is the most evidence-backed method for memorizing linguistic forms. It works by showing you each item at the optimal moment — just before you're about to forget it.\n\nFor Russian cases, this means drilling на столе, without a table → you recall это стол в предложном падеже → на столе. Over 30-60 repetitions, the form becomes automatic.",
          },
          {
            h3: 'How to do it',
            content:
              "Use a Russian cases app with built-in SRS, or create Anki decks for each case. Start with the most frequent forms: accusative of common nouns, genitive singular, dative pronouns.\n\nAdd new cards gradually — don't try to load all 6 cases at once. Review daily for 15-20 minutes maximum.",
          },
          {
            h3: 'Timeframe & best for',
            content:
              '**Timeframe:** Results visible in 2-4 weeks of daily practice. Automatic recall typically established in 3-6 months. **Best for:** All levels. Especially effective for beginners building the foundation of case endings.',
          },
        ],
      },
      {
        h2: 'Method #2: Case-Specific Sentence Drills',
        content: 'Targeted practice that isolates one case pattern at a time.',
        subsections: [
          {
            h3: 'Why it works',
            content:
              "Drilling **one case at a time** — rather than practicing all 6 simultaneously — dramatically reduces cognitive load and accelerates mastery.\n\nWhen you focus exclusively on, say, dative after нравиться for a week, your brain dedicates its full pattern-recognition capacity to that one structure. By the time you move on, it's nearly automatic.",
          },
          {
            h3: 'How to do it',
            content:
              'Pick one case and one construction per week. Write 20 sentences using that construction daily.\n\nExample week: **Genitive week** — write 20 sentences with нет + genitive. **Accusative animate week** — 20 sentences with Я вижу + animate noun. **Dative week** — 20 sentences with нравится. Correct your mistakes and rewrite.',
          },
          {
            h3: 'Timeframe & best for',
            content:
              '**Timeframe:** One focused week per case construction. Full cycle through all major constructions: 8-12 weeks. **Best for:** Beginners to intermediate. Ideal for learners who know the rules but struggle to apply them.',
          },
        ],
      },
      {
        h2: 'Method #3: Active Reading with Case Identification',
        content: 'Building intuition through massive contextual input.',
        subsections: [
          {
            h3: 'Why it works',
            content:
              'Reading Russian with **active case identification** is how you move from knowing rules to developing intuition.\n\nWhen you read a sentence and consciously identify the case of each noun, you\'re doing two things simultaneously: processing meaning AND reinforcing grammatical patterns. After enough exposure, you start to "feel" when an ending is wrong — exactly like a native speaker.',
          },
          {
            h3: 'How to do it',
            content:
              'Read 1-2 paragraphs of Russian text per day. For each noun you encounter, mentally (or physically) identify its case. Focus on nouns and pronouns.\n\nStart with graded readers or simple Russian news articles. Gradually increase difficulty. Russian short stories (рассказы) are excellent for this.',
          },
          {
            h3: 'Timeframe & best for',
            content:
              '**Timeframe:** Cumulative — intuition builds over months. Expect to notice patterns within 4-6 weeks of consistent practice. **Best for:** Intermediate and advanced. Requires basic case knowledge to benefit from analysis.',
          },
        ],
      },
      {
        h2: 'Method #4: Writing Practice with Self-Correction',
        content: 'Forcing conscious rule application builds active grammar.',
        subsections: [
          {
            h3: 'Why it works',
            content:
              'Writing forces you to **actively apply** case rules rather than passively recognize them.\n\nThe act of composing a Russian sentence — choosing the right ending, second-guessing yourself, looking it up — creates stronger memory traces than reading the same form. Self-correction adds a powerful error-identification loop.',
          },
          {
            h3: 'How to do it',
            content:
              "Keep a Russian journal — 3-5 sentences per day about your life. After writing, go back and check every noun's case. Ask: what is the grammatical role? Which preposition is it following? Is the ending correct?\n\nUse a grammar reference to check. Highlight every case change you made. Track which cases you still get wrong most often.",
          },
          {
            h3: 'Timeframe & best for',
            content:
              '**Timeframe:** Ongoing. Writing accuracy typically improves significantly within 6-8 weeks of daily practice. **Best for:** Intermediate. Works best once you know the basic rules and need to consolidate them.',
          },
        ],
      },
      {
        h2: 'Method #5: Speaking Practice with Immediate Feedback',
        content: 'The fastest route to real-world fluency.',
        subsections: [
          {
            h3: 'Why it works',
            content:
              "Speaking is the **most demanding** case environment because you must produce the correct ending in real time, under conversational pressure. This is where case knowledge truly becomes language ability.\n\nThe key ingredient is **immediate feedback** — knowing when you've made an error before the pattern fossilizes. A Russian tutor, a language exchange partner, or a corrective AI tool all provide this.",
          },
          {
            h3: 'How to do it',
            content:
              "Have 2-3 speaking sessions per week. Ask your partner to correct case errors specifically — not all errors, just cases. Record yourself speaking Russian and listen back; you'll often catch your own mistakes.\n\nUse structured activities: describe your apartment (prepositions + prepositional/instrumental), describe a photo (accusative), role-play giving gifts (dative). Gradually push yourself to speak faster.",
          },
          {
            h3: 'Timeframe & best for',
            content:
              '**Timeframe:** Real-time case accuracy typically improves within 4-8 weeks of regular speaking practice with correction. **Best for:** Intermediate to advanced. Requires enough case knowledge to understand corrections.',
          },
        ],
      },
      {
        h2: 'Comparing the 5 Methods',
        content:
          'Each method targets a different aspect of case learning. The best learners combine multiple methods:',
        table: {
          caption: 'Methods comparison: effectiveness, time, level',
          headers: [
            'Method',
            'Effectiveness',
            'Time investment',
            'Best level',
            "What it's best for",
          ],
          boldColumnIndices: [0, 4],
          rows: [
            [
              'Spaced Repetition App',
              '⭐⭐⭐⭐⭐',
              '10-20 min/day',
              'All levels',
              'Best for building automatic recall of endings',
            ],
            [
              'Case-specific drills',
              '⭐⭐⭐⭐',
              '15-30 min/session',
              'Beginner–Intermediate',
              'Targets specific case patterns systematically',
            ],
            [
              'Active reading',
              '⭐⭐⭐⭐⭐',
              '30+ min/day',
              'Intermediate+',
              'Builds intuition through massive input',
            ],
            [
              'Writing practice',
              '⭐⭐⭐⭐',
              '20-30 min/day',
              'Intermediate+',
              'Forces conscious application of rules',
            ],
            [
              'Speaking practice',
              '⭐⭐⭐⭐⭐',
              '30+ min/session',
              'All levels',
              'Real-time feedback closes the feedback loop',
            ],
          ],
        },
        bullets: [
          '**Recommended combination for fastest results:** Daily SRS app (15 min) + weekly case-specific drill (20 min) + speaking session (2×/week). Add active reading once you reach intermediate level. This combination covers all five principles: retrieval, spacing, context, feedback, and volume.',
        ],
      },
      {
        h2: '12-Week Russian Cases Study Plan',
        content:
          'A structured plan to take you from basic case awareness to confident usage in 12 weeks. Each phase focuses on one or two cases with specific daily exercises:',
        table: {
          caption: 'Week-by-week practice plan',
          headers: ['Weeks', 'Case focus', 'Core activities', 'Daily practice exercise'],
          boldColumnIndices: [0, 3],
          rows: [
            [
              '1–2',
              'Nominative + Accusative',
              'Flashcards for accusative endings (all genders). Focus: fem. -а→-у, animate masc. rule.',
              'Identify all accusative nouns in 5 Russian sentences per day.',
            ],
            [
              '3–4',
              'Genitive case',
              'Drill нет + genitive. Memorize genitive singular endings. Start genitive plural patterns.',
              'Write 5 sentences using нет + genitive. Read 1 paragraph, mark all genitives.',
            ],
            [
              '5–6',
              'Dative case',
              'Нравиться construction. Age expressions. Indirect objects.',
              '10 нравиться sentences. 5 age sentences. Translate English sentences with give/tell/show.',
            ],
            [
              '7–8',
              'Instrumental case',
              'Profession pattern. С + instrumental. Time adverbs (утром, летом).',
              '10 profession sentences. 10 "with" sentences. Use time adverbs in journal.',
            ],
            [
              '9–10',
              'Prepositional case',
              'В/НА location. О + topic. -ИИ ending rule.',
              '5 location sentences (в). 5 location (на). 5 "о чём" sentences. Map 10 country names.',
            ],
            [
              '11–12',
              'Integration',
              'Mixed case drills. Preposition-case mapping. Error correction review.',
              "Write a 100-word paragraph using all 6 cases. Self-check every noun's case.",
            ],
          ],
        },
      },
      {
        h2: 'Common Practice Mistakes That Waste Your Time',
        subsections: [
          {
            h3: 'Mistake 1: Studying All 6 Cases at Once',
            content:
              'This is the most common mistake. Trying to learn all six cases simultaneously fragments your attention and prevents any single case from becoming automatic. **Learn one case thoroughly before moving to the next.**',
          },
          {
            h3: 'Mistake 2: Only Reading Grammar Explanations',
            content:
              'Reading about cases is **not** practicing cases. You can spend hours reading grammar tables without gaining any ability to produce correct forms. Grammar explanations are necessary but they are the map, not the territory. **Practice means producing forms actively.**',
          },
          {
            h3: 'Mistake 3: Skipping Revision',
            content:
              "Many learners drill a case intensively for a week, then never return to it. Without spaced revision, the forms fade. The SRS method handles this automatically; if you're using manual drills, **schedule weekly review sessions** for completed cases.",
          },
          {
            h3: 'Mistake 4: Avoiding Speaking Until Your Cases Are "Ready"',
            content:
              'Cases are never fully ready. Learners who wait until their cases are perfect before speaking typically never speak. **The speaking environment itself accelerates case learning** through error correction and real-world pressure. Start speaking imperfectly and improve through practice.',
          },
          {
            h3: 'Mistake 5: Not Tracking Your Specific Errors',
            content:
              "Most learners make the same case errors repeatedly. If you don't track which cases you consistently get wrong, you'll practice the wrong things. **Keep an error log** — when you make a case mistake, write it down. Review your log weekly and focus your drilling on your documented weak spots.",
          },
        ],
      },
      {
        h2: 'The Role of a Russian Cases App',
        content:
          'Mobile apps designed specifically for Russian cases offer a significant advantage over general language learning apps: they focus exclusively on the grammar that matters most and use intelligent repetition to identify and drill your specific weak spots.',
        bullets: [
          '**Spaced repetition system (SRS)** — the app should adapt to your performance',
          '**All 6 cases covered** — with both singular and plural forms',
          '**Real Russian sentences as context** — not just isolated words',
          '**Animate/inanimate distinction** for the accusative',
          '**Adjective declension** as well as noun declension',
          '**Progress tracking** — so you can see improvement over time',
          '**Offline capability** — for practice anywhere, anytime',
        ],
      },
    ],
    conclusion:
      'Russian cases become automatic the same way any complex skill becomes automatic: through **deliberate, varied, consistent practice** with real feedback. The five methods in this guide — spaced repetition, case-specific drills, active reading, writing practice, and speaking with correction — cover every angle of the learning process.\n\nThe 12-week plan gives you a structured path from beginner confusion to confident case usage. Follow it, track your errors, focus on your weak spots, and review regularly. In three months, you will be a different Russian speaker.',
    conclusionOutro: 'Continue with the rest of our Russian grammar series:',
    internalLinks: [
      {
        href: '/learn/lessons/russian-cases-complete-guide',
        label: 'The Complete Guide to Russian Cases',
      },
      {
        href: '/learn/articles/russian-case-endings-cheatsheet',
        label: 'Russian Case Endings: The Ultimate Cheat Sheet',
      },
      {
        href: '/learn/articles/russian-accusative-case',
        label: 'Russian Accusative Case: Direct Objects & Motion Verbs',
      },
      {
        href: '/learn/articles/russian-dative-case',
        label: 'Russian Dative Case: Prepositions and Constructions',
      },
    ],
    leadMagnetCta: {
      title: 'Start practicing Russian cases today',
      description:
        'Download our Russian cases mobile app — the most focused tool for drilling all 6 Russian cases with spaced repetition and real Russian sentences. All 6 cases with full noun, adjective, and pronoun declension. Smart SRS that identifies your weak spots and drills them more. Special focus on the animate/inanimate accusative distinction. Available on Android and iOS. Free to start.',
      ctaText: 'Download the app →',
      ctaHref: '/',
    },
    ctaText: 'Practice Russian cases with our app',
    ctaHref: '/',
    faq: [
      {
        question: 'How long does it take to learn Russian cases?',
        answer:
          'With consistent daily practice (20-30 minutes per day), most learners develop solid command of the most common case patterns within **3-6 months**. Full mastery of all 6 cases, including irregular genitive plural, locative forms, and all preposition-case pairings, typically takes **12-24 months**. The key variable is the quality of practice — active production and spaced repetition dramatically outperform passive study.',
      },
      {
        question: 'What is the best way to memorize Russian case endings?',
        answer:
          "The most effective method is **spaced repetition combined with sentence-level practice**. Don't try to memorize endings in isolation — memorize them in the context of real sentences. When you learn that стол → столе in the prepositional, remember **книга на столе** (the book is on the table) as a complete unit. Contextual memory is far more durable than abstract table memorization.",
      },
      {
        question: 'Which Russian case should I learn first?',
        answer:
          "Start with the **nominative** (you already know it — it's the dictionary form), then **accusative** (the most common case for direct objects), then **genitive** (the most versatile case). This sequence covers the cases you'll need for basic communication. Add dative, instrumental, and prepositional in that order as your foundation solidifies.",
      },
      {
        question: 'Is there an app specifically for Russian cases?',
        answer:
          'Yes — there are apps specifically designed for drilling Russian case declensions. The best ones focus on all 6 cases, include adjective declension, use spaced repetition to target your weaknesses, and provide real Russian sentences as context. Our app is built for exactly this purpose and is available on both Android and iOS.',
      },
    ],
  },
  'top-10-russian-case-mistakes': {
    slug: 'top-10-russian-case-mistakes',
    title: 'Top 10 Mistakes English Speakers Make with Russian Cases (And How to Fix Them)',
    metaTitle:
      'Top 10 Russian Case Mistakes English Speakers Make | Fix Your Grammar | Russian Cases with Anna',
    metaDescription:
      'The 10 most common Russian case errors by English speakers — diagnosed and cured. Wrong vs correct examples, why each mistake happens, and how to fix it permanently.',
    keywords: [
      'russian cases mistakes',
      'russian grammar mistakes english speakers',
      'why are russian cases hard',
      'russian cases confusing',
      'common russian grammar errors',
    ],
    h1: 'Top 10 Mistakes English Speakers Make with Russian Cases (And How to Fix Them)',
    heroImage: {
      src: '/articles/top-russian-case-errors-and-mistakes-by-english-speakers.webp',
      alt: 'Top Russian case errors and mistakes made by English speakers',
      width: 1200,
      height: 630,
    },
    intro:
      'The most common Russian grammar errors — diagnosed and cured. This article compiles the **10 most frequent Russian case errors** made by English speakers — documented from thousands of learner interactions, language forums, and grammar exercises.\n\nEach mistake is presented with the wrong form, the correct form, and a clear explanation of **why** the mistake happens and **how** to avoid it permanently. Use this as a diagnostic checklist — how many of these are you making?',
    whatYouLearn: [
      '**10 most common Russian case mistakes** with wrong vs correct examples',
      'Why each mistake happens (root cause analysis)',
      'How to fix each mistake permanently',
      'Quick reference table of all 10 mistakes',
      '**5 practical strategies** to stop making these errors',
      'Self-test to assess your level',
    ],
    tableAccentVariant: 'orange',
    leadMagnetCta: {
      title: 'Fix your Russian case mistakes with targeted drills',
      description:
        'Our mobile app identifies your specific weak spots and practices them to mastery. Smart exercises, spaced repetition — on Android and iOS.',
      ctaText: 'Download the app and start drilling today',
      ctaHref: '/',
    },
    internalLinks: [
      {
        href: '/learn/lessons/russian-cases-complete-guide',
        label: 'The Complete Guide to Russian Cases: All 6 Cases Explained with Examples',
      },
      {
        href: '/learn/articles/russian-case-endings-cheatsheet',
        label: 'Russian Case Endings: The Ultimate Cheat Sheet',
      },
      {
        href: '/learn/articles/how-to-practice-russian-cases',
        label: 'How to Practice Russian Cases: 5 Proven Methods',
      },
    ],
    sections: [
      {
        h2: 'Why English Speakers Struggle with Russian Cases',
        content:
          "Before we get to the mistakes, it's worth understanding why Russian cases are so hard for English speakers specifically:",
        bullets: [
          '**English has almost no inflection** — word order (not endings) signals grammatical role. Russian uses both.',
          "**English learners have no intuition** for 'what case does this need?' — that instinct has to be built from scratch.",
          "**Russian has 6 cases**, and every noun, adjective, pronoun, and numeral declines for each. That's a lot of forms.",
          "**Some Russian grammatical constructions** are conceptually inverted from English (like нравиться — 'to like').",
          '**The animate/inanimate distinction** in the accusative has no English equivalent.',
        ],
      },
      {
        h2: 'The 10 Most Common Russian Case Mistakes',
        content:
          "Understanding these root causes helps. Now let's look at the 10 specific mistakes they produce.",
        mistakeCards: [
          {
            title: 'MISTAKE #1: Using the Nominative After НЕТ',
            wrong: 'Нет кот. | У меня нет машина. | Здесь нет сахар.',
            correct: 'Нет кота. | У меня нет машины. | Здесь нет сахара.',
            why: "Drill this as a fixed rule: **нет = 'no X' = always genitive**. Every single time.",
            fix: 'Russian Genitive Case — Use 2 (Absence and Negation)',
            fixHref: '/learn/articles/russian-genitive-case',
          },
          {
            title: 'MISTAKE #2: Using the Nominative as a Direct Object',
            wrong: 'Я вижу кот. | Я читаю книга. | Она любит музыка.',
            correct: 'Я вижу кота. | Я читаю книгу. | Она любит музыку.',
            why: 'Whenever you use a transitive verb (вижу, читаю, люблю, покупаю…), check the object. **Fem. -а → -у.** Masc. animate → genitive form. Masc. inanimate → no change.',
            fix: 'Russian Accusative Case — Direct Objects',
            fixHref: '/learn/articles/russian-accusative-case',
          },
          {
            title: 'MISTAKE #3: Animate Masculine: Treating It Like an Inanimate',
            wrong: 'Я вижу студент. | Я встретил врач. | Полиция ищет преступник.',
            correct: 'Я вижу студента. | Я встретил врача. | Полиция ищет преступника.',
            why: 'Remember: **animate masculine accusative = genitive form**. студент → студента. врач → врача. Always ask: is this a person or animal? If yes, use the genitive form as your accusative.',
            fix: 'Russian Accusative Case — Animate vs. Inanimate',
            fixHref: '/learn/articles/russian-accusative-case',
          },
          {
            title: 'MISTAKE #4: Using Я with НРАВИТЬСЯ Instead of Мне',
            wrong: 'Я нравится музыка. | Я нравятся эти книги. | Он нравится футбол.',
            correct: 'Мне нравится музыка. | Мне нравятся эти книги. | Ему нравится футбол.',
            why: 'Hard-wire the pattern: **[dative person] + нравится + [subject]**. Also remember: нравится (singular) / нравятся (plural) agrees with the THING liked, not the person.',
            fix: 'Russian Dative Case — The НРАВИТЬСЯ Construction',
            fixHref: '/learn/articles/russian-dative-case',
          },
          {
            title: 'MISTAKE #5: Using в + Accusative for Location (Instead of Prepositional)',
            wrong: 'Я сейчас в школу. | Он живёт в Москву. | Книга в сумку.',
            correct: 'Я сейчас в школе. | Он живёт в Москве. | Книга в сумке.',
            why: 'Ask one question before using в or на: **Is the thing/person already there (location → prepositional)** or is it going there (direction → accusative)?',
            fix: 'Russian Prepositional Case — В vs. НА',
            fixHref: '/learn/lessons/russian-cases-complete-guide',
          },
          {
            title: 'MISTAKE #6: Using Nominative for Professions After Был/Стала/Работает',
            wrong: 'Она была учитель. | Мой отец был врач. | Он работает инженер.',
            correct: 'Она была учительницей. | Мой отец был врачом. | Он работает инженером.',
            why: 'Rule: **past or future быть + profession = instrumental**. Стать + profession = instrumental. Работать + profession = instrumental. Only the present tense allows nominative.',
            fix: 'Russian Instrumental Case — Professions and Roles',
            fixHref: '/learn/articles/russian-instrumental-case',
          },
          {
            title: 'MISTAKE #7: Adding -ОВ to All Nouns in the Genitive Plural',
            wrong: 'много женщинов | много книгов | много окнов | нет девушков',
            correct: 'много женщин | много книг | много окон | нет девушек',
            why: 'Memorize the **zero-ending pattern**: feminine -а nouns lose everything (женщина → женщин, книга → книг). Neuter -о nouns also zero out with possible fleeting vowels (окно → окон, яблоко → яблок). These are some of the most common nouns in Russian — drill them specifically.',
            fix: 'Russian Genitive Case — Genitive Plural Endings',
            fixHref: '/learn/articles/russian-genitive-case',
          },
          {
            title: 'MISTAKE #8: Using the Wrong Case After Numbers',
            wrong: 'пять стол | три книга | много студент',
            correct: 'пять столов | три книги | много студентов',
            why: 'Learn the three groups: **1 = nominative sg.** | **2/3/4 = genitive sg.** | **5+ = genitive pl.** Apply this every time you use a number in Russian. Также: много, мало, несколько, сколько → genitive plural.',
            fix: 'Russian Genitive Case — Numbers and Quantity',
            fixHref: '/learn/articles/russian-genitive-case',
          },
          {
            title: 'MISTAKE #9: Using -Е Instead of -ИИ for Nouns in -ий/-ие/-ия',
            wrong: 'в Россие | в здание | на станцие | о путешествие',
            correct: 'в России | в здании | на станции | о путешествии',
            why: 'Memorize the rule: **-ий/-ие/-ия → always -ИИ** in the prepositional (and also in the dative for -ия nouns). Country names ending in -ия are especially important: в России, в Италии, в Германии, в Австралии.',
            fix: 'Russian Prepositional Case — The Special -ИИ Ending',
            fixHref: '/learn/lessons/russian-cases-complete-guide',
          },
          {
            title: 'MISTAKE #10: Using Accusative with ЗАНИМАТЬСЯ and Other Reflexive Verbs',
            wrong: 'Я занимаюсь музыку. | Она интересуется историю. | Он увлекается футбол.',
            correct: 'Я занимаюсь музыкой. | Она интересуется историей. | Он увлекается футболом.',
            why: 'Learn these reflexive verbs together with the **instrumental**: заниматься + инструментальный, интересоваться + инструментальный, гордиться + инструментальный, восхищаться + инструментальный. Make a flashcard set for these specifically.',
            fix: 'Russian Instrumental Case — Verbs Taking the Instrumental',
            fixHref: '/learn/articles/russian-instrumental-case',
          },
        ],
      },
      {
        h2: "Bonus Mistakes That Didn't Make the Top 10",
        content:
          'Honourable mentions — mistakes that are very common but slightly less universal than the top 10:',
        bullets: [
          '**Forgetting to add Н- to pronouns after prepositions:** к ему ✗ → к нему ✓ | от ей ✗ → от неё ✓',
          '**Mixing up из (from inside) and от (from a person):** из врача ✗ → от врача ✓',
          '**Using dative instead of genitive for possession:** книга другу ✗ → книга друга ✓',
          '**Forgetting adjective agreement in case:** Я вижу красивый женщину ✗ → красивую женщину ✓',
          '**Using accusative instead of prepositional with о:** о что ты думаешь? ✗ → о чём ты думаешь? ✓',
          '**Forgetting fleeting vowels in genitive plural:** ручков ✗ → ручек ✓ | окнов ✗ → окон ✓',
        ],
      },
      {
        h2: 'Quick Reference: All 10 Mistakes at a Glance',
        content: 'Use this table as a checklist when reviewing your Russian writing or speaking:',
        table: {
          caption: 'Summary of the 10 most common Russian case mistakes',
          headers: ['#', 'Mistake pattern', 'Wrong', 'Correct', 'Core rule'],
          boldColumnIndices: [4],
          rows: [
            ['#1', 'нет + nominative', 'нет кот', 'нет кота', 'нет always takes genitive'],
            [
              '#2',
              'Direct object → nominative',
              'Я вижу кот',
              'Я вижу кота',
              'Transitive verbs take accusative',
            ],
            [
              '#3',
              'Animate acc. = nominative',
              'Я вижу студент',
              'Я вижу студента',
              'Animate masc. acc. = genitive form',
            ],
            [
              '#4',
              'я нравится (wrong liker)',
              'Я нравится музыка',
              'Мне нравится музыка',
              'The person who likes → dative',
            ],
            [
              '#5',
              'Direction = prepositional',
              'Я в школу сейчас',
              'Я в школе сейчас',
              'Static location → prepositional',
            ],
            [
              '#6',
              'Professions after был/стала',
              'Она была учитель',
              'Она была учителем',
              'Past быть + profession → instrumental',
            ],
            [
              '#7',
              'Genitive plural → -ов',
              'много женщинов',
              'много женщин',
              'Fem. -а nouns → zero ending in gen. pl.',
            ],
            [
              '#8',
              'Numbers: all take same case',
              'пять стол',
              'пять столов',
              '5+ takes genitive plural',
            ],
            [
              '#9',
              '-ий/-ие/-ия → -е',
              'в России → wrong',
              'в России → correct',
              'These nouns take -ИИ, not -Е',
            ],
            [
              '#10',
              'Заниматься + accusative',
              'заниматься музыку',
              'заниматься музыкой',
              'заниматься always takes instrumental',
            ],
          ],
        },
      },
      {
        h2: 'How to Stop Making These Mistakes: 5 Practical Strategies',
        content: '',
        subsections: [
          {
            h3: '1. Learn Grammar Rules, Not Just Vocabulary',
            content:
              'Most of these mistakes stem from learning Russian words without their grammatical context. When you learn нет, also learn that **нет always takes genitive**. When you learn заниматься, learn it as **заниматься + instrumental**. Package rules with the words they govern.',
          },
          {
            h3: '2. Use the "Case Question" Trick',
            content:
              'Before using a noun in a sentence, ask the case question out loud: **Кого? Что?** (accusative) — **Кому? Чему?** (dative) — **Кем? Чем?** (instrumental). This activates the case system consciously and slows down the automatic English-patterning reflex.',
          },
          {
            h3: '3. Drill the Trickiest Patterns Separately',
            content:
              'Three patterns cause **80% of errors**: нет + genitive, accusative animate vs. inanimate, and direction (accusative) vs. location (prepositional). Create dedicated drills for each of these and practice them until they become automatic.',
          },
          {
            h3: '4. Read Russian and Hunt for Case Endings',
            content:
              "**Active reading** — where you identify the case of every noun you encounter — is one of the most effective ways to build case intuition. When you read Я вижу студента, don't just process the meaning. Note: студента = accusative animate = genitive form. Over time, this becomes instinct.",
          },
          {
            h3: '5. Get Corrected Immediately',
            content:
              'Case errors that go uncorrected **fossilize** — they become habits that get harder to break the longer they persist. Use an app, a tutor, or a language exchange partner to get real-time feedback. The sooner a mistake is corrected, the less likely it is to solidify.',
          },
        ],
      },
      {
        h2: 'Self-test: How many mistakes are you making?',
        content: 'Go through the top 10 list and honestly assess each one. Score yourself:',
        bullets: [
          '**0–2 mistakes:** Advanced learner — focus on bonus mistakes and fine-tuning',
          '**3–5 mistakes:** Intermediate — pick the top 3 most frequent ones and drill them first',
          '**6–8 mistakes:** Beginner-intermediate — start with mistakes #1, #2, #5 (most frequent)',
          '**9–10 mistakes:** Beginner — use our structured app to drill cases systematically',
        ],
      },
    ],
    faq: [
      {
        question: 'Why are Russian cases so hard for English speakers?',
        answer:
          "Russian cases are hard for English speakers because **English abandoned its case system centuries ago**. Modern English marks grammatical role almost entirely through word order — 'the dog bites the man' vs. 'the man bites the dog'. Russian marks it through noun endings. English speakers have no grammatical intuition for cases at all — it must be built from scratch, and that takes time and deliberate practice.",
      },
      {
        question: 'How long does it take to master Russian cases?',
        answer:
          'Most learners reach comfortable accuracy with the most common cases (nominative, accusative, genitive) within **6–12 months** of consistent study. Full command of all 6 cases, including the irregular genitive plural and all the locative exceptions, typically takes **2–4 years** of serious study. However, significant progress on the most frequent patterns can be made in just a few months with focused practice.',
      },
      {
        question: 'What is the most common Russian case mistake?',
        answer:
          'Based on learner error analysis, the **single most common mistake** is using the nominative after нет — saying Нет кот instead of Нет кота. The second most common is failing to change the direct object to the accusative (Я вижу кот instead of кота). These two mistakes occur in almost every sentence a beginner constructs, making them the highest-priority items to fix.',
      },
    ],
    conclusionIntro:
      "Russian cases are genuinely difficult — but the specific mistakes that English speakers make are **predictable, diagnosable, and fixable**. The 10 mistakes in this article account for the vast majority of Russian case errors made by native English speakers. The path forward is clear: identify which mistakes you're making, understand WHY they happen (usually because English works differently), and drill the correct pattern until it replaces the incorrect one.",
    conclusionBullets: [],
    conclusion:
      'Fix your Russian case mistakes with targeted drills in our mobile app. Smart exercises that identify your specific weak spots and practice them to mastery. Available on Android and iOS.',
    ctaText: 'Download the app',
    ctaHref: '/',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Top 10 Mistakes English Speakers Make with Russian Cases (And How to Fix Them)',
      description:
        'The 10 most common Russian case errors by English speakers — diagnosed and cured. Wrong vs correct examples, why each mistake happens, how to fix it.',
      datePublished: '2026-03-12',
      dateModified: '2026-03-12',
      author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
      publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://russiandeclensions.com/learn/articles/top-10-russian-case-mistakes',
      },
      keywords:
        'russian cases mistakes, russian grammar mistakes english speakers, why are russian cases hard, common russian grammar errors',
    },
  },
  'russian-prepositions-and-cases': {
    slug: 'russian-prepositions-and-cases',
    title: 'Russian Prepositions and Cases: Which Case Does Each Preposition Take?',
    metaTitle:
      'Russian Prepositions and Cases | Complete Reference Guide | Russian Cases with Anna',
    metaDescription:
      'The complete reference: every Russian preposition mapped to its required case. Master table of 44 prepositions, dual-case rules (в/на/за/под), deep-dive per case, memory strategies.',
    keywords: [
      'russian prepositions cases',
      'russian prepositions with genitive',
      'russian prepositions list with cases',
      'в на с по russian case',
      'russian prepositions accusative vs prepositional',
      'russian grammar prepositions chart',
    ],
    h1: 'Russian Prepositions and Cases: Which Case Does Each Preposition Take?',
    heroImage: {
      src: '/articles/russian-prepositions-case-grammar-reference.webp',
      alt: 'Russian prepositions and case grammar reference table',
      width: 1200,
      height: 630,
    },
    intro:
      "One of the **most practical skills** in Russian is knowing **which case each preposition requires**. Once you know that **без** always takes genitive, that **к** always takes dative, and that **с** can take either genitive OR instrumental depending on meaning — your accuracy jumps dramatically.\n\nThis is the **complete reference guide**. Every major Russian preposition is listed with its required case, its meaning, and a real example. Use this as a lookup tool whenever you're unsure, and gradually these pairings will become automatic.",
    whatYouLearn: [
      'Complete master table: every Russian preposition mapped to its required case',
      'Genitive prepositions (18 prepositions)',
      'Dative prepositions (6 prepositions)',
      'Accusative prepositions (8 prepositions)',
      'Instrumental prepositions (7 prepositions)',
      'Prepositional prepositions (5 prepositions)',
      'Dual-case prepositions — prepositions that take 2 different cases depending on meaning',
      'В vs. НА — the most important location/direction pair explained',
      'Memory strategies to lock in preposition-case pairings',
    ],
    leadMagnetCta: {
      title: 'Practice Russian prepositions and cases with our mobile app',
      description: 'Targeted exercises for every preposition-case pairing — Android and iOS.',
      ctaText: 'Download the app',
      ctaHref: '/',
    },
    internalLinks: [
      {
        href: '/learn/lessons/russian-cases-complete-guide',
        label: 'The Complete Guide to Russian Cases: All 6 Cases Explained with Examples',
      },
      {
        href: '/learn/articles/russian-case-endings-cheatsheet',
        label: 'Russian Case Endings: The Ultimate Cheat Sheet',
      },
      {
        href: '/learn/articles/russian-genitive-case',
        label: 'Russian Genitive Case: Rules, Endings & 32 Real Examples',
      },
    ],
    tableAccentVariant: 'genitive',
    sections: [
      {
        h2: 'The Master Table: Every Russian Preposition and Its Case',
        content:
          'The table below lists **all major Russian prepositions**, organized by the case they require. Color-coded by case for easy reference.\n\n**Color key:** Genitive (navy) · Dative (violet) · Accusative (red) · Instrumental (teal) · Prepositional (orange).',
        table: {
          caption: '44 Russian prepositions by required case',
          boldColumnIndices: [0, 1],
          headers: ['Case', 'Prep.', 'Meaning', 'With noun', 'Full example + translation'],
          rows: [
            [
              'Genitive',
              'без',
              'without',
              'без молока',
              'Я пью кофе без молока. — I drink coffee without milk.',
            ],
            [
              'Genitive',
              'до',
              'until / before / up to',
              'до урока',
              'Позвони мне до урока. — Call me before the lesson.',
            ],
            [
              'Genitive',
              'из',
              'from (inside of)',
              'из России',
              'Она приехала из России. — She came from Russia.',
            ],
            [
              'Genitive',
              'с',
              'from (off a surface)',
              'с полки',
              'Книга упала с полки. — The book fell off the shelf.',
            ],
            ['Genitive', 'у', 'at / near / by', 'у меня', 'У меня есть кошка. — I have a cat.'],
            [
              'Genitive',
              'от',
              'from (a person/source)',
              'от друга',
              'Письмо от друга. — A letter from a friend.',
            ],
            [
              'Genitive',
              'после',
              'after',
              'после работы',
              'После работы я устал. — After work I was tired.',
            ],
            [
              'Genitive',
              'для',
              'for (benefit of)',
              'для тебя',
              'Это подарок для тебя. — This is a gift for you.',
            ],
            [
              'Genitive',
              'кроме',
              'except / besides',
              'кроме меня',
              'Все кроме меня пришли. — Everyone except me came.',
            ],
            [
              'Genitive',
              'вокруг',
              'around',
              'вокруг города',
              'Мы ехали вокруг города. — We drove around the city.',
            ],
            [
              'Genitive',
              'мимо',
              'past / by',
              'мимо школы',
              'Он прошёл мимо школы. — He walked past the school.',
            ],
            [
              'Genitive',
              'вместо',
              'instead of',
              'вместо кофе',
              'Выпей воды вместо кофе. — Drink water instead of coffee.',
            ],
            [
              'Genitive',
              'напротив',
              'opposite / across from',
              'напротив банка',
              'Кафе напротив банка. — The café is across from the bank.',
            ],
            [
              'Genitive',
              'из-за',
              'because of / from behind',
              'из-за дождя',
              'Из-за дождя мы остались дома. — Because of the rain we stayed home.',
            ],
            [
              'Genitive',
              'из-под',
              'from under',
              'из-под стола',
              'Кот вылез из-под стола. — The cat crawled out from under the table.',
            ],
            [
              'Genitive',
              'ради',
              'for the sake of',
              'ради тебя',
              "Ради тебя я на всё готов. — For your sake I'm ready for anything.",
            ],
            [
              'Genitive',
              'около',
              'near / around',
              'около школы',
              "Встретимся около школы. — Let's meet near the school.",
            ],
            [
              'Genitive',
              'вдоль',
              'along',
              'вдоль реки',
              'Мы шли вдоль реки. — We walked along the river.',
            ],
            [
              'Dative',
              'к',
              'toward / to (person or goal)',
              'к врачу, к морю',
              'Иди к врачу! — Go to the doctor!',
            ],
            [
              'Dative',
              'по',
              'along / around / according to',
              'по улице, по закону',
              'Мы гуляли по парку. — We walked around the park.',
            ],
            [
              'Dative',
              'благодаря',
              'thanks to',
              'благодаря тебе',
              'Благодаря тебе всё получилось! — Thanks to you, everything worked out!',
            ],
            [
              'Dative',
              'вопреки',
              'contrary to / despite',
              'вопреки прогнозу',
              'Вопреки прогнозу, погода была хорошей. — Despite the forecast, weather was good.',
            ],
            [
              'Dative',
              'согласно',
              'according to (formal)',
              'согласно закону',
              'Согласно закону, это запрещено. — According to the law, this is forbidden.',
            ],
            [
              'Dative',
              'навстречу',
              'toward / to meet',
              'навстречу ветру',
              'Она шла навстречу ветру. — She walked into the wind.',
            ],
            [
              'Accusative',
              'в',
              'into / to (direction)',
              'в школу',
              'Я иду в школу. — I am going to school.',
            ],
            [
              'Accusative',
              'на',
              'onto / to (direction)',
              'на работу',
              'Она едет на работу. — She is going to work.',
            ],
            [
              'Accusative',
              'за',
              'behind (motion) / for',
              'за угол',
              'Он зашёл за угол. — He went around the corner.',
            ],
            [
              'Accusative',
              'под',
              'under (motion)',
              'под стол',
              'Кот залез под стол. — The cat crawled under the table.',
            ],
            [
              'Accusative',
              'через',
              'across / through / in (time)',
              'через час',
              'Приходи через час. — Come in an hour.',
            ],
            [
              'Accusative',
              'про',
              'about (informal)',
              'про тебя',
              'Он рассказал про тебя. — He talked about you.',
            ],
            [
              'Accusative',
              'спустя',
              'after / later (time)',
              'спустя год',
              'Спустя год он вернулся. — A year later he returned.',
            ],
            [
              'Accusative',
              'о/об',
              'against (bump into)',
              'о камень',
              'Он споткнулся о камень. — He stumbled over a stone.',
            ],
            [
              'Instrumental',
              'с',
              'with / together with',
              'с другом',
              'Я иду с другом. — I am going with a friend.',
            ],
            [
              'Instrumental',
              'за',
              'behind / at (position)',
              'за столом',
              'Он сидит за столом. — He is sitting at the table.',
            ],
            [
              'Instrumental',
              'перед',
              'in front of / before',
              'перед домом',
              'Стой перед домом. — Stand in front of the house.',
            ],
            [
              'Instrumental',
              'над',
              'above / over',
              'над городом',
              'Самолёт летит над городом. — The plane flies above the city.',
            ],
            [
              'Instrumental',
              'под',
              'under (position)',
              'под столом',
              'Книга под столом. — The book is under the table.',
            ],
            [
              'Instrumental',
              'между',
              'between',
              'между нами',
              'Это между нами. — This is between us.',
            ],
            [
              'Instrumental',
              'рядом с',
              'next to / beside',
              'рядом с банком',
              'Кафе рядом с банком. — The café is next to the bank.',
            ],
            [
              'Prepositional',
              'в',
              'in / inside (location)',
              'в Москве',
              'Я живу в Москве. — I live in Moscow.',
            ],
            [
              'Prepositional',
              'на',
              'on / at (location)',
              'на столе',
              'Книга на столе. — The book is on the table.',
            ],
            [
              'Prepositional',
              'о/об',
              'about / concerning',
              'о работе',
              'Мы говорим о работе. — We are talking about work.',
            ],
            [
              'Prepositional',
              'при',
              'in the presence of / under',
              'при Сталине',
              'При Сталине жизнь была трудной. — Life under Stalin was hard.',
            ],
            [
              'Prepositional',
              'по',
              'upon / after (formal)',
              'по приезде',
              'По приезде он позвонил. — Upon arriving he called.',
            ],
          ],
        },
      },
      {
        h2: 'Dual-Case Prepositions: Prepositions That Take Two Different Cases',
        content:
          'Some Russian prepositions can take **two different cases**, with the meaning changing depending on which case is used. These are the **most important prepositions to master** because a single wrong case changes the meaning of your sentence.',
        table: {
          caption: 'Prepositions that take two cases (в, на, за, под, о/об)',
          boldColumnIndices: [0, 1, 2],
          headers: ['Prep.', 'Case 1', 'Example 1', 'Case 2', 'Example 2'],
          rows: [
            ['в', 'Accusative', 'в школу (to school)', 'Prepositional', 'в школе (at school)'],
            ['на', 'Accusative', 'на работу (to work)', 'Prepositional', 'на работе (at work)'],
            [
              'за',
              'Accusative',
              'сесть за стол (sit down at table)',
              'Instrumental',
              'за столом (sitting at table)',
            ],
            [
              'под',
              'Accusative',
              'положить под стол (put under table)',
              'Instrumental',
              'под столом (under the table)',
            ],
            [
              'о/об',
              'Accusative',
              'споткнуться о порог (trip over threshold)',
              'Prepositional',
              'говорить о работе (talk about work)',
            ],
          ],
        },
        bullets: [
          '**The В/НА direction vs. location rule** — the most tested dual-case pattern:',
          '**В/НА + Accusative = DIRECTION** (motion toward): Я иду в школу. (I am going TO school.) Положи книгу на стол. (Put the book ON/ONTO the table.)',
          '**В/НА + Prepositional = LOCATION** (being somewhere, static): Я нахожусь в школе. (I am AT school.) Книга лежит на столе. (The book is ON the table.)',
        ],
      },
      {
        h2: 'Genitive Prepositions — Deep Dive',
        content:
          'The **genitive case** has more prepositions than any other case. Here are the most important ones grouped by semantic function.',
        subsections: [
          {
            h3: 'Origin and Separation: из, с, от',
            content:
              '**из** — from inside a place: из России (from Russia), из дома (from the house), из школы (from school). **с** — from off a surface: с полки (from the shelf), с работы (from work — colloquial), с крыши (from the roof). **от** — from a person or as a source: от друга (from a friend), от врача (from the doctor), от боли (from pain). **Key distinction:** из vs. от — **из** is for places (interior); **от** is for people and sources. Я вернулся из Москвы (I returned from Moscow — a place) vs. Я получил письмо от Ивана (I received a letter from Ivan — a person).',
          },
          {
            h3: 'Time Prepositions: до, после, с (…до)',
            content:
              '**до** — until / before: до урока (before the lesson), до свидания (goodbye — until the meeting). **после** — after: после работы (after work), после дождя (after rain). **с … до** — from … until: с утра до вечера (from morning until evening).',
          },
          {
            h3: 'Spatial Prepositions: у, около, вокруг, вдоль, мимо, напротив',
            content:
              '**у** — at/near/by (proximity): у окна (by the window), у меня (at my place / I have). **около** — near/around: около школы (near the school), около часа (about an hour). **вокруг** — around (encircling): вокруг стола (around the table), вокруг города (around the city). **вдоль** — along: вдоль реки (along the river), вдоль дороги (along the road). **мимо** — past/by: мимо нас (past us), пройти мимо (to walk past). **напротив** — opposite/across from: напротив банка (across from the bank).',
          },
        ],
      },
      {
        h2: 'Dative Prepositions — Deep Dive',
        subsections: [
          {
            h3: 'К — Direction Toward',
            content:
              "**К** expresses movement or orientation toward a person, object, or abstract goal — it is the **dative counterpart** of в/на for direction: к врачу (to the doctor), к другу (to a friend's place), к окну (to/toward the window), стремиться к цели (to strive toward a goal) — abstract direction.",
          },
          {
            h3: 'По — The Multi-Purpose Preposition',
            content:
              '**Along/around** a surface: гулять по парку (to walk around the park), идти по улице (to walk along the street). **Means of communication:** по телефону (by phone), по почте (by mail), по интернету (online). **Field/subject:** урок по математике (math lesson), книга по истории (history book). **Recurring time:** по понедельникам (on Mondays), по вечерам (in the evenings). **According to:** по закону (according to the law), по правилам (by the rules).',
          },
        ],
      },
      {
        h2: 'Accusative Prepositions — Deep Dive',
        subsections: [
          {
            h3: 'В and НА for Direction',
            content:
              '**В** and **на** are the primary accusative prepositions for direction. The same contrast applies as for location (see dual-case table above), but here they express **motion**. **В** = motion into an enclosed space: в школу, в Россию, в магазин. **НА** = motion onto a surface or to certain locations: на стол, на работу, на Кубу.',
          },
          {
            h3: 'ЧЕРЕЗ — Across / In (Time)',
            content:
              '**Across/through:** переплыть через реку (to swim across the river), пройти через лес (to walk through the forest). **In (time):** через час (in an hour), через неделю (in a week), через год (in a year).',
          },
          {
            h3: 'ЗА and ПОД for Motion',
            content:
              '**За + accusative** = motion to behind: зайти за угол (go around the corner), сесть за стол (sit down at the table). **Под + accusative** = motion under: положить под стол (put under the table), залезть под кровать (crawl under the bed).',
          },
        ],
      },
      {
        h2: 'Instrumental Prepositions — Deep Dive',
        subsections: [
          {
            h3: 'С — With',
            content:
              '**С + instrumental** is one of the most frequent constructions in Russian. It expresses: **Accompaniment:** с другом (with a friend), с семьёй (with the family). **Ingredients/components:** кофе с молоком (coffee with milk), суп с грибами (mushroom soup).',
          },
          {
            h3: 'Spatial Position Prepositions',
            content:
              '**За + instrumental** = position behind/at: за столом (at the table), за горой (behind the mountain). **Перед + instrumental** = in front of: перед домом (in front of the house), перед сном (before sleep — temporal). **Над + instrumental** = above/over: над городом (above the city), над столом (over the table). **Под + instrumental** = below (position): под столом (under the table), под землёй (underground). **Между + instrumental** = between: между нами (between us), между домами (between the houses).',
          },
        ],
      },
      {
        h2: 'Prepositional Prepositions — Deep Dive',
        subsections: [
          {
            h3: 'В and НА for Location',
            content:
              '**В** and **на** with the prepositional case express **static location** — where something already is, as opposed to direction: **В** (in/inside): в Москве, в школе, в доме, в России. **НА** (on/at): на столе, на работе, на улице, на Кубе.',
          },
          {
            h3: 'О/ОБ — About',
            content:
              '**О + prepositional** expresses the topic of mental or communicative engagement: говорить о (to talk about), думать о (to think about), мечтать о (to dream about), писать о (to write about). **О чём?** = About what? | **О ком?** = About whom? Use **об** before vowels: об этом (about this), об Иване (about Ivan).',
          },
        ],
      },
      {
        h2: 'Memory Strategies for Russian Preposition-Case Pairings',
        subsections: [
          {
            h3: 'Strategy 1: Learn Prepositions in Case Groups',
            content:
              "Rather than learning each preposition individually, learn them in **case clusters**. This reinforces the case system at the same time. Start with the genitive cluster (без, до, из, у, от, после, для, кроме) and drill until it's automatic before moving to dative (к, по).",
          },
          {
            h3: 'Strategy 2: Create Sentences for Every Preposition',
            content:
              'For each preposition, create one **memorable personal sentence** using it correctly. Your own examples are far more memorable than textbook examples. Без тебя мне плохо (I feel bad without you) will stick longer than без + noun.',
          },
          {
            h3: 'Strategy 3: Pay Special Attention to Dual-Case Prepositions',
            content:
              '**В, на, за**, and **под** each take two cases. Create **paired sentences** for each: Я иду в школу (going, accusative) / Я в школе (being there, prepositional). Я поставил книгу за шкаф (accusative) / Книга за шкафом (instrumental). Learn the pairs together.',
          },
          {
            h3: 'Strategy 4: Use the "Where?" vs. "Where to?" Test',
            content:
              'For **в** and **на**: ask yourself — is this answering **"Where?"** (prepositional) or **"Where to?"** (accusative)? This single question eliminates the most common preposition-case error.',
          },
        ],
      },
    ],
    conclusion:
      'Mastering **Russian prepositions and cases** is one of the fastest ways to improve your accuracy. The **preposition → case pairing** is the key: once you know that без takes genitive and к takes dative, you lock in the correct ending.\n\nFocus on the **dual-case prepositions** (в, на, за, под) first — they are the most tested. Use the **"Where?" vs. "Where to?"** test for в/на. Practice with real sentences, and soon these pairings will become automatic.',
    conclusionBullets: [
      '**Genitive** has the most prepositions (18) — learn the cluster без, до, из, у, от, после, для, кроме.',
      '**В/НА + Accusative** = direction (where to?). **В/НА + Prepositional** = location (where?).',
      '**Dual-case prepositions** (в, на, за, под) — motion vs. position changes the case.',
      'Use the master table as a **lookup tool** until pairings become automatic.',
    ],
    ctaText: 'Practice prepositions in the app',
    ctaHref: '/',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Russian Prepositions and Cases: Which Case Does Each Preposition Take?',
      description:
        'Complete reference guide: every Russian preposition mapped to its case. Master table of 44 prepositions, dual-case rules, deep-dive per case, memory strategies.',
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
        'russian prepositions cases, russian prepositions with genitive, в на с по russian case',
    },
    faq: [
      {
        question: 'Which Russian prepositions take the genitive case?',
        answer:
          'The main genitive prepositions are: **без**, **до**, **из**, **с**, **у**, **от**, **после**, **для**, **кроме**, **вокруг**, **мимо**, **вместо**, **напротив**, **из-за**, **из-под**, **ради**, **около**, **вдоль**. Use the acronym **БДИ-УОП-ДК** (Без · До · Из · У · От · После · Для · Кроме) for the most frequent ones.',
      },
      {
        question: 'What is the difference between в + accusative and в + prepositional?',
        answer:
          '**в + Accusative** = **direction** (motion toward): Я иду в школу (I am going TO school). **в + Prepositional** = **location** (being somewhere): Я в школе (I am AT school). The same rule applies to на.',
      },
      {
        question: 'How do I know when с takes genitive vs. instrumental?',
        answer:
          '**с + genitive** = "from" (off a surface): книга упала с полки (the book fell off the shelf). **с + instrumental** = "with" (accompaniment): я иду с другом (I am going with a friend). The meaning is completely different.',
      },
    ],
  },
};

import type { LandingLanguage } from '@/data/website/landingTranslations';
import { learnArticleTranslations } from './learnArticleTranslations';

export function getLearnArticle(slug: string, lang?: LandingLanguage): LearnArticle | null {
  const base = learnArticles[slug] ?? null;
  if (!base) return null;
  if (!lang || lang === 'en_en') return base;
  const tr = learnArticleTranslations[slug]?.[lang];
  return tr ?? base;
}

export function getAllLearnArticleSlugs(): string[] {
  return Object.keys(learnArticles);
}
