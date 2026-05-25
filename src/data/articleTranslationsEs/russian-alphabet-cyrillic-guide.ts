import type { LearnArticle } from '../learnArticles';

/** Traducción española del artículo `russian-alphabet-cyrillic-guide`. */
export const russianAlphabetCyrillicGuideEs: LearnArticle = {
  slug: 'russian-alphabet-cyrillic-guide',
  title: 'El alfabeto ruso: aprende el cirílico en 3 pasos simples',
  metaTitle:
    'El alfabeto ruso: aprende el cirílico en 3 pasos simples (Guía completa 2026) | Russian Cases with Anna',
  metaDescription:
    'Aprende el alfabeto cirílico ruso en 3 pasos claros: letras conocidas, falsos amigos y letras nuevas — con consejos de pronunciación, trucos de memoria y un plan de 7 días.',
  keywords: [
    'alfabeto ruso',
    'alfabeto cirílico',
    'aprender alfabeto ruso',
    'letras rusas',
    'cirílico para principiantes',
    'cómo leer ruso',
  ],
  h1: 'El alfabeto ruso: aprende el cirílico en 3 pasos simples',
  heroImage: {
    src: '/articles/russian-alphabet-cyrillic-guide.webp',
    alt: 'Letras del alfabeto cirílico ruso en un cuaderno de aprendizaje',
    width: 1200,
    height: 630,
  },
  introByline: {
    text: '**Escrito por Nathan** — hablante nativo de francés; estoy aprendiendo ruso y comparto lo que realmente funciona para la gramática, los casos y la práctica diaria.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, fundador de Russian Cases with Anna',
    imageWidth: 256,
    imageHeight: 256,
  },
  intro:
    'Aprender a leer ruso se parece a estar frente a una puerta cerrada — hasta que te das cuenta de que ya tienes la mayoría de las llaves.\n\nEl alfabeto cirílico tiene **33 letras**, comparadas con las 27 del español. Aproximadamente un tercio de ellas te resultarán inmediatamente familiares; otro tercio son impostores visuales que parecen letras latinas pero suenan completamente diferente; y el último tercio es genuinamente nuevo — aunque más simple de aprender de lo que podrías esperar. Todo el sistema puede encajar en **una a dos semanas** de práctica diaria corta.\n\nEsta guía clasifica las 33 letras en tres grupos, da trucos de memoria para cada letra difícil y explica las reglas de pronunciación — acento y reducción vocálica — que dan al ruso su sonoridad característica. Al final, podrás **pronunciar correctamente cualquier palabra rusa**, lo que es la base sobre la que todo lo demás se construye.',
  whatYouLearn: [
    'Las 33 letras cirílicas clasificadas en 3 grupos manejables',
    'Trucos de memoria para cada letra difícil o desconocida',
    'Por qué el acento ruso (ударение) es la clave para una pronunciación correcta',
    'Cómo la reducción vocálica cambia la forma en que el ruso suena realmente',
    'Un plan práctico de 7 días para pasar de cero a una lectura cirílica segura',
  ],
  sections: [
    {
      h2: 'Por qué el cirílico es más fácil de lo que parece',
      content:
        'La mayoría de los estudiantes temen el cirílico porque parece extraño a primera vista. En la práctica, es uno de los alfabetos más **fonéticamente consistentes** de uso común — mucho más regular que la ortografía española.\n\nTres cosas hacen el cirílico manejable:\n\n**1. Es fonético.** Cada letra tiene aproximadamente un sonido. Una vez que conoces los sonidos, puedes leer cualquier palabra rusa correctamente.\n\n**2. Un tercio de las letras ya son familiares.** Cinco se ven iguales que sus equivalentes latinos y suenan igual. Otras ocho se parecen a letras familiares pero tienen sonidos diferentes — lo que es útil, ya que ya reconoces sus formas.\n\n**3. No necesitas escritura cursiva para empezar.** El cirílico impreso es lo que encontrarás en libros, aplicaciones y contenido digital. Aprende primero a leer el impreso.',
      table: {
        caption: 'Las 33 letras rusas de un vistazo',
        headers: ['Letra', 'Nombre', 'Sonido aproximado', 'Grupo'],
        rows: [
          ['А а', 'a', '/a/ — como „a" en „casa"', 'Conocida'],
          ['Б б', 'be', '/b/ — como „b" en „bueno"', 'Nueva'],
          ['В в', 've', '/v/ — como „v" en „vino"', 'Falso amigo'],
          ['Г г', 'gue', '/g/ — como „g" en „gato"', 'Nueva'],
          ['Д д', 'de', '/d/ — como „d" en „día"', 'Nueva'],
          ['Е е', 'ye', '/je/ — como „ye" en „yeso"', 'Falso amigo'],
          ['Ё ё', 'yo', '/jo/ — como „yo" en „yoga"', 'Falso amigo'],
          ['Ж ж', 'she', '/ʒ/ — como „g" en „garage"', 'Nueva'],
          ['З з', 'se', '/z/ — como „s" sonora en „mismo"', 'Nueva'],
          ['И и', 'i', '/i/ — como „i" en „isla"', 'Nueva'],
          ['Й й', 'i corta', '/j/ — como „y" en „ya"', 'Nueva'],
          ['К к', 'ka', '/k/ — como „k" en „kilo"', 'Conocida'],
          ['Л л', 'el', '/l/ — como „l" en „luna"', 'Nueva'],
          ['М м', 'em', '/m/ — como „m" en „mar"', 'Conocida'],
          ['Н н', 'en', '/n/ — como „n" en „noche"', 'Falso amigo'],
          ['О о', 'o', '/o/ — como „o" en „oso" (tónica)', 'Conocida'],
          ['П п', 'pe', '/p/ — como „p" en „pan"', 'Nueva'],
          ['Р р', 'er', '/r/ — r vibrante', 'Falso amigo'],
          ['С с', 'es', '/s/ — como „s" en „sol"', 'Falso amigo'],
          ['Т т', 'te', '/t/ — como „t" en „taza"', 'Conocida'],
          ['У у', 'u', '/u/ — como „u" en „luna"', 'Falso amigo'],
          ['Ф ф', 'ef', '/f/ — como „f" en „foto"', 'Nueva'],
          ['Х х', 'kha', '/x/ — como „j" en „jota"', 'Falso amigo'],
          ['Ц ц', 'tse', '/ts/ — como „ts" en „pizza"', 'Nueva'],
          ['Ч ч', 'che', '/tʃ/ — como „ch" en „chile"', 'Nueva'],
          ['Ш ш', 'sha', '/ʃ/ — como „sh" en inglés "show"', 'Nueva'],
          ['Щ щ', 'shcha', '/ʃtʃ/ — sh + ch juntos', 'Nueva'],
          ['Ъ ъ', 'signo duro', '(sin sonido — signo duro)', 'Nueva'],
          ['Ы ы', 'yery', '/ɨ/ — i oscura', 'Nueva'],
          ['Ь ь', 'signo blando', '(sin sonido — signo blando)', 'Nueva'],
          ['Э э', 'e', '/e/ — como „e" en „era"', 'Nueva'],
          ['Ю ю', 'yu', '/ju/ — como „yu" en „yuca"', 'Nueva'],
          ['Я я', 'ya', '/ja/ — como „ya" en „ya"', 'Nueva'],
        ],
        boldColumnIndices: [0, 3],
      },
    },
    {
      h2: 'Paso 1: Las 5 letras conocidas',
      content:
        'Empieza aquí. Estas cinco letras se ven como sus equivalentes latinos y suenan igual — sin trucos, sin sorpresas. Aprenderlas lleva unos diez minutos.',
      table: {
        headers: ['Letra', 'Sonido', 'Como en español', 'Ejemplo'],
        rows: [
          ['А а', '/a/', '"a" en „casa"', 'атом (átomo)'],
          ['К к', '/k/', '"k" en „kilo"', 'кот (gato)'],
          ['М м', '/m/', '"m" en „mar"', 'мама (mamá)'],
          ['О о', '/o/', '"o" en „oso" (tónica)', 'он (él)'],
          ['Т т', '/t/', '"t" en „taza"', 'там (allá)'],
        ],
        boldColumnIndices: [0],
      },
      bullets: [
        '**О** suena como „o" solo cuando está **acentuada**. Sin acento se reduce hacia una „a" débil (más sobre esto en la sección de reducción vocálica).',
        'Las cinco son extremadamente frecuentes — aparecen en casi cada oración rusa.',
        'Practica buscando estas letras en cualquier texto ruso y pronunciándolas en voz alta.',
      ],
    },
    {
      h2: 'Paso 2: Los 8 falsos amigos',
      content:
        'Estas ocho letras parecen letras latinas conocidas — pero hacen sonidos completamente diferentes. Esta es la fuente más común de confusión para principiantes. Apréndelas con cuidado; una vez que se asienten, habrás aprendido 13 de 33 letras.',
      table: {
        headers: ['Letra', 'Parece', 'Sonido real', 'Truco de memoria'],
        rows: [
          ['В в', 'B', '/v/ — como „v"', '„vodka" empieza con В y suena como V'],
          ['Е е', 'E', '/je/ — como „ye"', '"YE" — como „ye" en „yeso"'],
          ['Ё ё', 'E con puntos', '/jo/ — como „yo"', '"YO" — los dos puntos señalan el sonido „yo"'],
          ['Н н', 'H', '/n/ — como „n"', '„eN" — el nombre de la letra da el sonido'],
          ['Р р', 'P', '/r/ — vibrante', 'R vibrante — Р para Россия (Rusia)'],
          ['С с', 'C', '/s/ — como „s"', '„С" como „S" — misma idea'],
          ['У у', 'Y', '/u/ — como „u"', '"U" — igual que la „u" española'],
          ['Х х', 'X', '/x/ — como „j"', 'Sonido de „jota" — como „j" en „jota"'],
        ],
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'La confusión **В / B** es el error más frecuente. Practícalo por separado hasta que В siempre diga „V".',
        '**Р** es una r vibrante — igual que la r española entre vocales o la rr. ¡Ventaja para hispanohablantes!',
        '**Х** es como la „j" española — sonido de „jota". ¡Otra ventaja del español!',
        'Cuando reconozcas estas 8 letras sin dudar, conoces 13 de 33 — casi el **40% del alfabeto**.',
      ],
    },
    {
      h2: 'Paso 3: Las 20 letras nuevas',
      content:
        'Las 20 letras restantes no tienen un equivalente visual latino obvio. Algunas corresponden a sonidos que existen en español (Б = B, Д = D, Л = L, П = P, Ф = F); otras introducen sonidos que el español no tiene (Ж, Ц, Щ, Ы).',
      subsections: [
        {
          h3: '3a — Letras nuevas con sonidos españoles conocidos',
          content:
            'Estas letras parecen desconocidas pero producen sonidos que ya usas cada día en español. Aprende primero el sonido, luego la forma.',
          table: {
            headers: ['Letra', 'Sonido', 'Como en español', 'Truco de memoria'],
            rows: [
              ['Б б', '/b/ — „bueno"', '"b"', 'Parece un 6 — „Б por B-seis"'],
              ['Г г', '/g/ — „gato"', '"g"', 'Parece una Γ griega — suena como „G"'],
              ['Д д', '/d/ — „día"', '"d"', 'Parece una tienda — „Д para Dom (casa)"'],
              ['З з', '/z/ — s sonora', '"s" sonora (como en „mismo")', 'Parece el número 3 — „З para Zone"'],
              ['И и', '/i/ — „isla"', '"i"', 'Como una N al revés — „И = I"'],
              ['Й й', '/j/ — „ya"', '"y" en „ya"', 'И con tilde — I corta, suena como „Y"'],
              ['Л л', '/l/ — „luna"', '"l"', 'Parece una V invertida — „Л para Luna"'],
              ['П п', '/p/ — „pan"', '"p"', 'Parece un pórtico П — „П para Pan"'],
              ['Ф ф', '/f/ — „foto"', '"f"', 'Parece una phi Φ — sonido F'],
            ],
          },
        },
        {
          h3: '3b — Letras nuevas con sonidos nuevos',
          content:
            'Estas letras introducen sonidos que requieren un poco de práctica — pero cada uno es fonéticamente consistente, lo que significa que el sonido nunca cambia una vez aprendido.',
          table: {
            headers: ['Letra', 'Sonido', 'Lo más cercano en español', 'Truco de memoria'],
            rows: [
              ['Ж ж', '/ʒ/ — como „g" en garage', '"g" de „garage"', 'Parece un insecto — „Ж zumba"'],
              ['Ц ц', '/ts/ — como „ts"', '"ts" de „pizza"', 'Dos letras en una: T + S = Ц'],
              ['Ч ч', '/tʃ/ — como „ch"', '"ch" de „chile"', 'Parece un 4 al revés — „Ч para Chetyre (cuatro)"'],
              ['Ш ш', '/ʃ/ — como „sh"', '"sh" de „show"', 'Parece un peine — „Ш hace el SH"'],
              ['Щ щ', '/ʃtʃ/ — sh + ch', 'SH + CH juntos', 'Ш con cola = Ш más suave'],
              ['Э э', '/e/ — como „e" pura', '"e" de „era"', 'С al revés con lengua — „Э = E pura"'],
              ['Ю ю', '/ju/ — como „yu"', '"yu" de „yuca"', 'О con palo — „Ю = YU"'],
              ['Я я', '/ja/ — como „ya"', '"ya" de „ya"', 'R al revés — „Я significa Yo"'],
            ],
          },
        },
        {
          h3: '3c — Los signos especiales: Ъ, Ы, Ь',
          content:
            'Tres letras necesitan un tratamiento especial: **Ь** (signo blando), **Ъ** (signo duro) y **Ы** (una vocal única).\n\n**Ь (signo blando)** no tiene sonido propio. Palataliza la consonante anterior — imagina que presionas la lengua contra el paladar al terminar la consonante. Ejemplo: брат (hermano) vs брать (tomar).\n\n**Ъ (signo duro)** es raro. Crea una breve pausa entre un prefijo y la siguiente sílaba (ej. съезд — congreso). No te preocupes por él hasta el nivel intermedio.\n\n**Ы** es la vocal más difícil para hispanohablantes. Es una „i" oscura y centralizada — para aproximarla, di „i" y retira ligeramente la lengua hacia atrás. Ejemplos: ты (tú), мы (nosotros). Se vuelve natural con la práctica.',
        },
      ],
    },
    {
      h2: 'Reducción vocálica: por qué el ruso suena diferente de cómo se escribe',
      content:
        'Esta es la regla que confunde a la mayoría de principiantes: **Las vocales rusas cambian su sonido según si están acentuadas o no.**\n\nEl ejemplo más notable es la letra О:\n- **О acentuada** suena como la „o" en „oso": большой (grande) — la О en большой está acentuada: bol-SHÓI.\n- **О no acentuada** se reduce a un sonido débil similar a „a": молоко (leche) — suena como „muh-luh-KO", no „MO-lo-KO".\n\nА también se reduce cuando está sin acento, aunque menos dramáticamente. Esto se llama **reducción vocálica** (редукция), y es por eso que el ruso hablado puede sonar muy diferente a una lectura fonética.',
      table: {
        headers: ['Vocal', 'Acentuada', 'Sin acento', 'Ejemplo'],
        rows: [
          ['О', '/o/ — „oso"', '/ə/ — se reduce a „a"', 'молоко → muh-luh-KO'],
          ['Е', '/je/ — „yeso"', '/jɪ/ — se reduce a „yi"', 'телефон → tyi-lyi-FON'],
          ['А', '/a/ — „casa"', '/ə/ — „a" más ligera', 'трамвай → trum-VAY'],
          ['Я', '/ja/ — „ya"', '/jɪ/ — se reduce a „yi"', 'язык → yi-ZYIK'],
        ],
        boldColumnIndices: [0],
      },
      bullets: [
        'Los diccionarios marcan el acento con una tilde sobre la vocal acentuada (ej. молоко́). Úsalos — el acento no es predecible.',
        'No necesitas dominar la reducción vocálica antes de empezar a leer; solo saber que existe.',
        'La reducción se asimila naturalmente escuchando mucho ruso hablado junto con la lectura.',
      ],
    },
    {
      h2: 'El acento ruso (ударение): el desafío oculto',
      content:
        'El acento ruso es libre (puede caer en cualquier sílaba) y móvil (puede desplazarse entre formas gramaticales de la misma palabra). No hay regla que diga dónde cae el acento — hay que aprenderlo con cada palabra.\n\n¿Por qué importa?\n\n1. **Los sonidos vocálicos cambian** (como se mostró arriba).\n2. **El significado de la palabra puede cambiar**: за́мок significa „castillo"; замо́к significa „candado". Mismas letras, acento diferente, palabra diferente.\n3. **Las formas gramaticales cambian el significado**: я пишу́ (yo escribo) vs они́ пи́шут (ellos escriben) — tanto las terminaciones como el acento se desplazan.\n\nConsejo práctico: **siempre marca el acento cuando escribas una nueva palabra en tu cuaderno.**',
      table: {
        headers: ['Palabra', 'Acento', 'Significado', 'Nota'],
        rows: [
          ['за́мок', '1ª sílaba', 'castillo', 'ZA-mok'],
          ['замо́к', '2ª sílaba', 'candado', 'za-MOK'],
          ['до́рога', '1ª sílaba', 'camino', 'DO-ro-ga'],
          ['дорога́', '3ª sílaba', 'querido / caro', 'do-ro-GA'],
        ],
        boldColumnIndices: [0],
      },
    },
    {
      h2: 'Escribir en cirílico: configuración rápida',
      content:
        'Escribir es una de las formas más rápidas de reconocer letras. Configurar un teclado cirílico lleva dos minutos.',
      subsections: [
        {
          h3: 'En iOS (iPhone / iPad)',
          content:
            'Ve a **Ajustes → General → Teclado → Teclados → Añadir teclado**. Elige **Ruso**. Una vez añadido, toca el icono del globo para cambiar entre español y ruso.',
        },
        {
          h3: 'En Android',
          content:
            'Ve a **Ajustes → Gestión general → Idioma e introducción → Teclado en pantalla**. Añade ruso. Cambia tocando el indicador de idioma en la barra espaciadora. Gboard y SwiftKey admiten ruso.',
        },
        {
          h3: 'En ordenador (Windows / Mac)',
          content:
            'Windows: Configuración → Hora e idioma → Idioma → Añadir ruso → Ruso fonético. Mac: Configuración del sistema → Teclado → Fuentes de entrada → añadir Ruso (el diseño fonético es más fácil para principiantes).',
        },
      ],
      bullets: [
        'Usa un **diseño fonético** si está disponible — mapea letras cirílicas a teclas latinas de sonido similar.',
        'Escribir una palabra cinco veces vale más que leerla veinte veces para el reconocimiento de letras.',
        'Usa el teclado cirílico en mensajes reales desde el primer día.',
      ],
    },
    {
      h2: 'Tu plan de 7 días para dominar el alfabeto ruso',
      content:
        'Diez minutos al día durante siete días son suficientes para alcanzar una lectura cirílica funcional. Aquí está el programa día a día:',
      table: {
        headers: ['Día', 'Enfoque', 'Meta', 'Método de práctica'],
        rows: [
          ['Día 1', '5 letras conocidas (А К М О Т)', 'Reconocimiento instantáneo', 'Escribe cada letra 10×; lee 5 palabras cortas'],
          ['Día 2', '8 falsos amigos (В Е Ё Н Р С У Х)', 'Conocer la trampa de sonido de cada letra', 'Tapa la columna de sonido y di el sonido; comprueba'],
          ['Día 3', 'Letras nuevas con sonidos conocidos (Б Г Д З И Й Л П Ф)', 'Leer una palabra básica con cada letra', '3 palabras por letra; añadir a Anki'],
          ['Día 4', 'Letras nuevas con sonidos nuevos (Ж Ц Ч Ш Щ Э Ю Я)', 'Producir cada sonido correctamente', 'Shadowing: escucha + repite 10×'],
          ['Día 5', 'Signos especiales (Ъ Ы Ь) + reducción vocálica', 'Entender la función; producir Ы', 'Pares mínimos: брат / брать; мы / ми'],
          ['Día 6', 'Repaso completo del alfabeto', 'Leer 33 letras sin dudar', 'Test flash aleatorio: mezcla e identifica'],
          ['Día 7', 'Leer un texto ruso corto en voz alta', 'Deletrear cada palabra de un párrafo', 'Duolingo / Babbel / cualquier texto'],
        ],
        boldColumnIndices: [0],
      },
      bullets: [
        'Lleva un cuaderno con las 33 letras, sus sonidos y una palabra de ejemplo para cada una.',
        'Después del Día 7: 5 minutos diarios leyendo texto ruso en voz alta — aunque aún no entiendas las palabras.',
        'Añade un teclado cirílico a tu teléfono el Día 1 y úsalo desde el principio.',
      ],
    },
  ],
  leadMagnetCta: {
    title: 'Del alfabeto a la gramática: practica los 6 casos rusos',
    description:
      'Una vez que puedes leer cirílico, el siguiente paso es la gramática rusa — y los casos son el desafío principal. Russian Cases with Anna te permite practicar los seis casos con retroalimentación inmediata — en iOS y Android.',
    ctaText: 'Descargar Russian Cases with Anna — gratis para empezar →',
    ctaHref: '/',
  },
  faq: [
    {
      question: '¿Cuánto tiempo lleva aprender el alfabeto ruso?',
      answer:
        'La mayoría de los estudiantes puede leer textos rusos lenta pero correctamente después de una a dos semanas de práctica diaria de 10 a 15 minutos. La velocidad de lectura cómoda y natural generalmente se desarrolla durante el mes siguiente.',
    },
    {
      question: '¿Es difícil el cirílico para hispanohablantes?',
      answer:
        'El cirílico se considera generalmente una de las partes más fáciles del aprendizaje del ruso. A diferencia de la gramática rusa (casos, aspectos, conjugación verbal), el alfabeto es finito y aprendible en días. Además, hispanohablantes tienen ventaja con la r vibrante (Р) y la j (Х).',
    },
    {
      question: '¿Necesito aprender la escritura cursiva rusa?',
      answer:
        'No al principio. El cirílico impreso es lo que encontrarás en libros, aplicaciones, sitios web y texto escrito. La cursiva rusa es genuinamente diferente y solo es necesaria si planeas leer notas manuscritas o documentos antiguos.',
    },
    {
      question: '¿Necesito memorizar las 33 letras antes de empezar con la gramática rusa?',
      answer:
        'No — y esperar hasta conocer cada letra perfectamente es una trampa común de procrastinación. En el Día 7 del plan anterior, deberías empezar a tocar la gramática básica aunque Ы y Щ aún no sean automáticas.',
    },
    {
      question: '¿Cuál es la diferencia entre Ш y Щ?',
      answer:
        'Ш es un sonido „sh" duro, como en inglés "show". Щ es un sonido „shch" más suave y largo. En el habla cotidiana la distinción es importante: шить (coser) vs считать (contar).',
    },
    {
      question: '¿Qué es el signo blando (Ь) y debo preocuparme por él?',
      answer:
        'El signo blando suaviza la consonante anterior — lingüísticamente, la palataliza. En la práctica, cambia la pronunciación y también afecta la gramática. Lo encontrarás constantemente. Reconócelo desde el Día 1 y aprende su efecto gradualmente a través de ejemplos reales.',
    },
  ],
  conclusionIntro:
    'Aprender el cirílico es una inversión única que abre todo lo demás en ruso. Aquí está lo esencial:',
  conclusionBullets: [
    '**5 letras conocidas** (А К М О Т) — aprender en una sesión',
    '**8 falsos amigos** (В Е Ё Н Р С У Х) — el grupo más importante para practicar con cuidado',
    '**20 letras nuevas** — clasificar por dificultad; la mayoría corresponden a sonidos que ya produces',
    'El ruso es **fonéticamente consistente** — aprende los sonidos una vez y lee todo',
    '**El acento y la reducción vocálica** explican por qué el ruso hablado suena diferente',
    'Un **plan de 7 días** de 10 min./día te lleva de cero a lectura funcional',
  ],
  conclusionOutro:
    'Una vez que lees cirílico, comienza el verdadero desafío: la gramática rusa y sobre todo los seis casos gramaticales. Empieza a practicarlos pronto en russiandeclensions.com/practice — gratis, sin registro.',
  internalLinks: [
    { href: '/practice', label: 'Práctica gratuita de declinación rusa — los 6 casos' },
    {
      href: '/learn/articles/russian-cases-explained-beginners-guide',
      label: 'Casos rusos explicados de forma simple: guía visual para principiantes',
    },
    {
      href: '/learn/articles/learn-russian-on-your-own',
      label: '¿Puedes aprender ruso por tu cuenta? Hoja de ruta completa',
    },
    {
      href: '/learn/articles/best-free-resources-learn-russian',
      label: '15 mejores recursos gratuitos para aprender ruso',
    },
  ],
  ctaText: 'Practicar casos rusos — gratis →',
  ctaHref: '/practice',
  conclusion: '',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'El alfabeto ruso: aprende el cirílico en 3 pasos simples',
    description:
      'Aprende el alfabeto cirílico ruso en 3 pasos claros: letras conocidas, falsos amigos y letras nuevas — con consejos de pronunciación, trucos de memoria y un plan de 7 días.',
    datePublished: '2026-05-25',
    dateModified: '2026-05-25',
    author: { '@type': 'Person', name: 'Nathan', url: 'https://russiandeclensions.com/' },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://russiandeclensions.com/learn/articles/russian-alphabet-cyrillic-guide',
    },
  },
};
