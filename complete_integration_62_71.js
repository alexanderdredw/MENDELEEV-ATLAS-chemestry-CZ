const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, 'locales');
const anatomyDataFile = path.join(__dirname, 'js', 'data', 'anatomy-data.js');

const data62_71 = {
    "samarium": {
        "en": {
            "title": "Samarium",
            "desc": "A hard silvery metal used in high-temperature magnets and specialized glass.",
            "details": "<b>Key Facts</b><br>• Chemical Symbol — Sm<br>• Atomic Number — 62<br>• Hard silvery metal that is relatively stable in air<br>• Used in Sm-Co magnets (resistant to demagnetization at high temps)<br>• Essential for precision-guided weapons and stealth technology<br>• Named after the mineral samarskite, honoring engineer Vasili Samarsky-Bykhovets<br>• First element named after a person<br><br><b>Atomic Structure</b><br>• 62 protons in the nucleus<br>• 62 electrons surrounding the nucleus<br>• 7 natural isotopes; Samarium-152 is the most abundant<br>• Electron Configuration — [Xe] 4f⁶ 6s²<br>• Located in Period 6 (Lanthanides)<br><br><b>Physical Properties</b><br>• Bright silvery appearance; hardness similar to iron<br>• Boiling Point — 1794°C<br>• Melting Point — 1072°C<br>• Highly magnetic susceptibility; permanent magnets in alloys<br>• Oxidizes slowly at room temperature<br>• Lustrous when freshly cut but tarnishes in air<br><br><b>Chemical Properties</b><br>• Very reactive rare earth metal<br>• Reacts with water to form Sm(OH)₃ and H₂<br>• Ignites in air at temperatures above 150°C<br>• Forms trivalent compounds (Sm³⁺) and some divalent ones (Sm²⁺)<br>• Typical oxidation state — +3<br><br><b>Applications</b><br>• Magnets: Samarium-cobalt magnets for aerospace and high-temp use<br>• Medicine: Samarium-153 Lexidronam for treating bone cancer pain<br>• Optics: Infrared absorbing glass and specialized camera lenses<br>• Nuclear: Control rods in reactors due to high neutron absorption<br>• Electronics: Capacitors and solid-state devices",
            "fact": "Samarium was the first chemical element to be named after a person (Russian engineer Samarsky).",
            "simple": "Samarium is element 62, a hard metal used for strong magnets and cancer treatment.",
            "detailed": "Samarium is a lanthanide. Its most important use is in Sm-Co magnets, which are second only to neodymium magnets in strength but much better at handling heat.",
            "study": ["Atomic Number: 62", "Symbol: Sm", "Group: Lanthanides", "Mass: 150.36", "Usage: High-temp magnets"],
            "q1": {"text": "What is the atomic number of Samarium?", "opts": ["61", "62", "63", "64"], "correct": 1},
            "q2": {"text": "What is the chemical symbol for Samarium?", "opts": ["S", "Sa", "Sm", "Sn"], "correct": 2},
            "q3": {"text": "What is special about the name of Samarium?", "opts": ["Named after a planet", "Named after a person", "Named after a color", "Named after a god"], "correct": 1},
            "q4": {"text": "Where are Samarium-Cobalt magnets preferred over Neodymium ones?", "opts": ["Cold environments", "Underwater", "High-temp environments", "Space"], "correct": 2},
            "q5": {"text": "What is Samarium-153 used for in medicine?", "opts": ["Vitamins", "X-rays", "Cancer pain treatment", "Antibiotics"], "correct": 2}
        },
        "ru": {
            "title": "Самарий",
            "desc": "Твердый серебристый металл, используемый в высокотемпературных магнитах и спецстеклах.",
            "details": "<b>Основные факты</b><br>• Химический символ — Sm<br>• Атомный номер — 62<br>• Твердый серебристый металл, относительно стабильный на воздухе<br>• Используется в Sm-Co магнитах (стойких к размагничиванию при нагреве)<br>• Важен для высокоточного оружия и стелс-технологий<br>• Назван в честь минерала самарскита и инженера В. М. Самарского-Быховца<br>• Первый элемент, названный в честь реального человека<br><br><b>Атомная структура</b><br>• 62 протона в ядре<br>• 62 электрона вокруг ядра<br>• 7 природных изотопов; Самарий-152 — самый частый<br>• Электронная конфигурация — [Xe] 4f⁶ 6s²<br>• Расположен в 6-м периоде (лантаноиды)<br><br><b>Физические свойства</b><br>• Яркий серебристый вид; твердость близка к железу<br>• Температура кипения — 1794°C<br>• Температура плавления — 1072°C<br>• Сильные магнитные свойства в сплавах<br>• Медленно окисляется при комнатной температуре<br>• Блестит на свежем срезе, но тускнеет на воздухе<br><br><b>Химические свойства</b><br>• Активный редкоземельный металл<br>• Реагирует с водой, образуя Sm(OH)₃ и H₂<br>• Самовоспламеняется на воздухе при темп. выше 150°C<br>• Образует трехвалентные (Sm³⁺) и некоторые двухвалентные соединения<br>• Типичная степень окисления — +3<br><br><b>Применение</b><br>• Магниты: Самарий-кобальтовые магниты для авиакосмоса и высоких темп.<br>• Медицина: Самарий-153 для лечения болей при раке костей<br>• Оптика: стекло, поглощающее ИК-излучение, и линзы камер<br>• Ядерная техника: поглотитель нейтронов в стержнях реакторов<br>• Электроника: конденсаторы и твердотельные устройства",
            "fact": "Самарий был первым химическим элементом, названным в честь человека (русского инженера Самарского).",
            "simple": "Самарий — это элемент №62, твердый металл, используемый для мощных магнитов и лечения рака.",
            "detailed": "Самарий — лантаноид. Его важнейшее применение — магниты Sm-Co, которые уступают неодимовым в силе, но гораздо лучше выдерживают нагрев.",
            "study": ["Атомный номер: 62", "Символ: Sm", "Группа: Лантаноиды", "Масса: 150.36", "Применение: Термостойкие магниты"],
            "q1": {"text": "Какой атомный номер у самария?", "opts": ["61", "62", "63", "64"], "correct": 1},
            "q2": {"text": "Какой химический символ у самария?", "opts": ["S", "Sa", "Sm", "Sn"], "correct": 2},
            "q3": {"text": "Что особенного в названии самария?", "opts": ["В честь планеты", "В честь человека", "В честь цвета", "В честь бога"], "correct": 1},
            "q4": {"text": "Где самарий-кобальтовые магниты лучше неодимовых?", "opts": ["В холоде", "Под водой", "При высоких темп.", "В космосе"], "correct": 2},
            "q5": {"text": "Для чего используется Самарий-153 в медицине?", "opts": ["Витамины", "Рентген", "Лечение болей при раке", "Антибиотики"], "correct": 2}
        },
        "kk": {
            "title": "Самарий",
            "desc": "Жоғары температуралық магниттер мен арнайы шыныларда қолданылатын қатты күміс металл.",
            "details": "<b>Негізгі фактілер</b><br>• Химиялық таңбасы — Sm<br>• Атомдық нөмірі — 62<br>• Ауада салыстырмалы түрде тұрақты қатты күміс металл<br>• Sm-Co магниттерінде (жоғары темп. магнитсізденуге төзімді) қолданылады<br>• Жоғары дәлдіктегі қару-жарақ пен стелс-технологиялар үшін маңызды<br>• Самарскит минералы мен инженер В. М. Самарский-Быховецтің құрметіне аталған<br>• Нақты адамның есімімен аталған алғашқы элемент<br><br><b>Атомдық құрылымы</b><br>• Ядрода 62 протон бар<br>• Ядро айналасында 62 электрон<br>• 7 табиғи изотоп; Самарий-152 — ең жиі кездесетіні<br>• Электрондық конфигурациясы — [Xe] 4f⁶ 6s²<br>• 6-шы кезеңде орналасқан (лантаноидтар)<br><br><b>Физикалық қасиеттері</b><br>• Ашық күміс түсті; қаттылығы темірге жақын<br>• Қайнау температурасы — 1794°C<br>• Балқу температурасы — 1072°C<br>• Қорытпалардағы күшті магниттік қасиеттер<br>• Бөлме температурасында баяу тотығады<br>• Жаңа кесілген жері жылтыр, бірақ ауада тез күңгірттенеді<br><br><b>Химиялық қасиеттері</b><br>• Белсенді сирек жер металы<br>• Сумен әрекеттесіп, Sm(OH)₃ және H₂ түзеді<br>• 150°C-тан жоғары темп. ауада өздігінен тұтанады<br>• Үш валентті (Sm³⁺) және кейбір екі валентті қосылыстар түзеді<br>• Тән тотығу дәрежесі — +3<br><br><b>Қолданылуы</b><br>• Магниттер: авиағарыш және жоғары темп. арналған самарий-кобальт магниттері<br>• Медицина: сүйек рагы кезіндегі ауырсынуды емдеуге арналған Самарий-153<br>• Оптика: ИҚ-сәулені жұтатын шыны және камера линзалары<br>• Ядролық техника: реактор өзектеріндегі нейтрон жұтқыш<br>• Электроника: конденсаторлар мен қатты денелі құрылғылар",
            "fact": "Самарий адамның (орыс инженері Самарский) құрметіне аталған алғашқы химиялық элемент болды.",
            "simple": "Самарий — №62 элемент, қуатты магниттер жасау және ракты емдеу үшін қолданылатын қатты металл.",
            "detailed": "Самарий — лантаноид. Оның ең маңызды қолданылуы — Sm-Co магниттері, олар күші жағынан неодим магниттерінен кейін екінші орында, бірақ қызуға әлдеқайда төзімді.",
            "study": ["Атомдық нөмір: 62", "Таңбасы: Sm", "Тобы: Лантаноидтар", "Массасы: 150.36", "Қолданылуы: Ыстыққа төзімді магниттер"],
            "q1": {"text": "Самарийдің атомдық нөмірі қандай?", "opts": ["61", "62", "63", "64"], "correct": 1},
            "q2": {"text": "Самарийдің химиялық таңбасы қандай?", "opts": ["S", "Sa", "Sm", "Sn"], "correct": 2},
            "q3": {"text": "Самарий атауында қандай ерекшелік бар?", "opts": ["Планета құрметіне", "Адам құрметіне", "Түс құрметіне", "Құдай құрметіне"], "correct": 1},
            "q4": {"text": "Қай жерде самарий-кобальт магниттері неодим магниттерінен артық?", "opts": ["Суықта", "Су астында", "Жоғары темп.", "Ғарышта"], "correct": 2},
            "q5": {"text": "Медицинада Самарий-153 не үшін қолданылады?", "opts": ["Витаминдер", "Рентген", "Рак кезіндегі ауруды емдеу", "Антибиотиктер"], "correct": 2}
        }
    },
    "europium": {
        "en": {
            "title": "Europium",
            "desc": "The most reactive rare earth metal, essential for brilliant red and blue phosphors in digital displays.",
            "details": "<b>Key Facts</b><br>• Chemical Symbol — Eu<br>• Atomic Number — 63<br>• Most reactive of all rare earth elements; rapidly oxidizes in air<br>• Essential for phosphors that produce red and blue colors in screens<br>• Used as a security marker in Euro banknotes (glows under UV)<br>• Named after the continent of Europe<br>• Discovered in 1901 by Eugène-Anatole Demarçay<br><br><b>Atomic Structure</b><br>• 63 protons in the nucleus<br>• 63 electrons (highly reactive valence shell)<br>• 2 natural isotopes; Europium-153 is the most common stable one<br>• Electron Configuration — [Xe] 4f⁷ 6s²<br>• Located in Period 6 (Lanthanides)<br><br><b>Physical Properties</b><br>• Soft silvery metal; hardness similar to lead<br>• Boiling Point — 1529°C<br>• Melting Point — 822°C<br>• Most ductile and malleable of the rare earth metals<br>• Density is the lowest of all lanthanides (5.26 g/cm³)<br>• Becomes superconducting at very low temperatures<br><br><b>Chemical Properties</b><br>• Extremely reactive; tarnishes instantly in air<br>• Reacts vigorously with water to form Eu(OH)₂ or Eu(OH)₃<br>• One of the few lanthanides that easily forms divalent (Eu²⁺) compounds<br>• Highly efficient at absorbing neutrons<br>• Typical oxidation states — +2 and +3<br><br><b>Applications</b><br>• Display Tech: Phosphors for LEDs, smartphone screens, and TVs<br>• Lighting: Fluorescent lamps for better color rendering<br>• Security: Anti-counterfeiting markers in bank notes and passports<br>• Nuclear: Control rods and neutron absorbers in nuclear reactors<br>• Science: Biomolecular probes for medical research",
            "fact": "Europium is used to print the glowing security symbols on Euro banknotes to prevent counterfeiting.",
            "simple": "Europium is element 63, a metal that makes the colors on your phone screen bright and colorful.",
            "detailed": "Europium is the most reactive lanthanide. It is crucial for the red and blue phosphors used in television and computer screens.",
            "study": ["Atomic Number: 63", "Symbol: Eu", "Group: Lanthanides", "Mass: 151.96", "Usage: Screen Phosphors"],
            "q1": {"text": "What is the atomic number of Europium?", "opts": ["62", "63", "64", "65"], "correct": 1},
            "q2": {"text": "What is the chemical symbol for Europium?", "opts": ["E", "Eu", "Er", "Ep"], "correct": 1},
            "q3": {"text": "Which color phosphor is Europium primarily used for?", "opts": ["Green", "Yellow", "Red", "Black"], "correct": 2},
            "q4": {"text": "Where is Europium used as a security feature?", "opts": ["Coins", "Euro banknotes", "Car keys", "Smartphones"], "correct": 1},
            "q5": {"text": "Which property describes Europium reactivity?", "opts": ["Noble", "Stable", "Most reactive rare earth", "Inert"], "correct": 2}
        },
        "ru": {
            "title": "Европий",
            "desc": "Самый активный редкоземельный металл, необходимый для ярких красных и синих цветов в экранах.",
            "details": "<b>Основные факты</b><br>• Химический символ — Eu<br>• Атомный номер — 63<br>• Самый химически активный из всех лантаноидов; мгновенно тускнеет<br>• Необходим для люминофоров, создающих красный и синий цвета экранов<br>• Используется для защиты банкнот евро (светится в УФ-лучах)<br>• Назван в честь части света Европа<br>• Открыт в 1901 году Эженом-Анатолем Демарсе<br><br><b>Атомная структура</b><br>• 63 протона в ядре<br>• 63 электрона (очень активная валентная оболочка)<br>• 2 природных изотопа; Европий-153 — наиболее частый<br>• Электронная конфигурация — [Xe] 4f⁷ 6s²<br>• Расположен в 6-м периоде (лантаноиды)<br><br><b>Физические свойства</b><br>• Мягкий серебристый металл; твердость как у свинца<br>• Температура кипения — 1529°C<br>• Температура плавления — 822°C<br>• Самый ковкий и пластичный из редкоземельных металлов<br>• Плотность самая низкая среди лантаноидов (5.26 г/см³)<br>• Становится сверхпроводником при сверхнизких температурах<br><br><b>Химические свойства</b><br>• Чрезвычайно активен; мгновенно окисляется на воздухе<br>• Бурно реагирует с водой, образуя Eu(OH)₂ или Eu(OH)₃<br>• Один из немногих лантаноидов, легко образующих двухвалентные соединения (Eu²⁺)<br>• Очень эффективно поглощает нейтроны<br>• Типичные степени окисления — +2 и +3<br><br><b>Применение</b><br>• Экраны: люминофоры для светодиодов, дисплеев смартфонов и ТВ<br>• Освещение: люминесцентные лампы с улучшенной цветопередачей<br>• Безопасность: метки против подделок в банкнотах и паспортах<br>• Ядерная техника: регулирующие стержни ядерных реакторов<br>• Наука: биомолекулярные зонды для медицинских исследований",
            "fact": "Европий используется для печати светящихся символов защиты на банкнотах евро.",
            "simple": "Европий — это элемент №63, металл, который делает цвета на экране вашего телефона яркими и насыщенными.",
            "detailed": "Европий — самый активный лантаноид. Он критически важен для производства красных и синих люминофоров в экранах телевизоров и компьютеров.",
            "study": ["Атомный номер: 63", "Символ: Eu", "Группа: Лантаноиды", "Масса: 151.96", "Применение: Люминофоры"],
            "q1": {"text": "Какой атомный номер у европия?", "opts": ["62", "63", "64", "65"], "correct": 1},
            "q2": {"text": "Какой химический символ у европия?", "opts": ["E", "Eu", "Er", "Ep"], "correct": 1},
            "q3": {"text": "Для люминофоров какого цвета в основном используется европий?", "opts": ["Зеленый", "Желтый", "Красный", "Черный"], "correct": 2},
            "q4": {"text": "Где европий используется как элемент защиты?", "opts": ["Монеты", "Банкноты Евро", "Ключи авто", "Смартфоны"], "correct": 1},
            "q5": {"text": "Какое свойство описывает активность европия?", "opts": ["Благородный", "Стабильный", "Самый активный из РЗЭ", "Инертный"], "correct": 2}
        },
        "kk": {
            "title": "Европий",
            "desc": "Экрандардағы ашық қызыл және көк түстер үшін қажетті ең белсенді сирек жер металы.",
            "details": "<b>Негізгі фактілер</b><br>• Химиялық таңбасы — Eu<br>• Атомдық нөмірі — 63<br>• Барлық лантаноидтардың ішіндегі ең белсендісі; ауада бірден күңгірттенеді<br>• Экрандардың қызыл және көк түстерін жасайтын люминофорлар үшін қажет<br>• Евро банкноттарын қорғау үшін қолданылады (УК-сәуледе жарқырайды)<br>• Еуропа дүние бөлігінің құрметіне аталған<br>• 1901 жылы Эжен-Анатоль Демарсе ашқан<br><br><b>Атомдық құрылымы</b><br>• Ядрода 63 протон бар<br>• 63 электрон (өте белсенді валенттік қабық)<br>• 2 табиғи изотоп; Европий-153 — ең жиі кездесетіні<br>• Электрондық конфигурациясы — [Xe] 4f⁷ 6s²<br>• 6-шы кезеңде орналасқан (лантаноидтар)<br><br><b>Физикалық қасиеттері</b><br>• Жұмсақ күміс металл; қаттылығы қорғасынмен бірдей<br>• Қайнау температурасы — 1529°C<br>• Балқу температурасы — 822°C<br>• Сирек жер металдарының ішіндегі ең созылғыш және пластикалық<br>• Лантаноидтар арасындағы ең төмен тығыздық (5.26 г/см³)<br>• Өте төмен температурада асқын өткізгішке айналады<br><br><b>Химиялық қасиеттері</b><br>• Өте белсенді; ауада бірден тотығады<br>• Сумен қатты әрекеттесіп, Eu(OH)₂ немесе Eu(OH)₃ түзеді<br>• Екі валентті қосылыстарды (Eu²⁺) оңай түзетін санаулы лантаноидтардың бірі<br>• Нейтрондарды өте тиімді жұтады<br>• Тән тотығу дәрежелері — +2 және +3<br><br><b>Қолданылуы</b><br>• Экрандар: жарық диодтарға, смартфондар мен ТД дисплейлеріне арналған люминофорлар<br>• Жарықтандыру: түс беруі жақсартылған люминесцентті шамдар<br>• Қауіпсіздік: банкноттар мен паспорттардағы қолдан жасауға қарсы белгілер<br>• Ядролық техника: ядролық реакторлардың реттегіш өзектері<br>• Ғылым: медициналық зерттеулерге арналған биомолекулалық зондтар",
            "fact": "Европий евро банкноттарындағы жарқырайтын қорғаныс таңбаларын басып шығару үшін қолданылады.",
            "simple": "Европий — №63 элемент, телефоныңыздың экранындағы түстерді ашық және қанық ететін металл.",
            "detailed": "Европий — ең белсенді лантаноид. Ол теледидарлар мен компьютерлердің экрандарында қолданылатын қызыл және көк люминофорларды өндіру үшін өте маңызды.",
            "study": ["Атомдық нөмір: 63", "Таңбасы: Eu", "Тобы: Лантаноидтар", "Массасы: 151.96", "Қолданылуы: Люминофорлар"],
            "q1": {"text": "Европийдің атомдық нөмірі қандай?", "opts": ["62", "63", "64", "65"], "correct": 1},
            "q2": {"text": "Европийдің химиялық таңбасы қандай?", "opts": ["E", "Eu", "Er", "Ep"], "correct": 1},
            "q3": ["Жасыл", "Сары", "Қызыл", "Қара"],
            "q3": {"text": "Европий негізінен қандай түсті люминофорлар үшін қолданылады?", "opts": ["Жасыл", "Сары", "Қызыл", "Қара"], "correct": 2},
            "q4": {"text": "Европий қорғаныс элементі ретінде қайда қолданылады?", "opts": ["Тиындар", "Евро банкноттары", "Авто кілттері", "Смартфондар"], "correct": 1},
            "q5": {"text": "Европийдің белсенділігін қай қасиет сипаттайды?", "opts": ["Инертті", "Тұрақты", "Ең белсенді СЖЭ", "Асыл"], "correct": 2}
        }
    },
    "gadolinium": {
        "en": {
            "title": "Gadolinium",
            "desc": "A versatile metal used as a contrast agent in MRI scans and for magnetic refrigeration.",
            "details": "<b>Key Facts</b><br>• Chemical Symbol — Gd<br>• Atomic Number — 64<br>• Silvery-white, malleable rare earth metal<br>• Highest thermal neutron capture cross-section of any element<br>• Vital contrast agent in MRI (Magnetic Resonance Imaging)<br>• Ferromagnetic at temperatures below 20°C (curie point)<br>• Named after chemist Johan Gadolin<br><br><b>Atomic Structure</b><br>• 64 protons in the nucleus<br>• 64 electrons (unique 4f⁷ 5d¹ valence shell)<br>• 6 stable natural isotopes; Gadolinium-158 is common<br>• Electron Configuration — [Xe] 4f⁷ 5d¹ 6s²<br>• Located in Period 6 (Lanthanides)<br><br><b>Physical Properties</b><br>• Silvery-white lustrous appearance; ductile<br>• Boiling Point — 3273°C<br>• Melting Point — 1313°C<br>• One of the few elements with a Curie point near room temp<br>• Exhibits the magnetocaloric effect (heats up in magnetic field)<br>• Stable in dry air but tarnishes in moist air<br><br><b>Chemical Properties</b><br>• Slowly reacts with water to form Gd(OH)₃<br>• Dissolves easily in dilute mineral acids<br>• Strong paramagnetic behavior at room temperature<br>• Forms trivalent compounds; salts are typically white<br>• Typical oxidation state — +3<br><br><b>Applications</b><br>• Medicine: MRI contrast agents for diagnosing tumors and brain issues<br>• Tech: Magnetocaloric refrigeration (eco-friendly cooling)<br>• Nuclear: Shielding and control rods in nuclear reactors<br>• Electronics: Gadolinium gallium garnet (GGG) for memory devices<br>• Metallurgy: Improves high-temp resistance of iron and chromium",
            "fact": "Gadolinium is the only element other than iron, cobalt, and nickel that is ferromagnetic near room temperature.",
            "simple": "Gadolinium is element 64, a metal that helps doctors see inside your body more clearly during MRI scans.",
            "detailed": "Gadolinium is a lanthanide with unique magnetic properties. Its ability to absorb neutrons makes it valuable in nuclear energy, while its magnetism is key for medical imaging.",
            "study": ["Atomic Number: 64", "Symbol: Gd", "Group: Lanthanides", "Mass: 157.25", "Usage: MRI Contrast"],
            "q1": {"text": "What is the atomic number of Gadolinium?", "opts": ["63", "64", "65", "66"], "correct": 1},
            "q2": {"text": "What is the chemical symbol for Gadolinium?", "opts": ["G", "Ga", "Gd", "Gl"], "correct": 2},
            "q3": {"text": "What medical scan uses Gadolinium as a contrast agent?", "opts": ["X-ray", "CT", "MRI", "Ultrasound"], "correct": 2},
            "q4": {"text": "What is Gadolinium's Curie point (approx)?", "opts": ["-100°C", "0°C", "20°C", "1000°C"], "correct": 2},
            "q5": {"text": "Gadolinium has the highest efficiency in capturing what?", "opts": ["Electrons", "Neutrons", "Photons", "Protons"], "correct": 1}
        },
        "ru": {
            "title": "Гадолиний",
            "desc": "Универсальный металл, используемый как контраст для МРТ и в магнитном охлаждении.",
            "details": "<b>Основные факты</b><br>• Химический символ — Gd<br>• Атомный номер — 64<br>• Серебристо-белый, ковкий редкоземельный металл<br>• Самое высокое сечение захвата тепловых нейтронов среди всех элементов<br>• Важнейшее контрастное вещество при МРТ<br>• Ферромагнитен при температурах ниже 20°C (точка Кюри)<br>• Назван в честь химика Юхана Гадолина<br><br><b>Атомная структура</b><br>• 64 протона в ядре<br>• 64 электрона (уникальная оболочка 4f⁷ 5d¹)<br>• 6 стабильных изотопов; Гадолиний-158 наиболее частый<br>• Электронная конфигурация — [Xe] 4f⁷ 5d¹ 6s²<br>• Расположен в 6-м периоде (лантаноиды)<br><br><b>Физические свойства</b><br>• Серебристо-белый блестящий вид; тягучий<br>• Температура кипения — 3273°C<br>• Температура плавления — 1313°C<br>• Один из немногих элементов с точкой Кюри около комн. темп.<br>• Обладает магнитокалорическим эффектом (греется в магн. поле)<br>• Стабилен в сухом воздухе, но тускнеет во влажном<br><br><b>Химические свойства</b><br>• Медленно реагирует с водой, образуя Gd(OH)₃<br>• Легко растворяется в разбавленных минеральных кислотах<br>• Сильный парамагнетик при комнатной температуре<br>• Образует трехвалентные соединения; соли обычно белые<br>• Типичная степень окисления — +3<br><br><b>Применение</b><br>• Медицина: контраст для МРТ при диагностике опухолей мозга<br>• Технологии: магнитокалорическое охлаждение (эко-холодильники)<br>• Ядерная техника: защита и стержни в ядерных реакторах<br>• Электроника: гадолиний-галлиевый гранат (ГГГ) для памяти устройств<br>• Металлургия: улучшает жаропрочность сплавов железа и хрома",
            "fact": "Гадолиний — единственный элемент, кроме железа, кобальта и никеля, который является ферромагнитным вблизи комнатной температуры.",
            "simple": "Гадолиний — это элемент №64, металл, который помогает врачам четче видеть органы внутри тела при МРТ.",
            "detailed": "Гадолиний — лантаноид с уникальными магнитными свойствами. Способность поглощать нейтроны делает его ценным в ядерной энергетике, а магнетизм — в медицине.",
            "study": ["Атомный номер: 64", "Символ: Gd", "Группа: Лантаноиды", "Масса: 157.25", "Применение: Контраст МРТ"],
            "q1": {"text": "Какой атомный номер у гадолиния?", "opts": ["63", "64", "65", "66"], "correct": 1},
            "q2": {"text": "Какой химический символ у гадолиния?", "opts": ["G", "Ga", "Gd", "Gl"], "correct": 2},
            "q3": {"text": "В каком медицинском сканировании гадолиний служит контрастом?", "opts": ["Рентген", "КТ", "МРТ", "УЗИ"], "correct": 2},
            "q4": {"text": "Какова точка Кюри гадолиния (приблизительно)?", "opts": ["-100°C", "0°C", "20°C", "1000°C"], "correct": 2},
            "q5": {"text": "Гадолиний обладает высочайшей эффективностью захвата чего?", "opts": ["Электронов", "Нейтронов", "Фотонов", "Протонов"], "correct": 1}
        },
        "kk": {
            "title": "Гадолиний",
            "desc": "МРТ-сканерлерде контрасттық зат ретінде және магниттік салқындатуда қолданылатын әмбебап металл.",
            "details": "<b>Негізгі фактілер</b><br>• Химиялық таңбасы — Gd<br>• Атомдық нөмірі — 64<br>• Күміс-ақ, созылғыш сирек жер металы<br>• Кез келген элементтің ішіндегі жылулық нейтрондарды ең жоғары қармау қимасына ие<br>• МРТ-дағы (Магнитті-резонанстық томография) маңызды контрасттық зат<br>• 20°C-тан төмен температурада ферромагнитті (Кюри нүктесі)<br>• Химик Юхан Гадолиннің құрметіне аталған<br><br><b>Атомдық құрылымы</b><br>• Ядрода 64 протон бар<br>• 64 электрон (бірегей 4f⁷ 5d¹ қабығы)<br>• 6 табиғи изотоп; Гадолиний-158 ең жиі кездесетіні<br>• Электрондық конфигурациясы — [Xe] 4f⁷ 5d¹ 6s²<br>• 6-шы кезеңде орналасқан (лантаноидтар)<br><br><b>Физикалық қасиеттері</b><br>• Күміс-ақ жылтыр көрініс; созылғыш<br>• Қайнау температурасы — 3273°C<br>• Балқу температурасы — 1313°C<br>• Бөлме температурасына жақын Кюри нүктесі бар санаулы элементтің бірі<br>• Магнитокалориялық әсерге ие (магнит өрісінде қызады)<br>• Құрғақ ауада тұрақты, бірақ ылғалды ауада күңгірттенеді<br><br><b>Химиялық қасиеттері</b><br>• Сумен баяу әрекеттесіп, Gd(OH)₃ түзеді<br>• Сұйытылған минералды қышқылдарда оңай ериді<br>• Бөлме температурасында күшті парамагнетик<br>• Үш валентті қосылыстар түзеді; тұздары әдетте ақ түсті<br>• Тән тотығу дәрежесі — +3<br><br><b>Қолданылуы</b><br>• Медицина: ісіктер мен ми ауруларын диагностикалауға арналған МРТ-контрасттары<br>• Технология: магнитокалориялық салқындату (эко-тоңазытқыштар)<br>• Ядролық техника: ядролық реакторлардағы қорғаныс және өзектер<br>• Электроника: құрылғылардың жадына арналған гадолиний-галлий гранаты (ГГГ)<br>• Металлургия: темір мен хром қорытпаларының ыстыққа төзімділігін жақсартады",
            "fact": "Гадолиний — темір, кобальт және никельден кейінгі бөлме температурасына жақын жерде ферромагнитті болатын жалғыз элемент.",
            "simple": "Гадолиний — №64 элемент, МРТ кезінде дәрігерлерге дененің ішкі мүшелерін анық көруге көмектесетін металл.",
            "detailed": "Гадолиний — бірегей магниттік қасиеттері бар лантаноид. Нейтрондарды жұту қабілеті оны ядролық энергетикада, ал магнетизмі медицинада өте құнды етеді.",
            "study": ["Атомдық нөмір: 64", "Таңбасы: Gd", "Тобы: Лантаноидтар", "Массасы: 157.25", "Қолданылуы: МРТ контрасты"],
            "q1": {"text": "Гадолинийдің атомдық нөмірі қандай?", "opts": ["63", "64", "65", "66"], "correct": 1},
            "q2": {"text": "Гадолинийдің химиялық таңбасы қандай?", "opts": ["G", "Ga", "Gd", "Gl"], "correct": 2},
            "q3": {"text": "Қай медициналық сканерлеуде гадолиний контраст ретінде қолданылады?", "opts": ["Рентген", "КТ", "МРТ", "УДЗ"], "correct": 2},
            "q4": ["-100°C", "0°C", "20°C", "1000°C"],
            "q4": {"text": "Гадолинийдің Кюри нүктесі қандай (шамамен)?", "opts": ["-100°C", "0°C", "20°C", "1000°C"], "correct": 2},
            "q5": {"text": "Гадолиний нені қармаудың ең жоғары тиімділігіне ие?", "opts": ["Электрондарды", "Нейтрондарды", "Фотондарды", "Протондарды"], "correct": 1}
        }
    },
    "terbium": {
        "en": {
            "title": "Terbium",
            "desc": "A silver-gray rare earth metal, essential for green phosphors in OLED screens and energy-efficient lighting.",
            "details": "<b>Key Facts</b><br>• Chemical Symbol — Tb<br>• Atomic Number — 65<br>• Silvery-gray, soft rare earth metal<br>• Critical component for green phosphors in displays<br>• Key material for Terfenol-D (smart material that changes shape in B-field)<br>• Named after the Swedish village Ytterby<br>• One of four elements named after Ytterby<br><br><b>Atomic Structure</b><br>• 65 protons in the nucleus<br>• 65 electrons surrounding the nucleus<br>• Only one stable natural isotope (Terbium-159)<br>• Electron Configuration — [Xe] 4f⁹ 6s²<br>• Located in Period 6 (Lanthanides)<br><br><b>Physical Properties</b><br>• Silvery-gray luster; malleable and soft<br>• Boiling Point — 3230°C<br>• Melting Point — 1356°C<br>• Terbium exhibits the highest 'magnetostriction' of all elements<br>• Fluoresces bright green when excited (photoluminescence)<br>• Relatively stable in air compared to other early lanthanides<br><br><b>Chemical Properties</b><br>• Reacts with water to form Tb(OH)₃ and H₂<br>• Dissolves in dilute mineral acids<br>• Forms trivalent (Tb³⁺) and tetravalent (Tb⁴⁺) states<br>• Terbium(III) salts produce a brilliant green fluorescence<br>• Typical oxidation state — +3<br><br><b>Applications</b><br>• Display Tech: Green phosphor for OLEDs, TVs, and smartphones<br>• Lighting: Low-energy light bulbs (compact fluorescents)<br>• Materials: Terfenol-D for sensors, actuators, and sonar devices<br>• Data: Magneto-optical recording films for high-density storage<br>• Science: Biomolecular probes and medical imaging tracers",
            "fact": "Terbium is one of the four elements (along with Yttrium, Erbium, and Ytterbium) named after a single Swedish village: Ytterby.",
            "simple": "Terbium is element 65, a metal that makes the green color on your TV and phone screen look beautiful.",
            "detailed": "Terbium is essential for energy-efficient lighting. Its green fluorescence is used in TVs and smartphone screens. It is also a key part of materials that change shape in magnetic fields.",
            "study": ["Atomic Number: 65", "Symbol: Tb", "Group: Lanthanides", "Mass: 158.93", "Fluorescence: Bright Green"],
            "q1": {"text": "What is the atomic number of Terbium?", "opts": ["64", "65", "66", "67"], "correct": 1},
            "q2": {"text": "What is the chemical symbol for Terbium?", "opts": ["T", "Te", "Tb", "Tr"], "correct": 2},
            "q3": {"text": "What color phosphor is Terbium mainly used for?", "opts": ["Red", "Blue", "Green", "White"], "correct": 2},
            "q4": {"text": "After which village is Terbium named?", "opts": ["Stockholm", "Ytterby", "Malmo", "Uppsala"], "correct": 1},
            "q5": {"text": "What is 'magnetostriction'?", "opts": ["Changing color", "Changing shape in magnetic field", "Changing temperature", "Melting"], "correct": 1}
        },
        "ru": {
            "title": "Тербий",
            "desc": "Серебристо-серый металл, необходимый для зеленых люминофоров в OLED-экранах и лампах.",
            "details": "<b>Основные факты</b><br>• Химический символ — Tb<br>• Атомный номер — 65<br>• Серебристо-серый, мягкий редкоземельный металл<br>• Важнейший компонент зеленых люминофоров в дисплеях<br>• Ключевой материал для Терфенола-Д (меняет форму в магнитном поле)<br>• Назван в честь шведской деревни Иттербю<br>• Один из четырех элементов, названных в честь Иттербю<br><br><b>Атомная структура</b><br>• 65 протонов в ядре<br>• 65 электронов вокруг ядра<br>• Только один стабильный изотоп (Тербий-159)<br>• Электронная конфигурация — [Xe] 4f⁹ 6s²<br>• Расположен в 6-м периоде (лантаноиды)<br><br><b>Физические свойства</b><br>• Серебристо-серый блеск; ковкий и мягкий<br>• Температура кипения — 3230°C<br>• Температура плавления — 1356°C<br>• Обладает высочайшей «магнитострикцией» среди элементов<br>• Флуоресцирует ярко-зеленым цветом при возбуждении<br>• Относительно стабилен на воздухе<br><br><b>Химические свойства</b><br>• Реагирует с водой, образуя Tb(OH)₃ и H₂<br>• Растворяется в разбавленных минеральных кислотах<br>• Проявляет степени окисления +3 (Tb³⁺) и +4 (Tb⁴⁺)<br>• Соли тербия (III) дают великолепное зеленое свечение<br>• Типичная степень окисления — +3<br><br><b>Применение</b><br>• Экраны: зеленый люминофор для OLED, ТВ и смартфонов<br>• Освещение: энергосберегающие лампы (компактные люминесцентные)<br>• Материалы: Терфенол-Д для датчиков, приводов и сонаров<br>• Данные: магнитооптические пленки для записи данных<br>• Наука: биомолекулярные зонды и медицинская визуализация",
            "fact": "Тербий — один из четырех элементов (вместе с иттрием, эрбием и иттербием), названных в честь одной шведской деревни Иттербю.",
            "simple": "Тербий — это элемент №65, металл, который делает зеленый цвет на вашем ТВ и смартфоне красивым и ярким.",
            "detailed": "Тербий необходим для энергосберегающего освещения. Его зеленая флуоресценция используется в экранах смартфонов. Также он входит в состав материалов, меняющих форму в магнитных полях.",
            "study": ["Атомный номер: 65", "Символ: Tb", "Группа: Лантаноиды", "Масса: 158.93", "Свечение: Ярко-зеленое"],
            "q1": {"text": "Какой атомный номер у тербия?", "opts": ["64", "65", "66", "67"], "correct": 1},
            "q2": {"text": "Какой химический символ у тербия?", "opts": ["T", "Te", "Tb", "Tr"], "correct": 2},
            "q3": {"text": "Для люминофоров какого цвета в основном используется тербий?", "opts": ["Красный", "Синий", "Зеленый", "Белый"], "correct": 2},
            "q4": {"text": "В честь какой деревни назван тербий?", "opts": ["Стокгольм", "Иттербю", "Мальмё", "Уппсала"], "correct": 1},
            "q5": {"text": "Что такое «магнитострикция»?", "opts": ["Смена цвета", "Изменение формы в магн. поле", "Смена температуры", "Плавление"], "correct": 1}
        },
        "kk": {
            "title": "Тербий",
            "desc": "OLED-экрандар мен энергия үнемдейтін шамдардағы жасыл люминофорлар үшін қажетті күміс-сұр металл.",
            "details": "<b>Негізгі фактілер</b><br>• Химиялық таңбасы — Tb<br>• Атомдық нөмірі — 65<br>• Күміс-сұр, жұмсақ сирек жер металы<br>• Дисплейлердегі жасыл люминофорлардың маңызды компоненті<br>• Терфенол-Д (магнит өрісінде пішінін өзгертетін материал) үшін негізгі материал<br>• Швецияның Иттербю ауылының құрметіне аталған<br>• Иттербю есімімен аталған төрт элементтің бірі<br><br><b>Атомдық құрылымы</b><br>• Ядрода 65 протон бар<br>• Ядро айналасында 65 электрон<br>• Бір ғана тұрақты табиғи изотоп (Тербий-159)<br>• Электрондық конфигурациясы — [Xe] 4f⁹ 6s²<br>• 6-шы кезеңде орналасқан (лантаноидтар)<br><br><b>Физикалық қасиеттері</b><br>• Күміс-сұр жылтыр; созылғыш және жұмсақ<br>• Қайнау температурасы — 3230°C<br>• Балқу температурасы — 1356°C<br>• Тербий элементтер арасындағы ең жоғары «магнитострикцияға» ие<br>• Қозған кезде ашық жасыл түспен флуоресценцияланады<br>• Ауада салыстырмалы түрде тұрақты<br><br><b>Химиялық қасиеттері</b><br>• Сумен әрекеттесіп, Tb(OH)₃ және H₂ түзеді<br>• Сұйытылған минералды қышқылдарда ериді<br>• +3 (Tb³⁺) және +4 (Tb⁴⁺) тотығу дәрежелерін көрсетеді<br>• Тербий (III) тұздары тамаша жасыл жарқыл береді<br>• Тән тотығу дәрежесі — +3<br><br><b>Қолданылуы</b><br>• Экрандар: OLED, ТД және смартфондарға арналған жасыл люминофор<br>• Жарықтандыру: энергия үнемдейтін шамдар (ықшам люминесцентті)<br>• Материалдар: сенсорлар, жетектер және сонарларға арналған Терфенол-Д<br>• Деректер: деректерді жазуға арналған магнитооптикалық пленкалар<br>• Ғылым: биомолекулалық зондтар және медициналық визуализация",
            "fact": "Тербий — бір ғана швед ауылы Иттербюдің құрметіне аталған төрт элементтің (Иттрий, Эрбий және Иттербиймен бірге) бірі.",
            "simple": "Тербий — №65 элемент, ТД және смартфон экранындағы жасыл түсті әдемі әрі ашық ететін металл.",
            "detailed": "Тербий энергия үнемдейтін жарықтандыру үшін қажет. Оның жасыл флуоресценциясы смартфон экрандарында қолданылады. Сондай-ақ ол магнит өрісінде пішінін өзгертетін материалдардың құрамына кіреді.",
            "study": ["Атомдық нөмір: 65", "Таңбасы: Tb", "Тобы: Лантаноидтар", "Массасы: 158.93", "Жарқырауы: Ашық жасыл"],
            "q1": {"text": "Тербийдің атомдық нөмірі қандай?", "opts": ["64", "65", "66", "67"], "correct": 1},
            "q2": {"text": "Тербийдің химиялық таңбасы қандай?", "opts": ["T", "Te", "Tb", "Tr"], "correct": 2},
            "q3": {"text": "Тербий негізінен қандай түсті люминофорлар үшін қолданылады?", "opts": ["Қызыл", "Көк", "Жасыл", "Ақ"], "correct": 2},
            "q4": {"text": "Тербий қай ауылдың құрметіне аталған?", "opts": ["Стокгольм", "Иттербю", "Мальмё", "Уппсала"], "correct": 1},
            "q5": {"text": "«Магнитострикция» деген не?", "opts": ["Түстің өзгеруі", "Магнит өрісінде пішіннің өзгеруі", "Темп. өзгеруі", "Балқу"], "correct": 1}
        }
    },
    "dysprosium": {
        "en": {
            "title": "Dysprosium",
            "desc": "A lustrous silvery metal, critical for high-power magnets in electric vehicles and wind turbines.",
            "details": "<b>Key Facts</b><br>• Chemical Symbol — Dy<br>• Atomic Number — 66<br>• Soft, silvery metal with a high magnetic susceptibility<br>• Essential additive in Neodymium magnets to withstand high temps<br>• Used in specialized halogen lamps for brilliant white light<br>• Name comes from Greek 'dysprositos' meaning hard to get<br>• Discovered in 1886 in Paris<br><br><b>Atomic Structure</b><br>• 66 protons in the nucleus<br>• 66 electrons surrounding the nucleus<br>• 7 stable natural isotopes; Dysprosium-164 is common<br>• Electron Configuration — [Xe] 4f¹⁰ 6s²<br>• Located in Period 6 (Lanthanides)<br><br><b>Physical Properties</b><br>• Silvery-white luster; malleable and ductile<br>• Boiling Point — 2562°C<br>• Melting Point — 1412°C<br>• Paramagnetic at room temp; ferromagnetic at low temps<br>• High magnetic strength; used in data storage devices<br>• Relatively stable in dry air but reacts slowly with moisture<br><br><b>Chemical Properties</b><br>• Reacts with water to form Dy(OH)₃ and H₂<br>• Dissolves easily in dilute mineral acids<br>• Forms trivalent compounds; salts are yellow-green or white<br>• High neutron absorption cross-section (used in control rods)<br>• Typical oxidation state — +3<br><br><b>Applications</b><br>• Energy: High-temp magnets for EV motors and wind turbines<br>• Technology: Hard disk drives and data storage materials<br>• Lighting: Gas-discharge lamps and commercial studio lights<br>• Nuclear: Control rods in nuclear reactors to regulate reactions<br>• Optics: Specialized glass for infrared lasers and detectors",
            "fact": "Adding just a small amount of Dysprosium to a Neodymium magnet allows it to keep its magnetism even when very hot.",
            "simple": "Dysprosium is element 66, a metal that helps electric car motors stay powerful and efficient.",
            "detailed": "Dysprosium is vital for the green energy revolution. It makes the permanent magnets in electric vehicles and wind turbines more resistant to heat, preventing them from losing their strength.",
            "study": ["Atomic Number: 66", "Symbol: Dy", "Group: Lanthanides", "Mass: 162.50", "Usage: EV Magnets"],
            "q1": {"text": "What is the atomic number of Dysprosium?", "opts": ["65", "66", "67", "68"], "correct": 1},
            "q2": {"text": "What is the chemical symbol for Dysprosium?", "opts": ["D", "Ds", "Dy", "Dr"], "correct": 2},
            "q3": {"text": "Which technology relies on Dysprosium for heat resistance?", "opts": ["Food", "Electric Vehicle Motors", "Clothing", "Tires"], "correct": 1},
            "q4": {"text": "What does the name Dysprosium mean?", "opts": ["Bright", "Hard to get", "Soft", "Twin"], "correct": 1},
            "q5": {"text": "In which group of the periodic table is Dysprosium?", "opts": ["Halogens", "Noble Gases", "Lanthanides", "Alkali Metals"], "correct": 2}
        },
        "ru": {
            "title": "Диспрозий",
            "desc": "Блестящий серебристый металл, критически важный для магнитов в электромобилях и ветряках.",
            "details": "<b>Основные факты</b><br>• Химический символ — Dy<br>• Атомный номер — 66<br>• Мягкий серебристый металл с высокой магнитной восприимчивостью<br>• Важнейшая добавка в неодимовые магниты для термостойкости<br>• Используется в галогенных лампах для создания яркого белого света<br>• Название от греческого «диспроситос» — труднодоступный<br>• Открыт в 1886 году в Париже<br><br><b>Атомная структура</b><br>• 66 протонов в ядре<br>• 66 электронов вокруг ядра<br>• 7 стабильных изотопов; Диспрозий-164 наиболее частый<br>• Электронная конфигурация — [Xe] 4f¹⁰ 6s²<br>• Расположен в 6-м периоде (лантаноиды)<br><br><b>Физические свойства</b><br>• Серебристо-белый блеск; ковкий и пластичный<br>• Температура кипения — 2562°C<br>• Температура плавления — 1412°C<br>• Парамагнитен при комн. темп.; ферромагнитен при низких темп.<br>• Высокая магнитная сила; используется в устройствах хранения данных<br>• Относительно стабилен в сухом воздухе<br><br><b>Химические свойства</b><br>• Реагирует с водой, образуя Dy(OH)₃ и H₂<br>• Легко растворяется в разбавленных минеральных кислотах<br>• Образует трехвалентные соединения; соли желто-зеленые или белые<br>• Высокое сечение захвата нейтронов (для стержней реакторов)<br>• Типичная степень окисления — +3<br><br><b>Применение</b><br>• Энергетика: термостойкие магниты для электромоторов и ветряков<br>• Технологии: жесткие диски и материалы для хранения данных<br>• Освещение: газоразрядные лампы и студийный свет<br>• Ядерная техника: регулирующие стержни в ядерных реакторах<br>• Оптика: спецстекла для ИК-лазеров и детекторов",
            "fact": "Добавление небольшого количества диспрозия в неодимовый магнит позволяет ему сохранять магнетизм даже при сильном нагреве.",
            "simple": "Диспрозий — это элемент №66, металл, который помогает моторам электромобилей оставаться мощными и эффективными.",
            "detailed": "Диспрозий жизненно важен для зеленой энергетики. Он делает постоянные магниты в электромобилях и ветряных турбинах более устойчивыми к нагреву.",
            "study": ["Атомный номер: 66", "Символ: Dy", "Группа: Лантаноиды", "Масса: 162.50", "Применение: Магниты электрокаров"],
            "q1": {"text": "Какой атомный номер у диспрозия?", "opts": ["65", "66", "67", "68"], "correct": 1},
            "q2": {"text": "Какой химический символ у диспрозия?", "opts": ["D", "Ds", "Dy", "Dr"], "correct": 2},
            "q3": {"text": "Какая технология полагается на диспрозий для термостойкости?", "opts": ["Пища", "Моторы электромобилей", "Одежда", "Шины"], "correct": 1},
            "q4": {"text": "Что означает название диспрозий?", "opts": ["Яркий", "Труднодоступный", "Мягкий", "Близнец"], "correct": 1},
            "q5": {"text": "В какой группе периодической таблицы находится диспрозий?", "opts": ["Галогены", "Благородные газы", "Лантаноиды", "Щелочные металлы"], "correct": 2}
        },
        "kk": {
            "title": "Диспрозий",
            "desc": "Электромобильдер мен жел генераторларындағы магниттер үшін өте маңызды жылтыр күміс металл.",
            "details": "<b>Негізгі фактілер</b><br>• Химиялық таңбасы — Dy<br>• Атомдық нөмірі — 66<br>• Магниттік қабылдағыштығы жоғары жұмсақ күміс металл<br>• Неодим магниттерінің ыстыққа төзімділігін арттыру үшін маңызды қоспа<br>• Ашық ақ жарық жасау үшін арнайы галогендік шамдарда қолданылады<br>• Атауы гректің «диспроситос» — табуы қиын деген сөзінен шыққан<br>• 1886 жылы Парижде ашылған<br><br><b>Атомдық құрылымы</b><br>• Ядрода 66 протон бар<br>• Ядро айналасында 66 электрон<br>• 7 тұрақты изотоп; Диспрозий-164 ең жиі кездесетіні<br>• Электрондық конфигурациясы — [Xe] 4f¹⁰ 6s²<br>• 6-шы кезеңде орналасқан (лантаноидтар)<br><br><b>Физикалық қасиеттері</b><br>• Күміс-ақ жылтыр; созылғыш және пластикалық<br>• Қайнау температурасы — 2562°C<br>• Балқу температурасы — 1412°C<br>• Бөлме темп. парамагнитті; төмен темп. ферромагнитті<br>• Жоғары магниттік күш; деректерді сақтау құрылғыларында қолданылады<br>• Құрғақ ауада салыстырмалы түрде тұрақты<br><br><b>Химиялық қасиеттері</b><br>• Сумен әрекеттесіп, Dy(OH)₃ және H₂ түзеді<br>• Сұйытылған минералды қышқылдарда оңай ериді<br>• Үш валентті қосылыстар түзеді; тұздары сары-жасыл немесе ақ<br>• Нейтрондарды қармаудың жоғары қимасы (реактор өзектері үшін)<br>• Тән тотығу дәрежесі — +3<br><br><b>Қолданылуы</b><br>• Энергетика: электромоторлар мен жел генераторларына арналған ыстыққа төзімді магниттер<br>• Технология: қатты дискілер мен деректерді сақтау материалдары<br>• Жарықтандыру: газразрядты шамдар мен студиялық жарық<br>• Ядролық техника: ядролық реакторлардағы реттегіш өзектер<br>• Оптика: ИҚ-лазерлер мен детекторларға арналған арнайы шынылар",
            "fact": "Неодим магнитіне аз мөлшерде диспрозий қосу оның қатты қызған кезде де магнетизмін сақтауына мүмкіндік береді.",
            "simple": "Диспрозий — №66 элемент, электромобиль моторының қуатты және тиімді болуына көмектесетін металл.",
            "detailed": "Диспрозий жасыл энергетика үшін өте маңызды. Ол электромобильдер мен жел турбиналарындағы тұрақты магниттердің қызуға төзімділігін арттырады.",
            "study": ["Атомдық нөмір: 66", "Таңбасы: Dy", "Тобы: Лантаноидтар", "Массасы: 162.50", "Қолданылуы: Электрокар магниттері"],
            "q1": {"text": "Диспрозийдің атомдық нөмірі қандай?", "opts": ["65", "66", "67", "68"], "correct": 1},
            "q2": {"text": "Диспрозийдің химиялық таңбасы қандай?", "opts": ["D", "Ds", "Dy", "Dr"], "correct": 2},
            "q3": {"text": "Қай технология ыстыққа төзімділік үшін диспрозийге сүйенеді?", "opts": ["Тамақ", "Электромобиль моторы", "Киім", "Шиналар"], "correct": 1},
            "q4": {"text": "Диспрозий атауы нені білдіреді?", "opts": ["Жарық", "Табуы қиын", "Жұмсақ", "Егіз"], "correct": 1},
            "q5": {"text": "Диспрозий периодтық кестенің қай тобында орналасқан?", "opts": ["Галогендер", "Инертті газдар", "Лантаноидтар", "Сілтілік металдар"], "correct": 2}
        }
    },
    "holmium": {
        "en": {
            "title": "Holmium",
            "desc": "A soft silvery-white metal with the highest magnetic strength of all elements.",
            "details": "<b>Key Facts</b><br>• Chemical Symbol — Ho<br>• Atomic Number — 67<br>• Silvery-white rare earth metal with unusual magnetic properties<br>• Has the highest magnetic moment (strength) of any natural element<br>• Used in medical lasers for surgery and kidney stone treatment<br>• Named after Stockholm (Latin 'Holmia')<br>• Discovered in 1878 in Switzerland and Sweden<br><br><b>Atomic Structure</b><br>• 67 protons in the nucleus<br>• 67 electrons surrounding the nucleus<br>• Only one stable natural isotope (Holmium-165)<br>• Electron Configuration — [Xe] 4f¹¹ 6s²<br>• Located in Period 6 (Lanthanides)<br><br><b>Physical Properties</b><br>• Silvery-white luster; soft and malleable<br>• Boiling Point — 2700°C<br>• Melting Point — 1472°C<br>• Paramagnetic at room temp; intensely ferromagnetic below -254°C<br>• Can concentrate high-intensity magnetic fields (flux concentrator)<br>• Stable in dry air but oxidizes in moist conditions<br><br><b>Chemical Properties</b><br>• Reacts with water to form Ho(OH)₃ and H₂<br>• Dissolves in dilute mineral acids to form yellow-pink salts<br>• Forms trivalent compounds (Ho³⁺)<br>• Oxide (Ho₂O₃) has unusual color-changing properties in different light<br>• Typical oxidation state — +3<br><br><b>Applications</b><br>• Medicine: Holmium-YAG (Ho:YAG) lasers for non-invasive surgery<br>• Magnets: Pole pieces for high-intensity magnetic field generation<br>• Optics: Yellow or pink coloring for cubic zirconia and glass<br>• Nuclear: Control rods and neutron absorbers in nuclear reactors<br>• Science: Research in high-field physics and magnetic materials",
            "fact": "Holmium has the highest magnetic strength of any element. If you make a magnet with Holmium, it will be the strongest possible natural magnet.",
            "simple": "Holmium is element 67, a metal with incredible magnetic power used in medical lasers.",
            "detailed": "Holmium is unique because of its record-breaking magnetic moment. This allows it to focus magnetic fields. Industrially, its biggest use is in specialized medical lasers used by surgeons.",
            "study": ["Atomic Number: 67", "Symbol: Ho", "Group: Lanthanides", "Mass: 164.93", "Feature: Highest Magnetism"],
            "q1": {"text": "What is the atomic number of Holmium?", "opts": ["66", "67", "68", "69"], "correct": 1},
            "q2": {"text": "What is the chemical symbol for Holmium?", "opts": ["H", "Hm", "Ho", "Hi"], "correct": 2},
            "q3": {"text": "Holmium has the highest natural [____] of any element.", "opts": ["Melting Point", "Radioactivity", "Magnetic Strength", "Density"], "correct": 2},
            "q4": {"text": "In which medical tool is Holmium commonly used?", "opts": ["Scalpel", "Laser", "Syringe", "Bandage"], "correct": 1},
            "q5": {"text": "What is the origin of the name Holmium?", "opts": ["Moon", "Stockholm", "Sun", "Iron"], "correct": 1}
        },
        "ru": {
            "title": "Гольмий",
            "desc": "Мягкий серебристо-белый металл с самой высокой магнитной силой среди всех элементов.",
            "details": "<b>Основные факты</b><br>• Химический символ — Ho<br>• Атомный номер — 67<br>• Серебристо-белый редкоземельный металл с необычными магн. свойствами<br>• Имеет самый высокий магнитный момент (силу) среди элементов<br>• Используется в медицинских лазерах для хирургии<br>• Назван в честь Стокгольма (латинское «Holmia»)<br>• Открыт в 1878 году в Швейцарии и Швеции<br><br><b>Атомная структура</b><br>• 67 протонов в ядре<br>• 67 электронов вокруг ядра<br>• Только один стабильный природный изотоп (Гольмий-165)<br>• Электронная конфигурация — [Xe] 4f¹¹ 6s²<br>• Расположен в 6-м периоде (лантаноиды)<br><br><b>Физические свойства</b><br>• Серебристо-белый блеск; мягкий и ковкий<br>• Температура кипения — 2700°C<br>• Температура плавления — 1472°C<br>• Парамагнитен при комн. темп.; ферромагнитен при сверхнизких темп.<br>• Может концентрировать мощные магнитные поля<br>• Стабилен в сухом воздухе, но окисляется во влажном<br><br><b>Химические свойства</b><br>• Реагирует с водой, образуя Ho(OH)₃ и H₂<br>• Растворяется в минеральных кислотах, образуя желто-розовые соли<br>• Образует трехвалентные соединения (Ho³⁺)<br>• Оксид (Ho₂O₃) меняет цвет при разном освещении<br>• Типичная степень окисления — +3<br><br><b>Применение</b><br>• Медицина: лазеры Ho:YAG для малоинвазивной хирургии<br>• Магниты: наконечники для генерации сверхмощных магнитных полей<br>• Оптика: желтая или розовая окраска фианитов и стекла<br>• Ядерная техника: поглотители нейтронов в реакторах<br>• Наука: исследования в области физики высоких полей",
            "fact": "Гольмий обладает самой высокой магнитной силой среди всех элементов. Магнит с гольмием был бы самым мощным природным магнитом.",
            "simple": "Гольмий — это элемент №67, металл с невероятной магнитной силой, используемый в медицинских лазерах.",
            "detailed": "Гольмий уникален своим рекордным магнитным моментом. Это позволяет ему фокусировать магнитные поля. В промышленности его основное применение — специализированные лазеры для хирургов.",
            "study": ["Атомный номер: 67", "Символ: Ho", "Группа: Лантаноиды", "Масса: 164.93", "Особенность: Высший магнетизм"],
            "q1": {"text": "Какой атомный номер у гольмия?", "opts": ["66", "67", "68", "69"], "correct": 1},
            "q2": {"text": "Какой химический символ у гольмия?", "opts": ["H", "Hm", "Ho", "Hi"], "correct": 2},
            "q3": {"text": "Гольмий обладает самым высоким природным [____] среди элементов.", "opts": ["Точка плавления", "Радиоактивность", "Магнитная сила", "Плотность"], "correct": 2},
            "q4": {"text": "В каком медицинском инструменте часто используют гольмий?", "opts": ["Скальпель", "Лазер", "Шприц", "Бинт"], "correct": 1},
            "q5": {"text": "Каково происхождение названия Гольмий?", "opts": ["Луна", "Стокгольм", "Солнце", "Железо"], "correct": 1}
        },
        "kk": {
            "title": "Гольмий",
            "desc": "Барлық элементтердің ішіндегі ең жоғары магниттік күшке ие жұмсақ күміс-ақ металл.",
            "details": "<b>Негізгі фактілер</b><br>• Химиялық таңбасы — Ho<br>• Атомдық нөмірі — 67<br>• Ерекше магниттік қасиеттері бар күміс-ақ сирек жер металы<br>• Кез келген табиғи элементтің ішіндегі ең жоғары магниттік моментке ие<br>• Хирургия мен бүйрек тастарын емдеуге арналған медициналық лазерлерде қолданылады<br>• Стокгольмнің құрметіне аталған (латынша «Holmia»)<br>• 1878 жылы Швейцария мен Швецияда ашылған<br><br><b>Атомдық құрылымы</b><br>• Ядрода 67 протон бар<br>• Ядро айналасында 67 электрон<br>• Бір ғана тұрақты табиғи изотоп (Гольмий-165)<br>• Электрондық конфигурациясы — [Xe] 4f¹¹ 6s²<br>• 6-шы кезеңде орналасқан (лантаноидтар)<br><br><b>Физикалық қасиеттері</b><br>• Күміс-ақ жылтыр; жұмсақ және созылғыш<br>• Қайнау температурасы — 2700°C<br>• Балқу температурасы — 1472°C<br>• Бөлме темп. парамагнитті; -254°C-тан төмен темп. күшті ферромагнитті<br>• Жоғары қарқынды магнит өрістерін шоғырландыра алады<br>• Құрғақ ауада тұрақты, бірақ ылғалды жағдайда тотығады<br><br><b>Химиялық қасиеттері</b><br>• Сумен әрекеттесіп, Ho(OH)₃ және H₂ түзеді<br>• Сұйытылған минералды қышқылдарда еріп, сары-қызғылт тұздар түзеді<br>• Үш валентті қосылыстар (Ho³⁺) түзеді<br>• Оксиді (Ho₂O₃) әртүрлі жарықта түсін өзгертетін ерекше қасиетке ие<br>• Тән тотығу дәрежесі — +3<br><br><b>Қолданылуы</b><br>• Медицина: аз инвазивті хирургияға арналған Гольмий-YAG (Ho:YAG) лазерлері<br>• Магниттер: жоғары қарқынды магнит өрісін жасауға арналған полюс ұштықтары<br>• Оптика: фианиттер мен шыныларды сары немесе қызғылт түске бояу<br>• Ядролық техника: ядролық реакторлардағы реттегіш өзектер<br>• Ғылым: жоғары өрісті физика және магниттік материалдарды зерттеу",
            "fact": "Гольмий кез келген элементтің ішіндегі ең жоғары магниттік күшке ие. Гольмиймен жасалған магнит ең күшті табиғи магнит болады.",
            "simple": "Гольмий — №67 элемент, медициналық лазерлерде қолданылатын таңғажайып магниттік күші бар металл.",
            "detailed": "Гольмий өзінің рекордтық магниттік моментімен бірегей. Бұл оған магнит өрістерін шоғырландыруға мүмкіндік береді. Өнеркәсіпте оның негізгі қолданылуы — хирургияға арналған мамандандырылған лазерлер.",
            "study": ["Атомдық нөмір: 67", "Таңбасы: Ho", "Тобы: Лантаноидтар", "Массасы: 164.93", "Ерекшелігі: Ең жоғары магнетизм"],
            "q1": {"text": "Гольмийдің атомдық нөмірі қандай?", "opts": ["66", "67", "68", "69"], "correct": 1},
            "q2": {"text": "Гольмийдің химиялық таңбасы қандай?", "opts": ["H", "Hm", "Ho", "Hi"], "correct": 2},
            "q3": {"text": "Гольмий кез келген элементтің ішіндегі ең жоғары табиғи [____] ие.", "opts": ["Балқу нүктесі", "Радиоактивтілік", "Магниттік күш", "Тығыздық"], "correct": 2},
            "q4": {"text": "Қай медициналық құралда гольмий жиі қолданылады?", "opts": ["Скальпель", "Лазер", "Шприц", "Таңғыш"], "correct": 1},
            "q5": ["Ай", "Стокгольм", "Күн", "Темір"],
            "q5": {"text": "Гольмий атауының шығу тегі қандай?", "opts": ["Ай", "Стокгольм", "Күн", "Темір"], "correct": 1}
        }
    },
    "erbium": {
        "en": {
            "title": "Erbium",
            "desc": "A silvery-white metal, vital for signal amplifiers in fiber-optic internet cables.",
            "details": "<b>Key Facts</b><br>• Chemical Symbol — Er<br>• Atomic Number — 68<br>• Silvery-white, relatively stable rare earth metal<br>• Essential for the internet: Erbium-Doped Fiber Amplifiers (EDFAs)<br>• Gives glass and ceramics a beautiful pink or rose color<br>• Named after the Swedish village Ytterby<br>• Discovered in 1843 by Carl Gustaf Mosander<br><br><b>Atomic Structure</b><br>• 68 protons in the nucleus<br>• 68 electrons surrounding the nucleus<br>• 6 stable natural isotopes; Erbium-166 is common<br>• Electron Configuration — [Xe] 4f¹² 6s²<br>• Located in Period 6 (Lanthanides)<br><br><b>Physical Properties</b><br>• Silvery-white luster; soft and malleable<br>• Boiling Point — 2868°C<br>• Melting Point — 1529°C<br>• Stable in air and does not oxidize as rapidly as other rare earths<br>• Pink color in salts and oxide (Er₂O₃)<br>• Exhibits strong infrared absorption and emission<br><br><b>Chemical Properties</b><br>• Reacts slowly with water to form Er(OH)₃<br>• Dissolves in dilute mineral acids to form rose-colored solutions<br>• High electrical resistance compared to other lanthanides<br>• Trivalent oxidation state is most common<br>• Typical oxidation state — +3<br><br><b>Applications</b><br>• Telecommunications: EDFA signal amplifiers for fiber optics (Global Internet)<br>• Medicine: Er:YAG lasers for skin resurfacing and dental procedures<br>• Optics: Infrared-absorbing glass and luxury rose-colored glassware<br>• Nuclear: Neutron-absorbing control rods in nuclear reactors<br>• Jewelry: Pink coloring for artificial gemstones (cubic zirconia)",
            "fact": "Erbium is the reason the internet works across long distances. It amplifies the light signals inside fiber-optic cables.",
            "simple": "Erbium is element 68, a metal that helps your internet stay fast and makes glass look pink.",
            "detailed": "Erbium is critical for global communications. Without erbium-doped amplifiers, fiber-optic signals would fade out over long distances. It is also used in skin-resurfacing lasers.",
            "study": ["Atomic Number: 68", "Symbol: Er", "Group: Lanthanides", "Mass: 167.26", "Usage: Fiber Optics"],
            "q1": {"text": "What is the atomic number of Erbium?", "opts": ["67", "68", "69", "70"], "correct": 1},
            "q2": {"text": "What is the chemical symbol for Erbium?", "opts": ["E", "Er", "Eb", "Ei"], "correct": 1},
            "q3": {"text": "Which technology relies on Erbium to work across long distances?", "opts": ["Radio", "Fiber-optic internet", "Satellites", "TV"], "correct": 1},
            "q4": {"text": "What color do Erbium salts give to glass?", "opts": ["Green", "Blue", "Pink", "Yellow"], "correct": 2},
            "q5": {"text": "After which village is Erbium named?", "opts": ["Paris", "London", "Ytterby", "Berlin"], "correct": 2}
        },
        "ru": {
            "title": "Эрбий",
            "desc": "Серебристо-белый металл, жизненно важный для усилителей сигнала в оптоволоконном интернете.",
            "details": "<b>Основные факты</b><br>• Химический символ — Er<br>• Атомный номер — 68<br>• Серебристо-белый, стабильный редкоземельный металл<br>• Необходим для работы интернета: усилители EDFA<br>• Придает стеклу и керамике красивый розовый цвет<br>• Назван в честь шведской деревни Иттербю<br>• Открыт в 1843 году Карлом Густавом Мосандером<br><br><b>Атомная структура</b><br>• 68 протонов в ядре<br>• 68 электронов вокруг ядра<br>• 6 стабильных изотопов; Эрбий-166 — самый частый<br>• Электронная конфигурация — [Xe] 4f¹² 6s²<br>• Расположен в 6-м периоде (лантаноиды)<br><br><b>Физические свойства</b><br>• Серебристо-белый блеск; мягкий и ковкий<br>• Температура кипения — 2868°C<br>• Температура плавления — 1529°C<br>• Довольно стабилен на воздухе, медленно окисляется<br>• Розовый цвет солей и оксида (Er₂O₃)<br>• Сильное поглощение и излучение в ИК-диапазоне<br><br><b>Химические свойства</b><br>• Медленно реагирует с водой, образуя Er(OH)₃<br>• Растворяется в кислотах, образуя растворы розового цвета<br>• Высокое электрическое сопротивление для лантаноида<br>• Трехвалентная степень окисления наиболее характерна<br>• Типичная степень окисления — +3<br><br><b>Применение</b><br>• Телеком: усилители сигнала EDFA для оптоволокна (Мировой Интернет)<br>• Медицина: лазеры Er:YAG для шлифовки кожи и стоматологии<br>• Оптика: поглощающее ИК-свет стекло и розовая посуда люкс-класса<br>• Ядерная техника: поглощающие нейтроны стержни в реакторах<br>• Ювелирное дело: розовая окраска фианитов и камней",
            "fact": "Эрбий — причина, по которой интернет работает на больших расстояниях. Он усиливает световые сигналы внутри оптоволокна.",
            "simple": "Эрбий — это элемент №68, металл, который помогает интернету оставаться быстрым и окрашивает стекло в розовый.",
            "detailed": "Эрбий критически важен для глобальных коммуникаций. Без эрбиевых усилителей сигналы в оптоволокне затухали бы на больших дистанциях. Также используется в лазерах для косметологии.",
            "study": ["Атомный номер: 68", "Символ: Er", "Группа: Лантаноиды", "Масса: 167.26", "Применение: Оптоволокно"],
            "q1": {"text": "Какой атомный номер у эрбия?", "opts": ["67", "68", "69", "70"], "correct": 1},
            "q2": {"text": "Какой химический символ у эрбия?", "opts": ["E", "Er", "Eb", "Ei"], "correct": 1},
            "q3": {"text": "Какая технология полагается на эрбий для работы на больших дистанциях?", "opts": ["Радио", "Оптоволоконный интернет", "Спутники", "ТВ"], "correct": 1},
            "q4": {"text": "Какой цвет соли эрбия придают стеклу?", "opts": ["Зеленый", "Синий", "Розовый", "Желтый"], "correct": 2},
            "q5": {"text": "В честь какой деревни назван эрбий?", "opts": ["Париж", "Лондон", "Иттербю", "Берлин"], "correct": 2}
        },
        "kk": {
            "title": "Эрбий",
            "desc": "Оптоволоконды интернет кабельдеріндегі сигнал күшейткіштері үшін маңызды күміс-ақ металл.",
            "details": "<b>Негізгі фактілер</b><br>• Химиялық таңбасы — Er<br>• Атомдық нөмірі — 68<br>• Күміс-ақ, салыстырмалы түрде тұрақты сирек жер металы<br>• Интернеттің жұмысы үшін маңызды: EDFA күшейткіштері<br>• Шыны мен керамикаға әдемі қызғылт түс береді<br>• Швецияның Иттербю ауылының құрметіне аталған<br>• 1843 жылы Карл Густав Мосандер ашқан<br><br><b>Атомдық құрылымы</b><br>• Ядрода 68 протон бар<br>• Ядро айналасында 68 электрон<br>• 6 тұрақты изотоп; Эрбий-166 ең жиі кездесетіні<br>• Электрондық конфигурациясы — [Xe] 4f¹² 6s²<br>• 6-шы кезеңде орналасқан (лантаноидтар)<br><br><b>Физикалық қасиеттері</b><br>• Күміс-ақ жылтыр; жұмсақ және созылғыш<br>• Қайнау температурасы — 2868°C<br>• Балқу температурасы — 1529°C<br>• Ауада тұрақты және басқа сирек жерлерге қарағанда баяу тотығады<br>• Тұздары мен оксиді (Er₂O₃) қызғылт түсті<br>• ИҚ-диапазонда күшті жұтылу мен шығарылуды көрсетеді<br><br><b>Химиялық қасиеттері</b><br>• Сумен баяу әрекеттесіп, Er(OH)₃ түзеді<br>• Қышқылдарда еріп, қызғылт түсті ерітінділер түзеді<br>• Басқа лантаноидтармен салыстырғанда жоғары электрлік кедергі<br>• Үш валентті тотығу дәрежесі ең тән<br>• Тән тотығу дәрежесі — +3<br><br><b>Қолданылуы</b><br>• Телеком: оптоволокноға арналған EDFA сигнал күшейткіштері (Жаһандық Интернет)<br>• Медицина: теріні тегістеуге және стоматологияға арналған Er:YAG лазерлері<br>• Оптика: ИҚ-сәулені жұтатын шыны және люкс класты қызғылт ыдыстар<br>• Ядролық техника: ядролық реакторлардағы нейтрон жұтқыш өзектер<br>• Зергерлік іс: фианиттер мен тастарды қызғылт түске бояу",
            "fact": "Эрбий — интернеттің үлкен қашықтықта жұмыс істеуінің себебі. Ол оптоволокно ішіндегі жарық сигналдарын күшейтеді.",
            "simple": "Эрбий — №68 элемент, интернеттің жылдам болуына көмектесетін және шыныны қызғылт түске бояйтын металл.",
            "detailed": "Эрбий жаһандық коммуникациялар үшін өте маңызды. Эрбий күшейткіштері болмаса, оптоволокнодағы сигналдар алыс қашықтықта өшіп қалар еді. Сондай-ақ косметологиялық лазерлерде қолданылады.",
            "study": ["Атомдық нөмір: 68", "Таңбасы: Er", "Тобы: Лантаноидтар", "Массасы: 167.26", "Қолданылуы: Оптоволокно"],
            "q1": {"text": "Эрбийдің атомдық нөмірі қандай?", "opts": ["67", "68", "69", "70"], "correct": 1},
            "q2": {"text": "Эрбийдің химиялық таңбасы қандай?", "opts": ["E", "Er", "Eb", "Ei"], "correct": 1},
            "q3": {"text": "Қай технология алыс қашықтықта жұмыс істеу үшін эрбийге сүйенеді?", "opts": ["Радио", "Оптоволоконды интернет", "Спутниктер", "ТД"], "correct": 1},
            "q4": {"text": "Эрбий тұздары шыныға қандай түс береді?", "opts": ["Жасыл", "Көк", "Қызғылт", "Сары"], "correct": 2},
            "q5": {"text": "Эрбий қай ауылдың құрметіне аталған?", "opts": ["Париж", "Лондон", "Иттербю", "Берлин"], "correct": 2}
        }
    },
    "thulium": {
        "en": {
            "title": "Thulium",
            "desc": "The rarest of the naturally occurring rare earth metals, used in portable X-ray machines and laser surgery.",
            "details": "<b>Key Facts</b><br>• Chemical Symbol — Tm<br>• Atomic Number — 69<br>• Rarest naturally occurring lanthanide in the Earth's crust<br>• Used as a source for portable X-ray devices (Thulium-170)<br>• Found in the anti-counterfeiting blue fluorescent bands of Euro notes<br>• Named after 'Thule', the ancient name for Scandinavia<br>• Discovered in 1879 by Per Teodor Cleve<br><br><b>Atomic Structure</b><br>• 69 protons in the nucleus<br>• 69 electrons surrounding the nucleus<br>• Only one stable natural isotope (Thulium-169)<br>• Electron Configuration — [Xe] 4f¹³ 6s²<br>• Located in Period 6 (Lanthanides)<br><br><b>Physical Properties</b><br>• Silvery-gray luster; soft enough to be cut with a knife<br>• Boiling Point — 1950°C<br>• Melting Point — 1545°C<br>• Paramagnetic at room temperature<br>• Easily worked and shaped due to high ductility<br>• Bright blue fluorescence under UV light (in certain compounds)<br><br><b>Chemical Properties</b><br>• Reacts slowly with water; dissolves in dilute acids<br>• Tarnishes slowly in air but is stable in dry conditions<br>• Forms trivalent compounds; salts are typically pale green<br>• Thulium(III) ion emits a strong blue light when excited<br>• Typical oxidation state — +3<br><br><b>Applications</b><br>• Medicine: Portable X-ray sources (Tm-170) and Thulium lasers for surgery<br>• Security: Blue fluorescent ink in Euro banknotes<br>• Tech: Dopant for ceramic magnetic materials (ferrites)<br>• Science: High-temp superconductors and specialized probes<br>• Industry: Arc lighting for specialized photography",
            "fact": "Thulium is so rare and expensive that it has very few industrial uses, but it is indispensable for portable X-ray machines.",
            "simple": "Thulium is element 69, an extremely rare metal used to make small, portable X-ray machines.",
            "detailed": "Thulium is the rarest stable lanthanide. Because it emits X-rays when radioactive, it's used in portable devices that don't need a power source. It also helps detect fake money by glowing blue.",
            "study": ["Atomic Number: 69", "Symbol: Tm", "Group: Lanthanides", "Mass: 168.93", "Usage: Portable X-rays"],
            "q1": {"text": "What is the atomic number of Thulium?", "opts": ["68", "69", "70", "71"], "correct": 1},
            "q2": {"text": "What is the chemical symbol for Thulium?", "opts": ["T", "Th", "Tm", "Tu"], "correct": 2},
            "q3": {"text": "What makes Thulium unique among stable lanthanides?", "opts": ["Most common", "Most radioactive", "Rarest", "Gas at room temp"], "correct": 2},
            "q4": {"text": "In which portable device is Thulium-170 used?", "opts": ["Phone", "X-ray machine", "Radio", "Microwave"], "correct": 1},
            "q5": {"text": "What color does Thulium glow under UV light in Euro notes?", "opts": ["Red", "Green", "Blue", "Yellow"], "correct": 2}
        },
        "ru": {
            "title": "Тулий",
            "desc": "Самый редкий из природных лантаноидов, используемый в переносных рентген-аппаратах.",
            "details": "<b>Основные факты</b><br>• Химический символ — Tm<br>• Атомный номер — 69<br>• Самый редкий стабильный лантаноид в земной коре<br>• Источник излучения для портативных рентген-аппаратов (Тулий-170)<br>• Используется в синих светящихся полосах банкнот евро<br>• Назван в честь «Туле» — древнего названия Скандинавии<br>• Открыт в 1879 году Пером Теодором Клеве<br><br><b>Атомная структура</b><br>• 69 протонов в ядре<br>• 69 электронов вокруг ядра<br>• Только один стабильный природный изотоп (Тулий-169)<br>• Электронная конфигурация — [Xe] 4f¹³ 6s²<br>• Расположен в 6-м периоде (лантаноиды)<br><br><b>Физические свойства</b><br>• Серебристо-серый блеск; мягкий, можно резать ножом<br>• Температура кипения — 1950°C<br>• Температура плавления — 1545°C<br>• Парамагнитен при комнатной температуре<br>• Легко поддается обработке благодаря высокой пластичности<br>• Ярко-синяя флуоресценция под УФ (в соединениях)<br><br><b>Химические свойства</b><br>• Медленно реагирует с водой; растворяется в кислотах<br>• Медленно тускнеет на воздухе, стабилен в сухих условиях<br>• Образует трехвалентные соединения; соли обычно бледно-зеленые<br>• Ион тулия (III) излучает яркий синий свет при возбуждении<br>• Типичная степень окисления — +3<br><br><b>Применение</b><br>• Медицина: портативные рентген-источники (Tm-170) и тулиевые лазеры<br>• Безопасность: синие флуоресцентные чернила в банкнотах евро<br>• Технологии: добавка для керамических магнитов (ферритов)<br>• Наука: высокотемпературные сверхпроводники и спецзонды<br>• Промышленность: дуговое освещение для спецсъемок",
            "fact": "Тулий настолько редок и дорог, что у него мало промышленных применений, но он незаменим для переносных рентген-аппаратов.",
            "simple": "Тулий — это элемент №69, редчайший металл, используемый для создания маленьких рентген-аппаратов.",
            "detailed": "Тулий — самый редкий стабильный лантаноид. Так как радиоактивный тулий испускает рентгеновские лучи, его используют в приборах, не требующих питания. Также он помогает выявлять фальшивые деньги.",
            "study": ["Атомный номер: 69", "Символ: Tm", "Группа: Лантаноиды", "Масса: 168.93", "Применение: Переносной рентген"],
            "q1": {"text": "Какой атомный номер у тулия?", "opts": ["68", "69", "70", "71"], "correct": 1},
            "q2": {"text": "Какой химический символ у тулия?", "opts": ["T", "Th", "Tm", "Tu"], "correct": 2},
            "q3": {"text": "Что делает тулий уникальным среди стабильных лантаноидов?", "opts": ["Самый частый", "Самый радиоактивный", "Самый редкий", "Газ при комн. темп."], "correct": 2},
            "q4": {"text": "В каком портативном устройстве используют Тулий-170?", "opts": ["Телефон", "Рентген-аппарат", "Радио", "Микроволновка"], "correct": 1},
            "q5": {"text": "Каким цветом светится тулий под УФ в банкнотах евро?", "opts": ["Красный", "Зеленый", "Синий", "Желтый"], "correct": 2}
        },
        "kk": {
            "title": "Тулий",
            "desc": "Табиғи сирек жер металдарының ішіндегі ең сирегі, портативті рентген аппараттарында қолданылады.",
            "details": "<b>Негізгі фактілер</b><br>• Химиялық таңбасы — Tm<br>• Атомдық нөмірі — 69<br>• Жер қыртысындағы ең сирек кездесетін тұрақты лантаноид<br>• Портативті рентген құрылғылары үшін сәуле көзі ретінде қолданылады (Тулий-170)<br>• Евро банкноттарындағы қолдан жасауға қарсы көк флуоресцентті жолақтарда кездеседі<br>• Скандинавияның ежелгі атауы «Туле» құрметіне аталған<br>• 1879 жылы Пер Теодор Клеве ашқан<br><br><b>Атомдық құрылымы</b><br>• Ядрода 69 протон бар<br>• Ядро айналасында 69 электрон<br>• Бір ғана тұрақты табиғи изотоп (Тулий-169)<br>• Электрондық конфигурациясы — [Xe] 4f¹³ 6s²<br>• 6-шы кезеңде орналасқан (лантаноидтар)<br><br><b>Физикалық қасиеттері</b><br>• Күміс-сұр жылтыр; пышақпен кесуге болатындай жұмсақ<br>• Қайнау температурасы — 1950°C<br>• Балқу температурасы — 1545°C<br>• Бөлме температурасында парамагнитті<br>• Жоғары пластикалығының арқасында оңай өңделеді<br>• УК-сәуле астында ашық көк түспен жарқырайды (кейбір қосылыстарда)<br><br><b>Химиялық қасиеттері</b><br>• Сумен баяу әрекеттеседі; сұйытылған қышқылдарда ериді<br>• Ауада баяу күңгірттенеді, бірақ құрғақ жағдайда тұрақты<br>• Үш валентті қосылыстар түзеді; тұздары әдетте ақшыл жасыл<br>• Тулий (III) ионы қозған кезде күшті көк жарық шығарады<br>• Тән тотығу дәрежесі — +3<br><br><b>Қолданылуы</b><br>• Медицина: портативті рентген көздері (Tm-170) және хирургиялық тулий лазерлері<br>• Қауіпсіздік: Евро банкноттарындағы көк флуоресцентті сия<br>• Технология: керамикалық магниттік материалдарға (ферриттер) арналған қоспа<br>• Ғылым: жоғары температуралық асқын өткізгіштер және арнайы зондтар<br>• Өнеркәсіп: арнайы фотосуреттерге арналған доғалық жарықтандыру",
            "fact": "Тулий соншалықты сирек және қымбат, оның өнеркәсіптік қолданылуы аз, бірақ ол портативті рентген аппараттары үшін таптырмайды.",
            "simple": "Тулий — №69 элемент, шағын портативті рентген аппараттарын жасау үшін қолданылатын өте сирек металл.",
            "detailed": "Тулий — ең сирек тұрақты лантаноид. Радиоактивті тулий рентген сәулелерін шығаратындықтан, ол қуат көзін қажет етпейтін портативті құрылғыларда қолданылады. Сондай-ақ ол көк түспен жарқырау арқылы жалған ақшаны анықтауға көмектеседі.",
            "study": ["Атомдық нөмір: 69", "Таңбасы: Tm", "Тобы: Лантаноидтар", "Массасы: 168.93", "Қолданылуы: Портативті рентген"],
            "q1": {"text": "Тулийдің атомдық нөмірі қандай?", "opts": ["68", "69", "70", "71"], "correct": 1},
            "q2": {"text": "Тулийдің химиялық таңбасы қандай?", "opts": ["T", "Th", "Tm", "Tu"], "correct": 2},
            "q3": {"text": "Тұрақты лантаноидтар арасында тулийді не ерекше етеді?", "opts": ["Ең жиі кездесетіні", "Ең радиоактивті", "Ең сирегі", "Бөлме темп. газ"], "correct": 2},
            "q4": {"text": "Тулий-170 қай портативті құрылғыда қолданылады?", "opts": ["Телефон", "Рентген аппараты", "Радио", "Микротолқынды пеш"], "correct": 1},
            "q5": {"text": "Евро банкноттарында УК-сәуле астында тулий қандай түспен жарқырайды?", "opts": ["Қызыл", "Жасыл", "Көк", "Сары"], "correct": 2}
        }
    },
    "ytterbium": {
        "en": {
            "title": "Ytterbium",
            "desc": "A bright silvery metal, essential for ultra-precise atomic clocks and high-power fiber lasers.",
            "details": "<b>Key Facts</b><br>• Chemical Symbol — Yb<br>• Atomic Number — 70<br>• Bright, silvery-white rare earth metal<br>• Essential for the world's most stable atomic clocks<br>• Used in high-power lasers for cutting and welding metals<br>• Named after the Swedish village Ytterby<br>• Discovered in 1878 by Jean Charles Galissard de Marignac<br><br><b>Atomic Structure</b><br>• 70 protons in the nucleus<br>• 70 electrons (full 4f¹⁴ shell, relatively stable)<br>• 7 stable natural isotopes; Ytterbium-174 is common<br>• Electron Configuration — [Xe] 4f¹⁴ 6s²<br>• Located in Period 6 (Lanthanides)<br><br><b>Physical Properties</b><br>• Bright silvery luster; soft, malleable, and ductile<br>• Boiling Point — 1196°C<br>• Melting Point — 824°C<br>• Shows three different crystal structures (allotropes)<br>• Electrical conductivity increases under high pressure<br>• Paramagnetic at room temperature<br><br><b>Chemical Properties</b><br>• Slowly tarnishes in air, forming a protective oxide layer<br>• Reacts with water to form Yb(OH)₃ and H₂<br>• Dissolves in mineral acids, producing colorless solutions<br>• Forms trivalent (Yb³⁺) and divalent (Yb²⁺) compounds<br>• Typical oxidation state — +3<br><br><b>Applications</b><br>• Science: Ytterbium atomic clocks (more stable than Cesium ones)<br>• Industry: High-power fiber lasers for industrial cutting and welding<br>• Medicine: Radioactive Ytterbium-169 as a portable X-ray source<br>• Technology: Dopant for stainless steel and laser crystals<br>• Research: Study of materials under high pressure and temperature",
            "fact": "Ytterbium atomic clocks are so stable that they would lose only one second in the entire age of the universe (13.8 billion years).",
            "simple": "Ytterbium is element 70, a metal used to build the most accurate clocks ever made.",
            "detailed": "Ytterbium is crucial for precision science. Its atomic clocks are significantly more stable than the current cesium standard. Industrially, its lasers are powerful enough to cut through thick steel.",
            "study": ["Atomic Number: 70", "Symbol: Yb", "Group: Lanthanides", "Mass: 173.05", "Usage: Atomic Clocks"],
            "q1": {"text": "What is the atomic number of Ytterbium?", "opts": ["69", "70", "71", "72"], "correct": 1},
            "q2": {"text": "What is the chemical symbol for Ytterbium?", "opts": ["Y", "Yt", "Yb", "Yu"], "correct": 2},
            "q3": {"text": "What is the record-breaking feature of Ytterbium atomic clocks?", "opts": ["Cheapest", "Most stable", "Largest", "Fastest"], "correct": 1},
            "q4": {"text": "Ytterbium is named after which Swedish village?", "opts": ["Kiruna", "Ytterby", "Lund", "Visby"], "correct": 1},
            "q5": {"text": "In which industrial process are Ytterbium lasers used?", "opts": ["Cooking", "Steel cutting", "Painting", "Sewing"], "correct": 1}
        },
        "ru": {
            "title": "Иттербий",
            "desc": "Яркий серебристый металл, необходимый для сверхточных атомных часов и мощных лазеров.",
            "details": "<b>Основные факты</b><br>• Химический символ — Yb<br>• Атомный номер — 70<br>• Яркий серебристо-белый редкоземельный металл<br>• Основа для самых стабильных атомных часов в мире<br>• Используется в мощных лазерах для резки и сварки металлов<br>• Назван в честь шведской деревни Иттербю<br>• Открыт в 1878 году Жаном Шарлем Мариньяком<br><br><b>Атомная структура</b><br>• 70 протонов в ядре<br>• 70 электронов (полная оболочка 4f¹⁴, стабилен)<br>• 7 стабильных изотопов; Иттербий-174 наиболее частый<br>• Электронная конфигурация — [Xe] 4f¹⁴ 6s²<br>• Расположен в 6-м периоде (лантаноиды)<br><br><b>Физические свойства</b><br>• Яркий серебристый блеск; мягкий и пластичный<br>• Температура кипения — 1196°C<br>• Температура плавления — 824°C<br>• Имеет три разные кристаллические формы (аллотропия)<br>• Электропроводность растет при высоком давлении<br>• Парамагнитен при комнатной температуре<br><br><b>Химические свойства</b><br>• Медленно тускнеет на воздухе, образуя защитный слой оксида<br>• Реагирует с водой, образуя Yb(OH)₃ и H₂<br>• Растворяется в минеральных кислотах, образуя бесцветные растворы<br>• Проявляет степени окисления +3 (Yb³⁺) и +2 (Yb²⁺)<br>• Типичная степень окисления — +3<br><br><b>Применение</b><br>• Наука: иттербиевые атомные часы (стабильнее цезиевых)<br>• Промышленность: мощные волоконные лазеры для резки стали<br>• Медицина: радиоактивный Иттербий-169 как источник рентгена<br>• Технологии: добавка в нержавеющую сталь и лазерные кристаллы<br>• Исследования: изучение материалов при высоких давлениях",
            "fact": "Атомные часы на иттербии настолько стабильны, что они потеряли бы всего одну секунду за всё время существования Вселенной (13.8 млрд лет).",
            "simple": "Иттербий — это элемент №70, металл, используемый для создания самых точных часов в истории человечества.",
            "detailed": "Иттербий важен для прецизионной науки. Его атомные часы значительно стабильнее нынешнего цезиевого стандарта. В промышленности его лазеры способны разрезать толстую сталь.",
            "study": ["Атомный номер: 70", "Символ: Yb", "Группа: Лантаноиды", "Масса: 173.05", "Применение: Атомные часы"],
            "q1": {"text": "Какой атомный номер у иттербия?", "opts": ["69", "70", "71", "72"], "correct": 1},
            "q2": {"text": "Какой химический символ у иттербия?", "opts": ["Y", "Yt", "Yb", "Yu"], "correct": 2},
            "q3": {"text": "Какая характеристика иттербиевых атомных часов бьет рекорды?", "opts": ["Дешевизна", "Стабильность", "Размер", "Скорость"], "correct": 1},
            "q4": {"text": "В честь какой деревни назван иттербий?", "opts": ["Кируна", "Иттербю", "Лунд", "Висбю"], "correct": 1},
            "q5": {"text": "В каком процессе используются иттербиевые лазеры?", "opts": ["Готовка", "Резка стали", "Покраска", "Шитье"], "correct": 1}
        },
        "kk": {
            "title": "Иттербий",
            "desc": "Өте дәл атомдық сағаттар мен қуатты талшықты лазерлер үшін қажетті ашық күміс металл.",
            "details": "<b>Негізгі фактілер</b><br>• Химиялық таңбасы — Yb<br>• Атомдық нөмірі — 70<br>• Ашық, күміс-ақ сирек жер металы<br>• Әлемдегі ең тұрақты атомдық сағаттар үшін негіз<br>• Металдарды кесуге және дәнекерлеуге арналған қуатты лазерлерде қолданылады<br>• Швецияның Иттербю ауылының құрметіне аталған<br>• 1878 жылы Жан Шарль Мариньяк ашқан<br><br><b>Атомдық құрылымы</b><br>• Ядрода 70 протон бар<br>• 70 электрон (толық 4f¹⁴ қабығы, тұрақты)<br>• 7 тұрақты изотоп; Иттербий-174 ең жиі кездесетіні<br>• Электрондық конфигурациясы — [Xe] 4f¹⁴ 6s²<br>• 6-шы кезеңде орналасқан (лантаноидтар)<br><br><b>Физикалық қасиеттері</b><br>• Ашық күміс жылтыр; жұмсақ және созылғыш<br>• Қайнау температурасы — 1196°C<br>• Балқу температурасы — 824°C<br>• Үш түрлі кристалдық құрылымы бар (аллотропия)<br>• Жоғары қысымда электр өткізгіштігі артады<br>• Бөлме температурасында парамагнитті<br><br><b>Химиялық қасиеттері</b><br>• Ауада баяу күңгірттенеді, қорғаныс оксид қабатын түзеді<br>• Сумен әрекеттесіп, Yb(OH)₃ және H₂ түзеді<br>• Минералды қышқылдарда еріп, түссіз ерітінділер түзеді<br>• +3 (Yb³⁺) және +2 (Yb²⁺) тотығу дәрежелерін көрсетеді<br>• Тән тотығу дәрежесі — +3<br><br><b>Қолданылуы</b><br>• Ғылым: иттербийлік атомдық сағаттар (цезийлік сағаттардан тұрақтырақ)<br>• Өнеркәсіп: болатты кесуге арналған қуатты талшықты лазерлер<br>• Медицина: рентген көзі ретіндегі радиоактивті Иттербий-169<br>• Технология: тот баспайтын болат пен лазерлік кристалдарға арналған қоспа<br>• Зерттеулер: жоғары қысым мен температурадағы материалдарды зерттеу",
            "fact": "Иттербий атомдық сағаттары соншалықты тұрақты, олар бүкіл Әлемнің жасы (13,8 млрд жыл) ішінде тек бір секунд қана жоғалтар еді.",
            "simple": "Иттербий — №70 элемент, тарихтағы ең дәл сағаттарды жасау үшін қолданылатын металл.",
            "detailed": "Иттербий дәл ғылым үшін өте маңызды. Оның атомдық сағаттары қазіргі цезий стандартынан әлдеқайда тұрақты. Өнеркәсіпте оның лазерлері қалың болатты кесуге қауқарлы.",
            "study": ["Атомдық нөмір: 70", "Таңбасы: Yb", "Тобы: Лантаноидтар", "Массасы: 173.05", "Қолданылуы: Атомдық сағаттар"],
            "q1": {"text": "Иттербийдің атомдық нөмірі қандай?", "opts": ["69", "70", "71", "72"], "correct": 1},
            "q2": {"text": "Иттербийдің химиялық таңбасы қандай?", "opts": ["Y", "Yt", "Yb", "Yu"], "correct": 2},
            "q3": {"text": "Иттербийлік атомдық сағаттардың қай сипаттамасы рекорд орнатты?", "opts": ["Арзандығы", "Тұрақтылығы", "Көлемі", "Жылдамдығы"], "correct": 1},
            "q4": {"text": "Иттербий қай швед ауылының құрметіне аталған?", "opts": ["Кируна", "Иттербю", "Лунд", "Висбю"], "correct": 1},
            "q5": {"text": "Иттербий лазерлері қай өнеркәсіптік процесте қолданылады?", "opts": ["Тамақ пісіру", "Болатты кесу", "Бояу", "Тігу"], "correct": 1}
        }
    },
    "lutetium": {
        "en": {
            "title": "Lutetium",
            "desc": "The final lanthanide, one of the densest and most expensive rare earth metals, used in cancer therapy.",
            "details": "<b>Key Facts</b><br>• Chemical Symbol — Lu<br>• Atomic Number — 71<br>• Hardest, densest, and most expensive rare earth metal<br>• Final element of the lanthanide series<br>• Vital for targeted cancer therapy (Lutetium-177)<br>• Named after 'Lutetia', the Roman name for Paris<br>• Discovered in 1907 by Georges Urbain and others<br><br><b>Atomic Structure</b><br>• 71 protons in the nucleus<br>• 71 electrons (completely filled 4f shell)<br>• One stable natural isotope (Lutetium-175)<br>• Electron Configuration — [Xe] 4f¹⁴ 5d¹ 6s²<br>• Located in Period 6 (Lanthanides/Group 3)<br><br><b>Physical Properties</b><br>• Silvery-white luster; very hard and dense<br>• Boiling Point — 3402°C<br>• Melting Point — 1663°C (highest of all lanthanides)<br>• High corrosion resistance in dry air<br>• High density (9.84 g/cm³) compared to other rare earths<br>• Paramagnetic at room temperature<br><br><b>Chemical Properties</b><br>• Reacts slowly with water; dissolves in dilute acids<br>• Most stable trivalent state (Lu³⁺) of the lanthanides<br>• Chemical behavior similar to Yttrium<br>• Forms colorless salts and white oxide (Lu₂O₃)<br>• Typical oxidation state — +3<br><br><b>Applications</b><br>• Medicine: Lutetium-177 for targeted radiotherapy (PSMA therapy for prostate cancer)<br>• Industry: Catalysts for petroleum cracking and polymerization<br>• Science: Age determination of meteorites (Lutetium-Hafnium dating)<br>• Tech: Scintillators for PET (Positron Emission Tomography) scanners<br>• Lighting: Specialized high-intensity discharge lamps",
            "fact": "Lutetium is so difficult to separate from other rare earths that it is one of the most expensive metals on Earth.",
            "simple": "Lutetium is element 71, an incredibly rare and expensive metal used to fight cancer.",
            "detailed": "Lutetium is the last lanthanide. Its most important modern use is in nuclear medicine, where a radioactive form is used to target and destroy cancer cells while sparing healthy tissue.",
            "study": ["Atomic Number: 71", "Symbol: Lu", "Group: Lanthanides", "Mass: 174.97", "Usage: Cancer Therapy"],
            "q1": {"text": "What is the atomic number of Lutetium?", "opts": ["70", "71", "72", "73"], "correct": 1},
            "q2": {"text": "What is the chemical symbol for Lutetium?", "opts": ["L", "Lt", "Lu", "Le"], "correct": 2},
            "q3": {"text": "What is Lutetium's most important use in modern medicine?", "opts": ["Vitamin supplement", "Cancer therapy", "Aspirin", "Bandages"], "correct": 1},
            "q4": {"text": "Lutetium is named after the ancient name of which city?", "opts": ["Rome", "Athens", "Paris", "London"], "correct": 2},
            "q5": {"text": "Which property makes Lutetium different from earlier lanthanides?", "opts": ["Liquid at room temp", "Gas at room temp", "Highest density and hardness", "Most radioactive"], "correct": 2}
        },
        "ru": {
            "title": "Лютеций",
            "desc": "Последний лантаноид, один из самых плотных и дорогих металлов, используемый в терапии рака.",
            "details": "<b>Основные факты</b><br>• Химический символ — Lu<br>• Атомный номер — 71<br>• Самый твердый, плотный и дорогой из редкоземельных металлов<br>• Завершающий элемент ряда лантаноидов<br>• Жизненно важен для таргетной терапии рака (Лютеций-177)<br>• Назван в честь «Лютеции» — латинского названия Парижа<br>• Открыт в 1907 году Жоржем Урбеном и другими<br><br><b>Атомная структура</b><br>• 71 протон в ядре<br>• 71 электрон (полностью заполненная оболочка 4f)<br>• Один стабильный природный изотоп (Лютеций-175)<br>• Электронная конфигурация — [Xe] 4f¹⁴ 5d¹ 6s²<br>• Расположен в 6-м периоде (лантаноиды)<br><br><b>Физические свойства</b><br>• Серебристо-белый блеск; очень твердый и плотный<br>• Температура кипения — 3402°C<br>• Температура плавления — 1663°C (высшая среди лантаноидов)<br>• Высокая коррозионная стойкость в сухом воздухе<br>• Высокая плотность (9.84 г/см³)<br>• Парамагнитен при комнатной температуре<br><br><b>Химические свойства</b><br>• Медленно реагирует с водой; растворяется в кислотах<br>• Самое стабильное состояние +3 среди лантаноидов<br>• По химическим свойствам похож на Иттрий<br>• Образует бесцветные соли и белый оксид (Lu₂O₃)<br>• Типичная степень окисления — +3<br><br><b>Применение</b><br>• Медицина: Лютеций-177 для таргетной лучевой терапии рака простаты<br>• Промышленность: катализаторы для крекинга нефти<br>• Наука: определение возраста метеоритов (лютеций-гафниевый метод)<br>• Технологии: сцинтилляторы для ПЭТ-сканеров (томография)<br>• Освещение: специализированные газоразрядные лампы",
            "fact": "Лютеций настолько трудно отделить от других редких земель, что он является одним из самых дорогих металлов на Земле.",
            "simple": "Лютеций — это элемент №71, невероятно редкий и дорогой металл, используемый для борьбы с раком.",
            "detailed": "Лютеций — последний лантаноид. Его важнейшее современное применение — ядерная медицина, где радиоактивная форма используется для уничтожения раковых клеток.",
            "study": ["Атомный номер: 71", "Символ: Lu", "Группа: Лантаноиды", "Масса: 174.97", "Применение: Терапия рака"],
            "q1": {"text": "Какой атомный номер у лютеция?", "opts": ["70", "71", "72", "73"], "correct": 1},
            "q2": {"text": "Какой химический символ у лютеция?", "opts": ["L", "Lt", "Lu", "Le"], "correct": 2},
            "q3": {"text": "Какое самое важное применение лютеция в современной медицине?", "opts": ["Витамины", "Терапия рака", "Аспирин", "Бинты"], "correct": 1},
            "q4": {"text": "Лютеций назван в честь древнего названия какого города?", "opts": ["Рим", "Афины", "Париж", "Лондон"], "correct": 2},
            "q5": {"text": "Какое свойство отличает лютеций от других лантаноидов?", "opts": ["Жидкий при комн. темп.", "Газ при комн. темп.", "Высшая плотность и твердость", "Самый радиоактивный"], "correct": 2}
        },
        "kk": {
            "title": "Лютеций",
            "desc": "Рак терапиясында қолданылатын соңғы лантаноид, ең тығыз және ең қымбат сирек жер металдарының бірі.",
            "details": "<b>Негізгі фактілер</b><br>• Химиялық таңбасы — Lu<br>• Атомдық нөмірі — 71<br>• Сирек жер металдарының ішіндегі ең қатты, ең тығыз және ең қымбаты<br>• Лантаноидтар қатарының соңғы элементі<br>• Рактың таргетті терапиясы (Лютеций-177) үшін өте маңызды<br>• Париждің латынша атауы «Лютеция» құрметіне аталған<br>• 1907 жылы Жорж Урбэн және басқалар ашқан<br><br><b>Атомдық құрылымы</b><br>• Ядрода 71 протон бар<br>• 71 электрон (толығымен толтырылған 4f қабығы)<br>• Бір тұрақты табиғи изотоп (Лютеций-175)<br>• Электрондық конфигурациясы — [Xe] 4f¹⁴ 5d¹ 6s²<br>• 6-шы кезеңде орналасқан (лантаноидтар)<br><br><b>Физикалық қасиеттері</b><br>• Күміс-ақ жылтыр; өте қатты және тығыз<br>• Қайнау температурасы — 3402°C<br>• Балқу температурасы — 1663°C (лантаноидтар арасындағы ең жоғары)<br>• Құрғақ ауада коррозияға жоғары төзімділік<br>• Жоғары тығыздық (9.84 г/см³)<br>• Бөлме температурасында парамагнитті<br><br><b>Химиялық қасиеттері</b><br>• Сумен баяу әрекеттеседі; қышқылдарда ериді<br>• Лантаноидтар арасындағы ең тұрақты +3 тотығу күйі<br>• Химиялық қасиеттері бойынша Иттрийге ұқсас<br>• Түссіз тұздар мен ақ оксид (Lu₂O₃) түзеді<br>• Тән тотығу дәрежесі — +3<br><br><b>Қолданылуы</b><br>• Медицина: простата рагын таргетті сәулелік емдеуге арналған Лютеций-177<br>• Өнеркәсіп: мұнай крекингіне арналған катализаторлар<br>• Ғылым: метеориттердің жасын анықтау (лютеций-гафний әдісі)<br>• Технология: ПЭТ-сканерлерге (томография) арналған сцинтилляторлар<br>• Жарықтандыру: мамандандырылған жоғары қарқынды газразрядты шамдар",
            "fact": "Лютецийді басқа сирек жерлерден бөліп алу соншалықты қиын, ол Жердегі ең қымбат металдардың бірі болып табылады.",
            "simple": "Лютеций — №71 элемент, ракпен күресу үшін қолданылатын өте сирек және қымбат металл.",
            "detailed": "Лютеций — соңғы лантаноид. Оның қазіргі заманғы ең маңызды қолданылуы — ядролық медицина, мұнда радиоактивті түрі рак жасушаларын жою үшін қолданылады.",
            "study": ["Атомдық нөмір: 71", "Таңбасы: Lu", "Тобы: Лантаноидтар", "Массасы: 174.97", "Қолданылуы: Рак терапиясы"],
            "q1": {"text": "Лютецийдің атомдық нөмірі қандай?", "opts": ["70", "71", "72", "73"], "correct": 1},
            "q2": {"text": "Лютецийдің химиялық таңбасы қандай?", "opts": ["L", "Lt", "Lu", "Le"], "correct": 2},
            "q3": {"text": "Лютецийдің қазіргі медицинадағы ең маңызды қолданылуы қандай?", "opts": ["Витаминдік қоспа", "Рак терапиясы", "Аспирин", "Таңғыштар"], "correct": 1},
            "q4": {"text": "Лютеций қай қаланың ежелгі атауының құрметіне аталған?", "opts": ["Рим", "Афины", "Париж", "Лондон"], "correct": 2},
            "q5": {"text": "Қай қасиет лютецийді алдыңғы лантаноидтардан ерекшелейді?", "opts": ["Бөлме темп. сұйық", "Бөлме темп. газ", "Ең жоғары тығыздық пен қаттылық", "Ең радиоактивті"], "correct": 2}
        }
    }
};

// 1. Update Locales
for (const lang of ['en', 'ru', 'kk']) {
    const filename = lang === 'en' ? 'en_v2.json' : lang === 'ru' ? 'ru_v2.json' : 'kk_v2.json';
    const filePath = path.join(localesDir, filename);
    if (!fs.existsSync(filePath)) continue;

    let content = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    for (const [id, langs] of Object.entries(data62_71)) {
        const d = langs[lang];
        content[`system.${id}.title`] = d.title;
        content[`system.${id}.desc`] = d.desc;
        content[`system.${id}.details`] = d.details;
        content[`system.${id}.fact`] = d.fact;
        content[`resource.wiki.${id}`] = lang === 'ru' ? `Википедия — ${d.title}` : lang === 'kk' ? `Википедия — ${d.title}` : `Wikipedia: ${d.title}`;
        content[`resource.pubchem.${id}`] = `PubChem - ${d.title}`;
        content[`ai.${id}.simple`] = d.simple;
        content[`ai.${id}.detailed`] = d.detailed;
        
        d.study.forEach((s, i) => {
            content[`ai.${id}.study.${i + 1}`] = s;
        });

        d.q1 && (content[`ai.${id}.q1.text`] = d.q1.text, d.q1.opts.forEach((o, i) => content[`ai.${id}.q1.opt.${i + 1}`] = o));
        d.q2 && (content[`ai.${id}.q2.text`] = d.q2.text, d.q2.opts.forEach((o, i) => content[`ai.${id}.q2.opt.${i + 1}`] = o));
        d.q3 && (content[`ai.${id}.q3.text`] = d.q3.text, d.q3.opts.forEach((o, i) => content[`ai.${id}.q3.opt.${i + 1}`] = o));
        d.q4 && (content[`ai.${id}.q4.text`] = d.q4.text, d.q4.opts.forEach((o, i) => content[`ai.${id}.q4.opt.${i + 1}`] = o));
        d.q5 && (content[`ai.${id}.q5.text`] = d.q5.text, d.q5.opts.forEach((o, i) => content[`ai.${id}.q5.opt.${i + 1}`] = o));
    }

    fs.writeFileSync(filePath, JSON.stringify(content, null, 4), 'utf8');
    console.log(`Updated ${filename}`);
}

// 2. Update anatomy-data.js
let anatomyContent = fs.readFileSync(anatomyDataFile, 'utf8');

const elementsToAdd = Object.entries(data62_71).map(([id, langs]) => {
    const atomicNumber = {
        samarium: 62, europium: 63, gadolinium: 64, terbium: 65,
        dysprosium: 66, holmium: 67, erbium: 68, thulium: 69,
        ytterbium: 70, lutetium: 71
    }[id];
    
    const symbol = {
        samarium: 'Sm', europium: 'Eu', gadolinium: 'Gd', terbium: 'Tb',
        dysprosium: 'Dy', holmium: 'Ho', erbium: 'Er', thulium: 'Tm',
        ytterbium: 'Yb', lutetium: 'Lu'
    }[id];

    return `    {
        id: '${id}',
        atomicNumber: ${atomicNumber},
        symbol: '${symbol}',
        group: 'Lanthanide',
        groupKey: 'lanthanide',
        titleKey: 'system.${id}.title',
        descKey: 'system.${id}.desc',
        detailsKey: 'system.${id}.details',
        factKey: 'system.${id}.fact',
        model: null,
        image: 'assets/images/${id}_atom_lux.png',
        color: '#E2E8F0',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: ${langs.en.title}', textKey: 'resource.wiki.${id}', url: 'https://en.wikipedia.org/wiki/${langs.en.title}' },
            { text: 'PubChem: ${langs.en.title}', textKey: 'resource.pubchem.${id}', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/${langs.en.title}' }
        ],
        ai: {
            simpleKey: 'ai.${id}.simple',
            detailedKey: 'ai.${id}.detailed',
            studyKey: ['ai.${id}.study.1', 'ai.${id}.study.2', 'ai.${id}.study.3', 'ai.${id}.study.4', 'ai.${id}.study.5'],
            questions: [
                { textKey: 'ai.${id}.q1.text', options: ['ai.${id}.q1.opt.1', 'ai.${id}.q1.opt.2', 'ai.${id}.q1.opt.3', 'ai.${id}.q1.opt.4'], correctIndex: 1, topic: 'atomic_number' },
                { textKey: 'ai.${id}.q2.text', options: ['ai.${id}.q2.opt.1', 'ai.${id}.q2.opt.2', 'ai.${id}.q2.opt.3', 'ai.${id}.q2.opt.4'], correctIndex: 2, topic: 'symbol' },
                { textKey: 'ai.${id}.q3.text', options: ['ai.${id}.q3.opt.1', 'ai.${id}.q3.opt.2', 'ai.${id}.q3.opt.3', 'ai.${id}.q3.opt.4'], correctIndex: 2, topic: 'properties' },
                { textKey: 'ai.${id}.q4.text', options: ['ai.${id}.q4.opt.1', 'ai.${id}.q4.opt.2', 'ai.${id}.q4.opt.3', 'ai.${id}.q4.opt.4'], correctIndex: 1, topic: 'applications' },
                { textKey: 'ai.${id}.q5.text', options: ['ai.${id}.q5.opt.1', 'ai.${id}.q5.opt.2', 'ai.${id}.q5.opt.3', 'ai.${id}.q5.opt.4'], correctIndex: 2, topic: 'fact' }
            ]
        }
    }`;
}).join(',\n');

// Find the position of the last element in anatomyData array (before window.anatomyData.forEach)
const insertIndex = anatomyContent.lastIndexOf('    }');
const finalInsertIndex = anatomyContent.indexOf('];', insertIndex);

if (finalInsertIndex !== -1) {
    const updatedAnatomy = anatomyContent.slice(0, finalInsertIndex) + ',\n' + elementsToAdd + '\n' + anatomyContent.slice(finalInsertIndex);
    fs.writeFileSync(anatomyDataFile, updatedAnatomy, 'utf8');
    console.log(`Updated anatomy-data.js`);
} else {
    console.error("Could not find insertion point in anatomy-data.js");
}
