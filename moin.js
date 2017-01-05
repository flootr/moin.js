'use strict';

const micro = require('micro');

const server = micro(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify('moin'));
});

server.listen(3000);

