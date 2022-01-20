const Pool = require('pg').Pool;
const db = new Pool({
  user: process.env.DB_OWNER,
  host: '127.0.0.1',
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432
})

module.exports = db