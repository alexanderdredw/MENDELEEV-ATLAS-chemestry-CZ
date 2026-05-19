const fs = require('fs');

const ruC = `<b>Основные факты</b><br>
• Химический символ — C<br>
• Атомный номер — 6<br>
• Атомная масса — 12.011<br>
• Группа — Неметаллы<br>
• Основа всей жизни на Земле и органической химии<br>
• Обладает уникальной способностью образовывать длинные цепи и кольца<br><br>

<b>Атомная структура</b><br>
• 6 протонов в ядре<br>
• 6 электронов вокруг ядра<br>
• Содержит 6 нейтронов (Углерод-12)<br>
• Электронная конфигурация — [He] 2s² 2p²<br>
• Расположен во 2-м периоде и 14-й группе<br><br>

<b>Аллотропные модификации</b><br>
• Алмаз: самое твердое природное вещество, диэлектрик<br>
• Графит: мягкий, электропроводный, используется в карандашах и смазках<br>
• Графен: слой толщиной в один атом, обладающий невероятной прочностью и проводимостью<br>
• Фуллерены и нанотрубки: наноструктуры будущего<br><br>

<b>Химические свойства</b><br>
• Способен образовывать 4 прочные ковалентные связи<br>
• Основа миллионов органических соединений<br>
• При горении образует углекислый газ (CO₂) или угарный газ (CO)<br>
• Реагирует с металлами, образуя карбиды<br><br>

<b>Изотопы углерода</b><br>
• Углерод-12 (¹²C) — самый распространенный<br>
• Углерод-13 (¹³C) — используется в спектроскопии ЯМР<br>
• Углерод-14 (¹⁴C) — радиоактивный, используется для датировки археологических находок (радиоуглеродный анализ)<br><br>

<b>Нахождение в природе</b><br>
• Входит в состав атмосферы (CO₂)<br>
• Огромные запасы в виде ископаемого топлива (уголь, нефть, природный газ)<br>
• Содержится в карбонатных породах (известняк, мрамор)<br>
• Является ключевым компонентом всех живых организмов<br><br>

<b>Промышленное значение</b><br>
• Энергетика: сжигание углеводородов для получения тепла и электричества<br>
• Металлургия: производство стали и чугуна (кокс)<br>
• Ювелирное дело и промышленная обработка (алмазы)<br>
• Создание композитных материалов и углепластиков<br><br>

<b>Углеродный цикл</b><br>
• Постоянный обмен углеродом между атмосферой, океаном и биосферой<br>
• Фотосинтез: поглощение CO₂ растениями и выделение кислорода<br>
• Дыхание и разложение: возвращение углерода в атмосферу<br><br>

<b>Значение в науке</b><br>
• Весь раздел «Органическая химия» посвящен изучению соединений углерода<br>
• Графен принес своим первооткрывателям Нобелевскую премию<br>
• Изучение космоса: углерод — «пыль звезд», основа жизни во Вселенной<br><br>

<b>Взаимодействие с другими областями</b><br>
• Биология — основа структуры клеток и ДНК<br>
• Экология — влияние парниковых газов на климат<br>
• Технологии — наноэлектроника и сверхпрочные материалы<br>
• Геология — изучение земных недр и кристаллов`;

const enC = `<b>Basic Facts</b><br>
• Chemical Symbol — C<br>
• Atomic Number — 6<br>
• Atomic Mass — 12.011<br>
• Group — Nonmetals<br>
• The foundation of all life on Earth and organic chemistry<br>
• Possesses a unique ability to form long chains and rings<br><br>

<b>Atomic Structure</b><br>
• 6 protons in the nucleus<br>
• 6 electrons around the nucleus<br>
• Contains 6 neutrons (Carbon-12)<br>
• Electron configuration — [He] 2s² 2p²<br>
• Located in the 2nd period and 14th group<br><br>

<b>Allotropic Modifications</b><br>
• Diamond: the hardest natural substance, an insulator<br>
• Graphite: soft, electrically conductive, used in pencils and lubricants<br>
• Graphene: a single-atom thick layer with incredible strength and conductivity<br>
• Fullerenes and Nanotubes: nanostructures of the future<br><br>

<b>Chemical Properties</b><br>
• Capable of forming 4 strong covalent bonds<br>
• The basis of millions of organic compounds<br>
• Forms carbon dioxide (CO₂) or carbon monoxide (CO) when burned<br>
• Reacts with metals to form carbides<br><br>

<b>Carbon Isotopes</b><br>
• Carbon-12 (¹²C) — the most common<br>
• Carbon-13 (¹³C) — used in NMR spectroscopy<br>
• Carbon-14 (¹⁴C) — radioactive, used for dating archaeological finds (radiocarbon dating)<br><br>

<b>Occurrence in Nature</b><br>
• Found in the atmosphere (CO₂)<br>
• Huge reserves in the form of fossil fuels (coal, oil, natural gas)<br>
• Found in carbonate rocks (limestone, marble)<br>
• A key component of all living organisms<br><br>

<b>Industrial Significance</b><br>
• Energy: burning hydrocarbons for heat and electricity<br>
• Metallurgy: production of steel and cast iron (coke)<br>
• Jewelry and industrial processing (diamonds)<br>
• Creation of composite materials and carbon fibers<br><br>

<b>Carbon Cycle</b><br>
• Constant exchange of carbon between the atmosphere, ocean, and biosphere<br>
• Photosynthesis: plants absorbing CO₂ and releasing oxygen<br>
• Respiration and decomposition: returning carbon to the atmosphere<br><br>

<b>Significance in Science</b><br>
• An entire branch, "Organic Chemistry," is dedicated to the study of carbon compounds<br>
• Graphene earned its discoverers a Nobel Prize<br>
• Space Exploration: carbon is "star dust," the basis of life in the Universe<br><br>

<b>Interaction with Other Fields</b><br>
• Biology — foundation of cell structure and DNA<br>
• Ecology — influence of greenhouse gases on climate<br>
• Technology — nanoelectronics and ultra-strong materials<br>
• Geology — study of Earth's interior and crystals`;

const kkC = `<b>Негізгі фактілер</b><br>
• Химиялық таңбасы — C<br>
• Атомдық нөмірі — 6<br>
• Атомдық массасы — 12.011<br>
• Тобы — Бейметалдар<br>
• Жер бетіндегі бүкіл тіршіліктің және органикалық химияның негізі<br>
• Ұзын тізбектер мен сақиналар түзудің бірегей қабілетіне ие<br><br>

<b>Атомдық құрылымы</b><br>
• Ядрода 6 протон<br>
• Ядро айналасында 6 электрон<br>
• 6 нейтроны бар (Көміртегі-12)<br>
• Электрондық конфигурациясы — [He] 2s² 2p²<br>
• Периодтық кестенің 2-периодында және 14-тобында орналасқан<br><br>

<b>Аллотропиялық модификациялары</b><br>
• Алмаз: ең қатты табиғи зат, диэлектрик<br>
• Графит: жұмсақ, электр өткізгіш, қарындаштар мен майлағыштарда қолданылады<br>
• Графен: керемет беріктігі мен өткізгіштігі бар қалыңдығы бір атом болатын қабат<br>
• Фуллерендер мен нанотүтікшелер: болашақтың наноқұрылымдары<br><br>

<b>Химиялық қасиеттері</b><br>
• 4 берік ковалентті байланыс түзуге қабілетті<br>
• Миллиондаған органикалық қосылыстардың негізі<br>
• Жанған кезде көмірқышқыл газын (CO₂) немесе иіс газын (CO) түзеді<br>
• Металдармен әрекеттесіп, карбидтер түзеді<br><br>

<b>Көміртегі изотоптары</b><br>
• Көміртегі-12 (¹²C) — ең көп таралған<br>
• Көміртегі-13 (¹³C) — ЯМР спектроскопиясында қолданылады<br>
• Көміртегі-14 (¹⁴C) — радиоактивті, археологиялық олжаларды мерзімдеу үшін қолданылады (радиокөміртекті талдау)<br><br>

<b>Табиғатта кездесуі</b><br>
• Атмосфераның құрамына кіреді (CO₂)<br>
• Қазба отын (көмір, мұнай, табиғи газ) түріндегі орасан зор қорлар<br>
• Карбонатты жыныстарда (әктас, мәрмәр) кездеседі<br>
• Барлық тірі организмдердің негізгі компоненті болып табылады<br><br>

<b>Өнеркәсіптік маңызы</b><br>
• Энергетика: жылу мен электр энергиясын алу үшін көмірсутектерді жағу<br>
• Металлургия: болат пен шойын өндірісі (кокс)<br>
• Зергерлік іс және өнеркәсіптік өңдеу (алмаздар)<br>
• Композиттік материалдар мен көміртпластиктер жасау<br><br>

<b>Көміртегі айналымы</b><br>
• Атмосфера, мұхит және биосфера арасындағы тұрақты көміртегі алмасуы<br>
• Фотосинтез: өсімдіктердің CO₂-ні жұтуы және оттегін бөлуі<br>
• Тыныс алу және ыдырау: көміртегінің атмосфераға қайтарылуы<br><br>

<b>Ғылымдағы маңызы</b><br>
• «Органикалық химия» бүкіл бөлімі көміртегі қосылыстарын зерттеуге арналған<br>
• Графен оны алғаш ашқандарға Нобель сыйлығын алып келді<br>
• Космосты зерттеу: көміртегі — «жұлдыз шаңы», Әлемдегі тіршіліктің негізі<br><br>

<b>Басқа салалармен өзара әрекеттесуі</b><br>
• Биология — жасушалар мен ДНҚ құрылымының негізі<br>
• Экология — парниктік газдардың климатқа әсері<br>
• Технологиялар — наноэлектроника және өте берік материалдар<br>
• Геология — Жер қойнауы мен кристалдарды зерттеу`;

const ruN = `<b>Основные факты</b><br>
• Химический символ — N<br>
• Атомный номер — 7<br>
• Атомная масса — 14.007<br>
• Группа — Неметаллы<br>
• Составляет 78% объема атмосферы Земли<br>
• Один из важнейших элементов для жизни (компонент белков и ДНК)<br><br>

<b>Атомная структура</b><br>
• 7 протонов в ядре<br>
• 7 электронов вокруг ядра<br>
• Содержит 7 нейтронов (Азот-14)<br>
• Электронная конфигурация — [He] 2s² 2p³<br>
• Расположен во 2-м периоде и 15-й группе<br><br>

<b>Физические свойства</b><br>
• Бесцветный газ без запаха и вкуса<br>
• Жидкий азот имеет температуру −195.8°C<br>
• Молекула N₂ очень прочная благодаря тройной связи<br>
• Малорастворим в воде<br><br>

<b>Химические свойства</b><br>
• Химически инертен при комнатной температуре<br>
• При высоких T и давлении реагирует с водородом (синтез аммиака)<br>
• Образует оксиды (NO, NO₂, N₂O), азотную кислоту и нитраты<br>
• Биологическая фиксация: превращение азота воздуха в соединения, доступные растениям<br><br>

<b>Изотопы азота</b><br>
• Азот-14 (¹⁴N) — самый распространенный (99.6%)<br>
• Азот-15 (¹⁵N) — используется в биохимических исследованиях как «метка»<br><br>

<b>Нахождение в природе</b><br>
• Основной газ атмосферы<br>
• Содержится в почве в виде нитратов и солей аммония<br>
• Входит в состав аминокислот, белков, нуклеиновых кислот и АТФ<br><br>

<b>Промышленное производство</b><br>
• Фракционная перегонка жидкого воздуха (основной метод)<br>
• Лабораторный метод: разложение нитрита аммония при нагревании<br><br>

<b>Применение азота</b><br>
• Производство минеральных удобрений (основное потребление)<br>
• Криогеника: жидкий азот для мгновенной заморозки и хранения биоматериалов<br>
• Создание инертной среды в металлургии и электронике<br>
• Производство взрывчатых веществ и порохов<br>
• Наполнение шин гоночных автомобилей и самолетов<br><br>

<b>Азотный цикл</b><br>
• Циркуляция азота между атмосферой, почвой и живыми организмами<br>
• Роль бактерий в круговороте азота<br><br>

<b>Взаимодействие с другими областями</b><br>
• Сельское хозяйство — питание растений и урожайность<br>
• Медицина — криохирургия и хранение крови<br>
• Пищевая промышленность — упаковка в инертной среде для свежести<br>
• Химическая индустрия — производство азотной кислоты и полимеров`;

const enN = `<b>Basic Facts</b><br>
• Chemical Symbol — N<br>
• Atomic Number — 7<br>
• Atomic Mass — 14.007<br>
• Group — Nonmetals<br>
• Makes up 78% of the Earth's atmosphere by volume<br>
• One of the most essential elements for life (component of proteins and DNA)<br><br>

<b>Atomic Structure</b><br>
• 7 protons in the nucleus<br>
• 7 electrons around the nucleus<br>
• Contains 7 neutrons (Nitrogen-14)<br>
• Electron configuration — [He] 2s² 2p³<br>
• Located in the 2nd period and 15th group<br><br>

<b>Physical Properties</b><br>
• Colorless, odorless, and tasteless gas<br>
• Liquid nitrogen has a temperature of −195.8°C<br>
• The N₂ molecule is extremely strong due to its triple bond<br>
• Slightly soluble in water<br><br>

<b>Chemical Properties</b><br>
• Chemically inert at room temperature<br>
• Reacts with hydrogen at high T and pressure (ammonia synthesis)<br>
• Forms oxides (NO, NO₂, N₂O), nitric acid, and nitrates<br>
• Biological fixation: conversion of atmospheric nitrogen into compounds available to plants<br><br>

<b>Nitrogen Isotopes</b><br>
• Nitrogen-14 (¹⁴N) — the most common (99.6%)<br>
• Nitrogen-15 (¹⁵N) — used in biochemical research as a "tracer"<br><br>

<b>Occurrence in Nature</b><br>
• The primary gas of the atmosphere<br>
• Found in the soil in the form of nitrates and ammonium salts<br>
• A component of amino acids, proteins, nucleic acids, and ATP<br><br>

<b>Industrial Production</b><br>
• Fractional distillation of liquid air (primary method)<br>
• Laboratory method: decomposition of ammonium nitrite when heated<br><br>

<b>Applications of Nitrogen</b><br>
• Production of mineral fertilizers (primary consumption)<br>
• Cryogenics: liquid nitrogen for flash freezing and storage of biomaterials<br>
• Creating an inert atmosphere in metallurgy and electronics<br>
• Production of explosives and gunpowders<br>
• Filling tires for racing cars and aircraft<br><br>

<b>Nitrogen Cycle</b><br>
• Circulation of nitrogen between the atmosphere, soil, and living organisms<br>
• The role of bacteria in the nitrogen cycle<br><br>

<b>Interaction with Other Fields</b><br>
• Agriculture — plant nutrition and crop yield<br>
• Medicine — cryosurgery and blood storage<br>
• Food Industry — packaging in an inert environment for freshness<br>
• Chemical Industry — production of nitric acid and polymers`;

const kkN = `<b>Негізгі фактілер</b><br>
• Химиялық таңбасы — N<br>
• Атомдық нөмірі — 7<br>
• Атомдық массасы — 14.007<br>
• Тобы — Бейметалдар<br>
• Жер атмосферасы көлемінің 78%-ын құрайды<br>
• Тіршілік үшін ең маңызды элементтердің бірі (белоктар мен ДНҚ компоненті)<br><br>

<b>Атомдық құрылымы</b><br>
• Ядрода 7 протон<br>
• Ядро айналасында 7 электрон<br>
• 7 нейтроны бар (Азот-14)<br>
• Электрондық конфигурациясы — [He] 2s² 2p³<br>
• Периодтық кестенің 2-периодында және 15-тобында орналасқан<br><br>

<b>Физикалық қасиеттері</b><br>
• Түссіз, иіссіз және дәмсіз газ<br>
• Сұйық азоттың температурасы −195.8°C<br>
• N₂ молекуласы үштік байланыстың арқасында өте берік<br>
• Суда аз ериді<br><br>

<b>Химиялық қасиеттері</b><br>
• Бөлме температурасында химиялық инертті<br>
• Жоғары Т және қысымда сутегімен әрекеттеседі (аммиак синтезі)<br>
• Оксидтер (NO, NO₂, N₂O), азот қышқылын және нитраттар түзеді<br>
• Биологиялық фиксация: ауадағы азотты өсімдіктерге қолжетімді қосылыстарға айналдыру<br><br>

<b>Азот изотоптары</b><br>
• Азот-14 (¹⁴N) — ең көп таралған (99.6%)<br>
• Азот-15 (¹⁵N) — биохимиялық зерттеулерде «таңба» ретінде қолданылады<br><br>

<b>Табиғатта кездесуі</b><br>
• Атмосфераның негізгі газы<br>
• Топырақта нитраттар мен аммоний тұздары түрінде болады<br>
• Аминқышқылдарының, белоктардың, нуклеин қышқылдарының және АТФ құрамына кіреді<br><br>

<b>Өнеркәсіптік өндіріс</b><br>
• Сұйық ауаны фракциялық айдау (негізгі әдіс)<br>
• Зертханалық әдіс: аммоний нитритін қыздырғанда ыдырату<br><br>

<b>Азоттың қолданылуы</b><br>
• Минералды тыңайтқыштар өндірісі (негізгі тұтыну)<br>
• Криогеника: биоматериалдарды жылдам мұздату және сақтау үшін сұйық азот<br>
• Металлургия мен электроникада инертті орта жасау<br>
• Жарылғыш заттар мен оқ-дәрі өндірісі<br>
• Жарыс машиналары мен ұшақтардың шиналарын толтыру<br><br>

<b>Азот айналымы</b><br>
• Атмосфера, топырақ және тірі организмдер арасындағы азот айналымы<br>
• Азот айналымындағы бактериялардың рөлі<br><br>

<b>Басқа салалармен өзара әрекеттесуі</b><br>
• Ауыл шаруашылығы — өсімдіктердің қоректенуі және өнімділік<br>
• Медицина — криохирургия және қан сақтау<br>
• Тамақ өнеркәсібі — балғындықты сақтау үшін инертті ортада қаптау<br>
• Химия индустриясы — азот қышқылы мен полимерлер өндірісі`;

const locales = {
  ru: { path: 'locales/ru_v2.json', data: { carbon: ruC, nitrogen: ruN } },
  en: { path: 'locales/en_v2.json', data: { carbon: enC, nitrogen: enN } },
  kk: { path: 'locales/kk_v2.json', data: { carbon: kkC, nitrogen: kkN } }
};

for (const [lang, cfg] of Object.entries(locales)) {
  const locale = JSON.parse(fs.readFileSync(cfg.path, 'utf8'));
  
  // Carbon
  locale['system.carbon.details'] = cfg.data.carbon;
  locale['system.carbon.title'] = lang === 'ru' ? 'Углерод' : (lang === 'kk' ? 'Көміртегі' : 'Carbon');
  // Nitrogen
  locale['system.nitrogen.details'] = cfg.data.nitrogen;
  locale['system.nitrogen.title'] = lang === 'ru' ? 'Азот' : (lang === 'kk' ? 'Азот' : 'Nitrogen');
  
  // Also sync from digestive (carbon) and endocrine (nitrogen) if needed
  locale['system.digestive.details'] = cfg.data.carbon;
  locale['system.endocrine.details'] = cfg.data.nitrogen;
  
  fs.writeFileSync(cfg.path, JSON.stringify(locale, null, 4));
  console.log(`✓ Updated Carbon & Nitrogen in ${lang.toUpperCase()}`);
}
