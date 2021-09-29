require('dotenv').config();
const nodemailer = require('nodemailer');

const remetente = nodemailer.createTransport({
    host: process.env.SERVICE,
    service: process.env.SERVICE,
    port: 587,
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
    },
    tls: {
        ciphers: 'SSLv3'
    }
});

module.exports = remetente;