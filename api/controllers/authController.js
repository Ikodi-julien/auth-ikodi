const queries = require("../queries/authQueries");
const validator = require("email-validator");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const { jwtService } = require("../services/jwt.service");
const redisService = require("../services/redis.service");
const cookieService = require("../services/cookie.service");
const { FRONT_URL } = require("../services/settings");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const testRegexPwd = require("../services/testRegexPwd");

module.exports = {
  /**
   *
   * @param {*} req
   * @param {*} res
   * @returns
   */
  login: async (req, res, next) => {
    console.log("login");
    const { password, email, app } = req.body;
    // console.log(password, email, app);
    try {
      // Should return status (412) if input empty
      if (email === "" || password === "") {
        res.body = req.body;
        return res.redirect(`${FRONT_URL}/?code=empty`);
      }

      // Should return status 422 if invalid email
      if (!validator.validate(email))
        return res.redirect(`${FRONT_URL}/?code=invalidemail`);

      // Should return status (409) if email not in database
      const me = await queries.getOneByEmail(email);
      console.log("id and email in login", me.userId, me.email);

      if (!me.userId) return res.redirect(`${FRONT_URL}/?code=usernotindb`);
      if (me.apisignup) return res.redirect(`${FRONT_URL}/?code=isapisignup`);
      // Is account active ?
      if (!me.active) return res.redirect(`${FRONT_URL}/?code=inactive`);
      // compare passwords
      const user = await queries.getMe(me.userId);
      const match = await bcrypt.compare(password, user.password);
      if (!match) return res.redirect(`${FRONT_URL}/?code=invalidpwd`);
      if (match) {
        // set JWT cookies http only
        const [accessToken, refreshToken] = jwtService.getTokens({
          ...user,
          password: "",
        });

        console.log(
          "payload decoded in login",
          jwt.verify(accessToken, JWT_SECRET)
        );

        res.cookie("access_token", accessToken, cookieService.options);
        res.cookie("refresh_token", refreshToken, cookieService.options);
        // set id = loggued in redis
        redisService.setLogin(me.userId);

        next();
      }
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },
  /**
   *
   * @param {*} req
   * @param {*} res
   * @returns
   */
  signup: async (req, res, next) => {
    console.log("signup");

    let { firstname, lastname, nickname, password1, password2, email, app } =
      req.body;
    // console.log(req.body);
    try {
      // status (412) if input empty
      if (email === "" || password1 === "" || password2 === "")
        return res.json({ code: "empty" });

      // passwords
      if (password1 !== password2) return res.json({ code: "diffpwd" });
      if (!testRegexPwd(password1)) return res.json({ code: "invalidpwd" });

      req.body.password = password1;
      // status(409) at least one of "firstname", "lastname" or "nickname",
      // if (firstname === "" && lastname === "" && nickname === "")
      //   return res.json({ code: "minname" });

      // status (303) if email already in database
      const { userId, active } = await queries.getOneByEmail(email);
      if (userId && active) return res.json({ code: "exist" });

      // status 422 if invalid email
      if (!validator.validate(email)) return res.json({ code: "invalidemail" });

      // Delete user if inactive, so it's a new signup
      if (userId) queries.deleteMe(userId);

      // Do signup
      if (nickname === "" || !nickname) nickname = email.split("@")[0];
      const hash = await bcrypt.hash(password1, saltRounds);
      const newUser = await queries.insertUser({
        ...req.body,
        nickname,
        password: hash,
        apisignup: false,
        active: false,
      });

      req.user = { ...newUser, password: password1, app };
      console.log("newUser:", req.user);

      next();
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },

  /**
   *
   * @param {*} req
   * @param {*} res
   * @returns
   */
  deleteMe: async (req, res) => {
    console.log("deleteMe");
    const { id } = req.user;
    if (id === "undefined") return res.sendStatus(400);
    const deletedId = await queries.deleteMe(id);
    redisService.setLogout(id);
    res.status(200).json({ id: deletedId });
  },
  /**
   *
   * @param {*} req
   * @param {*} res
   * @returns
   */
  updateMe: async (req, res) => {
    console.log("updateMe");
    const { id } = req.user;
    const { firstname, lastname, nickname, password, email, apisignup } =
      req.body;
    try {
      // status (412) if input empty
      if (email === "" || password === "")
        return res.status(412).json({
          message: "L'email et le mot de passe doivent être renseignés",
        });

      // status 422 if invalid email
      if (!validator.validate(email))
        return res.status(422).json({ message: "invalid email" });

      const user = await queries.getMe(id);
      if (user.email !== email) {
        // status (303) if email already in database
        const { userId } = await queries.getOneByEmail(email);
        if (userId)
          return res.status(303).json({ message: "email already in db" });
      }
      // compare passwords
      if (!user.apisignup) {
        const match = await bcrypt.compare(password, user.password);
        if (!match)
          return res.status(403).json({ message: "invalid password" });
      }
      // Do update
      const userUpdated = await queries.updateMe({ ...req.body, id });

      // Generate new tokens
      const [accessToken, refreshToken] = jwtService.getTokens(userUpdated);
      res.cookie("access_token", accessToken, cookieService.options);
      res.cookie("refresh_token", refreshToken, cookieService.options);
      res.status(200).json({ message: "Infos utilisateur modifiées" });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },
  /**
   *
   * @param {*} req
   * @param {*} res
   * @returns
   */
  updateMePassword: async (req, res) => {
    console.log("updateMePassword");
    const { id } = req.user;
    const { password, newPassword } = req.body;
    try {
      // status (412) if input empty
      if (password === "" || newPassword === "")
        return res.status(412).json({ message: "no empty input allowed" });

      // compare passwords
      const user = await queries.getMe(id);
      const match = await bcrypt.compare(password, user.password);
      if (!match)
        return res
          .status(403)
          .json({ message: "Ce n'est pas le bon mot de passe" });

      // Do update
      const hash = await bcrypt.hash(newPassword, saltRounds);
      const userId = await queries.updateMePassword({ id, newPassword: hash });
      res
        .status(200)
        .json({ ...userId, message: "Le mot de passe à été modifié" });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },
  /**
   *
   * @param {*} req
   * @param {*} res
   */
  count: async (req, res) => {
    console.log("count");
    const count = await queries.count();
    res.status(200).json({ count });
  },
  /**
   *
   * @param {*} req
   * @param {*} res
   */
  getMe: async (req, res) => {
    const user = await queries.getMe(req.user.id);
    res.status(200).json(user);
  },
  redirectLogout: (req, res) => {
    res.redirect("/");
  },
  redirect: (req, res) => {
    let { app } = req.body;
    if (!app || app === "" || app === "null")
      return res.render("login-success", { email: req.body.email });

    const appUri =
      process.env.NODE_ENV === "production"
        ? `https://${app}.ikodi.eu`
        : `${FRONT_URL}`;
    // console.log('redirect to:', app);
    return res.redirect(appUri);
  },
};
