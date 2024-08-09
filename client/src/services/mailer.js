import nodemailer from 'nodemailer';

// Создание транспортера

const testAccount = await nodemailer.createTestAccount()

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: testAccount.user,
    pass: testAccount.pass, // Внимание: храните пароли безопасно, используйте переменные окружения
  },
});

// Настройка сообщения
// const message = `<h1>ПРИВЕТ ДРУГ </h1>`;
// const mailOptions = {
//   from: 'odyakonov0@gmail.com',
//   to: 'odyakonov0@gmail.com',
//   subject: 'Hello duduk',
//   html: message,
// };

const result = await transporter.sendMail({
  from: '"Node js" <swaronworld2@mail.ru>',
  to: 'swaronworld2@mail.ru',
  subject: 'Message from Node js',
  text: 'This message was sent from Node js server.',
  html:
      'This <i>message</i> was sent from <strong>Node js</strong> server.',
});

console.log(result);

// // Отправка сообщения
// transporter.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     return console.log('Error while sending mail: ', error);
//   }
//   console.log(`Email sent: ${info.response}`);
// });
