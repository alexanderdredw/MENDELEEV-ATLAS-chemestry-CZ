const fs = require('fs');
const path = require('path');

const locales = [
    { file: 'en_v2.json', lang: 'en' },
    { file: 'ru_v2.json', lang: 'ru' },
    { file: 'kk_v3.json', lang: 'kk' }
];

const data = {
    mendeleev: {
        en: { name: 'Mendeleev', topic: 'the periodic table and periodic law' },
        ru: { name: 'Менделеева', topic: 'периодическую таблицу и периодический закон' },
        kk: { name: 'Менделеевтің', topic: 'периодтық кестені және периодтық заңды' }
    },
    curie: {
        en: { name: 'Curie', topic: 'radioactivity and the discovery of radium and polonium' },
        ru: { name: 'Кюри', topic: 'радиоактивность и открытие радия и полония' },
        kk: { name: 'Кюридің', topic: 'радиоактивтілікті және радий мен полонийдің ашылуын' }
    },
    lavoisier: {
        en: { name: 'Lavoisier', topic: 'the law of conservation of mass and modern chemistry' },
        ru: { name: 'Лавуазье', topic: 'закон сохранения массы и основы современной химии' },
        kk: { name: 'Лавуазьенің', topic: 'массаның сақталу заңын және заманауи химия негіздерін' }
    },
    bohr: {
        en: { name: 'Bohr', topic: 'atomic structure and quantum theory' },
        ru: { name: 'Бора', topic: 'строение атома и квантовую теорию' },
        kk: { name: 'Бордың', topic: 'атом құрылысы мен кванттық теориясын' }
    },
    rutherford: {
        en: { name: 'Rutherford', topic: 'the atomic nucleus and radioactivity' },
        ru: { name: 'Резерфорда', topic: 'атомное ядро и радиоактивность' },
        kk: { name: 'Резерфордтың', topic: 'атом ядросын және радиоактивтілікті' }
    },
    dalton: {
        en: { name: 'Dalton', topic: 'atomic theory and the laws of multiple proportions' },
        ru: { name: 'Дальтона', topic: 'атомную теорию и законы кратных отношений' },
        kk: { name: 'Дальтонның', topic: 'атомдық теориясын және еселік қатынастар заңдарын' }
    },
    pauling: {
        en: { name: 'Pauling', topic: 'the nature of the chemical bond' },
        ru: { name: 'Полинга', topic: 'природу химической связи' },
        kk: { name: 'Полингтің', topic: 'химиялық байланыс табиғатын' }
    },
    nobel: {
        en: { name: 'Nobel', topic: 'the invention of dynamite and the Nobel Prizes' },
        ru: { name: 'Нобеля', topic: 'изобретение динамита и Нобелевские премии' },
        kk: { name: 'Нобельдің', topic: 'динамитті ойлап табуын және Нобель сыйлықтарын' }
    },
    hodgkin: {
        en: { name: 'Hodgkin', topic: 'protein crystallography and the structure of penicillin and B12' },
        ru: { name: 'Ходжкин', text: 'белковую кристаллографию и структуру пенициллина и витамина B12' },
        kk: { name: 'Ходжкиннің', text: 'ақуыз кристаллографиясын және пенициллин мен В12 дәрумені құрылымын' }
    }
};

const templates = {
    simple: {
        en: (d) => `Brief overview of ${d.name}'s contributions to ${d.topic || d.text}.`,
        ru: (d) => `Краткий обзор вклада ${d.name} в ${d.topic || d.text}.`,
        kk: (d) => `${d.name} ${d.topic || d.text} қосқан үлесіне қысқаша шолу.`
    },
    detailed: {
        en: (d) => `A detailed analysis of ${d.name}'s life and scientific work, specifically focusing on ${d.topic || d.text} and its lasting impact on modern science.`,
        ru: (d) => `Подробный анализ жизни и научной работы ${d.name}, в частности, ${d.topic || d.text} и влияния на современную науку.`,
        kk: (d) => `${d.name} өмірі мен ғылыми еңбегін, атап айтқанда ${d.topic || d.text} және оның қазіргі ғылымға әсерін егжей-тегжейлі талдау.`
    },
    study: {
        en: [
            (d) => `Explore the key theories developed by ${d.name}.`,
            (d) => `Analyze the historical context of ${d.name}'s discoveries.`,
            (d) => `Understand the experimental methods used by ${d.name}.`,
            (d) => `Review the impact of ${d.topic || d.text} on chemistry.`,
            (d) => `Compare ${d.name}'s findings with modern scientific models.`
        ],
        ru: [
            (d) => `Изучите ключевые теории, разработанные ${d.name}.`,
            (d) => `Проанализируйте исторический контекст открытий ${d.name}.`,
            (d) => `Поймите экспериментальные методы, использованные ${d.name}.`,
            (d) => `Рассмотрите влияние ${d.name} на ${d.topic || d.text}.`,
            (d) => `Сравните выводы ${d.name} с современными научными моделями.`
        ],
        kk: [
            (d) => `${d.name} жасаған негізгі теорияларды зерттеңіз.`,
            (d) => `${d.name} жаңалықтарының тарихи контекстін талдаңыз.`,
            (d) => `${d.name} қолданған тәжірибелік әдістерді түсініңіз.`,
            (d) => `${d.topic || d.text} химияға тигізген әсерін қарап шығыңыз.`,
            (d) => `${d.name} тұжырымдарын қазіргі ғылыми модельдермен салыстырыңыз.`
        ]
    }
};

const newTranslations = {};

for (const [id, langs] of Object.entries(data)) {
    newTranslations[`ai.${id}.simple`] = {
        en: templates.simple.en(langs.en),
        ru: templates.simple.ru(langs.ru),
        kk: templates.simple.kk(langs.kk)
    };
    newTranslations[`ai.${id}.detailed`] = {
        en: templates.detailed.en(langs.en),
        ru: templates.detailed.ru(langs.ru),
        kk: templates.detailed.kk(langs.kk)
    };
    for (let i = 1; i <= 5; i++) {
        newTranslations[`ai.${id}.study.${i}`] = {
            en: templates.study.en[i - 1](langs.en),
            ru: templates.study.ru[i - 1](langs.ru),
            kk: templates.study.kk[i - 1](langs.kk)
        };
    }
}

for (const locale of locales) {
    const filePath = path.join(__dirname, 'locales', locale.file);
    let jsonData = {};
    if (fs.existsSync(filePath)) {
        jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }
    
    let updated = false;
    for (const [key, translations] of Object.entries(newTranslations)) {
        // We overwrite or add to ensure they are properly populated
        if (jsonData[key] !== translations[locale.lang]) {
            jsonData[key] = translations[locale.lang];
            updated = true;
        }
    }
    
    if (updated) {
        fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 4), 'utf8');
        console.log(`Updated ${locale.file}`);
    }
}
