'use strict';

module.exports = (sequelize, DataTypes) => {
  var Event = sequelize.define('Event', {
    name: DataTypes.STRING,
    picture: DataTypes.STRING,
    description: DataTypes.TEXT,
    date: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
          Event.hasMany(models.Picture, {as: "Pictures"});
      }
    },
    timestamps: false
  });

  return Event;
};
