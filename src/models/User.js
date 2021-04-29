//importando e desestruturando Model e Datatypes de dentro de sequelize
const {Model, DataTypes} = require('sequelize');

//craindo o model que vai se comunicar com o BD
class User extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            password: DataTypes.STRING,
            email: DataTypes.STRING,
        },{sequelize});
    }
}

module.exports = User;