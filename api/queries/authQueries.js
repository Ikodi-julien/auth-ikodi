const db = require("../database/psqlDB");

module.exports = {
  /**
   *
   * @param {*} email
   * @returns
   */
  getOneByEmail: async (email) => {
    const queryString = `SELECT id, apisignup, active FROM auth.users WHERE email=$1`;

    const result = await db.query(queryString, [email]);

    return result.rowCount
      ? {
          userId: result.rows[0].id,
          apisignup: result.rows[0].apisignup,
          active: result.rows[0].active,
          password: result.rows[0].password,
        }
      : {
          userId: false,
          active: false,
        };
  },
  getMe: async (id) => {
    const queryString = `SELECT "id", "firstname", "lastname", "nickname", "email", "password", "apisignup", "active" FROM auth.users WHERE id=$1`;

    const result = await db.query(queryString, [id]);
    return result.rows[0];
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

    const queryString = `INSERT INTO auth.users ("firstname", "lastname", "nickname", "email", "password", "apisignup", "active", "emailtoken") VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING id, firstname, lastname, nickname, email, apisignup, active`;

    const result = await db.query(queryString, [
      firstname,
      lastname,
      nickname,
      email,
      password,
      apisignup,
      "false",
      emailToken,
    ]);
    return result.rows[0];
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
  updateMe: async (data) => {
    const { id, firstname, lastname, nickname, email, apisignup } = data;

    const queryString = `UPDATE auth.users SET "firstname"=$2, "lastname"=$3, "email"=$4, "nickname"=$5, "apisignup"=$6 WHERE id=$1 RETURNING *`;

    const result = await db.query(queryString, [
      id,
      firstname,
      lastname,
      email,
      nickname,
      apisignup,
    ]);
    return result.rows[0];
  },
  updateMePassword: async (data) => {
    const { id, newPassword } = data;

    const queryString = `UPDATE auth.users SET "password"=$2 WHERE id=$1 RETURNING id`;

    const result = await db.query(queryString, [id, newPassword]);
    return result.rows[0].id;
  },
  updateEmailToken: async (data) => {
    const { id, emailToken } = data;

    const queryString = `UPDATE auth.users SET "emailtoken"=$2 WHERE id=$1 RETURNING id`;

    const result = await db.query(queryString, [id, emailToken]);
    return result.rows[0].id;
  },
  setActive: async (id) => {
    const queryString = `UPDATE auth.users SET "active"=true, "emailtoken"=null WHERE id=$1 RETURNING id`;

    const result = await db.query(queryString, [id]);
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
  },
};
