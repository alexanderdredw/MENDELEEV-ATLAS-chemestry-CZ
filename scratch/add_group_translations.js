const fs = require('fs');

const translations = {
    en: {
        'filter.all': 'All',
        'filter.empty': 'No elements in this group',
        'detail.atomic_number': 'Atomic Number',
        'group.nonmetal': 'Nonmetal',
        'group.noble_gas': 'Noble Gas',
        'group.alkali_metal': 'Alkali Metal',
        'group.alkaline_earth': 'Alkaline Earth',
        'group.metalloid': 'Semimetals',
        'group.halogen': 'Halogen',
        'group.transition_metal': 'Transition Metal',
        'group.post_transition': 'Post-Transition',
        'group.lanthanide': 'Lanthanide',
        'group.actinide': 'Actinide',
    },
    ru: {
        'filter.all': 'Все',
        'filter.empty': 'Нет элементов в этой группе',
        'detail.atomic_number': 'Атомный номер',
        'group.nonmetal': 'Неметалл',
        'group.noble_gas': 'Благородный газ',
        'group.alkali_metal': 'Щелочной металл',
        'group.alkaline_earth': 'Щелочноземельный',
        'group.metalloid': 'Полуметаллы',
        'group.halogen': 'Галоген',
        'group.transition_metal': 'Переходный металл',
        'group.post_transition': 'Другие металлы',
        'group.lanthanide': 'Лантаноид',
        'group.actinide': 'Актиноид',
    },
    kk: {
        'filter.all': 'Барлығы',
        'filter.empty': 'Бұл топта элементтер жоқ',
        'detail.atomic_number': 'Атомдық нөмір',
        'group.nonmetal': 'Бейметалл',
        'group.noble_gas': 'Инертті газ',
        'group.alkali_metal': 'Сілтілік металл',
        'group.alkaline_earth': 'Сілтілік-жер металы',
        'group.metalloid': 'Полуметаллы',
        'group.halogen': 'Галоген',
        'group.transition_metal': 'Өтпелі металл',
        'group.post_transition': 'Постөтпелі металл',
        'group.lanthanide': 'Лантаноид',
        'group.actinide': 'Актиноид',
    }
};

for (const [lang, keys] of Object.entries(translations)) {
    const path = `locales/${lang}_v2.json`;
    const locale = JSON.parse(fs.readFileSync(path, 'utf8'));
    Object.assign(locale, keys);
    fs.writeFileSync(path, JSON.stringify(locale, null, 4));
    console.log(`✓ Updated ${path}`);
}
