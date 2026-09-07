import type { LearnArticle } from '../learnArticles';

/** Tłumaczenie PL — `russian-nominative-case`. Cyrylica jak w wersji EN. */
export const russianNominativeCasePl: LearnArticle = {
  slug: 'russian-nominative-case',
  title: 'Rosyjski mianownik: zasady, końcówki i 24 prawdziwe przykłady',
  metaTitle: 'Rosyjski mianownik: zasady, końcówki i przykłady | Russian Cases with Anna',
  metaDescription:
    'Najpełniejszy przewodnik po mianowniku w języku rosyjskim: 6 głównych zastosowań, końcówki liczby pojedynczej i mnogiej, nieregularne liczby mnogie, mianownik a biernik. 24 prawdziwe przykłady z transliteracją.',
  keywords: [
    'rosyjski mianownik',
    'mianownik w języku rosyjskim',
    'końcówki mianownika rosyjski',
    'czym jest mianownik po rosyjsku',
    'przykłady mianownika rosyjski',
    'mianownik liczby mnogiej rosyjski',
  ],
  h1: 'Rosyjski mianownik: zasady, końcówki i 24 prawdziwe przykłady',
  heroImage: {
    src: '/articles/russian-nominative-case-dictionary-form.webp',
    alt: 'Otwarty rosyjski słownik i zeszyt — nauka mianownika, podstawowej formy słownikowej rosyjskich słów',
    width: 1536,
    height: 1024,
  },
  intro:
    'Mianownik to pierwszy przypadek, z którym styka się każdy uczący się rosyjskiego — i ten, o którym większość uczniów myśli, że już go zna. To **forma słownikowa**: wersja słowa, którą znajdujesz w słowniku, zapamiętujesz jako fiszkę i słyszysz wymawianą w izolacji. Ale traktowanie mianownika jako „przypadku, nad którym nie trzeba się zastanawiać” to błąd. Ma swoje własne **zasady tworzenia liczby mnogiej**, własne **formy nieregularne** i własną **pułapkę** — moment, w którym zaczyna wyglądać identycznie jak biernik.\n\nTen przewodnik obejmuje wszystko o rosyjskim mianowniku: czym jest, kiedy używać go poza oczywistym „podmiotem zdania”, jak tworzyć liczbę mnogą (w tym formy z przesuniętym akcentem i całkowicie nieregularne liczby mnogie, na których potykają się uczniowie na poziomie średnio zaawansowanym) oraz jak odróżnić go od biernika. W tekście znajdziesz **24 prawdziwe rosyjskie przykłady** z transliteracją.',
  whatYouLearn: [
    'Czym jest rosyjski mianownik i w jakich 6 sytuacjach jest używany',
    'Końcówki mianownika liczby pojedynczej dla każdego rodzaju rzeczownika',
    'Końcówki mianownika liczby mnogiej — w tym formy z przesuniętym akcentem (дом → дома, город → города)',
    '12 nieregularnych liczb mnogich mianownika do zapamiętania (друг → друзья, ребёнок → дети itd.)',
    'Jak przymiotniki i zaimki zgadzają się z rzeczownikami w mianowniku',
    'Mianownik a biernik — jak je odróżnić, gdy formy wyglądają identycznie',
    '24 prawdziwe rosyjskie zdania przykładowe z transliteracją',
  ],
  leadMagnetCta: {
    title: 'Ćwicz rosyjski mianownik (i wszystkie 6 przypadków) inteligentnymi zadaniami',
    description:
      'Nasza aplikacja mobilna trenuje wszystkie 6 rosyjskich przypadków — w tym najbardziej podchwytliwe formy liczby mnogiej — z powtórkami rozłożonymi w czasie, prawdziwymi zdaniami i natychmiastową informacją zwrotną. Dostępna na Androida i iOS.',
    ctaText: 'Pobierz aplikację i zacznij ćwiczyć już dziś',
    ctaHref: '/',
  },
  internalLinks: [
    {
      href: '/learn/lessons/russian-cases-complete-guide',
      label: 'Kompletny przewodnik po rosyjskich przypadkach: wszystkie 6 przypadków z przykładami',
    },
    {
      href: '/learn/articles/russian-accusative-case',
      label: 'Rosyjski biernik: zasady, końcówki i przykłady',
    },
    {
      href: '/learn/articles/russian-case-endings-cheatsheet',
      label: 'Rosyjskie końcówki przypadków: kompletna ściąga',
    },
  ],
  tableAccentVariant: 'nominative',
  sections: [
    {
      h2: 'Czym jest rosyjski mianownik?',
      content:
        '**Mianownik** (Именительный падеж) to pierwszy i najbardziej podstawowy z sześciu rosyjskich przypadków. To **forma słownikowa** — wersja każdego rzeczownika, przymiotnika i zaimka, jaką znajdziesz w haśle słownikowym, bez żadnych zmian końcówek. Mianownik odpowiada na pytania **Кто?** (kto?) i **Что?** (co?).\n\nKażdy inny rosyjski przypadek jest przekształceniem mianownika — dopełniacz, celownik, biernik, narzędnik i miejscownik opisują, jak zmienia się końcówka słowa, gdy pełni ono inną funkcję gramatyczną. Mianownik jest punktem wyjścia, od którego odmieniają się wszystkie pozostałe.',
      subsections: [
        {
          h3: 'Krótka odpowiedź',
          content:
            'Mianownik odpowiada na **Кто?** (kto?) i **Что?** (co?). Oznacza **podmiot** zdania — osobę lub rzecz wykonującą czynność — i jest też formą cytowania używaną w słownikach.\n\nKażde rosyjskie zdanie zawiera co najmniej jedno słowo w mianowniku.',
        },
      ],
    },
    {
      h2: '6 głównych zastosowań rosyjskiego mianownika',
      content:
        'Choć „podmiot zdania” to główne zadanie mianownika, pojawia się on też w pięciu innych częstych sytuacjach.',
      subsections: [
        {
          h3: 'Zastosowanie 1 — Podmiot zdania',
          content:
            'Najczęstsza rola: rzeczownik wykonujący czynność występuje w mianowniku.',
          bullets: [
            '**Кошка спит.** — Kot śpi. (кошка = podmiot)',
            '**Студент читает книгу.** — Student czyta książkę. (студент = podmiot, книгу = dopełnienie w bierniku)',
          ],
        },
        {
          h3: 'Zastosowanie 2 — Orzecznik po pominiętym „być”',
          content:
            'W czasie teraźniejszym rosyjski całkowicie pomija czasownik „być” (быть). Zarówno podmiot, jak i rzeczownik go opisujący pozostają w **mianowniku**, często oddzielone myślnikiem.',
          bullets: [
            '**Она — врач.** — Ona jest lekarką.',
            '**Москва — столица России.** — Moskwa jest stolicą Rosji.',
          ],
        },
        {
          h3: 'Zastosowanie 3 — Nazywanie i przedstawianie (Это + mianownik)',
          content:
            'Po słowie **это** („to jest”) zawsze następuje **mianownik**, niezależnie od rodzaju czy liczby tego, co po nim występuje.',
          bullets: [
            '**Это мой брат.** — To mój brat.',
            '**Это интересная книга.** — To ciekawa książka.',
          ],
        },
        {
          h3: 'Zastosowanie 4 — Forma słownikowa / cytowania',
          content:
            'Każde hasło słownikowe, lista słownictwa i aplikacja z fiszkami podaje rosyjskie rzeczowniki i przymiotniki w **mianowniku liczby pojedynczej**. To forma poznawana jako pierwsza i ta, z której buduje się wszystkie pozostałe przypadki.',
        },
        {
          h3: 'Zastosowanie 5 — Tytuły, szyldy i etykiety',
          content:
            'Tytuły książek, szyldy sklepów, nazwy ulic i nagłówki domyślnie używają mianownika, ponieważ nazywają coś, zamiast opisywać czynność.',
          bullets: [
            '**«Война и мир»** — „Wojna i pokój” (tytuł książki)',
            '**Аптека** — Apteka (szyld sklepu)',
          ],
        },
        {
          h3: 'Zastosowanie 6 — Wykrzyknienia i bezpośredni zwrot',
          content:
            'Krótkie wykrzyknienia i wołanie do kogoś po imieniu używają zwykłej formy mianownika — rosyjski stracił osobny przypadek wołacz wieki temu, z wyjątkiem kilku skamieniałych form, jak **Боже!** i **Господи!**',
          bullets: [
            '**Пожар!** — Pożar!',
            '**Мама!** — Mamo! (wołanie — zwykły mianownik, nie osobny wołacz)',
          ],
        },
      ],
    },
    {
      h2: 'Końcówki mianownika liczby pojedynczej według rodzaju',
      content:
        'Rosyjskie rzeczowniki dzielą się na trzy rodzaje, z których każdy ma przewidywalny wzorzec mianownika liczby pojedynczej oparty na ostatniej literze rzeczownika.',
      table: {
        caption: 'Końcówki mianownika liczby pojedynczej według typu rzeczownika',
        boldColumnIndices: [1],
        headers: ['Rodzaj', 'Typowa końcówka', 'Przykład', 'Znaczenie'],
        rows: [
          ['Męski (twardy)', '(spółgłoska, brak końcówki)', 'стол', 'stół'],
          ['Męski (miękki)', '-й / -ь', 'музей / словарь', 'muzeum / słownik'],
          ['Żeński (twardy)', '-а', 'книга', 'książka'],
          ['Żeński (miękki)', '-я', 'неделя', 'tydzień'],
          ['Żeński (miękki, bez samogłoski)', '-ь', 'ночь', 'noc'],
          ['Nijaki (twardy)', '-о', 'окно', 'okno'],
          ['Nijaki (miękki)', '-е', 'море', 'morze'],
        ],
      },
      subsections: [
        {
          h3: 'Jak rozpoznać rodzaj',
          content:
            'Rzeczowniki rodzaju męskiego kończą się na **spółgłoskę**, **-й** lub **znak miękki -ь** opisujący istotę płci męskiej lub słowo z twardym tematem (словарь, музей). Rzeczowniki rodzaju żeńskiego kończą się na **-а**, **-я** lub **znak miękki -ь** (duża grupa, obejmująca większość rzeczowników abstrakcyjnych: жизнь, любовь). Rzeczowniki rodzaju nijakiego kończą się na **-о** lub **-е**. Końcówka **-ь** jest niejednoznaczna między rodzajem męskim a żeńskim — trzeba ją zapamiętać dla każdego rzeczownika osobno.',
        },
      ],
    },
    {
      h2: 'Końcówki mianownika liczby mnogiej',
      content:
        'Tworzenie mianownika liczby mnogiej polega na zmianie końcówki liczby pojedynczej — ale dokładny wzorzec zależy od rodzaju i od kluczowej reguły pisowni.',
      table: {
        caption: 'Końcówki mianownika liczby mnogiej według typu rzeczownika',
        boldColumnIndices: [1, 3],
        headers: ['Typ rzeczownika', 'Końcówka', 'Tworzenie', 'Wynik'],
        rows: [
          ['Męski twardy', '-ы', 'стол → стол+ы', 'столы'],
          ['Męski (po г/к/х/ж/ш/щ/ч)', '-и', 'язык → язык+и', 'языки'],
          ['Męski miękki -й', '-и', 'музей → музе+и', 'музеи'],
          ['Męski miękki -ь', '-и', 'словарь → словар+и', 'словари'],
          ['Żeński -а (twardy)', '-ы', 'женщина → женщин+ы', 'женщины'],
          ['Żeński -а (po г/к/х/ж/ш/щ/ч)', '-и', 'книга → книг+и', 'книги'],
          ['Żeński -я', '-и', 'неделя → недел+и', 'недели'],
          ['Żeński -ь', '-и', 'ночь → ноч+и', 'ночи'],
          ['Nijaki -о', '-а', 'окно → окн+а', 'окна'],
          ['Nijaki -е', '-я', 'море → мор+я', 'моря'],
        ],
      },
      bullets: [
        '**Reguła 8 liter** zamienia **Ы** na **И** po **Г, К, Х, Ж, Ш, Щ, Ч, Ц** — dlatego книга → книги, a nie книгы.',
        '**Rzeczowniki nijakie** zamieniają **-о** na **-а** i **-е** na **-я** w liczbie mnogiej — wzorzec, który wygląda na nieregularny, ale jest w pełni regularny.',
        '**Rzeczowniki męskie ze znakiem miękkim** (**словарь, зверь**) i **rzeczowniki żeńskie ze znakiem miękkim** (**ночь, дверь**) tworzą identycznie wyglądające liczby mnogie na **-и** — tylko ich formy w innych przypadkach ujawniają rodzaj.',
      ],
    },
    {
      h2: 'Nieregularne liczby mnogie mianownika z przesuniętym akcentem — lista obowiązkowa',
      content:
        'Grupa bardzo częstych rosyjskich rzeczowników całkowicie łamie regularny wzorzec — albo przez przesunięcie akcentu i przyjęcie nieoczekiwanej końcówki **-а/-я**, albo przez użycie zupełnie innego tematu w liczbie mnogiej. Te formy trzeba po prostu zapamiętać.',
      table: {
        caption: '12 nieregularnych liczb mnogich mianownika z przesuniętym akcentem',
        boldColumnIndices: [1],
        headers: ['Liczba pojedyncza', 'Liczba mnoga', 'Uwaga'],
        rows: [
          ['дом (dom)', 'дома́', 'liczba mnoga -а z przesuniętym akcentem (nie домы)'],
          ['город (miasto)', 'города́', 'liczba mnoga -а z przesuniętym akcentem'],
          ['глаз (oko)', 'глаза́', 'liczba mnoga -а z przesuniętym akcentem'],
          ['лес (las)', 'леса́', 'liczba mnoga -а z przesuniętym akcentem'],
          ['учитель (nauczyciel)', 'учителя́', 'liczba mnoga -я z przesuniętym akcentem'],
          ['паспорт (paszport)', 'паспорта́', 'liczba mnoga -а z przesuniętym akcentem'],
          ['друг (przyjaciel)', 'друзья́', 'nieregularna: dodaje -ья, spółgłoska mięknie'],
          ['брат (brat)', 'бра́тья', 'nieregularna liczba mnoga -ья'],
          ['стул (krzesło)', 'сту́лья', 'nieregularna liczba mnoga -ья'],
          ['лист (liść)', 'ли́стья', 'nieregularna liczba mnoga -ья (ли́сты = „kartki papieru”)'],
          ['ребёнок (dziecko)', 'де́ти', 'liczba mnoga supletywna (inny rdzeń)'],
          ['человек (osoba)', 'лю́ди', 'liczba mnoga supletywna (inny rdzeń)'],
        ],
      },
      bullets: [
        '**Liczby mnogie -а z przesuniętym akcentem** to duża, produktywna grupa głównie jednosylabowych rzeczowników rodzaju męskiego: дом, город, лес, глаз, паспорт, вечер (wieczór) → вечера, доктор → доктора.',
        '**Liczby mnogie -ья** (друзья, братья, стулья, листья) wstawiają miękką spółgłoskę przed **-я** — na pierwszy rzut oka wcale nie przypominają swojej formy w liczbie pojedynczej.',
        '**Liczby mnogie supletywne** (ребёнок → дети, человек → люди) używają zupełnie innego rdzenia, podobnie jak w angielskim „child → children” czy „person → people”.',
        '**лист** ma dwie różne liczby mnogie w zależności od znaczenia: **листья** (liście drzewa) vs. **листы** (kartki papieru) — klasyczna pułapka słownikowa.',
      ],
    },
    {
      h2: 'Mianownik a biernik: jak je odróżnić',
      content:
        'Dla **nieżywotnych rzeczowników rodzaju męskiego i nijakiego** biernik jest **identyczny** z mianownikiem — żadna końcówka się nie zmienia. Ta sama forma słowa, стол czy окно, może być zarówno podmiotem, jak i dopełnieniem bliższym zdania. To **kontekst** rozstrzyga, o co chodzi.',
      table: {
        caption: 'Porównanie mianownik / biernik',
        boldColumnIndices: [0, 1],
        headers: ['Sytuacja', 'Zdanie rosyjskie', 'Wyjaśnienie'],
        rows: [
          [
            'Podmiot (mianownik)',
            'Стол стоит у окна.',
            'Stół stoi przy oknie. (стол = podmiot)',
          ],
          [
            'Dopełnienie bliższe, nieżywotne (biernik = mianownik)',
            'Я вижу стол.',
            'Widzę stół. (стол bez zmian, ale teraz jest dopełnieniem)',
          ],
          ['Podmiot (mianownik)', 'Мой друг пришёл.', 'Mój przyjaciel przyszedł. (друг = podmiot)'],
          [
            'Dopełnienie bliższe, żywotne (biernik ≠ mianownik)',
            'Я вижу друга.',
            'Widzę mojego przyjaciela. (друг → друга — żywotny męski przyjmuje biernik w formie dopełniacza)',
          ],
          [
            'Podmiot żeński (mianownik)',
            'Книга лежит на столе.',
            'Książka leży na stole.',
          ],
          [
            'Dopełnienie bliższe żeńskie (biernik ≠ mianownik)',
            'Я читаю книгу.',
            'Czytam książkę. (книга → книгу — rodzaj żeński zawsze się zmienia)',
          ],
        ],
      },
      subsections: [
        {
          h3: 'Reguła, która o tym decyduje',
          content:
            '**Żywotne rzeczowniki męskie** przechodzą na biernik w formie dopełniacza (друг → друга). **Nieżywotne rzeczowniki męskie i nijakie** pozostają identyczne z mianownikiem. **Rzeczowniki żeńskie** zawsze zmieniają końcówkę (-а → -у). To dokładne lustrzane odbicie pułapki omówionej w naszym przewodniku po bierniku.',
        },
      ],
    },
    {
      h2: 'Jak przymiotniki i zaimki zgadzają się w mianowniku',
      content:
        'Przymiotniki, zaimki dzierżawcze i wskazujące muszą **zgadzać się** z rzeczownikiem, który opisują, pod względem rodzaju i liczby — a formy mianownika poznaje się jako pierwsze.',
      table: {
        caption: 'Końcówki przymiotników i zaimków w mianowniku',
        boldColumnIndices: [0],
        headers: ['Rodzaj / liczba', 'Przymiotnik (новый)', 'Zaimek dzierżawczy (мой)', 'Zaimek wskazujący (этот)'],
        rows: [
          ['Męski', 'новый', 'мой', 'этот'],
          ['Żeński', 'новая', 'моя', 'эта'],
          ['Nijaki', 'новое', 'моё', 'это'],
          ['Liczba mnoga (wszystkie rodzaje)', 'новые', 'мои', 'эти'],
        ],
      },
      bullets: [
        '**Это**, gdy oznacza „to jest” (zastosowanie 3 powyżej), pełni funkcję niezmiennego słowa wskazującego i w tej roli nie zmienia się przez rodzaj ani liczbę.',
        '**Zaimki osobowe** w mianowniku — я, ты, он/она/оно, мы, вы, они — nie odmieniają się przez rodzaj, z wyjątkiem trzeciej osoby liczby pojedynczej.',
      ],
    },
    {
      h2: '24 prawdziwe przykłady rosyjskiego mianownika',
      content:
        'Poniżej znajduje się **24 autentyczne rosyjskie zdania** ilustrujące każde główne zastosowanie mianownika, wraz z transliteracją i tłumaczeniem. **1–6:** podmiot zdania | **7–12:** orzeczniki po pominiętym „być” | **13–18:** nazywanie z это | **19–24:** tytuły, szyldy i wykrzyknienia.',
      table: {
        caption: '24 przykładowe zdania z mianownikiem',
        boldColumnIndices: [1, 2],
        headers: ['#', 'Rosyjski', 'Transliteracja', 'Tłumaczenie i uwagi'],
        rows: [
          ['1', 'Собака лает.', 'Sobaka layet.', 'Pies szczeka. (собака = podmiot)'],
          [
            '2',
            'Дети играют во дворе.',
            'Deti igrayut vo dvore.',
            'Dzieci bawią się na podwórku. (дети = nieregularna liczba mnoga od ребёнок)',
          ],
          [
            '3',
            'Погода сегодня хорошая.',
            'Pogoda segodnya khoroshaya.',
            'Pogoda jest dziś ładna. (погода = podmiot)',
          ],
          [
            '4',
            'Мой брат работает в банке.',
            'Moy brat rabotayet v banke.',
            'Mój brat pracuje w banku. (брат = podmiot)',
          ],
          [
            '5',
            'Друзья приехали вчера.',
            'Druzya priyekhali vchera.',
            'Przyjaciele przyjechali wczoraj. (друзья = nieregularna liczba mnoga od друг)',
          ],
          [
            '6',
            'Этот дом очень старый.',
            'Etot dom ochen staryy.',
            'Ten dom jest bardzo stary. (дом = podmiot)',
          ],
          [
            '7',
            'Она — моя сестра.',
            'Ona — moya sestra.',
            'Ona jest moją siostrą. (oba w mianowniku, быть pominięte)',
          ],
          [
            '8',
            'Он врач, а она инженер.',
            'On vrach, a ona inzhener.',
            'On jest lekarzem, a ona inżynierem.',
          ],
          [
            '9',
            'Санкт-Петербург — красивый город.',
            'Sankt-Peterburg — krasivyy gorod.',
            'Sankt Petersburg jest pięknym miastem.',
          ],
          [
            '10',
            'Русский язык — мой любимый предмет.',
            'Russkiy yazyk — moy lyubimyy predmet.',
            'Rosyjski jest moim ulubionym przedmiotem.',
          ],
          [
            '11',
            'Это здание — музей.',
            'Eto zdaniye — muzey.',
            'Ten budynek to muzeum.',
          ],
          [
            '12',
            'Чай без сахара — моя привычка.',
            'Chay bez sakhara — moya privychka.',
            'Herbata bez cukru to mój nawyk.',
          ],
          ['13', 'Это моя мама.', 'Eto moya mama.', 'To moja mama.'],
          [
            '14',
            'Это интересная задача.',
            'Eto interesnaya zadacha.',
            'To ciekawe zadanie.',
          ],
          [
            '15',
            'Кто это? — Это мой сосед.',
            'Kto eto? — Eto moy sosed.',
            'Kto to? — To mój sąsiad.',
          ],
          [
            '16',
            'Что это? — Это словарь.',
            'Chto eto? — Eto slovar.',
            'Co to jest? — To słownik.',
          ],
          [
            '17',
            'Это не ошибка, а шутка.',
            'Eto ne oshibka, a shutka.',
            'To nie pomyłka, tylko żart.',
          ],
          [
            '18',
            'Это новые студенты.',
            'Eto novyye studenty.',
            'To nowi studenci. (это pozostaje bez zmian; студенты jest w liczbie mnogiej)',
          ],
          [
            '19',
            'Роман называется «Преступление и наказание».',
            'Roman nazyvayetsya "Prestupleniye i nakazaniye".',
            'Powieść nazywa się „Zbrodnia i kara”.',
          ],
          ['20', 'Вход', 'Vkhod', 'Wejście (szyld)'],
          [
            '21',
            'Осторожно, ступеньки!',
            'Ostorozhno, stupenki!',
            'Uwaga, stopnie! (znak ostrzegawczy, mianownik liczby mnogiej)',
          ],
          ['22', 'Пожар!', 'Pozhar!', 'Pożar! (wykrzyknienie)'],
          [
            '23',
            'Какая красота!',
            'Kakaya krasota!',
            'Co za piękno! (wykrzyknienie z przymiotnikiem + rzeczownikiem w mianowniku)',
          ],
          [
            '24',
            'Боже мой!',
            'Bozhe moy!',
            'Mój Boże! (skamieniała forma wołacza — rzadki wyjątek)',
          ],
        ],
      },
    },
    {
      h2: 'Top 5 błędów w mianowniku (i jak je naprawić)',
      content: 'Najczęstsze **błędy** popełniane przez uczących się w mianowniku:',
      bullets: [
        '**Użycie mianownika dla dopełnienia bliższego rzeczowników żywotnych** — Я вижу мой друг ✗ → Я вижу моего друга ✓ (żywotne męskie dopełnienia bliższe wymagają biernika, który wygląda jak dopełniacz)',
        '**Tworzenie nieregularnych liczb mnogich według ślepej reguły -ы/-и** — други ✗ → друзья ✓ (nieregularne liczby mnogie trzeba zapamiętać indywidualnie)',
        '**Zapomnienie reguły 8 liter w liczbie mnogiej** — книгы ✗ → книги ✓ (po к piszemy -и, nie -ы)',
        '**Traktowanie это jak przymiotnika, który musi się zgadzać** — Эта мой брат ✗ → Это мой брат ✓ (это nigdy się nie zmienia, niezależnie od rodzaju czy liczby tego, co po nim następuje)',
        '**Używanie mianownika po przyimku** — в дом dla określenia miejsca ✗ → в доме ✓ (mianownik nigdy nie występuje po przyimku — to właśnie cecha definiująca przypadek miejscownikowy)',
      ],
    },
  ],
  conclusion:
    'Rosyjski mianownik wygląda zwodniczo prosto — to forma poznawana jako pierwsza, przeważnie bez dodawanych końcówek. Ale jego formy liczby mnogiej kryją jedne z najbardziej podchwytliwych nieregularności w całym języku, a jego pokrywanie się z biernikiem to najczęstsza przeszkoda dla początkujących uczniów.\n\nPodsumowując: mianownik oznacza **podmiot**, **orzecznik** po pominiętym „być” oraz wszystko, co następuje po **это**. Końcówki liczby pojedynczej zależą od rodzaju w przewidywalny sposób; końcówki liczby mnogiej dla większości rzeczowników podążają za wzorcem **-ы/-и** (z regułą 8 liter), ale podstawowy zestaw bardzo częstych słów — **друзья, братья, дети, люди, дома, города** — trzeba zapamiętać indywidualnie.',
  conclusionOutro:
    'Gotowy na więcej? Poznaj pozostałe przypadki w naszej pełnej serii gramatyki rosyjskiej:',
  ctaText: 'Ćwicz rosyjskie przypadki w naszej aplikacji',
  ctaHref: '/',
  faq: [
    {
      question: 'Do czego służy rosyjski mianownik?',
      answer:
        'Rosyjski mianownik jest używany dla podmiotu zdania (Кошка спит — Kot śpi), orzecznika po pominiętej formie „być” (Она — врач — Ona jest lekarką), nazywania i przedstawiania za pomocą это (Это мой брат) oraz jako forma słownikowa/cytowania każdego rzeczownika.',
    },
    {
      question: 'Czy rosyjski mianownik to to samo co biernik?',
      answer:
        'Nie do końca, ale pokrywają się przy nieżywotnych rzeczownikach rodzaju męskiego i nijakiego: Я вижу стол (Widzę stół) używa tej samej formy стол co forma podmiotu. Dla żywotnych rzeczowników męskich biernik zamiast tego pokrywa się z dopełniaczem (Я вижу друга — Widzę mojego przyjaciela). Rzeczowniki żeńskie zawsze zmieniają końcówkę w bierniku (книга → книгу).',
    },
    {
      question: 'Jak tworzy się mianownik liczby mnogiej po rosyjsku?',
      answer:
        'Większość rzeczowników męskich i żeńskich dodaje -ы (lub -и po г, к, х, ж, ш, щ, ч, ц), podczas gdy rzeczowniki nijakie zamieniają -о na -а i -е na -я. Grupa częstych rzeczowników jest nieregularna i trzeba ją zapamiętać: друг → друзья, брат → братья, стул → стулья, ребёнок → дети, человек → люди, дом → дома, город → города.',
    },
    {
      question: 'Dlaczego это nie zmienia się przez rodzaj ani liczbę?',
      answer:
        'Это, używane w znaczeniu „to jest / to są”, pełni funkcję niezmiennego słowa wskazującego, a nie prawdziwego przymiotnika wskazującego. Pozostaje jako это niezależnie od tego, co następuje: Это мой брат (rodzaj męski), Это моя сестра (rodzaj żeński), Это мои друзья (liczba mnoga).',
    },
    {
      question: 'Czy rosyjski ma osobny przypadek wołacz do zwracania się do ludzi?',
      answer:
        'Nie we współczesnym standardowym rosyjskim — historyczny wołacz zniknął wieki temu, z wyjątkiem garstki skamieniałych form, jak Боже! (Mój Boże!) i Господи! (Panie!). Aby dziś się do kogoś zwrócić lub kogoś zawołać, rosyjski po prostu używa zwykłej formy mianownika: Мама! (Mamo!), Андрей! (Andrey!).',
    },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Rosyjski mianownik: zasady, końcówki i 24 prawdziwe przykłady',
    description:
      'Najpełniejszy przewodnik po mianowniku w języku rosyjskim: 6 głównych zastosowań, końcówki liczby pojedynczej i mnogiej, nieregularne liczby mnogie, mianownik a biernik. 24 prawdziwe przykłady z transliteracją.',
    datePublished: '2026-09-07',
    dateModified: '2026-09-07',
    author: {
      '@type': 'Person',
      name: 'Nathan',
      url: 'https://russiandeclensions.com/',
      image: 'https://russiandeclensions.com/landing-cases/founder-photo.webp',
      description:
        'Native speaker języka francuskiego uczący się rosyjskiego; pisze o gramatyce, przypadkach i praktycznych nawykach samodzielnej nauki.',
      worksFor: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://russiandeclensions.com/learn/articles/russian-nominative-case',
    },
    keywords:
      'rosyjski mianownik, mianownik w języku rosyjskim, końcówki mianownika rosyjski, czym jest mianownik po rosyjsku, przykłady mianownika rosyjski, mianownik liczby mnogiej rosyjski',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russian-nominative-case-dictionary-form.webp',
      width: 1536,
      height: 1024,
    },
  },
};
