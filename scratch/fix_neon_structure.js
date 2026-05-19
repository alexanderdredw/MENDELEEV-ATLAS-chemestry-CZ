const fs = require('fs');

const enNe = `<b>Basic Facts</b><br>
• Chemical Symbol — Ne<br>
• Atomic Number — 10<br>
• A noble gas from the 18th group<br>
• The second lightest noble gas after helium<br>
• Colorless, odorless, and chemically inert gas<br>
• Known for its distinct reddish-orange glow in discharge lamps<br>
• Found in trace amounts in the Earth's atmosphere<br><br>

<b>Atomic Structure</b><br>
• 10 protons in the nucleus<br>
• 10 electrons around the nucleus<br>
• Most common isotope has 10 neutrons (Neon-20)<br>
• Electron configuration — [He] 2s² 2p⁶ (full valence shell)<br>
• Located in the 2nd period and 18th group of the periodic table<br><br>

<b>Physical Properties</b><br>
• Very low density at standard conditions<br>
• Boiling point — −246.1°C<br>
• Melting point — −248.6°C<br>
• Glows bright reddish-orange in an electric discharge<br>
• Non-metallic element<br>
• Triple point — 24.55 K (reference point for international scales)<br>
• Refrigerating capacity 3x higher than liquid hydrogen<br><br>

<b>Chemical Properties</b><br>
• Chemically inert, does not react with most substances<br>
• Does not form stable chemical compounds under normal conditions<br>
• Has the highest ionization energy after helium<br>
• Does not burn or support combustion<br>
• Exists as monatomic atoms (Ne)<br><br>

<b>Neon Isotopes</b><br>
• Neon-20 (²⁰Ne) — the most abundant stable isotope (90.48%)<br>
• Neon-21 (²¹Ne) — stable isotope (0.27%)<br>
• Neon-22 (²²Ne) — stable isotope (9.25%)<br>
• Used in scientific research for isotopic labeling and geology<br><br>

<b>Occurrence in Nature</b><br>
• Found in the Earth's atmosphere (0.0018% by volume)<br>
• Present in stars and the Sun as a product of fusion<br>
• Captured in some volcanic rocks and minerals<br>
• Rarely found in the Earth's crust as a free element<br><br>

<b>Industrial Production</b><br>
• Produced via fractional distillation of liquid air<br>
• Obtained as a byproduct during the production of oxygen and nitrogen<br>
• Purified through adsorption and cryogenic processes<br><br>

<b>Applications of Neon</b><br>
• Neon signs and decorative lighting<br>
• High-voltage indicators and circuit testers<br>
• Cryogenic refrigerant in liquid form<br>
• Helium-neon (He-Ne) lasers for industrial use<br>
• Lightning arresters in electrical grids<br><br>

<b>Significance in Science and Industry</b><br>
• Essential for high-precision vacuum systems<br>
• Used in particle physics detectors (neon tubes)<br>
• Standard for temperature measurement (triple point)<br>
• Vital for the signage and advertising industry<br><br>

<b>Interaction with Other Fields</b><br>
• Chemistry — used to create inert environments<br>
• Physics — laser technology and discharge studies<br>
• Industry — lighting and cryogenics<br>
• Advertising — iconic neon signs and displays<br>
• Space Science — study of stellar evolution and atmospheres`;

const ruNe = `<b>Основные факты</b><br>
• Химический символ — Ne<br>
• Атомный номер — 10<br>
• Благородный газ из 18-й группы<br>
• Второй по легкости благородный газ после гелия<br>
• Бесцветный, без запаха, химически инертный газ<br>
• Известен своим характерным красно-оранжевым свечением в газоразрядных лампах<br>
• Содержится в следовых количествах в атмосфере Земли<br><br>

<b>Атомная структура</b><br>
• 10 протонов в ядре<br>
• 10 электронов вокруг ядра<br>
• Наиболее распространенный изотоп имеет 10 нейтронов (Неон-20)<br>
• Электронная конфигурация — [He] 2s² 2p⁶ (полная валентная оболочка)<br>
• Расположен во 2-м периоде и 18-й группе периодической таблицы<br><br>

<b>Физические свойства</b><br>
• Очень низкая плотность при стандартных условиях<br>
• Температура кипения — −246.1°C<br>
• Температура плавления — −248.6°C<br>
• Светится ярко-оранжевым светом при электрическом разряде<br>
• Неметаллический элемент<br>
• Тройная точка — 24.55 K (эталонная точка международной температурной шкалы)<br>
• Охлаждающая способность в 3 раза выше, чем у жидкого водорода<br><br>

<b>Химические свойства</b><br>
• Химически инертен, не реагирует с большинством веществ<br>
• Не образует стабильных химических соединений при нормальных условиях<br>
• Обладает самой высокой энергией ионизации после гелия<br>
• Не горит и не поддерживает горение<br>
• Существует в виде одноатомных молекул (Ne)<br><br>

<b>Изотопы неона</b><br>
• Неон-20 (²⁰Ne) — самый распространенный стабильный изотоп (90.48%)<br>
• Неон-21 (²¹Ne) — стабильный изотоп (0.27%)<br>
• Неон-22 (²²Ne) — стабильный изотоп (9.25%)<br>
• Используется в научных исследованиях для изотопного мечения и в геологии<br><br>

<b>Нахождение в природе</b><br>
• Содержится в атмосфере Земли (0.0018% по объему)<br>
• Присутствует в звездах и Солнце как продукт термоядерного синтеза<br>
• Заперт в некоторых вулканических породах и минералах<br>
• Редко встречается в земной коре в свободном виде<br><br>

<b>Промышленное производство</b><br>
• Производится путем фракционной перегонки жидкого воздуха<br>
• Получается как побочный продукт при производстве кислорода и азота<br>
• Очищается с помощью адсорбции и криогенных процессов<br><br>

<b>Применение неона</b><br>
• Неоновые вывески и декоративное освещение<br>
• Индикаторы высокого напряжения и тестеры цепей<br>
• Криогенный хладагент в жидком виде<br>
• Гелий-неоновые (He-Ne) лазеры для промышленности<br>
• Грозоразрядники в электрических сетях<br><br>

<b>Значение в науке и промышленности</b><br>
• Необходим для высокоточных вакуумных систем<br>
• Используется в детекторах физики элементарных частиц (неоновые трубки)<br>
• Стандарт для измерения температуры (тройная точка)<br>
• Жизненно важен для индустрии наружной рекламы<br><br>

<b>Взаимодействие с другими областями</b><br>
• Химия — используется для создания инертных сред<br>
• Физика — лазерные технологии и изучение разрядов<br>
• Промышленность — освещение и криогеника<br>
• Реклама — культовые неоновые вывески и дисплеи<br>
• Космонавтика — изучение звездной эволюции и атмосфер звезд`;

const kkNe = `<b>Негізгі фактілер</b><br>
• Химиялық таңбасы — Ne<br>
• Атомдық нөмірі — 10<br>
• 18-ші топтың инертті газы<br>
• Гелийден кейінгі ең жеңіл екінші инертті газ<br>
• Түссіз, иіссіз және химиялық инертті газ<br>
• Газды разрядты шамдардағы өзіне тән қызыл-қызғылт сары жарқылымен танымал<br>
• Жер атмосферасында өте аз мөлшерде кездеседі<br><br>

<b>Атомдық құрылымы</b><br>
• Ядрода 10 протон<br>
• Ядро айналасында 10 электрон<br>
• Ең көп таралған изотоптың 10 нейтроны бар (Неон-20)<br>
• Электрондық конфигурациясы — [He] 2s² 2p⁶ (толық валенттік қабықша)<br>
• Периодтық кестенің 2-периодында және 18-тобында орналасқан<br><br>

<b>Физикалық қасиеттері</b><br>
• Стандартты жағдайларда өте төмен тығыздық<br>
• Қайнау температурасы — −246.1°C<br>
• Балқу температурасы — −248.6°C<br>
• Электрлік разряд кезінде ашық қызғылт сары түспен жарқырайды<br>
• Бейметалл элемент<br>
• Үштік нүкте — 24.55 K (халықаралық температуралық шкалалардың эталондық нүктесі)<br>
• Салқындату қабілеті сұйық сутегіне қарағанда 3 есе жоғары<br><br>

<b>Химиялық қасиеттері</b><br>
• Химиялық инертті, заттардың көпшілігімен әрекеттеспейді<br>
• Қалыпты жағдайда тұрақты химиялық қосылыстар түзбейді<br>
• Гелийден кейінгі ең жоғары ионизация энергиясына ие<br>
• Жанбайды және жануды қолдамайды<br>
• Біратомды молекулалар түрінде болады (Ne)<br><br>

<b>Неон изотоптары</b><br>
• Неон-20 (²⁰Ne) — ең көп таралған тұрақты изотоп (90.48%)<br>
• Неон-21 (²¹Ne) — тұрақты изотоп (0.27%)<br>
• Неон-22 (²²Ne) — тұрақты изотоп (9.25%)<br>
• Изотоптық таңбалау және геологиядағы ғылыми зерттеулерде қолданылады<br><br>

<b>Табиғатта кездесуі</b><br>
• Жер атмосферасында кездеседі (көлемі бойынша 0.0018%)<br>
• Жұлдыздарда және Күнде термоядролық синтез өнімі ретінде болады<br>
• Кейбір жанартаулық жыныстар мен минералдарда кездеседі<br>
• Жер қыртысында бос элемент түрінде сирек кездеседі<br><br>

<b>Өнеркәсіптік өндіріс</b><br>
• Сұйық ауаны фракциялық айдау арқылы өндіріледі<br>
• Оттегі мен азот өндіру кезінде қосымша өнім ретінде алынады<br>
• Адсорбция және криогендік процестер арқылы тазартылады<br><br>

<b>Неонның қолданылуы</b><br>
• Неонды жарнамалар және декоративті жарықтандыру<br>
• Жоғары вольтты индикаторлар және тізбек тестерлері<br>
• Сұйық күйдегі криогендік хладагент<br>
• Өнеркәсіптік мақсаттағы гелий-неонды (He-Ne) лазерлер<br>
• Электр желілеріндегі найзағайдан қорғау құралдары<br><br>

<b>Ғылым мен өнеркәсіптегі маңызы</b><br>
• Жоғары дәлдіктегі вакуумдық жүйелер үшін қажет<br>
• Бөлшектер физикасының детекторларында қолданылады (неон түтіктері)<br>
• Температураны өлшеу стандарты (үштік нүкте)<br>
• Сыртқы жарнама индустриясы үшін өте маңызды<br><br>

<b>Басқа салалармен өзара әрекеттесуі</b><br>
• Химия — инертті орта құру үшін қолданылады<br>
• Физика — лазерлік технологиялар және разрядтарды зерттеу<br>
• Өнеркәсіп — жарықтандыру және криогеника<br>
• Жарнама — танымал неонды жарнамалар мен дисплейлер<br>
• Космонавтика — жұлдыздар эволюциясы мен атмосферасын зерттеу`;

const locales = {
  ru: { path: 'locales/ru_v2.json', data: ruNe },
  en: { path: 'locales/en_v2.json', data: enNe },
  kk: { path: 'locales/kk_v2.json', data: kkNe }
};

for (const [lang, cfg] of Object.entries(locales)) {
  const locale = JSON.parse(fs.readFileSync(cfg.path, 'utf8'));
  locale['system.neon.details'] = cfg.data;
  fs.writeFileSync(cfg.path, JSON.stringify(locale, null, 4));
  console.log(`✓ Updated Neon structure in ${lang.toUpperCase()}`);
}
