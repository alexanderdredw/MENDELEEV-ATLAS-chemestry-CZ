const fs = require('fs');
const path = require('path');

const locales = [
    { file: 'en_v2.json', lang: 'en' },
    { file: 'ru_v2.json', lang: 'ru' },
    { file: 'kk_v3.json', lang: 'kk' }
];

const newTranslations = {
    'system.nobel.title': {
        en: 'Alfred Nobel',
        ru: 'Альфред Нобель',
        kk: 'Альфред Нобель'
    },
    'system.nobel.desc': {
        en: 'Swedish chemist, engineer, and industrialist who invented dynamite and bequeathed his fortune to institute the Nobel Prizes.',
        ru: 'Шведский химик, инженер и промышленник, который изобрел динамит и завещал свое состояние на учреждение Нобелевских премий.',
        kk: 'Швед химигі, инженер және өнеркәсіпшісі. Ол динамитті ойлап тауып, өз байлығын Нобель сыйлықтарын тағайындауға мұра етті.'
    },
    'system.nobel.details': {
        en: '<b>Key Achievements</b><br>• Invented dynamite in 1867<br>• Held 355 different patents<br>• Bequeathed his fortune to institute the Nobel Prizes<br>• Founded companies like Dynamit Nobel',
        ru: '<b>Основные достижения</b><br>• Изобрел динамит в 1867 году<br>• Владел 355 различными патентами<br>• Завещал свое состояние на учреждение Нобелевских премий<br>• Основал компании, такие как Dynamit Nobel',
        kk: '<b>Негізгі жетістіктері</b><br>• 1867 жылы динамитті ойлап тапты<br>• 355 түрлі патентке ие болды<br>• Өз байлығын Нобель сыйлықтарын тағайындауға мұра етті<br>• Dynamit Nobel сияқты компаниялардың негізін қалады'
    },
    'system.nobel.fact': {
        en: 'Nobel created the Nobel Prizes after reading a premature obituary of himself titled "The merchant of death is dead".',
        ru: 'Нобель учредил Нобелевские премии после того, как прочитал преждевременный некролог о себе под названием «Торговец смертью мертв».',
        kk: 'Нобель «Өлім саудагері өлді» деген өзінің мезгілсіз қазанамасын оқығаннан кейін Нобель сыйлықтарын тағайындады.'
    },
    'system.hodgkin.title': {
        en: 'Dorothy Hodgkin',
        ru: 'Дороти Ходжкин',
        kk: 'Дороти Ходжкин'
    },
    'system.hodgkin.desc': {
        en: 'British chemist who developed protein crystallography, for which she won the Nobel Prize in Chemistry in 1964.',
        ru: 'Британский химик, разработавшая белковую кристаллографию, за что в 1964 году получила Нобелевскую премию по химии.',
        kk: 'Британдық химик, ақуыз кристаллографиясын дамытқан, ол үшін 1964 жылы химия бойынша Нобель сыйлығын алды.'
    },
    'system.hodgkin.details': {
        en: '<b>Key Achievements</b><br>• Advanced the technique of X-ray crystallography<br>• Confirmed the structure of penicillin<br>• Discovered the structure of vitamin B12<br>• Deciphered the structure of insulin',
        ru: '<b>Основные достижения</b><br>• Продвинула метод рентгеновской кристаллографии<br>• Подтвердила структуру пенициллина<br>• Открыла структуру витамина B12<br>• Расшифровала структуру инсулина',
        kk: '<b>Негізгі жетістіктері</b><br>• Рентгендік кристаллография әдісін жетілдірді<br>• Пенициллиннің құрылымын растады<br>• В12 витаминінің құрылымын ашты<br>• Инсулиннің құрылымын анықтады'
    },
    'system.hodgkin.fact': {
        en: 'She was the third woman to win the Nobel Prize in Chemistry, after Marie Curie and Irène Joliot-Curie.',
        ru: 'Она стала третьей женщиной, получившей Нобелевскую премию по химии, после Марии Кюри и Ирен Жолио-Кюри.',
        kk: 'Ол Мария Кюри мен Ирен Жолио-Кюриден кейін химия бойынша Нобель сыйлығын алған үшінші әйел болды.'
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
