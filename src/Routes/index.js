const { Router } = require('express');
const routes = new Router();

const mailController = require('../Controllers/index');
//const filialController = require('../Controller/filialController');
//const produtoController = require('../Controller/produtoController');

routes.get('/', mailController.getRoute);
routes.post('/email', mailController.enviaMail);

module.exports = routes;