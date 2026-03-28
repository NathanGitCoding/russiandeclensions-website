import type { LearnArticle } from '../learnArticles';

/** Türkçe çeviri: `russian-prepositions-cases-cheat-sheet` (EN kaynak: `learnArticles.ts`). Örneklerdeki Kiril EN ile aynı. */
export const russianPrepositionsCasesCheatSheetTr: LearnArticle = {
  slug: 'russian-prepositions-cases-cheat-sheet',
  title:
    'Rus edatları ve haller kopya kağıdı: her edattan sonra hangi hal',
  metaTitle:
    'Rus edatları ve haller kopya kağıdı — Hangi hal kullanılır? | Russian Cases with Anna',
  metaDescription:
    'Ücretsiz kopya kağıdı: her Rus edatından sonra hangi hal gelir. в + belirtme vs. bulunma, на, с, о, за, под, над ve daha fazlası. Örnekli net tablo. Sayfayı yer imlerine ekleyin.',
  keywords: [
    'Rus edatları ve haller',
    'в sonrası hangi hal',
    'Rus edatı kopya kağıdı',
    'в belirtme veya bulunma',
    'Rus edatları tablosu',
    'edatlardan sonra Rus halleri',
    'на belirtme veya bulunma',
    'с genitif veya enstrümantal',
  ],
  h1: 'Rus edatları ve haller kopya kağıdı: her edattan sonra hangi hal',
  intro:
    'Rus dilbilgisinin en kafa karıştırıcı kısımlarından biri, **her edattan sonra hangi halin kullanılacağını** bilmektir. Aynı edat anlama göre farklı haller isteyebilir — « в школу » (belirtme, yön) ile « в школе » (bulunma, yer) — ve yanlış yapmak cümlenizi baştan değiştirir.\n\nBu kopya kağıdı **tüm önemli Rus edatlarını** gerektirdikleri hallerle, net örneklerle ve ezber ipuçlarıyla toplar. Sayfayı yer imlerine ekleyin — sık sık döneceksiniz.',
  whatYouLearn: [
    'Her büyük Rus edatının hangi hali gerektirdiği',
    'Anlama göre hal değiştiren edatlar (в, на, за, под, с)',
    'Örnek cümlelerle en yaygın 10 edat',
    'Edatlardan sonra halleri bir daha karıştırmamanız için ipuçları',
  ],
  sections: [
    {
      h2: 'Altın kural: edatlar hali belirler',
      content:
        'Rusçada **edatlar hali yönetir** — izleyen ismi belirli bir gramer haline zorlarlar. İngilizcede edatların ismin önünde durmasından (« in the house », « to the school ») farklı olarak Rus edatları ismin son ekini aktif biçimde değiştirir.\n\nBazı edatlar her zaman aynı hali ister. Diğerleri — zor olanlar — **yön (hareket) mu yoksa yer (sabit) mu kastettiğinize göre farklı haller** ister. Bu yön–yer ayrımı öğrencilerde en sık hal hatası kaynağıdır.',
    },
    {
      h2: 'Ana tablo: hale göre her edat',
      content:
        'İşte eksiksiz referans. ★ ile işaretli edatlar birden fazla hal alabilir (aşağıda ayrıntılı).',
      table: {
        headers: ['Hal', 'Edatlar', 'Anlam / kullanım'],
        rows: [
          [
            'Genitif',
            'без, для, до, из, от, у, после, около, вокруг, кроме, вместо, из-за, из-под',
            '…sız / olmadan, için, kadar / önce, -den (içeriden), -den (kaynak) / uzakta, yanında / yakınında, sonra, çevresinde, hariç, yerine, yüzünden, altından',
          ],
          [
            'Datif',
            'к, по, благодаря, вопреки, навстречу, согласно',
            'Doğru, boyunca / göre, sayesinde, rağmen, karşılamaya, göre',
          ],
          [
            'Belirtme',
            'через, про, сквозь',
            'Karşıdan karşıya / içinden, hakkında, içinden (delikten)',
          ],
          [
            'Belirtme ★',
            'в (yön), на (yön), за (yön), под (yön)',
            'İçine, üzerine, arkasına / ötesine, altına (hareket)',
          ],
          [
            'Enstrümantal',
            'с, между, над, перед, за ★, под ★',
            'Birlikte, arasında, üzerinde, önünde, arkasında (yer), altında (yer)',
          ],
          [
            'Bulunma',
            'о (об, обо), при',
            'Hakkında, sırasında / huzurunda',
          ],
          [
            'Bulunma ★',
            'в (yer), на (yer)',
            'İçinde (sabit), üzerinde / -de (sabit)',
          ],
        ],
        caption: 'Rus edat–hal tam referans tablosu',
        boldColumnIndices: [0],
      },
    },
    {
      h2: 'Zor olanlar: hali değişen edatlar',
      content:
        'Bu 5 edat, hal kafa karışıklığının büyük kısmından sorumludur. Bunları öğrenin, çoğu edat hatasını elersiniz.',
      subsections: [
        {
          h3: 'в — « içinde » / « içine »',
          content:
            '**в + belirtme** = yön (bir şeyin İÇİNE hareket)\n**в + bulunma** = yer (bir şeyin İÇİNDE olmak)\n\nBu, Rusçada en önemli edat ayrımıdır. Kendinize sorun: **oraya mı gidiyorum yoksa zaten orada mıyım?**',
          bullets: [
            '**в школу** (belirtme) — okula (okula gidiyorum)',
            '**в школе** (bulunma) — okulda (okuldayım)',
            '**в город** (belirtme) — şehre (yöneliyorum)',
            '**в городе** (bulunma) — şehirde (zaten oradayım)',
            '**в Россию** (belirtme) — Rusya’ya (seyahat)',
            '**в России** (bulunma) — Rusya’da (bulunmak)',
          ],
        },
        {
          h3: 'на — « üzerinde » / « üzerine »',
          content:
            '**на + belirtme** = yön (bir şeyin ÜZERİNE hareket)\n**на + bulunma** = yer (bir şeyin ÜZERİNDE olmak)\n\n« в » ile aynı mantık — yön vs. yer. Not: « на » İngilizce konuşanın beklemediği yerler için de kullanılır (на работе = işte, на вокзале = istasyonda).',
          bullets: [
            '**на стол** (belirtme) — masanın üzerine (bir şey koymak)',
            '**на столе** (bulunma) — masanın üzerinde (orada duruyor)',
            '**на работу** (belirtme) — işe (gidiyorum)',
            '**на работе** (bulunma) — işte (zaten oradayım)',
            '**на урок** (belirtme) — derse',
            '**на уроке** (bulunma) — derste / ders sırasında',
          ],
        },
        {
          h3: 'за — « arkasında » / « için » / « ötesinde »',
          content:
            '**за + belirtme** = yön (arkasına / ötesine hareket) VEYA « için » (karşılığında, lehinde)\n**за + enstrümantal** = yer (arkasında, sabit)\n\nOrta seviyede bile zorlar çünkü « за » çok anlam taşır.',
          bullets: [
            '**за дом** (belirtme) — evin arkasına (arkaya gidiyorum)',
            '**за домом** (enstrümantal) — evin arkasında (orada)',
            '**за хлебом** (enstrümantal) — ekmek için (ekmek almaya)',
            '**Спасибо за помощь** (belirtme) — Yardımın için teşekkürler',
            '**Я за тебя** (belirtme) — Senin yanındayım (seni destekliyorum)',
          ],
        },
        {
          h3: 'под — « altında »',
          content:
            '**под + belirtme** = yön (bir şeyin altına hareket)\n**под + enstrümantal** = yer (altında, sabit)',
          bullets: [
            '**под стол** (belirtme) — masanın altına (kedi koştu)',
            '**под столом** (enstrümantal) — masanın altında (kedi oturuyor)',
            '**под дождём** (enstrümantal) — yağmurda (içinde durmak)',
            '**под дождь** (belirtme) — yağmura (dışarı çıkmak)',
          ],
        },
        {
          h3: 'с — « ile » / « -den (aşağı) »',
          content:
            '**с + enstrümantal** = ile (eşlik)\n**с + genitif** = -den (üzerinden, aşağıdan)\n\nBu iki anlam tamamen farklıdır; hal farkı hangi anlamın kastedildiğini anlamanıza yardım eder.',
          bullets: [
            '**с другом** (enstrümantal) — arkadaşla',
            '**с молоком** (enstrümantal) — sütle',
            '**с горы** (genitif) — dağdan',
            '**с работы** (genitif) — işten (geliyorum)',
            '**с утра** (genitif) — sabahtan beri',
          ],
        },
      ],
    },
    {
      h2: 'En yaygın 10 edat (örneklerle)',
      content:
        'Bu 10 edat Rusçada edat kullanımının kabaca %80’ini oluşturur. Sadece bunları ezberseniz çoğu durumu karşılarsınız:',
      table: {
        headers: ['#', 'Edat', 'Hal(ler)', 'Örnek', 'Çeviri'],
        rows: [
          [
            '1',
            'в',
            'Bel. / bul.',
            'Я иду **в магазин**. Я **в магазине**.',
            'Markete gidiyorum. Marketteyim.',
          ],
          [
            '2',
            'на',
            'Bel. / bul.',
            'Иди **на кухню**. Я **на кухне**.',
            'Mutfağa git. Mutfaktayım.',
          ],
          [
            '3',
            'с',
            'Enst. / gen.',
            'Кофе **с молоком**. Пришёл **с работы**.',
            'Sütlü kahve. İşten geldi.',
          ],
          [
            '4',
            'к',
            'Dat.',
            'Иду **к врачу**.',
            'Doktora gidiyorum.',
          ],
          [
            '5',
            'из',
            'Gen.',
            'Вышел **из дома**.',
            'Evden çıktı.',
          ],
          [
            '6',
            'о (об)',
            'Bul.',
            'Думаю **о тебе**.',
            'Seni düşünüyorum.',
          ],
          [
            '7',
            'для',
            'Gen.',
            'Подарок **для мамы**.',
            'Anne için hediye.',
          ],
          [
            '8',
            'от',
            'Gen.',
            'Письмо **от друга**.',
            'Arkadaştan mektup.',
          ],
          [
            '9',
            'за',
            'Bel. / enst.',
            'Спасибо **за помощь**. Сижу **за столом**.',
            'Yardım için teşekkürler. Masada oturuyorum.',
          ],
          [
            '10',
            'по',
            'Dat.',
            'Гуляю **по парку**.',
            'Parkta geziyorum.',
          ],
        ],
        caption: 'En yaygın 10 Rus edatı: haller ve örnekler',
        boldColumnIndices: [1],
      },
    },
    {
      h2: 'Genitif edatları — en büyük grup',
      content:
        'Genitif en çok edata sahip haldır — köken, sahiplik, yokluk ve seyir ifade ettiği için mantıklı. Önemlileri:',
      table: {
        headers: ['Edat', 'Anlam', 'Örnek', 'Çeviri'],
        rows: [
          ['без', '… olmadan', 'без **сахара**', 'şekersiz'],
          ['для', 'için (amaç)', 'для **студентов**', 'öğrenciler için'],
          ['до', 'kadar, önce, en fazla', 'до **утра**', 'sabaha kadar'],
          ['из', '-den (içeriden)', 'из **России**', 'Rusya’dan'],
          ['от', '-den (kişi/kaynak)', 'от **врача**', 'doktordan'],
          ['у', 'yanında, yakınında, -de var', 'у **меня**', 'bende var'],
          ['после', 'sonra', 'после **обеда**', 'öğle yemeğinden sonra'],
          ['около', 'yakınında, yaklaşık', 'около **дома**', 'evin yakınında'],
          ['вокруг', 'etrafında', 'вокруг **города**', 'şehrin etrafında'],
          ['кроме', 'hariç, ayrıca', 'кроме **меня**', 'ben hariç'],
          ['вместо', 'yerine', 'вместо **воды**', 'su yerine'],
          ['из-за', 'yüzünden, arkasından', 'из-за **дождя**', 'yağmur yüzünden'],
          ['из-под', 'altından', 'из-под **стола**', 'masanın altından'],
        ],
        caption: 'Genitif edatları örneklerle',
        boldColumnIndices: [0],
        accentColumnIndices: [0],
      },
    },
    {
      h2: 'Datif edatları',
      content:
        'Datifte daha az edat var ama çok sık kullanılırlar:',
      table: {
        headers: ['Edat', 'Anlam', 'Örnek', 'Çeviri'],
        rows: [
          ['к', 'doğru, -e (kişi)', 'к **другу**', 'arkadaşa (doğru)'],
          ['по', 'boyunca, göre', 'по **улице**', 'sokak boyunca'],
          ['благодаря', 'sayesinde', 'благодаря **учителю**', 'öğretmen sayesinde'],
          ['вопреки', 'rağmen', 'вопреки **правилам**', 'kurallara rağmen'],
          ['навстречу', 'karşılamaya', 'навстречу **мне**', 'bana doğru'],
          ['согласно', 'göre', 'согласно **закону**', 'yasaya göre'],
        ],
        caption: 'Datif edatları örneklerle',
        boldColumnIndices: [0],
        accentColumnIndices: [0],
      },
    },
    {
      h2: 'Enstrümantal edatları',
      content:
        'Enstrümantal eşlik, arkada/altında/üstünde yer ve bir işin yapıldığı aracı gösterir:',
      table: {
        headers: ['Edat', 'Anlam', 'Örnek', 'Çeviri'],
        rows: [
          ['с', 'ile', 'с **друзьями**', 'arkadaşlarla'],
          ['между', 'arasında', 'между **нами**', 'aralarımızda'],
          ['над', 'üzerinde', 'над **городом**', 'şehrin üzerinde'],
          ['перед', 'önünde, önce', 'перед **домом**', 'evin önünde'],
          ['за', 'arkasında (yer)', 'за **дверью**', 'kapının arkasında'],
          ['под', 'altında (yer)', 'под **деревом**', 'ağacın altında'],
        ],
        caption: 'Enstrümantal edatları örneklerle',
        boldColumnIndices: [0],
        accentColumnIndices: [0],
      },
    },
    {
      h2: 'Bulunma hali edatları',
      content:
        'Adına rağmen bulunma halinin özel edatları en azdır. Çoğunlukla в/на (yer) ve о (hakkında) ile kullanılır:',
      table: {
        headers: ['Edat', 'Anlam', 'Örnek', 'Çeviri'],
        rows: [
          ['в', 'içinde (yer)', 'в **доме**', 'evde'],
          ['на', 'üzerinde, -de (yer)', 'на **столе**', 'masanın üzerinde'],
          ['о (об, обо)', 'hakkında', 'о **России**', 'Rusya hakkında'],
          ['при', 'sırasında, huzurunda', 'при **Петре I**', 'I. Petro döneminde'],
        ],
        caption: 'Bulunma hali edatları örneklerle',
        boldColumnIndices: [0],
        accentColumnIndices: [0],
      },
    },
    {
      h2: 'Hafıza ipuçları: hangi hal',
      content:
        'Edat–hal eşleşmelerini hatırlamaya yardımcı kanıtlanmış kısayollar:',
      bullets: [
        '**Yön = belirtme, yer = bulunma / enstrümantal.** Bir yere gidiyorsanız (в/на + hareket) belirtme. Zaten oradaysanız bulunma (в/на) veya enstrümantal (за/под).',
        '**« İle » = enstrümantal.** Enstrümantal kelimenin anlamı « vasıtasıyla » — eşlik veya araç « ile » her zaman enstrümantal: с другом, с ножом.',
        '**« -Den (kaynak) » = genitif.** Köken, kaynak, uzaklaşma — « -den » veya « olmadan » genitif alır: из России, от друга, с горы, без воды.',
        '**« Birine doğru » = datif.** Birinin yanına gitmek veya birine vermek: к другу, по улице.',
        '**« Hakkında » = bulunma.** Bir şey hakkında konuşmak veya düşünmek: о книге, о России.',
        '**Çiftlerle çalışın.** Yön/yer çiftlerini birlikte öğrenin: в школу / в школе, на работу / на работе, за дом / за домом. Çift her iki hali birden pekiştirir.',
      ],
    },
    {
      h2: 'Kaçınılması gereken yaygın hatalar',
      content:
        'Öğrencilerde en sık gördüğümüz edat–hal hataları:',
      mistakeCards: [
        {
          title: 'yer için в + yanlış hal',
          wrong: 'Я живу в Москва.',
          correct: 'Я живу в Москве.',
          why: '« В » yer anlamında bulunma hali ister. Москва → Москве.',
          fix: 'Kendinize sorun: hareket mi ediyorum sabit miyim? Sabit = bulunma.',
          fixHref: '/practice/prepositional',
        },
        {
          title: '« ile » anlamında с için enstrümantal yerine genitif',
          wrong: 'Я пошёл с друга.',
          correct: 'Я пошёл с другом.',
          why: '« С » « ile » anlamında enstrümantal alır. « -Den » anlamında genitif (с горы). Burada « arkadaşla ».',
          fix: '« С » yerine « birlikte » koyabiliyorsanız enstrümantal kullanın.',
          fixHref: '/practice/instrumental',
        },
        {
          title: 'к + yanlış hal',
          wrong: 'Я иду к друг.',
          correct: 'Я иду к другу.',
          why: '« К » her zaman datif ister. друг → другу.',
          fix: 'к = her zaman datif. İstisna yok.',
          fixHref: '/practice/dative',
        },
        {
          title: 'из ile от karıştırmak',
          wrong: 'Я получил письмо из друга.',
          correct: 'Я получил письмо от друга.',
          why: '« Из » içeriden (из дома = evden). « От » kişi veya kaynaktan. Mektup kişiden gelir → от.',
          fix: 'из = bir yerin içinden. от = kişi/kaynak.',
        },
        {
          title: 'yer için на + belirtme',
          wrong: 'Книга лежит на стол.',
          correct: 'Книга лежит на столе.',
          why: 'Kitap (sabit) masanın üzerinde yatıyor → на + bulunma. « На стол » (belirtme) hareket « masanın üzerine » olurdu.',
          fix: 'Sabit fiiller (лежать, стоять, сидеть) → bulunma. Hareket fiilleri (идти, ставить, класть) → belirtme.',
          fixHref: '/practice/prepositional',
        },
      ],
    },
    {
      h2: 'Hızlı referans: edat → hal bir bakışta',
      content:
        'Yazdırın veya telefona kaydedin — herhangi bir edata en hızlı bakış:',
      table: {
        headers: ['Edat', 'Hal', 'Kısa anlam'],
        rows: [
          ['без', 'Gen.', '… olmadan'],
          ['благодаря', 'Dat.', 'sayesinde'],
          ['в', 'Bel. → / bul. ●', 'içine → / içinde ●'],
          ['вместо', 'Gen.', 'yerine'],
          ['вокруг', 'Gen.', 'etrafında'],
          ['вопреки', 'Dat.', 'rağmen'],
          ['для', 'Gen.', 'için (amaç)'],
          ['до', 'Gen.', 'kadar, önce'],
          ['за', 'Bel. → / enst. ●', 'arkasına → / arkasında ● / için'],
          ['из', 'Gen.', '-den (içeriden)'],
          ['из-за', 'Gen.', 'yüzünden'],
          ['из-под', 'Gen.', 'altından'],
          ['к', 'Dat.', 'doğru, -e'],
          ['кроме', 'Gen.', 'hariç'],
          ['между', 'Enst.', 'arasında'],
          ['на', 'Bel. → / bul. ●', 'üzerine → / üzerinde ●'],
          ['над', 'Enst.', 'üzerinde'],
          ['навстречу', 'Dat.', 'karşılamaya'],
          ['о (об)', 'Bul.', 'hakkında'],
          ['около', 'Gen.', 'yakınında'],
          ['от', 'Gen.', '-den (kişi/kaynak)'],
          ['перед', 'Enst.', 'önünde'],
          ['по', 'Dat.', 'boyunca, göre'],
          ['под', 'Bel. → / enst. ●', 'altına → / altında ●'],
          ['после', 'Gen.', 'sonra'],
          ['при', 'Bul.', 'sırasında, -de'],
          ['про', 'Bel.', 'hakkında (konuşma dili)'],
          ['с', 'Enst. / gen.', 'ile / -den (aşağı)'],
          ['согласно', 'Dat.', 'göre'],
          ['у', 'Gen.', 'yanında, var'],
          ['через', 'Bel.', 'içinden, karşıya'],
        ],
        caption: '→ = yön/hareket, ● = yer/sabit',
        boldColumnIndices: [0],
      },
    },
    {
      h2: 'Sonuç: pratik kalıcı yapar',
      content:
        'Hangi edattan sonra hangi halin geldiğini bilmek Rus dilbilgisinin **yarısıdır**. Diğer yarısı, doğru isim sonunu **düşünmeden** üretebilmektir.\n\nBu kopya kağıdı kuralları verir. Şimdi tekrar gerekir. **Ücretsiz çekim quiz** ile her hali ayrı çalışın; sonlar doğal gelene kadar. En sık edatlarla birlikte kullanılan belirtme ve bulunmayla başlayın; sonra genitif, datif ve enstrümantal ekleyin.\n\nSayfayı yer imlerine ekleyin; edattan emin olmadığınızda dönün. Zamanla daha az ihtiyaç duyarsınız — o zaman haller gerçekten oturmuş demektir.',
    },
  ],
  conclusion: '',
  ctaText: 'Çekimleri pratik et — ücretsiz quiz',
  ctaHref: '/practice',
  faq: [
    {
      question: 'в’den sonra hangi Rus hali kullanılır?',
      answer:
        'Anlama bağlı. « В » + belirtme yön/hareket (в школу = okula). « В » + bulunma yer (в школе = okulda). Kendinize sorun: oraya mı gidiyorum yoksa zaten orada mıyım?',
    },
    {
      question: 'Rusçada kaç edat var?',
      answer:
        'Yaklaşık 30 yaygın edat. Kabaca 10’u (в, на, с, к, из, о, для, от, за, по) kullanımın %80’ini oluşturur. Bunları bilmek çoğu durumu karşılar.',
    },
    {
      question: 'Rusçada en çok edat hangi halde?',
      answer:
        'Genitif — без, для, до, из, от, у, после, около, вокруг, кроме, вместо, из-за, из-под dahil ondan fazla. Köken, yokluk ve sahiplik ifade ettiği için mantıklı.',
    },
    {
      question: 'Rusçada из ile ot arasındaki fark nedir?',
      answer:
        'İkisi de « -den » ama farklı. « Из » bir yerin içinden (из дома = evden, из России = Rusya’dan). « От » kişi veya kaynak (от друга = arkadaştan, от врача = doktordan). İkisi de genitif alır.',
    },
    {
      question: 'Bir edatın belirtme mi bulunma mı istediğini nasıl anlarım?',
      answer:
        'İkisini de alan edatlar için (в, на): yön/hareket → belirtme (в школу, на работу), yer/sabit → bulunma (в школе, на работе). за ve под için: hareket → belirtme, yer → enstrümantal (за столом, под деревом).',
    },
  ],
  leadMagnetCta: {
    title: 'Hal sonlarını otomatikleşene kadar tekrarlayın',
    description:
      'Bir edatın hangi hali gerektirdiğini bilmek birinci adım. İkinci adım doğru isim sonunu anında üretmek. 400’den fazla kelimeyle 6 halin hepsini çalışın — ücretsiz, kayıt yok.',
    ctaText: 'Ücretsiz quize başla →',
    ctaHref: '/practice',
  },
  internalLinks: [
    { href: '/practice', label: 'Ücretsiz Rus çekim quiz’i' },
    { href: '/practice/accusative', label: 'Belirtme halini pratik et' },
    { href: '/practice/genitive', label: 'Genitifi pratik et' },
    { href: '/practice/dative', label: 'Datifi pratik et' },
    { href: '/practice/instrumental', label: 'Enstrümantali pratik et' },
    { href: '/practice/prepositional', label: 'Bulunmayı pratik et' },
    {
      href: '/learn/articles/russian-cases-explained-beginners-guide',
      label: 'Rus halleri açıklanıyor: başlangıç rehberi',
    },
    {
      href: '/learn/articles/top-10-russian-case-mistakes',
      label: 'En yaygın 10 Rus hal hatası',
    },
    { href: '/words', label: '400+ çekim tablosuna göz at' },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      'Rus edatları ve haller kopya kağıdı: her edattan sonra hangi hal',
    description:
      'Tam kopya kağıdı: her Rus edatından sonra hangi hal. Tablolar, örnekler, ipuçları ve yaygın hatalar.',
    datePublished: '2026-03-22',
    dateModified: '2026-03-22',
    author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id':
        'https://russiandeclensions.com/learn/articles/russian-prepositions-cases-cheat-sheet',
    },
    keywords:
      'Rus edatları ve haller, в sonrası hangi hal, Rus edatı kopya kağıdı, edatlardan sonra Rus halleri',
  },
};
