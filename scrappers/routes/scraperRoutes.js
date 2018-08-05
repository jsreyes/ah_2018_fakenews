'use strict'

var express = require('express')
var scraperController = require('../controllers/scraperController')

var api = express.Router()

api.get('/pruebas', scraperController.pruebas)

module.exports = api