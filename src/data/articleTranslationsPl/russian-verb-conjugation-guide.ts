import type { LearnArticle } from '../learnArticles';

/** Polskie tłumaczenie artykułu `russian-verb-conjugation-guide` (źródło EN: `learnArticles.ts`). */
export const russianVerbConjugationGuidePl: LearnArticle = {
  slug: 'russian-verb-conjugation-guide',
  title:
    'Koniugacja rosyjskich czasowników: kompletny przewodnik (czas teraźniejszy, przeszły i przyszły)',
  metaTitle:
    'Koniugacja rosyjskich czasowników: teraźniejszy, przeszły i przyszły | Russian Cases with Anna',
  metaDescription:
    'Naucz się koniugacji rosyjskich czasowników krok po kroku: dwie grupy koniugacji, końcówki czasu teraźniejszego, alternacje spółgłosek, czas przeszły, czas przyszły i 8 czasowników nieregularnych w pełni odmienionych.',
  keywords: [
    'koniugacja rosyjskich czasowników',
    'odmiana rosyjskich czasowników',
    'rosyjskie czasy czasownikowe',
    'koniugacja czasu teraźniejszego rosyjski',
    'rosyjskie czasowniki w czasie przeszłym',
    'pierwsza i druga koniugacja rosyjska',
    'końcówki rosyjskich czasowników',
    'jak odmieniać czasowniki po rosyjsku',
  ],
  h1: 'Koniugacja rosyjskich czasowników: kompletny przewodnik po czasie teraźniejszym, przeszłym i przyszłym',
  intro:
    'Rosyjskie rzeczowniki się deklinuje; rosyjskie czasowniki się koniuguje — i te dwa systemy grają w zupełnie innej lidze trudności. Przypadki karzą Cię tuzinem możliwych końcówek na słowo. Koniugacja czasowników jest w porównaniu z tym niemal mechaniczna: **gdy tylko wiesz, do której z dwóch grup koniugacji należy czasownik, sześć końcówek mówi Ci wszystko o tym, kto co robi i kiedy.**\n\nHaczyk polega na tym, że „niemal mechaniczna" wciąż kryje kilka pułapek: garść czasowników, które wyglądają jak jedna koniugacja, a zachowują się jak druga, spółgłoski, które po cichu się zmieniają w formie „ja", oraz czas przeszły, który całkowicie ignoruje osobę i zwraca uwagę wyłącznie na rodzaj i liczbę. Nic z tego nie jest trudne, gdy zostanie jasno przedstawione — a w przeciwieństwie do przypadków, większość koniugacji czasowników można przyswoić podczas **jednej skoncentrowanej sesji nauki**.\n\nTen przewodnik omawia dwie grupy koniugacji, pełne tabele czasu teraźniejszego, czas przeszły (i jego wyjątki), dwa sposoby budowania czasu przyszłego oraz osiem czasowników nieregularnych, których będziesz używać niemal w każdej rozmowie.',
  introByline: {
    text: '**Napisane przez Nathana** — native speaker francuskiego; uczę się rosyjskiego i dzielę się tym, co naprawdę działa w gramatyce, przypadkach i codziennej praktyce.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, założyciel Russian Cases with Anna',
    imageWidth: 256,
    imageHeight: 256,
  },
  whatYouLearn: [
    'Jak odróżnić dwie grupy koniugacji na podstawie bezokolicznika — i formy „oni", gdy bezokolicznik wprowadza w błąd',
    'Pełne końcówki czasu teraźniejszego dla obu grup koniugacji, z omówionymi przykładami',
    'Alternacje spółgłosek, które zmieniają formę „ja" (я) wielu czasowników',
    'Jak w kilka sekund utworzyć czas przeszły — i czasowniki na -ти / -чь, które łamią ten wzorzec',
    'Różnicę między czasem przyszłym prostym (dokonanym) a złożonym (буду + bezokolicznik)',
    '8 czasowników nieregularnych, których będziesz używać codziennie, w pełni odmienionych',
  ],
  leadMagnetCta: {
    title: 'Końcówki czasowników to tylko połowa układanki — darmowa aplikacja',
    description:
      'Koniugacja zajmuje się czasownikami; rosyjskie przypadki zajmują się resztą — rzeczownikami, przymiotnikami i zaimkami. Russian Cases with Anna ćwiczy wszystkie sześć przypadków dzięki uporządkowanym lekcjom i inteligentnym quizom. Za darmo na iOS i Android.',
    ctaText: 'Pobierz aplikację — Za darmo',
    ctaHref: '/',
  },
  sections: [
    {
      h2: 'Dwie grupy koniugacji: jak je rozróżnić',
      content:
        'Każdy rosyjski czasownik należy do jednej z dwóch grup koniugacji, tradycyjnie nazywanych **pierwszą koniugacją** i **drugą koniugacją**. Grupa decyduje o tym, jaki zestaw sześciu końcówek przyjmuje czasownik w czasie teraźniejszym (i w czasie przyszłym prostym).\n\nKońcówka bezokolicznika to przydatna pierwsza wskazówka: większość czasowników na **-ать / -ять** to pierwsza koniugacja, a większość czasowników na **-ить** to druga koniugacja. Ale to tylko wskazówka — krótka, dobrze znana lista wyjątków odmienia się „na odwrót", więc sam bezokolicznik nie jest dowodem.',
      table: {
        headers: [
          'Koniugacja',
          'Typowa końcówka bezokolicznika',
          'Przykład',
          'Końcówka „oni" (они)',
        ],
        rows: [
          ['Pierwsza (I)', '-ать, -ять, większość -еть', 'читать, гулять, уметь', '-ут / -ют'],
          [
            'Druga (II)',
            '-ить (większość), kilka -еть / -ать',
            'говорить, смотреть, слышать',
            '-ат / -ят',
          ],
        ],
        caption: 'Dwie grupy koniugacji rosyjskich czasowników',
        boldColumnIndices: [0],
      },
      bullets: [
        'Najbardziej niezawodnym testem jest forma **они (oni)**: **-ут/-ют** zawsze oznacza pierwszą koniugację, **-ат/-ят** zawsze oznacza drugą koniugację',
        'Krótka lista popularnych czasowników na **-еть** odmienia się jak **druga**, nie pierwsza koniugacja: смотреть, видеть, зависеть, вертеть, обидеть, ненавидеть, терпеть',
        'Krótka lista czasowników na **-ать** również odmienia się jak druga: слышать, дышать, держать, гнать — rosyjscy nauczyciele nazywają je „7 czasownikami wyjątkowymi"',
        '**Брить** (golić) i **стелить** (rozkładać/pościelić łóżko) wyglądają jak czasowniki na -ить, ale odmieniają się jak **pierwsza** koniugacja: бре́ю, бре́ешь, бре́ет…',
      ],
    },
    {
      h2: 'Czas teraźniejszy: końcówki pierwszej koniugacji (-е-)',
      content:
        'Czasowniki pierwszej koniugacji używają samogłoski **-е-** w większości swoich końcówek. Dokładna litera (у/ю, ешь, ет…) zależy wyłącznie od tego, czy temat czasownika kończy się na samogłoskę czy na spółgłoskę — to reguła ortograficzna, a nie różnica znaczeniowa.',
      table: {
        headers: ['Zaimek', 'Końcówka', 'читать (czytać)', 'гулять (spacerować)'],
        rows: [
          ['я', '-у / -ю', 'читаю', 'гуляю'],
          ['ты', '-ешь', 'читаешь', 'гуляешь'],
          ['он / она / оно', '-ет', 'читает', 'гуляет'],
          ['мы', '-ем', 'читаем', 'гуляем'],
          ['вы', '-ете', 'читаете', 'гуляете'],
          ['они', '-ут / -ют', 'читают', 'гуляют'],
        ],
        caption: 'Końcówki czasu teraźniejszego pierwszej koniugacji',
        boldColumnIndices: [0, 1],
        accentColumnIndices: [1],
      },
      bullets: [
        'Tematy kończące się na **spółgłoskę** (чита-) przyjmują **-у / -ешь / -ет / -ем / -ете / -ут**',
        'Tematy kończące się na **samogłoskę** (гуля-) przyjmują **-ю / -ешь / -ет / -ем / -ете / -ют** — te same końcówki, tylko ю zamiast у i ют zamiast ут',
        'Akcent może przeskakiwać w nieprzewidywalny sposób: писать → пишу́ (akcentowana końcówka), ale пи́шешь, пи́шет… (akcent wraca na temat) — zawsze sprawdzaj akcent w słowniku',
      ],
    },
    {
      h2: 'Czas teraźniejszy: końcówki drugiej koniugacji (-и-)',
      content:
        'Czasowniki drugiej koniugacji używają samogłoski **-и-** w większości swoich końcówek. Forma я i forma они to miejsca, gdzie druga koniugacja różni się najbardziej od pierwszej — i gdzie alternacje spółgłosek pojawiają się najczęściej.',
      table: {
        headers: ['Zaimek', 'Końcówka', 'говорить (mówić)', 'видеть (widzieć)'],
        rows: [
          ['я', '-у / -ю', 'говорю', 'вижу'],
          ['ты', '-ишь', 'говоришь', 'видишь'],
          ['он / она / оно', '-ит', 'говорит', 'видит'],
          ['мы', '-им', 'говорим', 'видим'],
          ['вы', '-ите', 'говорите', 'видите'],
          ['они', '-ат / -ят', 'говорят', 'видят'],
        ],
        caption: 'Końcówki czasu teraźniejszego drugiej koniugacji',
        boldColumnIndices: [0, 1],
        accentColumnIndices: [1],
      },
      subsections: [
        {
          h3: 'Alternacje spółgłosek w formie я',
          content:
            'Grupa czasowników drugiej koniugacji po cichu zamienia spółgłoskę — ale **tylko w formie я**. Każda inna forma (ты, он, мы, вы, они) zachowuje oryginalną, niezmienioną spółgłoskę.',
          table: {
            headers: ['Alternacja', 'Bezokolicznik', 'Forma я', 'Forma ты (niezmieniona)'],
            rows: [
              ['д → ж', 'видеть', 'вижу', 'видишь'],
              ['т → ч', 'платить', 'плачу', 'платишь'],
              ['с → ш', 'просить', 'прошу', 'просишь'],
              ['ст → щ', 'простить', 'прощу', 'простишь'],
              ['б → бл', 'любить', 'люблю', 'любишь'],
              ['в → вл', 'готовить', 'готовлю', 'готовишь'],
              ['п → пл', 'купить', 'куплю', 'купишь'],
            ],
            caption: 'Alternacje spółgłosek w formie я czasowników drugiej koniugacji',
            boldColumnIndices: [0],
          },
        },
      ],
      bullets: [
        'Alternacja jest **ograniczona do formy я** — bardzo częstym błędem początkujących jest stosowanie jej wszędzie: лю́бишь, a nie *любьишь',
        'Ten sam rodzaj alternacji pojawia się też w niektórych czasownikach **pierwszej koniugacji**, ale tam przebiega przez cały czas teraźniejszy, nie tylko w formie я: писать → пишу, пишешь, пишет, пишем, пишете, пишут (с→ш wszędzie)',
        'Reguła ortograficzna **7 liter** wyjaśnia, dlaczego pisze się **они пишут**, a nie *пишют: po ж, ш, щ, ч, ц, г, к, х rosyjska ortografia nigdy nie dopuszcza ю ani я — tylko у lub а',
      ],
    },
    {
      h2: 'Czas przeszły: najprostszy czas w języku rosyjskim (z kilkoma pułapkami)',
      content:
        'Najpierw dobra wiadomość: **grupa koniugacji nie ma znaczenia dla czasu przeszłego.** Usuń **-ть** z bezokolicznika i dodaj końcówkę zgodną z **rodzajem i liczbą podmiotu** — nie z osobą, w przeciwieństwie do polskiego i większości języków europejskich.',
      table: {
        headers: ['Podmiot', 'Końcówka', 'читать → przeszły', 'говорить → przeszły'],
        rows: [
          ['он (m.)', '-л', 'чита́л', 'говори́л'],
          ['она (ż.)', '-ла', 'чита́ла', 'говори́ла'],
          ['оно (n.)', '-ло', 'чита́ло', 'говори́ло'],
          ['они / мы / вы', '-ли', 'чита́ли', 'говори́ли'],
        ],
        caption: 'Końcówki czasu przeszłego: rodzaj i liczba, nie osoba',
        boldColumnIndices: [0, 1],
      },
      subsections: [
        {
          h3: 'Wyjątki: czasowniki na -ти i -чь',
          content:
            'Mała, ale częsta grupa czasowników nie stosuje się do czystego wzorca -л. Czasowniki na **-ти** (идти, нести, вести) i **-чь** (мочь, помочь, печь) często zmieniają temat lub całkowicie tracą -л w formie męskiej.',
          table: {
            headers: ['Bezokolicznik', 'он (m.)', 'она (ż.)', 'они (l.mn.)'],
            rows: [
              ['идти (iść)', 'шёл', 'шла', 'шли'],
              ['мочь (móc)', 'мог', 'могла', 'могли'],
              ['нести (nieść)', 'нёс', 'несла', 'несли'],
              ['печь (piec)', 'пёк', 'пекла', 'пекли'],
            ],
            caption: 'Nieregularne tematy czasu przeszłego: czasowniki na -ти i -чь',
            boldColumnIndices: [0],
          },
        },
      ],
      bullets: [
        'Czas przeszły zgadza się z **rodzajem i liczbą**, nie z osobą: mówca płci męskiej powie **я чита́л**, mówczyni płci żeńskiej powie **я чита́ла** — ten sam zaimek, inna forma czasownika',
        '**Мочь** i inne czasowniki na -чь całkowicie tracą -л w formie męskiej: **мог**, a nie *могл',
        '**Идти** ma całkowicie odrębny temat czasu przeszłego (шёл), inny niż jego temat teraźniejszy (иду) — obie formy nie mają wspólnej ani jednej litery',
      ],
    },
    {
      h2: 'Czas przyszły: prosty czy złożony',
      content:
        'Rosyjski buduje czas przyszły na dwa różne sposoby, a wybór zależy całkowicie od **aspektu**, nie od znaczenia, które wybierasz dowolnie. Jeśli nie omówiłeś/aś jeszcze czasowników dokonanych i niedokonanych, nasz [przewodnik po rosyjskim aspekcie czasownika](/learn/articles/russian-verbal-aspect-perfective-imperfective) jest naturalnym uzupełnieniem tej sekcji.',
      table: {
        headers: ['Aspekt', 'Struktura', 'Przykład', 'Znaczenie'],
        rows: [
          [
            'Dokonany — czas przyszły prosty',
            'Odmieniony jak czasownik w czasie teraźniejszym',
            'я прочита́ю',
            'przeczytam to (i skończę)',
          ],
          [
            'Niedokonany — czas przyszły złożony',
            'буду/будешь/будет/будем/будете/будут + bezokolicznik niedokonany',
            'я бу́ду чита́ть',
            'będę czytać / będę czytał (czynność trwająca)',
          ],
        ],
        caption: 'Czas przyszły prosty (dokonany) kontra czas przyszły złożony (niedokonany)',
        boldColumnIndices: [0],
      },
      bullets: [
        'Czasownik **dokonany** nie ma czasu teraźniejszego — jego odmiana według wzorca czasu teraźniejszego automatycznie tworzy znaczenie **przyszłe**: я прочита́ю (przeczytam), a nie „właśnie czytam"',
        'Czasownik **niedokonany** potrzebuje czasownika posiłkowego **буду** (będę), odmienionego zgodnie z podmiotem, po którym następuje bezokolicznik niedokonany: мы **будем** говори́ть (będziemy rozmawiać)',
        'Nigdy nie odmieniaj bezokolicznika niedokonanego bezpośrednio dla czasu przyszłego — *я читаю за́втра книгу nie znaczy „jutro przeczytam książkę"; potrzebne jest буду читать',
      ],
    },
    {
      h2: '8 czasowników nieregularnych, które warto znać',
      content:
        'Garść niezwykle popularnych czasowników nie pasuje czysto do żadnej z dwóch koniugacji. Warto zapamiętać je jako samodzielne wzorce — większości z nich będziesz używać codziennie.',
      table: {
        headers: ['Bezokolicznik', 'я', 'ты', 'он', 'мы', 'вы', 'они'],
        rows: [
          ['хоте́ть (chcieć)', 'хочу́', 'хо́чешь', 'хо́чет', 'хоти́м', 'хоти́те', 'хотя́т'],
          ['есть (jeść)', 'ем', 'ешь', 'ест', 'еди́м', 'еди́те', 'едя́т'],
          ['дать (dać)', 'дам', 'дашь', 'даст', 'дади́м', 'дади́те', 'даду́т'],
          ['бежа́ть (biec)', 'бегу́', 'бежи́шь', 'бежи́т', 'бежи́м', 'бежи́те', 'бегу́т'],
          ['е́хать (jechać)', 'е́ду', 'е́дешь', 'е́дет', 'е́дем', 'е́дете', 'е́дут'],
          ['пить (pić)', 'пью', 'пьёшь', 'пьёт', 'пьём', 'пьёте', 'пьют'],
          ['жить (żyć)', 'живу́', 'живёшь', 'живёт', 'живём', 'живёте', 'живу́т'],
          ['мочь (móc)', 'могу́', 'мо́жешь', 'мо́жет', 'мо́жем', 'мо́жете', 'мо́гут'],
        ],
        caption: '8 popularnych rosyjskich czasowników nieregularnych, w pełni odmienionych',
        boldColumnIndices: [0],
      },
      bullets: [
        '**Хотеть** miesza koniugacje: liczba pojedyncza (хочу́, хо́чешь, хо́чет) idzie za pierwszą koniugacją, liczba mnoga (хоти́м, хоти́те, хотя́т) idzie za drugą — prawdziwa osobliwość warta osobnego zapamiętania',
        '**Есть** i **дать** dzielą rzadki wzorzec „atematyczny", występujący tylko w garści rosyjskich czasowników — żaden z nich nie pasuje ani do pierwszej, ani do drugiej koniugacji',
        'Czas teraźniejszy czasownika **быть** („być") jest we współczesnym rosyjskim niemal zawsze **pomijany**: **Я студе́нт** (Jestem studentem), a nie *Я есть студент — archaiczna forma есть przetrwała głównie w utartych zwrotach jak **У меня́ есть…** (Mam…)',
      ],
    },
    {
      h2: 'Częste błędy w koniugacji rosyjskich czasowników',
      content:
        'Te pięć błędów odpowiada za większość pomyłek w koniugacji popełnianych przez uczących się:',
      subsections: [
        {
          h3: 'Błąd 1: zgadywanie złej koniugacji na podstawie bezokolicznika',
          content:
            '**Źle**: Я **смотрею** телевизор.\n**Dobrze**: Я **смотрю** телевизор.\n\n**Dlaczego**: смотреть kończy się na -еть, co zwykle wskazuje na pierwszą koniugację — ale смотреть jest jednym ze znanych wyjątków, które odmieniają się jak **druga** koniugacja.',
        },
        {
          h3: 'Błąd 2: stosowanie alternacji z formy я do każdej formy',
          content:
            '**Źle**: Ты **любишь**… **любю**? — pomylenie, która forma podlega alternacji.\n**Dobrze**: Я **люблю**, ты **любишь**, он **любит**.\n\n**Dlaczego**: alternacja б → бл zachodzi **tylko w formie я**. Wszystkie pozostałe formy używają prostej, niezmienionej spółgłoski.',
        },
        {
          h3: 'Błąd 3: używanie końcówek zależnych od osoby w czasie przeszłym',
          content:
            '**Źle**: Она **говорил** по-русски.\n**Dobrze**: Она **говорила** по-русски.\n\n**Dlaczego**: czas przeszły zgadza się z **rodzajem i liczbą podmiotu**, nigdy z osobą. Она jest rodzaju żeńskiego, więc czasownik musi przyjąć -ла, niezależnie od tego, kto mówi.',
        },
        {
          h3: 'Błąd 4: odmienianie czasownika dokonanego tam, gdzie chodzi o nawyk',
          content:
            '**Źle**: Ка́ждый день я **прочита́ю** кни́гу.\n**Dobrze**: Ка́ждый день я **чита́ю** кни́гу.\n\n**Dlaczego**: czasowniki dokonane nie mają czasu teraźniejszego, więc odmiana прочитать w ten sposób oznacza w rzeczywistości „przeczytam" (przyszłość), a nie codzienny nawyk. Czynności nawykowe wymagają aspektu niedokonanego, читать.',
        },
        {
          h3: 'Błąd 5: łamanie reguły ortograficznej 7 liter',
          content:
            '**Źle**: Они **пишют** пи́сьма.\n**Dobrze**: Они **пишут** пи́сьма.\n\n**Dlaczego**: po ж, ш, щ, ч, ц, г, к, х rosyjska ortografia nigdy nie dopuszcza ю ani я — pisz zamiast tego у lub а, nawet gdy „oczekiwana" końcówka normalnie używałaby ю lub я.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Czym są dwie grupy koniugacji w języku rosyjskim?',
      answer:
        'Rosyjskie czasowniki dzielą się na **pierwszą koniugację** (końcówki zbudowane wokół -е-: -у/-ю, -ешь, -ет, -ем, -ете, -ут/-ют) i **drugą koniugację** (końcówki zbudowane wokół -и-: -у/-ю, -ишь, -ит, -им, -ите, -ат/-ят). Większość czasowników na -ать/-ять to pierwsza koniugacja, a większość na -ить to druga, ale krótka lista znanych wyjątków (смотреть, слышать, держать…) łamie ten wzorzec.',
    },
    {
      question: 'Jak sprawdzić, czy czasownik jest pierwszej czy drugiej koniugacji?',
      answer:
        'Najbardziej niezawodnym testem jest forma **они (oni)**: jeśli kończy się na **-ут/-ют**, czasownik jest pierwszej koniugacji; jeśli kończy się na **-ат/-ят**, jest drugiej koniugacji. Końcówka bezokolicznika to przydatna pierwsza wskazówka, ale nie dowód, ponieważ czasowniki takie jak смотреть (-еть) i держать (-ать) odmieniają się jak druga koniugacja.',
    },
    {
      question: 'Czy rosyjski czas przeszły zmienia się w zależności od osoby, jak w polskim?',
      answer:
        'Nie. Rosyjski czas przeszły zgadza się z **rodzajem i liczbą** podmiotu, a nie z osobą. Każdy podmiot używa tego samego wzorca końcówek: -л (rodzaj męski), -ла (żeński), -ло (nijaki), -ли (liczba mnoga) — więc я читал i он читал wyglądają identycznie, jeśli mówi mężczyzna.',
    },
    {
      question: 'Jaka jest różnica między czasem przyszłym prostym a złożonym w rosyjskim?',
      answer:
        '**Czas przyszły prosty** powstaje przez odmianę czasownika dokonanego według wzorca czasu teraźniejszego (я прочита́ю — przeczytam, czynność zakończona). **Czas przyszły złożony** powstaje z czasownikiem posiłkowym буду/будешь/будет/будем/будете/будут plus bezokolicznikiem niedokonanym (я бу́ду чита́ть — będę czytać / będę czytał, czynność trwająca). Wybór zależy od aspektu czasownika, nie od osobistej preferencji.',
    },
    {
      question: 'Czy w rosyjskim istnieją prawdziwie nieregularne czasowniki, czy tylko wyjątki?',
      answer:
        'Istnieje jedno i drugie. Czasowniki takie jak хотеть (mieszana koniugacja), есть i дать (rzadki wzorzec atematyczny) czy идти (odrębny temat czasu przeszłego, шёл) są naprawdę nieregularne i trzeba je zapamiętać osobno. Większość pozostałych „nieregularności" — jak смотреть odmieniające się jako druga koniugacja, czy czasowniki na -чь tracące -л w formie męskiej — to małe, dobrze udokumentowane grupy wyjątków, a nie prawdziwy chaos.',
    },
  ],
  conclusionIntro:
    'Koniugacja rosyjskich czasowników wynagradza wczesny wysiłek — w przeciwieństwie do przypadków, większość z niej może naprawdę „kliknąć" podczas jednej skoncentrowanej sesji nauki:',
  conclusionBullets: [
    '**Określ grupę koniugacji** na podstawie formy они, a nie tylko bezokolicznika — -ут/-ют to pierwsza, -ат/-ят to druga',
    '**Naucz się list wyjątków**: czasowniki na -еть typu смотреть i na -ать typu слышать odmieniają się jak druga koniugacja',
    '**Uważaj na alternacje w formie я** (любить → люблю) — dotyczą tylko tej jednej formy',
    '**Czas przeszły = rodzaj + liczba**, nie osoba: -л / -ла / -ло / -ли',
    '**Czas przyszły podąża za aspektem**: dokonany odmienia się bezpośrednio; niedokonany potrzebuje буду + bezokolicznik',
    'Zapamiętaj małą grupę **czasowników nieregularnych** (хотеть, есть, дать, идти…) jako samodzielne wzorce',
  ],
  conclusionOutro:
    'Koniugacja daje Ci czasownik; rosyjskie przypadki dają Ci wszystko, na co ten czasownik działa — końcówki rzeczownika, przymiotnika i zaimka, które naprawdę spajają zdanie. Gdy końcówki czasownikowe staną się automatyczne, nasze darmowe narzędzie do ćwiczeń na russiandeclensions.com/practice to naturalny kolejny krok, by interaktywnie ćwiczyć wszystkie sześć przypadków — bez rejestracji.',
  ctaText: 'Ćwicz rosyjskie przypadki — Za darmo →',
  ctaHref: '/practice',
  conclusion: '',
  internalLinks: [
    {
      href: '/practice',
      label: 'Bezpłatny quiz deklinacji rosyjskiej — ćwicz wszystkie 6 przypadków',
    },
    {
      href: '/learn/articles/russian-verbal-aspect-perfective-imperfective',
      label: 'Aspekt czasownika w języku rosyjskim: dokonany i niedokonany — wyjaśnienie',
    },
    {
      href: '/learn/articles/russian-verbs-of-motion',
      label: 'Rosyjskie czasowniki ruchu: kompletny przewodnik',
    },
    {
      href: '/learn/articles/russian-word-stress-guide',
      label: 'Akcent w języku rosyjskim: dlaczego zmienia wszystko (i jak go opanować)',
    },
    {
      href: '/learn/articles/russian-cases-explained-beginners-guide',
      label: 'Przypadki rosyjskie wyjaśnione prosto: przewodnik wizualny dla początkujących',
    },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      'Koniugacja rosyjskich czasowników: kompletny przewodnik (czas teraźniejszy, przeszły i przyszły)',
    description:
      'Naucz się koniugacji rosyjskich czasowników krok po kroku: dwie grupy koniugacji, końcówki czasu teraźniejszego, alternacje spółgłosek, czas przeszły, czas przyszły i 8 czasowników nieregularnych w pełni odmienionych.',
    datePublished: '2026-09-03',
    dateModified: '2026-09-03',
    author: {
      '@type': 'Person',
      name: 'Nathan',
      url: 'https://russiandeclensions.com/',
      image: 'https://russiandeclensions.com/landing-cases/founder-photo.webp',
      worksFor: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://russiandeclensions.com/learn/articles/russian-verb-conjugation-guide',
    },
    keywords:
      'koniugacja rosyjskich czasowników, odmiana rosyjskich czasowników, rosyjskie czasy czasownikowe, koniugacja czasu teraźniejszego rosyjski, rosyjskie czasowniki w czasie przeszłym, końcówki rosyjskich czasowników',
  },
};
