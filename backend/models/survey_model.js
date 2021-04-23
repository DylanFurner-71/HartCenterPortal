var pool = require('../db');

getOtherSurveys = async () => new Promise((resolve, reject) => {
    pool.query('SELECT * FROM Other_surveys',
    function(err, result, fields) {
      if (err){
        reject();
    }else{
        resolve(result);
    }
    });
  });
  postResult = async (info) => new Promise((resolve, reject) => {
    pool.query("INSERT INTO students (survey_result) VALUES (?)",
    [info.body.result],
     function (error, results, fields){
        if (error){
            reject();
        }else {
            resolve();
        }
    })
})
 

module.exports = {
    postResult
}