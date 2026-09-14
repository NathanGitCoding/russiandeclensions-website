import type { LearnArticle } from '../learnArticles';

/** Polskie tłumaczenie artykułu `russian-names-patronymics-guide` (źródło angielskie: `learnArticles.ts`). */
export const russianNamesPatronymicsGuidePl: LearnArticle = {
  slug: 'russian-names-patronymics-guide',
  introByline: {
    text: '**Napisane przez Nathana** — native speaker francuskiego uczący się rosyjskiego; dzielę się tym, co naprawdę działa w gramatyce, przypadkach i codziennej praktyce.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, założyciel Russian Cases with Anna',
    imageWidth: 256,
    imageHeight: 256,
  },
  title: 'Rosyjskie imiona wyjaśnione: imię, otczestwo, nazwisko (i ich odmiana)',
  metaTitle: 'Rosyjskie imiona i otczestwa wyjaśnione | Russian Cases with Anna',
  metaDescription:
    'Zrozum rosyjskie imiona: imię, otczestwo (отчество), końcówki nazwisk, zdrobnienia, zwracanie się formalne i odmianę przez przypadki.',
  keywords: [
    'rosyjskie imiona przewodnik',
    'rosyjskie otczestwo',
    'отчество znaczenie',
    'odmiana rosyjskich imion',
    'rosyjskie zdrobnienia',
    'ty vs wy rosyjskie imiona',
    'końcówki rosyjskich nazwisk',
    'jak działają rosyjskie imiona',
  ],
  h1: 'Rosyjskie imiona wyjaśnione: imię, otczestwo, nazwisko (i ich odmiana)',
  heroImage: {
    src: '/articles/russian-names-patronymics-guide-header.webp',
    alt: 'Kobieta trzymająca rosyjski paszport obok notatnika z imieniem Иван Иванович Смирнов, w tle Sobór Wasyla Błogosławionego',
    width: 1536,
    height: 1024,
  },
  intro:
    'Rosyjskie imię to nie jedno słowo — to trzy: **imię** (имя), **otczestwo** (отчество, tworzone od imienia ojca) i **nazwisko** (фамилия). Pomyl kombinację, a możesz zabrzmieć niegrzecznie wobec obcej osoby albo dziwnie formalnie wobec przyjaciela. A gdy zaczniesz używać imion w prawdziwych zdaniach, zachowują się jak każdy inny rosyjski rzeczownik: **odmieniają się**.\n\nTen przewodnik pokazuje, jak działa trzyczęściowy system, jak buduje się otczestwa i zdrobnienia, której końcówki nazwiska użyć dla kobiety, a której dla mężczyzny, oraz jak imię takie jak Иван zmienia się przez wszystkie sześć przypadków.',
  whatYouLearn: [
    'Jak działa system имя / отчество / фамилия',
    'Budowanie otczestwa z imienia ojca',
    'Popularne zdrobnienia dla popularnych rosyjskich imion',
    'Końcówki nazwisk i dlaczego zmieniają się z rodzajem',
    'Kiedy używać ты zamiast formalnego imienia + otczestwa',
    'Jak imiona odmieniają się przez sześć rosyjskich przypadków',
  ],
  leadMagnetCta: {
    title: 'Imiona też się odmieniają — nie tylko zwykłe rzeczowniki',
    description:
      'Иван staje się Ивана, Ивану, Иваном w zależności od przypadku. Ćwicz prawdziwe wzorce odmiany, w tym imiona, z Russian Cases with Anna — za darmo na iOS i Android.',
    ctaText: 'Pobierz aplikację — Za darmo',
    ctaHref: '/',
  },
  tableAccentVariant: 'genitive',
  sections: [
    {
      h2: 'Jak działa rosyjski system imion',
      content:
        'Dokumenty urzędowe, rejestry szkolne i formalne prezentacje używają trzech części: **имя** (imię), **отчество** (otczestwo, od imienia ojca) i **фамилия** (nazwisko). Razem identyfikują osobę tak, jak pełne imię i nazwisko po polsku — z tą różnicą, że środkowa część to nie „drugie imię", tylko coś generowanego z imienia twojego ojca.',
      table: {
        headers: ['Część', 'Rosyjski termin', 'Przykład (syn Иванa)'],
        rows: [
          ['Imię', 'имя', 'Пётр'],
          ['Otczestwo', 'отчество', 'Иванович'],
          ['Nazwisko', 'фамилия', 'Соколов'],
        ],
        caption: 'Trzy części pełnego rosyjskiego imienia',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Otczestwo dosłownie znaczy „syn Иванa" albo „córka Иванa" — **Иванович** / **Ивановна**.',
        'Wszystkie trzy części widnieją w paszporcie; tylko pierwsze dwie są używane w grzecznym zwracaniu się ustnie.',
        'Nazwiska są dziedziczone po rodzinie, tak jak po polsku — nie zależą od imienia żadnego z rodziców.',
      ],
    },
    {
      h2: 'Imiona i ich zdrobnienia',
      content:
        'Rosjanie nieustannie używają krótkich, czułych form — z przyjaciółmi, rodziną i dziećmi pełne imię może nawet zabrzmieć chłodno. Każde imię ma jedną lub kilka standardowych form zdrobniałych.',
      table: {
        headers: ['Pełne imię', 'Popularne zdrobnienia', 'Rodzaj'],
        rows: [
          ['Александр', 'Саша, Саня, Шура', 'Męski'],
          ['Александра', 'Саша, Шура', 'Żeński'],
          ['Дмитрий', 'Дима, Митя', 'Męski'],
          ['Мария', 'Маша, Маруся', 'Żeński'],
          ['Иван', 'Ваня', 'Męski'],
          ['Екатерина', 'Катя, Катюша', 'Żeński'],
          ['Николай', 'Коля', 'Męski'],
          ['Наталья', 'Наташа', 'Żeński'],
          ['Михаил', 'Миша', 'Męski'],
          ['Елена', 'Лена, Алёна', 'Żeński'],
        ],
        caption: 'Popularne rosyjskie imiona i ich zdrobnienia',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Zdrobnienia są do **nieformalnych kontekstów z ты** — nigdy nie łącz zdrobnienia z otczestwem (nie ma „Саша Иванович").',
        'Dodanie przyrostków jak **-очка/-енька** czyni imiona jeszcze czulszymi: Машенька, Ванечка.',
        'Zasady rodzaju stojące za tymi końcówkami znajdziesz w [przewodniku po rodzaju rzeczowników](/learn/articles/russian-noun-gender-guide).',
      ],
    },
    {
      h2: 'Budowanie otczestwa (Отчество)',
      content:
        'Otczestwo tworzy się z **imienia ojca** plus przyrostka zależnego od rodzaju: **-ович / -евич** dla synów, **-овна / -евна** dla córek. Imiona kończące się na miękką spółgłoskę lub samogłoskę przyjmują nieco inny przyrostek.',
      table: {
        headers: ['Imię ojca', 'Otczestwo syna', 'Otczestwo córki'],
        rows: [
          ['Иван', 'Иванович', 'Ивановна'],
          ['Сергей', 'Сергеевич', 'Сергеевна'],
          ['Александр', 'Александрович', 'Александровна'],
          ['Дмитрий', 'Дмитриевич', 'Дмитриевна'],
          ['Никита', 'Никитич', 'Никитична'],
          ['Илья', 'Ильич', 'Ильинична'],
        ],
        caption: 'Popularne wzorce otczestwa',
        boldColumnIndices: [0],
      },
      bullets: [
        'Otczestwo jest używane razem z imieniem — **Иван Иванович**, a nie samo w większości kontekstów.',
        'Wśród starszych pokoleń używanie samego otczestwa (np. zwracanie się do kogoś tylko „Ивановна") jest oznaką zażyłego szacunku, powszechnym dla starszych kobiet we wsi lub w pracy.',
        'Nigdy sam nie wybierasz swojego otczestwa — wynika ono automatycznie z imienia twojego ojca.',
      ],
    },
    {
      h2: 'Nazwiska i zgodność rodzaju',
      content:
        'W przeciwieństwie do polskich nazwisk, większość rosyjskich nazwisk zmienia formę w zależności od tego, czy należy do mężczyzny czy kobiety — ponieważ wiele nazwisk jest gramatycznie **przymiotnikami**.',
      table: {
        headers: ['Nazwisko męskie', 'Nazwisko żeńskie', 'Wzorzec'],
        rows: [
          ['Иванов', 'Иванова', '-ов / -ова'],
          ['Смирнов', 'Смирнова', '-ов / -ова'],
          ['Достоевский', 'Достоевская', '-ский / -ская'],
          ['Толстой', 'Толстая', '-ой / -ая'],
        ],
        caption: 'Jak końcówki nazwisk zmieniają się z rodzajem',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Nazwiska na **-ский/-ская** odmieniają się dokładnie jak przymiotniki — zobacz [przewodnik po odmianie przymiotników](/learn/articles/russian-adjective-declension).',
        'Nazwiska na **-ов/-ев/-ин** odmieniają się jak rzeczowniki, z kilkoma końcówkami typu przymiotnikowego wmieszanymi (narzędnik **-ым**).',
        'Niektóre nazwiska są **nieodmienne**: nazwiska obcego pochodzenia i te na **-ко, -их, -ых** (np. Шевченко, Седых) nigdy się nie zmieniają, dla żadnego rodzaju ani przypadku.',
      ],
    },
    {
      h2: 'Zwracanie się formalne vs. nieformalne: Ты, Вы i formy imion',
      content:
        'Wybór właściwej formy imienia to w równym stopniu kwestia relacji, co gramatyki. Mieszanie zdrobnienia z вы albo pełnego imienia + otczestwa z ты brzmi dla rosyjskiego ucha nie tak.',
      table: {
        headers: ['Kontekst', 'Forma zwracania się', 'Przykład'],
        rows: [
          ['Obca osoba, lekarz, urzędnik', 'Имя + Отчество + вы', 'Иван Иванович, вы не подскажете...?'],
          ['Nowy kolega, nauczyciel', 'Имя + Отчество + вы', 'Мария Сергеевна, у меня вопрос.'],
          ['Bliski przyjaciel, rodzina', 'Zdrobnienie + ты', 'Ваня, ты идёшь?'],
          ['Dziecko mówiące do rówieśnika', 'Zdrobnienie + ты', 'Саша, пойдём!'],
        ],
        caption: 'Dopasowanie formy zwracania się do kontekstu',
        boldColumnIndices: [1],
      },
      bullets: [
        'W razie wątpliwości domyślnie używaj **Имя + Отчество + вы** — nigdy nie jest to niegrzeczne, zawsze bezpieczne.',
        'Cudzoziemcom często wybacza się pominięcie otczestwa, ale próba jest naprawdę doceniana.',
        'Miejsca pracy przechodzą na zwracanie się samym imieniem do młodszego personelu — kieruj się nastrojem w pomieszczeniu.',
      ],
    },
    {
      h2: 'Odmiana imion przez przypadki',
      content:
        'Imiona są rzeczownikami, więc przyjmują końcówki przypadków jak wszystko inne w rosyjskim zdaniu. Imiona podążają za zwykłymi wzorcami rzeczownikowymi; otczestwa i nazwiska typu przymiotnikowego łączą końcówki rzeczownikowe i przymiotnikowe.',
      table: {
        headers: ['Przypadek', 'Иван (imię)', 'Ивановна (otczestwo)', 'Иванов (nazwisko)'],
        rows: [
          ['Mianownik', 'Иван', 'Ивановна', 'Иванов'],
          ['Dopełniacz', 'Ивана', 'Ивановны', 'Иванова'],
          ['Celownik', 'Ивану', 'Ивановне', 'Иванову'],
          ['Biernik', 'Ивана', 'Ивановну', 'Иванова'],
          ['Narzędnik', 'Иваном', 'Ивановной', 'Ивановым'],
          ['Miejscownik', 'об Иване', 'об Ивановне', 'об Иванове'],
        ],
        caption: 'Imię odmienione przez wszystkie sześć przypadków',
        boldColumnIndices: [0],
      },
      bullets: [
        '**Я иду к Ивану** („Idę do Iwana") używa celownika, jak każdy inny rzeczownik po к.',
        '**Я говорю об Ивановне** („Mówię o Iwanownie") używa miejscownika po об.',
        'Pełny wzorzec każdego przypadku znajdziesz w naszych przewodnikach po [dopełniaczu](/learn/articles/russian-genitive-case), [celowniku](/learn/articles/russian-dative-case) i [miejscowniku](/learn/articles/russian-prepositional-case).',
      ],
      subsections: [
        {
          h3: 'A co z nazwiskami jak Толстой albo Достоевская?',
          content:
            'Te odmieniają się dokładnie jak przymiotniki: **Толстого** (dopełniacz), **Толстому** (celownik), **Толстым** (narzędnik). Jeśli znasz już końcówki przymiotników, znasz już te nazwiska.',
        },
      ],
    },
    {
      h2: 'Częste błędy z rosyjskimi imionami',
      content: 'Kilka nawyków natychmiast zdradza początkującego — i łatwo je poprawić.',
      bullets: [
        '**Саша Иванович** ✗ — nigdy nie łącz zdrobnienia z otczestwem; użyj albo **Иван Иванович**, albo po prostu **Ваня**.',
        '**Мария Ивановна** dla kobiety, której ojciec ma na imię Иван ✓ — ale sprawdź rodzaj: ojciec o imieniu **Илья** daje **Ильинична**, nie „Ильевна".',
        'Zapominanie, że nazwiska jak **Достоевский** muszą zgadzać się w rodzaju: kobieta to **Достоевская**, nigdy „Достоевский".',
        'Używanie вы ze zdrobnieniem („Ваня, вы...") — wybierz jeden rejestr: albo pełne imię + вы, albo zdrobnienie + ты.',
      ],
    },
  ],
  faq: [
    {
      question: 'Czym jest rosyjskie otczestwo (отчество)?',
      answer:
        'To imię tworzone z imienia twojego ojca, używane jako środkowa część formalnego rosyjskiego imienia. Synowie otrzymują -ович/-евич (np. Иванович); córki otrzymują -овна/-евна (np. Ивановна).',
    },
    {
      question: 'Czy muszę używać czyjegoś otczestwa?',
      answer:
        'W kontekstach formalnych, zawodowych lub przy pierwszym spotkaniu — tak, używaj imienia + otczestwa z вы. Wśród przyjaciół i rodziny normalne jest zdrobnienie z ты, a otczestwa całkowicie znikają.',
    },
    {
      question: 'Dlaczego rosyjskie nazwiska różnią się między mężczyznami a kobietami?',
      answer:
        'Wiele rosyjskich nazwisk jest gramatycznie przymiotnikami lub rzeczownikami typu przymiotnikowego, więc zgadzają się w rodzaju: Иванов (on) / Иванова (ona), Достоевский (on) / Достоевская (ona).',
    },
    {
      question: 'Czy rosyjskie imiona odmieniają się przez przypadki?',
      answer:
        'Tak. Imiona podążają za zwykłą odmianą rzeczownikową: Иван → Ивана (dopełniacz/biernik), Ивану (celownik), Иваном (narzędnik), об Иване (miejscownik).',
    },
    {
      question: 'Czy używanie zdrobnienia wobec obcej osoby jest niegrzeczne?',
      answer:
        'Tak, może to zabrzmieć nadmiernie poufale. Domyślnie używaj imienia + otczestwa + вы, dopóki druga osoba nie zaprosi do bardziej nieformalnego rejestru.',
    },
  ],
  conclusionIntro:
    'Trzy części, dwa rodzaje, sześć przypadków — ale garstka wzorców obejmuje niemal każdego, kogo spotkasz.',
  conclusionBullets: [
    'Używaj **имя + отчество + вы** z obcymi i w formalnych sytuacjach',
    'Przechodź na **zdrobnienie + ты** z przyjaciółmi i rodziną',
    'Dopasuj **końcówki nazwisk** do rodzaju: -ов/-ова, -ский/-ская',
    'Pamiętaj, że imiona **odmieniają się** jak każdy inny rosyjski rzeczownik',
    'W razie wątpliwości forma formalna zawsze jest bezpiecznym wyborem',
  ],
  conclusionOutro:
    'Gdy te formy staną się naturalne, utrwal stojące za nimi końcówki przypadków naszymi przewodnikami po [dopełniaczu](/learn/articles/russian-genitive-case) i [celowniku](/learn/articles/russian-dative-case), a wzorce odmiany ćwicz w darmowym [narzędziu do ćwiczeń](/practice).',
  internalLinks: [
    {
      href: '/learn/articles/russian-adjective-declension',
      label: 'Przewodnik po odmianie rosyjskich przymiotników',
    },
    {
      href: '/learn/articles/russian-genitive-case',
      label: 'Przewodnik po rosyjskim dopełniaczu',
    },
    {
      href: '/learn/articles/russian-dative-case',
      label: 'Przewodnik po rosyjskim celowniku',
    },
    {
      href: '/learn/articles/russian-noun-gender-guide',
      label: 'Przewodnik po rodzaju rosyjskich rzeczowników',
    },
    {
      href: '/learn/articles/russian-greetings-guide',
      label: 'Przewodnik po rosyjskich powitaniach',
    },
    { href: '/practice', label: 'Darmowy quiz z rosyjskiej odmiany' },
  ],
  ctaText: 'Ćwicz rosyjskie przypadki — Za darmo →',
  ctaHref: '/practice',
  conclusion: '',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Rosyjskie imiona wyjaśnione: imię, otczestwo, nazwisko (i ich odmiana)',
    description:
      'Zrozum rosyjskie imiona: imię, otczestwo (отчество), końcówki nazwisk, zdrobnienia, zwracanie się formalne i odmianę przez przypadki.',
    datePublished: '2026-09-14',
    dateModified: '2026-09-14',
    author: {
      '@type': 'Person',
      name: 'Nathan',
      url: 'https://russiandeclensions.com/',
      image: 'https://russiandeclensions.com/landing-cases/founder-photo.webp',
      description:
        'Native speaker francuskiego uczący się rosyjskiego; pisze o gramatyce, przypadkach i praktycznych nawykach samodzielnej nauki.',
      worksFor: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://russiandeclensions.com/learn/articles/russian-names-patronymics-guide',
    },
    keywords:
      'rosyjskie imiona przewodnik, rosyjskie otczestwo, отчество znaczenie, odmiana rosyjskich imion, rosyjskie zdrobnienia',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russian-names-patronymics-guide-header.webp',
      width: 1536,
      height: 1024,
    },
  },
};
