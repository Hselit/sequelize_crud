'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('book', {
      bookId: {
        type: Sequelize.STRING,
        primaryKey:true,
        allowNull:false
      },
      bookName: {
        type: Sequelize.STRING,
        allowNull:false
      },
      genre: {
        type: Sequelize.STRING,
        allowNull:false
      },
      price: {
        type: Sequelize.INTEGER,
        defaultValue:0
      },
      libraryId:{
        type:Sequelize.STRING,
        allowNull:false,
        references:{
          model:'library',
          key:'libraryId'
        }
      }
    },{
      timestamps:false
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('book');
  }
};