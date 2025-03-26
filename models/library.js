'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class library extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  library.init({
    libraryId: {
      type:DataTypes.STRING,
      primaryKey:true
    },
    libraryName:{
      type:DataTypes.STRING,
      allowNull:false
    },
    staffCount:{
      type:DataTypes.INTEGER,
      allowNull:false
    }, 
    address: {
      type:DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'library',
    timestamps:false
  });
  return library;
};