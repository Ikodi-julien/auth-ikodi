const db = require('../database/db');

module.exports = {
  /**
   * 
   * @param {*} email 
   * @returns 
   */
  getOneByEmail: async (email) => {
    const queryString = `SELECT * FROM auth.users WHERE email=$1`;
    
    const result = await db.query( queryString, [email]);
    return result.rows[0];
  },
  /**
   * 
   * @param {*} data 
   * @returns 
   */
  signup: async (data) =>{
    const {
      firstname, lastname, password, email
    } = data;
    
    const queryString = `INSERT INTO auth.users ("firstname", "lastname", "email", "password") VALUES ($1,$2,$3,$4) RETURNING id`;
    
    const result = await db.query( queryString, [firstname, lastname, email, password]);
    return result.rows[0].id;
  },
  /**
   * 
   * @param {*} data 
   * @returns 
   */
  login: async (data) => {
    const { password, email } = data;
    
    const queryString = `SELECT id FROM auth.users WHERE email=$1`;
    
    const result = await db.query( queryString, [email]);
    
    return result.rows[0].id;
  },
  /**
   * 
   * @param {*} id 
   * @returns 
   */
  deleteMe: async (id) => {
    const queryString = `DELETE FROM auth.users WHERE id=$1 RETURNING id`;
    const result = await db.query(queryString, [id]);
    return result.rows[0].id;
  }
}