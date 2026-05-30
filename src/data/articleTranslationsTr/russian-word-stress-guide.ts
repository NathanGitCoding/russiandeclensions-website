import type { LearnArticle } from '../learnArticles';

/** Türkçe çevirisi `russian-word-stress-guide` (kaynak EN: `learnArticles.ts`). */
export const russianWordStressGuideTr: LearnArticle = {
  slug: 'russian-word-stress-guide',
  title: "Rusça Kelime Vurgusu: Neden Her Şeyi Değiştirir (ve Nasıl Ustalaşılır)",
  metaTitle:
    "Rusça Kelime Vurgusu: Tam Rehber | Russian Cases with Anna",
  metaDescription:
    "Rusça kelime vurgusunu öğrenin: neden tahmin edilemez olduğunu, anlamı nasıl değiştirdiğini, çekimde nasıl kaydığını ve kulağınızı eğitmek için pratik stratejileri anlayın.",
  keywords: [
    'Rusça kelime vurgusu',
    'Rusçada vurgu',
    'Rusça vurgu kuralları',
    'Rusça telaffuz vurgusu',
    'Rusçada vurgu kalıpları',
  ],
  h1: "Rusça Kelime Vurgusu: Neden Her Şeyi Değiştirir (ve Nasıl Ustalaşılır)",
  heroImage: {
    src: '/articles/russian-word-stress-guide.webp',
    alt: 'Kiril harfli Rusça ders kitabı ve çalışma materyalleri',
    width: 1200,
    height: 630,
  },
  intro:
    "Orta düzey herhangi bir Rusça öğrencisine neyin önünü tıkladığını sorarsanız, haller dışında cevap neredeyse her zaman aynıdır: **kelime vurgusu**. Kavramsal olarak karmaşık olduğu için değil — her kelimenin sadece bir vurgulu hecesi vardır. Sorun, Rusça vurgunun **serbest**, **hareketli** ve **görünmez** olmasıdır.\n\nFrancızca veya İspanyolcada vurgu tahmin edilebilir kurallara uyar. Rusçada ise böyle değildir. Herhangi bir heceye düşebilir, standart baskı metninde işaretlenmez ve bir ismin durumunu veya bir fiilin kişisini değiştirdiğinizde kayabilir. Aynı yazılışa sahip iki kelime (за́мок ve замо́к) tamamen farklı anlamlar taşır — biri kale, diğeri kilit — sadece vurgunun konumuna göre.\n\nBu rehber ihtiyacınız olan her şeyi kapsar: Rusça vurgunun neden zor olduğu, anlamı nasıl değiştirdiği, çekim ve çekimlemede nasıl kaydığı ve — en önemlisi — onu gerçekten hakketmek için pratik stratejiler.",
  introByline: {
    text: '**Nathan tarafından yazıldı** — anadili Fransızca; Rusça öğreniyorum ve dilbilgisi, haller ve günlük pratik için gerçekten işe yarayan şeyleri paylaşıyorum.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: "Nathan, Russian Cases with Anna'nın kurucusu",
    imageWidth: 256,
    imageHeight: 256,
  },
  whatYouLearn: [
    "Rusça vurgunun çoğu Avrupa dilinden neden farklı olduğu",
    "Minimal çiftler: vurgunun tek anlam farkı olduğu kelimeler",
    "Rusça isimleri çekerken vurgunun nasıl kaydığı",
    "Rusça fiil çekiminde vurgunun nasıl kaydığı",
    "Vurgunun nereye düşeceğini tahmin etmeye yardımcı kalıplar",
    "Kulağınızı eğitmek için pratik stratejiler",
  ],
  leadMagnetCta: {
    title: "Rusça dilbilgisi pratik yapın — haller ve daha fazlası",
    description:
      "Russian Cases with Anna, Rusça çekimler, hal ekleri ve dilbilgisi kalıpları için 128 yapılandırılmış ders ve 136 quiz sunar. iOS ve Android'de ücretsiz.",
    ctaText: "Uygulamayı indir — Ücretsiz",
    ctaHref: '/',
  },
  sections: [
    {
      h2: "Rusçada Kelime Vurgusu Nedir?",
      content:
        "Rusçada her çok heceli kelime tam olarak **bir vurgulu heceye** sahiptir. Bu hece diğerlerine göre daha güçlü, daha uzun ve biraz daha yüksek perdede telaffuz edilir. O hece içindeki sesli harf de daha net telaffuz edilir — vurgusuz sesli harfler ise indirgenir.\n\nSesli harf indirgenmesinin en önemli örneği: Vurgusuz konumda **о** harfi «а» gibi telaffuz edilir. Bu yüzden молоко (süt) «молоко» değil «малако» gibi duyulur. Benzer şekilde, vurgusuz **е** ve **я** harfleri nötr bir «и» sesine doğru indirgenir.\n\nRusça öğrenenler için yazılan ders kitaplarında vurgu, vurgulu sesli harfin üzerine akut aksanla (′) işaretlenir: молоко́, рабо́та, понима́ть. Ancak **standart baskı metinlerinde** — kitaplarda, haberlerde, web sitelerinde — vurgu hiçbir zaman işaretlenmez.",
      bullets: [
        "Her Rusça kelimenin tam olarak **bir vurgulu hecesi** vardır",
        "Vurgusuz **о** «а» gibi telaffuz edilir — bu birçok telaffuz hatasına yol açar",
        "Vurgu öğrenici sözlüklerinde işaretlenir (молоко́) ancak **günlük metinlerde** işaretlenmez",
        "Vurgu için sabit bir konum yoktur — Fransızca'daki gibi (son hece) veya Lehçe'deki gibi (sondan ikinci hece) değildir",
      ],
    },
    {
      h2: "Rusça Vurgusu Neden Özellikle Zordur?",
      content:
        "Türkçe, İngilizce, Fransızca veya İtalyanca konuşanlar için Rusça vurgusu, ana dillerinde aynı biçimde bulunmayan bir zorluk oluşturur.\n\n**1. Sabit konum kuralı yoktur.** Rusçada vurgu herhangi bir heceye düşebilir — birinci, son veya aradaki herhangi bir yere. Yaslanabileceğiniz evrensel bir kural yoktur.\n\n**2. Vurgu yazılmaz.** Öğrenim materyallerinin ötesine geçince vurgu işareti olmayan Kiril alfabesiyle yazılmış metinler okursunuz. Duymadıysanız her yeni kelime bir bilmecedir.\n\n**3. Vurgu hareketlidir.** Bir ismin doğru yalın hal tekil formunu öğrenseniz bile, vurgu diğer hallerde kayabilir. Fiillerde de belirli çekimlerde değişebilir.\n\n**4. Vurgu anlamı değiştirir.** Yanlış vurgu, tamamen farklı bir kelime söylemenize neden olabilir.\n\nSonuç: Rusça vurgusu **kelime kelime**, sesli materyalden öğrenilmesi gereken bir şeydir.",
      bullets: [
        "Konum kuralı yok: vurgu **herhangi bir** heceye düşebilir",
        "Standart metinde işaretlenmez — her yeni kelime sesli materyalle doğrulanmalıdır",
        "Hareketli vurgu: hallere (isimler) ve kişilere (fiiller) göre kayabilir",
        "Yanlış vurgu = birkaç bilinen çiftte **farklı kelime**",
      ],
    },
    {
      h2: "Vurgu Anlamı Değiştirdiğinde: Minimum Çiftler",
      content:
        "Rusçada aynı yazılışa sahip ancak vurgulanan heceye göre tamamen farklı anlamlar taşıyan birçok kelime çifti bulunur. Bu **vurgudaki minimal çiftler**, sözlü iletişimde gerçek bir tehlikedir.",
      table: {
        headers: ['1. hecede vurgu', '2. hecede vurgu', 'Anlam değişimi'],
        rows: [
          ['за́мок', 'замо́к', 'şato vs kilit'],
          ['му́ка', 'муко́', 'ızdırap / acı vs un'],
          ['а́тлас', 'атла́с', 'atlas (harita kitabı) vs saten (kumaş)'],
          ['о́рган', 'орга́н', 'organ (vücut) vs org (enstrüman)'],
          ['хло́пок', 'хлопо́к', 'pamuk vs alkış / patlama'],
          ['по́лки', 'полки́', 'raflar vs alaylar'],
          ['пи́сать', 'писа́ть', 'işemek (kaba) vs yazmak'],
        ],
        caption: 'Rusça minimal çiftler: aynı yazım, farklı vurgu, farklı anlam',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        "**замок/замок** çifti Rusça dilbilgisi kitaplarında en çok alıntılanan örnektir",
        "**писать/писать** çifti, her öğrencinin mutlaka doğru bilmesi gereken bir hatadır",
        "Bu kelimelerdeki vurgu hataları sadece yabancı aksan gibi duyulmaz — **yanlış kelimeyi iletir**",
      ],
    },
    {
      h2: "Rusça İsimleri Çekerken Vurgu Nasıl Kayar",
      content:
        "Rusça isimlerin büyük çoğunluğu **sabit vurguya** sahiptir: vurgu tüm hallerde ve her iki sayıda aynı hecede kalır. Ancak önemli bir grup **hareketli vurguya** sahiptir ve çekim sırasında kayar.\n\nÜç yaygın hareketli vurgu kalıbı vardır:",
      subsections: [
        {
          h3: "Kalıp A: kökte vurgu (tekil) → ekte vurgu (çoğul)",
          content:
            "Tekilde vurgu kökte bulunur ancak çoğulda eke atlar.\n\n— **го́род** (şehir) → города́, городо́в, города́м\n— **лес** (orman) → леса́, лесо́в, леса́м\n— **о́стров** (ada) → острова́, острово́в\n\nBu kalıp eril isimler arasında çok yaygındır.",
        },
        {
          h3: "Kalıp B: ekte vurgu (çoğu form) → kökte vurgu (belirtme durumu tekil)",
          content:
            "Vurgu çoğu formda ektedir, ancak belirtme durumu tekilinde köke geri çekilir — -а/-я ile biten dişil isimler için tipiktir.\n\n— **рука́** (el): руки́, руке́... ancak belirtme tek. = **ру́ку**\n— **нога́** (bacak): ноги́, ноге́... ancak belirtme tek. = **но́гу**\n— **голова́** (baş): головы́... ancak belirtme tek. = **го́лову**\n\nBelirtme durumundaki vurgunun ayrı öğrenilmesi gerektiğinden bu en zor kalıplardan biridir.",
        },
        {
          h3: "Kalıp C: tam hareketlilik — рука ile tam tablo",
          content:
            "Bazı isimler neredeyse her halde vurguyu kaydırır. рука ismi (el/kol) klasik öğretim örneğidir:",
          table: {
            headers: ['Hal', 'Tekil', 'Çoğul'],
            rows: [
              ['Yalın hal', 'рука́', 'ру́ки'],
              ['Belirtme durumu', 'ру́ку', 'ру́ки'],
              ['İyelik durumu', 'руки́', 'ру́к'],
              ['Yönelme durumu', 'руке́', 'рука́м'],
              ['Araç durumu', 'руко́й', 'рука́ми'],
              ['Bulunma durumu', 'руке́', 'рука́х'],
            ],
            caption: "рука (el/kol) için tüm hallerdeki vurgu kaymaları",
            boldColumnIndices: [1, 2],
          },
        },
      ],
      bullets: [
        "İsimlerin büyük çoğunluğu = **sabit vurgu** (tüm formlarda aynı hece)",
        "**Hareketli vurgulu** isimler, her haldeki vurgunun öğrenilmesini gerektirir",
        "İyi bir sözlük her çekim formunda vurguyu işaretler — her zaman kullanın",
      ],
    },
    {
      h2: "Rusça Fiil Çekiminde Vurgu Nasıl Kayar",
      content:
        "İsimlerle aynı şekilde, bazı Rusça fiillerin tüm çekim boyunca **sabit vurgusu** varken, diğerlerinin **hareketli vurgusu** vardır. En yaygın kalıp: sondaki vurguya sahip bitişik fiiller, genellikle 1. tekil şahıs (я) için vurguyu köke kaydırır.",
      table: {
        headers: ['Kişi', 'понять (anlamak)', 'начать (başlamak)', 'взять (almak)'],
        rows: [
          ['я (ben)', 'пойму́', 'начну́', 'возьму́'],
          ['ты (sen)', 'поймёшь', 'начнёшь', 'возьмёшь'],
          ['он/она (o)', 'поймёт', 'начнёт', 'возьмёт'],
          ['мы (biz)', 'поймём', 'начнём', 'возьмём'],
          ['вы (siz)', 'поймёте', 'начнёте', 'возьмёте'],
          ['они (onlar)', 'поймут', 'начнут', 'возьмут'],
        ],
        caption:
          "Çekimdeki vurgu: ekte vurgulu fiillerde 1. tekil şahıs farklılık gösterir",
        accentColumnIndices: [1, 2, 3],
      },
      subsections: [
        {
          h3: "Geçmiş zaman: eril vs diğer formlar",
          content:
            "Bazı fiiller geçmiş zamanda da vurguyu kaydırır. Tekil eril geçmiş zaman, çoğu zaman dişil, nötr ve çoğul formlardan farklı bir vurguya sahiptir.\n\n— **жить** (yaşamak): жил — жила́ — жи́ло — жи́ли\n— **брать** (almak): брал — брала́ — бра́ло — бра́ли\n— **пить** (içmek): пил — пила́ — пи́ло — пи́ли\n— **дать** (vermek): дал — дала́ — да́ло — да́ли\n\nNot: Bu fiillerde **dişil geçmiş zaman** formları neredeyse her zaman vurguyu son heceye çeker.",
        },
      ],
      bullets: [
        "**Bitişik fiiller** genellikle çekimde vurguyu kökten eke kaydırır",
        "**Dişil geçmiş zaman** çoğunlukla son ek vurgusuna sahiptir, diğer formlar olmasa bile",
        "Yüksek frekanslı düzensiz fiiller (жить, брать, пить, дать) bireysel olarak ezberlenmelidir",
      ],
    },
    {
      h2: "Rusça Vurguyu Tahmin Etmeye Yardımcı 5 Kalıp",
      content:
        "Rusça vurgu için mutlak kurallar yoktur — ancak günlük sözcüklerin büyük bölümünü kapsayan **eğilimler** vardır. Bu kalıpları öğrenmek sesli materyale maruz kalmayı yerini almaz, ancak yeni bir kelimeyle karşılaşıldığında daha iyi tahminler yapmanızı sağlar.",
      subsections: [
        {
          h3: "1. Tutarlı biçimde vurgu çeken ekler",
          content:
            "Bazı ekler vurguyu güvenilir biçimde üzerlerine çeker:\n\n— **-ость** (soyut isimler): ра́дость (sevinç), го́рдость (gurur), но́вость (haber)\n— **-ение/-ание** (sözel isimler): реше́ние (karar), созда́ние (yaratma)\n— **-ия** (yabancı alıntılar): исто́рия (tarih), тера́пия (terapi)\n— **-ист** (meslek isimleri): журнали́ст (gazeteci), пиани́ст (piyanist)",
        },
        {
          h3: "2. Önekler nadiren vurgu taşır",
          content:
            "Önekler (по-, пере-, вы-, за-, при- vb.) fiil ve sıfatlarda neredeyse hiç vurgu almaz. Vurgu neredeyse her zaman **köke veya eke** düşer.\n\nBaşlıca istisna: Bitişik fiillerdeki **вы-** öneki her zaman vurgu taşır — вы́йти (çıkmak), вы́пить (içip bitirmek), вы́учить (tamamen öğrenmek). Bu kural neredeyse mutlaktır.",
        },
        {
          h3: "3. Bileşik kelimeler: ikinci öğede vurgu",
          content:
            "Bileşik isim ve sıfatlarda vurgu genellikle **ikinci köke** düşer.\n\n— **самолёт** (uçak): само + лёт → лёт üzerinde vurgu\n— **водопад** (şelale): водо + пад → пад üzerinde vurgu\n— **землетрясение** (deprem): земле + трясение → трясение üzerinde vurgu",
        },
        {
          h3: "4. Alıntılar genellikle orijinal vurguyu korur",
          content:
            "Fransızca, İngilizce veya Almancadan alınan uluslararası kelimeler çoğunlukla kaynak dildeki vurguyu korur. Fransızca alıntılar son hece vurgusuna meyillidir.\n\n— теа́тр (tiyatro)\n— шокола́д (çikolata)\n— телефо́н (telefon)\n— университе́т (üniversite)",
        },
        {
          h3: "5. вы- öneki kuralı — Rusçanın en güvenilir kuralı",
          content:
            "**вы-** öneki bitişik fiil oluşturduğunda, her zaman vurgu taşır — bitmemişte hangi hece vurgulanırsa vurgulanmış olsun.\n\n— учи́ть → **вы́**учить\n— пи́ть → **вы́**пить\n— ходи́ть → **вы́**ходить\n\nBu, Rusçanın neredeyse kesin birkaç vurgu kuralından biridir ve istisnasız uygulanır.",
        },
      ],
      bullets: [
        "Bu kalıplar **eğilimlerdir, kural değildir** — вы- dışında hepsi için istisnalar vardır",
        "**вы-** öneki kuralı en güvenilir olandır: her zaman vurgu taşır",
        "Bu kalıpları ilk tahmin olarak kullanın ve her zaman sesli materyalle doğrulayın",
      ],
    },
    {
      h2: "Rusça Vurgusunda Ustalaşmak İçin Pratik Stratejiler",
      content:
        "Rusça vurgu tamamen yazımdan çıkarılamayacağından, tek güvenilir yaklaşım **geniş bir konuşma sözcüğü dağarcığı oluşturmaktır**. İşte en etkili stratejiler:",
      subsections: [
        {
          h3: "1. Her zaman sesli materyalden kelime öğrenin",
          content:
            "Yeni bir Rusça kelimeyi asla yalnızca metinden öğrenmeyiniz. Her zaman sesli bir kaynakla eşleştirin — telaffuzlu sözlük (Forvo, Wiktionary), kurs, podcast veya öğretmen. Yalnızca yazılı formu görürseniz vurgunun nereye düştüğünü bilemezsiniz ve yanlış bir tahmin kalıcı bir hata haline gelebilir.",
        },
        {
          h3: "2. Vurgu işaretli sözlük kullanın",
          content:
            "Vurgu işaretlerini varsayılan olarak benimseyin. Her formda vurguyu gösteren sözlükler kullanın (Rusça Wiktionary vurguyu net biçimde işaretler). Kelime kartı sisteminize (Anki vb.) bir kelime eklediğinizde her zaman vurgu işaretini de ekleyin.",
        },
        {
          h3: "3. Anadili Rusça olanlarla gölgeleme pratiği yapın",
          content:
            "Gölgeleme (shadowing) — bir anadili konuşanı dinlemek ve hemen tekrar etmek, ritim ve vurgusunu taklit etmek — vurgu kalıplarını içselleştirmek için en etkili yöntemlerden biridir. Rusça podcastler, haber yayınları ve öğrenenler için YouTube kanalları iyi kaynaklar arasındadır.",
        },
        {
          h3: "4. Notlarınızda hareketli vurgulu kelimeleri işaretleyin",
          content:
            "Yeni bir isim veya fiil öğrendiğinizde, hareketli vurgusu olup olmadığını kontrol edin. İyi bir sözlük, vurgu işaretleriyle tüm hal formlarını gösterir. Fiiller için tam çekimi inceleyiniz. Sözcük notlarınızda hareketli vurgulu kelimeleri özellikle işaretleyin.",
        },
      ],
      bullets: [
        "Yeni kelimeleri **asla yalnızca metinden** öğrenmeyiniz — her zaman sesli materyalle doğrulayınız",
        "Kelime kartı sisteminizdeki her kelimeye vurgu işareti ekleyiniz",
        "Gölgeleme, doğru ve otomatik vurgu alışkanlıkları oluşturmanın en hızlı yoludur",
      ],
    },
    {
      h2: "Öğrencilerin Neredeyse Her Zaman Yanlış Vurguladığı 10 Kelime",
      content:
        "Bunlar, orta düzey öğrencilerin bile sıklıkla yanlış telaffuz ettiği kelimelerdir — vurgu sezgisellikten uzaktır veya ilk tahmine uymaz:",
      table: {
        headers: ['Kelime', 'Doğru vurgu', 'Yaygın hata', 'Anlam'],
        rows: [
          ['звони́т', 'звони́т (2. hece)', 'зво́нит', 'o/o telefon ediyor'],
          ['позвони́шь', 'позвони́шь (3. hece)', 'позво́нишь', 'arayacaksın'],
          ['на́чать', 'на́чать (1. hece)', 'нача́ть', 'başlamak (mastar)'],
          ['по́нял', 'по́нял (1. hece)', 'поня́л', 'o anladı (geç. e.c.)'],
          ['ку́хня', 'ку́хня (1. hece)', 'кухня́', 'mutfak'],
          ['то́рты', 'то́рты (1. hece)', 'торты́', 'tortalar (торт çoğulu)'],
          ['ша́рфы', 'ша́рфы (1. hece)', 'шарфы́', 'atkılar (шарф çoğulu)'],
          ['краси́вее', 'краси́вее (2. hece)', 'красиве́е', 'daha güzel'],
          ['алфави́т', 'алфави́т (3. hece)', 'алфа́вит', 'alfabe'],
          ['столя́р', 'столя́р (2. hece)', 'сто́ляр', 'marangoz'],
        ],
        caption: "Öğrenciler arasında yaygın vurgu hataları — doğru formlar",
        boldColumnIndices: [1],
        accentColumnIndices: [1],
      },
      bullets: [
        "**Звонит/позвонишь**, Rusçada en çok tartışılan vurgu hatalarındandır — anadili konuşanlar bile birbirini düzeltir",
        "**Торты** ve **шарфы** klasik tuzaklardır — çoğul vurgusu eke kaymaz",
        "Emin değilseniz: her formda vurguyu işaretleyen Rusça Wiktionary'e bakın",
      ],
    },
  ],
  faq: [
    {
      question: "Rusça vurgusu her zaman tahmin edilemez mi?",
      answer:
        "Tamamen değil. Kalıplar ve eğilimler mevcuttur — örneğin вы- öneki her zaman vurgu taşır ve belirli ekler (-ость, -ение, -ист) onu tutarlı biçimde çeker. Ancak Fransızca veya Lehçe'nin aksine evrensel bir konum kuralı yoktur. Kelimelerin çoğu sesli materyalden bireysel olarak öğrenilmelidir.",
    },
    {
      question: "Rusçada vurgu nasıl işaretlenir?",
      answer:
        "Öğrenme materyallerinde ve sözlüklerde vurgu, vurgulu sesli harfin üzerine akut aksanla (′) işaretlenir: молоко́, говори́т, рабо́та. Standart Rusça baskı metinlerinde (kitaplar, haberler, web siteleri) vurgu işaretlenmez. ё harfi göründüğünde her zaman vurgu taşır — bu, normal metinde bulunan tek vurgu göstergesidir.",
    },
    {
      question: "ё harfi her zaman vurguyu gösterir mi?",
      answer:
        "Evet. Rusçada ё her zaman vurgu taşır. Bu nedenle е ile ё'yü ayırt etmek önemlidir: все (herkes, е üzerinde vurgu) - всё (her şey, vurgulu ё). Pek çok Rusça metin, tipografik nedenlerle ё'yü е ile değiştirir ve bu karışıklığa yol açabilir — ancak doğru yazılmış metinde ё her zaman vurgulu sesli harf için kullanılır.",
    },
    {
      question: "Rusça anadili konuşanlar her zaman vurgunun nereye düştüğünü bilir mi?",
      answer:
        "Evet — anadili konuşanlar vurguyu sözcük dağarcıklarının bir parçası olarak içselleştirmiştir. Ancak zaman zaman bazı kelimeler konusunda tartışırlar (özellikle звонит vs зво́нит), çünkü vurgu normları nesiller veya lehçeler arasında değişebilir. Referans her zaman Орфоэпический словарь gibi normatif bir sözlüktür.",
    },
    {
      question: "Rusça vurgusunda ustalaşmak ne kadar sürer?",
      answer:
        "Rusça vurguyu 'bitirdiğiniz' bir an yoktur — bu, sesli sözcük dağarcığı oluşturmanın süregelen bir sürecidir. Çoğu öğrenci, sesli materyale maruz kalarak düzenli çalışmayla 6-12 ay sonra rahat bir düzeye ulaşır.",
    },
  ],
  conclusionIntro:
    "Rusça kelime vurgusu, sabırlı ve sese dayalı çalışmayı ödüllendiren dil yönlerinden biridir:",
  conclusionBullets: [
    "Rusçada vurgu **serbest**tir — evrensel kural olmaksızın herhangi bir heceye düşebilir",
    "Vurgu standart metinde **yazılmaz** — sesli materyalden öğrenilmesi gerekir",
    "Vurgu **hareketlidir** — pek çok kelimede hal formlarına ve fiil çekimlerine göre kayar",
    "Bazı kelime çiftleri **yalnızca** vurguyla ayrılır — yanlış vurgu = yanlış kelime",
    "**вы-** öneki her zaman vurgu taşır — Rusçanın en güvenilir kuralı",
    "Her yeni kelimeyi **sesli materyalden** öğrenin, kelime kartlarında vurguyu işaretleyin ve gölgeleme pratiği yapın",
  ],
  conclusionOutro:
    "İyi haber: Rusça ne kadar çok duyar ve konuşursanız, vurgu o kadar doğal hale gelir. Yüksek frekanslı sözcük dağarcığıyla başlayın — her gün kullanacağınız 500 kelime — ve vurgularını baştan doğru öğrenin. Kötü vurgu alışkanlıklarını daha sonra düzeltmek, onları baştan doğru öğrenmekten çok daha zordur.",
  internalLinks: [
    {
      href: '/learn/articles/russian-verbal-aspect-perfective-imperfective',
      label: "Rusça Fiil Görünüşü: Mükemmel ve Kusurlu — Tam Rehber",
    },
    {
      href: '/learn/articles/russian-alphabet-cyrillic-guide',
      label: "Rus Alfabesi: Kiril Alfabesini 3 Basit Adımda Öğrenin",
    },
    {
      href: '/learn/articles/how-long-learn-russian',
      label: "Rusçayı Öğrenmek Ne Kadar Sürer?",
    },
    {
      href: '/learn/articles/learn-russian-on-your-own',
      label: "Rusçayı Kendi Başınıza Öğrenebilir misiniz?",
    },
    { href: '/practice', label: 'Ücretsiz Çekim Testi — Tüm 6 hali pratik edin' },
  ],
  ctaText: 'Rusça Halleri Pratik Et — Ücretsiz →',
  ctaHref: '/practice',
  conclusion: '',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Rusça Kelime Vurgusu: Neden Her Şeyi Değiştirir (ve Nasıl Ustalaşılır)",
    description:
      "Rusça kelime vurgusunu öğrenin: neden tahmin edilemez olduğunu, anlamı nasıl değiştirdiğini, çekimde nasıl kaydığını ve kulağınızı eğitmek için pratik stratejileri anlayın.",
    datePublished: '2026-05-30',
    dateModified: '2026-05-30',
    author: {
      '@type': 'Person',
      name: 'Nathan',
      url: 'https://russiandeclensions.com/',
      image: 'https://russiandeclensions.com/landing-cases/founder-photo.webp',
      description:
        "Rusça öğrenen Fransız anadili konuşucusu; dilbilgisi, haller ve pratik öz-çalışma alışkanlıkları hakkında yazıyor.",
      worksFor: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://russiandeclensions.com/learn/articles/russian-word-stress-guide',
    },
    keywords:
      "Rusça kelime vurgusu, Rusçada vurgu, Rusça vurgu kuralları, Rusça telaffuz",
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russian-word-stress-guide.webp',
      width: 1200,
      height: 630,
    },
  },
};
