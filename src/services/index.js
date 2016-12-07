'use strict';

const message = require('./message');
const user = require('./user');
const authentication = require('./authentication');

module.exports = function() {
  const app = this;

  app.configure(authentication);
  app.configure(user);
  app.configure(message);
};
