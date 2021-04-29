const express = require("express");
const routes = require('./routes')
const app = express();

const port = 3333;

//preciso trazer meu database para o app pai
require('./src/database');

//para minha apicacao trabalha com arquivos JSON
app.use(express.json());


//usar o req.body
app.use(express.urlencoded({extended: true}))

//vamos usar nosso EJS para comfigura nosso EJS funcaoo set() para seta uma congi
app.set("view engine", "ejs");


//usando nossas rotas sempre a penultima
app.use(routes)

//criando nosso servidor
app.listen(port, ()=>{
    console.log("Start is Runing !")
})