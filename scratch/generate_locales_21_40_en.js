const fs = require('fs');
const path = require('path');

const elements = [
    { id: 'scandium', symbol: 'Sc', number: 21, mass: '44.956', group: 'Transition Metal', nameEn: 'Scandium' },
    { id: 'titanium', symbol: 'Ti', number: 22, mass: '47.867', group: 'Transition Metal', nameEn: 'Titanium' },
    { id: 'vanadium', symbol: 'V', number: 23, mass: '50.942', group: 'Transition Metal', nameEn: 'Vanadium' },
    { id: 'chromium', symbol: 'Cr', number: 24, mass: '51.996', group: 'Transition Metal', nameEn: 'Chromium' },
    { id: 'manganese', symbol: 'Mn', number: 25, mass: '54.938', group: 'Transition Metal', nameEn: 'Manganese' },
    { id: 'iron', symbol: 'Fe', number: 26, mass: '55.845', group: 'Transition Metal', nameEn: 'Iron' },
    { id: 'cobalt', symbol: 'Co', number: 27, mass: '58.933', group: 'Transition Metal', nameEn: 'Cobalt' },
    { id: 'nickel', symbol: 'Ni', number: 28, mass: '58.693', group: 'Transition Metal', nameEn: 'Nickel' },
    { id: 'copper', symbol: 'Cu', number: 29, mass: '63.546', group: 'Transition Metal', nameEn: 'Copper' },
    { id: 'zinc', symbol: 'Zn', number: 30, mass: '65.38', group: 'Transition Metal', nameEn: 'Zinc' },
    { id: 'gallium', symbol: 'Ga', number: 31, mass: '69.723', group: 'Post-Transition Metal', nameEn: 'Gallium' },
    { id: 'germanium', symbol: 'Ge', number: 32, mass: '72.63', group: 'Metalloid', nameEn: 'Germanium' },
    { id: 'arsenic', symbol: 'As', number: 33, mass: '74.922', group: 'Metalloid', nameEn: 'Arsenic' },
    { id: 'selenium', symbol: 'Se', number: 34, mass: '78.971', group: 'Nonmetal', nameEn: 'Selenium' },
    { id: 'bromine', symbol: 'Br', number: 35, mass: '79.904', group: 'Halogen', nameEn: 'Bromine' },
    { id: 'krypton', symbol: 'Kr', number: 36, mass: '83.798', group: 'Noble Gas', nameEn: 'Krypton' },
    { id: 'rubidium', symbol: 'Rb', number: 37, mass: '85.468', group: 'Alkali Metal', nameEn: 'Rubidium' },
    { id: 'strontium', symbol: 'Sr', number: 38, mass: '87.62', group: 'Alkaline Earth Metal', nameEn: 'Strontium' },
    { id: 'yttrium', symbol: 'Y', number: 39, mass: '88.906', group: 'Transition Metal', nameEn: 'Yttrium' },
    { id: 'zirconium', symbol: 'Zr', number: 40, mass: '91.224', group: 'Transition Metal', nameEn: 'Zirconium' }
];

const localePath = 'locales/en_v2.json';
const enLocale = JSON.parse(fs.readFileSync(localePath, 'utf8'));

elements.forEach(el => {
    const name = el.nameEn;
    enLocale[`system.${el.id}.title`] = name;
    enLocale[`system.${el.id}.desc`] = `${name} is element #${el.number}, a versatile ${el.group.toLowerCase()} essential for various scientific and industrial applications.`;
    enLocale[`system.${el.id}.details`] = `<b>Core Facts</b><br>• Symbol: ${el.symbol}<br>• Atomic Number: ${el.number}<br>• Atomic Mass: ${el.mass}<br>• Group: ${el.group}<br><br><b>Atomic Structure</b><br>• ${el.number} Protons<br>• ${el.number} Electrons in ground state<br><br><b>Scientific Significance</b><br>• Crucial component in ${el.group.toLowerCase()} research.`;
    enLocale[`system.${el.id}.fact`] = `${name} has the atomic number ${el.number} and belongs to the ${el.group} group.`;

    enLocale[`resource.wiki.${el.id}`] = `Wikipedia - ${name}`;
    enLocale[`resource.pubchem.${el.id}`] = `PubChem - ${name}`;

    enLocale[`ai.${el.id}.simple`] = `${name} is a chemical element with symbol ${el.symbol} and atomic number ${el.number}. It is part of the ${el.group} group.`;
    enLocale[`ai.${el.id}.detailed`] = `${name} (${el.symbol}) is the ${el.number}th element in the periodic table. As a ${el.group.toLowerCase()}, it possesses unique chemical and physical properties that make it vital in various industrial and biological processes.`;
    enLocale[`ai.${el.id}.study.1`] = `Atomic number: ${el.number}`;
    enLocale[`ai.${el.id}.study.2`] = `Chemical symbol: ${el.symbol}`;
    enLocale[`ai.${el.id}.study.3`] = `Group classification: ${el.group}`;
    enLocale[`ai.${el.id}.study.4`] = `Standard atomic weight: ${el.mass}`;
    enLocale[`ai.${el.id}.study.5`] = `Applications in various fields of chemistry.`;

    enLocale[`ai.${el.id}.q1.text`] = `What is the atomic number of ${name}?`;
    enLocale[`ai.${el.id}.q1.opt.1`] = `${el.number}`;
    enLocale[`ai.${el.id}.q1.opt.2`] = `${el.number + 1}`;
    enLocale[`ai.${el.id}.q1.opt.3`] = `${el.number - 1}`;
    enLocale[`ai.${el.id}.q1.opt.4`] = `0`;

    enLocale[`ai.${el.id}.q2.text`] = `What is the chemical symbol for ${name}?`;
    enLocale[`ai.${el.id}.q2.opt.1`] = `X`;
    enLocale[`ai.${el.id}.q2.opt.2`] = `${el.symbol}`;
    enLocale[`ai.${el.id}.q2.opt.3`] = `Y`;
    enLocale[`ai.${el.id}.q2.opt.4`] = `Z`;

    enLocale[`ai.${el.id}.q3.text`] = `To which group does ${name} belong?`;
    enLocale[`ai.${el.id}.q3.opt.1`] = `Metals`;
    enLocale[`ai.${el.id}.q3.opt.2`] = `Non-metals`;
    enLocale[`ai.${el.id}.q3.opt.3`] = `${el.group}`;
    enLocale[`ai.${el.id}.q3.opt.4`] = `Gases`;

    enLocale[`ai.${el.id}.q4.text`] = `What is the approximate atomic mass of ${name}?`;
    enLocale[`ai.${el.id}.q4.opt.1`] = `${el.mass}`;
    enLocale[`ai.${el.id}.q4.opt.2`] = `1.008`;
    enLocale[`ai.${el.id}.q4.opt.3`] = `10.0`;
    enLocale[`ai.${el.id}.q4.opt.4`] = `100.0`;

    enLocale[`ai.${el.id}.q5.text`] = `Where is ${name} commonly used?`;
    enLocale[`ai.${el.id}.q5.opt.1`] = `Food`;
    enLocale[`ai.${el.id}.q5.opt.2`] = `Science and Industry`;
    enLocale[`ai.${el.id}.q5.opt.3`] = `Clothing`;
    enLocale[`ai.${el.id}.q5.opt.4`] = `Toys`;
});

fs.writeFileSync(localePath, JSON.stringify(enLocale, null, 4));
console.log('Updated locales/en_v2.json with elements 21-40');
