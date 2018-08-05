'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargando rutas
var naturalLanguageUnderstanding = require('./api/routes/routes');

app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
    next()
})

app.use(bodyParser.urlencoded({extended:false}));

app.use('/api', naturalLanguageUnderstanding);

app.use(bodyParser.json());

app.use(function (err, req, res, next) {
    if (err) {
        console.log(err)
        res.status(err.status).send(err.message)
    }
})

module.exports = app;