import type { LearnArticle } from '../learnArticles';

/** `russian-verb-conjugation-guide` makalesinin Türkçe çevirisi (İngilizce kaynak: `learnArticles.ts`). */
export const russianVerbConjugationGuideTr: LearnArticle = {
  slug: 'russian-verb-conjugation-guide',
  title: 'Rusça Fiil Çekimi: Tam Rehber (Şimdiki, Geçmiş ve Gelecek Zaman)',
  metaTitle: 'Rusça Fiil Çekimi: Şimdiki, Geçmiş ve Gelecek Zaman | Russian Cases with Anna',
  metaDescription:
    'Rusça fiil çekimini adım adım öğrenin: iki çekim grubu, şimdiki zaman ekleri, ünsüz değişimleri, geçmiş zaman, gelecek zaman ve tamamen çekimlenmiş 8 düzensiz fiil.',
  keywords: [
    'rusça fiil çekimi',
    'rusça fiilleri çekmek',
    'rusça fiil zamanları',
    'rusça şimdiki zaman çekimi',
    'rusça geçmiş zaman fiilleri',
    'rusça birinci ve ikinci çekim',
    'rusça fiil ekleri',
    'rusçada fiil nasıl çekilir',
  ],
  h1: 'Rusça Fiil Çekimi: Şimdiki, Geçmiş ve Gelecek Zamanın Tam Rehberi',
  intro:
    'Rusça isimler hal eklerine göre çekimlenir; Rusça fiiller ise zaman ve kişiye göre çekimlenir — ve bu iki sistem tamamen farklı zorluk seviyelerinde oynar. Haller sizi kelime başına düzinelerce olası ekle cezalandırır. Fiil çekimi ise buna kıyasla neredeyse mekaniktir: **bir fiilin iki çekim grubundan hangisine ait olduğunu bildiğiniz anda, altı ek size kimin ne yaptığını ve ne zaman yaptığını söyler.**\n\nİşin can alıcı noktası, "neredeyse mekanik" ifadesinin hâlâ birkaç tuzak barındırmasıdır: bir çekim grubuna benzeyip diğeri gibi davranan bir avuç fiil, "ben" formunda sessizce değişen ünsüzler ve kişiyi tamamen görmezden gelip yalnızca cinsiyet ve sayıya bakan bir geçmiş zaman. Bunların hiçbiri net şekilde ortaya konduğunda zor değildir — ve hallerin aksine, fiil çekiminin büyük kısmı **tek bir odaklanmış çalışma oturumunda** içselleştirilebilir.\n\nBu rehber iki çekim grubunu, eksiksiz şimdiki zaman tablolarını, geçmiş zamanı (ve istisnalarını), gelecek zaman kurmanın iki yolunu ve neredeyse her konuşmada kullanacağınız sekiz düzensiz fiili ele alır.',
  introByline: {
    text: '**Nathan tarafından yazıldı** — anadili Fransızca; Rusça öğreniyorum ve dilbilgisi, haller ve günlük pratikte gerçekten işe yarayanları paylaşıyorum.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, Russian Cases with Anna kurucusu',
    imageWidth: 256,
    imageHeight: 256,
  },
  whatYouLearn: [
    'Mastar hâlinden — ve mastar sizi yanılttığında "onlar" (они) formundan — iki çekim grubunu nasıl ayırt edeceğinizi',
    'Her iki çekim grubu için işlenmiş örneklerle birlikte tam şimdiki zaman eklerini',
    'Birçok fiilin "ben" (я) formunu değiştiren ünsüz değişimlerini',
    'Geçmiş zamanı saniyeler içinde nasıl kuracağınızı — ve kalıbı bozan -ти / -чь fiillerini',
    'Basit gelecek zaman (bitmiş görünüş) ile bileşik gelecek zaman (буду + mastar) arasındaki farkı',
    'Her gün kullanacağınız, tamamen çekimlenmiş 8 düzensiz fiili',
  ],
  leadMagnetCta: {
    title: 'Fiil ekleri işin sadece yarısı — ücretsiz uygulama',
    description:
      "Çekim fiilleri halleder; Rusça haller ise geri kalan her şeyi — isimleri, sıfatları ve zamirleri. Russian Cases with Anna, yapılandırılmış derslerle ve akıllı testlerle altı halin tamamını çalıştırır. iOS ve Android'de ücretsiz.",
    ctaText: 'Uygulamayı indirin — Ücretsiz',
    ctaHref: '/',
  },
  sections: [
    {
      h2: 'İki Çekim Grubu: Nasıl Ayırt Edilir',
      content:
        'Her Rusça fiil, geleneksel olarak **birinci çekim** ve **ikinci çekim** olarak adlandırılan iki çekim grubundan birine aittir. Grup, fiilin şimdiki zamanda (ve basit gelecek zamanda) hangi altı ek setini alacağını belirler.\n\nMastar eki faydalı bir ilk tahmindir: çoğu **-ать / -ять** fiili birinci çekimdir, çoğu **-ить** fiili ise ikinci çekimdir. Ama bu sadece bir tahmindir — kısa ve iyi bilinen bir istisna listesi "ters" çekimlenir, bu yüzden mastar tek başına kanıt değildir.',
      table: {
        headers: ['Çekim', 'Tipik mastar eki', 'Örnek', '"Onlar" (они) eki'],
        rows: [
          ['Birinci (I)', '-ать, -ять, çoğu -еть', 'читать, гулять, уметь', '-ут / -ют'],
          [
            'İkinci (II)',
            '-ить (çoğu), birkaç -еть / -ать',
            'говорить, смотреть, слышать',
            '-ат / -ят',
          ],
        ],
        caption: 'Rusça fiillerin iki çekim grubu',
        boldColumnIndices: [0],
      },
      bullets: [
        'En güvenilir kontrol **они (onlar)** formudur: **-ут/-ют** her zaman birinci çekim, **-ат/-ят** her zaman ikinci çekim anlamına gelir',
        'Yaygın bazı **-еть** fiilleri birinci değil, **ikinci** çekim olarak çekimlenir: смотреть, видеть, зависеть, вертеть, обидеть, ненавидеть, терпеть',
        'Bazı **-ать** fiilleri de ikinci çekim olarak çekimlenir: слышать, дышать, держать, гнать — Rus öğretmenler bunlara "7 istisna fiil" der',
        '**Брить** (tıraş olmak) ve **стелить** (sermek/yatak yapmak) -ить fiili gibi görünür ama **birinci** çekim olarak çekimlenir: бре́ю, бре́ешь, бре́ет…',
      ],
    },
    {
      h2: 'Şimdiki Zaman: Birinci Çekim (-е-) Ekleri',
      content:
        'Birinci çekim fiilleri, eklerinin çoğunda **-е-** ünlüsünü kullanır. Tam harf (у/ю, ешь, ет…) yalnızca fiil kökünün ünlüyle mi yoksa ünsüzle mi bittiğine bağlıdır — bu bir yazım kuralıdır, anlam farkı değildir.',
      table: {
        headers: ['Zamir', 'Ek', 'читать (okumak)', 'гулять (yürüyüşe çıkmak)'],
        rows: [
          ['я', '-у / -ю', 'читаю', 'гуляю'],
          ['ты', '-ешь', 'читаешь', 'гуляешь'],
          ['он / она / оно', '-ет', 'читает', 'гуляет'],
          ['мы', '-ем', 'читаем', 'гуляем'],
          ['вы', '-ете', 'читаете', 'гуляете'],
          ['они', '-ут / -ют', 'читают', 'гуляют'],
        ],
        caption: 'Birinci çekimin şimdiki zaman ekleri',
        boldColumnIndices: [0, 1],
        accentColumnIndices: [1],
      },
      bullets: [
        '**Ünsüzle** biten kökler (чита-) **-у / -ешь / -ет / -ем / -ете / -ут** alır',
        '**Ünlüyle** biten kökler (гуля-) **-ю / -ешь / -ет / -ем / -ете / -ют** alır — aynı ekler, sadece у yerine ю ve ут yerine ют',
        'Vurgu tahmin edilemez şekilde kayabilir: писать → пишу́ (vurgulu ek) ama пи́шешь, пи́шет… (vurgu köke geri döner) — vurguyu her zaman bir sözlükte kontrol edin',
      ],
    },
    {
      h2: 'Şimdiki Zaman: İkinci Çekim (-и-) Ekleri',
      content:
        'İkinci çekim fiilleri, eklerinin çoğunda **-и-** ünlüsünü kullanır. я formu ve они formu, ikinci çekimin birinciden en çok farklılaştığı — ve ünsüz değişimlerinin en sık göründüğü — yerlerdir.',
      table: {
        headers: ['Zamir', 'Ek', 'говорить (konuşmak)', 'видеть (görmek)'],
        rows: [
          ['я', '-у / -ю', 'говорю', 'вижу'],
          ['ты', '-ишь', 'говоришь', 'видишь'],
          ['он / она / оно', '-ит', 'говорит', 'видит'],
          ['мы', '-им', 'говорим', 'видим'],
          ['вы', '-ите', 'говорите', 'видите'],
          ['они', '-ат / -ят', 'говорят', 'видят'],
        ],
        caption: 'İkinci çekimin şimdiki zaman ekleri',
        boldColumnIndices: [0, 1],
        accentColumnIndices: [1],
      },
      subsections: [
        {
          h3: 'я Formunda Ünsüz Değişimleri',
          content:
            'İkinci çekimden bir grup fiil sessizce bir ünsüzü değiştirir — ama **sadece я formunda**. Diğer tüm formlar (ты, он, мы, вы, они) orijinal, değişmemiş ünsüzü korur.',
          table: {
            headers: ['Değişim', 'Mastar', 'я formu', 'ты formu (değişmemiş)'],
            rows: [
              ['д → ж', 'видеть', 'вижу', 'видишь'],
              ['т → ч', 'платить', 'плачу', 'платишь'],
              ['с → ш', 'просить', 'прошу', 'просишь'],
              ['ст → щ', 'простить', 'прощу', 'простишь'],
              ['б → бл', 'любить', 'люблю', 'любишь'],
              ['в → вл', 'готовить', 'готовлю', 'готовишь'],
              ['п → пл', 'купить', 'куплю', 'купишь'],
            ],
            caption: 'İkinci çekim fiillerinde я formu ünsüz değişimleri',
            boldColumnIndices: [0],
          },
        },
      ],
      bullets: [
        'Değişim **sadece я formuyla sınırlıdır** — çok yaygın bir başlangıç seviyesi hatası bunu her yere uygulamaktır: лю́бишь, *любьишь değil',
        'Aynı tür değişim bazı **birinci çekim** fiillerinde de görülür, ama orada sadece я formunda değil, tüm şimdiki zaman boyunca sürer: писать → пишу, пишешь, пишет, пишем, пишете, пишут (с→ш her yerde)',
        "**7 harf yazım kuralı**, neden **они пишут** yazıldığını, *пишют yazılmadığını açıklar: ж, ш, щ, ч, ц, г, к, х harflerinden sonra Rus yazım kuralları asla ю veya я'ya izin vermez — yalnızca у veya а",
      ],
    },
    {
      h2: 'Geçmiş Zaman: Rusçanın En Kolay Zamanı (Birkaç Tuzakla)',
      content:
        "Önce iyi haber: **geçmiş zaman için çekim grubunun hiçbir önemi yoktur.** Mastardan **-ть**'yi çıkarın ve **öznenin cinsiyeti ve sayısıyla** uyumlu bir ek ekleyin — Türkçe ve çoğu Avrupa dilinin aksine, kişiyle değil.",
      table: {
        headers: ['Özne', 'Ek', 'читать → geçmiş', 'говорить → geçmiş'],
        rows: [
          ['он (eril)', '-л', 'чита́л', 'говори́л'],
          ['она (dişil)', '-ла', 'чита́ла', 'говори́ла'],
          ['оно (nötr)', '-ло', 'чита́ло', 'говори́ло'],
          ['они / мы / вы', '-ли', 'чита́ли', 'говори́ли'],
        ],
        caption: 'Geçmiş zaman ekleri: cinsiyet ve sayı, kişi değil',
        boldColumnIndices: [0, 1],
      },
      subsections: [
        {
          h3: 'İstisnalar: -ти ve -чь ile Biten Fiiller',
          content:
            "Küçük ama sık kullanılan bir fiil grubu, düzgün -л kalıbını izlemez. **-ти** (идти, нести, вести) ve **-чь** (мочь, помочь, печь) ile biten fiiller genellikle köklerini değiştirir veya eril formda -л'yi tamamen düşürür.",
          table: {
            headers: ['Mastar', 'он (eril)', 'она (dişil)', 'они (çoğul)'],
            rows: [
              ['идти (gitmek)', 'шёл', 'шла', 'шли'],
              ['мочь (yapabilmek)', 'мог', 'могла', 'могли'],
              ['нести (taşımak)', 'нёс', 'несла', 'несли'],
              ['печь (fırında pişirmek)', 'пёк', 'пекла', 'пекли'],
            ],
            caption: 'Düzensiz geçmiş zaman kökleri: -ти ve -чь fiilleri',
            boldColumnIndices: [0],
          },
        },
      ],
      bullets: [
        'Geçmiş zaman **cinsiyet ve sayı** ile uyumludur, kişiyle değil: erkek bir konuşmacı **я чита́л** der, kadın bir konuşmacı **я чита́ла** der — aynı zamir, farklı fiil formu',
        "**Мочь** ve diğer -чь fiilleri eril formda -л'yi tamamen düşürür: **мог**, *могл değil",
        "**Идти**'nin şimdiki zaman kökünden (иду) tamamen farklı, kökten değişmiş bir geçmiş zaman kökü (шёл) vardır — iki form hiçbir harfi paylaşmaz",
      ],
    },
    {
      h2: 'Gelecek Zaman: Basit mi, Bileşik mi',
      content:
        'Rusça, gelecek zamanı iki farklı şekilde kurar ve hangisini kullanacağınız tamamen özgürce seçebileceğiniz bir anlama değil, **görünüşe (aspect)** bağlıdır. Bitmiş ve bitmemiş görünüşlü fiilleri henüz görmediyseniz, [Rusça fiil görünüşü rehberimiz](/learn/articles/russian-verbal-aspect-perfective-imperfective) bu bölümün doğal tamamlayıcısıdır.',
      table: {
        headers: ['Görünüş', 'Yapı', 'Örnek', 'Anlam'],
        rows: [
          [
            'Bitmiş görünüş — basit gelecek',
            'Şimdiki zaman fiili gibi çekimlenir',
            'я прочита́ю',
            'onu okuyacağım (ve bitireceğim)',
          ],
          [
            'Bitmemiş görünüş — bileşik gelecek',
            'буду/будешь/будет/будем/будете/будут + bitmemiş görünüşlü mastar',
            'я бу́ду чита́ть',
            'okuyor olacağım / okuyacağım (sürmekte olan)',
          ],
        ],
        caption: 'Basit gelecek (bitmiş görünüş) ile bileşik gelecek (bitmemiş görünüş)',
        boldColumnIndices: [0],
      },
      bullets: [
        '**Bitmiş görünüşlü** bir fiilin şimdiki zamanı yoktur — onu şimdiki zaman kalıbına göre çekimlemek otomatik olarak **gelecek** anlamı üretir: я прочита́ю (okuyacağım), "şu an okuyorum" değil',
        '**Bitmemiş görünüşlü** bir fiil, özneye göre çekimlenen **буду** (olacağım) yardımcı fiiline ve ardından bitmemiş görünüşlü mastara ihtiyaç duyar: мы **будем** говори́ть (konuşuyor olacağız / konuşacağız)',
        'Bitmemiş görünüşlü bir mastarı asla doğrudan gelecek zaman için çekimlemeyin — *я читаю за́втра книгу "yarın kitabı okuyacağım" anlamına gelmez; буду читать gerekir',
      ],
    },
    {
      h2: 'Bilmeniz Gereken 8 Düzensiz Fiil',
      content:
        'Son derece yaygın bir avuç fiil, iki çekimden hiçbirine tam olarak uymaz. Bunları bağımsız kalıplar olarak ezberlemeye değer — çoğunu her gün kullanacaksınız.',
      table: {
        headers: ['Mastar', 'я', 'ты', 'он', 'мы', 'вы', 'они'],
        rows: [
          ['хоте́ть (istemek)', 'хочу́', 'хо́чешь', 'хо́чет', 'хоти́м', 'хоти́те', 'хотя́т'],
          ['есть (yemek)', 'ем', 'ешь', 'ест', 'еди́м', 'еди́те', 'едя́т'],
          ['дать (vermek)', 'дам', 'дашь', 'даст', 'дади́м', 'дади́те', 'даду́т'],
          ['бежа́ть (koşmak)', 'бегу́', 'бежи́шь', 'бежи́т', 'бежи́м', 'бежи́те', 'бегу́т'],
          ['е́хать (araçla gitmek)', 'е́ду', 'е́дешь', 'е́дет', 'е́дем', 'е́дете', 'е́дут'],
          ['пить (içmek)', 'пью', 'пьёшь', 'пьёт', 'пьём', 'пьёте', 'пьют'],
          ['жить (yaşamak)', 'живу́', 'живёшь', 'живёт', 'живём', 'живёте', 'живу́т'],
          ['мочь (yapabilmek)', 'могу́', 'мо́жешь', 'мо́жет', 'мо́жем', 'мо́жете', 'мо́гут'],
        ],
        caption: '8 yaygın düzensiz Rusça fiil, tamamen çekimlenmiş',
        boldColumnIndices: [0],
      },
      bullets: [
        '**Хотеть** çekimleri karıştırır: tekil (хочу́, хо́чешь, хо́чет) birinci çekimi izler, çoğul (хоти́м, хоти́те, хотя́т) ikinci çekimi izler — kendi başına ezberlenmeye değer gerçek bir tuhaflık',
        '**Есть** ve **дать**, yalnızca bir avuç Rusça fiilde bulunan nadir bir "athematik" kalıbı paylaşır — hiçbiri birinci veya ikinci çekime uymaz',
        '**быть** ("olmak") fiilinin şimdiki zamanı modern Rusçada neredeyse her zaman **atlanır**: **Я студе́нт** (Öğrenciyim), *Я есть студент değil — arkaik есть formu esas olarak **У меня́ есть…** (Sahibim…) gibi kalıplaşmış ifadelerde hayatta kalır',
      ],
    },
    {
      h2: 'Rusça Fiil Çekiminde Yaygın Hatalar',
      content: 'Bu beş hata, öğrencilerin yaptığı çekim hatalarının çoğunu oluşturur:',
      subsections: [
        {
          h3: 'Hata 1: Mastardan Yanlış Çekimi Tahmin Etmek',
          content:
            '**Yanlış**: Я **смотрею** телевизор.\n**Doğru**: Я **смотрю** телевизор.\n\n**Neden**: смотреть -еть ile biter, bu genellikle birinci çekimi işaret eder — ama смотреть **ikinci** çekim olarak çekimlenen bilinen istisnalardan biridir.',
        },
        {
          h3: 'Hata 2: я Formu Değişimini Her Forma Uygulamak',
          content:
            '**Yanlış**: Ты **любишь**… **любю**? — hangi formun değiştiğini karıştırmak.\n**Doğru**: Я **люблю**, ты **любишь**, он **любит**.\n\n**Neden**: б → бл değişimi **yalnızca я formunda** gerçekleşir. Diğer tüm formlar basit, değişmemiş ünsüzü kullanır.',
        },
        {
          h3: 'Hata 3: Geçmiş Zamanda Kişiye Dayalı Ekler Kullanmak',
          content:
            '**Yanlış**: Она **говорил** по-русски.\n**Doğru**: Она **говорила** по-русски.\n\n**Neden**: geçmiş zaman **öznenin cinsiyeti ve sayısı** ile uyumludur, asla kişiyle değil. Она dişildir, bu yüzden kim konuşursa konuşsun fiil -ла almalıdır.',
        },
        {
          h3: 'Hata 4: Alışkanlık Kastedilen Yerde Bitmiş Görünüşlü Fiil Çekmek',
          content:
            '**Yanlış**: Ка́ждый день я **прочита́ю** кни́гу.\n**Doğru**: Ка́ждый день я **чита́ю** кни́гу.\n\n**Neden**: bitmiş görünüşlü fiillerin şimdiki zamanı yoktur, bu yüzden прочитать\'i bu şekilde çekimlemek aslında "okuyacağım" (gelecek) anlamına gelir, günlük bir alışkanlık değil. Alışkanlık ifade eden eylemler bitmemiş görünüşe, читать\'e ihtiyaç duyar.',
        },
        {
          h3: 'Hata 5: 7 Harf Yazım Kuralını İhlal Etmek',
          content:
            '**Yanlış**: Они **пишют** пи́сьма.\n**Doğru**: Они **пишут** пи́сьма.\n\n**Neden**: ж, ш, щ, ч, ц, г, к, х harflerinden sonra Rus yazım kuralları asla ю veya я\'ya izin vermez — bunun yerine, "beklenen" ek normalde ю veya я kullansa bile, у veya а yazın.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Rusçada iki çekim grubu nedir?',
      answer:
        'Rusça fiiller **birinci çekime** (-е- etrafında kurulu ekler: -у/-ю, -ешь, -ет, -ем, -ете, -ут/-ют) ve **ikinci çekime** (-и- etrafında kurulu ekler: -у/-ю, -ишь, -ит, -им, -ите, -ат/-ят) ayrılır. Çoğu -ать/-ять fiili birinci çekim, çoğu -ить fiili ise ikinci çekimdir, ama kısa bir bilinen istisna listesi (смотреть, слышать, держать…) bu kalıbı bozar.',
    },
    {
      question: 'Bir fiilin birinci mi ikinci çekim mi olduğunu nasıl anlarım?',
      answer:
        'En güvenilir test **они (onlar)** formudur: **-ут/-ют** ile bitiyorsa fiil birinci çekimdir; **-ат/-ят** ile bitiyorsa ikinci çekimdir. Mastar eki faydalı bir ilk tahmindir ama kanıt değildir, çünkü смотреть (-еть) ve держать (-ать) gibi fiiller ikinci çekim olarak çekimlenir.',
    },
    {
      question: 'Rusça geçmiş zaman Türkçedeki gibi kişiye göre değişir mi?',
      answer:
        'Hayır. Rusça geçmiş zaman, öznenin **cinsiyeti ve sayısı** ile uyumludur, kişiyle değil. Her özne aynı ek kalıbını kullanır: -л (eril), -ла (dişil), -ло (nötr), -ли (çoğul) — bu yüzden konuşmacı erkekse я читал ile он читал aynı görünür.',
    },
    {
      question: 'Rusçada basit gelecek ile bileşik gelecek arasındaki fark nedir?',
      answer:
        '**Basit gelecek**, bitmiş görünüşlü bir fiili şimdiki zaman kalıbına göre çekimleyerek kurulur (я прочита́ю — okuyacağım, tamamlanmış). **Bileşik gelecek**, буду/будешь/будет/будем/будете/будут yardımcı fiili artı bitmemiş görünüşlü bir mastarla kurulur (я бу́ду чита́ть — okuyor olacağım / okuyacağım, sürmekte). Hangisini kullanacağınız fiilin görünüşüne bağlıdır, kişisel tercihe değil.',
    },
    {
      question: 'Rusçada gerçek düzensiz fiiller var mı, yoksa sadece istisnalar mı?',
      answer:
        'İkisi de vardır. хотеть (karışık çekim), есть ve дать (nadir bir athematik kalıp) veya идти (kökten değişmiş bir geçmiş zaman kökü, шёл) gibi fiiller gerçekten düzensizdir ve tek tek ezberlenmelidir. Diğer çoğu "düzensizlik" — смотреть\'in ikinci çekim olarak çekimlenmesi veya -чь fiillerinin eril formda -л\'yi düşürmesi gibi — gerçek bir kaostan çok, küçük ve iyi belgelenmiş istisna gruplarıdır.',
    },
  ],
  conclusionIntro:
    'Rusça fiil çekimi erken çabayı ödüllendirir — hallerin aksine, büyük kısmı tek bir odaklanmış çalışma oturumunda gerçekten oturabilir:',
  conclusionBullets: [
    '**Çekim grubunu** sadece mastardan değil, они formundan belirleyin — -ут/-ют birinci, -ат/-ят ikincidir',
    '**İstisna listelerini öğrenin**: смотреть tipi -еть fiilleri ve слышать tipi -ать fiilleri ikinci çekim olarak çekimlenir',
    '**я formu değişimlerine dikkat edin** (любить → люблю) — sadece bu tek forma uygulanır',
    '**Geçmiş zaman = cinsiyet + sayı**, kişi değil: -л / -ла / -ло / -ли',
    '**Gelecek zaman görünüşü izler**: bitmiş görünüş doğrudan çekimlenir; bitmemiş görünüş буду + mastar gerektirir',
    '**Düzensiz fiillerin** (хотеть, есть, дать, идти…) küçük grubunu bağımsız kalıplar olarak ezberleyin',
  ],
  conclusionOutro:
    'Çekim size fiili verir; Rusça haller ise fiilin üzerinde etkili olduğu her şeyi — bir cümleyi gerçekten bir arada tutan isim, sıfat ve zamir eklerini — verir. Fiil ekleri otomatik hale geldiğinde, russiandeclensions.com/practice adresindeki ücretsiz pratik aracımız, altı halin tamamını etkileşimli olarak çalışmak için doğal bir sonraki adımdır — kayıt gerekmez.',
  ctaText: 'Rusça Halleri Pratik Yapın — Ücretsiz →',
  ctaHref: '/practice',
  conclusion: '',
  internalLinks: [
    { href: '/practice', label: 'Ücretsiz Rusça Çekim Testi — tüm 6 hali pratik yapın' },
    {
      href: '/learn/articles/russian-verbal-aspect-perfective-imperfective',
      label: 'Rusça Fiil Görünüşü: Mükemmel ve Kusurlu Görünüş — Tam Rehber',
    },
    {
      href: '/learn/articles/russian-verbs-of-motion',
      label: 'Rusça hareket fiilleri: tam rehber',
    },
    {
      href: '/learn/articles/russian-word-stress-guide',
      label: 'Rusça Kelime Vurgusu: Neden Her Şeyi Değiştirir (ve Nasıl Ustalaşılır)',
    },
    {
      href: '/learn/articles/russian-cases-explained-beginners-guide',
      label: 'Rusça haller basitçe açıklandı: yeni başlayanlar için görsel rehber',
    },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Rusça Fiil Çekimi: Tam Rehber (Şimdiki, Geçmiş ve Gelecek Zaman)',
    description:
      'Rusça fiil çekimini adım adım öğrenin: iki çekim grubu, şimdiki zaman ekleri, ünsüz değişimleri, geçmiş zaman, gelecek zaman ve tamamen çekimlenmiş 8 düzensiz fiil.',
    datePublished: '2026-09-03',
    dateModified: '2026-09-03',
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
      '@id': 'https://russiandeclensions.com/learn/articles/russian-verb-conjugation-guide',
    },
    keywords:
      'rusça fiil çekimi, rusça fiilleri çekmek, rusça fiil zamanları, rusça şimdiki zaman çekimi, rusça geçmiş zaman fiilleri, rusça fiil ekleri',
  },
};
