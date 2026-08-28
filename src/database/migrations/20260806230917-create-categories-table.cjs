'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('categories', { 
     id: {
        type:Sequelize.INTEGER, // cria uma sequencia que os produtos são  criados
        allowNull:false,
        primaryKey:true,
        autoIncrement:true, // coloa a sequencia de forma automatica
   },

    name:{
      type:Sequelize.STRING,
       allowNull:true,
       unique:true,// garante que não aja duas categorias com mesmo nome
    },
     created_at:{
      type:Sequelize.DATE,
      allowNull:false,
    },
    updated_at:{
      type:Sequelize.DATE,
      allowNull:false,
    }
    });
     
  },

  async down (queryInterface) {
     await queryInterface.dropTable('categories');
     
  }
};
