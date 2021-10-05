const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const winston = require('./Services/winston');
const routes = require('./Routes/index');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('combined', { stream: winston.stream}));
app.use(routes);

module.exports = app;
