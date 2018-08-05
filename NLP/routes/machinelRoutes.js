'use strict'

var express = require('express')
var puntajeNoticia = require('../controllers/puntajeNoticia')

var api = express.Router()

api.get('/machinel', puntajeNoticia.machinel)

module.exports = api