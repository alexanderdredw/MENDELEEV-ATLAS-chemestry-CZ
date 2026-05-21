const fs = require('fs');
const path = require('path');

const elements = [
    { id: 'hydrogen', symbol: 'H', number: 1, mass: '1.008', group: 'Бейметалл', nameKk: 'Сутегі' },
    { id: 'helium', symbol: 'He', number: 2, mass: '4.0026', group: 'Инертті газ', nameKk: 'Гелий' },
    { id: 'lithium', symbol: 'Li', number: 3, mass: '6.94', group: 'Сілтілік металл', nameKk: 'Литий' },
    { id: 'beryllium', symbol: 'Be', number: 4, mass: '9.0122', group: 'Сілтілік-жер металы', nameKk: 'Бериллий' },
    { id: 'boron', symbol: 'B', number: 5, mass: '10.81', group: 'Полуметаллы', nameKk: 'Бор' },
    { id: 'carbon', symbol: 'C', number: 6, mass: '12.011', group: 'Бейметалл', nameKk: 'Көміртек' },
    { id: 'nitrogen', symbol: 'N', number: 7, mass: '14.007', group: 'Бейметалл', nameKk: 'Азот' },
    { id: 'oxygen', symbol: 'O', number: 8, mass: '15.999', group: 'Бейметалл', nameKk: 'Оттегі' },
    { id: 'fluorine', symbol: 'F', number: 9, mass: '18.998', group: 'Галоген', nameKk: 'Фтор' },
    { id: 'neon', symbol: 'Ne', number: 10, mass: '20.180', group: 'Инертті газ', nameKk: 'Неон' },
    { id: 'sodium', symbol: 'Na', number: 11, mass: '22.990', group: 'Сілтілік металл', nameKk: 'Натрий' },
    { id: 'magnesium', symbol: 'Mg', number: 12, mass: '24.305', group: 'Сілтілік-жер металы', nameKk: 'Магний' },
    { id: 'aluminum', symbol: 'Al', number: 13, mass: '26.982', group: 'Постөтпелі металл', nameKk: 'Алюминий' },
    { id: 'silicon', symbol: 'Si', number: 14, mass: '28.085', group: 'Полуметаллы', nameKk: 'Кремний' },
    { id: 'phosphorus', symbol: 'P', number: 15, mass: '30.974', group: 'Бейметалл', nameKk: 'Фосфор' },
    { id: 'sulfur', symbol: 'S', number: 16, mass: '32.06', group: 'Бейметалл', nameKk: 'Күкірт' },
    { id: 'chlorine', symbol: 'Cl', number: 17, mass: '35.45', group: 'Галоген', nameKk: 'Хлор' },
    { id: 'argon', symbol: 'Ar', number: 18, mass: '39.948', group: 'Инертті газ', nameKk: 'Аргон' },
    { id: 'potassium', symbol: 'K', number: 19, mass: '39.098', group: 'Сілтілік металл', nameKk: 'Калий' },
    { id: 'calcium', symbol: 'Ca', number: 20, mass: '40.078', group: 'Сілтілік-жер металы', nameKk: 'Кальций' }
];

const kkLocale = JSON.parse(fs.readFileSync('locales/kk_v2.json', 'utf8'));

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

fs.writeFileSync('locales/kk_v2.json', JSON.stringify(kkLocale, null, 4));
console.log('Updated locales/kk_v2.json with 20 elements');
