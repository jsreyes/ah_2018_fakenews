'use strict'

var articulo = require('../models/articulo.model');
var utils = require('../utils');

//este controlador funciona para hacer peticiones hacia y desde el Natural Language Understanding de IBM

function enviarArticulo(req,res){
  var params = req.body;
  var ml;
  var respuesta = {
    porcentaje : 5,
    articulo: [],
    keywordsArticulo: [],
    infoScrapper: []
  }
  ml = machineLearningService.postArticulos((resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      console.log(JSON.parse(data));
      res.status(200).send({ message: data, status: 200 })
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
    return err
  })
}

module.exports = {
  enviarArticulo
  }