const db = require('../database/db');

module.exports = {
  signup: (object, cb) =>{
    const {
      firstname, lastname, password, email
    } = object;
    
    const queryString = `INSERT INTO users ("firstname", "lastname", "email", "password") VALUES ($1,$2,$3,$4)`;
    
    db.query(
      queryString, 
      [firstname, lastname, email, password], 
      (error, result) => (cb(error, result))
    );
  }
}