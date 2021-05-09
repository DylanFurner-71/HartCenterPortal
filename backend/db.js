const mysql = require('mysql');
var config = {
  user: 'root', //this has to be changed before deployment but i don't know how
  password: 'password',
  server: '127.0.0.1', 
  database: 'db31',
  port: "3306",
  socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
  /*
  dbhost  : lyledb1.seas.smu.edu
  database: hclsdata
  username: hartadmin
  password: hh77gg99
  */
};
// mysql connection
var pool = mysql.createPool({
//   host: process.env.MYSQL_CLOUD_HOST,
//   user: process.env.MYSQL_CLOUD_USER,
//   password: process.env.MYSQL_CLOUD_PASS,
//   port: process.env.MYSQL_PORT,
//   database: process.env.MYSQL_DB
host: config.server,
user: config.user,
password: config.password,
port: config.port,
database: config.database
});

module.exports = pool;