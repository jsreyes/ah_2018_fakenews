'use strict'

const fs = require('fs');

let rawInfo = fs.readFileSync('info.json');  
let info = JSON.parse(rawInfo);  
let rawFuentes = fs.readFileSync('fuentes.json');  
let fuentes = JSON.parse(rawFuentes);  
console.log(info.articulo);  
console.log("y ahora fuentes");
console.log(fuentes[1].nombre);  