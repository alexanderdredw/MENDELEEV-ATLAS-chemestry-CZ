const fs = require('fs');
const path = require('path');

const elements = [
    { id: 'hydrogen', symbol: 'H', number: 1, group: 'Nonmetal', color: '#FF6B6B' },
    { id: 'helium', symbol: 'He', number: 2, group: 'Noble Gas', color: '#C084FC' },
    { id: 'lithium', symbol: 'Lithium', number: 3, group: 'Alkali Metal', color: '#FF6B6B' },
    { id: 'beryllium', symbol: 'Be', number: 4, group: 'Alkaline Earth', color: '#4ECDC4' },
    { id: 'boron', symbol: 'B', number: 5, group: 'Semimetals', color: '#34D399' },
    { id: 'carbon', symbol: 'C', number: 6, group: 'Nonmetal', color: '#FBBF24' },
    { id: 'nitrogen', symbol: 'N', number: 7, group: 'Nonmetal', color: '#FBBF24' },
    { id: 'oxygen', symbol: 'O', number: 8, group: 'Nonmetal', color: '#FBBF24' },
    { id: 'fluorine', symbol: 'F', number: 9, group: 'Halogen', color: '#F97316' },
    { id: 'neon', symbol: 'Ne', number: 10, group: 'Noble Gas', color: '#C084FC' },
    { id: 'sodium', symbol: 'Na', number: 11, group: 'Alkali Metal', color: '#FF6B6B' },
    { id: 'magnesium', symbol: 'Mg', number: 12, group: 'Alkaline Earth', color: '#4ECDC4' },
    { id: 'aluminum', symbol: 'Al', number: 13, group: 'Post-Transition Metal', color: '#60A5FA' },
    { id: 'silicon', symbol: 'Si', number: 14, group: 'Semimetals', color: '#34D399' },
    { id: 'phosphorus', symbol: 'P', number: 15, group: 'Nonmetal', color: '#FBBF24' },
    { id: 'sulfur', symbol: 'S', number: 16, group: 'Nonmetal', color: '#FBBF24' },
    { id: 'chlorine', symbol: 'Cl', number: 17, group: 'Halogen', color: '#F97316' },
    { id: 'argon', symbol: 'Ar', number: 18, group: 'Noble Gas', color: '#C084FC' },
    { id: 'potassium', symbol: 'K', number: 19, group: 'Alkali Metal', color: '#FF6B6B' },
    { id: 'calcium', symbol: 'Ca', number: 20, group: 'Alkaline Earth', color: '#4ECDC4' }
];

const generateAnatomyData = () => {
    let output = "/* js/data/anatomy-data.js */\nwindow.anatomyData = [\n";
    
    elements.forEach((el, index) => {
        output += `    {
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
    }${index === elements.length - 1 ? '' : ','}\n`;
    });
    
    output += "];\n\n";
    output += `// Helper to get translated object
window.anatomyData.forEach(item => {
    Object.defineProperties(item, {
        title: { get() { return window.i18n ? window.i18n.t(item.titleKey) : item.titleKey; } },
        description: { get() { return window.i18n ? window.i18n.t(item.descKey) : item.descKey; } },
        details: { get() { return window.i18n ? window.i18n.t(item.detailsKey) : item.detailsKey; } },
        fact: { get() { return window.i18n ? window.i18n.t(item.factKey) : item.factKey; } }
    });
});

window.getSystemById = (id) => window.anatomyData && window.anatomyData.find(system => system.id === id);

window.glossaryData = []; // To be updated later
`;

    fs.writeFileSync('anatomy-data.new.js', output);
};

generateAnatomyData();
console.log('Generated anatomy-data.new.js');
