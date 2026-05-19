const fs = require('fs');
const path = require('path');

const elements = [
    { id: 'hydrogen', symbol: 'H', number: 1, mass: '1.008', group: 'Nonmetal', color: '#FF6B6B' },
    { id: 'helium', symbol: 'He', number: 2, mass: '4.0026', group: 'Noble Gas', color: '#C084FC' },
    { id: 'lithium', symbol: 'Li', number: 3, mass: '6.94', group: 'Alkali Metal', color: '#FF6B6B' },
    { id: 'beryllium', symbol: 'Be', number: 4, mass: '9.0122', group: 'Alkaline Earth', color: '#4ECDC4' },
    { id: 'boron', symbol: 'B', number: 5, mass: '10.81', group: 'Metalloid', color: '#34D399' },
    { id: 'carbon', symbol: 'C', number: 6, mass: '12.011', group: 'Nonmetal', color: '#FBBF24' },
    { id: 'nitrogen', symbol: 'N', number: 7, mass: '14.007', group: 'Nonmetal', color: '#FBBF24' },
    { id: 'oxygen', symbol: 'O', number: 8, mass: '15.999', group: 'Nonmetal', color: '#FBBF24' },
    { id: 'fluorine', symbol: 'F', number: 9, mass: '18.998', group: 'Halogen', color: '#F97316' },
    { id: 'neon', symbol: 'Ne', number: 10, mass: '20.180', group: 'Noble Gas', color: '#C084FC' },
    { id: 'sodium', symbol: 'Na', number: 11, mass: '22.990', group: 'Alkali Metal', color: '#FF6B6B' },
    { id: 'magnesium', symbol: 'Mg', number: 12, mass: '24.305', group: 'Alkaline Earth', color: '#4ECDC4' },
    { id: 'aluminum', symbol: 'Al', number: 13, mass: '26.982', group: 'Post-Transition Metal', color: '#60A5FA' },
    { id: 'silicon', symbol: 'Si', number: 14, mass: '28.085', group: 'Metalloid', color: '#34D399' },
    { id: 'phosphorus', symbol: 'P', number: 15, mass: '30.974', group: 'Nonmetal', color: '#FBBF24' },
    { id: 'sulfur', symbol: 'S', number: 16, mass: '32.06', group: 'Nonmetal', color: '#FBBF24' },
    { id: 'chlorine', symbol: 'Cl', number: 17, mass: '35.45', group: 'Halogen', color: '#F97316' },
    { id: 'argon', symbol: 'Ar', number: 18, mass: '39.948', group: 'Noble Gas', color: '#C084FC' },
    { id: 'potassium', symbol: 'K', number: 19, mass: '39.098', group: 'Alkali Metal', color: '#FF6B6B' },
    { id: 'calcium', symbol: 'Ca', number: 20, mass: '40.078', group: 'Alkaline Earth', color: '#4ECDC4' }
];

const enLocale = JSON.parse(fs.readFileSync('locales/en_v2.json', 'utf8'));

elements.forEach(el => {
    const name = el.id.charAt(0).toUpperCase() + el.id.slice(1);
    enLocale[`system.${el.id}.title`] = name;
    enLocale[`system.${el.id}.desc`] = `${name} is element #${el.number}, a versatile ${el.group.toLowerCase()} essential for various scientific applications.`;
    enLocale[`system.${el.id}.details`] = `<b>Key Facts</b><br>• Symbol: ${el.symbol}<br>• Atomic Number: ${el.number}<br>• Atomic Mass: ${el.mass}<br>• Group: ${el.group}<br><br><b>Atomic Structure</b><br>• ${el.number} Protons<br>• ${el.number} Electrons in ground state<br><br><b>Scientific Significance</b><br>• Critical component in ${el.group.toLowerCase()} studies.`;
    enLocale[`system.${el.id}.fact`] = `${name} has the atomic number ${el.number} and is a member of the ${el.group} group.`;

    enLocale[`resource.wiki.${el.id}`] = `Wikipedia - ${name}`;
    enLocale[`resource.pubchem.${el.id}`] = `PubChem - ${name}`;

    enLocale[`ai.${el.id}.simple`] = `${name} is a chemical element with symbol ${el.symbol} and atomic number ${el.number}. It belongs to the ${el.group} group.`;
    enLocale[`ai.${el.id}.detailed`] = `${name} (${el.symbol}) is element number ${el.number} in the periodic table. As a ${el.group.toLowerCase()}, it exhibits unique chemical and physical properties that make it vital in various industrial and biological processes.`;
    enLocale[`ai.${el.id}.study.1`] = `Atomic number: ${el.number}`;
    enLocale[`ai.${el.id}.study.2`] = `Chemical symbol: ${el.symbol}`;
    enLocale[`ai.${el.id}.study.3`] = `Group: ${el.group}`;
    enLocale[`ai.${el.id}.study.4`] = `Atomic mass: ${el.mass}`;
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
    enLocale[`ai.${el.id}.q3.opt.2`] = `Nonmetals`;
    enLocale[`ai.${el.id}.q3.opt.3`] = `${el.group}`;
    enLocale[`ai.${el.id}.q3.opt.4`] = `Gases`;

    enLocale[`ai.${el.id}.q4.text`] = `What is the approximate atomic mass of ${name}?`;
    enLocale[`ai.${el.id}.q4.opt.1`] = `${el.mass}`;
    enLocale[`ai.${el.id}.q4.opt.2`] = `1.008`;
    enLocale[`ai.${el.id}.q4.opt.3`] = `10.0`;
    enLocale[`ai.${el.id}.q4.opt.4`] = `100.0`;

    enLocale[`ai.${el.id}.q5.text`] = `Where is ${name} commonly used?`;
    enLocale[`ai.${el.id}.q5.opt.1`] = `Food`;
    enLocale[`ai.${el.id}.q5.opt.2`] = `Science & Industry`;
    enLocale[`ai.${el.id}.q5.opt.3`] = `Clothing`;
    enLocale[`ai.${el.id}.q5.opt.4`] = `Toys`;
});

fs.writeFileSync('locales/en_v2.json', JSON.stringify(enLocale, null, 4));
console.log('Updated locales/en_v2.json with 20 elements');
