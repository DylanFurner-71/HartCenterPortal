var pool = require('../db');

getOtherSurveys = async (smu_email, smu_id) => await new Promise((resolve, reject) => {
    pool.query('SELECT * FROM Other_Survey',
    function(err, result, fields) {
      if (err){
        reject();
    }else{
        resolve(result);
    }
    });
  });
 

module.exports = {
    getOtherSurveys
}