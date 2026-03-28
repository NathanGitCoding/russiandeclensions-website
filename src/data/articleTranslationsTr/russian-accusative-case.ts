import type { LearnArticle } from '../learnArticles';

/** Türkçe çeviri: `russian-accusative-case` (EN kaynak: `learnArticles.ts`). Kiril metinler Fransızca dosyayla aynı. */
export const russianAccusativeCaseTr: LearnArticle = {
  slug: 'russian-accusative-case',
  title:
    'Rusça belirtme hali: doğrudan nesneler, canlı ve cansız, hareket fiilleri',
  metaTitle:
    'Rusça belirtme hali: kurallar, ekler ve 30 örnek | Russian Cases with Anna',
  metaDescription:
    'Rusça belirtme haline ilişkin eksiksiz rehber: ek tablosu, canlı/cansız kuralı, hareket fiilleri, в/на yön ve yer, 9 edat, 15 geçişli fiil, 30 gerçek örnek.',
  keywords: [
    'rusça belirtme hali',
    'rusça belirtme hali ekleri',
    'rusça canlı cansız belirtme hali',
    'rusça doğrudan nesne',
    'rusça hareket fiilleri belirtme hali',
    'в на rusça belirtme hali',
  ],
  h1: 'Rusça belirtme hali: doğrudan nesneler, canlı ve cansız, hareket fiilleri',
  heroImage: {
    src: '/articles/free-russian-lesson-accusative-case.webp',
    alt: 'Belirtme hali ücretsiz Rusça dersi: doğrudan nesneler ve hareket fiilleri',
    width: 1200,
    height: 630,
  },
  intro:
    'Rusça belirtme hali, genitiften sonra **ikinci en önemli haldir** — birçok açıdan da en sezgisel olanıdır. Cümledeki **doğrudan nesneyi** işaret eder: fiilin eyleminden doğrudan etkilenen kişi veya şey.\n\nBelirtme halinin öğrencileri şaşırtan bir özelliği vardır: **canlı / cansız ayrımı**. Eril isimlerde canlı ve cansız adlar belirtmede farklı çekilir — doğru Rusça için bu kuralı anlamak şarttır.',
  whatYouLearn: [
    'Rusça belirtme halinin ne olduğu ve **4 ana kullanımı**',
    '**Tüm cinsler** için belirtme ekleri (tekil ve çoğul)',
    '**Canlı / cansız ayrımı** — kafa karıştıran başlıca nokta',
    'Rus **hareket fiilleri** ve belirtme hali',
    '**В ve НА** + belirtme (yön) ve bulunma hali (yer)',
    'Belirtme isteyen **9 edat**',
    'Belirtmeyle **zaman ifadeleri**',
    'Belirtme nesneli **15 temel fiil**',
    'Transliterasyon ve çeviriyle **30 gerçek** Rusça örneği',
    'Belirtme ve genitif — nasıl ayırt edilir',
  ],
  leadMagnetCta: {
    title: 'Akıllı alıştırmalarla Rusça belirtme halini çalışın',
    description:
      'Mobil uygulamamız 6 Rus halinin tamamını kapsar — canlı/cansız, hareket fiilleri ve в/на (yön ve yer) üzerinde durur. Android ve iOS.',
    ctaText: 'Uygulamayı indirin ve bugün çalışmaya başlayın',
    ctaHref: '/',
  },
  internalLinks: [
    {
      href: '/learn/lessons/russian-cases-complete-guide',
      label:
        'Rus hallerine tam rehber: örneklerle açıklanan 6 hal',
    },
    {
      href: '/learn/articles/russian-case-endings-cheatsheet',
      label: 'Rus hal ekleri: nihai özet sayfası',
    },
    {
      href: '/learn/articles/russian-genitive-case',
      label:
        'Rusça genitif: kurallar, ekler ve 32 gerçek örnek',
    },
    {
      href: '/learn/lessons/dative-case-declension',
      label:
        'Rusça datif: «-e / için» nasıl söylenir',
    },
  ],
  sections: [
    {
      h2: 'Kısa yanıt',
      content:
        'Rusça belirtme hali **Кого? (kimi?)** ve **Что? (neyi?)** sorularına yanıt verir. Doğrudan nesneyi işaret eder, в ve на ile **yönü** anlatır ve zaman ifadelerinde görünür.\n\nEn zor kısım eril isimlerde **canlı / cansız ayrımı**dır.',
    },
    {
      h2: 'Rusça belirtme hali nedir?',
      content:
        'Belirtme hali (**Винительный падеж**) altı Rus halinin dördüncüsüdür. Ana işlevi, geçişli bir fiilin **doğrudan nesnesini** — eylemin doğrudan yöneldiği ismi — işaret etmektir.\n\nİngilizcede rolüne göre kelime biçimi değişmez. Rusçada doğrudan nesne olduğunu göstermek için ismin eki değişir.',
      subsections: [
        {
          h3: 'Belirtme hali şunlar için kullanılır:',
          content: '',
          bullets: [
            'Geçişli fiillerin **doğrudan nesneleri** (Я вижу кота. — Kediyi görüyorum.)',
            'в ve на ile **yön** (Я иду в школу. — Okula gidiyorum.)',
            '**Zaman ifadeleri** (всю неделю — bütün hafta; через час — bir saat sonra)',
            'в ile **haftanın günleri** (в понедельник — pazartesi)',
            'Belirli edatlardan sonra: **за**, **через**, **про**, **под**, **сквозь**, **спустя**, **о**',
          ],
        },
      ],
    },
    {
      h2: 'Rusça belirtme hali ekleri — tam tablo',
      content:
        'Belirtme ekleri ismin **cinsine**, **kök türüne** (sert veya yumuşak) ve — eril için — sözcüğün **canlı** mı **cansız** mı olduğuna bağlıdır.\n\nİşte tam referans tablosu:',
      table: {
        caption:
          'İsim türüne göre belirtme ekleri — tekil ve çoğul',
        boldColumnIndices: [3],
        headers: [
          'İsim türü',
          'Kural',
          'Yalın',
          'Belirtme',
          'Örnek cümle',
        ],
        rows: [
          [
            'Er. cansız (sert)',
            '= yalın (değişmez)',
            'стол',
            'стол',
            'Я вижу стол. — Masayı görüyorum.',
          ],
          [
            'Er. cansız (yumuşak)',
            '= yalın (değişmez)',
            'музей',
            'музей',
            'Я вижу музей. — Müzeyi görüyorum.',
          ],
          [
            'Er. canlı (sert)',
            '= gen. (-а)',
            'студент',
            'студента',
            'Я вижу студента. — Öğrenciyi görüyorum.',
          ],
          [
            'Er. canlı (yumuşak)',
            '= gen. (-я)',
            'гений',
            'гения',
            'Я вижу гения. — Dahiyi görüyorum.',
          ],
          [
            'Diş. sert (-а)',
            '-у',
            'женщина',
            'женщину',
            'Я вижу женщину. — Kadını görüyorum.',
          ],
          [
            'Diş. yumuşak (-я)',
            '-ю',
            'земля',
            'землю',
            'Я вижу землю. — Toprağı görüyorum.',
          ],
          [
            'Diş. (-ь) cansız',
            '= yalın (-ь)',
            'ночь',
            'ночь',
            'Я люблю ночь. — Geceyi seviyorum.',
          ],
          [
            'Diş. (-ь) canlı',
            '= yalın (-ь)',
            'мышь',
            'мышь',
            'Я вижу мышь. — Fareyi görüyorum.',
          ],
          [
            'Nötr (sert -о)',
            '= yalın (-о)',
            'окно',
            'окно',
            'Я вижу окно. — Pencereyi görüyorum.',
          ],
          [
            'Nötr (yumuşak -е)',
            '= yalın (-е)',
            'море',
            'море',
            'Я вижу море. — Denizi görüyorum.',
          ],
          [
            'Çoğul cansız',
            '= yalın çoğ.',
            'столы',
            'столы',
            'Я вижу столы. — Masaları görüyorum.',
          ],
          [
            'Çoğul canlı',
            '= gen. çoğ.',
            'студенты',
            'студентов',
            'Я вижу студентов. — Öğrencileri görüyorum.',
          ],
        ],
      },
      bullets: [
        '**Dişil -а** — -а → -у : книга → книгу',
        '**Dişil -я** — -я → -ю : неделя → неделю',
        '**Eril cansız** — değişmez (yalın): стол → стол',
        '**Eril canlı** — genitif biçimi: студент → студента',
        '**Nötr** ve **dişil -ь** — değişmez (= yalın)',
      ],
    },
    {
      h2: 'Canlı ve cansız: en önemli belirtme kuralı',
      content:
        '**Canlı eril isimler** (insanlar ve hayvanlar) belirtmede **genitif biçimini** alır. **Cansız eril isimler** yalın haliyle kalır (yalın biçimi).\n\nBu, Rusça belirtme halinin ayırt edici özelliğidir — ve en sık yapılan hataların kaynağıdır.',
      subsections: [
        {
          h3: '«Canlı» sayılan nedir?',
          content:
            'Rus gramerinde **canlı**, insanlar ve hayvanlar — canlı varlıklar anlamına gelir.\n\nYine de **şaşırtıcı istisnalar** vardır:',
        },
      ],
      table: {
        caption:
          '12 somut örnek; şaşırtıcı canlı/cansız vakaları dahil',
        boldColumnIndices: [2],
        headers: ['İsim', 'Canlı / cansız', 'Belirtme biçimi', 'Not'],
        rows: [
          [
            '🤝 друг (arkadaş)',
            'canlı',
            'Я вижу друга.',
            'Belirtme = genitif biçimi (друга)',
          ],
          [
            '👨‍⚕️ врач (doktor)',
            'canlı',
            'Я слушаю врача.',
            'Belirtme = genitif biçimi (врача)',
          ],
          [
            '🐱 кот (kedi)',
            'canlı',
            'Я глажу кота.',
            'Hayvanlar canlıdır (кота)',
          ],
          [
            '👶 ребёнок (çocuk)',
            'canlı',
            'Мама видит ребёнка.',
            'Belirtme = genitif (ребёнка)',
          ],
          [
            '🏛️ президент (başkan)',
            'canlı',
            'Я уважаю президента.',
            'İnsanlar daima canlıdır',
          ],
          [
            '🪑 стол (masa)',
            'cansız',
            'Я вижу стол.',
            'Belirtme = yalın (değişmez)',
          ],
          [
            '🎬 фильм (film)',
            'cansız',
            'Я смотрю фильм.',
            'Belirtme = yalın (değişmez)',
          ],
          [
            '🏙️ город (şehir)',
            'cansız',
            'Я люблю этот город.',
            'Yerler cansızdır',
          ],
          [
            '💀 труп (ceset)',
            'cansız',
            'Детектив нашёл труп.',
            'Cesetler gramer olarak cansızdır!',
          ],
          [
            '🪆 кукла (bebek oyuncağı)',
            'cansız',
            'Девочка любит куклу.',
            'Oyuncaklar cansızdır (куклу — dişil)',
          ],
          [
            '🃏 туз (iskambil ası)',
            'canlı*',
            'Он поставил туза.',
            'İskambil kartları geleneksel olarak canlı sayılır!',
          ],
          [
            '♕ ферзь (satranç veziri)',
            'canlı*',
            'Он взял ферзя.',
            'Satranç taşları geleneksel olarak canlı sayılır!',
          ],
        ],
      },
      bullets: [
        '**Canlı (beklenmedik):** iskambil (туз, король, дама), satranç taşları (ферзь, конь)',
        '**Cansız (beklenmedik):** труп (ceset), кукла (bebek), снеговик (kardan adam)',
        '**Çoğul cansız** — yalın çoğul: Я вижу столы',
        '**Çoğul canlı** — genitif çoğul: Я вижу студентов',
      ],
    },
    {
      h2: 'Rusça hareket fiilleri ve belirtme hali',
      content:
        'Hareket fiilleri yönü belirtmek için **в veya на + belirtme** kullanır. Rusçanın zengin bir hareket fiili sistemi vardır.\n\nHepsi yön için в/на + belirtme kullanır:',
      table: {
        caption:
          '10 temel hareket fiili + tek yönlü ve çok yönlü',
        boldColumnIndices: [2],
        headers: [
          'Fiil',
          'Anlam',
          'В/НА + belirtme ile örnek',
          'Çeviri',
        ],
        rows: [
          [
            'идти / ходить',
            '🚶 yürüyerek gitmek',
            'Я иду в школу.',
            'Okula gidiyorum (şu anda)',
          ],
          [
            'ехать / ездить',
            '🚗 araçla gitmek',
            'Мы едем на работу.',
            'İşe gidiyoruz',
          ],
          [
            'бежать / бегать',
            '🏃 koşmak',
            'Он бежит на стадион.',
            'Stadyuma doğru koşuyor',
          ],
          [
            'лететь / летать',
            '✈️ uçmak',
            'Самолёт летит в Москву.',
            'Uçak Moskova\'ya uçuyor',
          ],
          [
            'плыть / плавать',
            '🏊 yüzmek / su üzerinde gitmek',
            'Корабль плывёт в порт.',
            'Gemi limana doğru gidiyor',
          ],
          [
            'везти / возить',
            '🚐 taşımak (araçla)',
            'Он везёт детей в школу.',
            'Çocukları okula götürüyor',
          ],
          [
            'нести / носить',
            '📦 taşımak (elde)',
            'Она несёт цветы на стол.',
            'Çiçekleri masaya götürüyor',
          ],
          [
            'ползти / ползать',
            '🐛 sürünmek',
            'Ребёнок ползёт на диван.',
            'Çocuk kanepeye doğru sürünüyor',
          ],
          [
            'прийти (tam.)',
            '🎯 varmak / gelmek',
            'Приходи на вечеринку!',
            'Partiye gel!',
          ],
          [
            'вернуться (tam.)',
            '↩️ geri dönmek',
            'Он вернулся в город.',
            'Şehre geri döndü',
          ],
        ],
      },
      bullets: [
        '**Tek yönlü** (tek yolculuk, şimdi): идти, ехать, лететь — Я иду в школу.',
        '**Çok yönlü** (alışıldık, gidip gelme): ходить, ездить, летать — Я хожу в школу каждый день.',
        'İkisi de yön için **в + belirtme** kullanır — hal kuralı aynıdır.',
      ],
    },
    {
      h2: 'В ve НА + belirtme: yön ve yer',
      content:
        '**в** ve **на** edatları, cümle **yönü** (bir yere doğru hareket) mü yoksa **yeri** (bir yerde olma) mü anlattığına göre **farklı hallerle** kullanılır.\n\nBu eşleşmeleri iyi öğrenin:',
      image: {
        src: '/articles/russian-accusative-case-direction-vs-location.webp',
        alt: 'Rusça belirtme hali şeması: в ve на ile yön ve yer',
        width: 1200,
        height: 630,
      },
      table: {
        caption:
          '10 yan yana çift: belirtme (yön) ve bulunma hali (yer)',
        boldColumnIndices: [0, 1],
        headers: [
          'Yapı',
          'Rusça örnek',
          'Anlam',
          'Çeviri',
        ],
        rows: [
          [
            'в + belirtme',
            'Я иду в магазин.',
            'Yön: içine / doğru',
            'Markete gidiyorum.',
          ],
          [
            'в + bulunma',
            'Я нахожусь в магазине.',
            'Yer: içinde / -de',
            'Marketteyim.',
          ],
          [
            'на + belirtme',
            'Она едет на работу.',
            'Yön: üzerine / doğru',
            'İşe gidiyor.',
          ],
          [
            'на + bulunma',
            'Она работает на заводе.',
            'Yer: üzerinde / -de',
            'Fabrikada çalışıyor.',
          ],
          [
            'в + belirtme',
            'Дети пошли в школу.',
            'Yön: okula doğru',
            'Çocuklar okula gitti.',
          ],
          [
            'в + bulunma',
            'Дети учатся в школе.',
            'Yer: okulda',
            'Çocuklar okulda okuyor.',
          ],
          [
            'на + belirtme',
            'Мы летим на Кубу.',
            'Yön: Küba\'ya doğru',
            'Küba\'ya uçuyoruz.',
          ],
          [
            'на + bulunma',
            'Мы отдыхаем на Кубе.',
            'Yer: Küba\'da',
            'Küba\'da tatildeyiz.',
          ],
          [
            'на + belirtme',
            'Поставь книгу на стол.',
            'Yön: masanın üstüne',
            'Kitabı masanın üstüne koy.',
          ],
          [
            'на + bulunma',
            'Книга лежит на столе.',
            'Yer: masanın üstünde',
            'Kitap masanın üstünde duruyor.',
          ],
        ],
      },
      subsections: [
        {
          h3: 'В ve НА — yer için hangisi?',
          content:
            '**В (içinde)** için: kapalı mekânlar, ülkeler, şehirler, binalar — в доме, в России, в школе. **НА (üzerinde / -da)** için: açık alanlar, etkinlikler, adalar, bazı kurumlar — на улице, на концерте, на Кубе, на работе, на почте, на рынке.\n\nBazı adlar geleneksel olarak на ister — ezberleyin.',
        },
      ],
    },
    {
      h2: 'Belirtme isteyen tüm edatlar',
      content:
        'в ve на dışında başka edatlar da belirtme ister.\n\nİşte isimle örnek ve tam cümleyle **tam liste**:',
      table: {
        caption: '9 edat + belirtme: anlam ve tam örnek',
        boldColumnIndices: [0],
        headers: [
          'Edat',
          'Anlam',
          'İsimle',
          'Tam cümle + çeviri',
        ],
        rows: [
          [
            'в',
            'içine / doğru (yön)',
            'в Москву, в школу',
            'Я лечу в Москву. — Moskova\'ya uçuyorum.',
          ],
          [
            'на',
            'üzerine / doğru (yön)',
            'на работу, на стол',
            'Она идёт на работу. — İşe gidiyor.',
          ],
          [
            'за',
            'arkasına / -ı almaya (hareket)',
            'за угол, за хлебом',
            'Он зашёл за угол. — Köşeyi döndü.',
          ],
          [
            'под',
            'altına (hareket)',
            'под стол',
            'Кот залез под стол. — Kedi masanın altına sığıştı.',
          ],
          [
            'через',
            'karşıdan karşıya / içinden / (zaman) sonra',
            'через реку, через час',
            'Мы переехали через реку. — Nehri geçtik.',
          ],
          [
            'про',
            'hakkında (konuşma dili)',
            'про тебя',
            'Он рассказал про тебя. — Senden bahsetti.',
          ],
          [
            'сквозь',
            'içinden (delip geçerek)',
            'сквозь стекло',
            'Свет проходил сквозь стекло. — Işık camdan süzülüyordu.',
          ],
          [
            'спустя',
            'sonra / geç (zaman)',
            'спустя год',
            'Спустя год он вернулся. — Bir yıl sonra geri döndü.',
          ],
          [
            'о/об',
            'çarpmak (fiziksel temas)',
            'споткнуться о камень',
            'Он споткнулся о камень. — Taşa takıldı.',
          ],
        ],
      },
      bullets: [
        '**İki rejimli edatlar:** В, НА, ЗА, ПОД — belirtme = hareket / yön; araçlık veya bulunma = duran konum.',
        'за стол (belirtme → masaya oturmak) ve за столом (araçlık → masada oturmak)',
      ],
    },
    {
      h2: 'Belirtmeyle zaman ifadeleri',
      content:
        'Belirtme hali Rusçada birkaç önemli **zaman ifadesinde** görünür.\n\nBunlar ezberlenmesi gereken kalıplardır:',
      table: {
        caption: 'через, за, весь/всю, в + gün, спустя',
        boldColumnIndices: [0],
        headers: [
          'İfade türü',
          'Örnekler',
          'Tam cümle + çeviri',
        ],
        rows: [
          [
            'Süre (весь / целый)',
            'всю неделю, целый день',
            'Я работал всю неделю. — Bütün hafta çalıştım.',
          ],
          [
            'Haftanın günleri (в + belirtme)',
            'в понедельник, в пятницу',
            'Я иду туда в среду. — Çarşamba günü oraya gidiyorum.',
          ],
          [
            'через (içinde / sonra)',
            'через час, через неделю',
            'Приходи через час. — Bir saat sonra gel.',
          ],
          [
            'за (içinde / sürede bitirmek)',
            'за час, за неделю',
            'Я сделал это за час. — Bunu bir saatte yaptım.',
          ],
          [
            'спустя (sonra)',
            'спустя год',
            'Спустя год он вернулся. — Bir yıl sonra geri döndü.',
          ],
        ],
      },
      bullets: [
        '**Haftanın günleri:** В понедельник, в среду, в пятницу — hepsi **в** ile belirtme alır.',
      ],
    },
    {
      h2: 'Doğrudan belirtme nesneli 15 temel fiil',
      content:
        'Rusçada her geçişli fiil belirtme nesnesi alabilir.\n\nİşte **en yaygın 15**; **ждать** için önemli istisna (belirtme veya genitif):',
      table: {
        caption: '15 geçişli fiil ve örnekler',
        boldColumnIndices: [0],
        headers: ['Fiil', 'Örnek', 'Çeviri', 'Not'],
        rows: [
          [
            'видеть (görmek)',
            'Я вижу тебя.',
            'Seni görüyorum.',
            'Doğrudan görsel algı',
          ],
          [
            'любить (sevmek)',
            'Я люблю музыку.',
            'Müziği seviyorum.',
            'Sevgi nesnesi',
          ],
          [
            'знать (bilmek / tanımak)',
            'Я знаю этот город.',
            'Bu şehri tanıyorum.',
            'Bilinen şey veya kişi',
          ],
          [
            'читать (okumak)',
            'Она читает книгу.',
            'Kitap okuyor.',
            'Okunan nesne',
          ],
          [
            'слушать (dinlemek)',
            'Мы слушаем музыку.',
            'Müzik dinliyoruz.',
            'Dinlenen nesne',
          ],
          [
            'смотреть (izlemek)',
            'Он смотрит фильм.',
            'Film izliyor.',
            'Bakılan nesne',
          ],
          [
            'купить (satın almak)',
            'Я купил машину.',
            'Araba aldım.',
            'Alınan nesne',
          ],
          [
            'взять (almak)',
            'Возьми зонтик.',
            'Şemsiyeyi al.',
            'Alınan nesne',
          ],
          [
            'понимать (anlamak)',
            'Я понимаю тебя.',
            'Seni anlıyorum.',
            'Anlaşılan kişi veya şey',
          ],
          [
            'помнить (hatırlamak)',
            'Я помню этот день.',
            'O günü hatırlıyorum.',
            'Hatırlanan şey',
          ],
          [
            'встречать (buluşmak / karşılamak)',
            'Я встречаю друга.',
            'Arkadaşımı karşılıyorum.',
            'Karşılanan kişi (canlı)',
          ],
          [
            'ждать (beklemek)',
            'Я жду автобус / автобуса.',
            'Otobüs bekliyorum.',
            'Belirtme ve genitif mümkün!',
          ],
          [
            'спрашивать (sormak)',
            'Он спрашивает меня.',
            'Bana soruyor.',
            'Sorulan kişi',
          ],
          [
            'благодарить (teşekkür etmek)',
            'Я благодарю вас.',
            'Size teşekkür ediyorum.',
            'Teşekkür edilen kişi',
          ],
          [
            'изучать (incelemek / öğrenmek)',
            'Она изучает русский язык.',
            'Rusça öğreniyor.',
            'Çalışılan konu',
          ],
        ],
      },
      bullets: [
        '**ЖДАТЬ istisnası:** Я жду автобус (bel.) = tam o otobüsü bekliyorum. Я жду автобуса (gen.) = bir otobüs bekliyorum. İkisi de doğru. Canlı için: Я жду друга (bel. tercih edilir).',
      ],
    },
    {
      h2: 'Rusça belirtme halinden 30 gerçek örnek',
      content:
        'Aşağıda belirtmenin ana kullanımlarını kapsayan **30 özgün cümle** var. **1–6:** cansız nesneler | **7–12:** canlı nesneler | **13–18:** yön | **19–23:** zaman | **24–30:** diğer edatlar.',
      table: {
        caption: 'Transliterasyonlu 30 örnek cümle',
        boldColumnIndices: [1],
        headers: ['#', 'Rusça', 'Transliterasyon', 'Çeviri ve notlar'],
        rows: [
          [
            '1',
            'Он читает интересную книгу.',
            'On chitayet interesnuyu knigu.',
            'İlginç bir kitap okuyor. (книга → книгу)',
          ],
          [
            '2',
            'Я купила новое платье.',
            'Ya kupila novoye plate.',
            'Yeni bir elbise aldım. (платье nötr → değişmez)',
          ],
          [
            '3',
            'Мы смотрим старый фильм.',
            'My smotrim staryy film.',
            'Eski bir film izliyoruz. (er. cansız)',
          ],
          [
            '4',
            'Она пьёт горячий кофе.',
            'Ona pyot goryachiy kofe.',
            'Sıcak kahve içiyor. (кофе değişmez)',
          ],
          [
            '5',
            'Я слышу странный звук.',
            'Ya slyshu strannyy zvuk.',
            'Tuhaf bir ses duyuyorum. (er. cansız)',
          ],
          [
            '6',
            'Дети любят мороженое.',
            'Deti lyubyat morozhenoye.',
            'Çocuklar dondurmayı seviyor. (nötr)',
          ],
          [
            '7',
            'Я вижу своего брата.',
            'Ya vizhu svoyego brata.',
            'Kardeşimi görüyorum. (брат canlı → брата)',
          ],
          [
            '8',
            'Она любит своего кота.',
            'Ona lyubit svoyego kota.',
            'Kedisini seviyor. (кот canlı)',
          ],
          [
            '9',
            'Врач осматривает пациента.',
            'Vrach osmotrivayet patsienta.',
            'Doktor hastayı muayene ediyor.',
          ],
          [
            '10',
            'Мы приглашаем всех друзей.',
            'My priglashaem vsekh druzey.',
            'Tüm arkadaşları davet ediyoruz. (çoğul canlı)',
          ],
          [
            '11',
            'Я встретил старого учителя.',
            'Ya vstretil starogo uchitelya.',
            'Eski öğretmenimle karşılaştım.',
          ],
          [
            '12',
            'Полиция ищет преступника.',
            'Politsiya ishchet prestupnika.',
            'Polis suçluyu arıyor.',
          ],
          [
            '13',
            'Я иду в супермаркет.',
            'Ya idu v supermarket.',
            'Süpermarkete gidiyorum. (в + belirtme)',
          ],
          [
            '14',
            'Дети едут на море.',
            'Deti edut na more.',
            'Çocuklar denize gidiyor. (на + belirtme)',
          ],
          [
            '15',
            'Он положил ключи на стол.',
            'On polozhil klyuchi na stol.',
            'Anahtarları masanın üstüne koydu.',
          ],
          [
            '16',
            'Мы летим в Санкт-Петербург.',
            'My letim v Sankt-Peterburg.',
            'Sankt-Peterburg\'a uçuyoruz.',
          ],
          [
            '17',
            'Она поехала на конференцию.',
            'Ona poyekhala na konferentsiyu.',
            'Konferansa gitti.',
          ],
          [
            '18',
            'Кот прыгнул под кровать.',
            'Kot prygnul pod krovat.',
            'Kedi yatağın altına atladı. (под + belirtme)',
          ],
          [
            '19',
            'Я работал всю ночь.',
            'Ya rabotal vsyu noch.',
            'Bütün gece çalıştım. (всю = belirtme)',
          ],
          [
            '20',
            'Встреча в четверг в три часа.',
            'Vstrecha v chetverg v tri chasa.',
            'Toplantı perşembe saat üçte.',
          ],
          [
            '21',
            'Он вернётся через месяц.',
            'On vernyotsya cherez mesyats.',
            'Bir ay içinde dönecek. (через + belirtme)',
          ],
          [
            '22',
            'Я сделал домашнее задание за час.',
            'Ya sdelal domashneye zadaniye za chas.',
            'Ödevi bir saatte bitirdim.',
          ],
          [
            '23',
            'Они не виделись целый год.',
            'Oni ne videlis tselyy god.',
            'Bir yıl boyunca birbirlerini görmediler.',
          ],
          [
            '24',
            'Он рассказал про свою жизнь.',
            'On rasskazal pro svoyu zhizn.',
            'Hayatından bahsetti. (про + belirtme)',
          ],
          [
            '25',
            'Мы переплыли через реку.',
            'My pereplyli cherez reku.',
            'Nehri yüzerek geçtik.',
          ],
          [
            '26',
            'Он споткнулся о порог.',
            'On spotknulsya o porog.',
            'Eşiğe takıldı. (о + belirtme)',
          ],
          [
            '27',
            'Спустя два часа он позвонил.',
            'Spustya dva chasa on pozvonil.',
            'İki saat sonra aradı.',
          ],
          [
            '28',
            'Перенеси встречу на пятницу.',
            'Perenesi vstrechu na pyatnitsu.',
            'Toplantıyı cumaya ertele.',
          ],
          [
            '29',
            'Я учу русский язык каждый день.',
            'Ya uchu russkiy yazyk kazhdyy den.',
            'Her gün Rusça öğreniyorum.',
          ],
          [
            '30',
            'Она смотрит на меня.',
            'Ona smotrit na menya.',
            'Bana bakıyor. (смотреть на + belirtme)',
          ],
        ],
      },
    },
    {
      h2: 'Belirtme ve genitif: nasıl ayırt edilir',
      content:
        'Canlı eril belirtme biçimi genitifle aynı olduğu için ikisi sık karıştırılır.\n\nDoğrudan karşılaştırma:',
      table: {
        caption: 'Belirtme ve genitif karşılaştırması',
        boldColumnIndices: [0, 1],
        headers: ['Bağlam', 'Rusça örnek', 'Hal açıklaması'],
        rows: [
          [
            'Doğrudan nesne (geçişli)',
            'Я вижу студента.',
            'BELİRTME canlı (= genitif biçimi, burada belirtme)',
          ],
          [
            'Yokluk (нет)',
            'Нет студента.',
            'GENİTİF — нет daima genitif ister',
          ],
          [
            'Cansız doğrudan nesne',
            'Я вижу стол.',
            'BELİRTME cansız (= yalın)',
          ],
          [
            'Cansız yokluk',
            'Нет стола.',
            'GENİTİF (стол → стола)',
          ],
          [
            'Bir yere yön',
            'Я иду в парк.',
            'BELİRTME (в + yön)',
          ],
          [
            'Süre',
            'Я работал всю неделю.',
            'BELİRTME — всю неделю',
          ],
          [
            'Miktar / parçası',
            'Я выпил стакан воды.',
            'GENİTİF — воды (bir bardak su)',
          ],
        ],
      },
      bullets: [
        '**Ana soru:** fiil geçişli mi (bir şeye yöneliyor mu) → belirtme. Yokluk, miktar, genitif edatı → genitif.',
      ],
    },
    {
      h2: 'Belirtmede en sık 6 hata (ve düzeltme)',
      bullets: [
        '**Dişil -а → -у unutmak** — Я вижу женщина ✗ → Я вижу женщину ✓',
        '**Canlı erili cansız gibi kullanmak** — Я вижу студент ✗ → Я вижу студента ✓',
        '**Yer için belirtme kullanmak** — Я в школу сейчас ✗ → Я в школе сейчас ✓ (yer = bulunma hali)',
        '**Canlı çoğulda yalın çoğul** — Я вижу студенты ✗ → Я вижу студентов ✓',
        '**Sıfat uyumunu unutmak** — Я вижу красивый женщину ✗ → Я вижу красивую женщину ✓',
        '**через ve за karıştırmak** — через = X süre sonra (gelecek); за = X sürede (bir şeyi bitirmek)',
      ],
    },
  ],
  conclusion:
    'Rusça belirtme hali günlük iletişim için vazgeçilmezdir. Bir şeye bir şey yapmayı — kitap okumak, birini görmek, bir yere gitmek — anlatır anlatmaz belirtme kullanırsınız.\n\n**Dişil -А/-Я** daima değişir (-а → -у, -я → -ю). **Eril cansız** = değişmez. **Eril canlı** = genitif biçimi. **В/НА + belirtme** = yön | **В/НА + bulunma** = yer. **Çoğul canlı** → genitif çoğul (студентов).',
  conclusionOutro: 'Rusça gramer yolculuğunuza devam edin:',
  ctaText: 'Rus hallerini uygulamamızla çalışın',
  ctaHref: '/',
  faq: [
    {
      question: 'Rusçada belirtme hali ne işe yarar?',
      answer:
        'Rusça belirtme hali geçişli fiillerin **doğrudan nesnesini** (Я читаю книгу), в ve на ile **yönü** (Я иду в школу), **zaman ifadelerini** (через час, всю ночь) işaret eder; за, через, про, под, сквозь gibi edatlardan sonra kullanılır.',
    },
    {
      question:
        'Rusçada canlı / cansız ayrımı nasıl işler?',
      answer:
        '**Canlı eril isimler** (insanlar, hayvanlar) belirtmede **genitif biçimini** alır (студент → студента). **Cansız eriller** yalında kalır (стол → стол). Şaşırtıcı: труп = cansız; iskambil ve satranç taşları = canlı.',
    },
    {
      question:
        'в + belirtme ile в + bulunma arasındaki fark nedir?',
      answer:
        '**в + belirtme** = yön (Я иду в школу — Okula gidiyorum). **в + bulunma** = yer (Я в школе — Okuldayım). на için: на работу (işe gitmek) ve на работе (işte olmak).',
    },
    {
      question: 'Rusça hareket fiilleri nedir?',
      answer:
        'Hareket fiilleri: идти/ходить (yürüyerek), ехать/ездить (araçla), лететь/летать (uçmak), бежать/бегать (koşmak), плыть/плавать (yüzmek). Her çiftte tek yönlü ve çok yönlü formlar vardır. Hepsi yön için **в/на + belirtme** kullanır.',
    },
    {
      question: 'Belirtme hali sıfatları da değiştirir mi?',
      answer:
        'Evet. Sıfatlar isimle **uyumlu** olmalıdır. Dişil belirtme: **-ую/-юю** (красивую женщину). Eril cansız: yalın gibi kalır. Eril canlı: genitif biçimi (красивого студента).',
    },
    {
      question:
        'Hangi Rus fiilleri belirtme yerine genitif alır?',
      answer:
        'Çoğu geçişli fiil belirtme alır. **Genitif** ile istisnalar: бояться, ждать (cansız), желать, избегать, достигать, лишать. Хотеть ikisini de alabilir: хочу воды (gen., parça) ve хочу воду (bel.).',
    },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      'Rusça belirtme hali: doğrudan nesneler, canlı ve cansız, hareket fiilleri',
    description:
      'Rusça belirtme haline ilişkin eksiksiz rehber: ekler, canlı ve cansız, hareket fiilleri, в/на, 9 edat, 30 örnek.',
    datePublished: '2026-03-12',
    dateModified: '2026-03-12',
    author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id':
        'https://russiandeclensions.com/learn/articles/russian-accusative-case',
    },
    keywords:
      'rusça belirtme hali, rusça belirtme ekleri, rusça canlı cansız belirtme, rusça doğrudan nesne, rusça hareket fiilleri belirtme',
  },
  tableAccentVariant: 'accusative',
};
