/* const http = require('http');

const server = http.createServer((req,res)=>{
    res.status = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World');

});

server.listen(3000,()=>{

    console.log('Server on port 3000');

}) */


//Adquiriendo un modulo
const express = require('express');
const morgan= require('morgan');
//este es el servidor
const app = express();


//ejecutable antes de que llegiue a cualquier ruta
/* function logger(req, res,next){
    next();
    console.log(`Route Recibed: ${req.protocol}://${req.get('host')}${req.originalUrl}`)
} */



//middlewares se ejecutan dento de los app.use()
//para leer json recibidos primer middleware
app.use(express.json());
/* app.use(logger); */  
app.use(morgan('tiny'));

//all afecta a todos los router user
//next brinca a la sigiente res user
app.all('/user',(req,res,next)=>{
    console.log("por aqui paso");
    next();

});

app.listen(5000,() => {
    console.log("Serever on port 5000");
    
} )

//Multiples Ruta
app.get('/user', (req,res) => {
    //mandar un solo dato 
    //res.send("Cameron")
    res.json({
        "username": "cameron",
        "lastname": "havo"

    })
});


app.post('/user/:id',(req,res) => {
    //informacion del cliente o informacion que el navegador te esta enviando
    console.log(req.body);
    //para ver el parametro que se esta enviando desde la url 
    console.log(req.params);
    res.send("Peticion post recibida");

});
//dos puntos quiere decir que vamos a aceptar un parametro
app.delete('/user/:userId',(req,res) => {

    res.send(`User ${req.params.userId} deleted`);

});

app.put('/user/:id', (req,res) =>{
    console.log(req.body);
    res.send(`User ${req.params.id} actualizado`)
});

//middleware

