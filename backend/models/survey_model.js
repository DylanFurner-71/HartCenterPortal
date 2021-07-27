const pool = require('../db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

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
            // console.log(error)
            reject();
            // console.log(error)
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
        //also need to update the student table where this student's information is
        console.log("ADD MC QUESTION, breaking at the insert statement. it works. ", body)
        console.log(body.choicesOrder)
        pool.query("INSERT INTO questions(survey_id, type, name, title, correctAnswer,  choice1, choice2, choice3, choice4) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [body.survey_id, body.type, body.name, body.choicesOrder,body.title, body.correctAnswer, body.choices[0], body.choices[1], body.choices[2], body.choices[3]],
         function (error, results, fields){
            if (error){
                reject();
            }else {

                resolve(results);
            }
        })
    })
    editAssessmentMCQuestion = async (info) => new Promise((resolve, reject) => {
        //also need to update the student table where this student's information is
        //figure this out
        console.log("EDIT MC QUESTION")
        pool.query("UPDATE INTO questions(survey_id, type, name, title, choice1, choice2, choice3, choice4) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [info.body.survey_id, info.body.type, info.body.name, info.body.title, info.body.correctAnswer, info.body.choice[1], info.body.choice[2], info.body.choice[3]],
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
        pool.query("UPDATE INTO questions(survey_id, type, name, title, choice1, choice2, choice3, choice4) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [info.body.survey_id, info.body.type, info.body.name, info.body.title, info.body.correctAnswer, info.body.choice[1], info.body.choice[2], info.body.choice[3]],
         function (error, results, fields){
            if (error){
                reject();
            }else {
                resolve();
            }
        })
    })
    addAssessmentFRQuestion = async (info) => new Promise((resolve, reject) => {
        //also need to update the student table where this student's information is
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
        //also need to update the student table where this student's information is
        //figure this out
        pool.query("UPDATE INTO questions(survey_id, type, name, title, choice1, choice2, choice3, choice4) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [info.body.survey_id, info.body.type, info.body.name, info.body.title, info.body.correctAnswer, info.body.choice[1], info.body.choice[2], info.body.choice[3]],
         function (error, results, fields){
            if (error){
                reject();
            }else {
                resolve();
            }
        })
    })
    deleteAssessmentQuestion= async (info) => new Promise((resolve, reject) => {
        //also need to update the student table where this student's information is
        pool.query("INSERT INTO questions (?, ?, ?, ?, ?, ?, ?, ?, ?, ?) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [info.survey_id, info.body.Survey_Resp],
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
    deleteAssessmentQuestion
}
