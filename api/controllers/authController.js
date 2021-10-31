const queries = require('../queries/authQueries');
const validator = require('email-validator');

module.exports = {
  login: (req, res) => {
      res.sendStatus(500);
  },
  signup: (req, res) => {
    if (
      req.body.firstname === "" ||
      req.body.lastname === "" ||
      req.body.email === "" ||
      req.body.password === ""
    ) return res.status(412).json({message: "no empty input allowed"});
    
    if (!validator.validate(req.body.email)) return res.status(422).json({message: "invalid email"});
    
    try {
      queries.signup(req.body, (error, result) => {
        if (error) throw error;
        res.status(200).json({rowCount: result.rowCount});
        
      })
    } catch(error) {
      console.log(error.toString())
      res.sendStatus(500);
    }
  },
}