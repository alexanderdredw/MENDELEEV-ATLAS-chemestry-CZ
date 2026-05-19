const fs = require('fs');

const ruB = `<b>Основные факты</b><br>
• Химический символ — B<br>
• Атомный номер — 5<br>
• Атомная масса — 10.81<br>
• Группа — Металлоиды<br>
• Единственный неметаллический элемент в 13-й группе<br>
• Чрезвычайно твердый и тугоплавкий элемент<br><br>

<b>Атомная структура</b><br>
• 5 протонов в ядре<br>
• 5 электронов вокруг ядра<br>
• Содержит 6 нейтронов (Бор-11)<br>
• Электронная конфигурация — [He] 2s² 2p¹<br>
• Расположен во 2-м периоде и 13-й группе<br><br>

<b>Физические свойства</b><br>
• Черный или серый, очень твердый кристалл (второй после алмаза по твердости среди простых веществ)<br>
• Высокая температура плавления — 2076°C<br>
• Обладает свойствами полупроводника<br>
• В аморфном виде — бурый порошок<br>
• Очень низкая электропроводность при комнатной температуре, растет при нагревании<br><br>

<b>Химические свойства</b><br>
• Химически инертен при обычных условиях<br>
• При нагревании реагирует с кислородом, азотом и галогенами<br>
• Образует борную кислоту (H₃BO₃) и бораты<br>
• С металлами образует бориды — сверхтвердые и жаропрочные соединения<br><br>

<b>Изотопы бора</b><br>
• Бор-11 (¹¹B) — основной природный изотоп (80%)<br>
• Бор-10 (¹⁰B) — обладает уникальной способностью поглощать нейтроны, что крайне важно для ядерной техники<br><br>

<b>Нахождение в природе</b><br>
• В свободном виде в природе не встречается<br>
• Основные минералы — бура (боракс) и кернит<br>
• Крупнейшие месторождения находятся в Турции и США (Калифорния)<br>
• Содержится в морской воде и в почве как микроэлемент<br><br>

<b>Промышленное производство</b><br>
• Восстановление оксида бора (B₂O₃) магнием или алюминием<br>
• Термическое разложение гидридов бора (боранов)<br>
• Электролиз расплавленных боратов<br><br>

<b>Применение бора</b><br>
• Производство боросиликатного стекла (пирекс) — устойчивого к резким перепадам температур<br>
• Ядерная энергетика: регулирующие стержни реакторов (поглощение нейтронов)<br>
• Сельское хозяйство: борные удобрения для роста растений<br>
• Сверхтвердые материалы: карбид бора (бронежилеты, сопла ракет)<br>
• Моющие средства и косметика (бура, борная кислота)<br><br>

<b>Значение в науке и жизни</b><br>
• Важный микроэлемент для растений (укрепление клеточных стенок)<br>
• Изучение соединений бора привело к открытию новых типов химических связей<br>
• Использование в полупроводниковой промышленности для легирования кремния<br><br>

<b>Взаимодействие с другими областями</b><br>
• Ядерная физика — защита от радиации<br>
• Биология — питание растений и обмен веществ<br>
• Космонавтика — создание жаропрочных покрытий<br>
• Промышленность — создание «умных» стекол и эмалей`;

const enB = `<b>Basic Facts</b><br>
• Chemical Symbol — B<br>
• Atomic Number — 5<br>
• Atomic Mass — 10.81<br>
• Group — Metalloids<br>
• The only non-metallic element in group 13<br>
• Extremely hard and heat-resistant element<br><br>

<b>Atomic Structure</b><br>
• 5 protons in the nucleus<br>
• 5 electrons around the nucleus<br>
• Contains 6 neutrons (Boron-11)<br>
• Electron configuration — [He] 2s² 2p¹<br>
• Located in the 2nd period and 13th group<br><br>

<b>Physical Properties</b><br>
• Black or grey, very hard crystal (second only to diamond in hardness among simple substances)<br>
• High melting point — 2076°C<br>
• Possesses semiconductor properties<br>
• In amorphous form — a brown powder<br>
• Very low electrical conductivity at room temperature, increases with heating<br><br>

<b>Chemical Properties</b><br>
• Chemically inert under normal conditions<br>
• Reacts with oxygen, nitrogen, and halogens when heated<br>
• Forms boric acid (H₃BO₃) and borates<br>
• Forms borides with metals — ultra-hard and heat-resistant compounds<br><br>

<b>Boron Isotopes</b><br>
• Boron-11 (¹¹B) — primary natural isotope (80%)<br>
• Boron-10 (¹⁰B) — has a unique ability to absorb neutrons, which is vital for nuclear technology<br><br>

<b>Occurrence in Nature</b><br>
• Does not occur free in nature<br>
• Main minerals are borax and kernite<br>
• Largest deposits are in Turkey and the USA (California)<br>
• Present in seawater and soil as a trace element<br><br>

<b>Industrial Production</b><br>
• Reduction of boron oxide (B₂O₃) with magnesium or aluminum<br>
• Thermal decomposition of boron hydrides (boranes)<br>
• Electrolysis of molten borates<br><br>

<b>Applications of Boron</b><br>
• Production of borosilicate glass (Pyrex) — resistant to sudden temperature changes<br>
• Nuclear Power: reactor control rods (neutron absorption)<br>
• Agriculture: boron fertilizers for plant growth<br>
• Ultra-hard materials: boron carbide (body armor, rocket nozzles)<br>
• Detergents and cosmetics (borax, boric acid)<br><br>

<b>Significance in Science and Life</b><br>
• Essential trace element for plants (cell wall strengthening)<br>
• Study of boron compounds led to the discovery of new types of chemical bonds<br>
• Used in the semiconductor industry for doping silicon<br><br>

<b>Interaction with Other Fields</b><br>
• Nuclear Physics — radiation shielding<br>
• Biology — plant nutrition and metabolism<br>
• Aerospace — creating heat-resistant coatings<br>
• Industry — creating "smart" glasses and enamels`;

const kkB = `<b>Негізгі фактілер</b><br>
• Химиялық таңбасы — B<br>
• Атомдық нөмірі — 5<br>
• Атомдық массасы — 10.81<br>
• Тобы — Металлоидтар<br>
• 13-топтағы жалғыз бейметалл элемент<br>
• Өте қатты және отқа төзімді элемент<br><br>

<b>Атомдық құрылымы</b><br>
• Ядрода 5 протон<br>
• Ядро айналасында 5 электрон<br>
• 6 нейтроны бар (Бор-11)<br>
• Электрондық конфигурациясы — [He] 2s² 2p¹<br>
• Периодтық кестенің 2-периодында және 13-тобында орналасқан<br><br>

<b>Физикалық қасиеттері</b><br>
• Қара немесе сұр, өте қатты кристалл (жай заттар арасында қаттылығы жағынан алмастан кейінгі екінші орында)<br>
• Жоғары балқу температурасы — 2076°C<br>
• Жартылай өткізгіштік қасиеттерге ие<br>
• Аморфты түрінде — қоңыр ұнтақ<br>
• Бөлме температурасында электр өткізгіштігі өте төмен, қыздырғанда артады<br><br>

<b>Химиялық қасиеттері</b><br>
• Қалыпты жағдайда химиялық инертті<br>
• Қыздырғанда оттегімен, азотпен және галогендермен әрекеттеседі<br>
• Бор қышқылын (H₃BO₃) және бораттар түзеді<br>
• Металдармен боридтер — өте қатты және ыстыққа төзімді қосылыстар түзеді<br><br>

<b>Бор изотоптары</b><br>
• Бор-11 (¹¹B) — негізгі табиғи изотоп (80%)<br>
• Бор-10 (¹⁰B) — нейтрондарды жұтудың ерекше қабілетіне ие, бұл ядролық техника үшін өте маңызды<br><br>

<b>Табиғатта кездесуі</b><br>
• Табиғатта бос күйінде кездеспейді<br>
• Негізгі минералдары — бура (боракс) және кернит<br>
• Ең ірі кен орындары Түркияда және АҚШ-та (Калифорния) орналасқан<br>
• Теңіз суында және топырақта микроэлемент ретінде кездеседі<br><br>

<b>Өнеркәсіптік өндіріс</b><br>
• Бор оксидін (B₂O₃) магниймен немесе алюминиймен тотықсыздандыру<br>
• Бор гидридтерінің (борадардың) термиялық ыдырауы<br>
• Балқытылған бораттардың электролизі<br><br>

<b>Бордың қолданылуы</b><br>
• Температураның күрт өзгеруіне төзімді боросиликатты шыны (пирекс) өндірісі<br>
• Ядролық энергетика: реакторлардың реттеуші стерженьдері (нейтрондарды жұту)<br>
• Ауыл шаруашылығы: өсімдіктердің өсуіне арналған бор тыңайтқыштары<br>
• Өте қатты материалдар: бор карбиді (бронежилеттер, зымыран соплары)<br>
• Жуғыш заттар мен косметика (бура, бор қышқылы)<br><br>

<b>Ғылым мен өмірдегі маңызы</b><br>
• Өсімдіктер үшін маңызды микроэлемент (жасуша қабырғаларын нығайту)<br>
• Бор қосылыстарын зерттеу химиялық байланыстардың жаңа түрлерінің ашылуына әкелді<br>
• Жартылай өткізгіш өнеркәсібінде кремнийді легирлеу үшін қолдану<br><br>

<b>Басқа салалармен өзара әрекеттесуі</b><br>
• Ядролық физика — радиациядан қорғау<br>
• Биология — өсімдіктердің қоректенуі және зат алмасуы<br>
• Космонавтика — ыстыққа төзімді жабындар жасау<br>
• Өнеркәсіп — «ақылды» шынылар мен эмальдар жасау`;

const locales = {
  ru: { path: 'locales/ru_v2.json', content: ruB },
  en: { path: 'locales/en_v2.json', content: enB },
  kk: { path: 'locales/kk_v2.json', content: kkB }
};

for (const [lang, data] of Object.entries(locales)) {
  const locale = JSON.parse(fs.readFileSync(data.path, 'utf8'));
  locale['system.boron.details'] = data.content;
  locale['system.boron.title'] = lang === 'ru' ? 'Бор' : (lang === 'kk' ? 'Бор' : 'Boron');
  // Boron uses 'boron' ID directly, but check if any legacy key was mapped
  locale['system.boron.desc'] = locale['system.boron.desc'] || 'Metalloid element';
  locale['system.boron.fact'] = locale['system.boron.fact'] || 'Hardest after diamond';
  
  fs.writeFileSync(data.path, JSON.stringify(locale, null, 4));
  console.log(`✓ Updated Boron details in ${lang.toUpperCase()} locale`);
}
