import type { LearnArticle } from '../learnArticles';

/** Polskie tłumaczenie artykułu `russian-numbers-guide` (źródło EN: `learnArticles.ts`). */
export const russianNumbersGuidePl: LearnArticle = {
  slug: 'russian-numbers-guide',
  title: 'Liczby po rosyjsku: jak liczyć po rosyjsku (kompletny przewodnik 2026)',
  metaTitle:
    'Liczby po rosyjsku: jak liczyć po rosyjsku | Kompletny przewodnik 2026 | Russian Cases with Anna',
  metaDescription:
    'Naucz się liczb po rosyjsku od 1 do 1000: liczby główne, porządkowe, liczby z rosyjskimi przypadkami, wiek i daty — kompletny przewodnik z tabelami i wymową.',
  keywords: [
    'liczby po rosyjsku',
    'jak liczyć po rosyjsku',
    'rosyjskie liczby',
    'liczby rosyjskie od 1 do 10',
    'rosyjskie liczby główne',
    'rosyjskie liczby porządkowe',
    'liczenie po rosyjsku',
    'wymowa liczb po rosyjsku',
    'jak mówić liczby po rosyjsku',
    'rosyjskie liczby od 1 do 100',
  ],
  h1: 'Liczby po rosyjsku: jak liczyć po rosyjsku (kompletny przewodnik)',
  heroImage: {
    src: '/articles/russia-kremlin-moscow.webp',
    alt: 'Nauka liczb po rosyjsku — kompletny przewodnik po liczeniu',
    width: 1200,
    height: 630,
  },
  intro:
    'Nauka rosyjskich liczb wydaje się łatwa na początku — dopóki nie spróbuje się użyć ich w zdaniu. **Liczby po rosyjsku to nie tylko etykiety przyklejane do przedmiotów.** Wchodzą w interakcję z systemem przypadków gramatycznych w sposób, który wprawia w zakłopotanie nawet zaawansowanych uczących się, a niektóre liczby zachowują się całkowicie nieoczekiwanie.\n\nDobra wiadomość: rosyjskie liczby podążają za jasnymi wzorcami, gdy zrozumie się logikę. **Pierwsze dziesięć liczb odblokowuje cały system.** „Nastki" (11–19) mają jedną zasadę. Dziesiątki są przewidywalne. A gdy zrozumie się, jak liczby wchodzą w interakcję z przypadkami, będzie można swobodnie liczyć, podawać wiek i czytać ceny.\n\nPrzewodnik obejmuje wszystko: **liczby główne od 1 do 1000**, liczby porządkowe, jak powiedzieć swój wiek, jak wyrażać daty i lata, oraz jedną zasadę gramatyczną (liczby + przypadki), która w prawdziwym rosyjskim zmienia wszystko.',
  introByline: {
    text: '**Napisane przez Nathan** — native speaker języka francuskiego; uczę się rosyjskiego i dzielę się tym, co naprawdę działa w gramatyce, przypadkach i codziennej praktyce.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, założyciel Russian Cases with Anna',
    imageWidth: 256,
    imageHeight: 256,
  },
  whatYouLearn: [
    'Liczby główne od 1 do 1000 z przewodnikiem wymowy',
    'Nieregularne liczby, które trzeba zapamiętać: **40, 90, 100**',
    'Jak rosyjskie liczby wchodzą w interakcję z **przypadkami gramatycznymi** — zasada, którą większość pomija',
    'Liczby porządkowe: pierwszy, drugi, trzeci…',
    'Jak powiedzieć swój **wiek** po rosyjsku (мне X лет)',
    'Jak wyrażać **daty i lata** po rosyjsku',
  ],
  leadMagnetCta: {
    title: 'Opanuj rosyjską gramatykę poza liczebnikami — bezpłatna aplikacja',
    description:
      'Liczby to dopiero początek. Rosyjska gramatyka, przypadki i deklinacje to miejsce, gdzie buduje się prawdziwą płynność. Russian Cases with Anna oferuje ustrukturyzowane lekcje i inteligentne quizy — bezpłatnie na iOS i Android.',
    ctaText: 'Pobierz aplikację — Bezpłatnie',
    ctaHref: '/',
  },
  sections: [
    {
      h2: 'Rosyjskie liczby od 1 do 10: fundament',
      content:
        'Poniższe dziesięć liczb głównych stanowi fundament całego rosyjskiego systemu liczebników. Należy od razu zauważyć, że **1** i **2** mają warianty rodzajowe — będzie to ważne przy użyciu z rzeczownikami.',
      table: {
        headers: ['Liczba', 'Rosyjski', 'Transliteracja', 'Uwaga o rodzaju'],
        rows: [
          ['1', 'один / одна / одно', 'odin / odna / odno', 'Rodzaj męski / żeński / nijaki'],
          ['2', 'два / две', 'dva / dve', 'M.–N. / Rodzaj żeński'],
          ['3', 'три', 'tri', '—'],
          ['4', 'четыре', 'chetyre', '—'],
          ['5', 'пять', "pyat'", '—'],
          ['6', 'шесть', "shest'", '—'],
          ['7', 'семь', "sem'", '—'],
          ['8', 'восемь', "vosem'", '—'],
          ['9', 'девять', "devyat'", '—'],
          ['10', 'десять', "desyat'", '—'],
        ],
        caption: 'Rosyjskie liczby główne od 1 do 10',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        '**Один** (rodzaj męski) używa się z rzeczownikami rodzaju męskiego: один брат (jeden brat)',
        '**Одна** (rodzaj żeński) używa się z rzeczownikami rodzaju żeńskiego: одна книга (jedna książka)',
        '**Одно** (rodzaj nijaki) używa się z rzeczownikami rodzaju nijakiego: одно окно (jedno okno)',
        '**Два** używa się z rzeczownikami rodzaju męskiego i nijakiego; **две** z rodzaju żeńskiego',
        'Liczby 3–10 nie zmieniają się w zależności od rodzaju',
        'Liczby 5–10 kończą się miękkim znakiem (ь) — ważny wzorzec dla systemu przypadków',
      ],
    },
    {
      h2: 'Liczby 11–19: rosyjskie „nastki"',
      content:
        'Liczby od 11 do 19 tworzy się przez dodanie przyrostka **-надцать** (forma „na dziesięć"). Po zobaczeniu wzorca wszystkie jedenaście „nastek" odblokowuje się naraz.',
      table: {
        headers: ['Liczba', 'Rosyjski', 'Transliteracja', 'Wzorzec tworzenia'],
        rows: [
          ['11', 'одиннадцать', "odinnadtsat'", 'один + надцать'],
          ['12', 'двенадцать', "dvenadtsat'", 'две + надцать'],
          ['13', 'тринадцать', "trinadtsat'", 'три + надцать'],
          ['14', 'четырнадцать', "chetyrnadtsat'", 'четыре + надцать'],
          ['15', 'пятнадцать', "pyatnadtsat'", 'пять + надцать'],
          ['16', 'шестнадцать', "shestnadtsat'", 'шесть + надцать'],
          ['17', 'семнадцать', "semnadtsat'", 'семь + надцать'],
          ['18', 'восемнадцать', "vosemnadtsat'", 'восемь + надцать'],
          ['19', 'девятнадцать', "devyatnadtsat'", 'девять + надцать'],
        ],
        caption: 'Rosyjskie liczby od 11 do 19 z wzorcem tworzenia',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Wszystkie „nastki" kończą się na **-надцать** — gdy słyszy się ten przyrostek, wiadomo, że to liczba od 11 do 19',
        'W mowie temat często się skraca: четыре → четыр- w четырнадцать; пять → пят- w пятнадцать',
        '**Одиннадцать** podwaja literę н — rosyjska „nastka" najczęściej zapisywana błędnie',
        'W przeciwieństwie do 1 i 2, „nastki" **nie** zmieniają się w zależności od rodzaju',
      ],
    },
    {
      h2: 'Dziesiątki i setki: liczenie do 1000',
      content:
        'Dziesiątki (20–90) i setki (100–900) w większości podążają za regularnymi wzorcami z kilkoma ważnymi wyjątkami. Trzy krytyczne do zapamiętania: **сорок** (40), **девяносто** (90) i **сто** (100) są całkowicie nieregularne.',
      subsections: [
        {
          h3: 'Dziesiątki: od 20 do 90',
          content:
            'Dziesiątki od 20 do 80 są zbudowane na wzorcu złożonym. Należy zauważyć, że 40 i 90 całkowicie odbiegają od wzorca.',
          table: {
            headers: ['Liczba', 'Rosyjski', 'Transliteracja'],
            rows: [
              ['20', 'двадцать', "dvadtsat'"],
              ['30', 'тридцать', "tridtsat'"],
              ['40', 'сорок', 'sorok'],
              ['50', 'пятьдесят', "pyat'desyat"],
              ['60', 'шестьдесят', "shest'desyat"],
              ['70', 'семьдесят', "sem'desyat"],
              ['80', 'восемьдесят', "vosem'desyat"],
              ['90', 'девяносто', 'devyanosto'],
            ],
            caption: 'Rosyjskie dziesiątki od 20 do 90',
            boldColumnIndices: [0, 1],
          },
        },
        {
          h3: 'Setki: od 100 do 1000',
          content:
            'Setki również podążają za wzorcem — ale 100 jest nieregularne (сто), a 200–400 mają własne formy, zanim wzorzec powraca od 500 do 900.',
          table: {
            headers: ['Liczba', 'Rosyjski', 'Transliteracja'],
            rows: [
              ['100', 'сто', 'sto'],
              ['200', 'двести', 'dvesti'],
              ['300', 'триста', 'trista'],
              ['400', 'четыреста', 'chetyresta'],
              ['500', 'пятьсот', "pyat'sot"],
              ['600', 'шестьсот', "shest'sot"],
              ['700', 'семьсот', "sem'sot"],
              ['800', 'восемьсот', "vosem'sot"],
              ['900', 'девятьсот', "devyat'sot"],
              ['1000', 'тысяча', 'tysyacha'],
            ],
            caption: 'Rosyjskie setki od 100 do 1000',
            boldColumnIndices: [0, 1],
          },
        },
      ],
      bullets: [
        'Liczby złożone czyta się od lewej do prawej: **347 = триста сорок семь**',
        '**Сорок** (40) i **девяносто** (90) są całkowicie nieregularne — trzeba je zapamiętać',
        '**Двести** (200) i **триста / четыреста** (300/400) to również formy nieregularne',
        'Od 500 wzwyż setki podążają za wzorcem: liczba + сот (np. пять + сот = пятьсот)',
        '**Тысяча** (1000) jest rzeczownikiem żeńskim i deklinuje się odpowiednio',
      ],
    },
    {
      h2: 'Rosyjskie liczby i przypadki: zasada gramatyczna, która zmienia wszystko',
      content:
        'Tu większość uczących się natrafia na mur. W języku rosyjskim **rzeczownik po liczniku zmienia swój przypadek gramatyczny** w zależności od liczby. To nie jest opcjonalne — dotyczy każdego zdania, w którym coś się liczy.\n\nZasada ma trzy poziomy:\n\n**Poziom 1: 1 → Mianownik liczby pojedynczej.** Один стол (jeden stół), одна книга (jedna książka).\n\n**Poziom 2: 2, 3, 4 → Dopełniacz liczby pojedynczej.** Два стол**а** (dwa stoły), три книг**и** (trzy książki).\n\n**Poziom 3: 5 i więcej → Dopełniacz liczby mnogiej.** Пять стол**ов** (pięć stołów), десять книг (dziesięć książek).\n\nZasada stosuje się do **ostatniej cyfry** liczby złożonej — 21 zachowuje się jak 1, 22 jak 2, 25 jak 5. Ale 11–14 zawsze biorą poziom 3, niezależnie od ostatniej cyfry.',
      table: {
        headers: ['Typ liczby', 'Wymagany przypadek', 'Przykład'],
        rows: [
          ['1, 21, 31, 41…', 'Mianownik l. poj.', 'один стол, двадцать один студент'],
          ['2, 3, 4 / 22, 23, 24…', 'Dopełniacz l. poj.', 'два стола, тридцать четыре книги'],
          ['5–20 / 25–30 / 11–14…', 'Dopełniacz l. mn.', 'пять столов, одиннадцать студентов'],
        ],
        caption: 'Liczby i przypadki rzeczowników w języku rosyjskim',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Zasada opiera się na **ostatniej cyfrze** liczb złożonych (z wyjątkiem „nastek" 11–19)',
        '**11–19 zawsze biorą dopełniacz liczby mnogiej** — niezależnie od ostatniej cyfry',
        'Zasada ta dotyczy rzeczowników; przymiotniki również muszą zgadzać się z przypadkiem rzeczownika',
        'Dopełniacz liczby mnogiej jest jedną z najbardziej nieregularnych form rzeczownika w rosyjskim — ćwiczyć wcześnie',
        'Ceny podążają za tą samą zasadą: **один рубль**, **два рубля**, **пять рублей**',
      ],
    },
    {
      h2: 'Liczby porządkowe w języku rosyjskim: pierwszy, drugi, trzeci…',
      content:
        'Liczby porządkowe (pierwszy, drugi, trzeci…) są przymiotnikami w języku rosyjskim — **zgadzają się w rodzaju, liczbie i przypadku** z opisywanym rzeczownikiem. Oto najważniejsze liczebniki porządkowe:',
      table: {
        headers: ['Pozycja', 'Porządkowy (r. m.)', 'Transliteracja', 'Forma żeńska'],
        rows: [
          ['1.', 'первый', 'pervyy', 'первая'],
          ['2.', 'второй', 'vtoroy', 'вторая'],
          ['3.', 'третий', 'tretiy', 'третья'],
          ['4.', 'четвёртый', 'chetvyortyy', 'четвёртая'],
          ['5.', 'пятый', 'pyatyy', 'пятая'],
          ['6.', 'шестой', 'shestoy', 'шестая'],
          ['7.', 'седьмой', "sed'moy", 'седьмая'],
          ['8.', 'восьмой', "vos'moy", 'восьмая'],
          ['9.', 'девятый', 'devyatyy', 'девятая'],
          ['10.', 'десятый', 'desyatyy', 'десятая'],
        ],
        caption: 'Rosyjskie liczebniki porządkowe od 1. do 10.',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        '**Третий** (trzeci) jest nieregularny — podąża za wzorcem przymiotnika miękkiego (третья, третьего…)',
        'W liczebnikach porządkowych złożonych zmienia się tylko ostatnie słowo: **двадцать первый** (dwudziesty pierwszy)',
        'Liczebniki porządkowe używane są w datach: **первое января** (pierwszego stycznia)',
        'Numery pięter: **на первом этаже** (na pierwszym piętrze) — porządkowy w przypadku miejscownikowym',
      ],
    },
    {
      h2: 'Jak powiedzieć swój wiek po rosyjsku',
      content:
        'Podawanie wieku po rosyjsku używa celownika i słowa **лет** (lat). Struktura to: **Мне + [liczba] + лет / года / год**.\n\nRzeczownik po liczniku podąża za tą samą zasadą trzech poziomów:\n\n- **год** (mianownik l. poj.) po 1: **Мне двадцать один год** (Mam 21 lat)\n- **года** (dopełniacz l. poj.) po 2, 3, 4: **Мне тридцать два года** (Mam 32 lata)\n- **лет** (dopełniacz l. mn.) po 5+: **Мне пятьдесят лет** (Mam 50 lat)',
      table: {
        headers: ['Wiek', 'Rosyjski', 'Dosłowne znaczenie'],
        rows: [
          ['Mam 1 rok', 'Мне один год', 'Mi jeden rok'],
          ['Mam 2 lata', 'Мне два года', 'Mi dwa lata'],
          ['Mam 5 lat', 'Мне пять лет', 'Mi pięć lat'],
          ['Mam 21 lat', 'Мне двадцать один год', 'Mi dwadzieścia jeden lat'],
          ['Mam 35 lat', 'Мне тридцать пять лет', 'Mi trzydzieści pięć lat'],
          ['Ile masz lat?', 'Сколько вам лет?', 'Ile lat tobie?'],
        ],
        caption: 'Podawanie wieku po rosyjsku',
        boldColumnIndices: [0, 1],
      },
    },
    {
      h2: 'Jak podać datę i rok po rosyjsku',
      content:
        'Daty po rosyjsku używają **liczebników porządkowych w formie nijakiej** (nijakiej, ponieważ domyślnym słowem jest **число** — data/numer, rzeczownik nijaki) po którym następuje miesiąc w **dopełniaczu**.\n\n**Dziś jest 5 czerwca → Сегодня пятое июня.**\n\nDla lat rosyjski używa liczebnika porządkowego ze słowem год (rok) w przypadku miejscownikowym: **W 2026 roku → В две тысячи двадцать шестом году.**',
      table: {
        headers: ['Miesiąc', 'Rosyjski', 'Dopełniacz (do dat)'],
        rows: [
          ['Styczeń', 'январь', 'января'],
          ['Luty', 'февраль', 'февраля'],
          ['Marzec', 'март', 'марта'],
          ['Kwiecień', 'апрель', 'апреля'],
          ['Maj', 'май', 'мая'],
          ['Czerwiec', 'июнь', 'июня'],
          ['Lipiec', 'июль', 'июля'],
          ['Sierpień', 'август', 'августa'],
          ['Wrzesień', 'сентябрь', 'сентября'],
          ['Październik', 'октябрь', 'октября'],
          ['Listopad', 'ноябрь', 'ноября'],
          ['Grudzień', 'декабрь', 'декабря'],
        ],
        caption: 'Rosyjskie nazwy miesięcy z formą dopełniacza (używaną w datach)',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        '**Какое сегодня число?** = Jaka jest dzisiaj data? (dosłownie: jaki numer jest dzisiaj?)',
        '**Сегодня первое января** = Dziś jest pierwszy stycznia',
        'Na urodziny: **Мой день рождения — второе марта** (Moje urodziny są 2 marca)',
        'Lata używają długich liczebników porządkowych: **в две тысячи двадцать шестом году** (w 2026 roku)',
        'W mowie potocznej Rosjanie często mówią rok w skrócie: **в двадцать шестом году** dla 2026',
      ],
    },
    {
      h2: 'Typowe błędy z rosyjskimi liczbami',
      content:
        'Nawet zaawansowani uczący się popełniają przewidywalne błędy z rosyjskimi liczbami. Oto cztery najczęstsze:',
      bullets: [
        '**Używanie mianownika po wszystkich liczbach.** Najczęstszy błąd: mówienie **пять стол** zamiast **пять столов**. Pamiętaj: 2–4 → dopełniacz l. poj.; 5+ → dopełniacz l. mn.',
        '**Zapominanie o rodzaju dla 1 i 2.** Mówienie **два книга** zamiast **две книги** (книга jest rodzaju żeńskiego, więc два → две).',
        '**Traktowanie 11–14 jak ich ostatnią cyfrę.** 11 wygląda jakby kończyło się na 1, ale bierze dopełniacz liczby mnogiej: **одиннадцать студентов**, nie одиннадцать студент.',
        '**Mylenie год / года / лет dla wieku.** Słowo „rok" podąża za tą samą zasadą trzech poziomów: один год, два года, пять лет.',
        '**Błędne akcentowanie сорок (40).** To **SO-rok**, akcent pada na pierwszą sylabę.',
      ],
    },
  ],
  faq: [
    {
      question: 'Jakie jest rosyjskie słowo na „jeden"?',
      answer:
        'Rosyjskie słowo na „jeden" ma trzy warianty rodzajowe: **один** (r. męski — один брат), **одна** (r. żeński — одна сестра) i **одно** (r. nijaki — одно окно). Używa się formy odpowiadającej rodzajowi rzeczownika, który opisuje.',
    },
    {
      question: 'Jak rosyjskie liczby wchodzą w interakcję z przypadkami rzeczowników?',
      answer:
        'Rosyjskie rzeczowniki zmieniają przypadek po liczbach. Zasada: 1 → mianownik l. poj. (один стол); 2, 3, 4 → dopełniacz l. poj. (два стола); 5 i więcej → dopełniacz l. mn. (пять столов). W liczbach złożonych zasada zależy od ostatniej cyfry — ale 11–14 zawsze biorą dopełniacz l. mn.',
    },
    {
      question: 'Jaka jest różnica między два i две?',
      answer:
        '**Два** używa się z rzeczownikami rodzaju męskiego i nijakiego: два брата (dwóch braci), два окна (dwa okna). **Две** używa się z rzeczownikami rodzaju żeńskiego: две сестры (dwie siostry), две книги (dwie książki). Rozróżnienie jest ważne — użycie два z rzeczownikiem żeńskim jest błędem gramatycznym.',
    },
    {
      question: 'Jak powiedzieć „Mam 25 lat" po rosyjsku?',
      answer:
        'Mówi się **Мне двадцать пять лет** (dosłownie: „mi dwadzieścia pięć lat"). Liczba 25 kończy się na 5, więc rzeczownikiem jest **лет** (dopełniacz l. mn.). Jeśli ma się 21 lat, mówi się **Мне двадцать один год** (год — mianownik l. poj., bo ostatnia cyfra to 1).',
    },
    {
      question: 'Jak powiedzieć „100" po rosyjsku?',
      answer:
        '100 po rosyjsku to **сто** — forma nieregularna. 200 to **двести**, 300 to **триста**, 400 to **четыреста**. Od 500 wzwyż setki podążają za regularnym wzorcem: **пятьсот, шестьсот, семьсот, восемьсот, девятьсот**.',
    },
  ],
  conclusion:
    'Rosyjskie liczby są jedną z tych części języka, które wyglądają prosto na liście, ale wymagają prawdziwego ćwiczenia, żeby używać ich poprawnie w mowie. Dobra wiadomość: system jest **logiczny**. Gdy zasada trzech poziomów staje się jasna, gdy zapamiętuje się сорок (40), девяносто (90) i сто (100), a zgodność rodzajowa один / одна / два / две staje się automatyczna — opanowuje się w zasadzie cały system liczbowy.\n\nNajważniejszym kolejnym krokiem jest **ćwiczenie liczb w prawdziwych zdaniach** — liczenie obiektów z właściwym przypadkiem, podawanie cen, głośne czytanie dat. Właśnie tam bierna znajomość tabel liczbowych staje się aktywnym rosyjskim.',
  conclusionBullets: [
    'Liczby 1–10 to fundament — zapamiętać z wariantami rodzajowymi',
    '„Nastki" (11–19) wszystkie kończą się na **-надцать** — nauczyć się wzorca raz',
    'Zapamiętać trzy nieregularne: **сорок** (40), **девяносто** (90), **сто** (100)',
    'Stosować zasadę przypadków: 1 → mianownik, 2–4 → dopełniacz l. poj., 5+ → dopełniacz l. mn.',
    'Liczebniki porządkowe są przymiotnikami i muszą zgadzać się w rodzaju, przypadku i liczbie',
  ],
  conclusionOutro:
    'Liczby są Twoim wejściem do systemu przypadków gramatycznych języka rosyjskiego — i ten system jest właśnie tym, co prowadzi do prawdziwej płynności. Każdy rzeczownik, zaimek i przymiotnik zmienia się w zależności od swojej roli w zdaniu, a **opanowanie tych deklinacji to właśnie to, co odróżnia funkcjonalny rosyjski od prawdziwej swobody**.',
  ctaText: 'Pobierz Russian Cases with Anna — Bezpłatnie',
  ctaHref: '/',
  internalLinks: [
    {
      href: '/learn/articles/russian-greetings-guide',
      label: 'Rosyjskie pozdrowienia: jak powiedzieć cześć po rosyjsku (kompletny przewodnik)',
    },
    {
      href: '/learn/articles/russian-most-common-words',
      label: '100 najczęstszych słów rosyjskich: Niezbędna lista słownictwa dla początkujących',
    },
    {
      href: '/learn/articles/russian-alphabet-cyrillic-guide',
      label: 'Rosyjski alfabet: naucz się cyrylicy w 3 prostych krokach',
    },
    {
      href: '/learn/articles/russian-cases-explained-beginners-guide',
      label: 'Rosyjskie przypadki wyjaśnione prosto: przewodnik wizualny dla początkujących',
    },
    {
      href: '/learn/articles/how-long-learn-russian',
      label: 'Ile czasu zajmuje nauka rosyjskiego? (Realistyczny harmonogram)',
    },
    {
      href: '/practice',
      label: 'Darmowy quiz deklinacyjny rosyjskiego (wszystkie sześć przypadków)',
    },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Liczby po rosyjsku: jak liczyć po rosyjsku (kompletny przewodnik 2026)',
    description:
      'Naucz się liczb po rosyjsku od 1 do 1000: liczby główne, porządkowe, liczby z przypadkami, wiek i daty — kompletny przewodnik z tabelami.',
    datePublished: '2026-06-11',
    dateModified: '2026-06-11',
    author: {
      '@type': 'Person',
      name: 'Nathan',
      url: 'https://russiandeclensions.com/',
      image: 'https://russiandeclensions.com/landing-cases/founder-photo.webp',
      description: 'Native speaker języka francuskiego; uczy się rosyjskiego i dzieli się tym, co naprawdę działa.',
      worksFor: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://russiandeclensions.com/learn/articles/russian-numbers-guide',
    },
    keywords:
      'liczby po rosyjsku, jak liczyć po rosyjsku, rosyjskie liczby główne, rosyjskie liczby porządkowe, liczenie po rosyjsku',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russia-kremlin-moscow.webp',
      width: 1200,
      height: 630,
    },
  },
};
