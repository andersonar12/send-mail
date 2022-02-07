/* 1ero creamos las logicas que posteriormente seran asociadas en los controladores */
const nodemailer = require("nodemailer");

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "aromerocangri.14@gmail.com",
    pass: "ipyiukzluxabhzkp",
  },
});
//Contraseña de aplicacion Google Gmail -> Anderson
/* ipyiukzluxabhzkp */

const verifyUser = async () => await transporter.verify();

const sendEmail = async (name, email, message) => {
  // send mail with defined transport object

  await transporter.sendMail({
    from: `${name}`, // sender address
    to: "aromerocangri.14@gmail.com", // list of receivers
    subject: "Un Cliente te ha enviado", // Subject line
    html: `<h4>${message}</h4>`,
  });
};

module.exports = {
  verifyUser,
  transporter,
  sendEmail,
};
