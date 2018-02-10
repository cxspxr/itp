const express = require('express');
const models = require('./models');
const router  = express.Router();
const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');


router.get('/', function(req, res) {
  models.Event.findAll({
      include: [models.Picture],
      order: [['date', 'DESC']]
  }).then(function(events) {
    res.render('index', {
      events: events
    });
  });
});

router.post('/subscribe', [
    check('email')
        .isEmail()
        .withMessage('must be a valid email')
        .trim()
        .normalizeEmail()
        .custom(requestEmail => {
          return models.User.findOne({
              where: {
                  email: requestEmail
              }
          }).then(user => {
            if (user)
                throw new Error('this email is already in use');
          })
        }),
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.mapped() });
    }

    models.User.findOrCreate({
        where: {
            email: req.body.email
        },
        defaults: {
            name: req.body.name
        }
    }).then(() => {
        res.redirect('/');
    }).error((err) => {
        res.redirect('/');
    });
});

module.exports = router;
