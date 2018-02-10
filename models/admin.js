'use strict';

module.exports = (sequelize, DataTypes) => {
  var Admin = sequelize.define('Admin', {
    login: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
      timestamps: false,
      classMethods: {

      }
  });
  return Admin;
};
