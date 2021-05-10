const mysql = require('mysql');
var config = {
  user: 'root', 
  password: 'password',
  server: '127.0.0.1', 
  database: 'db31',
  port: "3306",
  socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
  /*
  server  : 'sacad7db01.smu.edu',
  database: 'dbhclssurvey2',
  user: 'corndog',
  port: "3306",
  password: 'dg54sJn1ih84bDf4',
  */
};
// mysql connection
var pool = mysql.createPool({
host: config.server,
user: config.user,
password: config.password,
port: config.port,
database: config.database
});

module.exports = pool;