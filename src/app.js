const express = require('express');
const routes = require('./Routes/index');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

module.exports = app
