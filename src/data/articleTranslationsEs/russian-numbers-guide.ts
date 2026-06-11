import type { LearnArticle } from '../learnArticles';

/** Traducción al español del artículo `russian-numbers-guide` (fuente EN: `learnArticles.ts`). */
export const russianNumbersGuideEs: LearnArticle = {
  slug: 'russian-numbers-guide',
  title: 'Los números en ruso: cómo contar en ruso (guía completa 2026)',
  metaTitle:
    'Los números en ruso: cómo contar en ruso | Guía completa 2026 | Russian Cases with Anna',
  metaDescription:
    'Aprende los números en ruso del 1 al 1000: números cardinales, números ordinales, números con casos rusos, edades y fechas — guía completa con tablas y pronunciación.',
  keywords: [
    'números en ruso',
    'cómo contar en ruso',
    'números rusos',
    'números rusos del 1 al 10',
    'números cardinales en ruso',
    'números ordinales en ruso',
    'contar en ruso',
    'pronunciación de números en ruso',
    'cómo decir números en ruso',
    'números rusos del 1 al 100',
  ],
  h1: 'Los números en ruso: cómo contar en ruso (guía completa)',
  heroImage: {
    src: '/articles/russia-kremlin-moscow.webp',
    alt: 'Aprender los números en ruso — guía completa para contar',
    width: 1200,
    height: 630,
  },
  intro:
    'Aprender los números en ruso parece manejable al principio — hasta que intentas usarlos en una frase. **Los números en ruso no son simples etiquetas que se pegan a los objetos.** Interactúan con el sistema de casos gramaticales de una manera que hace tropezar incluso a los aprendices intermedios, y algunos números se comportan de forma completamente inesperada.\n\nLa buena noticia: los números en ruso siguen patrones claros una vez que se entiende la lógica. **Los primeros diez números desbloquean todo el resto del sistema.** Los «adolescentes» (11–19) siguen una sola regla. Las decenas son predecibles. Y una vez que comprendes cómo interactúan los números con los casos, podrás contar, decir tu edad y leer precios con confianza.\n\nEsta guía cubre todo: **números cardinales del 1 al 1000**, números ordinales, cómo decir tu edad, cómo expresar fechas y años, y la única regla gramatical (números + casos) que marca la diferencia en el ruso real.',
  introByline: {
    text: '**Escrito por Nathan** — hablante nativo de francés; aprendo ruso y comparto lo que realmente funciona para la gramática, los casos y la práctica diaria.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, fundador de Russian Cases with Anna',
    imageWidth: 256,
    imageHeight: 256,
  },
  whatYouLearn: [
    'Números cardinales del 1 al 1000 con guía de pronunciación',
    'Los números irregulares que hay que memorizar: **40, 90, 100**',
    'Cómo interactúan los números rusos con los **casos gramaticales** — la regla que la mayoría pasa por alto',
    'Números ordinales: primero, segundo, tercero…',
    'Cómo decir tu **edad** en ruso (мне X лет)',
    'Cómo expresar **fechas y años** en ruso',
  ],
  leadMagnetCta: {
    title: 'Domina la gramática rusa más allá de los números — app gratuita',
    description:
      'Los números son solo el comienzo. La gramática rusa, los casos y las declinaciones son donde se construye la verdadera fluidez. Russian Cases with Anna ofrece lecciones estructuradas y cuestionarios inteligentes — gratis en iOS y Android.',
    ctaText: 'Descargar la app — Gratis',
    ctaHref: '/',
  },
  sections: [
    {
      h2: 'Números rusos del 1 al 10: la base',
      content:
        'Los diez números cardinales a continuación son la base de todo el sistema numérico ruso. Observa de inmediato que **1** y **2** tienen variantes de género — esto importará cuando los uses con sustantivos.',
      table: {
        headers: ['Número', 'Ruso', 'Transliteración', 'Nota de género'],
        rows: [
          ['1', 'один / одна / одно', 'odin / odna / odno', 'Masculino / Femenino / Neutro'],
          ['2', 'два / две', 'dva / dve', 'Masc.–Neutro / Femenino'],
          ['3', 'три', 'tri', '—'],
          ['4', 'четыре', 'chetyre', '—'],
          ['5', 'пять', "pyat'", '—'],
          ['6', 'шесть', "shest'", '—'],
          ['7', 'семь', "sem'", '—'],
          ['8', 'восемь', "vosem'", '—'],
          ['9', 'девять', "devyat'", '—'],
          ['10', 'десять', "desyat'", '—'],
        ],
        caption: 'Números cardinales rusos del 1 al 10',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        '**Один** (masculino) se usa con sustantivos masculinos: один брат (un hermano)',
        '**Одна** (femenino) se usa con sustantivos femeninos: одна книга (un libro)',
        '**Одно** (neutro) se usa con sustantivos neutros: одно окно (una ventana)',
        '**Два** se usa con sustantivos masculinos y neutros; **две** con femeninos',
        'Los números 3–10 no varían según el género',
        'Los números 5–10 terminan en signo blando (ь) — un patrón importante para el sistema de casos',
      ],
    },
    {
      h2: 'Números 11–19: los adolescentes rusos',
      content:
        'Los adolescentes en ruso se forman añadiendo el sufijo **-надцать** (una forma de «sobre diez»). Una vez que ves el patrón, todos los once «adolescentes» se desbloquean de una vez.',
      table: {
        headers: ['Número', 'Ruso', 'Transliteración', 'Patrón de formación'],
        rows: [
          ['11', 'одиннадцать', "odinnadtsat'", 'один + надцать'],
          ['12', 'двенадцать', "dvenadtsat'", 'две + надцать'],
          ['13', 'тринадцать', "trinadtsat'", 'три + надцать'],
          ['14', 'четырнадцать', "chetyrnadtsat'", 'четыре + надцать'],
          ['15', 'пятнадцать', "pyatnadtsat'", 'пять + надцать'],
          ['16', 'шестнадцать', "shestnadtsat'", 'шесть + надцать'],
          ['17', 'семнадцать', "semnadtsat'", 'семь + надцать'],
          ['18', 'восемнадцать', "vosemnadtsat'", 'восемь + надцать'],
          ['19', 'девятнадцать', "devyatnadtsat'", 'девять + надцать'],
        ],
        caption: 'Números rusos del 11 al 19 con patrón de formación',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Todos los adolescentes terminan en **-надцать** — cuando escuchas este sufijo, sabes que es un número del 11 al 19',
        'En el habla, el radical a menudo se acorta: четыре → четыр- en четырнадцать; пять → пят- en пятнадцать',
        '**Одиннадцать** duplica la н — el número adolescente ruso que más se escribe mal',
        'A diferencia de 1 y 2, los adolescentes **no** varían según el género',
      ],
    },
    {
      h2: 'Decenas y centenas: contar hasta 1000',
      content:
        'Las decenas (20–90) y centenas (100–900) siguen patrones mayormente regulares con algunas excepciones importantes. Los tres críticos que hay que memorizar: **сорок** (40), **девяносто** (90) y **сто** (100) son completamente irregulares.',
      subsections: [
        {
          h3: 'Decenas: del 20 al 90',
          content:
            'Las decenas del 20 al 80 están construidas sobre un patrón compuesto. Observa que el 40 y el 90 se salen completamente del patrón.',
          table: {
            headers: ['Número', 'Ruso', 'Transliteración'],
            rows: [
              ['20', 'двадцать', "dvadtsat'"],
              ['30', 'тридцать', "tridtsat'"],
              ['40', 'сорок', 'sorok'],
              ['50', 'пятьдесят', "pyat'desyat"],
              ['60', 'шестьдесят', "shest'desyat"],
              ['70', 'семьдесят', "sem'desyat"],
              ['80', 'восемьдесят', "vosem'desyat"],
              ['90', 'девяносто', 'devyanosto'],
            ],
            caption: 'Decenas rusas del 20 al 90',
            boldColumnIndices: [0, 1],
          },
        },
        {
          h3: 'Centenas: del 100 al 1000',
          content:
            'Las centenas también siguen un patrón — pero el 100 es irregular (сто), y el 200–400 tienen sus propias formas antes de que el patrón continúe del 500 al 900.',
          table: {
            headers: ['Número', 'Ruso', 'Transliteración'],
            rows: [
              ['100', 'сто', 'sto'],
              ['200', 'двести', 'dvesti'],
              ['300', 'триста', 'trista'],
              ['400', 'четыреста', 'chetyresta'],
              ['500', 'пятьсот', "pyat'sot"],
              ['600', 'шестьсот', "shest'sot"],
              ['700', 'семьсот', "sem'sot"],
              ['800', 'восемьсот', "vosem'sot"],
              ['900', 'девятьсот', "devyat'sot"],
              ['1000', 'тысяча', 'tysyacha'],
            ],
            caption: 'Centenas rusas del 100 al 1000',
            boldColumnIndices: [0, 1],
          },
        },
      ],
      bullets: [
        'Los números compuestos se leen de izquierda a derecha: **347 = триста сорок семь**',
        '**Сорок** (40) y **девяносто** (90) son completamente irregulares — hay que memorizarlos',
        '**Двести** (200) y **триста / четыреста** (300/400) también son formas irregulares',
        'A partir del 500, las centenas siguen el patrón: número + сот (ej. пять + сот = пятьсот)',
        '**Тысяча** (1000) es un sustantivo femenino y se declina en consecuencia',
      ],
    },
    {
      h2: 'Los números rusos y los casos: la regla gramatical que lo cambia todo',
      content:
        'Aquí es donde la mayoría choca con una pared. En ruso, **el sustantivo después de un número cambia su caso gramatical** dependiendo del número. Esto no es opcional — afecta a cada frase en la que se cuenta algo.\n\nLa regla tiene tres niveles:\n\n**Nivel 1: 1 → Nominativo singular.** Один стол (una mesa), одна книга (un libro).\n\n**Nivel 2: 2, 3, 4 → Genitivo singular.** Два стол**а** (dos mesas), три книг**и** (tres libros).\n\n**Nivel 3: 5 y más → Genitivo plural.** Пять стол**ов** (cinco mesas), десять книг (diez libros).\n\nLa regla se aplica al **último dígito** de un número compuesto — el 21 se comporta como el 1, el 22 como el 2, el 25 como el 5. Pero el 11–14 siempre toma el nivel 3, independientemente de su último dígito.',
      table: {
        headers: ['Tipo de número', 'Caso requerido', 'Ejemplo'],
        rows: [
          ['1, 21, 31, 41…', 'Nominativo singular', 'один стол, двадцать один студент'],
          ['2, 3, 4 / 22, 23, 24…', 'Genitivo singular', 'два стола, тридцать четыре книги'],
          ['5–20 / 25–30 / 11–14…', 'Genitivo plural', 'пять столов, одиннадцать студентов'],
        ],
        caption: 'Números y casos de sustantivos en ruso',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'La regla se basa en el **último dígito** de los números compuestos (excepto los adolescentes 11–19)',
        '**El 11–19 siempre toma el genitivo plural** — independientemente de su último dígito',
        'Esta regla se aplica a los sustantivos; los adjetivos también deben concordar con el caso del sustantivo',
        'El genitivo plural es una de las formas nominales más irregulares del ruso — practicarlo pronto',
        'Los precios siguen la misma regla: **один рубль**, **два рубля**, **пять рублей**',
      ],
    },
    {
      h2: 'Los números ordinales en ruso: primero, segundo, tercero…',
      content:
        'Los números ordinales (primero, segundo, tercero…) son adjetivos en ruso — **concuerdan en género, número y caso** con el sustantivo que describen. Aquí están los ordinales más esenciales:',
      table: {
        headers: ['Posición', 'Ordinal (Masc.)', 'Transliteración', 'Forma femenina'],
        rows: [
          ['1.º', 'первый', 'pervyy', 'первая'],
          ['2.º', 'второй', 'vtoroy', 'вторая'],
          ['3.º', 'третий', 'tretiy', 'третья'],
          ['4.º', 'четвёртый', 'chetvyortyy', 'четвёртая'],
          ['5.º', 'пятый', 'pyatyy', 'пятая'],
          ['6.º', 'шестой', 'shestoy', 'шестая'],
          ['7.º', 'седьмой', "sed'moy", 'седьмая'],
          ['8.º', 'восьмой', "vos'moy", 'восьмая'],
          ['9.º', 'девятый', 'devyatyy', 'девятая'],
          ['10.º', 'десятый', 'desyatyy', 'десятая'],
        ],
        caption: 'Números ordinales rusos del 1.º al 10.º',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        '**Третий** (tercero) es irregular — sigue el patrón del adjetivo suave (третья, третьего…)',
        'En los ordinales compuestos, solo cambia la última palabra: **двадцать первый** (vigesimoprimer)',
        'Los ordinales se usan en fechas: **первое января** (el primero de enero)',
        'Números de planta: **на первом этаже** (en el primer piso) — ordinal en caso preposicional',
      ],
    },
    {
      h2: 'Cómo decir tu edad en ruso',
      content:
        'Decir la edad en ruso usa el dativo y la palabra **лет** (años). La estructura es: **Мне + [número] + лет / года / год**.\n\nEl sustantivo después del número sigue la misma regla de tres niveles:\n\n- **год** (nominativo singular) después de 1: **Мне двадцать один год** (Tengo 21 años)\n- **года** (genitivo singular) después de 2, 3, 4: **Мне тридцать два года** (Tengo 32 años)\n- **лет** (genitivo plural) después de 5+: **Мне пятьдесят лет** (Tengo 50 años)',
      table: {
        headers: ['Edad', 'Ruso', 'Significado literal'],
        rows: [
          ['Tengo 1 año', 'Мне один год', 'A mí un año'],
          ['Tengo 2 años', 'Мне два года', 'A mí dos años'],
          ['Tengo 5 años', 'Мне пять лет', 'A mí cinco años'],
          ['Tengo 21 años', 'Мне двадцать один год', 'A mí veintiún años'],
          ['Tengo 35 años', 'Мне тридцать пять лет', 'A mí treinta y cinco años'],
          ['¿Cuántos años tienes?', 'Сколько вам лет?', '¿Cuántos años a usted?'],
        ],
        caption: 'Decir la edad en ruso',
        boldColumnIndices: [0, 1],
      },
    },
    {
      h2: 'Cómo decir la fecha y el año en ruso',
      content:
        'Las fechas en ruso usan **números ordinales en forma neutra** (neutro porque la palabra implícita es **число** — fecha/número, un sustantivo neutro) seguidos del mes en **genitivo**.\n\n**Hoy es el 5 de junio → Сегодня пятое июня.**\n\nPara los años, el ruso usa el número ordinal con la palabra год (año) en caso preposicional: **En 2026 → В две тысячи двадцать шестом году.**',
      table: {
        headers: ['Mes', 'Ruso', 'Genitivo (para fechas)'],
        rows: [
          ['Enero', 'январь', 'января'],
          ['Febrero', 'февраль', 'февраля'],
          ['Marzo', 'март', 'марта'],
          ['Abril', 'апрель', 'апреля'],
          ['Mayo', 'май', 'мая'],
          ['Junio', 'июнь', 'июня'],
          ['Julio', 'июль', 'июля'],
          ['Agosto', 'август', 'августа'],
          ['Septiembre', 'сентябрь', 'сентября'],
          ['Octubre', 'октябрь', 'октября'],
          ['Noviembre', 'ноябрь', 'ноября'],
          ['Diciembre', 'декабрь', 'декабря'],
        ],
        caption: 'Meses rusos con forma genitiva (usada en fechas)',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        '**Какое сегодня число?** = ¿Qué fecha es hoy? (literalmente: ¿qué número es hoy?)',
        '**Сегодня первое января** = Hoy es el primero de enero',
        'Para cumpleaños: **Мой день рождения — второе марта** (Mi cumpleaños es el 2 de marzo)',
        'Los años usan ordinales largos: **в две тысячи двадцать шестом году** (en 2026)',
        'Coloquialmente, los rusos suelen decir el año abreviado: **в двадцать шестом году** para 2026',
      ],
    },
    {
      h2: 'Errores comunes con los números rusos',
      content:
        'Incluso los aprendices avanzados cometen errores predecibles con los números rusos. Aquí están los cuatro más frecuentes:',
      bullets: [
        '**Usar el nominativo después de todos los números.** El error más común: decir **пять стол** en lugar de **пять столов**. Recuerda: 2–4 → genitivo singular; 5+ → genitivo plural.',
        '**Olvidar el género para 1 y 2.** Decir **два книга** en lugar de **две книги** (книга es femenino, por lo tanto два → две).',
        '**Tratar el 11–14 como su último dígito.** El 11 parece terminar en 1, pero toma el genitivo plural: **одиннадцать студентов**, no одиннадцать студент.',
        '**Confundir год / года / лет para las edades.** La palabra «año» sigue la misma regla de tres niveles: один год, два года, пять лет.',
        '**Pronunciar mal сорок (40).** Es **CO-rok**, el acento está en la primera sílaba.',
      ],
    },
  ],
  faq: [
    {
      question: '¿Cuál es la palabra rusa para «uno»?',
      answer:
        'La palabra rusa para «uno» tiene tres variantes de género: **один** (masculino — один брат), **одна** (femenino — одна сестра) y **одно** (neutro — одно окно). Usa la forma que corresponde al género del sustantivo que describe.',
    },
    {
      question: '¿Cómo interactúan los números rusos con los casos nominales?',
      answer:
        'Los sustantivos rusos cambian de caso después de los números. La regla: 1 → nominativo singular (один стол); 2, 3, 4 → genitivo singular (два стола); 5 y más → genitivo plural (пять столов). Para los números compuestos, la regla depende del último dígito — pero el 11–14 siempre toma el genitivo plural.',
    },
    {
      question: '¿Cuál es la diferencia entre два y две?',
      answer:
        '**Два** se usa con sustantivos masculinos y neutros: два брата (dos hermanos), два окна (dos ventanas). **Две** se usa con sustantivos femeninos: две сестры (dos hermanas), две книги (dos libros). La distinción importa — usar два con un sustantivo femenino es un error gramatical.',
    },
    {
      question: '¿Cómo se dice «Tengo 25 años» en ruso?',
      answer:
        'Se dice **Мне двадцать пять лет** (literalmente: «a mí veinticinco años»). El número 25 termina en 5, por lo que el sustantivo es **лет** (genitivo plural). Si tienes 21 años, di **Мне двадцать один год** (год — nominativo singular, porque el último dígito es 1).',
    },
    {
      question: '¿Cómo se dice «100» en ruso?',
      answer:
        '100 en ruso es **сто** — una forma irregular. 200 es **двести**, 300 es **триста**, 400 es **четыреста**. A partir de 500, las centenas siguen un patrón regular: **пятьсот, шестьсот, семьсот, восемьсот, девятьсот**.',
    },
  ],
  conclusion:
    'Los números rusos son una de esas partes del idioma que parecen simples en una lista, pero requieren práctica real para usarlos correctamente en el habla. La buena noticia: el sistema es **lógico**. Una vez que la regla de tres niveles encaja, que has memorizado сорок (40), девяносто (90) y сто (100), y que la concordancia de género de один / одна / два / две se vuelve automática — dominas esencialmente todo el sistema numérico.\n\nEl siguiente paso más importante es **practicar los números en frases reales** — contar objetos con el caso correcto, decir precios, leer fechas en voz alta. Ahí es donde el conocimiento pasivo de las tablas de números se convierte en ruso activo.',
  conclusionBullets: [
    'Los números 1–10 son la base — memorízalos con sus variantes de género',
    'Los adolescentes (11–19) terminan todos en **-надцать** — aprende el patrón una vez',
    'Memoriza los tres irregulares: **сорок** (40), **девяносто** (90), **сто** (100)',
    'Aplica la regla de casos: 1 → nominativo, 2–4 → genitivo singular, 5+ → genitivo plural',
    'Los números ordinales son adjetivos y deben concordar en género, caso y número',
  ],
  conclusionOutro:
    'Los números son tu puerta de entrada al sistema de casos gramaticales del ruso — y ese sistema es donde vive la verdadera fluidez. Cada sustantivo, pronombre y adjetivo cambia dependiendo de su papel en la frase, y **dominar esas declinaciones es lo que separa el ruso funcional de la fluidez real**.',
  ctaText: 'Descargar Russian Cases with Anna — Gratis',
  ctaHref: '/',
  internalLinks: [
    {
      href: '/learn/articles/russian-greetings-guide',
      label: 'Saludos en ruso: cómo decir hola en ruso (guía completa)',
    },
    {
      href: '/learn/articles/russian-most-common-words',
      label: '100 palabras rusas más comunes: la lista de vocabulario esencial para principiantes',
    },
    {
      href: '/learn/articles/russian-alphabet-cyrillic-guide',
      label: 'El alfabeto ruso: aprende el cirílico en 3 pasos simples',
    },
    {
      href: '/learn/articles/russian-cases-explained-beginners-guide',
      label: 'Casos rusos explicados de forma simple: guía visual para principiantes',
    },
    {
      href: '/learn/articles/how-long-learn-russian',
      label: '¿Cuánto tiempo se tarda en aprender ruso? (Cronología realista)',
    },
    { href: '/practice', label: 'Cuestionario de declinaciones rusas gratuito (los seis casos)' },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Los números en ruso: cómo contar en ruso (guía completa 2026)',
    description:
      'Aprende los números en ruso del 1 al 1000: números cardinales, ordinales, números con casos rusos, edades y fechas — guía completa con tablas.',
    datePublished: '2026-06-11',
    dateModified: '2026-06-11',
    author: {
      '@type': 'Person',
      name: 'Nathan',
      url: 'https://russiandeclensions.com/',
      image: 'https://russiandeclensions.com/landing-cases/founder-photo.webp',
      description: 'Hablante nativo de francés; aprende ruso y comparte lo que realmente funciona.',
      worksFor: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://russiandeclensions.com/learn/articles/russian-numbers-guide',
    },
    keywords:
      'números en ruso, cómo contar en ruso, números cardinales rusos, números ordinales rusos, contar en ruso',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russia-kremlin-moscow.webp',
      width: 1200,
      height: 630,
    },
  },
};
