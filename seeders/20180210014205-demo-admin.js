'use strict';

const bcrypt = require('bcrypt');
require('dotenv').load();

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Admins', [{
        login: process.env.ADMIN_LOGIN,
        password: bcrypt.hashSync(process.env.ADMIN_PWD, 10)
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Admins', null, {});
  }
};
