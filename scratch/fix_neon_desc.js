const fs = require('fs');

const elements = {
    oxygen: {
        num: 8, symbol: "O",
        ru: {
            title: "Кислород",
            desc: "Кислород — это элемент №8, жизненно важный газ, необходимый для аэробного дыхания и горения."
        },
        en: {
            title: "Oxygen",
            desc: "Oxygen is element #8, a life-sustaining gas essential for aerobic respiration and combustion."
        },
        kk: {
            title: "Оттегі",
            desc: "Оттегі — №8 элемент, аэробты тыныс алу және жану үшін қажетті өмірлік маңызды газ."
        }
    },
    fluorine: {
        num: 9, symbol: "F",
        ru: {
            title: "Фтор",
            desc: "Фтор — это элемент №9, универсальный галоген, необходимый для различных промышленных и биологических процессов."
        },
        en: {
            title: "Fluorine",
            desc: "Fluorine is element #9, a versatile halogen essential for various industrial and biological processes."
        },
        kk: {
            title: "Фтор",
            desc: "Фтор — №9 элемент, әртүрлі өнеркәсіптік және биологиялық процестер үшін қажетті әмбебап галоген."
        }
    },
    neon: {
        num: 10, symbol: "Ne",
        ru: {
            title: "Неон",
            desc: "Благородный газ, наиболее известный своим ярким красно-оранжевым свечением в газоразрядных лампах."
        },
        en: {
            title: "Neon",
            desc: "A noble gas best known for its bright reddish-orange glow in discharge lamps."
        },
        kk: {
            title: "Неон",
            desc: "Газды разрядты шамдардағы ашық қызыл-қызғылт сары жарқылымен танымал инертті газ."
        }
    },
    sodium: {
        num: 11, symbol: "Na",
        ru: {
            title: "Натрий",
            desc: "Мягкий, серебристый и крайне активный металл, необходимый для жизни и промышленности."
        },
        en: {
            title: "Sodium",
            desc: "A soft, silvery, and highly reactive metal, essential for life and industry."
        },
        kk: {
            title: "Натрий",
            desc: "Өмір мен өнеркәсіп үшін маңызды жұмсақ, күміс түсті және өте белсенді металл."
        }
    },
    magnesium: {
        num: 12, symbol: "Mg",
        ru: {
            title: "Магний",
            desc: "Легкий металл, необходимый для фотосинтеза растений и работы мышц человека."
        },
        en: {
            title: "Magnesium",
            desc: "A lightweight metal essential for plant photosynthesis and human muscle function."
        },
        kk: {
            title: "Магний",
            desc: "Өсімдіктердің фотосинтезі мен адам бұлшықеттерінің жұмысы үшін қажетті жеңіл металл."
        }
    }
};

const locales = ['ru', 'en', 'kk'];

for (const lang of locales) {
    const path = `locales/${lang}_v2.json`;
    if (!fs.existsSync(path)) continue;
    
    const locale = JSON.parse(fs.readFileSync(path, 'utf8'));
    
    for (const [id, data] of Object.entries(elements)) {
        locale[`system.${id}.title`] = data[lang].title;
        locale[`system.${id}.desc`] = data[lang].desc;
        
        // Sync legacy mappings
        const legacyMap = {
            sodium: 'muscular',
            magnesium: 'nervous',
            oxygen: 'immune',
            fluorine: 'urinary'
        };
        
        if (legacyMap[id]) {
            const legId = legacyMap[id];
            locale[`system.${legId}.title`] = data[lang].title;
            locale[`system.${legId}.desc`] = data[lang].desc;
        }
    }
    
    fs.writeFileSync(path, JSON.stringify(locale, null, 4));
    console.log(`✓ Updated descriptions to match screenshot style for ${lang.toUpperCase()}`);
}
