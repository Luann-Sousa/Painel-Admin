'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
     return queryInterface.createTable('postagens',{ 
       id:{
         type: Sequelize.INTEGER,
         primaryKey: true,
         allowNuul: false,
       },
       title:{
         type: Sequelize.STRING,
         allowNuul:false,
       },
       conteudo:{
        type:Sequelize.STRING,
        allowNuul:false
       },
       create_at:{
         type: Sequelize.DATE,
         allowNuul:false,
       },
       update_at:{
        type: Sequelize.DATE,
        allowNuul:false
       }


      });
    
  },

  down: async (queryInterface, Sequelize) => {
   
    return queryInterface.dropTable('postagens');
  
  }
};
