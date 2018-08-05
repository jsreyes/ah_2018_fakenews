'use strict'

const fs = require('fs');
var arrayList = require('array-list')

let info;
let fuentes;
let puntajeFinal;
let puntajesUnicos;
let arregloPuntaje = arrayList();

function cargueVariables(){
    let rawInfo = fs.readFileSync('info.json');  
    info = JSON.parse(rawInfo);  
    let rawFuentes = fs.readFileSync('fuentes.json');  
    fuentes = JSON.parse(rawFuentes);  
    console.log(info.articulo);  
    console.log("y ahora fuentes");
    console.log(fuentes[1].nombre);
}  

function compararFuentes(){
    cargueVariables();
    var count = Object.keys(info.infoScraper).length;
    console.log("Cuenta: "+count);
    info.infoScraper.forEach(elemento => {
        console.log("Soy el elemento parcero: "+ elemento.url)    
        fuentesConfiables(elemento.url);    
    });
}

function fuentesConfiables(url){
    fuentes.forEach(elemento => {
        if(url.indexOf(elemento.url)>=0){
            console.log("Hice match con: "+url+" y el elemento "+elemento.url);
            asignarPuntajes(elemento.tipo);
        }
        }
    );
}

function asignarPuntajes(tipoFuente){
    switch(tipoFuente){
        case "confiable":
            break;
        case "falsa":
            break;
    }
}

function machinel(req, res) {
    compararFuentes();
    res.status(200).send({

        message: info.articulo
    })
}

// Metodo privados

module.exports = {
    machinel
}