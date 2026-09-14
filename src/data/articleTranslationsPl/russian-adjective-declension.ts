import type { LearnArticle } from '../learnArticles';

/** Polskie tłumaczenie artykułu `russian-adjective-declension` (źródło angielskie: `learnArticles.ts`). */
export const russianAdjectiveDeclensionPl: LearnArticle = {
  slug: 'russian-adjective-declension',
  introByline: {
    text: '**Napisane przez Nathana** — native speaker francuskiego uczący się rosyjskiego; dzielę się tym, co naprawdę działa w gramatyce, przypadkach i codziennej praktyce.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, założyciel Russian Cases with Anna',
    imageWidth: 256,
    imageHeight: 256,
  },
  title: 'Odmiana przymiotników rosyjskich: tabela końcówek dla wszystkich 6 przypadków',
  metaTitle: 'Końcówki przymiotników rosyjskich | Russian Cases with Anna',
  metaDescription:
    'Pełna tabela końcówek przymiotników rosyjskich: tematy twarde i miękkie, 6 przypadków, biernik żywotny, formy krótkie i dzierżawcze — z prawdziwymi przykładami.',
  keywords: [
    'końcówki przymiotników rosyjskich',
    'odmiana przymiotników rosyjskich',
    'zgoda przymiotnika po rosyjsku',
    'tematy twarde i miękkie przymiotników rosyjskich',
    'tabela przypadków przymiotników rosyjskich',
    'formy krótkie przymiotników rosyjskich',
    'przymiotniki dzierżawcze rosyjskie',
    'odmieniać przymiotniki rosyjskie',
  ],
  h1: 'Odmiana przymiotników rosyjskich: tabela końcówek dla wszystkich 6 przypadków',
  heroImage: {
    src: '/articles/russian-adjective-declension-header.webp',
    alt: 'Notatnik z przykładami zgody przymiotników rosyjskich новый новая новое dla końcówek przypadków',
    width: 1280,
    height: 720,
  },
  intro:
    'Rzeczowniki zbierają większość uwagi, gdy uczących się mówi o rosyjskich przypadkach — ale **przymiotniki też się odmieniają** i za każdym razem muszą zgadzać się z rzeczownikiem w **rodzaju, liczbie i przypadku**. Pudło z końcówką sprawia, że zdanie brzmi źle, nawet gdy sam rzeczownik jest idealny.\n\nDobra wiadomość: końcówki przymiotników są **bardziej regularne niż końcówki rzeczowników**. Gdy poznasz wzorzec tematu twardego (`новый`) i miękkiego (`синий`), możesz odmieniać tysiące przymiotników. Ten przewodnik daje pełne tabele, regułę biernika żywotnego/nieżywotnego, formy krótkie, dzierżawcze oraz błędy, które najczęściej łapią uczących się z polskim w tle.',
  whatYouLearn: [
    'Co oznacza zgoda przymiotnika rosyjskiego (rodzaj × liczba × przypadek)',
    'Pełna tabela tematów twardych z `новый`',
    'Pełna tabela tematów miękkich z `синий`',
    'Jak żywotność zmienia biernik',
    'Pełne grupy rzeczownik + przymiotnik w 6 przypadkach',
    'Formy krótkie (orzecznikowe) vs formy długie',
    'Przymiotniki dzierżawcze: `мой`, `наш`, `свой`',
    '8 typowych błędów — i jak je naprawić',
  ],
  leadMagnetCta: {
    title: 'Ćwicz zgodę przymiotnik + rzeczownik we wszystkich 6 przypadkach',
    description:
      'Russian Cases with Anna trenuje końcówki, które dzielą przymiotniki i rzeczowniki — z powtórkami rozłożonymi w czasie, prawdziwymi zdaniami i natychmiastową informacją zwrotną. Za darmo na iOS i Android.',
    ctaText: 'Pobierz aplikację i zacznij ćwiczyć już dziś',
    ctaHref: '/',
  },
  tableAccentVariant: 'nominative',
  sections: [
    {
      h2: 'Co oznacza zgoda przymiotnika rosyjskiego',
      content:
        'Po polsku przymiotniki też się odmieniają, ale w rosyjskim muszą również podążać za **przypadkiem** rzeczownika. Jeśli rzeczownik jest w dopełniaczu żeńskim liczby pojedynczej, przymiotnik też musi być.\n\nTa potrójna zgoda — **rodzaj × liczba × przypadek** — to cała robota odmiany przymiotników.',
      table: {
        headers: ['Grupa nominalna', 'Rodzaj / liczba / przypadek', 'Polski'],
        rows: [
          ['новый дом', 'r.m. lp. mianownik', 'nowy dom'],
          ['новой книги', 'r.ż. lp. dopełniacz', 'nowej książki'],
          ['новым окнам', 'r.n. lm. celownik', 'nowym oknom'],
          ['о синих глазах', 'lm. miejscownik', 'o niebieskich oczach'],
        ],
        caption: 'Końcówka przymiotnika zawsze odzwierciedla gramatykę rzeczownika',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Najpierw naucz się **rodzaju rzeczownika** — bez niego nie wybierzesz właściwej końcówki przymiotnika (zob. nasz [przewodnik po rodzaju](/learn/articles/russian-noun-gender-guide)).',
        'Przymiotniki odpowiadają na te same pytania przypadków co rzeczowniki: **какой? какая? какое? какие?** oraz odmienione formy tych pytań.',
        'Reguły pisowni nadal obowiązują: po **г, к, х, ж, ш, щ, ч, ц** rosyjski w wielu końcówkach woli **и** zamiast **ы** — stąd **хороший**, a nie *хорошый*.',
      ],
    },
    {
      h2: 'Tabela końcówek tematów twardych (новый)',
      content:
        'Przymiotniki o temacie twardym to wzorzec domyślny. W mianowniku rodzaju męskiego zwykle kończą się na **-ый** (новый, красный) lub akcentowane **-ой** (молодой, большой). Wszystkie pozostałe końcówki idą za tą samą twardą tabelą.',
      table: {
        headers: ['Przypadek', 'Męski', 'Nijaki', 'Żeński', 'Liczba mnoga'],
        rows: [
          ['Mianownik', 'новый', 'новое', 'новая', 'новые'],
          ['Dopełniacz', 'нового', 'нового', 'новой', 'новых'],
          ['Celownik', 'новому', 'новому', 'новой', 'новым'],
          ['Biernik', 'новый / нового', 'новое', 'новую', 'новые / новых'],
          ['Narzędnik', 'новым', 'новым', 'новой', 'новыми'],
          ['Miejscownik', 'новом', 'новом', 'новой', 'новых'],
        ],
        caption: 'Końcówki przymiotników o temacie twardym — przykład: новый (nowy)',
        boldColumnIndices: [0],
      },
      bullets: [
        '**Rodzaj męski i nijaki dzielą** końcówki dopełniacza, celownika, narzędnika i miejscownika — zapamiętaj jeden zestaw, masz dwa rodzaje.',
        '**Rodzaj żeński scala** dopełniacz, celownik, narzędnik i miejscownik w **-ой** (czasem poetyckie **-ою** w narzędniku).',
        'Przymiotniki z akcentowanym **-ой** (большой, молодой) różnią się tylko w mianowniku rodzaju męskiego — każda inna komórka idzie za twardą tabelą.',
      ],
      subsections: [
        {
          h3: 'Szybkie pomoce pamięciowe',
          content:
            'Jeśli zapamiętasz tylko trzy fakty o twardych przymiotnikach, niech to będą: formy zależne męskie/nijakie dzielą **-ого / -ому / -ым / -ом**; formy zależne żeńskie dzielą **-ой**; dopełniacz i miejscownik liczby mnogiej używają **-ых**.',
        },
      ],
    },
    {
      h2: 'Tabela końcówek tematów miękkich (синий)',
      content:
        'Przymiotniki o temacie miękkim kończą się w mianowniku rodzaju męskiego na **-ий** (синий, летний, последний). Ich końcówki zamieniają twarde samogłoski na miękkie: **о→е**, **ы→и**, **у→ю**, **а→я**.',
      table: {
        headers: ['Przypadek', 'Męski', 'Nijaki', 'Żeński', 'Liczba mnoga'],
        rows: [
          ['Mianownik', 'синий', 'синее', 'синяя', 'синие'],
          ['Dopełniacz', 'синего', 'синего', 'синей', 'синих'],
          ['Celownik', 'синему', 'синему', 'синей', 'синим'],
          ['Biernik', 'синий / синего', 'синее', 'синюю', 'синие / синих'],
          ['Narzędnik', 'синим', 'синим', 'синей', 'синими'],
          ['Miejscownik', 'синем', 'синем', 'синей', 'синих'],
        ],
        caption: 'Końcówki przymiotników o temacie miękkim — przykład: синий (niebieski)',
        boldColumnIndices: [0],
      },
      bullets: [
        'Tematów miękkich jest mniej niż twardych, ale obejmują słowa wysokiej frekwencji: **синий, русский, хороший, последний, летний**.',
        '**Хороший** wygląda na miękki (-ий) i odmienia się miękko — bardzo częsty przymiotnik dla początkujących.',
        'Jeśli mianownik rodzaju męskiego kończy się na **-ий** (nie -ый/-ой), startuj od tabeli miękkiej.',
      ],
    },
    {
      h2: 'Biernik: przymiotniki żywotne vs nieżywotne',
      content:
        'Tak jak rzeczowniki, przymiotniki stosują **regułę żywotności** w bierniku w rodzaju męskim liczby pojedynczej i we wszystkich liczbach mnogich. Rodzaj żeński i nijaki w liczbie pojedynczej mają po jednej formie biernika.',
      table: {
        headers: ['Sytuacja', 'Forma przymiotnika', 'Przykład', 'Polski'],
        rows: [
          ['R.m. nieżywotny', '= Mianownik', 'Я вижу новый дом.', 'Widzę nowy dom.'],
          ['R.m. żywotny', '= Dopełniacz', 'Я вижу нового друга.', 'Widzę nowego przyjaciela.'],
          ['Żeński', '-ую / -юю', 'Я вижу новую книгу.', 'Widzę nową książkę.'],
          ['Nijaki', '= Mianownik', 'Я вижу новое окно.', 'Widzę nowe okno.'],
          ['Lm. nieżywotna', '= Mianownik', 'Я вижу новые дома.', 'Widzę nowe domy.'],
          ['Lm. żywotna', '= Dopełniacz', 'Я вижу новых друзей.', 'Widzę nowych przyjaciół.'],
        ],
        caption: 'Końcówki przymiotnika w bierniku zależą od żywotności',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Rzeczownik i przymiotnik **muszą zgadzać się co do żywotności** — jeśli rzeczownik bierze biernik w kształcie dopełniacza, przymiotnik też.',
        'To ta sama reguła co w naszym [przewodniku po bierniku](/learn/articles/russian-accusative-case) — przymiotniki po prostu ją dziedziczą.',
        'Początkujący często poprawnie odmieniają rzeczownik i zostawiają przymiotnik w mianowniku: *Я вижу новый друга* ✗ → **нового друга** ✓.',
      ],
    },
    {
      h2: 'Pełne grupy rzeczownik + przymiotnik we wszystkich 6 przypadkach',
      content:
        'Tabele pomagają; pełne frazy sprawiają, że system „klika”. Oto razem odmienione **новый дом** (twardy, r.m. nieżywotny), **новая книга** (twardy, r.ż.) i **синий карандаш** (miękki, r.m. nieżywotny).',
      table: {
        headers: ['Przypadek', 'новый дом', 'новая книга', 'синий карандаш'],
        rows: [
          ['Mianownik', 'новый дом', 'новая книга', 'синий карандаш'],
          ['Dopełniacz', 'нового дома', 'новой книги', 'синего карандаша'],
          ['Celownik', 'новому дому', 'новой книге', 'синему карандашу'],
          ['Biernik', 'новый дом', 'новую книгу', 'синий карандаш'],
          ['Narzędnik', 'новым домом', 'новой книгой', 'синим карандашом'],
          ['Miejscownik', 'о новом доме', 'о новой книге', 'о синем карандаше'],
        ],
        caption: 'Grupy przymiotnik + rzeczownik odmienione przez wszystkie sześć przypadków',
        boldColumnIndices: [0],
      },
      subsections: [
        {
          h3: 'Kontrast męski żywotny',
          content:
            'Zamień дом na **друг**, a zmieni się tylko biernik: **нового друга**, nie новый друг. Dopełniacz już tak wyglądał — dlatego biernik żywotny „pożycza” kształt dopełniacza.',
        },
        {
          h3: 'Gdzie iść głębiej przypadek po przypadku',
          content:
            'Gdy końcówki przymiotników staną się znajome, ćwicz je w każdym artykule o przypadku: [mianownik](/learn/articles/russian-nominative-case), [dopełniacz](/learn/articles/russian-genitive-case), [celownik](/learn/articles/russian-dative-case), [biernik](/learn/articles/russian-accusative-case), [narzędnik](/learn/articles/russian-instrumental-case), [miejscownik](/learn/articles/russian-prepositional-case).',
        },
      ],
    },
    {
      h2: 'Formy krótkie przymiotników (orzecznikowe)',
      content:
        'Rosyjski ma drugi system przymiotników: **formy krótkie**, używane głównie jako orzeczniki (po opuszczonym „być”). Odpowiadają na „jaki jest X?”, a nie „który X?”.',
      table: {
        headers: ['Forma długa', 'Krótki r.m.', 'Krótki r.ż.', 'Krótki r.n.', 'Krótki lm.'],
        rows: [
          ['новый', 'нов', 'нова', 'ново', 'новы'],
          ['красивый', 'красив', 'красива', 'красиво', 'красивы'],
          ['интересный', 'интересен', 'интересна', 'интересно', 'интересны'],
          ['занятый', 'занят', 'занята', 'занято', 'заняты'],
        ],
        caption: 'Formy długie vs formy krótkie przymiotników',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        '**Forma długa** odmienia się według przypadka i stoi przy rzeczowniku: **новая книга** (nowa książka).',
        '**Forma krótka** **nie** odmienia się według przypadka i zwykle stoi sama jako orzecznik: **Книга нова.** / bardziej naturalnie **Книга новая.** we współczesnej mowie.',
        'Wiele form krótkich jest częstych w utartych zwrotach: **Он занят** (Jest zajęty), **Мне холодно** (Jest mi zimno — przysłówkowe nijakie formy krótkiej).',
        'Jeśli wciąż opanowujesz przypadki, najpierw priorytetyzuj **formy długie** — to ich potrzebujesz do zgody w grupach nominalnych.',
      ],
    },
    {
      h2: 'Przymiotniki dzierżawcze: мой, наш, свой',
      content:
        'Dzierżawcze zachowują się jak przymiotniki: zgadzają się w rodzaju, liczbie i przypadku. `мой` / `твой` / `свой` dzielą jeden wzorzec; `наш` / `ваш` — inny. `его` / `её` / `их` („jego / jej / ich”) **się nie odmieniają**.',
      table: {
        headers: ['Przypadek', 'мой (r.m.)', 'моя (r.ż.)', 'моё (r.n.)', 'мои (lm.)'],
        rows: [
          ['Mianownik', 'мой', 'моя', 'моё', 'мои'],
          ['Dopełniacz', 'моего', 'моей', 'моего', 'моих'],
          ['Celownik', 'моему', 'моей', 'моему', 'моим'],
          ['Biernik', 'мой / моего', 'мою', 'моё', 'мои / моих'],
          ['Narzędnik', 'моим', 'моей', 'моим', 'моими'],
          ['Miejscownik', 'моём', 'моей', 'моём', 'моих'],
        ],
        caption: 'Odmiana мой — model dla твой i свой',
        boldColumnIndices: [0],
      },
      bullets: [
        '**Свой** wraca do podmiotu („swój”): **Он читает свою книгу** (Czyta swoją książkę) vs **его книгу** (czyjąś inną).',
        '**Наш / ваш** idą za końcówkami o wyglądzie miękkim: нашего, нашей, наши…',
        '**Его / её / их** nigdy się nie zmieniają: **о его новой машине** — odmieniają się tylko przymiotnik i rzeczownik.',
      ],
    },
    {
      h2: '8 typowych błędów z przymiotnikami rosyjskimi',
      content:
        'To błędy, które uczący się popełniają najczęściej — każdy da się naprawić jedną regułą.',
      bullets: [
        '**Zostawianie przymiotnika w mianowniku** przy odmianie rzeczownika: *в новый доме* ✗ → **в новом доме** ✓.',
        '**Zapominanie żywotności w bierniku**: *Я знаю хороший врача* ✗ → **хорошего врача** ✓.',
        '**Mieszanie tabeli twardej i miękkiej**: синий bierze **синего**, nie *синого*.',
        '**Używanie -ый po ш/ж/ч/щ/ц**: pisz **хороший**, **свежий** (reguła pisowni).',
        '**Odmienianie его / её / их**: zostają stałe — odmieniaj tylko następujące słowa.',
        '**Mylenie свой i его**: свой = należy do podmiotu; его = należy do kogoś innego, już nazwanego.',
        '**Traktowanie form krótkich jako oznaczonych przypadkiem**: formy krótkie nie biorą końcówek przypadków.',
        '**Ignorowanie zgody nijakiej**: окно jest nijakie → **новое окно**, nie *новый окно*.',
      ],
    },
    {
      h2: 'Jak ćwiczyć odmianę przymiotników',
      content:
        'Jednorazowe przeczytanie tabel nie wystarczy. Użyj pętli, która wymusza zgodę pod presją czasu:',
      bullets: [
        'Wybierz dobrze znany rzeczownik i odmieniaj **przymiotnik + rzeczownik** na głos przez wszystkie 6 przypadków.',
        'Zmień rodzaj (дом → книга → окно) i powtórz z tym samym przymiotnikiem.',
        'Dodaj kontrast żywotności: новый стол vs новый друг w bierniku.',
        'Ćwicz w prawdziwych zdaniach z naszym [darmowym narzędziem praktyki](/practice) i [ściągą końcówek przypadków](/learn/articles/russian-case-endings-cheatsheet).',
      ],
    },
  ],
  faq: [
    {
      question: 'Czy przymiotniki rosyjskie zmieniają się z każdym przypadkiem?',
      answer:
        'Tak. Formy długie zgadzają się z rzeczownikiem w rodzaju, liczbie i przypadku, więc końcówka zwykle się zmienia, gdy zmienia się przypadek rzeczownika. Formy krótkie to wyjątek: są orzecznikowe i nie odmieniają się według przypadka.',
    },
    {
      question: 'Jaka jest różnica między tematami twardymi a miękkimi?',
      answer:
        'Tematy twarde zwykle kończą się na -ый lub -ой w mianowniku rodzaju męskiego (новый, большой) i używają końcówek z о/ы/у. Tematy miękkie kończą się na -ий (синий, летний) i używają zamiast tego е/и/ю. Logiczny wzorzec jest ten sam; zmienia się tylko zestaw samogłosek.',
    },
    {
      question: 'Dlaczego новый друга wygląda źle, a нового друга dobrze?',
      answer:
        'Bo друг jest rodzaju męskiego żywotnego. W bierniku żywotne męskie (i żywotne liczby mnogie) biorą końcówkę w kształcie dopełniacza — a przymiotnik musi pasować: нового друга, nie новый друга.',
    },
    {
      question: 'Czy początkujący powinni wcześnie uczyć się form krótkich?',
      answer:
        'Naucz się kilku wysokofrekencyjnych form krótkich (занят, рад, должен, нужно/можно jako pokrewne orzeczniki), ale najpierw priorytetyzuj odmianę form długich. Formy długie są potrzebne do grup nominalnych we wszystkich sześciu przypadkach.',
    },
    {
      question: 'Czym мой różni się od его?',
      answer:
        'Мой, твой, свой, наш i ваш odmieniają się jak przymiotniki. Его, её i их nigdy nie zmieniają formy; odmieniają się tylko rzeczownik i inne przymiotniki wokół nich.',
    },
  ],
  conclusionIntro:
    'Odmiana przymiotników wygląda na papierze na dużo, ale ściska się do małego zestawu nawyków:',
  conclusionBullets: [
    'Zawsze dopasuj **rodzaj × liczbę × przypadek** — przymiotnik nigdy nie zostaje w mianowniku domyślnie',
    'Najpierw opanuj **tabelę twardą**, potem zmapuj ją na **tabelę miękką**',
    'Stosuj **regułę żywotności** w bierniku dla rodzaju męskiego i liczby mnogiej',
    'Używaj **form długich** w grupach nominalnych; **formy krótkie** zostaw dla orzeczników',
    'Odmieniaj **мой/твой/свой/наш/ваш**; zostaw **его/её/их** w spokoju',
  ],
  conclusionOutro:
    'Gdy pary przymiotnik + rzeczownik zaczynają działać automatycznie, jesteś gotów przyspieszyć w każdym przypadku. Ćwicz w naszym darmowym narzędziu — i trzymaj otwartą [ściągę rosyjskich końcówek przypadków](/learn/articles/russian-case-endings-cheatsheet), póki tabele jeszcze się układają.',
  internalLinks: [
    {
      href: '/learn/articles/russian-case-endings-cheatsheet',
      label: 'Rosyjskie końcówki przypadków: ostateczna ściąga',
    },
    {
      href: '/learn/articles/russian-noun-gender-guide',
      label: 'Rodzaj rzeczowników rosyjskich: męski, żeński, nijaki',
    },
    {
      href: '/learn/articles/russian-nominative-case',
      label: 'Rosyjski mianownik: reguły, końcówki i przykłady',
    },
    {
      href: '/learn/articles/russian-accusative-case',
      label: 'Rosyjski biernik: żywotny vs nieżywotny',
    },
    {
      href: '/practice',
      label: 'Darmowy quiz odmiany rosyjskiej — wszystkie 6 przypadków',
    },
  ],
  ctaText: 'Ćwicz rosyjskie przypadki — Za darmo →',
  ctaHref: '/practice',
  conclusion: '',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Odmiana przymiotników rosyjskich: tabela końcówek dla wszystkich 6 przypadków',
    description:
      'Pełna tabela końcówek przymiotników rosyjskich: tematy twarde i miękkie, 6 przypadków, biernik żywotny, formy krótkie i dzierżawcze — z prawdziwymi przykładami.',
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
      '@id': 'https://russiandeclensions.com/learn/articles/russian-adjective-declension',
    },
    keywords:
      'końcówki przymiotników rosyjskich, odmiana przymiotników rosyjskich, zgoda przymiotnika po rosyjsku, tematy twarde i miękkie przymiotników rosyjskich, tabela przypadków przymiotników rosyjskich, formy krótkie przymiotników rosyjskich',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russian-adjective-declension-header.webp',
      width: 1280,
      height: 720,
    },
  },
};
