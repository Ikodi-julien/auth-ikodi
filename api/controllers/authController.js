const queries = require('../queries/authQueries');
const validator = require('email-validator');

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
      if (password !== user.password) return res.status(403).json({message: "invalid password"});
      if (password === user.password) return res.status(200).json({});
      
      // set JWT cookies http only
      
    } catch(error) {
      console.log(error.toString())
      res.sendStatus(500);
    }
  },
  signup: async (req, res) => {
    try {
      // Should return status (412) if input empty
      if (
        req.body.firstname === "" ||
        req.body.lastname === "" ||
        req.body.email === "" ||
        req.body.password === ""
      ) return res.status(412).json({message: "no empty input allowed"});
      
      // Should return status (303) if email already in database
      const emailExist = await queries.getOneByEmail(req.body.email);
      
      if (emailExist) return res.status(303).json({message: "email already in db"});
      
      // Should return status 422 if invalid email
      if (!validator.validate(req.body.email)) return res.status(422).json({message: "invalid email"});
      
      // Do signup
      const id = await queries.signup(req.body);
      res.status(200).json({id});
      
    } catch(error) {
      console.log(error.toString())
      res.sendStatus(500);
    }
  },
  deleteMe: async (req, res) => {
    const {id} =req.params;
    
    const deletedId = await queries.deleteMe(id);
    res.status(200).json({id: deletedId});
    
  }
}