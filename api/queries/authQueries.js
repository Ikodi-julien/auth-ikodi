const db = require('../database/psqlDB');

module.exports = {
  /**
   * 
   * @param {*} email 
   * @returns 
   */
  getOneByEmail: async (email) => {
    const queryString = `SELECT id FROM auth.users WHERE email=$1`;
    
    const result = await db.query( queryString, [email]);
    
    return result.rowCount ? {userId: result.rows[0].id} : { userId: false };
  },
  getMe: async (id) => {
    const queryString = `SELECT "id", "firstname", "lastname", "email", "password" FROM auth.users WHERE id=$1`;
    
    const result = await db.query( queryString, [id]);
    return result.rows[0];
  },
  /**
   * Insert new user in table users
   * @param {Object} data - user credentials and name
   * @returns {Number} user id
   */
  insertUser: async (data) =>{
    const {
      firstname, lastname, password, email
    } = data;
    
    const queryString = `INSERT INTO auth.users ("firstname", "lastname", "email", "password") VALUES ($1,$2,$3,$4) RETURNING id`;
    
    const result = await db.query( queryString, [firstname, lastname, email, password]);
    return result.rows[0].id;
  },
  /**
   * Delete a user from table users
   * @param {*} id 
   * @returns {Number} returns id from user deleted
   */
  deleteMe: async (id) => {
    const queryString = `DELETE FROM auth.users WHERE id=$1 RETURNING id`;
    const result = await db.query(queryString, [id]);
    return result.rows[0].id;
  },
  updateMe: async (data) =>{
    const {
      id, firstname, lastname, email
    } = data;
    
    const queryString = `UPDATE auth.users SET "firstname"=$2, "lastname"=$3, "email"=$4 WHERE id=$1 RETURNING *`;
    
    const result = await db.query( queryString, [id, firstname, lastname, email]);
    return result.rows[0];
  },
  updateMePassword: async (data) =>{
    const { id, newPassword } = data;
    
    const queryString = `UPDATE auth.users SET "password"=$2 WHERE id=$1 RETURNING id`;
    
    const result = await db.query( queryString, [id, newPassword]);
    return result.rows[0].id;
  },
  /**
   * Returns rowCount of table users
   * @returns {Number}  
   */
  count: async () => {
    const queryString = `SELECT * FROM auth.users`;
    const result = await db.query(queryString);
    return result.rowCount;
  }
}