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
    const { password, email, app } = req.body;
    
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
      const user = await queries.getMe(userId);
      const match = await bcrypt.compare(password, user.password);
      if (!match) return res.status(403).json({message: "invalid password"});
      if (match) {
      // set JWT cookies http only
      const [accessToken, refreshToken] = jwtService.getTokens({id: user.id});
      
      res.cookie('access_token', accessToken, cookieService.options);
      res.cookie('refresh_token', refreshToken, cookieService.options);
      // set id = loggued in redis
      redisService.setLogin(user.id);
      // console.log('login user id :', user.id);
      
      return res.status(200).json({id: user.id});
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
    const {
      firstname, lastname, password, email
    } = req.body;
    try {
      // status (412) if input empty
      if (
        firstname === "" ||
        lastname === "" ||
        email === "" ||
        password === ""
      ) return res.status(412).json({message: "no empty input allowed"});
      
      // status (303) if email already in database
      const {userId} = await queries.getOneByEmail(email);
      console.log(userId);
      if (userId) return res.status(303).json({message: "email already in db"});
      
      // status 422 if invalid email
      if (!validator.validate(email)) return res.status(422).json({message: "invalid email"});
      
      // Do signup
      const hash = await bcrypt.hash(password, saltRounds)
      const id = await queries.insertUser({...req.body, password : hash });
      res.status(200).json({id});
      
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
    const id = req.userId;
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
    const id = req.userId;
    const {
      firstname, lastname, password, email
    } = req.body;
    try {
      // status (412) if input empty
      if (
        firstname === "" ||
        lastname === "" ||
        email === "" ||
        password === ""
      ) return res.status(412).json({message: "no empty input allowed"});
      
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
      res.status(200).json(userUpdated);
      
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
    const id = req.userId;
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
      res.status(200).json(userId);
      
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
    const user = await queries.getMe(req.userId);
    // console.log(user);
    res.status(200).json(user);
  },
  redirectLogout: (req, res) => {res.redirect('/');}
}