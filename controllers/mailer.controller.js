/* 2do en los controladores organizamos las respuestas del Server hacia los CLientes */
const { transporter, sendEmail } = require("../mailer/mailer.js");

exports.sendMail = async (req, res, next) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      status: "fail",
      message: "Faltan Campos",
    });
  }

  try {
    await sendEmail(name, email, message);
    res.status(200).json({
      status: "Mail enviado",
      name,
      email,
      message,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      status: "fail",
      message: "Unable to send mail",
    });
  }
};
