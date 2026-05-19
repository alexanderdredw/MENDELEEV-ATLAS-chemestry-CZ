const fs = require('fs');

const data = {
    sodium: {
        en: `<b>Basic Facts</b><br>
• Chemical Symbol — Na<br>
• Atomic Number — 11<br>
• An alkali metal from the 1st group<br>
• Highly reactive, soft, silvery-white metal<br>
• Essential for life and widely used in industry<br>
• Quickly oxidizes when exposed to air<br>
• Must be stored under mineral oil to prevent reaction<br><br>

<b>Atomic Structure</b><br>
• 11 protons in the nucleus<br>
• 11 electrons around the nucleus<br>
• Most common stable isotope has 12 neutrons (Sodium-23)<br>
• Electron configuration — [Ne] 3s¹ (one valence electron)<br>
• Located in the 3rd period and 1st group of the periodic table<br><br>

<b>Physical Properties</b><br>
• Low density (floats on water)<br>
• Boiling point — 883°C<br>
• Melting point — 97.8°C<br>
• Soft enough to be cut with a knife<br>
• Metallic element with high thermal and electrical conductivity<br>
• Silvery luster when freshly cut<br>
• Excellent heat conductor in liquid form<br><br>

<b>Chemical Properties</b><br>
• Reacts violently with water → forms sodium hydroxide and hydrogen<br>
• Produces a characteristic bright yellow flame during a flame test<br>
• Forms ionic bonds with non-metals (e.g., NaCl)<br>
• Highly electropositive and a strong reducing agent<br>
• Rapidly forms an oxide layer in contact with moisture<br>
• Common oxidation state — +1<br><br>

<b>Sodium Isotopes</b><br>
• Sodium-23 (²³Na) — the only stable natural isotope<br>
• Sodium-22 (²²Na) — radioactive isotope used in medicine (PET)<br>
• Sodium-24 (²⁴Na) — used as a tracer in industrial pipelines<br>
• Artificial isotopes are used in nuclear and medical research<br><br>

<b>Occurrence in Nature</b><br>
• Found in seawater as dissolved ions (Na⁺)<br>
• Present in mineral deposits as Halite (table salt)<br>
• Found in silicate minerals like feldspar<br>
• Part of the Earth's crust (6th most abundant element)<br>
• Never exists in free elemental form in nature due to high reactivity<br><br>

<b>Industrial Production</b><br>
• Electrolysis of molten sodium chloride (Downs process)<br>
• Obtained from underground salt mines or salt flats<br>
• Produced as a byproduct in some chemical processes<br>
• Energy-intensive process requiring high-temperature molten salts<br><br>

<b>Applications of Sodium</b><br>
• Production of table salt (NaCl) and baking soda<br>
• Sodium-vapor lamps for energy-efficient street lighting<br>
• Coolant in fast breeder nuclear reactors<br>
• Synthesis of chemical compounds and pharmaceuticals<br>
• Desiccant in organic chemistry for drying solvents<br>
• Key component in sodium-ion batteries<br><br>

<b>Significance in Science and Biology</b><br>
• Primary cation in extracellular fluid for humans<br>
• Essential for nerve impulse transmission and muscle contraction<br>
• Regulates osmotic pressure and water balance in cells<br>
• Fundamental in salt chemistry and ionic bonding studies<br>
• Critical for the food industry as a preservative and seasoning<br><br>

<b>Interaction with Other Fields</b><br>
• Chemistry — basic element in inorganic synthesis<br>
• Biology — critical electrolyte for life<br>
• Medicine — saline solutions and diagnostic tracers<br>
• Energy — nuclear coolants and battery technology<br>
• Industry — production of glass, paper, and soap`,

        ru: `<b>Основные факты</b><br>
• Химический символ — Na<br>
• Атомный номер — 11<br>
• Щелочной металл из 1-й группы<br>
• Высокореактивный, мягкий серебристо-белый металл<br>
• Необходим для жизни и широко используется в промышленности<br>
• Быстро окисляется на воздухе<br>
• Должен храниться под слоем минерального масла для предотвращения реакций<br><br>

<b>Атомная структура</b><br>
• 11 протонов в ядре<br>
• 11 электронов вокруг ядра<br>
• Самый распространенный стабильный изотоп имеет 12 нейтронов (Натрий-23)<br>
• Электронная конфигурация — [Ne] 3s¹ (один валентный электрон)<br>
• Расположен в 3-м периоде и 1-й группе периодической таблицы<br><br>

<b>Физические свойства</b><br>
• Низкая плотность (плавает на воде)<br>
• Температура кипения — 883°C<br>
• Температура плавления — 97.8°C<br>
• Достаточно мягкий, чтобы его можно было резать ножом<br>
• Металлический элемент с высокой тепло- и электропроводностью<br>
• Серебристый блеск на свежем срезе<br>
• Отличный теплоноситель в жидком виде<br><br>

<b>Химические свойства</b><br>
• Бурно реагирует с водой → образует гидроксид натрия и водород<br>
• Дает характерное ярко-желтое пламя при горении<br>
• Образует ионные связи с неметаллами (например, NaCl)<br>
• Сильно электроположительный и мощный восстановитель<br>
• Быстро образует оксидный слой при контакте с влагой<br>
• Типичная степень окисления — +1<br><br>

<b>Изотопы натрия</b><br>
• Натрий-23 (²³Na) — единственный стабильный природный изотоп<br>
• Натрий-22 (²²Na) — радиоактивный изотоп, используется в медицине (ПЭТ)<br>
• Натрий-24 (²⁴Na) — используется в качестве индикатора в промышленных трубопроводах<br>
• Искусственные изотопы применяются в ядерных и медицинских исследованиях<br><br>

<b>Нахождение в природе</b><br>
• Содержится в морской воде в виде растворенных ионов (Na⁺)<br>
• Присутствует в минеральных месторождениях в виде галита (поваренной соли)<br>
• Входит в состав силикатных минералов, таких как полевой шпат<br>
• Составляет значительную часть земной коры (6-й по распространенности элемент)<br>
• Никогда не встречается в природе в свободном виде из-за высокой активности<br><br>

<b>Промышленное производство</b><br>
• Электролиз расплава хлорида натрия (процесс Даунса)<br>
• Добыча из подземных соляных шахт или солончаков<br>
• Получается как побочный продукт в некоторых химических процессах<br>
• Энергоемкий процесс, требующий высоких температур расплавленных солей<br><br>

<b>Применение натрия</b><br>
• Производство поваренной соли (NaCl) и пищевой соды<br>
• Натриевые газоразрядные лампы для энергоэффективного уличного освещения<br>
• Теплоноситель в ядерных реакторах на быстрых нейтронах<br>
• Синтез химических соединений и фармацевтических препаратов<br>
• Осушитель в органической химии для удаления влаги из растворителей<br>
• Ключевой компонент натрий-ионных аккумуляторов<br><br>

<b>Значение в науке и биологии</b><br>
• Главный катион внеклеточной жидкости в организме человека<br>
• Необходим для передачи нервных импульсов и мышечного сокращения<br>
• Регулирует осмотическое давление и водный баланс в клетках<br>
• Фундаментальный элемент в изучении химии солей и ионной связи<br>
• Критически важен для пищевой промышленности как консервант и приправа<br><br>

<b>Взаимодействие с другими областями</b><br>
• Химия — базовый элемент в неорганическом синтезе<br>
• Биология — критически важный электролит для жизни<br>
• Медицина — физиологические растворы и диагностика<br>
• Энергетика — ядерные теплоносители и аккумуляторные технологии<br>
• Промышленность — производство стекла, бумаги и мыла`,

        kk: `<b>Негізгі фактілер</b><br>
• Химиялық таңбасы — Na<br>
• Атомдық нөмірі — 11<br>
• 1-ші топтың сілтілік металы<br>
• Жоғары реактивті, жұмсақ, күміс түсті ақ металл<br>
• Тіршілік үшін маңызды және өнеркәсіпте кеңінен қолданылады<br>
• Ауамен жанасқанда тез тотығады<br>
• Реакцияларды болдырмау үшін минералды май астында сақталуы керек<br><br>

<b>Атомдық құрылымы</b><br>
• Ядрода 11 протон<br>
• Ядро айналасында 11 электрон<br>
• Ең көп таралған тұрақты изотоптың 12 нейтроны бар (Натрий-23)<br>
• Электрондық конфигурациясы — [Ne] 3s¹ (бір валенттік электрон)<br>
• Периодтық кестенің 3-периодында және 1-тобында орналасқан<br><br>

<b>Физикалық қасиеттері</b><br>
• Төмен тығыздық (су бетінде қалқиды)<br>
• Қайнау температурасы — 883°C<br>
• Балқу температурасы — 97.8°C<br>
• Пышақпен кесуге болатындай жұмсақ<br>
• Жоғары жылу және электр өткізгіштігі бар металл элемент<br>
• Жаңа кесілген жерінде күміс түсті жылтыры болады<br>
• Сұйық күйдегі тамаша жылу тасымалдағыш<br><br>

<b>Химиялық қасиеттері</b><br>
• Сумен қатты әрекеттеседі → натрий гидроксиді мен сутегін түзеді<br>
• Жалын сынағы кезінде өзіне тән ашық сары жалын береді<br>
• Бейметалдармен иондық байланыстар түзеді (мысалы, NaCl)<br>
• Жоғары электрлі оң және күшті тотықсыздандырғыш<br>
• Ылғалмен жанасқанда тез оксид қабатын түзеді<br>
• Типтік тотығу дәрежесі — +1<br><br>

<b>Натрий изотоптары</b><br>
• Натрий-23 (²³Na) — жалғыз тұрақты табиғи изотоп<br>
• Натрий-22 (²²Na) — медицинада қолданылатын радиоактивті изотоп (ПЭТ)<br>
• Натрий-24 (²⁴Na) — өнеркәсіптік құбырларда индикатор ретінде қолданылады<br>
• Жасанды изотоптар ядролық және медициналық зерттеулерде қолданылады<br><br>

<b>Табиғатта кездесуі</b><br>
• Теңіз суында еріген иондар (Na⁺) түрінде кездеседі<br>
• Минералды кен орындарында галит (ас тұзы) түрінде болады<br>
• Дала шпаттары сияқты силикатты минералдардың құрамына кіреді<br>
• Жер қыртысының бір бөлігі (таралуы бойынша 6-шы элемент)<br>
• Жоғары белсенділігіне байланысты табиғатта бос күйінде кездеспейді<br><br>

<b>Өнеркәсіптік өндіріс</b><br>
• Балқытылған натрий хлоридінің электролизі (Даунс процесі)<br>
• Жер асты тұз кеніштерінен немесе сорлардан өндіріледі<br>
• Кейбір химиялық процестерде қосымша өнім ретінде алынады<br>
• Балқытылған тұздардың жоғары температурасын қажет ететін энергияны көп қажет ететін процесс<br><br>

<b>Натрийдің қолданылуы</b><br>
• Ас тұзы (NaCl) және ас содасын өндіру<br>
• Көшелерді энергия тиімді жарықтандыруға арналған натрийлі шамдар<br>
• Жылдам нейтронды ядролық реакторлардағы жылу тасымалдағыш<br>
• Химиялық қосылыстар мен фармацевтикалық препараттарды синтездеу<br>
• Еріткіштерді кептіруге арналған органикалық химиядағы десикант<br>
• Натрий-ионды аккумуляторлардың негізгі компоненті<br><br>

<b>Ғылым мен биологиядағы маңызы</b><br>
• Адам ағзасындағы жасушадан тыс сұйықтықтың негізгі катионы<br>
• Жүйке импульстерінің берілуі мен бұлшықет жиырылуы үшін қажет<br>
• Жасушалардағы осмостық қысым мен су теңгерімін реттейді<br>
• Тұздар химиясын және иондық байланысты зерттеуде іргелі элемент<br>
• Тамақ өнеркәсібі үшін консервант және дәмдеуіш ретінде өте маңызды<br><br>

<b>Басқа салалармен өзара әрекеттесуі</b><br>
• Химия — бейорганикалық синтездегі негізгі элемент<br>
• Биология — тіршілік үшін маңызды электролит<br>
• Медицина — физиологиялық ерітінділер және диагностика<br>
• Энергетика — ядролық жылу тасымалдағыштар және аккумуляторлық технологиялар<br>
• Өнеркәсіп — шыны, қағаз және сабын өндірісі`
    },
    magnesium: {
        en: `<b>Basic Facts</b><br>
• Chemical Symbol — Mg<br>
• Atomic Number — 12<br>
• An alkaline earth metal from the 2nd group<br>
• Lightweight, strong, silvery-gray metal<br>
• Essential mineral for plants and the human body<br>
• Burns with a brilliant, dazzling white light<br>
• 8th most abundant element in the Earth's crust<br><br>

<b>Atomic Structure</b><br>
• 12 protons in the nucleus<br>
• 12 electrons around the nucleus<br>
• Most common stable isotope has 12 neutrons (Magnesium-24)<br>
• Electron configuration — [Ne] 3s² (two valence electrons)<br>
• Located in the 3rd period and 2nd group of the periodic table<br><br>

<b>Physical Properties</b><br>
• Low density (1/3 lighter than aluminum)<br>
• Boiling point — 1090°C<br>
• Melting point — 650°C<br>
• High strength-to-weight ratio<br>
• Metallic luster that tarnishes slightly in air<br>
• Good thermal and electrical conductivity<br>
• Brittle at room temperature, but ductile when heated<br><br>

<b>Chemical Properties</b><br>
• Reacts with water slowly at room temperature, rapidly when boiling<br>
• Highly flammable when in thin strips or powder form<br>
• Reacts with acids to release hydrogen gas<br>
• Forms a protective oxide layer that prevents further corrosion<br>
• Strong reducing agent used in metal extraction<br>
• Common oxidation state — +2<br><br>

<b>Magnesium Isotopes</b><br>
• Magnesium-24 (²⁴Mg) — most common stable isotope (79%)<br>
• Magnesium-25 (²⁵Mg) — stable isotope (10%)<br>
• Magnesium-26 (²⁶Mg) — stable isotope (11%)<br>
• Used in scientific research for tracing metabolic pathways<br><br>

<b>Occurrence in Nature</b><br>
• Found in minerals such as Magnesite and Dolomite<br>
• Abundant in seawater as dissolved magnesium salts<br>
• Present in the Earth's crust as a component of many rocks<br>
• Central atom in the chlorophyll molecule of plants<br>
• Never found free in nature due to high reactivity<br><br>

<b>Industrial Production</b><br>
• Electrolysis of molten magnesium chloride from seawater<br>
• Pidgeon process (thermal reduction of magnesium oxide)<br>
• Extraction from brine or magnesium-rich minerals<br>
• Purified through specialized smelting and distillation<br><br>

<b>Applications of Magnesium</b><br>
• Aerospace and automotive alloys for weight reduction<br>
• Production of flares, fireworks, and incendiary devices<br>
• Lightweight cases for laptops, phones, and cameras<br>
• Medical uses: antacids, laxatives, and supplements<br>
• Desulfurization in iron and steel manufacturing<br>
• Sacrificial anodes to prevent corrosion in pipelines<br><br>

<b>Significance in Science and Biology</b><br>
• Essential for photosynthesis (central part of chlorophyll)<br>
• Involved in over 300 enzymatic reactions in the human body<br>
• Critical for bone health, muscle function, and DNA synthesis<br>
• Key element in the development of lightweight structural materials<br>
• Important for heart rhythm regulation and nerve signaling<br><br>

<b>Interaction with Other Fields</b><br>
• Chemistry — used as a reagent (Grignard reagents)<br>
• Biology — fundamental for plant and animal life<br>
• Medicine — widely used in nutritional supplements<br>
• Aerospace — critical for building lightweight aircraft<br>
• Engineering — development of high-performance alloys`,

        ru: `<b>Основные факты</b><br>
• Химический символ — Mg<br>
• Атомный номер — 12<br>
• Щелочноземельный металл из 2-й группы<br>
• Легкий, прочный серебристо-серый металл<br>
• Жизненно важный минерал для растений и организма человека<br>
• Горит ослепительно белым пламенем<br>
• 8-й по распространенности элемент в земной коре<br><br>

<b>Атомная структура</b><br>
• 12 протонов в ядре<br>
• 12 электронов вокруг ядра<br>
• Самый распространенный стабильный изотоп имеет 12 нейтронов (Магний-24)<br>
• Электронная конфигурация — [Ne] 3s² (два валентных электрона)<br>
• Расположен в 3-м периоде и 2-й группе периодической таблицы<br><br>

<b>Физические свойства</b><br>
• Низкая плотность (на 1/3 легче алюминия)<br>
• Температура кипения — 1090°C<br>
• Температура плавления — 650°C<br>
• Высокое соотношение прочности к весу<br>
• Металлический блеск, который слегка тускнеет на воздухе<br>
• Хорошая тепло- и электропроводность<br>
• Хрупок при комнатной температуре, но пластичен при нагревании<br><br>

<b>Химические свойства</b><br>
• Медленно реагирует с водой при комнатной температуре, быстро — при кипении<br>
• Легко воспламеняется в виде тонких лент или порошка<br>
• Реагирует с кислотами с выделением водорода<br>
• Образует защитный оксидный слой, предотвращающий дальнейшую коррозию<br>
• Сильный восстановитель, используемый при получении металлов<br>
• Типичная степень окисления — +2<br><br>

<b>Изотопы магния</b><br>
• Магний-24 (²⁴Mg) — самый распространенный стабильный изотоп (79%)<br>
• Магний-25 (²⁵Mg) — стабильный изотоп (10%)<br>
• Магний-26 (²⁶Mg) — стабильный изотоп (11%)<br>
• Используется в научных исследованиях для изучения метаболических путей<br><br>

<b>Нахождение в природе</b><br>
• Встречается в таких минералах, как магнезит и доломит<br>
• Содержится в морской воде в виде растворенных солей магния<br>
• Присутствует в земной коре как компонент многих горных пород<br>
• Центральный атом в молекуле хлорофилла растений<br>
• Никогда не встречается в свободном виде из-за высокой активности<br><br>

<b>Промышленное производство</b><br>
• Электролиз расплава хлорида магния из морской воды<br>
• Процесс Пиджина (термическое восстановление оксида магния)<br>
• Экстракция из рассолов или богатых магнием минералов<br>
• Очистка с помощью специализированной плавки и дистилляции<br><br>

<b>Применение магния</b><br>
• Аэрокосмические и автомобильные сплавы для снижения веса<br>
• Производство сигнальных ракет, фейерверков и зажигательных устройств<br>
• Легкие корпуса для ноутбуков, телефонов и фотоаппаратов<br>
• Медицинское применение: антациды, слабительные и добавки<br>
• Десульфурация в производстве чугуна и стали<br>
• Жертвенные аноды для предотвращения коррозии трубопроводов<br><br>

<b>Значение в науке и биологии</b><br>
• Необходим для фотосинтеза (центральная часть хлорофилла)<br>
• Участвует в более чем 300 ферментативных реакциях в организме человека<br>
• Критически важен для здоровья костей, работы мышц и синтеза ДНК<br>
• Ключевой элемент в разработке легких конструкционных материалов<br>
• Важен для регуляции сердечного ритма и передачи нервных сигналов<br><br>

<b>Взаимодействие с другими областями</b><br>
• Химия — используется в качестве реагента (реактивы Гриньяра)<br>
• Биология — фундаментальный элемент для жизни растений и животных<br>
• Медицина — широко используется в пищевых добавках<br>
• Аэрокосмическая отрасль — критически важен для легких конструкций самолетов<br>
• Инженерия — разработка высокопроизводительных сплавов`,

        kk: `<b>Негізгі фактілер</b><br>
• Химиялық таңбасы — Mg<br>
• Атомдық нөмірі — 12<br>
• 2-ші топтың сілтілік-жер металы<br>
• Жеңіл, берік, күміс-сұр түсті металл<br>
• Өсімдіктер мен адам ағзасы үшін маңызды минерал<br>
• Көз қарықтыратын ашық ақ жалынмен жанады<br>
• Жер қыртысында таралуы бойынша 8-ші элемент<br><br>

<b>Атомдық құрылымы</b><br>
• Ядрода 12 протон<br>
• Ядро айналасында 12 электрон<br>
• Ең көп таралған тұрақты изотоптың 12 нейтроны бар (Магний-24)<br>
• Электрондық конфигурациясы — [Ne] 3s² (екі валенттік электрон)<br>
• Периодтық кестенің 3-периодында және 2-тобында орналасқан<br><br>

<b>Физикалық қасиеттері</b><br>
• Төмен тығыздық (алюминийден 1/3 есе жеңіл)<br>
• Қайнау температурасы — 1090°C<br>
• Балқу температурасы — 650°C<br>
• Беріктік пен салмақтың жоғары қатынасы<br>
• Ауада аздап қараятын металдық жылтыр<br>
• Жақсы жылу және электр өткізгіштік<br>
• Бөлме температурасында морт, бірақ қыздырғанда созылғыш<br><br>

<b>Химиялық қасиеттері</b><br>
• Бөлме температурасында сумен баяу, қайнағанда тез әрекеттеседі<br>
• Жұқа таспалар немесе ұнтақ түрінде болғанда тез тұтанады<br>
• Қышқылдармен әрекеттесіп сутегі газын бөледі<br>
• Одан әрі коррозияны болдырмайтын қорғаныш оксид қабатын түзеді<br>
• Металдарды алуда қолданылатын күшті тотықсыздандырғыш<br>
• Типтік тотығу дәрежесі — +2<br><br>

<b>Магний изотоптары</b><br>
• Магний-24 (²⁴Mg) — ең көп таралған тұрақты изотоп (79%)<br>
• Магний-25 (²⁵Mg) — тұрақты изотоп (10%)<br>
• Магний-26 (²⁶Mg) — тұрақты изотоп (11%)<br>
• Метаболикалық жолдарды бақылау үшін ғылыми зерттеулерде қолданылады<br><br>

<b>Табиғатта кездесуі</b><br>
• Магнезит және доломит сияқты минералдарда кездеседі<br>
• Теңіз суында еріген магний тұздары түрінде көп болады<br>
• Жер қыртысында көптеген тау жыныстарының компоненті ретінде болады<br>
• Өсімдіктердің хлорофилл молекуласындағы орталық атом<br>
• Жоғары белсенділігіне байланысты табиғатта бос күйінде кездеспейді<br><br>

<b>Өнеркәсіптік өндіріс</b><br>
• Теңіз суынан балқытылған магний хлоридінің электролизі<br>
• Пиджин процесі (магний оксидін термиялық тотықсыздандыру)<br>
• Тұзды сулардан немесе магнийге бай минералдардан өндіру<br>
• Мамандандырылған балқыту және дистилляция арқылы тазартылады<br><br>

<b>Магнийдің қолданылуы</b><br>
• Салмақты азайту үшін аэроғарыштық және автомобильдік қорытпалар<br>
• Сигналдық ракеталар, фейерверктер және өртегіш құрылғылар өндірісі<br>
• Ноутбуктер, телефондар және камераларға арналған жеңіл корпустар<br>
• Медициналық қолдану: антацидтер, іш жүргізетін дәрілер және қоспалар<br>
• Шойын мен болат өндірісіндегі десульфуризация<br>
• Құбырлардағы коррозияны болдырмау үшін протекторлық анодтар<br><br>

<b>Ғылым мен биологиядағы маңызы</b><br>
• Фотосинтез үшін өте маңызды (хлорофилдің орталық бөлігі)<br>
• Адам ағзасындағы 300-ден астам ферментативті реакцияларға қатысады<br>
• Сүйек денсаулығы, бұлшықет жұмысы және ДНҚ синтезі үшін өте маңызды<br>
• Жеңіл құрылымдық материалдарды жасаудағы негізгі элемент<br>
• Жүрек ырғағын реттеу және жүйке сигналын беру үшін маңызды<br><br>

<b>Басқа салалармен өзара әрекеттесуі</b><br>
• Химия — реагент ретінде қолданылады (Гриньяр реактивтері)<br>
• Биология — өсімдіктер мен жануарлар тіршілігі үшін іргелі элемент<br>
• Медицина — тағамдық қоспаларда кеңінен қолданылады<br>
• Аэроғарыш — жеңіл ұшақтарды құрастыру үшін өте маңызды<br>
• Инженерия — жоғары өнімді қорытпаларды әзірлеу`
    }
};

const locales = ['en', 'ru', 'kk'];

for (const lang of locales) {
    const path = `locales/${lang}_v2.json`;
    if (!fs.existsSync(path)) continue;
    
    const locale = JSON.parse(fs.readFileSync(path, 'utf8'));
    
    // Sodium
    locale['system.sodium.details'] = data.sodium[lang];
    locale['system.muscular.details'] = data.sodium[lang]; // Sync legacy
    
    // Magnesium
    locale['system.magnesium.details'] = data.magnesium[lang];
    locale['system.nervous.details'] = data.magnesium[lang]; // Sync legacy
    
    fs.writeFileSync(path, JSON.stringify(locale, null, 4));
    console.log(`✓ Restructured Sodium & Magnesium for ${lang.toUpperCase()}`);
}
