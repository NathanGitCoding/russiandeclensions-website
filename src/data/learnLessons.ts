/**
 * SEO lesson content for /learn/lessons/[slug]
 * Target: searches on Russian declensions, cases, grammar
 */

/** Image optimisée SEO : 1200×800 ou 1200×675, WebP recommandé */
export interface LearnLessonImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
}

/** Tableau HTML pour tableaux de déclinaison, responsive */
export interface LearnLessonTable {
  headers: string[];
  rows: string[][];
  caption?: string;
  /** Column indices (0-based) to render in bold (e.g. terminaisons) */
  boldColumnIndices?: number[];
}

export interface LearnLessonSection {
  h2: string;
  content?: string;
  subsections?: { h3: string; content: string }[];
  /** Tableau de déclinaison (ex. datif singulier/pluriel) */
  table?: LearnLessonTable;
  /** Image de section (ex. schéma grammatical) */
  image?: LearnLessonImage;
  /** Lien "Read more" à la fin de la section (vers article détaillé) */
  link?: { href: string; label: string };
}

export interface LearnLessonFaqItem {
  question: string;
  answer: string;
}

export interface LearnLesson {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  intro: string;
  /** Box "What you'll learn" to reduce bounce rate */
  whatYouLearn?: string[];
  sections: LearnLessonSection[];
  conclusion: string;
  ctaText: string;
  ctaHref: string;
  jsonLd: Record<string, unknown>;
  /** Image hero rectangle 1200×800, alt keywordé */
  heroImage?: LearnLessonImage;
  /** Liens internes vers page pilier / autres cas */
  internalLinks?: { href: string; label: string }[];
  /** Where to render internal links: top (default) or in conclusion */
  internalLinksPosition?: 'top' | 'conclusion';
  /** FAQ pour schema FAQPage et discoverabilité */
  faq?: LearnLessonFaqItem[];
  /** Last updated date for trust signal (e.g. "March 2026") */
  lastUpdated?: string;
  /** Structured conclusion with bullet points (overrides conclusion when set) */
  conclusionIntro?: string;
  conclusionBullets?: string[];
  conclusionOutro?: string;
}

export const learnLessons: Record<string, LearnLesson> = {
  'russian-cases-complete-guide': {
    slug: 'russian-cases-complete-guide',
    title: 'The Complete Guide to Russian Cases | All 6 Cases Explained',
    metaTitle: 'Russian Cases: Complete Guide with Examples | Russian Cases with Anna',
    metaDescription:
      'Master all 6 Russian cases with our complete guide. Nominative, genitive, dative, accusative, instrumental, prepositional — definitions, endings, prepositions, and examples. Free grammar resource.',
    keywords: [
      'russian cases',
      'russian grammar cases',
      '6 russian cases',
      'russian cases explained',
      'russian case system',
      'learn russian cases',
    ],
    h1: 'The Complete Guide to Russian Cases',
    intro:
      "All 6 cases explained with examples. If you're learning Russian, you've almost certainly encountered the concept of Russian cases — and found them deeply confusing. You're not alone.\n\nThe Russian case system is one of the biggest hurdles for English speakers, but once you understand it, reading and speaking Russian becomes dramatically easier. In this complete guide, we'll break down all 6 Russian cases one by one, explain what each one does, show you the endings, and give you plenty of real examples.",
    lastUpdated: 'March 2026',
    whatYouLearn: [
      'What Russian cases are and why they exist',
      'All 6 cases with their meanings, endings, and real examples',
      'Which prepositions trigger which case',
      'The most common mistakes to avoid',
      'Practical tips to memorize the case system faster',
    ],
    internalLinksPosition: 'conclusion',
    internalLinks: [
      {
        href: '/learn/lessons/genitive-case',
        label: 'Russian Genitive Case: Rules, Endings & 30+ Real Examples',
      },
      {
        href: '/learn/lessons/accusative-case',
        label: 'Russian Accusative Case: Direct Objects, Animate vs Inanimate, and Motion Verbs',
      },
      {
        href: '/learn/lessons/dative-case-declension',
        label: "Russian Dative Case: How to Say 'To' and 'For' in Russian",
      },
      {
        href: '/learn/lessons/instrumental-case',
        label: "Russian Instrumental Case: When to Use It and Why It's Easier Than You Think",
      },
      {
        href: '/learn/lessons/prepositional-case',
        label: 'Russian Prepositional Case: The Only Case That Never Stands Alone',
      },
      {
        href: '/learn/lessons/russian-prepositions-cases',
        label: 'Russian Prepositions and Cases: Which Case Does Each Preposition Take?',
      },
    ],
    sections: [
      {
        h2: 'What Are Russian Cases? (And Why Does Russian Have Them?)',
        content:
          'In **English**, word order tells you who is doing what. "The dog bites the man" means something very different from "The man bites the dog" — even though it uses the exact same words.\n\n**Russian** works differently. Russian is a highly **inflected language**, meaning the endings of words change depending on their grammatical role in the sentence. These different forms are called **cases**. Because each word carries its grammatical function inside its ending, Russian word order is much more flexible than English.\n\nExample: **Собака кусает мужчину** (The dog bites the man). Whether you write this as "Мужчину кусает собака" or "Кусает собака мужчину", the meaning stays the same — the ending **-у** on мужчину always signals that he is the one being bitten.\n\nRussian has **6 cases**, and every noun, pronoun, adjective, and numeral changes its form depending on which case it\'s in. Learning these cases is the **key to unlocking Russian grammar**.',
      },
      {
        h2: 'Overview: The 6 Russian Cases at a Glance',
        image: {
          src: '/articles/the-six-russian-cases-quick-reference.webp',
          alt: 'The six Russian cases quick reference chart',
          width: 1200,
          height: 630,
        },
        content:
          'Here is a **quick overview** of all 6 Russian cases before we go into detail on each one:',
        table: {
          headers: ['Case', 'Russian Name', 'Core Question', 'Primary Use', 'Quick Example'],
          rows: [
            [
              'Nominative',
              'Именительный',
              'Кто? Что? (Who? What?)',
              'Subject of the sentence',
              'Кот спит. (The cat sleeps.)',
            ],
            [
              'Genitive',
              'Родительный',
              'Кого? Чего? (Of whom? Of what?)',
              'Possession, absence, quantity',
              'Нет кота. (There is no cat.)',
            ],
            [
              'Dative',
              'Дательный',
              'Кому? Чему? (To whom?)',
              'Indirect object, recipient',
              'Я дал коту молоко. (I gave milk to the cat.)',
            ],
            [
              'Accusative',
              'Винительный',
              'Кого? Что? (Whom? What?)',
              'Direct object, direction',
              'Я вижу кота. (I see the cat.)',
            ],
            [
              'Instrumental',
              'Творительный',
              'Кем? Чем? (With whom?)',
              'Instrument, accompaniment, role',
              'Я пишу ручкой. (I write with a pen.)',
            ],
            [
              'Prepositional',
              'Предложный',
              'О ком? О чём? (About whom?)',
              'Location, topic',
              "Я думаю о коте. (I'm thinking about the cat.)",
            ],
          ],
        },
      },
      {
        h2: '1. The Nominative Case (Именительный падеж)',
        content:
          "The **nominative case** is the **base form** of a Russian word — the form you'll find in a dictionary. Every Russian noun has a nominative form, and it answers the questions **Кто?** (Who?) or **Что?** (What?). The nominative case is used for the **subject** of a sentence: the person or thing performing the action.",
        table: {
          headers: [
            'Gender',
            'Singular Ending',
            'Example (Singular)',
            'Plural Ending',
            'Example (Plural)',
          ],
          boldColumnIndices: [1, 3],
          rows: [
            [
              'Masculine',
              '-Ø / -й / -ь',
              'стол (table), музей (museum)',
              '-ы / -и',
              'столы, музеи',
            ],
            [
              'Feminine',
              '-а / -я / -ь',
              'женщина (woman), неделя (week)',
              '-ы / -и / -и',
              'женщины, недели',
            ],
            ['Neuter', '-о / -е', 'окно (window), море (sea)', '-а / -я', 'окна, моря'],
          ],
        },
        subsections: [
          {
            h3: 'Nominative Case Examples',
            content:
              '**Иван читает книгу.** — Ivan is reading a book. (Иван is the subject → nominative)\n\n**Собака бежит.** — The dog is running. (Собака is the subject → nominative)\n\n**Москва — красивый город.** — Moscow is a beautiful city. (Москва is the subject → nominative)\n\n**Key point:** The nominative is also used for the **predicate noun** after the verb "to be" (which is usually omitted in the present tense in Russian). Example: **Он — врач.** (He is a doctor.) — Врач is in the nominative.',
          },
        ],
      },
      {
        h2: '2. The Genitive Case (Родительный падеж)',
        content:
          "The **genitive case** is the most frequently used case after the nominative — and one of the most important to master for everyday Russian. It answers the questions **Кого?** (Of whom?) or **Чего?** (Of what?).\n\nThe genitive expresses **possession** (like the English \"of\" or apostrophe-s), **absence**, and **quantity**. It is also required after many common Russian prepositions.\n\n- **Possession:** книга студента — the student's book\n- **Absence with нет:** У меня нет времени. — I have no time\n- **After numbers 2, 3, 4:** два стола, три окна\n- **After numbers 5+:** пять столов\n- **After prepositions:** без, до, из, от, у, после, для, кроме\n- **Comparison:** больше кошки — bigger than a cat\n\n**Examples:** Это книга моего друга. — This is my friend's book. У неё нет машины. — She doesn't have a car. Он приехал из России. — He came from Russia.",
        link: {
          href: '/learn/articles/russian-genitive-case',
          label: 'Russian Genitive Case: Rules, Endings & 32 Real Examples',
        },
        table: {
          caption: 'Genitive case endings by gender',
          headers: ['Gender', 'Singular', 'Example', 'Plural', 'Example'],
          boldColumnIndices: [1, 3],
          rows: [
            ['Masculine (hard)', '-а', 'стол → стола', '-ов', 'стол → столов'],
            [
              'Masculine (soft/sibilant)',
              '-я / -а',
              'музей → музея',
              '-ев / -ей',
              'музей → музеев',
            ],
            ['Feminine (-а/-я)', '-ы / -и', 'женщина → женщины', '-Ø / -ь', 'женщин'],
            ['Feminine (-ь)', '-и', 'ночь → ночи', '-ей', 'ночей'],
            ['Neuter (-о)', '-а', 'окно → окна', '-Ø', 'окон'],
            ['Neuter (-е)', '-я', 'море → моря', '-ей', 'морей'],
          ],
        },
      },
      {
        h2: '3. The Dative Case (Дательный падеж)',
        content:
          'The **dative case** marks the **indirect object** of a sentence — the recipient of an action. It answers the questions **Кому?** (To whom?) or **Чему?** (To what?). Think of it as the **"giving" case**: whenever something is given, said, shown, or sent to someone, that person takes the dative.',
        link: {
          href: '/learn/articles/russian-dative-case',
          label: 'Russian Dative Case: Rules, Endings, нравиться & 30 Examples',
        },
        subsections: [
          {
            h3: 'Main Uses of the Dative Case',
            content:
              '- **Indirect object:** Я дал книгу другу. — I gave the book to my friend.\n- **Verbs of communication:** говорить, писать, звонить, помогать (to speak/write/call/help someone)\n- **Expressing age:** Мне двадцать лет. — I am twenty years old.\n- **Construction "X likes Y" (нравиться):** Мне нравится музыка. — I like music.\n- **After prepositions:** к (toward/to), по (along/according to), благодаря (thanks to), вопреки (contrary to)',
          },
        ],
        table: {
          headers: ['Gender', 'Singular', 'Example', 'Plural', 'Example'],
          boldColumnIndices: [1, 3],
          rows: [
            ['Masculine (hard)', '-у', 'брат → брату', '-ам', 'братьям'],
            ['Masculine (soft)', '-ю', 'гений → гению', '-ям', 'гениям'],
            ['Feminine (-а/-я)', '-е / -и', 'сестра → сестре', '-ам/-ям', 'сёстрам'],
            ['Feminine (-ь)', '-и', 'ночь → ночи', '-ям', 'ночам'],
            ['Neuter (-о)', '-у', 'окно → окну', '-ам', 'окнам'],
            ['Neuter (-е)', '-ю', 'море → морю', '-ям', 'морям'],
          ],
        },
      },
      {
        h2: '4. The Accusative Case (Винительный падеж)',
        content:
          'The **accusative case** marks the **direct object** of a sentence — the person or thing directly affected by the action. It answers the questions **Кого?** (Whom?) or **Что?** (What?). It is also the case used for **motion and direction** (going to a place), making it one of the most frequently used cases in everyday Russian speech.',
        link: {
          href: '/learn/articles/russian-accusative-case',
          label: 'Russian Accusative Case: Direct Objects, Animate vs. Inanimate',
        },
        subsections: [
          {
            h3: 'The Animate vs. Inanimate Distinction',
            content:
              "The accusative has a crucial distinction that doesn't exist in English: **animate nouns** (people, animals) behave differently from **inanimate nouns** (objects, concepts).\n\n- **Inanimate masculine & neuter nouns:** same ending as nominative\n- **Animate masculine nouns:** same ending as genitive\n- **Feminine nouns:** change -а → -у (or -я → -ю) regardless of animacy\n\n**Common mistake:** Я вижу стол. (I see the table) — стол is inanimate → no change. Я вижу студента. (I see the student) — студент is animate → accusative = genitive form.",
          },
          {
            h3: 'Accusative and Motion',
            content:
              'The accusative is used after **в** (into, to) and **на** (onto, to) when expressing movement toward a destination — as opposed to the **prepositional case**, which expresses location.\n\n- **Я иду в школу.** — I am going to school. (direction → accusative)\n- **Я нахожусь в школе.** — I am at school. (location → prepositional)',
          },
        ],
        table: {
          headers: ['Gender / Animacy', 'Nominative', 'Accusative', 'Example'],
          boldColumnIndices: [2],
          rows: [
            ['Masculine inanimate', 'стол', 'стол (no change)', 'Я вижу стол.'],
            ['Masculine animate', 'студент', 'студента (-а)', 'Я вижу студента.'],
            ['Feminine (-а)', 'книга', 'книгу (-у)', 'Я читаю книгу.'],
            ['Feminine (-я)', 'неделя', 'неделю (-ю)', 'Всю неделю.'],
            ['Neuter', 'окно', 'окно (no change)', 'Я вижу окно.'],
            ['Plural inanimate', 'столы', 'столы (no change)', 'Я вижу столы.'],
            ['Plural animate', 'студенты', 'студентов (gen. pl.)', 'Я вижу студентов.'],
          ],
        },
      },
      {
        h2: '5. The Instrumental Case (Творительный падеж)',
        content:
          "The **instrumental case** indicates the **means or instrument** by which an action is performed. It answers the questions **Кем?** (By whom?) or **Чем?** (By what? / With what?). Despite its intimidating-sounding name, the instrumental has quite **predictable endings** — and once you learn them, it's one of the easier cases to use.",
        link: {
          href: '/learn/articles/russian-instrumental-case',
          label: 'Russian Instrumental Case: When to Use It and Why',
        },
        subsections: [
          {
            h3: 'Main Uses of the Instrumental Case',
            content:
              '- **Instrument or means:** писать ручкой — to write with a pen.\n- **Accompaniment (with с):** гулять с другом — to walk with a friend.\n- **Profession or role (after быть/работать):** быть врачом — to be a doctor; работать учителем — to work as a teacher.\n- **Time expressions:** утром — in the morning; вечером — in the evening; летом — in summer.\n- **After prepositions:** с (with), за (behind/for), над (above), под (under), перед (in front of), между (between), рядом с (next to)',
          },
        ],
        table: {
          headers: ['Gender', 'Singular', 'Example', 'Plural', 'Example'],
          boldColumnIndices: [1, 3],
          rows: [
            ['Masculine (hard)', '-ом', 'стол → столом', '-ами', 'столами'],
            ['Masculine (soft)', '-ем / -ём', 'гений → гением', '-ями', 'гениями'],
            ['Feminine (-а)', '-ой / -ей', 'сестра → сестрой', '-ами', 'сёстрами'],
            ['Feminine (-ь)', '-ью', 'ночь → ночью', '-ями', 'ночами'],
            ['Neuter (-о)', '-ом', 'окно → окном', '-ами', 'окнами'],
            ['Neuter (-е)', '-ем', 'море → морем', '-ями', 'морями'],
          ],
        },
      },
      {
        h2: '6. The Prepositional Case (Предложный падеж)',
        content:
          "The **prepositional case** is unique among the 6 Russian cases: it is the **only case that NEVER appears without a preposition**. It's always triggered by one. It answers **О ком?** (About whom?) or **О чём?** (About what?) and is also used for **location**. It has the most regular and predictable endings, which makes it a great starting point for beginners.",
        link: {
          href: '/learn/articles/russian-prepositional-case',
          label: 'Russian Prepositional Case: The Only Case That Never Stands Alone',
        },
        subsections: [
          {
            h3: 'Main Uses of the Prepositional Case',
            content:
              '- **Location with в and на:** Я живу в России. — I live in Russia.\n- **Topic with о/об:** Мы говорим о погоде. — We are talking about the weather.\n- **Means of transport with на:** ехать на поезде — to go by train.\n- **After prepositions:** в (in/at — location), на (on/at — location), о/об (about), при (in the presence of / under)',
          },
          {
            h3: 'Prepositional vs. Accusative with В and На',
            content:
              'This is one of the **most important distinctions** in Russian grammar:\n\n- **Direction (motion toward) → Accusative:** Я иду в магазин. — I am going to the store.\n- **Location (static position) → Prepositional:** Я нахожусь в магазине. — I am at the store.',
          },
        ],
        table: {
          headers: ['Gender', 'Singular Ending', 'Example', 'Plural Ending', 'Example'],
          boldColumnIndices: [1, 3],
          rows: [
            ['Masculine (hard)', '-е', 'стол → столе (на столе)', '-ах', 'столах'],
            ['Masculine (soft)', '-е / -и', 'музей → музее', '-ях', 'музеях'],
            ['Feminine (-а/-я)', '-е / -и', 'страна → стране (в стране)', '-ах/-ях', 'странах'],
            ['Feminine (-ь)', '-и', 'ночь → ночи', '-ях', 'ночах'],
            ['Neuter (-о)', '-е', 'окно → окне (в окне)', '-ах', 'окнах'],
            ['Neuter (-е)', '-е', 'море → море (в море)', '-ях', 'морях'],
          ],
        },
      },
      {
        h2: 'Russian Case Endings: Master Reference Table',
        content:
          'Here is a **consolidated overview** of case endings for masculine, feminine, and neuter nouns in the singular. Use this as your **cheat sheet** when studying Russian declensions.',
        table: {
          caption: 'Singular noun endings by case and gender',
          headers: [
            'Case',
            'Masc. Hard',
            'Masc. Soft',
            'Fem. (-а)',
            'Fem. (-ь)',
            'Neut. (-о)',
            'Neut. (-е)',
          ],
          boldColumnIndices: [1, 2, 3, 4, 5, 6],
          rows: [
            ['Nominative', '-Ø', '-й/-ь', '-а', '-ь', '-о', '-е'],
            ['Genitive', '-а', '-я', '-ы/-и', '-и', '-а', '-я'],
            ['Dative', '-у', '-ю', '-е', '-и', '-у', '-ю'],
            ['Accusative (inanim.)', '-Ø', '-й/-ь', '-у', '-ь', '-о', '-е'],
            ['Accusative (anim.)', '-а', '-я', '-у', '-ь', '-о', '-е'],
            ['Instrumental', '-ом', '-ем/-ём', '-ой/-ей', '-ью', '-ом', '-ем'],
            ['Prepositional', '-е', '-е/-и', '-е/-и', '-и', '-е', '-е'],
          ],
        },
      },
      {
        h2: 'Russian Prepositions and Their Cases',
        content:
          'One of the most **practical aspects** of learning Russian cases is understanding which prepositions trigger which case. Here is a comprehensive reference:',
        link: {
          href: '/learn/articles/russian-prepositions-and-cases',
          label: 'Russian Prepositions and Cases: Which Case Does Each Preposition Take?',
        },
        table: {
          headers: ['Case Required', 'Prepositions', 'Meaning', 'Example'],
          rows: [
            ['Genitive', 'без', 'without', 'без сахара — without sugar'],
            ['Genitive', 'до', 'until / before / up to', 'до обеда — before lunch'],
            ['Genitive', 'из / с', 'from (inside) / from (surface)', 'из России — from Russia'],
            ['Genitive', 'у', 'at / by / near', 'у меня — I have (lit: at me)'],
            ['Genitive', 'от', 'from (a person)', 'письмо от мамы — a letter from mom'],
            ['Genitive', 'после', 'after', 'после урока — after the lesson'],
            ['Genitive', 'для', 'for', 'для тебя — for you'],
            ['Genitive', 'кроме', 'except', 'все кроме него — everyone except him'],
            ['Dative', 'к', 'toward / to (a person)', 'к врачу — to the doctor'],
            ['Dative', 'по', 'along / according to', 'по улице — along the street'],
            ['Accusative', 'в / на', 'into / to (direction)', 'в школу — to school'],
            ['Accusative', 'за', 'behind (motion) / for', 'за стол — behind the table'],
            ['Accusative', 'через', 'across / through / in', 'через час — in an hour'],
            ['Instrumental', 'с', 'with / together with', 'с другом — with a friend'],
            [
              'Instrumental',
              'за / перед',
              'behind / in front of (position)',
              'за домом — behind the house',
            ],
            ['Instrumental', 'над / под', 'above / under', 'над столом — above the table'],
            ['Instrumental', 'между', 'between', 'между нами — between us'],
            ['Prepositional', 'в / на', 'in / on (location)', 'в Москве — in Moscow'],
            ['Prepositional', 'о / об', 'about', 'о работе — about work'],
            ['Prepositional', 'при', 'in the presence of / under', 'при Сталине — under Stalin'],
          ],
        },
      },
      {
        h2: 'Tips for Learning Russian Cases Faster',
        subsections: [
          {
            h3: '1. Learn One Case at a Time',
            content:
              "Don't try to memorize all 6 Russian cases at once. Start with the **nominative** (you already know it — it's the dictionary form), then move to the **accusative** (direct objects), then the **genitive** (possession and absence). Add new cases only once you're comfortable with the previous one.",
          },
          {
            h3: '2. Use the Question Trick',
            content:
              "Every Russian case has a **question** associated with it (Кто? Что? — Кого? Чего? — Кому? etc.). When you're unsure which case to use, ask yourself what question the noun answers in its sentence. This is a powerful **shortcut** that native Russian teachers use.",
          },
          {
            h3: '3. Focus on Patterns, Not Individual Endings',
            content:
              'Rather than memorizing individual endings, look for **patterns**. For example, dative singular almost always ends in **-у** (hard) or **-ю** (soft) for masculine and neuter, and in -е or -и for feminine. Recognizing these patterns across genders will speed up memorization significantly.',
          },
          {
            h3: '4. Learn Prepositions With Their Cases',
            content:
              'Never learn a Russian preposition without simultaneously learning **which case it governs**. Learn без as "без + genitive" from the start, not just "без = without." This will save you enormous confusion later.',
          },
          {
            h3: '5. Practice with Real Sentences',
            content:
              'Abstract drills have their place, but the **fastest way** to internalize Russian cases is to read and listen to real Russian. When you encounter a declined form, try to identify its case. Over time, certain forms will start to feel right or wrong naturally — this is called developing a **language intuition**.',
          },
          {
            h3: '6. Use Spaced Repetition',
            content:
              "Russian case endings are perfect candidates for **spaced repetition systems (SRS)**. Apps specifically designed for Russian grammar cases can quiz you on declensions and track your weak spots — helping you spend more time on what you don't know and less on what you already do.",
          },
        ],
      },
      {
        h2: 'Most Common Mistakes with Russian Cases',
        content: 'Avoid these **frequent errors** when learning Russian cases:',
        table: {
          headers: ['Mistake', 'Wrong', 'Correct', 'Explanation'],
          boldColumnIndices: [2],
          rows: [
            [
              'Using nominative as direct object',
              'Я вижу кот.',
              'Я вижу кота.',
              'Direct objects use the accusative, not nominative',
            ],
            [
              'Forgetting animate rule in accusative',
              'Я вижу студент.',
              'Я вижу студента.',
              'Animate masculine nouns take genitive form in accusative',
            ],
            [
              'Confusing в/на direction vs. location',
              'Я в школу сейчас.',
              'Я в школе сейчас.',
              'Location uses prepositional; direction uses accusative',
            ],
            [
              'Using dative instead of genitive for possession',
              'Книга другу.',
              'Книга друга.',
              'Possession is genitive, not dative',
            ],
          ],
        },
      },
    ],
    conclusion:
      'The Russian case system is not as terrifying as it first appears. At its core, it is a logical system: each of the 6 Russian cases serves a specific grammatical role, follows consistent patterns of endings, and responds to a set of question words that help you identify which case applies.',
    conclusionIntro:
      'The Russian case system is not as terrifying as it first appears. At its core, it is a logical system: each of the 6 Russian cases serves a specific grammatical role, follows consistent patterns of endings, and responds to a set of question words that help you identify which case applies.\n\nTo summarize:',
    conclusionBullets: [
      "Nominative — the subject; the 'default' form",
      'Genitive — possession, absence, quantity; the most versatile case',
      'Dative — indirect objects, recipients, age expressions',
      'Accusative — direct objects; also direction with в/на',
      'Instrumental — means, accompaniment, roles, time expressions',
      'Prepositional — location and topic; always requires a preposition',
    ],
    conclusionOutro:
      "The key to learning Russian cases is consistent, structured practice. Learn the patterns one case at a time, drill the prepositions alongside their required cases, and expose yourself to real Russian input as much as possible.\n\nNow that you have a complete overview of the Russian case system, you're ready to dive deeper into each individual case. Use the links below to explore each case in more detail:",
    ctaText: 'Practice Russian cases with our app',
    ctaHref: '/landing-cases',
    faq: [
      {
        question: 'How many cases does Russian have?',
        answer:
          'Russian has 6 cases: nominative, genitive, dative, accusative, instrumental, and prepositional. Some linguists argue for the existence of additional "sub-cases" (such as the locative or the vocative in archaic Russian), but the standard modern Russian grammar curriculum teaches 6 cases.',
      },
      {
        question: 'Which Russian case is the hardest?',
        answer:
          'Most learners find the genitive plural the most difficult, because it has several competing forms and numerous exceptions. The instrumental is often cited as confusing for beginners because of its range of uses. However, with consistent practice, all 6 cases become manageable.',
      },
      {
        question: 'Is Russian the only language with cases?',
        answer:
          "No. Many languages have cases, including German (4 cases), Finnish (15+ cases), Hungarian (18+ cases), Latin (6 cases), and Polish (7 cases). Russian's 6 cases are actually fewer than many other case-heavy languages, which can be reassuring for learners.",
      },
      {
        question: 'Do Russian adjectives also decline?',
        answer:
          'Yes. Russian adjectives must agree with the noun they modify in gender, number, and case. This is called adjectival declension, and it follows its own set of endings. The good news: adjectival endings are quite regular and can be learned as a pattern.',
      },
      {
        question: 'Can I get by in Russian without learning the cases?',
        answer:
          'You can communicate at a very basic level without mastering every case, but you will constantly make grammatical errors and be harder to understand. Russian speakers will know what you mean most of the time, but your language will sound unnatural. For real fluency, learning the Russian case system is non-negotiable.',
      },
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'LearningResource',
          name: 'The Complete Guide to Russian Cases',
          description:
            'Complete guide to all 6 Russian cases with declension rules, prepositions, examples, and tips.',
          educationalLevel: 'beginner',
          inLanguage: 'en',
          teaches: 'Russian cases, Russian grammar, Russian declension',
          datePublished: '2025-03-11',
          dateModified: '2025-03-11',
          author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
          url: 'https://russiandeclensions.com/learn/lessons/russian-cases-complete-guide',
        },
        {
          '@type': 'Article',
          headline: 'The Complete Guide to Russian Cases',
          description:
            'Master all 6 Russian cases: nominative, genitive, dative, accusative, instrumental, prepositional.',
          datePublished: '2025-03-11',
          dateModified: '2025-03-11',
          author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
          publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id':
              'https://russiandeclensions.com/learn/lessons/russian-cases-complete-guide',
          },
          keywords:
            'russian cases, russian grammar cases, 6 russian cases, russian cases explained, learn russian cases',
        },
      ],
    },
  },
  'dative-case-declension': {
    slug: 'dative-case-declension',
    title: 'Mastering the Russian Dative Case (Дательный падеж)',
    metaTitle: 'Russian Dative Case: Complete Guide to Declension | Russian Cases with Anna',
    metaDescription:
      'Master the Russian dative case (дательный падеж) with our complete declension guide. Learn feelings, age, necessity, noun endings, pronouns, and impersonal constructions. Free grammar lesson.',
    keywords: [
      'Russian dative case',
      'dative case Russian',
      'дательный падеж',
      'Russian declension',
      'Russian cases',
      'Russian grammar',
      'dative case declension',
      'learn Russian cases',
    ],
    h1: 'Mastering the Russian Dative Case (Дательный падеж)',
    heroImage: {
      src: '/articles/free-russian-lesson-dative-case.webp',
      alt: 'Russian dative case: free lesson on how to say to and for in Russian',
      width: 1200,
      height: 630,
    },
    intro:
      'To truly master the **Dative Case** (Дательный падеж), you need to look beyond just "giving." In Russian, the Dative is the case of **feelings, age, and necessity.**',
    sections: [
      {
        h2: 'Mastering the Russian Dative Case (Дательный падеж)',
        content:
          'The Dative case primarily answers the questions **Кому?** (To whom?) and **Чему?** (To what?). While it often marks the indirect object, it is also essential for expressing impersonal states and age.\n\nTo form the Dative, you usually modify the ending of the Nominative (dictionary) form.',
        table: {
          caption: 'Dative case noun endings by gender',
          headers: ['Gender', 'Nominative Ending', 'Dative Singular', 'Example'],
          rows: [
            ['Masculine', 'Consonant / -й / -ь', '-у / -ю', 'брат → брату / чай → чаю'],
            ['Feminine', '-а / -я', '-е', 'сестра → сестре'],
            ['Feminine (Special)', '-ия / -ь', '-и', 'Россия → России / ночь → ночи'],
            ['Neuter', '-о / -е', '-у / -ю', 'письмо → письму'],
            ['Plural (All)', '(Various)', '-ам / -ям', 'друзья → друзьям / книги → книгам'],
          ],
          boldColumnIndices: [0, 2],
        },
      },
      {
        h2: 'Personal Pronouns (The "Feelings" Case)',
        image: {
          src: '/articles/how-to-say-your-age-in-russian-grammar-rule-table.webp',
          alt: 'Grammar rule table: how to say your age in Russian (dative case)',
          width: 1200,
          height: 630,
        },
        content:
          'Unlike English, Russian uses the Dative for many everyday expressions. You don\'t "have" an age or a feeling; they "happen" to you.\n\n- **Мне** (To me)\n- **Тебе** (To you - informal)\n- **Ему / Ей** (To him / To her)\n- **Нам** (To us)\n- **Вам** (To you - formal/plural)\n- **Им** (To them)\n\n**Example (Age):** **Мне** двадцать лет. (I am 20 years old — *lit. "To me are 20 years"*).',
      },
      {
        h2: 'Adjective Declension',
        content:
          'If you are giving something to a "kind friend," the adjective must agree with the Dative noun.\n\n- **Masculine/Neuter:** Ends in **-ому / -ему**. *Ex: новому другу* (to the new friend).\n- **Feminine:** Ends in **-ой / -ей**. *Ex: хорошей подруге* (to the good friend).\n- **Plural:** Ends in **-ым / -им**. *Ex: старым людям* (to old people).',
      },
      {
        h2: 'Advanced Usage & Impersonal Constructions',
        content:
          'This is where the Dative gets interesting. It is used for **impersonal states** where there is no active "subject" doing an action.',
        subsections: [
          {
            h3: 'A. Physical & Emotional States',
            content:
              'If you feel cold, bored, or happy, the person feeling it goes in the **Dative**.\n\n- **Мне** холодно. (I am cold).\n- **Тебе** скучно? (Are you bored?).\n- **Ей** весело. (She is having fun).',
          },
          {
            h3: 'B. Necessity (Нужно / Надо)',
            content:
              'When you need to do something, use the Dative.\n\n- **Нам** нужно идти. (We need to go).\n- **Ивану** надо работать. (Ivan has to work).',
          },
          {
            h3: 'C. The Verb "To Like" (Нравиться)',
            content:
              'In Russian, you don\'t "like" things; things "are pleasing to you."\n\n- **Мне** нравится этот город. (I like this city — *lit. "To me is pleasing this city"*).',
          },
        ],
      },
      {
        h2: 'Prepositions: K and ПО',
        content:
          'The Dative is used with these key prepositions:\n\n- **К (Toward/To):** Used when moving toward a **person** or a specific destination. *Я иду **к** врач**у*** (I am going to the doctor).\n- **ПО (Along/By/According to):** **Movement:** Гулять **по** парк**у** (To walk through/around the park). **Communication:** Говорить **по** телефон**у** (To talk on the phone). **Subject Matter:** Урок **по** математик**е** (Math lesson).',
      },
      {
        h2: 'Quick Check: The "Neuter -мя" Exception',
        content:
          "Nouns ending in **-мя** (like *имя* - name, or *время* - time) follow a special pattern:\n\n- Имя → **Имени**\n- Время → **Времени**\n\n*Example:* Приятно по **имени**. (It's nice [to call someone] by name).",
      },
    ],
    conclusion:
      'The Dative case goes far beyond "giving" — it is essential for expressing feelings, age, necessity, and impersonal states in Russian. With regular practice of these endings, pronouns, and preposition combinations, you will quickly improve your Russian grammar.\n\nIf you want to practice all six cases with interactive exercises, the app Russian Cases with Anna may help.',
    ctaText: 'See the app',
    ctaHref: '/landing-cases',
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'LearningResource',
          name: 'How to Decline in the Dative Case in Russian',
          description:
            'Complete guide to the Russian dative case (дательный падеж) with declension rules and examples.',
          educationalLevel: 'beginner',
          inLanguage: 'en',
          teaches: 'Russian dative case',
          datePublished: '2025-03-01',
          dateModified: '2025-03-01',
          author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
          url: 'https://russiandeclensions.com/learn/lessons/dative-case-declension',
        },
        {
          '@type': 'Article',
          headline: 'How to Decline in the Dative Case in Russian',
          description:
            'Complete guide to the Russian dative case (дательный падеж) with declension rules and examples.',
          datePublished: '2025-03-01',
          dateModified: '2025-03-01',
          author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
          publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://russiandeclensions.com/learn/lessons/dative-case-declension',
          },
          keywords: 'Russian dative case, дательный падеж, Russian declension, Russian grammar',
        },
      ],
    },
  },
};

import type { LandingLanguage } from '@/data/website/landingTranslations';
import { learnLessonTranslations } from './learnLessonTranslations';

export function getLearnLesson(slug: string, lang?: LandingLanguage): LearnLesson | null {
  const base = learnLessons[slug] ?? null;
  if (!base) return null;
  if (!lang || lang === 'en_en') return base;
  const tr = learnLessonTranslations[slug]?.[lang];
  return tr ?? base;
}

export function getAllLearnLessonSlugs(): string[] {
  return Object.keys(learnLessons);
}
