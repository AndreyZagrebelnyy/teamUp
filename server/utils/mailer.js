const nodemailer = require("nodemailer");
require("dotenv").config();

async function sendRegistrationConfirmationEmail(toEmail) {
  // Создание транспортера
  let transporter = nodemailer.createTransport({
    host: "smtp.mail.ru",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Настройка письма
  let mailOptions = {
    from: `"Team Up" <${process.env.EMAIL_USER}>`,
    to: toEmail,
    subject: "Подтверждение регистрации вашей компании в Team Up",
    html: `
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              color: #333;
              background-color: #f9f9f9;
              margin: 0;
              padding: 20px;
            }
            .container {
              max-width: 600px;
              margin: auto;
              background-color: #fff;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            h1 {
              color: #007bff;
            }
            p {
              line-height: 1.5;
            }
            .footer {
              margin-top: 20px;
              font-size: 0.9em;
              color: #666;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Поздравляем, Спортсмен!</h1>
            <p>Благодарим вас за регистрацию вашей компании в системе Team Up.</p>
            <p>Ваша регистрация прошла успешно. Мы рады приветствовать вас в нашем сообществе.</p>
            <p>Если у вас возникли какие-либо вопросы или потребуется помощь, не стесняйтесь обращаться в нашу службу поддержки.</p>
            <p>С уважением,</p>
            <p>Команда Team Up</p>
            <div class="footer">
              <p>Team Up, ElbrusBootcamp, Лиговский 140 тц."ЭкоСтандарт"</p>
              <p>© 2024 Team Up. Все права защищены.</p>
            </div>
          </div>
        </body>
        </html>
      `,
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

module.exports = sendRegistrationConfirmationEmail;
