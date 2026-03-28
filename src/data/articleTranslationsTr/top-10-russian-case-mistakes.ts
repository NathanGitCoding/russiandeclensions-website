import type { LearnArticle } from '../learnArticles';

/** Türkçe çeviri: `top-10-russian-case-mistakes` (EN kaynak: `learnArticles.ts`). Örneklerdeki Kiril aynen. */
export const top10RussianCaseMistakesTr: LearnArticle = {
  slug: 'top-10-russian-case-mistakes',
  title:
    'İngilizce konuşanların Rusça hallerde yaptığı top 10 hata (ve nasıl düzeltilir)',
  metaTitle:
    'Rusça hal hataları top 10 (İngilizce konuşanlar) | Dilbilginizi düzeltin | Russian Cases with Anna',
  metaDescription:
    'İngilizce konuşan yapanların en yaygın 10 hal hatası — teşhis ve çözüm. Yanlış vs doğru örnekler, her hatanın nedeni ve kalıcı olarak nasıl önleneceği.',
  keywords: [
    'Rusça hal hataları',
    'Rusça dilbilgisi hataları İngilizce',
    'Rusça haller neden zor',
    'Rusça haller kafa karıştırıcı',
    'yaygın Rusça dilbilgisi hataları',
  ],
  h1: 'İngilizce konuşanların Rusça hallerde yaptığı top 10 hata (ve nasıl düzeltilir)',
  heroImage: {
    src: '/articles/top-russian-case-errors-and-mistakes-by-english-speakers.webp',
    alt:
      'İngilizce konuşanların Rusçada yaptığı başlıca hal hataları',
    width: 1200,
    height: 630,
  },
  intro:
    'En yaygın Rusça dilbilgisi hataları — teşhis ve çözüm. Bu makale, İngilizce konuşanların yaptığı **en sık 10 hal hatasını** bir araya getiriyor — binlerce öğrenci etkileşimi, forum ve alıştırmadan derlenmiştir.\n\nHer hata yanlış biçim, doğru biçim ve hatanın **neden** olduğu ile **nasıl** kalıcı olarak önleneceğinin net açıklamasıyla sunulur. Tanı kontrol listesi olarak kullanın — kaçını siz yapıyorsunuz?',
  whatYouLearn: [
    'Yanlış ve doğru örneklerle **en yaygın 10 hal hatası**',
    'Her hatanın neden oluştuğu (kök neden)',
    'Her hatayı kalıcı olarak düzeltme',
    '10 hatanın hızlı referans tablosu',
    'Bu hataları bırakmak için **5 pratik strateji**',
    'Seviyenizi ölçmek için kendi kendine test',
  ],
  tableAccentVariant: 'orange',
  leadMagnetCta: {
    title: 'Hedefli drilllerle hal hatalarınızı düzeltin',
    description:
      'Mobil uygulamamız zayıf noktalarınızı bulur ve ustalığa kadar çalıştırır. Akıllı egzersizler, aralıklı tekrar — Android ve iOS.',
    ctaText: 'Uygulamayı indirin, bugün pratiğe başlayın',
    ctaHref: '/',
  },
  internalLinks: [
    {
      href: '/learn/lessons/russian-cases-complete-guide',
      label:
        'Rusça haller rehberi: örneklerle 6 hal',
    },
    {
      href: '/learn/articles/russian-case-endings-cheatsheet',
      label: 'Rusça hal ekleri: nihai özet tablosu',
    },
    {
      href: '/learn/articles/how-to-practice-russian-cases',
      label: 'Rusça halleri nasıl çalışılır: 5 kanıtlanmış yöntem',
    },
  ],
  sections: [
    {
      h2: 'İngilizce konuşanlar Rusça hallerde neden zorlanıyor',
      content:
        'Hatalara geçmeden önce, Rusça hallerin **İngilizce konuşanlar** için neden bu kadar zor olduğunu anlamak faydalı:',
      bullets: [
        '**İngilizcede neredeyse çekim yok** — dilbilgisel rolü kelime sırası (ekler değil) gösterir. Rusça ikisini de kullanır.',
        '**İngilizce öğrenenlerin «hangi hal?» sezgisi yok** — bu sıfırdan inşa edilir.',
        '**Rusçada 6 hal** vardır; her isim, sıfat, zamir ve sayı çekilir. Çok fazla form.',
        '**Bazı Rusça yapılar** İngilizceye göre kavramsal olarak tersidir (**нравиться** — «hoşuna gitmek/sevmek» gibi).',
        'Belirtmede **canlı/cansız ayrımı** İngilizcede karşılığı yoktur.',
      ],
    },
    {
      h2: 'En yaygın 10 hal hatası',
      content:
        'Bu kök nedenleri anlamak yardımcı olur. Şimdi ürettikleri 10 somut hataya bakalım.',
      mistakeCards: [
        {
          title: 'HATA #1: НЕТ sonrası yalın hal',
          wrong: 'Нет кот. | У меня нет машина. | Здесь нет сахар.',
          correct: 'Нет кота. | У меня нет машины. | Здесь нет сахара.',
          why: 'Sabit kural olarak çalışın: **нет = «X yok» = daima genitif**. Her seferinde.',
          fix: 'Rusça genitif — kullanım 2 (yokluk ve olumsuzluk)',
          fixHref: '/learn/articles/russian-genitive-case',
        },
        {
          title: 'HATA #2: Doğrudan nesne olarak yalın hal',
          wrong: 'Я вижу кот. | Я читаю книга. | Она любит музыка.',
          correct: 'Я вижу кота. | Я читаю книгу. | Она любит музыку.',
          why: 'Geçişli fiil kullandığınızda (**вижу**, **читаю**, **люблю**, **покупаю**…) nesneyi kontrol edin. **Dişi -а → -у.** Canlı erkek → genitif biçimi. Cansız erkek → değişmez.',
          fix: 'Rusça belirtme hali — doğrudan nesneler',
          fixHref: '/learn/articles/russian-accusative-case',
        },
        {
          title: 'HATA #3: Canlı erkeği cansız gibi kullanmak',
          wrong: 'Я вижу студент. | Я встретил врач. | Полиция ищет преступник.',
          correct: 'Я вижу студента. | Я встретил врача. | Полиция ищет преступника.',
          why: 'Unutmayın: **canlı erkek belirtme = genitif biçimi**. **студент** → **студента**. **врач** → **врача**. Sorun: kişi veya hayvan mı? Evetse belirtme için genitif biçimini kullanın.',
          fix: 'Rusça belirtme hali — canlı vs cansız',
          fixHref: '/learn/articles/russian-accusative-case',
        },
        {
          title: 'HATA #4: НРАВИТЬСЯ ile Я yerine Мне',
          wrong: 'Я нравится музыка. | Я нравятся эти книги. | Он нравится футбол.',
          correct: 'Мне нравится музыка. | Мне нравятся эти книги. | Ему нравится футбол.',
          why: 'Kalıbı yerleştirin: **[kişi datif] + нравится + [özne]**. **нравится** (tekil) / **нравятся** (çoğul), hoşuna giden ŞEY ile uyumlu, kişi ile değil.',
          fix: 'Rusça datif — НРАВИТЬСЯ yapısı',
          fixHref: '/learn/articles/russian-dative-case',
        },
        {
          title: 'HATA #5: Yer için в + belirtme (bulunma yerine)',
          wrong: 'Я сейчас в школу. | Он живёт в Москву. | Книга в сумку.',
          correct: 'Я сейчас в школе. | Он живёт в Москве. | Книга в сумке.',
          why: '**в** veya **на** kullanmadan önce: **şey/kişi zaten orada mı (yer → bulunma)** yoksa **oraya mı gidiyor (yön → belirtme)**?',
          fix: 'Rusça bulunma hali — В ile НА',
          fixHref: '/learn/lessons/russian-cases-complete-guide',
        },
        {
          title: 'HATA #6: Был/Стала/Работает sonrası mesleklerde yalın hal',
          wrong: 'Она была учитель. | Мой отец был врач. | Он работает инженер.',
          correct: 'Она была учительницей. | Мой отец был врачом. | Он работает инженером.',
          why: 'Kural: **gelecek veya geçmiş olmak + meslek = araç hali**. **Стать** + meslek = araç hali. **Работать** + meslek = araç hali. Yalnız şimdiki zaman genelde yalına izin verir.',
          fix: 'Rusça araç hali — meslekler ve roller',
          fixHref: '/learn/articles/russian-instrumental-case',
        },
        {
          title: 'HATA #7: Genitif çoğulda her isme -ОВ eklemek',
          wrong: 'много женщинов | много книгов | много окнов | нет девушков',
          correct: 'много женщин | много книг | много окон | нет девушек',
          why: '**Sıfır ek kalıbını** ezberleyin: -а dişi isimler her şeyi kaybeder (**женщина** → **женщин**, **книга** → **книг**). -о nötrleri de, kaçan ünlülerle (**окно** → **окон**, **яблоко** → **яблок**). Çok sık sözcükler — ayrıca drill yapın.',
          fix: 'Rusça genitif — genitif çoğul ekleri',
          fixHref: '/learn/articles/russian-genitive-case',
        },
        {
          title: 'HATA #8: Sayılardan sonra yanlış hal',
          wrong: 'пять стол | три книга | много студент',
          correct: 'пять столов | три книги | много студентов',
          why: 'Üç grup: **1 = yalın tekil** | **2/3/4 = genitif tekil** | **5+ = genitif çoğul**. Rusçada her sayıda uygulayın. Ayrıca: **много**, **мало**, **несколько**, **сколько** → genitif çoğul.',
          fix: 'Rusça genitif — sayılar ve miktar',
          fixHref: '/learn/articles/russian-genitive-case',
        },
        {
          title: 'HATA #9: -ий/-ие/-ия için -Е yerine doğru olmayan ek',
          wrong: 'в Россие | в здание | на станцие | о путешествие',
          correct: 'в России | в здании | на станции | о путешествии',
          why: 'Kural: **-ий/-ие/-ия → bulunmada daima -ИИ** (-ия isimlerinde datifte de). -ия ile biten ülke adları özellikle önemli: **в России**, **в Италии**, **в Германии**, **в Австралии**.',
          fix: 'Rusça bulunma hali — özel -ИИ eki',
          fixHref: '/learn/lessons/russian-cases-complete-guide',
        },
        {
          title: 'HATA #10: ЗАНИМАТЬСЯ ve diğer dönüşlü fiillerle belirtme',
          wrong: 'Я занимаюсь музыку. | Она интересуется историю. | Он увлекается футбол.',
          correct: 'Я занимаюсь музыкой. | Она интересуется историей. | Он увлекается футболом.',
          why: 'Bu dönüşlü fiilleri **araç hali** ile birlikte öğrenin: **заниматься** + araç hali, **интересоваться** + araç hali, **гордиться** + araç hali, **восхищаться** + araç hali. Bunlar için ayrı kart seti yapın.',
          fix: 'Rusça araç hali — araç hali alan fiiller',
          fixHref: '/learn/articles/russian-instrumental-case',
        },
      ],
    },
    {
      h2: 'Top 10 dışı bonus hatalar',
      content:
        'Onur listesi — çok yaygın ama top 10’dan biraz daha az evrensel:',
      bullets: [
        '**Edat sonrası zamirlerde Н- unutmak:** к ему ✗ → к нему ✓ | от ей ✗ → от неё ✓',
        '**из (içeriden) ile от (kişiden) karıştırmak:** из врача ✗ → от врача ✓',
        '**Mülkiyet için datif yerine genitif:** книга другу ✗ → книга друга ✓',
        '**Sıfat uyumunu unutmak:** Я вижу красивый женщину ✗ → красивую женщину ✓',
        '**о ile bulunma yerine belirtme:** о что ты думаешь? ✗ → о чём ты думаешь? ✓',
        '**Genitif çoğulda kaçan ünlüleri unutmak:** ручков ✗ → ручек ✓ | окнов ✗ → окон ✓',
      ],
    },
    {
      h2: 'Hızlı referans: 10 hata bir bakışta',
      content:
        'Rusça yazınızı veya konuşmanızı gözden geçirirken kontrol listesi olarak kullanın:',
      table: {
        caption: 'En yaygın 10 hal hatasının özeti',
        headers: ['#', 'Hata kalıbı', 'Yanlış', 'Doğru', 'Temel kural'],
        boldColumnIndices: [4],
        rows: [
          ['#1', 'нет + yalın', 'нет кот', 'нет кота', 'нет daima genitif alır'],
          [
            '#2',
            'Doğrudan nesne → yalın',
            'Я вижу кот',
            'Я вижу кота',
            'Geçişli fiiller belirtme ister',
          ],
          [
            '#3',
            'Canlı bel. = yalın',
            'Я вижу студент',
            'Я вижу студента',
            'Canlı erkek bel. = genitif biçimi',
          ],
          [
            '#4',
            'я нравится (yanlış «seven»)',
            'Я нравится музыка',
            'Мне нравится музыка',
            'Seven kişi → datif',
          ],
          [
            '#5',
            'Yön = bulunma',
            'Я в школу сейчас',
            'Я в школе сейчас',
            'Durgun yer → bulunma',
          ],
          [
            '#6',
            'был/стала sonrası meslekler',
            'Она была учитель',
            'Она была учителем',
            'Geçmiş olmak + meslek → araç hali',
          ],
          [
            '#7',
            'Gen. çoğ. → -ов',
            'много женщинов',
            'много женщин',
            '-а dişiler → gen. çoğ.’da sıfır ek',
          ],
          [
            '#8',
            'Sayılar: hep aynı hal',
            'пять стол',
            'пять столов',
            '5+ → genitif çoğul',
          ],
          [
            '#9',
            '-ий/-ие/-ия → -е',
            'в Россие (yanlış)',
            'в России (doğru)',
            'Bu isimler -ИИ alır, -Е değil',
          ],
          [
            '#10',
            'Заниматься + belirtme',
            'заниматься музыку',
            'заниматься музыкой',
            'заниматься daima araç hali alır',
          ],
        ],
      },
    },
    {
      h2: 'Bu hataları bırakmak: 5 pratik strateji',
      content: '',
      subsections: [
        {
          h3: '1. Dilbilgisi kurallarını öğrenin, yalnız kelime değil',
          content:
            'Bu hataların çoğu kelimeleri dilbilgisi bağlamı olmadan öğrenmekten kaynaklanır. **нет** öğrenirken **нет her zaman genitif** olduğunu da öğrenin. **заниматься** için **заниматься + araç hali**. Kuralları yönettikleri kelimelerle paketleyin.',
        },
        {
          h3: '2. «Hal sorusu» numarasını kullanın',
          content:
            'Cümlede isim kullanmadan önce hal sorusunu yüksek sesle sorun: **Кого? Что?** (belirtme) — **Кому? Чему?** (datif) — **Кем? Чем?** (araç hali). Bu, hal sistemini bilinçle açar ve İngilizce refleksi yavaşlatır.',
        },
        {
          h3: '3. En zor kalıpları ayrı drill edin',
          content:
            'Üç kalıp **hataların %80’ini** üretir: **нет** + genitif, canlı/cansız belirtme, yön (belirtme) vs yer (bulunma). Her biri için ayrı drill yapın, otomatikleşene kadar.',
        },
        {
          h3: '4. Rusça okuyun ve ekleri avlayın',
          content:
            '**Aktif okuma** — her ismin halini belirlemek — hal sezgisini en etkili şekilde geliştirir. **Я вижу студента** okurken yalnız anlamı işlemeyin: **студента** = canlı belirtme = genitif biçimi. Zamanla içgüdü olur.',
        },
        {
          h3: '5. Anında düzeltme alın',
          content:
            'Düzeltilmeyen hal hataları **taşlaşır** — alışkanlık olur, süre uzadıkça kırılması zorlaşır. Uygulama, öğretmen veya dil değişimi ile gerçek zamanlı geri bildirim alın. Ne kadar erken düzeltilirse o kadar az kökleşir.',
        },
      ],
    },
    {
      h2: 'Kendi kendine test: Kaç hatayı yapıyorsunuz?',
      content: 'Top 10 listesinden dürüstçe geçin:',
      bullets: [
        '**0–2 hata:** İleri — bonus hatalara ve ince ayara odaklanın',
        '**3–5 hata:** Orta — en sık 3’ünü önce drill edin',
        '**6–8 hata:** Başlangıç-orta — #1, #2, #5 ile başlayın (en sık)',
        '**9–10 hata:** Başlangıç — halleri sistematik çalışmak için yapılandırılmış uygulamamızı kullanın',
      ],
    },
  ],
  faq: [
    {
      question: 'Rusça haller İngilizce konuşanlar için neden bu kadar zor?',
      answer:
        'Çünkü **İngilizce yüzyıllar önce hal sistemini bıraktı**. Modern İngilizce dilbilgisel rolü neredeyse tamamen kelime sırasıyla işaretler. Rusça bunu isim ekleriyle yapar. İngilizce konuşanların **hiç** hal sezgisi yok — sıfırdan, zaman ve bilinçli pratikle inşa edilmeli.',
    },
    {
      question: 'Rusça halleri ne kadar sürede öğrenilir?',
      answer:
        'Çoğu öğrenci düzenli çalışmayla en yaygın hallerde (yalın, belirtme, genitif) **6–12 ay** içinde rahat bir doğruluğa ulaşır. Düzensiz genitif çoğul ve tüm yer adı istisnaları dahil 6 halin tam komutu genelde **2–4 yıl** ciddi çalışma alır. Oysa odaklı pratikle birkaç ay içinde en sık kalıplarda belirgin ilerleme mümkündür.',
    },
    {
      question: 'En yaygın Rusça hal hatası nedir?',
      answer:
        'Öğrenci hata analizine göre **tek başına en yaygın hata** **нет** sonrası yalın kullanmak — **Нет кот** demek yerine **Нет кота** dememek. İkincisi doğrudan nesneyi belirtmeye çevirmemek (**Я вижу кот** yerine **кота**). Bu iki hata neredeyse her başlangıç cümlesinde çıkar — düzeltmede en yüksek öncelik.',
    },
  ],
  conclusionIntro:
    'Rusça haller gerçekten zordur — ama İngilizce konuşanların yaptığı belirli hatalar **öngörülebilir, teşhis edilebilir ve düzeltilebilir**. Bu makaledeki 10 hata, ana dili İngilizce olanların Rusça hal hatalarının büyük kısmını kapsar. Yol net: hangi hataları yaptığınızı belirleyin, **neden** olduklarını anlayın (genelde İngilizce farklı çalıştığı için) ve yanlış olanı doğru kalıpla değişene kadar drill edin.',
  conclusionBullets: [],
  conclusion:
    'Mobil uygulamamızda hedefli drilllerle hal hatalarınızı düzeltin. Zayıf noktalarınızı bulan ve ustalığa kadar çalıştıran akıllı egzersizler. Android ve iOS.',
  ctaText: 'Uygulamayı indir',
  ctaHref: '/',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      'İngilizce konuşanların Rusça hallerde yaptığı top 10 hata (ve nasıl düzeltilir)',
    description:
      'İngilizce konuşanların en yaygın 10 hal hatası — teşhis ve çözüm. Örnekler, nedenler, düzeltmeler.',
    datePublished: '2026-03-12',
    dateModified: '2026-03-12',
    author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id':
        'https://russiandeclensions.com/learn/articles/top-10-russian-case-mistakes',
    },
    keywords:
      'Rusça hal hataları, Rusça dilbilgisi İngilizce, Rusça haller zor, yaygın Rusça hataları',
  },
};
