'use strict'

var app = require('./app');

var port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log('Router running on '+port+' port');
})