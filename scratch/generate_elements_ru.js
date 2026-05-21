const fs = require('fs');
const path = require('path');

const elements = [
    { id: 'hydrogen', symbol: 'H', number: 1, mass: '1.008', group: 'Неметалл', nameRu: 'Водород' },
    { id: 'helium', symbol: 'He', number: 2, mass: '4.0026', group: 'Благородный газ', nameRu: 'Гелий' },
    { id: 'lithium', symbol: 'Li', number: 3, mass: '6.94', group: 'Щелочной металл', nameRu: 'Литий' },
    { id: 'beryllium', symbol: 'Be', number: 4, mass: '9.0122', group: 'Щелочноземельный металл', nameRu: 'Бериллий' },
    { id: 'boron', symbol: 'B', number: 5, mass: '10.81', group: 'Полуметаллы', nameRu: 'Бор' },
    { id: 'carbon', symbol: 'C', number: 6, mass: '12.011', group: 'Неметалл', nameRu: 'Углерод' },
    { id: 'nitrogen', symbol: 'N', number: 7, mass: '14.007', group: 'Неметалл', nameRu: 'Азот' },
    { id: 'oxygen', symbol: 'O', number: 8, mass: '15.999', group: 'Неметалл', nameRu: 'Кислород' },
    { id: 'fluorine', symbol: 'F', number: 9, mass: '18.998', group: 'Галоген', nameRu: 'Фтор' },
    { id: 'neon', symbol: 'Ne', number: 10, mass: '20.180', group: 'Благородный газ', nameRu: 'Неон' },
    { id: 'sodium', symbol: 'Na', number: 11, mass: '22.990', group: 'Щелочной металл', nameRu: 'Натрий' },
    { id: 'magnesium', symbol: 'Mg', number: 12, mass: '24.305', group: 'Щелочноземельный металл', nameRu: 'Магний' },
    { id: 'aluminum', symbol: 'Al', number: 13, mass: '26.982', group: 'Другой металл', nameRu: 'Алюминий' },
    { id: 'silicon', symbol: 'Si', number: 14, mass: '28.085', group: 'Полуметаллы', nameRu: 'Кремний' },
    { id: 'phosphorus', symbol: 'P', number: 15, mass: '30.974', group: 'Неметалл', nameRu: 'Фосфор' },
    { id: 'sulfur', symbol: 'S', number: 16, mass: '32.06', group: 'Неметалл', nameRu: 'Сера' },
    { id: 'chlorine', symbol: 'Cl', number: 17, mass: '35.45', group: 'Галоген', nameRu: 'Хлор' },
    { id: 'argon', symbol: 'Ar', number: 18, mass: '39.948', group: 'Благородный газ', nameRu: 'Аргон' },
    { id: 'potassium', symbol: 'K', number: 19, mass: '39.098', group: 'Щелочной металл', nameRu: 'Калий' },
    { id: 'calcium', symbol: 'Ca', number: 20, mass: '40.078', group: 'Щелочноземельный металл', nameRu: 'Кальций' }
];

const ruLocale = JSON.parse(fs.readFileSync('locales/ru_v2.json', 'utf8'));

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

fs.writeFileSync('locales/ru_v2.json', JSON.stringify(ruLocale, null, 4));
console.log('Updated locales/ru_v2.json with 20 elements');
