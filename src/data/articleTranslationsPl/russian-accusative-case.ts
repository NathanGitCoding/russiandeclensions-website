import type { LearnArticle } from '../learnArticles';

/** Tłumaczenie polskie artykułu `russian-accusative-case` (źródło EN: `learnArticles.ts`). Cyrylica zgodna z plikiem francuskim. */
export const russianAccusativeCasePl: LearnArticle = {
  slug: 'russian-accusative-case',
  title:
    'Biernik rosyjski: dopełnienia bezpośrednie, ożywione a nieożywione oraz czasowniki ruchu',
  metaTitle:
    'Biernik rosyjski: zasady, końcówki i 30 przykładów | Russian Cases with Anna',
  metaDescription:
    'Kompletny przewodnik po bierniku rosyjskim: tabela końcówek, rozróżnienie ożywione/nieożywione, czasowniki ruchu, в/на kierunek vs miejsce, 9 przyimków, 15 czasowników przechodnich, 30 autentycznych przykładów.',
  keywords: [
    'biernik rosyjski',
    'końcówki biernika rosyjski',
    'ożywione nieożywione biernik rosyjski',
    'dopełnienie bezpośrednie rosyjski',
    'czasowniki ruchu biernik rosyjski',
    'в на biernik rosyjski',
  ],
  h1: 'Biernik rosyjski: dopełnienia bezpośrednie, ożywione a nieożywione oraz czasowniki ruchu',
  heroImage: {
    src: '/articles/free-russian-lesson-accusative-case.webp',
    alt: 'Darmowa lekcja rosyjskiego o bierniku: dopełnienia bezpośrednie i czasowniki ruchu',
    width: 1200,
    height: 630,
  },
  intro:
    'Rosyjski biernik to **drugi co do ważności przypadek** po dopełniaczu — i pod wieloma względami najbardziej intuicyjny. Oznacza **dopełnienie bezpośrednie** zdania: osobę lub rzecz bezpośrednio dotkniętą działaniem czasownika.\n\nBiernik ma jednak cechę, która zaskakuje każdego uczącego się: **rozróżnienie ożywione / nieożywione**. U rzeczowników męskich ożywione i nieożywione odmieniają się w bierniku inaczej — zrozumienie tej zasady jest niezbędne do poprawnej mowy po rosyjsku.',
  whatYouLearn: [
    'Czym jest rosyjski biernik i jakie ma **4 główne zastosowania**',
    'Końcówki biernika dla **wszystkich rodzajów** (liczba pojedyncza i mnoga)',
    '**Rozróżnienie ożywione / nieożywione** — główne źródło zamieszania',
    '**Czasowniki ruchu** w rosyjskim i użycie biernika',
    '**В i НА** z biernikiem (kierunek) vs miejscownikiem (miejsce)',
    '**9 przyimków** wymagających biernika',
    '**Wyrażenia czasowe** z biernikiem',
    '**15 kluczowych czasowników** z dopełnieniem w bierniku',
    '**30 autentycznych** przykładów po rosyjsku z transliteracją i tłumaczeniem',
    'Biernik vs dopełniacz — jak je odróżnić',
  ],
  leadMagnetCta: {
    title: 'Ćwicz rosyjski biernik dzięki inteligentnym zadaniom',
    description:
      'Nasza aplikacja mobilna obejmuje wszystkie 6 przypadków rosyjskiego — ze szczególnym naciskiem na ożywione/nieożywione, czasowniki ruchu oraz в/на (kierunek vs miejsce). Dostępna na Androida i iOS.',
    ctaText: 'Pobierz aplikację i zacznij ćwiczyć już dziś',
    ctaHref: '/',
  },
  internalLinks: [
    {
      href: '/learn/lessons/russian-cases-complete-guide',
      label:
        'Kompletny przewodnik po przypadkach rosyjskich: wszystkie 6 przypadków z przykładami',
    },
    {
      href: '/learn/articles/russian-case-endings-cheatsheet',
      label: 'Końcówki przypadków rosyjskich: ściąga',
    },
    {
      href: '/learn/articles/russian-genitive-case',
      label:
        'Rosyjski dopełniacz: zasady, końcówki i 32 autentyczne przykłady',
    },
    {
      href: '/learn/lessons/dative-case-declension',
      label:
        'Rosyjski celownik: jak powiedzieć „do” i „dla” po rosyjsku',
    },
  ],
  sections: [
    {
      h2: 'Krótka odpowiedź',
      content:
        'Rosyjski biernik odpowiada na pytania **Кого? (kogo?)** i **Что? (co?)**. Oznacza dopełnienia bezpośrednie, wyraża **kierunek** z в i на oraz występuje w wyrażeniach czasowych.\n\nNajwiększą trudność sprawia **rozróżnienie ożywione / nieożywione** u rzeczowników męskich.',
    },
    {
      h2: 'Czym jest rosyjski biernik?',
      content:
        'Biernik (**Винительный падеж**) to czwarty z sześciu rosyjskich przypadków. Jego główna rola to oznaczenie **dopełnienia bezpośredniego** czasownika przechodniego — rzeczownika, na który działanie pada wprost.\n\nPo angielsku słowo nie zmienia się w zależności od roli. Po rosyjsku rzeczownik zmienia końcówkę, by pokazać, że jest dopełnieniem bezpośrednim.',
      subsections: [
        {
          h3: 'Biernika używa się do:',
          content: '',
          bullets: [
            '**Dopełnień bezpośrednich** czasowników przechodnich (Я вижу кота. — Widzę kota.)',
            '**Kierunku** z в i на (Я иду в школу. — Idę do szkoły.)',
            '**Wyrażeń czasowych** (всю неделю — cały tydzień; через час — za godzinę)',
            '**Dni tygodnia** z в (в понедельник — w poniedziałek)',
            'Po kilku konkretnych przyimkach: **за**, **через**, **про**, **под**, **сквозь**, **спустя**, **о**',
          ],
        },
      ],
    },
    {
      h2: 'Końcówki rosyjskiego biernika — pełna tabela',
      content:
        'Końcówki biernika zależą od **rodzaju** rzeczownika, od **podstawy** (twarda lub miękka) oraz — u męskiego — od tego, czy rzeczownik jest **ożywiony** czy **nieożywiony**.\n\nOto pełna tabela referencyjna:',
      table: {
        caption: 'Końcówki biernika według typu rzeczownika — liczba pojedyncza i mnoga',
        boldColumnIndices: [3],
        headers: [
          'Typ rzeczownika',
          'Zasada',
          'Mianownik',
          'Biernik',
          'Przykładowe zdanie',
        ],
        rows: [
          [
            'Męski nieożywiony (twardy)',
            '= mian. (bez zmiany)',
            'стол',
            'стол',
            'Я вижу стол. — Widzę stół.',
          ],
          [
            'Męski nieożywiony (miękki)',
            '= mian. (bez zmiany)',
            'музей',
            'музей',
            'Я вижу музей. — Widzę muzeum.',
          ],
          [
            'Męski ożywiony (twardy)',
            '= dopełn. (-а)',
            'студент',
            'студента',
            'Я вижу студента. — Widzę studenta.',
          ],
          [
            'Męski ożywiony (miękki)',
            '= dopełn. (-я)',
            'гений',
            'гения',
            'Я вижу гения. — Widzę geniusza.',
          ],
          [
            'Żeński twardy (-а)',
            '-у',
            'женщина',
            'женщину',
            'Я вижу женщину. — Widzę kobietę.',
          ],
          [
            'Żeński miękki (-я)',
            '-ю',
            'земля',
            'землю',
            'Я вижу землю. — Widzę ziemię.',
          ],
          [
            'Żeński (-ь) nieożywiony',
            '= mian. (-ь)',
            'ночь',
            'ночь',
            'Я люблю ночь. — Kocham noc.',
          ],
          [
            'Żeński (-ь) ożywiony',
            '= mian. (-ь)',
            'мышь',
            'мышь',
            'Я вижу мышь. — Widzę mysz.',
          ],
          [
            'Nijaki (twardy -о)',
            '= mian. (-о)',
            'окно',
            'окно',
            'Я вижу окно. — Widzę okno.',
          ],
          [
            'Nijaki (miękki -е)',
            '= mian. (-е)',
            'море',
            'море',
            'Я вижу море. — Widzę morze.',
          ],
          [
            'Liczba mnoga nieożywiona',
            '= mian. lm.',
            'столы',
            'столы',
            'Я вижу столы. — Widzę stoły.',
          ],
          [
            'Liczba mnoga ożywiona',
            '= dopełn. lm.',
            'студенты',
            'студентов',
            'Я вижу студентов. — Widzę studentów.',
          ],
        ],
      },
      bullets: [
        '**Żeński -а** — -а → -у : книга → книгу',
        '**Żeński -я** — -я → -ю : неделя → неделю',
        '**Męski nieożywiony** — bez zmiany (mianownik): стол → стол',
        '**Męski ożywiony** — forma dopełniacza: студент → студента',
        '**Nijaki** i **żeński -ь** — bez zmiany (= mianownik)',
      ],
    },
    {
      h2: 'Ożywione a nieożywione: najważniejsza zasada biernika',
      content:
        '**Męskie rzeczowniki ożywione** (ludzie i zwierzęta) przyjmują w bierniku **formę dopełniacza**. **Męskie nieożywione** pozostają bez zmiany (forma mianownika).\n\nTo charakterystyczna cecha rosyjskiego biernika — i pierwsze źródło błędów.',
      subsections: [
        {
          h3: 'Co liczy się jako „ożywione”?',
          content:
            'W gramatyce rosyjskiej **ożywione** oznacza ludzi i zwierzęta — istoty żywe.\n\nSą jednak **zaskakujące wyjątki**:',
        },
      ],
      table: {
        caption:
          '12 konkretnych przykładów, w tym nietypowe przypadki ożywione/nieożywione',
        boldColumnIndices: [2],
        headers: ['Rzeczownik', 'Ożywione / nieożywione', 'Forma w bierniku', 'Uwaga'],
        rows: [
          [
            '🤝 друг (przyjaciel)',
            'ożywione',
            'Я вижу друга.',
            'Biernik = forma dopełniacza (друга)',
          ],
          [
            '👨‍⚕️ врач (lekarz)',
            'ożywione',
            'Я слушаю врача.',
            'Biernik = forma dopełniacza (врача)',
          ],
          [
            '🐱 кот (kot)',
            'ożywione',
            'Я глажу кота.',
            'Zwierzęta są ożywione (кота)',
          ],
          [
            '👶 ребёнок (dziecko)',
            'ożywione',
            'Мама видит ребёнка.',
            'Biernik = dopełniacz (ребёнка)',
          ],
          [
            '🏛️ президент (prezydent)',
            'ożywione',
            'Я уважаю президента.',
            'Ludzie zawsze są ożywieni',
          ],
          [
            '🪑 стол (stół)',
            'nieożywione',
            'Я вижу стол.',
            'Biernik = mianownik (bez zmiany)',
          ],
          [
            '🎬 фильм (film)',
            'nieożywione',
            'Я смотрю фильм.',
            'Biernik = mianownik (bez zmiany)',
          ],
          [
            '🏙️ город (miasto)',
            'nieożywione',
            'Я люблю этот город.',
            'Miejsca są nieożywione',
          ],
          [
            '💀 труп (zwłoki)',
            'nieożywione',
            'Детектив нашёл труп.',
            'Zwłoki gramatycznie są nieożywione!',
          ],
          [
            '🪆 кукла (lalka)',
            'nieożywione',
            'Девочка любит куклу.',
            'Zabawki są nieożywione (куклу — żeński)',
          ],
          [
            '🃏 туз (as w kartach)',
            'ożywione*',
            'Он поставил туза.',
            'Karty do gry = konwencyjnie ożywione!',
          ],
          [
            '♕ ферзь (hetman w szachach)',
            'ożywione*',
            'Он взял ферзя.',
            'Bierki szachowe = konwencyjnie ożywione!',
          ],
        ],
      },
      bullets: [
        '**Ożywione (niespodziewane):** karty (туз, король, дама), bierki szachowe (ферзь, конь)',
        '**Nieożywione (niespodziewane):** труп (zwłoki), кукла (lalka), снеговик (bałwan)',
        '**Liczba mnoga nieożywiona** — mianownik l.m.: Я вижу столы',
        '**Liczba mnoga ożywiona** — dopełniacz l.m.: Я вижу студентов',
      ],
    },
    {
      h2: 'Czasowniki ruchu w rosyjskim a biernik',
      content:
        'Czasowniki ruchu używają **в lub на + biernik**, by wskazać kierunek. Rosyjski ma bogaty system czasowników ruchu.\n\nWszystkie przy kierunku mają в/на + biernik:',
      table: {
        caption:
          '10 głównych czasowników ruchu + jednokierunkowy vs wielokierunkowy',
        boldColumnIndices: [2],
        headers: [
          'Czasownik',
          'Znaczenie',
          'Przykład z В/НА + bier.',
          'Tłumaczenie',
        ],
        rows: [
          [
            'идти / ходить',
            '🚶 iść (pieszo)',
            'Я иду в школу.',
            'Idę do szkoły (w tej chwili)',
          ],
          [
            'ехать / ездить',
            '🚗 jechać (pojazdem)',
            'Мы едем на работу.',
            'Jedziemy do pracy',
          ],
          [
            'бежать / бегать',
            '🏃 biegać',
            'Он бежит на стадион.',
            'Biegnie na stadion',
          ],
          [
            'лететь / летать',
            '✈️ lecieć',
            'Самолёт летит в Москву.',
            'Samolot leci do Moskwy',
          ],
          [
            'плыть / плавать',
            '🏊 płynąć / pływać',
            'Корабль плывёт в порт.',
            'Statek wpływa do portu',
          ],
          [
            'везти / возить',
            '🚐 wieźć (pojazdem)',
            'Он везёт детей в школу.',
            'Wozi dzieci do szkoły',
          ],
          [
            'нести / носить',
            '📦 nieść (pieszo)',
            'Она несёт цветы на стол.',
            'Niesie kwiaty na stół',
          ],
          [
            'ползти / ползать',
            '🐛 czołgać się',
            'Ребёнок ползёт на диван.',
            'Dziecko czołga się ku kanapie',
          ],
          [
            'прийти (dok.)',
            '🎯 przyjść / przybyć',
            'Приходи на вечеринку!',
            'Chodź na imprezę!',
          ],
          [
            'вернуться (dok.)',
            '↩️ wrócić',
            'Он вернулся в город.',
            'Wrócił do miasta',
          ],
        ],
      },
      bullets: [
        '**Jednokierunkowy** (jeden przejazd, teraz): идти, ехать, лететь — Я иду в школу.',
        '**Wielokierunkowy** (zwyczaj, tam i z powrotem): ходить, ездить, летать — Я хожу в школу каждый день.',
        'Oba typy używają **в + biernik** przy kierunku — zasada przypadku jest ta sama.',
      ],
    },
    {
      h2: 'В i НА z biernikiem: kierunek a miejsce',
      content:
        'Przyimki **в** i **на** występują z **dwoma różnymi przypadkami** w zależności od tego, czy zdanie wyraża **kierunek** (ruch dokąd) czy **miejsce** (bycie gdzieś).\n\nWarto dobrze zapamiętać te pary:',
      image: {
        src: '/articles/russian-accusative-case-direction-vs-location.webp',
        alt: 'Schemat rosyjskiego biernika: kierunek a miejsce z в i на',
        width: 1200,
        height: 630,
      },
      table: {
        caption:
          '10 par obok siebie: biernik (kierunek) vs miejscownik (miejsce)',
        boldColumnIndices: [0, 1],
        headers: [
          'Konstrukcja',
          'Przykład rosyjski',
          'Znaczenie',
          'Tłumaczenie',
        ],
        rows: [
          [
            'в + biernik',
            'Я иду в магазин.',
            'Kierunek: do / w',
            'Idę do sklepu.',
          ],
          [
            'в + miejscownik',
            'Я нахожусь в магазине.',
            'Miejsce: w / u',
            'Jestem w sklepie.',
          ],
          [
            'на + biernik',
            'Она едет на работу.',
            'Kierunek: na / do',
            'Jedzie do pracy.',
          ],
          [
            'на + miejscownik',
            'Она работает на заводе.',
            'Miejsce: na / w',
            'Pracuje w fabryce.',
          ],
          [
            'в + biernik',
            'Дети пошли в школу.',
            'Kierunek: do szkoły',
            'Dzieci poszły do szkoły.',
          ],
          [
            'в + miejscownik',
            'Дети учатся в школе.',
            'Miejsce: w szkole',
            'Dzieci uczą się w szkole.',
          ],
          [
            'на + biernik',
            'Мы летим на Кубу.',
            'Kierunek: na Kubę',
            'Lecimy na Kubę.',
          ],
          [
            'на + miejscownik',
            'Мы отдыхаем на Кубе.',
            'Miejsce: na Kubie',
            'Wypoczywamy na Kubie.',
          ],
          [
            'на + biernik',
            'Поставь книгу на стол.',
            'Kierunek: na stół',
            'Połóż książkę na stół.',
          ],
          [
            'на + miejscownik',
            'Книга лежит на столе.',
            'Miejsce: na stole',
            'Książka leży na stole.',
          ],
        ],
      },
      subsections: [
        {
          h3: 'В vs НА — którego użyć przy miejscu?',
          content:
            '**Używaj В (w)** dla: pomieszczeń zamkniętych, krajów, miast, budynków — в доме, в России, в школе. **Używaj НА (na)** dla: przestrzeni otwartych, wydarzeń, wysp, niektórych instytucji — на улице, на концерте, на Кубе, на работе, на почте, на рынке.\n\nNiektóre nazwy wymagają на z konwencji — warto je zapamiętać.',
        },
      ],
    },
    {
      h2: 'Wszystkie przyimki wymagające biernika',
      content:
        'Poza в i на inne przyimki również wymagają biernika.\n\nOto **pełna lista** z przykładem z rzeczownikiem i pełnym zdaniem:',
      table: {
        caption: '9 przyimków z biernikiem: znaczenie i pełny przykład',
        boldColumnIndices: [0],
        headers: [
          'Przyim.',
          'Znaczenie',
          'Z rzeczownikiem',
          'Pełne zdanie + tłumaczenie',
        ],
        rows: [
          [
            'в',
            'w / do (kierunek)',
            'в Москву, в школу',
            'Я лечу в Москву. — Lecę do Moskwy.',
          ],
          [
            'на',
            'na / do (kierunek)',
            'на работу, на стол',
            'Она идёт на работу. — Idzie do pracy.',
          ],
          [
            'за',
            'za / po (ruch)',
            'за угол, за хлебом',
            'Он зашёл за угол. — Skręcił za róg.',
          ],
          [
            'под',
            'pod (ruch)',
            'под стол',
            'Кот залез под стол. — Kot wczołgał się pod stół.',
          ],
          [
            'через',
            'przez / na drugą stronę / za (czas)',
            'через реку, через час',
            'Мы переехали через реку. — Przeprawiliśmy się przez rzekę.',
          ],
          [
            'про',
            'o (potocznie)',
            'про тебя',
            'Он рассказал про тебя. — Opowiadał o tobie.',
          ],
          [
            'сквозь',
            'na wskroś (przenikanie)',
            'сквозь стекло',
            'Свет проходил сквозь стекло. — Światło przenikało przez szybę.',
          ],
          [
            'спустя',
            'po / później (czas)',
            'спустя год',
            'Спустя год он вернулся. — Po roku wrócił.',
          ],
          [
            'о/об',
            'o / o coś (kontakt fizyczny)',
            'споткнуться о камень',
            'Он споткнулся о камень. — Potknął się o kamień.',
          ],
        ],
      },
      bullets: [
        '**Przyimki z podwójnym rządem:** В, НА, ЗА, ПОД — biernik = ruch / kierunek; narzędnik lub miejscownik = położenie statyczne.',
        'за стол (bier. → usiąść DO stołu) vs. за столом (narz. → siedzieć PRZY stole)',
      ],
    },
    {
      h2: 'Wyrażenia czasowe z biernikiem',
      content:
        'Biernik pojawia się w kilku ważnych **wyrażeniach czasowych** po rosyjsku.\n\nTo stałe wzorce warto zapamiętać:',
      table: {
        caption: 'через, за, весь/всю, в + dzień, спустя',
        boldColumnIndices: [0],
        headers: [
          'Typ wyrażenia',
          'Przykłady',
          'Pełne zdanie + tłumaczenie',
        ],
        rows: [
          [
            'Czas trwania (весь / целый)',
            'всю неделю, целый день',
            'Я работал всю неделю. — Pracowałem cały tydzień.',
          ],
          [
            'Dni tygodnia (в + bier.)',
            'в понедельник, в пятницу',
            'Я иду туда в среду. — Idę tam w środę.',
          ],
          [
            'через (za / po)',
            'через час, через неделю',
            'Приходи через час. — Przyjdź za godzinę.',
          ],
          [
            'за (w ciągu)',
            'за час, за неделю',
            'Я сделал это за час. — Zrobiłem to w ciągu godziny.',
          ],
          [
            'спустя (po / później)',
            'спустя год',
            'Спустя год он вернулся. — Po roku wrócił.',
          ],
        ],
      },
      bullets: [
        '**Dni tygodnia:** В понедельник, в среду, в пятницу — wszystkie z **в** przyjmują biernik.',
      ],
    },
    {
      h2: '15 kluczowych czasowników z dopełnieniem bezpośrednim w bierniku',
      content:
        'Każdy czasownik przechodni po rosyjsku może mieć dopełnienie w bierniku.\n\nOto **15 najczęstszych**, z ważnym wyjątkiem **ждать** (biernik lub dopełniacz):',
      table: {
        caption: '15 czasowników przechodnich z przykładami',
        boldColumnIndices: [0],
        headers: ['Czasownik', 'Przykład', 'Tłumaczenie', 'Uwaga'],
        rows: [
          [
            'видеть (widzieć)',
            'Я вижу тебя.',
            'Widzę cię.',
            'Bezpośrednia percepcja wzrokowa',
          ],
          [
            'любить (kochać)',
            'Я люблю музыку.',
            'Kocham muzykę.',
            'Przedmiot uczucia',
          ],
          [
            'знать (wiedzieć / znać)',
            'Я знаю этот город.',
            'Znam to miasto.',
            'Znana rzecz lub osoba',
          ],
          [
            'читать (czytać)',
            'Она читает книгу.',
            'Czyta książkę.',
            'To, co się czyta',
          ],
          [
            'слушать (słuchać)',
            'Мы слушаем музыку.',
            'Słuchamy muzyki.',
            'Przedmiot słuchania',
          ],
          [
            'смотреть (oglądać)',
            'Он смотрит фильм.',
            'Ogląda film.',
            'Przedmiot wzroku',
          ],
          [
            'купить (kupić)',
            'Я купил машину.',
            'Kupiłem samochód.',
            'To, co się kupuje',
          ],
          [
            'взять (wziąć)',
            'Возьми зонтик.',
            'Weź parasol.',
            'To, co się bierze',
          ],
          [
            'понимать (rozumieć)',
            'Я понимаю тебя.',
            'Rozumiem cię.',
            'Osoba lub rzecz rozumiana',
          ],
          [
            'помнить (pamiętać)',
            'Я помню этот день.',
            'Pamiętam ten dzień.',
            'To, o czym się pamięta',
          ],
          [
            'встречать (spotykać)',
            'Я встречаю друга.',
            'Spotykam przyjaciela.',
            'Spotykana osoba (ożywiona)',
          ],
          [
            'ждать (czekać)',
            'Я жду автобус / автобуса.',
            'Czekam na autobus.',
            'Możliwy biernik i dopełniacz!',
          ],
          [
            'спрашивать (pytać)',
            'Он спрашивает меня.',
            'Pyta mnie.',
            'Pytana osoba',
          ],
          [
            'благодарить (dziękować)',
            'Я благодарю вас.',
            'Dziękuję panu/pani.',
            'Osoba, której się dziękuje',
          ],
          [
            'изучать (studiować)',
            'Она изучает русский язык.',
            'Studiuje język rosyjski.',
            'Przedmiot nauki',
          ],
        ],
      },
      bullets: [
        '**Wyjątek ЖДАТЬ:** Я жду автобус (bier.) = czekam na ten konkretny autobus. Я жду автобуса (dopełn.) = czekam na autobus (jakiś). Oba są poprawne. Dla ożywionego: Я жду друга (bier. preferowany).',
      ],
    },
    {
      h2: '30 autentycznych przykładów biernika po rosyjsku',
      content:
        'Poniżej **30 autentycznych zdań** obejmujących główne zastosowania biernika. **1–6:** przedmioty nieożywione | **7–12:** ożywione | **13–18:** kierunek | **19–23:** czas | **24–30:** inne przyimki.',
      table: {
        caption: '30 przykładowych zdań z transliteracją',
        boldColumnIndices: [1],
        headers: ['#', 'Rosyjski', 'Transliteracja', 'Tłumaczenie i uwagi'],
        rows: [
          [
            '1',
            'Он читает интересную книгу.',
            'On chitayet interesnuyu knigu.',
            'Czyta ciekawą książkę. (книга → книгу)',
          ],
          [
            '2',
            'Я купила новое платье.',
            'Ya kupila novoye plate.',
            'Kupiłam nową sukienkę. (платье nijaki → bez zmiany)',
          ],
          [
            '3',
            'Мы смотрим старый фильм.',
            'My smotrim staryy film.',
            'Oglądamy stary film. (męski nieożywiony)',
          ],
          [
            '4',
            'Она пьёт горячий кофе.',
            'Ona pyot goryachiy kofe.',
            'Pije gorącą kawę. (кофе bez zmiany)',
          ],
          [
            '5',
            'Я слышу странный звук.',
            'Ya slyshu strannyy zvuk.',
            'Słyszę dziwny dźwięk. (męski nieożywiony)',
          ],
          [
            '6',
            'Дети любят мороженое.',
            'Deti lyubyat morozhenoye.',
            'Dzieci kochają lody. (nijaki)',
          ],
          [
            '7',
            'Я вижу своего брата.',
            'Ya vizhu svoyego brata.',
            'Widzę swojego brata. (брат ożywiony → брата)',
          ],
          [
            '8',
            'Она любит своего кота.',
            'Ona lyubit svoyego kota.',
            'Kocha swojego kota. (кот ożywiony)',
          ],
          [
            '9',
            'Врач осматривает пациента.',
            'Vrach osmotrivayet patsienta.',
            'Lekarz bada pacjenta.',
          ],
          [
            '10',
            'Мы приглашаем всех друзей.',
            'My priglashaem vsekh druzey.',
            'Zapraszamy wszystkich przyjaciół. (l.m. ożywiona)',
          ],
          [
            '11',
            'Я встретил старого учителя.',
            'Ya vstretil starogo uchitelya.',
            'Spotkałem starego nauczyciela.',
          ],
          [
            '12',
            'Полиция ищет преступника.',
            'Politsiya ishchet prestupnika.',
            'Policja szuka przestępcy.',
          ],
          [
            '13',
            'Я иду в супермаркет.',
            'Ya idu v supermarket.',
            'Idę do supermarketu. (в + bier.)',
          ],
          [
            '14',
            'Дети едут на море.',
            'Deti edut na more.',
            'Dzieci jadą nad morze. (на + bier.)',
          ],
          [
            '15',
            'Он положил ключи на стол.',
            'On polozhil klyuchi na stol.',
            'Położył klucze na stół.',
          ],
          [
            '16',
            'Мы летим в Санкт-Петербург.',
            'My letim v Sankt-Peterburg.',
            'Lecimy do Sankt Petersburga.',
          ],
          [
            '17',
            'Она поехала на конференцию.',
            'Ona poyekhala na konferentsiyu.',
            'Pojechała na konferencję.',
          ],
          [
            '18',
            'Кот прыгнул под кровать.',
            'Kot prygnul pod krovat.',
            'Kot skoczył pod łóżko. (под + bier.)',
          ],
          [
            '19',
            'Я работал всю ночь.',
            'Ya rabotal vsyu noch.',
            'Pracowałem całą noc. (всю = bier.)',
          ],
          [
            '20',
            'Встреча в четверг в три часа.',
            'Vstrecha v chetverg v tri chasa.',
            'Spotkanie w czwartek o trzeciej.',
          ],
          [
            '21',
            'Он вернётся через месяц.',
            'On vernyotsya cherez mesyats.',
            'Wróci za miesiąc. (через + bier.)',
          ],
          [
            '22',
            'Я сделал домашнее задание за час.',
            'Ya sdelal domashneye zadaniye za chas.',
            'Zrobiłem pracę domową w ciągu godziny.',
          ],
          [
            '23',
            'Они не виделись целый год.',
            'Oni ne videlis tselyy god.',
            'Nie widzieli się przez cały rok.',
          ],
          [
            '24',
            'Он рассказал про свою жизнь.',
            'On rasskazal pro svoyu zhizn.',
            'Opowiedział o swoim życiu. (про + bier.)',
          ],
          [
            '25',
            'Мы переплыли через реку.',
            'My pereplyli cherez reku.',
            'Przepłynęliśmy rzekę.',
          ],
          [
            '26',
            'Он споткнулся о порог.',
            'On spotknulsya o porog.',
            'Potknął się o próg. (о + bier.)',
          ],
          [
            '27',
            'Спустя два часа он позвонил.',
            'Spustya dva chasa on pozvonil.',
            'Po dwóch godzinach zadzwonił.',
          ],
          [
            '28',
            'Перенеси встречу на пятницу.',
            'Perenesi vstrechu na pyatnitsu.',
            'Przełóż spotkanie na piątek.',
          ],
          [
            '29',
            'Я учу русский язык каждый день.',
            'Ya uchu russkiy yazyk kazhdyy den.',
            'Uczę się rosyjskiego codziennie.',
          ],
          [
            '30',
            'Она смотрит на меня.',
            'Ona smotrit na menya.',
            'Patrzy na mnie. (смотреть на + bier.)',
          ],
        ],
      },
    },
    {
      h2: 'Biernik a dopełniacz: jak je odróżnić',
      content:
        'Ponieważ forma biernika męskiego ożywionego pokrywa się z dopełniaczem, często myli się te przypadki.\n\nOto bezpośrednie porównanie:',
      table: {
        caption: 'Porównanie biernika i dopełniacza',
        boldColumnIndices: [0, 1],
        headers: ['Kontekst', 'Przykład rosyjski', 'Wyjaśnienie przypadku'],
        rows: [
          [
            'Dopełnienie bezpośrednie (przechodni)',
            'Я вижу студента.',
            'BIERNIK ożywiony (= forma dopełniacza, ale tu biernik)',
          ],
          [
            'Brak (нет)',
            'Нет студента.',
            'DOPEŁNIACZ — нет zawsze wymaga dopełniacza',
          ],
          [
            'Dopełnienie nieożywione',
            'Я вижу стол.',
            'BIERNIK nieożywiony (= mianownik)',
          ],
          [
            'Brak nieożywionego',
            'Нет стола.',
            'DOPEŁNIACZ (стол → стола)',
          ],
          [
            'Kierunek do miejsca',
            'Я иду в парк.',
            'BIERNIK (в + kierunek)',
          ],
          [
            'Czas trwania',
            'Я работал всю неделю.',
            'BIERNIK — всю неделю',
          ],
          [
            'Ilość / część czegoś',
            'Я выпил стакан воды.',
            'DOPEŁNIACZ — воды (szklanka wody)',
          ],
        ],
      },
      bullets: [
        '**Kluczowe pytanie:** czy czasownik jest przechodni (działa na coś) → biernik. Brak, posiadanie, ilość, przyimek z dopełniaczem → dopełniacz.',
      ],
    },
    {
      h2: '6 najczęstszych błędów w bierniku (i jak je poprawić)',
      bullets: [
        '**Zapomnienie żeńskiego -а → -у** — Я вижу женщина ✗ → Я вижу женщину ✓',
        '**Traktowanie męskiego ożywionego jak nieożywionego** — Я вижу студент ✗ → Я вижу студента ✓',
        '**Biernik zamiast miejscownika przy miejscu** — Я в школу сейчас ✗ → Я в школе сейчас ✓ (miejsce = miejscownik)',
        '**Mianownik l.m. przy ożywionej liczbie mnogiej** — Я вижу студенты ✗ → Я вижу студентов ✓',
        '**Zapomnienie zgodności przymiotnika** — Я вижу красивый женщину ✗ → Я вижу красивую женщину ✓',
        '**Mylenie через i за** — через = za X czasu (przyszłość); за = w ciągu X czasu (by coś zrobić)',
      ],
    },
  ],
  conclusion:
    'Rosyjski biernik jest niezbędny w codziennej komunikacji. Gdy mówisz o robieniu czegoś z czymś — czytaniu książki, widzeniu osoby, chodzeniu gdzieś — używasz biernika.\n\n**Żeński -А/-Я** zawsze się zmienia (-а → -у, -я → -ю). **Męski nieożywiony** = bez zmiany. **Męski ożywiony** = forma dopełniacza. **В/НА + biernik** = kierunek | **В/НА + miejscownik** = miejsce. **Liczba mnoga ożywiona** → dopełniacz l.m. (студентов).',
  conclusionOutro: 'Kontynuuj naukę gramatyki rosyjskiej:',
  ctaText: 'Ćwicz rosyjskie przypadki w naszej aplikacji',
  ctaHref: '/',
  faq: [
    {
      question: 'Do czego służy biernik po rosyjsku?',
      answer:
        'Rosyjski biernik oznacza **dopełnienie bezpośrednie** czasowników przechodnich (Я читаю книгу), **kierunek** z в i на (Я иду в школу), **wyrażenia czasowe** (через час, всю ночь) oraz występuje po przyimkach takich jak за, через, про, под, сквозь.',
    },
    {
      question:
        'Jak działa rozróżnienie ożywione / nieożywione po rosyjsku?',
      answer:
        '**Męskie rzeczowniki ożywione** (ludzie, zwierzęta) przyjmują w bierniku **formę dopełniacza** (студент → студента). **Męskie nieożywione** pozostają w mianowniku (стол → стол). Zaskakujące: труп = nieożywione; karty do gry i bierki szachowe = ożywione.',
    },
    {
      question:
        'Jaka jest różnica między в + biernik a в + miejscownik?',
      answer:
        '**в + biernik** = kierunek (Я иду в школу — Idę do szkoły). **в + miejscownik** = miejsce (Я в школе — Jestem w szkole). To samo dla на: на работу (jechać do pracy) vs. на работе (w pracy).',
    },
    {
      question: 'Czym są czasowniki ruchu po rosyjsku?',
      answer:
        'Czasowniki ruchu: идти/ходить (iść pieszo), ехать/ездить (jechać pojazdem), лететь/летать (lecieć), бежать/бегать (biegać), плыть/плавать (płynąć). Każda para ma formy jedno- i wielokierunkowe. Wszystkie przy kierunku używają **в/на + biernik**.',
    },
    {
      question: 'Czy biernik zmienia też przymiotniki?',
      answer:
        'Tak. Przymiotniki muszą **zgodnie odmieniać się** z rzeczownikiem. Biernik żeński: **-ую/-юю** (красивую женщину). Męski nieożywiony: jak mianownik. Męski ożywiony: forma dopełniacza (красивого студента).',
    },
    {
      question:
        'Które czasowniki rosyjskie łączą się z dopełniaczem zamiast z biernikiem?',
      answer:
        'Większość czasowników przechodnich przyjmuje biernik. Wyjątki z **dopełniaczem**: бояться, ждать (nieożywione), желать, избегать, достигать, лишать. Хотеть może oba: хочу воды (dopełn., partytywny) vs. хочу воду (bier.).',
    },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      'Biernik rosyjski: dopełnienia bezpośrednie, ożywione a nieożywione oraz czasowniki ruchu',
    description:
      'Kompletny przewodnik po bierniku rosyjskim: końcówki, ożywione vs nieożywione, czasowniki ruchu, в/на, 9 przyimków, 30 przykładów.',
    datePublished: '2026-03-12',
    dateModified: '2026-03-12',
    author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id':
        'https://russiandeclensions.com/learn/articles/russian-accusative-case',
    },
    keywords:
      'biernik rosyjski, końcówki biernika rosyjski, ożywione nieożywione biernik rosyjski, dopełnienie bezpośrednie rosyjski, czasowniki ruchu biernik rosyjski',
  },
  tableAccentVariant: 'accusative',
};
