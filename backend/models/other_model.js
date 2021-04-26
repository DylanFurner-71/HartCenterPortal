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
  AddOtherSurvey = async (info) => new Promise((resolve, reject) => {
    pool.query("INSERT INTO Other_surveys (title, link, description) VALUES (?, ?, ?)",
    [info.body.title, info.body.link, info.body.description],
     function (error, results, fields){
        if (error){
            reject();
        }else {
            resolve();
        }
    })
})
deleteOtherSurvey = (req) => new Promise((resolve, reject) => {
    console.log(req)
    pool.query("DELETE FROM Other_surveys WHERE id = ?", [req], 
    function (error, results, fields){
        if (error){
            reject();
        } else {
            resolve();
        }
    })
})
 

module.exports = {
    getOtherSurveys,
    AddOtherSurvey,
    deleteOtherSurvey
}