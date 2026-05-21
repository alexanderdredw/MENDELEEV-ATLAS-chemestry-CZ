const fs = require('fs');
const path = require('path');

const elements41_60 = [
    { id: 'niobium', symbol: 'Nb', number: 41, mass: '92.906', group: 'Transition Metal', color: '#94A3B8' },
    { id: 'molybdenum', symbol: 'Mo', number: 42, mass: '95.95', group: 'Transition Metal', color: '#CBD5E1' },
    { id: 'technetium', symbol: 'Tc', number: 43, mass: '98', group: 'Transition Metal', color: '#94A3B8' },
    { id: 'ruthenium', symbol: 'Ru', number: 44, mass: '101.07', group: 'Transition Metal', color: '#CBD5E1' },
    { id: 'rhodium', symbol: 'Rh', number: 45, mass: '102.91', group: 'Transition Metal', color: '#E2E8F0' },
    { id: 'palladium', symbol: 'Pd', number: 46, mass: '106.42', group: 'Transition Metal', color: '#CBD5E1' },
    { id: 'silver', symbol: 'Ag', number: 47, mass: '107.87', group: 'Transition Metal', color: '#E2E8F0' },
    { id: 'cadmium', symbol: 'Cd', number: 48, mass: '112.41', group: 'Transition Metal', color: '#94A3B8' },
    { id: 'indium', symbol: 'In', number: 49, mass: '114.82', group: 'Post-Transition Metal', color: '#E2E8F0' },
    { id: 'tin', symbol: 'Sn', number: 50, mass: '118.71', group: 'Post-Transition Metal', color: '#CBD5E1' },
    { id: 'antimony', symbol: 'Sb', number: 51, mass: '121.76', group: 'Semimetals', color: '#94A3B8' },
    { id: 'tellurium', symbol: 'Te', number: 52, mass: '127.6', group: 'Semimetals', color: '#34D399' },
    { id: 'iodine', symbol: 'I', number: 53, mass: '126.9', group: 'Halogen', color: '#A855F7' },
    { id: 'xenon', symbol: 'Xe', number: 54, mass: '131.29', group: 'Noble Gas', color: '#C084FC' },
    { id: 'cesium', symbol: 'Cs', number: 55, mass: '132.91', group: 'Alkali Metal', color: '#EF4444' },
    { id: 'barium', symbol: 'Ba', number: 56, mass: '137.33', group: 'Alkaline Earth Metal', color: '#F97316' },
    { id: 'lanthanum', symbol: 'La', number: 57, mass: '138.91', group: 'Lanthanide', color: '#E2E8F0' },
    { id: 'cerium', symbol: 'Ce', number: 58, mass: '140.12', group: 'Lanthanide', color: '#E2E8F0' },
    { id: 'praseodymium', symbol: 'Pr', number: 59, mass: '140.91', group: 'Lanthanide', color: '#E2E8F0' },
    { id: 'neodymium', symbol: 'Nd', number: 60, mass: '144.24', group: 'Lanthanide', color: '#E2E8F0' }
];

const filePath = 'js/data/anatomy-data.js';
let content = fs.readFileSync(filePath, 'utf8');

// Find the end of the array (before the closing bracket)
const arrayEndIndex = content.lastIndexOf('];');
if (arrayEndIndex === -1) {
    console.error('Could not find end of anatomyData array');
    process.exit(1);
}

const newEntries = elements41_60.map(el => {
    return `    {
        id: '${el.id}',
        titleKey: 'system.${el.id}.title',
        descKey: 'system.${el.id}.desc',
        detailsKey: 'system.${el.id}.details',
        factKey: 'system.${el.id}.fact',
        model: null,
        image: 'assets/images/${el.id}_atom_lux.png',
        color: '${el.color}',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: ${el.id.charAt(0).toUpperCase() + el.id.slice(1)}', textKey: 'resource.wiki.${el.id}', url: 'https://en.wikipedia.org/wiki/${el.id.charAt(0).toUpperCase() + el.id.slice(1)}' },
            { text: 'PubChem: ${el.id.charAt(0).toUpperCase() + el.id.slice(1)}', textKey: 'resource.pubchem.${el.id}', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/${el.id.charAt(0).toUpperCase() + el.id.slice(1)}' }
        ],
        ai: {
            simpleKey: 'ai.${el.id}.simple',
            detailedKey: 'ai.${el.id}.detailed',
            studyKey: ['ai.${el.id}.study.1', 'ai.${el.id}.study.2', 'ai.${el.id}.study.3', 'ai.${el.id}.study.4', 'ai.${el.id}.study.5'],
            questions: [
                { textKey: 'ai.${el.id}.q1.text', options: ['ai.${el.id}.q1.opt.1', 'ai.${el.id}.q1.opt.2', 'ai.${el.id}.q1.opt.3', 'ai.${el.id}.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.${el.id}.q2.text', options: ['ai.${el.id}.q2.opt.1', 'ai.${el.id}.q2.opt.2', 'ai.${el.id}.q2.opt.3', 'ai.${el.id}.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.${el.id}.q3.text', options: ['ai.${el.id}.q3.opt.1', 'ai.${el.id}.q3.opt.2', 'ai.${el.id}.q3.opt.3', 'ai.${el.id}.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.${el.id}.q4.text', options: ['ai.${el.id}.q4.opt.1', 'ai.${el.id}.q4.opt.2', 'ai.${el.id}.q4.opt.3', 'ai.${el.id}.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.${el.id}.q5.text', options: ['ai.${el.id}.q5.opt.1', 'ai.${el.id}.q5.opt.2', 'ai.${el.id}.q5.opt.3', 'ai.${el.id}.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    }`.trim();
}).join(',\n    ');

// Insert before the last ];
const updatedContent = content.slice(0, arrayEndIndex).trim() + ',\n    ' + newEntries + '\n' + content.slice(arrayEndIndex);

fs.writeFileSync(filePath, updatedContent);
console.log('Appended elements 41-60 to anatomy-data.js');
