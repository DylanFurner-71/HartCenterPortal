const pool = require('../db');
const jwt = require('jsonwebtoken');

postResult = async (info) => new Promise((resolve, reject) => {
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
getSurveyQuestions = async (ifo) => new Promise((resolve, reject) => {
    pool.query( "SELECT * FROM questions WHERE survey_id = 1", function (error, results, fields) {
        if (error){
            reject();
            console.log(error)
        }else{
            resolve(results);
        }
    });
})



getQuestions = async (survey_id) => new Promise((resolve, reject) => {
    pool.query( "SELECT * FROM questions WHERE survey_id = ?", [survey_id], 
    function (error, results, fields) {
        if (error){
            reject();
        }else{
            resolve(results);
        }
    })
});
getSurveys = async (ifo) => new Promise((resolve, reject) => {
    pool.query( "SELECT * FROM surveys", function (error, results, fields) {
        if (error){
            reject();
        }else{
            resolve(results);
        }
    })
});

getTitle = async (ifo) => new Promise((resolve, reject) => {
    pool.query( "SELECT * FROM titles WHERE survey_id = ? ", [ifo], function (error, results, fields) {
        if (error){
            reject();
        }else{
            resolve(results);
        }
    })
})
    addAssessmentMCQuestion = async (body1) => new Promise((resolve, reject) => {
        const body = body1.body;
        console.log("ADD MC QUESTION, breaking at the insert statement. it works. ", body)
        console.log(body.choicesOrder)
        pool.query("INSERT INTO questions(survey_id, type, name, title, correctAnswer,  choice1, choice2, choice3, choice4) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [body.survey_id, body.type, body.name,body.title, body.correctAnswer, body.choices[0], body.choices[1], body.choices[2], body.choices[3]],
         function (error, results, fields){
            if (error){
                reject();
            }else {

                resolve(results);
            }
        })
    })
    editAssessmentMCQuestion = async (info) => new Promise((resolve, reject) => {
        console.log("EDIT MC QUESTION")
        pool.query("UPDATE questions SET type = ?, name = ?, title = ?, correctAnswer =?, choice1 =?, choice2=?, choice3=?, choice4=? WHERE survey_id = ? AND question_id = ?",
        [info.body.type, info.body.name, info.body.title, info.body.correctAnswer, info.body.choices[0], info.body.choices[1], info.body.choices[2], info.body.choices[3], info.body.survey_id, info.body.question_id],
         function (error, results, fields){
            if (error){
                reject();
            }else {
                resolve();
            }
        })
    })
    addAssessmentMSQuestion = async (info) => new Promise((resolve, reject) => {
        pool.query("INSERT INTO questions (survey_id,type,name,title,choice1,choice2, choice3) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [info.survey_id, info.type, info.name, info.title, info.choice1, info.choice2, info.choice3],
         function (error, results, fields){
            if (error){
                reject();
            }else {
                resolve();
            }
        })
    })
    editAssessmentMSQuestion = async (info) => new Promise((resolve, reject) => {
        console.log("INFO:::: ", info)
        pool.query("UPDATE questions SET name=?, title = ? WHERE survey_id = ? AND question_id = ?",
        [info.name, info.title, info.survey_id, info.question_id],
         function (error, results, fields){
            if (error){
                reject();
            }else {
                resolve();
            }
        })
    })
    addAssessmentFRQuestion = async (info) => new Promise((resolve, reject) => {
        pool.query("INSERT INTO questions (survey_id,type,name,title,input, auto) VALUES (?, ?, ?, ?, ?, ?)",
        [info.survey_id, info.type, info.name, info.title, info.input, info.autoComplete],
         function (error, results, fields){
            if (error){
                reject();
            }else {
                resolve();
            }
        })
    })
    editAssessmentFRQuestion = async (info) => new Promise((resolve, reject) => {
        console.log("Edit FR: ", info)
        pool.query("UPDATE questions SET name = ?, title = ? WHERE survey_id = ? AND question_id = ?",
        [info.name, info.title, info.survey_id, info.question_id],
         function (error, results, fields){
            if (error){
                reject();
            }else {
                console.log(results)
                resolve();
            }
        })
    })
    deleteAssessmentQuestion= async (survey_id, question_id) => new Promise((resolve, reject) => {
        pool.query("DELETE FROM questions WHERE survey_id = ? AND question_id = ?",
        [survey_id, question_id],
         function (error, results, fields){
            if (error){
                reject();
            }else {
                resolve();
            }
        })
    })
module.exports = {
    postResult,
    getSurveyQuestions,
    getSurveys,
    getTitle,
    getQuestions,
    addAssessmentMCQuestion,
    addAssessmentFRQuestion,
    addAssessmentMSQuestion,
    deleteAssessmentQuestion,
    editAssessmentFRQuestion,
    editAssessmentMSQuestion,
    editAssessmentMCQuestion
}
