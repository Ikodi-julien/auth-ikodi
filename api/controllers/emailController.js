const queries = require("../queries/authQueries");
const { BASE_URL, APP_URL } = require("../services/settings");
const mailer = require("../services/mailer");
const { beginning, end } = require("../assets/confirm-email");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

module.exports = {
  setEmailToken: async (req, res, next) => {
    console.log("setEmailToken");
    const { id, email, password, app } = req.user;
    const emailToken = jwt.sign({ id, email, password, app }, JWT_SECRET, {
      expiresIn: "15m",
    });
    try {
      await queries.updateEmailToken({ id, emailToken });
      req.user.emailToken = emailToken;
    } catch (error) {
      console.log(error.message);
      res.send(error.message);
    }
    next();
  },
  sendLinkToVerifyMail: async (req, res, next) => {
    console.log("sendLinkToVerifyMail");
    const { emailToken } = req.user;
    const { email } = req.body;
    const link = `${BASE_URL}/email-verify/${emailToken}`;

    try {
      await mailer.sendMail(
        email,
        "IKODI - Validation de la création de compte",
        `${beginning}${link}${end}`
      );
      console.log(link);
      res
        .status(200)
        .json({
          message: `Un lien a été envoyé envoyé à ${req.user.email}, merci de le suivre pour confirmer votre adresse mail.`,
        });
    } catch (error) {
      console.log(error.message);
      res.send(error.message);
    }
  },
  verifyMail: async (req, res, next) => {
    console.log("verifyMail");
    const { token } = req.params;
    try {
      const payload = jwt.verify(token, JWT_SECRET);
      const user = await queries.getMe(payload.id);

      if (user.email !== payload.email)
        return res.status(200).json({ message: `Les emails sont différents` });

      await queries.setActive(payload.id);
      req.body = payload;

      next();
    } catch (error) {
      console.log(error.message);
      res.send(error.message);
    }
  },
};
