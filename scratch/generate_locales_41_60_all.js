const fs = require('fs');

const elements = [
    { id: 'niobium', symbol: 'Nb', number: 41, mass: '92.906', group: 'Transition Metal', nameEn: 'Niobium', nameRu: 'Ниобий', nameKk: 'Ниобий' },
    { id: 'molybdenum', symbol: 'Mo', number: 42, mass: '95.95', group: 'Transition Metal', nameEn: 'Molybdenum', nameRu: 'Молибден', nameKk: 'Молибден' },
    { id: 'technetium', symbol: 'Tc', number: 43, mass: '98', group: 'Transition Metal', nameEn: 'Technetium', nameRu: 'Технеций', nameKk: 'Технеций' },
    { id: 'ruthenium', symbol: 'Ru', number: 44, mass: '101.07', group: 'Transition Metal', nameEn: 'Ruthenium', nameRu: 'Рутений', nameKk: 'Рутений' },
    { id: 'rhodium', symbol: 'Rh', number: 45, mass: '102.91', group: 'Transition Metal', nameEn: 'Rhodium', nameRu: 'Родий', nameKk: 'Родий' },
    { id: 'palladium', symbol: 'Pd', number: 46, mass: '106.42', group: 'Transition Metal', nameEn: 'Palladium', nameRu: 'Палладий', nameKk: 'Палладий' },
    { id: 'silver', symbol: 'Ag', number: 47, mass: '107.87', group: 'Transition Metal', nameEn: 'Silver', nameRu: 'Серебро', nameKk: 'Күміс' },
    { id: 'cadmium', symbol: 'Cd', number: 48, mass: '112.41', group: 'Transition Metal', nameEn: 'Cadmium', nameRu: 'Кадмий', nameKk: 'Кадмий' },
    { id: 'indium', symbol: 'In', number: 49, mass: '114.82', group: 'Post-Transition Metal', nameEn: 'Indium', nameRu: 'Индий', nameKk: 'Индий' },
    { id: 'tin', symbol: 'Sn', number: 50, mass: '118.71', group: 'Post-Transition Metal', nameEn: 'Tin', nameRu: 'Олово', nameKk: 'Қалайы' },
    { id: 'antimony', symbol: 'Sb', number: 51, mass: '121.76', group: 'Semimetals', nameEn: 'Antimony', nameRu: 'Сурьма', nameKk: 'Сүрме' },
    { id: 'tellurium', symbol: 'Te', number: 52, mass: '127.6', group: 'Semimetals', nameEn: 'Tellurium', nameRu: 'Теллур', nameKk: 'Теллур' },
    { id: 'iodine', symbol: 'I', number: 53, mass: '126.9', group: 'Halogen', nameEn: 'Iodine', nameRu: 'Иод', nameKk: 'Йод' },
    { id: 'xenon', symbol: 'Xe', number: 54, mass: '131.29', group: 'Noble Gas', nameEn: 'Xenon', nameRu: 'Ксенон', nameKk: 'Ксенон' },
    { id: 'cesium', symbol: 'Cs', number: 55, mass: '132.91', group: 'Alkali Metal', nameEn: 'Cesium', nameRu: 'Цезий', nameKk: 'Цезий' },
    { id: 'barium', symbol: 'Ba', number: 56, mass: '137.33', group: 'Alkaline Earth Metal', nameEn: 'Barium', nameRu: 'Барий', nameKk: 'Барий' },
    { id: 'lanthanum', symbol: 'La', number: 57, mass: '138.91', group: 'Lanthanide', nameEn: 'Lanthanum', nameRu: 'Лантан', nameKk: 'Лантан' },
    { id: 'cerium', symbol: 'Ce', number: 58, mass: '140.12', group: 'Lanthanide', nameEn: 'Cerium', nameRu: 'Церий', nameKk: 'Церий' },
    { id: 'praseodymium', symbol: 'Pr', number: 59, mass: '140.91', group: 'Lanthanide', nameEn: 'Praseodymium', nameRu: 'Празеодим', nameKk: 'Празеодим' },
    { id: 'neodymium', symbol: 'Nd', number: 60, mass: '144.24', group: 'Lanthanide', nameEn: 'Neodymium', nameRu: 'Неодим', nameKk: 'Неодим' }
];

const groups = {
    'Transition Metal': { en: 'Transition Metal', ru: 'Переходный металл', kk: 'Өтпелі металл' },
    'Post-Transition Metal': { en: 'Post-Transition Metal', ru: 'Другой металл', kk: 'Постөтпелі металл' },
    'Semimetals': { en: 'Semimetals', ru: 'Полуметаллы', kk: 'Полуметаллы' },
    'Nonmetal': { en: 'Nonmetal', ru: 'Неметалл', kk: 'Бейметалл' },
    'Halogen': { en: 'Halogen', ru: 'Галоген', kk: 'Галоген' },
    'Noble Gas': { en: 'Noble Gas', ru: 'Благородный газ', kk: 'Инертті газ' },
    'Alkali Metal': { en: 'Alkali Metal', ru: 'Щелочной металл', kk: 'Сілтілік металл' },
    'Alkaline Earth Metal': { en: 'Alkaline Earth Metal', ru: 'Щелочноземельный металл', kk: 'Сілтілік-жер металы' },
    'Lanthanide': { en: 'Lanthanide', ru: 'Лантаноид', kk: 'Лантаноид' }
};

const langs = ['en', 'ru', 'kk'];

langs.forEach(lang => {
    const localePath = `locales/${lang}_v2.json`;
    const locale = JSON.parse(fs.readFileSync(localePath, 'utf8'));

    elements.forEach(el => {
        const name = lang === 'en' ? el.nameEn : (lang === 'ru' ? el.nameRu : el.nameKk);
        const groupObj = groups[el.group];
        const groupName = groupObj[lang];
        const groupLower = groupName.toLowerCase();

        if (lang === 'en') {
            locale[`system.${el.id}.title`] = name;
            locale[`system.${el.id}.desc`] = `${name} is element #${el.number}, a versatile ${groupLower} essential for various scientific and industrial applications.`;
            locale[`system.${el.id}.details`] = `<b>Core Facts</b><br>• Symbol: ${el.symbol}<br>• Atomic Number: ${el.number}<br>• Atomic Mass: ${el.mass}<br>• Group: ${groupName}<br><br><b>Atomic Structure</b><br>• ${el.number} Protons<br>• ${el.number} Electrons in ground state<br><br><b>Scientific Significance</b><br>• Crucial component in ${groupLower} research.`;
            locale[`system.${el.id}.fact`] = `${name} has the atomic number ${el.number} and belongs to the ${groupName} group.`;
        } else if (lang === 'ru') {
            locale[`system.${el.id}.title`] = name;
            locale[`system.${el.id}.desc`] = `${name} — это элемент №${el.number}, универсальный ${groupLower}, необходимый для различных научных и промышленных применений.`;
            locale[`system.${el.id}.details`] = `<b>Основные факты</b><br>• Символ: ${el.symbol}<br>• Атомный номер: ${el.number}<br>• Атомная масса: ${el.mass}<br>• Группа: ${groupName}<br><br><b>Атомная структура</b><br>• ${el.number} Протонов<br>• ${el.number} Электронов в основном состоянии<br><br><b>Научное значение</b><br>• Критически важный компонент в исследованиях ${groupLower}ов.`;
            locale[`system.${el.id}.fact`] = `${name} имеет атомный номер ${el.number} и входит в группу ${groupName}.`;
        } else if (lang === 'kk') {
            locale[`system.${el.id}.title`] = name;
            locale[`system.${el.id}.desc`] = `${name} — бұл №${el.number} элемент, әртүрлі ғылыми және өнеркәсіптік қолданулар үшін қажет әмбебап ${groupLower}.`;
            locale[`system.${el.id}.details`] = `<b>Негізгі фактілер</b><br>• Таңбасы: ${el.symbol}<br>• Атомдық нөмірі: ${el.number}<br>• Атомдық массасы: ${el.mass}<br>• Тобы: ${groupName}<br><br><b>Атомдық құрылымы</b><br>• ${el.number} Протон<br>• Негізгі күйдегі ${el.number} Электрон<br><br><b>Ғылыми маңызы</b><br>• ${groupLower}дарды зерттеудегі маңызды компонент.`;
            locale[`system.${el.id}.fact`] = `${name} атомдық нөмірі ${el.number} және ${groupName} тобына жатады.`;
        }

        locale[`resource.wiki.${el.id}`] = lang === 'en' ? `Wikipedia - ${name}` : (lang === 'ru' ? `Википедия — ${name}` : `Уикипедия — ${name}`);
        locale[`resource.pubchem.${el.id}`] = `PubChem - ${name}`;

        // AI translations
        if (lang === 'en') {
            locale[`ai.${el.id}.simple`] = `${name} is a chemical element with symbol ${el.symbol} and atomic number ${el.number}.`;
            locale[`ai.${el.id}.detailed`] = `${name} (${el.symbol}) is the ${el.number}th element in the periodic table.`;
            locale[`ai.${el.id}.study.1`] = `Atomic number: ${el.number}`;
            locale[`ai.${el.id}.study.2`] = `Symbol: ${el.symbol}`;
            locale[`ai.${el.id}.study.3`] = `Group: ${groupName}`;
            locale[`ai.${el.id}.study.4`] = `Mass: ${el.mass}`;
            locale[`ai.${el.id}.study.5`] = `Applications in chemistry.`;
            
            locale[`ai.${el.id}.q1.text`] = `What is the atomic number of ${name}?`;
            locale[`ai.${el.id}.q1.opt.1`] = `${el.number}`;
            locale[`ai.${el.id}.q1.opt.2`] = `${el.number + 1}`;
            locale[`ai.${el.id}.q1.opt.3`] = `${el.number - 1}`;
            locale[`ai.${el.id}.q1.opt.4`] = `0`;
        } else if (lang === 'ru') {
            locale[`ai.${el.id}.simple`] = `${name} — химический элемент с символом ${el.symbol} и атомным номером ${el.number}.`;
            locale[`ai.${el.id}.detailed`] = `${name} (${el.symbol}) — ${el.number}-й элемент в периодической таблице.`;
            locale[`ai.${el.id}.study.1`] = `Атомный номер: ${el.number}`;
            locale[`ai.${el.id}.study.2`] = `Символ: ${el.symbol}`;
            locale[`ai.${el.id}.study.3`] = `Группа: ${groupName}`;
            locale[`ai.${el.id}.study.4`] = `Масса: ${el.mass}`;
            locale[`ai.${el.id}.study.5`] = `Применение в химии.`;
            
            locale[`ai.${el.id}.q1.text`] = `Какой атомный номер у ${name}?`;
            locale[`ai.${el.id}.q1.opt.1`] = `${el.number}`;
            locale[`ai.${el.id}.q1.opt.2`] = `${el.number + 1}`;
            locale[`ai.${el.id}.q1.opt.3`] = `${el.number - 1}`;
            locale[`ai.${el.id}.q1.opt.4`] = `0`;
        } else if (lang === 'kk') {
            locale[`ai.${el.id}.simple`] = `${name} — символы ${el.symbol} және атомдық нөмірі ${el.number} болатын химиялық элемент.`;
            locale[`ai.${el.id}.detailed`] = `${name} (${el.symbol}) — периодтық кестедегі ${el.number}-ші элемент.`;
            locale[`ai.${el.id}.study.1`] = `Атомдық нөмірі: ${el.number}`;
            locale[`ai.${el.id}.study.2`] = `Таңбасы: ${el.symbol}`;
            locale[`ai.${el.id}.study.3`] = `Тобы: ${groupName}`;
            locale[`ai.${el.id}.study.4`] = `Массасы: ${el.mass}`;
            locale[`ai.${el.id}.study.5`] = `Химиядағы қолданылуы.`;
            
            locale[`ai.${el.id}.q1.text`] = `${name} элементінің атомдық нөмірі нешеге тең?`;
            locale[`ai.${el.id}.q1.opt.1`] = `${el.number}`;
            locale[`ai.${el.id}.q1.opt.2`] = `${el.number + 1}`;
            locale[`ai.${el.id}.q1.opt.3`] = `${el.number - 1}`;
            locale[`ai.${el.id}.q1.opt.4`] = `0`;
        }
        
        // Symbols and options (common for simplicity in this batch)
        locale[`ai.${el.id}.q2.text`] = lang === 'en' ? `What is the symbol for ${name}?` : (lang === 'ru' ? `Какой символ у ${name}?` : `${name} таңбасы қандай?`);
        locale[`ai.${el.id}.q2.opt.1`] = `X`;
        locale[`ai.${el.id}.q2.opt.2`] = el.symbol;
        locale[`ai.${el.id}.q2.opt.3`] = `Y`;
        locale[`ai.${el.id}.q2.opt.4`] = `Z`;
        
        locale[`ai.${el.id}.q3.text`] = lang === 'en' ? `To which group does ${name} belong?` : (lang === 'ru' ? `К какой группе относится ${name}?` : `${name} қай топқа жатады?`);
        locale[`ai.${el.id}.q3.opt.1`] = lang === 'en' ? 'Metals' : (lang === 'ru' ? 'Металлы' : 'Металдар');
        locale[`ai.${el.id}.q3.opt.2`] = lang === 'en' ? 'Non-metals' : (lang === 'ru' ? 'Неметаллы' : 'Бейметалдар');
        locale[`ai.${el.id}.q3.opt.3`] = groupName;
        locale[`ai.${el.id}.q3.opt.4`] = lang === 'en' ? 'Gases' : (lang === 'ru' ? 'Газы' : 'Газдар');

        locale[`ai.${el.id}.q4.text`] = lang === 'en' ? `Atomic mass of ${name}?` : (lang === 'ru' ? `Атомная масса ${name}?` : `${name} атомдық массасы?`);
        locale[`ai.${el.id}.q4.opt.1`] = el.mass;
        locale[`ai.${el.id}.q4.opt.2`] = '1.0';
        locale[`ai.${el.id}.q4.opt.3`] = '10.0';
        locale[`ai.${el.id}.q4.opt.4`] = '100.0';

        locale[`ai.${el.id}.q5.text`] = lang === 'en' ? `Usage of ${name}?` : (lang === 'ru' ? `Применение ${name}?` : `${name} қолданылуы?`);
        locale[`ai.${el.id}.q5.opt.1`] = lang === 'en' ? 'Medicine' : (lang === 'ru' ? 'Медицина' : 'Медицина');
        locale[`ai.${el.id}.q5.opt.2`] = lang === 'en' ? 'Industry' : (lang === 'ru' ? 'Промышленность' : 'Өнеркәсіп');
        locale[`ai.${el.id}.q5.opt.3`] = lang === 'en' ? 'Agriculture' : (lang === 'ru' ? 'Сельское хозяйство' : 'Ауыл шаруашылығы');
        locale[`ai.${el.id}.q5.opt.4`] = lang === 'en' ? 'All of above' : (lang === 'ru' ? 'Все вышеперечисленное' : 'Барлығы');
    });

    fs.writeFileSync(localePath, JSON.stringify(locale, null, 4));
});
console.log('Updated all locales with elements 41-60');
