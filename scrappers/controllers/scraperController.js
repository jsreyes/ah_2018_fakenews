'use strict'
// Modulos
var spawn = require("child_process").spawn;
var pathPy = "../Scraper/GoogleScraper.py";
// Modelos

// Servicios

// Metodos publicos
function pruebas(req, res) {
    res.status(200).send({
        message: 'Prueba api'
    })
}

function scraper(req, res) {
    var params = req.body;
    var entitiesArg = [];
    params.entities = [
        {
            "type": "Person",
            "text": "Claudia Merlano",
            "relevance": 0.954265,
            "count": 1
        },
        {
            "type": "Person",
            "text": "Gustavo Petro",
            "relevance": 0.890916,
            "disambiguation": {
                "subtype": [
                    "Politician"
                ],
                "name": "Gustavo_Petro",
                "dbpedia_resource": "http://dbpedia.org/resource/Gustavo_Petro"
            },
            "count": 1
        },
        {
            "type": "Quantity",
            "text": "23 años",
            "relevance": 0.713691,
            "count": 2
        },
        {
            "type": "Person",
            "text": "señor Gustavo Petro",
            "relevance": 0.338908,
            "count": 1
        },
        {
            "type": "Organization",
            "text": "Administración de empresas",
            "relevance": 0.04306,
            "count": 1
        }
    ];
    params.fuentes = ["elespectador.com"];

    var isValid = validateParm(params)

    if (isValid.length <= 0) {
        params.entities.forEach(element => {
            console.log(element.text);
            entitiesArg.push(element.text);
        });
        // var entitiesArg = params.entities.map(entite => ({ text: entite.text }));
        var fuentesArg = params.fuentes;
        console.log(entitiesArg);
        console.log(fuentesArg);

        const pythonProcess = spawn('python', [pathPy, entitiesArg, fuentesArg]);

        pythonProcess.stdout.on('data', (data) => {
            // Do something with the data returned from python script
        });
    }

    res.status(200).send({
        message: 'Prueba Scraper'
    })
}

// Metodo privados
function validateParm(params) {
    var errors = [];
    console.log(errors);
    if (!params.entities) {
        errors.push('Entities son obligatorios');
    }
    if (!params.fuentes) {
        errors.push('Fuentes son obligatorias');
    }

    return errors;
}

module.exports = {
    pruebas,
    scraper
}