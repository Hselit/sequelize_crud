'use strict';
import { Model,DataTypes } from 'sequelize';

export default (sequelize) => {
  class book extends Model {
  
    static associate(models) {
      book.belongsTo(models.library,{
        foreignKey:'libraryId'
      });
    }
  }
  book.init({
    bookId: {
      type:DataTypes.STRING,
      primaryKey:true
    },
    bookName: {
      type:DataTypes.STRING,
      allowNull:false
    },
    genre: {
      type:DataTypes.STRING,
      allowNull:false
    },
    price: {
      type:DataTypes.INTEGER,
      allowNull:false,
      defaultValue:0,
    },
    libraryId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
          model: 'library', // Ensure it matches the 'libraries' table name
          key: 'libraryId',
        },
    },
  }, {
    sequelize,
    timestamps:false,
    tableName:"book",
    modelName:"book"
  });
  return book;
};