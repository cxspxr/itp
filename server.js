const express = require('express');
const serveStatic = require('serve-static');
const compression = require('compression');
const port = process.env.PORT || 3000;
const domain =  process.env.DOMAIN;
const models = require('./models');
const router  = express.Router();
const path = require('path');

function ensureDomain(req, res, next) {
  if (!domain || req.hostname === domain) {
    return next();
  };

  res.redirect(`http://${domain}${req.url}`);
};

const app = express();

app.all('*', ensureDomain);
app.set('views', 'dist');
app.set('view engine', 'pug');

router.get('/', function(req, res) {
  models.Event.findAll({
      include: [models.Picture]
  }).then(function(events) {
    res.render('index', {
      events: events
    });
  });
});

app.use('/', router);
app.use(express.static(__dirname + '/dist'));

app.use(compression());

app.listen(port, () => {
  console.log('Server running...');
});
