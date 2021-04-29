//IMPORTANDO E DESESTRUTURANDO DE DENTRO DO SEQUELIZE OS SEGUINTES CARAS Model e DataTyes  de Sequelize
const {Model, DataTypes} = require("sequelize");


//AGORA CRIAR NOSSO MODEL PARA COMUNICAR COM O NOSSO BANCO DE DADOS...
class Postagens extends Model {
 static(sequelize){
     super.init({
         title: DataTypes.STRING,
         conteudo: DataTypes.STRING
     }, {sequelize})
 }
}

//exportando nosso Model de Postagens
module.exports = Postagens;