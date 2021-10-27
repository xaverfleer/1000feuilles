const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = {
  sendEmail(message) {
    const messageWithSender = {
      ...message,
      from: "formulaire@aux1000feuilles.ch",
    };
    return sgMail.send(messageWithSender);
  },
};
