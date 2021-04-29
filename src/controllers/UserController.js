// CRIANDO NOSSO CONTROLLER DE USUARIO
const User = require('../models/User');

module.exports = {
    //BUSCAR*
    async index(req, res){
        const users = await User.findAll();
        //depois que buscou vou verifica
        if(users == "" || users == null){
            return res.status(200).send({message: "Oops! we could not find any users in the database."})
        }
        //caso tenha usuario na BD
        return res.status(200).send({ users })
        //console.log(user)

    },


     // CRIAR
    async sotre(req, res){
   
    //pegar os dados pelo corpo do boy e jogar em uma const
    const {name, password, email} = req.body;

    const user = await User.create({
        name: name,
        password: password,
        email: email
    });
    //tudo deu bom
    return res.status(200).send({
        status: 1,
        message: "Successful User !",
        user
    })
    },


     // ATUALIZA
    async update(req, res){
   

    const {name, password, email} = req.body;
    const {user_id} = req.params;

    await User.update({
        name, password, email
    }, {
        where:{
            id: user_id,
        }
    });
    //tudo deu bom
    return res.status(200).send({
        status: 1,
        message: "Success Update User !"
    })

    },

     //DELETA
    async delete(req, res){
   
    const {user_id} = req.params;
    await User.destroy({
        where:{
            id: user_id,
        }
    });
    //tudo deu bom
    return res.status(200).send({
        status: 1,
        message: "Delete is Success !"
    });

    },
}