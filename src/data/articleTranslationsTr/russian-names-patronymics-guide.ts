import type { LearnArticle } from '../learnArticles';

/** `russian-names-patronymics-guide` makalesinin Türkçe çevirisi (İngilizce kaynak: `learnArticles.ts`). */
export const russianNamesPatronymicsGuideTr: LearnArticle = {
  slug: 'russian-names-patronymics-guide',
  introByline: {
    text: '**Nathan tarafından yazıldı** — Rusça öğrenen anadili Fransızca olan biri; gramer, hâller ve günlük pratik için gerçekten işe yarayanları paylaşıyorum.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, Russian Cases with Anna kurucusu',
    imageWidth: 256,
    imageHeight: 256,
  },
  title: 'Rus isimleri açıklandı: ad, baba adı, soyadı (ve hâl değişimleri)',
  metaTitle: 'Rus isimleri ve baba adları açıklandı | Russian Cases with Anna',
  metaDescription:
    'Rus isimlerini anlayın: ad, baba adı (отчество), soyadı ekleri, takma adlar, resmi hitap şekli ve her birinin hâllere göre değişimi.',
  keywords: [
    'rus isimleri rehberi',
    'rus baba adı',
    'отчество anlamı',
    'rus isim çekimi',
    'rus takma adları',
    'ty vs vy rus isimleri',
    'rus soyadı ekleri',
    'rus isimleri nasıl çalışır',
  ],
  h1: 'Rus isimleri açıklandı: ad, baba adı, soyadı (ve hâl değişimleri)',
  heroImage: {
    src: '/articles/russian-names-patronymics-guide-header.webp',
    alt: 'Arka planda Aziz Basil Katedrali ile, elinde Иван Иванович Смирнов yazan bir defterin yanında Rus pasaportu tutan kadın',
    width: 1536,
    height: 1024,
  },
  intro:
    'Bir Rus ismi tek kelime değildir — üç kelimedir: bir **ad** (имя), babanın adından oluşturulan bir **baba adı** (отчество) ve bir **soyadı** (фамилия). Bu kombinasyonu yanlış yaparsanız bir yabancıya kaba ya da bir arkadaşa tuhaf biçimde resmi görünebilirsiniz. Ve isimleri gerçek cümlelerde kullanmaya başladığınızda, her Rusça isim gibi davranırlar: **çekimlenirler**.\n\nBu rehber üç parçalı sistemin nasıl işlediğini, baba adları ve takma adların nasıl oluşturulduğunu, bir kadın veya erkek için hangi soyadı ekinin kullanılacağını ve Иван gibi bir ismin altı hâlin tümünde nasıl değiştiğini gösterir.',
  whatYouLearn: [
    'имя / отчество / фамилия sisteminin nasıl işlediği',
    'Babanın adından baba adı oluşturmak',
    'Popüler Rus adları için yaygın takma adlar',
    'Soyadı ekleri ve neden cinsiyete göre değiştiği',
    'Resmi ad + baba adı yerine ты ne zaman kullanılır',
    'İsimlerin altı Rusça hâlde nasıl çekimlendiği',
  ],
  leadMagnetCta: {
    title: 'İsimler de çekimlenir — sadece sıradan isimler değil',
    description:
      'Иван, hâle göre Ивана, Ивану, Иваном olur. İsimler dahil gerçek çekim kalıplarını Russian Cases with Anna ile çalışın — iOS ve Android’de ücretsiz.',
    ctaText: 'Uygulamayı indirin — Ücretsiz',
    ctaHref: '/',
  },
  tableAccentVariant: 'genitive',
  sections: [
    {
      h2: 'Rus isim sistemi nasıl çalışır',
      content:
        'Resmi belgeler, okul kayıtları ve resmi tanıtmalar üç parça kullanır: **имя** (ad), **отчество** (babanın adından oluşan baba adı) ve **фамилия** (soyadı). Birlikte, tıpkı Türkçedeki tam yasal bir isim gibi bir kişiyi tanımlarlar — sadece ortadaki parça bir „ikinci ad" değildir, babanızdan üretilir.',
      table: {
        headers: ['Parça', 'Rusça terim', 'Örnek (Иван’ın oğlu)'],
        rows: [
          ['Ad', 'имя', 'Пётр'],
          ['Baba adı', 'отчество', 'Иванович'],
          ['Soyadı', 'фамилия', 'Соколов'],
        ],
        caption: 'Tam bir Rus isminin üç parçası',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Baba adı tam anlamıyla „Иван’ın oğlu" veya „Иван’ın kızı" demektir — **Иванович** / **Ивановна**.',
        'Üç parça da pasaportta görünür; sadece ilk ikisi kibar sözlü hitapta kullanılır.',
        'Soyadları ailenizden miras kalır, Türkçedeki gibi — hiçbir ebeveynin adına bağlı değildir.',
      ],
    },
    {
      h2: 'Adlar ve takma adları',
      content:
        'Ruslar sürekli kısa, sevecen formlar kullanır — arkadaşlar, aile ve çocuklarla tam ad bile soğuk gelebilir. Her adın bir veya birkaç standart takma adı vardır.',
      table: {
        headers: ['Tam ad', 'Yaygın takma adlar', 'Cinsiyet'],
        rows: [
          ['Александр', 'Саша, Саня, Шура', 'Erkek'],
          ['Александра', 'Саша, Шура', 'Kadın'],
          ['Дмитрий', 'Дима, Митя', 'Erkek'],
          ['Мария', 'Маша, Маруся', 'Kadın'],
          ['Иван', 'Ваня', 'Erkek'],
          ['Екатерина', 'Катя, Катюша', 'Kadın'],
          ['Николай', 'Коля', 'Erkek'],
          ['Наталья', 'Наташа', 'Kadın'],
          ['Михаил', 'Миша', 'Erkek'],
          ['Елена', 'Лена, Алёна', 'Kadın'],
        ],
        caption: 'Popüler Rus adları ve takma adları',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Takma adlar **informel ты bağlamları** içindir — bir takma adı asla bir baba adıyla birleştirmeyin (“Саша Иванович” olmaz).',
        '**-очка/-енька** gibi ekler eklemek adları daha da sevecen yapar: Машенька, Ванечка.',
        'Bu eklerin arkasındaki cinsiyet kuralları için [isim cinsiyeti rehberine](/learn/articles/russian-noun-gender-guide) bakın.',
      ],
    },
    {
      h2: 'Baba adını (Отчество) oluşturmak',
      content:
        '**Babanın adı** artı cinsiyete bağlı bir ekten oluşur: oğullar için **-ович / -евич**, kızlar için **-овна / -евна**. Yumuşak bir ünsüz veya sesli harfle biten adlar biraz farklı bir ek alır.',
      table: {
        headers: ['Babanın adı', 'Oğulun baba adı', 'Kızın baba adı'],
        rows: [
          ['Иван', 'Иванович', 'Ивановна'],
          ['Сергей', 'Сергеевич', 'Сергеевна'],
          ['Александр', 'Александрович', 'Александровна'],
          ['Дмитрий', 'Дмитриевич', 'Дмитриевна'],
          ['Никита', 'Никитич', 'Никитична'],
          ['Илья', 'Ильич', 'Ильинична'],
        ],
        caption: 'Yaygın baba adı kalıpları',
        boldColumnIndices: [0],
      },
      bullets: [
        'Baba adı adla birlikte kullanılır — çoğu bağlamda tek başına değil, **Иван Иванович**.',
        'Daha yaşlı nesillerde, baba adını **tek başına** kullanmak (örn. birine sadece „Ивановна" demek) tanıdık bir saygı işaretidir, köylerde veya iş yerlerinde yaşlı kadınlar için yaygındır.',
        'Kendi baba adınızı asla siz seçmezsiniz — otomatik olarak babanızın adından gelir.',
      ],
    },
    {
      h2: 'Soyadları ve cinsiyet uyumu',
      content:
        'Türkçe soyadlarının aksine, çoğu Rus soyadı bir erkeğe mi kadına mı ait olduğuna göre biçim değiştirir — çünkü birçok soyadı gramer açısından **sıfattır**.',
      table: {
        headers: ['Erkek soyadı', 'Kadın soyadı', 'Kalıp'],
        rows: [
          ['Иванов', 'Иванова', '-ов / -ова'],
          ['Смирнов', 'Смирнова', '-ов / -ова'],
          ['Достоевский', 'Достоевская', '-ский / -ская'],
          ['Толстой', 'Толстая', '-ой / -ая'],
        ],
        caption: 'Soyadı eklerinin cinsiyetle nasıl değiştiği',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        '**-ский/-ская** ile biten soyadları tam olarak sıfatlar gibi çekimlenir — bkz. [sıfat çekimi rehberi](/learn/articles/russian-adjective-declension).',
        '**-ов/-ев/-ин** ile biten soyadları isimler gibi çekimlenir, birkaç sıfat tipi ekle karışık olarak (belirtme hâli **-ым**).',
        'Bazı soyadları **çekimsizdir**: yabancı kökenli isimler ve **-ко, -их, -ых** ile bitenler (örn. Шевченко, Седых) hiçbir cinsiyet veya hâlde asla değişmez.',
      ],
    },
    {
      h2: 'Resmi ve gayriresmi hitap: Ты, Вы ve isim biçimleri',
      content:
        'Doğru isim biçimini seçmek, gramer kadar ilişkiyle de ilgilidir. Bir takma adı вы ile ya da tam ad+baba adını ты ile karıştırmak Rus kulağına ters gelir.',
      table: {
        headers: ['Bağlam', 'Hitap biçimi', 'Örnek'],
        rows: [
          ['Yabancı, doktor, memur', 'Имя + Отчество + вы', 'Иван Иванович, вы не подскажете...?'],
          ['Yeni meslektaş, öğretmen', 'Имя + Отчество + вы', 'Мария Сергеевна, у меня вопрос.'],
          ['Yakın arkadaş, aile', 'Takma ad + ты', 'Ваня, ты идёшь?'],
          ['Akranına konuşan çocuk', 'Takma ad + ты', 'Саша, пойдём!'],
        ],
        caption: 'Hitap biçimini bağlama göre eşleştirme',
        boldColumnIndices: [1],
      },
      bullets: [
        'Emin değilseniz varsayılan olarak **Имя + Отчество + вы** kullanın — asla kaba değildir, sadece her zaman güvenlidir.',
        'Yabancılar genellikle baba adını atladıkları için affedilir, ama denemek gerçekten takdir edilir.',
        'İş yerleri genç personel için sadece adla hitaba doğru kayıyor — ortamın havasını takip edin.',
      ],
    },
    {
      h2: 'İsimleri hâllere göre çekimlemek',
      content:
        'İsimler isimdir, bu yüzden Rusça bir cümledeki her şey gibi hâl ekleri alırlar. Adlar düzenli isim kalıplarını izler; baba adları ve sıfat tipi soyadları isim ve sıfat eklerini birleştirir.',
      table: {
        headers: ['Hâl', 'Иван (ad)', 'Ивановна (baba adı)', 'Иванов (soyadı)'],
        rows: [
          ['Yalın hâl', 'Иван', 'Ивановна', 'Иванов'],
          ['Tamlayan hâli', 'Ивана', 'Ивановны', 'Иванова'],
          ['Yönelme hâli', 'Ивану', 'Ивановне', 'Иванову'],
          ['Belirtme hâli', 'Ивана', 'Ивановну', 'Иванова'],
          ['Vasıta hâli', 'Иваном', 'Ивановной', 'Ивановым'],
          ['Bulunma hâli', 'об Иване', 'об Ивановне', 'об Иванове'],
        ],
        caption: 'Altı hâlin tümünde çekimlenmiş bir isim',
        boldColumnIndices: [0],
      },
      bullets: [
        '**Я иду к Ивану** ("Ivan’a gidiyorum") к’dan sonraki her isim gibi yönelme hâlini kullanır.',
        '**Я говорю об Ивановне** ("Ivanovna hakkında konuşuyorum") об’dan sonra bulunma hâlini kullanır.',
        'Her hâlin tam kalıbı için [tamlayan hâli](/learn/articles/russian-genitive-case), [yönelme hâli](/learn/articles/russian-dative-case) ve [bulunma hâli](/learn/articles/russian-prepositional-case) rehberlerimize bakın.',
      ],
      subsections: [
        {
          h3: 'Peki Толстой veya Достоевская gibi soyadları?',
          content:
            'Bunlar tam olarak sıfatlar gibi çekimlenir: **Толстого** (tamlayan hâli), **Толстому** (yönelme hâli), **Толстым** (vasıta hâli). Sıfat eklerini zaten biliyorsanız, bu soyadlarını da zaten biliyorsunuz demektir.',
        },
      ],
    },
    {
      h2: 'Rus isimleriyle yaygın hatalar',
      content: 'Birkaç alışkanlık bir yeni başlayanı hemen ele verir — ve düzeltmesi kolaydır.',
      bullets: [
        '**Саша Иванович** ✗ — bir takma adı asla bir baba adıyla eşleştirmeyin; ya **Иван Иванович** ya da sadece **Ваня** kullanın.',
        'Babası Иван olan bir kadın için **Мария Ивановна** ✓ — ama cinsiyeti kontrol edin: **Илья** adlı bir baba „Ильевна" değil **Ильинична** verir.',
        '**Достоевский** gibi soyadlarının cinsiyette uyuşması gerektiğini unutmak: bir kadın asla „Достоевский" değil, **Достоевская**’dır.',
        'Bir takma adla вы kullanmak ("Ваня, вы...") — tek bir kayıt seçin: ya tam ad + вы, ya da takma ad + ты.',
      ],
    },
  ],
  faq: [
    {
      question: 'Rus baba adı (отчество) nedir?',
      answer:
        'Babanızın adından oluşturulan ve resmi bir Rus isminin orta parçası olarak kullanılan bir isimdir. Oğullar -ович/-евич alır (örn. Иванович); kızlar -овна/-евна alır (örn. Ивановна).',
    },
    {
      question: 'Birinin baba adını kullanmam gerekir mi?',
      answer:
        'Resmi, profesyonel veya ilk tanışma bağlamlarında evet — вы ile ad + baba adı kullanın. Arkadaşlar ve ailede, ты ile takma ad normaldir ve baba adları tamamen bırakılır.',
    },
    {
      question: 'Rus soyadları erkek ve kadın arasında neden değişir?',
      answer:
        'Birçok Rus soyadı gramer açısından sıfat veya sıfat tipi isimdir, bu yüzden cinsiyette uyuşurlar: Иванов (o - erkek) / Иванова (o - kadın), Достоевский (o - erkek) / Достоевская (o - kadın).',
    },
    {
      question: 'Rus adları hâle göre çekimlenir mi?',
      answer:
        'Evet. Adlar düzenli isim çekimini izler: Иван → Ивана (tamlayan/belirtme hâli), Ивану (yönelme hâli), Иваном (vasıta hâli), об Иване (bulunma hâli).',
    },
    {
      question: 'Bir yabancıyla takma ad kullanmak kaba mı?',
      answer:
        'Evet, aşırı samimi gelebilir. Karşı taraf daha informel bir kayıt davet edene kadar varsayılan olarak ad + baba adı + вы kullanın.',
    },
  ],
  conclusionIntro:
    'Üç parça, iki cinsiyet, altı hâl — ama bir avuç kalıp karşılaşacağınız hemen hemen herkesi kapsar.',
  conclusionBullets: [
    'Yabancılarla ve resmi ortamlarda **имя + отчество + вы** kullanın',
    'Arkadaşlar ve aileyle **takma ad + ты**’ya geçin',
    '**Soyadı eklerini** cinsiyete uydurun: -ов/-ова, -ский/-ская',
    'İsimlerin diğer her Rusça isim gibi **çekimlendiğini** unutmayın',
    'Emin değilseniz, resmi biçim her zaman güvenli seçimdir',
  ],
  conclusionOutro:
    'Bu biçimler doğal geldiğinde, arkalarındaki hâl eklerini [tamlayan hâli](/learn/articles/russian-genitive-case) ve [yönelme hâli](/learn/articles/russian-dative-case) rehberlerimizle pekiştirin ve çekim kalıplarını ücretsiz [pratik aracında](/practice) çalışın.',
  internalLinks: [
    {
      href: '/learn/articles/russian-adjective-declension',
      label: 'Rusça Sıfat Çekimi Rehberi',
    },
    {
      href: '/learn/articles/russian-genitive-case',
      label: 'Rusça Tamlayan Hâli Rehberi',
    },
    {
      href: '/learn/articles/russian-dative-case',
      label: 'Rusça Yönelme Hâli Rehberi',
    },
    {
      href: '/learn/articles/russian-noun-gender-guide',
      label: 'Rusça İsim Cinsiyeti Rehberi',
    },
    {
      href: '/learn/articles/russian-greetings-guide',
      label: 'Rusça Selamlaşma Rehberi',
    },
    { href: '/practice', label: 'Ücretsiz Rusça Çekim Testi' },
  ],
  ctaText: 'Rusça Hâlleri Pratik Edin — Ücretsiz →',
  ctaHref: '/practice',
  conclusion: '',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Rus isimleri açıklandı: ad, baba adı, soyadı (ve hâl değişimleri)',
    description:
      'Rus isimlerini anlayın: ad, baba adı (отчество), soyadı ekleri, takma adlar, resmi hitap şekli ve her birinin hâllere göre değişimi.',
    datePublished: '2026-09-14',
    dateModified: '2026-09-14',
    author: {
      '@type': 'Person',
      name: 'Nathan',
      url: 'https://russiandeclensions.com/',
      image: 'https://russiandeclensions.com/landing-cases/founder-photo.webp',
      description: 'Rusça öğrenen anadili Fransızca olan biri; gramer, hâller ve pratik öz öğrenme alışkanlıkları hakkında yazıyor.',
      worksFor: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://russiandeclensions.com/learn/articles/russian-names-patronymics-guide',
    },
    keywords:
      'rus isimleri rehberi, rus baba adı, отчество anlamı, rus isim çekimi, rus takma adları',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russian-names-patronymics-guide-header.webp',
      width: 1536,
      height: 1024,
    },
  },
};
