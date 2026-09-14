import type { LearnArticle } from '../learnArticles';

/** `russian-time-expressions-cases` makalesinin Türkçe çevirisi (İngilizce kaynak: `learnArticles.ts`). */
export const russianTimeExpressionsCasesTr: LearnArticle = {
  slug: 'russian-time-expressions-cases',
  introByline: {
    text: '**Nathan tarafından yazıldı** — Rusça öğrenen anadili Fransızca olan biri; gramer, hâller ve günlük pratik için gerçekten işe yarayanları paylaşıyorum.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, Russian Cases with Anna kurucusu',
    imageWidth: 256,
    imageHeight: 256,
  },
  title: 'Rusça zaman ifadeleri ve hâller: bir şeyin ne zaman olduğunu söylemek',
  metaTitle: 'Rusça zaman ifadeleri ve hâller | Russian Cases with Anna',
  metaDescription:
    'Rusçada «ne zaman»ı doğru hâlle söyleyin: günün saatleri, günler, tarihler, süre ve sıklık — özet tablo ve 30 örnekle.',
  keywords: [
    'rusça zaman ifadeleri',
    'rusça zaman ifadeleri hâller',
    'günler aylar hâller rusça',
    'в + belirtme hâli zaman',
    'rusça süre genitif',
    'утром вечером enstrümental',
    'rusçada ne zaman nasıl denir',
    'rusça sıklık ifadeleri',
  ],
  h1: 'Rusça zaman ifadeleri ve hâller: bir şeyin ne zaman olduğunu söylemek',
  heroImage: {
    src: '/articles/russian-time-expressions-cases-header.webp',
    alt: 'Saat, takvim ve defterde Rusça zaman ifadeleri утром вечером',
    width: 1280,
    height: 720,
  },
  intro:
    'Türkçede «pazartesi», «sabah», «iki saat» ve «her hafta» isimleri neredeyse hiç değiştirmez. Rusçada ise **zaman bir hâl sorunudur**. Aynı «ne zaman» fikri **enstrümental**, **belirtme**, **genitif** veya **bulunma** hâli isteyebilir — bazen **в**, **по**, **за** veya **в течение** ile.\n\nBu rehber zaman ifadelerini tetikledikleri hâle göre düzenler; özet tablo ve 30 örnek içerir. Tam gün/ay kelime listeleri için [günler ve aylar rehberimize](/learn/articles/russian-days-months-guide) bakın.',
  whatYouLearn: [
    'Zaman ifadelerinin Rusçada neden hâl seçimi zorunlu kıldığı',
    'Günün saatleri (утром, вечером…) ve ilgili kalıplar',
    'Günler ve tarihler: belirtme vs genitif vs bulunma hâli',
    'Süre ve «ne kadar süre» yapıları',
    'Sıklık: каждый, раз в…, по + yönelme hâli',
    'Özet tablo (ifade → hâl) ve 30 örnek',
  ],
  leadMagnetCta: {
    title: 'Zaman ifadeleri, hâl ekleri otomatik olunca yerleşir',
    description:
      'Russian Cases with Anna altı hâli gerçek cümlelerde çalıştırır — zaman ifadelerindeki ekler dahil. iOS ve Android’de ücretsiz.',
    ctaText: 'Uygulamayı indirin — Ücretsiz',
    ctaHref: '/',
  },
  tableAccentVariant: 'instrumental',
  sections: [
    {
      h2: 'Rusçada zaman neden bir hâl sorunudur',
      content:
        'Rusçanın tek bir «zaman hâli» yoktur. Bunun yerine farklı **zaman anlamları** farklı hâllere ve edatlara karşılık gelir:',
      table: {
        headers: ['Zaman anlamı', 'Tipik hâl', 'Örnek'],
        rows: [
          ['Saat / saat noktaları', 'Belirtme hâli (sıkça)', 'в три часа'],
          ['Haftanın günleri', 'в + Belirtme hâli', 'в понедельник'],
          ['Aylar / yıllar (…da)', 'в + Bulunma hâli', 'в январе / в 2026 году'],
          ['Tarihler (5’inde)', 'Genitif', 'пятого мая'],
          ['Günün bölümleri (yalın zarflar)', 'Enstrümental', 'утром, вечером'],
          ['Süre', 'Belirtme / Genitif kalıpları', 'два часа / в течение часа'],
          [
            'Sıklık',
            'Belirtme / Yönelme / sabit çerçeveler',
            'каждый день / раз в неделю / по понедельникам',
          ],
        ],
        caption: 'Zaman anlamlarının hâllere eşlenmesi',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'İzole kelimeler değil **çerçeveler** öğrenin: в + gün, в + ay, утром, каждый…',
        'Gün ve ay hâllerini karıştırmak klasik tuzaktır — [günler ve aylar makalesinde](/learn/articles/russian-days-months-guide) derinlemesine işlenir.',
      ],
    },
    {
      h2: 'Günün saatleri (enstrümental ve daha fazlası)',
      content:
        'Gündelik «sabah / öğleden sonra / akşam / gece» seti çoğu zaman edatsız, yalın zarf olarak **enstrümental** kullanır.',
      table: {
        headers: ['Rusça', 'Hâl / kalıp', 'Türkçe'],
        rows: [
          ['утром', 'Enstrümental', 'sabahleyin'],
          ['днём', 'Enstrümental', 'öğleden sonra / gündüz'],
          ['вечером', 'Enstrümental', 'akşamleyin'],
          ['ночью', 'Enstrümental', 'geceleyin'],
          ['сегодня утром', 'sabit + enstrümental', 'bu sabah'],
          ['завтра вечером', 'sabit + enstrümental', 'yarın akşam'],
          ['в три часа', 'в + Belirtme hâli', 'saat üçte'],
          [
            'в половине шестого',
            'в + bulunma ifadesi',
            'beş buçukta (yaygın saat konuşması)',
          ],
        ],
        caption: 'Günün bölümleri ve saat',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        '**Утром / вечером**, утро / вечер’in zaman zarfı olarak kullanılan enstrümental biçimleridir.',
        '**В** ile saatler genellikle **belirtme hâli** alır: **в два часа**, **в пять минут шестого** (kalıplar tam ifadeye göre değişir).',
        'Saat konuşmasındaki sayı biçimleri için [sayılar rehberine](/learn/articles/russian-numbers-guide) bakın.',
      ],
    },
    {
      h2: 'Günler ve tarihler (belirtme + genitif)',
      content: 'Günler ve takvim tarihleri farklı hâl sistemleri kullanır. Bunları ayrı tutun.',
      subsections: [
        {
          h3: 'Haftanın günleri — в + belirtme hâli',
          content:
            '**В понедельник**, **во вторник**, **в среду**, **в пятницу**…\nDişil günler belirtme hâlini açıkça gösterir (**среду, пятницу, субботу**). Eril günler çoğu zaman yalın hâle benzer.',
        },
        {
          h3: 'Aylar «…da» — в + bulunma hâli',
          content: '**В январе**, **в июне**, **в декабре**. Burada gün kalıbını kullanmayın.',
        },
        {
          h3: 'Tarihler — genitif',
          content:
            '**Сегодня пятое мая.** «5 Mayıs’ta» derken Rusça tipik olarak genitif biçimler kullanır: **пятого мая**, **первого сентября**.\nYıllar çoğu zaman **в 2026 году** (bulunma hâli) olarak veya tam formüle göre genitif tarih dizilerinde görünür.',
        },
      ],
      bullets: [
        'Tekrarlayan günler: **по понедельникам** (по + çoğul yönelme hâli) = pazartesileri.',
        'Tam kelime tabloları: [haftanın günleri ve aylar](/learn/articles/russian-days-months-guide).',
      ],
    },
    {
      h2: 'Süre ifadeleri',
      content: '«Ne kadar süre?» Rusçada tek bir yapı değildir. Bunlar yüksek frekanslı çerçevelerdir:',
      table: {
        headers: ['Çerçeve', 'Hâl kalıbı', 'Örnek', 'Türkçe'],
        rows: [
          ['Yalın süre', 'Belirtme hâli zaman miktarı', 'Я ждал час.', 'Bir saat bekledim.'],
          ['два / три / четыре + …', 'Tekil genitif isim', 'два часа, три дня', 'iki saat, üç gün'],
          ['пять+ / много…', 'Çoğul genitif', 'пять часов, много лет', 'beş saat, birçok yıl'],
          ['в течение + …', 'Genitif', 'в течение недели', 'bir hafta boyunca / içinde'],
          ['за + …', 'Belirtme hâli (sıkça «içinde»)', 'за два дня', 'iki gün içinde'],
          ['с … до …', 'Genitif … Genitif', 'с утра до вечера', 'sabahtan akşama kadar'],
        ],
        caption: 'Süre çerçeveleri ve hâlleri',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Sayı + zaman birimi, diğer nicelenmiş isimlerle aynı genitif kurallarını izler — [genitif](/learn/articles/russian-genitive-case)e bakın.',
        '**За** + belirtme hâli bağlama göre sıkça «bir süre içinde» veya «zaman karşılığında» demektir — yaygın eşdizimleri öğrenin.',
      ],
    },
    {
      h2: 'Sıklık ifadeleri',
      content: 'Bir şeyin ne sıklıkla olduğunu söylemenin kendi küçük araç seti vardır:',
      table: {
        headers: ['Rusça', 'Kalıp', 'Türkçe'],
        rows: [
          ['каждый день', 'каждый + Belirtme hâli (uyum)', 'her gün'],
          ['каждую неделю', 'dişil belirtme hâli', 'her hafta'],
          ['каждый месяц / год', 'isimle uyum', 'her ay / yıl'],
          ['раз в неделю', 'раз в + Belirtme hâli', 'haftada bir'],
          ['два раза в день', 'раз(а) в + Bel.', 'günde iki kez'],
          ['по вечерам', 'по + Çoğul yönelme hâli', 'akşamları (alışkanlık)'],
          ['по понедельникам', 'по + Çoğul yönelme hâli', 'pazartesileri'],
          ['иногда / часто / редко', 'zarflar (hâl yok)', 'bazen / sık / nadiren'],
        ],
        caption: 'Sıklık ifadeleri',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        '**Каждый**, zaman ismiyle sıfat gibi uyum gösterir.',
        '**По + çoğul yönelme hâli**, «alışkanlık olarak X günlerinde / akşamları» kalıbıdır.',
      ],
    },
    {
      h2: 'Özet tablo: zaman ifadesi → hâl',
      content: 'Konuşmadan veya yazmadan önce gözden geçireceğiniz tek ekran.',
      table: {
        headers: ['Şunu demek istiyorsanız…', 'Kullanın…', 'Hâl'],
        rows: [
          ['sabah/akşam', 'утром / вечером', 'Enstrümental'],
          ['pazartesi', 'в понедельник', 'в + Belirtme hâli'],
          ['pazartesileri (alışkanlık)', 'по понедельникам', 'по + Yönelme ç.'],
          ['ocakta', 'в январе', 'в + Bulunma hâli'],
          ['5 Mayıs’ta', 'пятого мая', 'Genitif'],
          ['saat 3’te', 'в три часа', 'в + Belirtme hâli'],
          ['bir saat (süre)', 'час / в течение часа', 'Bel. / в течение + Gen.'],
          ['her gün', 'каждый день', 'каждый + Bel.'],
          ['haftada bir', 'раз в неделю', 'в + Belirtme hâli'],
          ['sabahtan akşama', 'с утра до вечера', 'с/до + Genitif'],
        ],
        caption: 'Rusça zaman → hâl özet tablosu',
        boldColumnIndices: [0, 2],
      },
    },
    {
      h2: '30 örnek cümle',
      content:
        '**1–8** günün bölümleri ve saat · **9–16** günler/tarihler · **17–23** süre · **24–30** sıklık.',
      table: {
        headers: ['#', 'Rusça', 'Türkçe'],
        rows: [
          ['1', 'Я встаю рано утром.', 'Sabah erken kalkarım.'],
          ['2', 'Вечером мы смотрим фильм.', 'Akşam film izleriz.'],
          ['3', 'Ночью было холодно.', 'Gece soğuktu.'],
          ['4', 'Встретимся в три часа.', 'Saat üçte buluşalım.'],
          ['5', 'Занятия начинаются в девять.', 'Dersler dokuzda başlar.'],
          ['6', 'Сегодня днём идёт дождь.', 'Bugün öğleden sonra yağmur yağıyor.'],
          ['7', 'Завтра утром звони мне.', 'Yarın sabah beni ara.'],
          ['8', 'Он работает до позднего вечера.', 'Geç akşama kadar çalışır.'],
          ['9', 'В понедельник у меня экзамен.', 'Pazartesi sınavım var.'],
          ['10', 'Мы едем в пятницу.', 'Cuma günü gidiyoruz.'],
          ['11', 'По субботам я сплю дольше.', 'Cumartesileri daha uzun uyurum.'],
          ['12', 'Я родился в марте.', 'Martta doğdum.'],
          ['13', 'Свадьба в июне.', 'Düğün haziranda.'],
          ['14', 'Сегодня первое сентября.', 'Bugün bir Eylül.'],
          ['15', 'Концерт пятого мая.', 'Konser 5 Mayıs’ta.'],
          ['16', 'В 2024 году я начал учить русский.', '2024 yılında Rusça öğrenmeye başladım.'],
          ['17', 'Я ждал тебя час.', 'Seni bir saat bekledim.'],
          ['18', 'Фильм шёл два часа.', 'Film iki saat sürdü.'],
          ['19', 'Мы жили там пять лет.', 'Orada beş yıl yaşadık.'],
          ['20', 'В течение недели будет тепло.', 'Hafta boyunca hava sıcak olacak.'],
          ['21', 'За три дня я прочитал книгу.', 'Üç günde kitabı okudum.'],
          ['22', 'С утра до вечера на работе.', 'Sabahtan akşama işte.'],
          ['23', 'Отпуск длится две недели.', 'Tatil iki hafta sürer.'],
          ['24', 'Я тренируюсь каждый день.', 'Her gün antrenman yaparım.'],
          ['25', 'Она звонит раз в неделю.', 'Haftada bir arar.'],
          ['26', 'Мы встречаемся два раза в месяц.', 'Ayda iki kez buluşuruz.'],
          ['27', 'По вечерам я читаю.', 'Akşamları okurum.'],
          ['28', 'По воскресеньям мы ходим в парк.', 'Pazarları parka gideriz.'],
          ['29', 'Иногда я опаздываю.', 'Bazen geç kalırım.'],
          ['30', 'Редко смотрю телевизор.', 'Nadiren televizyon izlerim.'],
        ],
        caption: '30 zaman ifadesi örneği',
        boldColumnIndices: [0, 1],
      },
    },
    {
      h2: 'Rusça zaman ifadelerinde yaygın hatalar',
      bullets: [
        '**в январь** ✗ → **в январе** ✓ (ay = bulunma hâli).',
        '**в понедельнике** ✗ → **в понедельник** ✓ (gün = belirtme hâli).',
        '**каждый днём** ✗ → **каждый день** ✓.',
        'Türkçe «için / boyunca»yı her yerde birebir çevirmek — Rusça sıkça yalın belirtme süresi (**час**) veya **в течение** kullanır.',
        'Sayılardan sonra genitifi unutmak: **два часа**, **пять часов**.',
      ],
    },
  ],
  faq: [
    {
      question: 'Rusçada haftanın günleri için hangi hâli kullanırım?',
      answer:
        '«[Gün] günü» anlamındaki в ile belirtme hâli kullanın: в понедельник, в среду. Alışkanlık «pazartesileri» için по + çoğul yönelme hâli: по понедельникам.',
    },
    {
      question: 'Neden «ocakta» ile «pazartesi» aynı hâl değil?',
      answer:
        'в ile günler belirtme hâli alır; в ile aylar bulunma hâli alır (в январе). Bu, ezberlenmesi gereken sabit bir dağılımdır — Türkçe sezginizin mantık hatası değildir.',
    },
    {
      question: 'Rusçada «sabah» nasıl denir?',
      answer:
        'En yaygın gündelik biçim утром’dur (zarf olarak kullanılan enstrümental). «Bu/yarın sabah» için сегодня утром, завтра утром da duyarsınız.',
    },
    {
      question: '«İki saat boyunca» gibi süreyi nasıl ifade ederim?',
      answer:
        'Sıkça belirtme hâli zaman miktarıyla (два часа), Фильм шёл два часа gibi cümlelerde; veya в течение + genitif ile (в течение двух часов). Sayı kuralları hâlâ geçerlidir (два часа vs пять часов).',
    },
    {
      question: '«Her gün» ve «haftada bir» nasıl denir?',
      answer:
        'Каждый день (каждый, день ile uyum gösterir) ve раз в неделю (в + belirtme hâli). Alışkanlık akşamları/günleri için de по + çoğul yönelme hâli: по вечерам, по пятницам.',
    },
  ],
  conclusionIntro: 'Her anlamı bir hâl çerçevesine bağladığınızda zaman konuşması kolaylaşır.',
  conclusionBullets: [
    '**Günün bölümleri** → sıkça enstrümental (утром)',
    '**Günler** → в + belirtme hâli; alışkanlıklar → по + çoğul yönelme hâli',
    '**Aylar** → в + bulunma hâli; **tarihler** → genitif',
    '**Süre / sıklık** → sabit çerçeveleri öğrenin',
    'Hâl seçimi otomatik hissedilene kadar **özet tabloyla** çalışın',
  ],
  conclusionOutro:
    '[Günler ve aylar](/learn/articles/russian-days-months-guide) listelerini yakın tutun, [belirtme](/learn/articles/russian-accusative-case), [genitif](/learn/articles/russian-genitive-case) ve [enstrümental](/learn/articles/russian-instrumental-case) hâllerini derinleştirin ve ücretsiz [çekim quizimizde](/practice) ekleri pratik edin.',
  internalLinks: [
    {
      href: '/learn/articles/russian-days-months-guide',
      label: 'Rusçada haftanın günleri ve aylar',
    },
    {
      href: '/learn/articles/russian-numbers-guide',
      label: 'Rusça sayılar rehberi',
    },
    {
      href: '/learn/articles/russian-accusative-case',
      label: 'Rusça belirtme hâli',
    },
    {
      href: '/learn/articles/russian-genitive-case',
      label: 'Rusça genitif',
    },
    {
      href: '/learn/articles/russian-instrumental-case',
      label: 'Rusça enstrümental hâli',
    },
    {
      href: '/learn/articles/russian-prepositional-case',
      label: 'Rusça edat hâli',
    },
    {
      href: '/practice',
      label: 'Ücretsiz Rusça çekim testi',
    },
  ],
  ctaText: 'Rusça hâlleri çalışın — Ücretsiz →',
  ctaHref: '/practice',
  conclusion: '',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Rusça zaman ifadeleri ve hâller: bir şeyin ne zaman olduğunu söylemek',
    description:
      'Rusçada «ne zaman»ı doğru hâlle söyleyin: günün saatleri, günler, tarihler, süre ve sıklık — özet tablo ve 30 örnekle.',
    datePublished: '2026-09-13',
    dateModified: '2026-09-13',
    author: {
      '@type': 'Person',
      name: 'Nathan',
      url: 'https://russiandeclensions.com/',
      image: 'https://russiandeclensions.com/landing-cases/founder-photo.webp',
      description:
        'Rusça öğrenen anadili Fransızca olan biri; gramer, hâller ve pratik kendi kendine çalışma alışkanlıkları hakkında yazıyor.',
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
      '@id': 'https://russiandeclensions.com/learn/articles/russian-time-expressions-cases',
    },
    keywords:
      'rusça zaman ifadeleri, rusça zaman ifadeleri hâller, утром вечером enstrümental, в + belirtme hâli zaman, rusça süre genitif',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russian-time-expressions-cases-header.webp',
      width: 1280,
      height: 720,
    },
  },
};
