const fs = require('fs');
const path = require('path');

const locales = [
    { file: 'en_v2.json', lang: 'en' },
    { file: 'ru_v2.json', lang: 'ru' },
    { file: 'kk_v3.json', lang: 'kk' }
];

const newTranslations = {
    'resource.wiki.nobel': {
        en: 'Wikipedia: Alfred Nobel',
        ru: 'Википедия: Альфред Нобель',
        kk: 'Википедия: Альфред Нобель'
    },
    'resource.wiki.hodgkin': {
        en: 'Wikipedia: Dorothy Hodgkin',
        ru: 'Википедия: Дороти Ходжкин',
        kk: 'Википедия: Дороти Ходжкин'
    }
};

for (const locale of locales) {
    const filePath = path.join(__dirname, 'locales', locale.file);
    let data = {};
    if (fs.existsSync(filePath)) {
        data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }
    
    let updated = false;
    for (const [key, translations] of Object.entries(newTranslations)) {
        if (!data[key]) {
            data[key] = translations[locale.lang];
            updated = true;
        }
    }
    
    if (updated) {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 4), 'utf8');
        console.log(`Updated ${locale.file}`);
    }
}
