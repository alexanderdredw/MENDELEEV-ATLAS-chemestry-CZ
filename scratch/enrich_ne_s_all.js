const fs = require('fs');

const elementsData = {
    neon: {
        symbol: "Ne", num: 10, mass: 20.18, group: "Noble Gases",
        ru: {
            title: "Неон",
            desc: "Благородный газ, известный своим ярким красно-оранжевым свечением в газоразрядных лампах.",
            details: "<b>Основные факты</b><br>• Символ: Ne • Атомный номер: 10 • Атомная масса: 20.18<br>• Благородный газ, самый инертный после гелия<br><br><b>Атомная структура</b><br>• 10 протонов, 10 нейтронов<br>• Конфигурация: [He] 2s² 2p⁶ (полная оболочка)<br><br><b>Физические свойства</b><br>• Бесцветный газ без запаха<br>• Светится ярко-оранжевым цветом при электрическом разряде<br>• Охлаждающая способность жидкого неона в 3 раза выше, чем у жидкого водорода<br><br><b>Химические свойства</b><br>• Химически инертен, не образует стабильных соединений<br><br><b>Применение</b><br>• Неоновые вывески и индикаторные лампы<br>• Криогеника (хладагент)<br>• Газовые лазеры (гелий-неоновые)<br>• Защита высоковольтного оборудования"
        },
        en: {
            title: "Neon",
            desc: "A noble gas best known for its bright reddish-orange glow in discharge lamps.",
            details: "<b>Basic Facts</b><br>• Symbol: Ne • Atomic Number: 10 • Atomic Mass: 20.18<br>• Noble gas, the most inert after helium<br><br><b>Atomic Structure</b><br>• 10 protons, 10 neutrons<br>• Configuration: [He] 2s² 2p⁶ (full shell)<br><br><b>Physical Properties</b><br>• Colorless, odorless gas<br>• Glows bright reddish-orange in an electric discharge<br>• Refrigerating capacity is 3 times higher than liquid hydrogen<br><br><b>Chemical Properties</b><br>• Chemically inert, forms no stable compounds<br><br><b>Applications</b><br>• Neon signs and indicator lamps<br>• Cryogenics (refrigerant)<br>• Gas lasers (He-Ne lasers)<br>• High-voltage equipment protection"
        },
        kk: {
            title: "Неон",
            desc: "Газды разрядты шамдардағы ашық қызыл-қызғылт сары жарқылымен танымал инертті газ.",
            details: "<b>Негізгі фактілер</b><br>• Таңбасы: Ne • Атомдық нөмірі: 10 • Атомдық массасы: 20.18<br>• Инертті газ, гелийден кейінгі ең инертті элемент<br><br><b>Атомдық құрылымы</b><br>• 10 протон, 10 нейтрон<br>• Конфигурациясы: [He] 2s² 2p⁶ (толық қабықша)<br><br><b>Физикалық қасиеттері</b><br>• Түссіз, иіссіз газ<br>• Электрлік разряд кезінде ашық қызғылт сары түспен жарқырайды<br>• Сұйық неонның салқындату қабілеті сұйық сутегіне қарағанда 3 есе жоғары<br><br><b>Химиялық қасиеттері</b><br>• Химиялық инертті, тұрақты қосылыстар түзбейді<br><br><b>Қолданылуы</b><br>• Неонды жарнамалар және индикаторлық шамдар<br>• Криогеника (хладагент)<br>• Газды лазерлер (гелий-неонды)<br>• Жоғары вольтты жабдықтарды қорғау"
        }
    },
    sodium: {
        symbol: "Na", num: 11, mass: 22.99, group: "Alkali Metals",
        ru: {
            title: "Натрий",
            desc: "Мягкий, серебристый и крайне активный металл, ключевой элемент для жизни и промышленности.",
            details: "<b>Основные факты</b><br>• Символ: Na • Атомный номер: 11 • Атомная масса: 22.99<br>• Щелочной металл, быстро окисляется на воздухе<br><br><b>Атомная структура</b><br>• 11 протонов, 12 нейтронов<br>• Конфигурация: [Ne] 3s¹ (один валентный электрон)<br><br><b>Химические свойства</b><br>• Бурно реагирует с водой с выделением водорода и тепла<br>• Окрашивает пламя в ярко-желтый цвет<br><br><b>Биологическая роль</b><br>• Главный ион внеклеточной жидкости<br>• Регулирует водно-солевой баланс и передачу нервных импульсов<br><br><b>Применение</b><br>• Поваренная соль (NaCl)<br>• Натриевые лампы уличного освещения<br>• Теплоноситель в ядерных реакторах<br>• Производство стекла и моющих средств"
        },
        en: {
            title: "Sodium",
            desc: "A soft, silvery, and highly reactive metal, essential for life and industry.",
            details: "<b>Basic Facts</b><br>• Symbol: Na • Atomic Number: 11 • Atomic Mass: 22.99<br>• Alkali metal, oxidizes rapidly in air<br><br><b>Atomic Structure</b><br>• 11 protons, 12 neutrons<br>• Configuration: [Ne] 3s¹ (one valence electron)<br><br><b>Chemical Properties</b><br>• Reacts violently with water, releasing hydrogen and heat<br>• Colors flame bright yellow<br><br><b>Biological Role</b><br>• Main ion of extracellular fluid<br>• Regulates water-salt balance and nerve impulse transmission<br><br><b>Applications</b><br>• Table salt (NaCl)<br>• Sodium vapor street lamps<br>• Coolant in nuclear reactors<br>• Glass and detergent production"
        },
        kk: {
            title: "Натрий",
            desc: "Жұмсақ, күміс түсті және өте белсенді металл, тіршілік пен өнеркәсіп үшін негізгі элемент.",
            details: "<b>Негізгі фактілер</b><br>• Таңбасы: Na • Атомдық нөмірі: 11 • Атомдық массасы: 22.99<br>• Сілтілік металл, ауада тез тотығады<br><br><b>Атомдық құрылымы</b><br>• 11 протон, 12 нейтрон<br>• Конфигурациясы: [Ne] 3s¹ (бір валентті электрон)<br><br><b>Химиялық қасиеттері</b><br>• Сумен қатты әрекеттесіп, сутегі мен жылу бөледі<br>• Жалынды ашық сары түске бояйды<br><br><b>Биологиялық рөлі</b><br>• Жасушадан тыс сұйықтықтың негізгі ионы<br>• Су-тұз теңгерімін және жүйке импульстерінің берілуін реттейді<br><br><b>Қолданылуы</b><br>• Ас тұзы (NaCl)<br>• Көшелерді жарықтандыруға арналған натрий шамдары<br>• Ядролық реакторлардағы жылу тасымалдағыш<br>• Шыны және жуғыш заттар өндірісі"
        }
    },
    magnesium: {
        symbol: "Mg", num: 12, mass: 24.31, group: "Alkaline Earth Metals",
        ru: {
            title: "Магний",
            desc: "Легкий металл, необходимый для фотосинтеза растений и работы мышц человека.",
            details: "<b>Основные факты</b><br>• Символ: Mg • Атомный номер: 12 • Атомная масса: 24.31<br>• Щелочноземельный металл, горит ослепительно белым пламенем<br><br><b>Биологическая роль</b><br>• Центральный атом в молекуле хлорофилла (фотосинтез)<br>• Участвует в более чем 300 ферментативных реакциях в теле человека<br>• Необходим для работы сердца и прочности костей<br><br><b>Физические свойства</b><br>• Очень легкий металл (в 4 раза легче стали)<br>• Обладает высокой удельной прочностью<br><br><b>Применение</b><br>• Сплавы для авиации и автомобилестроения<br>• Пиротехника и фотовспышки<br>• Лекарственные препараты (антациды, успокоительные)"
        },
        en: {
            title: "Magnesium",
            desc: "A lightweight metal essential for plant photosynthesis and human muscle function.",
            details: "<b>Basic Facts</b><br>• Symbol: Mg • Atomic Number: 12 • Atomic Mass: 24.31<br>• Alkaline earth metal, burns with a dazzling white flame<br><br><b>Biological Role</b><br>• Central atom in the chlorophyll molecule (photosynthesis)<br>• Involved in over 300 enzymatic reactions in the human body<br>• Essential for heart function and bone strength<br><br><b>Physical Properties</b><br>• Very light metal (4 times lighter than steel)<br>• High specific strength<br><br><b>Applications</b><br>• Aerospace and automotive alloys<br>• Pyrotechnics and camera flashes<br>• Medical preparations (antacids, sedatives)"
        },
        kk: {
            title: "Магний",
            desc: "Өсімдіктердің фотосинтезі мен адам бұлшықеттерінің жұмысы үшін қажетті жеңіл металл.",
            details: "<b>Негізгі фактілер</b><br>• Таңбасы: Mg • Атомдық нөмірі: 12 • Атомдық массасы: 24.31<br>• Сілтілік-жер металл, көз қарықтыратын ақ жалынмен жанады<br><br><b>Биологиялық рөлі</b><br>• Хлорофилл молекуласындағы орталық атом (фотосинтез)<br>• Адам ағзасындағы 300-ден астам ферментативті реакцияларға қатысады<br>• Жүрек жұмысы мен сүйек беріктігі үшін қажет<br><br><b>Физикалық қасиеттері</b><br>• Өте жеңіл металл (болаттан 4 есе жеңіл)<br>• Жоғары меншікті беріктікке ие<br><br><b>Қолданылуы</b><br>• Авиация мен автомобиль жасауға арналған қорытпалар<br>• Пиротехника және фото-жарқылдар<br>• Дәрілік препараттар (антацидтер, тыныштандыратын дәрілер)"
        }
    },
    aluminum: {
        symbol: "Al", num: 13, mass: 26.98, group: "Post-transition Metals",
        ru: {
            title: "Алюминий",
            desc: "Самый распространенный металл в земной коре, легкий и устойчивый к коррозии.",
            details: "<b>Основные факты</b><br>• Символ: Al • Атомный номер: 13 • Атомная масса: 26.98<br>• Легкий металл серебристо-белого цвета<br><br><b>Физические свойства</b><br>• Высокая электропроводность и теплопроводность<br>• Легко поддается обработке (ковка, прокат)<br>• Образует на поверхности прочную защитную оксидную пленку<br><br><b>Применение</b><br>• Авиация и космонавтика («крылатый металл»)<br>• Пищевая упаковка (фольга, банки)<br>• Строительство (оконные рамы, панели)<br>• Линии электропередач<br><br><b>Интересный факт</b><br>• Когда-то алюминий был дороже золота, пока не изобрели дешевый способ его получения."
        },
        en: {
            title: "Aluminum",
            desc: "The most abundant metal in the Earth's crust, lightweight and corrosion-resistant.",
            details: "<b>Basic Facts</b><br>• Symbol: Al • Atomic Number: 13 • Atomic Mass: 26.98<br>• Lightweight silvery-white metal<br><br><b>Physical Properties</b><br>• High electrical and thermal conductivity<br>• Easily processed (forging, rolling)<br>• Forms a tough protective oxide layer on its surface<br><br><b>Applications</b><br>• Aviation and aerospace ('winged metal')<br>• Food packaging (foil, cans)<br>• Construction (window frames, panels)<br>• Power transmission lines<br><br><b>Interesting Fact</b><br>• Aluminum was once more expensive than gold until a cheap production method was invented."
        },
        kk: {
            title: "Алюминий",
            desc: "Жер қыртысындағы ең көп таралған металл, жеңіл және коррозияға төзімді.",
            details: "<b>Негізгі фактілер</b><br>• Таңбасы: Al • Атомдық нөмірі: 13 • Атомдық массасы: 26.98<br>• Күміс түсті ақ жеңіл металл<br><br><b>Физикалық қасиеттері</b><br>• Жоғары электр өткізгіштік және жылу өткізгіштік<br>• Өңдеуге оңай көнеді (соғу, жаймалау)<br>• Бетінде берік қорғаныш оксидті қабықша түзеді<br><br><b>Қолданылуы</b><br>• Авиация және космонавтика («қанатты металл»)<br>• Тамақ өнімдерін қаптау (фольга, банкілер)<br>• Құрылыс (терезе рамалары, панельдер)<br>• Электр беру желілері<br><br><b>Қызықты факт</b><br>• Бір кездері алюминийді алудың арзан әдісі табылғанға дейін ол алтыннан да қымбат болған."
        }
    },
    silicon: {
        symbol: "Si", num: 14, mass: 28.09, group: "Metalloids",
        ru: {
            title: "Кремний",
            desc: "Основа современной электроники и второй по распространенности элемент в земной коре.",
            details: "<b>Основные факты</b><br>• Символ: Si • Атомный номер: 14 • Атомная масса: 28.09<br>• Металлоид с характерным металлическим блеском<br><br><b>Свойства</b><br>• Полупроводник: его проводимость зависит от температуры и примесей<br>• Очень твердый, но хрупкий материал<br><br><b>Нахождение в природе</b><br>• В виде песка (SiO₂) и различных силикатов<br>• Составляет основу камней, глины и песка<br><br><b>Применение</b><br>• Микросхемы и процессоры (Кремниевая долина)<br>• Солнечные батареи<br>• Стекло и керамика<br>• Силиконы (полимеры на основе кремния)"
        },
        en: {
            title: "Silicon",
            desc: "The foundation of modern electronics and the second most abundant element in the Earth's crust.",
            details: "<b>Basic Facts</b><br>• Symbol: Si • Atomic Number: 14 • Atomic Mass: 28.09<br>• Metalloid with a characteristic metallic luster<br><br><b>Properties</b><br>• Semiconductor: its conductivity depends on temperature and impurities<br>• Very hard but brittle material<br><br><b>Occurrence in Nature</b><br>• In the form of sand (SiO₂) and various silicates<br>• Forms the basis of stones, clay, and sand<br><br><b>Applications</b><br>• Microchips and processors (Silicon Valley)<br>• Solar panels<br>• Glass and ceramics<br>• Silicones (silicon-based polymers)"
        },
        kk: {
            title: "Кремний",
            desc: "Қазіргі электрониканың негізі және жер қыртысындағы ең көп таралған екінші элемент.",
            details: "<b>Негізгі фактілер</b><br>• Таңбасы: Si • Атомдық нөмірі: 14 • Атомдық массасы: 28.09<br>• Металдық жылтыры бар металлоид<br><br><b>Қасиеттері</b><br>• Жартылай өткізгіш: оның өткізгіштігі температура мен қоспаларға байланысты<br>• Өте қатты, бірақ морт материал<br><br><b>Табиғатта кездесуі</b><br>• Құм (SiO₂) және әртүрлі силикаттар түрінде<br>• Тастардың, саздың және құмның негізін құрайды<br><br><b>Қолданылуы</b><br>• Микросхемалар мен процессорлар (Кремний алқабы)<br>• Күн батареялары<br>• Шыны және керамика<br>• Силикондар (кремний негізіндегі полимерлер)"
        }
    },
    phosphorus: {
        symbol: "P", num: 15, mass: 30.97, group: "Nonmetals",
        ru: {
            title: "Фосфор",
            desc: "Жизненно важный элемент, входящий в состав ДНК, костей и обеспечивающий перенос энергии в клетках.",
            details: "<b>Основные факты</b><br>• Символ: P • Атомный номер: 15 • Атомная масса: 30.97<br>• Неметалл, существует в нескольких формах (белый, красный, черный фосфор)<br><br><b>Биологическая роль</b><br>• Компонент ДНК и РНК<br>• АТФ — главная «энергетическая валюта» клетки<br>• Составляет основу костной ткани (гидроксиапатит кальция)<br><br><b>Химические свойства</b><br>• Белый фосфор самовоспламеняется на воздухе и светится в темноте<br>• Красный фосфор более стабилен и менее токсичен<br><br><b>Применение</b><br>• Минеральные удобрения (суперфосфат)<br>• Спички (красный фосфор на терке)<br>• Пищевые добавки и моющие средства"
        },
        en: {
            title: "Phosphorus",
            desc: "A vital element that is part of DNA, bones, and provides energy transfer in cells.",
            details: "<b>Basic Facts</b><br>• Symbol: P • Atomic Number: 15 • Atomic Mass: 30.97<br>• Nonmetal, exists in several forms (white, red, black phosphorus)<br><br><b>Biological Role</b><br>• Component of DNA and RNA<br>• ATP — the cell's primary 'energy currency'<br>• Forms the basis of bone tissue (calcium hydroxyapatite)<br><br><b>Chemical Properties</b><br>• White phosphorus spontaneously ignites in air and glows in the dark<br>• Red phosphorus is more stable and less toxic<br><br><b>Applications</b><br>• Mineral fertilizers (superphosphate)<br>• Matches (red phosphorus on the striker)<br>• Food additives and detergents"
        },
        kk: {
            title: "Фосфор",
            desc: "ДНҚ, сүйектердің құрамына кіретін және жасушаларда энергия тасымалдауды қамтамасыз ететін өмірлік маңызды элемент.",
            details: "<b>Негізгі фактілер</b><br>• Таңбасы: P • Атомдық нөмірі: 15 • Атомдық массасы: 30.97<br>• Бейметалл, бірнеше формада болады (ақ, қызыл, қара фосфор)<br><br><b>Биологиялық рөлі</b><br>• ДНҚ мен РНҚ компоненті<br>• АТФ — жасушаның негізгі «энергетикалық валютасы»<br>• Сүйек тінінің негізін құрайды (кальций гидроксиапатиті)<br><br><b>Химиялық қасиеттері</b><br>• Ақ фосфор ауада өздігінен тұтанып, қараңғыда жарқырайды<br>• Қызыл фосфор тұрақтырақ және улылығы төменірек<br><br><b>Қолданылуы</b><br>• Минералды тыңайтқыштар (суперфосфат)<br>• Сіріңкелер (қораптың бүйіріндегі қызыл фосфор)<br>• Тағамдық қоспалар мен жуғыш заттар"
        }
    },
    sulfur: {
        symbol: "S", num: 16, mass: 32.06, group: "Nonmetals",
        ru: {
            title: "Сера",
            desc: "Лимонно-желтый неметалл, необходимый для создания белков и производства серной кислоты.",
            details: "<b>Основные факты</b><br>• Символ: S • Атомный номер: 16 • Атомная масса: 32.06<br>• Неметалл желтого цвета, хрупкий<br><br><b>Биологическая роль</b><br>• Входит в состав аминокислот (цистеин, метионин)<br>• Образует дисульфидные мостики, удерживающие структуру белков (волосы, ногти)<br><br><b>Свойства</b><br>• Не растворяется в воде, но растворима в сероуглероде<br>• При горении образует диоксид серы (SO₂) с характерным резким запахом<br><br><b>Применение</b><br>• Производство серной кислоты (основа химии)<br>• Вулканизация каучука (превращение его в резину)<br>• Производство пороха и пиротехники<br>• Средства защиты растений (фунгициды)"
        },
        en: {
            title: "Sulfur",
            desc: "A lemon-yellow nonmetal essential for protein creation and sulfuric acid production.",
            details: "<b>Basic Facts</b><br>• Symbol: S • Atomic Number: 16 • Atomic Mass: 32.06<br>• Yellow nonmetal, brittle<br><br><b>Biological Role</b><br>• Part of amino acids (cysteine, methionine)<br>• Forms disulfide bridges that hold protein structures (hair, nails)<br><br><b>Properties</b><br>• Insoluble in water, but soluble in carbon disulfide<br>• When burned, forms sulfur dioxide (SO₂) with a characteristic sharp odor<br><br><b>Applications</b><br>• Sulfuric acid production (the foundation of chemistry)<br>• Rubber vulcanization (turning it into rubber)<br>• Gunpowder and pyrotechnics production<br>• Plant protection products (fungicides)"
        },
        kk: {
            title: "Күкірт",
            desc: "Белоктарды құру және күкірт қышқылын өндіру үшін қажетті лимон-сары түсті бейметалл.",
            details: "<b>Негізгі фактілер</b><br>• Таңбасы: S • Атомдық нөмірі: 16 • Атомдық массасы: 32.06<br>• Сары түсті бейметалл, морт<br><br><b>Биологиялық рөлі</b><br>• Аминқышқылдарының (цистеин, метионин) құрамына кіреді<br>• Белоктардың құрылымын ұстап тұратын дисульфидті көпіршелер түзеді (шаш, тырнақ)<br><br><b>Қасиеттері</b><br>• Суда ерімейді, бірақ күкірткөміртекте ериді<br>• Жанған кезде өзіне тән өткір иісі бар күкірт диоксидін (SO₂) түзеді<br><br><b>Қолданылуы</b><br>• Күкірт қышқылын өндіру (химияның негізі)<br>• Каучукты вулканизациялау (оны резеңкеге айналдыру)<br>• Оқ-дәрі және пиротехника өндірісі<br>• Өсімдіктерді қорғау құралдары (фунгицидтер)"
        }
    }
};

const locales = ['ru', 'en', 'kk'];

for (const lang of locales) {
    const path = `locales/${lang}_v2.json`;
    if (!fs.existsSync(path)) continue;
    
    const locale = JSON.parse(fs.readFileSync(path, 'utf8'));
    
    for (const [id, data] of Object.entries(elementsData)) {
        locale[`system.${id}.title`] = data[lang].title;
        locale[`system.${id}.desc`] = data[lang].desc;
        locale[`system.${id}.details`] = data[lang].details;
        
        // Sync with legacy mappings if they exist
        // Neon -> None (id neon)
        // Sodium -> muscular (legacy Na mapping)
        // Magnesium -> nervous (legacy Mg mapping)
        // Aluminum -> integumentary (legacy Al mapping)
        // Silicon -> respiratory (legacy Si mapping)
        // Phosphorus -> digestive (legacy P mapping)
        // Sulfur -> endocrine (legacy S mapping)
        
        const legacyMap = {
            sodium: 'muscular',
            magnesium: 'nervous',
            aluminum: 'integumentary',
            silicon: 'respiratory',
            phosphorus: 'digestive',
            sulfur: 'endocrine'
        };
        
        if (legacyMap[id]) {
            const legacyKey = legacyMap[id];
            locale[`system.${legacyKey}.title`] = data[lang].title;
            locale[`system.${legacyKey}.desc`] = data[lang].desc;
            locale[`system.${legacyKey}.details`] = data[lang].details;
        }
    }
    
    fs.writeFileSync(path, JSON.stringify(locale, null, 4));
    console.log(`✓ Enriched Ne-S for ${lang.toUpperCase()}`);
}
