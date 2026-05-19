/**
 * download_scientist_portraits_v2.js
 * Uses correct Wikimedia URLs found by browser agent.
 * Run with: node scratch/download_scientist_portraits_v2.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '..', 'assets', 'images', 'scientists');

const portraits = [
    {
        id: 'mendeleev',
        filename: 'mendeleev_lux.jpg',
        url: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Dmitri_Mendeleev.jpg'
    },
    {
        id: 'curie',
        filename: 'curie_lux.jpg',
        url: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Marie_Curie_c._1920s.jpg'
    },
    {
        id: 'lavoisier',
        filename: 'lavoisier_lux.jpg',
        url: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/David_-_Portrait_of_Monsieur_Lavoisier_%28cropped%292.jpg'
    },
    {
        id: 'bohr',
        filename: 'bohr_lux.jpg',
        url: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Niels_Bohr.jpg'
    },
    {
        id: 'rutherford',
        filename: 'rutherford_lux.jpg',
        url: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Sir_Ernest_Rutherford_LCCN2014716719_-_restoration1.jpg'
    },
    {
        id: 'dalton',
        filename: 'dalton_lux.jpg',
        url: 'https://upload.wikimedia.org/wikipedia/commons/0/00/John_Dalton_by_Thomas_Phillips%2C_1835.jpg'
    },
    {
        id: 'pauling',
        filename: 'pauling_lux.jpg',
        url: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Linus_Pauling_in_the_1940s.jpg'
    }
];

if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function downloadFile(url, destPath) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(destPath);
        
        const options = {
            headers: {
                'User-Agent': 'ChemistryAtlasBot/1.0 (https://github.com/edu-project; educational-use)',
                'Accept': 'image/jpeg,image/*,*/*',
            }
        };

        function doRequest(currentUrl, redirectCount) {
            if (redirectCount > 5) return reject(new Error('Too many redirects'));
            
            https.get(currentUrl, options, response => {
                if (response.statusCode === 301 || response.statusCode === 302 || response.statusCode === 307) {
                    doRequest(response.headers.location, redirectCount + 1);
                    return;
                }
                if (response.statusCode !== 200) {
                    file.close();
                    if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
                    return reject(new Error(`HTTP ${response.statusCode}`));
                }
                response.pipe(file);
                file.on('finish', () => { file.close(); resolve(); });
                file.on('error', err => { if (fs.existsSync(destPath)) fs.unlinkSync(destPath); reject(err); });
            }).on('error', err => {
                if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
                reject(err);
            });
        }
        
        doRequest(url, 0);
    });
}

async function main() {
    console.log('Downloading scientist portraits...\n');
    
    for (const portrait of portraits) {
        const destPath = path.join(OUTPUT_DIR, portrait.filename);
        
        if (fs.existsSync(destPath) && fs.statSync(destPath).size > 10000) {
            console.log(`✓ ${portrait.id} — already exists (${(fs.statSync(destPath).size/1024).toFixed(0)} KB), skipping`);
            continue;
        }
        
        process.stdout.write(`⬇  Downloading ${portrait.id}... `);
        try {
            await downloadFile(portrait.url, destPath);
            const size = (fs.statSync(destPath).size / 1024).toFixed(0);
            console.log(`✓ done (${size} KB)`);
        } catch (err) {
            console.log(`✗ FAILED: ${err.message}`);
        }
        
        // Small delay to be polite to Wikimedia
        await new Promise(r => setTimeout(r, 500));
    }
    
    console.log('\nAll done! Files in:', OUTPUT_DIR);
    
    // List downloaded files
    const files = fs.readdirSync(OUTPUT_DIR);
    if (files.length > 0) {
        console.log('\nDownloaded files:');
        files.forEach(f => {
            const size = (fs.statSync(path.join(OUTPUT_DIR, f)).size / 1024).toFixed(0);
            console.log(`  ${f} — ${size} KB`);
        });
    }
}

main().catch(console.error);
