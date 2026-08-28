'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    
      await queryInterface.removeColumn('products', 'category');
     
  },

  async down (queryInterface, Sequelize) {  //caso queira desfazer a alteraçaõ
     await queryInterface.addColumn('products' , 'category',{
      type:Sequelize.STRING,
      allowNull:true,
     });
     
  }
};
