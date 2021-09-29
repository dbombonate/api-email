require('dotenv').config();

const mailFrom = process.env.MAIL_FROM;
const mailTo = process.env.MAIL_TO;

module.exports = {
    mailFrom,
    mailTo
}