const fs = require('fs');

const ruO = `<b>Основные факты</b><br>
• Химический символ — O<br>
• Атомный номер — 8<br>
• Атомная масса — 15.999<br>
• Группа — Халькогены (Неметаллы)<br>
• Самый распространенный элемент в земной коре (46% по массе)<br>
• Жизненно необходим для дыхания большинства живых организмов<br><br>

<b>Атомная структура</b><br>
• 8 протонов в ядре<br>
• 8 электронов вокруг ядра<br>
• Содержит 8 нейтронов (Кислород-16)<br>
• Электронная конфигурация — [He] 2s² 2p⁴<br>
• Расположен во 2-м периоде и 16-й группе<br><br>

<b>Физические свойства</b><br>
• Бесцветный газ без запаха и вкуса<br>
• В жидком и твердом состоянии имеет светло-голубой цвет<br>
• Температура кипения — −183°C<br>
• Обладает парамагнитными свойствами (притягивается магнитом в жидком виде)<br>
• Озон (O₃) — аллотропная модификация с характерным запахом<br><br>

<b>Химические свойства</b><br>
• Сильный окислитель (второй после фтора по электроотрицательности — 3.44)<br>
• Поддерживает горение, но сам не горит<br>
• Реагирует почти со всеми элементами, образуя оксиды<br>
• Взаимодействует с водородом с выделением огромного количества энергии (образование воды)<br><br>

<b>Изотопы кислорода</b><br>
• Кислород-16 (¹⁶O) — основной изотоп (99.76%)<br>
• Кислород-18 (¹⁸O) — используется в палеоклиматологии для изучения температур прошлого<br><br>

<b>Нахождение в природе</b><br>
• 21% объема атмосферы Земли<br>
• Содержится в воде (89% по массе) и горных породах<br>
• Входит в состав всех органических веществ: белков, жиров, углеводов<br>
• Озоновый слой в стратосфере защищает Землю от УФ-излучения<br><br>

<b>Промышленное производство</b><br>
• Фракционная перегонка жидкого воздуха<br>
• Электролиз воды (для получения особо чистого кислорода)<br>
• Мембранное разделение воздуха<br><br>

<b>Применение кислорода</b><br>
• Медицина: дыхательные смеси, реанимация, терапия<br>
• Металлургия: выплавка стали (кислородное дутье)<br>
• Ракетная техника: в качестве окислителя топлива (LOX)<br>
• Сварка и резка металлов (автоген)<br>
• Очистка сточных вод и производство химикатов<br><br>

<b>Значение в биологии</b><br>
• Клеточный метаболизм: окисление глюкозы для получения энергии (АТФ)<br>
• Фотосинтез: выделение кислорода растениями как побочного продукта<br>
• Участие в процессах гниения и минерализации органики<br><br>

<b>Взаимодействие с другими областями</b><br>
• Экология — поддержание состава атмосферы<br>
• Энергетика — горение ископаемого топлива<br>
• Космонавтика — системы жизнеобеспечения на кораблях<br>
• Химия — изучение процессов окисления и горения`;

const enO = `<b>Basic Facts</b><br>
• Chemical Symbol — O<br>
• Atomic Number — 8<br>
• Atomic Mass — 15.999<br>
• Group — Chalcogens (Nonmetals)<br>
• Most abundant element in the Earth's crust (46% by mass)<br>
• Vital for the respiration of most living organisms<br><br>

<b>Atomic Structure</b><br>
• 8 protons in the nucleus<br>
• 8 electrons around the nucleus<br>
• Contains 8 neutrons (Oxygen-16)<br>
• Electron configuration — [He] 2s² 2p⁴<br>
• Located in the 2nd period and 16th group<br><br>

<b>Physical Properties</b><br>
• Colorless, odorless, and tasteless gas<br>
• In liquid and solid states, it has a pale blue color<br>
• Boiling point — −183°C<br>
• Possesses paramagnetic properties (attracted by a magnet in liquid form)<br>
• Ozone (O₃) — an allotropic modification with a characteristic odor<br><br>

<b>Chemical Properties</b><br>
• Strong oxidant (second only to fluorine in electronegativity — 3.44)<br>
• Supports combustion but is not flammable itself<br>
• Reacts with almost all elements to form oxides<br>
• Interacts with hydrogen releasing huge amounts of energy (water formation)<br><br>

<b>Oxygen Isotopes</b><br>
• Oxygen-16 (¹⁶O) — primary isotope (99.76%)<br>
• Oxygen-18 (¹⁸O) — used in paleoclimatology to study past temperatures<br><br>

<b>Occurrence in Nature</b><br>
• 21% of the Earth's atmosphere by volume<br>
• Found in water (89% by mass) and rocks<br>
• A component of all organic substances: proteins, fats, carbohydrates<br>
• The ozone layer in the stratosphere protects Earth from UV radiation<br><br>

<b>Industrial Production</b><br>
• Fractional distillation of liquid air<br>
• Electrolysis of water (for ultra-pure oxygen)<br>
• Membrane air separation<br><br>

<b>Applications of Oxygen</b><br>
• Medicine: breathing mixtures, resuscitation, therapy<br>
• Metallurgy: steel manufacturing (oxygen blast)<br>
• Rocketry: as a fuel oxidant (LOX)<br>
• Metal welding and cutting (oxy-fuel)<br>
• Wastewater treatment and chemical production<br><br>

<b>Biological Significance</b><br>
• Cellular metabolism: glucose oxidation for energy (ATP)<br>
• Photosynthesis: oxygen release by plants as a byproduct<br>
• Involvement in decomposition and mineralization of organic matter<br><br>

<b>Interaction with Other Fields</b><br>
• Ecology — maintaining atmospheric composition<br>
• Energy — combustion of fossil fuels<br>
• Aerospace — life support systems on spacecraft<br>
• Chemistry — study of oxidation and combustion processes`;

const kkO = `<b>Негізгі фактілер</b><br>
• Химиялық таңбасы — O<br>
• Атомдық нөмірі — 8<br>
• Атомдық массасы — 15.999<br>
• Тобы — Халькогендер (Бейметалдар)<br>
• Жер қыртысында ең көп таралған элемент (массасы бойынша 46%)<br>
• Тірі организмдердің көпшілігінің тыныс алуы үшін өте қажет<br><br>

<b>Атомдық құрылымы</b><br>
• Ядрода 8 протон<br>
• Ядро айналасында 8 электрон<br>
• 8 нейтроны бар (Кислород-16)<br>
• Электрондық конфигурациясы — [He] 2s² 2p⁴<br>
• Периодтық кестенің 2-периодында және 16-тобында орналасқан<br><br>

<b>Физикалық қасиеттері</b><br>
• Түссіз, иіссіз және дәмсіз газ<br>
• Сұйық және қатты күйде ашық көк түске ие<br>
• Қайнау температурасы — −183°C<br>
• Парамагниттік қасиеттерге ие (сұйық күйде магнитке тартылады)<br>
• Озон (O₃) — өзіне тән иісі бар аллотропиялық модификация<br><br>

<b>Химиялық қасиеттері</b><br>
• Күшті тотықтырғыш (электртерістігі бойынша фтордан кейінгі екінші — 3.44)<br>
• Жануды қолдайды, бірақ өзі жанбайды<br>
• Барлық дерлік элементтермен әрекеттесіп, оксидтер түзеді<br>
• Сутегімен әрекеттескенде орасан зор энергия бөледі (судың түзілуі)<br><br>

<b>Оттегі изотоптары</b><br>
• Оттегі-16 (¹⁶O) — негізгі изотоп (99.76%)<br>
• Оттегі-18 (¹⁸O) — палеоклиматологияда өткендегі температураларды зерттеу үшін қолданылады<br><br>

<b>Табиғатта кездесуі</b><br>
• Жер атмосферасы көлемінің 21%-ын құрайды<br>
• Суда (массасы бойынша 89%) және тау жыныстарында болады<br>
• Барлық органикалық заттардың құрамына кіреді: белоктар, майлар, көмірсулар<br>
• Стратосферадағы озон қабаты Жерді УК-сәулеленуден қорғайды<br><br>

<b>Өнеркәсіптік өндіріс</b><br>
• Сұйық ауаны фракциялық айдау<br>
• Су электролизі (өте таза оттегі алу үшін)<br>
• Ауаны мембраналық бөлу<br><br>

<b>Оттегінің қолданылуы</b><br>
• Медицина: тыныс алу қоспалары, реанимация, терапия<br>
• Металлургия: болат қорыту (оттегі үрлеу)<br>
• Зымыран техникасы: отын тотықтырғышы ретінде (LOX)<br>
• Металдарды дәнекерлеу және кесу (автоген)<br>
• Ағын суларды тазарту және химикаттар өндірісі<br><br>

<b>Биологиядағы маңызы</b><br>
• Жасушалық метаболизм: энергия (АТФ) алу үшін глюкозаны тотықтыру<br>
• Фотосинтез: өсімдіктердің қосымша өнім ретінде оттегін бөлуі<br>
• Органиканың шіру және минералдану процестеріне қатысу<br><br>

<b>Басқа салалармен өзара әрекеттесуі</b><br>
• Экология — атмосфера құрамын сақтау<br>
• Энергетика — қазба отынның жануы<br>
• Космонавтика — кемелердегі тіршілікті қамтамасыз ету жүйелері<br>
• Химия — тотығу және жану процестерін зерттеу`;

const ruF = `<b>Основные факты</b><br>
• Химический символ — F<br>
• Атомный номер — 9<br>
• Атомная масса — 18.998<br>
• Группа — Галогены (Неметаллы)<br>
• Самый химически активный и электроотрицательный элемент<br>
• Единственный элемент, который реагирует даже с благородными газами<br><br>

<b>Атомная структура</b><br>
• 9 протонов в ядре<br>
• 9 электронов вокруг ядра<br>
• Содержит 10 нейтронов (Фтор-19)<br>
• Электронная конфигурация — [He] 2s² 2p⁵<br>
• Расположен во 2-м периоде и 17-й группе<br><br>

<b>Физические свойства</b><br>
• Бледно-желтый газ с резким, раздражающим запахом<br>
• Чрезвычайно токсичен и агрессивен<br>
• Температура кипения — −188.1°C<br>
• Имеет низкую энергию диссоциации молекулы F₂<br><br>

<b>Химические свойства</b><br>
• Самый сильный окислитель из всех элементов (электроотрицательность 4.0)<br>
• Реагирует почти со всеми веществами, часто со взрывом или воспламенением<br>
• Вытесняет кислород из воды и оксидов<br>
• Образует фториды с металлами и неметаллами, включая ксенон и криптон<br><br>

<b>Изотопы фтора</b><br>
• Фтор-19 (¹⁹F) — единственный стабильный природный изотоп<br>
• Фтор-18 — радиоактивный изотоп, используется в медицине (ПЭТ-сканирование)<br><br>

<b>Нахождение в природе</b><br>
• Не встречается в свободном виде из-за сверхвысокой активности<br>
• Основные минералы — флюорит (CaF₂), криолит, фторапатит<br>
• Содержится в малых количествах в зубах и костях человека<br><br>

<b>Промышленное производство</b><br>
• Электролиз смеси жидкого фтороводорода (HF) и фторида калия (KF)<br>
• Процесс проводится в специальных установках из сплавов, устойчивых к фтору (монель-металл)<br><br>

<b>Применение фтора</b><br>
• Производство тефлона (ПТФЭ) — антипригарные покрытия и изоляция<br>
• Стоматология: фторирование воды и зубных паст для предотвращения кариеса<br>
• Ядерная энергетика: обогащение урана (гексафторид урана UF₆)<br>
• Фармацевтика: входит в состав многих лекарств (например, прозак, антибиотики)<br>
• Производство хладагентов и спецсплавов<br><br>

<b>Значение в медицине</b><br>
• Предотвращение разрушения зубной эмали<br>
• Использование изотопа F-18 для ранней диагностики рака (позитронно-эмиссионная томография)<br>
• Кровезаменители на основе перфторорганических соединений<br><br>

<b>Взаимодействие с другими областями</b><br>
• Стоматология — защита зубов<br>
• Атомная промышленность — топливный цикл урана<br>
• Бытовая химия — создание антипригарных материалов<br>
• Органический синтез — получение уникальных полимеров`;

const enF = `<b>Basic Facts</b><br>
• Chemical Symbol — F<br>
• Atomic Number — 9<br>
• Atomic Mass — 18.998<br>
• Group — Halogens (Nonmetals)<br>
• Most chemically active and electronegative element<br>
• The only element that reacts even with noble gases<br><br>

<b>Atomic Structure</b><br>
• 9 protons in the nucleus<br>
• 9 electrons around the nucleus<br>
• Contains 10 neutrons (Fluorine-19)<br>
• Electron configuration — [He] 2s² 2p⁵<br>
• Located in the 2nd period and 17th group<br><br>

<b>Physical Properties</b><br>
• Pale yellow gas with a sharp, irritating odor<br>
• Extremely toxic and aggressive<br>
• Boiling point — −188.1°C<br>
• Has low dissociation energy of the F₂ molecule<br><br>

<b>Chemical Properties</b><br>
• Strongest oxidant of all elements (electronegativity 4.0)<br>
• Reacts with almost all substances, often with explosion or ignition<br>
• Displaces oxygen from water and oxides<br>
• Forms fluorides with metals and non-metals, including xenon and krypton<br><br>

<b>Fluorine Isotopes</b><br>
• Fluorine-19 (¹⁹F) — the only stable natural isotope<br>
• Fluorine-18 — radioactive isotope used in medicine (PET scanning)<br><br>

<b>Occurrence in Nature</b><br>
• Does not occur free in nature due to ultra-high reactivity<br>
• Main minerals are fluorite (CaF₂), cryolite, fluorapatite<br>
• Found in small amounts in human teeth and bones<br><br>

<b>Industrial Production</b><br>
• Electrolysis of a mixture of liquid hydrogen fluoride (HF) and potassium fluoride (KF)<br>
• Process carried out in special equipment made of fluorine-resistant alloys (monel metal)<br><br>

<b>Applications of Fluorine</b><br>
• Production of Teflon (PTFE) — non-stick coatings and insulation<br>
• Dentistry: fluoridation of water and toothpastes to prevent cavities<br>
• Nuclear Energy: uranium enrichment (uranium hexafluoride UF₆)<br>
• Pharmaceuticals: component of many drugs (e.g., Prozac, antibiotics)<br>
• Production of refrigerants and special alloys<br><br>

<b>Significance in Medicine</b><br>
• Prevention of tooth enamel decay<br>
• Use of F-18 isotope for early cancer diagnosis (positron emission tomography)<br>
• Blood substitutes based on perfluoroorganic compounds<br><br>

<b>Interaction with Other Fields</b><br>
• Dentistry — tooth protection<br>
• Nuclear Industry — uranium fuel cycle<br>
• Household Chemicals — creating non-stick materials<br>
• Organic Synthesis — producing unique polymers`;

const kkF = `<b>Негізгі фактілер</b><br>
• Химиялық таңбасы — F<br>
• Атомдық нөмірі — 9<br>
• Атомдық массасы — 18.998<br>
• Тобы — Галогендер (Бейметалдар)<br>
• Ең химиялық белсенді және электртеріс элемент<br>
• Тіпті инертті газдармен де әрекеттесетін жалғыз элемент<br><br>

<b>Атомдық құрылымы</b><br>
• Ядрода 9 протон<br>
• Ядро айналасында 9 электрон<br>
• 10 нейтроны бар (Фтор-19)<br>
• Электрондық конфигурациясы — [He] 2s² 2p⁵<br>
• Периодтық кестенің 2-периодында және 17-тобында орналасқан<br><br>

<b>Физикалық қасиеттері</b><br>
• Өткір, тітіркендіргіш иісі бар бозғылт сары газ<br>
• Өте улы және агрессивті<br>
• Қайнау температурасы — −188.1°C<br>
• F₂ молекуласының диссоциациялану энергиясы төмен<br><br>

<b>Химиялық қасиеттері</b><br>
• Барлық элементтердің ішіндегі ең күшті тотықтырғыш (электртерістігі 4.0)<br>
• Барлық дерлік заттармен әрекеттеседі, көбінесе жарылыспен немесе тұтанумен<br>
• Су мен оксидтерден оттегіні ығыстырады<br>
• Металдармен және бейметалдармен, соның ішінде ксенон және криптонмен фторидтер түзеді<br><br>

<b>Фтор изотоптары</b><br>
• Фтор-19 (¹⁹F) — жалғыз тұрақты табиғи изотоп<br>
• Фтор-18 — медицинада (ПЭТ-сканерлеу) қолданылатын радиоактивті изотоп<br><br>

<b>Табиғатта кездесуі</b><br>
• Асқын жоғары белсенділігіне байланысты табиғатта бос күйінде кездеспейді<br>
• Негізгі минералдары — флюорит (CaF₂), криолит, фторапатит<br>
• Адамның тістері мен сүйектерінде аз мөлшерде болады<br><br>

<b>Өнеркәсіптік өндіріс</b><br>
• Сұйық фторсутегі (HF) мен калий фториді (KF) қоспасының электролизі<br>
• Процесс фторға төзімді қорытпалардан (монель-металл) жасалған арнайы қондырғыларда жүргізіледі<br><br>

<b>Фтордың қолданылуы</b><br>
• Тефлон (ПТФЭ) өндірісі — күйікке қарсы жабындар мен оқшаулау<br>
• Стоматология: кариестің алдын алу үшін су мен тіс пасталарын фторлау<br>
• Ядролық энергетика: уранды байыту (уран гексафториді UF₆)<br>
• Фармацевтика: көптеген дәрі-дәрмектердің құрамына кіреді (мысалы, прозак, антибиотиктер)<br>
• Хладагенттер мен арнайы қорытпалар өндірісі<br><br>

<b>Медицинадағы маңызы</b><br>
• Тіс эмалінің бұзылуының алдын алу<br>
• Ракты ерте диагностикалау үшін F-18 изотопын қолдану (позитрон-эмиссиялық томография)<br>
• Перфторорганикалық қосылыстар негізіндегі қан алмастырғыштар<br><br>

<b>Басқа салалармен өзара әрекеттесуі</b><br>
• Стоматология — тістерді қорғау<br>
• Атом өнеркәсібі — уранның отын циклі<br>
• Тұрмыстық химия — күйікке қарсы материалдар жасау<br>
• Органикалық синтез — бірегей полимерлер алу`;

const locales = {
  ru: { path: 'locales/ru_v2.json', data: { oxygen: ruO, fluorine: ruF } },
  en: { path: 'locales/en_v2.json', data: { oxygen: enO, fluorine: enF } },
  kk: { path: 'locales/kk_v2.json', data: { oxygen: kkO, fluorine: kkF } }
};

for (const [lang, cfg] of Object.entries(locales)) {
  const locale = JSON.parse(fs.readFileSync(cfg.path, 'utf8'));
  
  // Oxygen
  locale['system.oxygen.details'] = cfg.data.oxygen;
  locale['system.oxygen.title'] = lang === 'ru' ? 'Кислород' : (lang === 'kk' ? 'Оттегі' : 'Oxygen');
  // Fluorine
  locale['system.fluorine.details'] = cfg.data.fluorine;
  locale['system.fluorine.title'] = lang === 'ru' ? 'Фтор' : (lang === 'kk' ? 'Фтор' : 'Fluorine');
  
  // Sync legacy mapping
  locale['system.immune.details'] = cfg.data.oxygen;
  locale['system.urinary.details'] = cfg.data.fluorine;
  
  fs.writeFileSync(cfg.path, JSON.stringify(locale, null, 4));
  console.log(`✓ Updated Oxygen & Fluorine in ${lang.toUpperCase()}`);
}
