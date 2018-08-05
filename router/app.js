'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargando rutas
var dataRoutes = require('./api/routes/data.route');
var naturalLanguageController = require('./api/routes/naturalLanguage.route');

app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
    next()
})

app.use(bodyParser.urlencoded({extended:false}));

app.use('/api/natural-language', naturalLanguageController);
app.use('/api/data', dataRoutes);


app.use(bodyParser.json());

app.use(function (err, req, res, next) {
    if (err) {
        console.log(err)
        res.status(err.status).send(err.message)
    }
})

module.exports = app;