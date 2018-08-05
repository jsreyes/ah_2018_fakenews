'use strict'

var app = require('./app');
var port = 3789;

app.listen(port, () => {
    console.log('El servidor nodeJS esta correindo...');
});