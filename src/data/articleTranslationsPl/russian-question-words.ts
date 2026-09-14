import type { LearnArticle } from '../learnArticles';

/** Polskie tłumaczenie artykułu `russian-question-words` (źródło EN: `learnArticles.ts`). */
export const russianQuestionWordsPl: LearnArticle = {
  slug: 'russian-question-words',
  introByline: {
    text: '**Napisane przez Nathana** — native speaker francuskiego uczący się rosyjskiego; dzielę się tym, co naprawdę działa w gramatyce, przypadkach i codziennej praktyce.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, założyciel Russian Cases with Anna',
    imageWidth: 256,
    imageHeight: 256,
  },
  title: 'Rosyjskie słowa pytające: kto, co, gdzie, kiedy i jak (kompletny przewodnik)',
  metaTitle: 'Przewodnik po rosyjskich słowach pytających | Russian Cases with Anna',
  metaDescription:
    'Naucz się rosyjskich słów pytających: кто, что, где, куда, какой, сколько — oraz którego przypadku każde wymaga, z 25 gotowymi pytaniami.',
  keywords: [
    'rosyjskie słowa pytające',
    'pytania po rosyjsku',
    'кто что где куда',
    'lista słów pytających rosyjski',
    'jak zadawać pytania po rosyjsku',
    'какой который чей rosyjski',
    'сколько dopełniacz rosyjski',
    'где vs куда vs откуда',
  ],
  h1: 'Rosyjskie słowa pytające: kto, co, gdzie, kiedy i jak (kompletny przewodnik)',
  heroImage: {
    src: '/articles/russian-question-words-header.webp',
    alt: 'Notatnik z odręcznie napisanymi rosyjskimi słowami pytającymi кто что где куда когда как почему',
    width: 1280,
    height: 720,
  },
  intro:
    'Jeśli umiesz zadawać pytania po rosyjsku, możesz kierować prawie każdą rozmową. Haczyk: wiele rosyjskich słów pytających jest **powiązanych z przypadkami**. **Кого?** to nie tylko „kto?” — to „kogo?” w dopełniaczu/bierniku. **Сколько?** ściąga następujący rzeczownik do **dopełniacza**. **Где?** i **куда?** wyglądają podobnie po polsku („gdzie?”), ale wymagają innej gramatyki.\n\nTen przewodnik daje pełny zestaw dla początkujących, pokazuje odmianę **кто/что**, rozdziela **где / куда / откуда**, omawia **какой / который / чей**, wyjaśnia **сколько + dopełniacz** i kończy się **25 gotowymi pytaniami**.',
  whatYouLearn: [
    'Pełną listę najprzydatniejszych rosyjskich słów pytających',
    'Jak кто i что odmieniają się przez przypadki',
    'Где vs куда vs откуда (miejsce vs kierunek vs pochodzenie)',
    'Какой, который i чей — oraz jak się zgadzają',
    'Сколько i dlaczego bierze dopełniacz',
    '25 gotowych pytań do prawdziwych rozmów',
  ],
  leadMagnetCta: {
    title: 'Pytania stają się łatwiejsze, gdy końcówki przypadków są automatyczne',
    description:
      'Russian Cases with Anna ćwiczy końcówki za кого, чему, о ком i сколько + dopełniacz. Za darmo na iOS i Android.',
    ctaText: 'Pobierz aplikację — Za darmo',
    ctaHref: '/',
  },
  tableAccentVariant: 'genitive',
  sections: [
    {
      h2: 'Pełna lista rosyjskich słów pytających',
      content:
        'Zacznij od tego przeglądu. Dodaj go do zakładek, a potem wejdź w sekcje poniżej po gramatykę, którą każde słowo uruchamia.',
      table: {
        headers: ['Rosyjski', 'Transliteracja', 'Polski', 'Uwaga gramatyczna'],
        rows: [
          ['кто', 'kto', 'kto', 'Odmienia się (кого, кому…)'],
          ['что', 'chto', 'co', 'Odmienia się (чего, чему…)'],
          ['где', 'gde', 'gdzie (miejsce)', 'Odpowiedź często w miejscowniku'],
          ['куда', 'kuda', 'dokąd (kierunek)', 'Odpowiedź często w bierniku'],
          ['откуда', 'otkuda', 'skąd', 'Odpowiedź często z + dopełniacz'],
          ['когда', 'kogda', 'kiedy', 'Wyrażenia czasu / przypadki różnią się'],
          ['почему', 'pochemu', 'dlaczego (przyczyna)', 'Często потому что…'],
          ['зачем', 'zachem', 'po co (cel)', 'Cel / na co'],
          ['как', 'kak', 'jak', 'Sposób; też „jaki jest…?”'],
          ['какой / какая / какое / какие', 'kakoy…', 'jaki / jaki rodzaj', 'Zgadza się jak przymiotnik'],
          ['который', 'kotoryy', 'który (z zestawu) / który', 'Względne / który'],
          ['чей / чья / чьё / чьи', 'chey…', 'czyj', 'Zgadza się z rzeczownikiem'],
          ['сколько', "skol'ko", 'ile', 'Rzeczownik w dopełniaczu'],
          ['сколько стоит…?', "skol'ko stoit", 'ile to kosztuje?', 'Stałe pytanie zakupowe'],
        ],
        caption: 'Kluczowe rosyjskie słowa pytające w skrócie',
        boldColumnIndices: [0, 3],
      },
    },
    {
      h2: 'Кто i Что — oraz jak się odmieniają',
      content:
        '**Кто?** (kto?) i **Что?** (co?) to podstawa. W mianowniku wyglądają prosto. W innych przypadkach stają się formami, które początkujący zapominają najpierw: **кого, чему, о ком…**',
      table: {
        headers: ['Przypadek', 'кто', 'что', 'Wskazówka po polsku'],
        rows: [
          ['Mianownik', 'кто', 'что', 'kto? / co? (podmiot)'],
          ['Dopełniacz', 'кого', 'чего', 'kogo? / czego? / нет кого?'],
          ['Celownik', 'кому', 'чему', 'komu? / czemu?'],
          ['Biernik', 'кого', 'что', 'kogo? / co? (dopełnienie)'],
          ['Narzędnik', 'кем', 'чем', 'z kim? / czym?'],
          ['Miejscownik', 'о ком', 'о чём', 'o kim? / o czym?'],
        ],
        caption: 'Odmiana кто i что',
        boldColumnIndices: [0, 1, 2],
      },
      subsections: [
        {
          h3: 'Szybkie przykłady',
          content:
            '**Кто это?** — Kto to?\n**Кого ты видишь?** — Kogo widzisz?\n**Кому дать книгу?** — Komu dać książkę?\n**О чём вы говорите?** — O czym mówicie?\n**Чем ты пишешь?** — Czym piszesz?',
        },
      ],
      bullets: [
        '**Кого** to zarówno dopełniacz, jak i biernik od кто — kontekst mówi, który przypadek.',
        'O paralelach zaimkowych (мне, его, неё…) zobacz [Odmiana zaimków rosyjskich](/learn/articles/russian-pronouns-declension).',
      ],
    },
    {
      h2: 'Где vs Куда vs Откуда',
      content:
        'Polski często rozróżnia „gdzie / dokąd / skąd”. Rosyjski też oddziela miejsce, cel i pochodzenie. Mieszanie ich to jeden z najczęstszych błędów początkujących.',
      table: {
        headers: ['Pytanie', 'Znaczenie', 'Typowy wzorzec odpowiedzi', 'Przykład'],
        rows: [
          ['Где?', 'Gdzie (w/na)?', 'в/на + miejscownik', 'Где книга? — На столе.'],
          ['Куда?', 'Dokąd?', 'в/на + biernik', 'Куда ты идёшь? — В школу.'],
          ['Откуда?', 'Skąd?', 'из/с/от + dopełniacz', 'Откуда ты? — Из Франции.'],
        ],
        caption: 'Miejsce vs kierunek vs pochodzenie',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        '**Где?** → miejsce statyczne (często [miejscownik](/learn/articles/russian-prepositional-case)).',
        '**Куда?** → ruch w stronę (często [biernik](/learn/articles/russian-accusative-case) po в/на).',
        '**Откуда?** → pochodzenie (często [dopełniacz](/learn/articles/russian-genitive-case) po из/с/от).',
        'Ten sam rzeczownik, trzy formy: **в школе** / **в школу** / **из школы**.',
      ],
    },
    {
      h2: 'Какой, Который i Чей',
      content:
        'Te trzy wyglądają podobnie w polskich tłumaczeniach („jaki / który / czyj”), ale nie są wymienne.',
      subsections: [
        {
          h3: 'Какой — jaki / jaki rodzaj',
          content:
            '**Какой?** zgadza się jak przymiotnik: какая, какое, какие + końcówki przypadków.\n**Какой это фильм?** — Jaki to film?\n**В каком доме ты живёшь?** — W jakim domu mieszkasz?',
        },
        {
          h3: 'Который — który / który (względne)',
          content:
            '**Который** wybiera ze znanego zestawu lub wprowadza zdanie względne.\n**Который час?** — Która godzina?\n**Книга, которую я читаю…** — Książka, którą czytam…',
        },
        {
          h3: 'Чей — czyj',
          content:
            '**Чей / чья / чьё / чьи** zgadzają się z **rzeczą posiadaną**, nie z właścicielem.\n**Чья это сумка?** — Czyja to torba?\n**Чьи это ключи?** — Czyje to klucze?',
        },
      ],
      bullets: [
        'Jeśli potrzebujesz tabel zgodności przymiotników, zobacz [odmianę przymiotników](/learn/articles/russian-adjective-declension).',
        '**Какой** to codzienny koń roboczy dla „jaki / jaki rodzaj + rzeczownik”.',
      ],
    },
    {
      h2: 'Сколько i dopełniacz',
      content:
        '**Сколько?** znaczy „ile?”. Rzeczownik, który następuje, jest zwykle w **dopełniaczu**.',
      table: {
        headers: ['Rosyjski', 'Polski', 'Uwaga'],
        rows: [
          ['Сколько у тебя братьев?', 'Ilu masz braci?', 'братьев = dopełniacz liczby mnogiej'],
          ['Сколько это стоит?', 'Ile to kosztuje?', 'Stałe pytanie handlowe'],
          ['Сколько времени?', 'Ile czasu?', 'времени = dopełniacz'],
          ['Сколько лет тебе?', 'Ile masz lat?', 'Wzorzec wieku z celownikiem тебе'],
        ],
        caption: 'Pytania сколько z dopełniaczem',
        boldColumnIndices: [0],
      },
      bullets: [
        'Same liczby też wchodzą w interakcję z dopełniaczem — szczegóły w [przewodniku po liczbach](/learn/articles/russian-numbers-guide) i [przewodniku po dopełniaczu](/learn/articles/russian-genitive-case).',
        'Po **сколько** nie zostawiaj rzeczownika w mianowniku: *сколько братья* ✗ → **сколько братьев** ✓.',
      ],
    },
    {
      h2: '25 gotowych pytań',
      content:
        'Zapamiętaj je jako ramy. Podmieniaj własne rzeczowniki, gdy wzorzec stanie się automatyczny.',
      table: {
        headers: ['#', 'Rosyjski', 'Polski'],
        rows: [
          ['1', 'Кто это?', 'Kto to?'],
          ['2', 'Что это?', 'Co to?'],
          ['3', 'Как тебя зовут?', 'Jak masz na imię?'],
          ['4', 'Откуда ты?', 'Skąd jesteś?'],
          ['5', 'Где ты живёшь?', 'Gdzie mieszkasz?'],
          ['6', 'Куда ты идёшь?', 'Dokąd idziesz?'],
          ['7', 'Когда мы встретимся?', 'Kiedy się spotkamy?'],
          ['8', 'Почему ты устал?', 'Dlaczego jesteś zmęczony?'],
          ['9', 'Зачем тебе это?', 'Po co ci to?'],
          ['10', 'Как дела?', 'Jak się masz? / Jak leci?'],
          ['11', 'Какой сегодня день?', 'Jaki dziś dzień?'],
          ['12', 'Который час?', 'Która godzina?'],
          ['13', 'Чья это книга?', 'Czyja to książka?'],
          ['14', 'Сколько это стоит?', 'Ile to kosztuje?'],
          ['15', 'Сколько тебе лет?', 'Ile masz lat?'],
          ['16', 'Кого ты ждёшь?', 'Kogo czekasz?'],
          ['17', 'Кому позвонить?', 'Do kogo zadzwonić?'],
          ['18', 'О чём фильм?', 'O czym jest film?'],
          ['19', 'Чем ты занимаешься?', 'Czym się zajmujesz?'],
          ['20', 'В каком городе ты был?', 'W jakim mieście byłeś?'],
          ['21', 'Как пройти к метро?', 'Jak dojść do metra?'],
          ['22', 'Где можно купить билет?', 'Gdzie można kupić bilet?'],
          ['23', 'Когда открывается музей?', 'Kiedy otwiera się muzeum?'],
          ['24', 'Почему здесь так шумно?', 'Dlaczego tu jest tak głośno?'],
          ['25', 'Сколько остановок до центра?', 'Ile przystanków do centrum?'],
        ],
        caption: '25 częstych rosyjskich pytań',
        boldColumnIndices: [0, 1],
      },
    },
    {
      h2: 'Częste błędy ze słowami pytającymi',
      bullets: [
        '**Używanie где na kierunek:** *Где ты идёшь?* ✗ → **Куда ты идёшь?** ✓.',
        '**Zapominanie dopełniacza po сколько:** *Сколько братья?* ✗ → **Сколько братьев?** ✓.',
        '**Zostawianie кто/что w mianowniku** po przyimkach: trzeba **о ком / о чём**, **с кем / с чем**.',
        '**Mieszanie почему i зачем** — przyczyna vs cel.',
        '**Używanie который, gdy какой** jest naturalnym codziennym wyborem dla „jaki rodzaj…”.',
      ],
    },
  ],
  faq: [
    {
      question: 'Jakie rosyjskie słowa pytające są najważniejsze dla początkujących?',
      answer:
        'Zacznij od кто, что, где, куда, откуда, когда, почему, как, какой, чей i сколько. Pokrywają przedstawienia, kierunki, czas, powody i zakupy.',
    },
    {
      question: 'Jaka jest różnica między где a куда?',
      answer:
        'Где pyta o miejsce (Gdzie jesteś?). Куда pyta o cel (Dokąd idziesz?). Odpowiedzi zwykle używają różnych przypadków: miejscownik dla где, biernik kierunku dla куда po в/на.',
    },
    {
      question: 'Czy кто i что zmieniają się z przypadkami?',
      answer:
        'Tak. Odmieniają się w pełni: кого/чего, кому/чему, кем/чем, о ком/о чём itd. Nauka tych form jest niezbędna do naturalnych pytań.',
    },
    {
      question: 'Dlaczego сколько bierze dopełniacz?',
      answer:
        'Bo wyrażenia ilościowe w rosyjskim typowo wymagają dopełniacza liczonego rzeczownika: сколько братьев, сколько времени. To ta sama rodzina reguł co liczby i нет + dopełniacz.',
    },
    {
      question: 'Kiedy używać какой vs который?',
      answer:
        'Какой to zwykłe pytanie o „jaki / jaki rodzaj” z rzeczownikiem. Который często znaczy „który” z zestawu lub wprowadza zdanie względne (książka, którą…).',
    },
  ],
  conclusionIntro: 'Słowa pytające to słownictwo plus logika przypadków w jednym pakiecie.',
  conclusionBullets: [
    'Naucz się **listy podstawowej**, potem **form przypadków** кто/что',
    'Nigdy nie mieszaj **где / куда / откуда**',
    'Odmieniaj **какой / чей** jak przymiotniki',
    'Stawiaj rzeczowniki po **сколько** w **dopełniaczu**',
    'Ćwicz **25 ram**, aż wyjdą automatycznie',
  ],
  conclusionOutro:
    'Następnie połącz te pytania z pełnymi ćwiczeniami przypadków w naszym darmowym [narzędziu do praktyki](/practice) i trzymaj otwarte przewodniki po [zaimkach](/learn/articles/russian-pronouns-declension) i [dopełniaczu](/learn/articles/russian-genitive-case), aż formy się ułożą.',
  internalLinks: [
    {
      href: '/learn/articles/russian-pronouns-declension',
      label: 'Odmiana zaimków rosyjskich',
    },
    {
      href: '/learn/articles/russian-genitive-case',
      label: 'Przewodnik po rosyjskim dopełniaczu',
    },
    {
      href: '/learn/articles/russian-accusative-case',
      label: 'Przewodnik po rosyjskim bierniku',
    },
    {
      href: '/learn/articles/russian-prepositional-case',
      label: 'Przewodnik po rosyjskim miejscowniku',
    },
    {
      href: '/learn/articles/russian-greetings-guide',
      label: 'Przewodnik po rosyjskich powitaniach',
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
    headline: 'Rosyjskie słowa pytające: kto, co, gdzie, kiedy i jak (kompletny przewodnik)',
    description:
      'Naucz się rosyjskich słów pytających: кто, что, где, куда, какой, сколько — oraz którego przypadku każde wymaga, z 25 gotowymi pytaniami.',
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
      '@id': 'https://russiandeclensions.com/learn/articles/russian-question-words',
    },
    keywords:
      'rosyjskie słowa pytające, pytania po rosyjsku, кто что где куда, сколько dopełniacz rosyjski, где vs куда vs откуда',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russian-question-words-header.webp',
      width: 1280,
      height: 720,
    },
  },
};
