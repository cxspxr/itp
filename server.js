const express = require('express');
const serveStatic = require('serve-static');
const compression = require('compression');
const port = process.env.PORT || 3000;
const domain =  process.env.DOMAIN;
const models = require('./models');
const path = require('path');
const router = require('./routes.js');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').load();

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

app.use('/', router);
app.use(express.static(__dirname + '/dist'));

app.use(session({
  secret: process.env.SESSION_KEY,
  resave: true,
  saveUninitialized: false
}));

app.use(compression());
app.use(express.urlencoded());
app.use(bodyParser());
app.use(cookieParser());

models.sequelize.sync().then(function() {
    app.listen(port, () => {
      console.log('Server running...');
    });
});
