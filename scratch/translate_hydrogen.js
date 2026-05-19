const fs = require('fs');

const enDetails = `<b>Basic Facts</b><br>
• Chemical Symbol — H<br>
• Atomic Number — 1<br>
• Lightest element in the periodic table<br>
• Most abundant element in the Universe<br>
• Colorless, odorless, highly flammable gas<br>
• Exists primarily as diatomic molecules — H₂<br>
• Main component of water and organic compounds<br><br>

<b>Atomic Structure</b><br>
• 1 proton in the nucleus<br>
• 1 electron around the nucleus<br>
• Usually has no neutrons (Protium isotope)<br>
• Electron configuration — 1s¹<br>
• Located in the 1st period and 1st group of the periodic table<br><br>

<b>Physical Properties</b><br>
• Very low density<br>
• Boiling point — −252.9°C<br>
• Melting point — −259.1°C<br>
• Burns with a pale blue flame<br>
• Non-metallic element<br>
• High flammability<br>
• Poorly soluble in water<br><br>

<b>Chemical Properties</b><br>
• Reacts rapidly with oxygen → forms water<br>
• Forms covalent bonds with many elements<br>
• Can act as a reducing agent<br>
• Forms acids when combined with non-metals<br>
• Forms hydrides with metals<br>
• Common oxidation states — +1 and −1<br><br>

<b>Hydrogen Isotopes</b><br>
• Protium (¹H) — the most common isotope<br>
• Deuterium (²H) — contains one neutron<br>
• Tritium (³H) — a radioactive isotope<br>
• Deuterium is used in nuclear reactors<br>
• Tritium is used in scientific research and thermonuclear fusion studies<br><br>

<b>Occurrence in Nature</b><br>
• Found in stars and the Sun<br>
• Present in water molecules (H₂O)<br>
• Part of all living organisms<br>
• Found in hydrocarbons and organic compounds<br>
• Rarely exists in free form in Earth's atmosphere<br><br>

<b>Industrial Production</b><br>
• Steam methane reforming<br>
• Water electrolysis<br>
• Coal gasification<br>
• Biological methods of hydrogen production<br>
• "Green" hydrogen produced using renewable energy sources<br><br>

<b>Applications of Hydrogen</b><br>
• Rocket fuel<br>
• Fuel cells for power generation<br>
• Ammonia production (fertilizers)<br>
• Petroleum refining<br>
• Hydrogenation of vegetable oils<br>
• Cooling systems in electric generators<br><br>

<b>Significance in Science and Energy</b><br>
• Primary fuel source for stars<br>
• Essential for water formation<br>
• Important in organic chemistry<br>
• Potential eco-friendly energy carrier<br>
• Produces only water when used in fuel cells<br>
• Considered vital for future sustainable energy systems<br><br>

<b>Interaction with Other Fields</b><br>
• Chemistry — forms compounds and reactions<br>
• Physics — nuclear fusion in stars<br>
• Biology — component of organic molecules<br>
• Ecology — clean energy technologies<br>
• Industry — fuel and chemical production<br>
• Space Science — primary element in the Universe`;

const kkDetails = `<b>Негізгі фактілер</b><br>
• Химиялық таңбасы — H<br>
• Атомдық нөмірі — 1<br>
• Периодтық кестедегі ең жеңіл элемент<br>
• Әлемдегі ең көп таралған элемент<br>
• Түссіз, иіссіз, тез тұтанатын газ<br>
• Негізінен екі атомды молекулалар түрінде болады — H₂<br>
• Судың және органикалық қосылыстардың негізгі компоненті<br><br>

<b>Атомдық құрылымы</b><br>
• Ядрода 1 протон<br>
• Ядро айналасында 1 электрон<br>
• Әдетте нейтрондары болмайды (Протий изотопы)<br>
• Электрондық конфигурациясы — 1s¹<br>
• Периодтық кестенің 1-периодында және 1-тобында орналасқан<br><br>

<b>Физикалық қасиеттері</b><br>
• Өте төмен тығыздық<br>
• Қайнау температурасы — −252.9°C<br>
• Балқу температурасы — −259.1°C<br>
• Бозғылт көк жалынмен жанады<br>
• Бейметалл элемент<br>
• Жоғары жанғыштық<br>
• Суда нашар ериді<br><br>

<b>Химиялық қасиеттері</b><br>
• Оттегімен тез әрекеттеседі → су түзеді<br>
• Көптеген элементтермен ковалентті байланыс түзеді<br>
• Тотықсыздандырғыш ретінде әрекет ете алады<br>
• Бейметалдармен қосылғанда қышқылдар түзеді<br>
• Металдармен гидридтер түзеді<br>
• Жалпы тотығу дәрежелері — +1 және −1<br><br>

<b>Сутегі изотоптары</b><br>
• Протий (¹H) — ең көп таралған изотоп<br>
• Дейтерий (²H) — құрамында бір нейтрон бар<br>
• Тритий (³H) — радиоактивті изотоп<br>
• Дейтерий ядролық реакторларда қолданылады<br>
• Тритий ғылыми зерттеулерде және термоядролық синтезді зерттеуде қолданылады<br><br>

<b>Табиғатта кездесуі</b><br>
• Жұлдыздарда және Күнде кездеседі<br>
• Су молекулаларында (H₂O) болады<br>
• Барлық тірі организмдердің бөлігі<br>
• Көмірсутектер мен органикалық қосылыстардың құрамында болады<br>
• Жер атмосферасында бос күйінде сирек кездеседі<br><br>

<b>Өнеркәсіптік өндіріс</b><br>
• Метанды булы конверсиялау<br>
• Су электролизі<br>
• Көмірді газдандыру<br>
• Сутегі өндірудің биологиялық әдістері<br>
• Жаңартылатын энергия көздерін пайдалана отырып өндірілетін «жасыл» сутегі<br><br>

<b>Сутегінің қолданылуы</b><br>
• Зымыран отыны<br>
• Электр энергиясын өндіруге арналған отын элементтері<br>
• Аммиак өндірісі (тыңайтқыштар)<br>
• Мұнай өңдеу<br>
• Өсімдік майларын гидрогенизациялау<br>
• Электр генераторларындағы салқындату жүйелері<br><br>

<b>Ғылым мен энергетикадағы маңызы</b><br>
• Жұлдыздардың негізгі отын көзі<br>
• Судың түзілуі үшін қажет<br>
• Органикалық химияда маңызды<br>
• Потенциалды экологиялық таза энергия тасымалдаушы<br>
• Отын элементтері жұмыс істегенде тек су бөледі<br>
• Болашақтағы тұрақты энергетикалық жүйелер үшін маңызды деп саналады<br><br>

<b>Басқа салалармен өзара әрекеттесуі</b><br>
• Химия — қосылыстар мен реакциялар түзеді<br>
• Физика — жұлдыздардағы ядролық синтез<br>
• Биология — органикалық молекулалардың компоненті<br>
• Экология — таза энергия технологиялары<br>
• Өнеркәсіп — отын мен химикаттар өндірісі<br>
• Космос ғылымы — Әлемдегі негізгі элемент`;

const enPath = 'locales/en_v2.json';
const kkPath = 'locales/kk_v2.json';

const enLocale = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const kkLocale = JSON.parse(fs.readFileSync(kkPath, 'utf8'));

enLocale['system.hydrogen.details'] = enDetails;
kkLocale['system.hydrogen.details'] = kkDetails;

fs.writeFileSync(enPath, JSON.stringify(enLocale, null, 4));
fs.writeFileSync(kkPath, JSON.stringify(kkLocale, null, 4));

console.log('✓ Updated Hydrogen details in EN and KK locales');
