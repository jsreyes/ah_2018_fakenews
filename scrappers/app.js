'use strict'

var express = require('express')

var app = express()

// cargar rutasT
var scraperRoutes = require('./routes/scraperRoutes')

// middlewares


// configurar cabeceras y cors
app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
    next()
})

// rutas
app.use('/api/scraper', scraperRoutes)

// configurar errores
app.use(function (err, req, res, next) {
    if (err) {
        console.log(err)
        res.status(err.status).send(err.message)
    }
})

module.exports = app