//servidor en node
// const http = require('http');
// //servidor node
// const server = http.createServer((req, res) => {
//     res.status = 200;
//     res.setHeader('Content-type', 'text/plain');
//     res.end('Hello world');
// });

// server.listen(3000, () => {
//     console.log('server on port 3000');
// }) 

//servidor en express
const express = require('express')

const app = express();
//setings
//  nombre variable , valor
app.set('appName', 'XD');
app.set('port', 3000);
app.set('view engine', 'ejs')
//middelware morgan
const morgan = require('morgan')
//middleware
function logger(req, res, next){
    console.log(`Route received: ${req.protocol}://${req.get('host')}${req.originalUrl}`);

    next();
}
//rutes

//hace que express pueda leer json, middelware siempre se usa con app.use
app.use(express.json());
//app.use(logger);
app.use(morgan('dev'));

// all pasa por todas las rutas /user, utiliza next que le da el paso a la siguiente ruta
app.all('/user', (req, res, next) => {
    console.log('por aqui paso');
//    res.send('finish');
    next();
})
app.get('/', (req, res) => {
    //especie bdd
    const data = [{name:'jhon'},{name:'joe'},{name:'cameron'}, {name:'juan'}];
    res.render('index.ejs', {people: data})
})
app.get('/user', (req, res) =>{
    res.json({
        username: 'luffy',
        lastname: 'monkey'
    });
})
app.post('/user/:id', (req, res) =>{
//  lo q recibe los datos del frontend, permite obtener la info
    console.log(req.body)
//  parametro de la peticion, se le acredita el id (parametro = ':')
    console.log(req.params)
    res.send('peticion post recivida')
})
app.put('/user/:id', (req, res) =>{
    console.log(req.body);

    res.send(`User ${req.params.id} updated`)
})
app.delete('/user/:userId', (req, res) =>{
// se concatena con el parametro a travez de ${}, se usan comillas de js
    res.send(`User ${req.params.userId} deleted`)
})

//middelware static, pasa al final,luego de las rutas, utiliza la carpeta public
app.use(express.static('public'));

app.listen(app.get('port'), () => {
    console.log(app.get('appName'));
    console.log('server on port', app.get('port'));
})