const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");
require("dotenv").config({
  path: __dirname + "/../.env",
});

const auth = {
  auth: {
    api_key: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  },
  
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = async ({ name, subject, email, message }, cb) => {
  const mailOptions = {
    from: `${name}  <${email}>`,
    to: process.env.RECEIVER_EMAIL_NAME,
    subject: subject,
    text: message,
  };

  await transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      cb(err, null);
    }
    cb(null, data);
  });

};

module.exports = sendMail;
