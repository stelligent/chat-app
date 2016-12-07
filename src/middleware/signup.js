'use strict';

function isValidEmail(email) {
  const regex = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
  return regex.test(email);
}

module.exports = function(app) {
  return function(req, res, next) {
    const body = req.body;

    if (!body ||
        !body.email ||
        !isValidEmail(body.email) ||
        !body.password) {

      // Just redirect on a bad request
      console.error('Username [%s] is invalid', body.email);
      res.redirect('/index.html');
    } else {
      console.info('Registering [%s]', body.email);
      // Get the user service and `create` a new user
      app.service('users').create({
        email: body.email,
        password: body.password
      })
      // Then redirect to the home page
      .then((user) => {
        res.redirect('/index.html');
      })
      // On errors, just call our error middleware
      .catch(next);
    }
  };
};
