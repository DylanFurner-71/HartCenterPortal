var pool = require('../db');

callLogin = async (smu_email, smu_id) => await new Promise((resolve, reject) => {
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
    callLogin
}