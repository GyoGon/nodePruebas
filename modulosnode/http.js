const http = require('http');
const colors = require('colors');


                        //request, response
/*
http.createServer(function(req,res){
    res.writeHead(200, {'Content-type': 'text/html'})
    res.write('<h1> Hola mundo </h1>');
    res.end();
 //metodo selecciona puerto para ejectutar el server
}).listen(3000);
*/


//funcion respuesta
const handleServer = function(req, res){
    res.writeHead(200, {'Content-type': 'text/html'})
    res.write('<h1> error 404 jajjjj </h1>');
    res.end(); 
}

//   crea servidor, funcion a realizar, puerto
// http.createServer(handleServer).listen(3000);

//crear constante server, que utilice la funcion
const server = http.createServer(handleServer);
//realizar funcion
server.listen(3000, function(){
    console.log('Server on port 3000'.green);
});
