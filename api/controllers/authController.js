const queries = require('../queries/authQueries');
const validator = require('email-validator');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const {jwtService} = require('../services/jwt.service');
const cookieService = require('../services/cookie.service');
const db = require('../database/psqlDB');

module.exports = {
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
      
      // Should return status (409) if user not in database
      const  user = await queries.getOneByEmail(email);
      
      if (!user) return res.status(409).json({message: "user not in db"});
      
      // compare passwords
      const match = await bcrypt.compare(password, user.password);
      if (!match) return res.status(403).json({message: "invalid password"});
      if (match) {
      // set JWT cookies http only
      const [accessToken, refreshToken] = jwtService.getTokens({id: user.id});
      
      res.cookie('access_token', accessToken, cookieService.options);
      res.cookie('refresh_token', refreshToken, cookieService.options);
      
      return res.status(200).json({id: user.id});
      }
      
    } catch(error) {
      console.log(error)
      res.sendStatus(500);
    }
  },
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
      const emailExist = await queries.getOneByEmail(email);
      
      if (emailExist) return res.status(303).json({message: "email already in db"});
      
      // status 422 if invalid email
      if (!validator.validate(email)) return res.status(422).json({message: "invalid email"});
      
      // Do signup
      const hash = await bcrypt.hash(password, saltRounds)
      const id = await queries.insertUser({...req.body, password : hash });
      res.status(200).json({id});
      
    } catch(error) {
      console.log(error.toString())
      res.sendStatus(500);
    }
  },
  deleteMe: async (req, res) => {
    const {id} = req.params;
    if (id === 'undefined') return res.sendStatus(400);
    const deletedId = await queries.deleteMe(id);
    res.status(200).json({id: deletedId});
    
  },
  count: async (req, res) => {
    const count = await queries.count();
    res.status(200).json({count});
  },
  getUserData: async(req, res) => {

    
    res.status(200).json({id: 2, email: "boblechat@gmail.com"});
  },
  redirectLogout: (req, res) => {res.redirect('/');}
}