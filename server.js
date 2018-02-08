const express = require('express');
const serveStatic = require('serve-static');
const compression = require('compression');
const port = process.env.PORT || 3000;
const domain =  process.env.DOMAIN;
const models = require('./models');

function ensureDomain(req, res, next) {
  if (!domain || req.hostname === domain) {
    return next();
  };

  res.redirect(`http://${domain}${req.url}`);
};

const app = express();

app.all('*', ensureDomain);

app.use(compression());

app.use(serveStatic(`${__dirname}/dist`, {'extensions': ['html']}));

models.sequelize.sync().then(function() {
    app.listen(port, () => {
      console.log('Server running...');
    });
});
