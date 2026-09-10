import type { LearnArticle } from '../learnArticles';

/** `russian-noun-gender-guide` makalesinin Türkçe çevirisi (İngilizce kaynak: `learnArticles.ts`). */
export const russianNounGenderGuideTr: LearnArticle = {
  slug: 'russian-noun-gender-guide',
  title: 'Rusçada İsim Cinsiyeti: Eril, Dişil, Nötr (Tam Kılavuz)',
  metaTitle:
    'Rusçada İsim Cinsiyeti: Eril, Dişil, Nötr Açıklaması | Russian Cases with Anna',
  metaDescription:
    'Rusça isimlerin cinsiyetini son ekten nasıl anlayacağınızı, herkesi şaşırtan -ь ile biten kelimeleri, istisnaları (кофе, папа) ve cinsiyetin sıfatları, fiilleri ve hâlleri nasıl belirlediğini öğrenin.',
  keywords: [
    'rusça isim cinsiyeti',
    'rusçada eril dişil nötr',
    'rusça isim cinsiyeti nasıl anlaşılır',
    'rusça gramatik cinsiyet',
    'rusça son ekler cinsiyet kuralları',
    'rusça yumuşatma işareti cinsiyet',
    'rusça cinsiyet istisnaları',
    'rusça sıfat uyumu',
    'кофе eril mi nötr mü',
    'rusça cinsiyet kılavuzu',
  ],
  h1: 'Rusçada İsim Cinsiyeti: Eril, Dişil, Nötr (Tam Kılavuz)',
  heroImage: {
    src: '/articles/russian-noun-gender-chalkboard.webp',
    alt: 'Rusça isimleri eril, dişil ve nötr sütunlara ayıran bir yazı tahtası',
    width: 1536,
    height: 1024,
  },
  intro:
    'Her Rusça isim üç cinsiyetten birine aittir — eril, dişil ya da nötr — ve bu tek etiket, çevresindeki cümlede neredeyse her şeyi sessizce kontrol eder. Yanlış cinsiyeti seçtiğinizde, sıfat, iyelik zamiri, geçmiş zaman fiili ve nihayetinde ardından gelen hâl eki bile yanlış çıkabilir, isim mükemmel bilinse bile.\n\nİyi haber şu ki Rusça cinsiyet **rastgele değildir**. **İsimlerin yaklaşık %90\'ı cinsiyetini yalnızca son harfiyle ortaya koyar** — kalıbı öğrendiğinizde hızlı ve güvenilir bir kısayol. Kötü haber ise geri kalan %10: yumuşatma işareti **-ь** ile biten isimler görsel bir ipucu olmadan eril ya da dişil olabilir, ve bir avuç günlük kelime (папа, кофе) anlam kazandığı için yazım kuralını basitçe göz ardı eder.\n\nBu kılavuz size çoğu ismi kapsayan son ek kuralını, -ь tuzağını ve onu ehlileştiren ipucunu, ezberlenmeye değer istisnaları ve cinsiyetin sıfatlara, geçmiş zaman fiillerine ve altı hâl sistemine tam olarak nasıl yayıldığını verir.',
  introByline: {
    text: '**Nathan tarafından yazıldı** — Rusça öğrenen anadili Fransızca olan biri; gramer, hâller ve günlük pratik için gerçekten işe yarayanları paylaşıyorum.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, Russian Cases with Anna kurucusu',
    imageWidth: 256,
    imageHeight: 256,
  },
  whatYouLearn: [
    'Rusça isimlerin yaklaşık **%90\'ının** cinsiyetini tahmin eden üçlü son ek kuralı',
    '**-ь** ile biten isimlerin neden en büyük cinsiyet tuzağı olduğu — ve yardımcı olan **-ость** kısayolu',
    'Doğal cinsiyetin yazımı yendiği istisnalar (**папа**, **дедушка**) ve alıntı kelimelerin varsayılan olarak nötr olduğu durumlar (**кино**, **пальто**)',
    'Cinsiyetin **sıfat eklerini**, **iyelik zamirlerini** ve **geçmiş zaman fiillerini** nasıl kontrol ettiği',
    'Cinsiyetin **Rusça hâl eklerini** öğrenmenin gerçek başlangıç noktası olma nedeni',
  ],
  leadMagnetCta: {
    title: 'Cinsiyetin ötesinde Rusça hâlleri öğrenin — ücretsiz uygulama',
    description:
      'Cinsiyet sadece ilk katman — her isim daha sonra bu cinsiyete göre altı hâl boyunca farklı şekilde çekimlenir. Russian Cases with Anna, her hâli otomatik hâle getirmek için yapılandırılmış dersler ve akıllı testler sunar — iOS ve Android\'de ücretsiz.',
    ctaText: 'Uygulamayı indirin — Ücretsiz',
    ctaHref: '/',
  },
  sections: [
    {
      h2: 'Rusça İsim Cinsiyeti Neden Önemli (Sadece Bir Etiket Değil)',
      content:
        'Türkçede gramatik cinsiyet yoktur, bu yüzden Rusçadaki bu kavram başlangıçta yabancı gelebilir. Rusçada cinsiyet **yapısaldır**: ismi tanımlayan her sıfatın son ekini, "benim" gibi iyelik zamirlerinin biçimini, bu isim özne olduğunda geçmiş zaman fiilinin son ekini ve — daha sonra — ismin gramatik hayatının geri kalanında izleyeceği altı hâl ekinden hangi setin kullanılacağını belirler.\n\nİsmin cinsiyeti değiştiği için başka her yönden aynı olan üç cümle boyunca ne kadar çok şeyin değiştiğine bakın:',
      table: {
        headers: ['Cinsiyet', 'Rusça', 'Türkçe'],
        rows: [
          ['Eril', 'Мой новый дом стоял здесь.', 'Yeni evim burada duruyordu.'],
          ['Dişil', 'Моя новая книга лежала здесь.', 'Yeni kitabım burada duruyordu.'],
          ['Nötr', 'Моё новое окно было здесь.', 'Yeni penceremi buradaydı.'],
        ],
        caption: 'Aynı cümle kalıbı, üç cinsiyet: zamir, sıfat ve fiil hepsi değişiyor',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'İyelik zamiri değişir: **мой → моя → моё** ("benim")',
        'Sıfat eki değişir: **новый → новая → новое** ("yeni")',
        'Geçmiş zaman fiil eki değişir: **стоял → лежала → было** (uyum, anlam değişikliği değil)',
        'Daha sonra, ismin kendisine eklenen **hâl ekleri** de aynı bu cinsiyete bağlıdır',
      ],
    },
    {
      h2: 'Son Eke Göre Cinsiyet Nasıl Belirlenir (%90 Kuralı)',
      content:
        'Rusça isimlerin büyük çoğunluğu için cinsiyeti doğrudan **sözlük biçiminin** (yalın hâl, tekil) son harfinden okuyabilirsiniz. Bu tabloyu öğrenin ve yeni bir isimle her karşılaştığınızda neredeyse her zaman doğru tahmin edeceksiniz.',
      table: {
        headers: ['Son ek', 'Cinsiyet', 'Örnekler'],
        rows: [
          ['Ünsüz', 'Eril', 'стол (masa), дом (ev), город (şehir)'],
          ['-й', 'Eril', 'музей (müze), герой (kahraman), чай (çay)'],
          ['-а', 'Dişil', 'книга (kitap), школа (okul), мама (anne)'],
          ['-я', 'Dişil', 'неделя (hafta), земля (toprak), тётя (teyze)'],
          ['-о', 'Nötr', 'окно (pencere), слово (kelime), молоко (süt)'],
          ['-е / -ё', 'Nötr', 'море (deniz), поле (tarla), бельё (çamaşır)'],
          ['-ь', 'Eril **veya** dişil', 'bir sonraki bölüme bakın — bu tek istisnadır'],
        ],
        caption: 'Son harften Rusça isim cinsiyetini tahmin etmek',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        '**Sert bir ünsüz** veya **-й** ile biten bir isim neredeyse her zaman eril\'dir — bu aşamada endişelenmeye değer bir istisna yoktur',
        '**-о** veya **-е/-ё** ile biten bir isim neredeyse her zaman nötr\'dür',
        '**-а** veya **-я** ile biten bir isim genellikle dişil\'dir — ama aşağıdaki istisnalar bölümüne dikkat edin, çünkü anlam yazımı geçersiz kılabilir',
        'Bu kural yalnızca **sözlük (yalın hâl, tekil) biçimi** üzerinde çalışır — bir isim çekildiğinde son ekler değişir, bu yüzden her zaman önce temel biçimi kontrol edin',
      ],
    },
    {
      h2: 'Yumuşatma İşareti Tuzağı: -ь ile Biten İsimler',
      content:
        'Yumuşatma işareti **-ь** ile biten isimler, yazımın hiçbir ipucu vermediği tek yerdir — eril ya da dişil olabilirler ve her iki grup da yaygındır. Burada görsel bir kısayol yoktur; anadili konuşanlar her kelimeyi basitçe bilir, öğrencilerin ise listeyi ezberlemesi gerekir.',
      table: {
        headers: ['Dişil -ь isimleri', 'Eril -ь isimleri'],
        rows: [
          ['ночь (gece)', 'день (gün)'],
          ['дверь (kapı)', 'конь (at)'],
          ['мышь (fare)', 'словарь (sözlük)'],
          ['кровать (yatak)', 'учитель (öğretmen)'],
          ['тетрадь (defter)', 'дождь (yağmur)'],
          ['любовь (aşk)', 'гость (misafir)'],
          ['осень (sonbahar)', 'рубль (ruble)'],
        ],
        caption: 'Cinsiyete göre ayrılmış yaygın -ь isimleri — hiçbir yazım kuralı onları ayırt etmez',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Tek güvenilir kısayol: **-ость** veya **-есть** ile biten isimler neredeyse her zaman dişil\'dir — радость (sevinç), скорость (hız), известность (ün)',
        'Bu ek dışında, ses veya yazımda bir kalıp yoktur — **дверь** ve **словарь** kafiyeli ama zıt cinsiyetlere sahip',
        'Yeni bir -ь ismi öğrendiğinizde, cinsiyetin kelimeye ilk günden yapışması için onu eşleşen bir sıfat veya sayı ile öğrenin (**одна дверь**, "bir kapı")',
        'Bu, orta seviye öğrenciler arasında en büyük cinsiyet hatası kaynağıdır — bunun için gerçek ezberleme zamanı ayırın',
      ],
    },
    {
      h2: 'Son Ek Kuralını Bozan Yaygın İstisnalar',
      content:
        'Az sayıda günlük kelime, iki farklı nedenden dolayı son ek kuralını tamamen göz ardı eder: **doğal cinsiyet** (bir kişinin gerçek cinsiyeti yazımı geçersiz kılar) ve **çekimsiz alıntı kelimeler** (asla biçim değiştirmeyen ve anlam aksini söylemedikçe varsayılan olarak nötr olan ödünç kelimeler).',
      table: {
        headers: ['Kelime', 'Son ekin önerdiği', 'Gerçek cinsiyet', 'Neden'],
        rows: [
          ['папа (baba)', 'Dişil (-а)', 'Eril', 'Doğal cinsiyet: kişi erkektir'],
          ['дедушка (dede)', 'Dişil (-а)', 'Eril', 'Doğal cinsiyet: kişi erkektir'],
          ['дядя (amca)', 'Dişil (-я)', 'Eril', 'Doğal cinsiyet: kişi erkektir'],
          ['мужчина (adam)', 'Dişil (-а)', 'Eril', 'Doğal cinsiyet: kişi erkektir'],
          ['кофе (kahve)', 'Net bir son ek yok / nötr gibi görünüyor', 'Eril (geleneksel olarak)', 'Kural gereği sabitlenmiştir; nötr kullanımı günlük konuşmada yaygındır ama standart dışı kabul edilir'],
          ['кино (sinema)', 'Nötr görünüyor (-о)', 'Nötr', 'Çekimsiz alıntı kelime — ödünç alınmış cansız isimler için varsayılan cinsiyet'],
          ['пальто (palto)', 'Nötr görünüyor (-о)', 'Nötr', 'Çekimsiz alıntı kelime — varsayılan cinsiyet'],
          ['такси (taksi)', 'Net bir son ek yok', 'Nötr', 'Çekimsiz alıntı kelime — varsayılan cinsiyet'],
        ],
        caption: 'İstisnalar: doğal cinsiyet veya alıntı kelime geleneği son ek kuralını ne zaman geçersiz kılar',
        boldColumnIndices: [0, 2],
      },
      bullets: [
        '**Erkek kişileri belirten** bir avuç -а/-я ismi (папа, дедушка, дядя, мужчина) gramatik olarak eril\'dir — yine de eril sıfatlar ve geçmiş zaman fiilleri alırlar: **мой добрый дедушка** ("nazik dedem")',
        'Çekimsiz alıntı kelimeler (asla değişmeyen bir sesli harfle biten: -о, -е, -и, -у) kelimenin anlamı başka yeri işaret etmedikçe varsayılan olarak **nötr**\'dür — **кофе**, uzun süredir devam eden gelenekle eril tutulan ünlü istisnadır',
        'Birkaç alıntı kelime cinsiyetini ait olduğu **kategoriden** alır: **авеню** (cadde) dişil\'dir çünkü "улица" (sokak) dişil\'dir — yazım değil anlam karar verir',
        'Bu istisnalar kısa ve öğrenilebilir bir listedir — bunların %90 kuralına olan güveninizi sarsmasına izin vermeyin',
      ],
    },
    {
      h2: 'Cinsiyet Sıfat ve Zamir Uyumunu Nasıl Kontrol Eder',
      content:
        'Rusçadaki her sıfat ve iyelik zamiri, tanımladığı isimle **cinsiyette uyum sağlamak** zorundadır. Yalın hâlde, her cinsiyetin kendine ait bir sıfat eki vardır — burası başlangıç seviyesindeki öğrencilerin cinsiyeti ilk kez bilinçli olarak "hissettiği" yerdir.',
      table: {
        headers: ['Cinsiyet', 'Sıfat eki', 'Örnek', 'Anlam'],
        rows: [
          ['Eril', '-ый / -ий', 'новый дом', 'yeni bir ev'],
          ['Dişil', '-ая / -яя', 'новая книга', 'yeni bir kitap'],
          ['Nötr', '-ое / -ее', 'новое окно', 'yeni bir pencere'],
        ],
        caption: 'Cinsiyete göre sıfat uyumu (yalın hâl)',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'İyelik zamirleri aynı üçlü ayrımı takip eder: **мой чай** (benim çayım, eril), **моя сумка** (benim çantam, dişil), **моё имя** (benim adım, nötr)',
        '"Bu" gösterme sıfatı da aynısını yapar: **этот дом**, **эта книга**, **это окно**',
        'Bu uyum isteğe bağlı bir stil değildir — yanlış eki kullanmak sadece bir aksan değil, bir gramer hatasıdır',
      ],
    },
    {
      h2: 'Cinsiyet Geçmiş Zaman Fiillerini Nasıl Kontrol Eder',
      content:
        'Rusça geçmiş zaman fiilleri, tekilde öznelerinin cinsiyetiyle uyum sağlar — Türkçede olmayan ve bu yüzden öğrencileri sıklıkla şaşırtan bir özellik. Fiilin kendisi anlamını değiştirmez; sadece son eki eylemi kimin veya neyin yaptığına uyacak şekilde kayar.',
      table: {
        headers: ['Öznenin cinsiyeti', 'Örnek', 'Anlam'],
        rows: [
          ['Eril', 'Он читал.', 'O okudu / okuyordu.'],
          ['Dişil', 'Она читала.', 'O okudu / okuyordu.'],
          ['Nötr', 'Оно читало.', 'O okudu / okuyordu.'],
        ],
        caption: 'Öznenin cinsiyetine göre geçmiş zaman fiil uyumu',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Kalıp görüldüğünde basittir: **-л** (eril), **-ла** (dişil), **-ло** (nötr), **-ли** (herhangi bir çoğul)',
        'Bu yüzden basit bir geçmiş zaman cümlesi için bile ismin cinsiyetini bilmeniz gerekir — "kitap düştü" **книга упала** olur, упал veya упало değil',
        'Kural, cansız nesneler için ismin **gramatik cinsiyetine** uygulanır, mutlaka biyolojik cinsiyete değil',
      ],
    },
    {
      h2: 'Cinsiyet Hâl Eklerini Nasıl Şekillendirir (Büyük Resim)',
      content:
        'Cinsiyet yalnızca sıfatlar ve geçmiş zamanla ilgili değildir — tüm altı hâl çekim sisteminin arkasındaki **düzenleyici ilkedir**. Eril, dişil ve nötr isimler, yalın, ilgi, yönelme, belirtme, araç ve bulunma hâlleri boyunca her biri farklı bir son ek kalıbını izler. Önce bir ismin cinsiyetini öğrenin, ismin çekiminin geri kalanı sıfırdan tahmin etmek yerine doğru kalıbı uygulamak hâline gelir.\n\nHâlleri tek tek henüz çalışmadıysanız, [Rusça hâl eklerine dair tam kılavuzumuz](/learn/articles/russian-case-endings-cheatsheet) her son eki cinsiyete göre gruplandırır ve [Rusça Hâller Basitçe Açıklandı: Başlangıç Kılavuzu](/learn/articles/russian-cases-explained-beginners-guide) bu makaleden sonraki en iyi duraktır.',
      bullets: [
        'Dişil -а/-я isimleri bir çekim kalıbını paylaşır; ünsüz/-й ile biten eril isimler başka birini; -о/-е ile biten nötr isimler üçüncüsünü paylaşır',
        '-ь isimleri de çekim kalıplarını cinsiyete göre ayırır — bu da eril/dişil ayrımının neden sadece yazımdan ibaret olmadığının başka bir nedenidir',
        'Cinsiyet otomatik hâle geldiğinde, öğrendiğiniz her yeni isim ayrı bir ezberleme gerektirmek yerine doğrudan bilinen bir çekim kalıbına yerleşir',
      ],
    },
    {
      h2: 'Rusça İsim Cinsiyetiyle İlgili Yaygın Hatalar',
      bullets: [
        '**Her -а/-я isminin dişil olduğunu varsaymak.** Erkek kişileri belirten kelimeler (папа, дедушка, дядя, мужчина) son ekten bağımsız olarak eril kalır — önce anlamı, sonra yazımı kontrol edin.',
        '**-ь isimlerini sese göre tahmin etmek.** дверь (dişil) ve словарь (eril) kafiyeli ama zıt cinsiyetlere sahip — ezberleme ve -ость kalıbı dışında bir kısayol yoktur.',
        '**кофе ile nötr sıfatlar kullanmak.** Geleneksel Rusça кофе\'yi eril tutar (**чёрный кофе**, чёрное кофе değil), birçok anadili konuşan günlük dilde nötr kullansa da — eril biçim gramer kılavuzlarının ve sınavların beklediği şeydir.',
        '**Çekimsiz alıntı kelimelerin yine de bir cinsiyeti olduğunu unutmak.** пальто, метро ve такси gibi kelimeler son eklerini asla değiştirmez, ama gramatik olarak yine de nötrdür ve nötr sıfatlara ihtiyaç duyarlar: **новое пальто** (yeni bir palto).',
        '**Zaman baskısı altında eril ve dişil sıfat eklerini karıştırmak.** -ый/-ая ve -ой/-ая hızlı konuşmada birbirine benzer — yeni kelime dağarcığında eşleştirme otomatik hâle gelene kadar yavaşlayın.',
      ],
    },
  ],
  faq: [
    {
      question: 'Rusçada kaç cinsiyet vardır?',
      answer:
        'Rusçada **üç gramatik cinsiyet** vardır: eril, dişil ve nötr. Her isim bunlardan tam olarak birine aittir ve bu seçim, o isimle kullanılan sıfatların, iyelik zamirlerinin, geçmiş zaman fiillerinin ve hâl eklerinin biçimini kontrol eder.',
    },
    {
      question: 'Bir Rusça ismin eril mi dişil mi olduğu nasıl anlaşılır?',
      answer:
        '**Sözlük (yalın hâl, tekil) biçiminin son harfini** kontrol edin: bir ünsüz veya **-й** genellikle eril, **-а/-я** genellikle dişil, **-о/-е** ise genellikle nötr\'dür. Bu kural isimlerin yaklaşık %90\'ını kapsar. Yumuşatma işareti **-ь** ile biten isimler istisnadır — eril ya da dişil olabilirler ve tek tek ezberlenmeleri gerekir.',
    },
    {
      question: '-а ile biten tüm Rusça isimler dişil midir?',
      answer:
        'Neredeyse, ama tam olarak değil. **Erkek kişileri** belirten bir avuç kelime — папа (baba), дедушка (dede), дядя (amca), мужчина (adam) — -а veya -я ile biter ama gramatik olarak **eril**\'dir, çünkü doğal cinsiyet yazım kuralını geçersiz kılar. Yine de eril sıfatlar ve geçmiş zaman fiilleri alırlar.',
    },
    {
      question: 'Rusçada кофе (kahve) hangi cinsiyettedir?',
      answer:
        'Geleneksel ve gramatik olarak **кофе eril**\'dir (**чёрный кофе**, "siyah kahve"), çekimsiz bir alıntı kelime olarak varsayılan olarak nötr olması gerekiyormuş gibi görünse de. Nötr uyum (**чёрное кофе**) günlük konuşmada yaygındır ama çoğu gramer kaynağı ve sınav tarafından hâlâ standart dışı sayılır.',
    },
    {
      question: 'Bir ismin cinsiyeti çoğulda değişir mi?',
      answer:
        'Hayır — bir isim her hâlde ve sayıda aynı gramatik cinsiyeti korur, ama **çoğulda sıfatlar ve geçmiş zaman fiilleri artık cinsiyeti ayırt etmez**: üç cinsiyet de aynı çoğul sıfat ekini (**новые**) ve aynı çoğul geçmiş zaman ekini (**читали**) paylaşır. Cinsiyet uyumu yalnızca tekilde önemlidir.',
    },
  ],
  conclusion:
    'Rusça isim cinsiyeti ilk başta göz korkutucu görünür çünkü cümlenin çoğuna dokunur — sıfatlar, zamirler, fiiller ve nihayetinde her hâl eki. Pratikte, bu durum çoğu ismi kapsayan güvenilir bir kurala, gerçekten zorlu bir gruba (-ь isimleri) — ki bu sadece ezberleme gerektirir — ve ezberlenmeye değer kısa bir istisna listesine indirgenir.\n\nCinsiyeti otomatik hâle getirmenin en hızlı yolu, onu ilk günden itibaren her yeni kelimeye bağlamaktır: isimleri tek başına değil, sıfatlarıyla birlikte öğrenin (**новый дом**, **новая книга**, **новое окно**), böylece cinsiyet daha sonra hatırlamanız gereken ayrı bir gerçek olmaz.',
  conclusionBullets: [
    'Üç cinsiyet: **eril, dişil, nötr** — her ismin tam olarak biri vardır',
    '%90 kuralı: **ünsüz/-й = eril**, **-а/-я = dişil**, **-о/-е = nötr**',
    '**-ь isimleri** gerçek istisnadır — yazımdan ipucu yok, her birini ezberleyin (**-ость** eki güvenilir bir şekilde dişildir)',
    'Ezberlenmeye değer kısa bir istisna listesi: **папа, дедушка, дядя** (-а/-я\'ya rağmen eril), **кофе** (eril), **кино/пальто/такси** (nötr alıntı kelimeler)',
    'Cinsiyet **sıfat eklerini, iyelik zamirlerini, geçmiş zaman fiillerini** ve tüm **hâl çekim sistemini** yönlendirir',
  ],
  conclusionOutro:
    'Cinsiyet, tüm Rusça gramerinin üzerine inşa edildiği temeldir. Otomatik hâle geldiğinde, altı hâli öğrenmek altı ayrı gizem olmaktan çıkar ve tutarlı bir şekilde uygulanan üç tanıdık kalıp hâline gelir — **akıcı görünen Rusçayı mümkün kılan değişim işte budur.**',
  ctaText: 'Russian Cases with Anna\'yı İndirin — Ücretsiz',
  ctaHref: '/',
  internalLinks: [
    {
      href: '/learn/articles/russian-case-endings-cheatsheet',
      label: 'Rusça Hâl Ekleri: Nihai Kopya Kâğıdı',
    },
    {
      href: '/learn/articles/russian-cases-explained-beginners-guide',
      label: 'Rusça Hâller Basitçe Açıklandı: Başlangıç Seviyesi Görsel Kılavuz',
    },
    {
      href: '/learn/articles/russian-genitive-case',
      label: 'Rusça İlgi Hâli: Tam Kılavuz',
    },
    {
      href: '/learn/articles/russian-accusative-case',
      label: 'Rusça Belirtme Hâli: Tam Kılavuz',
    },
    {
      href: '/learn/articles/russian-alphabet-cyrillic-guide',
      label: 'Rus Alfabesi: Kiril Alfabesine Tam Kılavuz',
    },
    { href: '/practice', label: 'Ücretsiz Rusça Çekim Testi (altı hâlin tamamı)' },
    { href: '/words', label: 'Tam çekim tablolarıyla 400+ Rusça kelimeye göz atın' },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Rusçada İsim Cinsiyeti: Eril, Dişil, Nötr (Tam Kılavuz)',
    description:
      'Rusça isimlerin cinsiyetini son ekten nasıl anlayacağınızı, herkesi şaşırtan -ь ile biten kelimeleri, istisnaları (кофе, папа) ve cinsiyetin sıfatları, fiilleri ve hâlleri nasıl belirlediğini öğrenin.',
    datePublished: '2026-09-10',
    dateModified: '2026-09-10',
    author: {
      '@type': 'Person',
      name: 'Nathan',
      url: 'https://russiandeclensions.com/',
      image: 'https://russiandeclensions.com/landing-cases/founder-photo.webp',
      description: 'Rusça öğrenen anadili Fransızca olan biri; gerçekten işe yarayanları paylaşır.',
      worksFor: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://russiandeclensions.com/learn/articles/russian-noun-gender-guide',
    },
    keywords:
      'rusça isim cinsiyeti, rusçada eril dişil nötr, rusça isim cinsiyeti nasıl anlaşılır, rusça gramatik cinsiyet, rusça yumuşatma işareti cinsiyet, rusça cinsiyet istisnaları',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russian-noun-gender-chalkboard.webp',
      width: 1536,
      height: 1024,
    },
  },
};
