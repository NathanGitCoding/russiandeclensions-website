import type { LearnArticle } from '../learnArticles';

/** Türkçe çevirisi `russian-greetings-guide` makalesinin (kaynak EN: `learnArticles.ts`). */
export const russianGreetingsGuideTr: LearnArticle = {
  slug: 'russian-greetings-guide',
  title: "Rusça Selamlaşma: Rusça'da Merhaba Nasıl Denir (Tam Kılavuz 2026)",
  metaTitle:
    "Rusça Selamlaşma: Rusça'da Merhaba Nasıl Denir | Tam Kılavuz 2026 | Russian Cases with Anna",
  metaDescription:
    "Tüm Rusça selamlaşmaları öğrenin: resmi Здравствуйте, gayri resmi Привет, günün saatine göre selamlar, vedalar ve telefon selamları — telaffuz ipuçlarıyla birlikte.",
  keywords: [
    'Rusça selamlaşma',
    "Rusça'da merhaba nasıl denir",
    "Rusça'da merhaba",
    'привет Rusça',
    'здравствуйте Rusça',
    'temel Rusça ifadeler',
    'resmi Rusça selamlar',
    'gayri resmi Rusça selamlar',
    "Rusça'da hoşça kal",
    'Rusça kibarlık ifadeleri',
  ],
  h1: "Rusça Selamlaşma: Rusça'da Merhaba Nasıl Denir (Tam Kılavuz)",
  heroImage: {
    src: '/articles/russia-kremlin-moscow.webp',
    alt: "Moskova Kızıl Meydanı — Rusça selamlaşma rehberi",
    width: 1200,
    height: 630,
  },
  intro:
    "Rusça selamlamalar, öğrencilerin öğrendiği ilk kelimelerdir — ve haklı bir nedenle. Ancak her yerde karşılaştığınız **Привет** (Privet — Merhaba)'in ötesinde, Rusça'nın **formalite düzeyine, günün saatine, bağlama** ve hatta hitap ettiğiniz kişi sayısına göre değişen zengin bir selamlama repertuvarı bulunmaktadır.\n\nYanlış selamlama yapmak nadiren bir gramer felaketi olur. Ancak **doğru selamlamayı seçmek, sizi anında ciddi bir öğrenci olarak konumlandırır** — ve Rus kültüründe resmi ile gayri resmi hitap arasındaki ayrım, Türkçeye kıyasla çok daha belirleyicidir. Bir profesöre, doktora veya yaşlı bir yabancıya **Привет** demek kaba veya saygısız görünebilir. Yakın bir Rus arkadaşınıza katı **Здравствуйте** (Zdravstvuyte) demek ise şaşkın bakışlara yol açar.\n\nBu kılavuz, gerçekten ihtiyaç duyduğunuz tüm Rusça selamları kapsar: resmi, gayri resmi, saate göre, telefon selamları ve vedalar. Sonunda ne söyleyeceğinizi değil, **ne zaman ve neden** söyleyeceğinizi de bileceksiniz — ve sonunda **Здравствуйте**'yi tökezlemeden telaffuz edebileceksiniz.",
  introByline: {
    text: "**Nathan tarafından yazılmıştır** — Fransızca ana dilli; Rusça öğreniyorum ve dilbilgisi, durumlar ve günlük pratik için gerçekten işe yarayan şeyleri paylaşıyorum.",
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, Russian Cases with Anna kurucusu',
    imageWidth: 256,
    imageHeight: 256,
  },
  whatYouLearn: [
    "Resmi **Здравствуйте** ile gayri resmi **Привет** arasındaki fark — her birinin ne zaman kullanılacağı",
    "Saate göre selamlar: Доброе утро, Добрый день, Добрый вечер",
    "2026'da genç Rusların kullandığı gayri resmi selamlar",
    "Rusça'da 'Nasılsın?' sormanın 5 yolu — çok resmi'den çok gündelik'e",
    "Her bağlam için Rusça vedalar",
    "**Здравствуйте**'yi çok daha kolay hale getiren telaffuz püf noktası",
  ],
  leadMagnetCta: {
    title: "Selamlaşmanın ötesinde Rusça dilbilgisini öğrenin — ücretsiz uygulama",
    description:
      "Merhaba diyebilir olduktan sonra gerçek çalışma başlar: Rusça dilbilgisi, durumlar ve çekimler. Russian Cases with Anna, gerçek akıcılık için yapılandırılmış dersler ve akıllı sınavlar sunar — iOS ve Android'de ücretsiz.",
    ctaText: "Uygulamayı indir — Ücretsiz",
    ctaHref: '/',
  },
  sections: [
    {
      h2: "Hızlı Referans: Tüm Rusça Selamlar Bir Bakışta",
      content:
        "Ayrıntılara girmeden önce, en önemli Rusça selamlamalara genel bir bakış. Temel değişken her zaman **formalitedir**: Rusça, resmi (вы / vy) ve gayri resmi (ты / ty) kayıt arasında keskin bir ayrım yapar ve bu, seçiminizi belirler.",
      table: {
        headers: ['Rusça', 'Transkripsiyon', 'Türkçe', 'Kayıt'],
        rows: [
          ['Здравствуйте', 'Zdravstvuyte', 'Merhaba / İyi günler (resmi)', 'Resmi'],
          ['Здравствуй', 'Zdravstvuy', 'Merhaba (gayri resmi tekil)', 'Yarı resmi'],
          ['Привет', 'Privet', 'Selam / Hey', 'Gayri resmi'],
          ['Доброе утро', 'Dobroye utro', 'Günaydın', 'Her ikisi'],
          ['Добрый день', "Dobryy den'", 'İyi günler', 'Her ikisi'],
          ['Добрый вечер', 'Dobryy vecher', 'İyi akşamlar', 'Her ikisi'],
          ['Хай', 'Khay', 'Selam (çok gündelik)', 'Çok gayri resmi'],
          ['Ку', 'Ku', 'Hey (argo)', 'Çok gayri resmi / gençlik dili'],
          ['Приветик', 'Privetik', 'Selam (sevecen)', 'Çok gayri resmi'],
          ['Салют', 'Salyut', 'Hey / Selam', 'Gayri resmi'],
        ],
        caption: "Rusça selamlar: resmi - gayri resmi genel bakış",
        boldColumnIndices: [0],
      },
    },
    {
      h2: "Resmi Rusça Selamlar: Здравствуйте ve Varyantları",
      content:
        "**Здравствуйте** (Zdravstvuyte), Rusça'daki standart resmi selamlamadır. Kelime anlamı 'sağlıklı ol'dur — здоровье (zdorovye, sağlık) kelimesinden türemiştir — ve Rusça'da yüzyıllardır kullanılan kibar selamlama olmuştur.\n\n**Здравствуйте**'yi şu kişilere kullanın:\n\n- İlk kez tanıştığınız kişiler\n- Profesyoneller: doktorlar, profesörler, memurlar, patronunuz\n- Yaşlı insanlar (sizden belirgin şekilde büyük olan herkes)\n- Resmi durumlarda: iş görüşmesi, devlet dairesi, iş toplantısı\n- Dükkan personeli, banka çalışanları, ulaşım çalışanları\n\nDaha basit bir seçenek olarak **Здравствуй** (Zdravstvuy), hafifçe tanıdığınız tek bir kişiye hitap etmek için kullanılır. Pratikte çoğu konuşmacı, samimi ilişki içinde olmadıkları herkese **Здравствуйте** kullanır.\n\n**Доброе утро**, **Добрый день** ve **Добрый вечер** de tamamen kabul edilebilir resmi selamlamalar olup biraz daha sıcak bir ton taşır.",
      table: {
        headers: ['Rusça', 'Transkripsiyon', 'Ne zaman kullanılır'],
        rows: [
          ['Здравствуйте', 'Zdravstvuyte', "Standart resmi — yabancılarla en güvenli seçim"],
          ['Здравствуй', 'Zdravstvuy', "Yarı resmi — hafifçe tanıdığınız tek kişi"],
          ['Доброе утро', 'Dobroye utro', "Günaydın (öğlene kadar) — resmi veya nötr"],
          ["Добрый день", "Dobryy den'", "İyi günler (öğle~18:00) — resmi veya nötr"],
          ['Добрый вечер', 'Dobryy vecher', "İyi akşamlar (~18:00'den itibaren) — resmi veya nötr"],
        ],
        caption: "Resmi Rusça selamlar ve ne zaman kullanılacakları",
        boldColumnIndices: [0],
      },
    },
    {
      h2: "Gayri Resmi Rusça Selamlar: Привет ve Genç Rusların Gerçekten Söyledikleri",
      content:
        "**Привет** (Privet), en yaygın gayri resmi selamdır. Arkadaşlar, aynı yaştaki iş arkadaşları ve aile üyeleri arasında serbestçe kullanılır.\n\n**Привет**'in ötesinde, genç Rusların 2026'da gerçekten kullandıkları:",
      table: {
        headers: ['Rusça', 'Transkripsiyon', 'Anlam / Bağlam'],
        rows: [
          ['Привет', 'Privet', "Selam / Hey — standart gündelik selamlama"],
          ['Приветик', 'Privetik', "Selamcık — sevecen, yakın arkadaşlar ve çocuklar için"],
          ['Хай', 'Khay', "Selam — İngilizceden, 35 yaş altında çok yaygın"],
          ['Ку', 'Ku', "Hey — mesajlaşma argosu, ağırlıklı olarak yazışmalarda"],
          ['Салют', 'Salyut', "Hey — biraz nostaljik, gayri resmi kullanımda hâlâ var"],
          ['Что, как?', 'Shto, kak?', "Ne var ne yok? — gayri resmi açılış, lafzen 'Ne? Nasıl?'"],
          ['Как дела?', 'Kak dela?', "Nasılsın? — Привет'ten sonra doğal bir takip"],
        ],
        caption: "Günümüzde kullanılan gayri resmi Rusça selamlar ve argo",
        boldColumnIndices: [0],
      },
      bullets: [
        "**Привет** günün her saatinde kullanılabilir — sabah, öğleden sonra veya akşam",
        "**Хай**, özellikle yazışmalarda kentsel Rusça'da 35 yaş altında giderek daha baskın hale geliyor",
        "**Ку** ağırlıklı olarak metin mesajlarında kullanılır — sözlü konuşmada nadirdir",
        "Selamları birleştirmek doğaldır: '**Привет, как дела?**' çok doğal akar",
        "Yabancılarla veya mesleki bağlamlarda her zaman varsayılan olarak **Здравствуйте** kullanın",
      ],
    },
    {
      h2: "Saate Göre Selamlar: Rusça'da Günaydın, İyi Günler ve İyi Akşamlar",
      content:
        "Rusça, hem resmi hem de gayri resmi bağlamlarda işleyen tam bir günlük saat bazlı selamlama setine sahiptir. **Здравствуйте**'den biraz daha sıcak bir ton taşırlar ve hizmet ortamlarında sıkça kullanılırlar.",
      table: {
        headers: ['Rusça', 'Transkripsiyon', 'Türkçe', 'Tipik saat aralığı'],
        rows: [
          ['Доброе утро', 'Dobroye utro', 'Günaydın', "Öğlene kadar"],
          ["Добрый день", "Dobryy den'", 'İyi günler', "~Öğle - 18:00"],
          ['Добрый вечер', 'Dobryy vecher', 'İyi akşamlar', "~18:00'den itibaren"],
          ['Спокойной ночи', 'Spokoynoy nochi', 'İyi geceler', "Yalnızca yatmadan önce veda olarak"],
          ['Доброй ночи', 'Dobroy nochi', 'İyi geceler', "Geç akşam selamı veya vedası"],
        ],
        caption: "Saate göre Rusça selamlar",
        boldColumnIndices: [0],
      },
      bullets: [
        "**Доброе утро**, утро (sabah) nötr isim olduğu için nötr formu kullanır",
        "**Добрый день**, день (gün) eril isim olduğu için eril formu kullanır",
        "**Добрый вечер**, вечер (akşam) eril olduğu için erildir",
        "**Спокойной ночи** genitif haldedir — yalnızca yatmadan önce kullanılan kalıplaşmış bir veda ifadesi, asla selamlama değil",
        "Bu selamlar birleştirilebilir: '**Добрый день, как у вас дела?**'",
      ],
    },
    {
      h2: "Rusça'da 'Nasılsın?' Nasıl Sorulur",
      content:
        "Rusça'da 'nasılsın?' sorma biçimi büyük ölçüde kime hitap ettiğinize bağlıdır. Rusça, çok resmi'den çok gündelik'e kadar birçok seçenek sunar.",
      table: {
        headers: ['Rusça', 'Transkripsiyon', 'Resmiyet', 'Notlar'],
        rows: [
          ['Как вы поживаете?', 'Kak vy pozhivayete?', 'Çok resmi', "Günlük konuşmada nadiren — yaşlılar için"],
          ['Как у вас дела?', 'Kak u vas dela?', 'Resmi', "Standart kibar 'Nasılsınız?'"],
          ['Как дела?', 'Kak dela?', 'Nötr / gündelik', "En yaygın — neredeyse her durumda işe yarar"],
          ['Как ты?', 'Kak ty?', 'Gayri resmi', "Doğrudan 'Nasılsın?' — yalnızca yakın arkadaşlar"],
          ['Как сам? / Как сама?', 'Kak sam? / Kak sama?', 'Çok gündelik', "Erk. / diş. — lafzen 'Sen nasılsın?'"],
          ['Всё норм?', 'Vsyo norm?', 'Gençlik argosu', "'Her şey tamam mı?' — çok gayri resmi"],
        ],
        caption: "Rusça'da 'nasılsın?' sorma yolları resmiyet düzeyine göre",
        boldColumnIndices: [0],
      },
      subsections: [
        {
          h3: "Как дела?'ya nasıl yanıt verilir",
          content:
            "**Как дела?** sorulduğunda en yaygın yanıtlar:\n\n**Хорошо, спасибо** (Khorosho, spasibo) — İyi, teşekkürler — güvenli, kibar standart yanıt.\n\n**Нормально** (Normal'no) — Normal / İdare eder — çok yaygın, 'iyi'den daha dürüst.\n\n**Неплохо** (Neplo'kho) — Fena değil — sık kullanılan olumlu-nötr yanıt.\n\n**Всё хорошо** (Vsyo khorosho) — Her şey iyi — biraz daha vurgulu.\n\nNot: Türkçenin aksine, Ruslar her yanıttan sonra karşılıklı 'peki ya sen?' beklentisi içinde olmayabilir. **А у тебя?** (A u tebya? — Peki ya sen?) eklemek kibarca olur ama her konuşmada zorunlu değildir.",
        },
      ],
    },
    {
      h2: "Rusça Vedalar: Hoşça Kal Nasıl Denir",
      content:
        "Rusça vedalar da formalite ve bağlama göre değişir. İşte en önemlileri, resmi'den gündelik'e:",
      table: {
        headers: ['Rusça', 'Transkripsiyon', 'Türkçe', 'Kayıt'],
        rows: [
          ['До свидания', 'Do svidaniya', 'Hoşça kalın / Güle güle', 'Resmi'],
          ['До встречи', 'Do vstrechi', 'Görüşürüz', 'Nötr-resmi'],
          ['До скорого', 'Do skorogo', 'Yakında görüşürüz', 'Gayri resmi'],
          ['Пока', 'Poka', 'Hoşça kal / Bay bay', 'Gayri resmi'],
          ['Всего доброго', 'Vsego dobrogo', 'İyi günler / Kendinize iyi bakın', 'Resmi'],
          ['Всего хорошего', 'Vsego khoroshego', 'İyi günler', 'Resmi'],
          ['Счастливо', 'Schastlivo', 'İyi şanslar / Kendinize iyi bakın', 'Nötr-gayri resmi'],
          ['Бывай', 'Byvay', 'Görüşürüz', 'Gayri resmi'],
        ],
        caption: "Rusça vedalar resmi'den gündelik'e",
        boldColumnIndices: [0],
      },
      bullets: [
        "**До свидания** lafzen 'görüşmeye kadar' anlamına gelir — varsayılan resmi veda",
        "**Пока** en çok kullanılan gayri resmi veda — Türkçedeki 'hoşça kal' veya 'bay bay' karşılığı",
        "**Всего доброго** ve **Всего хорошего** birbirinin yerine kullanılabilen sıcak resmi vedalar",
        "**До встречи** kişiyi tekrar göreceğinizi ima eder — iş arkadaşları ve düzenli kişiler için ideal",
      ],
    },
    {
      h2: "Telefon Selamları ve Diğer Durumlar",
      content:
        "Selamlamalar belirli durumlarda biraz değişir. Bunları bilmek, yüz yüze konuşmaların ötesinde de doğal görünmenizi sağlar.",
      subsections: [
        {
          h3: "Telefonu açma",
          content:
            "Rusça'da telefona cevap verirken standart yanıt **Алло** (Allo)'dur — Fransızca/İngilizceden alınmıştır. Her yaş ve bağlamda evrenseldir. Daha resmi ortamlarda **Слушаю** (Slushayu — Dinliyorum) duyulabilir.",
          bullets: [
            "**Алло** — standart telefon selamı, herkes tarafından kullanılır",
            "**Да?** — çok gündelik, yakın kişiler arasında",
            "**Слушаю** — resmi, 'dinliyorum' anlamına gelir — mesleki ortamlarda",
            "**[İsim], слушаю** — ofislerde profesyonel telefon selamı",
          ],
        },
        {
          h3: "Bir odaya veya dükkana girerken",
          content:
            "Başkalarının bulunduğu bir mekâna girerken Ruslar genellikle **Здравствуйте** (resmi) veya **Привет** (gayri resmi, arkadaşlar için) ile selamlar. Küçük şehirlerde ve köylerde, karşılaşılan yabancıları bile selamlamak sosyal bir normdur.",
          bullets: [
            "Ofise girerken: **Здравствуйте, добрый день**",
            "Arkadaşın evine girerken: **Привет!** (yaşıta) veya **Здравствуйте!** (aileye)",
            "Dükkana girerken: **Здравствуйте** veya bir baş sallama yeterlidir",
          ],
        },
        {
          h3: "Grup selamlaması",
          content:
            "**Здравствуйте**, bir grubu resmi olarak selamlamak için doğru formdur. **Привет всем!** (Privet vsem! — Herkese selam!), yakın arkadaşlar veya iş arkadaşları grubu için gayri resmi karşılıktır.",
        },
      ],
    },
    {
      h2: "Telaffuz İpuçları ve Yaygın Hatalar",
      content:
        "Çoğu öğrenci için en büyük zorluk **Здравствуйте**'dir — imkânsız görünür, ancak püf noktasını öğrenince halledilebilir hale gelir.",
      subsections: [
        {
          h3: "Здравствуйте nasıl telaffuz edilir",
          content:
            "**Здравствуйте**'nin 12 harfi vardır ancak yalnızca **8 ses** telaffuz edilir. Anahtar nokta: ilk **В** (ЗД'den sonra) doğal konuşmada sessizdir.\n\n3 heceye bölün:\n1. **ЗДРА** = /zdra/ (ЗД grubu İngilizce 'Wednesday'deki 'zd' gibi)\n2. **ВСТВУЙ** → ilk В sessiz → **СТВУЙ** = /stvooy/ deyin\n3. **ТЕ** = /tye/\n\nSonuç: **ZDRA — stvooy — tye** (vurgu ikinci hecede).\n\nYavaşça üç kez pratik yapın, sonra hızlandırın. Çoğu öğrenci 20 dakika içinde tanınabilir bir versiyona ulaşır.",
        },
        {
          h3: "Kaçınılması gereken yaygın hatalar",
          content:
            "**Hata 1: Yabancılara veya yaşlılara Привет kullanmak.** Bu en yaygın kültürel hatadır. Rusça'da yabancılara gayri resmi hitap kaba kabul edilir — özellikle nesiller arası. Kişisel olarak tanımadığınız herkese her zaman **Здравствуйте** kullanın.\n\n**Hata 2: Здравствуйте'deki tüm harfleri telaffuz etmeye çalışmak.** Hepsini söylemeye çalışmayın — anadili konuşanlar yapmaz. İlk В her zaman doğal konuşmadan düşer.\n\n**Hata 3: Спокойной ночи'yi akşam selamı olarak kullanmak.** Rusça'da **Спокойной ночи** yalnızca yatmadan önce kullanılan bir veda ifadesidir — asla selamlama değil. Akşam birisini selamlamak için **Добрый вечер** kullanın.\n\n**Hata 4: Günün saatini unutmak.** Sabah **Добрый вечер** demek karşınızdakini şaşırtır.",
        },
      ],
    },
  ],
  faq: [
    {
      question: "Rusça'da Здравствуйте ile Привет arasındaki fark nedir?",
      answer:
        "**Здравствуйте**, yabancılara, profesyonellere, yaşlılara ve resmi ortamlarda kullanılan resmi selamlamadır. **Привет**, arkadaşlar, aile ve yaşıtlar için gayri resmi selamlamadır. **Привет**'i resmi bir bağlamda kullanmak kaba görünebilir; **Здравствуйте**'yi yakın arkadaşlarla kullanmak ise katı bir izlenim bırakır.",
    },
    {
      question: "Rusça'da 'günaydın' nasıl denir?",
      answer:
        "**Доброе утро** (Dobroye utro), Rusça'da öğlene kadar kullanılan 'günaydın' ifadesidir. Sıfat formu **доброе** nötr çünkü утро (sabah) nötr bir isimdir. Bu selamlama hem resmi hem gayri resmi bağlamlarda işe yarar.",
    },
    {
      question: "Привет resmi mi yoksa gayri resmi mi?",
      answer:
        "**Привет** (Privet) gayri resmidir — Türkçedeki 'merhaba' veya 'hey'e karşılık gelir. Yalnızca kişisel olarak tanıdığınız kişilerle — arkadaşlar, aile, yaşıt iş arkadaşları veya çocuklar — kullanılmalıdır. Resmi bağlamlarda — yabancılarla, memurlarda, yaşlılarla veya mesleki ortamlarda — **Здравствуйте** kullanın.",
    },
    {
      question: "Rusça'da resmi olarak hoşça kal nasıl denir?",
      answer:
        "Rusça'da resmi veda şekli lafzen 'görüşmeye kadar' anlamına gelen **До свидания** (Do svidaniya)'dır. Daha sıcak bir resmi veda için **Всего доброго** veya **Всего хорошего** (İyi günler) ekleyebilirsiniz. **До встречи** (Görüşürüz) biraz daha az resmidir ve kişiyi tekrar göreceğinizi ima eder.",
    },
    {
      question: "Ruslar telefona cevap verirken ne der?",
      answer:
        "Telefona cevap verirken Ruslar genellikle Fransızcadan alınan **Алло** (Allo) der. Yakın kişiler arasında basit bir **Да?** (Evet?) yaygındır. Mesleki ortamlarda **Слушаю** (Dinliyorum) veya şirket adı ve ardından слушаю duyulabilir.",
    },
    {
      question: "Добрый день'i resmi selamlama olarak kullanabilir miyim?",
      answer:
        "Evet — **Добрый день** (İyi günler, yaklaşık öğleden 18:00'e kadar kullanılır), resmi selamlama olarak tamamen uygundur ve sıcak ama saygılı bir izlenim verir. Gündüz saatlerindeki çoğu resmi durumda **Здравствуйте** yerine güvenle kullanılabilir.",
    },
  ],
  conclusion:
    "Rusça selamlamalar telaffuzdan çok daha fazlasıdır — dilin tüm toplumsal yapısını yansıtır. **Здравствуйте** saygı ve mesafeyi; **Привет** ise sıcaklık ve yakınlığı işaret eder. Saate göre selamlar bağlama olan dikkati; vedalar ise karşıdaki kişiye duyulan ilgiyi gösterir.\n\nTemel bilgilerle başlayın: resmi durumlar için **Здравствуйте**, gayri resmi durumlar için **Привет**, güvenli nötr bir seçenek olarak **Добрый день** ve vedalar için **До свидания** / **Пока**. Bunlar otomatik hale gelince repertuarınızı genişletin.\n\nSelamlamalar Rusça'ya giriş noktanızdır — ama asıl çalışma dilbilgisiyle başlar. Her konuşmadaki isimler, zamirler ve sıfatlar Rusça'nın altı dilbilgisel durumuna göre biçim değiştirir ve **o çekimleri öğrenmek, duraksayan Rusçayı akıcı konuşmaya dönüştüren şeydir**.",
  ctaText: "Russian Cases with Anna'yı İndir — Ücretsiz",
  ctaHref: '/',
  internalLinks: [
    {
      href: '/learn/articles/russian-most-common-words',
      label: "En Yaygın 100 Rusça Kelime: Başlangıç Seviyesi İçin Temel Kelime Listesi",
    },
    {
      href: '/learn/articles/russian-alphabet-cyrillic-guide',
      label: "Rus Alfabesi: Kiril Alfabesini 3 Basit Adımda Öğrenin",
    },
    {
      href: '/learn/articles/russian-word-stress-guide',
      label: "Rusça Kelime Vurgusu: Neden Her Şeyi Değiştirir (ve Nasıl Ustalaşılır)",
    },
    {
      href: '/learn/articles/how-long-learn-russian',
      label: "Rusçayı Öğrenmek Ne Kadar Sürer? (Gerçekçi Zaman Çizelgesi)",
    },
    {
      href: '/learn/articles/best-free-resources-learn-russian',
      label: "2026'da Rusça Öğrenmek İçin En İyi 15 Ücretsiz Kaynak",
    },
    { href: '/practice', label: "Ücretsiz Rusça Çekim Testi (tüm altı hal)" },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Rusça Selamlaşma: Rusça'da Merhaba Nasıl Denir (Tam Kılavuz 2026)",
    description:
      "Tüm Rusça selamlaşmaları öğrenin: resmi Здравствуйте, gayri resmi Привет, saate göre selamlar, vedalar ve telefon selamları.",
    datePublished: '2026-06-08',
    dateModified: '2026-06-08',
    author: {
      '@type': 'Person',
      name: 'Nathan',
      url: 'https://russiandeclensions.com/',
      image: 'https://russiandeclensions.com/landing-cases/founder-photo.webp',
      description: "Fransızca ana dilli, Rusça öğrenen ve pratik ipuçları paylaşan.",
      worksFor: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://russiandeclensions.com/learn/articles/russian-greetings-guide',
    },
    keywords:
      "Rusça selamlaşma, Rusça'da merhaba, привет, здравствуйте, resmi Rusça selamlar, hoşça kal Rusça",
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russia-kremlin-moscow.webp',
      width: 1200,
      height: 630,
    },
  },
};
