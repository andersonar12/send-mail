/* 3ero luego de configur los controladores y luego creas-asocias las rutas GET,POST,PUT segun sea el caso
 */
const express = require("express");
const { sendMail } = require("../controllers/mailer.controller.js");

const router = express.Router();

router.route("/send-mail").post(sendMail);

module.exports = router;
