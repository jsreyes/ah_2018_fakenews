'use strict';

var express = require('express');
var dataController = require('../controllers/data.controller');

var api = express.Router();

api.post('/enviar-articulo', dataController.postArticulo);
api.get('/getAll', dataController.getAll)

module.exports = api;