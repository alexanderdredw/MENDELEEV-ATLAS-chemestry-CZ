const fs = require('fs');
const path = require('path');

const elements = [
    { id: 'scandium', symbol: 'Sc', number: 21, mass: '44.956', group: 'Переходный металл', nameRu: 'Скандий' },
    { id: 'titanium', symbol: 'Ti', number: 22, mass: '47.867', group: 'Переходный металл', nameRu: 'Титан' },
    { id: 'vanadium', symbol: 'V', number: 23, mass: '50.942', group: 'Переходный металл', nameRu: 'Ванадий' },
    { id: 'chromium', symbol: 'Cr', number: 24, mass: '51.996', group: 'Переходный металл', nameRu: 'Хром' },
    { id: 'manganese', symbol: 'Mn', number: 25, mass: '54.938', group: 'Переходный металл', nameRu: 'Марганец' },
    { id: 'iron', symbol: 'Fe', number: 26, mass: '55.845', group: 'Переходный металл', nameRu: 'Железо' },
    { id: 'cobalt', symbol: 'Co', number: 27, mass: '58.933', group: 'Переходный металл', nameRu: 'Кобальт' },
    { id: 'nickel', symbol: 'Ni', number: 28, mass: '58.693', group: 'Переходный металл', nameRu: 'Никель' },
    { id: 'copper', symbol: 'Cu', number: 29, mass: '63.546', group: 'Переходный металл', nameRu: 'Медь' },
    { id: 'zinc', symbol: 'Zn', number: 30, mass: '65.38', group: 'Переходный металл', nameRu: 'Цинк' },
    { id: 'gallium', symbol: 'Ga', number: 31, mass: '69.723', group: 'Постпереходный металл', nameRu: 'Галлий' },
    { id: 'germanium', symbol: 'Ge', number: 32, mass: '72.63', group: 'Металлоид', nameRu: 'Германий' },
    { id: 'arsenic', symbol: 'As', number: 33, mass: '74.922', group: 'Металлоид', nameRu: 'Мышьяк' },
    { id: 'selenium', symbol: 'Se', number: 34, mass: '78.971', group: 'Неметалл', nameRu: 'Селен' },
    { id: 'bromine', symbol: 'Br', number: 35, mass: '79.904', group: 'Галоген', nameRu: 'Бром' },
    { id: 'krypton', symbol: 'Kr', number: 36, mass: '83.798', group: 'Благородный газ', nameRu: 'Криптон' },
    { id: 'rubidium', symbol: 'Rb', number: 37, mass: '85.468', group: 'Щелочной металл', nameRu: 'Рубидий' },
    { id: 'strontium', symbol: 'Sr', number: 38, mass: '87.62', group: 'Щелочноземельный металл', nameRu: 'Стронций' },
    { id: 'yttrium', symbol: 'Y', number: 39, mass: '88.906', group: 'Переходный металл', nameRu: 'Иттрий' },
    { id: 'zirconium', symbol: 'Zr', number: 40, mass: '91.224', group: 'Переходный металл', nameRu: 'Цирконий' }
];

const localePath = 'locales/ru_v2.json';
const ruLocale = JSON.parse(fs.readFileSync(localePath, 'utf8'));

elements.forEach(el => {
    const name = el.nameRu;
    ruLocale[`system.${el.id}.title`] = name;
    ruLocale[`system.${el.id}.desc`] = `${name} — это элемент №${el.number}, универсальный ${el.group.toLowerCase()}, необходимый для различных научных и промышленных применений.`;
    ruLocale[`system.${el.id}.details`] = `<b>Основные факты</b><br>• Символ: ${el.symbol}<br>• Атомный номер: ${el.number}<br>• Атомная масса: ${el.mass}<br>• Группа: ${el.group}<br><br><b>Атомная структура</b><br>• ${el.number} Протонов<br>• ${el.number} Электронов в основном состоянии<br><br><b>Научное значение</b><br>• Критически важный компонент в исследованиях ${el.group.toLowerCase()}ов.`;
    ruLocale[`system.${el.id}.fact`] = `${name} имеет атомный номер ${el.number} и входит в группу ${el.group}.`;

    ruLocale[`resource.wiki.${el.id}`] = `Википедия — ${name}`;
    ruLocale[`resource.pubchem.${el.id}`] = `PubChem — ${name}`;

    ruLocale[`ai.${el.id}.simple`] = `${name} — это химический элемент с символом ${el.symbol} и атомным номером ${el.number}. Он относится к группе ${el.group}.`;
    ruLocale[`ai.${el.id}.detailed`] = `${name} (${el.symbol}) является элементом номер ${el.number} в периодической таблице. Как ${el.group.toLowerCase()}, он обладает уникальными химическими и физическими свойствами, которые делают его жизненно важным в различных промышленных и биологических процессах.`;
    ruLocale[`ai.${el.id}.study.1`] = `Атомный номер: ${el.number}`;
    ruLocale[`ai.${el.id}.study.2`] = `Химический символ: ${el.symbol}`;
    ruLocale[`ai.${el.id}.study.3`] = `Группа: ${el.group}`;
    ruLocale[`ai.${el.id}.study.4`] = `Атомная масса: ${el.mass}`;
    ruLocale[`ai.${el.id}.study.5`] = `Применение в различных областях химии.`;

    ruLocale[`ai.${el.id}.q1.text`] = `Какой атомный номер у ${name}?`;
    ruLocale[`ai.${el.id}.q1.opt.1`] = `${el.number}`;
    ruLocale[`ai.${el.id}.q1.opt.2`] = `${el.number + 1}`;
    ruLocale[`ai.${el.id}.q1.opt.3`] = `${el.number - 1}`;
    ruLocale[`ai.${el.id}.q1.opt.4`] = `0`;

    ruLocale[`ai.${el.id}.q2.text`] = `Какой химический символ у ${name}?`;
    ruLocale[`ai.${el.id}.q2.opt.1`] = `X`;
    ruLocale[`ai.${el.id}.q2.opt.2`] = `${el.symbol}`;
    ruLocale[`ai.${el.id}.q2.opt.3`] = `Y`;
    ruLocale[`ai.${el.id}.q2.opt.4`] = `Z`;

    ruLocale[`ai.${el.id}.q3.text`] = `К какой группе относится ${name}?`;
    ruLocale[`ai.${el.id}.q3.opt.1`] = `Металлы`;
    ruLocale[`ai.${el.id}.q3.opt.2`] = `Неметаллы`;
    ruLocale[`ai.${el.id}.q3.opt.3`] = `${el.group}`;
    ruLocale[`ai.${el.id}.q3.opt.4`] = `Газы`;

    ruLocale[`ai.${el.id}.q4.text`] = `Какова примерная атомная масса ${name}?`;
    ruLocale[`ai.${el.id}.q4.opt.1`] = `${el.mass}`;
    ruLocale[`ai.${el.id}.q4.opt.2`] = `1.008`;
    ruLocale[`ai.${el.id}.q4.opt.3`] = `10.0`;
    ruLocale[`ai.${el.id}.q4.opt.4`] = `100.0`;

    ruLocale[`ai.${el.id}.q5.text`] = `Где обычно используется ${name}?`;
    ruLocale[`ai.${el.id}.q5.opt.1`] = `Пища`;
    ruLocale[`ai.${el.id}.q5.opt.2`] = `Наука и промышленность`;
    ruLocale[`ai.${el.id}.q5.opt.3`] = `Одежда`;
    ruLocale[`ai.${el.id}.q5.opt.4`] = `Игрушки`;
});

fs.writeFileSync(localePath, JSON.stringify(ruLocale, null, 4));
console.log('Updated locales/ru_v2.json with elements 21-40');
