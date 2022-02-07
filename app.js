const express = require("express");
const cors = require("cors");
const app = express();
const mailRoutes = require("./routes/mailer.route.js");
const { verifyUser } = require("./mailer/mailer.js");

const port = process.env.PORT || 3000;

//CORS
app.use(cors("*"));
app.use(express.json());

/* Rutas */
app.use("/mail", mailRoutes);

//Verificamos si el correo esta habilitado para enviar e iniciamos el server
verifyUser()
  .then(() => {
    console.log("Ready for send mails");
    //Iniciamos el Listen del Servidor
    app.listen(port, (err) => {
      if (err) throw new Error(err);
      console.log(`Servidor corriendo en puerto ${port}`);
    });
  })
  .catch((e) => console.log("Nodemailer has a error->", e));
