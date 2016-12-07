'use strict';

const app = require('./app');
const host = process.env.CHAT_HOST || app.get('host');
const port = process.env.CHAT_PORT || app.get('port');
const server = app.listen(port);

server.on('listening', () =>
  console.log(`Listening on ${app.get('host')}:${port}`)
);
