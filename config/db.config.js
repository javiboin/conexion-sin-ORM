require('dotenv').config();
const mysql = require('mysql');

const dbConn = mysql.createConnection({
  host     : process.env.MYSQL_HOST,
  user     : process.env.MYSQL_USER,
  password : process.env.MYSQL_PASS,
  database : process.env.MYSQL_DB_NAME
});
dbConn.connect(err => {
  if (err) throw err;
  console.log("Database Connected!");
});

module.exports = dbConn;