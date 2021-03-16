var pool = require('../db');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

callLogin = (smu_email, smu_id) => new Promise((resolve, reject) => {
    pool.query('SELECT * FROM Student WHERE smu_email = ? AND smu_id = ?', [smu_email, smu_id], 
    function(err, result, fields) {
      if (err){
        reject();
    }else{
        resolve(result);
    }
    });
  });
 

module.exports = {
    callLogin,
}