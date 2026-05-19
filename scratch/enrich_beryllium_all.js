const fs = require('fs');

const ruBe = `<b>Основные факты</b><br>
• Химический символ — Be<br>
• Атомный номер — 4<br>
• Атомная масса — 9.012<br>
• Группа — Щелочноземельные металлы<br>
• Один из самых легких и при этом самых жестких металлов<br>
• Обладает высокой теплопроводностью и не magnitен<br><br>

<b>Атомная структура</b><br>
• 4 протона в ядре<br>
• 4 электрона вокруг ядра<br>
• Содержит 5 нейтронов (Бериллий-9)<br>
• Электронная конфигурация — [He] 2s²<br>
• Расположен во 2-м периоде и 2-й группе<br><br>

<b>Физические свойства</b><br>
• Стально-серый, очень твердый и хрупкий металл<br>
• Исключительно легкий (плотность 1.85 г/см³)<br>
• Высокая температура плавления — 1287°C<br>
• Сохраняет прочность при высоких температурах<br>
• Высокий модуль упругости (на 50% выше, чем у стали)<br><br>

<b>Химические свойства</b><br>
• Амфотерный элемент (реагирует и с кислотами, и со щелочами)<br>
• Устойчив к коррозии благодаря прочной оксидной пленке (BeO)<br>
• Пыль и пары бериллия крайне токсичны и канцерогенны<br>
• Не реагирует с водой даже при красном калении<br><br>

<b>Изотопы бериллия</b><br>
• Бериллий-9 (⁹Be) — единственный стабильный природный изотоп<br>
• Бериллий-10 — радиоактивный изотоп с долгим периодом полураспада, используется в геологии<br><br>

<b>Нахождение в природе</b><br>
• Встречается в составе минералов, самый известный — берилл<br>
• Драгоценные разновидности берилла — изумруд (зеленый) и аквамарин (голубой)<br>
• Добывается в основном из бертрандита и берилла<br><br>

<b>Промышленное производство</b><br>
• Восстановление фторида бериллия (BeF₂) магнием<br>
• Электролиз расплава хлорида бериллия<br>
• Очистка методом зонной плавки для получения сверхчистого металла<br><br>

<b>Применение бериллия</b><br>
• Аэрокосмическая отрасль: зеркала космических телескопов (например, Джеймс Уэбб)<br>
• Ядерная энергетика: замедлитель и отражатель нейтронов<br>
• Сплавы: бериллиевая бронза (искробезопасный инструмент, пружины)<br>
• Рентгеновская техника: окна рентгеновских трубок (бериллий прозрачен для лучей)<br>
• Акустика: диффузоры высокочастотных динамиков премиум-класса<br><br>

<b>Значение в науке и технике</b><br>
• Идеальный материал для точных приборов, работающих в экстремальных условиях<br>
• Использование в гироскопах и деталях наведения ракет<br>
• Критически важен для исследований в области физики элементарных частиц (детали детекторов)<br><br>

<b>Взаимодействие с другими областями</b><br>
• Космонавтика — сверхлегкие конструкции<br>
• Геммология — изучение изумрудов и аквамаринов<br>
• Медицина — использование в диагностическом оборудовании (рентген)<br>
• Техника безопасности — создание неискрящего инструмента для шахт`;

const enBe = `<b>Basic Facts</b><br>
• Chemical Symbol — Be<br>
• Atomic Number — 4<br>
• Atomic Mass — 9.012<br>
• Group — Alkaline Earth Metals<br>
• One of the lightest yet stiffest metals<br>
• High thermal conductivity and non-magnetic<br><br>

<b>Atomic Structure</b><br>
• 4 protons in the nucleus<br>
• 4 electrons around the nucleus<br>
• Contains 5 neutrons (Beryllium-9)<br>
• Electron configuration — [He] 2s²<br>
• Located in the 2nd period and 2nd group<br><br>

<b>Physical Properties</b><br>
• Steel-grey, very hard, and brittle metal<br>
• Exceptionally lightweight (density 1.85 g/cm³)<br>
• High melting point — 1287°C<br>
• Maintains strength at high temperatures<br>
• High elastic modulus (50% higher than steel)<br><br>

<b>Chemical Properties</b><br>
• Amphoteric element (reacts with both acids and alkalis)<br>
• Corrosion-resistant due to a tough oxide film (BeO)<br>
• Beryllium dust and fumes are highly toxic and carcinogenic<br>
• Does not react with water even at red heat<br><br>

<b>Beryllium Isotopes</b><br>
• Beryllium-9 (⁹Be) — the only stable natural isotope<br>
• Beryllium-10 — radioactive isotope with a long half-life, used in geology<br><br>

<b>Occurrence in Nature</b><br>
• Found in minerals, the most famous being beryl<br>
• Precious varieties of beryl include emerald (green) and aquamarine (blue)<br>
• Primarily extracted from bertrandite and beryl<br><br>

<b>Industrial Production</b><br>
• Reduction of beryllium fluoride (BeF₂) with magnesium<br>
• Electrolysis of molten beryllium chloride<br>
• Purification using zone melting to obtain ultra-pure metal<br><br>

<b>Applications of Beryllium</b><br>
• Aerospace: mirrors for space telescopes (e.g., James Webb)<br>
• Nuclear Energy: neutron moderator and reflector<br>
• Alloys: beryllium copper (non-sparking tools, springs)<br>
• X-ray Technology: windows for X-ray tubes (beryllium is transparent to X-rays)<br>
• Acoustics: tweeters for premium-class speakers<br><br>

<b>Significance in Science and Technology</b><br>
• Ideal material for precision instruments operating in extreme conditions<br>
• Used in gyroscopes and rocket guidance components<br>
• Critically important for particle physics research (detector components)<br><br>

<b>Interaction with Other Fields</b><br>
• Aerospace — ultralight structures<br>
• Gemology — study of emeralds and aquamarines<br>
• Medicine — use in diagnostic equipment (X-ray)<br>
• Safety Engineering — non-sparking tools for mines`;

const kkBe = `<b>Негізгі фактілер</b><br>
• Химиялық таңбасы — Be<br>
• Атомдық нөмірі — 4<br>
• Атомдық массасы — 9.012<br>
• Тобы — Сілтілік-жер металдары<br>
• Ең жеңіл және сонымен бірге ең қатты металдардың бірі<br>
• Жоғары жылу өткізгіштікке ие және магнитті емес<br><br>

<b>Атомдық құрылымы</b><br>
• Ядрода 4 протон<br>
• Ядро айналасында 4 электрон<br>
• 5 нейтроны бар (Бериллий-9)<br>
• Электрондық конфигурациясы — [He] 2s²<br>
• Периодтық кестенің 2-периодында және 2-тобында орналасқан<br><br>

<b>Физикалық қасиеттері</b><br>
• Болат түсті сұр, өте қатты және морт металл<br>
• Ерекше жеңіл (тығыздығы 1.85 г/см³)<br>
• Жоғары балқу температурасы — 1287°C<br>
• Жоғары температурада беріктігін сақтайды<br>
• Жоғары серпімділік модулі (болаттан 50%-ға жоғары)<br><br>

<b>Химиялық қасиеттері</b><br>
• Амфотерлі элемент (қышқылдармен де, сілтілермен де әрекеттеседі)<br>
• Берік оксидті қабықшаның (BeO) арқасында коррозияға төзімді<br>
• Бериллий шаңы мен буы өте улы және канцерогенді<br>
• Қызарғанша қыздырғанда да сумен әрекеттеспейді<br><br>

<b>Бериллий изотоптары</b><br>
• Бериллий-9 (⁹Be) — жалғыз тұрақты табиғи изотоп<br>
• Бериллий-10 — жартылай ыдырау периоды ұзақ радиоактивті изотоп, геологияда қолданылады<br><br>

<b>Табиғатта кездесуі</b><br>
• Минералдардың құрамында кездеседі, ең танымалы — берилл<br>
• Бериллдің асыл түрлері — зүбәржат (изумруд, жасыл) және аквамарин (көгілдір)<br>
• Негізінен бертрандит пен бериллден өндіріледі<br><br>

<b>Өнеркәсіптік өндіріс</b><br>
• Бериллий фторидін (BeF₂) магниймен тотықсыздандыру<br>
• Бериллий хлориді балқымасының электролизі<br>
• Асқын таза металл алу үшін зоналық балқыту әдісімен тазарту<br><br>

<b>Бериллийдің қолданылуы</b><br>
• Аэроғарыш саласы: ғарыш телескоптарының айналары (мысалы, Джеймс Уэбб)<br>
• Ядролық энергетика: нейтрондарды баяулатқыш және шағылыстырғыш<br>
• Қорытпалар: бериллийлі қола (ұшқын шығармайтын құралдар, серіппелер)<br>
• Рентген техникасы: рентген түтікшелерінің терезелері (бериллий сәулелер үшін мөлдір)<br>
• Акустика: премиум-класты жоғары жиілікті динамиктердің диффузорлары<br><br>

<b>Ғылым мен техникадағы маңызы</b><br>
• Экстремалды жағдайларда жұмыс істейтін дәл аспаптар үшін тамаша материал<br>
• Гироскоптарда және зымырандарды бағыттау бөлшектерінде қолдану<br>
• Элементар бөлшектер физикасы саласындағы зерттеулер үшін маңызды (детектор бөлшектері)<br><br>

<b>Басқа салалармен өзара әрекеттесуі</b><br>
• Космонавтика — өте жеңіл конструкциялар<br>
• Геммология — зүбәржаттар мен аквамариндерді зерттеу<br>
• Медицина — диагностикалық жабдықтарда қолдану (рентген)<br>
• Техника қауіпсіздігі — шахталар үшін ұшқын шығармайтын құралдар жасау`;

const locales = {
  ru: { path: 'locales/ru_v2.json', content: ruBe },
  en: { path: 'locales/en_v2.json', content: enBe },
  kk: { path: 'locales/kk_v2.json', content: kkBe }
};

for (const [lang, data] of Object.entries(locales)) {
  const locale = JSON.parse(fs.readFileSync(data.path, 'utf8'));
  locale['system.beryllium.details'] = data.content;
  locale['system.beryllium.title'] = lang === 'ru' ? 'Бериллий' : (lang === 'kk' ? 'Бериллий' : 'Beryllium');
  locale['system.beryllium.desc'] = locale['system.cardiovascular.desc'];
  locale['system.beryllium.fact'] = locale['system.cardiovascular.fact'];
  
  fs.writeFileSync(data.path, JSON.stringify(locale, null, 4));
  console.log(`✓ Updated Beryllium details in ${lang.toUpperCase()} locale`);
}
