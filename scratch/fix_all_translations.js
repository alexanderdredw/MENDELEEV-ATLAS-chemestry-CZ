const fs = require('fs');

const en = JSON.parse(fs.readFileSync('locales/en_v2.json', 'utf8'));
const ru = JSON.parse(fs.readFileSync('locales/ru_v2.json', 'utf8'));
const kk = JSON.parse(fs.readFileSync('locales/kk_v2.json', 'utf8'));

// =====================================================
// PART 1: CRITICAL UI TRANSLATIONS FOR RU
// =====================================================
const ruUI = {
    // Navigation
    'nav.ai': 'Syntara AI',
    'nav.glossary': 'Глоссарий',
    
    // Hero
    'hero.btn.explore': 'Начать исследование',
    'hero.btn.quiz': 'Проверка знаний',
    
    // About
    'about.title': 'О проекте Atlas',
    'about.mission.title': 'Наша научная миссия',
    'about.mission.text': 'Syntara AI Atlas предназначен для предоставления высококачественных интерактивных химических и молекулярных данных для студентов, преподавателей и исследователей. Сочетая передовую 3D-визуализацию с курированными химическими свойствами, мы устраняем разрыв между теоретической химией и визуальным пониманием.',
    'about.team.title': 'Команда разработки',
    'about.profiles.lead.name': 'Керейбаева Айгерим Нуржановна',
    'about.profiles.lead.role': 'Куратор проекта и академический директор',
    'about.profiles.lead.bio': 'Руководство академической валидацией и научной достоверностью проекта Syntara AI.',
    'about.profiles.dev.name': 'Alexander',
    'about.profiles.dev.role': 'Ведущий системный архитектор и AI-инженер',
    'about.profiles.dev.bio': 'Эксперт в области агентных систем ИИ и разработки иммерсивных интерактивных систем.',
    'about.profiles.btn.show_more': 'Профессиональное резюме',
    'about.profiles.btn.show_less': 'Свернуть',
    
    // Quiz
    'quiz.start.title': 'Научная аттестация',
    'quiz.start.text': 'Проверьте свои знания молекулярной химии по всем системам.',
    'quiz.btn.start': 'Начать сертификацию',
    'quiz.stats.score': 'Текущий балл',
    'quiz.stats.progress': 'Прогресс',
    'quiz.result.excellent': 'Отлично! Превосходный результат!',
    'quiz.result.good': 'Хорошо! Достойный результат!',
    'quiz.result.try_again': 'Попробуйте снова для лучшего результата.',
    'quiz.btn.restart': 'Начать заново',
    'quiz.title': 'Квиз',
    'quiz.subtitle': 'Проверьте свои знания химических элементов',
    'quiz.start': 'Начать квиз',
    'quiz.progress': 'Прогресс',
    'quiz.question': 'Вопрос',
    'quiz.score': 'Счёт',
    'quiz.correct': 'Правильно!',
    'quiz.incorrect': 'Неправильно',
    'quiz.next': 'Следующий вопрос',
    'quiz.finish': 'Завершить',
    'quiz.results': 'Результаты',
    'quiz.restart': 'Начать заново',
    'quiz.perfect': 'Идеальный результат!',
    'quiz.great': 'Отличный результат!',
    'quiz.good': 'Хороший результат!',
    'quiz.keep_learning': 'Продолжайте учиться!',
    'quiz.select_category': 'Выберите категорию',
    'quiz.all_elements': 'Все элементы',
    'quiz.time_remaining': 'Оставшееся время',
    'quiz.no_time_limit': 'Без ограничения по времени',
    
    // Glossary
    'glossary.search.placeholder': 'Поиск терминов...',
    
    // About platform
    'about.platform.ui_ux': 'Дизайн интерфейса и пользовательский опыт разработаны с учётом принципов «тихой роскоши» и современных стандартов веб-дизайна.',
    'about.platform.conclusion': 'Проект создан для повышения качества образования в области химии.',
    
    // Footer
    'footer.copyright': '© 2024 Syntara AI • Molecular Atlas. Все права защищены.',
    
    // Search
    'search.title': 'Поиск',
    'search.placeholder': 'Введите название элемента...',
    'search.no_results': 'Ничего не найдено',
    'search.results': 'Результаты поиска',
};

// =====================================================
// PART 2: CRITICAL UI TRANSLATIONS FOR KK
// =====================================================
const kkUI = {
    // Navigation
    'nav.home': 'Басты бет',
    'nav.explore': 'Зерттеу',
    'nav.learn': 'Квиз',
    'nav.ai': 'Syntara AI',
    'nav.glossary': 'Глоссарий',
    
    // Hero
    'hero.title': 'Syntara AI • Молекулалық Атлас',
    'hero.subtitle': 'Жаңа буын молекулалық визуализация және жетілдірілген білім беру зерттеулері мен кәсіби валидация үшін химиялық деректер базасы.',
    'hero.btn.explore': 'Зерттеуді бастау',
    'hero.btn.quiz': 'Білімді тексеру',
    
    // About
    'about.title': 'Atlas жобасы туралы',
    'about.mission.title': 'Біздің ғылыми миссия',
    'about.mission.text': 'Syntara AI Atlas студенттер, оқытушылар және зерттеушілер үшін жоғары сапалы интерактивті химиялық және молекулалық деректерді ұсынуға арналған.',
    'about.team.title': 'Әзірлеу тобы',
    'about.profiles.lead.name': 'Керейбаева Айгерим Нуржановна',
    'about.profiles.lead.role': 'Жоба куратор және академиялық директор',
    'about.profiles.lead.bio': 'Syntara AI жобасының академиялық валидациясы мен ғылыми дұрыстығын басқару.',
    'about.profiles.dev.name': 'Alexander',
    'about.profiles.dev.role': 'Бас жүйелік архитектор және AI-инженер',
    'about.profiles.dev.bio': 'Агенттік AI және иммерсивті интерактивті жүйелерді әзірлеу саласындағы сарапшы.',
    'about.profiles.btn.show_more': 'Кәсіби өмірбаян',
    'about.profiles.btn.show_less': 'Жию',
    'about.platform.ui_ux': 'Интерфейс дизайны мен пайдаланушы тәжірибесі «тыныш сән-салтанат» қағидаттарымен және заманауи веб-дизайн стандарттарымен жасалған.',
    'about.platform.conclusion': 'Жоба химия саласында білім сапасын арттыру үшін жасалған.',
    
    // Quiz
    'quiz.start.title': 'Ғылыми аттестация',
    'quiz.start.text': 'Молекулалық білімдеріңізді барлық жүйелер бойынша тексеріңіз.',
    'quiz.btn.start': 'Сертификацияны бастау',
    'quiz.stats.score': 'Ағымдағы балл',
    'quiz.stats.progress': 'Прогресс',
    'quiz.result.excellent': 'Тамаша! Керемет нәтиже!',
    'quiz.result.good': 'Жақсы! Лайықты нәтиже!',
    'quiz.result.try_again': 'Жақсы нәтиже үшін қайтадан көріңіз.',
    'quiz.btn.restart': 'Қайта бастау',
    'quiz.title': 'Квиз',
    'quiz.subtitle': 'Химиялық элементтер туралы білімдеріңізді тексеріңіз',
    'quiz.start': 'Квизді бастау',
    'quiz.progress': 'Прогресс',
    'quiz.question': 'Сұрақ',
    'quiz.score': 'Ұпай',
    'quiz.correct': 'Дұрыс!',
    'quiz.incorrect': 'Қате',
    'quiz.next': 'Келесі сұрақ',
    'quiz.finish': 'Аяқтау',
    'quiz.results': 'Нәтижелер',
    'quiz.restart': 'Қайта бастау',
    'quiz.perfect': 'Мінсіз нәтиже!',
    'quiz.great': 'Тамаша нәтиже!',
    'quiz.good': 'Жақсы нәтиже!',
    'quiz.keep_learning': 'Оқуды жалғастырыңыз!',
    'quiz.select_category': 'Санатты таңдаңыз',
    'quiz.all_elements': 'Барлық элементтер',
    'quiz.time_remaining': 'Қалған уақыт',
    'quiz.no_time_limit': 'Уақыт шектеусіз',
    
    // Fact
    'fact.label': 'Білесіз бе?',
    'fact.loading': 'Химиялық факт жүктелуде...',
    
    // Footer
    'footer.copyright': '© 2024 Syntara AI • Molecular Atlas. Барлық құқықтар қорғалған.',
    
    // Search
    'search.title': 'Іздеу',
    'search.placeholder': 'Элемент атауын енгізіңіз...',
    'search.no_results': 'Ештеңе табылмады',
    'search.results': 'Іздеу нәтижелері',
    
    // Glossary
    'glossary.search.placeholder': 'Терминдерді іздеу...',
    
    // Detail
    'detail.overview': 'Шолу',
    'detail.layers': 'Қабаттар',
    'detail.resources': 'Сыртқы ресурстар',
    'detail.controls': 'Еңкейту үшін тышқанды жылжытыңыз • Интерактивті тереңдік',
    'detail.explore': 'Зерттеу',
    'detail.read_more': 'Толығырақ',
    'detail.read_less': 'Жию',
    'detail.atomic_number': 'Атомдық нөмір',
};

// =====================================================
// PART 3: ELEMENT TITLE TRANSLATIONS FOR KK
// =====================================================
const elementTitlesKK = {
    'hydrogen': 'Сутегі',
    'helium': 'Гелий',
    'lithium': 'Литий',
    'beryllium': 'Бериллий',
    'boron': 'Бор',
    'carbon': 'Көміртегі',
    'nitrogen': 'Азот',
    'oxygen': 'Оттегі',
    'fluorine': 'Фтор',
    'neon': 'Неон',
    'sodium': 'Натрий',
    'magnesium': 'Магний',
    'aluminum': 'Алюминий',
    'silicon': 'Кремний',
    'phosphorus': 'Фосфор',
    'sulfur': 'Күкірт',
    'chlorine': 'Хлор',
    'argon': 'Аргон',
    'potassium': 'Калий',
    'calcium': 'Кальций',
    'scandium': 'Скандий',
    'titanium': 'Титан',
    'vanadium': 'Ванадий',
    'chromium': 'Хром',
    'manganese': 'Марганец',
    'iron': 'Темір',
    'cobalt': 'Кобальт',
    'nickel': 'Никель',
    'copper': 'Мыс',
    'zinc': 'Мырыш',
    'gallium': 'Галлий',
    'germanium': 'Германий',
    'arsenic': 'Мышьяк',
    'selenium': 'Селен',
    'bromine': 'Бром',
    'krypton': 'Криптон',
    'rubidium': 'Рубидий',
    'strontium': 'Стронций',
    'yttrium': 'Иттрий',
    'zirconium': 'Цирконий',
    'niobium': 'Ниобий',
    'molybdenum': 'Молибден',
    'technetium': 'Технеций',
    'ruthenium': 'Рутений',
    'rhodium': 'Родий',
    'palladium': 'Палладий',
    'silver': 'Күміс',
    'cadmium': 'Кадмий',
    'indium': 'Индий',
    'tin': 'Қалайы',
    'antimony': 'Сурьма',
    'tellurium': 'Теллур',
    'iodine': 'Йод',
    'xenon': 'Ксенон',
    'cesium': 'Цезий',
    'barium': 'Барий',
    'lanthanum': 'Лантан',
    'cerium': 'Церий',
    'praseodymium': 'Празеодим',
    'neodymium': 'Неодим',
    'promethium': 'Прометий',
    'samarium': 'Самарий',
    'europium': 'Европий',
    'gadolinium': 'Гадолиний',
    'terbium': 'Тербий',
    'dysprosium': 'Диспрозий',
    'holmium': 'Гольмий',
    'erbium': 'Эрбий',
    'thulium': 'Тулий',
    'ytterbium': 'Иттербий',
    'lutetium': 'Лютеций',
};

// =====================================================
// PART 4: ELEMENT TITLE TRANSLATIONS FOR RU
// =====================================================
const elementTitlesRU = {
    'hydrogen': 'Водород',
    'helium': 'Гелий',
    'lithium': 'Литий',
    'beryllium': 'Бериллий',
    'boron': 'Бор',
    'carbon': 'Углерод',
    'nitrogen': 'Азот',
    'oxygen': 'Кислород',
    'fluorine': 'Фтор',
    'neon': 'Неон',
    'sodium': 'Натрий',
    'magnesium': 'Магний',
    'aluminum': 'Алюминий',
    'silicon': 'Кремний',
    'phosphorus': 'Фосфор',
    'sulfur': 'Сера',
    'chlorine': 'Хлор',
    'argon': 'Аргон',
    'potassium': 'Калий',
    'calcium': 'Кальций',
    'scandium': 'Скандий',
    'titanium': 'Титан',
    'vanadium': 'Ванадий',
    'chromium': 'Хром',
    'manganese': 'Марганец',
    'iron': 'Железо',
    'cobalt': 'Кобальт',
    'nickel': 'Никель',
    'copper': 'Медь',
    'zinc': 'Цинк',
    'gallium': 'Галлий',
    'germanium': 'Германий',
    'arsenic': 'Мышьяк',
    'selenium': 'Селен',
    'bromine': 'Бром',
    'krypton': 'Криптон',
    'rubidium': 'Рубидий',
    'strontium': 'Стронций',
    'yttrium': 'Иттрий',
    'zirconium': 'Цирконий',
    'niobium': 'Ниобий',
    'molybdenum': 'Молибден',
    'technetium': 'Технеций',
    'ruthenium': 'Рутений',
    'rhodium': 'Родий',
    'palladium': 'Палладий',
    'silver': 'Серебро',
    'cadmium': 'Кадмий',
    'indium': 'Индий',
    'tin': 'Олово',
    'antimony': 'Сурьма',
    'tellurium': 'Теллур',
    'iodine': 'Йод',
    'xenon': 'Ксенон',
    'cesium': 'Цезий',
    'barium': 'Барий',
    'lanthanum': 'Лантан',
    'cerium': 'Церий',
    'praseodymium': 'Празеодим',
    'neodymium': 'Неодим',
    'promethium': 'Прометий',
    'samarium': 'Самарий',
    'europium': 'Европий',
    'gadolinium': 'Гадолиний',
    'terbium': 'Тербий',
    'dysprosium': 'Диспрозий',
    'holmium': 'Гольмий',
    'erbium': 'Эрбий',
    'thulium': 'Тулий',
    'ytterbium': 'Иттербий',
    'lutetium': 'Лютеций',
};

// =====================================================
// PART 5: GROUP TRANSLATIONS FOR KK
// =====================================================
const groupTranslationsKK = {
    'group.noble_gas': 'Инертті газ',
    'group.alkali_metal': 'Сілтілік металл',
    'group.alkaline_earth': 'Сілтілік-жер металы',
    'group.metalloid': 'Металлоид',
    'group.halogen': 'Галоген',
    'group.transition_metal': 'Өтпелі металл',
    'group.post_transition': 'Пост-өтпелі металл',
    'group.nonmetal': 'Бейметалл',
    'group.lanthanide': 'Лантаноид',
    'group.actinide': 'Актиноид',
};

const groupTranslationsRU = {
    'group.noble_gas': 'Благородный газ',
    'group.alkali_metal': 'Щелочной металл',
    'group.alkaline_earth': 'Щёлочноземельный',
    'group.metalloid': 'Металлоид',
    'group.halogen': 'Галоген',
    'group.transition_metal': 'Переходный металл',
    'group.post_transition': 'Постпереходный',
    'group.nonmetal': 'Неметалл',
    'group.lanthanide': 'Лантаноид',
    'group.actinide': 'Актиноид',
};

// =====================================================
// APPLY ALL TRANSLATIONS
// =====================================================

let ruCount = 0, kkCount = 0;

// Apply RU UI translations
for (const [key, value] of Object.entries(ruUI)) {
    if (!ru[key] || ru[key] === en[key]) {
        ru[key] = value;
        ruCount++;
    }
}

// Apply KK UI translations
for (const [key, value] of Object.entries(kkUI)) {
    if (!kk[key] || kk[key] === en[key]) {
        kk[key] = value;
        kkCount++;
    }
}

// Apply group translations
for (const [key, value] of Object.entries(groupTranslationsKK)) {
    if (!kk[key] || kk[key] === en[key]) {
        kk[key] = value;
        kkCount++;
    }
}
for (const [key, value] of Object.entries(groupTranslationsRU)) {
    if (!ru[key] || ru[key] === en[key]) {
        ru[key] = value;
        ruCount++;
    }
}

// Apply element-symbol group translations (group.h, group.he, etc.)
// These are per-element group names that need translating
const enKeys = Object.keys(en);
for (const key of enKeys) {
    if (key.startsWith('group.') && key.length <= 10) {
        // This is a per-element group key like group.h, group.he
        const enVal = en[key];
        // Find the matching group translation
        for (const [gKey, gValRU] of Object.entries(groupTranslationsRU)) {
            const enGroup = en[gKey];
            if (enVal === enGroup && (!ru[key] || ru[key] === enVal)) {
                ru[key] = gValRU;
                ruCount++;
            }
        }
        for (const [gKey, gValKK] of Object.entries(groupTranslationsKK)) {
            const enGroup = en[gKey];
            if (enVal === enGroup && (!kk[key] || kk[key] === enVal)) {
                kk[key] = gValKK;
                kkCount++;
            }
        }
    }
}

// Apply element titles
for (const [element, kkTitle] of Object.entries(elementTitlesKK)) {
    const titleKey = `system.${element}.title`;
    if (kk[titleKey] === en[titleKey] || !kk[titleKey]) {
        kk[titleKey] = kkTitle;
        kkCount++;
    }
}
for (const [element, ruTitle] of Object.entries(elementTitlesRU)) {
    const titleKey = `system.${element}.title`;
    if (ru[titleKey] === en[titleKey] || !ru[titleKey]) {
        ru[titleKey] = ruTitle;
        ruCount++;
    }
}

// Apply resource link translations
for (const key of enKeys) {
    if (key.startsWith('resource.wiki.')) {
        const element = key.replace('resource.wiki.', '');
        const ruTitle = elementTitlesRU[element];
        const kkTitle = elementTitlesKK[element];
        if (ruTitle && (!ru[key] || ru[key] === en[key])) {
            ru[key] = `Википедия — ${ruTitle}`;
            ruCount++;
        }
        if (kkTitle && (!kk[key] || kk[key] === en[key])) {
            kk[key] = `Уикипедия — ${kkTitle}`;
            kkCount++;
        }
    }
    if (key.startsWith('resource.pubchem.')) {
        const element = key.replace('resource.pubchem.', '');
        const ruTitle = elementTitlesRU[element];
        const kkTitle = elementTitlesKK[element];
        if (ruTitle && (!ru[key] || ru[key] === en[key])) {
            ru[key] = `PubChem — ${ruTitle}`;
            ruCount++;
        }
        if (kkTitle && (!kk[key] || kk[key] === en[key])) {
            kk[key] = `PubChem — ${kkTitle}`;
            kkCount++;
        }
    }
}

// Apply quiz answer keys (numbers) - copy from EN
for (const key of enKeys) {
    if (key.match(/q\d\.opt\.\d/) || key.match(/q\d\.answer/)) {
        const enVal = en[key];
        // If the value is a number or chemical symbol, copy as-is
        if (/^\d/.test(enVal) || /^[A-Z][a-z]?$/.test(enVal)) {
            if (!ru[key]) { ru[key] = enVal; ruCount++; }
            if (!kk[key]) { kk[key] = enVal; kkCount++; }
        }
    }
}

// Fill in any completely missing keys from EN as fallback
for (const key of enKeys) {
    if (!ru[key]) { ru[key] = en[key]; ruCount++; }
    if (!kk[key]) { kk[key] = en[key]; kkCount++; }
}

// =====================================================
// SAVE
// =====================================================
fs.writeFileSync('locales/ru_v2.json', JSON.stringify(ru, null, 4), 'utf8');
fs.writeFileSync('locales/kk_v2.json', JSON.stringify(kk, null, 4), 'utf8');

// Validate
JSON.parse(fs.readFileSync('locales/ru_v2.json', 'utf8'));
JSON.parse(fs.readFileSync('locales/kk_v2.json', 'utf8'));

console.log(`✅ RU: ${ruCount} ключей обновлено/добавлено, итого ${Object.keys(ru).length}`);
console.log(`✅ KK: ${kkCount} ключей обновлено/добавлено, итого ${Object.keys(kk).length}`);
console.log(`EN: ${Object.keys(en).length} ключей (без изменений)`);

// Quick verification
console.log('\n--- Проверка ---');
console.log('RU nav.ai:', ru['nav.ai']);
console.log('RU hero.btn.explore:', ru['hero.btn.explore']);
console.log('RU detail.explore:', ru['detail.explore']);
console.log('RU quiz.btn.start:', ru['quiz.btn.start']);
console.log('RU system.iron.title:', ru['system.iron.title']);
console.log('KK nav.explore:', kk['nav.explore']);
console.log('KK hero.btn.explore:', kk['hero.btn.explore']);
console.log('KK detail.explore:', kk['detail.explore']);
console.log('KK system.iron.title:', kk['system.iron.title']);
console.log('KK group.noble_gas:', kk['group.noble_gas']);
