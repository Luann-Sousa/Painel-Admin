//TRAZENDO NOSO MODELO..
const Postagens = require("../models/Postagens");


// CRIANDO NOSSO CONTROLLER DE POSTAGENS E JA EXPORTANDO..

module.exports = {
    //Methodo Http -> GET

    async index(req, res){
        //uma consta para armazenar nossas postagens
        const postagens = await Postagens.findAll();

        //agr vamos vereficar
        if(postagens == ""){
            return res.status(200).send({message: "Oops! we could not find any users in the database."})
        }
        //casso exita postagens na base 
        return res.status().send({postagens})
    },
  
}

