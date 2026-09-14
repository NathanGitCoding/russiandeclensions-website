import type { LearnArticle } from '../learnArticles';

/** Polskie tłumaczenie artykułu `russian-hard-soft-consonants-guide` (źródło EN: `learnArticles.ts`). */
export const russianHardSoftConsonantsGuidePl: LearnArticle = {
  slug: 'russian-hard-soft-consonants-guide',
  introByline: {
    text: '**Napisane przez Nathana** — native speaker francuskiego uczący się rosyjskiego; dzielę się tym, co naprawdę działa w gramatyce, przypadkach i codziennej praktyce.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, założyciel Russian Cases with Anna',
    imageWidth: 256,
    imageHeight: 256,
  },
  title: 'Twarde i miękkie spółgłoski w rosyjskim: przewodnik wymowy, który początkujący pomijają',
  metaTitle: 'Twarde vs miękkie spółgłoski w rosyjskim | Russian Cases with Anna',
  metaDescription:
    'Naucz się twardych i miękkich spółgłosek rosyjskich: pary, znak miękkości, miękkie samogłoski, ы vs и i wpływ na końcówki — z parami minimalnymi.',
  keywords: [
    'twarde i miękkie spółgłoski rosyjski',
    'miękkie spółgłoski rosyjski',
    'pary twarde miękkie rosyjski',
    'znak miękkości rosyjski',
    'ы vs и rosyjski',
    'palatalizacja rosyjski',
    'wymowa rosyjska dla początkujących',
    'twarde vs miękkie spółgłoski rosyjskie',
  ],
  h1: 'Twarde i miękkie spółgłoski w rosyjskim: przewodnik wymowy, który początkujący pomijają',
  heroImage: {
    src: '/articles/russian-hard-soft-consonants-header.webp',
    alt: 'Tablica z rosyjskimi parami twardych i miękkich spółgłosek do wymowy',
    width: 1280,
    height: 720,
  },
  intro:
    'Większość początkujących uczy się alfabetu cyrylicznego, potem rzuca się na słownictwo — i pomija ten system wymowy, który sprawia, że rosyjski *brzmi* po rosyjsku: **twarde vs miękkie spółgłoski**.\n\nMiękkość (palatalizacja) nie jest ozdobą. Może zmieniać znaczenie (**угол** „róg” vs **уголь** „węgiel”), decyduje, czy piszesz **ы**, czy **и**, i wyjaśnia, dlaczego przymiotniki i rzeczowniki o miękkim temacie biorą inne końcówki. Ten przewodnik daje pary, reguły znaku miękkości / miękkich samogłosek, pułapkę **ы vs и**, pary minimalne i krótkie ćwiczenie czytania.',
  whatYouLearn: [
    'Co oznaczają „twarda” i „miękka” w rosyjskiej wymowie',
    'Pary spółgłosek twardych/miękkich (z przybliżonymi kotwicami polskimi/angielskimi)',
    'Jak znak miękkości, miękkie samogłoski i й tworzą miękkość',
    'Jak miękkość pojawia się w końcówkach (link do gramatyki)',
    'Ы vs и — klasyczne pomieszanie',
    'Pary minimalne i krótkie ćwiczenie czytania',
  ],
  leadMagnetCta: {
    title: 'Wymowa + przypadki = słowa, których naprawdę użyjesz',
    description:
      'Gdy końcówki brzmią wyraźnie, ćwicz je w kontekście. Russian Cases with Anna trenuje wszystkie sześć przypadków z powtórkami rozłożonymi w czasie. Za darmo na iOS i Android.',
    ctaText: 'Pobierz aplikację — Za darmo',
    ctaHref: '/',
  },
  tableAccentVariant: 'nominative',
  sections: [
    {
      h2: 'Co oznaczają „twarda” i „miękka” w rosyjskim',
      content:
        'W rosyjskim wiele spółgłosek występuje w **parach**: wersja **twarda** i **miękka**. Miękkie spółgłoski wymawia się z środkiem języka uniesionym ku podniebieniu — lekka jakość „j” bez dodawania pełnej dodatkowej sylaby.\n\nPolski robi to systematyczniej niż angielski, ale rosyjski robi to **na większości spółgłosek**, w prawie każdym słowie.',
      bullets: [
        'Twarda ≠ „głośna”, a miękka ≠ „cicha”. Miękka oznacza **spalatalizowaną**.',
        'Ten sam kształt litery może oznaczać dźwięk twardy lub miękki w zależności od tego, co następuje (lub od znaku miękkości).',
        'Niektóre spółgłoski są **zawsze twarde** lub **zawsze miękkie** — nie mają pary.',
      ],
    },
    {
      h2: 'Pary spółgłosek twardych/miękkich',
      content:
        'To są sparowane spółgłoski. Ucz się ich jak bliźniaków: to samo miejsce artykulacji, inna miękkość.',
      table: {
        headers: ['Twarda', 'Miękka', 'Przybliżona kotwica', 'Przykład twarda → miękka'],
        rows: [
          ['б', "б'", 'b / by', 'был → бил'],
          ['п', "п'", 'p / py', 'пыль → пить'],
          ['м', "м'", 'm / my', 'мы → мир'],
          ['в', "в'", 'v / vy', 'вы → вид'],
          ['ф', "ф'", 'f / fy', 'факт → фильм'],
          ['д', "д'", 'd / dy', 'дышать → диван'],
          ['т', "т'", 't / ty', 'ты → тихо'],
          ['н', "н'", 'n / ny', 'ныть → низ'],
          ['з', "з'", 'z / zy', 'зыбкий → зима'],
          ['с', "с'", 's / sy', 'сын → синий'],
          ['л', "л'", 'l / ly (ciemne vs jasne)', 'лыжи → лиса'],
          ['р', "р'", 'rolowane r / miękkie r', 'рынок → рис'],
          ['г', "г'", 'g / gy', 'гусь → гимн'],
          ['к', "к'", 'k / ky', 'куст → кино'],
          ['х', "х'", 'loch / miększe ch', 'хата → химия'],
        ],
        caption: 'Rosyjskie pary spółgłosek twardych/miękkich',
        boldColumnIndices: [0, 1],
      },
      subsections: [
        {
          h3: 'Zawsze twarde (bez miękkiego bliźniaka w standardowym sparowaniu)',
          content:
            '**ж, ш, ц** są twarde. Nawet gdy pisownia wygląda „miękko”, wymowa pozostaje twarda: **жить**, **шире**, **цикл**.',
        },
        {
          h3: 'Zawsze miękkie',
          content:
            '**ч, щ, й** są miękkie. **Чай**, **щека**, **мой** nigdy nie twardnieją w twardego bliźniaka tej samej litery.',
        },
      ],
    },
    {
      h2: 'Znak miękkości, miękkie samogłoski i Й',
      content:
        'Rosyjski oznacza miękkość na trzy główne sposoby. Potrzebujesz wszystkich trzech, by czytać dokładnie.',
      subsections: [
        {
          h3: '1. Miękkie samogłoski: е, ё, и, ю, я',
          content:
            'Po spółgłosce zwykle sygnalizują, że spółgłoska jest miękka: **нет** (miękkie n), **мёд**, **пила**, **люблю**, **мяч**.\n\nNa początku wyrazu (lub po samogłosce) często zawierają **ślizg j**: **ель**, **ёлка**, **юбка**, **яблоко**.',
        },
        {
          h3: '2. Znak miękkości ь',
          content:
            'Znak miękkości **nie ma własnego dźwięku**. Zmiękcza poprzedzającą spółgłoskę: **мать**, **день**, **соль**, **словарь**.\n\nPojawia się też w środku wyrazów, by utrzymać spółgłoskę miękką przed inną literą: **семья**.',
        },
        {
          h3: '3. Znak twardości ъ',
          content:
            'Znak twardości też nie ma dźwięku. Blokuje zmiękczenie / oddziela przedrostek od miękkiej samogłoski: **объект**, **съесть**. Początkujący spotykają go rzadziej niż ь — ucz się go jako separatora, nie „przycisku twardej wymowy”.',
        },
        {
          h3: '4. Й',
          content:
            '**Й** to spółgłoska „j” (jak w angielskim „boy”). Jest zawsze miękka jakościowo i częsta w końcówkach oraz sekwencjach dyftongowych: **мой**, **русский**, **чай**.',
        },
      ],
      bullets: [
        'Twarde samogłoski, które zwykle następują po twardych spółgłoskach: **а, о, у, ы, э**.',
        'Jeśli zapamiętujesz tylko litery bez miękkości, rosyjski zabrzmi „płasko”, a wskazówki akcentu/końcówek będą trudniejsze do usłyszenia.',
      ],
    },
    {
      h2: 'Jak miękkość zmienia końcówki wyrazów',
      content:
        'Miękkość to nie tylko wymowa — zasila gramatykę. Tematy miękkie biorą „miękki” zestaw końcówek.',
      table: {
        headers: ['Przykład tematu twardego', 'Przykład tematu miękkiego', 'Co się zmienia'],
        rows: [
          [
            'новый (przym.)',
            'синий (przym.)',
            'Końcówki przymiotników: -ого vs -его, -ым vs -им…',
          ],
          ['стол → стола', 'словарь → словаря', 'Dopełniacz rzeczownika: -а vs -я'],
          [
            'карта → карте',
            'земля → земле',
            'Miękkie tematy żeńskie preferują wzorce -е/-и',
          ],
          ['мы', 'милиция', 'ы pojawia się po tematach twardych; и po miękkich'],
        ],
        caption: 'Miękkość łączy wymowę z końcówkami deklinacji',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Dlatego miękkie przymiotniki są omówione osobno w naszym [przewodniku deklinacji przymiotników](/learn/articles/russian-adjective-declension).',
        'Rodzaj rzeczownika + temat twardy/miękki razem wybierają tabelę końcówek — zobacz też [rodzaj rzeczowników](/learn/articles/russian-noun-gender-guide) oraz [ściągę końcówek przypadków](/learn/articles/russian-case-endings-cheatsheet).',
      ],
    },
    {
      h2: 'Ы vs И: Klasyczne pomieszanie',
      content:
        'Polskojęzyczni często słyszą **ы** i **и** jako to samo „i”. Rodzimi użytkownicy rosyjskiego — nie.',
      table: {
        headers: ['Litera', 'Kiedy się pojawia', 'Odczucie / wskazówka', 'Przykład'],
        rows: [
          [
            'и',
            'Po miękkich spółgłoskach; domyślne „i”',
            'Język do przodu, lekki uśmiech',
            'мир, синий, пить',
          ],
          [
            'ы',
            'Po twardych spółgłoskach',
            'Język cofnięty, ciemniejsze „i”',
            'мы, сын, ты',
          ],
        ],
        caption: 'Ы vs и — rozkład i odczucie',
        boldColumnIndices: [0],
      },
      subsections: [
        {
          h3: 'Reguła pisowni (praktyczna)',
          content:
            'Po **г, к, х, ж, ш, щ, ч** rosyjski pisze **и**, nie **ы** (жир, шить, чистый) — nawet gdy ж/ш pozostają twarde w wymowie. To konwencja pisowni do zapamiętania.',
        },
      ],
      bullets: [
        'Minimalny kontrast: **бил** (bił) vs **был** (był) — miękkie б+и vs twarde б+ы.',
        'Jeśli Twoje **ы** brzmi identycznie jak **и**, nagraj się i porównaj z nagraniem native’a; poprawia pozycja języka, nie głośność.',
      ],
    },
    {
      h2: 'Pary minimalne do treningu ucha',
      content:
        'Ćwicz kontrasty. Powiedz każdą parę powoli, potem w tempie rozmowy.',
      table: {
        headers: ['Bliżej twardego', 'Bliżej miękkiego', 'Kontrast znaczenia'],
        rows: [
          ['угол', 'уголь', 'róg / węgiel'],
          ['был', 'бил', 'był / bił'],
          ['мат', 'мать', 'mata (też wulgarny slang) / matka'],
          ['мол', 'моль', 'falochron / mól'],
          ['рад', 'ряд', 'zadowolony / rząd'],
          ['нос', 'нёс', 'nos / niósł (czas przeszły нести)'],
        ],
        caption: 'Pary minimalne do ćwiczenia twarde vs miękkie',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Nie każda para to idealny bliźniak słownikowy — celem jest **słyszenie i produkcja** miękkiego gestu.',
        'Dodaj audio z dowolnego słownika z dźwiękiem; same tabele wizualne nie naprawią ucha.',
      ],
    },
    {
      h2: 'Ćwiczenie czytania',
      content:
        'Przeczytaj na głos. Oznaczaj mentalnie miękkie spółgłoski apostrofem w trakcie.',
      table: {
        headers: ['Rosyjski', 'Fokus', 'Polski'],
        rows: [
          [
            'Синий словарь на столе.',
            'miękkie с, н, р w словарь',
            'Niebieski słownik leży na stole.',
          ],
          [
            'Мать и дочь дома.',
            'słowa ze znakiem miękkości',
            'Matka i córka są w domu.',
          ],
          [
            'Мы были в кино.',
            'ы vs и; miękkie н w кино',
            'Byliśmy w kinie.',
          ],
          [
            'Холодный день в январе.',
            'twarde д/н vs miękkie д w день; я-',
            'Zimny dzień w styczniu.',
          ],
          [
            'Русский язык трудный, но красивый.',
            'zawsze miękkie ч; miękkie к w русский',
            'Rosyjski jest trudny, ale piękny.',
          ],
        ],
        caption: 'Krótkie ćwiczenie czytania na świadomość twarde/miękkie',
        boldColumnIndices: [0],
      },
      bullets: [
        'Czytaj ponownie codziennie przez tydzień; szybkość przychodzi po dokładności.',
        'Potem wróć do [przewodnika alfabetu](/learn/articles/russian-alphabet-cyrillic-guide) i [przewodnika akcentu](/learn/articles/russian-word-stress-guide) — akcent + miękkość razem tworzą prawdziwy rytm rosyjski.',
      ],
    },
    {
      h2: 'Częste błędy przy twardych i miękkich spółgłoskach',
      bullets: [
        '**Ignorowanie ь** — czytanie мать jak мат.',
        '**Robienie ы = и** — мы i ми zlewają się w jeden dźwięk.',
        '**Zmiękczanie ж/ш** — pozostają twarde nawet przed и.',
        '**Utwardzanie ч/щ** — pozostają miękkie.',
        '**Uczenie końcówek bez miękkości** — tabele tematów miękkich będą wydawać się losowe, dopóki ucho nie dogoni.',
      ],
    },
  ],
  faq: [
    {
      question: 'Czym są twarde i miękkie spółgłoski w rosyjskim?',
      answer:
        'Wiele rosyjskich spółgłosek występuje w parach: dźwięk twardy (niespalatalizowany) i miękki (spalatalizowany). Miękkie spółgłoski wymawia się z językiem uniesionym ku podniebieniu. Różnica może zmieniać znaczenie i wpływa na pisownię oraz końcówki gramatyczne.',
    },
    {
      question: 'Skąd wiem, że spółgłoska jest miękka?',
      answer:
        'Spójrz, co po niej następuje. Miękkie samogłoski е, ё, и, ю, я zwykle oznaczają miękką spółgłoskę; znak miękkości ь też zmiękcza poprzednią spółgłoskę. Niektóre litery są zawsze miękkie (ч, щ, й) lub zawsze twarde (ж, ш, ц).',
    },
    {
      question: 'Jaka jest różnica między ы a и?',
      answer:
        'И to przednie „i”, które zwykle następuje po miękkich spółgłoskach. Ы to ciemniejsza, cofnięta samogłoska po twardych spółgłoskach (мы, сын). Polskojęzyczni na początku często je łączą; pozycja języka to kluczowa różnica.',
    },
    {
      question: 'Czy znak miękkości wydaje dźwięk?',
      answer:
        'Nie. Znak miękkości ь nie ma własnego dźwięku. Zmiękcza poprzedzającą spółgłoskę (i może oddzielać dźwięki wewnątrz wyrazu). Znak twardości ъ też jest niemy i głównie oddziela przedrostek od następującej miękkiej samogłoski.',
    },
    {
      question: 'Dlaczego miękkość ma znaczenie dla rosyjskich przypadków?',
      answer:
        'Rzeczowniki i przymiotniki o miękkim temacie biorą inne samogłoski końcówek niż tematy twarde (np. wzorce -я/-ю/-е vs -а/-у/-о oraz miękkie końcówki przymiotników jak -его/-ему). Słyszenie miękkości pomaga automatycznie wybrać właściwą tabelę deklinacji.',
    },
  ],
  conclusionIntro:
    'Twarde vs miękkie to ukryta warstwa pod czytaniem cyrylicy — i pod wieloma końcówkami.',
  conclusionBullets: [
    'Traktuj sparowane spółgłoski jako **twarde/miękkie bliźniaki**',
    'Czytaj miękkość z **miękkich samogłosek**, **ь** i liter zawsze miękkich',
    'Oddzielaj **ы** (twarde) od **и** (miękkie / przednie)',
    'Łącz miękkość z **tabelami końcówek** rzeczowników i przymiotników',
    'Ćwicz **parami minimalnymi** i krótkim codziennym czytaniem na głos',
  ],
  conclusionOutro:
    'Gdy miękkość zaczyna być automatyczna, tabele gramatyczne przestają wyglądać arbitralnie. Kontynuuj z przewodnikami po [alfabecie](/learn/articles/russian-alphabet-cyrillic-guide), [akcencie](/learn/articles/russian-word-stress-guide) i [końcówkach przymiotników](/learn/articles/russian-adjective-declension) — potem ćwicz formy w naszym darmowym [narzędziu praktyki](/practice).',
  internalLinks: [
    {
      href: '/learn/articles/russian-alphabet-cyrillic-guide',
      label: 'Alfabet rosyjski: naucz się cyrylicy w 3 prostych krokach',
    },
    {
      href: '/learn/articles/russian-word-stress-guide',
      label: 'Akcent wyrazowy w rosyjskim: dlaczego zmienia wszystko',
    },
    {
      href: '/learn/articles/russian-adjective-declension',
      label: 'Deklinacja przymiotników rosyjskich: tabela końcówek',
    },
    {
      href: '/learn/articles/russian-case-endings-cheatsheet',
      label: 'Ściąga końcówek przypadków rosyjskich',
    },
    {
      href: '/learn/articles/russian-nominative-case',
      label: 'Przewodnik po mianowniku rosyjskim',
    },
    {
      href: '/practice',
      label: 'Darmowy quiz deklinacji rosyjskiej',
    },
  ],
  ctaText: 'Ćwicz przypadki rosyjskie — Za darmo →',
  ctaHref: '/practice',
  conclusion: '',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      'Twarde i miękkie spółgłoski w rosyjskim: przewodnik wymowy, który początkujący pomijają',
    description:
      'Naucz się twardych i miękkich spółgłosek rosyjskich: pary, znak miękkości, miękkie samogłoski, ы vs и oraz jak miękkość zmienia końcówki — z parami minimalnymi i ćwiczeniem czytania.',
    datePublished: '2026-09-13',
    dateModified: '2026-09-13',
    author: {
      '@type': 'Person',
      name: 'Nathan',
      url: 'https://russiandeclensions.com/',
      image: 'https://russiandeclensions.com/landing-cases/founder-photo.webp',
      description:
        'Native speaker francuskiego uczący się rosyjskiego; pisze o gramatyce, przypadkach i praktycznych nawykach samodzielnej nauki.',
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
      '@id': 'https://russiandeclensions.com/learn/articles/russian-hard-soft-consonants-guide',
    },
    keywords:
      'twarde i miękkie spółgłoski rosyjski, miękkie spółgłoski rosyjski, znak miękkości rosyjski, ы vs и rosyjski, palatalizacja rosyjski',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russian-hard-soft-consonants-header.webp',
      width: 1280,
      height: 720,
    },
  },
};
