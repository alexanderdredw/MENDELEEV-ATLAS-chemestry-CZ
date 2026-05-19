const fs = require('fs');
const path = require('path');

const elements = [
    { id: 'scandium', symbol: 'Sc', number: 21, mass: '44.956', group: 'Өтпелі металл', nameKk: 'Скандий' },
    { id: 'titanium', symbol: 'Ti', number: 22, mass: '47.867', group: 'Өтпелі металл', nameKk: 'Титан' },
    { id: 'vanadium', symbol: 'V', number: 23, mass: '50.942', group: 'Өтпелі металл', nameKk: 'Ванадий' },
    { id: 'chromium', symbol: 'Cr', number: 24, mass: '51.996', group: 'Өтпелі металл', nameKk: 'Хром' },
    { id: 'manganese', symbol: 'Mn', number: 25, mass: '54.938', group: 'Өтпелі металл', nameKk: 'Марганец' },
    { id: 'iron', symbol: 'Fe', number: 26, mass: '55.845', group: 'Өтпелі металл', nameKk: 'Темір' },
    { id: 'cobalt', symbol: 'Co', number: 27, mass: '58.933', group: 'Өтпелі металл', nameKk: 'Кобальт' },
    { id: 'nickel', symbol: 'Ni', number: 28, mass: '58.693', group: 'Өтпелі металл', nameKk: 'Никель' },
    { id: 'copper', symbol: 'Cu', number: 29, mass: '63.546', group: 'Өтпелі металл', nameKk: 'Мыс' },
    { id: 'zinc', symbol: 'Zn', number: 30, mass: '65.38', group: 'Өтпелі металл', nameKk: 'Мырыш' },
    { id: 'gallium', symbol: 'Ga', number: 31, mass: '69.723', group: 'Постөтпелі металл', nameKk: 'Галлий' },
    { id: 'germanium', symbol: 'Ge', number: 32, mass: '72.63', group: 'Металлоид', nameKk: 'Германий' },
    { id: 'arsenic', symbol: 'As', number: 33, mass: '74.922', group: 'Металлоид', nameKk: 'Күшәла' },
    { id: 'selenium', symbol: 'Se', number: 34, mass: '78.971', group: 'Бейметалл', nameKk: 'Селен' },
    { id: 'bromine', symbol: 'Br', number: 35, mass: '79.904', group: 'Галоген', nameKk: 'Бром' },
    { id: 'krypton', symbol: 'Kr', number: 36, mass: '83.798', group: 'Инертті газ', nameKk: 'Криптон' },
    { id: 'rubidium', symbol: 'Rb', number: 37, mass: '85.468', group: 'Сілтілік металл', nameKk: 'Рубидий' },
    { id: 'strontium', symbol: 'Sr', number: 38, mass: '87.62', group: 'Сілтілік-жер металы', nameKk: 'Стронций' },
    { id: 'yttrium', symbol: 'Y', number: 39, mass: '88.906', group: 'Өтпелі металл', nameKk: 'Иттрий' },
    { id: 'zirconium', symbol: 'Zr', number: 40, mass: '91.224', group: 'Өтпелі металл', nameKk: 'Цирконий' }
];

const localePath = 'locales/kk_v2.json';
const kkLocale = JSON.parse(fs.readFileSync(localePath, 'utf8'));

elements.forEach(el => {
    const name = el.nameKk;
    const groupLower = el.group.toLowerCase();
    kkLocale[`system.${el.id}.title`] = name;
    kkLocale[`system.${el.id}.desc`] = `${name} — бұл №${el.number} элемент, әртүрлі ғылыми және өнеркәсіптік қолданулар үшін қажет әмбебап ${groupLower}.`;
    kkLocale[`system.${el.id}.details`] = `<b>Негізгі фактілер</b><br>• Таңбасы: ${el.symbol}<br>• Атомдық нөмірі: ${el.number}<br>• Атомдық массасы: ${el.mass}<br>• Тобы: ${el.group}<br><br><b>Атомдық құрылымы</b><br>• ${el.number} Протон<br>• Негізгі күйдегі ${el.number} Электрон<br><br><b>Ғылыми маңызы</b><br>• ${groupLower}дарды зерттеудегі маңызды компонент.`;
    kkLocale[`system.${el.id}.fact`] = `${name} атомдық нөмірі ${el.number} және ${el.group} тобына жатады.`;

    kkLocale[`resource.wiki.${el.id}`] = `Уикипедия — ${name}`;
    kkLocale[`resource.pubchem.${el.id}`] = `PubChem — ${name}`;

    kkLocale[`ai.${el.id}.simple`] = `${name} — символы ${el.symbol} және атомдық нөмірі ${el.number} болатын химиялық элемент. Ол ${el.group} тобына жатады.`;
    kkLocale[`ai.${el.id}.detailed`] = `${name} (${el.symbol}) периодтық кестедегі ${el.number}-ші элемент. ${groupLower} ретінде ол әртүрлі өнеркәсіптік және биологиялық процестерде маңызды рөл атқаратын бірегей химиялық және физикалық қасиеттерге ие.`;
    kkLocale[`ai.${el.id}.study.1`] = `Атомдық нөмірі: ${el.number}`;
    kkLocale[`ai.${el.id}.study.2`] = `Химиялық таңбасы: ${el.symbol}`;
    kkLocale[`ai.${el.id}.study.3`] = `Тобы: ${el.group}`;
    kkLocale[`ai.${el.id}.study.4`] = `Атомдық массасы: ${el.mass}`;
    kkLocale[`ai.${el.id}.study.5`] = `Химияның әртүрлі салаларында қолданылуы.`;

    kkLocale[`ai.${el.id}.q1.text`] = `${name} элементінің атомдық нөмірі нешеге тең?`;
    kkLocale[`ai.${el.id}.q1.opt.1`] = `${el.number}`;
    kkLocale[`ai.${el.id}.q1.opt.2`] = `${el.number + 1}`;
    kkLocale[`ai.${el.id}.q1.opt.3`] = `${el.number - 1}`;
    kkLocale[`ai.${el.id}.q1.opt.4`] = `0`;

    kkLocale[`ai.${el.id}.q2.text`] = `${name} элементінің химиялық таңбасы қандай?`;
    kkLocale[`ai.${el.id}.q2.opt.1`] = `X`;
    kkLocale[`ai.${el.id}.q2.opt.2`] = `${el.symbol}`;
    kkLocale[`ai.${el.id}.q2.opt.3`] = `Y`;
    kkLocale[`ai.${el.id}.q2.opt.4`] = `Z`;

    kkLocale[`ai.${el.id}.q3.text`] = `${name} қай топқа жатады?`;
    kkLocale[`ai.${el.id}.q3.opt.1`] = `Металдар`;
    kkLocale[`ai.${el.id}.q3.opt.2`] = `Бейметалдар`;
    kkLocale[`ai.${el.id}.q3.opt.3`] = `${el.group}`;
    kkLocale[`ai.${el.id}.q3.opt.4`] = `Газдар`;

    kkLocale[`ai.${el.id}.q4.text`] = `${name} элементінің шамамен алынған атомдық массасы қандай?`;
    kkLocale[`ai.${el.id}.q4.opt.1`] = `${el.mass}`;
    kkLocale[`ai.${el.id}.q4.opt.2`] = `1.008`;
    kkLocale[`ai.${el.id}.q4.opt.3`] = `10.0`;
    kkLocale[`ai.${el.id}.q4.opt.4`] = `100.0`;

    kkLocale[`ai.${el.id}.q5.text`] = `${name} әдетте қайда қолданылады?`;
    kkLocale[`ai.${el.id}.q5.opt.1`] = `Тағам`;
    kkLocale[`ai.${el.id}.q5.opt.2`] = `Ғылым және өнеркәсіп`;
    kkLocale[`ai.${el.id}.q5.opt.3`] = `Киім`;
    kkLocale[`ai.${el.id}.q5.opt.4`] = `Ойыншықтар`;
});

fs.writeFileSync(localePath, JSON.stringify(kkLocale, null, 4));
console.log('Updated locales/kk_v2.json with elements 21-40');
