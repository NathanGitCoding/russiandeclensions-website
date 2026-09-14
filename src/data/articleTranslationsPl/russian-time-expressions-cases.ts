import type { LearnArticle } from '../learnArticles';

/** Polskie tłumaczenie artykułu `russian-time-expressions-cases` (źródło angielskie: `learnArticles.ts`). */
export const russianTimeExpressionsCasesPl: LearnArticle = {
  slug: 'russian-time-expressions-cases',
  introByline: {
    text: '**Napisane przez Nathana** — native speaker francuskiego uczący się rosyjskiego; dzielę się tym, co naprawdę działa w gramatyce, przypadkach i codziennej praktyce.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, założyciel Russian Cases with Anna',
    imageWidth: 256,
    imageHeight: 256,
  },
  title: 'Rosyjskie wyrażenia czasu i przypadki: jak powiedzieć, kiedy coś się dzieje',
  metaTitle: 'Rosyjskie wyrażenia czasu i przypadki | Russian Cases with Anna',
  metaDescription:
    'Powiedz „kiedy” po rosyjsku z właściwym przypadkiem: pory dnia, dni, daty, czas trwania i częstotliwość — plus tabela zbiorcza i 30 przykładów.',
  keywords: [
    'rosyjskie wyrażenia czasu',
    'rosyjskie wyrażenia czasu przypadki',
    'dni miesiące przypadki rosyjski',
    'в + biernik czas',
    'rosyjski czas trwania dopełniacz',
    'утром вечером narzędnik',
    'jak powiedzieć kiedy po rosyjsku',
    'rosyjskie wyrażenia częstotliwości',
  ],
  h1: 'Rosyjskie wyrażenia czasu i przypadki: jak powiedzieć, kiedy coś się dzieje',
  heroImage: {
    src: '/articles/russian-time-expressions-cases-header.webp',
    alt: 'Zegar, kalendarz i notes z rosyjskimi wyrażeniami czasu утром вечером',
    width: 1280,
    height: 720,
  },
  intro:
    'Po polsku „w poniedziałek”, „rano”, „przez dwie godziny” i „co tydzień” prawie nie zmieniają rzeczowników. Po rosyjsku **czas to problem przypadków**. Ta sama idea „kiedy” może wymagać **narzędnika**, **biernika**, **dopełniacza** lub **miejscownika** — czasem z **в**, **по**, **за** lub **в течение**.\n\nTen przewodnik porządkuje wyrażenia czasu według przypadku, który wywołują, z tabelą zbiorczą i 30 przykładami. Pełne listy słownictwa dni i miesięcy znajdziesz w naszym [przewodniku po dniach i miesiącach](/learn/articles/russian-days-months-guide).',
  whatYouLearn: [
    'Dlaczego wyrażenia czasu wymuszają wybór przypadku w rosyjskim',
    'Pory dnia (утром, вечером…) i powiązane wzorce',
    'Dni i daty: biernik vs dopełniacz vs miejscownik',
    'Czas trwania i struktury „jak długo”',
    'Częstotliwość: каждый, раз в…, по + celownik',
    'Tabela zbiorcza (wyrażenie → przypadek) i 30 przykładów',
  ],
  leadMagnetCta: {
    title: 'Zwroty czasowe zostają, gdy końcówki przypadków są automatyczne',
    description:
      'Russian Cases with Anna ćwiczy wszystkie sześć przypadków w prawdziwych zdaniach — w tym końcówki w wyrażeniach czasu. Za darmo na iOS i Android.',
    ctaText: 'Pobierz aplikację — Za darmo',
    ctaHref: '/',
  },
  tableAccentVariant: 'instrumental',
  sections: [
    {
      h2: 'Dlaczego czas w rosyjskim to problem przypadków',
      content:
        'Rosyjski nie ma jednego „przypadka czasu”. Zamiast tego różne **znaczenia czasowe** mapują się na różne przypadki i przyimki:',
      table: {
        headers: ['Znaczenie czasowe', 'Typowy przypadek', 'Przykład'],
        rows: [
          ['Godzina / punkty zegarowe', 'Biernik (często)', 'в три часа'],
          ['Dni tygodnia', 'в + Biernik', 'в понедельник'],
          ['Miesiące / lata (w…)', 'в + Miejscownik', 'в январе / в 2026 году'],
          ['Daty (piątego)', 'Dopełniacz', 'пятого мая'],
          ['Pory dnia (gołe przysłówki)', 'Narzędnik', 'утром, вечером'],
          ['Czas trwania', 'Wzorce biernika / dopełniacza', 'два часа / в течение часа'],
          [
            'Częstotliwość',
            'Biernik / Celownik / stałe ramy',
            'каждый день / раз в неделю / по понедельникам',
          ],
        ],
        caption: 'Znaczenia czasowe przypisane do przypadków',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Ucz się **ram**, nie izolowanych słów: в + dzień, в + miesiąc, утром, каждый…',
        'Mieszanie przypadków dnia i miesiąca to klasyczna pułapka — dokładnie omówiona w [artykule o dniach i miesiącach](/learn/articles/russian-days-months-guide).',
      ],
    },
    {
      h2: 'Pory dnia (narzędnik i więcej)',
      content:
        'Codzienny zestaw „rano / po południu / wieczorem / w nocy” często używa **narzędnika** jako gołego przysłówka — bez przyimka.',
      table: {
        headers: ['Rosyjski', 'Przypadek / wzorzec', 'Polski'],
        rows: [
          ['утром', 'Narzędnik', 'rano'],
          ['днём', 'Narzędnik', 'po południu / w ciągu dnia'],
          ['вечером', 'Narzędnik', 'wieczorem'],
          ['ночью', 'Narzędnik', 'w nocy'],
          ['сегодня утром', 'stałe + narzędnik', 'dziś rano'],
          ['завтра вечером', 'stałe + narzędnik', 'jutro wieczorem'],
          ['в три часа', 'в + Biernik', 'o trzeciej'],
          [
            'в половине шестого',
            'в + zwrot miejscownikowy',
            'o wpół do szóstej (potoczny zegar)',
          ],
        ],
        caption: 'Pory dnia i godzina',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        '**Утром / вечером** to formy narzędnika od утро / вечер używane jako przysłówki czasu.',
        'Godziny z **в** zwykle biorą **biernik**: **в два часа**, **в пять минут шестого** (wzorce zależą od dokładnego sformułowania).',
        'Formy liczb w mowie zegarowej: zobacz [przewodnik po liczbach](/learn/articles/russian-numbers-guide).',
      ],
    },
    {
      h2: 'Dni i daty (biernik + dopełniacz)',
      content: 'Dni i daty kalendarzowe używają różnych systemów przypadków. Trzymaj je osobno.',
      subsections: [
        {
          h3: 'Dni tygodnia — в + biernik',
          content:
            '**В понедельник**, **во вторник**, **в среду**, **в пятницу**…\nDni żeńskie wyraźnie pokazują biernik (**среду, пятницу, субботу**). Dni męskie często wyglądają jak mianownik.',
        },
        {
          h3: 'Miesiące „w …” — в + miejscownik',
          content: '**В январе**, **в июне**, **в декабре**. Nie używaj tu wzorca dnia.',
        },
        {
          h3: 'Daty — dopełniacz',
          content:
            '**Сегодня пятое мая.** Mówiąc „piątego maja”, rosyjski zwykle używa form dopełniacza: **пятого мая**, **первого сентября**.\nLata często pojawiają się jako **в 2026 году** (miejscownik) lub w ciągach dat w dopełniaczu zależnie od pełnej formuły.',
        },
      ],
      bullets: [
        'Powtarzające się dni: **по понедельникам** (по + celownik liczby mnogiej) = w poniedziałki.',
        'Pełne tabele słownictwa: [dni tygodnia i miesiące](/learn/articles/russian-days-months-guide).',
      ],
    },
    {
      h2: 'Wyrażenia czasu trwania',
      content: '„Jak długo?” to w rosyjskim nie jedna struktura. Oto najczęstsze ramy:',
      table: {
        headers: ['Rama', 'Wzorzec przypadku', 'Przykład', 'Polski'],
        rows: [
          ['Goły czas trwania', 'Biernik ilości czasu', 'Я ждал час.', 'Czekałem (przez) godzinę.'],
          ['два / три / четыре + …', 'Dopełniacz liczby pojedynczej', 'два часа, три дня', 'dwie godziny, trzy dni'],
          ['пять+ / много…', 'Dopełniacz liczby mnogiej', 'пять часов, много лет', 'pięć godzin, wiele lat'],
          ['в течение + …', 'Dopełniacz', 'в течение недели', 'w ciągu / przez tydzień'],
          ['за + …', 'Biernik (często „w ciągu”)', 'за два дня', 'w dwa dni / w ciągu dwóch dni'],
          ['с … до …', 'Dopełniacz … Dopełniacz', 'с утра до вечера', 'od rana do wieczora'],
        ],
        caption: 'Ramy czasu trwania i ich przypadki',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Liczba + jednostka czasu podlega tym samym regułom dopełniacza co inne rzeczowniki z ilością — zobacz [dopełniacz](/learn/articles/russian-genitive-case).',
        '**За** + biernik często znaczy „w ciągu odcinka czasu” lub „w zamian za czas”, zależnie od kontekstu — ucz się częstych kolokacji.',
      ],
    },
    {
      h2: 'Wyrażenia częstotliwości',
      content: 'Jak często coś się dzieje — ma własny mały zestaw narzędzi:',
      table: {
        headers: ['Rosyjski', 'Wzorzec', 'Polski'],
        rows: [
          ['каждый день', 'каждый + Biernik (zgoda)', 'każdego dnia'],
          ['каждую неделю', 'biernik żeński', 'co tydzień'],
          ['каждый месяц / год', 'zgoda z rzeczownikiem', 'co miesiąc / rok'],
          ['раз в неделю', 'раз в + Biernik', 'raz w tygodniu'],
          ['два раза в день', 'раз(а) в + Bier.', 'dwa razy dziennie'],
          ['по вечерам', 'по + Celownik lm.', 'wieczorami (nawykowo)'],
          ['по понедельникам', 'по + Celownik lm.', 'w poniedziałki'],
          ['иногда / часто / редко', 'przysłówki (bez przypadku)', 'czasem / często / rzadko'],
        ],
        caption: 'Wyrażenia częstotliwości',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        '**Каждый** zgadza się jak przymiotnik z rzeczownikiem czasu.',
        '**По + celownik liczby mnogiej** to wzorzec „nawykowo w X-dni / wieczorami”.',
      ],
    },
    {
      h2: 'Tabela zbiorcza: wyrażenie czasu → przypadek',
      content: 'Jeden ekran do powtórki przed mówieniem lub pisaniem.',
      table: {
        headers: ['Jeśli chcesz powiedzieć…', 'Użyj…', 'Przypadek'],
        rows: [
          ['rano / wieczorem', 'утром / вечером', 'Narzędnik'],
          ['w poniedziałek', 'в понедельник', 'в + Biernik'],
          ['w poniedziałki (nawyk)', 'по понедельникам', 'по + Celownik lm.'],
          ['w styczniu', 'в январе', 'в + Miejscownik'],
          ['piątego maja', 'пятого мая', 'Dopełniacz'],
          ['o trzeciej', 'в три часа', 'в + Biernik'],
          ['przez godzinę', 'час / в течение часа', 'Bier. / в течение + Dop.'],
          ['każdego dnia', 'каждый день', 'каждый + Bier.'],
          ['raz w tygodniu', 'раз в неделю', 'в + Biernik'],
          ['od rana do wieczora', 'с утра до вечера', 'с/до + Dopełniacz'],
        ],
        caption: 'Tabela zbiorcza rosyjski czas → przypadek',
        boldColumnIndices: [0, 2],
      },
    },
    {
      h2: '30 przykładowych zdań',
      content:
        '**1–8** pory dnia i zegar · **9–16** dni/daty · **17–23** czas trwania · **24–30** częstotliwość.',
      table: {
        headers: ['#', 'Rosyjski', 'Polski'],
        rows: [
          ['1', 'Я встаю рано утром.', 'Wstaję wcześnie rano.'],
          ['2', 'Вечером мы смотрим фильм.', 'Wieczorem oglądamy film.'],
          ['3', 'Ночью было холодно.', 'W nocy było zimno.'],
          ['4', 'Встретимся в три часа.', 'Spotkajmy się o trzeciej.'],
          ['5', 'Занятия начинаются в девять.', 'Zajęcia zaczynają się o dziewiątej.'],
          ['6', 'Сегодня днём идёт дождь.', 'Dziś po południu pada deszcz.'],
          ['7', 'Завтра утром звони мне.', 'Zadzwoń do mnie jutro rano.'],
          ['8', 'Он работает до позднего вечера.', 'Pracuje do późnego wieczora.'],
          ['9', 'В понедельник у меня экзамен.', 'W poniedziałek mam egzamin.'],
          ['10', 'Мы едем в пятницу.', 'Jedziemy w piątek.'],
          ['11', 'По субботам я сплю дольше.', 'W soboty śpię dłużej.'],
          ['12', 'Я родился в марте.', 'Urodziłem się w marcu.'],
          ['13', 'Свадьба в июне.', 'Ślub jest w czerwcu.'],
          ['14', 'Сегодня первое сентября.', 'Dziś jest pierwszy września.'],
          ['15', 'Концерт пятого мая.', 'Koncert jest piątego maja.'],
          ['16', 'В 2024 году я начал учить русский.', 'W 2024 roku zacząłem uczyć się rosyjskiego.'],
          ['17', 'Я ждал тебя час.', 'Czekałem na ciebie godzinę.'],
          ['18', 'Фильм шёл два часа.', 'Film trwał dwie godziny.'],
          ['19', 'Мы жили там пять лет.', 'Mieszkaliśmy tam pięć lat.'],
          ['20', 'В течение недели будет тепло.', 'W ciągu tygodnia będzie ciepło.'],
          ['21', 'За три дня я прочитал книгу.', 'W trzy dni przeczytałem książkę.'],
          ['22', 'С утра до вечера на работе.', 'Od rana do wieczora w pracy.'],
          ['23', 'Отпуск длится две недели.', 'Urlop trwa dwa tygodnie.'],
          ['24', 'Я тренируюсь каждый день.', 'Ćwiczę każdego dnia.'],
          ['25', 'Она звонит раз в неделю.', 'Dzwoni raz w tygodniu.'],
          ['26', 'Мы встречаемся два раза в месяц.', 'Spotykamy się dwa razy w miesiącu.'],
          ['27', 'По вечерам я читаю.', 'Wieczorami czytam.'],
          ['28', 'По воскресеньям мы ходим в парк.', 'W niedziele chodzimy do parku.'],
          ['29', 'Иногда я опаздываю.', 'Czasem się spóźniam.'],
          ['30', 'Редко смотрю телевизор.', 'Rzadko oglądam telewizję.'],
        ],
        caption: '30 przykładów wyrażeń czasu',
        boldColumnIndices: [0, 1],
      },
    },
    {
      h2: 'Częste błędy w rosyjskich wyrażeniach czasu',
      bullets: [
        '**в январь** ✗ → **в январе** ✓ (miesiąc = miejscownik).',
        '**в понедельнике** ✗ → **в понедельник** ✓ (dzień = biernik).',
        '**каждый днём** ✗ → **каждый день** ✓.',
        'Tłumaczenie polskiego „przez / na” wszędzie dosłownie — rosyjski często używa gołego biernika czasu trwania (**час**) lub **в течение**.',
        'Zapominanie dopełniacza po liczebnikach: **два часа**, **пять часов**.',
      ],
    },
  ],
  faq: [
    {
      question: 'Jakiego przypadku używać dla dni tygodnia po rosyjsku?',
      answer:
        'Z в w znaczeniu „w [dzień]” używaj biernika: в понедельник, в среду. Dla nawykowego „w poniedziałki”: по + celownik liczby mnogiej: по понедельникам.',
    },
    {
      question: 'Dlaczego „w styczniu” to nie ten sam przypadek co „w poniedziałek”?',
      answer:
        'Dni z в biorą biernik; miesiące z в biorą miejscownik (в январе). To stały podział do zapamiętania — nie błąd logiki z polskiej intuicji.',
    },
    {
      question: 'Jak powiedzieć „rano” po rosyjsku?',
      answer:
        'Najczęstsza codzienna forma to утром (narzędnik użyty przysłówkowo). Usłyszysz też сегодня утром, завтра утром na „dziś/jutro rano”.',
    },
    {
      question: 'Jak wyrazić czas trwania typu „przez dwie godziny”?',
      answer:
        'Często biernikiem ilości czasu (два часа) w zdaniach typu Фильм шёл два часа, albo в течение + dopełniacz (в течение двух часов). Reguły liczebników nadal obowiązują (два часа vs пять часов).',
    },
    {
      question: 'Jak powiedzieć „każdego dnia” i „raz w tygodniu”?',
      answer:
        'Каждый день (каждый zgadza się z день) i раз в неделю (в + biernik). Nawykowe wieczory/dni też używają по + celownika lm.: по вечерам, по пятницам.',
    },
  ],
  conclusionIntro: 'Rozmowa o czasie staje się łatwa, gdy każde znaczenie przypinasz do ramy przypadku.',
  conclusionBullets: [
    '**Pory dnia** → często narzędnik (утром)',
    '**Dni** → в + biernik; nawyki → по + celownik lm.',
    '**Miesiące** → в + miejscownik; **daty** → dopełniacz',
    '**Czas trwania / częstotliwość** → ucz się stałych ram',
    'Ćwicz z **tabelą zbiorczą**, aż wybór przypadku będzie automatyczny',
  ],
  conclusionOutro:
    'Trzymaj listy [dni i miesięcy](/learn/articles/russian-days-months-guide) pod ręką, pogłębiaj [biernik](/learn/articles/russian-accusative-case), [dopełniacz](/learn/articles/russian-genitive-case) i [narzędnik](/learn/articles/russian-instrumental-case), i ćwicz końcówki w naszym darmowym [quizie deklinacyjnym](/practice).',
  internalLinks: [
    {
      href: '/learn/articles/russian-days-months-guide',
      label: 'Dni tygodnia i miesiące po rosyjsku',
    },
    {
      href: '/learn/articles/russian-numbers-guide',
      label: 'Przewodnik po liczbach rosyjskich',
    },
    {
      href: '/learn/articles/russian-accusative-case',
      label: 'Biernik rosyjski',
    },
    {
      href: '/learn/articles/russian-genitive-case',
      label: 'Dopełniacz rosyjski',
    },
    {
      href: '/learn/articles/russian-instrumental-case',
      label: 'Narzędnik rosyjski',
    },
    {
      href: '/learn/articles/russian-prepositional-case',
      label: 'Miejscownik rosyjski',
    },
    {
      href: '/practice',
      label: 'Darmowy quiz deklinacyjny',
    },
  ],
  ctaText: 'Ćwicz rosyjskie przypadki — Za darmo →',
  ctaHref: '/practice',
  conclusion: '',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Rosyjskie wyrażenia czasu i przypadki: jak powiedzieć, kiedy coś się dzieje',
    description:
      'Powiedz „kiedy” po rosyjsku z właściwym przypadkiem: pory dnia, dni, daty, czas trwania i częstotliwość — plus tabela zbiorcza i 30 przykładów.',
    datePublished: '2026-09-13',
    dateModified: '2026-09-13',
    author: {
      '@type': 'Person',
      name: 'Nathan',
      url: 'https://russiandeclensions.com/',
      image: 'https://russiandeclensions.com/landing-cases/founder-photo.webp',
      description:
        'Rodzimy użytkownik francuskiego uczący się rosyjskiego; pisze o gramatyce, przypadkach i praktycznych nawykach samodzielnej nauki.',
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
      '@id': 'https://russiandeclensions.com/learn/articles/russian-time-expressions-cases',
    },
    keywords:
      'rosyjskie wyrażenia czasu, rosyjskie wyrażenia czasu przypadki, утром вечером narzędnik, в + biernik czas, rosyjski czas trwania dopełniacz',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russian-time-expressions-cases-header.webp',
      width: 1280,
      height: 720,
    },
  },
};
