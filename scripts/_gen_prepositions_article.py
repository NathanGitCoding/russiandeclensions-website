# One-off generator for russian-prepositions-and-cases translations. Run: python3 scripts/_gen_prepositions_article.py
from __future__ import annotations

import os
import sys

_SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
if _SCRIPT_DIR not in sys.path:
    sys.path.insert(0, _SCRIPT_DIR)

from prepositions_article_i18n import BODY_BLOCKS, REST_DE, REST_PL, REST_TR

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, "src", "data")

ROWS = [
    ("Genitive", "без", "без молока", "Я пью кофе без молока.", "I drink coffee without milk."),
    ("Genitive", "до", "до урока", "Позвони мне до урока.", "Call me before the lesson."),
    ("Genitive", "из", "из России", "Она приехала из России.", "She came from Russia."),
    ("Genitive", "с", "с полки", "Книга упала с полки.", "The book fell off the shelf."),
    ("Genitive", "у", "у меня", "У меня есть кошка.", "I have a cat."),
    ("Genitive", "от", "от друга", "Письмо от друга.", "A letter from a friend."),
    ("Genitive", "после", "после работы", "После работы я устал.", "After work I was tired."),
    ("Genitive", "для", "для тебя", "Это подарок для тебя.", "This is a gift for you."),
    ("Genitive", "кроме", "кроме меня", "Все кроме меня пришли.", "Everyone except me came."),
    ("Genitive", "вокруг", "вокруг города", "Мы ехали вокруг города.", "We drove around the city."),
    ("Genitive", "мимо", "мимо школы", "Он прошёл мимо школы.", "He walked past the school."),
    ("Genitive", "вместо", "вместо кофе", "Выпей воды вместо кофе.", "Drink water instead of coffee."),
    ("Genitive", "напротив", "напротив банка", "Кафе напротив банка.", "The café is across from the bank."),
    ("Genitive", "из-за", "из-за дождя", "Из-за дождя мы остались дома.", "Because of the rain we stayed home."),
    ("Genitive", "из-под", "из-под стола", "Кот вылез из-под стола.", "The cat crawled out from under the table."),
    ("Genitive", "ради", "ради тебя", "Ради тебя я на всё готов.", "For your sake I'm ready for anything."),
    ("Genitive", "около", "около школы", "Встретимся около школы.", "Let's meet near the school."),
    ("Genitive", "вдоль", "вдоль реки", "Мы шли вдоль реки.", "We walked along the river."),
    ("Dative", "к", "к врачу, к морю", "Иди к врачу!", "Go to the doctor!"),
    ("Dative", "по", "по улице, по закону", "Мы гуляли по парку.", "We walked around the park."),
    ("Dative", "благодаря", "благодаря тебе", "Благодаря тебе всё получилось!", "Thanks to you, everything worked out!"),
    ("Dative", "вопреки", "вопреки прогнозу", "Вопреки прогнозу, погода была хорошей.", "Despite the forecast, weather was good."),
    ("Dative", "согласно", "согласно закону", "Согласно закону, это запрещено.", "According to the law, this is forbidden."),
    ("Dative", "навстречу", "навстречу ветру", "Она шла навстречу ветру.", "She walked into the wind."),
    ("Accusative", "в", "в школу", "Я иду в школу.", "I am going to school."),
    ("Accusative", "на", "на работу", "Она едет на работу.", "She is going to work."),
    ("Accusative", "за", "за угол", "Он зашёл за угол.", "He went around the corner."),
    ("Accusative", "под", "под стол", "Кот залез под стол.", "The cat crawled under the table."),
    ("Accusative", "через", "через час", "Приходи через час.", "Come in an hour."),
    ("Accusative", "про", "про тебя", "Он рассказал про тебя.", "He talked about you."),
    ("Accusative", "спустя", "спустя год", "Спустя год он вернулся.", "A year later he returned."),
    ("Accusative", "о/об", "о камень", "Он споткнулся о камень.", "He stumbled over a stone."),
    ("Instrumental", "с", "с другом", "Я иду с другом.", "I am going with a friend."),
    ("Instrumental", "за", "за столом", "Он сидит за столом.", "He is sitting at the table."),
    ("Instrumental", "перед", "перед домом", "Стой перед домом.", "Stand in front of the house."),
    ("Instrumental", "над", "над городом", "Самолёт летит над городом.", "The plane flies above the city."),
    ("Instrumental", "под", "под столом", "Книга под столом.", "The book is under the table."),
    ("Instrumental", "между", "между нами", "Это между нами.", "This is between us."),
    ("Instrumental", "рядом с", "рядом с банком", "Кафе рядом с банком.", "The café is next to the bank."),
    ("Prepositional", "в", "в Москве", "Я живу в Москве.", "I live in Moscow."),
    ("Prepositional", "на", "на столе", "Книга на столе.", "The book is on the table."),
    ("Prepositional", "о/об", "о работе", "Мы говорим о работе.", "We are talking about work."),
    ("Prepositional", "при", "при Сталине", "При Сталине жизнь была трудной.", "Life under Stalin was hard."),
    ("Prepositional", "по", "по приезде", "По приезде он позвонил.", "Upon arriving he called."),
]

MEANINGS = {
    "fr": [
        "sans", "jusqu’à / avant / au plus tard", "de (de l’intérieur)", "de (d’une surface)", "chez / près de / auprès de",
        "de (personne / source)", "après", "pour (au profit de)", "sauf / outre", "autour de", "en passant devant / le long de",
        "à la place de", "en face de", "à cause de / de derrière", "de dessous", "pour (au sens sacrifice / profit)",
        "près de / vers", "le long de", "vers / chez (personne ou but)", "le long de / dans / selon", "grâce à",
        "malgré", "selon (soutenu)", "au-devant de / à la rencontre de", "dans / vers (direction)", "sur / vers (direction)",
        "derrière (mouvement) / pour", "sous (mouvement)", "à travers / par / dans (temps)", "à propos de (familier)",
        "après / plus tard (temps)", "contre (se cogner à)", "avec / de concert avec", "derrière / à (position)", "devant / avant",
        "au-dessus de / sur", "sous (position)", "entre", "à côté de", "dans / à l’intérieur (lieu)", "sur / à (lieu)",
        "à propos de / concernant", "en présence de / sous", "à / dès (formel, après arrivée)",
    ],
    "de": [
        "ohne", "bis / vor / bis zu", "aus (von innen)", "von (von einer Fläche)", "bei / nahe / an",
        "von (Person / Quelle)", "nach", "für (zum Nutzen von)", "außer / neben", "um … herum", "an … vorbei",
        "anstelle von", "gegenüber", "wegen / von hinter", "von unter", "um … willen",
        "nahe / um … herum", "entlang", "zu / auf … zu (Person oder Ziel)", "entlang / in / gemäß", "dank",
        "trotz", "gemäß (formell)", "entgegen", "in / nach (Richtung)", "auf / zu (Richtung)",
        "hinter (Bewegung) / für", "unter (Bewegung)", "über / durch / in (Zeit)", "über (umgangssprachlich)",
        "nach / später (Zeit)", "gegen (anstoßen)", "mit / zusammen mit", "hinter / an (Position)", "vor / bevor",
        "über / oberhalb", "unter (Position)", "zwischen", "neben", "in / innerhalb (Ort)", "auf / an (Ort)",
        "über / betreffend", "in Anwesenheit von / unter", "bei / nach (formell, bei Ankunft)",
    ],
    "tr": [
        "…sız / olmadan", "kadar / önce / en geç", "içinden (yerden)", "yüzeyden", "yanında / yakınında",
        "kimden / kaynaktan", "sonra", "için (yararına)", "hariç / ayrıca", "etrafında", "yanından",
        "yerine", "karşısında", "nedeniyle / arkasından", "altından", "hatırı için",
        "yakınında", "boyunca", "doğru (kişi veya amaç)", "boyunca / içinde / göre", "sayesinde",
        "rağmen", "göre (resmi)", "karşısına doğru", "içine / doğru (yön)", "üzerine / doğru",
        "arkasına (hareket) / için", "altına (hareket)", "karşıdan / içinden / sonra (zaman)", "hakkında (konuşma dili)",
        "sonra / geçince (zaman)", "çarpıp", "ile / birlikte", "arkasında / -de", "önünde / önce",
        "üzerinde / yukarıda", "altında", "arasında", "yanında", "içinde (yer)", "üzerinde / -de",
        "hakkında", "huzurunda / altında (dönem)", "varınca (resmi)",
    ],
    "pl": [
        "bez", "aż do / przed / do (czasu)", "z (z wnętrza)", "z (ze powierzchni)", "u / przy / obok",
        "od (osoby / źródła)", "po", "dla (na korzyść)", "oprócz / poza", "wokół", "mimo / obok",
        "zamiast", "naprzeciwko", "z powodu / spod", "spod", "dla (w imię)",
        "blisko / koło", "wzdłuż", "ku / do (osoba lub cel)", "wzdłuż / po / według", "dzięki",
        "wbrew", "według (urzędowo)", "naprzeciw / ku", "do / w (kierunek)", "na / w (kierunek)",
        "za (ruch) / dla", "pod (ruch)", "przez / w (czas)", "o (potocznie)",
        "po / później (czas)", "o (uderzyć w)", "z / razem z", "za / przy", "przed",
        "nad / ponad", "pod (położenie)", "między", "obok", "w / wewnątrz", "na / przy",
        "o / dotyczące", "za panowania / przy", "po przyjeździe (urzędowo)",
    ],
}

TRANS = {
    "fr": [
        "Je bois mon café sans lait.", "Appelle-moi avant le cours.", "Elle est venue de Russie.", "Le livre est tombé de l’étagère.", "J’ai un chat.",
        "Une lettre d’un ami.", "Après le travail j’étais fatigué.", "C’est un cadeau pour toi.", "Tout le monde est venu sauf moi.", "Nous avons fait le tour de la ville.",
        "Il est passé devant l’école.", "Bois de l’eau à la place du café.", "Le café est en face de la banque.", "À cause de la pluie nous sommes restés à la maison.", "Le chat est sorti de sous la table.",
        "Pour toi je suis prêt à tout.", "Retrouvons-nous près de l’école.", "Nous marchions le long de la rivière.", "Va chez le médecin !", "Nous nous promenions dans le parc.",
        "Grâce à toi tout a réussi !", "Malgré les prévisions, il a fait beau.", "Selon la loi, c’est interdit.", "Elle marchait face au vent.", "Je vais à l’école.",
        "Elle va au travail.", "Il a tourné le coin.", "Le chat s’est glissé sous la table.", "Viens dans une heure.", "Il a parlé de toi.",
        "Un an plus tard il est revenu.", "Il a trébuché sur une pierre.", "Je vais avec un ami.", "Il est assis à table.", "Tiens-toi devant la maison.",
        "L’avion survole la ville.", "Le livre est sous la table.", "Ça reste entre nous.", "Le café est à côté de la banque.", "Je vis à Moscou.",
        "Le livre est sur la table.", "Nous parlons du travail.", "Sous Staline la vie était dure.", "À son arrivée il a téléphoné.",
    ],
    "de": [
        "Ich trinke Kaffee ohne Milch.", "Ruf mich vor der Stunde an.", "Sie kam aus Russland.", "Das Buch fiel vom Regal.", "Ich habe eine Katze.",
        "Ein Brief von einem Freund.", "Nach der Arbeit war ich müde.", "Das ist ein Geschenk für dich.", "Alle außer mir kamen.", "Wir fuhren um die Stadt.",
        "Er ging an der Schule vorbei.", "Trink Wasser statt Kaffee.", "Das Café liegt gegenüber der Bank.", "Wegen des Regens blieben wir zu Hause.", "Die Katze kam von unter dem Tisch.",
        "Um deinetwillen bin ich zu allem bereit.", "Treffen wir uns nahe der Schule.", "Wir gingen den Fluss entlang.", "Geh zum Arzt!", "Wir spazierten im Park.",
        "Dank dir hat alles geklappt!", "Trotz der Vorhersage war das Wetter gut.", "Gesetzlich ist das verboten.", "Sie ging dem Wind entgegen.", "Ich gehe zur Schule.",
        "Sie fährt zur Arbeit.", "Er bog um die Ecke.", "Die Katze kroch unter den Tisch.", "Komm in einer Stunde.", "Er erzählte von dir.",
        "Ein Jahr später kehrte er zurück.", "Er stolperte über einen Stein.", "Ich gehe mit einem Freund.", "Er sitzt am Tisch.", "Steh vor dem Haus.",
        "Das Flugzeug fliegt über der Stadt.", "Das Buch liegt unter dem Tisch.", "Das bleibt unter uns.", "Das Café ist neben der Bank.", "Ich lebe in Moskau.",
        "Das Buch liegt auf dem Tisch.", "Wir sprechen über die Arbeit.", "Unter Stalin war das Leben hart.", "Bei seiner Ankunft rief er an.",
    ],
    "tr": [
        "Sütsüz kahve içiyorum.", "Dersten önce beni ara.", "Rusya’dan geldi.", "Kitap raftan düştü.", "Kedim var.",
        "Arkadaştan bir mektup.", "İşten sonra yorgundum.", "Bu sana bir hediye.", "Ben hariç herkes geldi.", "Şehri turladık.",
        "Okulun yanından geçti.", "Kahve yerine su iç.", "Kafe bankanın karşısında.", "Yağmur yüzünden evde kaldık.", "Kedi masanın altından çıktı.",
        "Senin için her şeye hazırım.", "Okulun yakınında buluşalım.", "Nehir boyunca yürüdük.", "Doktora git!", "Parkta gezdik.",
        "Sayende her şey yolunda!", "Tahminlere rağmen hava güzeldi.", "Kanuna göre bu yasak.", "Rüzgâra karşı yürüdü.", "Okula gidiyorum.",
        "İşe gidiyor.", "Köşeyi döndü.", "Kedi masanın altına girdi.", "Bir saat sonra gel.", "Senden bahsetti.",
        "Bir yıl sonra döndü.", "Bir taşa takıldı.", "Arkadaşımla gidiyorum.", "Masada oturuyor.", "Evin önünde dur.",
        "Uçak şehrin üzerinde uçuyor.", "Kitap masanın altında.", "Bu aramızda.", "Kafe bankanın yanında.", "Moskova’da yaşıyorum.",
        "Kitap masanın üstünde.", "İş hakkında konuşuyoruz.", "Stalin döneminde yaşam zordu.", "Varınca aradı.",
    ],
    "pl": [
        "Piję kawę bez mleka.", "Zadzwoń do mnie przed lekcją.", "Przyjechała z Rosji.", "Książka spadła z półki.", "Mam kota.",
        "List od przyjaciela.", "Po pracy byłem zmęczony.", "To prezent dla ciebie.", "Przyszli wszyscy oprócz mnie.", "Objechaliśmy miasto.",
        "Przeszedł obok szkoły.", "Napij się wody zamiast kawy.", "Kawiarnia jest naprzeciwko banku.", "Z powodu deszczu zostaliśmy w domu.", "Kot wypełzł spod stołu.",
        "Dla ciebie jestem gotów na wszystko.", "Spotkajmy się blisko szkoły.", "Szliśmy wzdłuż rzeki.", "Idź do lekarza!", "Spacerowaliśmy po parku.",
        "Dzięki tobie wszystko się udało!", "Wbrew prognozie pogoda była dobra.", "Zgodnie z prawem jest to zakazane.", "Szła naprzeciw wiatrowi.", "Idę do szkoły.",
        "Jedzie do pracy.", "Zszedł za róg.", "Kot wczołgał się pod stół.", "Przyjdź za godzinę.", "Opowiadał o tobie.",
        "Rok później wrócił.", "Potknął się o kamień.", "Idę z przyjacielem.", "Siedzi przy stole.", "Stań przed domem.",
        "Samolot leci nad miastem.", "Książka jest pod stołem.", "To zostaje między nami.", "Kawiarnia jest obok banku.", "Mieszkam w Moskwie.",
        "Książka leży na stole.", "Rozmawiamy o pracy.", "Za Stalina życie było ciężkie.", "Po przyjeździe zadzwonił.",
    ],
}

CASE = {
    "fr": {"Genitive": "Génitif", "Dative": "Datif", "Accusative": "Accusatif", "Instrumental": "Instrumental", "Prepositional": "Prépositionnel"},
    "de": {"Genitive": "Genitiv", "Dative": "Dativ", "Accusative": "Akkusativ", "Instrumental": "Instrumental", "Prepositional": "Präpositional"},
    "tr": {"Genitive": "Genitif", "Dative": "Datif", "Accusative": "Belirtme", "Instrumental": "Araç hali", "Prepositional": "Bulunma"},
    "pl": {"Genitive": "Dopełniacz", "Dative": "Celownik", "Accusative": "Biernik", "Instrumental": "Narzędnik", "Prepositional": "Miejscownik"},
}

HEADER = {
    "fr": ("Cas", "Prép.", "Sens", "Avec le nom", "Phrase complète + traduction"),
    "de": ("Fall", "Präp.", "Bedeutung", "Mit Nomen", "Voller Satz + Übersetzung"),
    "tr": ("Hal", "Edat", "Anlam", "İsimle", "Tam cümle + çeviri"),
    "pl": ("Przypadek", "Przyim.", "Znaczenie", "Z rzeczownikiem", "Pełne zdanie + tłumaczenie"),
}

EXPORT = {
    "fr": (
        "russianPrepositionsAndCasesFr",
        "articleTranslationsFr",
        "Traduction française de l'article `russian-prepositions-and-cases` (source EN : `learnArticles.ts`). Cyrillique des exemples copié à l'identique",
    ),
    "de": (
        "russianPrepositionsAndCasesDe",
        "articleTranslationsDe",
        "Deutsche Übersetzung des Artikels `russian-prepositions-and-cases` (Quelle EN: `learnArticles.ts`). Kyrillische Beispiele zeichengenau",
    ),
    "tr": (
        "russianPrepositionsAndCasesTr",
        "articleTranslationsTr",
        "Türkçe çeviri: `russian-prepositions-and-cases` (EN kaynak: `learnArticles.ts`). Örneklerdeki Kiril aynen korunmuştur",
    ),
    "pl": (
        "russianPrepositionsAndCasesPl",
        "articleTranslationsPl",
        "Tłumaczenie polskie artykułu `russian-prepositions-and-cases` (źródło EN: `learnArticles.ts`). Cyrylica przykładów zachowana znak po znaku",
    ),
}


def ts_str(s: str) -> str:
    return s.replace("\\", "\\\\").replace("'", "\\'")


def header_line_for(lang: str) -> str:
    h = HEADER[lang]
    parts = ", ".join(f"'{ts_str(x)}'" for x in h)
    return f"        headers: [{parts}],"


def build_rows(lang: str) -> str:
    parts = []
    for i, (ce, prep, wn, rs, _) in enumerate(ROWS):
        case = CASE[lang][ce]
        mean = MEANINGS[lang][i]
        tr = TRANS[lang][i]
        full = f"{rs} — {tr}"
        parts.append(
            "            [\n"
            f"              '{ts_str(case)}',\n"
            f"              '{ts_str(prep)}',\n"
            f"              '{ts_str(mean)}',\n"
            f"              '{ts_str(wn)}',\n"
            f"              '{ts_str(full)}',\n"
            "            ],"
        )
    return "\n".join(parts)


REST_FR = r'''
      {
        h2: 'Prépositions à double cas : deux cas selon le sens',
        content:
          'Certaines prépositions russes peuvent prendre **deux cas différents** ; le sens change selon le cas. Ce sont les **plus importantes à maîtriser** : un seul mauvais cas change le sens de la phrase.',
        table: {
          caption: 'Prépositions à deux cas (в, на, за, под, о/об)',
          boldColumnIndices: [0, 1, 2],
          headers: ['Prép.', 'Cas 1', 'Exemple 1', 'Cas 2', 'Exemple 2'],
          rows: [
            ['в', 'Accusatif', 'в школу (à l’école, direction)', 'Prépositionnel', 'в школе (à l’école, lieu)'],
            ['на', 'Accusatif', 'на работу (au travail, direction)', 'Prépositionnel', 'на работе (au travail, lieu)'],
            [
              'за',
              'Accusatif',
              'сесть за стол (s’asseoir à table)',
              'Instrumental',
              'за столом (assis à table)',
            ],
            [
              'под',
              'Accusatif',
              'положить под стол (mettre sous la table)',
              'Instrumental',
              'под столом (sous la table)',
            ],
            [
              'о/об',
              'Accusatif',
              'споткнуться о порог (trébucher sur le seuil)',
              'Prépositionnel',
              'говорить о работе (parler du travail)',
            ],
          ],
        },
        bullets: [
          '**Règle В/НА direction vs. lieu** — le schéma à double cas le plus testé :',
          '**В/НА + accusatif = DIRECTION** (mouvement vers) : Я иду в школу. Положи книгу на стол.',
          '**В/НА + prépositionnel = LIEU** (être quelque part, statique) : Я нахожусь в школе. Книга лежит на столе.',
        ],
      },
      {
        h2: 'Prépositions + génitif — approfondissement',
        content:
          'Le **génitif** a plus de prépositions que tout autre cas. Voici les plus importantes regroupées par sens.',
        subsections: [
          {
            h3: 'Origine et séparation : из, с, от',
            content:
              '**из** — de l’intérieur d’un lieu : из России, из дома, из школы. **с** — de (d’une surface) : с полки, с работы (fam.), с крыши. **от** — de (personne ou source) : от друга, от врача, от боли. **À distinguer :** из vs. от — **из** pour les lieux (intérieur) ; **от** pour les personnes et sources. Я вернулся из Москвы vs. Я получил письмо от Ивана.',
          },
          {
            h3: 'Temps : до, после, с (…до)',
            content:
              '**до** — jusqu’à / avant : до урока, до свидания. **после** — après : после работы, после дождя. **с … до** — de … à : с утра до вечера.',
          },
          {
            h3: 'Espace : у, около, вокруг, вдоль, мимо, напротив',
            content:
              '**у** — chez / près de : у окна, у меня. **около** — près de : около школы, около часа. **вокруг** — autour : вокруг стола, вокруг города. **вдоль** — le long de : вдоль реки, вдоль дороги. **мимо** — devant / en passant : мимо нас, пройти мимо. **напротив** — en face : напротив банка.',
          },
        ],
      },
      {
        h2: 'Prépositions + datif — approfondissement',
        subsections: [
          {
            h3: 'К — direction vers',
            content:
              "**К** exprime le mouvement ou l’orientation vers une personne, un objet ou un but abstrait — **contrepartie datif** de в/на pour la direction : к врачу, к другу, к окну, стремиться к цели.",
          },
          {
            h3: 'По — la préposition polyvalente',
            content:
              '**Le long de / dans** une surface : гулять по парку, идти по улице. **Moyen de communication :** по телефону, по почте, по интернету. **Matière :** урок по математике, книга по истории. **Temps récurrent :** по понедельникам, по вечерам. **Selon :** по закону, по правилам.',
          },
        ],
      },
      {
        h2: 'Prépositions + accusatif — approfondissement',
        subsections: [
          {
            h3: 'В et НА pour la direction',
            content:
              '**В** et **на** sont les principales prépositions d’**accusatif de direction**. **В** = mouvement vers un espace fermé : в школу, в Россию, в магазин. **НА** = vers une surface ou certains lieux : на стол, на работу, на Кубу.',
          },
          {
            h3: 'ЧЕРЕЗ — à travers / dans (temps)',
            content:
              '**À travers :** переплыть через реку, пройти через лес. **Dans (temps) :** через час, через неделю, через год.',
          },
          {
            h3: 'ЗА et ПОД pour le mouvement',
            content:
              '**За + accusatif** = mouvement derrière : зайти за угол, сесть за стол. **Под + accusatif** = mouvement sous : положить под стол, залезть под кровать.',
          },
        ],
      },
      {
        h2: 'Prépositions + instrumental — approfondissement',
        subsections: [
          {
            h3: 'С — avec',
            content:
              '**С + instrumental** est très fréquent. **Accompagnement :** с другом, с семьёй. **Ingrédients :** кофе с молоком, суп с грибами.',
          },
          {
            h3: 'Prépositions de position spatiale',
            content:
              '**За + instrumental** = derrière / à : за столом, за горой. **Перед + instrumental** = devant : перед домом, перед сном. **Над + instrumental** = au-dessus : над городом, над столом. **Под + instrumental** = en dessous : под столом, под землёй. **Между + instrumental** = entre : между нами, между домами.',
          },
        ],
      },
      {
        h2: 'Prépositions + prépositionnel — approfondissement',
        subsections: [
          {
            h3: 'В et НА pour le lieu',
            content:
              '**В** et **на** au prépositionnel = **lieu statique** — où quelque chose est déjà : **В** : в Москве, в школе, в доме, в России. **НА** : на столе, на работе, на улице, на Кубе.',
          },
          {
            h3: 'О/ОБ — à propos de',
            content:
              '**О + prépositionnel** = sujet de la pensée ou de la parole : говорить о, думать о, мечтать о, писать о. **О чём ?** | **О ком ?** **об** devant voyelle : об этом, об Иване.',
          },
        ],
      },
      {
        h2: 'Stratégies pour mémoriser préposition + cas',
        subsections: [
          {
            h3: 'Stratégie 1 : apprendre par groupes de cas',
            content:
              "Plutôt qu’une préposition isolée, apprenez des **paquets par cas**. Commencez par le bloc génitif (без, до, из, у, от, после, для, кроме) jusqu’à automatisation, puis datif (к, по).",
          },
          {
            h3: 'Stratégie 2 : une phrase mémorable par préposition',
            content:
              'Pour chaque préposition, créez **une phrase personnelle** correcte. Без тебя мне плохо restera plus longtemps que « без + nom ».',
          },
          {
            h3: 'Stratégie 3 : priorité aux doubles cas',
            content:
              '**В, на, за**, **под** : deux cas chacune. **Phrases jumelles** : Я иду в школу / Я в школе. Я поставил книгу за шкаф / Книга за шкафом.',
          },
          {
            h3: 'Stratégie 4 : test « Où ? » vs « Où aller ? »',
            content:
              'Pour **в** et **на** : est-ce **« Où ? »** (prépositionnel) ou **« Où aller ? »** (accusatif) ?',
          },
        ],
      },
    ],
    conclusion:
      'Maîtriser **prépositions et cas** est un levier rapide pour la précision. La clé est la **paire préposition → cas** : sans → génitif, к → datif, etc.\\n\\nCommencez par les **doubles cas** (в, на, за, под). Test **« Où ? » / « Où aller ? »** pour в/на. Phrases réelles — et les paires deviendront automatiques.',
    conclusionBullets: [
      'Le **génitif** a le plus de prépositions (18) — bloc без, до, из, у, от, после, для, кроме.',
      '**В/НА + accusatif** = direction. **В/НА + prépositionnel** = lieu.',
      '**Doubles cas** (в, на, за, под) : mouvement vs position.',
      'Utilisez le tableau maître comme **référence** jusqu’à automatisation.',
    ],
    ctaText: 'Entraînez les prépositions dans l’appli',
    ctaHref: '/',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Prépositions et cas en russe : quel cas après chaque préposition ?',
      description:
        'Guide complet : chaque préposition russe et son cas. 44 prépositions, doubles cas, approfondissement, mémorisation.',
      datePublished: '2026-03-12',
      dateModified: '2026-03-12',
      author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
      publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id':
          'https://russiandeclensions.com/learn/articles/russian-prepositions-and-cases',
      },
      keywords:
        'prépositions cas russe, prépositions génitif russe, в на с по cas russe',
    },
    faq: [
      {
        question: 'Quelles prépositions russes régent le génitif ?',
        answer:
          'Les principales : **без**, **до**, **из**, **с**, **у**, **от**, **после**, **для**, **кроме**, **вокруг**, **мимо**, **вместо**, **напротив**, **из-за**, **из-под**, **ради**, **около**, **вдоль**. Mnémo **БДИ-УОП-ДК** pour les plus fréquentes.',
      },
      {
        question: 'Différence entre в + accusatif et в + prépositionnel ?',
        answer:
          '**в + Accusatif** = **direction** : Я иду в школу. **в + Prépositionnel** = **lieu** : Я в школе. Idem pour на.',
      },
      {
        question: 'Quand с prend-il le génitif ou l’instrumental ?',
        answer:
          '**с + génitif** = « de » (d’une surface) : книга упала с полки. **с + instrumental** = « avec » : я иду с другом. Sens totalement différent.',
      },
    ],
};
'''

REST_BY_LANG = {"fr": REST_FR, "de": REST_DE, "tr": REST_TR, "pl": REST_PL}

if __name__ == "__main__":
    for lang in ("fr", "de", "tr", "pl"):
        exp, folder, comment = EXPORT[lang]
        path = os.path.join(DATA, folder, "russian-prepositions-and-cases.ts")
        header_line = header_line_for(lang)
        rows = build_rows(lang)
        body_start = (
            BODY_BLOCKS[lang]
            .replace("__HEADER_LINE__", header_line)
            .replace("__ROWS__", rows)
        )
        rest = REST_BY_LANG[lang]
        out = f"""import type {{ LearnArticle }} from '../learnArticles';

/** {comment} */
export const {exp}: LearnArticle = {{
  slug: 'russian-prepositions-and-cases',
{body_start}
{rest}
"""
        os.makedirs(os.path.dirname(path), exist_ok=True)
        with open(path, "w", encoding="utf-8") as f:
            f.write(out)
        print("Wrote", path, "lines", len(out.splitlines()))
