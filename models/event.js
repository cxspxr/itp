'use strict';

const Picture = require('./picture.js');

module.exports = (sequelize, DataTypes) => {
  var Event = sequelize.define('Event', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    date: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  Event.hasMany(Picture, {as: 'Pictures'})

  return Event;
};
