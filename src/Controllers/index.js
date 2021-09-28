const nodemailer = require('nodemailer');
const remetente = require('../Mail/config');
//import { mailFrom, mailTo } from '../Mail/recipients';
const { mailTo, mailFrom } = require('../Mail/recipients');

class MailController {

  enviaMail(req, res) {

    const { name, phone, cpf, anonimationType } = req.body;
    if (!name || !phone || !cpf || !anonimationType) return res.status(400).send({
      message: 'Verifique os dados enviados'
    });
  
    const emailASerEnviado = {
      from: mailFrom,
      to: mailTo,
      subject: 'Anonimização de cliente',
      text: `Olá, estamos notificando que o cliente ${name}, portador do CPF ${cpf} solicitou 
      a exclusão de seus dados da base de dados do Santo Supermercados.`
    };

    remetente.sendMail(emailASerEnviado, function (error) {
      if (error) {
        console.log(error);
      } else {
        return res.status(200).send({
          message: 'Sua solicitação foi enviada com sucesso!'
        });
      }
    });
  }

  getRoute(req, res) {
    return res.send({
      message: 'API Santo Supermercados LGPD'
    });
  }

}


const mailController = new MailController();

module.exports = mailController;
