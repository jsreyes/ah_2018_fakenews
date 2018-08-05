'use strict';

var express = require('express');
var naturalLanguageUnderstandingController = require('../controllers/naturalLanguageUnderstandingController');

var api = express.Router();

api.get('/get-all', naturalLanguageUnderstandingController.getAll);
api.post('/enviar-articulo', naturalLanguageUnderstandingController.postArticulo);


module.exports = api;