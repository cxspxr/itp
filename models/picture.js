'use strict';

module.exports = (sequelize, DataTypes) => {
  var Picture = sequelize.define('Picture', {
    path: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return Picture;
};
