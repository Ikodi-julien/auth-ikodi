const { myQuery, myQueryReturnInsertId } = require("../database/mysqlDB");

module.exports = {
  /**
   *
   * @param {*} email
   * @returns
   */
  getOneByEmail: async (email) => {
    const queryString = `SELECT id, apisignup, active, password FROM auth.users WHERE email= ?`;
    const results = await myQuery(queryString, [email]);

    return results.length > 0
      ? {
          userId: results[0].id,
          apisignup: results[0].apisignup,
          active: results[0].active,
        }
      : {
          userId: false,
          active: false,
        };
  },

  getMe: async (id) => {
    const queryString = `SELECT id, firstname, lastname, nickname, email, password, apisignup, active FROM auth.users WHERE id= ?`;

    const result = await myQuery(queryString, [id]);
    console.log("getMe", id, result);
    return result[0];
  },
  /**
   * Insert new user in table users
   * @param {Object} data - user credentials and name
   * @returns {Object} user
   */
  insertUser: async (data) => {
    const {
      firstname,
      lastname,
      nickname,
      password,
      email,
      apisignup,
      emailToken,
    } = data;

    const queryString = `INSERT INTO auth.users (firstname, lastname, nickname, email, password, apisignup, active, emailtoken) VALUES ( ?,?,?,?,?,?,?,?)`;

    const insertId = await myQueryReturnInsertId(queryString, [
      firstname,
      lastname,
      nickname,
      email,
      password,
      apisignup,
      0,
      emailToken,
    ]);
    console.log("insertId", insertId);
    return insertId;
  },
  /**
   * Delete a user from table users
   * @param {*} id
   * @returns {Number} returns id from user deleted
   */
  deleteMe: async (id) => {
    const queryString = `DELETE FROM auth.users WHERE id= ? RETURNING id`;
    const result = await myQuery(queryString, [id]);
    return result[0].id;
  },
  updateMe: async (data) => {
    const { id, firstname, lastname, nickname, email, apisignup } = data;

    const queryString = `UPDATE auth.users SET firstname= ?, lastname= ?, email= ?, nickname= ?, apisignup= ? WHERE id= ?`;

    const result = await myQuery(queryString, [
      firstname,
      lastname,
      email,
      nickname,
      apisignup,
      id,
    ]);
    return result.rows[0];
  },
  updateMePassword: async (data) => {
    const { id, newPassword } = data;

    const queryString = `UPDATE auth.users SET password= ? WHERE id= ? RETURNING id`;

    const result = await myQuery(queryString, [newPassword, id]);
    return result.rows[0].id;
  },
  updateEmailToken: async (data) => {
    const { id, emailToken } = data;

    const queryString = `UPDATE auth.users SET emailtoken= ? WHERE id= ? RETURNING id`;

    const result = await myQuery(queryString, [emailToken, id]);
    return result.rows[0].id;
  },
  setActive: async (id) => {
    const queryString = `UPDATE auth.users SET active=true, emailtoken=null WHERE id= ? `;

    const result = await myQuery(queryString, [id]);
    return result.rows[0].id;
  },
  /**
   * Returns rowCount of table users
   * @returns {Number}
   */
  count: async () => {
    const queryString = `SELECT * FROM auth.users`;
    const result = await myQuery(queryString);
    return result.rowCount;
  },
};
