import type { LearnArticle } from '../learnArticles';

/** Polskie tłumaczenie artykułu `russian-pronouns-declension` (źródło angielskie: `learnArticles.ts`). */
export const russianPronounsDeclensionPl: LearnArticle = {
  slug: 'russian-pronouns-declension',
  introByline: {
    text: '**Napisane przez Nathana** — native speaker francuskiego uczący się rosyjskiego; dzielę się tym, co naprawdę działa w gramatyce, przypadkach i codziennej praktyce.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, założyciel Russian Cases with Anna',
    imageWidth: 256,
    imageHeight: 256,
  },
  title: 'Odmiana zaimków rosyjskich: osobowe, dzierżawcze i wskazujące',
  metaTitle: 'Odmiana zaimków rosyjskich | Russian Cases with Anna',
  metaDescription:
    'Odmieniaj zaimki rosyjskie w 6 przypadkach: osobowe (я, ты, он…), dzierżawcze (мой, наш), wskazujące (этот/тот) oraz pułapka него/неё.',
  keywords: [
    'odmiana zaimków rosyjskich',
    'rosyjskie zaimki osobowe przypadki',
    'odmieniać zaimki rosyjskie',
    'мой наш odmiana',
    'этот тот rosyjski',
    'него неё rosyjski',
    'rosyjskie zaimki dzierżawcze',
    'rosyjskie zaimki wskazujące',
  ],
  h1: 'Odmiana zaimków rosyjskich: osobowe, dzierżawcze i wskazujące',
  heroImage: {
    src: '/articles/russian-pronouns-declension-header.webp',
    alt: 'Fiszki z rosyjskimi zaimkami osobowymi я ты он она мы вы они na biurku do nauki',
    width: 1280,
    height: 720,
  },
  intro:
    'Rzeczowniki i przymiotniki idą za dość regularnymi tabelami końcówek. **Zaimki — nie.** Formy w rodzaju **меня, ему, неё, этом** wyglądają na niepowiązane z **я, он, она, этот** — dopóki nie zobaczysz ich jako zamkniętego systemu, który po prostu trzeba opanować.\n\nTen przewodnik obejmuje trzy grupy zaimków potrzebne na co dzień: **osobowe** (я, ты, он…), **dzierżawcze** (мой, наш, свой…) i **wskazujące** (этот / тот). Dostaniesz też pułapkę przyimków (**него / неё / них**) oraz 20 przykładowych zdań z transliteracją.',
  whatYouLearn: [
    'Dlaczego zaimki łamią regularne wzorce rzeczowników',
    'Pełne tabele zaimków osobowych dla wszystkich 6 przypadków',
    'Zaimki dzierżawcze i zgoda (мой, наш, свой)',
    'Wskazujące: odmienione этот i тот',
    'Pułapka przyimków: него, неё, них',
    '20 prawdziwych przykładowych zdań z transliteracją',
  ],
  leadMagnetCta: {
    title: 'Zaimki + przypadki = prawdziwe zdania',
    description:
      'Russian Cases with Anna ćwiczy końcówki w kontekście — w tym zaimki, które pojawiają się w każdym dialogu. Za darmo na iOS i Android.',
    ctaText: 'Pobierz aplikację — Za darmo',
    ctaHref: '/',
  },
  tableAccentVariant: 'dative',
  sections: [
    {
      h2: 'Dlaczego zaimki nie idą za wzorcami rzeczowników',
      content:
        'Rosyjskie końcówki rzeczowników są w większości przewidywalne, gdy znasz rodzaj. Zaimki są **supletywne**: wiele form przypadkowych pochodzi ze starszych tematów, więc **я → меня → мне → мной** to paradygmat, który zapamiętujesz jako zestaw, a nie budujesz litera po literze.\n\nBrzmi to gorzej, niż jest. Jest tylko garść zaimków osobowych, a używasz ich bez przerwy — więc ćwicząc tabele, zyskujesz szybciej niż przy prawie każdej innej tabeli gramatycznej.',
      bullets: [
        'Zaimki osobowe zmieniają **temat** w różnych przypadkach (я / меня / мной).',
        'Zaimki dzierżawcze i wskazujące zachowują się bardziej jak **przymiotniki** — zgadzają się w rodzaju, liczbie i przypadku.',
        'Po większości przyimków zaimki 3. osoby dodają **н-**: него, неё, них (nie *его, *её, *их).',
      ],
    },
    {
      h2: 'Zaimki osobowe we wszystkich 6 przypadkach',
      content:
        'Ucz się ich jako kolumn pionowych. Mianownik to forma hasłowa; każdy inny przypadek to forma mówiona, którą usłyszysz w prawdziwych zdaniach.',
      table: {
        headers: ['Przypadek', 'я', 'ты', 'он', 'она', 'оно', 'мы', 'вы', 'они'],
        rows: [
          ['Mianownik', 'я', 'ты', 'он', 'она', 'оно', 'мы', 'вы', 'они'],
          ['Dopełniacz', 'меня', 'тебя', 'его', 'её', 'его', 'нас', 'вас', 'их'],
          ['Celownik', 'мне', 'тебе', 'ему', 'ей', 'ему', 'нам', 'вам', 'им'],
          ['Biernik', 'меня', 'тебя', 'его', 'её', 'его', 'нас', 'вас', 'их'],
          ['Narzędnik', 'мной (-ою)', 'тобой (-ою)', 'им', 'ей (-ею)', 'им', 'нами', 'вами', 'ими'],
          ['Miejscownik', 'мне', 'тебе', 'нём', 'ней', 'нём', 'нас', 'вас', 'них'],
        ],
        caption: 'Zaimki osobowe odmienione we wszystkich sześciu przypadkach',
        boldColumnIndices: [0],
      },
      subsections: [
        {
          h3: 'Wzorce warte zauważenia',
          content:
            '**Dopełniacz = biernik** dla я, ты, он, она, оно, мы, вы, они (te same formy: меня, тебя, его…). To prawie o połowę skraca zapamiętywanie.\n\n**Celownik i miejscownik** dzielą **мне / тебе** dla 1. i 2. osoby liczby pojedynczej.\n\n**Вы** to zarówno „wy” w liczbie mnogiej, jak i grzecznościowe „pan/pani” — formy są identyczne; zmienia się tylko zgoda czasownika i kontekst społeczny.',
        },
      ],
      bullets: [
        'Narzędnik **мной / тобой** czasem pojawia się jako **мною / тобою** w stylu formalnym lub poetyckim — rzadko w codziennej mowie.',
        '**Он / оно** dzielą prawie wszystkie formy poza mianownikiem (**его, ему, им, нём**).',
        'Ćwicz z czasownikami, które już znasz: **дай мне**, **я вижу тебя**, **мы говорим о нём**.',
      ],
    },
    {
      h2: 'Zaimki dzierżawcze i zgoda',
      content:
        'Dzierżawcze odpowiadają na **чей? чья? чьё? чьи?** (czyj?). W przeciwieństwie do angielskiego „my” rosyjskie **мой** zmienia się wraz z rzeczownikiem — dokładnie jak przymiotnik.',
      table: {
        headers: ['Przypadek', 'мой (męski)', 'моя (żeński)', 'моё (nijaki)', 'мои (lm.)'],
        rows: [
          ['Mianownik', 'мой', 'моя', 'моё', 'мои'],
          ['Dopełniacz', 'моего', 'моей', 'моего', 'моих'],
          ['Celownik', 'моему', 'моей', 'моему', 'моим'],
          ['Biernik', 'мой / моего', 'мою', 'моё', 'мои / моих'],
          ['Narzędnik', 'моим', 'моей', 'моим', 'моими'],
          ['Miejscownik', 'моём', 'моей', 'моём', 'моих'],
        ],
        caption: 'Odmiana мой — wzór dla твой i свой',
        boldColumnIndices: [0],
      },
      subsections: [
        {
          h3: 'наш / ваш',
          content:
            '**Наш** i **ваш** idą za wzorcem o „miękkim” wyglądzie: нашего, нашей, нашему, наши… Ta sama logika zgody co мой.',
        },
        {
          h3: 'свой vs его / её / их',
          content:
            '**Свой** znaczy „swój / własny” i odnosi się do **podmiotu**: **Он читает свою книгу** (swoją własną książkę).\n\n**Его / её / их** znaczą „jego / jej / ich” i **nie odmieniają się**: **Я вижу его книгу** (Widzę jego książkę). Zmienia się tylko rzeczownik (i ewentualne przymiotniki).',
        },
      ],
      bullets: [
        'Żywotność w bierniku obowiązuje: **я вижу моего брата**, ale **я вижу мой дом**.',
        'Pełną logikę przymiotnikową tych końcówek znajdziesz w [Odmianie przymiotników rosyjskich](/learn/articles/russian-adjective-declension).',
      ],
    },
    {
      h2: 'Wskazujące: этот / тот',
      content:
        '**Этот** = ten (bliski); **тот** = tamten (daleki / wcześniej wspomniany). Oba się odmieniają i zgadzają z rzeczownikiem.',
      table: {
        headers: ['Przypadek', 'этот', 'эта', 'это', 'эти'],
        rows: [
          ['Mianownik', 'этот', 'эта', 'это', 'эти'],
          ['Dopełniacz', 'этого', 'этой', 'этого', 'этих'],
          ['Celownik', 'этому', 'этой', 'этому', 'этим'],
          ['Biernik', 'этот / этого', 'эту', 'это', 'эти / этих'],
          ['Narzędnik', 'этим', 'этой', 'этим', 'этими'],
          ['Miejscownik', 'этом', 'этой', 'этом', 'этих'],
        ],
        caption: 'Odmiana этот (ten)',
        boldColumnIndices: [0],
      },
      subsections: [
        {
          h3: 'тот w skrócie',
          content:
            '**Тот / та / то / те** idą za tą samą logiką przypadków z innymi tematami: того, той, тому, ту, тем, том, тех…\n\nPrzydatny kontrast: **Эта книга интересная, а та — скучная.** (Ta książka jest ciekawa, a tamta — nudna.)',
        },
        {
          h3: 'это vs этот',
          content:
            'Nieodmienne **это** w znaczeniu „to jest / to są” **nie odmienia się** w tej roli: **Это мой брат.** Odmienione **этот/эта/это/эти** określają rzeczownik: **Этот брат живёт в Москве.**',
        },
      ],
    },
    {
      h2: 'Pułapka przyimków (него, неё, них)',
      content:
        'Po większości przyimków zaimki 3. osoby biorą początkowe **н-**. Zapominanie o tym to jeden z najczęstszych błędów na poziomie średnio zaawansowanym.',
      table: {
        headers: ['Bez przyimka', 'Z przyimkiem', 'Polski'],
        rows: [
          ['я знаю его', 'я думаю о нём', 'znam go / myślę o nim'],
          ['я вижу её', 'я иду к ней', 'widzę ją / idę do niej'],
          ['я слушаю их', 'я говорю с ними', 'słucham ich / mówię z nimi'],
          ['это его книга', 'книга у него', 'to jego książka / on ma książkę'],
        ],
        caption: 'Zaimki 3. osoby z przyimkami i bez',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Formy do zapamiętania: **него, нему, ним, нём** (он/оно); **неё, ней** (она); **них, ним, ними** (они).',
        '**н-** pojawia się po przyimkach takich jak **о, у, к, с, для, без, из, от…**',
        'Dzierżawcze **его / её / их** („jego/jej/ich”) nadal się nie odmieniają — ale jako zaimki dopełnienia po przyimku używaj osobowych form z **н-**.',
      ],
    },
    {
      h2: '20 przykładowych zdań',
      content:
        'Dwadzieścia zdań obejmujących zaimki osobowe, dzierżawcze i wskazujące. **1–8** osobowe · **9–14** dzierżawcze · **15–20** wskazujące / pułapka przyimków.',
      table: {
        headers: ['#', 'Rosyjski', 'Transliteracja', 'Polski'],
        rows: [
          ['1', 'Дай мне книгу.', 'Day mne knigu.', 'Daj mi książkę.'],
          ['2', 'Я вижу тебя.', 'Ya vizhu tebya.', 'Widzę cię.'],
          ['3', 'Мы говорим о нём.', 'My govorim o nyom.', 'Mówimy o nim.'],
          ['4', 'Скажи ей правду.', 'Skazhi yey pravdu.', 'Powiedz jej prawdę.'],
          ['5', 'Он идёт с нами.', 'On idyot s nami.', 'Idzie z nami.'],
          ['6', 'Это письмо для вас.', "Eto pis'mo dlya vas.", 'Ten list jest dla was/pana.'],
          ['7', 'Я их не знаю.', 'Ya ikh ne znayu.', 'Nie znam ich.'],
          ['8', 'У неё есть сестра.', "U neyo yest' sestra.", 'Ona ma siostrę.'],
          ['9', 'Это мой брат.', 'Eto moy brat.', 'To mój brat.'],
          ['10', 'Я читаю свою книгу.', 'Ya chitayu svoyu knigu.', 'Czytam swoją (własną) książkę.'],
          ['11', 'Где наша машина?', 'Gde nasha mashina?', 'Gdzie jest nasz samochód?'],
          ['12', 'Я вижу моего друга.', 'Ya vizhu moyego druga.', 'Widzę mojego przyjaciela.'],
          ['13', 'Его дом большой.', "Yego dom bol'shoy.", 'Jego dom jest duży.'],
          ['14', 'Она любит свою работу.', 'Ona lyubit svoyu rabotu.', 'Kocha swoją (własną) pracę.'],
          ['15', 'Этот город красивый.', 'Etot gorod krasivyy.', 'To miasto jest piękne.'],
          ['16', 'Я живу в этом доме.', 'Ya zhivu v etom dome.', 'Mieszkam w tym domu.'],
          ['17', 'Дай мне ту ручку.', 'Day mne tu ruchku.', 'Daj mi tamten długopis.'],
          ['18', 'Мы говорим об этой проблеме.', 'My govorim ob etoy probleme.', 'Mówimy o tym problemie.'],
          ['19', 'Кто это? — Это она.', 'Kto eto? — Eto ona.', 'Kto to? — To ona.'],
          ['20', 'Я иду к нему.', 'Ya idu k nemu.', 'Idę do niego.'],
        ],
        caption: '20 przykładów zaimków z transliteracją',
        boldColumnIndices: [0, 1],
      },
    },
    {
      h2: 'Częste błędy z rosyjskimi zaimkami',
      bullets: [
        '**Używanie его po przyimku:** *о его* ✗ → **о нём** ✓ (gdy „niego” jest dopełnieniem przyimka).',
        '**Mylenie свой i его:** własna rzecz podmiotu → **свой**; czyjaś inna → **его/её/их**.',
        '**Zapominanie zgody przy мой:** *мой книга* ✗ → **моя книга** ✓.',
        '**Traktowanie это (to jest) jak этот (ten + rzeczownik):** **Это мама** vs **Эта мама**.',
        '**Mieszanie celownika i biernika:** **дай мне** (celownik) vs **вижу меня** (biernik).',
      ],
    },
  ],
  faq: [
    {
      question: 'Czy rosyjskie zaimki osobowe mają inne formy w każdym przypadku?',
      answer:
        'Tak. Każdy zaimek osobowy ma pełny sześcioprzypadkowy paradygmat. Dobra wiadomość: dopełniacz i biernik są u wszystkich identyczne, co zmniejsza zakres zapamiętywania.',
    },
    {
      question: 'Kiedy używać него zamiast его?',
      answer:
        'Używaj него / неё / них (i pokrewnych form z н-) po przyimkach, gdy zaimek jest dopełnieniem tego przyimka: о нём, у неё, с ними. Gołe его / её / их stoją bez rządzącego przyimka albo jako nieodmienne dzierżawcze w znaczeniu jego / jej / ich.',
    },
    {
      question: 'Jaka jest różnica między мой a свой?',
      answer:
        'Мой oznacza „mój” z punktu widzenia mówiącego. Свой oznacza „swój / własny” i odnosi się do podmiotu zdania: Он взял свою сумку (Wziął swoją własną torbę).',
    },
    {
      question: 'Czym różnią się этот i это?',
      answer:
        'Это jako „to jest / to są” jest nieodmienne: Это мой брат. Этот / эта / это / эти to przymiotniki wskazujące zgadzające się z rzeczownikiem: Этот брат живёт здесь.',
    },
    {
      question: 'Czy вы jest zawsze w liczbie mnogiej?',
      answer:
        'Gramatycznie formy są te same. Вы może zwracać się do wielu osób albo do jednej grzecznościowo. Czasowniki i formy czasu przeszłego zgadzają się z mnogim вы nawet przy grzecznościowej liczbie pojedynczej: Вы были правы.',
    },
  ],
  conclusionIntro: 'Odmiana zaimków jest skończona — i otwiera prawie każde rosyjskie zdanie.',
  conclusionBullets: [
    'Zapamiętaj **zaimki osobowe** jako pełne kolumny (dopełniacz = biernik)',
    'Odmieniaj **мой / твой / свой / наш / ваш** jak przymiotniki',
    'Zostaw dzierżawcze **его / её / их** bez zmian',
    'Dodawaj **н-** po przyimkach: него, неё, них',
    'Ćwicz **этот / тот** z prawdziwymi rzeczownikami, aż zgoda stanie się automatyczna',
  ],
  conclusionOutro:
    'Następnie połącz zaimki z pytaniami (кто? кому? о ком?) w codziennej mowie i ćwicz dalej przypadki w naszym darmowym [narzędziu do ćwiczeń](/practice). Po więcej o końcówkach w stylu przymiotnikowym wróć do [przewodnika po odmianie przymiotników](/learn/articles/russian-adjective-declension).',
  internalLinks: [
    {
      href: '/learn/articles/russian-adjective-declension',
      label: 'Odmiana przymiotników rosyjskich: tabela końcówek dla wszystkich 6 przypadków',
    },
    {
      href: '/learn/articles/russian-case-endings-cheatsheet',
      label: 'Rosyjskie końcówki przypadków: ostateczna ściąga',
    },
    {
      href: '/learn/articles/russian-dative-case',
      label: 'Przewodnik po rosyjskim celowniku',
    },
    {
      href: '/learn/articles/russian-genitive-case',
      label: 'Przewodnik po rosyjskim dopełniaczu',
    },
    {
      href: '/learn/articles/top-10-russian-case-mistakes',
      label: 'Top 10 błędów przy rosyjskich przypadkach',
    },
    {
      href: '/practice',
      label: 'Darmowy quiz odmiany rosyjskiej',
    },
  ],
  ctaText: 'Ćwicz rosyjskie przypadki — Za darmo →',
  ctaHref: '/practice',
  conclusion: '',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Odmiana zaimków rosyjskich: osobowe, dzierżawcze i wskazujące',
    description:
      'Odmieniaj zaimki rosyjskie w 6 przypadkach: osobowe (я, ты, он…), dzierżawcze (мой, наш), wskazujące (этот/тот) oraz pułapka него/неё.',
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
      '@id': 'https://russiandeclensions.com/learn/articles/russian-pronouns-declension',
    },
    keywords:
      'odmiana zaimków rosyjskich, rosyjskie zaimki osobowe przypadki, мой наш odmiana, этот тот rosyjski, него неё rosyjski',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russian-pronouns-declension-header.webp',
      width: 1280,
      height: 720,
    },
  },
};
