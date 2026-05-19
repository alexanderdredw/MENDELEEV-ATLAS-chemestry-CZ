const fs = require('fs');

const kkPath = 'locales/kk_v2.json';
const ruPath = 'locales/ru_v2.json';

const kk = JSON.parse(fs.readFileSync(kkPath, 'utf8'));
const ru = JSON.parse(fs.readFileSync(ruPath, 'utf8'));

// Казахские переводы для detail.* ключей
const kkDetailTranslations = {
    'detail.overview':      'Шолу',
    'detail.layers':        'Қабаттар',
    'detail.resources':     'Сыртқы ресурстар',
    'detail.controls':      'Еңкейту үшін тышқанды жылжытыңыз • Интерактивті тереңдік',
    'detail.explore':       'Зерттеу',
    'detail.read_more':     'Толығырақ',
    'detail.read_less':     'Жию',
};

// Русские переводы для RU файла
const ruDetailTranslations = {
    'detail.overview':      'Обзор',
    'detail.layers':        'Слои',
    'detail.resources':     'Внешние ресурсы',
    'detail.controls':      'Двигайте мышью для наклона • Интерактивная глубина',
    'detail.explore':       'Исследовать',
    'detail.read_more':     'Подробнее',
    'detail.read_less':     'Свернуть',
};

// Применяем KK
let kkChanged = 0;
for (const [key, value] of Object.entries(kkDetailTranslations)) {
    if (kk[key] !== value) {
        kk[key] = value;
        kkChanged++;
        console.log(`KK updated: ${key} = "${value}"`);
    }
}

// Применяем RU
let ruChanged = 0;
for (const [key, value] of Object.entries(ruDetailTranslations)) {
    if (!ru[key] || ru[key] === 'Explore' || ru[key] === 'Overview') {
        ru[key] = value;
        ruChanged++;
        console.log(`RU updated: ${key} = "${value}"`);
    }
}

// Сохраняем
fs.writeFileSync(kkPath, JSON.stringify(kk, null, 4), 'utf8');
fs.writeFileSync(ruPath, JSON.stringify(ru, null, 4), 'utf8');

console.log(`\n✅ KK: ${kkChanged} ключей обновлено (${Object.keys(kk).length} итого)`);
console.log(`✅ RU: ${ruChanged} ключей обновлено (${Object.keys(ru).length} итого)`);

// Verify
const kkV = JSON.parse(fs.readFileSync(kkPath, 'utf8'));
console.log('\nПроверка KK:');
console.log('detail.explore =', kkV['detail.explore']);
console.log('detail.overview =', kkV['detail.overview']);
