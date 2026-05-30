import type { LearnArticle } from '../learnArticles';

/** Traducción ES de `russian-word-stress-guide` (fuente EN: `learnArticles.ts`). */
export const russianWordStressGuideEs: LearnArticle = {
  slug: 'russian-word-stress-guide',
  title: 'El acento tónico en ruso: por qué lo cambia todo (y cómo dominarlo)',
  metaTitle:
    'El acento tónico en ruso: guía completa | Russian Cases with Anna',
  metaDescription:
    'Domina el acento tónico ruso: entiende por qué es impredecible, cómo cambia el significado, cómo se desplaza en la declinación y estrategias prácticas para entrenar el oído.',
  keywords: [
    'acento tónico ruso',
    'acentuación en ruso',
    'reglas de acento en ruso',
    'pronunciación rusa acento',
    'patrones de acento en ruso',
  ],
  h1: 'El acento tónico en ruso: por qué lo cambia todo (y cómo dominarlo)',
  heroImage: {
    src: '/articles/russian-word-stress-guide.webp',
    alt: 'Manual de ruso y materiales de estudio con texto cirílico',
    width: 1200,
    height: 630,
  },
  intro:
    'Pregunta a cualquier estudiante de ruso de nivel intermedio qué le cuesta más, y después de los casos, la respuesta es casi siempre la misma: **el acento tónico**. No porque sea conceptualmente complicado — cada palabra simplemente tiene una sílaba acentuada. El problema es que el acento ruso es **libre**, **móvil** e **invisible**.\n\nEn español o francés, el acento sigue reglas predecibles. En ruso, no. Puede caer en cualquier sílaba, no se marca en el texto impreso estándar y puede desplazarse cuando cambias el caso de un sustantivo o la persona de un verbo. Dos palabras que se escriben de forma idéntica (за́мок vs замо́к) significan cosas completamente distintas — una es un castillo, la otra es una cerradura — únicamente por la posición del acento.\n\nEsta guía cubre todo lo que necesitas: por qué el acento ruso es difícil, cómo cambia el significado, cómo se desplaza en la declinación y la conjugación, y — lo más importante — estrategias prácticas para dominarlo de verdad.',
  introByline: {
    text: '**Escrito por Nathan** — francófono nativo; aprendo ruso y comparto lo que realmente funciona para la gramática, los casos y la práctica diaria.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, fundador de Russian Cases with Anna',
    imageWidth: 256,
    imageHeight: 256,
  },
  whatYouLearn: [
    'Por qué el acento ruso es diferente al de la mayoría de las lenguas europeas',
    'Pares mínimos: palabras donde el acento es la única diferencia de significado',
    'Cómo se desplaza el acento al declinar sustantivos rusos',
    'Cómo se desplaza el acento en la conjugación verbal rusa',
    'Patrones útiles para predecir dónde cae el acento',
    'Estrategias prácticas para entrenar el oído',
  ],
  leadMagnetCta: {
    title: 'Practica la gramática rusa — casos y más',
    description:
      'Russian Cases with Anna te ofrece 128 lecciones estructuradas y 136 cuestionarios para practicar declinaciones rusas, terminaciones de casos y patrones gramaticales. Gratis en iOS y Android.',
    ctaText: 'Descargar la app — Gratis',
    ctaHref: '/',
  },
  sections: [
    {
      h2: '¿Qué es el acento tónico en ruso?',
      content:
        'En ruso, cada palabra polisílaba tiene exactamente **una sílaba acentuada**. Esa sílaba se pronuncia más fuerte, más larga y con un tono ligeramente más alto que las demás. La vocal de esa sílaba también se pronuncia con más claridad, mientras que las vocales inacentuadas se reducen.\n\nEl ejemplo más importante de reducción vocálica: la **о** en posición inacentuada se pronuncia como «а». Por eso молоко (leche) suena como «малако» y no como «молоко». De manera similar, **е** y **я** inacentuadas se reducen hacia un sonido neutro «и».\n\nEn los libros de texto de ruso para estudiantes, el acento se marca con un acento agudo (′) sobre la vocal acentuada: молоко́, рабо́та, понима́ть. Pero en el **texto impreso estándar** — libros, noticias, webs — el acento nunca se marca.',
      bullets: [
        'Cada palabra rusa tiene exactamente **una sílaba acentuada**',
        'La **о** inacentuada se pronuncia como «а» — esto causa muchos errores de pronunciación',
        'El acento se marca en los diccionarios para aprendices (молоко́) pero **no** en textos cotidianos',
        'No hay posición fija para el acento — a diferencia del español (penúltima o antepenúltima) o el polaco (penúltima siempre)',
      ],
    },
    {
      h2: '¿Por qué el acento ruso es especialmente difícil?',
      content:
        'Para hablantes de español, inglés, francés o italiano, el acento ruso plantea un desafío que no existe del mismo modo en su lengua materna.\n\n**1. Sin regla de posición fija.** En ruso, el acento puede caer en cualquier sílaba — primera, última o en cualquier punto intermedio. No hay ninguna regla universal en la que apoyarse.\n\n**2. El acento no se escribe.** En cuanto superas los materiales de aprendizaje, lees texto cirílico sin marcas de acento. Cada nueva palabra es un juego de adivinanzas si no la has oído.\n\n**3. El acento es móvil.** Aunque aprendas correctamente el nominativo singular de un sustantivo, el acento puede desplazarse en otros casos. Incluso con los verbos, puede cambiar en ciertas conjugaciones.\n\n**4. El acento cambia el significado.** Equivocarse de acento puede hacer que digas una palabra completamente diferente.\n\nResultado: el acento ruso hay que aprenderlo **palabra por palabra**, escuchando audio.',
      bullets: [
        'Sin regla de posición: el acento puede caer en **cualquier** sílaba',
        'No se marca en el texto estándar — cada nueva palabra debe confirmarse con audio',
        'Acento móvil: puede desplazarse según el caso (sustantivos) y la persona (verbos)',
        'Acento incorrecto = **palabra diferente** en varios pares conocidos',
      ],
    },
    {
      h2: 'Cuando el acento cambia el significado: pares mínimos',
      content:
        'El ruso tiene varios pares de palabras que se escriben de forma idéntica pero tienen significados completamente diferentes según la sílaba acentuada. Estos **pares mínimos por acento** son un verdadero peligro en la comunicación oral.',
      table: {
        headers: ['Acento en la 1.ª sílaba', 'Acento en la 2.ª sílaba', 'Cambio de significado'],
        rows: [
          ['за́мок', 'замо́к', 'castillo vs cerradura'],
          ['му́ка', 'муко́', 'tormento / sufrimiento vs harina'],
          ['а́тлас', 'атла́с', 'atlas (libro de mapas) vs satén (tela)'],
          ['о́рган', 'орга́н', 'órgano (cuerpo) vs órgano (instrumento)'],
          ['хло́пок', 'хлопо́к', 'algodón vs palmada / estallido'],
          ['по́лки', 'полки́', 'estantes vs regimientos'],
          ['пи́сать', 'писа́ть', 'orinar (coloquial) vs escribir'],
        ],
        caption: 'Pares mínimos rusos: misma ortografía, acento diferente, significado diferente',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'El par **замок/замок** es el ejemplo más citado en los libros de gramática rusa',
        'El par **писать/писать** es un error que todo estudiante debe evitar a toda costa',
        'Los errores de acento en estas palabras no solo suenan extranjeros — **comunican la palabra equivocada**',
      ],
    },
    {
      h2: 'Cómo se desplaza el acento al declinar sustantivos rusos',
      content:
        'La mayoría de los sustantivos rusos tienen **acento fijo**: el acento permanece en la misma sílaba en todos los casos y ambos números. Pero un grupo significativo tiene **acento móvil** que se desplaza al declinar.\n\nHay tres patrones comunes de acento móvil:',
      subsections: [
        {
          h3: 'Patrón A: acento en la raíz (singular) → acento en la desinencia (plural)',
          content:
            'El acento está en la raíz en singular pero salta a la desinencia en plural.\n\n— **го́род** (ciudad) → города́, городо́в, города́м\n— **лес** (bosque) → леса́, лесо́в, леса́м\n— **о́стров** (isla) → острова́, острово́в\n\nEste patrón es muy común entre los sustantivos masculinos.',
        },
        {
          h3: 'Patrón B: acento en la desinencia (mayoría de formas) → acento en la raíz (acusativo singular)',
          content:
            'El acento está en la desinencia en la mayoría de formas, pero retrocede a la raíz en el acusativo singular — típico de sustantivos femeninos en -а/-я.\n\n— **рука́** (mano): руки́, руке́... pero acus. sg. = **ру́ку**\n— **нога́** (pierna): ноги́, ноге́... pero acus. sg. = **но́гу**\n— **голова́** (cabeza): головы́... pero acus. sg. = **го́лову**\n\nEste es uno de los patrones más difíciles, ya que el acento en acusativo debe aprenderse por separado.',
        },
        {
          h3: 'Patrón C: movilidad completa — el cuadro completo con рука',
          content:
            'Algunos sustantivos desplazan el acento en casi todos los casos. El sustantivo рука (mano/brazo) es el ejemplo clásico de enseñanza:',
          table: {
            headers: ['Caso', 'Singular', 'Plural'],
            rows: [
              ['Nominativo', 'рука́', 'ру́ки'],
              ['Acusativo', 'ру́ку', 'ру́ки'],
              ['Genitivo', 'руки́', 'ру́к'],
              ['Dativo', 'руке́', 'рука́м'],
              ['Instrumental', 'руко́й', 'рука́ми'],
              ['Preposicional', 'руке́', 'рука́х'],
            ],
            caption: 'Desplazamientos del acento en todos los casos de рука (mano/brazo)',
            boldColumnIndices: [1, 2],
          },
        },
      ],
      bullets: [
        'La mayoría de sustantivos = **acento fijo** (la misma sílaba en todas las formas)',
        'Los sustantivos de **acento móvil** requieren aprender dónde cae el acento en cada caso',
        'Un buen diccionario marca el acento en todas las formas de declinación — úsalo siempre',
      ],
    },
    {
      h2: 'Cómo se desplaza el acento en la conjugación verbal rusa',
      content:
        'Al igual que con los sustantivos, algunos verbos rusos tienen **acento fijo** en toda la conjugación, mientras otros tienen **acento móvil**. El patrón más común: los verbos perfectivos con acento final suelen desplazarlo hacia la raíz en 1.ª persona singular (я).',
      table: {
        headers: ['Persona', 'понять (entender)', 'начать (comenzar)', 'взять (tomar)'],
        rows: [
          ['я (yo)', 'пойму́', 'начну́', 'возьму́'],
          ['ты (tú)', 'поймёшь', 'начнёшь', 'возьмёшь'],
          ['он/она (él/ella)', 'поймёт', 'начнёт', 'возьмёт'],
          ['мы (nosotros)', 'поймём', 'начнём', 'возьмём'],
          ['вы (vosotros/usted)', 'поймёте', 'начнёте', 'возьмёте'],
          ['они (ellos/ellas)', 'поймут', 'начнут', 'возьмут'],
        ],
        caption:
          'Acento en la conjugación: la 1.ª persona singular difiere en los verbos de acento final',
        accentColumnIndices: [1, 2, 3],
      },
      subsections: [
        {
          h3: 'Pasado: masculino vs otras formas',
          content:
            'Algunos verbos también desplazan el acento en el tiempo pasado. El pasado masculino singular suele tener un acento diferente al femenino, neutro y plural.\n\n— **жить** (vivir): жил — жила́ — жи́ло — жи́ли\n— **брать** (tomar): брал — брала́ — бра́ло — бра́ли\n— **пить** (beber): пил — пила́ — пи́ло — пи́ли\n— **дать** (dar): дал — дала́ — да́ло — да́ли\n\nNota: las formas del **pasado femenino** casi siempre atraen el acento a la sílaba final en estos verbos.',
        },
      ],
      bullets: [
        'Los **verbos perfectivos** suelen desplazar el acento del radical a la desinencia en la conjugación',
        'El **pasado femenino** frecuentemente tiene acento final aunque otras formas no lo tengan',
        'Los verbos irregulares de alta frecuencia (жить, брать, пить, дать) deben memorizarse individualmente',
      ],
    },
    {
      h2: '5 patrones que ayudan a predecir el acento ruso',
      content:
        'No existen reglas absolutas para el acento ruso — pero hay **tendencias** que cubren una gran parte del vocabulario cotidiano. Aprender estos patrones no reemplazará la exposición al audio, pero dará mejores aproximaciones ante palabras nuevas.',
      subsections: [
        {
          h3: '1. Sufijos que atraen el acento sistemáticamente',
          content:
            'Ciertos sufijos atraen el acento de manera fiable:\n\n— **-ость** (sustantivos abstractos): ра́дость (alegría), го́рдость (orgullo), но́вость (noticia)\n— **-ение/-ание** (sustantivos verbales): реше́ние (decisión), созда́ние (creación)\n— **-ия** (préstamos extranjeros): исто́рия (historia), тера́пия (terapia)\n— **-ист** (sustantivos de profesión): журнали́ст (periodista), пиани́ст (pianista)',
        },
        {
          h3: '2. Los prefijos rara vez llevan el acento',
          content:
            'Los prefijos (по-, пере-, вы-, за-, при-, etc.) casi nunca reciben el acento en verbos y adjetivos. El acento casi siempre cae en la **raíz o el sufijo**.\n\nExcepción principal: el prefijo **вы-** en verbos perfectivos siempre lleva el acento — вы́йти (salir), вы́пить (beber todo), вы́учить (aprender completamente). Esta regla es casi absoluta.',
        },
        {
          h3: '3. Palabras compuestas: acento en el segundo elemento',
          content:
            'En sustantivos y adjetivos compuestos, el acento suele caer en la **segunda raíz**.\n\n— **самолёт** (avión): само + лёт → acento en лёт\n— **водопад** (cascada): водо + пад → acento en пад\n— **землетрясение** (terremoto): земле + трясение → acento en трясение',
        },
        {
          h3: '4. Los préstamos suelen conservar el acento original',
          content:
            'Las palabras internacionales tomadas del francés, inglés o alemán suelen mantener el acento de la lengua de origen. Los préstamos del francés tienden al acento final.\n\n— теа́тр (teatro)\n— шокола́д (chocolate)\n— телефо́н (teléfono)\n— университе́т (universidad)',
        },
        {
          h3: '5. La regla del prefijo вы- — la regla más fiable del ruso',
          content:
            'Cuando el prefijo **вы-** forma un verbo perfectivo, siempre lleva el acento — independientemente de la sílaba acentuada en el imperfectivo.\n\n— учи́ть → **вы́**учить\n— пи́ть → **вы́**пить\n— ходи́ть → **вы́**ходить\n\nEsta es una de las pocas reglas de acento casi absolutas en ruso, y se aplica sin excepción.',
        },
      ],
      bullets: [
        'Estos patrones son **tendencias, no reglas** — existen excepciones para todos excepto вы-',
        'La regla del prefijo **вы-** es la más fiable: siempre lleva el acento',
        'Usa estos patrones como primera aproximación y verifica siempre con audio',
      ],
    },
    {
      h2: 'Estrategias prácticas para dominar el acento ruso',
      content:
        'Dado que el acento ruso no puede deducirse completamente de la ortografía, el único enfoque fiable es **construir un vocabulario oral amplio**. Aquí están las estrategias más eficaces:',
      subsections: [
        {
          h3: '1. Aprende siempre las palabras escuchando audio',
          content:
            'Nunca aprendas una nueva palabra rusa solo del texto. Combínala siempre con audio — un diccionario con pronunciación (Forvo, Wiktionary), un curso, un podcast o un tutor. Si solo ves la forma escrita, no sabrás dónde cae el acento, y una suposición incorrecta puede convertirse en un error fosilizado.',
        },
        {
          h3: '2. Usa un diccionario con marcas de acento',
          content:
            'Haz de las marcas de acento tu norma. Usa diccionarios que muestren el acento en cada forma (Wiktionary en ruso marca el acento claramente). Cuando añadas una palabra a tu sistema de tarjetas (Anki, etc.), incluye siempre la marca de acento.',
        },
        {
          h3: '3. Practica el shadowing con hablantes nativos',
          content:
            'El shadowing — escuchar a un hablante nativo y repetir inmediatamente, imitando su ritmo y acentuación — es uno de los métodos más eficaces para interiorizar los patrones de acento. Los podcasts en ruso, los noticieros y los canales de YouTube para aprendices son buenas fuentes.',
        },
        {
          h3: '4. Señala las palabras de acento móvil en tus notas',
          content:
            'Cuando aprendas un nuevo sustantivo o verbo, comprueba si tiene acento móvil. Un buen diccionario mostrará todas las formas de caso con marcas de acento. Para los verbos, consulta la conjugación completa. Marca especialmente las palabras de acento móvil en tus notas de vocabulario para revisarlas con más cuidado.',
        },
      ],
      bullets: [
        'Nunca aprendas palabras nuevas **solo del texto** — confirma siempre con audio',
        'Añade marcas de acento a cada palabra en tu sistema de tarjetas',
        'El shadowing es la forma más rápida de desarrollar hábitos de acento precisos y automáticos',
      ],
    },
    {
      h2: '10 palabras que los estudiantes casi siempre acentúan mal',
      content:
        'Estas son palabras que incluso estudiantes de nivel intermedio pronuncian frecuentemente de forma incorrecta — el acento es contraintuitivo o no coincide con la primera suposición:',
      table: {
        headers: ['Palabra', 'Acento correcto', 'Error frecuente', 'Significado'],
        rows: [
          ['звони́т', 'звони́т (2.ª sílaba)', 'зво́нит', 'él/ella llama por teléfono'],
          ['позвони́шь', 'позвони́шь (3.ª sílaba)', 'позво́нишь', 'tú llamarás'],
          ['на́чать', 'на́чать (1.ª sílaba)', 'нача́ть', 'empezar (infinitivo)'],
          ['по́нял', 'по́нял (1.ª sílaba)', 'поня́л', 'él entendió (pas. m.)'],
          ['ку́хня', 'ку́хня (1.ª sílaba)', 'кухня́', 'cocina'],
          ['то́рты', 'то́рты (1.ª sílaba)', 'торты́', 'tartas (plural de торт)'],
          ['ша́рфы', 'ша́рфы (1.ª sílaba)', 'шарфы́', 'bufandas (plural de шарф)'],
          ['краси́вее', 'краси́вее (2.ª sílaba)', 'красиве́е', 'más hermoso/a'],
          ['алфави́т', 'алфави́т (3.ª sílaba)', 'алфа́вит', 'alfabeto'],
          ['столя́р', 'столя́р (2.ª sílaba)', 'сто́ляр', 'carpintero'],
        ],
        caption: 'Errores frecuentes de acento entre estudiantes — formas correctas',
        boldColumnIndices: [1],
        accentColumnIndices: [1],
      },
      bullets: [
        '**Звонит/позвонишь** son de los errores de acento más debatidos en ruso — incluso los nativos se corrigen entre sí',
        '**Торты** y **шарфы** son trampas clásicas — el acento del plural no se desplaza a la desinencia',
        'Si tienes dudas: consulta Wiktionary en versión rusa, que marca el acento en cada forma',
      ],
    },
  ],
  faq: [
    {
      question: '¿Es siempre impredecible el acento tónico ruso?',
      answer:
        'No del todo. Hay patrones y tendencias — por ejemplo, el prefijo вы- siempre lleva el acento, y ciertos sufijos (-ость, -ение, -ист) lo atraen de forma sistemática. Pero a diferencia del francés o el polaco, no hay una regla de posición universal. La mayoría de las palabras deben aprenderse individualmente con audio.',
    },
    {
      question: '¿Cómo se marca el acento en ruso?',
      answer:
        'En materiales de aprendizaje y diccionarios, el acento se marca con un acento agudo (′) sobre la vocal acentuada: молоко́, говори́т, рабо́та. En el texto impreso estándar (libros, noticias, webs), el acento no se marca. La letra ё siempre lleva acento cuando aparece — esa es la única marca de acento que se encuentra en el texto normal.',
    },
    {
      question: '¿La letra ё siempre indica acento?',
      answer:
        'Sí. En ruso, ё siempre lleva el acento. Por eso es importante distinguir е de ё: все (todos, acento en е) vs всё (todo, ё acentuado). Muchos textos rusos reemplazan ё por е por razones tipográficas, lo que puede generar confusión — pero en texto correctamente escrito, ё siempre se usa para la vocal acentuada.',
    },
    {
      question: '¿Los hablantes nativos rusos siempre saben dónde cae el acento?',
      answer:
        'Sí — los nativos han interiorizado el acento como parte de su vocabulario. Sin embargo, a veces debaten ciertas palabras (especialmente звонит vs зво́нит) porque las normas de acento pueden variar entre generaciones o dialectos. La referencia siempre es un diccionario normativo como el Орфоэпический словарь.',
    },
    {
      question: '¿Cuánto tiempo se tarda en dominar el acento ruso?',
      answer:
        'No hay un momento en que se "termina" de aprender el acento ruso — es un proceso continuo de construcción de vocabulario oral. La mayoría de los estudiantes alcanza un nivel cómodo tras 6-12 meses de estudio regular con exposición al audio.',
    },
  ],
  conclusionIntro:
    'El acento tónico ruso es uno de esos aspectos del idioma que recompensa el estudio paciente y orientado al audio:',
  conclusionBullets: [
    'El acento es **libre** en ruso — puede caer en cualquier sílaba, sin regla universal',
    'El acento **no se escribe** en el texto estándar — hay que aprenderlo con audio',
    'El acento es **móvil** — se desplaza según las formas de caso y las conjugaciones verbales',
    'Algunos pares de palabras difieren **solo** en el acento — acento incorrecto = palabra incorrecta',
    'El prefijo **вы-** siempre lleva el acento — la regla más fiable del ruso',
    'Aprende cada nueva palabra **con audio**, marca el acento en tus tarjetas y practica el shadowing',
  ],
  conclusionOutro:
    'La buena noticia: cuanto más ruso escuchas y hablas, más natural se vuelve el acento. Empieza con el vocabulario de alta frecuencia — las 500 palabras que usarás a diario — y aprende su acento correctamente desde el principio. Corregir malos hábitos de acento después es mucho más difícil que aprenderlos bien desde el inicio.',
  internalLinks: [
    {
      href: '/learn/articles/russian-verbal-aspect-perfective-imperfective',
      label: 'El aspecto verbal en ruso: perfectivo vs imperfectivo — Guía completa',
    },
    {
      href: '/learn/articles/russian-alphabet-cyrillic-guide',
      label: 'El alfabeto ruso: aprende el cirílico en 3 pasos simples',
    },
    {
      href: '/learn/articles/how-long-learn-russian',
      label: '¿Cuánto tiempo se tarda en aprender ruso?',
    },
    {
      href: '/learn/articles/learn-russian-on-your-own',
      label: '¿Puedes aprender ruso por tu cuenta?',
    },
    { href: '/practice', label: 'Quiz gratuito de declinaciones — practica los 6 casos' },
  ],
  ctaText: 'Practicar los casos rusos — Gratis →',
  ctaHref: '/practice',
  conclusion: '',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'El acento tónico en ruso: por qué lo cambia todo (y cómo dominarlo)',
    description:
      'Domina el acento tónico ruso: entiende por qué es impredecible, cómo cambia el significado, cómo se desplaza en la declinación y estrategias prácticas para entrenar el oído.',
    datePublished: '2026-05-30',
    dateModified: '2026-05-30',
    author: {
      '@type': 'Person',
      name: 'Nathan',
      url: 'https://russiandeclensions.com/',
      image: 'https://russiandeclensions.com/landing-cases/founder-photo.webp',
      description:
        'Francófono nativo que aprende ruso; escribe sobre gramática, casos y hábitos de autoestudio prácticos.',
      worksFor: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://russiandeclensions.com/learn/articles/russian-word-stress-guide',
    },
    keywords:
      'acento tónico ruso, acentuación en ruso, reglas de acento en ruso, pronunciación rusa',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russian-word-stress-guide.webp',
      width: 1200,
      height: 630,
    },
  },
};
