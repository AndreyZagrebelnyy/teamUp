const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.mail.ru',
  port: 465,
  secure: true,
  auth: {
    user: 'adm_lanrey@bk.ru',
    pass: 'A1vfr0qk6b6Urm4QqVDV',
  },
  from: 'VendorHub Company <adm_lanrey@bk.ru>',
  tls: {
    rejectUnauthorized: false,
  },
});

const mailer = (message) => {
  transporter.sendMail(message, (err, info) => {
    if (err) {
      return console.log('ERRRRRRRRROR=================>', err);
    }

    return console.log(
      'Email sent===================================>: ',
      info
    );
  });
};

module.exports = mailer;
