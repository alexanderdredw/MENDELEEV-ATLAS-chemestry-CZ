const fs = require('fs');
const path = require('path');

const elements = {
  antimony: {
    symbol: 'Sb',
    number: 51,
    mass: '121.76',
    group: { en: 'Semimetals', ru: 'Полуметаллы', kk: 'Полуметаллытар' },
    en: {
      title: 'Antimony',
      desc: 'A lustrous grey semimetal used in flame retardants and alloys.',
      fact: 'Antimony expands as it freezes, a rare property it shares with water and bismuth.',
      details: '<b>Basic Facts</b><br>• Symbol: Sb • Number: 51 • Mass: 121.76<br>• Semimetals, Period 5, Group 15<br><br><b>Atomic Structure</b><br>• 51 protons, 71 neutrons<br>• Config: [Kr] 4d¹⁰ 5s² 5p³<br><br><b>Properties</b><br>• Silvery, brittle semimetal<br>• Expands on freezing<br>• Toxic in high doses<br><br><b>Applications</b><br>• Flame retardants<br>• Lead-acid battery alloys<br>• Microelectronics (diodes)',
      ai_simple: 'Antimony (Sb) is element 51, a semimetal known for its use in fireproofing materials.',
      ai_detailed: 'Antimony is a semiconductor material. Its most stable form is a silvery-blue brittle metal. It is primarily used in the form of antimony trioxide for flame retardants.',
      study: [
        'Atomic number: 51',
        'Chemical symbol: Sb',
        'Group: Semimetals',
        'Atomic mass: 121.76',
        'Used in flame retardants'
      ],
      questions: [
        { q: 'What is the atomic number of Antimony?', a: '51', o: ['50', '51', '52', '53'] },
        { q: 'What is the symbol for Antimony?', a: 'Sb', o: ['An', 'At', 'Sb', 'St'] },
        { q: 'Antimony belongs to which group?', a: 'Semimetals', o: ['Metals', 'Nonmetals', 'Semimetals', 'Noble Gases'] },
        { q: 'What is a unique property of Antimony?', a: 'Expands on freezing', o: ['Highly reactive', 'Expands on freezing', 'Liquid at room temp', 'Invisible'] },
        { q: 'Where is Antimony primarily used?', a: 'Flame retardants', o: ['Food', 'Medicine', 'Flame retardants', 'Clothing'] }
      ]
    },
    ru: {
      title: 'Сурьма',
      desc: 'Блестящий серый полуметалл, используемый в антипиренах и сплавах.',
      fact: 'Сурьма расширяется при замерзании, что делает её полезной для точного литья.',
      details: '<b>Основные факты</b><br>• Символ: Sb • Номер: 51 • Масса: 121.76<br>• Полуметаллы, период 5, группа 15<br><br><b>Атомная структура</b><br>• 51 протон, 71 нейтрон<br>• Конфигурация: [Kr] 4d¹⁰ 5s² 5p³<br><br><b>Свойства</b><br>• Серебристо-белый хрупкий полуметалл<br>• Расширяется при затвердевании<br>• Токсична в больших дозах<br><br><b>Применение</b><br>• Антипирены (огнезащита)<br>• Сплавы для аккумуляторов<br>• Полупроводники',
      ai_simple: 'Сурьма (Sb) — элемент №51, полуметалл, известный своим применением в огнестойких материалах.',
      ai_detailed: 'Сурьма — это полупроводниковый материал. Её наиболее стабильная форма — серебристо-голубой хрупкий металл. В основном используется в виде триоксида сурьмы для антипиренов.',
      study: [
        'Атомный номер: 51',
        'Химический символ: Sb',
        'Группа: Полуметаллы',
        'Атомная масса: 121.76',
        'Используется в антипиренах'
      ],
      questions: [
        { q: 'Какой атомный номер у сурьмы?', a: '51', o: ['50', '51', '52', '53'] },
        { q: 'Какой символ у сурьмы?', a: 'Sb', o: ['An', 'At', 'Sb', 'St'] },
        { q: 'К какой группе относится сурьма?', a: 'Полуметаллы', o: ['Металлы', 'Неметаллы', 'Полуметаллы', 'Благородные газы'] },
        { q: 'Какое уникальное свойство у сурьмы?', a: 'Расширяется при замерзании', o: ['Высокая реактивность', 'Расширяется при замерзании', 'Жидкая при комнатной темп.', 'Невидимость'] },
        { q: 'Где в основном используется сурьма?', a: 'Антипирены', o: ['Пища', 'Медицина', 'Антипирены', 'Одежда'] }
      ]
    },
    kk: {
      title: 'Сурьма',
      desc: 'Антипирендер мен қорытпаларда қолданылатын жылтыр сұр полуметалл.',
      fact: 'Сурьма қатып қалғанда кеңейеді, бұл оны дәл құю үшін пайдалы етеді.',
      details: '<b>Негізгі фактілер</b><br>• Таңбасы: Sb • Нөмірі: 51 • Массасы: 121.76<br>• Полуметаллы, 5-период, 15-топ<br><br><b>Атомдық құрылымы</b><br>• 51 протон, 71 нейтрон<br>• Конфиг: [Kr] 4d¹⁰ 5s² 5p³<br><br><b>Қасиеттері</b><br>• Күміс түсті, морт полуметалл<br>• Қатқанда кеңейеді<br>• Жоғары дозада улы<br><br><b>Қолданылуы</b><br>• Антипирендер (өрттен қорғау)<br>• Аккумулятор қорытпалары<br>• Жартылай өткізгіштер',
      ai_simple: 'Сурьма (Sb) — №51 элемент, отқа төзімді материалдарда қолданылуымен танымал полуметалл.',
      ai_detailed: 'Сурьма — жартылай өткізгіш материал. Оның ең тұрақты түрі — күміс-көк түсті морт металл. Негізінен антипирендер үшін сурьма триоксиді түрінде қолданылады.',
      study: [
        'Атомдық нөмірі: 51',
        'Химиялық таңбасы: Sb',
        'Тобы: Полуметаллытар',
        'Атомдық массасы: 121.76',
        'Антипирендерде қолданылады'
      ],
      questions: [
        { q: 'Сурьманың атомдық нөмірі қандай?', a: '51', o: ['50', '51', '52', '53'] },
        { q: 'Сурьманың таңбасы қандай?', a: 'Sb', o: ['An', 'At', 'Sb', 'St'] },
        { q: 'Сурьма қай топқа жатады?', a: 'Полуметаллытар', o: ['Металдар', 'Бейметалдар', 'Полуметаллытар', 'Инертті газдар'] },
        { q: 'Сурьманың қандай ерекше қасиеті бар?', a: 'Қатқанда кеңейеді', o: ['Жоғары реактивтілік', 'Қатқанда кеңейеді', 'Сұйық күйде болады', 'Көрінбейді'] },
        { q: 'Сурьма негізінен қайда қолданылады?', a: 'Антипирендер', o: ['Тамақ', 'Медицина', 'Антипирендер', 'Киім'] }
      ]
    }
  },
  tellurium: {
    symbol: 'Te',
    number: 52,
    mass: '127.60',
    group: { en: 'Semimetals', ru: 'Полуметаллы', kk: 'Полуметаллытар' },
    en: {
      title: 'Tellurium',
      desc: 'A rare, silvery-white semimetal used in solar panels and memory devices.',
      fact: 'Exposure to tellurium can cause your breath to smell like garlic for weeks.',
      details: '<b>Basic Facts</b><br>• Symbol: Te • Number: 52 • Mass: 127.60<br>• Semimetals, Period 5, Group 16<br><br><b>Atomic Structure</b><br>• 52 protons, 76 neutrons<br>• Config: [Kr] 4d¹⁰ 5s² 5p⁴<br><br><b>Properties</b><br>• Silvery-white, brittle semimetal<br>• Semiconductor properties<br>• Extremely rare in Earth\'s crust<br><br><b>Applications</b><br>• Solar cells (CdTe)<br>• Rewritable CDs/DVDs<br>• Steel and copper alloys',
      ai_simple: 'Tellurium (Te) is element 52, essential for high-efficiency thin-film solar panels.',
      ai_detailed: 'Tellurium is a p-type semiconductor. It is chemically related to selenium and sulfur. Its primary industrial use is in alloying and solar energy.',
      study: [
        'Atomic number: 52',
        'Chemical symbol: Te',
        'Group: Semimetals',
        'Atomic mass: 127.60',
        'Used in solar cells'
      ],
      questions: [
        { q: 'What is the atomic number of Tellurium?', a: '52', o: ['51', '52', '53', '54'] },
        { q: 'What is the symbol for Tellurium?', a: 'Te', o: ['Tl', 'Te', 'Tu', 'Tr'] },
        { q: 'Tellurium is primarily used in which technology?', a: 'Solar panels', o: ['Cars', 'Solar panels', 'Food', 'Clothing'] },
        { q: 'Tellurium is chemically related to which element?', a: 'Sulfur', o: ['Gold', 'Sulfur', 'Iron', 'Carbon'] },
        { q: 'What is a side effect of tellurium exposure?', a: 'Garlic breath', o: ['Blue skin', 'Garlic breath', 'Glowing eyes', 'Hair loss'] }
      ]
    },
    ru: {
      title: 'Теллур',
      desc: 'Редкий серебристо-белый полуметалл, используемый в солнечных батареях.',
      fact: 'При попадании теллура в организм дыхание приобретает стойкий запах чеснока.',
      details: '<b>Основные факты</b><br>• Символ: Te • Номер: 52 • Масса: 127.60<br>• Полуметаллы, период 5, группа 16<br><br><b>Атомная структура</b><br>• 52 протона, 76 нейтронов<br>• Конфигурация: [Kr] 4d¹⁰ 5s² 5p⁴<br><br><b>Свойства</b><br>• Серебристо-белый хрупкий полуметалл<br>• Полупроводник<br>• Очень редкий элемент в коре<br><br><b>Применение</b><br>• Солнечные элементы (CdTe)<br>• Перезаписываемые диски<br>• Сплавы стали и меди',
      ai_simple: 'Теллур (Te) — элемент №52, необходим для высокоэффективных солнечных панелей.',
      ai_detailed: 'Теллур — полупроводник p-типа. Химически близок к селену и сере. Основное промышленное применение — легирование и солнечная энергетика.',
      study: [
        'Атомный номер: 52',
        'Химический символ: Te',
        'Группа: Полуметаллы',
        'Атомная масса: 127.60',
        'Используется в солнечных панелях'
      ],
      questions: [
        { q: 'Какой атомный номер у теллура?', a: '52', o: ['51', '52', '53', '54'] },
        { q: 'Какой символ у теллура?', a: 'Te', o: ['Tl', 'Te', 'Tu', 'Tr'] },
        { q: 'В какой технологии в основном используется теллур?', a: 'Солнечные батареи', o: ['Автомобили', 'Солнечные батареи', 'Пища', 'Одежда'] },
        { q: 'К какому элементу теллур близок химически?', a: 'Сера', o: ['Золото', 'Сера', 'Железо', 'Углерод'] },
        { q: 'Какое последствие контакта с теллуром?', a: 'Запах чеснока изо рта', o: ['Синяя кожа', 'Запах чеснока изо рта', 'Светящиеся глаза', 'Выпадение волос'] }
      ]
    },
    kk: {
      title: 'Теллур',
      desc: 'Күн батареяларында қолданылатын сирек күміс-ақ полуметалл.',
      fact: 'Теллур ағзаға түскенде, тыныс алу сарымсақтың тұрақты иісіне ие болады.',
      details: '<b>Негізгі фактілер</b><br>• Таңбасы: Te • Нөмірі: 52 • Массасы: 127.60<br>• Полуметаллы, 5-период, 16-топ<br><br><b>Атомдық құрылымы</b><br>• 52 протон, 76 нейтрон<br>• Конфиг: [Kr] 4d¹⁰ 5s² 5p⁴<br><br><b>Қасиеттері</b><br>• Күміс-ақ, морт полуметалл<br>• Жартылай өткізгіш<br>• Жер қыртысында өте сирек кездеседі<br><br><b>Қолданылуы</b><br>• Күн элементтері (CdTe)<br>• Қайта жазылатын дискілер<br>• Болат пен мыс қорытпалары',
      ai_simple: 'Теллур (Te) — №52 элемент, жоғары тиімді күн панельдері үшін қажет.',
      ai_detailed: 'Теллур — p-типті жартылай өткізгіш. Химиялық жағынан селен мен күкіртке жақын. Негізгі өнеркәсіптік қолданылуы — легирлеу және күн энергетикасы.',
      study: [
        'Атомдық нөмірі: 52',
        'Химиялық таңбасы: Te',
        'Тобы: Полуметаллытар',
        'Атомтық массасы: 127.60',
        'Күн панельдерінде қолданылады'
      ],
      questions: [
        { q: 'Теллурдың атомдық нөмірі қандай?', a: '52', o: ['51', '52', '53', '54'] },
        { q: 'Теллурдың таңбасы қандай?', a: 'Te', o: ['Tl', 'Te', 'Tu', 'Tr'] },
        { q: 'Теллур негізінен қай технологияда қолданылады?', a: 'Күн панельдері', o: ['Көліктер', 'Күн панельдері', 'Тамақ', 'Киім'] },
        { q: 'Теллур химиялық жағынан қай элементке жақын?', a: 'Күкірт', o: ['Алтын', 'Күкірт', 'Темір', 'Көміртек'] },
        { q: 'Теллурмен жанасудың салдары қандай?', a: 'Ауыздан сарымсақ иісі шығуы', o: ['Көк тері', 'Ауыздан сарымсақ иісі шығуы', 'Жарқыраған көздер', 'Шаштың түсуі'] }
      ]
    }
  },
  iodine: {
    symbol: 'I',
    number: 53,
    mass: '126.90',
    group: { en: 'Halogens', ru: 'Галогены', kk: 'Галогендер' },
    en: {
      title: 'Iodine',
      desc: 'A dark grey nonmetal that sublimes into purple vapors, vital for thyroid health.',
      fact: 'Iodine is the heaviest essential element for life.',
      details: '<b>Basic Facts</b><br>• Symbol: I • Number: 53 • Mass: 126.90<br>• Halogen, Period 5, Group 17<br><br><b>Atomic Structure</b><br>• 53 protons, 74 neutrons<br>• Config: [Kr] 4d¹⁰ 5s² 5p⁵<br><br><b>Properties</b><br>• Lustrous dark grey solid<br>• Sublimes to purple gas<br>• Reacts with starch to turn blue<br><br><b>Applications</b><br>• Disinfectants and medicine<br>• Polarizing filters for LCDs<br>• Cloud seeding (silver iodide)',
      ai_simple: 'Iodine (I) is element 53, a halogen critical for human metabolism.',
      ai_detailed: 'Iodine is a bluish-black solid. It is essential for the production of thyroid hormones. In industry, it is used in dyes and photography.',
      study: [
        'Atomic number: 53',
        'Chemical symbol: I',
        'Group: Halogen',
        'Atomic mass: 126.90',
        'Essential for thyroid'
      ],
      questions: [
        { q: 'What is the atomic number of Iodine?', a: '53', o: ['52', '53', '54', '55'] },
        { q: 'What is the symbol for Iodine?', a: 'I', o: ['Id', 'I', 'Io', 'In'] },
        { q: 'Which color are iodine vapors?', a: 'Purple', o: ['Green', 'Blue', 'Purple', 'Red'] },
        { q: 'Iodine is vital for which human organ?', a: 'Thyroid', o: ['Heart', 'Liver', 'Thyroid', 'Lungs'] },
        { q: 'Iodine reacts with starch to turn which color?', a: 'Blue', o: ['Red', 'Blue', 'Yellow', 'Black'] }
      ]
    },
    ru: {
      title: 'Иод',
      desc: 'Темно-серый неметалл, возгоняющийся в фиолетовые пары, важен для здоровья щитовидной железы.',
      fact: 'Иод — самый тяжелый из необходимых для жизни элементов.',
      details: '<b>Основные факты</b><br>• Символ: I • Номер: 53 • Масса: 126.90<br>• Галоген, период 5, группа 17<br><br><b>Атомная структура</b><br>• 53 протона, 74 нейтрона<br>• Конфигурация: [Kr] 4d¹⁰ 5s² 5p⁵<br><br><b>Свойства</b><br>• Блестящее темно-серое твердое вещество<br>• Возгоняется в фиолетовый газ<br>• Синеет при реакции с крахмалом<br><br><b>Применение</b><br>• Дезинфекция и медицина<br>• Поляризаторы для ЖК-экранов<br>• Засев облаков (иодид серебра)',
      ai_simple: 'Иод (I) — элемент №53, галоген, критически важный для обмена веществ.',
      ai_detailed: 'Иод — сине-черное твердое вещество. Необходим для выработки гормонов щитовидной железы. В промышленности используется в красителях и фотографии.',
      study: [
        'Атомный номер: 53',
        'Химический символ: I',
        'Группа: Галогены',
        'Атомная масса: 126.90',
        'Важен для щитовидной железы'
      ],
      questions: [
        { q: 'Какой атомный номер у иода?', a: '53', o: ['52', '53', '54', '55'] },
        { q: 'Какой символ у иода?', a: 'I', o: ['Id', 'I', 'Io', 'In'] },
        { q: 'Какого цвета пары иода?', a: 'Фиолетовые', o: ['Зеленые', 'Синие', 'Фиолетовые', 'Красные'] },
        { q: 'Для какого органа человека важен иод?', a: 'Щитовидная железа', o: ['Сердце', 'Печень', 'Щитовидная железа', 'Легкие'] },
        { q: 'В какой цвет окрашивается крахмал при реакции с иодом?', a: 'Синий', o: ['Красный', 'Синий', 'Желтый', 'Черный'] }
      ]
    },
    kk: {
      title: 'Иод',
      desc: 'Күлгін буға айналатын, қалқанша безінің саулығы үшін маңызды қара-сұр бейметалл.',
      fact: 'Иод — өмір үшін қажетті ең ауыр элемент.',
      details: '<b>Негізгі фактілер</b><br>• Таңбасы: I • Нөмірі: 53 • Массасы: 126.90<br>• Галоген, 5-период, 17-топ<br><br><b>Атомдық құрылымы</b><br>• 53 протон, 74 нейтрон<br>• Конфиг: [Kr] 4d¹⁰ 5s² 5p⁵<br><br><b>Қасиеттері</b><br>• Жылтыр қара-сұр қатты зат<br>• Күлгін газға айналады (сублимация)<br>• Крахмалмен әрекеттескенде көгереді<br><br><b>Қолданылуы</b><br>• Дезинфекция және медицина<br>• СКД экрандарға арналған поляризаторлар<br>• Бұлттарды егу (күміс иодиді)',
      ai_simple: 'Иод (I) — №53 элемент, зат алмасу үшін өте маңызды галоген.',
      ai_detailed: 'Иод — көк-қара қатты зат. Қалқанша безі гормондарын өндіру үшін қажет. Өнеркәсіпте бояғыштар мен фотографияда қолданылады.',
      study: [
        'Атомдық нөмірі: 53',
        'Химиялық таңбасы: I',
        'Тобы: Галогендер',
        'Атомдық массасы: 126.90',
        'Қалқанша безі үшін маңызды'
      ],
      questions: [
        { q: 'Иодтың атомдық нөмірі қандай?', a: '53', o: ['52', '53', '54', '55'] },
        { q: 'Иодтың таңбасы қандай?', a: 'I', o: ['Id', 'I', 'Io', 'In'] },
        { q: 'Иод буының түсі қандай?', a: 'Күлгін', o: ['Жасыл', 'Көк', 'Күлгін', 'Қызыл'] },
        { q: 'Иод адамның қай мүшесі үшін маңызды?', a: 'Қалқанша безі', o: ['Жүрек', 'Бауыр', 'Қалқанша безі', 'Өкпе'] },
        { q: 'Иод крахмалмен әрекеттескенде қандай түске боялады?', a: 'Көк', o: ['Қызыл', 'Көк', 'Сары', 'Қара'] }
      ]
    }
  },
  xenon: {
    symbol: 'Xe',
    number: 54,
    mass: '131.29',
    group: { en: 'Noble Gas', ru: 'Благородный газ', kk: 'Инертті газ' },
    en: {
      title: 'Xenon',
      desc: 'A heavy noble gas used in powerful lamps and ion engines for space travel.',
      fact: 'Xenon was the first noble gas ever synthesized into a chemical compound.',
      details: '<b>Basic Facts</b><br>• Symbol: Xe • Number: 54 • Mass: 131.29<br>• Noble Gas, Period 5, Group 18<br><br><b>Atomic Structure</b><br>• 54 protons, 77 neutrons<br>• Config: [Kr] 4d¹⁰ 5s² 5p⁶<br><br><b>Properties</b><br>• Colorless, heavy gas<br>• Blue-purple glow in discharge<br>• Most reactive noble gas<br><br><b>Applications</b><br>• Xenon flash lamps<br>• Ion thrusters (spacecraft)<br>• Medical anesthesia',
      ai_simple: 'Xenon (Xe) is element 54, a heavy noble gas with high technological value.',
      ai_detailed: 'Xenon is used in light-emitting devices and for general anesthesia. It is significantly denser than air. It is also the propellant in high-efficiency ion engines.',
      study: [
        'Atomic number: 54',
        'Chemical symbol: Xe',
        'Group: Noble Gas',
        'Atomic mass: 131.29',
        'Used in ion engines'
      ],
      questions: [
        { q: 'What is the atomic number of Xenon?', a: '54', o: ['53', '54', '55', '56'] },
        { q: 'What is the symbol for Xenon?', a: 'Xe', o: ['X', 'Xe', 'Xn', 'Ze'] },
        { q: 'Which color does xenon emit in a discharge?', a: 'Blue', o: ['Red', 'Yellow', 'Blue', 'Green'] },
        { q: 'Where is Xenon used in space technology?', a: 'Ion engines', o: ['Solar panels', 'Ion engines', 'Rocket wings', 'Astronaut food'] },
        { q: 'Xenon is which state of matter at RT?', a: 'Gas', o: ['Solid', 'Liquid', 'Gas', 'Plasma'] }
      ]
    },
    ru: {
      title: 'Ксенон',
      desc: 'Тяжелый благородный газ, используемый в мощных лампах и ионных двигателях.',
      fact: 'Ксенон — первый благородный газ, для которого получили химические соединения.',
      details: '<b>Основные факты</b><br>• Символ: Xe • Номер: 54 • Масса: 131.29<br>• Благородный газ, период 5, группа 18<br><br><b>Атомная структура</b><br>• 54 протона, 77 нейтронов<br>• Конфигурация: [Kr] 4d¹⁰ 5s² 5p⁶<br><br><b>Свойства</b><br>• Бесцветный тяжелый газ<br>• Голубоватое свечение в разряде<br>• Самый активный из благородных газов<br><br><b>Применение</b><br>• Фотовспышки и прожекторы<br>• Ионные двигатели (космос)<br>• Медицинская анестезия',
      ai_simple: 'Ксенон (Xe) — элемент №54, тяжелый благородный газ с высокой тех. ценностью.',
      ai_detailed: 'Ксенон используется в светоизлучающих устройствах и для общей анестезии. Он значительно плотнее воздуха. Также является рабочим телом в ионных двигателях.',
      study: [
        'Атомный номер: 54',
        'Химический символ: Xe',
        'Группа: Благородный газ',
        'Атомная масса: 131.29',
        'Используется в ионных двигателях'
      ],
      questions: [
        { q: 'Какой атомный номер у ксенона?', a: '54', o: ['53', '54', '55', '56'] },
        { q: 'Какой символ у ксенона?', a: 'Xe', o: ['X', 'Xe', 'Xn', 'Ze'] },
        { q: 'Каким цветом светится ксенон в разряде?', a: 'Голубым', o: ['Красным', 'Желтым', 'Голубым', 'Зеленым'] },
        { q: 'Где ксенон используется в космосе?', a: 'Ионные двигатели', o: ['Солнечные батареи', 'Ионные двигатели', 'Крылья ракет', 'Еда астронавтов'] },
        { q: 'В каком состоянии находится ксенон при комн. темп.?', a: 'Газ', o: ['Твердое', 'Жидкое', 'Газ', 'Плазма'] }
      ]
    },
    kk: {
      title: 'Ксенон',
      desc: 'Қуатты шамдар мен ғарышқа арналған иондық қозғалтқыштарда қолданылатын ауыр инертті газ.',
      fact: 'Ксенон — химиялық қосылыстар алынған алғашқы инертті газ.',
      details: '<b>Негізгі фактілер</b><br>• Таңбасы: Xe • Нөмірі: 54 • Массасы: 131.29<br>• Инертті газ, 5-период, 18-топ<br><br><b>Атомдық құрылымы</b><br>• 54 протон, 77 нейтрон<br>• Конфиг: [Kr] 4d¹⁰ 5s² 5p⁶<br><br><b>Қасиеттері</b><br>• Түссіз, ауыр газ<br>• Разрядта көгілдір жарық шығарады<br>• Ең белсенді инертті газ<br><br><b>Қолданылуы</b><br>• Ксенон шамдары мен жарқылдар<br>• Иондық қозғалтқыштар (ғарыш)<br>• Медициналық анестезия',
      ai_simple: 'Ксенон (Xe) — №54 элемент, жоғары технологиялық маңызы бар ауыр инертті газ.',
      ai_detailed: 'Ксенон жарық шығаратын құрылғыларда және жалпы анестезия үшін қолданылады. Ол ауадан әлдеқайда тығыз. Сондай-ақ жоғары тиімді иондық қозғалтқыштарда қолданылады.',
      study: [
        'Атомдық нөмірі: 54',
        'Химиялық таңбасы: Xe',
        'Тобы: Инертті газдар',
        'Атомдық массасы: 131.29',
        'Иондық қозғалтқыштарда қолданылады'
      ],
      questions: [
        { q: 'Ксенонның атомдық нөмірі қандай?', a: '54', o: ['53', '54', '55', '56'] },
        { q: 'Ксенонның таңбасы қандай?', a: 'Xe', o: ['X', 'Xe', 'Xn', 'Ze'] },
        { q: 'Разрядта ксенон қандай түспен жарқырайды?', a: 'Көгілдір', o: ['Қызыл', 'Сары', 'Көгілдір', 'Жасыл'] },
        { q: 'Ксенон ғарыш технологиясында қайда қолданылады?', a: 'Иондық қозғалтқыштар', o: ['Күн панельдері', 'Иондық қозғалтқыштар', 'Ракета қанаттары', 'Ғарышкер тағамы'] },
        { q: 'Бөлме темп-да ксенон қандай күйде болады?', a: 'Газ', o: ['Қатты', 'Сұйық', 'Газ', 'Плазма'] }
      ]
    }
  },
  cesium: {
    symbol: 'Cs',
    number: 55,
    mass: '132.91',
    group: { en: 'Alkali Metal', ru: 'Щелочной металл', kk: 'Сілтілік металл' },
    en: {
      title: 'Cesium',
      desc: 'The most reactive metal, used to define the international standard of the second.',
      fact: 'Cesium melts at just 28.4°C, meaning it can melt in your hand (inside a vial).',
      details: '<b>Basic Facts</b><br>• Symbol: Cs • Number: 55 • Mass: 132.91<br>• Alkali Metal, Period 6, Group 1<br><br><b>Atomic Structure</b><br>• 55 protons, 78 neutrons<br>• Config: [Xe] 6s¹<br><br><b>Properties</b><br>• Golden-silvery soft metal<br>• Extremely reactive (explodes in water)<br>• Low melting point<br><br><b>Applications</b><br>• Atomic clocks (time standard)<br>• Drilling fluids<br>• Vacuum tubes',
      ai_simple: 'Cesium (Cs) is element 55, known for being the most electropositive and reactive metal.',
      ai_detailed: 'Cesium is vital for high-precision timekeeping. An atomic clock based on Cesium loses only one second every 100 million years.',
      study: [
        'Atomic number: 55',
        'Chemical symbol: Cs',
        'Group: Alkali Metal',
        'Atomic mass: 132.91',
        'Defines the second'
      ],
      questions: [
        { q: 'What is the atomic number of Cesium?', a: '55', o: ['54', '55', '56', '57'] },
        { q: 'What is the symbol for Cesium?', a: 'Cs', o: ['Ce', 'Cs', 'Ci', 'Cm'] },
        { q: 'Cesium is used in which type of clocks?', a: 'Atomic', o: ['Digital', 'Mechanical', 'Atomic', 'Quartz'] },
        { q: 'What happens when Cesium touches water?', a: 'Explodes', o: ['Melts', 'Sinks', 'Explodes', 'Nothing'] },
        { q: 'What is the color of Cesium metal?', a: 'Golden-silvery', o: ['Blue', 'Red', 'Golden-silvery', 'Black'] }
      ]
    },
    ru: {
      title: 'Цезий',
      desc: 'Самый реакционноспособный металл, используемый для определения эталона секунды.',
      fact: 'Цезий плавится при 28.4°C — он может расплавиться прямо в руках (в ампуле).',
      details: '<b>Основные факты</b><br>• Символ: Cs • Номер: 55 • Масса: 132.91<br>• Щелочной металл, период 6, группа 1<br><br><b>Атомная структура</b><br>• 55 протонов, 78 нейтронов<br>• Конфигурация: [Xe] 6s¹<br><br><b>Свойства</b><br>• Золотисто-серебристый мягкий металл<br>• Крайне активен (взрывается в воде)<br>• Низкая температура плавления<br><br><b>Применение</b><br>• Атомные часы (эталон времени)<br>• Буровые растворы<br>• Вакуумная техника',
      ai_simple: 'Цезий (Cs) — элемент №55, самый электроположительный и реактивный металл.',
      ai_detailed: 'Цезий важен для высокоточного измерения времени. Атомные часы на цезии теряют лишь одну секунду за 100 миллионов лет.',
      study: [
        'Атомный номер: 55',
        'Химический символ: Cs',
        'Группа: Щелочные металлы',
        'Атомная масса: 132.91',
        'Определяет секунду'
      ],
      questions: [
        { q: 'Какой атомный номер у цезия?', a: '55', o: ['54', '55', '56', '57'] },
        { q: 'Какой символ у цезия?', a: 'Cs', o: ['Ce', 'Cs', 'Ci', 'Cm'] },
        { q: 'В каких часах используется цезий?', a: 'Атомные', o: ['Цифровые', 'Механические', 'Атомные', 'Кварцевые'] },
        { q: 'Что происходит при контакте цезия с водой?', a: 'Взрыв', o: ['Плавление', 'Утонет', 'Взрыв', 'Ничего'] },
        { q: 'Какого цвета металл цезий?', a: 'Золотисто-серебристый', o: ['Синий', 'Красный', 'Золотисто-серебристый', 'Черный'] }
      ]
    },
    kk: {
      title: 'Цезий',
      desc: 'Секунд эталонын анықтау үшін қолданылатын ең белсенді металл.',
      fact: 'Цезий 28.4°C-та балқиды — ол ампулада қолыңызда балқып кетуі мүмкін.',
      details: '<b>Негізгі фактілер</b><br>• Таңбасы: Cs • Нөмірі: 55 • Массасы: 132.91<br>• Сілтілік металл, 6-период, 1-топ<br><br><b>Атомдық құрылымы</b><br>• 55 протон, 78 нейтрон<br>• Конфиг: [Xe] 6s¹<br><br><b>Қасиеттері</b><br>• Алтын-күміс түсті жұмсақ металл<br>• Өте белсенді (суда жарылады)<br>• Төмен балқу температурасы<br><br><b>Қолданылуы</b><br>• Атомдық сағаттар (уақыт эталоны)<br>• Бұрғылау ерітінділері<br>• Вакуумдық техника',
      ai_simple: 'Цезий (Cs) — №55 элемент, ең электропозитивті және белсенді металл ретінде танымал.',
      ai_detailed: 'Цезий уақытты жоғары дәлдікпен өлшеу үшін өте маңызды. Цезий негізіндегі атомдық сағат 100 миллион жылда бір секунд қана қателеседі.',
      study: [
        'Атомдық нөмірі: 55',
        'Химиялық таңбасы: Cs',
        'Тобы: Сілтілік металдар',
        'Атомдық массасы: 132.91',
        'Секундты анықтайды'
      ],
      questions: [
        { q: 'Цезийдің атомдық нөмірі қандай?', a: '55', o: ['54', '55', '56', '57'] },
        { q: 'Цезийдің таңбасы қандай?', a: 'Cs', o: ['Ce', 'Cs', 'Ci', 'Cm'] },
        { q: 'Цезий қандай сағаттарда қолданылады?', a: 'Атомдық', o: ['Сандық', 'Механикалық', 'Атомдық', 'Кварцтық'] },
        { q: 'Цезий суға тигенде не болады?', a: 'Жарылады', o: ['Балқиды', 'Батады', 'Жарылады', 'Ештеңе'] },
        { q: 'Цезий металының түсі қандай?', a: 'Алтын-күміс', o: ['Көк', 'Қызыл', 'Алтын-күміс', 'Қара'] }
      ]
    }
  },
  barium: {
    symbol: 'Ba',
    number: 56,
    mass: '137.33',
    group: { en: 'Alkaline Earth', ru: 'Щелочноземельный металл', kk: 'Сілтілік жер металл' },
    en: {
      title: 'Barium',
      desc: 'A dense alkaline earth metal used in medical imaging and oil drilling.',
      fact: 'Barium compounds are used to produce brilliant green colors in fireworks.',
      details: '<b>Basic Facts</b><br>• Symbol: Ba • Number: 56 • Mass: 137.33<br>• Alkaline Earth, Period 6, Group 2<br><br><b>Atomic Structure</b><br>• 56 protons, 81 neutrons<br>• Config: [Xe] 6s²<br><br><b>Properties</b><br>• Silvery-white metal<br>• Oxidizes rapidly in air<br>• Toxic but BaSO₄ is safe for medical use<br><br><b>Applications</b><br>• X-ray contrast (Barium meal)<br>• Drilling mud (Barite)<br>• Green fireworks',
      ai_simple: 'Barium (Ba) is element 56, essential for medical diagnostics and the oil industry.',
      ai_detailed: 'Barium is a soft, silvery-white metal. Its sulfate is widely used in medical X-rays of the digestive system because it is opaque to X-rays and insoluble.',
      study: [
        'Atomic number: 56',
        'Chemical symbol: Ba',
        'Group: Alkaline Earth',
        'Atomic mass: 137.33',
        'Used in X-ray imaging'
      ],
      questions: [
        { q: 'What is the atomic number of Barium?', a: '56', o: ['55', '56', '57', '58'] },
        { q: 'What is the symbol for Barium?', a: 'Ba', o: ['B', 'Ba', 'Br', 'Be'] },
        { q: 'Which color does Barium give to fireworks?', a: 'Green', o: ['Red', 'Blue', 'Green', 'Yellow'] },
        { q: 'Where is Barium sulfate used in medicine?', a: 'X-ray contrast', o: ['Painkiller', 'X-ray contrast', 'Antibiotic', 'Vitamin'] },
        { q: 'Barium belongs to which group?', a: 'Alkaline Earth', o: ['Alkali Metal', 'Alkaline Earth', 'Halogens', 'Noble Gas'] }
      ]
    },
    ru: {
      title: 'Барий',
      desc: 'Плотный щелочноземельный металл, используемый в медицине и нефтедобыче.',
      fact: 'Соединения бария используются для получения ярко-зеленого цвета в фейерверках.',
      details: '<b>Основные факты</b><br>• Символ: Ba • Номер: 56 • Масса: 137.33<br>• Щелочноземельный металл, период 6, группа 2<br><br><b>Атомная структура</b><br>• 56 протонов, 81 нейтрон<br>• Конфигурация: [Xe] 6s²<br><br><b>Свойства</b><br>• Серебристо-белый металл<br>• Быстро окисляется на воздухе<br>• Токсичен, но BaSO₄ безопасен для медицины<br><br><b>Применение</b><br>• Рентгеноконтраст (бариевая каша)<br>• Буровые растворы (барит)<br>• Зеленые огни салютов',
      ai_simple: 'Барий (Ba) — элемент №56, важен для медицинской диагностики и нефтяной промышленности.',
      ai_detailed: 'Барий — мягкий серебристо-белый металл. Его сульфат широко используется при рентгене ЖКТ, так как он непрозрачен для лучей и не растворяется в организме.',
      study: [
        'Атомный номер: 56',
        'Химический символ: Ba',
        'Группа: Щелочноземельные',
        'Атомная масса: 137.33',
        'Рентгеноконтрастное в-во'
      ],
      questions: [
        { q: 'Какой атомный номер у бария?', a: '56', o: ['55', '56', '57', '58'] },
        { q: 'Какой символ у бария?', a: 'Ba', o: ['B', 'Ba', 'Br', 'Be'] },
        { q: 'Какой цвет барий придает фейерверкам?', a: 'Зеленый', o: ['Красный', 'Синий', 'Зеленый', 'Желтый'] },
        { q: 'Где в медицине используется сульфат бария?', a: 'Рентген ЖКТ', o: ['Обезболивающее', 'Рентген ЖКТ', 'Антибиотик', 'Витамин'] },
        { q: 'К какой группе относится барий?', a: 'Щелочноземельные', o: ['Щелочные', 'Щелочноземельные', 'Галогены', 'Инертные'] }
      ]
    },
    kk: {
      title: 'Барий',
      desc: 'Медициналық визуализация мен мұнай бұрғылауда қолданылатын тығыз сілтілік жер металл.',
      fact: 'Барий қосылыстары отшашуларда ашық жасыл түстерді алу үшін қолданылады.',
      details: '<b>Негізгі фактілер</b><br>• Таңбасы: Ba • Нөмірі: 56 • Массасы: 137.33<br>• Сілтілік жер металл, 6-период, 2-топ<br><br><b>Атомдық құрылымы</b><br>• 56 протон, 81 нейтрон<br>• Конфиг: [Xe] 6s²<br><br><b>Қасиеттері</b><br>• Күміс-ақ металл<br>• Ауада тез тотығады<br>• Улы, бірақ BaSO₄ медицинада қауіпсіз<br><br><b>Қолданылуы</b><br>• Рентгендік контраст (барий ботқасы)<br>• Бұрғылау ерітіндісі (барит)<br>• Жасыл отшашулар',
      ai_simple: 'Барий (Ba) — №56 элемент, медициналық диагностика мен мұнай өнеркәсібі үшін қажет.',
      ai_detailed: 'Барий — жұмсақ күміс-ақ металл. Оның сульфаты ас қорыту жүйесінің рентгендік зерттеулерінде кеңінен қолданылады, өйткені ол рентген сәулелерін өткізбейді және ерімейді.',
      study: [
        'Атомдық нөмірі: 56',
        'Химиялық таңбасы: Ba',
        'Тобы: Сілтілік жер металдар',
        'Атомдық массасы: 137.33',
        'Рентгенде қолданылады'
      ],
      questions: [
        { q: 'Барийдің атомдық нөмірі қандай?', a: '56', o: ['55', '56', '57', '58'] },
        { q: 'Барийдің таңбасы қандай?', a: 'Ba', o: ['B', 'Ba', 'Br', 'Be'] },
        { q: 'Отшашуларға барий қандай түс береді?', a: 'Жасыл', o: ['Қызыл', 'Көк', 'Жасыл', 'Сары'] },
        { q: 'Медицинада барий сульфаты қайда қолданылады?', a: 'Рентгендік контраст', o: ['Ауыруды басатын', 'Рентгендік контраст', 'Антибиотик', 'Витамин'] },
        { q: 'Барий қай топқа жатады?', a: 'Сілтілік жер металдар', o: ['Сілтілік металдар', 'Сілтілік жер металдар', 'Галогендер', 'Инертті газдар'] }
      ]
    }
  },
  lanthanum: {
    symbol: 'La',
    number: 57,
    mass: '138.91',
    group: { en: 'Lanthanide', ru: 'Лантаноид', kk: 'Лантаноидтар' },
    en: {
      title: 'Lanthanum',
      desc: 'The prototype of the lanthanide series, used in camera lenses and hybrid batteries.',
      fact: 'The name "Lanthanum" comes from the Greek word "lanthanein", meaning "to lie hidden".',
      details: '<b>Basic Facts</b><br>• Symbol: La • Number: 57 • Mass: 138.91<br>• Lanthanide, Period 6, Group 3<br><br><b>Atomic Structure</b><br>• 57 protons, 82 neutrons<br>• Config: [Xe] 5d¹ 6s²<br><br><b>Properties</b><br>• Silvery-white, very soft<br>• Malleable and ductile<br>• High refractive index in glass<br><br><b>Applications</b><br>• High-end camera lenses<br>• NiMH battery electrodes<br>• Petroleum cracking catalysts',
      ai_simple: 'Lanthanum (La) is element 57, the first of the rare-earth elements called lanthanides.',
      ai_detailed: 'Lanthanum oxide is used in optical glasses to improve refractive index and lower dispersion. It is also a key component in nickel-metal hydride batteries.',
      study: [
        'Atomic number: 57',
        'Chemical symbol: La',
        'Group: Lanthanide',
        'Atomic mass: 138.91',
        'High-index glass'
      ],
      questions: [
        { q: 'What is the atomic number of Lanthanum?', a: '57', o: ['56', '57', '58', '59'] },
        { q: 'What is the symbol for Lanthanum?', a: 'La', o: ['L', 'La', 'Ln', 'Lt'] },
        { q: 'Lanthanum is primarily used in which batteries?', a: 'NiMH', o: ['Li-ion', 'NiMH', 'Lead-acid', 'Alkaline'] },
        { q: 'Where is Lanthanum oxide used?', a: 'Camera lenses', o: ['Tires', 'Food', 'Camera lenses', 'Clothing'] },
        { q: 'What does the name Lanthanum mean?', a: 'Hidden', o: ['Bright', 'Hidden', 'Rare', 'Strong'] }
      ]
    },
    ru: {
      title: 'Лантан',
      desc: 'Первый элемент группы лантаноидов, используемый в линзах камер и аккумуляторах.',
      fact: 'Название «лантан» происходит от греческого слова, означающего «скрываться».',
      details: '<b>Основные факты</b><br>• Символ: La • Номер: 57 • Масса: 138.91<br>• Лантаноид, период 6, группа 3<br><br><b>Атомная структура</b><br>• 57 протонов, 82 нейтрона<br>• Конфигурация: [Xe] 5d¹ 6s²<br><br><b>Свойства</b><br>• Серебристо-белый, очень мягкий<br>• Ковкий и пластичный<br>• Высокий показатель преломления в стекле<br><br><b>Применение</b><br>• Высококачественные линзы<br>• Никель-металл-гидридные АКБ<br>• Катализаторы нефтепереработки',
      ai_simple: 'Лантан (La) — элемент №57, первый из редкоземельных металлов-лантаноидов.',
      ai_detailed: 'Оксид лантана используется в оптических стеклах для улучшения преломления. Также он является ключевым компонентом в NiMH аккумуляторах.',
      study: [
        'Атомный номер: 57',
        'Химический символ: La',
        'Группа: Лантаноиды',
        'Атомная масса: 138.91',
        'Линзы и оптика'
      ],
      questions: [
        { q: 'Какой атомный номер у лантана?', a: '57', o: ['56', '57', '58', '59'] },
        { q: 'Какой символ у лантана?', a: 'La', o: ['L', 'La', 'Ln', 'Lt'] },
        { q: 'В каких аккумуляторах используется лантан?', a: 'NiMH', o: ['Li-ion', 'NiMH', 'Свинцовые', 'Щелочные'] },
        { q: 'Где используется оксид лантана?', a: 'Линзы камер', o: ['Шины', 'Еда', 'Линзы камер', 'Одежда'] },
        { q: 'Что означает название лантан?', a: 'Скрытый', o: ['Яркий', 'Скрытый', 'Редкий', 'Сильный'] }
      ]
    },
    kk: {
      title: 'Лантан',
      desc: 'Камера линзаларында және гибридті аккумуляторларда қолданылатын лантаноидтар сериясының алғашқы элементі.',
      fact: '«Лантан» атауы гректің «жасырыну» деген мағынаны білдіретін сөзінен шыққан.',
      details: '<b>Негізгі фактілер</b><br>• Таңбасы: La • Нөмірі: 57 • Массасы: 138.91<br>• Лантаноид, 6-период, 3-топ<br><br><b>Атомдық құрылымы</b><br>• 57 протон, 82 нейтрон<br>• Конфиг: [Xe] 5d¹ 6s²<br><br><b>Қасиеттері</b><br>• Күміс-ақ, өте жұмсақ<br>• Созылмалы және иілімді<br>• Шыныдағы жоғары сыну көрсеткіші<br><br><b>Қолданылуы</b><br>• Жоғары сапалы камера линзалары<br>• NiMH батарея электродтары<br>• Мұнай крекинг катализаторлары',
      ai_simple: 'Лантан (La) — №57 элемент, лантаноидтар деп аталатын сирек кездесетін жер элементтерінің алғашқысы.',
      ai_detailed: 'Лантан оксиді сыну көрсеткішін жақсарту және дисперсияны азайту үшін оптикалық шыныларда қолданылады. Ол сондай-ақ никель-металл гидридті батареялардың негізгі компоненті болып табылады.',
      study: [
        'Атомтық нөмірі: 57',
        'Химиялық таңбасы: La',
        'Тобы: Лантаноидтар',
        'Атомдық массасы: 138.91',
        'Жоғары сынулы шыны'
      ],
      questions: [
        { q: 'Лантанның атомдық нөмірі қандай?', a: '57', o: ['56', '57', '58', '59'] },
        { q: 'Лантанның таңбасы қандай?', a: 'La', o: ['L', 'La', 'Ln', 'Lt'] },
        { q: 'Лантан негізінен қандай батареяларда қолданылады?', a: 'NiMH', o: ['Li-ion', 'NiMH', 'Қорғасын-қышқылды', 'Сілтілі'] },
        { q: 'Лантан оксиді қайда қолданылады?', a: 'Камера линзалары', o: ['Шиналар', 'Тамақ', 'Камера линзалары', 'Киім'] },
        { q: 'Лантан атауы нені білдіреді?', a: 'Жасырын', o: ['Жарық', 'Жасырын', 'Сирек', 'Күшті'] }
      ]
    }
  },
  cerium: {
    symbol: 'Ce',
    number: 58,
    mass: '140.12',
    group: { en: 'Lanthanide', ru: 'Лантаноид', kk: 'Лантаноидтар' },
    en: {
      title: 'Cerium',
      desc: 'The most abundant rare-earth metal, famous for creating sparks in lighters.',
      fact: 'Cerium is so reactive it will spontaneously ignite when scratched (pyrophoricity).',
      details: '<b>Basic Facts</b><br>• Symbol: Ce • Number: 58 • Mass: 140.12<br>• Lanthanide, Period 6<br><br><b>Atomic Structure</b><br>• 58 protons, 82 neutrons<br>• Config: [Xe] 4f¹ 5d¹ 6s²<br><br><b>Properties</b><br>• Iron-grey ductile metal<br>• Pyrophoric (sparks easily)<br>• Most common rare-earth element<br><br><b>Applications</b><br>• Lighter flints<br>• Glass polishing (CeO₂)<br>• Self-cleaning ovens',
      ai_simple: 'Cerium (Ce) is element 58, the most common of the rare-earth metals.',
      ai_detailed: 'Cerium is used in ferrocerium flints for lighters because it produces sparks when struck. Its oxide is the standard material for polishing precision optics and glass.',
      study: [
        'Atomic number: 58',
        'Chemical symbol: Ce',
        'Group: Lanthanide',
        'Atomic mass: 140.12',
        'Used in lighters'
      ],
      questions: [
        { q: 'What is the atomic number of Cerium?', a: '58', o: ['57', '58', '59', '60'] },
        { q: 'What is the symbol for Cerium?', a: 'Ce', o: ['C', 'Ce', 'Cr', 'Cm'] },
        { q: 'Cerium is used in what common pocket item?', a: 'Lighters', o: ['Pens', 'Keys', 'Lighters', 'Coins'] },
        { q: 'Cerium oxide is primarily used for?', a: 'Polishing glass', o: ['Polishing glass', 'Making fuel', 'Food coloring', 'Medicine'] },
        { q: 'Cerium is the most common of which group?', a: 'Rare-earth', o: ['Rare-earth', 'Noble gases', 'Halogens', 'Alkali metals'] }
      ]
    },
    ru: {
      title: 'Церий',
      desc: 'Самый распространенный редкоземельный металл, дающий искры в зажигалках.',
      fact: 'Церий пирофорен — он может самовоспламениться при трении или царапании.',
      details: '<b>Основные факты</b><br>• Символ: Ce • Номер: 58 • Масса: 140.12<br>• Лантаноид, период 6<br><br><b>Атомная структура</b><br>• 58 протонов, 82 нейтрона<br>• Конфигурация: [Xe] 4f¹ 5d¹ 6s²<br><br><b>Свойства</b><br>• Железо-серый пластичный металл<br>• Пирофорен (дает искры)<br>• Самый частый редкоземельный элемент<br><br><b>Применение</b><br>• Кремни для зажигалок<br>• Полировка стекла (CeO₂)<br>• Самоочищающиеся духовки',
      ai_simple: 'Церий (Ce) — элемент №58, самый распространенный из редкоземельных металлов.',
      ai_detailed: 'Церий используется в кремнях для зажигалок, так как он дает искры при ударе. Его оксид — стандартный материал для полировки оптики и стекла.',
      study: [
        'Атомный номер: 58',
        'Химический символ: Ce',
        'Группа: Лантаноиды',
        'Атомная масса: 140.12',
        'Кремни для зажигалок'
      ],
      questions: [
        { q: 'Какой атомный номер у церия?', a: '58', o: ['57', '58', '59', '60'] },
        { q: 'Какой символ у церия?', a: 'Ce', o: ['C', 'Ce', 'Cr', 'Cm'] },
        { q: 'В каком карманном предмете используется церий?', a: 'Зажигалки', o: ['Ручки', 'Ключи', 'Зажигалки', 'Монеты'] },
        { q: 'Для чего в основном используется оксид церия?', a: 'Полировка стекла', o: ['Полировка стекла', 'Топливо', 'Пищевой краситель', 'Медицина'] },
        { q: 'Церий — самый частый из какой группы?', a: 'Редкоземельные', o: ['Редкоземельные', 'Инертные', 'Галогены', 'Щелочные'] }
      ]
    },
    kk: {
      title: 'Церий',
      desc: 'Оттықтарда ұшқын шығарумен танымал ең көп таралған сирек жер металы.',
      fact: 'Церий соншалықты белсенді, оны сызып қалғанда өздігінен тұтанып кетеді (пирофорлық).',
      details: '<b>Негізгі фактілер</b><br>• Таңбасы: Ce • Нөмірі: 58 • Массасы: 140.12<br>• Лантаноид, 6-период<br><br><b>Атомдық құрылымы</b><br>• 58 протон, 82 нейтрон<br>• Конфиг: [Xe] 4f¹ 5d¹ 6s²<br><br><b>Қасиеттері</b><br>• Темір-сұр түсті иілімді металл<br>• Пирофорлы (оңай ұшқын шығарады)<br>• Ең көп таралған сирек жер элементі<br><br><b>Қолданылуы</b><br>• Оттық кремнийлері<br>• Шыны жылтырату (CeO₂)<br>• Өздігінен тазаланатын пештер',
      ai_simple: 'Церий (Ce) — №58 элемент, сирек жер металдарының ішіндегі ең көп тарағаны.',
      ai_detailed: 'Церий оттықтарға арналған ферроцерий кремнийлерінде қолданылады, өйткені ол соққанда ұшқын шығарады. Оның оксиді дәл оптика мен шыныны жылтыратуға арналған стандартты материал болып табылады.',
      study: [
        'Атомдық нөмірі: 58',
        'Химиялық таңбасы: Ce',
        'Тобы: Лантаноидтар',
        'Атомтық массасы: 140.12',
        'Оттықтарда қолданылады'
      ],
      questions: [
        { q: 'Церийдің атомдық нөмірі қандай?', a: '58', o: ['57', '58', '59', '60'] },
        { q: 'Церийдің таңбасы қандай?', a: 'Ce', o: ['C', 'Ce', 'Cr', 'Cm'] },
        { q: 'Церий қандай қарапайым қалта затында қолданылады?', a: 'Оттықтар', o: ['Қаламдар', 'Кілттер', 'Оттықтар', 'Тиындар'] },
        { q: 'Церий оксиді негізінен не үшін қолданылады?', a: 'Шыны жылтырату', o: ['Шыны жылтырату', 'Жанармай жасау', 'Тағамдық бояу', 'Медицина'] },
        { q: 'Церий қай топтың ең көп таралған мүшесі?', a: 'Сирек жер', o: ['Сирек жер', 'Инертті газдар', 'Галогендер', 'Сілтілік металдар'] }
      ]
    }
  },
  praseodymium: {
    symbol: 'Pr',
    number: 59,
    mass: '140.91',
    group: { en: 'Lanthanide', ru: 'Лантаноид', kk: 'Лантаноидтар' },
    en: {
      title: 'Praseodymium',
      desc: 'A soft silvery metal used in high-strength magnets and welding goggles.',
      fact: 'Its name means "green twin", referring to the green color of its salts.',
      details: '<b>Basic Facts</b><br>• Symbol: Pr • Number: 59 • Mass: 140.91<br>• Lanthanide, Period 6<br><br><b>Atomic Structure</b><br>• 59 protons, 82 neutrons<br>• Config: [Xe] 4f³ 6s²<br><br><b>Properties</b><br>• Soft silvery metal<br>• Develops green oxide coat<br>• Magnetic properties<br><br><b>Applications</b><br>• Didymium glass (welding)<br>• High-power magnets (NdPrFeB)<br>• Yellow pigments in ceramics',
      ai_simple: 'Praseodymium (Pr) is element 59, valued for its magnetic and optical properties.',
      ai_detailed: 'Praseodymium is always found with neodymium. It is used in aircraft engines and in didymium glass, which filters out the intense yellow glare of sodium flames.',
      study: [
        'Atomic number: 59',
        'Chemical symbol: Pr',
        'Group: Lanthanide',
        'Atomic mass: 140.91',
        'Green salts'
      ],
      questions: [
        { q: 'What is the atomic number of Praseodymium?', a: '59', o: ['58', '59', '60', '61'] },
        { q: 'What is the symbol for Praseodymium?', a: 'Pr', o: ['P', 'Pa', 'Pr', 'Pm'] },
        { q: 'What does the name Praseodymium mean?', a: 'Green twin', o: ['Bright sun', 'Green twin', 'Hidden one', 'Strong iron'] },
        { q: 'Praseodymium is used in which safety gear?', a: 'Welding goggles', o: ['Gloves', 'Welding goggles', 'Earplugs', 'Boots'] },
        { q: 'What color are praseodymium salts?', a: 'Green', o: ['Blue', 'Red', 'Green', 'Yellow'] }
      ]
    },
    ru: {
      title: 'Празеодим',
      desc: 'Мягкий серебристый металл, используемый в мощных магнитах и очках для сварки.',
      fact: 'Название означает «зеленый близнец» из-за цвета солей и соседства с неодимом.',
      details: '<b>Основные факты</b><br>• Символ: Pr • Номер: 59 • Масса: 140.91<br>• Лантаноид, период 6<br><br><b>Атомная структура</b><br>• 59 протонов, 82 нейтрона<br>• Конфигурация: [Xe] 4f³ 6s²<br><br><b>Свойства</b><br>• Мягкий серебристый металл<br>• Покрывается зеленым оксидом<br>• Магнитные свойства<br><br><b>Применение</b><br>• Дидимовое стекло (сварка)<br>• Мощные магниты<br>• Желтые пигменты для керамики',
      ai_simple: 'Празеодим (Pr) — элемент №59, ценится за магнитные и оптические свойства.',
      ai_detailed: 'Празеодим всегда встречается вместе с неодимом. Используется в авиадвигателях и в дидимовом стекле, которое отфильтровывает яркое желтое пламя натрия.',
      study: [
        'Атомный номер: 59',
        'Химический символ: Pr',
        'Группа: Лантаноиды',
        'Атомная масса: 140.91',
        'Зеленые соли'
      ],
      questions: [
        { q: 'Какой атомный номер у празеодима?', a: '59', o: ['58', '59', '60', '61'] },
        { q: 'Какой символ у празеодима?', a: 'Pr', o: ['P', 'Pa', 'Pr', 'Pm'] },
        { q: 'Что означает название празеодим?', a: 'Зеленый близнец', o: ['Солнце', 'Зеленый близнец', 'Скрытый', 'Сильный'] },
        { q: 'В каком защитном снаряжении используется празеодим?', a: 'Очки для сварки', o: ['Перчатки', 'Очки для сварки', 'Беруши', 'Сапоги'] },
        { q: 'Какого цвета соли празеодима?', a: 'Зеленые', o: ['Синие', 'Красные', 'Зеленые', 'Желтые'] }
      ]
    },
    kk: {
      title: 'Празеодим',
      desc: 'Жоғары беріктікке ие магниттер мен дәнекерлеу көзілдіріктерінде қолданылатын жұмсақ күміс металл.',
      fact: 'Оның атауы тұздарының жасыл түсіне байланысты «жасыл егіз» дегенді білдіреді.',
      details: '<b>Негізгі фактілер</b><br>• Таңбасы: Pr • Нөмірі: 59 • Массасы: 140.91<br>• Лантаноид, 6-период<br><br><b>Атомдық құрылымы</b><br>• 59 протон, 82 нейтрон<br>• Конфиг: [Xe] 4f³ 6s²<br><br><b>Қасиеттері</b><br>• Жұмсақ күміс металл<br>• Жасыл оксид қабатымен жабылады<br>• Магниттік қасиеттері<br><br><b>Қолданылуы</b><br>• Дидимий шыны (дәнекерлеу)<br>• Жоғары қуатты магниттер (NdPrFeB)<br>• Керамикадағы сары пигменттер',
      ai_simple: 'Празеодим (Pr) — №59 элемент, өзінің магниттік және оптикалық қасиеттерімен бағаланады.',
      ai_detailed: 'Празеодим әрқашан неодиммен бірге кездеседі. Ол ұшақ қозғалтқыштарында және натрий жалынының қарқынды сары жарқылын сүзетін дидимий шынысында қолданылады.',
      study: [
        'Атомтық нөмірі: 59',
        'Химиялық таңбасы: Pr',
        'Тобы: Лантаноидтар',
        'Атомдық массасы: 140.91',
        'Жасыл тұздар'
      ],
      questions: [
        { q: 'Празеодимнің атомдық нөмірі қандай?', a: '59', o: ['58', '59', '60', '61'] },
        { q: 'Празеодимнің таңбасы қандай?', a: 'Pr', o: ['P', 'Pa', 'Pr', 'Pm'] },
        { q: 'Празеодим атауы нені білдіреді?', a: 'Жасыл егіз', o: ['Жарқыраған күн', 'Жасыл егіз', 'Жасырын', 'Мықты темір'] },
        { q: 'Празеодим қай қорғаныс құралында қолданылады?', a: 'Дәнекерлеу көзілдірігі', o: ['Қолғап', 'Дәнекерлеу көзілдірігі', 'Құлаққап', 'Етік'] },
        { q: 'Празеодим тұздарының түсі қандай?', a: 'Жасыл', o: ['Көк', 'Қызыл', 'Жасыл', 'Сары'] }
      ]
    }
  },
  neodymium: {
    symbol: 'Nd',
    number: 60,
    mass: '144.24',
    group: { en: 'Lanthanide', ru: 'Лантаноид', kk: 'Лантаноидтар' },
    en: {
      title: 'Neodymium',
      desc: 'Used to make the strongest permanent magnets in the world.',
      fact: 'A neodymium magnet just the size of a coin can lift over 10 kg.',
      details: '<b>Basic Facts</b><br>• Symbol: Nd • Number: 60 • Mass: 144.24<br>• Lanthanide, Period 6<br><br><b>Atomic Structure</b><br>• 60 protons, 84 neutrons<br>• Config: [Xe] 4f⁴ 6s²<br><br><b>Properties</b><br>• Bright silvery metal<br>• Oxidizes quickly in air<br>• Highly magnetic in alloys<br><br><b>Applications</b><br>• Neodymium magnets (NdFeB)<br>• High-power lasers (Nd:YAG)<br>• Colored glass for ТВ and lamps',
      ai_simple: 'Neodymium (Nd) is element 60, famous for its incredible magnetic strength.',
      ai_detailed: 'Neodymium magnets are essential for smartphones, electric vehicles, and wind turbines. It is also used to make lasers for surgical and industrial applications.',
      study: [
        'Atomic number: 60',
        'Chemical symbol: Nd',
        'Group: Lanthanide',
        'Atomic mass: 144.24',
        'Strongest magnets'
      ],
      questions: [
        { q: 'What is the atomic number of Neodymium?', a: '60', o: ['59', '60', '61', '62'] },
        { q: 'What is the symbol for Neodymium?', a: 'Nd', o: ['N', 'Ne', 'Nd', 'No'] },
        { q: 'Neodymium is used to make which powerful items?', a: 'Magnets', o: ['Magnets', 'Tires', 'Food', 'Clothing'] },
        { q: 'Which color is neodymium metal?', a: 'Silvery', o: ['Gold', 'Silvery', 'Blue', 'Black'] },
        { q: 'Where are neodymium magnets commonly found?', a: 'Smartphones', o: ['Furniture', 'Smartphones', 'Paper', 'Shoes'] }
      ]
    },
    ru: {
      title: 'Неодим',
      desc: 'Используется для создания самых мощных постоянных магнитов в мире.',
      fact: 'Неодимовый магнит размером с монету может поднять груз весом более 10 кг.',
      details: '<b>Основные факты</b><br>• Символ: Nd • Номер: 60 • Масса: 144.24<br>• Лантаноид, период 6<br><br><b>Атомная структура</b><br>• 60 протонов, 84 нейтрона<br>• Конфигурация: [Xe] 4f⁴ 6s²<br><br><b>Свойства</b><br>• Яркий серебристый металл<br>• Быстро окисляется на воздухе<br>• Сильные магнитные свойства в сплавах<br><br><b>Применение</b><br>• Неодимовые магниты (NdFeB)<br>• Мощные лазеры (Nd:YAG)<br>• Цветное стекло для ТВ и ламп',
      ai_simple: 'Неодим (Nd) — элемент №60, знаменит своей невероятной магнитной силой.',
      ai_detailed: 'Неодимовые магниты необходимы для смартфонов, электромобилей и ветрогенераторов. Также используется для лазеров в хирургии и промышленности.',
      study: [
        'Атомный номер: 60',
        'Химический символ: Nd',
        'Группа: Лантаноиды',
        'Атомная масса: 144.24',
        'Самые мощные магниты'
      ],
      questions: [
        { q: 'Какой атомный номер у неодима?', a: '60', o: ['59', '60', '61', '62'] },
        { q: 'Какой символ у неодима?', a: 'Nd', o: ['N', 'Ne', 'Nd', 'No'] },
        { q: 'Для чего используются неодим в технике?', a: 'Магниты', o: ['Магниты', 'Шины', 'Еда', 'Одежда'] },
        { q: 'Какого цвета металл неодим?', a: 'Серебристый', o: ['Золотой', 'Серебристый', 'Синий', 'Черный'] },
        { q: 'Где часто встречаются неодимовые магниты?', a: 'Смартфоны', o: ['Мебель', 'Смартфоны', 'Бумага', 'Обувь'] }
      ]
    },
    kk: {
      title: 'Неодим',
      desc: 'Әлемдегі ең күшті тұрақты магниттерді жасау үшін қолданылады.',
      fact: 'Тиын көлеміндей неодим магниті 10 кг-нан асатын жүкті көтере алады.',
      details: '<b>Негізгі фактілер</b><br>• Таңбасы: Nd • Нөмірі: 60 • Массасы: 144.24<br>• Лантаноид, 6-период<br><br><b>Атомдық құрылымы</b><br>• 60 протон, 84 нейтрон<br>• Конфиг: [Xe] 4f⁴ 6s²<br><br><b>Қасиеттері</b><br>• Жарқын күміс металл<br>• Ауада тез тотығады<br>• Қорытпаларда жоғары магниттік қасиетке ие<br><br><b>Қолданылуы</b><br>• Неодим магниттері (NdFeB)<br>• Жоғары қуатты лазерлер (Nd:YAG)<br>• ТД мен шамдарға арналған түрлі-түсті шыны',
      ai_simple: 'Неодим (Nd) — №60 элемент, өзінің керемет магниттік күшімен танымал.',
      ai_detailed: 'Неодим магниттері смартфондар, электромобильдер мен жел турбиналары үшін өте маңызды. Ол сондай-ақ хирургиялық және өнеркәсіптік мақсаттағы лазерлерді жасау үшін қолданылады.',
      study: [
        'Атомтық нөмірі: 60',
        'Химиялық таңбасы: Nd',
        'Тобы: Лантаноидтар',
        'Атомдық массасы: 144.24',
        'Ең күшті магниттер'
      ],
      questions: [
        { q: 'Неодимнің атомдық нөмірі қандай?', a: '60', o: ['59', '60', '61', '62'] },
        { q: 'Неодимнің таңбасы қандай?', a: 'Nd', o: ['N', 'Ne', 'Nd', 'No'] },
        { q: 'Неодим қандай қуатты заттарды жасау үшін қолданылады?', a: 'Магниттер', o: ['Магниттер', 'Шиналар', 'Тамақ', 'Киім'] },
        { q: 'Неодим металының түсі қандай?', a: 'Күміс', o: ['Алтын', 'Күміс', 'Көк', 'Қара'] },
        { q: 'Неодим магниттері әдетте қайда кездеседі?', a: 'Смартфондар', o: ['Жиһаз', 'Смартфондар', 'Қағаз', 'Аяқ киім'] }
      ]
    }
  },
  promethium: {
    symbol: 'Pm',
    number: 61,
    mass: '[145]',
    group: { en: 'Lanthanide', ru: 'Лантаноид', kk: 'Лантаноидтар' },
    en: {
      title: 'Promethium',
      desc: 'A radioactive lanthanide that glows in the dark, used in nuclear batteries.',
      fact: 'Promethium is the only lanthanide that has no stable isotopes and is not found naturally on Earth.',
      details: '<b>Basic Facts</b><br>• Symbol: Pm • Number: 61 • Mass: [145]<br>• Lanthanide, Period 6<br><br><b>Atomic Structure</b><br>• 61 protons, 84 neutrons (Pm-145)<br>• All isotopes are radioactive<br>• Config: [Xe] 4f⁵ 6s²<br><br><b>Properties</b><br>• Radioactive metal<br>• Glows with a blue or green light<br>• Synthetic element on Earth<br><br><b>Applications</b><br>• Nuclear batteries (pacemakers)<br>• Luminous paint<br>• Thickness gauges',
      ai_simple: 'Promethium (Pm) is element 61, a synthetic radioactive element named after Prometheus.',
      ai_detailed: 'Promethium is used in atomic batteries where it captures the energy of beta decay. It is found in star spectra, but on Earth, it must be created in nuclear reactors.',
      study: [
        'Atomic number: 61',
        'Chemical symbol: Pm',
        'Group: Lanthanide',
        'Atomic mass: [145]',
        'Radioactive only'
      ],
      questions: [
        { q: 'What is the atomic number of Promethium?', a: '61', o: ['60', '61', '62', '63'] },
        { q: 'What is the symbol for Promethium?', a: 'Pm', o: ['P', 'Pr', 'Pm', 'Pt'] },
        { q: 'Is Promethium stable?', a: 'No, all radioactive', o: ['Yes', 'No, all radioactive', 'Some isotopes', 'Only in space'] },
        { q: 'Where is Promethium used?', a: 'Nuclear batteries', o: ['Food', 'Nuclear batteries', 'Clothing', 'Car tires'] },
        { q: 'Who is Promethium named after?', a: 'Prometheus', o: ['A planet', 'Prometheus', 'A city', 'A scientist'] }
      ]
    },
    ru: {
      title: 'Прометий',
      desc: 'Радиоактивный лантаноид, светящийся в темноте, используется в ядерных батарейках.',
      fact: 'Прометий — единственный лантаноид, не имеющий стабильных изотопов и не встречающийся на Земле.',
      details: '<b>Основные факты</b><br>• Символ: Pm • Номер: 61 • Масса: [145]<br>• Лантаноид, период 6<br><br><b>Атомная структура</b><br>• 61 протон, 84 нейтрона (Pm-145)<br>• Все изотопы радиоактивны<br>• Конфигурация: [Xe] 4f⁵ 6s²<br><br><b>Свойства</b><br>• Радиоактивный металл<br>• Светится голубым или зеленым светом<br>• Искусственный элемент на Земле<br><br><b>Применение</b><br>• Ядерные батарейки<br>• Светящиеся краски<br>• Измерители толщины',
      ai_simple: 'Прометий (Pm) — элемент №61, радиоактивный элемент, названный в честь Прометея.',
      ai_detailed: 'Прометий используется в атомных батареях, где он улавливает энергию бета-распада. Он обнаружен в спектрах звезд, но на Земле его получают в ядерных реакторах.',
      study: [
        'Атомный номер: 61',
        'Химический символ: Pm',
        'Группа: Лантаноиды',
        'Атомная масса: [145]',
        'Только радиоактивен'
      ],
      questions: [
        { q: 'Какой атомный номер у прометия?', a: '61', o: ['60', '61', '62', '63'] },
        { q: 'Какой символ у прометия?', a: 'Pm', o: ['P', 'Pr', 'Pm', 'Pt'] },
        { q: 'Стабилен ли прометий?', a: 'Нет, весь радиоактивен', o: ['Да', 'Нет, весь радиоактивен', 'Некоторые изотопы', 'Только в космосе'] },
        { q: 'Где используется прометий?', a: 'Ядерные батарейки', o: ['Пища', 'Ядерные батарейки', 'Одежда', 'Шины'] },
        { q: 'В честь кого назван прометий?', a: 'Прометей', o: ['Планета', 'Прометей', 'Город', 'Ученый'] }
      ]
    },
    kk: {
      title: 'Прометий',
      desc: 'Қараңғыда жарқырайтын, ядролық батареяларда қолданылатын радиоактивті лантаноид.',
      fact: 'Прометий — тұрақты изотоптары жоқ және Жерде табиғи түрде кездеспейтін жалғыз лантаноид.',
      details: '<b>Негізгі фактілер</b><br>• Таңбасы: Pm • Нөмірі: 61 • Массасы: [145]<br>• Лантаноид, 6-период<br><br><b>Атомдық құрылымы</b><br>• 61 протон, 84 нейтрон (Pm-145)<br>• Барлық изотоптары радиоактивті<br>• Конфиг: [Xe] 4f⁵ 6s²<br><br><b>Қасиеттері</b><br>• Радиоактивті металл<br>• Көк немесе жасыл жарықпен жарқырайды<br>• Жердегі синтетикалық элемент<br><br><b>Қолданылуы</b><br>• Ядролық батареялар (кардиостимуляторлар)<br>• Люминесцентті бояу<br>• Қалыңдық өлшегіштер',
      ai_simple: 'Прометий (Pm) — №61 элемент, Прометейдің құрметіне аталған синтетикалық радиоактивті элемент.',
      ai_detailed: 'Прометий бета-ыдырау энергиясын пайдаланатын атомдық батареяларда қолданылады. Ол жұлдыз спектрлерінде кездеседі, бірақ Жерде оны ядролық реакторларда жасау керек.',
      study: [
        'Атомдық нөмірі: 61',
        'Химиялық таңбасы: Pm',
        'Тобы: Лантаноидтар',
        'Атомдық массасы: [145]',
        'Тек радиоактивті'
      ],
      questions: [
        { q: 'Прометийдің атомдық нөмірі қандай?', a: '61', o: ['60', '61', '62', '63'] },
        { q: 'Прометийдің таңбасы қандай?', a: 'Pm', o: ['P', 'Pr', 'Pm', 'Pt'] },
        { q: 'Прометий тұрақты ма?', a: 'Жоқ, бәрі радиоактивті', o: ['Иә', 'Жоқ, бәрі радиоактивті', 'Кейбір изотоптар', 'Тек ғарышта'] },
        { q: 'Прометий қайда қолданылады?', a: 'Ядролық батареялар', o: ['Тамақ', 'Ядролық батареялар', 'Киім', 'Көлік шиналары'] },
        { q: 'Прометий кімнің құрметіне аталған?', a: 'Прометей', o: ['Планета', 'Прометей', 'Қала', 'Ғалым'] }
      ]
    }
  }
};

const locales = ['en', 'ru', 'kk'];

for (const lang of locales) {
  const filePath = path.join(__dirname, '..', 'locales', `${lang}_v2.json`);
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    continue;
  }

  const locale = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  for (const [id, data] of Object.entries(elements)) {
    const content = data[lang];
    
    // Core info
    locale[`system.${id}.title`] = content.title;
    locale[`system.${id}.desc`] = content.desc;
    locale[`system.${id}.details`] = content.details;
    locale[`system.${id}.fact`] = content.fact;
    
    // AI items
    locale[`ai.${id}.simple`] = content.ai_simple;
    locale[`ai.${id}.detailed`] = content.ai_detailed;
    
    // Study items
    content.study.forEach((text, index) => {
      locale[`ai.${id}.study.${index + 1}`] = text;
    });
    
    // Questions
    content.questions.forEach((qObj, qIndex) => {
      const qNum = qIndex + 1;
      locale[`ai.${id}.q${qNum}.text`] = qObj.q;
      qObj.o.forEach((opt, optIndex) => {
        locale[`ai.${id}.q${qNum}.opt.${optIndex + 1}`] = opt;
      });
    });
    
    // Additional mapping for consistency
    locale[`group.${data.symbol.toLowerCase()}`] = data.group[lang];
  }

  fs.writeFileSync(filePath, JSON.stringify(locale, null, 4));
  console.log(`✓ Updated ${lang}_v2.json with elements 51-61`);
}

console.log('--- ALL ELEMENTS 51-61 INTEGRATED SUCCESSFULLY ---');
