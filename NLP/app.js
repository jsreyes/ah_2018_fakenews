'use strict'

var express = require('express')

var app = express()

var machinelRoutes = require('./routes/machinelRoutes')

app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
    next()
})

app.use('/api/ml', machinelRoutes)

app.use(function (err, req, res, next) {
    if (err) {
        console.log(err)
        res.status(err.status).send(err.message)
    }
})

module.exports = app