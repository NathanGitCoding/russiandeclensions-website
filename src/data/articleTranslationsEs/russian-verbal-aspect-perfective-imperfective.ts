import type { LearnArticle } from '../learnArticles';

/** Traducción española de `russian-verbal-aspect-perfective-imperfective` (fuente EN: `learnArticles.ts`). */
export const russianVerbalAspectEs: LearnArticle = {
  slug: 'russian-verbal-aspect-perfective-imperfective',
  title: 'El aspecto verbal en ruso: perfectivo vs imperfectivo explicados',
  metaTitle:
    'Aspecto verbal ruso: perfectivo vs imperfectivo — Guía completa | Russian Cases with Anna',
  metaDescription:
    'Domina el aspecto verbal ruso: entiende la diferencia entre verbos perfectivos e imperfectivos, aprende las reglas de uso y descubre los pares aspectuales más comunes con ejemplos.',
  keywords: [
    'aspecto verbal ruso',
    'perfectivo imperfectivo ruso',
    'aspecto en ruso',
    'verbos perfectivos imperfectivos ruso',
    'aspecto verbal ruso explicado',
    'pares aspectuales ruso',
  ],
  h1: 'El aspecto verbal en ruso: perfectivo vs imperfectivo — La guía completa',
  heroImage: {
    src: '/articles/russian-verbal-aspect-perfective-imperfective.webp',
    alt: 'Libros de gramática rusa y materiales de estudio para aprender el aspecto verbal',
    width: 1200,
    height: 630,
  },
  intro:
    'Si los casos rusos son la primera barrera que todo estudiante encuentra, el **aspecto verbal** es la segunda — y en cierta medida, la más complicada. A diferencia de los casos, que al menos tienen terminaciones visibles para memorizar, el aspecto trata del significado: la misma acción expresada de dos formas ligeramente distintas que el español no distingue de la misma manera.\n\nCada verbo ruso existe en dos formas: una forma **imperfectiva** (que describe una acción en curso, repetida o incompleta) y una forma **perfectiva** (que describe una acción completada y puntual con un resultado). Estas dos formas forman un **par aspectual**. Читать / прочитать. Писать / написать. Говорить / сказать.\n\nLa buena noticia: una vez que captas la lógica central — **proceso vs. resultado** — el aspecto empieza a encajar. Esta guía te lleva a través de todo lo que necesitas: las reglas, los pares comunes, las interacciones con los tiempos verbales y los errores más frecuentes.',
  introByline: {
    text: '**Escrito por Nathan** — hablante nativo de francés; aprendo ruso y comparto lo que realmente funciona para la gramática, los casos y la práctica diaria.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, fundador de Russian Cases with Anna',
    imageWidth: 256,
    imageHeight: 256,
  },
  whatYouLearn: [
    'La diferencia fundamental entre perfectivo e imperfectivo — con ejemplos',
    'Cuándo usar cada aspecto en pasado, presente y futuro',
    'Cómo funcionan los pares aspectuales — y cómo se forman',
    'Una tabla de los 30 pares aspectuales más comunes',
    'Los 5 errores más comunes con el aspecto (y cómo evitarlos)',
  ],
  leadMagnetCta: {
    title: 'Domina la gramática rusa — casos y mucho más',
    description:
      'Descarga Russian Cases with Anna — la app diseñada para practicar las declinaciones y estructuras gramaticales rusas. 128 lecciones, 136 quizzes, 400+ palabras. Gratis en iOS y Android.',
    ctaText: 'Descargar la app — Gratis',
    ctaHref: '/',
  },
  sections: [
    {
      h2: '¿Qué es el aspecto verbal?',
      content:
        'En español, puedes decir "estaba leyendo" (en progreso) o "leí el libro" (completado) — el verbo mismo cambia de forma. El español usa tiempos compuestos y contexto para expresar esta distinción.\n\nEl ruso funciona de manera diferente. Cada verbo tiene **dos formas de diccionario separadas**: una para el aspecto imperfectivo y otra para el perfectivo. No son tiempos verbales — son una capa de significado sobre **cómo** se desarrolla una acción.\n\nPiénsalo así:\n\n- **Imperfectivo** = enfoque en el **proceso**, la duración, el hábito o la repetición\n- **Perfectivo** = enfoque en el **resultado**, la finalización o la ocurrencia única',
      table: {
        headers: ['Imperfectivo', 'Perfectivo', 'Significado básico'],
        rows: [
          ['читать', 'прочитать', 'leer / terminar de leer'],
          ['писать', 'написать', 'escribir / terminar de escribir'],
          ['делать', 'сделать', 'hacer / completar'],
          ['говорить', 'сказать', 'hablar / decir (una vez)'],
          ['учить', 'выучить', 'aprender / aprender (completamente)'],
        ],
        caption: 'Pares aspectuales: imperfectivo (proceso) vs perfectivo (resultado)',
        accentColumnIndices: [1],
      },
      bullets: [
        'El imperfectivo es generalmente la **forma base** que se encuentra primero en el diccionario',
        'El perfectivo se forma añadiendo un **prefijo** (про-, на-, по-, вы-, с-) o cambiando el **sufijo**',
        'Algunos pares son **supletivos** (raíces completamente diferentes) — ej. говорить / сказать',
      ],
    },
    {
      h2: 'El aspecto imperfectivo: cuándo usarlo',
      content:
        'Usa el **imperfectivo** cuando quieras hablar de:\n\n1. **Acciones en curso** — algo que sucede ahora mismo o en un momento específico\n2. **Acciones repetidas o habituales** — algo que ocurre regularmente\n3. **Duración** — enfatizando cuánto tiempo duró algo\n4. **Proceso** — cuando el resultado es irrelevante o poco importante\n5. **Oraciones negativas** — la mayoría de las negaciones usan el imperfectivo',
      subsections: [
        {
          h3: 'Ejemplos en contexto',
          content:
            '**Acción en curso**:\nЯ читаю книгу. — Estoy leyendo un libro. (ahora mismo)\n\n**Acción habitual**:\nКаждый день я читаю газету. — Cada día leo el periódico.\n\n**Duración**:\nОн читал два часа. — Leyó durante dos horas. (énfasis en la duración)\n\n**Proceso sin énfasis en el resultado**:\nОна писала письмо, когда он пришёл. — Estaba escribiendo una carta cuando él llegó.\n\n**Negación**:\nЯ не читал эту книгу. — No he leído este libro.',
        },
      ],
      bullets: [
        'Palabras temporales como **всегда** (siempre), **часто** (a menudo), **каждый день** (cada día) → imperfectivo',
        'El **presente** solo puede formarse con verbos imperfectivos — el perfectivo no tiene presente',
        'Para describir una **acción de fondo** interrumpida por otro evento → imperfectivo',
      ],
    },
    {
      h2: 'El aspecto perfectivo: cuándo usarlo',
      content:
        'Usa el **perfectivo** cuando quieras hablar de:\n\n1. **Acciones completadas** — algo que fue terminado\n2. **Ocurrencias únicas y puntuales** — no repetidas\n3. **Acciones orientadas al resultado** — el resultado importa\n4. **Acciones súbitas o instantáneas** — una acción rápida y decisiva\n5. **Eventos secuenciales** — una cadena de acciones (una tras otra)',
      subsections: [
        {
          h3: 'Ejemplos en contexto',
          content:
            '**Acción completada**:\nЯ прочитал книгу. — Leí / terminé el libro. (está hecho)\n\n**Ocurrencia única**:\nОн позвонил мне вчера. — Me llamó ayer. (una vez)\n\n**Orientada al resultado**:\nОна написала письмо. — Escribió (y terminó) la carta.\n\n**Eventos secuenciales**:\nОн пришёл домой, поел и лёг спать. — Llegó a casa, comió y se fue a dormir. (cada acción completada, luego la siguiente)',
        },
      ],
      bullets: [
        'Palabras temporales como **вдруг** (de repente), **наконец** (finalmente), **сразу** (inmediatamente) → perfectivo',
        'Una **cadena de acciones** en el pasado (primero… luego… luego…) → todo perfectivo',
        'Preguntas como "¿Lo leíste?" preguntando por la finalización → perfectivo',
      ],
    },
    {
      h2: 'Aspecto y tiempo verbal: cómo interactúan',
      content:
        'Una de las cosas más confusas para los principiantes: **el perfectivo no tiene presente**. Así es como el aspecto interactúa con cada tiempo verbal:',
      table: {
        headers: ['Tiempo', 'Imperfectivo', 'Perfectivo'],
        rows: [
          ['Presente', 'Sí (en curso / habitual)', '✗ No es posible'],
          ['Pasado', 'Sí (proceso, repetición, duración)', 'Sí (finalización, resultado)'],
          ['Futuro', 'Sí (будет + infinitivo — en curso)', 'Sí (futuro simple — finalización)'],
        ],
        caption: 'Cómo el aspecto se combina con los tiempos verbales en ruso',
      },
      subsections: [
        {
          h3: 'Futuro: la diferencia clave',
          content:
            '**Futuro imperfectivo** = буду + infinitivo (acción futura en curso/repetida)\nЯ буду читать эту книгу завтра. — Estaré leyendo este libro mañana.\n\n**Futuro perfectivo** = verbo perfectivo conjugado (acción completada)\nЯ прочитаю эту книгу завтра. — Leeré (y terminaré) este libro mañana.',
        },
        {
          h3: 'Pasado: proceso vs resultado',
          content:
            'En el pasado, ambos aspectos se usan libremente pero transmiten información diferente:\n\nОн читал книгу. — Estaba leyendo el libro. (proceso, puede no haber terminado)\nОн прочитал книгу. — Leyó (y terminó) el libro. (completado)\n\nОна писала письмо три часа. — Estuvo escribiendo la carta durante tres horas. (duración)\nОна написала письмо за три часа. — Escribió la carta en tres horas. (en X tiempo = resultado)',
        },
      ],
    },
    {
      h2: 'Cómo se forman los pares aspectuales',
      content:
        'La mayoría de los pares aspectuales se forman de maneras predecibles. Una vez que conoces los patrones, a menudo puedes deducir el perfectivo del imperfectivo (y viceversa).',
      subsections: [
        {
          h3: '1. Añadir un prefijo al imperfectivo',
          content:
            'El método más común: añadir un prefijo para formar el perfectivo.\n\nписать → **на**писать (escribir → terminar de escribir)\nчитать → **про**читать (leer → terminar de leer)\nделать → **с**делать (hacer → completar)\nучить → **вы**учить (aprender → aprender completamente)\nстроить → **по**строить (construir → terminar de construir)',
        },
        {
          h3: '2. Cambio de sufijo (imperfectivo del perfectivo)',
          content:
            'A veces el perfectivo es la forma base, y el imperfectivo se forma cambiando el sufijo:\n\nрешить → **реш**ать (decidir → estar decidiendo)\nкупить → **покупать** (comprar → estar comprando)\nоткрыть → **откры**вать (abrir → estar abriendo)\nобъяснить → **объяс**нять (explicar → estar explicando)',
        },
        {
          h3: '3. Pares supletivos (raíces diferentes)',
          content:
            'Un pequeño pero importante grupo tiene raíces completamente distintas para imperfectivo y perfectivo:\n\nговорить / **сказать** (hablar/decir)\nбрать / **взять** (tomar)\nкласть / **положить** (poner/colocar)\nловить / **поймать** (atrapar)\n\nEstos deben memorizarse individualmente — no hay patrón para derivarlos.',
        },
      ],
    },
    {
      h2: '30 pares aspectuales esenciales para aprender',
      content:
        'Aquí están los verbos rusos más frecuentemente usados con sus pares aspectuales. Aprende estos y cubrirás la gran mayoría del uso cotidiano:',
      table: {
        headers: ['Imperfectivo', 'Perfectivo', 'Significado'],
        rows: [
          ['читать', 'прочитать', 'leer'],
          ['писать', 'написать', 'escribir'],
          ['делать', 'сделать', 'hacer / realizar'],
          ['говорить', 'сказать', 'hablar / decir'],
          ['смотреть', 'посмотреть', 'mirar / ver'],
          ['слышать', 'услышать', 'oír'],
          ['видеть', 'увидеть', 'ver'],
          ['понимать', 'понять', 'entender'],
          ['думать', 'подумать', 'pensar'],
          ['знать', '—', 'saber (principalmente imperfectivo)'],
          ['учить', 'выучить', 'aprender / memorizar'],
          ['учиться', 'научиться', 'estudiar / aprender a'],
          ['покупать', 'купить', 'comprar'],
          ['продавать', 'продать', 'vender'],
          ['открывать', 'открыть', 'abrir'],
          ['закрывать', 'закрыть', 'cerrar'],
          ['давать', 'дать', 'dar'],
          ['брать', 'взять', 'tomar'],
          ['класть', 'положить', 'poner / colocar'],
          ['приходить', 'прийти', 'venir / llegar (a pie)'],
          ['приезжать', 'приехать', 'venir / llegar (en vehículo)'],
          ['уходить', 'уйти', 'irse / marcharse'],
          ['начинать', 'начать', 'comenzar / empezar'],
          ['кончать', 'кончить', 'terminar / acabar'],
          ['отвечать', 'ответить', 'responder'],
          ['спрашивать', 'спросить', 'preguntar'],
          ['рассказывать', 'рассказать', 'contar / narrar'],
          ['объяснять', 'объяснить', 'explicar'],
          ['помогать', 'помочь', 'ayudar'],
          ['решать', 'решить', 'decidir / resolver'],
        ],
        caption: '30 pares aspectuales rusos esenciales para la comunicación cotidiana',
        boldColumnIndices: [0, 1],
        accentColumnIndices: [1],
      },
    },
    {
      h2: '5 errores comunes con el aspecto ruso (y cómo corregirlos)',
      content: 'Aquí están los errores que más frecuentemente cometen los hispanohablantes:',
      subsections: [
        {
          h3: 'Error 1: Usar el perfectivo para acciones habituales',
          content:
            '**Incorrecto**: Каждое утро я **выпью** кофе.\n**Correcto**: Каждое утро я **пью** кофе.\n\n**Por qué**: Las acciones habituales o repetidas siempre usan el imperfectivo. "Cada mañana bebo café" es un hábito — el proceso, no un evento único completado.',
        },
        {
          h3: 'Error 2: Usar el imperfectivo al preguntar "¿Lo hiciste?"',
          content:
            '**Incorrecto**: Ты **читал** эту книгу? (preguntando si alguien lo terminó)\n**Correcto**: Ты **прочитал** эту книгу?\n\n**Por qué**: Las preguntas sobre finalización usan el perfectivo. El imperfectivo preguntaría sobre el proceso.',
        },
        {
          h3: 'Error 3: Formar el perfectivo incorrecto con un prefijo aleatorio',
          content:
            '**El problema**: No todos los prefijos funcionan con todos los verbos. Añadir **по-** a cada verbo es un atajo común para principiantes, pero **по**читать significa "leer un rato" — no "terminar de leer".\n\n**La solución**: Aprende cada par aspectual juntos desde el principio. No intentes derivar perfectivos adivinando prefijos.',
        },
        {
          h3: 'Error 4: Usar el imperfectivo en una cadena de acciones pasadas secuenciales',
          content:
            '**Incorrecto**: Он **приходил** домой, **ел** и **ложился** спать.\n**Correcto**: Он **пришёл** домой, **поел** и **лёг** спать.\n\n**Por qué**: En una secuencia de eventos donde cada acción se completa antes de que comience la siguiente, el ruso usa el perfectivo a lo largo de toda la cadena.',
        },
        {
          h3: 'Error 5: Olvidar que el perfectivo no tiene presente',
          content:
            '**Incorrecto**: Я **прочитаю** сейчас. (intentando decir "estoy leyendo ahora")\n**Correcto**: Я **читаю** сейчас.\n\n**Por qué**: El perfectivo no tiene forma de presente. Si conjugas un verbo perfectivo según el patrón de presente, obtienes un significado **futuro**, no presente.',
        },
      ],
    },
  ],
  faq: [
    {
      question: '¿Cuál es la diferencia entre perfectivo e imperfectivo en ruso?',
      answer:
        'El imperfectivo describe una acción como en curso, repetida o habitual — el énfasis está en el proceso. El perfectivo describe una acción completada y puntual — el énfasis está en el resultado. Cada verbo ruso existe en ambas formas, y elegir la correcta depende del significado que quieras transmitir.',
    },
    {
      question: '¿El ruso tiene presente para verbos perfectivos?',
      answer:
        'No. El aspecto perfectivo no tiene tiempo presente. Los verbos perfectivos solo existen en pasado y futuro. Cuando conjugas un verbo perfectivo según el patrón de presente, tiene significado futuro (ej. прочитаю = leeré / habré leído).',
    },
    {
      question: '¿Cómo sé qué prefijo usar para formar el perfectivo?',
      answer:
        'No hay una regla única — el prefijo correcto depende del verbo específico. El enfoque más seguro es aprender cada par aspectual juntos desde el principio (ej. читать / прочитать, писать / написать). Un buen diccionario ruso siempre lista el par aspectual junto a cada entrada verbal.',
    },
    {
      question: '¿Cuándo debo usar imperfectivo vs perfectivo en pasado?',
      answer:
        'Usa el pasado imperfectivo para: (1) acciones en progreso en un momento pasado, (2) acciones pasadas habituales, (3) duración ("durante dos horas"). Usa el pasado perfectivo para: (1) acciones completadas, (2) ocurrencias únicas, (3) una cadena de eventos secuenciales, (4) acciones con un resultado visible.',
    },
    {
      question: '¿El aspecto verbal ruso está relacionado con los casos rusos?',
      answer:
        'Son sistemas gramaticales separados, pero ambos son esenciales para el ruso fluido. Los casos rigen las terminaciones de los sustantivos y muestran relaciones gramaticales; el aspecto rige las formas verbales y muestra cómo se desarrollan las acciones en el tiempo. La mayoría de los estudiantes aborda los casos primero (A1–A2) y luego profundiza en el aspecto en A2–B1.',
    },
  ],
  conclusionIntro: 'El aspecto verbal ruso es realmente lógico una vez que la distinción central queda clara:',
  conclusionBullets: [
    '**Imperfectivo = proceso** (en curso, habitual, duración, sin énfasis en el resultado)',
    '**Perfectivo = resultado** (completado, puntual, eventos secuenciales)',
    'El **presente** solo existe para verbos imperfectivos',
    'En futuro, el imperfectivo usa **буду + infinitivo**; el perfectivo usa una forma conjugada',
    'Aprende los pares aspectuales juntos — no intentes adivinar prefijos',
    'Palabras como каждый день → imperfectivo; вдруг, наконец → perfectivo',
  ],
  conclusionOutro:
    'El aspecto verbal y los casos rusos son los dos sistemas gramaticales que desbloquean la fluidez real. Si todavía estás trabajando en los casos, nuestra herramienta gratuita en russiandeclensions.com/practice te permite practicar los seis casos de forma interactiva — sin registro necesario.',
  internalLinks: [
    { href: '/practice', label: 'Quiz gratuito de declinación rusa — practica los 6 casos' },
    {
      href: '/learn/articles/how-long-learn-russian',
      label: '¿Cuánto tiempo se tarda en aprender ruso? Cronología realista',
    },
    {
      href: '/learn/articles/russian-cases-explained-beginners-guide',
      label: 'Casos rusos explicados: guía visual para principiantes',
    },
    {
      href: '/learn/articles/learn-russian-on-your-own',
      label: '¿Puedes aprender ruso por tu cuenta? (Respuesta honesta + hoja de ruta)',
    },
    {
      href: '/learn/articles/russian-verbs-of-motion',
      label: 'Verbos de movimiento en ruso: guía completa',
    },
  ],
  ctaText: 'Practicar los casos rusos — Gratis →',
  ctaHref: '/practice',
  conclusion: '',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'El aspecto verbal en ruso: perfectivo vs imperfectivo — La guía completa',
    description:
      'Domina el aspecto verbal ruso: entiende la diferencia entre verbos perfectivos e imperfectivos, aprende las reglas de uso y descubre los pares aspectuales más comunes con ejemplos.',
    datePublished: '2026-05-27',
    dateModified: '2026-05-27',
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
      '@id':
        'https://russiandeclensions.com/learn/articles/russian-verbal-aspect-perfective-imperfective',
    },
    keywords:
      'aspecto verbal ruso, perfectivo imperfectivo ruso, aspecto en ruso, pares aspectuales ruso',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russian-verbal-aspect-perfective-imperfective.webp',
      width: 1200,
      height: 630,
    },
  },
};
