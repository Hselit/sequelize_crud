'use strict';

import { Model,DataTypes } from 'sequelize';

export default (sequelize) => {
  class library extends Model {
    
    static associate(models) {
      library.hasMany(models.book,{
        foreignKey:'libraryId'
      });
    }
  }
  library.init({
    libraryId: {
      type:DataTypes.STRING,
      primaryKey:true,
      allowNull:false
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
    timestamps:false,
    tableName:"library",
    modelName:"library"
  });
  return library;
};