const nodemailer = require('nodemailer');
const remetente = require('../Mail/config');
const { mailTo, mailFrom } = require('../Mail/recipients');

class MailController {

  enviaMail(req, res) {

    const { name, phone, cpf, anonimationJustify } = req.body;
    if (!name || !phone || !cpf || !anonimationJustify) return res.status(400).send({
      message: 'Verifique os dados enviados'
    });
  
    const emailASerEnviado = {
      from: mailFrom,
      to: mailTo,
      subject: 'Anonimização de cliente',
      text: `
      Olá, estamos notificando que o cliente ${name}, portador do CPF ${cpf} solicitou 
      a exclusão de seus dados da base de dados do Santo Supermercados.

      Justificativa: ${anonimationJustify}

      Providenciar a exclusão de seus dados de todos os sistemas que possuem seu cadastro.
      `
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
      message: 'API email anonimização LGPD'
    });
  }

}


const mailController = new MailController();

module.exports = mailController;
