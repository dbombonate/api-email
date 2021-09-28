const nodemailer = require('nodemailer');

const remetente = nodemailer.createTransport({
    host: 'smtp.kinghost.net',
    service: 'smtp.kinghost.net',
    port: 587,
    secure: false,
    auth: {
        user: 'contato@depsystems.com.br',
        pass: 'dcb!2012'
    }
});

module.exports = remetente;