'use strict'
// Modulos

// Modelos

// Servicios

// Metodos publicos
function pruebas(req, res) {
    res.status(200).send({
        message: 'Prueba api'
    })
}

// Metodo privados

module.exports = {
    pruebas
}