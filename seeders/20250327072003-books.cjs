'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('book',[
      // {
      //   libraryId:"L001",
      //   libraryName:"Modern Library",
      //   staffCount:20,
      //   address:"123,Anna Nagar"
      // },{
      //   libraryId:"L002",
      //   libraryName:"Old Library",
      //   staffCount:100,
      //   address:"Red Town"
      // }
      {
        bookId:"B001",
        bookName:"A Tale of Two Cities",
        genre:"fiction",
        price:100,
        libraryId:"L001"
      },{
        bookId:"B002",
        bookName:"Harry Potter",
        genre:"fantasy",
        price:250,
        libraryId:"L001"
      },{
        bookId:"B003",
        bookName:"5AM Club",
        genre:"self help",
        price:180,
        libraryId:"L002"
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('book',null,{});
  }
};
