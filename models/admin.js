'use strict';

const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  var Admin = sequelize.define('Admin', {
    login: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
      timestamps: false,
      classMethods: {
        isValidPassword: (password, pwd, done, admin) => {
          bcrypt.compare(password, pwd, function(err, isMatch) {
             if (err) console.log(err);
             if (isMatch) {
                 return done(null, admin);
             } else {
                 return done(null, false);
             }
          });
        }
      }
  });
  return Admin;
};
