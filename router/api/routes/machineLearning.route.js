'use strict';

var express = require('express');
var machineLearning = require('../controllers/machineLearning.controller');

var api = express.Router();

api.get('/enviar-articulos', machineLearning.enviarArticulos);


module.exports = api;