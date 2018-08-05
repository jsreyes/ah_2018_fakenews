'use strict'

var articulo = require('../models/articulo.model');
var utils = require('../utils');
var scraper = require('../controllers/scraper.controller')

//este controlador funciona para hacer peticiones hacia y desde el front end de la aplicación

function getAll(req,res){
  res.status(200).send({message: 'OK',status:200})
}

function postArticulo(req,res){
  var params = req.body;
  //params = JSON.parse(params);
  //articulo.articulo = params.articulo;
  //articulo.pais = params.pais;
  res.status(200).send({porcentaje:0.18,status:200})
  console.log("post on data with: ", params);
  
    if(articulo.articulo && articulo.pais){
      res.status(200).send({message: 'Articulo enviado correctamente',status:200})
    }else if(!articulo.articulo){
      res.status(500).send({message: 'No se ha enviado el contenido del articulo',status:500})
    }else{
      res.status(500).send({message: 'No se ha enviado el país de procedencia del articulo',status:500})
    }
}

module.exports = {
    postArticulo,
    getAll
  }