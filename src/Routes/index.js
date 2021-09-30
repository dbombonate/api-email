const { Router } = require('express');
const routes = new Router();

const mailController = require('../Controllers/MailController');

routes.get('/', mailController.getRoute);
routes.post('/email', mailController.enviaMail);

module.exports = routes;