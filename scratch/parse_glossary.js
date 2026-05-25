const fs = require('fs');
const path = require('path');

const raw = fs.readFileSync(path.join(__dirname, 'glossary_raw.txt'), 'utf-8');
const lines = raw.split('\n');

let currentSection = '';
let sections = [];
let currentTerms = [];
let sectionCounter = 1;
let termCounter = 1;

let ruJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../locales/ru_v2.json'), 'utf-8'));
let enJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../locales/en_v2.json'), 'utf-8'));
let kkJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../locales/kk_v3.json'), 'utf-8'));

for (let line of lines) {
    line = line.trim();
    if (!line) continue;
    
    if (line.startsWith('Блок')) {
        let title = line.replace(/^Блок\s+[IVX]+:\s*/, '').trim();
        if (currentSection) {
            sections.push({ titleKey: `glossary.sect.${sectionCounter}`, terms: currentTerms });
            sectionCounter++;
        }
        currentSection = title;
        currentTerms = [];
        
        ruJson[`glossary.sect.${sectionCounter}`] = currentSection;
        enJson[`glossary.sect.${sectionCounter}`] = currentSection; // Fallback to ru
        kkJson[`glossary.sect.${sectionCounter}`] = currentSection; // Fallback to ru
    } else {
        const match = line.match(/^\d+\.\s*\*(.*?)\*\s*—\s*(.*)$/);
        if (match) {
function cleanLatex(text) {
    return text
        .replace(/\\text\{г\/моль\}/g, 'г/моль')
        .replace(/\\text\{\s*л\/моль\}/g, ' л/моль')
        .replace(/\\times/g, '×')
        .replace(/10\^\{23\}/g, '10²³')
        .replace(/\\text\{OH\}\^\-/g, 'OH⁻')
        .replace(/H\^\+/g, 'H⁺')
        .replace(/C_nH_\{2n\+2\}/g, 'CₙH₂ₙ₊₂')
        .replace(/C_nH_\{2n\}/g, 'CₙH₂ₙ')
        .replace(/C_nH_\{2n\-2\}/g, 'CₙH₂ₙ₋₂')
        .replace(/C_6H_6/g, 'C₆H₆')
        .replace(/\\text\{OH\}/g, 'OH')
        .replace(/\\text\{CHO\}/g, 'CHO')
        .replace(/\\text\{CO\}/g, 'CO')
        .replace(/\\text\{COOH\}/g, 'COOH')
        .replace(/C_n\(H_2O\)_m/g, 'Cₙ(H₂O)ₘ')
        .replace(/C_6H_\{12\}O_6/g, 'C₆H₁₂O₆')
        .replace(/\\text\{CONH\}/g, 'CONH')
        .replace(/\\text\{CH\}_2/g, 'CH₂')
        .replace(/CO_2/g, 'CO₂')
        .replace(/H_2O/g, 'H₂O')
        // generic replacements
        .replace(/_\{(\d+)\}/g, (m, p1) => p1.split('').map(d => '₀₁₂₃₄₅₆₇₈₉'[d]).join(''))
        .replace(/_(\d)/g, (m, p1) => '₀₁₂₃₄₅₆₇₈₉'[p1])
        .replace(/\^\{(\d+)\}/g, (m, p1) => p1.split('').map(d => '⁰¹²³⁴⁵⁶⁷⁸⁹'[d]).join(''))
        .replace(/\^(\d)/g, (m, p1) => '⁰¹²³⁴⁵⁶⁷⁸⁹'[p1]);
}

            const term = match[1].trim();
            let def = match[2].trim();
            def = cleanLatex(def);
            
            const tKey = `glossary.term.${termCounter}`;
            const dKey = `glossary.def.${termCounter}`;
            
            ruJson[tKey] = term;
            enJson[tKey] = term;
            kkJson[tKey] = term;
            
            ruJson[dKey] = def;
            enJson[dKey] = def;
            kkJson[dKey] = def;
            
            currentTerms.push({ termKey: tKey, defKey: dKey });
            termCounter++;
        }
    }
}

if (currentSection) {
    sections.push({ titleKey: `glossary.sect.${sectionCounter}`, terms: currentTerms });
}

const glossaryDataJS = `/* js/data/glossary-data.js */\nwindow.glossaryData = ${JSON.stringify(sections, null, 4)};\n`;

fs.writeFileSync(path.join(__dirname, '../js/data/glossary-data.js'), glossaryDataJS);
fs.writeFileSync(path.join(__dirname, '../locales/ru_v2.json'), JSON.stringify(ruJson, null, 4));
fs.writeFileSync(path.join(__dirname, '../locales/en_v2.json'), JSON.stringify(enJson, null, 4));
fs.writeFileSync(path.join(__dirname, '../locales/kk_v3.json'), JSON.stringify(kkJson, null, 4));

console.log('Glossary updated successfully.');
