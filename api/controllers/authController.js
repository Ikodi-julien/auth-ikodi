const queries = require('../queries/authQueries');
const validator = require('email-validator');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const {jwtService} = require('../services/jwt.service');
const redisService = require('../services/redis.service');
const cookieService = require('../services/cookie.service');


module.exports = {
  /**
   * 
   * @param {*} req 
   * @param {*} res 
   * @returns 
   */
  login: async (req, res) => {
    const { password, email } = req.body;
    
    try {
      // Should return status (412) if input empty
      if (
        email === "" ||
        password === ""
      ) return res.status(412).json({message: "no empty input allowed"});
      
      // Should return status 422 if invalid email
      if (!validator.validate(email)) return res.status(422).json({message: "invalid email"});
      
      // Should return status (409) if email not in database
      console.log(email);
      const {userId} = await queries.getOneByEmail(email);
      console.log('id in login', userId);
      if (!userId) return res.status(409).json({message: "user not in db"});
      
      // compare passwords
      const me = await queries.getMe(userId);
      const match = await bcrypt.compare(password, me.password);
      if (!match) return res.status(403).json({message: "Le mot de passe ne correspond pas"});
      if (match) {
      // set JWT cookies http only
      const [accessToken, refreshToken] = jwtService.getTokens({...me, password: ''});
      
      res.cookie('access_token', accessToken, cookieService.options);
      res.cookie('refresh_token', refreshToken, cookieService.options);
      // set id = loggued in redis
      redisService.setLogin(me.id);
      // console.log('login user id :', user.id);
      
      return res.status(200).json({...me, password: ''});
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
  signup: async (req, res) => {
    let {
      firstname, lastname, nickname, password, email
    } = req.body;
    try {
      // status (412) if input empty
      if (
        email === "" ||
        password === ""
      ) return res.status(412).json({message: "Email et mot de passe doivent être renseignés"});
      // status(409) at least one of "firstname", "lastname" or "nickname",
      if (
        firstname === "" &&
        lastname === "" &&
        nickname === ""
      ) return res.status(409).json({message: "Un nom ou un pseudo est nécessaire"});
      // status (303) if email already in database
      const {userId} = await queries.getOneByEmail(email);
      console.log(userId);
      if (userId) return res.status(303).json({message: "Un compte existe déjà pour cet email"});
      
      // status 422 if invalid email
      if (!validator.validate(email)) return res.status(422).json({message: "Forme de l'email invalide"});
      
      // Do signup
      if (!nickname) nickname = `${firstname}-${lastname}`;
      const hash = await bcrypt.hash(password, saltRounds)
      const user = await queries.insertUser({...req.body, nickname, password : hash });
      res.status(200).json({...user});
      
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
    console.log('update pass');
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
    // console.log(user);
    res.status(200).json(user);
  },
  redirectLogout: (req, res) => {res.redirect('/');}
}