'use strict'

var articulo = require('../models/articulo.model');
var utils = require('../utils');
var scraperLearningService = require('../services/scraper.service');

//este controlador funciona para hacer peticiones hacia y desde el scraper
function postArticulo(req,res){
  
  var ml;
  var respuesta = {
    porcentaje : 5,
    articulo: [],
    keywordsArticulo: [],
    infoScrapper: []
  }
  ml = scraperLearningService.postArticulos((resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      console.log(JSON.parse(data).explanation);
      res.status(200).send({ message: respuesta, status: 200 })
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
    return err
  })
}

module.exports = {
    postArticulo
  }