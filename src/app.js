'use strict';

const path = require('path');
const serveStatic = require('feathers').static;
const favicon = require('serve-favicon');
const compress = require('compression');
const feathers = require('feathers');
const configuration = require('feathers-configuration');
const hooks = require('feathers-hooks');
const rest = require('feathers-rest');
const bodyParser = require('body-parser');
const socketio = require('feathers-socketio');

const middleware = require('./middleware');
const services = require('./services');

const app = feathers();
const conf = configuration(path.join(__dirname, '..'));

app.configure(conf);
app.use(compress())
  .use(function(req, res, next) {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'Deny');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    next();
  })
  .use(favicon(path.join(app.get('public'), 'favicon.ico')))
  .use('/', serveStatic( app.get('public') ))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .configure(hooks())
  .configure(rest())
  .configure(socketio())
  .configure(services)
  .configure(middleware);

module.exports = app;
