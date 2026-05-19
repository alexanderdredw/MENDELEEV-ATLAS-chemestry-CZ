/**
 * download_scientist_portraits.js
 * 
 * Downloads public domain scientist portraits from Wikimedia Commons
 * and saves them to assets/images/scientists/ with the correct filenames.
 * 
 * Run with: node scratch/download_scientist_portraits.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '..', 'assets', 'images', 'scientists');

// Wikimedia Commons direct image URLs (public domain / CC)
const portraits = [
    {
        id: 'mendeleev',
        filename: 'mendeleev_lux.png',
        // Official portrait by unknown artist, ~1897
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Mendeleev_Photograph_%28Vedeneev%2C_1897%29.jpg/440px-Mendeleev_Photograph_%28Vedeneev%2C_1897%29.jpg'
    },
    {
        id: 'curie',
        filename: 'curie_lux.png',
        // Famous lab photo ~1900
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Marie_Curie_c1920.jpg/440px-Marie_Curie_c1920.jpg'
    },
    {
        id: 'lavoisier',
        filename: 'lavoisier_lux.png',
        // Portrait by Louis Jean Desire Delaistre (public domain)
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Antoine_lavoisier_color.jpg/440px-Antoine_lavoisier_color.jpg'
    },
    {
        id: 'bohr',
        filename: 'bohr_lux.png',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Niels_Bohr.jpg/440px-Niels_Bohr.jpg'
    },
    {
        id: 'rutherford',
        filename: 'rutherford_lux.png',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Ernest_Rutherford_cropped.jpg/440px-Ernest_Rutherford_cropped.jpg'
    },
    {
        id: 'dalton',
        filename: 'dalton_lux.png',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/John_Dalton_by_Charles_Turner.jpg/440px-John_Dalton_by_Charles_Turner.jpg'
    },
    {
        id: 'pauling',
        filename: 'pauling_lux.png',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Linus_Pauling_Chem_1954.jpg/440px-Linus_Pauling_Chem_1954.jpg'
    }
];

if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log('Created directory:', OUTPUT_DIR);
}

function downloadFile(url, destPath, retries = 3) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(destPath);
        
        const request = https.get(url, {
            headers: {
                'User-Agent': 'ChemistryAtlas/1.0 (Educational project; portrait download)'
            }
        }, response => {
            if (response.statusCode === 301 || response.statusCode === 302) {
                file.close();
                fs.unlinkSync(destPath);
                downloadFile(response.headers.location, destPath, retries - 1)
                    .then(resolve).catch(reject);
                return;
            }
            if (response.statusCode !== 200) {
                file.close();
                fs.unlinkSync(destPath);
                reject(new Error(`HTTP ${response.statusCode} for ${url}`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        });
        
        request.on('error', err => {
            file.close();
            if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
            reject(err);
        });
    });
}

async function main() {
    console.log('Downloading scientist portraits...\n');
    
    for (const portrait of portraits) {
        const destPath = path.join(OUTPUT_DIR, portrait.filename);
        
        if (fs.existsSync(destPath)) {
            console.log(`✓ ${portrait.id} — already exists, skipping`);
            continue;
        }
        
        process.stdout.write(`⬇ Downloading ${portrait.id}... `);
        try {
            await downloadFile(portrait.url, destPath);
            const size = (fs.statSync(destPath).size / 1024).toFixed(0);
            console.log(`✓ done (${size} KB)`);
        } catch (err) {
            console.log(`✗ FAILED: ${err.message}`);
        }
    }
    
    console.log('\nAll done! Files saved to:', OUTPUT_DIR);
}

main();
