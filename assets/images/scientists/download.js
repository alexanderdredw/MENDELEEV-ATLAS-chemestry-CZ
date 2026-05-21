const https = require('https');
const fs = require('fs');

function downloadImage(url, dest) {
    const file = fs.createWriteStream(dest);
    const options = {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' }
    };
    
    const request = https.get(url, options, function(response) {
        if (response.statusCode === 301 || response.statusCode === 302 || response.statusCode === 308) {
            console.log('Redirecting to: ' + response.headers.location);
            file.close();
            return downloadImage(response.headers.location, dest);
        }
        
        response.pipe(file);
        
        file.on('finish', function() {
            file.close();
            console.log('Downloaded ' + dest + ' (Size: ' + fs.statSync(dest).size + ')');
        });
    }).on('error', function(err) {
        fs.unlink(dest, () => {});
        console.error('Error downloading ' + dest + ': ' + err.message);
    });
}

// Download Dorothy Hodgkin portrait
downloadImage('https://upload.wikimedia.org/wikipedia/commons/4/41/Professor_Dorothy_Hodgkin.jpg', 'c:/Users/Александр/OneDrive/Рабочий стол/chemestry  копия MAMA/assets/images/scientists/hodgkin_lux.jpg');
