import type { LearnArticle } from '../learnArticles';

/** Tłumaczenie PL — `russian-genitive-case`. Cyrylica jak w wersji DE. */
export const russianGenitiveCasePl: LearnArticle = {
  slug: 'russian-genitive-case',
  title:
    'Rosyjski dopełniacz: zasady, końcówki i 32 prawdziwe przykłady',
  metaTitle:
    'Rosyjski dopełniacz: zasady, końcówki i przykłady | Russian Cases with Anna',
  metaDescription:
    'Najpełniejszy przewodnik po dopełniaczu w języku rosyjskim: 7 zastosowań, końcówki w liczbie pojedynczej i mnogiej, formy nieregularne, 16 przyimków, liczby, У + dopełniacz. 32 autentyczne zdania z transliteracją.',
  keywords: [
    'rosyjski dopełniacz',
    'końcówki dopełniacza rosyjski',
    'zasady dopełniacza rosyjski',
    'dopełniacz mnogi rosyjski',
    'przykłady dopełniacza rosyjski',
    'gramatyka posiadania rosyjski',
  ],
  h1: 'Rosyjski dopełniacz: zasady, końcówki i 32 prawdziwe przykłady',
  heroImage: {
    src: '/articles/free-russian-lesson-genitive-case.webp',
    alt: 'Darmowa lekcja rosyjska o dopełniaczu: posiadanie, zaprzeczenie i ilości',
    width: 1200,
    height: 630,
  },
  intro:
    'Gdybyś miał opanować **tylko jeden rosyjski przypadek** poza mianownikiem, wybierz **dopełniacz**. Rosyjski dopełniacz jest zdecydowanie **najczęstszym przypadkiem** po mianowniku — pojawia się przy **posiadaniu**, **zaprzeczeniu**, **ilościach**, **datach** i po większej liczbie **przyimków** niż jakikolwiek inny przypadek.\n\nTen przewodnik obejmuje wszystko: zasady, wszystkie końcówki, nieregularne formy, na których wszyscy się potykają, oraz **32 rosyjskie przykładowe zdania**, żeby zobaczyć, jak dopełniacz działa w praktyce.',
  whatYouLearn: [
    'Czym jest rosyjski dopełniacz i kiedy go używać (7 kluczowych zastosowań)',
    'Końcówki dopełniacza w liczbie pojedynczej — wszystkie typy rzeczowników z przykładami',
    'Końcówki dopełniacza w liczbie mnogiej — w tym końcówka zerowa i uciekające samogłoski',
    '11 nieregularnych dopełniaczy mnogich do zapamiętania (человек → людей, глаз → глаз itd.)',
    '16 przyimków wymagających dopełniacza',
    'Liczby i ilości z dopełniaczem (2/3/4 vs 5+, 21, 22, 25…)',
    'Dopełniacz vs biernik — pułapka żywotnego męskiego',
    'Konstrukcja У + dopełniacz na „mieć” po rosyjsku',
  ],
  leadMagnetCta: {
    title: 'Ćwicz rosyjski dopełniacz inteligentnymi zadaniami',
    description:
      'Nasza aplikacja trenuje wszystkie 6 rosyjskich przypadków — w tym dopełniacz mnogi — z powtórkami rozłożonymi w czasie, prawdziwymi zdaniami i natychmiastową informacją zwrotną. Na Androida i iOS.',
    ctaText: 'Pobierz aplikację i zacznij ćwiczyć już dziś',
    ctaHref: '/',
  },
  internalLinks: [
    {
      href: '/learn/lessons/russian-cases-complete-guide',
      label:
        'Kompletny przewodnik po rosyjskich przypadkach: wszystkie 6 przypadków z przykładami',
    },
    {
      href: '/learn/articles/russian-case-endings-cheatsheet',
      label: 'Rosyjskie końcówki przypadków: kompletna ściąga',
    },
    {
      href: '/learn/lessons/dative-case-declension',
      label:
        'Rosyjski celownik: jak powiedzieć „do” i „dla” po rosyjsku',
    },
  ],
  tableAccentVariant: 'genitive',
  sections: [
    {
      h2: 'Czym jest rosyjski dopełniacz?',
      content:
        '**Dopełniacz** (Родительный падеж — dosłownie „przypadek pochodzenia”) to drugi z sześciu rosyjskich przypadków. Nazwa wskazuje główną funkcję: **pochodzenie, przynależność lub relacja** — odpowiada na pytania **Кого ?** (czyjego? kogo?) i **Чего ?** (czego?). Po angielsku wyraża się to przez **of** lub **’s**.\n\nPo rosyjsku wszystko odbywa się przez **końcówki słów** — bez dodatkowego wyrazu. Przykład: nazwa miasta = **название города** (города to dopełniacz od город).',
      subsections: [
        {
          h3: 'Krótka odpowiedź',
          content:
            'Rosyjski dopełniacz odpowiada na **Кого ?** i **Чего ?**.\n\nUżywa się go zwłaszcza przy **posiadaniu**, **nieobecności**, **ilości**; jest obowiązkowy po wielu powszechnych **przyimkach**.',
        },
      ],
    },
    {
      h2: '7 kluczowych zastosowań rosyjskiego dopełniacza',
      content:
        'Dopełniacz to **najbardziej wszechstronny** przypadek w rosyjskim.\n\nPojawia się przy **posiadaniu**, **zaprzeczeniu**, **ilościach**, **przyimkach**, **porównaniach**, **datach** i przy **pewnych czasownikach**.',
      image: {
        src: '/articles/when-to-use-the-genitive-case-in-russian-cheat-sheet.webp',
        alt: 'Ściąga: kiedy używać dopełniacza po rosyjsku',
        width: 1200,
        height: 630,
      },
      subsections: [
        {
          h3: 'Zastosowanie 1 — Posiadanie i przynależność',
          content:
            'Dopełniacz zastępuje angielskie **of** lub **’s**. Gdy rzeczownik **należy** do innego, **właściciel** stoi w **dopełniaczu**.',
          bullets: [
            '**дом отца** — dom ojca',
            '**столица России** — stolica Rosji',
            '**конец фильма** — koniec filmu',
          ],
        },
        {
          h3: 'Zastosowanie 2 — Nieobecność i zaprzeczenie (нет, не было, не будет)',
          content:
            'Gdy mówisz, że coś **nie istnieje**, nie jest dostępne lub jest nieobecne, dopełniacz jest obowiązkowy. Konstrukcje **нет**, **не было** i **не будет** zawsze łączą się z dopełniaczem.',
          bullets: [
            '**У меня нет машины.** — Nie mam samochodu. (нет + dopełniacz)',
            '**Здесь нет сахара.** — Tu nie ma cukru.',
            '**Его не было дома.** — Nie było go w domu. (не было + dopełniacz)',
            '**Завтра не будет дождя.** — Jutro nie będzie deszczu.',
          ],
        },
        {
          h3: 'Zastosowanie 3 — Ilość, liczby i miara',
          content:
            'Po większości **liczb** i słów **ilości** rosyjski wymaga **dopełniacza**.\n\nPo **1**: mianownik liczby pojedynczej. Po **2, 3, 4**: dopełniacz liczby pojedynczej. Po **5–20** i odpowiednich dużych liczbach: dopełniacz mnogi. Po **много**, **мало**, **несколько**, **сколько**: dopełniacz mnogi.',
        },
        {
          h3: 'Zastosowanie 4 — Przyimki',
          content:
            '**Więcej przyimków** wymaga dopełniacza niż jakiegokolwiek innego przypadku. Kluczowe przykłady: **без**, **до**, **из**, **у**, **от**, **после**, **для**, **кроме**. Pełna tabela jest poniżej w sekcji Przyimki.',
        },
        {
          h3: 'Zastosowanie 5 — Porównanie',
          content:
            'Po rosyjsku **porównania** ze stopniem wyższym przymiotnika są w **dopełniaczu**: **Он старше меня.** — Jest ode mnie starszy. (меня = dopełniacz od я)',
        },
        {
          h3: 'Zastosowanie 6 — Daty',
          content:
            'Przy **dacie** zarówno **dzień, jak i miesiąc** są w dopełniaczu: **Он родился пятого марта.** — Urodził się 5 marca.',
        },
        {
          h3: 'Zastosowanie 7 — Pewne czasowniki (dopełnienie w dopełniaczu)',
          content:
            'Ważny zestaw **czasowników** rządzi dopełnieniem w **dopełniaczu**: **ждать** (czekać), **желать** (życzyć), **бояться** (bać się), **избегать** (unikać), **достигать** (osiągać).',
        },
      ],
    },
    {
      h2: 'Końcówki dopełniacza — liczba pojedyncza',
      content:
        'Tabela pokazuje, jak tworzyć **dopełniacz liczby pojedynczej** dla każdego typu rosyjskiego rzeczownika. Ustal **rodzaj** i **ostatnią literę** w mianowniku, potem zastosuj właściwą **końcówkę**.\n\nUwaga: **reguła 8 liter** zamienia **Ы** na **И** po **Г, К, Х, Ж, Ш, Щ, Ч, Ц**.',
      table: {
        caption: 'Dopełniacz liczby pojedynczej według typu rzeczownika',
        boldColumnIndices: [1, 3],
        headers: [
          'Typ rzeczownika',
          'Końcówka',
          'Tworzenie',
          'Wynik',
          'Przykład w kontekście',
        ],
        rows: [
          [
            'Męski twardy',
            '-а',
            'стол → стол+а',
            'стола',
            'нет стола — nie ma stołu',
          ],
          [
            'Męski miękki',
            '-я',
            'гений → гени+я',
            'гения',
            'без гения — bez geniusza',
          ],
          [
            'Męski na -ж/ш/щ/ч',
            '-а',
            'нож → нож+а',
            'ножа',
            'без ножа — bez noża',
          ],
          [
            'Żeński -а (twardy)',
            '-ы',
            'книга → книг+ы',
            'книги',
            'нет книги — nie ma książki',
          ],
          [
            'Żeński -а (po г/к/х/ж/ш/щ/ч/ц)',
            '-и',
            'подруга → подруг+и',
            'подруги',
            'без подруги — bez przyjaciółki',
          ],
          [
            'Żeński -я',
            '-и',
            'неделя → недел+и',
            'недели',
            'нет недели — nie ma tygodnia',
          ],
          [
            'Żeński -ь',
            '-и',
            'ночь → ноч+и',
            'ночи',
            'до ночи — do nocy',
          ],
          ['Nijaki -о', '-а', 'окно → окн+а', 'окна', 'нет окна — nie ma okna'],
          ['Nijaki -е', '-я', 'море → мор+я', 'моря', 'до моря — do morza'],
          [
            'Nijaki -мя',
            '-ени',
            'имя → имен+и',
            'имени',
            'без имени — bez imienia',
          ],
        ],
      },
    },
    {
      h2: 'Końcówki dopełniacza — liczba mnoga (najtrudniejsza część)',
      content:
        '**Dopełniacz mnogi** bywa uznawany za **najtrudniejszy obszar** rosyjskiej deklinacji. Ma więcej form i wyjątków niż jakikolwiek inny przypadek.\n\nWiele żeńskich rzeczowników na **-а** i nijakich na **-о** ma **końcówkę zerową** (**-Ø**) — sam korzeń. Przy **окон** i **яблок** wstawia się uciekającą samogłoskę **О** między spółgłoski.',
      table: {
        caption: 'Dopełniacz mnogi według typu rzeczownika',
        boldColumnIndices: [1, 3],
        headers: [
          'Typ rzeczownika',
          'Końcówka',
          'Tworzenie',
          'Wynik',
          'Przykład w kontekście',
        ],
        rows: [
          [
            'Męski twardy',
            '-ов',
            'стол → стол+ов',
            'столов',
            'пять столов — pięć stołów',
          ],
          [
            'Męski na -ж/ш/щ/ч/ц (akcentowane)',
            '-ей',
            'нож → нож+ей',
            'ножей',
            'несколько ножей — kilka noży',
          ],
          [
            'Męski na -ж/ш/щ/ч/ц (nieakcentowane)',
            '-ей',
            'врач → врач+ей',
            'врачей',
            'много врачей — wielu lekarzy',
          ],
          [
            'Męski miękki -й',
            '-ев',
            'музей → музе+ев',
            'музеев',
            'три музея — trzy muzea',
          ],
          [
            'Męski miękki -ь',
            '-ей',
            'словарь → словар+ей',
            'словарей',
            'много словарей — wiele słowników',
          ],
          [
            'Żeński -а (twardy)',
            '-Ø (zero)',
            'женщина → женщин',
            'женщин',
            'много женщин — wiele kobiet',
          ],
          [
            'Żeński -а (po к/г)',
            '-Ø',
            'подруга → подруг',
            'подруг',
            'нет подруг — brak przyjaciółek',
          ],
          [
            'Żeński -я',
            '-ей / -й',
            'неделя → недель',
            'недель',
            'несколько недель — kilka tygodni',
          ],
          [
            'Żeński -ь',
            '-ей',
            'ночь → ноч+ей',
            'ночей',
            'пять ночей — pięć nocy',
          ],
          [
            'Nijaki -о (twardy)',
            '-Ø',
            'окно → окон',
            'окон',
            'много окон — wiele okien',
          ],
          ['Nijaki -е', '-ей', 'море → мор+ей', 'морей', 'пять морей — pięć mórz'],
          [
            'Nijaki -ие/-ия',
            '-ий',
            'здание → здани+й',
            'зданий',
            'много зданий — wiele budynków',
          ],
        ],
      },
    },
    {
      h2: 'Nieregularne dopełniacze mnogie — lista obowiązkowa',
      content:
        'Niektóre z najczęstszych rosyjskich rzeczowników ma **bardzo nieregularne** dopełniacze mnogie, które trzeba **zapamiętać**. To słowa **o bardzo wysokiej częstotliwości**.',
      table: {
        caption: '11 bardzo częstych nieregularnych dopełniaczy mnogich',
        boldColumnIndices: [1, 2],
        headers: [
          'Mianownik lp.',
          'Dopełniacz lm.',
          'Przykład',
          'Uwaga',
        ],
        rows: [
          ['человек (osoba)', 'людей', 'много людей', 'Supletiwizm (люди)'],
          ['ребёнок (dziecko)', 'детей', 'много детей', 'Supletiwizm (дети)'],
          ['глаз (oko)', 'глаз', 'пара глаз', 'Końcówka zerowa (nie глазов)'],
          ['раз (raz)', 'раз', 'несколько раз', 'Końcówka zerowa (nie разов)'],
          ['солдат (żołnierz)', 'солдат', 'отряд солдат', 'Końcówka zerowa'],
          ['носок (skarpeta)', 'носков', 'пара носков', 'zachowuje -ов'],
          ['чулок (pończocha)', 'чулок', 'пара чулок', 'Końcówka zerowa (nie чулков)'],
          ['яблоко (jabłko)', 'яблок', 'килограмм яблок', 'Końcówka zerowa'],
          ['имя (imię)', 'имён', 'список имён', 'typ nijaki na -мя'],
          ['мать (matka)', 'матерей', 'двое матерей', 'Odmiana specjalna'],
          ['дочь (córka)', 'дочерей', 'трое дочерей', 'Odmiana specjalna'],
        ],
      },
    },
    {
      h2: 'Rosyjskie przyimki z dopełniaczem — pełna lista',
      content:
        'Następujące **przyimki** zawsze wymagają **dopełniacza**. Mnemonik — skrót **БДИ-УОП-ДК**: **Без · До · Из · У · От · После · Для · Кроме**.\n\nTe 8 przyimków obejmuje **około 90 %** użyć dopełniacza po przyimku.',
      table: {
        caption: '16 przyimków z dopełniaczem i przykładami',
        boldColumnIndices: [0, 2],
        headers: [
          'Przyim.',
          'Znaczenie',
          'Z rzeczownikiem',
          'Pełne zdanie + tłumaczenie',
        ],
        rows: [
          [
            'без',
            'bez',
            'без молока',
            'Я пью чай без молока. — Piję herbatę bez mleka.',
          ],
          [
            'до',
            'do / przed / aż do (granica)',
            'до урока',
            'Позвони мне до урока. — Zadzwoń do mnie przed lekcją.',
          ],
          [
            'из',
            'z (wnętrza)',
            'из России',
            'Он приехал из России. — Przyjechał z Rosji.',
          ],
          [
            'с',
            'z (powierzchni)',
            'с полки',
            'Книга упала с полки. — Książka spadła z półki.',
          ],
          [
            'у',
            'u / przy',
            'у меня',
            'У меня есть кошка. — Mam kota.',
          ],
          [
            'от',
            'od (osoby / źródła)',
            'от друга',
            'Письмо от друга. — List od przyjaciela.',
          ],
          [
            'после',
            'po',
            'после работы',
            'После работы я устал. — Po pracy byłem zmęczony.',
          ],
          [
            'для',
            'dla (na korzyść)',
            'для тебя',
            'Это подарок для тебя. — To prezent dla ciebie.',
          ],
          [
            'кроме',
            'oprócz / poza',
            'кроме меня',
            'Все кроме меня пришли. — Wszyscy oprócz mnie przyszli.',
          ],
          [
            'вокруг',
            'wokół',
            'вокруг города',
            'Мы ехали вокруг города. — Objechaliśmy miasto.',
          ],
          [
            'мимо',
            'mimo / obok (mijając)',
            'мимо школы',
            'Он прошёл мимо школы. — Przeszedł mimo szkoły.',
          ],
          [
            'вместо',
            'zamiast',
            'вместо кофе',
            'Выпей воды вместо кофе. — Napij się wody zamiast kawy.',
          ],
          [
            'напротив',
            'naprzeciwko',
            'напротив банка',
            'Кафе напротив банка. — Kawiarnia naprzeciwko banku.',
          ],
          [
            'из-за',
            'z powodu / spod',
            'из-за дождя',
            'Из-за дождя мы остались дома. — Z powodu deszczu zostaliśmy w domu.',
          ],
          [
            'из-под',
            'spod',
            'из-под стола',
            'Кот вылез из-под стола. — Kot wyszedł spod stołu.',
          ],
          [
            'ради',
            'dla (czegoś / kogoś)',
            'ради тебя',
            'Ради твоего счастья. — Dla twojego szczęścia.',
          ],
        ],
      },
    },
    {
      h2: 'Rosyjskie liczby i dopełniacz',
      content:
        'Liczenie po rosyjsku wymaga **dopełniacza** — czy **liczby pojedynczej**, czy **mnogiej**, zależy od liczby.\n\nRosyjski liczy **„pakietami”**: liczby kończące się na **1** używają mianownika; **2–4** dopełniacz liczby pojedynczej; **5–0** dopełniacz mnogi.',
      table: {
        caption: 'Liczba + przypadek z przykładami',
        boldColumnIndices: [1, 2],
        headers: [
          'Liczba / kwantyfikator',
          'Wymagany przypadek',
          'Przykład (стол)',
          'Tłumaczenie',
        ],
        rows: [
          ['1', 'Mianownik lp.', 'один стол', 'jeden stół'],
          [
            '2, 3, 4',
            'Dopełniacz lp.',
            'два стола / три стола',
            'dwa / trzy stoły',
          ],
          ['5–20', 'Dopełniacz lm.', 'пять столов', 'pięć stołów'],
          [
            '21, 31, 41… (kończy się na 1)',
            'Mianownik lp.',
            'двадцать один стол',
            'jeden stół (mianownik lp. po 1)',
          ],
          [
            '22–24, 32–34… (kończy się na 2–4)',
            'Dopełniacz lp.',
            'двадцать два стола',
            'dwadzieścia dwa stoły',
          ],
          [
            '25–30 itd. (kończy się na 5–9, 0)',
            'Dopełniacz lm.',
            'двадцать пять столов',
            'dwadzieścia pięć stołów',
          ],
          ['100, 200, 1000…', 'Dopełniacz lm.', 'сто столов', 'sto stołów'],
          [
            'много / несколько / мало',
            'Dopełniacz lm.',
            'много столов',
            'wiele / kilka / mało stołów',
          ],
          [
            'сколько / столько',
            'Dopełniacz lm.',
            'сколько столов?',
            'ile stołów?',
          ],
        ],
      },
    },
    {
      h2: 'Dopełniacz a biernik: jak je odróżnić',
      content:
        'Jednym z najbardziej mylących punktów jest rozróżnienie **dopełniacza** od **biernika**. Dla **żywotnych męskich** rzeczowników forma biernika jest **identyczna** z dopełniaczem — **студента** może być jednym lub drugim.\n\n**Kontekst** i **struktura zdania** rozstrzygają.',
      table: {
        caption: 'Porównanie dopełniacz / biernik',
        boldColumnIndices: [0, 1],
        headers: ['Sytuacja', 'Zdanie rosyjskie', 'Wyjaśnienie'],
        rows: [
          [
            'Posiadanie / przynależność',
            'Это книга студента.',
            'To książka studenta. (dopełniacz oznacza właściciela)',
          ],
          [
            'Nieobecność (нет)',
            'Нет студента.',
            'Nie ma studenta. (нет zawsze wymaga dopełniacza)',
          ],
          [
            'dopełnienie bezpośrednie (żywotne)',
            'Я вижу студента.',
            'Widzę studenta. (bier. żyw. = forma dopełniacza)',
          ],
          [
            'dopełnienie bezpośrednie (nieżywotne)',
            'Я вижу стол.',
            'Widzę stół. (bier. nieżyw. = mianownik — tu brak dopełniacza)',
          ],
          [
            'Po liczebnikach 2–4',
            'Я вижу двух студентов.',
            'Widzę dwóch studentów. (żywotne → dopełniacz mnogi z liczebnikiem)',
          ],
          [
            'dopełniacz partytywny',
            'Хочешь чаю?',
            'Chcesz herbaty? (partytywny — „trochę czegoś”)',
          ],
        ],
      },
    },
    {
      h2: '32 prawdziwe przykłady rosyjskiego dopełniacza',
      content:
        'Oto **32 autentyczne rosyjskie zdania** ilustrujące główne użycia dopełniacza. Każdy wiersz ma transliterację i tłumaczenie. **1–5:** posiadanie | **6–10:** nieobecność / zaprzeczenie | **11–15:** ilość i liczby | **16–22:** przyimki | **23–32:** wyrażenia i różne.',
      table: {
        caption: '32 przykładowe zdania z dopełniaczem',
        boldColumnIndices: [1, 2],
        headers: ['#', 'Rosyjski', 'Transliteracja', 'Tłumaczenie i uwagi'],
        rows: [
          [
            '1',
            'Это машина моего брата.',
            'Eto mashina moyego brata.',
            'To samochód mojego brata. (брат → брата, dopełn. lp. męski)',
          ],
          [
            '2',
            'Адрес нашей компании.',
            'Adres nashey kompanii.',
            'Adres naszej firmy. (компания → компании)',
          ],
          [
            '3',
            'Столица России — Москва.',
            'Stolitsa Rossii — Moskva.',
            'Stolicą Rosji jest Moskwa. (Россия → России)',
          ],
          [
            '4',
            'Конец фильма был неожиданным.',
            'Konets filma byl neozhidannym.',
            'Koniec filmu był niespodziewany. (фильм → фильма)',
          ],
          [
            '5',
            'Цвет её глаз — карий.',
            'Tsvet yeyo glaz — kariy.',
            'Kolor jej oczu jest piwny. (глаза → глаз, dopełn. lm.)',
          ],
          [
            '6',
            'У меня нет времени.',
            'U menya net vremeni.',
            'Nie mam czasu. (время → времени, nijaki na -мя)',
          ],
          [
            '7',
            'Здесь нет молока.',
            "Zdes' net moloka.",
            'Tu nie ma mleka. (молоко → молока)',
          ],
          [
            '8',
            'Я не видел его несколько дней.',
            'Ya ne videl yego neskolko dney.',
            'Nie widziałem go przez kilka dni. (день → дней)',
          ],
          [
            '9',
            'В холодильнике нет яиц.',
            'V kholodilnike net yaits.',
            'W lodówce nie ma jaj. (яйцо → яиц, dopełn. lm.)',
          ],
          [
            '10',
            'Без тебя мне плохо.',
            'Bez tebya mne plokho.',
            'Bez ciebie jest mi źle. (ты → тебя, zaimek w dopełniaczu)',
          ],
          [
            '11',
            'Два стакана воды, пожалуйста.',
            'Dva stakana vody, pozhaluysta.',
            'Dwie szklanki wody, proszę. (два + dopełn. lp.)',
          ],
          [
            '12',
            'Пять минут ходьбы отсюда.',
            "Pyat' minut khod'by otsyuda.",
            'Pięć minut pieszo stąd. (пять + dopełn. lm.)',
          ],
          [
            '13',
            'Много людей пришло на концерт.',
            'Mnogo lyudey prishlo na kontsert.',
            'Wiele ludzi przyszło na koncert. (много + людей)',
          ],
          [
            '14',
            'Несколько студентов опоздало.',
            'Neskolko studentov opozdalo.',
            'Kilku studentów spóźniło się. (несколько + dopełn. lm.)',
          ],
          [
            '15',
            'Килограмм помидоров.',
            'Kilogramm pomidorov.',
            'Kilogram pomidorów. (помидоры → помидоров)',
          ],
          [
            '16',
            'Она пришла из Германии.',
            'Ona prishla iz Germanii.',
            'Przyszła z Niemiec. (из + dopełn.)',
          ],
          [
            '17',
            'До свидания!',
            'Do svidaniya!',
            'Do widzenia! Dosłownie: Do spotkania. (до + dopełn.)',
          ],
          [
            '18',
            'Без усилий нет результатов.',
            'Bez usiliy net rezultatov.',
            'Bez wysiłku nie ma rezultatów. (без + dopełn. lm.)',
          ],
          [
            '19',
            'У врача очередь.',
            "U vracha ochered'.",
            'U lekarza jest kolejka. (у + dopełn.)',
          ],
          [
            '20',
            'После дождя — солнце.',
            'Posle dozhdya — solntse.',
            'Po deszczu — słońce. (после + dopełn.)',
          ],
          [
            '21',
            'Вокруг парка — красивые дома.',
            'Vokrug parka — krasivye doma.',
            'Wokół parku są piękne domy. (вокруг + dopełn.)',
          ],
          [
            '22',
            'Из-за пробок я опоздал.',
            'Iz-za probok ya opozdal.',
            'Przez korki spóźniłem się. (из-за + dopełn.)',
          ],
          [
            '23',
            'Ни слова правды.',
            'Ni slova pravdy.',
            'Ani słowa prawdy. (dopełniacz zaprzeczenia)',
          ],
          [
            '24',
            'Не было смысла спорить.',
            "Ne bylo smysla sporit'.",
            'Nie było sensu kłócić się. (не было + dopełn.)',
          ],
          [
            '25',
            'Час от часу не легче.',
            'Chas ot chasu ne legche.',
            'Z każdą godziną coraz gorzej. (frazeologizm: от + dopełn.)',
          ],
          [
            '26',
            'Ради твоего счастья.',
            'Radi tvoyego schastya.',
            'Dla twojego szczęścia. (ради + dopełn.)',
          ],
          [
            '27',
            'Сколько стоит бутылка воды?',
            'Skolko stoit butylka vody?',
            'Ile kosztuje butelka wody? (воды = dopełn. lp. od вода)',
          ],
          [
            '28',
            'Мне не хватает денег.',
            'Mne ne khvatayet deneg.',
            'Brakuje mi pieniędzy. (не хватает + dopełn.)',
          ],
          [
            '29',
            'Желаю тебе счастья и здоровья!',
            'Zhelayu tebe schastya i zdorovya!',
            'Życzę ci szczęścia i zdrowia! (желать + dopełn.)',
          ],
          [
            '30',
            'Начало нового года.',
            'Nachalo novogo goda.',
            'Początek nowego roku. (łańcuch w dopełn.: нового + года)',
          ],
          [
            '31',
            'У неё голубые глаза.',
            'U neyo golubye glaza.',
            'Ona ma niebieskie oczy. (у + zaimek w dopełniaczu)',
          ],
          [
            '32',
            'Вкус победы.',
            'Vkus pobedy.',
            'Smak zwycięstwa. (победа → победы, dopełn. lp.)',
          ],
        ],
      },
    },
    {
      h2: 'Posiadanie po rosyjsku: У + dopełniacz („mieć”)',
      content:
        'Rosyjski ma **dwa główne sposoby** wyrażania posiadania, oba z dopełniaczem. **Konstrukcja 1 — Rzeczownik + dopełniacz:** **машина друга** — samochód przyjaciela. **Konstrukcja 2 — У + dopełniacz + есть:** aby wyrazić, że ktoś coś posiada.\n\nNie ma bezpośredniego czasownika **„mieć”**. Zamiast tego: **У** [osoba w dopełniaczu] **есть** [rzecz].',
      subsections: [
        {
          h3: 'Konstrukcja У we wszystkich czasach',
          content:
            '**Teraźniejszy:** **У меня есть кошка.** (Mam kota — есть często pomija się w mowie). **Przeszły:** **У меня была кошка.** (Miałem kota — была zgadza się z кошка). **Przyszły:** **У меня будет кошка.** (Będę miał kota).\n\n**Przeczenie — teraźniejszy:** **У меня нет кошки.** (нет + dopełniacz). **Przeczenie — przeszły:** **У меня не было кошки.** **Przeczenie — przyszły:** **У меня не будет кошки.**',
        },
      ],
    },
    {
      h2: 'Top 7 błędów w dopełniaczu (i jak je poprawić)',
      content:
        '**Najczęstsze błędy** uczących się przy dopełniaczu:',
      bullets: [
        '**Mianownik po НЕТ** — Нет кот. ✗ → Нет кота. ✓ (нет zawsze wymaga dopełniacza)',
        '**Zapomnienie reguły 8 liter** — книгы ✗ → книги ✓ (po г → и, nie ы)',
        '**Zła zgodność z liczbą** — пять стол ✗ → пять столов ✓ (5+ wymaga dopełniacza mnogiego)',
        '**-ов przy żeńskim z zerową końcówką** — много женщинов ✗ → много женщин ✓',
        '**Mylenie из i от** — из = „z wnętrza / miejsca” ; от = „od (osoby / źródła)”. Он пришёл от врача vs. Он вернулся из больницы.',
        '**Biernik zamiast dopełniacza po porównaniu** — Он старше я ✗ → Он старше меня ✓',
        '**Zapomnienie uciekających samogłosek w dopełniaczu lm.** — окнов ✗ → окон ✓ ; ручков ✗ → ручек ✓',
      ],
    },
  ],
  conclusion:
    'Rosyjski dopełniacz to **koń pociągowy** systemu przypadków. Obsługuje **posiadanie**, **zaprzeczenie**, **ilość**, **porównanie**, **daty** i jest wymagany przez więcej **przyimków** niż jakikolwiek inny przypadek.\n\nKrótko: **Dopełniacz lp.** — męski **-а/-я** | żeński **-ы/-и** | nijaki **-а/-я**. **Dopełniacz lm.** — zapamiętaj wzorce i częste wyjątki. Po **НЕТ**, **НЕ БЫЛО**, **НЕ БУДЕТ**: zawsze dopełniacz. Po **2/3/4**: dopełniacz lp. | po **5+**, **много**, **несколько**: dopełniacz lm. Kluczowe przyimki: **без**, **до**, **из**, **у**, **от**, **после**, **для**, **кроме**.',
  conclusionOutro:
    'Gotowy na więcej? Poznaj pozostałe przypadki w naszej pełnej serii gramatyki rosyjskiej:',
  ctaText: 'Ćwicz rosyjskie przypadki w naszej aplikacji',
  ctaHref: '/',
  faq: [
    {
      question: 'Do czego służy dopełniacz w języku rosyjskim?',
      answer:
        'Rosyjski dopełniacz służy do posiadania (книга студента — książka studenta), nieobecności / zaprzeczenia (нет воды — brak wody), ilości i liczb (два стакана — dwie szklanki ; много людей — wiele ludzi), po wielu przyimkach (без, до, из, у, от, после, для…), porównań (старше меня — starszy ode mnie) i dat.',
    },
    {
      question: 'Jak tworzy się dopełniacz mnogi po rosyjsku?',
      answer:
        'Tworzenie zależy od typu rzeczownika: twarde męskie dodają -ов (стол → столов) ; miękkie męskie i żeńskie często -ей (ночь → ночей ; словарь → словарей) ; żeńskie na -а często mają końcówkę zerową (женщина → женщин, книга → книг). Nijakie na -о też często z zerem i czasem uciekającą samogłoską (окно → окон). To najtrudniejsza część rosyjskiej deklinacji.',
    },
    {
      question: 'Czy rosyjski dopełniacz to to samo co biernik?',
      answer:
        'Nie do końca, ale pokrywają się przy żywotnych męskich: Я вижу студента (biernik) i Нет студента (dopełniacz) używają tej samej formy студента. Przy nieżywotnych biernik męski równa się mianownikowi (Я вижу стол), dopełniacz dodaje -а (Нет стола). Przy żeńskim biernik zmienia -а na -у (Я читаю книгу), dopełniacz -а na -ы/-и (Нет книги).',
    },
    {
      question: 'Które czasowniki wymagają dopełniacza po rosyjsku?',
      answer:
        'Częste czasowniki z dopełnieniem w dopełniaczu: бояться (bać się), ждать (czekać), желать (życzyć), избегать (unikać), достигать (osiągać), лишать (pozbawiać), касаться (dotyczyć), oraz хотеть w konstrukcjach partytywnych (хочешь чаю? — chcesz herbaty?).',
    },
    {
      question: 'Jak powiedzieć „mam” po rosyjsku?',
      answer:
        'Nie ma bezpośredniego „mieć”. Używa się У + [osoba w dopełniaczu] + есть + [rzecz]: У меня есть машина (mam samochód). Przeczenie: У меня нет машины (nie mam samochodu) — rzecz, której się nie ma, stoi w dopełniaczu po нет.',
    },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Rosyjski dopełniacz: zasady, końcówki i 32 prawdziwe przykłady',
    description:
      'Pełny przewodnik po dopełniaczu: 7 zastosowań, końcówki lp. i lm., formy nieregularne, 16 przyimków, liczby, У + dopełniacz. 32 prawdziwe przykłady z transliteracją.',
    datePublished: '2025-03-11',
    dateModified: '2025-03-11',
    author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id':
        'https://russiandeclensions.com/learn/articles/russian-genitive-case',
    },
    keywords:
      'rosyjski dopełniacz, końcówki dopełniacza, zasady dopełniacza, dopełniacz mnogi rosyjski, przykłady dopełniacza, gramatyka posiadania rosyjski',
  },
};
