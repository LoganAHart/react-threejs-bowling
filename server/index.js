const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const debug = require('debug')('app:*');

const name = 'React-Bowling';

debug(`booting %o ${name}`);

const app = express();

app.use(morgan('combined'));

app.use(bodyParser.json({ type: '*/*' }));

app.use(express.static(path.join(__dirname, '../public')));

const port = process.env.PORT || 3011;

const server = http.createServer(app);
server.listen(port, () => {
  debug(`${name} listening on port: ${port}`);
});
