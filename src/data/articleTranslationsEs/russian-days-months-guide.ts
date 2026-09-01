import type { LearnArticle } from '../learnArticles';

/** Traducción al español del artículo `russian-days-months-guide` (fuente en inglés: `learnArticles.ts`). */
export const russianDaysMonthsGuideEs: LearnArticle = {
  slug: 'russian-days-months-guide',
  title: 'Los días de la semana y los meses en ruso (guía completa 2026)',
  metaTitle:
    'Los días de la semana y los meses en ruso | Guía completa 2026 | Russian Cases with Anna',
  metaDescription:
    'Aprende los días de la semana y los meses en ruso con pronunciación, además de la regla gramatical que confunde a los estudiantes: в понедельник (acusativo) vs в январе (preposicional).',
  keywords: [
    'días de la semana en ruso',
    'meses en ruso',
    'días de la semana rusos',
    'meses rusos',
    'cómo decir los días en ruso',
    'vocabulario del calendario ruso',
    'понедельник ruso',
    'gramática de fechas en ruso',
    'días y meses casos rusos',
    'vocabulario de la semana en ruso',
  ],
  h1: 'Los días de la semana y los meses en ruso (guía completa)',
  heroImage: {
    src: '/articles/russia-kremlin-moscow.webp',
    alt: 'Aprender los días de la semana y los meses en ruso — guía completa',
    width: 1200,
    height: 630,
  },
  intro:
    'Los días de la semana y los meses parecen puro vocabulario — siete palabras, doce palabras, se memorizan y se sigue adelante. **Pero en ruso vienen con una trampa gramatical que atrapa a casi todos los estudiantes al menos una vez.** Decir "el lunes" requiere un caso gramatical. Decir "en enero" requiere uno completamente distinto. Confundirlos produce una frase que suena claramente extranjera, aunque cada palabra sea correcta.\n\nLa buena noticia: **la regla es sencilla una vez que se explica con claridad**, y los libros de texto rusos rara vez la resumen en un solo lugar. Esta guía te ofrece la lista completa de días y meses con pronunciación, la regla exacta de caso para "el [día]" frente a "en [mes]", cómo construir una fecha completa y cómo preguntar qué día o qué fecha es hoy.',
  introByline: {
    text: '**Escrito por Nathan** — hablante nativo de francés que aprende ruso; comparto lo que realmente funciona para la gramática, los casos y la práctica diaria.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, fundador de Russian Cases with Anna',
    imageWidth: 256,
    imageHeight: 256,
  },
  whatYouLearn: [
    'Los siete días de la semana en ruso, con pronunciación y significado literal',
    'Los doce meses en ruso, con pronunciación y formas de genitivo/preposicional',
    'La regla central: los días usan **«в» + acusativo**, los meses usan **«в» + preposicional**',
    'Cómo decir días **recurrentes**: «los lunes» (по + dativo plural)',
    'Cómo construir una fecha completa y preguntar «¿qué día es hoy?» / «¿cuál es la fecha de hoy?»',
    'Los errores más comunes — y la palabra (среда) que cambia de acento en acusativo',
  ],
  leadMagnetCta: {
    title: 'Domina los casos rusos más allá del calendario — app gratuita',
    description:
      'Los días y los meses son solo otro lugar donde aparecen los casos rusos. Russian Cases with Anna te ofrece lecciones estructuradas y cuestionarios inteligentes para automatizar cada caso — gratis en iOS y Android.',
    ctaText: 'Descargar la app — Gratis',
    ctaHref: '/',
  },
  sections: [
    {
      h2: 'Los días de la semana en ruso: la lista completa',
      content:
        'A diferencia del calendario habitual en muchos países, **la semana rusa comienza el lunes** (понедельник) y termina el domingo (воскресенье) — esto coincide con el estándar ISO y con cualquier calendario o agenda rusa que veas. Varios nombres de días se vuelven transparentes en cuanto conoces su origen.',
      table: {
        headers: ['Día', 'Ruso', 'Transliteración', 'Origen literal'],
        rows: [
          ['Lunes', 'понедельник', "ponedel'nik", 'после недели — "después del (día de) descanso"'],
          ['Martes', 'вторник', 'vtornik', 'второй — "el segundo (día)"'],
          ['Miércoles', 'среда', 'sreda', 'середина — "el medio (de la semana)"'],
          ['Jueves', 'четверг', 'chetverg', 'четвёртый — "el cuarto (día)"'],
          ['Viernes', 'пятница', 'pyatnitsa', 'пятый — "el quinto (día)"'],
          ['Sábado', 'суббота', 'subbota', 'del hebreo "Shabat", vía el eslavo eclesiástico'],
          ['Domingo', 'воскресенье', "voskresen'ye", 'воскресение — "Resurrección"'],
        ],
        caption: 'Los siete días de la semana en ruso',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'La semana rusa va de **lunes a domingo**, no de domingo a sábado',
        '**Среда** (miércoles) significa literalmente "el medio" — se sitúa en la mitad de la semana laboral',
        '**Суббота** (sábado) es un préstamo del hebreo шаббат (Shabat), tomado a través del eslavo eclesiástico',
        '**Воскресенье** (domingo) sustituyó a la antigua palabra pagana неделя ("sin trabajo") con la llegada del cristianismo — неделя significa hoy "semana" en ruso moderno',
        'Todos los nombres de los días se escriben en **minúscula** en ruso, a diferencia del español, que también los escribe en minúscula pero por razones distintas',
      ],
    },
    {
      h2: 'Los meses en ruso: la lista completa',
      content:
        'Los nombres de los meses rusos no tienen relación con los nombres en español (provienen de antiguas palabras eslavas de la naturaleza, no del latín) — con una excepción: **siempre se escriben en minúscula**, y la mayoría de los estudiantes los encuentran más fáciles de pronunciar que los días. A continuación tienes la forma nominativa (la forma "de diccionario") junto con las dos formas que realmente usarás más: el genitivo (para fechas) y el preposicional (para "en [mes]").',
      table: {
        headers: ['Mes', 'Ruso (nominativo)', 'Genitivo (fechas)', 'Preposicional ("en...")'],
        rows: [
          ['Enero', 'январь', 'января', 'январе'],
          ['Febrero', 'февраль', 'февраля', 'феврале'],
          ['Marzo', 'март', 'марта', 'марте'],
          ['Abril', 'апрель', 'апреля', 'апреле'],
          ['Mayo', 'май', 'мая', 'мае'],
          ['Junio', 'июнь', 'июня', 'июне'],
          ['Julio', 'июль', 'июля', 'июле'],
          ['Agosto', 'август', 'августа', 'августе'],
          ['Septiembre', 'сентябрь', 'сентября', 'сентябре'],
          ['Octubre', 'октябрь', 'октября', 'октябре'],
          ['Noviembre', 'ноябрь', 'ноября', 'ноябре'],
          ['Diciembre', 'декабрь', 'декабря', 'декабре'],
        ],
        caption: 'Meses rusos: formas nominativa, genitiva y preposicional',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'La mayoría de los meses son **masculinos** y terminan en consonante o en **-ь** (январь, май, июнь)',
        'La forma de genitivo (usada en fechas) siempre termina en **-я**: января, февраля, марта…',
        'La forma de preposicional (usada tras "в" para "en [mes]") termina en **-е**: январе, феврале, марте…',
        '**Июнь** (junio) y **июль** (julio) se confunden fácilmente al hablar rápido — presta atención a la consonante final: -нь frente a -ль',
        'Los nombres de los meses nunca se escriben con mayúscula en ruso, ni siquiera al inicio de una frase',
      ],
    },
    {
      h2: 'La regla gramatical: los días llevan acusativo, los meses llevan preposicional',
      content:
        'Esta es la regla que atrapa a casi todos los estudiantes. Cuando dices "**el [día]**" o "**en [mes]**" con la preposición **в**, el caso que sigue es distinto para días y para meses — y no hay atajo, simplemente hay que saber cuál es cuál.\n\n**Días de la semana: "в" + acusativo.** Он придёт **в понедельник** (Vendrá el lunes). Мы встречаемся **во вторник** (Nos vemos el martes).\n\n**Meses: "в" + preposicional.** Я родился **в январе** (Nací en enero). Свадьба будет **в июне** (La boda será en junio).\n\nPara los nombres de días masculinos (понедельник, вторник, четверг) el acusativo es idéntico al nominativo, así que la regla resulta invisible. Se vuelve visible con los tres días femeninos — среда, пятница, суббота —, que sí cambian de forma, y con воскресенье, que es neutro y también permanece igual.',
      table: {
        headers: ['Categoría', 'Caso tras «в»', 'Ejemplo'],
        rows: [
          ['Días de la semana', 'Acusativo', 'в понедельник, во вторник, в среду, в пятницу, в субботу'],
          ['Meses', 'Preposicional', 'в январе, в марте, в июне, в декабре'],
        ],
        caption: 'Días frente a meses: qué caso sigue a «в»',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        '**Среда** (miércoles) es la más complicada: el nominativo se acentúa sredá, pero el acusativo **в сре́ду** desplaza el acento a la primera sílaba — un patrón clásico de cambio de acento en ruso (como рука́ → в ру́ку)',
        '**Пятница → в пятницу** y **суббота → в субботу**: ambas femeninas, ambas toman la terminación regular **-у** en acusativo',
        '**Вторник** se convierte en **во вторник** (no в вторник) — «в» pasa a «во» ante un grupo de consonantes, para facilitar la pronunciación',
        'Un error común es decir "**в январь**" en lugar de **в январе** — los meses nunca llevan acusativo tras "в" en este contexto',
        'La misma regla de acusativo se aplica a otras expresiones de tiempo: **в эту среду** (este miércoles), **в прошлый вторник** (el martes pasado)',
      ],
    },
    {
      h2: 'Hablar de cada lunes, cada semana: «По» + dativo plural',
      content:
        'Para decir que algo ocurre **con regularidad** un día determinado ("los lunes", "cada martes"), el ruso cambia por completo de preposición: se usa **по** con el **dativo plural** del día, no **в** con el acusativo singular.',
      table: {
        headers: ['Español', 'Ruso', 'Caso'],
        rows: [
          ['los lunes', 'по понедельникам', 'Dativo plural'],
          ['los martes', 'по вторникам', 'Dativo plural'],
          ['los miércoles', 'по средам', 'Dativo plural'],
          ['los jueves', 'по четвергам', 'Dativo plural'],
          ['los viernes', 'по пятницам', 'Dativo plural'],
          ['los sábados', 'по субботам', 'Dativo plural'],
          ['los domingos', 'по воскресеньям', 'Dativo plural'],
        ],
        caption: 'Días recurrentes: по + dativo plural',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        '**У меня русский по понедельникам** (Tengo clase de ruso los lunes) — un día único y recurrente',
        'Compara: **в понедельник** (este lunes en concreto, próximo) frente a **по понедельникам** (todos los lunes, como norma)',
        'Este es el mismo patrón **по + dativo** que en "по субботам магазин закрыт" (la tienda está cerrada los sábados)',
      ],
    },
    {
      h2: 'Cómo decir la fecha completa en ruso',
      content:
        'Una fecha completa combina tres elementos, cada uno en una forma distinta: el **número del día** (un ordinal neutro, porque el sustantivo implícito es число — "fecha/número"), el **mes** (genitivo) y el **año** (un ordinal en caso preposicional, introducido por в).\n\n**5 de junio de 2026 → пятое июня две тысячи двадцать шестого года.**\n\nPara un desglose más detallado de los números ordinales y cómo se forman los años, consulta nuestra [guía completa de números rusos](/learn/articles/russian-numbers-guide) — esta sección solo cubre la mecánica día/mes/año específica para escribir fechas completas.',
      table: {
        headers: ['Español', 'Ruso', 'Notas'],
        rows: [
          ['1 de enero', 'первое января', 'Ordinal (neutro) + mes en genitivo'],
          ['8 de marzo', 'восьмое марта', 'Ordinal (neutro) + mes en genitivo'],
          ['9 de mayo', 'девятое мая', 'Ordinal (neutro) + mes en genitivo'],
          ['31 de diciembre', 'тридцать первое декабря', 'Ordinal compuesto + mes en genitivo'],
        ],
        caption: 'Escribir fechas: día (ordinal) + mes (genitivo)',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'En una fecha, "el" no se traduce con **в** — simplemente se usa el ordinal solo: **Я приеду пятого июня** (Llegaré el 5 de junio) — esto es genitivo, no acusativo, porque responde a "cuándo exactamente" como fecha, no como día de la semana',
        'Las fechas escritas en documentos usan el formato numérico **día.mes.año**: 05.06.2026',
        'Para los años, la construcción "en [año]" es **в две тысячи двадцать шестом году** — consulta la guía de números para el desglose completo',
      ],
    },
    {
      h2: 'Cómo preguntar «¿qué día es hoy?» y «¿cuál es la fecha?»',
      content:
        'El ruso tiene dos preguntas distintas aquí — no las confundas, porque usan palabras interrogativas diferentes y esperan respuestas en casos diferentes.',
      table: {
        headers: ['Pregunta', 'Ruso', 'Respuesta de ejemplo'],
        rows: [
          ['¿Qué día de la semana es hoy?', 'Какой сегодня день недели?', 'Сегодня среда. (Nominativo)'],
          ['¿Cuál es la fecha de hoy?', 'Какое сегодня число?', 'Сегодня пятое июня. (Ordinal + mes en genitivo)'],
          ['¿Qué día será el viernes?', 'Какой день недели будет в пятницу?', '—'],
        ],
        caption: 'Preguntar por el día y la fecha',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        '**Какой сегодня день (недели)?** pregunta por el día de la semana — se responde en nominativo: Сегодня понедельник (Hoy es lunes)',
        '**Какое сегодня число?** pregunta por la fecha del calendario — se responde con ordinal + mes en genitivo: Сегодня пятнадцатое марта (Hoy es 15 de marzo)',
        'Ambas preguntas usan «сегодня» (hoy), pero **какой** (masculino, concuerda con день) y **какое** (neutro, concuerda con число) no son intercambiables',
      ],
    },
    {
      h2: 'Errores comunes con los días y los meses',
      content:
        'Estos cuatro errores representan la mayoría de los fallos que cometen los estudiantes con los días y meses rusos:',
      bullets: [
        '**Usar acusativo tras los meses.** Decir "**в январь**" en lugar de **в январе**. Los meses siempre llevan preposicional tras в.',
        '**Usar preposicional tras los días.** Decir "**в понедельнике**" en lugar de **в понедельник**. Los días siempre llevan acusativo tras в.',
        '**Olvidar el cambio de acento en среда.** El nominativo es sredá, pero el acusativo es **сре́ду** — el acento se traslada a la primera sílaba. Decir sredú suena extranjero.',
        '**Confundir какой y какое.** Какой день (masculino, concuerda con день) frente a какое число (neutro, concuerda con число) — confundirlos es un error muy común entre principiantes.',
        '**Mezclar в + acusativo (un día concreto) con по + dativo plural (cada semana).** В субботу = este sábado; по субботам = cada sábado.',
      ],
    },
  ],
  faq: [
    {
      question: '¿Qué caso llevan los días de la semana en ruso?',
      answer:
        'Los días de la semana llevan **acusativo** tras la preposición **в**: в понедельник (el lunes), во вторник (el martes), в среду (el miércoles). Los nombres de días masculinos y neutros se ven idénticos al nominativo en acusativo; los tres días femeninos (среда, пятница, суббота) cambian su terminación, y среда además desplaza su acento: **в сре́ду**.',
    },
    {
      question: '¿Qué caso llevan los meses en ruso?',
      answer:
        'Los meses llevan **preposicional** tras в al decir "en [mes]": в январе (en enero), в июне (en junio), в декабре (en diciembre). Esto es distinto del acusativo usado para los días — una fuente común de errores para los estudiantes.',
    },
    {
      question: '¿La semana rusa empieza el lunes o el domingo?',
      answer:
        'La semana rusa empieza el **lunes** (понедельник) y termina el **domingo** (воскресенье), siguiendo el estándar ISO 8601. Esto es lo contrario de la convención tradicional del calendario estadounidense, donde la semana empieza el domingo.',
    },
    {
      question: '¿Cómo se dice "todos los lunes" en ruso?',
      answer:
        'Usa **по + dativo plural**: по понедельникам (los lunes / cada lunes). Esto es distinto de **в понедельник** (acusativo singular), que se refiere a un lunes concreto, no a un patrón recurrente.',
    },
    {
      question: '¿Cómo se dice una fecha completa en ruso, como "5 de junio de 2026"?',
      answer:
        'Combina un número ordinal (neutro, para el día) con el mes en genitivo: **пятое июня** (5 de junio). Para el año, añade también el número ordinal del año en genitivo, introducido por "de": **пятое июня две тысячи двадцать шестого года**. Consulta nuestra [guía de números rusos](/learn/articles/russian-numbers-guide) para las reglas completas sobre ordinales y años.',
    },
  ],
  conclusion:
    'Los días y los meses parecen simples listas de vocabulario, pero en realidad son una lección compacta sobre cómo funcionan los casos rusos en frases reales y cotidianas. Una vez que la regla central queda clara — **los días llevan acusativo tras в, los meses llevan preposicional tras в** — puedes hablar de tu horario, tu cumpleaños y tus planes con verdadera confianza.\n\nLa forma más rápida de automatizarlo es usarlo: menciona qué día ocurre algo, usa по + dativo plural para tu rutina semanal y practica fechas completas en voz alta. Hablar del calendario surge en casi todas las conversaciones reales, así que este es uno de los patrones gramaticales más rentables que puedes practicar.',
  conclusionBullets: [
    'La semana rusa va de **lunes a domingo** — siete nombres de días, todos en minúscula',
    'Los doce meses no tienen relación con los nombres latinos y también se escriben siempre en minúscula',
    'Regla central: **días + в → acusativo**; **meses + в → preposicional**',
    'Los días recurrentes usan **по + dativo plural**: по понедельникам (los lunes)',
    'Среда es la palabra a vigilar — su acento cambia en acusativo: **в сре́ду**',
  ],
  conclusionOutro:
    'Los días y los meses son solo un pequeño rincón de un sistema mucho más grande — los mismos casos acusativo y preposicional que acabas de usar aquí rigen los sustantivos, pronombres y adjetivos en todo el idioma. **Dominar ese sistema de casos completo es lo que convierte "conozco algunas palabras en ruso" en un ruso real y fluido.**',
  ctaText: 'Descargar Russian Cases with Anna — Gratis',
  ctaHref: '/',
  internalLinks: [
    {
      href: '/learn/articles/russian-numbers-guide',
      label: 'Los números en ruso: cómo contar en ruso (guía completa)',
    },
    {
      href: '/learn/articles/russian-greetings-guide',
      label: 'Saludos en ruso: cómo decir hola en ruso (guía completa)',
    },
    {
      href: '/learn/articles/russian-word-stress-guide',
      label: 'El acento tónico en ruso: por qué lo cambia todo (y cómo dominarlo)',
    },
    {
      href: '/learn/articles/russian-cases-explained-beginners-guide',
      label: 'Casos rusos explicados de forma simple: guía visual para principiantes',
    },
    {
      href: '/learn/articles/russian-prepositions-and-cases',
      label: 'Preposiciones rusas y casos: ¿qué preposición rige qué caso?',
    },
    { href: '/practice', label: 'Cuestionario de declinaciones rusas gratis (los seis casos)' },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Los días de la semana y los meses en ruso (guía completa 2026)',
    description:
      'Aprende los días de la semana y los meses en ruso con pronunciación, además de la regla gramatical que confunde a los estudiantes: в понедельник (acusativo) vs в январе (preposicional).',
    datePublished: '2026-09-01',
    dateModified: '2026-09-01',
    author: {
      '@type': 'Person',
      name: 'Nathan',
      url: 'https://russiandeclensions.com/',
      image: 'https://russiandeclensions.com/landing-cases/founder-photo.webp',
      description: 'Hablante nativo de francés que aprende ruso, comparte lo que realmente funciona.',
      worksFor: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://russiandeclensions.com/learn/articles/russian-days-months-guide',
    },
    keywords:
      'días de la semana en ruso, meses en ruso, días de la semana rusos, meses rusos, vocabulario del calendario ruso, gramática de fechas en ruso',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russia-kremlin-moscow.webp',
      width: 1200,
      height: 630,
    },
  },
};
