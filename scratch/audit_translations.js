const fs = require('fs');
const path = require('path');

const en = JSON.parse(fs.readFileSync('locales/en_v2.json', 'utf8'));
const ru = JSON.parse(fs.readFileSync('locales/ru_v2.json', 'utf8'));
const kk = JSON.parse(fs.readFileSync('locales/kk_v2.json', 'utf8'));

const enKeys = new Set(Object.keys(en));
const ruKeys = new Set(Object.keys(ru));
const kkKeys = new Set(Object.keys(kk));

console.log('=== FILE SIZE ===');
console.log(`EN: ${enKeys.size} keys`);
console.log(`RU: ${ruKeys.size} keys`);
console.log(`KK: ${kkKeys.size} keys`);

// === 1. Keys missing from RU (exist in EN but not RU) ===
const missingRU = [...enKeys].filter(k => !ruKeys.has(k));
console.log(`\n=== MISSING FROM RU (${missingRU.length}) ===`);
// Group by prefix
const groupByPrefix = (arr) => {
    const groups = {};
    arr.forEach(k => {
        const prefix = k.split('.').slice(0, 2).join('.');
        if (!groups[prefix]) groups[prefix] = [];
        groups[prefix].push(k);
    });
    return groups;
};

const missingRUGroups = groupByPrefix(missingRU);
for (const [prefix, keys] of Object.entries(missingRUGroups)) {
    console.log(`  ${prefix}: ${keys.length} keys`);
    if (keys.length <= 5) keys.forEach(k => console.log(`    - ${k}`));
}

// === 2. Keys missing from KK (exist in EN but not KK) ===
const missingKK = [...enKeys].filter(k => !kkKeys.has(k));
console.log(`\n=== MISSING FROM KK (${missingKK.length}) ===`);
const missingKKGroups = groupByPrefix(missingKK);
for (const [prefix, keys] of Object.entries(missingKKGroups)) {
    console.log(`  ${prefix}: ${keys.length} keys`);
    if (keys.length <= 5) keys.forEach(k => console.log(`    - ${k}`));
}

// === 3. Keys that are in RU/KK but NOT in EN (extra keys) ===
const extraRU = [...ruKeys].filter(k => !enKeys.has(k));
const extraKK = [...kkKeys].filter(k => !enKeys.has(k));
console.log(`\n=== EXTRA IN RU (not in EN): ${extraRU.length} ===`);
if (extraRU.length > 0 && extraRU.length <= 20) extraRU.forEach(k => console.log(`  - ${k}`));
console.log(`\n=== EXTRA IN KK (not in EN): ${extraKK.length} ===`);
if (extraKK.length > 0 && extraKK.length <= 20) extraKK.forEach(k => console.log(`  - ${k}`));

// === 4. Keys where RU/KK value === EN value (untranslated) ===
const untranslatedRU = [];
const untranslatedKK = [];

for (const key of enKeys) {
    const enVal = en[key];
    // Skip keys that are the same in all languages by design (numbers, symbols, etc.)
    if (/^\d+$/.test(enVal)) continue;
    if (/^[A-Z]{1,3}$/.test(enVal)) continue; // Chemical symbols like H, He, Li
    if (/^(PubChem|Wikipedia)/.test(enVal)) continue;
    if (enVal.length <= 2) continue;
    
    if (ru[key] && ru[key] === enVal && !key.startsWith('about.profiles')) {
        untranslatedRU.push(key);
    }
    if (kk[key] && kk[key] === enVal && !key.startsWith('about.profiles')) {
        untranslatedKK.push(key);
    }
}

console.log(`\n=== UNTRANSLATED IN RU (value = EN value): ${untranslatedRU.length} ===`);
const untranslatedRUGroups = groupByPrefix(untranslatedRU);
for (const [prefix, keys] of Object.entries(untranslatedRUGroups)) {
    console.log(`  ${prefix}: ${keys.length} keys`);
    if (keys.length <= 3) keys.forEach(k => console.log(`    - ${k}: "${en[k].substring(0, 60)}"`));
}

console.log(`\n=== UNTRANSLATED IN KK (value = EN value): ${untranslatedKK.length} ===`);
const untranslatedKKGroups = groupByPrefix(untranslatedKK);
for (const [prefix, keys] of Object.entries(untranslatedKKGroups)) {
    console.log(`  ${prefix}: ${keys.length} keys`);
    if (keys.length <= 3) keys.forEach(k => console.log(`    - ${k}: "${en[k].substring(0, 60)}"`));
}

// === 5. Check for UI/navigation keys specifically ===
console.log('\n=== CRITICAL UI KEYS CHECK ===');
const uiPrefixes = ['app.', 'nav.', 'hero.', 'fact.', 'about.', 'quiz.', 'detail.', 'glossary.', 'scientist.', 'group.'];
for (const prefix of uiPrefixes) {
    const enCount = [...enKeys].filter(k => k.startsWith(prefix)).length;
    const ruCount = [...ruKeys].filter(k => k.startsWith(prefix)).length;
    const kkCount = [...kkKeys].filter(k => k.startsWith(prefix)).length;
    
    const ruMissing = [...enKeys].filter(k => k.startsWith(prefix) && !ruKeys.has(k)).length;
    const kkMissing = [...enKeys].filter(k => k.startsWith(prefix) && !kkKeys.has(k)).length;
    
    const status = (ruMissing === 0 && kkMissing === 0) ? '✅' : '❌';
    console.log(`${status} ${prefix}* — EN:${enCount} RU:${ruCount}(miss:${ruMissing}) KK:${kkCount}(miss:${kkMissing})`);
}

// === 6. Check element-specific keys ===
console.log('\n=== ELEMENT KEYS CHECK ===');
const elements = ['hydrogen', 'helium', 'lithium', 'beryllium', 'boron', 'carbon', 'nitrogen', 'oxygen', 'fluorine', 'neon',
    'sodium', 'magnesium', 'aluminum', 'silicon', 'phosphorus', 'sulfur', 'chlorine', 'argon', 'potassium', 'calcium',
    'scandium', 'titanium', 'vanadium', 'chromium', 'manganese', 'iron', 'cobalt', 'nickel', 'copper', 'zinc',
    'gallium', 'germanium', 'arsenic', 'selenium', 'bromine', 'krypton', 'rubidium', 'strontium', 'yttrium', 'zirconium',
    'niobium', 'molybdenum', 'technetium', 'ruthenium', 'rhodium', 'palladium', 'silver', 'cadmium', 'indium', 'tin',
    'antimony', 'tellurium', 'iodine', 'xenon', 'cesium', 'barium', 'lanthanum', 'cerium', 'praseodymium', 'neodymium',
    'promethium', 'samarium', 'europium', 'gadolinium', 'terbium', 'dysprosium', 'holmium', 'erbium', 'thulium', 'ytterbium', 'lutetium'
];

const elemProblems = [];
for (const el of elements) {
    const titleKey = `system.${el}.title`;
    const descKey = `system.${el}.desc`;
    const detailsKey = `system.${el}.details`;
    
    const hasEN = en[titleKey] && en[descKey];
    const hasRU = ru[titleKey] && ru[descKey];
    const hasKK = kk[titleKey] && kk[descKey];
    
    const ruUntranslated = ru[titleKey] === en[titleKey] && ru[descKey] === en[descKey];
    const kkUntranslated = kk[titleKey] === en[titleKey] && kk[descKey] === en[descKey];
    
    if (!hasEN) continue;
    
    const issues = [];
    if (!hasRU) issues.push('RU:MISSING');
    else if (ruUntranslated) issues.push('RU:EN-TEXT');
    if (!hasKK) issues.push('KK:MISSING');
    else if (kkUntranslated) issues.push('KK:EN-TEXT');
    
    if (issues.length > 0) {
        elemProblems.push(`  ${el}: ${issues.join(', ')}`);
    }
}

if (elemProblems.length > 0) {
    console.log(`Elements with issues (${elemProblems.length}):`);
    elemProblems.forEach(p => console.log(p));
} else {
    console.log('✅ All elements have translations in RU and KK');
}

// === 7. Save a full report ===
const report = {
    summary: {
        en_keys: enKeys.size,
        ru_keys: ruKeys.size,
        kk_keys: kkKeys.size,
        missing_from_ru: missingRU.length,
        missing_from_kk: missingKK.length,
        untranslated_ru: untranslatedRU.length,
        untranslated_kk: untranslatedKK.length,
    },
    missing_from_ru: missingRU,
    missing_from_kk: missingKK,
    untranslated_ru: untranslatedRU,
    untranslated_kk: untranslatedKK,
};

fs.writeFileSync('scratch/translation_audit.json', JSON.stringify(report, null, 2), 'utf8');
console.log('\n📋 Full report saved to scratch/translation_audit.json');
