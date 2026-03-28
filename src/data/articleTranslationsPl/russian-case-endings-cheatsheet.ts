import type { LearnArticle } from '../learnArticles';

export const russianCaseEndingsCheatsheetPl: LearnArticle = {
  slug: 'russian-case-endings-cheatsheet',
  title:
    'Rosyjskie końcówki przypadków: kompletna ściąga i tabela',
  metaTitle:
    'Ściąga końcówek przypadków rosyjskich | Pełna tabela deklinacji | Russian Cases with Anna',
  metaDescription:
    'Darmowa ściąga końcówek przypadków rosyjskich: tabela deklinacji rzeczowników, przymiotników, zaimków (мой, этот), przyimków według przypadku. Wszystkie 6 przypadków, tabela z kolorami. Do druku lub zakładki.',
  keywords: [
    'rosyjskie końcówki przypadków',
    'tabela przypadków rosyjskich',
    'tabela deklinacji rosyjskiej',
    'końcówki rzeczowników rosyjskich',
    'ściąga przypadków rosyjskich',
    'deklinacja przymiotników rosyjskich',
  ],
  h1: 'Rosyjskie końcówki przypadków: kompletna ściąga',
  heroImage: {
    src: '/articles/russian-cases-endings-master-chart.webp',
    alt: 'Główna tabela końcówek przypadków rosyjskich z deklinacją dla wszystkich 6 przypadków',
    width: 1200,
    height: 630,
  },
  intro:
    'Opanowanie rosyjskich końcówek przypadków to kręgosłup gramatyki rosyjskiej. Niezależnie od tego, czy dopiero zaczynasz i chcesz zrozumieć, czym są przypadki, czy jesteś na poziomie średniozaawansowanym i mylisz końcówki — ta ściąga zbiera wszystkie potrzebne tabele deklinacji w jednym miejscu.\n\nDodaj tę stronę do zakładek. Wydrukuj ją. Zrób zrzut ekranu. To zasób z tabelami deklinacji rosyjskiej, do którego będziesz wracać wielokrotnie.',
  whatYouLearn: [
    'Pełna tabela deklinacji rzeczowników (wszystkie rodzaje, liczba pojedyncza i mnoga)',
    'Tabela deklinacji przymiotników (twarda i miękka tematyczna)',
    'Deklinacja zaimków osobowych (я, ты, он, она, мы, вы, они)',
    'Deklinacja zaimków dzierżawczych (мой, наш — i jak wyprowadzić pozostałe)',
    'Zaimki wskazujące (этот / тот)',
    'Tabela przyimek → przypadek',
    'Kluczowe reguły ortograficzne wpływające na końcówki',
  ],
  leadMagnetCta: {
    title: 'Ćwicz rosyjską deklinację interaktywnie',
    description:
      'Nasza aplikacja mobilna jest zbudowana pod kątem utrwalania rosyjskich przypadków i deklinacji: inteligentne ćwiczenia, powtórki w odstępach i autentyczne przykłady rosyjskie — na Androidzie i iOS.',
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
      href: '/learn/lessons/dative-case-declension',
      label:
        'Rosyjski celownik: jak powiedzieć „do” i „dla” po rosyjsku',
    },
  ],
  sections: [
    {
      h2: 'Część 1: Końcówki przypadków rzeczowników — pełna tabela',
      content:
        'Poniższa tabela pokazuje rosyjskie końcówki rzeczowników dla **wszystkich 6 przypadków**, wszystkich rodzajów (męski, żeński, nijaki), w **liczbie pojedynczej i mnogiej**.\n\nTwarde tematy (najczęstsze) i miękkie są pokazane osobno.',
      subsections: [
        {
          h3: 'Jak czytać tę tabelę',
          content:
            '**M. twardy** = męski twardy (стол, брат). **M. miękki** = męski miękki (музей, гений). **Ż. twarda** = żeński na -а (женщина, книга). **Ż. miękka** = żeński na -я (неделя, земля). **Ż. (-ь)** = żeński z miękkim znakiem (ночь, дочь).\n\n**N. (-о)** = nijaki twardy (окно, слово). **N. (-е)** = nijaki miękki (море, поле).',
        },
      ],
      table: {
        caption: 'Końcówki rzeczowników według przypadku, rodzaju i liczby',
        boldColumnIndices: [0, 1, 2, 3, 4, 5, 6, 7],
        accentColumnIndices: [0],
        headers: [
          'Przypadek',
          'M. twardy',
          'M. miękki',
          'Ż. twarda (-а)',
          'Ż. miękka (-я)',
          'Ż. (-ь)',
          'N. (-о)',
          'N. (-е)',
        ],
        rows: [
          ['LICZBA POJEDYNCZA', '', '', '', '', '', '', ''],
          ['Mianownik', '-Ø', '-й / -ь', '-а', '-я', '-ь', '-о', '-е'],
          ['Dopełniacz', '-а', '-я', '-ы / -и', '-и', '-и', '-а', '-я'],
          ['Celownik', '-у', '-ю', '-е / -и', '-е / -и', '-и', '-у', '-ю'],
          ['Biernik (nieożyw.)', '= mian.', '= mian.', '-у', '-ю', '-ь', '= mian.', '= mian.'],
          ['Biernik (ożyw.)', '= dopeł.', '= dopeł.', '-у', '-ю', '-ь', '= mian.', '= mian.'],
          ['Narzędnik', '-ом', '-ем / -ём', '-ой / -ей', '-ей', '-ью', '-ом', '-ем'],
          ['Miejscownik', '-е', '-е / -и', '-е / -и', '-е / -и', '-и', '-е', '-е'],
          ['LICZBA MNOGA', '', '', '', '', '', '', ''],
          ['Mianownik', '-ы / -и', '-и', '-ы / -и', '-и', '-и', '-а / -я', '-я'],
          ['Dopełniacz', '-ов / -ев', '-ев / -ей', '-Ø / -ей', '-ей', '-ей', '-Ø / -ей', '-ей'],
          ['Celownik', '-ам', '-ям', '-ам', '-ям', '-ям', '-ам', '-ям'],
          [
            'Biernik',
            '= mian./dopeł.',
            '= mian./dopeł.',
            '= mian./dopeł.',
            '= mian./dopeł.',
            '= mian./dopeł.',
            '= mian./dopeł.',
            '= mian./dopeł.',
          ],
          ['Narzędnik', '-ами', '-ями', '-ами', '-ями', '-ями', '-ами', '-ями'],
          ['Miejscownik', '-ах', '-ях', '-ах', '-ях', '-ях', '-ах', '-ях'],
        ],
      },
      bullets: [
        '**Biernik ożywiony (męski):** ożywione rzeczowniki męskie przyjmują w bierniku **formę dopełniacza**. Nieożywione męskie pozostają jak w mianowniku.',
        '**Biernik w liczbie mnogiej:** nieożywione = mianownik mnogi; ożywione = dopełniacz mnogi.',
        '**Zerowa końcówka w dopełniaczu mnogim:** wiele żeńskich rzeczowników na -а ma w dopełniaczu mnogim **końcówkę zerową** (женщина → женщин). To jeden z najtrudniejszych obszarów rosyjskiej deklinacji.',
        '**Reguła 8 liter:** po **г, к, х, ж, ш, щ, ч, ц** piszemy **И**, a nie Ы (np. книги, a nie книгы).',
        '**Reguła 7 liter:** po ж, ш, щ, ч, ц w akcentowanej sylabie piszemy **А** zamiast Я, **У** zamiast Ю.',
      ],
    },
    {
      h2: 'Część 2: Tabela deklinacji przymiotników rosyjskich',
      content:
        'Rosyjskie przymiotniki muszą **zgadzać się z rzeczownikiem**, który określają, w rodzaju, liczbie i przypadku.\n\nPoniżej pełna tabela dla przymiotników o **twardym** i **miękkim** temacie.',
      subsections: [
        {
          h3: 'Twardy a miękki temat przymiotnika',
          content: 'Przymiotniki dzielą się na dwie grupy według tematu:',
          bullets: [
            '**Temat twardy** (красный, новый, старый) — mianownik M: -ый/-ой | końcówki z Ы, О, У',
            '**Temat miękki** (синий, последний, летний) — mianownik M: -ий | końcówki z И, Е, Ю',
          ],
        },
      ],
      table: {
        caption: 'Końcówki przymiotników według przypadku, rodzaju i typu tematu',
        boldColumnIndices: [0, 1, 2, 3, 4, 5],
        accentColumnIndices: [0],
        headers: [
          'Przypadek',
          'M. twardy',
          'M. miękki',
          'Ż. twarda',
          'Ż. miękka',
          'Nijaki',
          'Mnoga',
        ],
        rows: [
          ['Mianownik', '-ый/-ой', '-ий', '-ая', '-яя', '-ое', '-ые/-ие'],
          ['Dopełniacz', '-ого', '-его', '-ой', '-ей', '-ого', '-ых/-их'],
          ['Celownik', '-ому', '-ему', '-ой', '-ей', '-ому', '-ым/-им'],
          ['Bier. (nieożyw.)', '= mian.', '= mian.', '-ую', '-юю', '= mian.', '= mian.'],
          ['Bier. (ożyw.)', '= dopeł.', '= dopeł.', '-ую', '-юю', '= mian.', '= dopeł.'],
          ['Narzędnik', '-ым', '-им', '-ой/-ей', '-ей', '-ым', '-ыми/-ими'],
          ['Miejscownik', '-ом', '-ем', '-ой/-ей', '-ей', '-ом', '-ых/-их'],
        ],
      },
      bullets: [
        '**Przykład twardego** — новый (nowy): новый / нового / новому / **новый(ого)** / новым / новом',
        '**Przykład miękkiego** — синий (niebieski): синий / синего / синему / **синий(его)** / синим / синем',
        '**Przymiotniki z przeniesionym akcentem** (jak молодой): mianownik kończy się na **-ой** zamiast -ый, pozostałe końcówki jak w twardej odmianie.',
        '**Zgodność przymiotnika z rzeczownikiem:** przymiotnik **zawsze** zgadza się z rzeczownikiem. красная книга (dopeł.: красной книги) — każde słowo w wyrażeniu odmienia się razem.',
        '**Krótkie formy przymiotników:** w rosyjskim są też krótkie formy (краток, красив) używane orzecznikowo (po быть). **Nie odmieniają się** przez przypadki.',
      ],
    },
    {
      h2: 'Część 3: Deklinacja zaimków osobowych',
      content:
        'Zaimki osobowe **bardzo się zmieniają** między przypadkami — znacznie bardziej niż rzeczowniki czy przymiotniki. Trzeba je **uczyć się pojedynczo**.\n\nPoniżej pełna deklinacja wszystkich rosyjskich zaimków osobowych.',
      table: {
        boldColumnIndices: [0, 1, 2, 3, 4, 5, 6],
        accentColumnIndices: [0],
        headers: [
          'Przypadek',
          'я (ja)',
          'ты (ty)',
          'он/оно (on/ono)',
          'она (ona)',
          'мы (my)',
          'вы (wy)',
          'они (oni/one)',
        ],
        rows: [
          ['Mianownik', 'я', 'ты', 'он/оно', 'она', 'мы', 'вы', 'они'],
          ['Dopełniacz', 'меня', 'тебя', 'его', 'её', 'нас', 'вас', 'их'],
          ['Celownik', 'мне', 'тебе', 'ему', 'ей', 'нам', 'вам', 'им'],
          ['Biernik', 'меня', 'тебя', 'его', 'её', 'нас', 'вас', 'их'],
          ['Narzędnik', 'мной', 'тобой', 'им', 'ей', 'нами', 'вами', 'ими'],
          ['Miejscownik', 'мне', 'тебе', 'нём', 'ней', 'нас', 'вас', 'них'],
        ],
      },
      bullets: [
        '**Reguła przedrostka Н-:** gdy zaimek trzeciej osoby (он, она, оно, они) stoi po przyimku, dodaje się **Н-**: у него (nie у его), к ней (nie к ей), с ними (nie с ими).',
        '**Dopełniacz = biernik** dla zaimków osobowych: меня, тебя, его, её, нас, вас, их są **identyczne** w obu przypadkach.',
        '**Formy z przyimkiem о/об:** обо мне, о тебе, о нём, о ней, о нас, о вас, о них.',
      ],
    },
    {
      h2: 'Część 4: Zaimki dzierżawcze (мой, наш)',
      content:
        'Zaimki dzierżawcze w rosyjskim też odmieniają się przez przypadek, rodzaj i liczbę. Tabela obejmuje **мой** (mój) i **наш** (nasz) — dwa najbardziej nieregularne i najważniejsze zestawy.\n\nPozostałe mają podobne wzorce: **твой** (twój) — jak мой. **ваш** (wasz) — jak наш. **его / её / их** (jego / jej / ich) — **nie odmieniają się**! Pozostają niezmienione we wszystkich przypadkach.',
      table: {
        caption: 'Pełna deklinacja мой i наш',
        boldColumnIndices: [0, 1, 2, 3, 4],
        accentColumnIndices: [0],
        headers: ['Przypadek', 'Męski', 'Nijaki', 'Żeński', 'Mnoga'],
        rows: [
          ['МОЙ — mój', '', '', '', ''],
          ['Mianownik', 'мой', 'моё', 'моя', 'мои'],
          ['Dopełniacz', 'моего', 'моего', 'моей', 'моих'],
          ['Celownik', 'моему', 'моему', 'моей', 'моим'],
          ['Bier. (nieożyw.)', 'мой', 'моё', 'мою', 'мои'],
          ['Bier. (ożyw.)', 'моего', 'моё', 'мою', 'моих'],
          ['Narzędnik', 'моим', 'моим', 'моей', 'моими'],
          ['Miejscownik', 'моём', 'моём', 'моей', 'моих'],
          ['НАШ — nasz', '', '', '', ''],
          ['Mianownik', 'наш', 'наше', 'наша', 'наши'],
          ['Dopełniacz', 'нашего', 'нашего', 'нашей', 'наших'],
          ['Celownik', 'нашему', 'нашему', 'нашей', 'нашим'],
          ['Bier. (nieożyw.)', 'наш', 'наше', 'нашу', 'наши'],
          ['Bier. (ożyw.)', 'нашего', 'наше', 'нашу', 'наших'],
          ['Narzędnik', 'нашим', 'нашим', 'нашей', 'нашими'],
          ['Miejscownik', 'нашем', 'нашем', 'нашей', 'наших'],
        ],
      },
    },
    {
      h2: 'Część 5: Zaimki wskazujące (этот / тот)',
      content:
        '**Этот** (ten) i **тот** (tamten) to zaimki wskazujące pełniące też funkcję determinantów.\n\nOdmieniają się przez **przypadek, rodzaj i liczbę** i są bardzo częste w mówionym rosyjskim.',
      table: {
        boldColumnIndices: [0, 1, 2, 3, 4, 5, 6],
        accentColumnIndices: [0],
        headers: [
          'Przypadek',
          'этот (M)',
          'это (N)',
          'эта (Ż)',
          'эти (lm.)',
          'тот (M) / та (Ż)',
          'те (lm.)',
        ],
        rows: [
          ['Mianownik', 'этот', 'это', 'эта', 'эти', 'тот / та', 'те'],
          ['Dopełniacz', 'этого', 'этого', 'этой', 'этих', 'того / той', 'тех'],
          ['Celownik', 'этому', 'этому', 'этой', 'этим', 'тому / той', 'тем'],
          ['Bier. (nieożyw.)', 'этот', 'это', 'эту', 'эти', 'тот / ту', 'те'],
          ['Bier. (ożyw.)', 'этого', 'это', 'эту', 'этих', 'того / ту', 'тех'],
          ['Narzędnik', 'этим', 'этим', 'этой', 'этими', 'тем / той', 'теми'],
          ['Miejscownik', 'этом', 'этом', 'этой', 'этих', 'том / той', 'тех'],
        ],
      },
    },
    {
      h2: 'Część 6: Przyimki → przypadek (szybki przegląd)',
      content:
        'Tabela przypisuje główne rosyjskie przyimki do **wymaganego przypadku**.\n\nUczenie przyimków **razem z przypadkiem** jest kluczowe — eliminuje jedno z największych źródeł błędów.',
      subsections: [
        {
          h3: 'Ważne: В i НА mają dwa przypadki',
          content:
            '**в / на + biernik** = **kierunek** (ruch w stronę miejsca). **в / на + miejscownik** = **położenie** (bycie w miejscu).\n\nPrzykład: Я иду в школу. (idę → biernik) vs. Я в школе. (jestem tam → miejscownik).',
        },
      ],
      table: {
        boldColumnIndices: [0, 1],
        accentColumnIndices: [0],
        headers: ['Przypadek', 'Przyimki', 'Przykłady'],
        rows: [
          [
            'Dopełniacz',
            'без, до, из, у, от, после, для, кроме, вокруг, вместо, мимо',
            'из России, без воды, после урока',
          ],
          [
            'Celownik',
            'к, по, благодаря, вопреки, согласно, навстречу',
            'к другу, по улице, благодаря тебе',
          ],
          [
            'Biernik',
            'в, на (kierunek), за, через, под (ruch), про, о (uderzenie)',
            'в школу, на работу, через час',
          ],
          [
            'Narzędnik',
            'с, за (położenie), над, под (położenie), перед, между, рядом с',
            'с другом, над столом, перед домом',
          ],
          [
            'Miejscownik',
            'в, на (miejsce), о/об, при, по (po niektórych czasownikach)',
            'в Москве, о работе, при советах',
          ],
        ],
      },
    },
    {
      h2: 'Część 7: Siedem reguł ortograficznych wpływających na końcówki',
      content:
        'Rosyjskie reguły ortograficzne mogą **nadpisać** oczekiwaną końcówkę.\n\nKażdy uczeń powinien je znać — wyjaśniają, czemu niektóre rzeczowniki i przymiotniki **nie trzymają się** standardowego schematu.',
      subsections: [
        {
          h3: 'Reguła 1: 8 liter (К, Г, Х, Ж, Ш, Щ, Ч, Ц)',
          content:
            'Po **г, к, х, ж, ш, щ, ч, ц** zawsze piszemy **И** zamiast Ы. книга → книги (nie книгы), ручка → ручки (nie ручкы).\n\nDotyczy m.in. mianownika mnogiego, dopełniacza liczby pojedynczej żeńskiej i końcówek przymiotników.',
        },
        {
          h3: 'Reguła 2: Reguła 7 liter (Ж, Ш, Щ, Ч, Ц — samogłoski pod akcentem)',
          content:
            'Po ж, ш, щ, ч, ц piszemy **А** zamiast Я, **У** zamiast Ю (w akcentowanej sylabie); **Е** zamiast О w bezakcentowej.\n\nNarzędnik liczby pojedynczej żeńskiej: большой → большой (akcentowane **-ой** jest poprawne), ale тушь → **тушью**. Reguła współdziała z **-ом/-ем** u nijakich.',
        },
        {
          h3: 'Reguła 3: Uciekinierzy samogłosek',
          content:
            'Niektóre rzeczowniki **tracą samogłoskę** (о lub е) przy odmianie — to **uciekinier** (беглая гласная).\n\nотец → отца (е znika). день → дня (е znika). лёд → льда (е/ё znika).',
        },
        {
          h3: 'Reguła 4: Zachowanie miękkiego znaku ь',
          content:
            'Żeńskie rzeczowniki na **-ь** nie gubią miękkiego znaku przed końcówką — łączy się z końcówką.\n\nночь → **ночи** (dopeł./cel./miejsc.), **ночью** (narzędnik). **-ью** w narzędniku charakteryzuje te rzeczowniki.',
        },
        {
          h3: 'Reguła 5: Miejscownik na -У (pozostałość miejscownika lokalnego)',
          content:
            'Mała grupa rzeczowników męskich ma nieregularną końcówkę **-у/-ю** w miejscowniku przy znaczeniu **miejsca** (nie tematu). **в лесу** (w lesie) — nie в лесе. **в году** (w roku). **на берегу** (na brzegu). **на полу** (na podłodze).\n\nTylko z в/на + miejsce. Z О zwykłe -е: о лесе (o lesie).',
        },
      ],
    },
    {
      h2: 'Jak skutecznie korzystać z tej ściągi',
      subsections: [
        {
          h3: 'Krok 1 — Zacznij od rzeczowników',
          content:
            '**Tabela rzeczowników** to fundament. Opanuj ją najpierw. Skup się na najczęstszych wzorach: **męski twardy** (-стол), **żeński twardy** (-книга), **nijaki twardy** (-окно).\n\nPokrywają większość rosyjskich rzeczowników.',
        },
        {
          h3: 'Krok 2 — Potem przymiotniki',
          content:
            'Gdy znasz końcówki rzeczowników, przymiotniki stają się łatwiejsze — logika jest podobna.\n\nNajpierw **twarde przymiotniki** (новый), potem **miękkie** (синий).',
        },
        {
          h3: 'Krok 3 — Zaimki osobno',
          content:
            '**Formy zaimków są nieregularne** i uczą się indywidualnie. Nie podążają za wzorcem rzeczowników ani przymiotników.\n\nUżyj fiszek lub aplikacji z powtórkami w odstępach.',
        },
        {
          h3: 'Krok 4 — Przyimki ustalają przypadek',
          content:
            'Przyimki to **najszybszy skrót** do poprawnego przypadku: jeśli wiesz, że **без** zawsze wymaga dopełniacza, a **к** celownika, przypadek jest już wybrany.\n\n**Pary przyimek → przypadek** stawiaj na pierwszym miejscu.',
        },
        {
          h3: 'Krok 5 — Prawdziwe zdania',
          content:
            'Same tabele nie wystarczą. Po przećwiczeniu końcówek używaj ich w **prawdziwych rosyjskich zdaniach**.\n\nCzytaj, słuchaj i zwracaj uwagę, jak native speakerzy używają form w kontekście.',
        },
      ],
    },
  ],
  conclusion:
    'Ta ściąga z rosyjskimi końcówkami przypadków obejmuje **wszystko, czego potrzebujesz**: **wszystkie 6 przypadków** dla rzeczowników (wszystkie rodzaje, liczba pojedyncza i mnoga), przymiotniki (twarde i miękkie tematy), zaimki osobowe i dzierżawcze, wskazujące oraz pary przyimek–przypadek.\n\n**Trzymaj tę ściągę pod ręką** podczas nauki. Im częściej będziesz jej używać przy prawdziwej praktyce rosyjskiej, tym szybciej końcówki przejdą ze świadomej pamięci do automatycznego rozpoznawania.',
  conclusionOutro:
    'Pełne wyjaśnienia, co oznacza każdy przypadek i jak go używać, znajdziesz w naszych przewodnikach:',
  ctaText: 'Ćwicz rosyjskie przypadki w naszej aplikacji',
  ctaHref: '/',
  faq: [
    {
      question: 'Która rosyjska końcówka przypadku jest najtrudniejsza do nauki?',
      answer:
        '**Dopełniacz mnogi** bywa uznawany za najtrudniejszy: w zależności od klasy rzeczownika występuje kilka konkurujących form. Żeńskie na -а często mają **końcówkę zerową** (женщина → женщин), inne dodają **-ей** (ночь → ночей) lub **-ов/-ев** (niektóre męskie).',
    },
    {
      question: 'Czy rosyjskie przymiotniki zawsze zgadzają się z rzeczownikiem?',
      answer:
        'Tak, **zawsze**. Rosyjski przymiotnik musi **zgadzać się** z rzeczownikiem w rodzaju, liczbie i przypadku. Jeśli rzeczownik zmienia końcówkę, przymiotnik też musi się zmienić. To **zgodność gramatyczna** — w rosyjskim obowiązkowa.',
    },
    {
      question: 'Czy są rosyjskie rzeczowniki, które w ogóle się nie odmieniają?',
      answer:
        'Tak. Mały zbiór **nieodmiennych zapożyczeń** (несклоняемые существительные) pozostaje niezmienny: **кофе**, **метро**, **пальто**, **такси**, **кино**. To wyjątki od systemu przypadków.',
    },
    {
      question: 'Skąd wiem, czy rzeczownik jest ożywiony czy nieożywiony?',
      answer:
        '**Ożywione:** ludzie i zwierzęta (человек, кот, студент, врач). **Nieożywione:** przedmioty, pojęcia, abstrakcje (стол, книга, любовь, время). Gramatyka rosyjska czasem uznaje za ożywione rzeczy, których polski uczeń by się nie spodziewał — np. niektóre figury w grach.',
    },
    {
      question: 'Jaka jest różnica między dopełniaczem a biernikiem przy rzeczownikach ożywionych?',
      answer:
        'Dla **ożywionych męskich** forma biernika jest **identyczna** z dopełniaczem — reguła **biernik ożywiony = dopełniacz**. Przykład: студент → студента (dopeł.) = студента (bier.). Który to przypadek, widać tylko ze struktury zdania.',
    },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Rosyjskie końcówki przypadków: kompletna ściąga',
    description:
      'Kompletna ściąga: tabele rzeczowników i przymiotników, zaimki, przyimki według przypadku. Wszystkie 6 przypadków w jednej tabeli.',
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
      'rosyjskie końcówki przypadków, tabela deklinacji rosyjskiej, ściąga przypadków, rosyjskie zaimki, przyimki i przypadki',
  },
};
