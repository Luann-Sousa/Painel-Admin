//importando nosso sequelize pra testar a conexao
const Sequelize = require('sequelize');

//trazendo nossa configuração do nosso banco
const dbConfig = require('../config/database');

//fazendo a conexao com o BD   e passo as nossa dbconfig
const connection = new Sequelize(dbConfig)


//preciso trazer o Model de User
const User = require('../models/User');

//para comunicar meu User com O meu BD com
User.init(connection);


  //exportar connection caso quiremos usar em outro lugar
module.exports = connection;