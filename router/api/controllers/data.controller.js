'use strict'

var articulo = require('../models/articulo.model');
var utils = require('../utils');

//este controlador funciona para hacer peticiones hacia y desde el front end de la aplicación

function getAll(req,res){
  res.status(200).send({message: 'OK',status:200})
}

function postArticulo(req,res){
  var params = req.body;
  console.log("post with: ",params);
  articulo.articulo = params.articulo;
  articulo.pais = params.pais;

  if(!utils.compararLlaves(params,articulo)){
    res.status(500).send({message: 'La estructura del archivo no coincide',status:500})
  }else{
    if(articulo.articulo && articulo.pais){
      res.status(200).send({message: 'Articulo enviado correctamente',status:200})
    }else if(!articulo.articulo){
      res.status(500).send({message: 'No se ha enviado el contenido del articulo',status:500})
    }else{
      res.status(500).send({message: 'No se ha enviado el país de procedencia del articulo',status:500})
    }
  }
}

module.exports = {
    postArticulo,
    getAll
  }