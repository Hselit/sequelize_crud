'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('library', {
      libraryId: {
        type: Sequelize.STRING,
        primaryKey:true,
        allowNull:false
      },
      libraryName: {
        type: Sequelize.STRING,
        allowNull:false
      },
      staffCount: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      address: {
        type: Sequelize.STRING,
        allowNull:false
      }
    },{
      timestamps:false
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('library');
  }
};