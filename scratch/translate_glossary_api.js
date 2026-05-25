const fs = require('fs');
const path = require('path');

const ruPath = path.join(__dirname, '../locales/ru_v2.json');
const enPath = path.join(__dirname, '../locales/en_v2.json');
const kkPath = path.join(__dirname, '../locales/kk_v3.json');

const ruJson = JSON.parse(fs.readFileSync(ruPath, 'utf-8'));
const enJson = JSON.parse(fs.readFileSync(enPath, 'utf-8'));
const kkJson = JSON.parse(fs.readFileSync(kkPath, 'utf-8'));

async function translateText(text, targetLang) {
    if (!text) return text;
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=ru&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data[0].map(part => part[0]).join('');
    } catch (e) {
        console.error('Translation error:', e);
        return text; // Fallback
    }
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function main() {
    const keys = Object.keys(ruJson).filter(k => k.startsWith('glossary.'));
    console.log(`Found ${keys.length} glossary keys to translate.`);
    
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const ruText = ruJson[key];
        
        // Translate to English
        if (enJson[key] === ruText) {
            enJson[key] = await translateText(ruText, 'en');
            console.log(`[EN] ${key}: ${enJson[key]}`);
            await sleep(200); // Respect rate limits
        }
        
        // Translate to Kazakh
        if (kkJson[key] === ruText) {
            kkJson[key] = await translateText(ruText, 'kk');
            console.log(`[KK] ${key}: ${kkJson[key]}`);
            await sleep(200);
        }
    }
    
    fs.writeFileSync(enPath, JSON.stringify(enJson, null, 4));
    fs.writeFileSync(kkPath, JSON.stringify(kkJson, null, 4));
    console.log('Translation complete and files saved!');
}

main();
