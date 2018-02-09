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

    }
  });

  Event.associate = function(models) {
      Event.hasMany(models.Picture, {foreignKey: 'event_id'});
  }
  Event.prototype.getShort = function() {
      return this.description.substring(0, 50);
  }

  return Event;
};
