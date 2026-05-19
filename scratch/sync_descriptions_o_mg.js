const fs = require('fs');

const elements = {
    oxygen: {
        num: 8, symbol: "O",
        ru: {
            title: "Кислород",
            desc: "Жизненно важный газ, составляющий 21% атмосферы и необходимый для дыхания всех живых существ."
        },
        en: {
            title: "Oxygen",
            desc: "A life-sustaining gas that makes up 21% of the atmosphere and is essential for all aerobic life."
        },
        kk: {
            title: "Оттегі",
            desc: "Атмосфераның 21%-ын құрайтын және барлық тірі жәндіктердің тыныс алуы үшін қажетті өмірлік маңызды газ."
        }
    },
    fluorine: {
        num: 9, symbol: "F",
        ru: {
            title: "Фтор",
            desc: "Самый активный неметалл, используемый в стоматологии для защиты зубов и в производстве тефлона."
        },
        en: {
            title: "Fluorine",
            desc: "The most reactive nonmetal, used in dentistry for tooth protection and in Teflon production."
        },
        kk: {
            title: "Фтор",
            desc: "Тістерді қорғау үшін стоматологияда және тефлон өндірісінде қолданылатын ең белсенді бейметалл."
        }
    },
    neon: {
        num: 10, symbol: "Ne",
        ru: {
            title: "Неон",
            desc: "Инертный газ, светящийся ярко-оранжевым светом, часто используемый в рекламных вывесках."
        },
        en: {
            title: "Neon",
            desc: "An inert gas that glows bright reddish-orange, widely used in advertising and signage."
        },
        kk: {
            title: "Неон",
            desc: "Жарнамалық маңдайшаларда жиі қолданылатын, ашық қызғылт сары түспен жарқырайтын инертті газ."
        }
    },
    sodium: {
        num: 11, symbol: "Na",
        ru: {
            title: "Натрий",
            desc: "Мягкий щелочной металл, входящий в состав поваренной соли и важный для работы нервной системы."
        },
        en: {
            title: "Sodium",
            desc: "A soft alkali metal found in table salt, essential for nerve function and fluid balance."
        },
        kk: {
            title: "Натрий",
            desc: "Ас тұзының құрамына кіретін және жүйке жүйесінің жұмысы үшін маңызды жұмсақ сілтілік металл."
        }
    },
    magnesium: {
        num: 12, symbol: "Mg",
        ru: {
            title: "Магний",
            desc: "Легкий металл, необходимый для фотосинтеза в растениях и сотен реакций в организме человека."
        },
        en: {
            title: "Magnesium",
            desc: "A lightweight metal essential for plant photosynthesis and hundreds of reactions in the human body."
        },
        kk: {
            title: "Магний",
            desc: "Өсімдіктердегі фотосинтез және адам ағзасындағы жүздеген реакциялар үшін қажетті жеңіл металл."
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
        
        // Ensure the legacy mapping for sodium/magnesium etc are also updated
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
    console.log(`✓ Synchronized descriptions for ${lang.toUpperCase()}`);
}
