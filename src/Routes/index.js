const { Router } = require('express');
const routes = new Router();

const mailController = require('../Controllers/index');

routes.get('/', mailController.getRoute);
routes.post('/email', mailController.enviaMail);

module.exports = routes;