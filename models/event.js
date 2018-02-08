'use strict';

module.exports = (sequelize, DataTypes) => {
  var Event = sequelize.define('Event', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    date: DataTypes.DATE,
    timestamps: false
  }, {
    classMethods: {
      associate: function(models) {
          Event.hasMany(models.Picture, {as: "Pictures"});
      }
    }
  });

  return Event;
};
