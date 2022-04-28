'use strict';

const {  Model  } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate(models) {

      this.belongsTo(models.Role);
      this.belongsTo(models.Address);

    }
  };

  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    AddressId: DataTypes.INTEGER,
    RoleId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  
  return User;
};