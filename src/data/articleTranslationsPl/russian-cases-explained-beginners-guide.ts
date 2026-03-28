import type { LearnArticle } from '../learnArticles';

/** Tłumaczenie polskie artykułu `russian-cases-explained-beginners-guide` (źródło EN: `learnArticles.ts`). Cyrylica skopiowana znak w znak. */
export const russianCasesExplainedBeginnersGuidePl: LearnArticle = {
  slug: 'russian-cases-explained-beginners-guide',
  title:
    'Rosyjskie przypadki prosto: wizualny przewodnik dla początkujących',
  metaTitle:
    'Rosyjskie przypadki prosto: wizualny przewodnik dla początkujących | Russian Cases with Anna',
  metaDescription:
    '6 rosyjskich przypadków gramatycznych wyjaśnionych prostym językiem z jasnymi przykładami. Mianownik, biernik, dopełniacz, celownik, narzędnik i miejscownik w 10 minut.',
  keywords: [
    'rosyjskie przypadki wyjaśnienie',
    'rosyjskie przypadki początkujący',
    'rosyjskie przypadki gramatyczne prosto',
    'zrozumieć rosyjskie przypadki',
    'przykłady rosyjskich przypadków',
    '6 rosyjskich przypadków',
  ],
  h1: 'Rosyjskie przypadki prosto: wizualny przewodnik dla początkujących',
  heroImage: {
    src: '/articles/top-10-apps-to-learn-russian-2026.webp',
    alt: '6 rosyjskich przypadków prosto wyjaśnionych dla początkujących',
    width: 1200,
    height: 630,
  },
  intro:
    'Rosyjski ma **6 przypadków gramatycznych** — to największa przeszkoda dla osób znających angielski. Ale jest dobra wiadomość: przypadki nie są tak straszne, jak się wydaje. Każdy przypadek odpowiada na proste pytanie, a gdy zrozumiesz, **do czego służy każdy przypadek**, końcówki staną się znacznie łatwiejsze do opanowania.\n\nTen przewodnik wyjaśnia wszystkie **6 przypadków rosyjskich** **prostym językiem polskim**, z jednym jasnym przykładem dla każdego. Bez żargonu językoznawczego, bez przytłaczających tabel — tylko to, co niezbędne na start.',
  whatYouLearn: [
    '**Czym jest przypadek gramatyczny** i dlaczego rosyjski go używa',
    '**Wszystkie 6 przypadków** z jednym prostym przykładem każdy',
    '**Które przypadki warto uczyć się najpierw** (kolejność dla początkujących)',
    '**Jak zmieniają się końcówki rzeczowników** — uproszczony przegląd',
    '**Gdzie ćwiczyć** — darmowy quiz i zasoby',
  ],
  leadMagnetCta: {
    title: 'Gotowy na ćwiczenie rosyjskich przypadków?',
    description:
      'Pobierz Russian Cases with Anna — jedyną aplikację w 100% poświęconą opanowaniu rosyjskiej deklinacji. 128 lekcji, 136 quizów, ponad 400 słów. Za darmo na iOS i Android.',
    ctaText: 'Pobierz aplikację — Za darmo',
    ctaHref: '/',
  },
  sections: [
    {
      h2: 'Czym jest przypadek gramatyczny?',
      content:
        'Po angielsku **kolejność słów** mówi, kto robi co w zdaniu. „The dog bites the man” i „The man bites the dog” znaczą coś zupełnie innego — podmiot zawsze jest na początku.\n\nRosyjski działa inaczej. Zamiast polegać na szyku, rosyjski zmienia **końcówkę słowa**, by pokazać jego rolę w zdaniu. Te różne końcówki to **przypadki**.\n\nWyobraź sobie: po angielsku mówisz „**I** see **him**” (nie „me see he”). Słowa „I/me” i „he/him” zmieniają formę w zależności od roli. Rosyjski robi to samo — ale dla **każdego rzeczownika, przymiotnika i zaimka** w języku.\n\nW rosyjskim jest **6 przypadków**. Każdy odpowiada na konkretne pytanie i oznacza konkretną rolę gramatyczną.',
    },
    {
      h2: '6 przypadków rosyjskich w skrócie',
      content:
        'Zanim przejdziemy do każdego przypadku, krótki przegląd. Każdy przypadek odpowiada na pytanie i odpowiednio zmienia końcówkę rzeczownika:',
      table: {
        headers: ['Przypadek', 'Nazwa rosyjska', 'Pytanie', 'Przykład'],
        rows: [
          ['Mianownik', 'Именительный', 'Kto? Co?', 'Кошка спит — Kot śpi'],
          [
            'Biernik',
            'Винительный',
            'Kogo? Co? (dopełnienie)',
            'Я вижу кошку — Widzę kota',
          ],
          [
            'Dopełniacz',
            'Родительный',
            'Kogo? Czego?',
            'Нет кошки — Nie ma kota',
          ],
          ['Celownik', 'Дательный', 'Komu? Dla kogo?', 'Дай кошке — Daj kotu'],
          [
            'Narzędnik',
            'Творительный',
            'Z kim? Czym?',
            'С кошкой — Z kotem',
          ],
          [
            'Miejscownik',
            'Предложный',
            'O kim? Gdzie?',
            'О кошке — O kocie',
          ],
        ],
        caption:
          '6 przypadków rosyjskich z pytaniami i przykładami z кошка (kot)',
        accentColumnIndices: [3],
      },
      bullets: [
        'Zwróć uwagę, jak słowo **кошка** (kot) zmienia końcówkę w każdym przypadku: кошка → кошку → кошки → кошке → кошкой → кошке',
        'Taki schemat końcówek nazywa się **deklinacją** — każdy rosyjski rzeczownik podąża jedną z nich',
      ],
    },
    {
      h2: 'Przypadek 1: mianownik (Именительный) — podmiot',
      content:
        'Mianownik to **forma podstawowa** słowa — ta ze słownika. Odpowiada na pytania **Кто? (Kto?)** i **Что? (Co?)**.\n\nMianownika używasz dla **podmiotu** zdania — osoby lub rzeczy wykonującej czynność.',
      subsections: [
        {
          h3: 'Przykłady',
          content:
            '**Мама** готовит ужин — **Mama** gotuje kolację\n\n**Книга** лежит на столе — **Książka** leży na stole\n\n**Студент** читает — **Student** czyta',
        },
      ],
      bullets: [
        'Mianownik to **najłatwiejszy przypadek** — bez zmiany końcówek',
        'Każde rosyjskie zdanie ma co najmniej jeden rzeczownik w mianowniku',
        'To forma, którą już znasz z list słówek',
      ],
    },
    {
      h2: 'Przypadek 2: biernik (Винительный) — dopełnienie bliższe',
      content:
        'Biernik odpowiada na **Кого? (Kogo?)** i **Что? (Co?)** — ale tym razem jako **dopełnienie** czynności, nie podmiot. Oznacza to, na czym skupia się działanie.\n\nBiernika używa się też z **czasownikami ruchu**, by wskazać kierunek (pójście **do** jakiegoś miejsca).',
      subsections: [
        {
          h3: 'Przykłady',
          content:
            'Я вижу **маму** — Widzę **mamę** (мама → маму)\n\nОн читает **книгу** — On czyta **książkę** (книга → книгу)\n\nМы идём **в школу** — Idziemy **do szkoły** (школа → школу)',
        },
      ],
      bullets: [
        'Dla **rzeczowników żeńskich** -а zmienia się w **-у** (мама → маму)',
        'Dla **męskich nieżywotnych** biernik wygląda jak mianownik (стол → стол)',
        'Dla **męskich żywotnych** biernik wygląda jak dopełniacz (студент → студента)',
      ],
    },
    {
      h2: 'Przypadek 3: dopełniacz (Родительный) — posiadanie i brak',
      content:
        'Dopełniacz odpowiada na **Кого? (Kogo?)** i **Чего? (Czego?)**. To przypadek **posiadania** (jak angielskie „of” lub „’s”), **braku** (nie ma…), **ilości**.\n\nTo jeden z najczęściej używanych przypadków w rosyjskim — spotkasz go wszędzie.',
      subsections: [
        {
          h3: 'Przykłady',
          content:
            'Книга **мамы** — Książka **mamy** (мама → мамы)\n\nНет **воды** — Nie ma **wody** (вода → воды)\n\nСтакан **молока** — Szklanka **mleka** (молоко → молока)\n\nУ **студента** есть книга — **Student** ma książkę (студент → студента)',
        },
      ],
      bullets: [
        'Dla **rzeczowników żeńskich** -а zmienia się w **-ы** lub **-и** (мама → мамы, книга → книги)',
        'Dla **rzeczowników męskich** dodaje się **-а** lub **-я** (студент → студента, учитель → учителя)',
        'Używany po **liczbach 2–4** i po **нет** (przeczenie)',
      ],
    },
    {
      h2: 'Przypadek 4: celownik (Дательный) — dopełnienie dalsze',
      content:
        'Celownik odpowiada na **Кому? (Komu?)** i **Чему? (Czemu?)**. Oznacza **odbiorcę** czynności — osobę, której coś się daje, mówi lub dla której coś się robi.\n\nCelownik występuje też w popularnych wyrażeniach o **wiek** i **uczucia**.',
      subsections: [
        {
          h3: 'Przykłady',
          content:
            'Я дал книгу **маме** — Dałem książkę **mamie** (мама → маме)\n\n**Мне** 25 лет — **Mam** 25 lat (я → мне)\n\n**Студенту** нужна помощь — **Student** potrzebuje pomocy (студент → студенту)',
        },
      ],
      bullets: [
        'Dla **rzeczowników żeńskich** -а zmienia się w **-е** (мама → маме)',
        'Dla **rzeczowników męskich** dodaje się **-у** lub **-ю** (студент → студенту)',
        'Używany w wyrażeniach wieku: **Мне** 20 лет (dosłownie: „mnie 20 lat”)',
      ],
    },
    {
      h2: 'Przypadek 5: narzędnik (Творительный) — narzędzie i towarzystwo',
      content:
        'Narzędnik odpowiada na **Кем? (Z kim? / Przez kogo?)** i **Чем? (Czym?)**. Opisuje **narzędzie lub sposób** wykonania czynności oraz **towarzystwo** (z kimś).\n\nUżywa się go też po czasowniku **быть** przy zawodach.',
      subsections: [
        {
          h3: 'Przykłady',
          content:
            'Я пишу **ручкой** — Piszę **długopisem** (ручка → ручкой)\n\nОна работает **учительницей** — Pracuje **jako nauczycielka** (учительница → учительницей)\n\nЯ иду **с мамой** — Idę **z mamą** (мама → мамой)',
        },
      ],
      bullets: [
        'Dla **rzeczowników żeńskich** -а zmienia się w **-ой** lub **-ей** (мама → мамой, земля → землёй)',
        'Dla **rzeczowników męskich** dodaje się **-ом** lub **-ем** (студент → студентом)',
        'Zawsze po przyimku **с** (z) przy towarzystwie',
      ],
    },
    {
      h2: 'Przypadek 6: miejscownik (Предложный) — miejsce i temat',
      content:
        'Miejscownik odpowiada na **О ком? (O kim?)** i **О чём? (O czym?)**. Jak sama nazwa wskazuje, **zawsze występuje z przyimkiem** — najczęściej **в** (w), **на** (na/przy) i **о** (o).\n\nTo jedyny rosyjski przypadek, który nigdy nie występuje bez przyimka.',
      subsections: [
        {
          h3: 'Przykłady',
          content:
            'Я живу **в Москве** — Mieszkam **w Moskwie** (Москва → Москве)\n\nОн думает **о маме** — Myśli **o mamie** (мама → маме)\n\nКнига **на столе** — Książka jest **na stole** (стол → столе)',
        },
      ],
      bullets: [
        'Dla **rzeczowników żeńskich** -а zmienia się w **-е** (мама → маме, Москва → Москве)',
        'Dla **rzeczowników męskich** dodaje się **-е** (стол → столе, студент → студенте)',
        'Miejscownik i celownik często mają **identyczne końcówki** — kontekst je rozróżnia',
      ],
    },
    {
      h2: 'Które przypadki uczyć się najpierw?',
      content:
        'Nie musisz opanować wszystkich 6 przypadków naraz. Oto zalecana **kolejność nauki** według częstości i trudności:',
      bullets: [
        '**1. Mianownik** — Ten już znasz (forma ze słownika)',
        '**2. Biernik** — Niezbędny do prostych zdań („Jem chleb”, „Widzę psa”)',
        '**3. Dopełniacz** — Bardzo częsty (posiadanie, przeczenie, ilości)',
        '**4. Miejscownik** — Stosunkowo łatwy (zawsze z przyimkiem, proste końcówki)',
        '**5. Celownik** — Rzadszy, ale ważny (dopełnienia dalsze, wiek)',
        '**6. Narzędnik** — Najrzadszy w mowie potocznej, ale nadal niezbędny',
      ],
    },
    {
      h2: 'Zacznij ćwiczyć już teraz',
      content:
        'Zrozumienie przypadków to pierwszy krok. Kolejny to **aktywna praktyka** — wielokrotne oglądanie i wybór poprawnych form, aż stanie się to automatyczne.\n\nJak zacząć:\n\n• Zrób nasz **darmowy quiz deklinacji online** na russiandeclensions.com/practice — wybierz przypadki do ćwiczenia i odpowiedz na 10 pytań wielokrotnego wyboru spośrod ponad 400 prawdziwych rosyjskich rzeczowników.\n\n• Przejrzyj nasze **pełne tabele deklinacji** na russiandeclensions.com/words — zobacz, jak każde słowo zmienia się we wszystkich 6 przypadkach.\n\n• Pobierz aplikację **Russian Cases with Anna** ze strukturalnymi lekcjami gramatyki, interaktywnymi quizami, powtórkami w odstępach i dostępem offline.',
    },
  ],
  conclusion:
    'Rosyjskie przypadki to po prostu **etykiety ról słów** w zdaniu. Mianownik to ten, kto działa, biernik to cel działania, dopełniacz pokazuje posiadanie, celownik oznacza odbiorcę, narzędnik opisuje środek, a miejscownik miejsce lub temat.\n\nGdy zrozumiesz, **co oznacza każdy przypadek**, nauka końcówek staje się kwestią rozpoznawania wzorców i praktyki. Nie próbuj zapamiętywać wszystkich końcówek naraz — ucz się jednego przypadku na raz, ćwicz, aż poczujesz się pewnie, potem przejdź do następnego.',
  conclusionBullets: [
    '**6 przypadków, 6 ról** — każdy przypadek odpowiada na konkretne pytanie',
    '**Zacznij od biernika i dopełniacza** — dwa najczęstsze po mianowniku',
    '**Ćwicz na prawdziwych słowach** — korzystaj z naszego quizu i tabel deklinacji',
    '**Jeden przypadek na raz** — nie przytłaczaj się wszystkimi 6 naraz',
    '**Regularność wygrywa** — 10 minut dziennie lepsze niż 2 godziny raz w tygodniu',
  ],
  conclusionOutro:
    'Poznaj każdy przypadek dokładniej w naszych szczegółowych przewodnikach:',
  internalLinks: [
    {
      href: '/learn/lessons/russian-cases-complete-guide',
      label:
        'Pełny przewodnik po rosyjskich przypadkach — wszystkie 6 dogłębnie',
    },
    {
      href: '/learn/articles/russian-case-endings-cheatsheet',
      label:
        'Ściągawka końcówek przypadków rosyjskich — wszystkie końcówki w jednej tabeli',
    },
    {
      href: '/practice/accusative',
      label: 'Ćwicz biernik — darmowy quiz',
    },
    {
      href: '/practice/genitive',
      label: 'Ćwicz dopełniacz — darmowy quiz',
    },
    {
      href: '/words',
      label: 'Przeglądaj ponad 400 rosyjskich słów — pełne tabele deklinacji',
    },
  ],
  ctaText: 'Zacznij ćwiczyć rosyjskie przypadki',
  ctaHref: '/practice',
  faq: [
    {
      question: 'Ile przypadków ma rosyjski?',
      answer:
        'Rosyjski ma **6 przypadków gramatycznych**: mianownik (Именительный), biernik (Винительный), dopełniacz (Родительный), celownik (Дательный), narzędnik (Творительный) i miejscownik (Предложный). Każdy przypadek zmienia końcówki rzeczowników, przymiotników i zaimków, by pokazać ich rolę w zdaniu.',
    },
    {
      question: 'Który rosyjski przypadek jest najtrudniejszy?',
      answer:
        'Większość uczących się uważa **dopełniacz** za najtrudniejszy, bo ma najwięcej zastosowań (posiadanie, brak, ilości, po liczbach, po wielu przyimkach) i nieregularne końcówki liczby mnogiej. Każdy przypadek ma jednak swoje wyzwania w zależności od języka ojczystego.',
    },
    {
      question: 'Czy naprawdę muszę nauczyć się wszystkich 6 przypadków?',
      answer:
        'Tak — wszystkie 6 przypadków jest aktywnie używanych we współczesnym rosyjskim. Bez nich nie zbudujesz poprawnych zdań. Nie musisz jednak uczyć się ich wszystkich naraz. Zacznij od **mianownika** i **biernika**, potem stopniowo dodawaj kolejne.',
    },
    {
      question: 'Który rosyjski przypadek jest najłatwiejszy?',
      answer:
        '**Mianownik** jest najłatwiejszy, bo to forma ze słownika — bez zmiany końcówek. Potem **miejscownik** bywa uważany za najłatwiejszy, bo zawsze występuje z przyimkiem i ma stosunkowo proste, spójne końcówki (-е u większości rzeczowników).',
    },
    {
      question: 'Jak długo trwa nauka rosyjskich przypadków?',
      answer:
        'Przy regularnej codziennej praktyce większość uczących się rozumie podstawy wszystkich 6 przypadków w **kilka tygodni** i swobodnie używa ich w prostych zdaniach w ciągu **3–6 miesięcy**. Pełne opanowanie (wszystkie formy nieregularne i deklinacja liczby mnogiej) zwykle zajmuje **1–2 lata** regularnej nauki.',
    },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      'Rosyjskie przypadki prosto: wizualny przewodnik dla początkujących',
    description:
      '6 rosyjskich przypadków gramatycznych wyjaśnionych prostym językiem z jasnymi przykładami. Mianownik, biernik, dopełniacz, celownik, narzędnik i miejscownik w przystępnej formie.',
    datePublished: '2026-03-22',
    dateModified: '2026-03-22',
    author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id':
        'https://russiandeclensions.com/learn/articles/russian-cases-explained-beginners-guide',
    },
    keywords:
      'rosyjskie przypadki wyjaśnienie, rosyjskie przypadki początkujący, 6 rosyjskich przypadków, rosyjskie przypadki gramatyczne prosto, zrozumieć rosyjskie przypadki',
  },
};
