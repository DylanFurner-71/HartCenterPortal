var pool = require('../db');

getOtherSurveys = async () => await new Promise((resolve, reject) => {
    pool.query('SELECT * FROM Other_surveys',
    function(err, result, fields) {
      if (err){
        reject();
    }else{
        resolve(result);
    }
    });
  });
  addOtherSurvey = async (info) => new Promise((resolve, reject) => {
    db.query("INSERT INTO Other_surveys (title, link) VALUES (?, ?)",
    [info.body.title, info.body.link],
     function (error, results, fields){
        if (error){
            reject();
        }else {
            resolve();
        }
    })
})
 

module.exports = {
    getOtherSurveys
}