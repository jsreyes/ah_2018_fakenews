const https = require('https');


function postArticulos(fnGet) {
    return https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', fnGet);
}

module.exports = {
    postArticulos
}