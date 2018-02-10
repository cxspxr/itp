const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const models = require('../models');

passport.serializeUser((admin, done) => {
    done(null, admin);
});

passport.deserializeUser((admin, done) => {
    models.Admin.find({
        where: {
            id: admin.id
        }
    }).success((admin) => {
        done(null, admin);
    }).error((err) => {
        done(err, null);
    });
});


passport.use(new localStrategy(
    (login, password, done) => {
        models.Admin.find({
            where: {
                login: login
            }
        }).success((admin) => {
            pwd = admin ? admin.password : '';
            isMatch = models.Admin.validPassword(password, pwd, done, admin);
        });
    }
));
