const fs = require('fs');

const kk = JSON.parse(fs.readFileSync('locales/kk_v2.json', 'utf8'));
const en = JSON.parse(fs.readFileSync('locales/en_v2.json', 'utf8'));

// Extract system.hydrogen.details from backup line 252
const backup = fs.readFileSync('locales/kk_v2.json.backup_1778967678776', 'utf8');
const backupLines = backup.split('\n');
const line252 = backupLines[251];

// Extract hydrogen.details value - it starts after "system.hydrogen.details": "
// and ends at the first unescaped " before ",\uFFFD
const detailsMarker = '"system.hydrogen.details": "';
const detailsStart = line252.indexOf(detailsMarker);
if (detailsStart >= 0) {
    const valueStart = detailsStart + detailsMarker.length;
    // Find the end: first " not preceded by \ that is followed by ,
    // We know the problem is at char ~2633 where ",\uFFFD appears
    // Take everything before that
    const problematicPattern = '",\uFFFD';
    const problematicIdx = line252.indexOf(problematicPattern, valueStart);
    
    if (problematicIdx >= 0) {
        let details = line252.substring(valueStart, problematicIdx);
        // The details value is now: "...отын элементтері"
        // But the text was cut. The full value should end with something complete
        // Let's take it up to a reasonable end point
        // Find the last complete sentence/bullet point
        const lastBr = details.lastIndexOf('<br>');
        if (lastBr >= 0 && details.length - lastBr > 200) {
            // Take up to the last <br>
            details = details.substring(0, lastBr);
        }
        
        console.log('Extracted hydrogen.details (first 100):', details.substring(0, 100));
        console.log('Extracted hydrogen.details (last 100):', details.substring(details.length - 100));
        
        kk['system.hydrogen.details'] = details;
    } else {
        console.log('Could not find problematic pattern, using full extraction attempt');
        // Use state machine to extract
        let i = valueStart;
        let value = '';
        while (i < line252.length) {
            if (line252[i] === '\\') {
                i++;
                if (i < line252.length) {
                    if (line252[i] === '"') { value += '"'; i++; }
                    else if (line252[i] === 'n') { value += '\n'; i++; }
                    else { value += line252[i++]; }
                }
            } else if (line252[i] === '"') {
                break; // End of string
            } else if (line252[i] === '\uFFFD') {
                break; // Stop at corruption
            } else {
                value += line252[i++];
            }
        }
        kk['system.hydrogen.details'] = value;
        console.log('State machine extracted (first 100):', value.substring(0, 100));
    }
}

// Add missing critical keys using EN as fallback (with note that translation needed)
// For now, add helium.title which was also missing
if (!kk['system.helium.title']) {
    kk['system.helium.title'] = 'Гелий'; // This is the same in Kazakh
    console.log('Added system.helium.title: Гелий');
}

// Add group keys
if (!kk['group.lanthanide']) {
    kk['group.lanthanide'] = 'Лантаноид';
    console.log('Added group.lanthanide');
}
if (!kk['group.actinide']) {
    kk['group.actinide'] = 'Актиноид';
    console.log('Added group.actinide');
}

// Add erbium.study.5
if (!kk['ai.erbium.study.5']) {
    kk['ai.erbium.study.5'] = 'Электрондық конфигурация: [Xe] 4f12 6s2';
    console.log('Added ai.erbium.study.5');
}

// Restore hydrogen title/desc/fact from the KK data we can reconstruct
// system.hydrogen.title = Сутегі (same in KK)
// These existed in the original - let's check ru_v2.json for reference
const ru = JSON.parse(fs.readFileSync('locales/ru_v2.json', 'utf8'));

const hydrogenMissing = [
    'system.hydrogen.title',
    'system.hydrogen.desc',
    'system.hydrogen.fact',
    'resource.wiki.hydrogen',
    'resource.pubchem.hydrogen',
    'ai.hydrogen.simple',
    'ai.hydrogen.detailed',
    'ai.hydrogen.study.1',
    'ai.hydrogen.study.2', 
    'ai.hydrogen.study.3',
    'ai.hydrogen.study.4',
    'ai.hydrogen.study.5',
    'ai.hydrogen.q1.text',
    'ai.hydrogen.q1.opt.1',
    'ai.hydrogen.q1.opt.2',
    'ai.hydrogen.q1.opt.3',
    'ai.hydrogen.q1.opt.4',
    'ai.hydrogen.q2.text',
    'ai.hydrogen.q2.opt.1',
    'ai.hydrogen.q2.opt.2',
    'ai.hydrogen.q2.opt.3',
    'ai.hydrogen.q2.opt.4',
    'ai.hydrogen.q3.text',
    'ai.hydrogen.q3.opt.1',
    'ai.hydrogen.q3.opt.2',
    'ai.hydrogen.q3.opt.3',
    'ai.hydrogen.q3.opt.4',
    'ai.hydrogen.q4.text',
    'ai.hydrogen.q4.opt.1',
    'ai.hydrogen.q4.opt.2',
    'ai.hydrogen.q4.opt.3',
    'ai.hydrogen.q4.opt.4',
    'ai.hydrogen.q5.text',
    'ai.hydrogen.q5.opt.1',
    'ai.hydrogen.q5.opt.2',
    'ai.hydrogen.q5.opt.3',
    'ai.hydrogen.q5.opt.4',
];

// For missing hydrogen keys, use EN as fallback (better than nothing)
// We use EN values since the KK was never fully populated
for (const key of hydrogenMissing) {
    if (!kk[key] && en[key]) {
        kk[key] = en[key];
        console.log(`Added from EN: ${key}`);
    }
}

// Save
const result = JSON.stringify(kk, null, 4);
JSON.parse(result); // validate

fs.writeFileSync('locales/kk_v2.json', result, 'utf8');
console.log('\n✅ Final file saved with', Object.keys(kk).length, 'keys');
console.log('Has hydrogen.title:', !!kk['system.hydrogen.title']);
console.log('Has hydrogen.details:', !!kk['system.hydrogen.details']);
console.log('Has glossary.term.1:', !!kk['glossary.term.1']);
