/* js/data/anatomy-data.js */
window.anatomyData = [
    {
        id: 'hydrogen',
        atomicNumber: 1,
        symbol: 'H',
        group: 'Nonmetal',
        groupKey: 'nonmetal',
        titleKey: 'system.hydrogen.title',
        descKey: 'system.hydrogen.desc',
        detailsKey: 'system.hydrogen.details',
        factKey: 'system.hydrogen.fact',
        model: null,
        image: 'assets/images/hydrogen_atom_lux.png',
        color: '#FF6B6B',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Hydrogen', textKey: 'resource.wiki.hydrogen', url: 'https://en.wikipedia.org/wiki/Hydrogen' },
            { text: 'PubChem: Hydrogen', textKey: 'resource.pubchem.hydrogen', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Hydrogen' }
        ],
        ai: {
            simpleKey: 'ai.hydrogen.simple',
            detailedKey: 'ai.hydrogen.detailed',
            studyKey: ['ai.hydrogen.study.1', 'ai.hydrogen.study.2', 'ai.hydrogen.study.3', 'ai.hydrogen.study.4', 'ai.hydrogen.study.5'],
            questions: [
                { textKey: 'ai.hydrogen.q1.text', options: ['ai.hydrogen.q1.opt.1', 'ai.hydrogen.q1.opt.2', 'ai.hydrogen.q1.opt.3', 'ai.hydrogen.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.hydrogen.q2.text', options: ['ai.hydrogen.q2.opt.1', 'ai.hydrogen.q2.opt.2', 'ai.hydrogen.q2.opt.3', 'ai.hydrogen.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.hydrogen.q3.text', options: ['ai.hydrogen.q3.opt.1', 'ai.hydrogen.q3.opt.2', 'ai.hydrogen.q3.opt.3', 'ai.hydrogen.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.hydrogen.q4.text', options: ['ai.hydrogen.q4.opt.1', 'ai.hydrogen.q4.opt.2', 'ai.hydrogen.q4.opt.3', 'ai.hydrogen.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.hydrogen.q5.text', options: ['ai.hydrogen.q5.opt.1', 'ai.hydrogen.q5.opt.2', 'ai.hydrogen.q5.opt.3', 'ai.hydrogen.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'helium',
        atomicNumber: 2,
        symbol: 'He',
        group: 'Noble Gas',
        groupKey: 'noble_gas',
        titleKey: 'system.helium.title',
        descKey: 'system.helium.desc',
        detailsKey: 'system.helium.details',
        factKey: 'system.helium.fact',
        model: null,
        image: 'assets/images/helium_atom_lux.png',
        color: '#C084FC',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Helium', textKey: 'resource.wiki.helium', url: 'https://en.wikipedia.org/wiki/Helium' },
            { text: 'PubChem: Helium', textKey: 'resource.pubchem.helium', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Helium' }
        ],
        ai: {
            simpleKey: 'ai.helium.simple',
            detailedKey: 'ai.helium.detailed',
            studyKey: ['ai.helium.study.1', 'ai.helium.study.2', 'ai.helium.study.3', 'ai.helium.study.4', 'ai.helium.study.5'],
            questions: [
                { textKey: 'ai.helium.q1.text', options: ['ai.helium.q1.opt.1', 'ai.helium.q1.opt.2', 'ai.helium.q1.opt.3', 'ai.helium.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.helium.q2.text', options: ['ai.helium.q2.opt.1', 'ai.helium.q2.opt.2', 'ai.helium.q2.opt.3', 'ai.helium.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.helium.q3.text', options: ['ai.helium.q3.opt.1', 'ai.helium.q3.opt.2', 'ai.helium.q3.opt.3', 'ai.helium.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.helium.q4.text', options: ['ai.helium.q4.opt.1', 'ai.helium.q4.opt.2', 'ai.helium.q4.opt.3', 'ai.helium.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.helium.q5.text', options: ['ai.helium.q5.opt.1', 'ai.helium.q5.opt.2', 'ai.helium.q5.opt.3', 'ai.helium.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'lithium',
        atomicNumber: 3,
        symbol: 'Li',
        group: 'Alkali Metal',
        groupKey: 'alkali_metal',
        titleKey: 'system.lithium.title',
        descKey: 'system.lithium.desc',
        detailsKey: 'system.lithium.details',
        factKey: 'system.lithium.fact',
        model: null,
        image: 'assets/images/lithium_atom_lux.png',
        color: '#FF6B6B',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Lithium', textKey: 'resource.wiki.lithium', url: 'https://en.wikipedia.org/wiki/Lithium' },
            { text: 'PubChem: Lithium', textKey: 'resource.pubchem.lithium', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Lithium' }
        ],
        ai: {
            simpleKey: 'ai.lithium.simple',
            detailedKey: 'ai.lithium.detailed',
            studyKey: ['ai.lithium.study.1', 'ai.lithium.study.2', 'ai.lithium.study.3', 'ai.lithium.study.4', 'ai.lithium.study.5'],
            questions: [
                { textKey: 'ai.lithium.q1.text', options: ['ai.lithium.q1.opt.1', 'ai.lithium.q1.opt.2', 'ai.lithium.q1.opt.3', 'ai.lithium.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.lithium.q2.text', options: ['ai.lithium.q2.opt.1', 'ai.lithium.q2.opt.2', 'ai.lithium.q2.opt.3', 'ai.lithium.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.lithium.q3.text', options: ['ai.lithium.q3.opt.1', 'ai.lithium.q3.opt.2', 'ai.lithium.q3.opt.3', 'ai.lithium.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.lithium.q4.text', options: ['ai.lithium.q4.opt.1', 'ai.lithium.q4.opt.2', 'ai.lithium.q4.opt.3', 'ai.lithium.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.lithium.q5.text', options: ['ai.lithium.q5.opt.1', 'ai.lithium.q5.opt.2', 'ai.lithium.q5.opt.3', 'ai.lithium.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'beryllium',
        atomicNumber: 4,
        symbol: 'Be',
        group: 'Alkaline Earth Metal',
        groupKey: 'alkaline_earth',
        titleKey: 'system.beryllium.title',
        descKey: 'system.beryllium.desc',
        detailsKey: 'system.beryllium.details',
        factKey: 'system.beryllium.fact',
        model: null,
        image: 'assets/images/beryllium_atom_lux.png',
        color: '#4ECDC4',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Beryllium', textKey: 'resource.wiki.beryllium', url: 'https://en.wikipedia.org/wiki/Beryllium' },
            { text: 'PubChem: Beryllium', textKey: 'resource.pubchem.beryllium', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Beryllium' }
        ],
        ai: {
            simpleKey: 'ai.beryllium.simple',
            detailedKey: 'ai.beryllium.detailed',
            studyKey: ['ai.beryllium.study.1', 'ai.beryllium.study.2', 'ai.beryllium.study.3', 'ai.beryllium.study.4', 'ai.beryllium.study.5'],
            questions: [
                { textKey: 'ai.beryllium.q1.text', options: ['ai.beryllium.q1.opt.1', 'ai.beryllium.q1.opt.2', 'ai.beryllium.q1.opt.3', 'ai.beryllium.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.beryllium.q2.text', options: ['ai.beryllium.q2.opt.1', 'ai.beryllium.q2.opt.2', 'ai.beryllium.q2.opt.3', 'ai.beryllium.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.beryllium.q3.text', options: ['ai.beryllium.q3.opt.1', 'ai.beryllium.q3.opt.2', 'ai.beryllium.q3.opt.3', 'ai.beryllium.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.beryllium.q4.text', options: ['ai.beryllium.q4.opt.1', 'ai.beryllium.q4.opt.2', 'ai.beryllium.q4.opt.3', 'ai.beryllium.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.beryllium.q5.text', options: ['ai.beryllium.q5.opt.1', 'ai.beryllium.q5.opt.2', 'ai.beryllium.q5.opt.3', 'ai.beryllium.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'boron',
        atomicNumber: 5,
        symbol: 'B',
        group: 'Metalloid',
        groupKey: 'metalloid',
        titleKey: 'system.boron.title',
        descKey: 'system.boron.desc',
        detailsKey: 'system.boron.details',
        factKey: 'system.boron.fact',
        model: null,
        image: 'assets/images/boron_atom_lux.png',
        color: '#34D399',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Boron', textKey: 'resource.wiki.boron', url: 'https://en.wikipedia.org/wiki/Boron' },
            { text: 'PubChem: Boron', textKey: 'resource.pubchem.boron', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Boron' }
        ],
        ai: {
            simpleKey: 'ai.boron.simple',
            detailedKey: 'ai.boron.detailed',
            studyKey: ['ai.boron.study.1', 'ai.boron.study.2', 'ai.boron.study.3', 'ai.boron.study.4', 'ai.boron.study.5'],
            questions: [
                { textKey: 'ai.boron.q1.text', options: ['ai.boron.q1.opt.1', 'ai.boron.q1.opt.2', 'ai.boron.q1.opt.3', 'ai.boron.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.boron.q2.text', options: ['ai.boron.q2.opt.1', 'ai.boron.q2.opt.2', 'ai.boron.q2.opt.3', 'ai.boron.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.boron.q3.text', options: ['ai.boron.q3.opt.1', 'ai.boron.q3.opt.2', 'ai.boron.q3.opt.3', 'ai.boron.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.boron.q4.text', options: ['ai.boron.q4.opt.1', 'ai.boron.q4.opt.2', 'ai.boron.q4.opt.3', 'ai.boron.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.boron.q5.text', options: ['ai.boron.q5.opt.1', 'ai.boron.q5.opt.2', 'ai.boron.q5.opt.3', 'ai.boron.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'carbon',
        atomicNumber: 6,
        symbol: 'C',
        group: 'Nonmetal',
        groupKey: 'nonmetal',
        titleKey: 'system.carbon.title',
        descKey: 'system.carbon.desc',
        detailsKey: 'system.carbon.details',
        factKey: 'system.carbon.fact',
        model: null,
        image: 'assets/images/carbon_atom_lux.png',
        color: '#FBBF24',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Carbon', textKey: 'resource.wiki.carbon', url: 'https://en.wikipedia.org/wiki/Carbon' },
            { text: 'PubChem: Carbon', textKey: 'resource.pubchem.carbon', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Carbon' }
        ],
        ai: {
            simpleKey: 'ai.carbon.simple',
            detailedKey: 'ai.carbon.detailed',
            studyKey: ['ai.carbon.study.1', 'ai.carbon.study.2', 'ai.carbon.study.3', 'ai.carbon.study.4', 'ai.carbon.study.5'],
            questions: [
                { textKey: 'ai.carbon.q1.text', options: ['ai.carbon.q1.opt.1', 'ai.carbon.q1.opt.2', 'ai.carbon.q1.opt.3', 'ai.carbon.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.carbon.q2.text', options: ['ai.carbon.q2.opt.1', 'ai.carbon.q2.opt.2', 'ai.carbon.q2.opt.3', 'ai.carbon.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.carbon.q3.text', options: ['ai.carbon.q3.opt.1', 'ai.carbon.q3.opt.2', 'ai.carbon.q3.opt.3', 'ai.carbon.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.carbon.q4.text', options: ['ai.carbon.q4.opt.1', 'ai.carbon.q4.opt.2', 'ai.carbon.q4.opt.3', 'ai.carbon.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.carbon.q5.text', options: ['ai.carbon.q5.opt.1', 'ai.carbon.q5.opt.2', 'ai.carbon.q5.opt.3', 'ai.carbon.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'nitrogen',
        atomicNumber: 7,
        symbol: 'N',
        group: 'Nonmetal',
        groupKey: 'nonmetal',
        titleKey: 'system.nitrogen.title',
        descKey: 'system.nitrogen.desc',
        detailsKey: 'system.nitrogen.details',
        factKey: 'system.nitrogen.fact',
        model: null,
        image: 'assets/images/nitrogen_atom_lux.png',
        color: '#3B82F6', // Blue for Nitrogen
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Nitrogen', textKey: 'resource.wiki.nitrogen', url: 'https://en.wikipedia.org/wiki/Nitrogen' },
            { text: 'PubChem: Nitrogen', textKey: 'resource.pubchem.nitrogen', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Nitrogen' }
        ],
        ai: {
            simpleKey: 'ai.nitrogen.simple',
            detailedKey: 'ai.nitrogen.detailed',
            studyKey: ['ai.nitrogen.study.1', 'ai.nitrogen.study.2', 'ai.nitrogen.study.3', 'ai.nitrogen.study.4', 'ai.nitrogen.study.5'],
            questions: [
                { textKey: 'ai.nitrogen.q1.text', options: ['ai.nitrogen.q1.opt.1', 'ai.nitrogen.q1.opt.2', 'ai.nitrogen.q1.opt.3', 'ai.nitrogen.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.nitrogen.q2.text', options: ['ai.nitrogen.q2.opt.1', 'ai.nitrogen.q2.opt.2', 'ai.nitrogen.q2.opt.3', 'ai.nitrogen.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.nitrogen.q3.text', options: ['ai.nitrogen.q3.opt.1', 'ai.nitrogen.q3.opt.2', 'ai.nitrogen.q3.opt.3', 'ai.nitrogen.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.nitrogen.q4.text', options: ['ai.nitrogen.q4.opt.1', 'ai.nitrogen.q4.opt.2', 'ai.nitrogen.q4.opt.3', 'ai.nitrogen.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.nitrogen.q5.text', options: ['ai.nitrogen.q5.opt.1', 'ai.nitrogen.q5.opt.2', 'ai.nitrogen.q5.opt.3', 'ai.nitrogen.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'oxygen',
        atomicNumber: 8,
        symbol: 'O',
        group: 'Nonmetal',
        groupKey: 'nonmetal',
        titleKey: 'system.oxygen.title',
        descKey: 'system.oxygen.desc',
        detailsKey: 'system.oxygen.details',
        factKey: 'system.oxygen.fact',
        model: null,
        image: 'assets/images/oxygen_atom_lux.png',
        color: '#EF4444', // Red for Oxygen
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Oxygen', textKey: 'resource.wiki.oxygen', url: 'https://en.wikipedia.org/wiki/Oxygen' },
            { text: 'PubChem: Oxygen', textKey: 'resource.pubchem.oxygen', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Oxygen' }
        ],
        ai: {
            simpleKey: 'ai.oxygen.simple',
            detailedKey: 'ai.oxygen.detailed',
            studyKey: ['ai.oxygen.study.1', 'ai.oxygen.study.2', 'ai.oxygen.study.3', 'ai.oxygen.study.4', 'ai.oxygen.study.5'],
            questions: [
                { textKey: 'ai.oxygen.q1.text', options: ['ai.oxygen.q1.opt.1', 'ai.oxygen.q1.opt.2', 'ai.oxygen.q1.opt.3', 'ai.oxygen.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.oxygen.q2.text', options: ['ai.oxygen.q2.opt.1', 'ai.oxygen.q2.opt.2', 'ai.oxygen.q2.opt.3', 'ai.oxygen.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.oxygen.q3.text', options: ['ai.oxygen.q3.opt.1', 'ai.oxygen.q3.opt.2', 'ai.oxygen.q3.opt.3', 'ai.oxygen.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.oxygen.q4.text', options: ['ai.oxygen.q4.opt.1', 'ai.oxygen.q4.opt.2', 'ai.oxygen.q4.opt.3', 'ai.oxygen.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.oxygen.q5.text', options: ['ai.oxygen.q5.opt.1', 'ai.oxygen.q5.opt.2', 'ai.oxygen.q5.opt.3', 'ai.oxygen.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'fluorine',
        atomicNumber: 9,
        symbol: 'F',
        group: 'Halogen',
        groupKey: 'halogen',
        titleKey: 'system.fluorine.title',
        descKey: 'system.fluorine.desc',
        detailsKey: 'system.fluorine.details',
        factKey: 'system.fluorine.fact',
        model: null,
        image: 'assets/images/fluorine_atom_lux.png',
        color: '#F97316',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Fluorine', textKey: 'resource.wiki.fluorine', url: 'https://en.wikipedia.org/wiki/Fluorine' },
            { text: 'PubChem: Fluorine', textKey: 'resource.pubchem.fluorine', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Fluorine' }
        ],
        ai: {
            simpleKey: 'ai.fluorine.simple',
            detailedKey: 'ai.fluorine.detailed',
            studyKey: ['ai.fluorine.study.1', 'ai.fluorine.study.2', 'ai.fluorine.study.3', 'ai.fluorine.study.4', 'ai.fluorine.study.5'],
            questions: [
                { textKey: 'ai.fluorine.q1.text', options: ['ai.fluorine.q1.opt.1', 'ai.fluorine.q1.opt.2', 'ai.fluorine.q1.opt.3', 'ai.fluorine.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.fluorine.q2.text', options: ['ai.fluorine.q2.opt.1', 'ai.fluorine.q2.opt.2', 'ai.fluorine.q2.opt.3', 'ai.fluorine.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.fluorine.q3.text', options: ['ai.fluorine.q3.opt.1', 'ai.fluorine.q3.opt.2', 'ai.fluorine.q3.opt.3', 'ai.fluorine.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.fluorine.q4.text', options: ['ai.fluorine.q4.opt.1', 'ai.fluorine.q4.opt.2', 'ai.fluorine.q4.opt.3', 'ai.fluorine.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.fluorine.q5.text', options: ['ai.fluorine.q5.opt.1', 'ai.fluorine.q5.opt.2', 'ai.fluorine.q5.opt.3', 'ai.fluorine.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'neon',
        atomicNumber: 10,
        symbol: 'Ne',
        group: 'Noble Gas',
        groupKey: 'noble_gas',
        titleKey: 'system.neon.title',
        descKey: 'system.neon.desc',
        detailsKey: 'system.neon.details',
        factKey: 'system.neon.fact',
        model: null,
        image: 'assets/images/neon_atom_lux.png',
        color: '#C084FC',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Neon', textKey: 'resource.wiki.neon', url: 'https://en.wikipedia.org/wiki/Neon' },
            { text: 'PubChem: Neon', textKey: 'resource.pubchem.neon', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Neon' }
        ],
        ai: {
            simpleKey: 'ai.neon.simple',
            detailedKey: 'ai.neon.detailed',
            studyKey: ['ai.neon.study.1', 'ai.neon.study.2', 'ai.neon.study.3', 'ai.neon.study.4', 'ai.neon.study.5'],
            questions: [
                { textKey: 'ai.neon.q1.text', options: ['ai.neon.q1.opt.1', 'ai.neon.q1.opt.2', 'ai.neon.q1.opt.3', 'ai.neon.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.neon.q2.text', options: ['ai.neon.q2.opt.1', 'ai.neon.q2.opt.2', 'ai.neon.q2.opt.3', 'ai.neon.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.neon.q3.text', options: ['ai.neon.q3.opt.1', 'ai.neon.q3.opt.2', 'ai.neon.q3.opt.3', 'ai.neon.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.neon.q4.text', options: ['ai.neon.q4.opt.1', 'ai.neon.q4.opt.2', 'ai.neon.q4.opt.3', 'ai.neon.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.neon.q5.text', options: ['ai.neon.q5.opt.1', 'ai.neon.q5.opt.2', 'ai.neon.q5.opt.3', 'ai.neon.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'sodium',
        atomicNumber: 11,
        symbol: 'Na',
        group: 'Alkali Metal',
        groupKey: 'alkali_metal',
        titleKey: 'system.sodium.title',
        descKey: 'system.sodium.desc',
        detailsKey: 'system.sodium.details',
        factKey: 'system.sodium.fact',
        model: null,
        image: 'assets/images/sodium_atom_lux.png',
        color: '#94A3B8', // Silver for Sodium
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Sodium', textKey: 'resource.wiki.sodium', url: 'https://en.wikipedia.org/wiki/Sodium' },
            { text: 'PubChem: Sodium', textKey: 'resource.pubchem.sodium', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Sodium' }
        ],
        ai: {
            simpleKey: 'ai.sodium.simple',
            detailedKey: 'ai.sodium.detailed',
            studyKey: ['ai.sodium.study.1', 'ai.sodium.study.2', 'ai.sodium.study.3', 'ai.sodium.study.4', 'ai.sodium.study.5'],
            questions: [
                { textKey: 'ai.sodium.q1.text', options: ['ai.sodium.q1.opt.1', 'ai.sodium.q1.opt.2', 'ai.sodium.q1.opt.3', 'ai.sodium.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.sodium.q2.text', options: ['ai.sodium.q2.opt.1', 'ai.sodium.q2.opt.2', 'ai.sodium.q2.opt.3', 'ai.sodium.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.sodium.q3.text', options: ['ai.sodium.q3.opt.1', 'ai.sodium.q3.opt.2', 'ai.sodium.q3.opt.3', 'ai.sodium.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.sodium.q4.text', options: ['ai.sodium.q4.opt.1', 'ai.sodium.q4.opt.2', 'ai.sodium.q4.opt.3', 'ai.sodium.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.sodium.q5.text', options: ['ai.sodium.q5.opt.1', 'ai.sodium.q5.opt.2', 'ai.sodium.q5.opt.3', 'ai.sodium.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'magnesium',
        atomicNumber: 12,
        symbol: 'Mg',
        group: 'Alkaline Earth Metal',
        groupKey: 'alkaline_earth',
        titleKey: 'system.magnesium.title',
        descKey: 'system.magnesium.desc',
        detailsKey: 'system.magnesium.details',
        factKey: 'system.magnesium.fact',
        model: null,
        image: 'assets/images/magnesium_atom_lux.png',
        color: '#CBD5E1', // Silver/Grey for Magnesium
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Magnesium', textKey: 'resource.wiki.magnesium', url: 'https://en.wikipedia.org/wiki/Magnesium' },
            { text: 'PubChem: Magnesium', textKey: 'resource.pubchem.magnesium', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Magnesium' }
        ],
        ai: {
            simpleKey: 'ai.magnesium.simple',
            detailedKey: 'ai.magnesium.detailed',
            studyKey: ['ai.magnesium.study.1', 'ai.magnesium.study.2', 'ai.magnesium.study.3', 'ai.magnesium.study.4', 'ai.magnesium.study.5'],
            questions: [
                { textKey: 'ai.magnesium.q1.text', options: ['ai.magnesium.q1.opt.1', 'ai.magnesium.q1.opt.2', 'ai.magnesium.q1.opt.3', 'ai.magnesium.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.magnesium.q2.text', options: ['ai.magnesium.q2.opt.1', 'ai.magnesium.q2.opt.2', 'ai.magnesium.q2.opt.3', 'ai.magnesium.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.magnesium.q3.text', options: ['ai.magnesium.q3.opt.1', 'ai.magnesium.q3.opt.2', 'ai.magnesium.q3.opt.3', 'ai.magnesium.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.magnesium.q4.text', options: ['ai.magnesium.q4.opt.1', 'ai.magnesium.q4.opt.2', 'ai.magnesium.q4.opt.3', 'ai.magnesium.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.magnesium.q5.text', options: ['ai.magnesium.q5.opt.1', 'ai.magnesium.q5.opt.2', 'ai.magnesium.q5.opt.3', 'ai.magnesium.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'aluminum',
        atomicNumber: 13,
        symbol: 'Al',
        group: 'Post-Transition Metal',
        groupKey: 'post_transition',
        titleKey: 'system.aluminum.title',
        descKey: 'system.aluminum.desc',
        detailsKey: 'system.aluminum.details',
        factKey: 'system.aluminum.fact',
        model: null,
        image: 'assets/images/aluminum_atom_lux.png',
        color: '#E2E8F0', // Light Silver for Aluminum
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Aluminum', textKey: 'resource.wiki.aluminum', url: 'https://en.wikipedia.org/wiki/Aluminum' },
            { text: 'PubChem: Aluminum', textKey: 'resource.pubchem.aluminum', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Aluminum' }
        ],
        ai: {
            simpleKey: 'ai.aluminum.simple',
            detailedKey: 'ai.aluminum.detailed',
            studyKey: ['ai.aluminum.study.1', 'ai.aluminum.study.2', 'ai.aluminum.study.3', 'ai.aluminum.study.4', 'ai.aluminum.study.5'],
            questions: [
                { textKey: 'ai.aluminum.q1.text', options: ['ai.aluminum.q1.opt.1', 'ai.aluminum.q1.opt.2', 'ai.aluminum.q1.opt.3', 'ai.aluminum.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.aluminum.q2.text', options: ['ai.aluminum.q2.opt.1', 'ai.aluminum.q2.opt.2', 'ai.aluminum.q2.opt.3', 'ai.aluminum.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.aluminum.q3.text', options: ['ai.aluminum.q3.opt.1', 'ai.aluminum.q3.opt.2', 'ai.aluminum.q3.opt.3', 'ai.aluminum.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.aluminum.q4.text', options: ['ai.aluminum.q4.opt.1', 'ai.aluminum.q4.opt.2', 'ai.aluminum.q4.opt.3', 'ai.aluminum.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.aluminum.q5.text', options: ['ai.aluminum.q5.opt.1', 'ai.aluminum.q5.opt.2', 'ai.aluminum.q5.opt.3', 'ai.aluminum.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'silicon',
        atomicNumber: 14,
        symbol: 'Si',
        group: 'Metalloid',
        groupKey: 'metalloid',
        titleKey: 'system.silicon.title',
        descKey: 'system.silicon.desc',
        detailsKey: 'system.silicon.details',
        factKey: 'system.silicon.fact',
        model: null,
        image: 'assets/images/silicon_atom_lux.png',
        color: '#94A3B8', // Silver/Grey for Silicon
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Silicon', textKey: 'resource.wiki.silicon', url: 'https://en.wikipedia.org/wiki/Silicon' },
            { text: 'PubChem: Silicon', textKey: 'resource.pubchem.silicon', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Silicon' }
        ],
        ai: {
            simpleKey: 'ai.silicon.simple',
            detailedKey: 'ai.silicon.detailed',
            studyKey: ['ai.silicon.study.1', 'ai.silicon.study.2', 'ai.silicon.study.3', 'ai.silicon.study.4', 'ai.silicon.study.5'],
            questions: [
                { textKey: 'ai.silicon.q1.text', options: ['ai.silicon.q1.opt.1', 'ai.silicon.q1.opt.2', 'ai.silicon.q1.opt.3', 'ai.silicon.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.silicon.q2.text', options: ['ai.silicon.q2.opt.1', 'ai.silicon.q2.opt.2', 'ai.silicon.q2.opt.3', 'ai.silicon.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.silicon.q3.text', options: ['ai.silicon.q3.opt.1', 'ai.silicon.q3.opt.2', 'ai.silicon.q3.opt.3', 'ai.silicon.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.silicon.q4.text', options: ['ai.silicon.q4.opt.1', 'ai.silicon.q4.opt.2', 'ai.silicon.q4.opt.3', 'ai.silicon.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.silicon.q5.text', options: ['ai.silicon.q5.opt.1', 'ai.silicon.q5.opt.2', 'ai.silicon.q5.opt.3', 'ai.silicon.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'phosphorus',
        atomicNumber: 15,
        symbol: 'P',
        group: 'Nonmetal',
        groupKey: 'nonmetal',
        titleKey: 'system.phosphorus.title',
        descKey: 'system.phosphorus.desc',
        detailsKey: 'system.phosphorus.details',
        factKey: 'system.phosphorus.fact',
        model: null,
        image: 'assets/images/phosphorus_atom_lux.png',
        color: '#FDE047', // Pale Yellow for Phosphorus
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Phosphorus', textKey: 'resource.wiki.phosphorus', url: 'https://en.wikipedia.org/wiki/Phosphorus' },
            { text: 'PubChem: Phosphorus', textKey: 'resource.pubchem.phosphorus', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Phosphorus' }
        ],
        ai: {
            simpleKey: 'ai.phosphorus.simple',
            detailedKey: 'ai.phosphorus.detailed',
            studyKey: ['ai.phosphorus.study.1', 'ai.phosphorus.study.2', 'ai.phosphorus.study.3', 'ai.phosphorus.study.4', 'ai.phosphorus.study.5'],
            questions: [
                { textKey: 'ai.phosphorus.q1.text', options: ['ai.phosphorus.q1.opt.1', 'ai.phosphorus.q1.opt.2', 'ai.phosphorus.q1.opt.3', 'ai.phosphorus.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.phosphorus.q2.text', options: ['ai.phosphorus.q2.opt.1', 'ai.phosphorus.q2.opt.2', 'ai.phosphorus.q2.opt.3', 'ai.phosphorus.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.phosphorus.q3.text', options: ['ai.phosphorus.q3.opt.1', 'ai.phosphorus.q3.opt.2', 'ai.phosphorus.q3.opt.3', 'ai.phosphorus.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.phosphorus.q4.text', options: ['ai.phosphorus.q4.opt.1', 'ai.phosphorus.q4.opt.2', 'ai.phosphorus.q4.opt.3', 'ai.phosphorus.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.phosphorus.q5.text', options: ['ai.phosphorus.q5.opt.1', 'ai.phosphorus.q5.opt.2', 'ai.phosphorus.q5.opt.3', 'ai.phosphorus.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'sulfur',
        atomicNumber: 16,
        symbol: 'S',
        group: 'Nonmetal',
        groupKey: 'nonmetal',
        titleKey: 'system.sulfur.title',
        descKey: 'system.sulfur.desc',
        detailsKey: 'system.sulfur.details',
        factKey: 'system.sulfur.fact',
        model: null,
        image: 'assets/images/sulfur_atom_lux.png',
        color: '#EAB308', // Bright Yellow for Sulfur
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Sulfur', textKey: 'resource.wiki.sulfur', url: 'https://en.wikipedia.org/wiki/Sulfur' },
            { text: 'PubChem: Sulfur', textKey: 'resource.pubchem.sulfur', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Sulfur' }
        ],
        ai: {
            simpleKey: 'ai.sulfur.simple',
            detailedKey: 'ai.sulfur.detailed',
            studyKey: ['ai.sulfur.study.1', 'ai.sulfur.study.2', 'ai.sulfur.study.3', 'ai.sulfur.study.4', 'ai.sulfur.study.5'],
            questions: [
                { textKey: 'ai.sulfur.q1.text', options: ['ai.sulfur.q1.opt.1', 'ai.sulfur.q1.opt.2', 'ai.sulfur.q1.opt.3', 'ai.sulfur.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.sulfur.q2.text', options: ['ai.sulfur.q2.opt.1', 'ai.sulfur.q2.opt.2', 'ai.sulfur.q2.opt.3', 'ai.sulfur.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.sulfur.q3.text', options: ['ai.sulfur.q3.opt.1', 'ai.sulfur.q3.opt.2', 'ai.sulfur.q3.opt.3', 'ai.sulfur.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.sulfur.q4.text', options: ['ai.sulfur.q4.opt.1', 'ai.sulfur.q4.opt.2', 'ai.sulfur.q4.opt.3', 'ai.sulfur.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.sulfur.q5.text', options: ['ai.sulfur.q5.opt.1', 'ai.sulfur.q5.opt.2', 'ai.sulfur.q5.opt.3', 'ai.sulfur.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'chlorine',
        atomicNumber: 17,
        symbol: 'Cl',
        group: 'Halogen',
        groupKey: 'halogen',
        titleKey: 'system.chlorine.title',
        descKey: 'system.chlorine.desc',
        detailsKey: 'system.chlorine.details',
        factKey: 'system.chlorine.fact',
        model: null,
        image: 'assets/images/chlorine_atom_lux.png',
        color: '#22C55E', // Green for Chlorine
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Chlorine', textKey: 'resource.wiki.chlorine', url: 'https://en.wikipedia.org/wiki/Chlorine' },
            { text: 'PubChem: Chlorine', textKey: 'resource.pubchem.chlorine', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Chlorine' }
        ],
        ai: {
            simpleKey: 'ai.chlorine.simple',
            detailedKey: 'ai.chlorine.detailed',
            studyKey: ['ai.chlorine.study.1', 'ai.chlorine.study.2', 'ai.chlorine.study.3', 'ai.chlorine.study.4', 'ai.chlorine.study.5'],
            questions: [
                { textKey: 'ai.chlorine.q1.text', options: ['ai.chlorine.q1.opt.1', 'ai.chlorine.q1.opt.2', 'ai.chlorine.q1.opt.3', 'ai.chlorine.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.chlorine.q2.text', options: ['ai.chlorine.q2.opt.1', 'ai.chlorine.q2.opt.2', 'ai.chlorine.q2.opt.3', 'ai.chlorine.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.chlorine.q3.text', options: ['ai.chlorine.q3.opt.1', 'ai.chlorine.q3.opt.2', 'ai.chlorine.q3.opt.3', 'ai.chlorine.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.chlorine.q4.text', options: ['ai.chlorine.q4.opt.1', 'ai.chlorine.q4.opt.2', 'ai.chlorine.q4.opt.3', 'ai.chlorine.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.chlorine.q5.text', options: ['ai.chlorine.q5.opt.1', 'ai.chlorine.q5.opt.2', 'ai.chlorine.q5.opt.3', 'ai.chlorine.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'argon',
        atomicNumber: 18,
        symbol: 'Ar',
        group: 'Noble Gas',
        groupKey: 'noble_gas',
        titleKey: 'system.argon.title',
        descKey: 'system.argon.desc',
        detailsKey: 'system.argon.details',
        factKey: 'system.argon.fact',
        model: null,
        image: 'assets/images/argon_atom_lux.png',
        color: '#A855F7', // Violet for Argon
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Argon', textKey: 'resource.wiki.argon', url: 'https://en.wikipedia.org/wiki/Argon' },
            { text: 'PubChem: Argon', textKey: 'resource.pubchem.argon', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Argon' }
        ],
        ai: {
            simpleKey: 'ai.argon.simple',
            detailedKey: 'ai.argon.detailed',
            studyKey: ['ai.argon.study.1', 'ai.argon.study.2', 'ai.argon.study.3', 'ai.argon.study.4', 'ai.argon.study.5'],
            questions: [
                { textKey: 'ai.argon.q1.text', options: ['ai.argon.q1.opt.1', 'ai.argon.q1.opt.2', 'ai.argon.q1.opt.3', 'ai.argon.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.argon.q2.text', options: ['ai.argon.q2.opt.1', 'ai.argon.q2.opt.2', 'ai.argon.q2.opt.3', 'ai.argon.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.argon.q3.text', options: ['ai.argon.q3.opt.1', 'ai.argon.q3.opt.2', 'ai.argon.q3.opt.3', 'ai.argon.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.argon.q4.text', options: ['ai.argon.q4.opt.1', 'ai.argon.q4.opt.2', 'ai.argon.q4.opt.3', 'ai.argon.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.argon.q5.text', options: ['ai.argon.q5.opt.1', 'ai.argon.q5.opt.2', 'ai.argon.q5.opt.3', 'ai.argon.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'potassium',
        atomicNumber: 19,
        symbol: 'K',
        group: 'Alkali Metal',
        groupKey: 'alkali_metal',
        titleKey: 'system.potassium.title',
        descKey: 'system.potassium.desc',
        detailsKey: 'system.potassium.details',
        factKey: 'system.potassium.fact',
        model: null,
        image: 'assets/images/potassium_atom_lux.png',
        color: '#FF6B6B',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Potassium', textKey: 'resource.wiki.potassium', url: 'https://en.wikipedia.org/wiki/Potassium' },
            { text: 'PubChem: Potassium', textKey: 'resource.pubchem.potassium', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Potassium' }
        ],
        ai: {
            simpleKey: 'ai.potassium.simple',
            detailedKey: 'ai.potassium.detailed',
            studyKey: ['ai.potassium.study.1', 'ai.potassium.study.2', 'ai.potassium.study.3', 'ai.potassium.study.4', 'ai.potassium.study.5'],
            questions: [
                { textKey: 'ai.potassium.q1.text', options: ['ai.potassium.q1.opt.1', 'ai.potassium.q1.opt.2', 'ai.potassium.q1.opt.3', 'ai.potassium.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.potassium.q2.text', options: ['ai.potassium.q2.opt.1', 'ai.potassium.q2.opt.2', 'ai.potassium.q2.opt.3', 'ai.potassium.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.potassium.q3.text', options: ['ai.potassium.q3.opt.1', 'ai.potassium.q3.opt.2', 'ai.potassium.q3.opt.3', 'ai.potassium.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.potassium.q4.text', options: ['ai.potassium.q4.opt.1', 'ai.potassium.q4.opt.2', 'ai.potassium.q4.opt.3', 'ai.potassium.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.potassium.q5.text', options: ['ai.potassium.q5.opt.1', 'ai.potassium.q5.opt.2', 'ai.potassium.q5.opt.3', 'ai.potassium.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'calcium',
        atomicNumber: 20,
        symbol: 'Ca',
        group: 'Alkaline Earth Metal',
        groupKey: 'alkaline_earth',
        titleKey: 'system.calcium.title',
        descKey: 'system.calcium.desc',
        detailsKey: 'system.calcium.details',
        factKey: 'system.calcium.fact',
        model: null,
        image: 'assets/images/calcium_atom_lux.png',
        color: '#4ECDC4',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Calcium', textKey: 'resource.wiki.calcium', url: 'https://en.wikipedia.org/wiki/Calcium' },
            { text: 'PubChem: Calcium', textKey: 'resource.pubchem.calcium', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Calcium' }
        ],
        ai: {
            simpleKey: 'ai.calcium.simple',
            detailedKey: 'ai.calcium.detailed',
            studyKey: ['ai.calcium.study.1', 'ai.calcium.study.2', 'ai.calcium.study.3', 'ai.calcium.study.4', 'ai.calcium.study.5'],
            questions: [
                { textKey: 'ai.calcium.q1.text', options: ['ai.calcium.q1.opt.1', 'ai.calcium.q1.opt.2', 'ai.calcium.q1.opt.3', 'ai.calcium.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.calcium.q2.text', options: ['ai.calcium.q2.opt.1', 'ai.calcium.q2.opt.2', 'ai.calcium.q2.opt.3', 'ai.calcium.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.calcium.q3.text', options: ['ai.calcium.q3.opt.1', 'ai.calcium.q3.opt.2', 'ai.calcium.q3.opt.3', 'ai.calcium.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.calcium.q4.text', options: ['ai.calcium.q4.opt.1', 'ai.calcium.q4.opt.2', 'ai.calcium.q4.opt.3', 'ai.calcium.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.calcium.q5.text', options: ['ai.calcium.q5.opt.1', 'ai.calcium.q5.opt.2', 'ai.calcium.q5.opt.3', 'ai.calcium.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'scandium',
        atomicNumber: 21,
        symbol: 'Sc',
        group: 'Transition Metal',
        groupKey: 'transition_metal',
        titleKey: 'system.scandium.title',
        descKey: 'system.scandium.desc',
        detailsKey: 'system.scandium.details',
        factKey: 'system.scandium.fact',
        model: null,
        image: 'assets/images/scandium_atom_lux.png',
        color: '#94A3B8',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Scandium', textKey: 'resource.wiki.scandium', url: 'https://en.wikipedia.org/wiki/Scandium' },
            { text: 'PubChem: Scandium', textKey: 'resource.pubchem.scandium', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Scandium' }
        ],
        ai: {
            simpleKey: 'ai.scandium.simple',
            detailedKey: 'ai.scandium.detailed',
            studyKey: ['ai.scandium.study.1', 'ai.scandium.study.2', 'ai.scandium.study.3', 'ai.scandium.study.4', 'ai.scandium.study.5'],
            questions: [
                { textKey: 'ai.scandium.q1.text', options: ['ai.scandium.q1.opt.1', 'ai.scandium.q1.opt.2', 'ai.scandium.q1.opt.3', 'ai.scandium.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.scandium.q2.text', options: ['ai.scandium.q2.opt.1', 'ai.scandium.q2.opt.2', 'ai.scandium.q2.opt.3', 'ai.scandium.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.scandium.q3.text', options: ['ai.scandium.q3.opt.1', 'ai.scandium.q3.opt.2', 'ai.scandium.q3.opt.3', 'ai.scandium.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.scandium.q4.text', options: ['ai.scandium.q4.opt.1', 'ai.scandium.q4.opt.2', 'ai.scandium.q4.opt.3', 'ai.scandium.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.scandium.q5.text', options: ['ai.scandium.q5.opt.1', 'ai.scandium.q5.opt.2', 'ai.scandium.q5.opt.3', 'ai.scandium.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'titanium',
        atomicNumber: 22,
        symbol: 'Ti',
        group: 'Transition Metal',
        groupKey: 'transition_metal',
        titleKey: 'system.titanium.title',
        descKey: 'system.titanium.desc',
        detailsKey: 'system.titanium.details',
        factKey: 'system.titanium.fact',
        model: null,
        image: 'assets/images/titanium_atom_lux.png',
        color: '#CBD5E1',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Titanium', textKey: 'resource.wiki.titanium', url: 'https://en.wikipedia.org/wiki/Titanium' },
            { text: 'PubChem: Titanium', textKey: 'resource.pubchem.titanium', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Titanium' }
        ],
        ai: {
            simpleKey: 'ai.titanium.simple',
            detailedKey: 'ai.titanium.detailed',
            studyKey: ['ai.titanium.study.1', 'ai.titanium.study.2', 'ai.titanium.study.3', 'ai.titanium.study.4', 'ai.titanium.study.5'],
            questions: [
                { textKey: 'ai.titanium.q1.text', options: ['ai.titanium.q1.opt.1', 'ai.titanium.q1.opt.2', 'ai.titanium.q1.opt.3', 'ai.titanium.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.titanium.q2.text', options: ['ai.titanium.q2.opt.1', 'ai.titanium.q2.opt.2', 'ai.titanium.q2.opt.3', 'ai.titanium.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.titanium.q3.text', options: ['ai.titanium.q3.opt.1', 'ai.titanium.q3.opt.2', 'ai.titanium.q3.opt.3', 'ai.titanium.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.titanium.q4.text', options: ['ai.titanium.q4.opt.1', 'ai.titanium.q4.opt.2', 'ai.titanium.q4.opt.3', 'ai.titanium.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.titanium.q5.text', options: ['ai.titanium.q5.opt.1', 'ai.titanium.q5.opt.2', 'ai.titanium.q5.opt.3', 'ai.titanium.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'vanadium',
        atomicNumber: 23,
        symbol: 'V',
        group: 'Transition Metal',
        groupKey: 'transition_metal',
        titleKey: 'system.vanadium.title',
        descKey: 'system.vanadium.desc',
        detailsKey: 'system.vanadium.details',
        factKey: 'system.vanadium.fact',
        model: null,
        image: 'assets/images/vanadium_atom_lux.png',
        color: '#94A3B8',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Vanadium', textKey: 'resource.wiki.vanadium', url: 'https://en.wikipedia.org/wiki/Vanadium' },
            { text: 'PubChem: Vanadium', textKey: 'resource.pubchem.vanadium', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Vanadium' }
        ],
        ai: {
            simpleKey: 'ai.vanadium.simple',
            detailedKey: 'ai.vanadium.detailed',
            studyKey: ['ai.vanadium.study.1', 'ai.vanadium.study.2', 'ai.vanadium.study.3', 'ai.vanadium.study.4', 'ai.vanadium.study.5'],
            questions: [
                { textKey: 'ai.vanadium.q1.text', options: ['ai.vanadium.q1.opt.1', 'ai.vanadium.q1.opt.2', 'ai.vanadium.q1.opt.3', 'ai.vanadium.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.vanadium.q2.text', options: ['ai.vanadium.q2.opt.1', 'ai.vanadium.q2.opt.2', 'ai.vanadium.q2.opt.3', 'ai.vanadium.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.vanadium.q3.text', options: ['ai.vanadium.q3.opt.1', 'ai.vanadium.q3.opt.2', 'ai.vanadium.q3.opt.3', 'ai.vanadium.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.vanadium.q4.text', options: ['ai.vanadium.q4.opt.1', 'ai.vanadium.q4.opt.2', 'ai.vanadium.q4.opt.3', 'ai.vanadium.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.vanadium.q5.text', options: ['ai.vanadium.q5.opt.1', 'ai.vanadium.q5.opt.2', 'ai.vanadium.q5.opt.3', 'ai.vanadium.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'chromium',
        atomicNumber: 24,
        symbol: 'Cr',
        group: 'Transition Metal',
        groupKey: 'transition_metal',
        titleKey: 'system.chromium.title',
        descKey: 'system.chromium.desc',
        detailsKey: 'system.chromium.details',
        factKey: 'system.chromium.fact',
        model: null,
        image: 'assets/images/chromium_atom_lux.png',
        color: '#E2E8F0',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Chromium', textKey: 'resource.wiki.chromium', url: 'https://en.wikipedia.org/wiki/Chromium' },
            { text: 'PubChem: Chromium', textKey: 'resource.pubchem.chromium', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Chromium' }
        ],
        ai: {
            simpleKey: 'ai.chromium.simple',
            detailedKey: 'ai.chromium.detailed',
            studyKey: ['ai.chromium.study.1', 'ai.chromium.study.2', 'ai.chromium.study.3', 'ai.chromium.study.4', 'ai.chromium.study.5'],
            questions: [
                { textKey: 'ai.chromium.q1.text', options: ['ai.chromium.q1.opt.1', 'ai.chromium.q1.opt.2', 'ai.chromium.q1.opt.3', 'ai.chromium.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.chromium.q2.text', options: ['ai.chromium.q2.opt.1', 'ai.chromium.q2.opt.2', 'ai.chromium.q2.opt.3', 'ai.chromium.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.chromium.q3.text', options: ['ai.chromium.q3.opt.1', 'ai.chromium.q3.opt.2', 'ai.chromium.q3.opt.3', 'ai.chromium.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.chromium.q4.text', options: ['ai.chromium.q4.opt.1', 'ai.chromium.q4.opt.2', 'ai.chromium.q4.opt.3', 'ai.chromium.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.chromium.q5.text', options: ['ai.chromium.q5.opt.1', 'ai.chromium.q5.opt.2', 'ai.chromium.q5.opt.3', 'ai.chromium.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'manganese',
        atomicNumber: 25,
        symbol: 'Mn',
        group: 'Transition Metal',
        groupKey: 'transition_metal',
        titleKey: 'system.manganese.title',
        descKey: 'system.manganese.desc',
        detailsKey: 'system.manganese.details',
        factKey: 'system.manganese.fact',
        model: null,
        image: 'assets/images/manganese_atom_lux.png',
        color: '#94A3B8',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Manganese', textKey: 'resource.wiki.manganese', url: 'https://en.wikipedia.org/wiki/Manganese' },
            { text: 'PubChem: Manganese', textKey: 'resource.pubchem.manganese', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Manganese' }
        ],
        ai: {
            simpleKey: 'ai.manganese.simple',
            detailedKey: 'ai.manganese.detailed',
            studyKey: ['ai.manganese.study.1', 'ai.manganese.study.2', 'ai.manganese.study.3', 'ai.manganese.study.4', 'ai.manganese.study.5'],
            questions: [
                { textKey: 'ai.manganese.q1.text', options: ['ai.manganese.q1.opt.1', 'ai.manganese.q1.opt.2', 'ai.manganese.q1.opt.3', 'ai.manganese.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.manganese.q2.text', options: ['ai.manganese.q2.opt.1', 'ai.manganese.q2.opt.2', 'ai.manganese.q2.opt.3', 'ai.manganese.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.manganese.q3.text', options: ['ai.manganese.q3.opt.1', 'ai.manganese.q3.opt.2', 'ai.manganese.q3.opt.3', 'ai.manganese.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.manganese.q4.text', options: ['ai.manganese.q4.opt.1', 'ai.manganese.q4.opt.2', 'ai.manganese.q4.opt.3', 'ai.manganese.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.manganese.q5.text', options: ['ai.manganese.q5.opt.1', 'ai.manganese.q5.opt.2', 'ai.manganese.q5.opt.3', 'ai.manganese.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'iron',
        atomicNumber: 26,
        symbol: 'Fe',
        group: 'Transition Metal',
        groupKey: 'transition_metal',
        titleKey: 'system.iron.title',
        descKey: 'system.iron.desc',
        detailsKey: 'system.iron.details',
        factKey: 'system.iron.fact',
        model: null,
        image: 'assets/images/iron_atom_lux.png',
        color: '#475569',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Iron', textKey: 'resource.wiki.iron', url: 'https://en.wikipedia.org/wiki/Iron' },
            { text: 'PubChem: Iron', textKey: 'resource.pubchem.iron', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Iron' }
        ],
        ai: {
            simpleKey: 'ai.iron.simple',
            detailedKey: 'ai.iron.detailed',
            studyKey: ['ai.iron.study.1', 'ai.iron.study.2', 'ai.iron.study.3', 'ai.iron.study.4', 'ai.iron.study.5'],
            questions: [
                { textKey: 'ai.iron.q1.text', options: ['ai.iron.q1.opt.1', 'ai.iron.q1.opt.2', 'ai.iron.q1.opt.3', 'ai.iron.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.iron.q2.text', options: ['ai.iron.q2.opt.1', 'ai.iron.q2.opt.2', 'ai.iron.q2.opt.3', 'ai.iron.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.iron.q3.text', options: ['ai.iron.q3.opt.1', 'ai.iron.q3.opt.2', 'ai.iron.q3.opt.3', 'ai.iron.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.iron.q4.text', options: ['ai.iron.q4.opt.1', 'ai.iron.q4.opt.2', 'ai.iron.q4.opt.3', 'ai.iron.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.iron.q5.text', options: ['ai.iron.q5.opt.1', 'ai.iron.q5.opt.2', 'ai.iron.q5.opt.3', 'ai.iron.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'cobalt',
        atomicNumber: 27,
        symbol: 'Co',
        group: 'Transition Metal',
        groupKey: 'transition_metal',
        titleKey: 'system.cobalt.title',
        descKey: 'system.cobalt.desc',
        detailsKey: 'system.cobalt.details',
        factKey: 'system.cobalt.fact',
        model: null,
        image: 'assets/images/cobalt_atom_lux.png',
        color: '#3B82F6',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Cobalt', textKey: 'resource.wiki.cobalt', url: 'https://en.wikipedia.org/wiki/Cobalt' },
            { text: 'PubChem: Cobalt', textKey: 'resource.pubchem.cobalt', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Cobalt' }
        ],
        ai: {
            simpleKey: 'ai.cobalt.simple',
            detailedKey: 'ai.cobalt.detailed',
            studyKey: ['ai.cobalt.study.1', 'ai.cobalt.study.2', 'ai.cobalt.study.3', 'ai.cobalt.study.4', 'ai.cobalt.study.5'],
            questions: [
                { textKey: 'ai.cobalt.q1.text', options: ['ai.cobalt.q1.opt.1', 'ai.cobalt.q1.opt.2', 'ai.cobalt.q1.opt.3', 'ai.cobalt.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.cobalt.q2.text', options: ['ai.cobalt.q2.opt.1', 'ai.cobalt.q2.opt.2', 'ai.cobalt.q2.opt.3', 'ai.cobalt.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.cobalt.q3.text', options: ['ai.cobalt.q3.opt.1', 'ai.cobalt.q3.opt.2', 'ai.cobalt.q3.opt.3', 'ai.cobalt.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.cobalt.q4.text', options: ['ai.cobalt.q4.opt.1', 'ai.cobalt.q4.opt.2', 'ai.cobalt.q4.opt.3', 'ai.cobalt.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.cobalt.q5.text', options: ['ai.cobalt.q5.opt.1', 'ai.cobalt.q5.opt.2', 'ai.cobalt.q5.opt.3', 'ai.cobalt.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'nickel',
        atomicNumber: 28,
        symbol: 'Ni',
        group: 'Transition Metal',
        groupKey: 'transition_metal',
        titleKey: 'system.nickel.title',
        descKey: 'system.nickel.desc',
        detailsKey: 'system.nickel.details',
        factKey: 'system.nickel.fact',
        model: null,
        image: 'assets/images/nickel_atom_lux.png',
        color: '#94A3B8',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Nickel', textKey: 'resource.wiki.nickel', url: 'https://en.wikipedia.org/wiki/Nickel' },
            { text: 'PubChem: Nickel', textKey: 'resource.pubchem.nickel', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Nickel' }
        ],
        ai: {
            simpleKey: 'ai.nickel.simple',
            detailedKey: 'ai.nickel.detailed',
            studyKey: ['ai.nickel.study.1', 'ai.nickel.study.2', 'ai.nickel.study.3', 'ai.nickel.study.4', 'ai.nickel.study.5'],
            questions: [
                { textKey: 'ai.nickel.q1.text', options: ['ai.nickel.q1.opt.1', 'ai.nickel.q1.opt.2', 'ai.nickel.q1.opt.3', 'ai.nickel.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.nickel.q2.text', options: ['ai.nickel.q2.opt.1', 'ai.nickel.q2.opt.2', 'ai.nickel.q2.opt.3', 'ai.nickel.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.nickel.q3.text', options: ['ai.nickel.q3.opt.1', 'ai.nickel.q3.opt.2', 'ai.nickel.q3.opt.3', 'ai.nickel.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.nickel.q4.text', options: ['ai.nickel.q4.opt.1', 'ai.nickel.q4.opt.2', 'ai.nickel.q4.opt.3', 'ai.nickel.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.nickel.q5.text', options: ['ai.nickel.q5.opt.1', 'ai.nickel.q5.opt.2', 'ai.nickel.q5.opt.3', 'ai.nickel.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'copper',
        atomicNumber: 29,
        symbol: 'Cu',
        group: 'Transition Metal',
        groupKey: 'transition_metal',
        titleKey: 'system.copper.title',
        descKey: 'system.copper.desc',
        detailsKey: 'system.copper.details',
        factKey: 'system.copper.fact',
        model: null,
        image: 'assets/images/copper_atom_lux.png',
        color: '#B45309',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Copper', textKey: 'resource.wiki.copper', url: 'https://en.wikipedia.org/wiki/Copper' },
            { text: 'PubChem: Copper', textKey: 'resource.pubchem.copper', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Copper' }
        ],
        ai: {
            simpleKey: 'ai.copper.simple',
            detailedKey: 'ai.copper.detailed',
            studyKey: ['ai.copper.study.1', 'ai.copper.study.2', 'ai.copper.study.3', 'ai.copper.study.4', 'ai.copper.study.5'],
            questions: [
                { textKey: 'ai.copper.q1.text', options: ['ai.copper.q1.opt.1', 'ai.copper.q1.opt.2', 'ai.copper.q1.opt.3', 'ai.copper.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.copper.q2.text', options: ['ai.copper.q2.opt.1', 'ai.copper.q2.opt.2', 'ai.copper.q2.opt.3', 'ai.copper.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.copper.q3.text', options: ['ai.copper.q3.opt.1', 'ai.copper.q3.opt.2', 'ai.copper.q3.opt.3', 'ai.copper.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.copper.q4.text', options: ['ai.copper.q4.opt.1', 'ai.copper.q4.opt.2', 'ai.copper.q4.opt.3', 'ai.copper.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.copper.q5.text', options: ['ai.copper.q5.opt.1', 'ai.copper.q5.opt.2', 'ai.copper.q5.opt.3', 'ai.copper.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'zinc',
        atomicNumber: 30,
        symbol: 'Zn',
        group: 'Transition Metal',
        groupKey: 'transition_metal',
        titleKey: 'system.zinc.title',
        descKey: 'system.zinc.desc',
        detailsKey: 'system.zinc.details',
        factKey: 'system.zinc.fact',
        model: null,
        image: 'assets/images/zinc_atom_lux.png',
        color: '#94A3B8',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Zinc', textKey: 'resource.wiki.zinc', url: 'https://en.wikipedia.org/wiki/Zinc' },
            { text: 'PubChem: Zinc', textKey: 'resource.pubchem.zinc', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Zinc' }
        ],
        ai: {
            simpleKey: 'ai.zinc.simple',
            detailedKey: 'ai.zinc.detailed',
            studyKey: ['ai.zinc.study.1', 'ai.zinc.study.2', 'ai.zinc.study.3', 'ai.zinc.study.4', 'ai.zinc.study.5'],
            questions: [
                { textKey: 'ai.zinc.q1.text', options: ['ai.zinc.q1.opt.1', 'ai.zinc.q1.opt.2', 'ai.zinc.q1.opt.3', 'ai.zinc.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.zinc.q2.text', options: ['ai.zinc.q2.opt.1', 'ai.zinc.q2.opt.2', 'ai.zinc.q2.opt.3', 'ai.zinc.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.zinc.q3.text', options: ['ai.zinc.q3.opt.1', 'ai.zinc.q3.opt.2', 'ai.zinc.q3.opt.3', 'ai.zinc.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.zinc.q4.text', options: ['ai.zinc.q4.opt.1', 'ai.zinc.q4.opt.2', 'ai.zinc.q4.opt.3', 'ai.zinc.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.zinc.q5.text', options: ['ai.zinc.q5.opt.1', 'ai.zinc.q5.opt.2', 'ai.zinc.q5.opt.3', 'ai.zinc.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'gallium',
        atomicNumber: 31,
        symbol: 'Ga',
        group: 'Post-Transition Metal',
        groupKey: 'post_transition',
        titleKey: 'system.gallium.title',
        descKey: 'system.gallium.desc',
        detailsKey: 'system.gallium.details',
        factKey: 'system.gallium.fact',
        model: null,
        image: 'assets/images/gallium_atom_lux.png',
        color: '#E2E8F0',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Gallium', textKey: 'resource.wiki.gallium', url: 'https://en.wikipedia.org/wiki/Gallium' },
            { text: 'PubChem: Gallium', textKey: 'resource.pubchem.gallium', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Gallium' }
        ],
        ai: {
            simpleKey: 'ai.gallium.simple',
            detailedKey: 'ai.gallium.detailed',
            studyKey: ['ai.gallium.study.1', 'ai.gallium.study.2', 'ai.gallium.study.3', 'ai.gallium.study.4', 'ai.gallium.study.5'],
            questions: [
                { textKey: 'ai.gallium.q1.text', options: ['ai.gallium.q1.opt.1', 'ai.gallium.q1.opt.2', 'ai.gallium.q1.opt.3', 'ai.gallium.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.gallium.q2.text', options: ['ai.gallium.q2.opt.1', 'ai.gallium.q2.opt.2', 'ai.gallium.q2.opt.3', 'ai.gallium.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.gallium.q3.text', options: ['ai.gallium.q3.opt.1', 'ai.gallium.q3.opt.2', 'ai.gallium.q3.opt.3', 'ai.gallium.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.gallium.q4.text', options: ['ai.gallium.q4.opt.1', 'ai.gallium.q4.opt.2', 'ai.gallium.q4.opt.3', 'ai.gallium.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.gallium.q5.text', options: ['ai.gallium.q5.opt.1', 'ai.gallium.q5.opt.2', 'ai.gallium.q5.opt.3', 'ai.gallium.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'germanium',
        atomicNumber: 32,
        symbol: 'Ge',
        group: 'Metalloid',
        groupKey: 'metalloid',
        titleKey: 'system.germanium.title',
        descKey: 'system.germanium.desc',
        detailsKey: 'system.germanium.details',
        factKey: 'system.germanium.fact',
        model: null,
        image: 'assets/images/germanium_atom_lux.png',
        color: '#94A3B8',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Germanium', textKey: 'resource.wiki.germanium', url: 'https://en.wikipedia.org/wiki/Germanium' },
            { text: 'PubChem: Germanium', textKey: 'resource.pubchem.germanium', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Germanium' }
        ],
        ai: {
            simpleKey: 'ai.germanium.simple',
            detailedKey: 'ai.germanium.detailed',
            studyKey: ['ai.germanium.study.1', 'ai.germanium.study.2', 'ai.germanium.study.3', 'ai.germanium.study.4', 'ai.germanium.study.5'],
            questions: [
                { textKey: 'ai.germanium.q1.text', options: ['ai.germanium.q1.opt.1', 'ai.germanium.q1.opt.2', 'ai.germanium.q1.opt.3', 'ai.germanium.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.germanium.q2.text', options: ['ai.germanium.q2.opt.1', 'ai.germanium.q2.opt.2', 'ai.germanium.q2.opt.3', 'ai.germanium.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.germanium.q3.text', options: ['ai.germanium.q3.opt.1', 'ai.germanium.q3.opt.2', 'ai.germanium.q3.opt.3', 'ai.germanium.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.germanium.q4.text', options: ['ai.germanium.q4.opt.1', 'ai.germanium.q4.opt.2', 'ai.germanium.q4.opt.3', 'ai.germanium.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.germanium.q5.text', options: ['ai.germanium.q5.opt.1', 'ai.germanium.q5.opt.2', 'ai.germanium.q5.opt.3', 'ai.germanium.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'arsenic',
        atomicNumber: 33,
        symbol: 'As',
        group: 'Metalloid',
        groupKey: 'metalloid',
        titleKey: 'system.arsenic.title',
        descKey: 'system.arsenic.desc',
        detailsKey: 'system.arsenic.details',
        factKey: 'system.arsenic.fact',
        model: null,
        image: 'assets/images/arsenic_atom_lux.png',
        color: '#34D399',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Arsenic', textKey: 'resource.wiki.arsenic', url: 'https://en.wikipedia.org/wiki/Arsenic' },
            { text: 'PubChem: Arsenic', textKey: 'resource.pubchem.arsenic', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Arsenic' }
        ],
        ai: {
            simpleKey: 'ai.arsenic.simple',
            detailedKey: 'ai.arsenic.detailed',
            studyKey: ['ai.arsenic.study.1', 'ai.arsenic.study.2', 'ai.arsenic.study.3', 'ai.arsenic.study.4', 'ai.arsenic.study.5'],
            questions: [
                { textKey: 'ai.arsenic.q1.text', options: ['ai.arsenic.q1.opt.1', 'ai.arsenic.q1.opt.2', 'ai.arsenic.q1.opt.3', 'ai.arsenic.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.arsenic.q2.text', options: ['ai.arsenic.q2.opt.1', 'ai.arsenic.q2.opt.2', 'ai.arsenic.q2.opt.3', 'ai.arsenic.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.arsenic.q3.text', options: ['ai.arsenic.q3.opt.1', 'ai.arsenic.q3.opt.2', 'ai.arsenic.q3.opt.3', 'ai.arsenic.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.arsenic.q4.text', options: ['ai.arsenic.q4.opt.1', 'ai.arsenic.q4.opt.2', 'ai.arsenic.q4.opt.3', 'ai.arsenic.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.arsenic.q5.text', options: ['ai.arsenic.q5.opt.1', 'ai.arsenic.q5.opt.2', 'ai.arsenic.q5.opt.3', 'ai.arsenic.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'selenium',
        atomicNumber: 34,
        symbol: 'Se',
        group: 'Nonmetal',
        groupKey: 'nonmetal',
        titleKey: 'system.selenium.title',
        descKey: 'system.selenium.desc',
        detailsKey: 'system.selenium.details',
        factKey: 'system.selenium.fact',
        model: null,
        image: 'assets/images/selenium_atom_lux.png',
        color: '#FBBF24',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Selenium', textKey: 'resource.wiki.selenium', url: 'https://en.wikipedia.org/wiki/Selenium' },
            { text: 'PubChem: Selenium', textKey: 'resource.pubchem.selenium', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Selenium' }
        ],
        ai: {
            simpleKey: 'ai.selenium.simple',
            detailedKey: 'ai.selenium.detailed',
            studyKey: ['ai.selenium.study.1', 'ai.selenium.study.2', 'ai.selenium.study.3', 'ai.selenium.study.4', 'ai.selenium.study.5'],
            questions: [
                { textKey: 'ai.selenium.q1.text', options: ['ai.selenium.q1.opt.1', 'ai.selenium.q1.opt.2', 'ai.selenium.q1.opt.3', 'ai.selenium.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.selenium.q2.text', options: ['ai.selenium.q2.opt.1', 'ai.selenium.q2.opt.2', 'ai.selenium.q2.opt.3', 'ai.selenium.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.selenium.q3.text', options: ['ai.selenium.q3.opt.1', 'ai.selenium.q3.opt.2', 'ai.selenium.q3.opt.3', 'ai.selenium.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.selenium.q4.text', options: ['ai.selenium.q4.opt.1', 'ai.selenium.q4.opt.2', 'ai.selenium.q4.opt.3', 'ai.selenium.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.selenium.q5.text', options: ['ai.selenium.q5.opt.1', 'ai.selenium.q5.opt.2', 'ai.selenium.q5.opt.3', 'ai.selenium.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'bromine',
        atomicNumber: 35,
        symbol: 'Br',
        group: 'Halogen',
        groupKey: 'halogen',
        titleKey: 'system.bromine.title',
        descKey: 'system.bromine.desc',
        detailsKey: 'system.bromine.details',
        factKey: 'system.bromine.fact',
        model: null,
        image: 'assets/images/bromine_atom_lux.png',
        color: '#B91C1C',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Bromine', textKey: 'resource.wiki.bromine', url: 'https://en.wikipedia.org/wiki/Bromine' },
            { text: 'PubChem: Bromine', textKey: 'resource.pubchem.bromine', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Bromine' }
        ],
        ai: {
            simpleKey: 'ai.bromine.simple',
            detailedKey: 'ai.bromine.detailed',
            studyKey: ['ai.bromine.study.1', 'ai.bromine.study.2', 'ai.bromine.study.3', 'ai.bromine.study.4', 'ai.bromine.study.5'],
            questions: [
                { textKey: 'ai.bromine.q1.text', options: ['ai.bromine.q1.opt.1', 'ai.bromine.q1.opt.2', 'ai.bromine.q1.opt.3', 'ai.bromine.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.bromine.q2.text', options: ['ai.bromine.q2.opt.1', 'ai.bromine.q2.opt.2', 'ai.bromine.q2.opt.3', 'ai.bromine.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.bromine.q3.text', options: ['ai.bromine.q3.opt.1', 'ai.bromine.q3.opt.2', 'ai.bromine.q3.opt.3', 'ai.bromine.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.bromine.q4.text', options: ['ai.bromine.q4.opt.1', 'ai.bromine.q4.opt.2', 'ai.bromine.q4.opt.3', 'ai.bromine.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.bromine.q5.text', options: ['ai.bromine.q5.opt.1', 'ai.bromine.q5.opt.2', 'ai.bromine.q5.opt.3', 'ai.bromine.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'krypton',
        atomicNumber: 36,
        symbol: 'Kr',
        group: 'Noble Gas',
        groupKey: 'noble_gas',
        titleKey: 'system.krypton.title',
        descKey: 'system.krypton.desc',
        detailsKey: 'system.krypton.details',
        factKey: 'system.krypton.fact',
        model: null,
        image: 'assets/images/krypton_atom_lux.png',
        color: '#A855F7',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Krypton', textKey: 'resource.wiki.krypton', url: 'https://en.wikipedia.org/wiki/Krypton' },
            { text: 'PubChem: Krypton', textKey: 'resource.pubchem.krypton', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Krypton' }
        ],
        ai: {
            simpleKey: 'ai.krypton.simple',
            detailedKey: 'ai.krypton.detailed',
            studyKey: ['ai.krypton.study.1', 'ai.krypton.study.2', 'ai.krypton.study.3', 'ai.krypton.study.4', 'ai.krypton.study.5'],
            questions: [
                { textKey: 'ai.krypton.q1.text', options: ['ai.krypton.q1.opt.1', 'ai.krypton.q1.opt.2', 'ai.krypton.q1.opt.3', 'ai.krypton.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.krypton.q2.text', options: ['ai.krypton.q2.opt.1', 'ai.krypton.q2.opt.2', 'ai.krypton.q2.opt.3', 'ai.krypton.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.krypton.q3.text', options: ['ai.krypton.q3.opt.1', 'ai.krypton.q3.opt.2', 'ai.krypton.q3.opt.3', 'ai.krypton.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.krypton.q4.text', options: ['ai.krypton.q4.opt.1', 'ai.krypton.q4.opt.2', 'ai.krypton.q4.opt.3', 'ai.krypton.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.krypton.q5.text', options: ['ai.krypton.q5.opt.1', 'ai.krypton.q5.opt.2', 'ai.krypton.q5.opt.3', 'ai.krypton.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'rubidium',
        atomicNumber: 37,
        symbol: 'Rb',
        group: 'Alkali Metal',
        groupKey: 'alkali_metal',
        titleKey: 'system.rubidium.title',
        descKey: 'system.rubidium.desc',
        detailsKey: 'system.rubidium.details',
        factKey: 'system.rubidium.fact',
        model: null,
        image: 'assets/images/rubidium_atom_lux.png',
        color: '#EF4444',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Rubidium', textKey: 'resource.wiki.rubidium', url: 'https://en.wikipedia.org/wiki/Rubidium' },
            { text: 'PubChem: Rubidium', textKey: 'resource.pubchem.rubidium', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Rubidium' }
        ],
        ai: {
            simpleKey: 'ai.rubidium.simple',
            detailedKey: 'ai.rubidium.detailed',
            studyKey: ['ai.rubidium.study.1', 'ai.rubidium.study.2', 'ai.rubidium.study.3', 'ai.rubidium.study.4', 'ai.rubidium.study.5'],
            questions: [
                { textKey: 'ai.rubidium.q1.text', options: ['ai.rubidium.q1.opt.1', 'ai.rubidium.q1.opt.2', 'ai.rubidium.q1.opt.3', 'ai.rubidium.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.rubidium.q2.text', options: ['ai.rubidium.q2.opt.1', 'ai.rubidium.q2.opt.2', 'ai.rubidium.q2.opt.3', 'ai.rubidium.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.rubidium.q3.text', options: ['ai.rubidium.q3.opt.1', 'ai.rubidium.q3.opt.2', 'ai.rubidium.q3.opt.3', 'ai.rubidium.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.rubidium.q4.text', options: ['ai.rubidium.q4.opt.1', 'ai.rubidium.q4.opt.2', 'ai.rubidium.q4.opt.3', 'ai.rubidium.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.rubidium.q5.text', options: ['ai.rubidium.q5.opt.1', 'ai.rubidium.q5.opt.2', 'ai.rubidium.q5.opt.3', 'ai.rubidium.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'strontium',
        atomicNumber: 38,
        symbol: 'Sr',
        group: 'Alkaline Earth Metal',
        groupKey: 'alkaline_earth',
        titleKey: 'system.strontium.title',
        descKey: 'system.strontium.desc',
        detailsKey: 'system.strontium.details',
        factKey: 'system.strontium.fact',
        model: null,
        image: 'assets/images/strontium_atom_lux.png',
        color: '#F97316',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Strontium', textKey: 'resource.wiki.strontium', url: 'https://en.wikipedia.org/wiki/Strontium' },
            { text: 'PubChem: Strontium', textKey: 'resource.pubchem.strontium', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Strontium' }
        ],
        ai: {
            simpleKey: 'ai.strontium.simple',
            detailedKey: 'ai.strontium.detailed',
            studyKey: ['ai.strontium.study.1', 'ai.strontium.study.2', 'ai.strontium.study.3', 'ai.strontium.study.4', 'ai.strontium.study.5'],
            questions: [
                { textKey: 'ai.strontium.q1.text', options: ['ai.strontium.q1.opt.1', 'ai.strontium.q1.opt.2', 'ai.strontium.q1.opt.3', 'ai.strontium.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.strontium.q2.text', options: ['ai.strontium.q2.opt.1', 'ai.strontium.q2.opt.2', 'ai.strontium.q2.opt.3', 'ai.strontium.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.strontium.q3.text', options: ['ai.strontium.q3.opt.1', 'ai.strontium.q3.opt.2', 'ai.strontium.q3.opt.3', 'ai.strontium.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.strontium.q4.text', options: ['ai.strontium.q4.opt.1', 'ai.strontium.q4.opt.2', 'ai.strontium.q4.opt.3', 'ai.strontium.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.strontium.q5.text', options: ['ai.strontium.q5.opt.1', 'ai.strontium.q5.opt.2', 'ai.strontium.q5.opt.3', 'ai.strontium.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'yttrium',
        atomicNumber: 39,
        symbol: 'Y',
        group: 'Transition Metal',
        groupKey: 'transition_metal',
        titleKey: 'system.yttrium.title',
        descKey: 'system.yttrium.desc',
        detailsKey: 'system.yttrium.details',
        factKey: 'system.yttrium.fact',
        model: null,
        image: 'assets/images/yttrium_atom_lux.png',
        color: '#94A3B8',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Yttrium', textKey: 'resource.wiki.yttrium', url: 'https://en.wikipedia.org/wiki/Yttrium' },
            { text: 'PubChem: Yttrium', textKey: 'resource.pubchem.yttrium', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Yttrium' }
        ],
        ai: {
            simpleKey: 'ai.yttrium.simple',
            detailedKey: 'ai.yttrium.detailed',
            studyKey: ['ai.yttrium.study.1', 'ai.yttrium.study.2', 'ai.yttrium.study.3', 'ai.yttrium.study.4', 'ai.yttrium.study.5'],
            questions: [
                { textKey: 'ai.yttrium.q1.text', options: ['ai.yttrium.q1.opt.1', 'ai.yttrium.q1.opt.2', 'ai.yttrium.q1.opt.3', 'ai.yttrium.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.yttrium.q2.text', options: ['ai.yttrium.q2.opt.1', 'ai.yttrium.q2.opt.2', 'ai.yttrium.q2.opt.3', 'ai.yttrium.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.yttrium.q3.text', options: ['ai.yttrium.q3.opt.1', 'ai.yttrium.q3.opt.2', 'ai.yttrium.q3.opt.3', 'ai.yttrium.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.yttrium.q4.text', options: ['ai.yttrium.q4.opt.1', 'ai.yttrium.q4.opt.2', 'ai.yttrium.q4.opt.3', 'ai.yttrium.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.yttrium.q5.text', options: ['ai.yttrium.q5.opt.1', 'ai.yttrium.q5.opt.2', 'ai.yttrium.q5.opt.3', 'ai.yttrium.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'zirconium',
        atomicNumber: 40,
        symbol: 'Zr',
        group: 'Transition Metal',
        groupKey: 'transition_metal',
        titleKey: 'system.zirconium.title',
        descKey: 'system.zirconium.desc',
        detailsKey: 'system.zirconium.details',
        factKey: 'system.zirconium.fact',
        model: null,
        image: 'assets/images/zirconium_atom_lux.png',
        color: '#CBD5E1',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Zirconium', textKey: 'resource.wiki.zirconium', url: 'https://en.wikipedia.org/wiki/Zirconium' },
            { text: 'PubChem: Zirconium', textKey: 'resource.pubchem.zirconium', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Zirconium' }
        ],
        ai: {
            simpleKey: 'ai.zirconium.simple',
            detailedKey: 'ai.zirconium.detailed',
            studyKey: ['ai.zirconium.study.1', 'ai.zirconium.study.2', 'ai.zirconium.study.3', 'ai.zirconium.study.4', 'ai.zirconium.study.5'],
            questions: [
                { textKey: 'ai.zirconium.q1.text', options: ['ai.zirconium.q1.opt.1', 'ai.zirconium.q1.opt.2', 'ai.zirconium.q1.opt.3', 'ai.zirconium.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.zirconium.q2.text', options: ['ai.zirconium.q2.opt.1', 'ai.zirconium.q2.opt.2', 'ai.zirconium.q2.opt.3', 'ai.zirconium.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.zirconium.q3.text', options: ['ai.zirconium.q3.opt.1', 'ai.zirconium.q3.opt.2', 'ai.zirconium.q3.opt.3', 'ai.zirconium.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.zirconium.q4.text', options: ['ai.zirconium.q4.opt.1', 'ai.zirconium.q4.opt.2', 'ai.zirconium.q4.opt.3', 'ai.zirconium.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.zirconium.q5.text', options: ['ai.zirconium.q5.opt.1', 'ai.zirconium.q5.opt.2', 'ai.zirconium.q5.opt.3', 'ai.zirconium.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'niobium',
        atomicNumber: 41,
        symbol: 'Nb',
        group: 'Transition Metal',
        groupKey: 'transition_metal',
        titleKey: 'system.niobium.title',
        descKey: 'system.niobium.desc',
        detailsKey: 'system.niobium.details',
        factKey: 'system.niobium.fact',
        model: null,
        image: 'assets/images/niobium_atom_lux.png',
        color: '#94A3B8',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Niobium', textKey: 'resource.wiki.niobium', url: 'https://en.wikipedia.org/wiki/Niobium' },
            { text: 'PubChem: Niobium', textKey: 'resource.pubchem.niobium', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Niobium' }
        ],
        ai: {
            simpleKey: 'ai.niobium.simple',
            detailedKey: 'ai.niobium.detailed',
            studyKey: ['ai.niobium.study.1', 'ai.niobium.study.2', 'ai.niobium.study.3', 'ai.niobium.study.4', 'ai.niobium.study.5'],
            questions: [
                { textKey: 'ai.niobium.q1.text', options: ['ai.niobium.q1.opt.1', 'ai.niobium.q1.opt.2', 'ai.niobium.q1.opt.3', 'ai.niobium.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.niobium.q2.text', options: ['ai.niobium.q2.opt.1', 'ai.niobium.q2.opt.2', 'ai.niobium.q2.opt.3', 'ai.niobium.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.niobium.q3.text', options: ['ai.niobium.q3.opt.1', 'ai.niobium.q3.opt.2', 'ai.niobium.q3.opt.3', 'ai.niobium.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.niobium.q4.text', options: ['ai.niobium.q4.opt.1', 'ai.niobium.q4.opt.2', 'ai.niobium.q4.opt.3', 'ai.niobium.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.niobium.q5.text', options: ['ai.niobium.q5.opt.1', 'ai.niobium.q5.opt.2', 'ai.niobium.q5.opt.3', 'ai.niobium.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'molybdenum',
        atomicNumber: 42,
        symbol: 'Mo',
        group: 'Transition Metal',
        groupKey: 'transition_metal',
        titleKey: 'system.molybdenum.title',
        descKey: 'system.molybdenum.desc',
        detailsKey: 'system.molybdenum.details',
        factKey: 'system.molybdenum.fact',
        model: null,
        image: 'assets/images/molybdenum_atom_lux.png',
        color: '#CBD5E1',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Molybdenum', textKey: 'resource.wiki.molybdenum', url: 'https://en.wikipedia.org/wiki/Molybdenum' },
            { text: 'PubChem: Molybdenum', textKey: 'resource.pubchem.molybdenum', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Molybdenum' }
        ],
        ai: {
            simpleKey: 'ai.molybdenum.simple',
            detailedKey: 'ai.molybdenum.detailed',
            studyKey: ['ai.molybdenum.study.1', 'ai.molybdenum.study.2', 'ai.molybdenum.study.3', 'ai.molybdenum.study.4', 'ai.molybdenum.study.5'],
            questions: [
                { textKey: 'ai.molybdenum.q1.text', options: ['ai.molybdenum.q1.opt.1', 'ai.molybdenum.q1.opt.2', 'ai.molybdenum.q1.opt.3', 'ai.molybdenum.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.molybdenum.q2.text', options: ['ai.molybdenum.q2.opt.1', 'ai.molybdenum.q2.opt.2', 'ai.molybdenum.q2.opt.3', 'ai.molybdenum.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.molybdenum.q3.text', options: ['ai.molybdenum.q3.opt.1', 'ai.molybdenum.q3.opt.2', 'ai.molybdenum.q3.opt.3', 'ai.molybdenum.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.molybdenum.q4.text', options: ['ai.molybdenum.q4.opt.1', 'ai.molybdenum.q4.opt.2', 'ai.molybdenum.q4.opt.3', 'ai.molybdenum.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.molybdenum.q5.text', options: ['ai.molybdenum.q5.opt.1', 'ai.molybdenum.q5.opt.2', 'ai.molybdenum.q5.opt.3', 'ai.molybdenum.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'technetium',
        atomicNumber: 43,
        symbol: 'Tc',
        group: 'Transition Metal',
        groupKey: 'transition_metal',
        titleKey: 'system.technetium.title',
        descKey: 'system.technetium.desc',
        detailsKey: 'system.technetium.details',
        factKey: 'system.technetium.fact',
        model: null,
        image: 'assets/images/technetium_atom_lux.png',
        color: '#94A3B8',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Technetium', textKey: 'resource.wiki.technetium', url: 'https://en.wikipedia.org/wiki/Technetium' },
            { text: 'PubChem: Technetium', textKey: 'resource.pubchem.technetium', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Technetium' }
        ],
        ai: {
            simpleKey: 'ai.technetium.simple',
            detailedKey: 'ai.technetium.detailed',
            studyKey: ['ai.technetium.study.1', 'ai.technetium.study.2', 'ai.technetium.study.3', 'ai.technetium.study.4', 'ai.technetium.study.5'],
            questions: [
                { textKey: 'ai.technetium.q1.text', options: ['ai.technetium.q1.opt.1', 'ai.technetium.q1.opt.2', 'ai.technetium.q1.opt.3', 'ai.technetium.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.technetium.q2.text', options: ['ai.technetium.q2.opt.1', 'ai.technetium.q2.opt.2', 'ai.technetium.q2.opt.3', 'ai.technetium.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.technetium.q3.text', options: ['ai.technetium.q3.opt.1', 'ai.technetium.q3.opt.2', 'ai.technetium.q3.opt.3', 'ai.technetium.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.technetium.q4.text', options: ['ai.technetium.q4.opt.1', 'ai.technetium.q4.opt.2', 'ai.technetium.q4.opt.3', 'ai.technetium.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.technetium.q5.text', options: ['ai.technetium.q5.opt.1', 'ai.technetium.q5.opt.2', 'ai.technetium.q5.opt.3', 'ai.technetium.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'ruthenium',
        atomicNumber: 44,
        symbol: 'Ru',
        group: 'Transition Metal',
        groupKey: 'transition_metal',
        titleKey: 'system.ruthenium.title',
        descKey: 'system.ruthenium.desc',
        detailsKey: 'system.ruthenium.details',
        factKey: 'system.ruthenium.fact',
        model: null,
        image: 'assets/images/ruthenium_atom_lux.png',
        color: '#CBD5E1',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Ruthenium', textKey: 'resource.wiki.ruthenium', url: 'https://en.wikipedia.org/wiki/Ruthenium' },
            { text: 'PubChem: Ruthenium', textKey: 'resource.pubchem.ruthenium', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Ruthenium' }
        ],
        ai: {
            simpleKey: 'ai.ruthenium.simple',
            detailedKey: 'ai.ruthenium.detailed',
            studyKey: ['ai.ruthenium.study.1', 'ai.ruthenium.study.2', 'ai.ruthenium.study.3', 'ai.ruthenium.study.4', 'ai.ruthenium.study.5'],
            questions: [
                { textKey: 'ai.ruthenium.q1.text', options: ['ai.ruthenium.q1.opt.1', 'ai.ruthenium.q1.opt.2', 'ai.ruthenium.q1.opt.3', 'ai.ruthenium.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.ruthenium.q2.text', options: ['ai.ruthenium.q2.opt.1', 'ai.ruthenium.q2.opt.2', 'ai.ruthenium.q2.opt.3', 'ai.ruthenium.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.ruthenium.q3.text', options: ['ai.ruthenium.q3.opt.1', 'ai.ruthenium.q3.opt.2', 'ai.ruthenium.q3.opt.3', 'ai.ruthenium.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.ruthenium.q4.text', options: ['ai.ruthenium.q4.opt.1', 'ai.ruthenium.q4.opt.2', 'ai.ruthenium.q4.opt.3', 'ai.ruthenium.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.ruthenium.q5.text', options: ['ai.ruthenium.q5.opt.1', 'ai.ruthenium.q5.opt.2', 'ai.ruthenium.q5.opt.3', 'ai.ruthenium.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'rhodium',
        atomicNumber: 45,
        symbol: 'Rh',
        group: 'Transition Metal',
        groupKey: 'transition_metal',
        titleKey: 'system.rhodium.title',
        descKey: 'system.rhodium.desc',
        detailsKey: 'system.rhodium.details',
        factKey: 'system.rhodium.fact',
        model: null,
        image: 'assets/images/rhodium_atom_lux.png',
        color: '#E2E8F0',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Rhodium', textKey: 'resource.wiki.rhodium', url: 'https://en.wikipedia.org/wiki/Rhodium' },
            { text: 'PubChem: Rhodium', textKey: 'resource.pubchem.rhodium', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Rhodium' }
        ],
        ai: {
            simpleKey: 'ai.rhodium.simple',
            detailedKey: 'ai.rhodium.detailed',
            studyKey: ['ai.rhodium.study.1', 'ai.rhodium.study.2', 'ai.rhodium.study.3', 'ai.rhodium.study.4', 'ai.rhodium.study.5'],
            questions: [
                { textKey: 'ai.rhodium.q1.text', options: ['ai.rhodium.q1.opt.1', 'ai.rhodium.q1.opt.2', 'ai.rhodium.q1.opt.3', 'ai.rhodium.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.rhodium.q2.text', options: ['ai.rhodium.q2.opt.1', 'ai.rhodium.q2.opt.2', 'ai.rhodium.q2.opt.3', 'ai.rhodium.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.rhodium.q3.text', options: ['ai.rhodium.q3.opt.1', 'ai.rhodium.q3.opt.2', 'ai.rhodium.q3.opt.3', 'ai.rhodium.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.rhodium.q4.text', options: ['ai.rhodium.q4.opt.1', 'ai.rhodium.q4.opt.2', 'ai.rhodium.q4.opt.3', 'ai.rhodium.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.rhodium.q5.text', options: ['ai.rhodium.q5.opt.1', 'ai.rhodium.q5.opt.2', 'ai.rhodium.q5.opt.3', 'ai.rhodium.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'palladium',
        atomicNumber: 46,
        symbol: 'Pd',
        group: 'Transition Metal',
        groupKey: 'transition_metal',
        titleKey: 'system.palladium.title',
        descKey: 'system.palladium.desc',
        detailsKey: 'system.palladium.details',
        factKey: 'system.palladium.fact',
        model: null,
        image: 'assets/images/palladium_atom_lux.png',
        color: '#CBD5E1',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Palladium', textKey: 'resource.wiki.palladium', url: 'https://en.wikipedia.org/wiki/Palladium' },
            { text: 'PubChem: Palladium', textKey: 'resource.pubchem.palladium', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Palladium' }
        ],
        ai: {
            simpleKey: 'ai.palladium.simple',
            detailedKey: 'ai.palladium.detailed',
            studyKey: ['ai.palladium.study.1', 'ai.palladium.study.2', 'ai.palladium.study.3', 'ai.palladium.study.4', 'ai.palladium.study.5'],
            questions: [
                { textKey: 'ai.palladium.q1.text', options: ['ai.palladium.q1.opt.1', 'ai.palladium.q1.opt.2', 'ai.palladium.q1.opt.3', 'ai.palladium.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.palladium.q2.text', options: ['ai.palladium.q2.opt.1', 'ai.palladium.q2.opt.2', 'ai.palladium.q2.opt.3', 'ai.palladium.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.palladium.q3.text', options: ['ai.palladium.q3.opt.1', 'ai.palladium.q3.opt.2', 'ai.palladium.q3.opt.3', 'ai.palladium.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.palladium.q4.text', options: ['ai.palladium.q4.opt.1', 'ai.palladium.q4.opt.2', 'ai.palladium.q4.opt.3', 'ai.palladium.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.palladium.q5.text', options: ['ai.palladium.q5.opt.1', 'ai.palladium.q5.opt.2', 'ai.palladium.q5.opt.3', 'ai.palladium.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'silver',
        atomicNumber: 47,
        symbol: 'Ag',
        group: 'Transition Metal',
        groupKey: 'transition_metal',
        titleKey: 'system.silver.title',
        descKey: 'system.silver.desc',
        detailsKey: 'system.silver.details',
        factKey: 'system.silver.fact',
        model: null,
        image: 'assets/images/silver_atom_lux.png',
        color: '#E2E8F0',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Silver', textKey: 'resource.wiki.silver', url: 'https://en.wikipedia.org/wiki/Silver' },
            { text: 'PubChem: Silver', textKey: 'resource.pubchem.silver', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Silver' }
        ],
        ai: {
            simpleKey: 'ai.silver.simple',
            detailedKey: 'ai.silver.detailed',
            studyKey: ['ai.silver.study.1', 'ai.silver.study.2', 'ai.silver.study.3', 'ai.silver.study.4', 'ai.silver.study.5'],
            questions: [
                { textKey: 'ai.silver.q1.text', options: ['ai.silver.q1.opt.1', 'ai.silver.q1.opt.2', 'ai.silver.q1.opt.3', 'ai.silver.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.silver.q2.text', options: ['ai.silver.q2.opt.1', 'ai.silver.q2.opt.2', 'ai.silver.q2.opt.3', 'ai.silver.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.silver.q3.text', options: ['ai.silver.q3.opt.1', 'ai.silver.q3.opt.2', 'ai.silver.q3.opt.3', 'ai.silver.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.silver.q4.text', options: ['ai.silver.q4.opt.1', 'ai.silver.q4.opt.2', 'ai.silver.q4.opt.3', 'ai.silver.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.silver.q5.text', options: ['ai.silver.q5.opt.1', 'ai.silver.q5.opt.2', 'ai.silver.q5.opt.3', 'ai.silver.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'cadmium',
        atomicNumber: 48,
        symbol: 'Cd',
        group: 'Transition Metal',
        groupKey: 'transition_metal',
        titleKey: 'system.cadmium.title',
        descKey: 'system.cadmium.desc',
        detailsKey: 'system.cadmium.details',
        factKey: 'system.cadmium.fact',
        model: null,
        image: 'assets/images/cadmium_atom_lux.png',
        color: '#94A3B8',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Cadmium', textKey: 'resource.wiki.cadmium', url: 'https://en.wikipedia.org/wiki/Cadmium' },
            { text: 'PubChem: Cadmium', textKey: 'resource.pubchem.cadmium', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Cadmium' }
        ],
        ai: {
            simpleKey: 'ai.cadmium.simple',
            detailedKey: 'ai.cadmium.detailed',
            studyKey: ['ai.cadmium.study.1', 'ai.cadmium.study.2', 'ai.cadmium.study.3', 'ai.cadmium.study.4', 'ai.cadmium.study.5'],
            questions: [
                { textKey: 'ai.cadmium.q1.text', options: ['ai.cadmium.q1.opt.1', 'ai.cadmium.q1.opt.2', 'ai.cadmium.q1.opt.3', 'ai.cadmium.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.cadmium.q2.text', options: ['ai.cadmium.q2.opt.1', 'ai.cadmium.q2.opt.2', 'ai.cadmium.q2.opt.3', 'ai.cadmium.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.cadmium.q3.text', options: ['ai.cadmium.q3.opt.1', 'ai.cadmium.q3.opt.2', 'ai.cadmium.q3.opt.3', 'ai.cadmium.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.cadmium.q4.text', options: ['ai.cadmium.q4.opt.1', 'ai.cadmium.q4.opt.2', 'ai.cadmium.q4.opt.3', 'ai.cadmium.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.cadmium.q5.text', options: ['ai.cadmium.q5.opt.1', 'ai.cadmium.q5.opt.2', 'ai.cadmium.q5.opt.3', 'ai.cadmium.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'indium',
        atomicNumber: 49,
        symbol: 'In',
        group: 'Post-Transition Metal',
        groupKey: 'post_transition',
        titleKey: 'system.indium.title',
        descKey: 'system.indium.desc',
        detailsKey: 'system.indium.details',
        factKey: 'system.indium.fact',
        model: null,
        image: 'assets/images/indium_atom_lux.png',
        color: '#E2E8F0',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Indium', textKey: 'resource.wiki.indium', url: 'https://en.wikipedia.org/wiki/Indium' },
            { text: 'PubChem: Indium', textKey: 'resource.pubchem.indium', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Indium' }
        ],
        ai: {
            simpleKey: 'ai.indium.simple',
            detailedKey: 'ai.indium.detailed',
            studyKey: ['ai.indium.study.1', 'ai.indium.study.2', 'ai.indium.study.3', 'ai.indium.study.4', 'ai.indium.study.5'],
            questions: [
                { textKey: 'ai.indium.q1.text', options: ['ai.indium.q1.opt.1', 'ai.indium.q1.opt.2', 'ai.indium.q1.opt.3', 'ai.indium.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.indium.q2.text', options: ['ai.indium.q2.opt.1', 'ai.indium.q2.opt.2', 'ai.indium.q2.opt.3', 'ai.indium.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.indium.q3.text', options: ['ai.indium.q3.opt.1', 'ai.indium.q3.opt.2', 'ai.indium.q3.opt.3', 'ai.indium.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.indium.q4.text', options: ['ai.indium.q4.opt.1', 'ai.indium.q4.opt.2', 'ai.indium.q4.opt.3', 'ai.indium.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.indium.q5.text', options: ['ai.indium.q5.opt.1', 'ai.indium.q5.opt.2', 'ai.indium.q5.opt.3', 'ai.indium.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'tin',
        atomicNumber: 50,
        symbol: 'Sn',
        group: 'Post-Transition Metal',
        groupKey: 'post_transition',
        titleKey: 'system.tin.title',
        descKey: 'system.tin.desc',
        detailsKey: 'system.tin.details',
        factKey: 'system.tin.fact',
        model: null,
        image: 'assets/images/tin_atom_lux.png',
        color: '#CBD5E1',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Tin', textKey: 'resource.wiki.tin', url: 'https://en.wikipedia.org/wiki/Tin' },
            { text: 'PubChem: Tin', textKey: 'resource.pubchem.tin', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Tin' }
        ],
        ai: {
            simpleKey: 'ai.tin.simple',
            detailedKey: 'ai.tin.detailed',
            studyKey: ['ai.tin.study.1', 'ai.tin.study.2', 'ai.tin.study.3', 'ai.tin.study.4', 'ai.tin.study.5'],
            questions: [
                { textKey: 'ai.tin.q1.text', options: ['ai.tin.q1.opt.1', 'ai.tin.q1.opt.2', 'ai.tin.q1.opt.3', 'ai.tin.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.tin.q2.text', options: ['ai.tin.q2.opt.1', 'ai.tin.q2.opt.2', 'ai.tin.q2.opt.3', 'ai.tin.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.tin.q3.text', options: ['ai.tin.q3.opt.1', 'ai.tin.q3.opt.2', 'ai.tin.q3.opt.3', 'ai.tin.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.tin.q4.text', options: ['ai.tin.q4.opt.1', 'ai.tin.q4.opt.2', 'ai.tin.q4.opt.3', 'ai.tin.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.tin.q5.text', options: ['ai.tin.q5.opt.1', 'ai.tin.q5.opt.2', 'ai.tin.q5.opt.3', 'ai.tin.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'antimony',
        atomicNumber: 51,
        symbol: 'Sb',
        group: 'Metalloid',
        groupKey: 'metalloid',
        titleKey: 'system.antimony.title',
        descKey: 'system.antimony.desc',
        detailsKey: 'system.antimony.details',
        factKey: 'system.antimony.fact',
        model: null,
        image: 'assets/images/antimony_atom_lux.png',
        color: '#94A3B8',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Antimony', textKey: 'resource.wiki.antimony', url: 'https://en.wikipedia.org/wiki/Antimony' },
            { text: 'PubChem: Antimony', textKey: 'resource.pubchem.antimony', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Antimony' }
        ],
        ai: {
            simpleKey: 'ai.antimony.simple',
            detailedKey: 'ai.antimony.detailed',
            studyKey: ['ai.antimony.study.1', 'ai.antimony.study.2', 'ai.antimony.study.3', 'ai.antimony.study.4', 'ai.antimony.study.5'],
            questions: [
                { textKey: 'ai.antimony.q1.text', options: ['ai.antimony.q1.opt.1', 'ai.antimony.q1.opt.2', 'ai.antimony.q1.opt.3', 'ai.antimony.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.antimony.q2.text', options: ['ai.antimony.q2.opt.1', 'ai.antimony.q2.opt.2', 'ai.antimony.q2.opt.3', 'ai.antimony.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.antimony.q3.text', options: ['ai.antimony.q3.opt.1', 'ai.antimony.q3.opt.2', 'ai.antimony.q3.opt.3', 'ai.antimony.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.antimony.q4.text', options: ['ai.antimony.q4.opt.1', 'ai.antimony.q4.opt.2', 'ai.antimony.q4.opt.3', 'ai.antimony.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.antimony.q5.text', options: ['ai.antimony.q5.opt.1', 'ai.antimony.q5.opt.2', 'ai.antimony.q5.opt.3', 'ai.antimony.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'tellurium',
        atomicNumber: 52,
        symbol: 'Te',
        group: 'Metalloid',
        groupKey: 'metalloid',
        titleKey: 'system.tellurium.title',
        descKey: 'system.tellurium.desc',
        detailsKey: 'system.tellurium.details',
        factKey: 'system.tellurium.fact',
        model: null,
        image: 'assets/images/tellurium_atom_lux.png',
        color: '#34D399',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Tellurium', textKey: 'resource.wiki.tellurium', url: 'https://en.wikipedia.org/wiki/Tellurium' },
            { text: 'PubChem: Tellurium', textKey: 'resource.pubchem.tellurium', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Tellurium' }
        ],
        ai: {
            simpleKey: 'ai.tellurium.simple',
            detailedKey: 'ai.tellurium.detailed',
            studyKey: ['ai.tellurium.study.1', 'ai.tellurium.study.2', 'ai.tellurium.study.3', 'ai.tellurium.study.4', 'ai.tellurium.study.5'],
            questions: [
                { textKey: 'ai.tellurium.q1.text', options: ['ai.tellurium.q1.opt.1', 'ai.tellurium.q1.opt.2', 'ai.tellurium.q1.opt.3', 'ai.tellurium.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.tellurium.q2.text', options: ['ai.tellurium.q2.opt.1', 'ai.tellurium.q2.opt.2', 'ai.tellurium.q2.opt.3', 'ai.tellurium.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.tellurium.q3.text', options: ['ai.tellurium.q3.opt.1', 'ai.tellurium.q3.opt.2', 'ai.tellurium.q3.opt.3', 'ai.tellurium.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.tellurium.q4.text', options: ['ai.tellurium.q4.opt.1', 'ai.tellurium.q4.opt.2', 'ai.tellurium.q4.opt.3', 'ai.tellurium.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.tellurium.q5.text', options: ['ai.tellurium.q5.opt.1', 'ai.tellurium.q5.opt.2', 'ai.tellurium.q5.opt.3', 'ai.tellurium.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'iodine',
        atomicNumber: 53,
        symbol: 'I',
        group: 'Halogen',
        groupKey: 'halogen',
        titleKey: 'system.iodine.title',
        descKey: 'system.iodine.desc',
        detailsKey: 'system.iodine.details',
        factKey: 'system.iodine.fact',
        model: null,
        image: 'assets/images/iodine_atom_lux.png',
        color: '#A855F7',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Iodine', textKey: 'resource.wiki.iodine', url: 'https://en.wikipedia.org/wiki/Iodine' },
            { text: 'PubChem: Iodine', textKey: 'resource.pubchem.iodine', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Iodine' }
        ],
        ai: {
            simpleKey: 'ai.iodine.simple',
            detailedKey: 'ai.iodine.detailed',
            studyKey: ['ai.iodine.study.1', 'ai.iodine.study.2', 'ai.iodine.study.3', 'ai.iodine.study.4', 'ai.iodine.study.5'],
            questions: [
                { textKey: 'ai.iodine.q1.text', options: ['ai.iodine.q1.opt.1', 'ai.iodine.q1.opt.2', 'ai.iodine.q1.opt.3', 'ai.iodine.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.iodine.q2.text', options: ['ai.iodine.q2.opt.1', 'ai.iodine.q2.opt.2', 'ai.iodine.q2.opt.3', 'ai.iodine.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.iodine.q3.text', options: ['ai.iodine.q3.opt.1', 'ai.iodine.q3.opt.2', 'ai.iodine.q3.opt.3', 'ai.iodine.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.iodine.q4.text', options: ['ai.iodine.q4.opt.1', 'ai.iodine.q4.opt.2', 'ai.iodine.q4.opt.3', 'ai.iodine.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.iodine.q5.text', options: ['ai.iodine.q5.opt.1', 'ai.iodine.q5.opt.2', 'ai.iodine.q5.opt.3', 'ai.iodine.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'xenon',
        atomicNumber: 54,
        symbol: 'Xe',
        group: 'Noble Gas',
        groupKey: 'noble_gas',
        titleKey: 'system.xenon.title',
        descKey: 'system.xenon.desc',
        detailsKey: 'system.xenon.details',
        factKey: 'system.xenon.fact',
        model: null,
        image: 'assets/images/xenon_atom_lux.png',
        color: '#C084FC',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Xenon', textKey: 'resource.wiki.xenon', url: 'https://en.wikipedia.org/wiki/Xenon' },
            { text: 'PubChem: Xenon', textKey: 'resource.pubchem.xenon', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Xenon' }
        ],
        ai: {
            simpleKey: 'ai.xenon.simple',
            detailedKey: 'ai.xenon.detailed',
            studyKey: ['ai.xenon.study.1', 'ai.xenon.study.2', 'ai.xenon.study.3', 'ai.xenon.study.4', 'ai.xenon.study.5'],
            questions: [
                { textKey: 'ai.xenon.q1.text', options: ['ai.xenon.q1.opt.1', 'ai.xenon.q1.opt.2', 'ai.xenon.q1.opt.3', 'ai.xenon.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.xenon.q2.text', options: ['ai.xenon.q2.opt.1', 'ai.xenon.q2.opt.2', 'ai.xenon.q2.opt.3', 'ai.xenon.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.xenon.q3.text', options: ['ai.xenon.q3.opt.1', 'ai.xenon.q3.opt.2', 'ai.xenon.q3.opt.3', 'ai.xenon.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.xenon.q4.text', options: ['ai.xenon.q4.opt.1', 'ai.xenon.q4.opt.2', 'ai.xenon.q4.opt.3', 'ai.xenon.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.xenon.q5.text', options: ['ai.xenon.q5.opt.1', 'ai.xenon.q5.opt.2', 'ai.xenon.q5.opt.3', 'ai.xenon.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'cesium',
        atomicNumber: 55,
        symbol: 'Cs',
        group: 'Alkali Metal',
        groupKey: 'alkali_metal',
        titleKey: 'system.cesium.title',
        descKey: 'system.cesium.desc',
        detailsKey: 'system.cesium.details',
        factKey: 'system.cesium.fact',
        model: null,
        image: 'assets/images/cesium_atom_lux.png',
        color: '#EF4444',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Cesium', textKey: 'resource.wiki.cesium', url: 'https://en.wikipedia.org/wiki/Cesium' },
            { text: 'PubChem: Cesium', textKey: 'resource.pubchem.cesium', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Cesium' }
        ],
        ai: {
            simpleKey: 'ai.cesium.simple',
            detailedKey: 'ai.cesium.detailed',
            studyKey: ['ai.cesium.study.1', 'ai.cesium.study.2', 'ai.cesium.study.3', 'ai.cesium.study.4', 'ai.cesium.study.5'],
            questions: [
                { textKey: 'ai.cesium.q1.text', options: ['ai.cesium.q1.opt.1', 'ai.cesium.q1.opt.2', 'ai.cesium.q1.opt.3', 'ai.cesium.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.cesium.q2.text', options: ['ai.cesium.q2.opt.1', 'ai.cesium.q2.opt.2', 'ai.cesium.q2.opt.3', 'ai.cesium.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.cesium.q3.text', options: ['ai.cesium.q3.opt.1', 'ai.cesium.q3.opt.2', 'ai.cesium.q3.opt.3', 'ai.cesium.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.cesium.q4.text', options: ['ai.cesium.q4.opt.1', 'ai.cesium.q4.opt.2', 'ai.cesium.q4.opt.3', 'ai.cesium.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.cesium.q5.text', options: ['ai.cesium.q5.opt.1', 'ai.cesium.q5.opt.2', 'ai.cesium.q5.opt.3', 'ai.cesium.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'barium',
        atomicNumber: 56,
        symbol: 'Ba',
        group: 'Alkaline Earth Metal',
        groupKey: 'alkaline_earth',
        titleKey: 'system.barium.title',
        descKey: 'system.barium.desc',
        detailsKey: 'system.barium.details',
        factKey: 'system.barium.fact',
        model: null,
        image: 'assets/images/barium_atom_lux.png',
        color: '#F97316',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Barium', textKey: 'resource.wiki.barium', url: 'https://en.wikipedia.org/wiki/Barium' },
            { text: 'PubChem: Barium', textKey: 'resource.pubchem.barium', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Barium' }
        ],
        ai: {
            simpleKey: 'ai.barium.simple',
            detailedKey: 'ai.barium.detailed',
            studyKey: ['ai.barium.study.1', 'ai.barium.study.2', 'ai.barium.study.3', 'ai.barium.study.4', 'ai.barium.study.5'],
            questions: [
                { textKey: 'ai.barium.q1.text', options: ['ai.barium.q1.opt.1', 'ai.barium.q1.opt.2', 'ai.barium.q1.opt.3', 'ai.barium.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.barium.q2.text', options: ['ai.barium.q2.opt.1', 'ai.barium.q2.opt.2', 'ai.barium.q2.opt.3', 'ai.barium.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.barium.q3.text', options: ['ai.barium.q3.opt.1', 'ai.barium.q3.opt.2', 'ai.barium.q3.opt.3', 'ai.barium.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.barium.q4.text', options: ['ai.barium.q4.opt.1', 'ai.barium.q4.opt.2', 'ai.barium.q4.opt.3', 'ai.barium.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.barium.q5.text', options: ['ai.barium.q5.opt.1', 'ai.barium.q5.opt.2', 'ai.barium.q5.opt.3', 'ai.barium.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'lanthanum',
        atomicNumber: 57,
        symbol: 'La',
        group: 'Lanthanide',
        groupKey: 'lanthanide',
        titleKey: 'system.lanthanum.title',
        descKey: 'system.lanthanum.desc',
        detailsKey: 'system.lanthanum.details',
        factKey: 'system.lanthanum.fact',
        model: null,
        image: 'assets/images/lanthanum_atom_lux.png',
        color: '#E2E8F0',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Lanthanum', textKey: 'resource.wiki.lanthanum', url: 'https://en.wikipedia.org/wiki/Lanthanum' },
            { text: 'PubChem: Lanthanum', textKey: 'resource.pubchem.lanthanum', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Lanthanum' }
        ],
        ai: {
            simpleKey: 'ai.lanthanum.simple',
            detailedKey: 'ai.lanthanum.detailed',
            studyKey: ['ai.lanthanum.study.1', 'ai.lanthanum.study.2', 'ai.lanthanum.study.3', 'ai.lanthanum.study.4', 'ai.lanthanum.study.5'],
            questions: [
                { textKey: 'ai.lanthanum.q1.text', options: ['ai.lanthanum.q1.opt.1', 'ai.lanthanum.q1.opt.2', 'ai.lanthanum.q1.opt.3', 'ai.lanthanum.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.lanthanum.q2.text', options: ['ai.lanthanum.q2.opt.1', 'ai.lanthanum.q2.opt.2', 'ai.lanthanum.q2.opt.3', 'ai.lanthanum.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.lanthanum.q3.text', options: ['ai.lanthanum.q3.opt.1', 'ai.lanthanum.q3.opt.2', 'ai.lanthanum.q3.opt.3', 'ai.lanthanum.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.lanthanum.q4.text', options: ['ai.lanthanum.q4.opt.1', 'ai.lanthanum.q4.opt.2', 'ai.lanthanum.q4.opt.3', 'ai.lanthanum.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.lanthanum.q5.text', options: ['ai.lanthanum.q5.opt.1', 'ai.lanthanum.q5.opt.2', 'ai.lanthanum.q5.opt.3', 'ai.lanthanum.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'cerium',
        atomicNumber: 58,
        symbol: 'Ce',
        group: 'Lanthanide',
        groupKey: 'lanthanide',
        titleKey: 'system.cerium.title',
        descKey: 'system.cerium.desc',
        detailsKey: 'system.cerium.details',
        factKey: 'system.cerium.fact',
        model: null,
        image: 'assets/images/cerium_atom_lux.png',
        color: '#E2E8F0',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Cerium', textKey: 'resource.wiki.cerium', url: 'https://en.wikipedia.org/wiki/Cerium' },
            { text: 'PubChem: Cerium', textKey: 'resource.pubchem.cerium', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Cerium' }
        ],
        ai: {
            simpleKey: 'ai.cerium.simple',
            detailedKey: 'ai.cerium.detailed',
            studyKey: ['ai.cerium.study.1', 'ai.cerium.study.2', 'ai.cerium.study.3', 'ai.cerium.study.4', 'ai.cerium.study.5'],
            questions: [
                { textKey: 'ai.cerium.q1.text', options: ['ai.cerium.q1.opt.1', 'ai.cerium.q1.opt.2', 'ai.cerium.q1.opt.3', 'ai.cerium.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.cerium.q2.text', options: ['ai.cerium.q2.opt.1', 'ai.cerium.q2.opt.2', 'ai.cerium.q2.opt.3', 'ai.cerium.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.cerium.q3.text', options: ['ai.cerium.q3.opt.1', 'ai.cerium.q3.opt.2', 'ai.cerium.q3.opt.3', 'ai.cerium.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.cerium.q4.text', options: ['ai.cerium.q4.opt.1', 'ai.cerium.q4.opt.2', 'ai.cerium.q4.opt.3', 'ai.cerium.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.cerium.q5.text', options: ['ai.cerium.q5.opt.1', 'ai.cerium.q5.opt.2', 'ai.cerium.q5.opt.3', 'ai.cerium.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'praseodymium',
        atomicNumber: 59,
        symbol: 'Pr',
        group: 'Lanthanide',
        groupKey: 'lanthanide',
        titleKey: 'system.praseodymium.title',
        descKey: 'system.praseodymium.desc',
        detailsKey: 'system.praseodymium.details',
        factKey: 'system.praseodymium.fact',
        model: null,
        image: 'assets/images/praseodymium_atom_lux.png',
        color: '#E2E8F0',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Praseodymium', textKey: 'resource.wiki.praseodymium', url: 'https://en.wikipedia.org/wiki/Praseodymium' },
            { text: 'PubChem: Praseodymium', textKey: 'resource.pubchem.praseodymium', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Praseodymium' }
        ],
        ai: {
            simpleKey: 'ai.praseodymium.simple',
            detailedKey: 'ai.praseodymium.detailed',
            studyKey: ['ai.praseodymium.study.1', 'ai.praseodymium.study.2', 'ai.praseodymium.study.3', 'ai.praseodymium.study.4', 'ai.praseodymium.study.5'],
            questions: [
                { textKey: 'ai.praseodymium.q1.text', options: ['ai.praseodymium.q1.opt.1', 'ai.praseodymium.q1.opt.2', 'ai.praseodymium.q1.opt.3', 'ai.praseodymium.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.praseodymium.q2.text', options: ['ai.praseodymium.q2.opt.1', 'ai.praseodymium.q2.opt.2', 'ai.praseodymium.q2.opt.3', 'ai.praseodymium.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.praseodymium.q3.text', options: ['ai.praseodymium.q3.opt.1', 'ai.praseodymium.q3.opt.2', 'ai.praseodymium.q3.opt.3', 'ai.praseodymium.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.praseodymium.q4.text', options: ['ai.praseodymium.q4.opt.1', 'ai.praseodymium.q4.opt.2', 'ai.praseodymium.q4.opt.3', 'ai.praseodymium.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.praseodymium.q5.text', options: ['ai.praseodymium.q5.opt.1', 'ai.praseodymium.q5.opt.2', 'ai.praseodymium.q5.opt.3', 'ai.praseodymium.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'neodymium',
        atomicNumber: 60,
        symbol: 'Nd',
        group: 'Lanthanide',
        groupKey: 'lanthanide',
        titleKey: 'system.neodymium.title',
        descKey: 'system.neodymium.desc',
        detailsKey: 'system.neodymium.details',
        factKey: 'system.neodymium.fact',
        model: null,
        image: 'assets/images/neodymium_atom_lux.png',
        color: '#E2E8F0',
        layers: ['atomic_structure', 'electron_shells', 'physical_properties', 'chemical_properties', 'applications'],
        resources: [
            { text: 'Wikipedia: Neodymium', textKey: 'resource.wiki.neodymium', url: 'https://en.wikipedia.org/wiki/Neodymium' },
            { text: 'PubChem: Neodymium', textKey: 'resource.pubchem.neodymium', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Neodymium' }
        ],
        ai: {
            simpleKey: 'ai.neodymium.simple',
            detailedKey: 'ai.neodymium.detailed',
            studyKey: ['ai.neodymium.study.1', 'ai.neodymium.study.2', 'ai.neodymium.study.3', 'ai.neodymium.study.4', 'ai.neodymium.study.5'],
            questions: [
                { textKey: 'ai.neodymium.q1.text', options: ['ai.neodymium.q1.opt.1', 'ai.neodymium.q1.opt.2', 'ai.neodymium.q1.opt.3', 'ai.neodymium.q1.opt.4'], correctIndex: 0, topic: 'atomic_number' },
                { textKey: 'ai.neodymium.q2.text', options: ['ai.neodymium.q2.opt.1', 'ai.neodymium.q2.opt.2', 'ai.neodymium.q2.opt.3', 'ai.neodymium.q2.opt.4'], correctIndex: 1, topic: 'symbol' },
                { textKey: 'ai.neodymium.q3.text', options: ['ai.neodymium.q3.opt.1', 'ai.neodymium.q3.opt.2', 'ai.neodymium.q3.opt.3', 'ai.neodymium.q3.opt.4'], correctIndex: 2, topic: 'group' },
                { textKey: 'ai.neodymium.q4.text', options: ['ai.neodymium.q4.opt.1', 'ai.neodymium.q4.opt.2', 'ai.neodymium.q4.opt.3', 'ai.neodymium.q4.opt.4'], correctIndex: 0, topic: 'properties' },
                { textKey: 'ai.neodymium.q5.text', options: ['ai.neodymium.q5.opt.1', 'ai.neodymium.q5.opt.2', 'ai.neodymium.q5.opt.3', 'ai.neodymium.q5.opt.4'], correctIndex: 1, topic: 'applications' }
            ]
        }
    },
    {
        id: 'mendeleev',
        atomicNumber: 1869,
        symbol: 'ДМ',
        group: 'Scientist',
        groupKey: 'scientist',
        titleKey: 'system.mendeleev.title',
        descKey: 'system.mendeleev.desc',
        detailsKey: 'system.mendeleev.details',
        factKey: 'system.mendeleev.fact',
        model: null,
        image: 'assets/images/scientists/mendeleev_lux.jpg',
        color: '#FDE047',
        layers: ['biography', 'discovery', 'impact', 'ai_bridge'],
        resources: [
            { text: 'Wikipedia: Mendeleev', textKey: 'resource.wiki.mendeleev', url: 'https://ru.wikipedia.org/wiki/Менделеев,_Дмитрий_Иванович' }
        ],
        ai: {
            simpleKey: 'ai.mendeleev.simple',
            detailedKey: 'ai.mendeleev.detailed',
            studyKey: ['ai.mendeleev.study.1', 'ai.mendeleev.study.2', 'ai.mendeleev.study.3', 'ai.mendeleev.study.4', 'ai.mendeleev.study.5'],
            questions: [
                { textKey: 'ai.mendeleev.q1.text', options: ['ai.mendeleev.q1.opt.1', 'ai.mendeleev.q1.opt.2', 'ai.mendeleev.q1.opt.3', 'ai.mendeleev.q1.opt.4'], correctIndex: 0, topic: 'biography' },
                { textKey: 'ai.mendeleev.q2.text', options: ['ai.mendeleev.q2.opt.1', 'ai.mendeleev.q2.opt.2', 'ai.mendeleev.q2.opt.3', 'ai.mendeleev.q2.opt.4'], correctIndex: 0, topic: 'biography' },
                { textKey: 'ai.mendeleev.q3.text', options: ['ai.mendeleev.q3.opt.1', 'ai.mendeleev.q3.opt.2', 'ai.mendeleev.q3.opt.3', 'ai.mendeleev.q3.opt.4'], correctIndex: 0, topic: 'biography' }
            ]
        }
    },
    {
        id: 'curie',
        atomicNumber: 1898,
        symbol: 'МК',
        group: 'Scientist',
        groupKey: 'scientist',
        titleKey: 'system.curie.title',
        descKey: 'system.curie.desc',
        detailsKey: 'system.curie.details',
        factKey: 'system.curie.fact',
        model: null,
        image: 'assets/images/scientists/curie_lux.jpg',
        color: '#FDE047',
        layers: ['biography', 'discovery', 'impact', 'ai_bridge'],
        resources: [
            { text: 'Wikipedia: Marie Curie', textKey: 'resource.wiki.curie', url: 'https://ru.wikipedia.org/wiki/Кюри,_Мария' }
        ],
        ai: {
            simpleKey: 'ai.curie.simple',
            detailedKey: 'ai.curie.detailed',
            studyKey: ['ai.curie.study.1', 'ai.curie.study.2', 'ai.curie.study.3', 'ai.curie.study.4', 'ai.curie.study.5'],
            questions: [
                { textKey: 'ai.curie.q1.text', options: ['ai.curie.q1.opt.1', 'ai.curie.q1.opt.2', 'ai.curie.q1.opt.3', 'ai.curie.q1.opt.4'], correctIndex: 0, topic: 'biography' },
                { textKey: 'ai.curie.q2.text', options: ['ai.curie.q2.opt.1', 'ai.curie.q2.opt.2', 'ai.curie.q2.opt.3', 'ai.curie.q2.opt.4'], correctIndex: 0, topic: 'biography' },
                { textKey: 'ai.curie.q3.text', options: ['ai.curie.q3.opt.1', 'ai.curie.q3.opt.2', 'ai.curie.q3.opt.3', 'ai.curie.q3.opt.4'], correctIndex: 0, topic: 'biography' }
            ]
        }
    },
    {
        id: 'lavoisier',
        atomicNumber: 1774,
        symbol: 'АЛ',
        group: 'Scientist',
        groupKey: 'scientist',
        titleKey: 'system.lavoisier.title',
        descKey: 'system.lavoisier.desc',
        detailsKey: 'system.lavoisier.details',
        factKey: 'system.lavoisier.fact',
        model: null,
        image: 'assets/images/scientists/lavoisier_lux.jpg',
        color: '#FDE047',
        layers: ['biography', 'discovery', 'impact', 'ai_bridge'],
        resources: [
            { text: 'Wikipedia: Lavoisier', textKey: 'resource.wiki.lavoisier', url: 'https://ru.wikipedia.org/wiki/Лавуазье,_Антуан_Лоран' }
        ],
        ai: {
            simpleKey: 'ai.lavoisier.simple',
            detailedKey: 'ai.lavoisier.detailed',
            studyKey: ['ai.lavoisier.study.1', 'ai.lavoisier.study.2', 'ai.lavoisier.study.3', 'ai.lavoisier.study.4', 'ai.lavoisier.study.5'],
            questions: [
                { textKey: 'ai.lavoisier.q1.text', options: ['ai.lavoisier.q1.opt.1', 'ai.lavoisier.q1.opt.2', 'ai.lavoisier.q1.opt.3', 'ai.lavoisier.q1.opt.4'], correctIndex: 0, topic: 'biography' },
                { textKey: 'ai.lavoisier.q2.text', options: ['ai.lavoisier.q2.opt.1', 'ai.lavoisier.q2.opt.2', 'ai.lavoisier.q2.opt.3', 'ai.lavoisier.q2.opt.4'], correctIndex: 0, topic: 'biography' },
                { textKey: 'ai.lavoisier.q3.text', options: ['ai.lavoisier.q3.opt.1', 'ai.lavoisier.q3.opt.2', 'ai.lavoisier.q3.opt.3', 'ai.lavoisier.q3.opt.4'], correctIndex: 0, topic: 'biography' }
            ]
        }
    },
    {
        id: 'bohr',
        atomicNumber: 1913,
        symbol: 'НБ',
        group: 'Scientist',
        groupKey: 'scientist',
        titleKey: 'system.bohr.title',
        descKey: 'system.bohr.desc',
        detailsKey: 'system.bohr.details',
        factKey: 'system.bohr.fact',
        model: null,
        image: 'assets/images/scientists/bohr_lux.jpg',
        color: '#FDE047',
        layers: ['biography', 'discovery', 'impact', 'ai_bridge'],
        resources: [
            { text: 'Wikipedia: Bohr', textKey: 'resource.wiki.bohr', url: 'https://ru.wikipedia.org/wiki/Бор,_Нильс' }
        ],
        ai: {
            simpleKey: 'ai.bohr.simple',
            detailedKey: 'ai.bohr.detailed',
            studyKey: ['ai.bohr.study.1', 'ai.bohr.study.2', 'ai.bohr.study.3', 'ai.bohr.study.4', 'ai.bohr.study.5'],
            questions: [
                { textKey: 'ai.bohr.q1.text', options: ['ai.bohr.q1.opt.1', 'ai.bohr.q1.opt.2', 'ai.bohr.q1.opt.3', 'ai.bohr.q1.opt.4'], correctIndex: 0, topic: 'biography' },
                { textKey: 'ai.bohr.q2.text', options: ['ai.bohr.q2.opt.1', 'ai.bohr.q2.opt.2', 'ai.bohr.q2.opt.3', 'ai.bohr.q2.opt.4'], correctIndex: 0, topic: 'biography' },
                { textKey: 'ai.bohr.q3.text', options: ['ai.bohr.q3.opt.1', 'ai.bohr.q3.opt.2', 'ai.bohr.q3.opt.3', 'ai.bohr.q3.opt.4'], correctIndex: 0, topic: 'biography' }
            ]
        }
    },
    {
        id: 'rutherford',
        atomicNumber: 1911,
        symbol: 'ЭР',
        group: 'Scientist',
        groupKey: 'scientist',
        titleKey: 'system.rutherford.title',
        descKey: 'system.rutherford.desc',
        detailsKey: 'system.rutherford.details',
        factKey: 'system.rutherford.fact',
        model: null,
        image: 'assets/images/scientists/rutherford_lux.jpg',
        color: '#FDE047',
        layers: ['biography', 'discovery', 'impact', 'ai_bridge'],
        resources: [
            { text: 'Wikipedia: Rutherford', textKey: 'resource.wiki.rutherford', url: 'https://ru.wikipedia.org/wiki/Резерфорд,_Эрнест' }
        ],
        ai: {
            simpleKey: 'ai.rutherford.simple',
            detailedKey: 'ai.rutherford.detailed',
            studyKey: ['ai.rutherford.study.1', 'ai.rutherford.study.2', 'ai.rutherford.study.3', 'ai.rutherford.study.4', 'ai.rutherford.study.5'],
            questions: [
                { textKey: 'ai.rutherford.q1.text', options: ['ai.rutherford.q1.opt.1', 'ai.rutherford.q1.opt.2', 'ai.rutherford.q1.opt.3', 'ai.rutherford.q1.opt.4'], correctIndex: 0, topic: 'biography' },
                { textKey: 'ai.rutherford.q2.text', options: ['ai.rutherford.q2.opt.1', 'ai.rutherford.q2.opt.2', 'ai.rutherford.q2.opt.3', 'ai.rutherford.q2.opt.4'], correctIndex: 0, topic: 'biography' },
                { textKey: 'ai.rutherford.q3.text', options: ['ai.rutherford.q3.opt.1', 'ai.rutherford.q3.opt.2', 'ai.rutherford.q3.opt.3', 'ai.rutherford.q3.opt.4'], correctIndex: 0, topic: 'biography' }
            ]
        }
    },
    {
        id: 'dalton',
        atomicNumber: 1803,
        symbol: 'ДД',
        group: 'Scientist',
        groupKey: 'scientist',
        titleKey: 'system.dalton.title',
        descKey: 'system.dalton.desc',
        detailsKey: 'system.dalton.details',
        factKey: 'system.dalton.fact',
        model: null,
        image: 'assets/images/scientists/dalton_lux.jpg',
        color: '#FDE047',
        layers: ['biography', 'discovery', 'impact', 'ai_bridge'],
        resources: [
            { text: 'Wikipedia: Dalton', textKey: 'resource.wiki.dalton', url: 'https://ru.wikipedia.org/wiki/Дальтон,_Джон' }
        ],
        ai: {
            simpleKey: 'ai.dalton.simple',
            detailedKey: 'ai.dalton.detailed',
            studyKey: ['ai.dalton.study.1', 'ai.dalton.study.2', 'ai.dalton.study.3', 'ai.dalton.study.4', 'ai.dalton.study.5'],
            questions: [
                { textKey: 'ai.dalton.q1.text', options: ['ai.dalton.q1.opt.1', 'ai.dalton.q1.opt.2', 'ai.dalton.q1.opt.3', 'ai.dalton.q1.opt.4'], correctIndex: 0, topic: 'biography' },
                { textKey: 'ai.dalton.q2.text', options: ['ai.dalton.q2.opt.1', 'ai.dalton.q2.opt.2', 'ai.dalton.q2.opt.3', 'ai.dalton.q2.opt.4'], correctIndex: 0, topic: 'biography' },
                { textKey: 'ai.dalton.q3.text', options: ['ai.dalton.q3.opt.1', 'ai.dalton.q3.opt.2', 'ai.dalton.q3.opt.3', 'ai.dalton.q3.opt.4'], correctIndex: 0, topic: 'biography' }
            ]
        }
    },
    {
        id: 'pauling',
        atomicNumber: 1939,
        symbol: 'ЛП',
        group: 'Scientist',
        groupKey: 'scientist',
        titleKey: 'system.pauling.title',
        descKey: 'system.pauling.desc',
        detailsKey: 'system.pauling.details',
        factKey: 'system.pauling.fact',
        model: null,
        image: 'assets/images/scientists/pauling_lux.jpg',
        color: '#FDE047',
        layers: ['biography', 'discovery', 'impact', 'ai_bridge'],
        resources: [
            { text: 'Wikipedia: Pauling', textKey: 'resource.wiki.pauling', url: 'https://ru.wikipedia.org/wiki/Полинг,_Лайнус' }
        ],
        ai: {
            simpleKey: 'ai.pauling.simple',
            detailedKey: 'ai.pauling.detailed',
            studyKey: ['ai.pauling.study.1', 'ai.pauling.study.2', 'ai.pauling.study.3', 'ai.pauling.study.4', 'ai.pauling.study.5'],
            questions: [
                { textKey: 'ai.pauling.q1.text', options: ['ai.pauling.q1.opt.1', 'ai.pauling.q1.opt.2', 'ai.pauling.q1.opt.3', 'ai.pauling.q1.opt.4'], correctIndex: 0, topic: 'biography' },
                { textKey: 'ai.pauling.q2.text', options: ['ai.pauling.q2.opt.1', 'ai.pauling.q2.opt.2', 'ai.pauling.q2.opt.3', 'ai.pauling.q2.opt.4'], correctIndex: 0, topic: 'biography' },
                { textKey: 'ai.pauling.q3.text', options: ['ai.pauling.q3.opt.1', 'ai.pauling.q3.opt.2', 'ai.pauling.q3.opt.3', 'ai.pauling.q3.opt.4'], correctIndex: 0, topic: 'biography' }
            ]
        }
    },
    {
        id: 'nobel',
        atomicNumber: 1867,
        symbol: 'АН',
        group: 'Scientist',
        groupKey: 'scientist',
        titleKey: 'system.nobel.title',
        descKey: 'system.nobel.desc',
        detailsKey: 'system.nobel.details',
        factKey: 'system.nobel.fact',
        model: null,
        image: 'assets/images/scientists/nobel_lux.jpg',
        color: '#FDE047',
        layers: ['biography', 'discovery', 'impact', 'ai_bridge'],
        resources: [
            { text: 'Wikipedia: Nobel', textKey: 'resource.wiki.nobel', url: 'https://en.wikipedia.org/wiki/Alfred_Nobel' }
        ],
        ai: {
            simpleKey: 'ai.nobel.simple',
            detailedKey: 'ai.nobel.detailed',
            studyKey: ['ai.nobel.study.1', 'ai.nobel.study.2', 'ai.nobel.study.3', 'ai.nobel.study.4', 'ai.nobel.study.5'],
            questions: [
                { textKey: 'ai.nobel.q1.text', options: ['ai.nobel.q1.opt.1', 'ai.nobel.q1.opt.2', 'ai.nobel.q1.opt.3', 'ai.nobel.q1.opt.4'], correctIndex: 0, topic: 'biography' },
                { textKey: 'ai.nobel.q2.text', options: ['ai.nobel.q2.opt.1', 'ai.nobel.q2.opt.2', 'ai.nobel.q2.opt.3', 'ai.nobel.q2.opt.4'], correctIndex: 0, topic: 'biography' },
                { textKey: 'ai.nobel.q3.text', options: ['ai.nobel.q3.opt.1', 'ai.nobel.q3.opt.2', 'ai.nobel.q3.opt.3', 'ai.nobel.q3.opt.4'], correctIndex: 0, topic: 'biography' }
            ]
        }
    },
    {
        id: 'hodgkin',
        atomicNumber: 1964,
        symbol: 'ДХ',
        group: 'Scientist',
        groupKey: 'scientist',
        titleKey: 'system.hodgkin.title',
        descKey: 'system.hodgkin.desc',
        detailsKey: 'system.hodgkin.details',
        factKey: 'system.hodgkin.fact',
        model: null,
        image: 'assets/images/scientists/hodgkin_lux.jpg',
        color: '#FDE047',
        layers: ['biography', 'discovery', 'impact', 'ai_bridge'],
        resources: [
            { text: 'Wikipedia: Hodgkin', textKey: 'resource.wiki.hodgkin', url: 'https://en.wikipedia.org/wiki/Dorothy_Hodgkin' }
        ],
        ai: {
            simpleKey: 'ai.hodgkin.simple',
            detailedKey: 'ai.hodgkin.detailed',
            studyKey: ['ai.hodgkin.study.1', 'ai.hodgkin.study.2', 'ai.hodgkin.study.3', 'ai.hodgkin.study.4', 'ai.hodgkin.study.5'],
            questions: [
                { textKey: 'ai.hodgkin.q1.text', options: ['ai.hodgkin.q1.opt.1', 'ai.hodgkin.q1.opt.2', 'ai.hodgkin.q1.opt.3', 'ai.hodgkin.q1.opt.4'], correctIndex: 0, topic: 'biography' },
                { textKey: 'ai.hodgkin.q2.text', options: ['ai.hodgkin.q2.opt.1', 'ai.hodgkin.q2.opt.2', 'ai.hodgkin.q2.opt.3', 'ai.hodgkin.q2.opt.4'], correctIndex: 0, topic: 'biography' },
                { textKey: 'ai.hodgkin.q3.text', options: ['ai.hodgkin.q3.opt.1', 'ai.hodgkin.q3.opt.2', 'ai.hodgkin.q3.opt.3', 'ai.hodgkin.q3.opt.4'], correctIndex: 0, topic: 'biography' }
            ]
        }
    }
];

// Helper to get translated object
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
