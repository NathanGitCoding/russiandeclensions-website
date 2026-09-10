import type { LearnArticle } from '../learnArticles';

/** Polskie tłumaczenie artykułu `russian-noun-gender-guide` (źródło angielskie: `learnArticles.ts`). */
export const russianNounGenderGuidePl: LearnArticle = {
  slug: 'russian-noun-gender-guide',
  title: 'Rodzaj rzeczowników rosyjskich: męski, żeński, nijaki (kompletny przewodnik)',
  metaTitle:
    'Rodzaj rzeczowników rosyjskich: męski, żeński, nijaki | Russian Cases with Anna',
  metaDescription:
    'Naucz się rozpoznawać rodzaj rosyjskiego rzeczownika po końcówce, poznaj podchwytliwe rzeczowniki na -ь, wyjątki (кофе, папа) i to, jak rodzaj rządzi przymiotnikami, czasownikami i przypadkami.',
  keywords: [
    'rodzaj rzeczowników rosyjskich',
    'rodzaj męski żeński nijaki po rosyjsku',
    'jak rozpoznać rodzaj rzeczownika rosyjskiego',
    'rosyjski rodzaj gramatyczny',
    'końcówki a rodzaj po rosyjsku',
    'znak miękki rodzaj rosyjski',
    'wyjątki rodzaju rosyjskiego',
    'zgoda przymiotnika po rosyjsku',
    'czy кофе jest rodzaju męskiego czy nijakiego',
    'przewodnik po rodzaju rosyjskim',
  ],
  h1: 'Rodzaj rzeczowników rosyjskich: męski, żeński, nijaki (kompletny przewodnik)',
  heroImage: {
    src: '/articles/russian-noun-gender-chalkboard.webp',
    alt: 'Tablica dzieląca rosyjskie rzeczowniki na kolumny rodzaju męskiego, żeńskiego i nijakiego',
    width: 1536,
    height: 1024,
  },
  intro:
    'Każdy rosyjski rzeczownik należy do jednego z trzech rodzajów — męskiego, żeńskiego lub nijakiego — i ta jedna etykieta po cichu kontroluje niemal wszystko inne w otaczającym ją zdaniu. Wybierzesz zły rodzaj, a przymiotnik, zaimek dzierżawczy, czasownik w czasie przeszłym, a w końcu i końcówka przypadka mogą wyjść błędnie, nawet jeśli sam rzeczownik znasz idealnie.\n\nDobra wiadomość jest taka, że rosyjski rodzaj **nie jest przypadkowy**. **Około 90% rzeczowników ujawnia swój rodzaj samą ostatnią literą** — to szybki, niezawodny skrót, gdy już poznasz ten wzorzec. Zła wiadomość dotyczy pozostałych 10%: rzeczowniki kończące się na znak miękki **-ь** mogą być męskie lub żeńskie bez żadnej wizualnej wskazówki, a garstka codziennych słów (папа, кофе) po prostu ignoruje regułę pisowni, ponieważ wygrywa znaczenie.\n\nTen przewodnik daje Ci regułę końcówek obejmującą większość rzeczowników, pułapkę -ь i trik, który ją oswaja, wyjątki warte zapamiętania na pamięć oraz dokładnie to, jak rodzaj promieniuje dalej na przymiotniki, czasowniki w czasie przeszłym i sam system sześciu przypadków.',
  introByline: {
    text: '**Napisane przez Nathana** — native speaker francuskiego uczący się rosyjskiego; dzielę się tym, co naprawdę działa w gramatyce, przypadkach i codziennej praktyce.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, założyciel Russian Cases with Anna',
    imageWidth: 256,
    imageHeight: 256,
  },
  whatYouLearn: [
    'Regułę trzech końcówek, która przewiduje rodzaj dla około **90% rosyjskich rzeczowników**',
    'Dlaczego rzeczowniki kończące się na **-ь** to największa pułapka rodzaju — i skrót **-ость**, który pomaga',
    'Wyjątki, w których rodzaj naturalny wygrywa z pisownią (**папа**, **дедушка**) oraz zapożyczenia domyślnie przyjmujące rodzaj nijaki (**кино**, **пальто**)',
    'Jak rodzaj kontroluje **końcówki przymiotników**, **zaimki dzierżawcze** i **czasowniki w czasie przeszłym**',
    'Dlaczego rodzaj jest prawdziwym punktem wyjścia do nauki **rosyjskich końcówek przypadków**',
  ],
  leadMagnetCta: {
    title: 'Opanuj rosyjskie przypadki poza rodzajem — darmowa aplikacja',
    description:
      'Rodzaj to dopiero pierwsza warstwa — każdy rzeczownik odmienia się później inaczej w zależności od tego rodzaju, przez sześć przypadków. Russian Cases with Anna oferuje uporządkowane lekcje i inteligentne quizy, które zautomatyzują każdy przypadek — za darmo na iOS i Android.',
    ctaText: 'Pobierz aplikację — Za darmo',
    ctaHref: '/',
  },
  sections: [
    {
      h2: 'Dlaczego rodzaj rosyjskich rzeczowników ma znaczenie (to nie tylko etykieta)',
      content:
        'W języku polskim rodzaj gramatyczny już wpływa na wiele rzeczy, ale w rosyjskim jest **strukturalny**: decyduje o końcówce każdego opisującego przymiotnika, formie zaimków dzierżawczych typu „mój" czy „twój", końcówce czasownika w czasie przeszłym, gdy ten rzeczownik jest podmiotem, oraz — później — który zestaw sześciu końcówek przypadków rzeczownik będzie stosować przez resztę swojego gramatycznego życia.\n\nZobacz, jak wiele zmienia się w trzech identycznych poza tym zdaniach, tylko dlatego, że zmienia się rodzaj rzeczownika:',
      table: {
        headers: ['Rodzaj', 'Rosyjski', 'Polski'],
        rows: [
          ['Męski', 'Мой новый дом стоял здесь.', 'Mój nowy dom stał tutaj.'],
          ['Żeński', 'Моя новая книга лежала здесь.', 'Moja nowa książka leżała tutaj.'],
          ['Nijaki', 'Моё новое окно было здесь.', 'Moje nowe okno było tutaj.'],
        ],
        caption: 'Ten sam schemat zdania, trzy rodzaje: zaimek, przymiotnik i czasownik — wszystko się zmienia',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Zaimek dzierżawczy się zmienia: **мой → моя → моё** („mój/moja/moje")',
        'Końcówka przymiotnika się zmienia: **новый → новая → новое** („nowy/nowa/nowe")',
        'Końcówka czasownika w czasie przeszłym się zmienia: **стоял → лежала → было** (zgoda gramatyczna, nie zmiana znaczenia)',
        'Później **końcówki przypadków** dołączane do samego rzeczownika również zależą od tego samego rodzaju',
      ],
    },
    {
      h2: 'Jak rozpoznać rodzaj po końcówce (reguła 90%)',
      content:
        'W przypadku zdecydowanej większości rosyjskich rzeczowników rodzaj można odczytać wprost z ostatniej litery **formy słownikowej** (mianownik liczby pojedynczej). Naucz się tej tabeli, a niemal zawsze poprawnie odgadniesz przy nowym rzeczowniku.',
      table: {
        headers: ['Końcówka', 'Rodzaj', 'Przykłady'],
        rows: [
          ['Spółgłoska', 'Męski', 'стол (stół), дом (dom), город (miasto)'],
          ['-й', 'Męski', 'музей (muzeum), герой (bohater), чай (herbata)'],
          ['-а', 'Żeński', 'книга (książka), школа (szkoła), мама (mama)'],
          ['-я', 'Żeński', 'неделя (tydzień), земля (ziemia), тётя (ciocia)'],
          ['-о', 'Nijaki', 'окно (okno), слово (słowo), молоко (mleko)'],
          ['-е / -ё', 'Nijaki', 'море (morze), поле (pole), бельё (bielizna)'],
          ['-ь', 'Męski **lub** żeński', 'zobacz kolejną sekcję — to jedyny wyjątek'],
        ],
        caption: 'Przewidywanie rodzaju rosyjskiego rzeczownika na podstawie ostatniej litery',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Rzeczownik kończący się na **twardą spółgłoskę** lub **-й** jest niemal zawsze rodzaju męskiego — na tym etapie nie ma wyjątków wartych uwagi',
        'Rzeczownik kończący się na **-о** lub **-е/-ё** jest niemal zawsze rodzaju nijakiego',
        'Rzeczownik kończący się na **-а** lub **-я** jest zwykle rodzaju żeńskiego — ale uważaj na wyjątki poniżej, bo to miejsce, w którym znaczenie może przeważyć nad pisownią',
        'Ta reguła działa tylko dla **formy słownikowej (mianownik liczby pojedynczej)** — końcówki zmieniają się po odmianie rzeczownika, więc zawsze najpierw sprawdź formę podstawową',
      ],
    },
    {
      h2: 'Pułapka znaku miękkiego: rzeczowniki na -ь',
      content:
        'Rzeczowniki kończące się na znak miękki **-ь** to jedyne miejsce, w którym pisownia nie daje żadnej wskazówki — mogą być męskie lub żeńskie, i obie grupy są liczne. Nie ma tu skrótu wizualnego; native speakerzy po prostu znają każde słowo, a uczący się muszą zapamiętać listę.',
      table: {
        headers: ['Rzeczowniki żeńskie na -ь', 'Rzeczowniki męskie na -ь'],
        rows: [
          ['ночь (noc)', 'день (dzień)'],
          ['дверь (drzwi)', 'конь (koń)'],
          ['мышь (mysz)', 'словарь (słownik)'],
          ['кровать (łóżko)', 'учитель (nauczyciel)'],
          ['тетрадь (zeszyt)', 'дождь (deszcz)'],
          ['любовь (miłość)', 'гость (gość)'],
          ['осень (jesień)', 'рубль (rubel)'],
        ],
        caption: 'Popularne rzeczowniki na -ь podzielone według rodzaju — żadna reguła pisowni ich nie rozróżnia',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Jedyny niezawodny skrót: rzeczowniki kończące się na **-ость** lub **-есть** są niemal zawsze żeńskie — радость (radość), скорость (prędkość), известность (sława)',
        'Poza tym sufiksem nie ma żadnego wzorca brzmieniowego ani pisowni — **дверь** i **словарь** rymują się, ale mają przeciwne rodzaje',
        'Ucząc się nowego rzeczownika na -ь, ucz się go razem z pasującym przymiotnikiem lub liczebnikiem (**одна дверь**, „jedne drzwi"), żeby rodzaj od razu przylgnął do słowa',
        'To największe źródło błędów rodzaju wśród uczących się na poziomie średnio zaawansowanym — zaplanuj na to prawdziwy czas na zapamiętywanie',
      ],
    },
    {
      h2: 'Częste wyjątki łamiące regułę końcówek',
      content:
        'Niewielka liczba codziennych słów całkowicie ignoruje regułę końcówek z dwóch różnych powodów: **rodzaju naturalnego** (rzeczywista płeć osoby przeważa nad pisownią) i **nieodmiennych zapożyczeń** (słów zapożyczonych, które nigdy nie zmieniają formy i domyślnie przyjmują rodzaj nijaki, chyba że znaczenie mówi inaczej).',
      table: {
        headers: ['Słowo', 'Końcówka sugeruje', 'Faktyczny rodzaj', 'Dlaczego'],
        rows: [
          ['папа (tata)', 'Żeński (-а)', 'Męski', 'Rodzaj naturalny: osoba jest mężczyzną'],
          ['дедушка (dziadek)', 'Żeński (-а)', 'Męski', 'Rodzaj naturalny: osoba jest mężczyzną'],
          ['дядя (wujek)', 'Żeński (-я)', 'Męski', 'Rodzaj naturalny: osoba jest mężczyzną'],
          ['мужчина (mężczyzna)', 'Żeński (-а)', 'Męski', 'Rodzaj naturalny: osoba jest mężczyzną'],
          ['кофе (kawa)', 'Brak jasnej końcówki / wygląda na nijaki', 'Męski (tradycyjnie)', 'Ustalone konwencją; rodzaj nijaki jest częsty w mowie potocznej, ale uznawany za niestandardowy'],
          ['кино (kino)', 'Wygląda na nijaki (-о)', 'Nijaki', 'Nieodmienne zapożyczenie — domyślny rodzaj dla zapożyczonych rzeczowników nieżywotnych'],
          ['пальто (płaszcz)', 'Wygląda na nijaki (-о)', 'Nijaki', 'Nieodmienne zapożyczenie — domyślny rodzaj'],
          ['такси (taksówka)', 'Brak jasnej końcówki', 'Nijaki', 'Nieodmienne zapożyczenie — domyślny rodzaj'],
        ],
        caption: 'Wyjątki: kiedy rodzaj naturalny lub konwencja zapożyczeń przeważa nad regułą końcówek',
        boldColumnIndices: [0, 2],
      },
      bullets: [
        'Garstka **rzeczowników na -а/-я oznaczających mężczyzn** (папа, дедушка, дядя, мужчина) jest gramatycznie rodzaju męskiego — nadal przyjmują męskie przymiotniki i czasowniki w czasie przeszłym: **мой добрый дедушка** („mój dobry dziadek")',
        'Nieodmienne zapożyczenia (kończące się samogłoską, która nigdy się nie zmienia: -о, -е, -и, -у) domyślnie przyjmują rodzaj **nijaki**, chyba że znaczenie słowa wskazuje inaczej — **кофе** to słynny wyjątek, utrzymywany jako męski długoletnią konwencją',
        'Kilka zapożyczeń przyjmuje rodzaj od **kategorii**, do której należą: **авеню** (aleja) jest żeńskie, ponieważ „улица" (ulica) jest żeńska — decyduje znaczenie, nie pisownia',
        'Ta lista wyjątków jest krótka i łatwa do nauczenia — niech nie podważy Twojej pewności co do reguły 90%',
      ],
    },
    {
      h2: 'Jak rodzaj kontroluje zgodę przymiotników i zaimków',
      content:
        'Każdy przymiotnik i zaimek dzierżawczy w języku rosyjskim musi **zgadzać się w rodzaju** z rzeczownikiem, który opisuje. W mianowniku każdy rodzaj ma własną, dedykowaną końcówkę przymiotnika — to pierwsze miejsce, w którym początkujący świadomie „czują" działanie rodzaju.',
      table: {
        headers: ['Rodzaj', 'Końcówka przymiotnika', 'Przykład', 'Znaczenie'],
        rows: [
          ['Męski', '-ый / -ий', 'новый дом', 'nowy dom'],
          ['Żeński', '-ая / -яя', 'новая книга', 'nowa książka'],
          ['Nijaki', '-ое / -ее', 'новое окно', 'nowe okno'],
        ],
        caption: 'Zgoda przymiotnika według rodzaju (mianownik)',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Zaimki dzierżawcze podążają za tym samym trójdzielnym podziałem: **мой чай** (moja herbata, m.), **моя сумка** (moja torba, ż.), **моё имя** (moje imię, n.)',
        'Zaimek wskazujący „ten/ta/to" robi to samo: **этот дом**, **эта книга**, **это окно**',
        'Ta zgoda nie jest opcjonalnym stylem — użycie złej końcówki to błąd gramatyczny, a nie tylko akcent',
      ],
    },
    {
      h2: 'Jak rodzaj kontroluje czasowniki w czasie przeszłym',
      content:
        'Rosyjskie czasowniki w czasie przeszłym zgadzają się z rodzajem podmiotu w liczbie pojedynczej — jest to zbliżone do polskiego (czytał/czytała/czytało), ale w rosyjskim ta systematyczność często zaskakuje uczących się. Sam czasownik nie zmienia znaczenia; zmienia się tylko jego końcówka, dopasowując się do tego, kto lub co wykonało czynność.',
      table: {
        headers: ['Rodzaj podmiotu', 'Przykład', 'Znaczenie'],
        rows: [
          ['Męski', 'Он читал.', 'On czytał.'],
          ['Żeński', 'Она читала.', 'Ona czytała.'],
          ['Nijaki', 'Оно читало.', 'Ono czytało.'],
        ],
        caption: 'Zgoda czasownika w czasie przeszłym z rodzajem podmiotu',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Wzorzec jest prosty, gdy się go zobaczy: **-л** (m.), **-ла** (ż.), **-ло** (n.), **-ли** (dowolna liczba mnoga)',
        'Dlatego trzeba znać rodzaj rzeczownika nawet dla prostego zdania w czasie przeszłym — „książka spadła" to **книга упала**, a nie упал czy упало',
        'Reguła dotyczy **rodzaju gramatycznego** rzeczownika, niekoniecznie płci biologicznej, w przypadku przedmiotów nieożywionych',
      ],
    },
    {
      h2: 'Jak rodzaj kształtuje końcówki przypadków (szerszy obraz)',
      content:
        'Rodzaj to nie tylko przymiotniki i czas przeszły — to **zasada organizująca** cały system odmiany przez sześć przypadków. Rzeczowniki męskie, żeńskie i nijakie podążają za innym wzorcem końcówek przez mianownik, dopełniacz, celownik, biernik, narzędnik i miejscownik. Poznaj najpierw rodzaj rzeczownika, a reszta jego odmiany staje się kwestią zastosowania właściwego wzorca zamiast zgadywania od zera.\n\nJeśli nie przerobiłeś jeszcze poszczególnych przypadków, nasz [kompletny przewodnik po rosyjskich końcówkach przypadków](/learn/articles/russian-case-endings-cheatsheet) grupuje każdą końcówkę według rodzaju, a [Rosyjskie przypadki wyjaśnione prosto: przewodnik dla początkujących](/learn/articles/russian-cases-explained-beginners-guide) to najlepszy kolejny krok po tym artykule.',
      bullets: [
        'Rzeczowniki żeńskie na -а/-я mają wspólny wzorzec odmiany; rzeczowniki męskie na spółgłoskę/-й — inny; rzeczowniki nijakie na -о/-е — trzeci',
        'Rzeczowniki na -ь również dzielą swój wzorzec odmiany według rodzaju — to kolejny powód, dla którego podział na męski/żeński ma znaczenie, a nie tylko pisownia',
        'Gdy rodzaj stanie się automatyczny, każdy nowo poznany rzeczownik wpasowuje się bezpośrednio w znany wzorzec odmiany, zamiast wymagać osobnego zapamiętywania',
      ],
    },
    {
      h2: 'Częste błędy dotyczące rodzaju rosyjskich rzeczowników',
      bullets: [
        '**Zakładanie, że każdy rzeczownik na -а/-я jest żeński.** Słowa oznaczające mężczyzn (папа, дедушка, дядя, мужчина) pozostają męskie niezależnie od końcówki — sprawdź najpierw znaczenie, potem pisownię.',
        '**Zgadywanie rzeczowników na -ь po brzmieniu.** дверь (ż.) i словарь (m.) rymują się, ale mają przeciwne rodzaje — nie ma innego skrótu niż zapamiętywanie i wzorzec -ость.',
        '**Używanie przymiotników nijakich z кофе.** Tradycyjny rosyjski zachowuje кофе jako rodzaj męski (**чёрный кофе**, a nie чёрное кофе), choć wielu native speakerów używa potocznie rodzaju nijakiego — forma męska to nadal to, czego oczekują poradniki gramatyczne i egzaminy.',
        '**Zapominanie, że nieodmienne zapożyczenia wciąż mają rodzaj.** Słowa takie jak пальто, метро i такси nigdy nie zmieniają końcówki, ale gramatycznie są rodzaju nijakiego i wymagają nijakich przymiotników: **новое пальто** (nowy płaszcz).',
        '**Mylenie męskich i żeńskich końcówek przymiotników pod presją czasu.** -ый/-ая i -ой/-ая wyglądają podobnie przy szybkim mówieniu — zwolnij przy nowym słownictwie, aż dopasowanie stanie się automatyczne.',
      ],
    },
  ],
  faq: [
    {
      question: 'Ile rodzajów ma język rosyjski?',
      answer:
        'Rosyjski ma **trzy rodzaje gramatyczne**: męski, żeński i nijaki. Każdy rzeczownik należy dokładnie do jednego z nich, a ten wybór kontroluje formę przymiotników, zaimków dzierżawczych, czasowników w czasie przeszłym i końcówek przypadków używanych z tym rzeczownikiem.',
    },
    {
      question: 'Jak rozpoznać, czy rosyjski rzeczownik jest rodzaju męskiego czy żeńskiego?',
      answer:
        'Sprawdź **ostatnią literę formy słownikowej (mianownik liczby pojedynczej)**: spółgłoska lub **-й** to zwykle rodzaj męski, **-а/-я** to zwykle rodzaj żeński, a **-о/-е** to zwykle rodzaj nijaki. Ta reguła obejmuje około 90% rzeczowników. Rzeczowniki kończące się na znak miękki **-ь** są wyjątkiem — mogą być męskie lub żeńskie i trzeba je zapamiętać pojedynczo.',
    },
    {
      question: 'Czy wszystkie rosyjskie rzeczowniki na -а są rodzaju żeńskiego?',
      answer:
        'Prawie, ale nie do końca. Garstka słów oznaczających **mężczyzn** — папа (tata), дедушка (dziadek), дядя (wujek), мужчина (mężczyzna) — kończy się na -а lub -я, ale gramatycznie są **rodzaju męskiego**, ponieważ rodzaj naturalny przeważa nad regułą pisowni. Nadal przyjmują męskie przymiotniki i czasowniki w czasie przeszłym.',
    },
    {
      question: 'Jakiego rodzaju jest кофе (kawa) w języku rosyjskim?',
      answer:
        'Tradycyjnie i gramatycznie **кофе jest rodzaju męskiego** (**чёрный кофе**, „czarna kawa"), mimo że to nieodmienne zapożyczenie, które teoretycznie powinno domyślnie przyjąć rodzaj nijaki. Zgoda nijaka (**чёрное кофе**) jest częsta w mowie potocznej, ale nadal uznawana za niestandardową przez większość poradników gramatycznych i egzaminów.',
    },
    {
      question: 'Czy rodzaj rzeczownika zmienia się w liczbie mnogiej?',
      answer:
        'Nie — rzeczownik zachowuje ten sam rodzaj gramatyczny w każdym przypadku i liczbie, ale w **liczbie mnogiej przymiotniki i czasowniki w czasie przeszłym nie rozróżniają już rodzaju**: wszystkie trzy rodzaje dzielą tę samą końcówkę przymiotnika w liczbie mnogiej (**новые**) i tę samą końcówkę czasownika w czasie przeszłym w liczbie mnogiej (**читали**). Zgoda rodzaju ma znaczenie tylko w liczbie pojedynczej.',
    },
  ],
  conclusion:
    'Rodzaj rosyjskich rzeczowników na pierwszy rzut oka wydaje się onieśmielający, ponieważ dotyka tak dużej części zdania — przymiotników, zaimków, czasowników, a w końcu każdej końcówki przypadka. W praktyce sprowadza się do jednej niezawodnej reguły obejmującej większość rzeczowników, jednej naprawdę trudnej grupy (rzeczowniki na -ь), która po prostu wymaga zapamiętywania, oraz krótkiej listy wyjątków wartych nauczenia się na pamięć.\n\nNajszybszym sposobem na zautomatyzowanie rodzaju jest dołączanie go do każdego nowego słowa od pierwszego dnia: ucz się rzeczowników razem z przymiotnikiem (**новый дом**, **новая книга**, **новое окно**), a nie w izolacji, żeby rodzaj nigdy nie był osobnym faktem, który trzeba sobie później przypominać.',
  conclusionBullets: [
    'Trzy rodzaje: **męski, żeński, nijaki** — każdy rzeczownik ma dokładnie jeden',
    'Reguła 90%: **spółgłoska/-й = męski**, **-а/-я = żeński**, **-о/-е = nijaki**',
    '**Rzeczowniki na -ь** to prawdziwy wyjątek — brak wskazówki w pisowni, zapamiętaj każdy z osobna (sufiks **-ость** jest niezawodnie żeński)',
    'Krótka lista wyjątków do nauczenia się na pamięć: **папа, дедушка, дядя** (męskie mimo -а/-я), **кофе** (męski), **кино/пальто/такси** (nijakie zapożyczenia)',
    'Rodzaj rządzi **końcówkami przymiotników, zaimkami dzierżawczymi, czasownikami w czasie przeszłym** oraz całym **systemem odmiany przez przypadki**',
  ],
  conclusionOutro:
    'Rodzaj jest fundamentem, na którym zbudowana jest cała rosyjska gramatyka. Gdy stanie się automatyczny, nauka sześciu przypadków przestaje być sześcioma osobnymi zagadkami i staje się trzema znajomymi wzorcami stosowanymi konsekwentnie — **ta zmiana sprawia, że płynnie brzmiący rosyjski staje się możliwy.**',
  ctaText: 'Pobierz Russian Cases with Anna — Za darmo',
  ctaHref: '/',
  internalLinks: [
    {
      href: '/learn/articles/russian-case-endings-cheatsheet',
      label: 'Rosyjskie końcówki przypadków: ostateczna ściąga',
    },
    {
      href: '/learn/articles/russian-cases-explained-beginners-guide',
      label: 'Rosyjskie przypadki wyjaśnione prosto: wizualny przewodnik dla początkujących',
    },
    {
      href: '/learn/articles/russian-genitive-case',
      label: 'Rosyjski dopełniacz: kompletny przewodnik',
    },
    {
      href: '/learn/articles/russian-accusative-case',
      label: 'Rosyjski biernik: kompletny przewodnik',
    },
    {
      href: '/learn/articles/russian-alphabet-cyrillic-guide',
      label: 'Alfabet rosyjski: kompletny przewodnik po cyrylicy',
    },
    { href: '/practice', label: 'Darmowy quiz z rosyjskiej odmiany (wszystkie sześć przypadków)' },
    { href: '/words', label: 'Przeglądaj ponad 400 rosyjskich słów z pełnymi tabelami odmiany' },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Rodzaj rzeczowników rosyjskich: męski, żeński, nijaki (kompletny przewodnik)',
    description:
      'Naucz się rozpoznawać rodzaj rosyjskiego rzeczownika po końcówce, poznaj podchwytliwe rzeczowniki na -ь, wyjątki (кофе, папа) i to, jak rodzaj rządzi przymiotnikami, czasownikami i przypadkami.',
    datePublished: '2026-09-10',
    dateModified: '2026-09-10',
    author: {
      '@type': 'Person',
      name: 'Nathan',
      url: 'https://russiandeclensions.com/',
      image: 'https://russiandeclensions.com/landing-cases/founder-photo.webp',
      description: 'Native speaker francuskiego uczący się rosyjskiego, dzieli się tym, co naprawdę działa.',
      worksFor: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://russiandeclensions.com/learn/articles/russian-noun-gender-guide',
    },
    keywords:
      'rodzaj rzeczowników rosyjskich, rodzaj męski żeński nijaki po rosyjsku, jak rozpoznać rodzaj rzeczownika rosyjskiego, rosyjski rodzaj gramatyczny, znak miękki rodzaj rosyjski, wyjątki rodzaju rosyjskiego',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russian-noun-gender-chalkboard.webp',
      width: 1536,
      height: 1024,
    },
  },
};
