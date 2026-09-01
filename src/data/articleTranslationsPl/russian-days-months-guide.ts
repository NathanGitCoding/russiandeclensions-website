import type { LearnArticle } from '../learnArticles';

/** Polskie tłumaczenie artykułu `russian-days-months-guide` (źródło angielskie: `learnArticles.ts`). */
export const russianDaysMonthsGuidePl: LearnArticle = {
  slug: 'russian-days-months-guide',
  title: 'Dni tygodnia i miesiące po rosyjsku (kompletny przewodnik 2026)',
  metaTitle:
    'Dni tygodnia i miesiące po rosyjsku | Kompletny przewodnik 2026 | Russian Cases with Anna',
  metaDescription:
    'Naucz się dni tygodnia i miesięcy po rosyjsku wraz z wymową oraz regułą gramatyczną, która zaskakuje uczących się: в понедельник (biernik) vs в январе (miejscownik).',
  keywords: [
    'dni tygodnia po rosyjsku',
    'miesiące po rosyjsku',
    'rosyjskie dni tygodnia',
    'rosyjskie miesiące',
    'jak powiedzieć dni po rosyjsku',
    'słownictwo kalendarza rosyjskiego',
    'понедельник rosyjski',
    'gramatyka dat po rosyjsku',
    'dni i miesiące przypadki rosyjskie',
    'słownictwo tygodnia po rosyjsku',
  ],
  h1: 'Dni tygodnia i miesiące po rosyjsku (kompletny przewodnik)',
  heroImage: {
    src: '/articles/russia-kremlin-moscow.webp',
    alt: 'Nauka dni tygodnia i miesięcy po rosyjsku — kompletny przewodnik',
    width: 1200,
    height: 630,
  },
  intro:
    'Dni tygodnia i miesiące wyglądają jak czyste słownictwo — siedem słów, dwanaście słów, zapamiętać i iść dalej. **Ale w języku rosyjskim wiążą się z pułapką gramatyczną, która zaskakuje niemal każdego uczącego się przynajmniej raz.** Powiedzenie „w poniedziałek" wymaga jednego przypadka gramatycznego. Powiedzenie „w styczniu" wymaga zupełnie innego. Pomylenie ich sprawia, że zdanie brzmi wyraźnie obco, nawet jeśli każde słowo jest poprawne.\n\nDobra wiadomość: **reguła jest prosta, gdy zostanie jasno sformułowana**, a rosyjskie podręczniki rzadko przedstawiają ją w jednym miejscu. Ten przewodnik daje pełną listę dni i miesięcy z wymową, dokładną regułę przypadka dla „w [dzień]" kontra „w [miesiąc]", jak zbudować pełną datę oraz jak zapytać, jaki dziś dzień lub data.',
  introByline: {
    text: '**Napisane przez Nathana** — rodzimy użytkownik francuskiego uczący się rosyjskiego; dzielę się tym, co naprawdę działa w gramatyce, przypadkach i codziennej praktyce.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, założyciel Russian Cases with Anna',
    imageWidth: 256,
    imageHeight: 256,
  },
  whatYouLearn: [
    'Wszystkie siedem dni tygodnia po rosyjsku, z wymową i dosłownym znaczeniem',
    'Wszystkie dwanaście miesięcy po rosyjsku, z wymową oraz formami dopełniacza/miejscownika',
    'Podstawowa reguła: dni używają **„в" + biernik**, miesiące używają **„в" + miejscownik**',
    'Jak mówić o **powtarzających się** dniach: „w poniedziałki" (по + celownik liczby mnogiej)',
    'Jak zbudować pełną datę i zapytać „jaki dziś dzień?" / „jaka dziś data?"',
    'Najczęstsze błędy — i jedno słowo (среда), które zmienia akcent w bierniku',
  ],
  leadMagnetCta: {
    title: 'Opanuj rosyjskie przypadki poza kalendarzem — darmowa aplikacja',
    description:
      'Dni i miesiące to tylko kolejne miejsce, w którym pojawiają się rosyjskie przypadki. Russian Cases with Anna oferuje ustrukturyzowane lekcje i inteligentne quizy, które automatyzują każdy przypadek — za darmo na iOS i Androida.',
    ctaText: 'Pobierz aplikację — Za darmo',
    ctaHref: '/',
  },
  sections: [
    {
      h2: 'Dni tygodnia po rosyjsku: pełna lista',
      content:
        'W przeciwieństwie do wielu zachodnich kalendarzy, **rosyjski tydzień zaczyna się w poniedziałek** (понедельник) i kończy w niedzielę (воскресенье) — odpowiada to normie ISO i każdemu rosyjskiemu kalendarzowi lub planerowi, jaki zobaczysz. Kilka nazw dni staje się przejrzystych, gdy poznasz ich pochodzenie.',
      table: {
        headers: ['Dzień', 'Rosyjski', 'Transliteracja', 'Dosłowne pochodzenie'],
        rows: [
          ['Poniedziałek', 'понедельник', "ponedel'nik", 'после недели — „po dniu odpoczynku"'],
          ['Wtorek', 'вторник', 'vtornik', 'второй — „drugi (dzień)"'],
          ['Środa', 'среда', 'sreda', 'середина — „środek (tygodnia)"'],
          ['Czwartek', 'четверг', 'chetverg', 'четвёртый — „czwarty (dzień)"'],
          ['Piątek', 'пятница', 'pyatnitsa', 'пятый — „piąty (dzień)"'],
          ['Sobota', 'суббота', 'subbota', 'z hebrajskiego „szabat", przez cerkiewnosłowiański'],
          ['Niedziela', 'воскресенье', "voskresen'ye", 'воскресение — „Zmartwychwstanie"'],
        ],
        caption: 'Siedem dni tygodnia po rosyjsku',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Rosyjski tydzień biegnie **od poniedziałku do niedzieli**, a nie od niedzieli do soboty',
        '**Среда** (środa) dosłownie znaczy „środek" — leży w połowie tygodnia roboczego',
        '**Суббота** (sobota) to zapożyczenie z hebrajskiego шаббат (szabat), przejęte przez cerkiewnosłowiański',
        '**Воскресенье** (niedziela) zastąpiło starsze pogańskie słowo неделя („bez pracy") wraz z rozprzestrzenieniem się chrześcijaństwa — неделя dziś oznacza „tydzień" we współczesnym rosyjskim',
        'Wszystkie nazwy dni pisze się **małą literą** w rosyjskim',
      ],
    },
    {
      h2: 'Miesiące po rosyjsku: pełna lista',
      content:
        'Rosyjskie nazwy miesięcy nie mają związku z polskimi (pochodzą ze starych słowiańskich słów opisujących przyrodę, nie z łaciny) — z jednym wyjątkiem: są **zawsze pisane małą literą**, a większość uczących się uważa je za łatwiejsze do wymówienia niż dni. Poniżej znajdziesz formę mianownikową (formę „słownikową") oraz dwie formy, których będziesz faktycznie używać najczęściej: dopełniacz (do dat) i miejscownik (do „w [miesiąc]").',
      table: {
        headers: ['Miesiąc', 'Rosyjski (mianownik)', 'Dopełniacz (daty)', 'Miejscownik („w...")'],
        rows: [
          ['Styczeń', 'январь', 'января', 'январе'],
          ['Luty', 'февраль', 'февраля', 'феврале'],
          ['Marzec', 'март', 'марта', 'марте'],
          ['Kwiecień', 'апрель', 'апреля', 'апреле'],
          ['Maj', 'май', 'мая', 'мае'],
          ['Czerwiec', 'июнь', 'июня', 'июне'],
          ['Lipiec', 'июль', 'июля', 'июле'],
          ['Sierpień', 'август', 'августа', 'августе'],
          ['Wrzesień', 'сентябрь', 'сентября', 'сентябре'],
          ['Październik', 'октябрь', 'октября', 'октябре'],
          ['Listopad', 'ноябрь', 'ноября', 'ноябре'],
          ['Grudzień', 'декабрь', 'декабря', 'декабре'],
        ],
        caption: 'Rosyjskie miesiące: formy mianownika, dopełniacza i miejscownika',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Większość miesięcy jest **rodzaju męskiego** i kończy się spółgłoską lub **-ь** (январь, май, июнь)',
        'Forma dopełniacza (używana w datach) zawsze kończy się na **-я**: января, февраля, марта…',
        'Forma miejscownika (używana po „в" dla „w [miesiąc]") kończy się na **-е**: январе, феврале, марте…',
        '**Июнь** (czerwiec) i **июль** (lipiec) łatwo pomylić w szybkiej mowie — słuchaj końcowej spółgłoski: -нь kontra -ль',
        'Nazwy miesięcy nigdy nie są pisane wielką literą po rosyjsku, nawet na początku zdania',
      ],
    },
    {
      h2: 'Reguła gramatyczna: dni przyjmują biernik, miesiące — miejscownik',
      content:
        'To reguła, która zaskakuje niemal każdego uczącego się. Gdy mówisz „**w [dzień]**" lub „**w [miesiąc]**" z przyimkiem **в**, przypadek, który następuje, jest inny dla dni i dla miesięcy — i nie ma skrótu, po prostu trzeba wiedzieć, który jest który.\n\n**Dni tygodnia: „в" + biernik.** Он придёт **в понедельник** (Przyjdzie w poniedziałek). Мы встречаемся **во вторник** (Spotykamy się we wtorek).\n\n**Miesiące: „в" + miejscownik.** Я родился **в январе** (Urodziłem się w styczniu). Свадьба будет **в июне** (Ślub będzie w czerwcu).\n\nDla męskich nazw dni (понедельник, вторник, четверг) biernik wygląda identycznie jak mianownik, więc reguła jest niewidoczna. Staje się widoczna przy trzech żeńskich dniach — среда, пятница, суббота — które faktycznie zmieniają formę, oraz przy воскресенье, które jest rodzaju nijakiego i również pozostaje bez zmian.',
      table: {
        headers: ['Kategoria', 'Przypadek po „в"', 'Przykład'],
        rows: [
          ['Dni tygodnia', 'Biernik', 'в понедельник, во вторник, в среду, в пятницу, в субботу'],
          ['Miesiące', 'Miejscownik', 'в январе, в марте, в июне, в декабре'],
        ],
        caption: 'Dni kontra miesiące: jaki przypadek następuje po „в"',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        '**Среда** (środa) jest najbardziej podchwytliwa: mianownik ma akcent sredá, ale biernik **в сре́ду** przesuwa akcent na pierwszą sylabę — klasyczny rosyjski wzorzec przesunięcia akcentu (jak рука́ → в ру́ку)',
        '**Пятница → в пятницу** i **суббота → в субботу**: obie żeńskie, obie przyjmują regularną końcówkę **-у** w bierniku',
        '**Вторник** staje się **во вторник** (nie в вторник) — „в" zmienia się w „во" przed grupą spółgłosek, dla łatwiejszej wymowy',
        'Częstym błędem jest mówienie „**в январь**" zamiast **в январе** — miesiące nigdy nie przyjmują biernika po „в" w tym kontekście',
        'Ta sama reguła biernika dotyczy innych wyrażeń czasu: **в эту среду** (w tę środę), **в прошлый вторник** (w zeszły wtorek)',
      ],
    },
    {
      h2: 'Mówienie o każdym poniedziałku, każdym tygodniu: „По" + celownik liczby mnogiej',
      content:
        'Aby powiedzieć, że coś dzieje się **regularnie** w dany dzień („w poniedziałki", „w każdy wtorek"), rosyjski całkowicie zmienia przyimek: używa się **по** z **celownikiem liczby mnogiej** dnia, a nie **в** z biernikiem liczby pojedynczej.',
      table: {
        headers: ['Polski', 'Rosyjski', 'Przypadek'],
        rows: [
          ['w poniedziałki', 'по понедельникам', 'Celownik liczby mnogiej'],
          ['we wtorki', 'по вторникам', 'Celownik liczby mnogiej'],
          ['w środy', 'по средам', 'Celownik liczby mnogiej'],
          ['w czwartki', 'по четвергам', 'Celownik liczby mnogiej'],
          ['w piątki', 'по пятницам', 'Celownik liczby mnogiej'],
          ['w soboty', 'по субботам', 'Celownik liczby mnogiej'],
          ['w niedziele', 'по воскресеньям', 'Celownik liczby mnogiej'],
        ],
        caption: 'Powtarzające się dni: по + celownik liczby mnogiej',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        '**У меня русский по понедельникам** (Mam rosyjski w poniedziałki) — jeden, powtarzający się dzień',
        'Porównaj: **в понедельник** (ten konkretny, nadchodzący poniedziałek) kontra **по понедельникам** (każdy poniedziałek, jako zasada)',
        'To ten sam wzorzec **по + celownik**, co w „по субботам магазин закрыт" (sklep jest zamknięty w soboty)',
      ],
    },
    {
      h2: 'Jak powiedzieć pełną datę po rosyjsku',
      content:
        'Pełna data łączy trzy elementy, każdy w innej formie: **numer dnia** (liczebnik porządkowy rodzaju nijakiego, ponieważ domyślnym rzeczownikiem jest число — „data/liczba"), **miesiąc** (dopełniacz) oraz **rok** (liczebnik porządkowy w miejscowniku, wprowadzony przez в).\n\n**5 czerwca 2026 → пятое июня две тысячи двадцать шестого года.**\n\nPełniejsze omówienie liczebników porządkowych i tworzenia lat znajdziesz w naszym [kompletnym przewodniku po rosyjskich liczbach](/learn/articles/russian-numbers-guide) — ta sekcja obejmuje jedynie mechanikę dzień/miesiąc/rok specyficzną dla zapisu pełnych dat.',
      table: {
        headers: ['Polski', 'Rosyjski', 'Uwagi'],
        rows: [
          ['1 stycznia', 'первое января', 'Liczebnik porządkowy (nijaki) + miesiąc w dopełniaczu'],
          ['8 marca', 'восьмое марта', 'Liczebnik porządkowy (nijaki) + miesiąc w dopełniaczu'],
          ['9 maja', 'девятое мая', 'Liczebnik porządkowy (nijaki) + miesiąc w dopełniaczu'],
          ['31 grudnia', 'тридцать первое декабря', 'Złożony liczebnik porządkowy + miesiąc w dopełniaczu'],
        ],
        caption: 'Zapisywanie dat: dzień (liczebnik porządkowy) + miesiąc (dopełniacz)',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'W dacie „w" nie tłumaczy się przez **в** — po prostu używa się samego liczebnika porządkowego: **Я приеду пятого июня** (Przyjadę 5 czerwca) — to dopełniacz, nie biernik, ponieważ odpowiada na „kiedy dokładnie" jako data, a nie jako dzień tygodnia',
        'Daty pisane w dokumentach używają formatu liczbowego **dzień.miesiąc.rok**: 05.06.2026',
        'Dla lat konstrukcja „w [rok]" to **в две тысячи двадцать шестом году** — pełne omówienie znajdziesz w przewodniku po liczbach',
      ],
    },
    {
      h2: 'Jak zapytać „jaki dziś dzień?" i „jaka dziś data?"',
      content:
        'Rosyjski ma tu dwa oddzielne pytania — nie myl ich, ponieważ używają różnych słów pytających i oczekują odpowiedzi w różnych przypadkach.',
      table: {
        headers: ['Pytanie', 'Rosyjski', 'Przykładowa odpowiedź'],
        rows: [
          ['Jaki dziś dzień tygodnia?', 'Какой сегодня день недели?', 'Сегодня среда. (Mianownik)'],
          ['Jaka dziś data?', 'Какое сегодня число?', 'Сегодня пятое июня. (Liczebnik porządkowy + miesiąc w dopełniaczu)'],
          ['Jaki dzień tygodnia będzie w piątek?', 'Какой день недели будет в пятницу?', '—'],
        ],
        caption: 'Pytanie o dzień i datę',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        '**Какой сегодня день (недели)?** pyta o dzień tygodnia — odpowiedź w mianowniku: Сегодня понедельник (Dziś jest poniedziałek)',
        '**Какое сегодня число?** pyta o datę kalendarzową — odpowiedź z liczebnikiem porządkowym + miesiącem w dopełniaczu: Сегодня пятнадцатое марта (Dziś jest 15 marca)',
        'Oba pytania używają „сегодня" (dzisiaj), ale **какой** (rodzaj męski, zgadza się z день) i **какое** (rodzaj nijaki, zgadza się z число) nie są wymienne',
      ],
    },
    {
      h2: 'Częste błędy z dniami i miesiącami',
      content:
        'Te cztery błędy odpowiadają za większość pomyłek popełnianych przez uczących się przy rosyjskich dniach i miesiącach:',
      bullets: [
        '**Używanie biernika po miesiącach.** Mówienie „**в январь**" zamiast **в январе**. Miesiące zawsze przyjmują miejscownik po в.',
        '**Używanie miejscownika po dniach.** Mówienie „**в понедельнике**" zamiast **в понедельник**. Dni zawsze przyjmują biernik po в.',
        '**Zapominanie o przesunięciu akcentu w среда.** Mianownik to sredá, ale biernik to **сре́ду** — akcent przesuwa się na pierwszą sylabę. Mówienie sredú brzmi obco.',
        '**Mylenie какой i какое.** Какой день (rodzaj męski, zgadza się z день) kontra какое число (rodzaj nijaki, zgadza się z число) — pomylenie ich to bardzo częsty błąd początkujących.',
        '**Mieszanie в + biernik (konkretny dzień) z по + celownik liczby mnogiej (co tydzień).** В субботу = w tę sobotę; по субботам = w każdą sobotę.',
      ],
    },
  ],
  faq: [
    {
      question: 'Jaki przypadek przyjmują dni tygodnia w języku rosyjskim?',
      answer:
        'Dni tygodnia przyjmują **biernik** po przyimku **в**: в понедельник (w poniedziałek), во вторник (we wtorek), в среду (w środę). Męskie i nijakie nazwy dni wyglądają identycznie w bierniku i mianowniku; trzy żeńskie dni (среда, пятница, суббота) zmieniają końcówkę, a среда dodatkowo przesuwa akcent: **в сре́ду**.',
    },
    {
      question: 'Jaki przypadek przyjmują miesiące w języku rosyjskim?',
      answer:
        'Miesiące przyjmują **miejscownik** po в przy mówieniu „w [miesiąc]": в январе (w styczniu), в июне (w czerwcu), в декабре (w grudniu). To różni się od biernika używanego dla dni — częste źródło błędów uczących się.',
    },
    {
      question: 'Czy rosyjski tydzień zaczyna się w poniedziałek czy w niedzielę?',
      answer:
        'Rosyjski tydzień zaczyna się w **poniedziałek** (понедельник) i kończy w **niedzielę** (воскресенье), zgodnie z normą ISO 8601. To przeciwieństwo tradycyjnej amerykańskiej konwencji kalendarza, gdzie tydzień zaczyna się w niedzielę.',
    },
    {
      question: 'Jak powiedzieć „w każdy poniedziałek" po rosyjsku?',
      answer:
        'Użyj **по + celownik liczby mnogiej**: по понедельникам (w poniedziałki / w każdy poniedziałek). To różni się od **в понедельник** (biernik liczby pojedynczej), które odnosi się do konkretnego poniedziałku, a nie do powtarzającego się wzorca.',
    },
    {
      question: 'Jak powiedzieć pełną datę po rosyjsku, np. „5 czerwca 2026"?',
      answer:
        'Połącz liczebnik porządkowy (rodzaj nijaki, dla dnia) z miesiącem w dopełniaczu: **пятое июня** (5 czerwca). Dla roku dodaj również liczebnik porządkowy roku w dopełniaczu, wprowadzony przez „z": **пятое июня две тысячи двадцать шестого года**. Pełne zasady dotyczące liczebników porządkowych i lat znajdziesz w naszym [przewodniku po rosyjskich liczbach](/learn/articles/russian-numbers-guide).',
    },
  ],
  conclusion:
    'Dni i miesiące wyglądają jak proste listy słownictwa, ale w rzeczywistości są zwartą lekcją o tym, jak rosyjskie przypadki działają w prawdziwych, codziennych zdaniach. Gdy podstawowa reguła stanie się jasna — **dni przyjmują biernik po в, miesiące przyjmują miejscownik po в** — możesz mówić o swoim harmonogramie, urodzinach i planach z prawdziwą pewnością.\n\nNajszybszym sposobem, aby stało się to automatyczne, jest używanie tego: wspominaj, w jaki dzień coś się dzieje, używaj по + celownik liczby mnogiej dla swojej cotygodniowej rutyny i ćwicz pełne daty na głos. Rozmowy o kalendarzu pojawiają się niemal w każdej prawdziwej konwersacji, więc to jeden z najbardziej wartościowych wzorców gramatycznych do przećwiczenia.',
  conclusionBullets: [
    'Rosyjski tydzień biegnie **od poniedziałku do niedzieli** — siedem nazw dni, wszystkie małą literą',
    'Dwanaście miesięcy nie ma związku z łacińskimi nazwami i również zawsze pisane są małą literą',
    'Podstawowa reguła: **dni + в → biernik**; **miesiące + в → miejscownik**',
    'Powtarzające się dni używają **по + celownik liczby mnogiej**: по понедельникам (w poniedziałki)',
    'Среда to słowo, na które trzeba uważać — jego akcent przesuwa się w bierniku: **в сре́ду**',
  ],
  conclusionOutro:
    'Dni i miesiące to tylko mały fragment znacznie większego systemu — te same przypadki biernika i miejscownika, których właśnie użyłeś, rządzą rzeczownikami, zaimkami i przymiotnikami w całym języku. **Opanowanie tego pełnego systemu przypadków sprawia, że „znam kilka rosyjskich słów" zamienia się w prawdziwy, płynny rosyjski.**',
  ctaText: 'Pobierz Russian Cases with Anna — Za darmo',
  ctaHref: '/',
  internalLinks: [
    {
      href: '/learn/articles/russian-numbers-guide',
      label: 'Liczby po rosyjsku: jak liczyć po rosyjsku (kompletny przewodnik)',
    },
    {
      href: '/learn/articles/russian-greetings-guide',
      label: 'Rosyjskie pozdrowienia: jak powiedzieć cześć po rosyjsku (kompletny przewodnik)',
    },
    {
      href: '/learn/articles/russian-word-stress-guide',
      label: 'Akcent w języku rosyjskim: dlaczego zmienia wszystko (i jak go opanować)',
    },
    {
      href: '/learn/articles/russian-cases-explained-beginners-guide',
      label: 'Rosyjskie przypadki wyjaśnione prosto: przewodnik wizualny dla początkujących',
    },
    {
      href: '/learn/articles/russian-prepositions-and-cases',
      label: 'Rosyjskie przyimki i przypadki: który przyimek wymaga którego przypadku?',
    },
    { href: '/practice', label: 'Darmowy quiz deklinacyjny (wszystkie sześć przypadków)' },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Dni tygodnia i miesiące po rosyjsku (kompletny przewodnik 2026)',
    description:
      'Naucz się dni tygodnia i miesięcy po rosyjsku wraz z wymową oraz regułą gramatyczną, która zaskakuje uczących się: в понедельник (biernik) vs в январе (miejscownik).',
    datePublished: '2026-09-01',
    dateModified: '2026-09-01',
    author: {
      '@type': 'Person',
      name: 'Nathan',
      url: 'https://russiandeclensions.com/',
      image: 'https://russiandeclensions.com/landing-cases/founder-photo.webp',
      description: 'Rodzimy użytkownik francuskiego uczący się rosyjskiego, dzieli się tym, co naprawdę działa.',
      worksFor: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://russiandeclensions.com/learn/articles/russian-days-months-guide',
    },
    keywords:
      'dni tygodnia po rosyjsku, miesiące po rosyjsku, rosyjskie dni tygodnia, rosyjskie miesiące, słownictwo kalendarza rosyjskiego, gramatyka dat po rosyjsku',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russia-kremlin-moscow.webp',
      width: 1200,
      height: 630,
    },
  },
};
