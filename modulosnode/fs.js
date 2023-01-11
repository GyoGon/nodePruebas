//codigo asincrono, funciones de file system
const fs = require ('fs');
            //'./texto.txt' = directorio, archivo, formato , 'linea uno' = contenido, function(err) = una vez creado el archivo se realiza la funcion de manera asincrona
if (fs.existsSync('./texto.txt' )){
    console.log('el archivo ya fue creado');
}
else {
fs.writeFile('./texto.txt', 'isidorita, te amo muchito', function(err){
    if (err){
        console.log(err);
    }
    console.log('archivo creado')
})
}


console.log('ultima linea de codigo')

/*
linea sincrona, se espera a la respuesta 
const users = query('SELECT * FROM Users')
luego se realizaria la funcion = +lento y problematico
function (err, users){
    if (err){
        console.log(err)
    }
}
*/



/*
query en formato asincrono
query('SELECT * FROM Users', function (err, users){
    if(err){
        console.log(err)
    }
    if (users){
        
    }
})
*/

fs.readFile('./texto.txt', function (err, data){
    if (err){
        console.log(err);
    }
    console.log(data.toString());
})