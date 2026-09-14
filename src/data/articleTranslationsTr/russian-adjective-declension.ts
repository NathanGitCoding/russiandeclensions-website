import type { LearnArticle } from '../learnArticles';

/** `russian-adjective-declension` makalesinin Türkçe çevirisi (İngilizce kaynak: `learnArticles.ts`). */
export const russianAdjectiveDeclensionTr: LearnArticle = {
  slug: 'russian-adjective-declension',
  introByline: {
    text: '**Nathan tarafından yazıldı** — Rusça öğrenen anadili Fransızca olan biri; gramer, hâller ve günlük pratik için gerçekten işe yarayanları paylaşıyorum.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, Russian Cases with Anna kurucusu',
    imageWidth: 256,
    imageHeight: 256,
  },
  title: 'Rusça Sıfat Çekimi: 6 Hâlin Tümü için Ek Tablosu',
  metaTitle: 'Rusça Sıfat Ekleri Tablosu | Russian Cases with Anna',
  metaDescription:
    'Tam Rusça sıfat ekleri tablosu: sert ve yumuşak gövdeler, 6 hâl, canlı belirtme, kısa biçimler ve iyelikler — gerçek örneklerle.',
  keywords: [
    'rusça sıfat ekleri',
    'rusça sıfat çekimi',
    'rusça sıfat uyumu',
    'sert ve yumuşak sıfat gövdeleri rusça',
    'rusça sıfat hâl tablosu',
    'rusça kısa biçim sıfatlar',
    'rusça iyelik sıfatları',
    'rusça sıfat çekmek',
  ],
  h1: 'Rusça Sıfat Çekimi: 6 Hâlin Tümü için Ek Tablosu',
  heroImage: {
    src: '/articles/russian-adjective-declension-header.webp',
    alt: 'Hâl ekleri için новый новая новое Rusça sıfat uyumu örnekleri içeren defter',
    width: 1280,
    height: 720,
  },
  intro:
    'Öğrenenler Rusça hâllerden konuşurken çoğu zaman isimlere odaklanır — ama **sıfatlar da çekimlenir** ve her seferinde isimle **cinsiyet, sayı ve hâl** bakımından uyum sağlamak zorundadır. Eki kaçırırsanız, isim mükemmel olsa bile cümle yanlış duyulur.\n\nİyi haber: sıfat ekleri **isim eklerinden daha düzenlidir**. Sert gövde kalıbını (`новый`) ve yumuşak gövde kalıbını (`синий`) öğrendikten sonra binlerce sıfatı çekebilirsiniz. Bu kılavuz tam tabloları, canlı/cansız belirtme kuralını, kısa biçimleri, iyelikleri ve Türkçe konuşanları en çok şaşırtan hataları verir.',
  whatYouLearn: [
    'Rusça sıfat uyumunun anlamı (cinsiyet × sayı × hâl)',
    '`новый` ile tam sert gövde ekleri tablosu',
    '`синий` ile tam yumuşak gövde ekleri tablosu',
    'Canlı vs cansızın belirtmeyi nasıl değiştirdiği',
    '6 hâlin tümünde tam isim + sıfat öbekleri',
    'Kısa biçim (yüklem) sıfatlar vs uzun biçim',
    'İyelik sıfatları: `мой`, `наш`, `свой`',
    '8 yaygın hata — ve nasıl düzeltilir',
  ],
  leadMagnetCta: {
    title: '6 hâlin tümünde sıfat + isim uyumunu çalışın',
    description:
      'Russian Cases with Anna, sıfatların ve isimlerin paylaştığı ekleri — aralıklı tekrar, gerçek cümleler ve anında geri bildirimle — çalıştırır. iOS ve Android’de ücretsiz.',
    ctaText: 'Uygulamayı indirin ve bugün çalışmaya başlayın',
    ctaHref: '/',
  },
  tableAccentVariant: 'nominative',
  sections: [
    {
      h2: 'Rusça sıfat uyumu ne demektir',
      content:
        'Türkçede sıfatlar neredeyse hiç değişmez: «yeni bir kitap», «yeni kitaplar». Rusçada sıfat, ismin tam ortağıdır. İsim dişil genitif tekilse, sıfat da dişil genitif tekil olmalıdır.\n\nBu üç yönlü uyum — **cinsiyet × sayı × hâl** — sıfat çekiminin tüm işidir.',
      table: {
        headers: ['İsim öbeği', 'Cinsiyet / sayı / hâl', 'Türkçe'],
        rows: [
          ['новый дом', 'eril tekil yalın', 'yeni bir ev'],
          ['новой книги', 'dişil tekil genitif', 'yeni bir kitabın'],
          ['новым окнам', 'nötr çoğul datif', 'yeni pencerelere'],
          ['о синих глазах', 'çoğul bulunma', 'mavi gözler hakkında'],
        ],
        caption: 'Sıfat eki her zaman ismin gramerini yansıtır',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Önce **ismin cinsiyetini** öğrenin — onsuz doğru sıfat ekini seçemezsiniz (bkz. [isim cinsiyeti kılavuzu](/learn/articles/russian-noun-gender-guide)).',
        'Sıfatlar isimlerle aynı hâl sorularına cevap verir: **какой? какая? какое? какие?** ve bu soruların çekimli biçimleri.',
        'Yazım kuralları yine geçerlidir: **г, к, х, ж, ш, щ, ч, ц** sonrasında Rusça birçok ekte **ы** yerine **и** tercih eder — bu yüzden **хороший** yazılır, *хорошый* değil.',
      ],
    },
    {
      h2: 'Sert gövde sıfat ekleri tablosu (новый)',
      content:
        'Sert gövdeli sıfatlar varsayılan kalıptır. Yalın erilde genelde **-ый** (новый, красный) veya vurgulu **-ой** (молодой, большой) ile biter. Diğer tüm ekler aynı sert tabloyu izler.',
      table: {
        headers: ['Hâl', 'Eril', 'Nötr', 'Dişil', 'Çoğul'],
        rows: [
          ['Yalın', 'новый', 'новое', 'новая', 'новые'],
          ['Genitif', 'нового', 'нового', 'новой', 'новых'],
          ['Datif', 'новому', 'новому', 'новой', 'новым'],
          ['Belirtme', 'новый / нового', 'новое', 'новую', 'новые / новых'],
          ['Araçlık', 'новым', 'новым', 'новой', 'новыми'],
          ['Bulunma', 'новом', 'новом', 'новой', 'новых'],
        ],
        caption: 'Sert gövde sıfat ekleri — örnek: новый (yeni)',
        boldColumnIndices: [0],
      },
      bullets: [
        '**Eril ve nötr**, genitif, datif, araçlık ve bulunma eklerini **paylaşır** — bir set ezberleyin, iki cinsiyet kazanın.',
        '**Dişil**, genitif, datif, araçlık ve bulunmayı **-ой** içinde birleştirir (araçlıkta bazen şiirsel **-ою**).',
        'Vurgulu **-ой** sıfatları (большой, молодой) yalnızca yalın erilde farklı görünür — diğer her hücre sert tabloyla aynıdır.',
      ],
      subsections: [
        {
          h3: 'Hızlı bellek yardımcıları',
          content:
            'Sert sıfatlar hakkında yalnızca üç şey hatırlayacaksanız şunları hatırlayın: eril/nötr eğik biçimler **-ого / -ому / -ым / -ом** paylaşır; dişil eğik biçimler **-ой** paylaşır; çoğul genitif ve bulunma ikisi de **-ых** kullanır.',
        },
      ],
    },
    {
      h2: 'Yumuşak gövde sıfat ekleri tablosu (синий)',
      content:
        'Yumuşak gövdeli sıfatlar yalın erilde **-ий** ile biter (синий, летний, последний). Ekleri sert ünlüleri yumuşaklarla değiştirir: **о→е**, **ы→и**, **у→ю**, **а→я**.',
      table: {
        headers: ['Hâl', 'Eril', 'Nötr', 'Dişil', 'Çoğul'],
        rows: [
          ['Yalın', 'синий', 'синее', 'синяя', 'синие'],
          ['Genitif', 'синего', 'синего', 'синей', 'синих'],
          ['Datif', 'синему', 'синему', 'синей', 'синим'],
          ['Belirtme', 'синий / синего', 'синее', 'синюю', 'синие / синих'],
          ['Araçlık', 'синим', 'синим', 'синей', 'синими'],
          ['Bulunma', 'синем', 'синем', 'синей', 'синих'],
        ],
        caption: 'Yumuşak gövde sıfat ekleri — örnek: синий (mavi)',
        boldColumnIndices: [0],
      },
      bullets: [
        'Yumuşak gövdeler sertlerden daha azdır ama sık kullanılan kelimeleri içerir: **синий, русский, хороший, последний, летний**.',
        '**Хороший** yumuşak görünür (-ий) ve yumuşak çekilir — çok yaygın bir başlangıç sıfatı.',
        'Yalın eril **-ий** ile bitiyorsa (-ый/-ой değil), yumuşak tablodan başlayın.',
      ],
    },
    {
      h2: 'Belirtme: canlı vs cansız sıfatlar',
      content:
        'İsimler gibi sıfatlar da eril tekilde ve tüm çoğullarda belirtmede **canlılık kuralını** izler. Dişil ve nötr tekil tek bir belirtme biçimi tutar.',
      table: {
        headers: ['Durum', 'Sıfat biçimi', 'Örnek', 'Türkçe'],
        rows: [
          ['Eril cansız', '= Yalın', 'Я вижу новый дом.', 'Yeni bir ev görüyorum.'],
          ['Eril canlı', '= Genitif', 'Я вижу нового друга.', 'Yeni bir arkadaş görüyorum.'],
          ['Dişil', '-ую / -юю', 'Я вижу новую книгу.', 'Yeni bir kitap görüyorum.'],
          ['Nötr', '= Yalın', 'Я вижу новое окно.', 'Yeni bir pencere görüyorum.'],
          ['Çoğul cansız', '= Yalın', 'Я вижу новые дома.', 'Yeni evler görüyorum.'],
          ['Çoğul canlı', '= Genitif', 'Я вижу новых друзей.', 'Yeni arkadaşlar görüyorum.'],
        ],
        caption: 'Belirtme sıfat ekleri canlılığa bağlıdır',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'İsim ve sıfat **canlılıkta uyuşmalıdır** — isim genitif biçimli belirtme alıyorsa sıfat da alır.',
        'Bu, [belirtme hâli kılavuzumuzda](/learn/articles/russian-accusative-case) öğretilen aynı kuraldır — sıfatlar onu miras alır.',
        'Yeni başlayanlar sıkça ismi doğru çeker ve sıfatı yalın bırakır: *Я вижу новый друга* ✗ → **нового друга** ✓.',
      ],
    },
    {
      h2: '6 hâlin tümünde tam isim + sıfat öbekleri',
      content:
        'Tablolar yararlıdır; tam öbekler sistemi oturtur. İşte birlikte çekilmiş **новый дом** (sert, eril cansız), **новая книга** (sert, dişil) ve **синий карандаш** (yumuşak, eril cansız).',
      table: {
        headers: ['Hâl', 'новый дом', 'новая книга', 'синий карандаш'],
        rows: [
          ['Yalın', 'новый дом', 'новая книга', 'синий карандаш'],
          ['Genitif', 'нового дома', 'новой книги', 'синего карандаша'],
          ['Datif', 'новому дому', 'новой книге', 'синему карандашу'],
          ['Belirtme', 'новый дом', 'новую книгу', 'синий карандаш'],
          ['Araçlık', 'новым домом', 'новой книгой', 'синим карандашом'],
          ['Bulunma', 'о новом доме', 'о новой книге', 'о синем карандаше'],
        ],
        caption: 'Sıfat + isim öbekleri altı hâlin tümünde çekilmiş',
        boldColumnIndices: [0],
      },
      subsections: [
        {
          h3: 'Canlı eril karşıtlığı',
          content:
            'дом yerine **друг** koyun; yalnızca belirtme değişir: **нового друга**, новый друг değil. Genitif zaten böyle görünüyordu — bu yüzden canlı belirtme genitif biçimini «ödünç alır».',
        },
        {
          h3: 'Hâl hâl derinleşmek',
          content:
            'Sıfat ekleri tanıdık gelince her hâl makalesinde çalışın: [yalın](/learn/articles/russian-nominative-case), [genitif](/learn/articles/russian-genitive-case), [datif](/learn/articles/russian-dative-case), [belirtme](/learn/articles/russian-accusative-case), [araçlık](/learn/articles/russian-instrumental-case), [bulunma](/learn/articles/russian-prepositional-case).',
        },
      ],
    },
    {
      h2: 'Kısa biçim sıfatlar (yüklem)',
      content:
        'Rusçanın ikinci bir sıfat sistemi vardır: **kısa biçimler**, esas olarak yüklem olarak kullanılır (atlanmış «olmak»tan sonra). «Hangi X?» yerine «X nasıl?» sorusuna cevap verirler.',
      table: {
        headers: ['Uzun biçim', 'Kısa eril', 'Kısa dişil', 'Kısa nötr', 'Kısa çoğul'],
        rows: [
          ['новый', 'нов', 'нова', 'ново', 'новы'],
          ['красивый', 'красив', 'красива', 'красиво', 'красивы'],
          ['интересный', 'интересен', 'интересна', 'интересно', 'интересны'],
          ['занятый', 'занят', 'занята', 'занято', 'заняты'],
        ],
        caption: 'Uzun biçim vs kısa biçim sıfatlar',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        '**Uzun biçim** hâle göre çekilir ve ismin yanında durur: **новая книга** (yeni bir kitap).',
        '**Kısa biçim** hâle göre **çekilmez** ve genellikle yalnız yüklem olur: **Книга нова.** / modern konuşmada daha doğal **Книга новая.**',
        'Birçok kısa biçim kalıp ifadelerde yaygındır: **Он занят** (Meşgul), **Мне холодно** (Üşüyorum — zarfımsı nötr kısa biçim).',
        'Hâlleri hâlâ öğreniyorsanız önce **uzun biçimleri** önceliklendirin — isim öbeklerinde uyum için onlara ihtiyacınız var.',
      ],
    },
    {
      h2: 'İyelik sıfatları: мой, наш, свой',
      content:
        'İyelikler sıfat gibi davranır: cinsiyet, sayı ve hâlde uyum sağlar. `мой` / `твой` / `свой` bir kalıbı; `наш` / `ваш` başka bir kalıbı paylaşır. `его` / `её` / `их` («onun / onların») **çekimlenmez**.',
      table: {
        headers: ['Hâl', 'мой (eril)', 'моя (dişil)', 'моё (nötr)', 'мои (çoğul)'],
        rows: [
          ['Yalın', 'мой', 'моя', 'моё', 'мои'],
          ['Genitif', 'моего', 'моей', 'моего', 'моих'],
          ['Datif', 'моему', 'моей', 'моему', 'моим'],
          ['Belirtme', 'мой / моего', 'мою', 'моё', 'мои / моих'],
          ['Araçlık', 'моим', 'моей', 'моим', 'моими'],
          ['Bulunma', 'моём', 'моей', 'моём', 'моих'],
        ],
        caption: 'мой çekimi — твой ve свой için model',
        boldColumnIndices: [0],
      },
      bullets: [
        '**Свой** özneye geri döner («kendi»): **Он читает свою книгу** (Kendi kitabını okuyor) vs **его книгу** (başkasının).',
        '**Наш / ваш** yumuşak görünümlü ekleri izler: нашего, нашей, наши…',
        '**Его / её / их** asla değişmez: **о его новой машине** — yalnızca sıfat ve isim çekilir.',
      ],
    },
    {
      h2: 'Rusça sıfatlarda 8 yaygın hata',
      content:
        'Bunlar öğrenenlerin en sık yaptığı hatalardır — her biri tek bir kuralla düzeltilir.',
      bullets: [
        '**İsmi çekerken sıfatı yalın bırakmak**: *в новый доме* ✗ → **в новом доме** ✓.',
        '**Belirtmede canlılığı unutmak**: *Я знаю хороший врача* ✗ → **хорошего врача** ✓.',
        '**Sert ve yumuşak tabloları karıştırmak**: синий **синего** alır, *синого* değil.',
        '**ш/ж/ч/щ/ц sonrasında -ый**: **хороший**, **свежий** yazın (yazım kuralı).',
        '**Его / её / их çekmek**: sabit kalırlar — yalnızca sonraki kelimeleri çekin.',
        '**Свой ile его karıştırmak**: свой = özneye ait; его = daha önce adı geçen başkasına ait.',
        '**Kısa biçimleri hâlle işaretli sanmak**: kısa biçimler hâl eki almaz.',
        '**Nötr uyumu yok saymak**: окно nötrdür → **новое окно**, *новый окно* değil.',
      ],
    },
    {
      h2: 'Sıfat çekimini nasıl çalışmalısınız',
      content:
        'Tabloları bir kez okumak yetmez. Zaman baskısı altında uyumu zorlayan bir döngü kullanın:',
      bullets: [
        'İyi bildiğiniz bir isim seçin ve **sıfat + isim** öbeğini 6 hâlin tümünde sesli çekin.',
        'Cinsiyeti değiştirin (дом → книга → окно) ve aynı sıfatla tekrarlayın.',
        'Canlılık karşıtlığı ekleyin: belirtmede новый стол vs новый друг.',
        'Gerçek cümlelerde [ücretsiz hâl pratik aracı](/practice) ve [hâl ekleri kısa notu](/learn/articles/russian-case-endings-cheatsheet) ile çalışın.',
      ],
    },
  ],
  faq: [
    {
      question: 'Rusça sıfatlar her hâlde değişir mi?',
      answer:
        'Evet. Uzun biçim sıfatlar isimle cinsiyet, sayı ve hâlde uyuşur; bu yüzden ismin hâli değişince ek genellikle değişir. Kısa biçimler istisnadır: yüklem olarak kullanılırlar ve hâle göre çekilmezler.',
    },
    {
      question: 'Sert ve yumuşak sıfat gövdeleri arasındaki fark nedir?',
      answer:
        'Sert gövdeler yalın erilde tipik olarak -ый veya -ой ile biter (новый, большой) ve о/ы/у eklerini kullanır. Yumuşak gövdeler -ий ile biter (синий, летний) ve yerine е/и/ю kullanır. Mantıksal kalıp aynıdır; yalnızca ünlü seti değişir.',
    },
    {
      question: 'Neden новый друга yanlış, нового друга doğru görünür?',
      answer:
        'Çünkü друг canlı erildir. Belirtmede canlı eriller (ve canlı çoğullar) genitif biçimli eki alır — ve sıfat da uymalıdır: нового друга, новый друга değil.',
    },
    {
      question: 'Yeni başlayanlar kısa biçimleri erken mi öğrenmeli?',
      answer:
        'Birkaç yüksek frekanslı kısa biçim öğrenin (занят, рад, должен, ilişkili yüklemler olarak нужно/можно), ama önce uzun biçim çekimini önceliklendirin. Altı hâlin tümünde isim öbekleri için uzun biçimlere ihtiyacınız var.',
    },
    {
      question: 'Мой gibi iyelikler его’dan nasıl farklıdır?',
      answer:
        'Мой, твой, свой, наш ve ваш sıfat gibi çekilir. Его, её ve их asla biçim değiştirmez; yalnızca isim ve çevresindeki diğer sıfatlar çekilir.',
    },
  ],
  conclusionIntro:
    'Sıfat çekimi kâğıt üzerinde büyük görünür, ama küçük bir alışkanlık setine sıkışır:',
  conclusionBullets: [
    'Her zaman **cinsiyet × sayı × hâl** uyumunu sağlayın — sıfat varsayılan olarak yalın kalmaz',
    'Önce **sert tabloyu** ustalaşın, sonra **yumuşak tabloya** eşleyin',
    'Eril ve çoğulda belirtmede **canlılık kuralını** uygulayın',
    'İsim öbeklerinde **uzun biçimleri** kullanın; **kısa biçimleri** yüklem için saklayın',
    '**Мой/твой/свой/наш/ваш** çekin; **его/её/их**’i olduğu gibi bırakın',
  ],
  conclusionOutro:
    'Sıfat + isim çiftleri otomatikleşmeye başladığında her hâlde hızlanmaya hazırsınız. Ücretsiz pratik aracımızda çalışın — ve tablolar otururken [Rusça hâl ekleri kısa notunu](/learn/articles/russian-case-endings-cheatsheet) açık tutun.',
  internalLinks: [
    {
      href: '/learn/articles/russian-case-endings-cheatsheet',
      label: 'Rusça Hâl Ekleri: Nihai Kısa Not',
    },
    {
      href: '/learn/articles/russian-noun-gender-guide',
      label: 'Rusçada İsim Cinsiyeti: Eril, Dişil, Nötr',
    },
    {
      href: '/learn/articles/russian-nominative-case',
      label: 'Rusça Yalın Hâl: Kurallar, Ekler ve Örnekler',
    },
    {
      href: '/learn/articles/russian-accusative-case',
      label: 'Rusça Belirtme Hâli: Canlı vs Cansız',
    },
    {
      href: '/practice',
      label: 'Ücretsiz Rusça Çekim Testi — 6 hâlin tümünü çalışın',
    },
  ],
  ctaText: 'Rusça Hâlleri Çalışın — Ücretsiz →',
  ctaHref: '/practice',
  conclusion: '',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Rusça Sıfat Çekimi: 6 Hâlin Tümü için Ek Tablosu',
    description:
      'Tam Rusça sıfat ekleri tablosu: sert ve yumuşak gövdeler, 6 hâl, canlı belirtme, kısa biçimler ve iyelikler — gerçek örneklerle.',
    datePublished: '2026-09-13',
    dateModified: '2026-09-13',
    author: {
      '@type': 'Person',
      name: 'Nathan',
      url: 'https://russiandeclensions.com/',
      image: 'https://russiandeclensions.com/landing-cases/founder-photo.webp',
      description:
        'Rusça öğrenen anadili Fransızca olan biri; gramer, hâller ve pratik kendi kendine çalışma alışkanlıkları hakkında yazar.',
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
      '@id': 'https://russiandeclensions.com/learn/articles/russian-adjective-declension',
    },
    keywords:
      'rusça sıfat ekleri, rusça sıfat çekimi, rusça sıfat uyumu, sert ve yumuşak sıfat gövdeleri rusça, rusça sıfat hâl tablosu, rusça kısa biçim sıfatlar',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russian-adjective-declension-header.webp',
      width: 1280,
      height: 720,
    },
  },
};
