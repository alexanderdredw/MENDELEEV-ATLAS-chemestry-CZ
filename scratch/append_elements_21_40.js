const fs = require('fs');
const path = require('path');

const elements21_40 = [
    { id: 'scandium', symbol: 'Sc', number: 21, mass: '44.956', group: 'Transition Metal', color: '#94A3B8' },
    { id: 'titanium', symbol: 'Ti', number: 22, mass: '47.867', group: 'Transition Metal', color: '#CBD5E1' },
    { id: 'vanadium', symbol: 'V', number: 23, mass: '50.942', group: 'Transition Metal', color: '#94A3B8' },
    { id: 'chromium', symbol: 'Cr', number: 24, mass: '51.996', group: 'Transition Metal', color: '#E2E8F0' },
    { id: 'manganese', symbol: 'Mn', number: 25, mass: '54.938', group: 'Transition Metal', color: '#94A3B8' },
    { id: 'iron', symbol: 'Fe', number: 26, mass: '55.845', group: 'Transition Metal', color: '#475569' },
    { id: 'cobalt', symbol: 'Co', number: 27, mass: '58.933', group: 'Transition Metal', color: '#3B82F6' },
    { id: 'nickel', symbol: 'Ni', number: 28, mass: '58.693', group: 'Transition Metal', color: '#94A3B8' },
    { id: 'copper', symbol: 'Cu', number: 29, mass: '63.546', group: 'Transition Metal', color: '#B45309' },
    { id: 'zinc', symbol: 'Zn', number: 30, mass: '65.38', group: 'Transition Metal', color: '#94A3B8' },
    { id: 'gallium', symbol: 'Ga', number: 31, mass: '69.723', group: 'Post-Transition Metal', color: '#E2E8F0' },
    { id: 'germanium', symbol: 'Ge', number: 32, mass: '72.63', group: 'Semimetals', color: '#94A3B8' },
    { id: 'arsenic', symbol: 'As', number: 33, mass: '74.922', group: 'Semimetals', color: '#34D399' },
    { id: 'selenium', symbol: 'Se', number: 34, mass: '78.971', group: 'Nonmetal', color: '#FBBF24' },
    { id: 'bromine', symbol: 'Br', number: 35, mass: '79.904', group: 'Halogen', color: '#B91C1C' },
    { id: 'krypton', symbol: 'Kr', number: 36, mass: '83.798', group: 'Noble Gas', color: '#A855F7' },
    { id: 'rubidium', symbol: 'Rb', number: 37, mass: '85.468', group: 'Alkali Metal', color: '#EF4444' },
    { id: 'strontium', symbol: 'Sr', number: 38, mass: '87.62', group: 'Alkaline Earth Metal', color: '#F97316' },
    { id: 'yttrium', symbol: 'Y', number: 39, mass: '88.906', group: 'Transition Metal', color: '#94A3B8' },
    { id: 'zirconium', symbol: 'Zr', number: 40, mass: '91.224', group: 'Transition Metal', color: '#CBD5E1' }
];

const filePath = 'js/data/anatomy-data.js';
let content = fs.readFileSync(filePath, 'utf8');

// Find the end of the array (before the closing bracket)
const arrayEndIndex = content.lastIndexOf('];');
if (arrayEndIndex === -1) {
    console.error('Could not find end of anatomyData array');
    process.exit(1);
}

const newEntries = elements21_40.map(el => {
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
console.log('Appended elements 21-40 to anatomy-data.js');
