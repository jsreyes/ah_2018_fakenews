'use strict'

const fs = require('fs');
var arrayList = require('array-list')

let info;
let fuentes;
let porcentajes;
let puntajeFinal=0;
let puntajesUnicos;
let arregloPuntaje = arrayList();
let count;

function cargueVariables(){
    let rawInfo = fs.readFileSync('info.json');  
    info = JSON.parse(rawInfo);  
    let rawFuentes = fs.readFileSync('fuentes.json');  
    fuentes = JSON.parse(rawFuentes);  
    let rawPorcentajes = fs.readFileSync('porcentajes.json');
    porcentajes = JSON.parse(rawPorcentajes);
}  

function compararFuentes(){
    cargueVariables();
    count = Object.keys(info.infoScraper).length;
    info.infoScraper.forEach(elemento => {    
        fuentes.forEach(elementourl => {
        if(elemento.url.indexOf(elementourl.url)>=0){
            elemento.puntaje=asignarPuntajesFuente(elementourl.tipo, 100/count, elemento.titulo);
            puntajeFinal = puntajeFinal + elemento.puntaje;
            }
        });   
    });
    return puntajeFinal;
}


function asignarPuntajesFuente(tipoFuente, porcentaje, tituloNoticia){
    switch(tipoFuente){
        case porcentajes.fuenteConfiable:
            if(tituloNoticia.indexOf(porcentajes.texto>=0))
                porcentaje = porcentajes.confiable;
            break;
        case porcentajes.fuenteNoConfiable:
            porcentaje = porcentajes.noconfiable;
            break;
        default:
            break;
    }
    return porcentaje;
}

function machinel(req, res) {
    var puntaje = compararFuentes();
    res.status(200).send({

        message: "El porcentaje de veracidad es del: "+puntaje+"%"
        
    })
}

module.exports = {
    machinel
}