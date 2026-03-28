import type { LearnArticle } from '../learnArticles';

export const russianCaseEndingsCheatsheetTr: LearnArticle = {
  slug: 'russian-case-endings-cheatsheet',
  title:
    'Rus çekim ekleri: Nihai özet sayfası ve tablo',
  metaTitle:
    'Rus çekim ekleri özet sayfası | Tam çekim tablosu | Russian Cases with Anna',
  metaDescription:
    'Ücretsiz Rus çekim ekleri özeti: isim çekim tablosu, sıfat ekleri, zamirler (мой, этот), edatlara göre haller. 6 hal, renkli tablo. Yazdırın veya yer imlerine ekleyin.',
  keywords: [
    'rus çekim ekleri',
    'rus çekim tablosu',
    'rus isim çekimi',
    'rus isim ekleri haller',
    'rus haller özeti',
    'rus sıfat çekimi',
  ],
  h1: 'Rus çekim ekleri: Nihai özet sayfası',
  heroImage: {
    src: '/articles/russian-cases-endings-master-chart.webp',
    alt: '6 hal için çekim tablosu içeren Rus çekim ekleri ana tablosu',
    width: 1200,
    height: 630,
  },
  intro:
    'Rus çekim eklerine hâkim olmak, Rus dilbilgisinin omurgasıdır. Hallerin ne olduğunu anlamaya çalışan tam bir başlangıç seviyesinde olun ya da ekleri karıştıran orta seviye bir öğrenci — bu özet sayfası ihtiyacınız olan tüm çekim tablolarını tek yerde toplar.\n\nBu sayfayı yer imlerine ekleyin. Çıktı alın. Ekran görüntüsü alın. Rus çekim tablosu için tekrar tekrar döneceğiniz kaynak budur.',
  whatYouLearn: [
    'Tam Rus isim çekim tablosu (tüm cinsiyetler, tekil ve çoğul)',
    'Rus sıfat çekim tablosu (sert ve yumuşak gövdeler)',
    'Kişi zamiri çekimi (я, ты, он, она, мы, вы, они)',
    'İyelik zamiri çekimi (мой, наш — ve diğerlerini türetme)',
    'İşaret zamirleri (этот / тот)',
    'Edat → hal başvuru tablosu',
    'Ekleri etkileyen temel yazım kuralları',
  ],
  leadMagnetCta: {
    title: 'Rus çekimlerini etkileşimli çalışın',
    description:
      'Mobil uygulamamız özellikle Rus halleri ve çekimler için tasarlandı: akıllı alıştırmalar, aralıklı tekrar ve gerçek Rus örnekleri — Android ve iOS’ta.',
    ctaText: 'Uygulamayı indirin ve bugün çalışmaya başlayın',
    ctaHref: '/',
  },
  internalLinks: [
    {
      href: '/learn/lessons/russian-cases-complete-guide',
      label:
        'Rus hallerine tam rehber: Örneklerle açıklanan 6 hal',
    },
    {
      href: '/learn/lessons/dative-case-declension',
      label:
        'Rus datifi: Rusçada «-e / için» nasıl söylenir',
    },
  ],
  sections: [
    {
      h2: 'Bölüm 1: Rus isim çekim ekleri — tam tablo',
      content:
        'Aşağıdaki tablo Rus isim eklerini **6 halin tümü**, tüm cinsiyetler (eril, dişil, nötr) için hem **tekil hem çoğul** gösterir.\n\nSert gövdeler (en yaygın) ve yumuşak gövdeler ayrı sütunlardadır.',
      subsections: [
        {
          h3: 'Bu tabloyu nasıl okursunuz',
          content:
            '**E. sert** = Sert gövdeli eril (стол, брат). **E. yumuş** = Yumuşak gövdeli eril (музей, гений). **D. sert** = -а ile dişil (женщина, книга). **D. yumuş** = -я ile dişil (неделя, земля). **D. (-ь)** = Yumuşak işaretli dişil (ночь, дочь).\n\n**N. (-о)** = Sert nötr (окно, слово). **N. (-е)** = Yumuşak nötr (море, поле).',
        },
      ],
      table: {
        caption: 'Hale, cinsiyete ve sayıya göre isim ekleri',
        boldColumnIndices: [0, 1, 2, 3, 4, 5, 6, 7],
        accentColumnIndices: [0],
        headers: [
          'Hal',
          'E. sert',
          'E. yumuş',
          'D. sert (-а)',
          'D. yumuş (-я)',
          'D. (-ь)',
          'N. (-о)',
          'N. (-е)',
        ],
        rows: [
          ['TEKİL', '', '', '', '', '', '', ''],
          ['Yalın', '-Ø', '-й / -ь', '-а', '-я', '-ь', '-о', '-е'],
          ['Genitif', '-а', '-я', '-ы / -и', '-и', '-и', '-а', '-я'],
          ['Datif', '-у', '-ю', '-е / -и', '-е / -и', '-и', '-у', '-ю'],
          ['Belirtme (cansız)', '= yalın', '= yalın', '-у', '-ю', '-ь', '= yalın', '= yalın'],
          ['Belirtme (canlı)', '= gen.', '= gen.', '-у', '-ю', '-ь', '= yalın', '= yalın'],
          ['Araçlık', '-ом', '-ем / -ём', '-ой / -ей', '-ей', '-ью', '-ом', '-ем'],
          ['Bulunma', '-е', '-е / -и', '-е / -и', '-е / -и', '-и', '-е', '-е'],
          ['ÇOĞUL', '', '', '', '', '', '', ''],
          ['Yalın', '-ы / -и', '-и', '-ы / -и', '-и', '-и', '-а / -я', '-я'],
          ['Genitif', '-ов / -ев', '-ев / -ей', '-Ø / -ей', '-ей', '-ей', '-Ø / -ей', '-ей'],
          ['Datif', '-ам', '-ям', '-ам', '-ям', '-ям', '-ам', '-ям'],
          [
            'Belirtme',
            '= yal./gen.',
            '= yal./gen.',
            '= yal./gen.',
            '= yal./gen.',
            '= yal./gen.',
            '= yal./gen.',
            '= yal./gen.',
          ],
          ['Araçlık', '-ами', '-ями', '-ами', '-ями', '-ями', '-ами', '-ями'],
          ['Bulunma', '-ах', '-ях', '-ах', '-ях', '-ях', '-ах', '-ях'],
        ],
      },
      bullets: [
        '**Canlı belirtme (eril):** canlı eril isimler belirtmede **genitif biçimini** alır. Cansız eriller yalın ile aynı kalır.',
        '**Belirtme çoğul:** cansız çoğul = yalın çoğul; canlı çoğul = genitif çoğul.',
        '**Genitif çoğulda sıfır ek:** birçok dişil -а ismi genitif çoğulda **sıfır ek** alır (женщина → женщин). Bu, Rus çekiminin en zorlu alanlarından biridir.',
        '**8 harf kuralı:** **г, к, х, ж, ш, щ, ч, ц** sonrasında Ы değil **И** yazın (örn. книги, книгы değil).',
        '**7 harf kuralı:** ж, ш, щ, ч, ц sonrasında vurgulu hecede **А** yazın Я değil, **У** yazın Ю değil.',
      ],
    },
    {
      h2: 'Bölüm 2: Rus sıfat çekim tablosu',
      content:
        'Rus sıfatları belirledikleri isimle cinsiyet, sayı ve halde **uyumlu** olmalıdır.\n\nAşağıda **sert gövdeli** ve **yumuşak gövdeli** sıfatlar için tam Rus sıfat çekim tablosu yer alır.',
      subsections: [
        {
          h3: 'Sert ve yumuşak sıfat gövdeleri',
          content: 'Sıfatlar gövdelerine göre iki gruba ayrılır:',
          bullets: [
            '**Sert gövde** (красный, новый, старый) — Er. yalın: -ый/-ой | Ekler Ы, О, У kullanır',
            '**Yumuşak gövde** (синий, последний, летний) — Er. yalın: -ий | Ekler И, Е, Ю kullanır',
          ],
        },
      ],
      table: {
        caption: 'Hale, cinsiyete ve gövde tipine göre sıfat ekleri',
        boldColumnIndices: [0, 1, 2, 3, 4, 5],
        accentColumnIndices: [0],
        headers: [
          'Hal',
          'E. sert',
          'E. yumuş',
          'D. sert',
          'D. yumuş',
          'Nötr',
          'Çoğul',
        ],
        rows: [
          ['Yalın', '-ый/-ой', '-ий', '-ая', '-яя', '-ое', '-ые/-ие'],
          ['Genitif', '-ого', '-его', '-ой', '-ей', '-ого', '-ых/-их'],
          ['Datif', '-ому', '-ему', '-ой', '-ей', '-ому', '-ым/-им'],
          ['Bel. (cansız)', '= yalın', '= yalın', '-ую', '-юю', '= yalın', '= yalın'],
          ['Bel. (canlı)', '= gen.', '= gen.', '-ую', '-юю', '= yalın', '= gen.'],
          ['Araçlık', '-ым', '-им', '-ой/-ей', '-ей', '-ым', '-ыми/-ими'],
          ['Bulunma', '-ом', '-ем', '-ой/-ей', '-ей', '-ом', '-ых/-их'],
        ],
      },
      bullets: [
        '**Sert sıfat örneği** — новый (yeni): новый / нового / новому / **новый(ого)** / новым / новом',
        '**Yumuşak sıfat örneği** — синий (mavi): синий / синего / синему / **синий(его)** / синим / синем',
        '**Vurgu kaydırmalı sıfatlar** (молодой gibi): yalın **-ой** ile biter -ый yerine, öteki ekler sert düzenle aynıdır.',
        '**Sıfat–isim uyumu:** sıfat ismiyle **daima** uyumludur. красная книга (gen.: красной книги) — öbekteki her kelime birlikte çekilir.',
        '**Kısa sıfatlar:** Rusçada yüklemsel kullanılan (быть sonrası) kısa sıfat formları da vardır (краток, красив). Bunlar hale göre **çekilmez**.',
      ],
    },
    {
      h2: 'Bölüm 3: Rus kişi zamiri çekimi',
      content:
        'Kişi zamirleri haller arasında isim veya sıfatlardan **çok daha fazla** değişir; **tek tek ezberlenmelidir**.\n\nAşağıdaki tablo tüm Rus kişi zamirlerinin tam çekimini verir.',
      table: {
        boldColumnIndices: [0, 1, 2, 3, 4, 5, 6],
        accentColumnIndices: [0],
        headers: [
          'Hal',
          'я (ben)',
          'ты (sen)',
          'он/оно (o/o)',
          'она (o)',
          'мы (biz)',
          'вы (siz)',
          'они (onlar)',
        ],
        rows: [
          ['Yalın', 'я', 'ты', 'он/оно', 'она', 'мы', 'вы', 'они'],
          ['Genitif', 'меня', 'тебя', 'его', 'её', 'нас', 'вас', 'их'],
          ['Datif', 'мне', 'тебе', 'ему', 'ей', 'нам', 'вам', 'им'],
          ['Belirtme', 'меня', 'тебя', 'его', 'её', 'нас', 'вас', 'их'],
          ['Araçlık', 'мной', 'тобой', 'им', 'ей', 'нами', 'вами', 'ими'],
          ['Bulunma', 'мне', 'тебе', 'нём', 'ней', 'нас', 'вас', 'них'],
        ],
      },
      bullets: [
        '**Н- ön eki kuralı:** üçüncü şahıs zamiri (он, она, оно, они) bir edattan sonra gelince **Н-** eklenir: у него (у его değil), к ней (к ей değil), с ними (с ими değil).',
        '**Genitif = belirtme** kişi zamirleri için: меня, тебя, его, её, нас, вас, их her iki halde de **aynıdır**.',
        '**о/об sonrası formlar:** обо мне, о тебе, о нём, о ней, о нас, о вас, о них.',
      ],
    },
    {
      h2: 'Bölüm 4: İyelik zamiri çekimi (мой, наш)',
      content:
        'Rusçada iyelik zamirleri de hal, cinsiyet ve sayıya göre çekilir. Tablo **мой** (benim) ve **наш** (bizim) kümelerini kapsar — en düzensiz ve en önemli ikilidir.\n\nDiğerleri benzer kalıplar izler: **твой** (senin) — мой gibi çekilir. **ваш** (sizin) — наш gibi. **его / её / их** (onun/onların) — **çekilmez**! Tüm hallerde değişmez kalırlar.',
      table: {
        caption: 'мой ve наш tam çekimi',
        boldColumnIndices: [0, 1, 2, 3, 4],
        accentColumnIndices: [0],
        headers: ['Hal', 'Er.', 'Nötr', 'Diş.', 'Çoğul'],
        rows: [
          ['МОЙ — benim', '', '', '', ''],
          ['Yalın', 'мой', 'моё', 'моя', 'мои'],
          ['Genitif', 'моего', 'моего', 'моей', 'моих'],
          ['Datif', 'моему', 'моему', 'моей', 'моим'],
          ['Bel. (cansız)', 'мой', 'моё', 'мою', 'мои'],
          ['Bel. (canlı)', 'моего', 'моё', 'мою', 'моих'],
          ['Araçlık', 'моим', 'моим', 'моей', 'моими'],
          ['Bulunma', 'моём', 'моём', 'моей', 'моих'],
          ['НАШ — bizim', '', '', '', ''],
          ['Yalın', 'наш', 'наше', 'наша', 'наши'],
          ['Genitif', 'нашего', 'нашего', 'нашей', 'наших'],
          ['Datif', 'нашему', 'нашему', 'нашей', 'нашим'],
          ['Bel. (cansız)', 'наш', 'наше', 'нашу', 'наши'],
          ['Bel. (canlı)', 'нашего', 'наше', 'нашу', 'наших'],
          ['Araçlık', 'нашим', 'нашим', 'нашей', 'нашими'],
          ['Bulunma', 'нашем', 'нашем', 'нашей', 'наших'],
        ],
      },
    },
    {
      h2: 'Bölüm 5: İşaret zamiri çekimi (этот / тот)',
      content:
        '**Этот** (bu) ve **тот** (şu/o) hem işaret zamiri hem belirleyici işlev görür.\n\n**Hal, cinsiyet ve sayıya** göre çekilir ve konuşma dilinde çok sık geçer.',
      table: {
        boldColumnIndices: [0, 1, 2, 3, 4, 5, 6],
        accentColumnIndices: [0],
        headers: [
          'Hal',
          'этот (E)',
          'это (N)',
          'эта (D)',
          'эти (çoğ.)',
          'тот (E) / та (D)',
          'те (çoğ.)',
        ],
        rows: [
          ['Yalın', 'этот', 'это', 'эта', 'эти', 'тот / та', 'те'],
          ['Genitif', 'этого', 'этого', 'этой', 'этих', 'того / той', 'тех'],
          ['Datif', 'этому', 'этому', 'этой', 'этим', 'тому / той', 'тем'],
          ['Bel. (cansız)', 'этот', 'это', 'эту', 'эти', 'тот / ту', 'те'],
          ['Bel. (canlı)', 'этого', 'это', 'эту', 'этих', 'того / ту', 'тех'],
          ['Araçlık', 'этим', 'этим', 'этой', 'этими', 'тем / той', 'теми'],
          ['Bulunma', 'этом', 'этом', 'этой', 'этих', 'том / той', 'тех'],
        ],
      },
    },
    {
      h2: 'Bölüm 6: Rus edatlar → hal hızlı başvuru',
      content:
        'Bu tablo başlıca Rus edatlarını gerektirdikleri **hale** bağlar.\n\nEdatları **halleriyle birlikte** öğrenmek şarttır — Rus öğrenenlerin en büyük hata kaynaklarından birini ortadan kaldırır.',
      subsections: [
        {
          h3: 'Önemli: В ve НА iki halli edatlardır',
          content:
            '**в / на + belirtme** = **YÖN** (bir yere doğru hareket). **в / на + bulunma** = **YER** (bir yerde olmak).\n\nÖrnek: Я иду в школу. (gidiyor → belirtme) ve Я в школе. (orada → bulunma).',
        },
      ],
      table: {
        boldColumnIndices: [0, 1],
        accentColumnIndices: [0],
        headers: ['Hal', 'Edatlar', 'Örnekler'],
        rows: [
          [
            'Genitif',
            'без, до, из, у, от, после, для, кроме, вокруг, вместо, мимо',
            'из России, без воды, после урока',
          ],
          [
            'Datif',
            'к, по, благодаря, вопреки, согласно, навстречу',
            'к другу, по улице, благодаря тебе',
          ],
          [
            'Belirtme',
            'в, на (yön), за, через, под (hareket), про, о (çarpma)',
            'в школу, на работу, через час',
          ],
          [
            'Araçlık',
            'с, за (konum), над, под (konum), перед, между, рядом с',
            'с другом, над столом, перед домом',
          ],
          [
            'Bulunma',
            'в, на (yer), о/об, при, по (bazı fiillerden sonra)',
            'в Москве, о работе, при советах',
          ],
        ],
      },
    },
    {
      h2: 'Bölüm 7: Çekim eklerini etkileyen yedi yazım kuralı',
      content:
        'Rus yazım kuralları beklenen hal ekini **geçersiz kılabilir**.\n\nHer öğrenci bu kuralları bilmelidir — bazı isim ve sıfatların standart kalıba **uymamasının** nedenini açıklarlar.',
      subsections: [
        {
          h3: 'Kural 1: 8 harf kuralı (К, Г, Х, Ж, Ш, Щ, Ч, Ц)',
          content:
            '**г, к, х, ж, ш, щ, ч, ц** sonrasında daima Ы yerine **И** yazın. книга → книги (книгы değil), ручка → ручки (ручкы değil).\n\nYalın çoğul, dişil isimlerin genitif tekilinde ve sıfat eklerinde etkilidir.',
        },
        {
          h3: 'Kural 2: 7 harf kuralı (Ж, Ш, Щ, Ч, Ц — vurgulu ünlüler)',
          content:
            'ж, ш, щ, ч, ц sonrasında vurgulu hecede **А** yazın Я değil, **У** yazın Ю değil; vurgusuz hecede **Е** yazın О değil.\n\nDişil tekil araçlık: большой → большой (vurgulu **-ой** doğrudur), fakat тушь → **тушью**. Bu kural nötr isimlerdeki **-ом/-ем** ekleriyle etkileşir.',
        },
        {
          h3: 'Kural 3: Kaçan ünlüler',
          content:
            'Bazı isimler çekimde bir ünlüyü **kaybeder** (о veya е) — buna **kaçan ünlü** (беглая гласная) denir.\n\nотец → отца (е kaybolur). день → дня (е kaybolur). лёд → льда (е/ё kaybolur).',
        },
        {
          h3: 'Kural 4: Ь (yumuşak işaret) davranışı',
          content:
            '**-ь** ile biten dişil isimler hal ekinden önce yumuşak işareti düşürmez — ek ile birleşir.\n\nночь → **ночи** (gen./dat./bulunma), **ночью** (araçlık). Araçlıktaki **-ью** bu isimlere özgüdür.',
        },
        {
          h3: 'Kural 5: Bulunma -У eki (lokatif kalıntısı)',
          content:
            'Küçük bir eril isim grubu **yer** anlatırken (konu değil) bulunmada düzensiz **-у/-ю** kullanır. **в лесу** (ormanda) — в лесе değil. **в году** (yıl içinde). **на берегу** (kıyıda). **на полу** (yerde).\n\nYalnızca в/на + yer ile. О ile normal -е kalır: о лесе (orman hakkında).',
        },
      ],
    },
    {
      h2: 'Bu özet sayfasını etkili kullanma',
      subsections: [
        {
          h3: 'Adım 1 — İsimlerle başlayın',
          content:
            '**İsim çekim tablosu** temeldir. Önce onu öğrenin. En yaygın kalıplara odaklanın: **sert eril gövde** (-стол), **sert dişil gövde** (-книга), **sert nötr gövde** (-окно).\n\nRus isimlerinin çoğunu bunlar karşılar.',
        },
        {
          h3: 'Adım 2 — Sonra sıfatlar',
          content:
            'İsim eklerini bildikten sonra sıfat ekleri çok kolaylaşır — mantık benzerdir.\n\nÖnce **sert gövdeli sıfatlar** (новый), sonra **yumuşak gövde** (синий) ekleyin.',
        },
        {
          h3: 'Adım 3 — Zamirleri ayrı ezberleyin',
          content:
            '**Zamir formları düzensizdir** ve tek tek ezberlenmelidir. İsim veya sıfat kalıplarını izlemezler.\n\nKartlar veya aralıklı tekrar uygulaması kullanın.',
        },
        {
          h3: 'Adım 4 — Edatlar hali sabitler',
          content:
            'Edatlar doğru hal için **en hızlı kestirimdir**: **без**in daima genitif, **к**’nin daima datif istediğini biliyorsanız hal zaten bellidir.\n\n**Edat → hal eşleşmelerine** öncelik verin.',
        },
        {
          h3: 'Adım 5 — Gerçek cümlelerle pratik',
          content:
            'Tablolar tek başına yetmez. Ekleri çalıştıktan sonra **gerçek Rus cümlelerinde** kullanın.\n\nMetin okuyun, dinleyin ve ana dili konuşanların çekimli formları bağlamda nasıl kullandığına dikkat edin.',
        },
      ],
    },
  ],
  conclusion:
    'Bu Rus çekim ekleri özeti ihtiyacınız olan **her şeyi** kapsar: isimler için **6 halin tümü** (tüm cinsiyetler, tekil ve çoğul), sıfatlar (sert ve yumuşak gövdeler), kişi ve iyelik zamirleri, işaret zamirleri ve edat–hal eşleşmeleri.\n\nÇalışırken **bu referansı elinizin altında tutun**. Gerçek Rus pratiğiyle ne kadar çok kullanırsanız, ekler bilinçli ezberden otomatik tanımaya o kadar çabuk geçer.',
  conclusionOutro:
    'Her halin ne anlama geldiğini ve nasıl kullanılacağını tam olarak öğrenmek için ayrıntılı rehberlerimize göz atın:',
  ctaText: 'Uygulamamızla Rus hallerini çalışın',
  ctaHref: '/',
  faq: [
    {
      question: 'Öğrenmesi en zor Rus hal eki hangisidir?',
      answer:
        '**Genitif çoğul** genellikle en zoru sayılır; isim sınıfına göre birden fazla rekabet eden biçim vardır. Örneğin -а dişillerde çoğul genitifte çoğu zaman **sıfır ek** vardır (женщина → женщин); başkaları **-ей** (ночь → ночей) veya belirli erillerde **-ов/-ев** ekler.',
    },
    {
      question: 'Rus sıfatları daima isimle uyumlu mudur?',
      answer:
        'Evet, **daima**. Rus sıfatı ismiyle cinsiyet, sayı ve halde **uyumlu** olmalıdır. İsim eki değişirse sıfat eki de değişir. Buna **gramer uyumu** denir ve Rusçada zorunludur.',
    },
    {
      question: 'Hiç çekilmeyen Rus isimleri var mıdır?',
      answer:
        'Evet. Küçük bir **ödünç yabancı sözcük** kümesi (несклоняемые существительные) asla değişmez: **кофе**, **метро**, **пальто**, **такси**, **кино**. Bunlar hal sisteminin istisnasıdır.',
    },
    {
      question: 'Bir ismin canlı mı cansız mı olduğunu nasıl anlarım?',
      answer:
        '**Canlı isimler** insanlar ve hayvanlardır (человек, кот, студент, врач). **Cansız isimler** nesneler, kavramlar ve soyutlardır (стол, книга, любовь, время). Rus dilbilgisi, Türkçe konuşanların beklemeyeceği bazı şeyleri canlı sayar — örneğin bazı iskambil ve satranç taşları.',
    },
    {
      question: 'Canlı isimlerde genitif ile belirtme arasındaki fark nedir?',
      answer:
        '**Canlı eril** isimlerde belirtme biçimi genitifle **aynıdır**. Ünlü kural: **canlı belirtme = genitif**. Örnek: студент → студента (gen.) = студента (bel.). Hangi hal olduğunu yalnızca cümle yapısından anlarsınız.',
    },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Rus çekim ekleri: Nihai özet sayfası',
    description:
      'Tam özet: isim ve sıfat tabloları, zamirler, edatlara göre haller. 6 hal tek tabloda.',
    datePublished: '2025-03-11',
    dateModified: '2025-03-11',
    author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id':
        'https://russiandeclensions.com/learn/articles/russian-case-endings-cheatsheet',
    },
    keywords:
      'rus çekim ekleri, rus çekim tablosu, rus haller özeti, rus zamirleri, edatlar ve haller',
  },
};
