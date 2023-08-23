const mysql = require("mysql");

const db = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: process.env.DB_OWNER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const myQuery = async (queryString, params) => {
  return new Promise((resolve, reject) => {
    db.query(queryString, params, function (error, results, fields) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("results", results);
        resolve(results);
      }
    });
  });
};

const myQueryReturnInsertId = async (queryString, params) => {
  console.log("queryString", queryString);
  console.log("params", params);

  return new Promise((resolve, reject) => {
    db.query(queryString, params, function (error, result, fields) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("result", result);
        resolve(result.insertId);
      }
    });
  });
};

module.exports = { myQuery, myQueryReturnInsertId };
