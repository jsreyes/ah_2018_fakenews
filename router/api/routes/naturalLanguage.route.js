'use strict';

var express = require('express');
var naturalLanguageController = require('../controllers/naturalLanguage.controller');

var api = express.Router();

api.post('/enviar-articulo', naturalLanguageController.enviarArticulo);


module.exports = api;