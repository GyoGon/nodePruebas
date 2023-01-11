const express = require('express');
const colors = require('colors');
const server = express();
//        requerido directorio
server.get('/', function(req, res){
    res.send('<h1>hola mundo </h1>')
})
server.listen(3000, function(){
    console.log('server on port 3000'.red);
})