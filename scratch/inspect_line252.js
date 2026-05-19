const fs = require('fs');

const raw = fs.readFileSync('locales/kk_v2.json.backup_1778967678776', 'utf8');
const lines = raw.split('\n');

// Check all lines that contain hydrogen or group keys
const hydrogenLines = [];
for (let i = 240; i < 260; i++) {
    if (lines[i]) {
        console.log(`Line ${i+1} (first 120): ${lines[i].substring(0,120)}`);
    }
}

console.log('\n--- Looking for missing hydrogen keys ---');
// What keys should be between line 251 (group.post_transition) and line 253 (system.helium.desc)?
// Expected: system.hydrogen.title, system.hydrogen.desc, system.hydrogen.details, system.hydrogen.fact
// resource.wiki.hydrogen, resource.pubchem.hydrogen, ai.hydrogen.* (many keys)
// These were all part of the first english duplicate block that got inserted at line 252

// Let's see what line 252 contains (the broken line)
const l252 = lines[251];
console.log('\nLine 252 full content:');
console.log(l252);
