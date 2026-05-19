const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'locales', 'kk_v2.json');
const backupPath = filePath + '.backup4_' + Date.now();

let raw = fs.readFileSync(filePath, 'utf8');
fs.writeFileSync(backupPath, raw, 'utf8');
console.log('Backup saved:', backupPath);

// ============================================================
// STEP 1: Understand the file structure
// The file has multiple "records" jammed into what should be
// separate lines. We need to rebuild the file from scratch
// by extracting all valid key-value pairs.
//
// The file is a flat JSON object: { "key": "value", ... }
// But some lines have TWO entries merged, and some entries
// span multiple lines (multi-line values)
// ============================================================

// Strategy: Use a character-by-character state machine parser
// to extract all valid key-value pairs, ignoring structural damage

function extractAllPairs(text) {
    const pairs = {};
    let i = 0;
    const len = text.length;
    
    function skipWhitespace() {
        while (i < len && (text[i] === ' ' || text[i] === '\n' || text[i] === '\r' || text[i] === '\t')) i++;
    }
    
    function readString() {
        // Assume we're at the opening "
        if (text[i] !== '"') return null;
        i++; // skip opening "
        let str = '';
        while (i < len) {
            if (text[i] === '\\') {
                i++;
                if (i < len) {
                    switch(text[i]) {
                        case '"': str += '"'; break;
                        case '\\': str += '\\'; break;
                        case '/': str += '/'; break;
                        case 'n': str += '\n'; break;
                        case 'r': str += '\r'; break;
                        case 't': str += '\t'; break;
                        case 'b': str += '\b'; break;
                        case 'f': str += '\f'; break;
                        case 'u':
                            const hex = text.substring(i+1, i+5);
                            if (/^[0-9a-fA-F]{4}$/.test(hex)) {
                                str += String.fromCharCode(parseInt(hex, 16));
                                i += 4;
                            } else {
                                str += '\\u';
                            }
                            break;
                        default: str += text[i];
                    }
                    i++;
                }
            } else if (text[i] === '"') {
                i++; // skip closing "
                return str;
            } else if (text[i] === '\uFFFD') {
                // Skip replacement characters
                i++;
            } else {
                str += text[i];
                i++;
            }
        }
        return null; // unterminated string
    }
    
    // Skip opening {
    skipWhitespace();
    if (text[i] === '{') i++;
    
    let pairCount = 0;
    let errorCount = 0;
    
    while (i < len) {
        skipWhitespace();
        
        if (i >= len) break;
        if (text[i] === '}') { i++; break; }
        if (text[i] === ',') { i++; continue; }
        
        // Try to read a key
        if (text[i] !== '"') {
            // Skip unexpected character
            i++;
            errorCount++;
            continue;
        }
        
        const keyStart = i;
        const key = readString();
        if (key === null) {
            console.log(`Warning: unterminated key string at position ${keyStart}`);
            break;
        }
        
        skipWhitespace();
        
        if (i >= len || text[i] !== ':') {
            // Missing colon - skip
            errorCount++;
            continue;
        }
        i++; // skip colon
        
        skipWhitespace();
        
        if (i >= len || text[i] !== '"') {
            // Value is not a string (or missing)
            errorCount++;
            continue;
        }
        
        const valueStart = i;
        const value = readString();
        if (value === null) {
            console.log(`Warning: unterminated value for key "${key}" at position ${valueStart}`);
            break;
        }
        
        // Successfully read a pair
        if (!pairs.hasOwnProperty(key)) {
            pairs[key] = value;
            pairCount++;
        } else {
            // Duplicate key - keep the first occurrence (which should be the KK version)
            // Unless the first was English and this is KK
            // Heuristic: KK text contains Cyrillic chars
            const firstHasCyrillic = /[\u0400-\u04FF]/.test(pairs[key]);
            const newHasCyrillic = /[\u0400-\u04FF]/.test(value);
            if (!firstHasCyrillic && newHasCyrillic) {
                pairs[key] = value;
                console.log(`Replaced English duplicate with KK for key: ${key}`);
            }
            // else keep first
        }
    }
    
    console.log(`Extracted ${pairCount} pairs, ${errorCount} errors`);
    console.log(`Total unique keys: ${Object.keys(pairs).length}`);
    return pairs;
}

console.log('Extracting all key-value pairs...');
const pairs = extractAllPairs(raw);

// Rebuild JSON
const result = JSON.stringify(pairs, null, 4);

// Validate
try {
    JSON.parse(result);
    console.log('\n✅ JSON is VALID!');
    console.log(`Total keys: ${Object.keys(pairs).length}`);
    
    fs.writeFileSync(filePath, result, 'utf8');
    console.log('✅ Fixed file saved!');
    
    // Also save a report of what was fixed
    const report = {
        totalKeys: Object.keys(pairs).length,
        sampleKeys: Object.keys(pairs).slice(0, 10),
        lastKeys: Object.keys(pairs).slice(-10)
    };
    console.log('\nSample keys:', report.sampleKeys.slice(0, 5));
    console.log('Last keys:', report.lastKeys.slice(-5));
} catch (e) {
    console.error('❌ JSON still invalid:', e.message);
    fs.writeFileSync(filePath + '.fix5_attempt', result, 'utf8');
}
