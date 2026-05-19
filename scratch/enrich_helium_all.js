const fs = require('fs');

const ruHe = `<b>Основные факты</b><br>
• Химический символ — He<br>
• Атомный номер — 2<br>
• Атомная масса — 4.0026<br>
• Группа — Благородные газы<br>
• Второй по распространенности элемент во Вселенной<br>
• Самый инертный элемент периодической таблицы<br><br>

<b>Атомная структура</b><br>
• 2 протона в ядре<br>
• 2 электрона вокруг ядра<br>
• Содержит 2 нейтрона (Гелий-4)<br>
• Электронная конфигурация — 1s²<br>
• Расположен в 1-м периоде и 18-й группе<br><br>

<b>Физические свойства</b><br>
• Бесцветный газ без запаха и вкуса<br>
• Самая низкая температура кипения — −268.9°C<br>
• Не затвердевает при нормальном давлении (даже при абсолютном нуле)<br>
• Обладает свойством сверхтекучести (при сверхнизких T)<br>
• Очень легкий (второй после водорода)<br>
• Высокая теплопроводность<br><br>

<b>Химические свойства</b><br>
• Химически абсолютно инертен<br>
• Не образует стабильных соединений при нормальных условиях<br>
• Не горит и не поддерживает горение<br>
• Существует в виде одноатомного газа<br><br>

<b>Изотопы гелия</b><br>
• Гелий-4 (⁴He) — самый распространенный (99.99%)<br>
• Гелий-3 (³He) — крайне редкий, используется в криогенике<br>
• Гелий-3 является перспективным топливом для термоядерного синтеза будущего<br><br>

<b>Нахождение в природе</b><br>
• Составляет 24% массы Вселенной<br>
• Продукт ядерного синтеза в звездах<br>
• На Земле образуется при альфа-распаде тяжелых элементов<br>
• Добывается из месторождений природного газа<br><br>

<b>Промышленное производство</b><br>
• Фракционная перегонка природного газа<br>
• Криогенное разделение воздуха (в очень малых дозах)<br>
• Очистка с помощью активированного угля<br><br>

<b>Применение гелия</b><br>
• Охлаждение сверхпроводящих магнитов (МРТ, ускорители частиц)<br>
• Наполнение метеозондов и дирижаблей<br>
• Дыхательные смеси для глубоководных погружений<br>
• Защитная среда при сварке металлов<br>
• Детектирование утечек в вакуумных системах<br><br>

<b>Значение в науке</b><br>
• Изучение квантовых эффектов и сверхтекучести<br>
• Важнейший хладагент в фундаментальной физике<br>
• Космологический маркер эволюции Вселенной<br>
• Использование в газохроматографии<br><br>

<b>Взаимодействие с другими областями</b><br>
• Физика — изучение сверхпроводимости<br>
• Медицина — использование в томографах<br>
• Космонавтика — наддув топливных баков ракет<br>
• Промышленность — микроэлектроника и лазеры`;

const enHe = `<b>Basic Facts</b><br>
• Chemical Symbol — He<br>
• Atomic Number — 2<br>
• Atomic Mass — 4.0026<br>
• Group — Noble Gases<br>
• Second most abundant element in the Universe<br>
• Most inert element in the periodic table<br><br>

<b>Atomic Structure</b><br>
• 2 protons in the nucleus<br>
• 2 electrons around the nucleus<br>
• Contains 2 neutrons (Helium-4)<br>
• Electron configuration — 1s²<br>
• Located in the 1st period and 18th group<br><br>

<b>Physical Properties</b><br>
• Colorless, odorless, and tasteless gas<br>
• Lowest boiling point of all elements — −268.9°C<br>
• Does not solidify at normal pressure (even at absolute zero)<br>
• Exhibits superfluidity (at ultra-low temperatures)<br>
• Very light (second only to hydrogen)<br>
• High thermal conductivity<br><br>

<b>Chemical Properties</b><br>
• Chemically completely inert<br>
• Does not form stable compounds under normal conditions<br>
• Non-flammable and does not support combustion<br>
• Exists as a monatomic gas<br><br>

<b>Helium Isotopes</b><br>
• Helium-4 (⁴He) — most common (99.99%)<br>
• Helium-3 (³He) — extremely rare, used in cryogenics<br>
• Helium-3 is a promising fuel for future thermonuclear fusion<br><br>

<b>Occurrence in Nature</b><br>
• Makes up 24% of the Universe's mass<br>
• Product of nuclear fusion in stars<br>
• Formed on Earth via alpha decay of heavy elements<br>
• Extracted from natural gas deposits<br><br>

<b>Industrial Production</b><br>
• Fractional distillation of natural gas<br>
• Cryogenic air separation (in trace amounts)<br>
• Purification using activated carbon<br><br>

<b>Applications of Helium</b><br>
• Cooling superconducting magnets (MRI, particle accelerators)<br>
• Filling weather balloons and blimps<br>
• Breathing mixtures for deep-sea diving<br>
• Protective atmosphere for metal welding<br>
• Leak detection in vacuum systems<br><br>

<b>Significance in Science</b><br>
• Study of quantum effects and superfluidity<br>
• Essential refrigerant in fundamental physics<br>
• Cosmological marker of Universe evolution<br>
• Used in gas chromatography<br><br>

<b>Interaction with Other Fields</b><br>
• Physics — studying superconductivity<br>
• Medicine — use in MRI scanners<br>
• Aerospace — pressurizing rocket fuel tanks<br>
• Industry — microelectronics and lasers`;

const kkHe = `<b>Негізгі фактілер</b><br>
• Химиялық таңбасы — He<br>
• Атомдық нөмірі — 2<br>
• Атомдық массасы — 4.0026<br>
• Тобы — Инертті газдар<br>
• Әлемдегі ең көп таралған екінші элемент<br>
• Периодтық кестедегі ең инертті элемент<br><br>

<b>Атомдық құрылымы</b><br>
• Ядрода 2 протон<br>
• Ядро айналасында 2 электрон<br>
• 2 нейтроны бар (Гелий-4)<br>
• Электрондық конфигурациясы — 1s²<br>
• Периодтық кестенің 1-периодында және 18-тобында орналасқан<br><br>

<b>Физикалық қасиеттері</b><br>
• Түссіз, иіссіз және дәмсіз газ<br>
• Ең төменгі қайнау температурасы — −268.9°C<br>
• Қалыпты қысымда қатып қалмайды (тіпті абсолютті нөлде де)<br>
• Асқын аққыштық қасиетке ие (өте төмен Т кезінде)<br>
• Өте жеңіл (сутегінен кейінгі екінші)<br>
• Жоғары жылу өткізгіштік<br><br>

<b>Химиялық қасиеттері</b><br>
• Химиялық тұрғыдан мүлдем инертті<br>
• Қалыпты жағдайда тұрақты қосылыстар түзбейді<br>
• Жанбайды және жануды қолдамайды<br>
• Бір атомды газ түрінде болады<br><br>

<b>Гелий изотоптары</b><br>
• Гелий-4 (⁴He) — ең көп таралған (99.99%)<br>
• Гелий-3 (³He) — өте сирек кездеседі, криогеникада қолданылады<br>
• Гелий-3 — болашақтағы термоядролық синтез үшін перспективті отын<br><br>

<b>Табиғатта кездесуі</b><br>
• Әлем массасының 24%-ын құрайды<br>
• Жұлдыздардағы ядролық синтез өнімі<br>
• Жерде ауыр элементтердің альфа-ыдырауы кезінде түзіледі<br>
• Табиғи газ кен орындарынан өндіріледі<br><br>

<b>Өнеркәсіптік өндіріс</b><br>
• Табиғи газды фракциялық айдау<br>
• Ауаны криогендік бөлу (өте аз мөлшерде)<br>
• Белсендірілген көмірдің көмегімен тазарту<br><br>

<b>Гелийдің қолданылуы</b><br>
• Асқын өткізгіш магниттерді салқындату (МРТ, бөлшектер үдеткіштері)<br>
• Метеозондтарды және дирижабльдерді толтыру<br>
• Терең суға сүңгуге арналған тыныс алу қоспалары<br>
• Металдарды дәнекерлеу кезіндегі қорғаныс ортасы<br>
• Вакуумдық жүйелердегі жылыстауды (утечка) анықтау<br><br>

<b>Ғылымдағы маңызы</b><br>
• Кванттық эффектілер мен асқын аққыштықты зерттеу<br>
• Іргелі физикадағы маңызды хладагент<br>
• Әлем эволюциясының космологиялық маркері<br>
• Газды хроматографияда қолдану<br><br>

<b>Басқа салалармен өзара әрекеттесуі</b><br>
• Физика — асқын өткізгіштікті зерттеу<br>
• Медицина — томографтарда қолдану<br>
• Космонавтика — зымырандардың отын бактарын үрлеу (наддув)<br>
• Өнеркәсіп — микроэлектроника және лазерлер`;

const locales = {
  ru: { path: 'locales/ru_v2.json', content: ruHe },
  en: { path: 'locales/en_v2.json', content: enHe },
  kk: { path: 'locales/kk_v2.json', content: kkHe }
};

for (const [lang, data] of Object.entries(locales)) {
  const locale = JSON.parse(fs.readFileSync(data.path, 'utf8'));
  locale['system.helium.details'] = data.content;
  // Also update metadata if missing or using old skeletal keys
  locale['system.helium.title'] = lang === 'ru' ? 'Гелий' : (lang === 'kk' ? 'Гелий' : 'Helium');
  locale['system.helium.desc'] = locale['system.muscular.desc'];
  locale['system.helium.fact'] = locale['system.muscular.fact'];
  
  fs.writeFileSync(data.path, JSON.stringify(locale, null, 4));
  console.log(`✓ Updated Helium details in ${lang.toUpperCase()} locale`);
}
