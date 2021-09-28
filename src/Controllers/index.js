class MailController {
    envia(req, res) {
      res.send('API Envia Email LGPD Santo Supermercados')
    }
  
    
  } 
  
  const mailController = new MailController()
  
  module.exports = mailController
