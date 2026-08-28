'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.addColumn('products','category_id', { 
      type:Sequelize.INTEGER,
      references:{
        model:'categories', // o id id da minha tabela vai ser referenciado aqui no meu campo id da tabela de produtos
        key:'id',
      },
      oneUpdate: 'CASCADE', // cause um efeito em cascata de atualizou minha categoria voçe atualiza aqui também
      onDelete: 'SET NULL',//  se deletar a categoria o campo category_id vai ser setado como null
    });
     
  },

  async down (queryInterface) {
      await queryInterface.removeColumn('products' , 'category_id');
     
  }
};
