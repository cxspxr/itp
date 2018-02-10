const express = require('express');
const models = require('./models');
const router  = express.Router();

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

module.exports = router;
