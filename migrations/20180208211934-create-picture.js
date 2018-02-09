'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Pictures', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      path: {
        type: Sequelize.STRING
      },
      event_id: {
            type: Sequelize.INTEGER,
            references: {
                model: "Events",
                key: "id"
            }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Pictures');
  }
};
