const express = require("express");
 const UserController = require("./src/controllers/UserController");
 const PostsController = require("./src/controllers/PostagensController");
const routes = express.Router();





//ROTAS FRONT END 
routes.get('/home', (req, res) =>{
    res.render("pages/home");
});

routes.get('/usuarios',(req, res) =>{
    res.render("pages/usuarios",
    {usuarios:[ 
        {name:"Aderbal Loxist", email:"aderbal@yahoo.com"},
        {name: "Pedrovilox jubeta", email:"pedrovolox21@hotmail.com.br"},
        {name:"Luzivaldo torrito", email:"luzivaldo787@gmail.com"}
    ]}) 
});

//criando rotas pra cria usuario
routes.get('/criausuario', (req, res)=>{
    res.render("pages/criausuarios")
})
routes.post('/criausuario', (req, res) =>{
    console.log(`Nome ${req.body.name} - Email ${req.body.email}`)
})


// habilitar arquvos estaticos do nosso projeto
routes.use(express.static(__dirname + "/public"));




//ROTAS BECK END
routes.get("/", UserController.index);

routes.post("/users", UserController.sotre);

routes.put("/users/:user_id", UserController.update);

routes.delete("/users/:user_id", UserController.delete);


// ROTAS POSTAGENS



module.exports = routes;