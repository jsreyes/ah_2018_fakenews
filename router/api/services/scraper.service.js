const https = require('https');

function postArticulos(fnGet) {
    return https.post('192.168.20.174:3189/api/scraper/scraper', fnGet);
}

module.exports = {
    postArticulos
}