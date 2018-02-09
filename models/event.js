'use strict';

module.exports = (sequelize, DataTypes) => {
  var Event = sequelize.define('Event', {
    name: DataTypes.STRING,
    picture: DataTypes.STRING,
    description: DataTypes.TEXT,
    date: DataTypes.DATE
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
          Event.hasMany(models.Picture, {as: "Pictures"});
      }
    }
  });

  Event.prototype.getShort = function() {
      return this.description.substring(0, 50);
  }

  return Event;
};
