var pool = require('../db');
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
