import type { LearnArticle } from '../learnArticles';

/** `russian-question-words` makalesinin Türkçe çevirisi (EN kaynak: `learnArticles.ts`). */
export const russianQuestionWordsTr: LearnArticle = {
  slug: 'russian-question-words',
  introByline: {
    text: '**Nathan tarafından yazıldı** — Rusça öğrenen anadili Fransızca olan biri; gramer, hâller ve günlük pratik için gerçekten işe yarayanları paylaşıyorum.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, Russian Cases with Anna kurucusu',
    imageWidth: 256,
    imageHeight: 256,
  },
  title: 'Rusça soru sözcükleri: kim, ne, nerede, ne zaman ve nasıl (tam rehber)',
  metaTitle: 'Rusça soru sözcükleri rehberi | Russian Cases with Anna',
  metaDescription:
    'Rusça soru sözcüklerini öğrenin: кто, что, где, куда, какой, сколько — her birinin tetiklediği hâlle birlikte, 25 kullanıma hazır soru.',
  keywords: [
    'rusça soru sözcükleri',
    'rusça soru zamirleri',
    'кто что где куда',
    'rusça soru sözcükleri listesi',
    'rusça nasıl soru sorulur',
    'какой который чей rusça',
    'сколько genitif rusça',
    'где vs куда vs откуда',
  ],
  h1: 'Rusça soru sözcükleri: kim, ne, nerede, ne zaman ve nasıl (tam rehber)',
  heroImage: {
    src: '/articles/russian-question-words-header.webp',
    alt: 'El yazısıyla Rusça soru sözcükleri кто что где куда когда как почему yazılı defter',
    width: 1280,
    height: 720,
  },
  intro:
    'Rusça soru sorabiliyorsanız neredeyse her konuşmayı yönlendirebilirsiniz. Püf nokta: birçok Rusça soru sözcüğü **hâllerle bağlıdır**. **Кого?** yalnızca “kim?” değildir — genitif/belirtmede “kimi / kimden?” demektir. **Сколько?** sonraki ismi **genitif**e çeker. **Где?** ile **куда?** Türkçede benzer görünür (“nerede / nereye?”) ama farklı gramer ister.\n\nBu rehber başlangıç setinin tamamını verir, **кто/что** çekimini gösterir, **где / куда / откуда** ayrımını yapar, **какой / который / чей** konularını kapsar, **сколько + genitif**i açıklar ve **25 kullanıma hazır soru**yla biter.',
  whatYouLearn: [
    'En yararlı Rusça soru sözcüklerinin tam listesi',
    'Кто ve что’nun hâllere göre nasıl çekildiği',
    'Где vs куда vs откуда (konum vs yön vs köken)',
    'Какой, который ve чей — ve nasıl uyuştukları',
    'Сколько ve neden genitif aldığı',
    'Gerçek konuşmalar için 25 kullanıma hazır soru',
  ],
  leadMagnetCta: {
    title: 'Hâl ekleri otomatikleşince sorular kolaylaşır',
    description:
      'Russian Cases with Anna, кого, чему, о ком ve сколько + genitif arkasındaki ekleri çalıştırır. iOS ve Android’de ücretsiz.',
    ctaText: 'Uygulamayı indir — Ücretsiz',
    ctaHref: '/',
  },
  tableAccentVariant: 'genitive',
  sections: [
    {
      h2: 'Rusça soru sözcüklerinin tam listesi',
      content:
        'Bu genel bakışla başlayın. Yer imlerine ekleyin, sonra her sözcüğün tetiklediği gramer için aşağıdaki bölümlere inin.',
      table: {
        headers: ['Rusça', 'Transliterasyon', 'Türkçe', 'Gramer notu'],
        rows: [
          ['кто', 'kto', 'kim', 'Çekimlenir (кого, кому…)'],
          ['что', 'chto', 'ne', 'Çekimlenir (чего, чему…)'],
          ['где', 'gde', 'nerede (konum)', 'Yanıt çoğu zaman bulunma hâlinde'],
          ['куда', 'kuda', 'nereye (yön)', 'Yanıt çoğu zaman belirtme hâlinde'],
          ['откуда', 'otkuda', 'nereden', 'Yanıt çoğu zaman -den + genitif'],
          ['когда', 'kogda', 'ne zaman', 'Zaman ifadeleri / hâller değişir'],
          ['почему', 'pochemu', 'neden (sebep)', 'Çoğu zaman потому что…'],
          ['зачем', 'zachem', 'ne için (amaç)', 'Amaç / neye yarar'],
          ['как', 'kak', 'nasıl', 'Tarz; ayrıca “… nasıl?”'],
          ['какой / какая / какое / какие', 'kakoy…', 'hangi / nasıl bir', 'Sıfat gibi uyuşur'],
          ['который', 'kotoryy', 'hangisi (kümeden) / ki', 'İlgi / hangisi'],
          ['чей / чья / чьё / чьи', 'chey…', 'kimin', 'İsimle uyuşur'],
          ['сколько', "skol'ko", 'kaç / ne kadar', 'İsim genitifte'],
          ['сколько стоит…?', "skol'ko stoit", 'ne kadar tutar?', 'Sabit alışveriş sorusu'],
        ],
        caption: 'Temel Rusça soru sözcükleri bir bakışta',
        boldColumnIndices: [0, 3],
      },
    },
    {
      h2: 'Кто ve Что — ve nasıl çekimlenirler',
      content:
        '**Кто?** (kim?) ve **Что?** (ne?) temeldir. Yalında basit görünürler. Diğer hâllerde İngilizce konuşanların (ve birçok öğrenenin) ilk unuttuğu biçimlere dönüşürler: **кого, чему, о ком…**',
      table: {
        headers: ['Hâl', 'кто', 'что', 'Türkçe ipucu'],
        rows: [
          ['Yalın', 'кто', 'что', 'kim? / ne? (özne)'],
          ['Genitif', 'кого', 'чего', 'kimin? / neyin? / нет кого?'],
          ['Datif', 'кому', 'чему', 'kime? / neye?'],
          ['Belirtme', 'кого', 'что', 'kimi? / neyi? (nesne)'],
          ['Araçlık', 'кем', 'чем', 'kimle? / neyle?'],
          ['Bulunma', 'о ком', 'о чём', 'kim hakkında? / ne hakkında?'],
        ],
        caption: 'Кто ve что çekimi',
        boldColumnIndices: [0, 1, 2],
      },
      subsections: [
        {
          h3: 'Hızlı örnekler',
          content:
            '**Кто это?** — Bu kim?\n**Кого ты видишь?** — Kimi görüyorsun?\n**Кому дать книгу?** — Kitabı kime vereyim?\n**О чём вы говорите?** — Neyden bahsediyorsunuz?\n**Чем ты пишешь?** — Neyle yazıyorsun?',
        },
      ],
      bullets: [
        '**Кого** hem кто’nun genitifi hem belirtmesidir — bağlam hangisi olduğunu söyler.',
        'Zamir paralelleri için (мне, его, неё…) bkz. [Rusça zamir çekimi](/learn/articles/russian-pronouns-declension).',
      ],
    },
    {
      h2: 'Где vs Куда vs Откуда',
      content:
        'Türkçe “nerede / nereye / nereden” ayrımını yapar; Rusça da konum, hedef ve kökeni ayırır. Bunları karıştırmak en yaygın başlangıç hatalarından biridir.',
      table: {
        headers: ['Soru', 'Anlam', 'Tipik yanıt kalıbı', 'Örnek'],
        rows: [
          ['Где?', 'Nerede (içinde/üzerinde)?', 'в/на + bulunma', 'Где книга? — На столе.'],
          ['Куда?', 'Nereye?', 'в/на + belirtme', 'Куда ты идёшь? — В школу.'],
          ['Откуда?', 'Nereden?', 'из/с/от + genitif', 'Откуда ты? — Из Франции.'],
        ],
        caption: 'Konum vs yön vs köken',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        '**Где?** → durağan konum (çoğu zaman [bulunma hâli](/learn/articles/russian-prepositional-case)).',
        '**Куда?** → doğru hareket (çoğu zaman в/на sonrası [belirtme](/learn/articles/russian-accusative-case)).',
        '**Откуда?** → köken (çoğu zaman из/с/от sonrası [genitif](/learn/articles/russian-genitive-case)).',
        'Aynı isim, üç biçim: **в школе** / **в школу** / **из школы**.',
      ],
    },
    {
      h2: 'Какой, Который ve Чей',
      content:
        'Bu üçü Türkçe çevirilerde benzer görünür (“hangi / ne tür / kimin”) ama birbirinin yerine geçmez.',
      subsections: [
        {
          h3: 'Какой — ne tür / hangi',
          content:
            '**Какой?** sıfat gibi uyuşur: какая, какое, какие + hâl ekleri.\n**Какой это фильм?** — Bu ne tür bir film?\n**В каком доме ты живёшь?** — Hangi evde yaşıyorsun?',
        },
        {
          h3: 'Который — hangisi / ki (ilgi)',
          content:
            '**Который** bilinen bir kümeden seçer veya ilgi cümlesi açar.\n**Который час?** — Saat kaç?\n**Книга, которую я читаю…** — Okuduğum kitap…',
        },
        {
          h3: 'Чей — kimin',
          content:
            '**Чей / чья / чьё / чьи** **sahip olunan şeyle** uyuşur, sahip olanla değil.\n**Чья это сумка?** — Bu kimin çantası?\n**Чьи это ключи?** — Bunlar kimin anahtarları?',
        },
      ],
      bullets: [
        'Sıfat uyuşum tabloları için bkz. [sıfat çekimi](/learn/articles/russian-adjective-declension).',
        '**Какой**, “hangi / ne tür + isim” için günlük iş atıdır.',
      ],
    },
    {
      h2: 'Сколько ve genitif',
      content:
        '**Сколько?** “kaç?” veya “ne kadar?” anlamına gelir. Sonraki isim normalde **genitif**tedir.',
      table: {
        headers: ['Rusça', 'Türkçe', 'Not'],
        rows: [
          ['Сколько у тебя братьев?', 'Kaç erkek kardeşin var?', 'братьев = çoğul genitif'],
          ['Сколько это стоит?', 'Bu ne kadar tutar?', 'Sabit ticaret sorusu'],
          ['Сколько времени?', 'Ne kadar zaman?', 'времени = genitif'],
          ['Сколько лет тебе?', 'Kaç yaşındasın?', 'Datif тебе ile yaş kalıbı'],
        ],
        caption: 'Genitifli сколько soruları',
        boldColumnIndices: [0],
      },
      bullets: [
        'Sayılar da genitifle etkileşir — ayrıntılar [sayılar rehberi](/learn/articles/russian-numbers-guide) ve [genitif rehberi](/learn/articles/russian-genitive-case)nde.',
        '**Сколько** sonrası ismi yalında bırakmayın: *сколько братья* ✗ → **сколько братьев** ✓.',
      ],
    },
    {
      h2: '25 kullanıma hazır soru',
      content:
        'Bunları çerçeve olarak ezberleyin. Kalıp oturunca kendi isimlerinizi koyun.',
      table: {
        headers: ['#', 'Rusça', 'Türkçe'],
        rows: [
          ['1', 'Кто это?', 'Bu kim?'],
          ['2', 'Что это?', 'Bu ne?'],
          ['3', 'Как тебя зовут?', 'Adın ne?'],
          ['4', 'Откуда ты?', 'Nerelisin?'],
          ['5', 'Где ты живёшь?', 'Nerede yaşıyorsun?'],
          ['6', 'Куда ты идёшь?', 'Nereye gidiyorsun?'],
          ['7', 'Когда мы встретимся?', 'Ne zaman buluşacağız?'],
          ['8', 'Почему ты устал?', 'Neden yorgunsun?'],
          ['9', 'Зачем тебе это?', 'Buna ne için ihtiyacın var?'],
          ['10', 'Как дела?', 'Nasılsın? / İşler nasıl?'],
          ['11', 'Какой сегодня день?', 'Bugün hangi gün?'],
          ['12', 'Который час?', 'Saat kaç?'],
          ['13', 'Чья это книга?', 'Bu kimin kitabı?'],
          ['14', 'Сколько это стоит?', 'Bu ne kadar tutar?'],
          ['15', 'Сколько тебе лет?', 'Kaç yaşındasın?'],
          ['16', 'Кого ты ждёшь?', 'Kimi bekliyorsun?'],
          ['17', 'Кому позвонить?', 'Kime telefon edeyim?'],
          ['18', 'О чём фильм?', 'Film ne hakkında?'],
          ['19', 'Чем ты занимаешься?', 'Ne iş yapıyorsun? / Ne ile uğraşıyorsun?'],
          ['20', 'В каком городе ты был?', 'Hangi şehirdeydin?'],
          ['21', 'Как пройти к метро?', 'Metroya nasıl giderim?'],
          ['22', 'Где можно купить билет?', 'Bilet nereden alınır?'],
          ['23', 'Когда открывается музей?', 'Müze ne zaman açılır?'],
          ['24', 'Почему здесь так шумно?', 'Burada neden bu kadar gürültülü?'],
          ['25', 'Сколько остановок до центра?', 'Merkeze kaç durak?'],
        ],
        caption: '25 yüksek frekanslı Rusça soru',
        boldColumnIndices: [0, 1],
      },
    },
    {
      h2: 'Rusça soru sözcüklerinde yaygın hatalar',
      bullets: [
        '**Yön için где kullanmak:** *Где ты идёшь?* ✗ → **Куда ты идёшь?** ✓.',
        '**Сколько sonrası genitifi unutmak:** *Сколько братья?* ✗ → **Сколько братьев?** ✓.',
        '**Edatlardan sonra кто/что’yu yalında bırakmak:** **о ком / о чём**, **с кем / с чем** gerekir.',
        '**Почему ile зачем’i karıştırmak** — sebep vs amaç.',
        '**“Ne tür…” için doğal günlük seçim какой iken который kullanmak.**',
      ],
    },
  ],
  faq: [
    {
      question: 'Başlangıç için en önemli Rusça soru sözcükleri hangileri?',
      answer:
        'Кто, что, где, куда, откуда, когда, почему, как, какой, чей ve сколько ile başlayın. Bunlar tanışma, yön, zaman, sebep ve alışverişi kapsar.',
    },
    {
      question: 'Где ile куда arasındaki fark nedir?',
      answer:
        'Где konum sorar (Neredesin?). Куда hedef sorar (Nereye gidiyorsun?). Yanıtlar genelde farklı hâller kullanır: где için bulunma, куда için в/на sonrası belirtme yönü.',
    },
    {
      question: 'Кто ve что hâllerle değişir mi?',
      answer:
        'Evet. Tam çekimlenirler: кого/чего, кому/чему, кем/чем, о ком/о чём vb. Doğal sorular için bu biçimleri öğrenmek şarttır.',
    },
    {
      question: 'Сколько neden genitif alır?',
      answer:
        'Çünkü Rusçada miktar ifadeleri tipik olarak sayılan ismin genitifini ister: сколько братьев, сколько времени. Bu, sayılar ve нет + genitif ile aynı kural ailesidir.',
    },
    {
      question: 'Какой mı который mı kullanmalıyım?',
      answer:
        'Какой, isimle “hangi / ne tür” için yaygın sorudur. Который çoğu zaman bir kümeden “hangisi” demektir veya ilgi cümlesi açar (okuduğum kitap…).',
    },
  ],
  conclusionIntro: 'Soru sözcükleri kelime bilgisi artı hâl mantığı tek pakettedir.',
  conclusionBullets: [
    'Önce **çekirdek listeyi**, sonra кто/что’nun **hâl biçimlerini** öğrenin',
    '**Где / куда / откуда**yu asla karıştırmayın',
    '**Какой / чей**i sıfat gibi çekin',
    '**Сколько** sonrası isimleri **genitif**e koyun',
    '**25 çerçeveyi** otomatik çıkana kadar çalışın',
  ],
  conclusionOutro:
    'Sonra bu soruları ücretsiz [pratik aracımızdaki](/practice) tam hâl alıştırmalarına bağlayın; biçimler otururken [zamir](/learn/articles/russian-pronouns-declension) ve [genitif](/learn/articles/russian-genitive-case) rehberlerini açık tutun.',
  internalLinks: [
    {
      href: '/learn/articles/russian-pronouns-declension',
      label: 'Rusça zamir çekimi',
    },
    {
      href: '/learn/articles/russian-genitive-case',
      label: 'Rusça genitif hâli rehberi',
    },
    {
      href: '/learn/articles/russian-accusative-case',
      label: 'Rusça belirtme hâli rehberi',
    },
    {
      href: '/learn/articles/russian-prepositional-case',
      label: 'Rusça bulunma hâli rehberi',
    },
    {
      href: '/learn/articles/russian-greetings-guide',
      label: 'Rusça selamlaşma rehberi',
    },
    {
      href: '/practice',
      label: 'Ücretsiz Rusça çekim testi',
    },
  ],
  ctaText: 'Rusça hâlleri çalış — Ücretsiz →',
  ctaHref: '/practice',
  conclusion: '',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Rusça soru sözcükleri: kim, ne, nerede, ne zaman ve nasıl (tam rehber)',
    description:
      'Rusça soru sözcüklerini öğrenin: кто, что, где, куда, какой, сколько — her birinin tetiklediği hâlle birlikte, 25 kullanıma hazır soru.',
    datePublished: '2026-09-13',
    dateModified: '2026-09-13',
    author: {
      '@type': 'Person',
      name: 'Nathan',
      url: 'https://russiandeclensions.com/',
      image: 'https://russiandeclensions.com/landing-cases/founder-photo.webp',
      description:
        'Rusça öğrenen anadili Fransızca olan yazar; gramer, hâller ve pratik kendi kendine öğrenme alışkanlıkları hakkında yazar.',
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
      'rusça soru sözcükleri, rusça soru zamirleri, кто что где куда, сколько genitif rusça, где vs куда vs откуда',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russian-question-words-header.webp',
      width: 1280,
      height: 720,
    },
  },
};
