const fs = require('fs');

const ruLi = `<b>Основные факты</b><br>
• Химический символ — Li<br>
• Атомный номер — 3<br>
• Атомная масса — 6.94<br>
• Группа — Щелочные металлы<br>
• Самый легкий металл и самый легкий твердый элемент<br>
• Обладает наименьшей плотностью среди всех твердых тел<br><br>

<b>Атомная структура</b><br>
• 3 протона в ядре<br>
• 3 электрона вокруг ядра<br>
• Содержит 4 нейтрона (Литий-7)<br>
• Электронная конфигурация — [He] 2s¹<br>
• Расположен во 2-м периоде и 1-й группе<br><br>

<b>Физические свойства</b><br>
• Серебристо-белый мягкий металл (режется ножом)<br>
• Плотность в два раза меньше плотности воды (плавает даже в керосине)<br>
• Температура плавления — 180.5°C<br>
• Высокая теплоемкость<br>
• Имеет характерный металлический блеск на свежем срезе<br><br>

<b>Химические свойства</b><br>
• Высокая химическая активность (хранится под слоем вазелина или парафина)<br>
• Реагирует с водой, образуя щелочь (LiOH) и водород<br>
• Окрашивает пламя в яркий карминово-красный цвет<br>
• Реагирует с азотом воздуха при комнатной температуре<br>
• Образует оксид (Li₂O) при горении<br><br>

<b>Изотопы лития</b><br>
• Литий-7 (⁷Li) — основной природный изотоп (92.5%)<br>
• Литий-6 (⁶Li) — используется в ядерной энергетике и термоядерном синтезе<br><br>

<b>Нахождение в природе</b><br>
• Не встречается в свободном виде из-за высокой активности<br>
• Содержится в минералах (сподумен, лепидолит)<br>
• В значительных количествах находится в солончаках (рапа соляных озер)<br>
• Присутствует в морской воде в малых концентрациях<br><br>

<b>Промышленное производство</b><br>
• Электролиз расплава хлорида лития (LiCl)<br>
• Извлечение из природных рассолов путем испарения и химической обработки<br>
• Переработка минерального сырья кислотными методами<br><br>

<b>Применение лития</b><br>
• Литий-ионные аккумуляторы (смартфоны, ноутбуки, электромобили)<br>
• Производство термостойкого стекла и керамики<br>
• Авиационные и космические сплавы (вместе с алюминием и магнием)<br>
• Смазочные материалы (литиевые смазки для высоких температур)<br>
• Медицина: лечение биполярных расстройств и депрессий<br><br>

<b>Значение в энергетике</b><br>
• Критический элемент для «зеленого» перехода (хранение энергии)<br>
• Ключевой компонент для аккумуляторов большой емкости<br>
• Использование в системах кондиционирования воздуха (хлорид и бромид лития)<br><br>

<b>Взаимодействие с другими областями</b><br>
• Экология — основа для электротранспорта<br>
• Медицина — стабилизатор настроения (психиатрия)<br>
• Металлургия — создание сверхлегких сплавов<br>
• Ядерная физика — получение трития`;

const enLi = `<b>Basic Facts</b><br>
• Chemical Symbol — Li<br>
• Atomic Number — 3<br>
• Atomic Mass — 6.94<br>
• Group — Alkali Metals<br>
• Lightest metal and the lightest solid element<br>
• Has the lowest density among all solids<br><br>

<b>Atomic Structure</b><br>
• 3 protons in the nucleus<br>
• 3 electrons around the nucleus<br>
• Contains 4 neutrons (Lithium-7)<br>
• Electron configuration — [He] 2s¹<br>
• Located in the 2nd period and 1st group<br><br>

<b>Physical Properties</b><br>
• Silver-white soft metal (can be cut with a knife)<br>
• Density is half that of water (floats even in kerosene)<br>
• Melting point — 180.5°C<br>
• High specific heat capacity<br>
• Has a characteristic metallic luster on a fresh cut<br><br>

<b>Chemical Properties</b><br>
• High chemical reactivity (stored under vaseline or paraffin)<br>
• Reacts with water to form an alkali (LiOH) and hydrogen<br>
• Colors flame in a bright carmine-red color<br>
• Reacts with air nitrogen at room temperature<br>
• Forms an oxide (Li₂O) when burned<br><br>

<b>Lithium Isotopes</b><br>
• Lithium-7 (⁷Li) — primary natural isotope (92.5%)<br>
• Lithium-6 (⁶Li) — used in nuclear power and thermonuclear fusion<br><br>

<b>Occurrence in Nature</b><br>
• Does not occur free in nature due to high reactivity<br>
• Found in minerals (spodumene, lepidolite)<br>
• Found in significant amounts in brines (salt flats)<br>
• Present in seawater in low concentrations<br><br>

<b>Industrial Production</b><br>
• Electrolysis of molten lithium chloride (LiCl)<br>
• Extraction from natural brines through evaporation and chemical treatment<br>
• Processing of mineral raw materials using acid methods<br><br>

<b>Applications of Lithium</b><br>
• Lithium-ion batteries (smartphones, laptops, electric vehicles)<br>
• Production of heat-resistant glass and ceramics<br>
• Aerospace alloys (combined with aluminum and magnesium)<br>
• Lubricants (lithium greases for high temperatures)<br>
• Medicine: treatment of bipolar disorders and depression<br><br>

<b>Significance in Energy</b><br>
• Critical element for the "green" transition (energy storage)<br>
• Key component for high-capacity rechargeable batteries<br>
• Use in air conditioning systems (lithium chloride and bromide)<br><br>

<b>Interaction with Other Fields</b><br>
• Ecology — foundation for electric transport<br>
• Medicine — mood stabilizer (psychiatry)<br>
• Metallurgy — creating ultralight alloys<br>
• Nuclear Physics — production of tritium`;

const kkLi = `<b>Негізгі фактілер</b><br>
• Химиялық таңбасы — Li<br>
• Атомдық нөмірі — 3<br>
• Атомдық массасы — 6.94<br>
• Тобы — Сілтілік металдар<br>
• Ең жеңіл металл және ең жеңіл қатты элемент<br>
• Барлық қатты денелер арасында ең төмен тығыздыққа ие<br><br>

<b>Атомдық құрылымы</b><br>
• Ядрода 3 протон<br>
• Ядро айналасында 3 электрон<br>
• 4 нейтроны бар (Литий-7)<br>
• Электрондық конфигурациясы — [He] 2s¹<br>
• Периодтық кестенің 2-периодында және 1-тобында орналасқан<br><br>

<b>Физикалық қасиеттері</b><br>
• Күміс түсті ақ жұмсақ металл (пышақпен кесуге болады)<br>
• Тығыздығы судан екі есе аз (тіпті керосинде де қалқиды)<br>
• Балқу температурасы — 180.5°C<br>
• Жоғары жылу сыйымдылығы<br>
• Жаңа кесілген жерінде өзіне тән металдық жылтыры бар<br><br>

<b>Химиялық қасиеттері</b><br>
• Жоғары химиялық белсенділік (вазелин немесе парафин қабаты астында сақталады)<br>
• Сумен әрекеттесіп, сілті (LiOH) және сутегі түзеді<br>
• Жалынды ашық кармин-қызыл түске бояйды<br>
• Бөлме температурасында ауадағы азотпен әрекеттеседі<br>
• Жанған кезде оксид (Li₂O) түзеді<br><br>

<b>Литий изотоптары</b><br>
• Литий-7 (⁷Li) — негізгі табиғи изотоп (92.5%)<br>
• Литий-6 (⁶Li) — ядролық энергетикада және термоядролық синтезде қолданылады<br><br>

<b>Табиғатта кездесуі</b><br>
• Жоғары белсенділігіне байланысты табиғатта бос күйінде кездеспейді<br>
• Минералдарда кездеседі (сподумен, лепидолит)<br>
• Солончактарда (тұзды көлдердің рапасы) айтарлықтай мөлшерде болады<br>
• Теңіз суында аз концентрацияда болады<br><br>

<b>Өнеркәсіптік өндіріс</b><br>
• Литий хлориді (LiCl) балқымасының электролизі<br>
• Буландыру және химиялық өңдеу арқылы табиғи тұзды ерітінділерден алу<br>
• Минералды шикізатты қышқылдық әдістермен өңдеу<br><br>

<b>Литийдің қолданылуы</b><br>
• Литий-ионды аккумуляторлар (смартфондар, ноутбуктер, электромобильдер)<br>
• Ыстыққа төзімді шыны мен керамика өндірісі<br>
• Авиациялық және ғарыштық қорытпалар (алюминий және магниймен бірге)<br>
• Майлау материалдары (жоғары температураға арналған литийлі майлар)<br>
• Медицина: биполярлық бұзылыстар мен депрессияны емдеу<br><br>

<b>Энергетикадағы маңызы</b><br>
• «Жасыл» көшу (энергияны сақтау) үшін маңызды элемент<br>
• Үлкен сыйымдылықты аккумуляторлар үшін негізгі компонент<br>
• Ауаны кондициялау жүйелерінде қолдану (литий хлориді мен бромиді)<br><br>

<b>Басқа салалармен өзара әрекеттесуі</b><br>
• Экология — электр көлігінің негізі<br>
• Медицина — көңіл-күй тұрақтандырғышы (психиатрия)<br>
• Металлургия — өте жеңіл қорытпаларды жасау<br>
• Ядролық физика — тритий алу`;

const locales = {
  ru: { path: 'locales/ru_v2.json', content: ruLi },
  en: { path: 'locales/en_v2.json', content: enLi },
  kk: { path: 'locales/kk_v2.json', content: kkLi }
};

for (const [lang, data] of Object.entries(locales)) {
  const locale = JSON.parse(fs.readFileSync(data.path, 'utf8'));
  locale['system.lithium.details'] = data.content;
  locale['system.lithium.title'] = lang === 'ru' ? 'Литий' : (lang === 'kk' ? 'Литий' : 'Lithium');
  locale['system.lithium.desc'] = locale['system.nervous.desc'];
  locale['system.lithium.fact'] = locale['system.nervous.fact'];
  
  fs.writeFileSync(data.path, JSON.stringify(locale, null, 4));
  console.log(`✓ Updated Lithium details in ${lang.toUpperCase()} locale`);
}
