import type { LearnArticle } from '../learnArticles';

/** English source for `russian-travel-phrases` (`introByline` added in `learnArticles.ts`). */
export const russianTravelPhrasesArticle: Omit<LearnArticle, 'introByline'> = {
  slug: 'russian-travel-phrases',
  title: 'Essential Russian Travel Phrases: Restaurant, Directions & Survival Guide 2026',
  metaTitle:
    'Essential Russian Travel Phrases for Tourists (2026) | Restaurant, Directions & Survival | Russian Cases with Anna',
  metaDescription:
    'Learn the essential Russian travel phrases for tourists: order at a restaurant, ask for directions, check into a hotel, shop, and handle emergencies — with Cyrillic, transliteration, and pronunciation tips.',
  keywords: [
    'russian travel phrases',
    'russian phrases for tourists',
    'basic russian phrases for travel',
    'russian restaurant phrases',
    'asking for directions in russian',
    'russian survival phrases',
    'useful russian phrases for travelers',
    'russian hotel phrases',
    'how to order food in russian',
    'emergency phrases in russian',
  ],
  h1: 'Essential Russian Travel Phrases: Restaurant, Directions & Survival Guide',
  heroImage: {
    src: '/articles/russian-travel-phrases.webp',
    alt: "Saint Basil's Cathedral in Moscow — essential Russian travel phrases for tourists",
    width: 1200,
    height: 630,
  },
  intro:
    'You do not need fluent Russian to travel well in Russia — but you **do** need a short set of phrases that work in the situations every tourist hits: the airport, the metro, the restaurant, the hotel desk, and the moment you are lost on a side street.\n\nEnglish is common in big hotels and tourist hubs in Moscow and Saint Petersburg, yet it fades fast once you leave the centre. A polite **Здравствуйте**, a clear **Сколько это стоит?**, and the ability to ask **Где метро?** turn stressful moments into manageable ones — and locals almost always respond warmly when you try.\n\nThis guide is built for **real travel intent**: the phrases people actually search for before a trip. Every entry includes **Cyrillic**, easy **transliteration**, and plain English. By the end, you will have a pocket survival kit for food, transport, lodging, shopping, and emergencies — plus the politeness habits that make Russians more likely to help you.',
  whatYouLearn: [
    'A **one-page survival kit** of the 15 phrases every tourist should know first',
    'How to **order food and drinks** in Russian at a café or restaurant',
    'How to **ask for directions** and understand basic location answers',
    'Hotel, airport, metro, and shopping phrases that work in real cities',
    'Emergency and health phrases for when you really need help',
    'Politeness patterns (пожалуйста, извините) that unlock better help from locals',
  ],
  leadMagnetCta: {
    title: 'Travel phrases open the door — grammar keeps it open',
    description:
      'Survival phrases get you through a trip. Russian Cases with Anna builds the grammar underneath: 128 lessons, 136 quizzes, and focused practice on declensions — free on iOS and Android.',
    ctaText: 'Download Russian Cases with Anna — Free',
    ctaHref: '/',
  },
  sections: [
    {
      h2: 'Quick Survival Kit: 15 Russian Phrases Every Traveler Needs',
      content:
        'If you only learn one block before your flight, make it this one. These **15 phrases** cover greetings, thanks, prices, bathrooms, and “I don’t understand” — the core of tourist Russian.',
      table: {
        headers: ['Russian', 'Transliteration', 'English'],
        rows: [
          ['Здравствуйте', 'Zdravstvuyte', 'Hello (formal — default with strangers)'],
          ['Спасибо', 'Spasibo', 'Thank you'],
          ['Пожалуйста', 'Pozhaluysta', 'Please / You’re welcome'],
          ['Извините', 'Izvinite', 'Excuse me / Sorry'],
          ['Да / Нет', 'Da / Net', 'Yes / No'],
          ['Я не понимаю', 'Ya ne ponimayu', 'I don’t understand'],
          ['Вы говорите по-английски?', 'Vy govorite po-angliyski?', 'Do you speak English?'],
          ['Сколько это стоит?', 'Skolko eto stoit?', 'How much does this cost?'],
          ['Где туалет?', 'Gde tualet?', 'Where is the bathroom?'],
          ['Помогите, пожалуйста', 'Pomogite, pozhaluysta', 'Help me, please'],
          ['Мне нужен...', 'Mne nuzhen...', 'I need... (masc. noun)'],
          ['Я турист / Я туристка', 'Ya turist / Ya turistka', 'I am a tourist (m/f)'],
          ['Чек, пожалуйста', 'Chek, pozhaluysta', 'The bill, please'],
          ['Остановите здесь', 'Ostanovite zdes', 'Stop here (taxi)'],
          ['До свидания', 'Do svidaniya', 'Goodbye'],
        ],
        caption: 'Essential Russian survival phrases for tourists',
        boldColumnIndices: [0],
      },
      bullets: [
        'Default to **Здравствуйте** with staff, drivers, and strangers — **Привет** is for friends',
        '**Извините** is your opener before asking anything to a stranger on the street',
        'Pair requests with **пожалуйста** — it softens every ask',
        'Learn **Я не понимаю** early; it buys you time and often triggers slower speech or gestures',
      ],
    },
    {
      h2: 'Airport, Taxi & Metro: Getting Around in Russian',
      content:
        'Transport is where travelers feel the language gap first. Ticket machines often offer English, but **drivers, guards, and platform announcements** may not. These phrases cover the airport, taxis, and the metro.',
      table: {
        headers: ['Russian', 'Transliteration', 'English'],
        rows: [
          ['Где паспортный контроль?', 'Gde pasportnyy kontrol?', 'Where is passport control?'],
          ['Где багаж?', 'Gde bagazh?', 'Where is baggage claim?'],
          ['Такси до центра', "Taksi do tsentra", 'Taxi to the centre'],
          ['Сколько до отеля?', "Skolko do otelya?", 'How much to the hotel?'],
          ['Остановите здесь, пожалуйста', 'Ostanovite zdes, pozhaluysta', 'Please stop here'],
          ['Где метро?', 'Gde metro?', 'Where is the metro?'],
          ['Один билет, пожалуйста', 'Odin bilet, pozhaluysta', 'One ticket, please'],
          ['Какая станция?', 'Kakaya stantsiya?', 'Which station?'],
          ['Как пройти к...?', 'Kak proyti k...?', 'How do I get to...? (on foot)'],
          ['Как доехать до...?', 'Kak doyekhat do...?', 'How do I get to...? (by transport)'],
        ],
        caption: 'Russian phrases for airport, taxi, and metro travel',
        boldColumnIndices: [0],
      },
      subsections: [
        {
          h3: 'идти vs ехать — a tiny grammar tip that helps directions',
          content:
            'Russian distinguishes **going on foot** from **going by vehicle**. Ask **Как пройти?** when you walk; ask **Как доехать?** when you need a bus, metro, or taxi. Locals will answer more clearly if your question matches the type of movement.',
        },
      ],
      bullets: [
        'Show your hotel address written in **Russian** on your phone — it beats pronunciation stress in a taxi',
        'Metro station names are often transliterated on signs; still learn to spot **вход** (entrance) and **выход** (exit)',
        '**Один билет** / **Два билета** covers most ticket counters for one or two people',
      ],
    },
    {
      h2: 'Asking for Directions in Russian',
      content:
        'Getting lost is normal. The goal is not perfect grammar — it is to **be understood**. Start with **Извините**, point at a map if needed, and use these location phrases.',
      table: {
        headers: ['Russian', 'Transliteration', 'English'],
        rows: [
          ['Извините, где...?', 'Izvinite, gde...?', 'Excuse me, where is...?'],
          ['Где находится...?', 'Gde nakhoditsya...?', 'Where is ... located?'],
          ['Это далеко?', 'Eto daleko?', 'Is it far?'],
          ['Это близко?', 'Eto blizko?', 'Is it close?'],
          ['Налево / Направо', 'Nalevo / Napravo', 'Left / Right'],
          ['Прямо', 'Pryamo', 'Straight ahead'],
          ['За углом', 'Za uglom', 'Around the corner'],
          ['Рядом с...', 'Ryadom s...', 'Next to...'],
          ['Напротив', 'Naprotiv', 'Opposite / across from'],
          ['Я заблудился / заблудилась', 'Ya zabludilsya / zabludilas', 'I am lost (m/f)'],
        ],
        caption: 'How to ask for and understand directions in Russian',
        boldColumnIndices: [0],
      },
      bullets: [
        '**Где** + place name is the fastest pattern: **Где Красная площадь?** (Where is Red Square?)',
        'Listen for **налево**, **направо**, **прямо** — those three words alone often get you there',
        'If the answer is too fast, say **Повторите, пожалуйста** (Please repeat) or **Медленнее, пожалуйста** (Slower, please)',
      ],
    },
    {
      h2: 'Russian Restaurant Phrases: How to Order Food & Drinks',
      content:
        'Restaurant Russian is high-value and surprisingly predictable. Menus may have photos or English in tourist areas, but **ordering, allergies, and the bill** still go smoother in Russian. These are the phrases travelers search for most.',
      table: {
        headers: ['Russian', 'Transliteration', 'English'],
        rows: [
          ['Столик на двоих, пожалуйста', 'Stolik na dvoikh, pozhaluysta', 'A table for two, please'],
          ['Меню, пожалуйста', 'Menyu, pozhaluysta', 'The menu, please'],
          ['Что вы рекомендуете?', 'Chto vy rekomenduyete?', 'What do you recommend?'],
          ['Я буду это', 'Ya budu eto', 'I’ll have this (pointing)'],
          ['Мне, пожалуйста...', 'Mne, pozhaluysta...', 'For me, please...'],
          ['Без мяса', 'Bez myasa', 'Without meat'],
          ['Я аллергик / аллергичка', 'Ya allergik / allergichka', 'I have allergies (m/f)'],
          ['Воду / чай / кофе', 'Vodu / chay / kofe', 'Water / tea / coffee'],
          ['Ещё, пожалуйста', "Yeshyo, pozhaluysta", 'More, please / Another, please'],
          ['Вкусно!', 'Vkusno!', 'Delicious!'],
          ['Счёт / Чек, пожалуйста', "Schyot / Chek, pozhaluysta", 'The bill, please'],
          ['Можно оплатить картой?', 'Mozhno oplatit kartoy?', 'Can I pay by card?'],
        ],
        caption: 'Russian phrases for ordering at a restaurant or café',
        boldColumnIndices: [0],
      },
      subsections: [
        {
          h3: 'Pointing works — and so does “Я буду это”',
          content:
            'If pronunciation feels risky, point at the menu and say **Я буду это** (“I’ll have this”). It is natural, polite with **пожалуйста**, and used constantly by locals too. For drinks, **Мне чай** / **Мне кофе** is enough.',
        },
        {
          h3: 'Useful food words on Russian menus',
          content:
            '**Суп** (soup), **салат** (salad), **мясо** (meat), **рыба** (fish), **курица** (chicken), **овощи** (vegetables), **хлеб** (bread), **десерт** (dessert). Spotting these roots helps even when the rest of the word is unfamiliar.',
        },
      ],
      bullets: [
        '**Счёт** and **Чек** both work for “the bill” in casual speech',
        'Card payments are widespread in big cities; still ask **Можно оплатить картой?** if unsure',
        'Tipping is appreciated but less rigid than in the US — round up or leave ~10% for good service',
      ],
    },
    {
      h2: 'Hotel & Check-In Phrases in Russian',
      content:
        'Front desks in international hotels often speak English, but smaller guesthouses and hostels may not. These phrases cover check-in, Wi-Fi, and common requests.',
      table: {
        headers: ['Russian', 'Transliteration', 'English'],
        rows: [
          ['У меня бронь', 'U menya bron', 'I have a reservation'],
          ['На какое имя?', 'Na kakoye imya?', 'Under what name?'],
          ['Номер на одну / две ночи', "Nomer na odnu / dve nochi", 'A room for one / two nights'],
          ['Есть ли Wi-Fi?', 'Yest li Wi-Fi?', 'Is there Wi-Fi?'],
          ['Какой пароль от Wi-Fi?', "Kakoy parol ot Wi-Fi?", 'What is the Wi-Fi password?'],
          ['Во сколько завтрак?', 'Vo skolko zavtrak?', 'What time is breakfast?'],
          ['Можно дополнительное полотенце?', 'Mozhno dopolnitelnoe polotentse?', 'Can I have an extra towel?'],
          ['Где лифт?', 'Gde lift?', 'Where is the elevator?'],
          ['Мой ключ не работает', 'Moy klyuch ne rabotayet', 'My key doesn’t work'],
          ['Вызовите такси, пожалуйста', 'Vyzovite taksi, pozhaluysta', 'Please call a taxi'],
        ],
        caption: 'Russian hotel and accommodation phrases',
        boldColumnIndices: [0],
      },
    },
    {
      h2: 'Shopping & Money Phrases',
      content:
        'Markets, souvenir stalls, and small shops are where **Сколько это стоит?** earns its keep. Combine it with numbers you already know — or show the amount on your phone calculator.',
      table: {
        headers: ['Russian', 'Transliteration', 'English'],
        rows: [
          ['Сколько это стоит?', 'Skolko eto stoit?', 'How much is this?'],
          ['Это слишком дорого', 'Eto slishkom dorogo', 'This is too expensive'],
          ['Можно дешевле?', 'Mozhno deshevle?', 'Can it be cheaper?'],
          ['Я просто смотрю', 'Ya prosto smotryu', 'I’m just looking'],
          ['Можно примерить?', 'Mozhno primerit?', 'Can I try it on?'],
          ['У вас есть другой размер?', 'U vas yest drugoy razmer?', 'Do you have another size?'],
          ['Наличными / Картой', 'Nalichnymi / Kartoy', 'In cash / By card'],
          ['Чек, пожалуйста', 'Chek, pozhaluysta', 'Receipt, please'],
          ['Где банкомат?', 'Gde bankomat?', 'Where is the ATM?'],
          ['Обмен валюты', 'Obmen valyuty', 'Currency exchange'],
        ],
        caption: 'Russian shopping and money phrases for travelers',
        boldColumnIndices: [0],
      },
      bullets: [
        'Light haggling can work at souvenir markets; be polite and smile — **Можно дешевле?** is enough',
        'In chain stores, prices are fixed; save negotiation for markets',
        'Keep a small cash float; some kiosks still prefer **наличные**',
      ],
    },
    {
      h2: 'Emergency & Health Phrases in Russian',
      content:
        'You hope you never need these — and that is exactly why you should learn them **before** the trip. Keep them saved offline on your phone.',
      table: {
        headers: ['Russian', 'Transliteration', 'English'],
        rows: [
          ['Помогите!', 'Pomogite!', 'Help!'],
          ['Вызовите врача', 'Vyzovite vracha', 'Call a doctor'],
          ['Вызовите полицию', 'Vyzovite politsiyu', 'Call the police'],
          ['Мне плохо', 'Mne plokho', 'I feel sick / unwell'],
          ['Мне нужна аптека', 'Mne nuzhna apteka', 'I need a pharmacy'],
          ['У меня болит...', 'U menya bolit...', 'My ... hurts'],
          ['Где больница?', 'Gde bolnitsa?', 'Where is the hospital?'],
          ['Я потерял паспорт', 'Ya poteryal passport', 'I lost my passport (m.)'],
          ['Я потеряла паспорт', 'Ya poteryala passport', 'I lost my passport (f.)'],
          ['Срочно!', 'Srochno!', 'Urgently! / It’s an emergency!'],
        ],
        caption: 'Emergency and health phrases in Russian',
        boldColumnIndices: [0],
      },
      bullets: [
        'Emergency number in Russia: **112** (general) — also **102** police, **103** ambulance',
        'Pharmacies (**аптека**) are common; many staff can help with basic needs if you name the symptom',
        'Save your embassy contacts and hotel address in Russian before you go out',
      ],
    },
    {
      h2: 'Politeness, Pronunciation & Mistakes to Avoid',
      content:
        'A short politeness layer multiplies the value of every phrase above. Russians notice effort — even imperfect effort.',
      subsections: [
        {
          h3: 'The three magic words',
          content:
            '**Здравствуйте** (hello), **пожалуйста** (please / you’re welcome), and **спасибо** (thank you) are non-negotiable. Add **Извините** before interrupting a stranger. This quartet covers most tourist interactions.',
        },
        {
          h3: 'Pronunciation shortcuts that help',
          content:
            '**Спасибо** is often said closer to “spa-SEE-ba.” **Пожалуйста** is roughly “pa-ZHAL-sta” in fast speech (syllables collapse). **Здравствуйте** drops a sound — think “ZDRA-stvooy-tye,” not every letter on the page.',
        },
        {
          h3: 'Common tourist mistakes',
          content:
            '**Mistake 1:** Opening with **Привет** to shop staff or older strangers — use **Здравствуйте**.\n\n**Mistake 2:** Speaking English louder after “Do you speak English?” fails — switch to pointing + key Russian words.\n\n**Mistake 3:** Ignoring case endings entirely in set phrases is fine at tourist level; inventing long sentences without cases is what creates confusion. Prefer **short memorized chunks**.\n\n**Mistake 4:** Forgetting gendered forms: **заблудился / заблудилась**, **турист / туристка**, **потерял / потеряла**.',
        },
      ],
      bullets: [
        'Short memorized phrases beat improvised grammar under pressure',
        'Smile, slow down, and show text on your phone when pronunciation fails',
        'When you return home and want real progress, move from phrase lists to **structured case practice**',
      ],
    },
  ],
  faq: [
    {
      question: 'What are the most useful Russian phrases for tourists?',
      answer:
        'Start with **Здравствуйте** (hello), **Спасибо** (thank you), **Пожалуйста** (please), **Извините** (excuse me), **Сколько это стоит?** (how much is this?), **Где туалет?** (where is the bathroom?), **Я не понимаю** (I don’t understand), and **Вы говорите по-английски?** (do you speak English?). These cover most first-day situations.',
    },
    {
      question: 'How do you order food in Russian at a restaurant?',
      answer:
        'Ask for the menu with **Меню, пожалуйста**, point and say **Я буду это**, or use **Мне, пожалуйста...** plus the dish name. For the bill, say **Счёт, пожалуйста** or **Чек, пожалуйста**. Add **Можно оплатить картой?** if you want to pay by card.',
    },
    {
      question: 'How do you ask for directions in Russian?',
      answer:
        'Say **Извините, где...?** or **Где находится...?** plus the place name. Key answer words are **налево** (left), **направо** (right), and **прямо** (straight). If you are lost, say **Я заблудился** (m) or **Я заблудилась** (f).',
    },
    {
      question: 'Do I need to speak Russian to travel in Moscow or Saint Petersburg?',
      answer:
        'You can manage major hotels and tourist sights with English, but **basic Russian phrases** make transport, small cafés, markets, and side streets far easier. Even a little Russian usually gets you warmer, clearer help.',
    },
    {
      question: 'What should I say in a Russian emergency?',
      answer:
        'Call **112**. Say **Помогите!** (Help!), **Вызовите врача** (Call a doctor), or **Вызовите полицию** (Call the police). **Мне плохо** means you feel unwell; **Где больница?** asks for the hospital.',
    },
    {
      question: 'Is transliteration enough, or should I learn Cyrillic before traveling?',
      answer:
        'Transliteration helps you speak, but **Cyrillic helps you read** metro maps, street signs, and menus. Learning the alphabet in a few days before your trip is one of the highest-ROI study decisions a tourist can make.',
    },
  ],
  conclusion:
    'Travel Russian is not about sounding perfect — it is about **being ready for the moments that matter**: ordering dinner, finding the metro, checking into a room, and asking for help without panic.\n\nMemorize the **survival kit**, add restaurant and directions phrases next, and keep emergency lines offline on your phone. Use **Здравствуйте**, **пожалуйста**, and **спасибо** constantly. Locals notice the effort.\n\nWhen the trip ends and you want to go beyond tourist chunks, the next leap is grammar: Russian cases and declensions are what let you build your **own** sentences instead of recycling phrasebook lines. That is where real independence starts.',
  ctaText: 'Download Russian Cases with Anna — Free',
  ctaHref: '/',
  internalLinks: [
    {
      href: '/learn/articles/russian-greetings-guide',
      label: 'Russian Greetings: How to Say Hello in Russian (Complete Guide 2026)',
    },
    {
      href: '/learn/articles/russian-most-common-words',
      label: "100 Most Common Russian Words: Essential Beginner's Vocabulary List",
    },
    {
      href: '/learn/articles/russian-alphabet-cyrillic-guide',
      label: 'Russian Alphabet: Learn Cyrillic in 3 Simple Steps',
    },
    {
      href: '/learn/articles/russian-numbers-guide',
      label: 'Russian Numbers: How to Count in Russian (Complete Guide 2026)',
    },
    {
      href: '/learn/articles/russian-verbs-of-motion',
      label: 'Russian Verbs of Motion: идти, ходить, ехать, ездить',
    },
    {
      href: '/learn/articles/best-free-resources-learn-russian',
      label: '15 Best Free Resources to Learn Russian in 2026',
    },
    { href: '/practice', label: 'Free Russian Declension Quiz (all six cases)' },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Essential Russian Travel Phrases: Restaurant, Directions & Survival Guide 2026',
    description:
      'Learn the essential Russian travel phrases for tourists: order at a restaurant, ask for directions, check into a hotel, shop, and handle emergencies — with Cyrillic, transliteration, and pronunciation tips.',
    datePublished: '2026-08-24',
    dateModified: '2026-08-24',
    author: {
      '@type': 'Person',
      name: 'Nathan',
      url: 'https://russiandeclensions.com/',
      image: 'https://russiandeclensions.com/landing-cases/founder-photo.webp',
      description:
        'Native French speaker learning Russian; writes about grammar, cases, and practical self-study habits.',
      worksFor: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://russiandeclensions.com/learn/articles/russian-travel-phrases',
    },
    keywords:
      'russian travel phrases, russian phrases for tourists, russian restaurant phrases, asking for directions in russian, russian survival phrases, hotel phrases russian, emergency phrases russian',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russian-travel-phrases.webp',
      width: 1200,
      height: 630,
    },
  },
};
