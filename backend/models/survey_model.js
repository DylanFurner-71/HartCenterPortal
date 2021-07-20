const pool = require('../db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

postResult = async (info) => new Promise((resolve, reject) => {
    //also need to update the student table where this student's information is
    pool.query("INSERT INTO Student_Survey_Resp (smu_id, Survey_Resp) VALUES (?, ?)",
    [info.body.smu_id, info.body.Survey_Resp],
     function (error, results, fields){
        if (error){
            reject();
        }else {
            resolve();
        }
    })
})
getSurveyQuestions = async () => new Promise((resolve, reject) => {
    pool.query( "SELECT * FROM questions WHERE survey_id = 1", function (error, results, fields) {
        if (error){
            reject();
            console.log(error)
        }else{
            resolve(results);
        }
    });
})



getSurveys = async (ifo) => new Promise((resolve, reject) => {
    pool.query("SELECT * FROM surveys", function (error, results, fields) {
        if (error){
            console.log(error)
            reject();
            console.log(error)
        }else{
            resolve(results);
        }
    })
});

module.exports = {
    postResult,
    getSurveyQuestions,
    getSurveys
}
