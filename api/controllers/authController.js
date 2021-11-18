const queries = require('../queries/authQueries');
const validator = require('email-validator');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const {jwtService} = require('../services/jwt.service');
const redisService = require('../services/redis.service');
const cookieService = require('../services/cookie.service');
const {BASE_URL, APP_URL} = require('../services/settings');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

module.exports = {
  /**
   * 
   * @param {*} req 
   * @param {*} res 
   * @returns 
   */
  login: async (req, res, next) => {
    console.log('login');
    const { password, email, app } = req.body;
    console.log(password, email, app);
    try {
      // Should return status (412) if input empty
      if (
        email === "" ||
        password === ""
      ) {
        res.body = req.body;
        return res.redirect('http://localhost:8080/?code=empty');
      } 
      
      // Should return status 422 if invalid email
      if (!validator.validate(email)) return res.redirect('http://localhost:8080/?code=invalidemail');
      
      
      // Should return status (409) if email not in database
      const {userId, apisignup} = await queries.getOneByEmail(email);
      console.log('id and email in login', userId, email);
      
      if (!userId) return res.redirect('http://localhost:8080/?code=usernotindb');
      
      if (apisignup) return res.redirect('http://localhost:8080/?code=isapisignup');

      // compare passwords
      const me = await queries.getMe(userId);
      const match = await bcrypt.compare(password, me.password);
      if (!match) return res.redirect('http://localhost:8080/?code=invalidpwd');
      if (match) {
      // set JWT cookies http only
      const [accessToken, refreshToken] = jwtService.getTokens({...me, password: ''});
      
      console.log('payload decoded in login', jwt.verify(accessToken, JWT_SECRET));
      
      res.cookie('access_token', accessToken, cookieService.options);
      res.cookie('refresh_token', refreshToken, cookieService.options);
      // set id = loggued in redis
      redisService.setLogin(me.id);
      
      next()
    }
      
    } catch(error) {
      console.log(error)
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
    console.log('signup');
    
    let {
      firstname, lastname, nickname, password1, password2, email
    } = req.body;
    console.log(req.body);
    try {
      // status (412) if input empty
      if (
        email === "" ||
        password1 === "" ||
        password2 === ""
      ) return res.redirect('http://localhost:8080/?code=empty');

      // passwords
      if (password1 !== password2) return res.redirect('http://localhost:8080/?code=diffpwd');
      
      req.body.password = password1;
      // status(409) at least one of "firstname", "lastname" or "nickname",
      if (
        firstname === "" &&
        lastname === "" &&
        nickname === ""
      )  return res.redirect('http://localhost:8080/?code=minname');
      
      // status (303) if email already in database
      const {userId} = await queries.getOneByEmail(email);
      if (userId) return res.redirect('http://localhost:8080/?code=exist');
      
      // status 422 if invalid email
      if (!validator.validate(email)) return res.redirect('http://localhost:8080/?code=invalidemail');
      
      // Do signup
      if (!nickname) nickname = `${firstname}-${lastname}`;
      const hash = await bcrypt.hash(password1, saltRounds)
      const newUserId = await queries.insertUser({...req.body, nickname, password : hash, apisignup: false });
      console.log('newUser', newUserId);
      
      next();
      
    } catch(error) {
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
    console.log('deleteMe');
    const {id} = req.user;
    if (id === 'undefined') return res.sendStatus(400);
    const deletedId = await queries.deleteMe(id);
    res.status(200).json({id: deletedId});
    
  },
  /**
   * 
   * @param {*} req 
   * @param {*} res 
   * @returns 
   */
  updateMe: async (req, res) => {
    console.log('updateMe');
    const {id} = req.user;
    const {
      firstname, lastname, nickname, password, email
    } = req.body;
    try {
      // status (412) if input empty
      if (
        email === "" ||
        password === ""
      ) return res.status(412).json({message: "L'email et le mot de passe doivent être renseignés"});
      
      // status 422 if invalid email
      if (!validator.validate(email)) return res.status(422).json({message: "invalid email"});
      
      const user = await queries.getMe(id);
      if (user.email !== email) {
        // status (303) if email already in database
        const {userId} = await queries.getOneByEmail(email);
        if (userId) return res.status(303).json({message: "email already in db"});
      }
      // compare passwords
      const match = await bcrypt.compare(password, user.password);
      if (!match) return res.status(403).json({message: "invalid password"});
      
      // Do update
      const userUpdated = await queries.updateMe({...req.body, id });
      
      // Generate new tokens
      const [accessToken, refreshToken] = jwtService.getTokens(userUpdated);
      res.cookie('access_token', accessToken, cookieService.options);
      res.cookie('refresh_token', refreshToken, cookieService.options);
      res.status(200).json({message: "credentials updated"});
      
    } catch(error) {
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
    console.log('updateMePassword');
    const {id} = req.user;
    const {
      password, newPassword
    } = req.body;
    try {
      // status (412) if input empty
      if (
        password === "" ||
        newPassword === ""
      ) return res.status(412).json({message: "no empty input allowed"});
      
      // compare passwords
      const user = await queries.getMe(id);
      const match = await bcrypt.compare(password, user.password);
      if (!match) return res.status(403).json({message: "invalid password"});
      
      // Do update
      const hash = await bcrypt.hash(newPassword, saltRounds);
      const userId = await queries.updateMePassword({id, newPassword: hash });
      res.status(200).json({...userId, message: "Le mot de passe à été modifié"});
      
    } catch(error) {
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
    console.log('count');
    const count = await queries.count();
    res.status(200).json({count});
  },
  /**
   * 
   * @param {*} req 
   * @param {*} res 
   */
  getMe: async(req, res) => {
    const user = await queries.getMe(req.user.id);
    res.status(200).json(user);
  },
  redirectLogout: (req, res) => {res.redirect('/');}
  ,
  redirect: (req, res) => {
    let {app} = req.body;
    
    if (!app) app = 'auth';
    
    const appUri = process.env.NODE_ENV === 'production'
    ?
    `https://${app}.ikodi.eu` 
    :
    `http://localhost:8001`;
    
    return res.redirect(appUri);
  }
}