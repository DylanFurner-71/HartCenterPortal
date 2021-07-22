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
    console.log("IDFFOasdfasdf:", (survey_id))
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
    addAssessmentMCQuestion = async (info) => new Promise((resolve, reject) => {
        //also need to update the student table where this student's information is
        console.log("ADD MC QUESTION, breaking at the innsert statement. it works. ")
        pool.query("INSERT INTO questions(survey_id, type, name, title, choice1, choice2, choice3, choice4) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [info.body.survey_id, info.body.type, info.body.name, info.body.title, info.body.correctAnswer, info.body.choice[1], info.body.choice[2], info.body.choice[3]],
         function (error, results, fields){
            if (error){
                reject();
            }else {
                resolve();
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
    editAssessmentMSQuestion = async (info) => new Promise((resolve, reject) => {
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
    addAssessmentFRQuestion = async (info) => new Promise((resolve, reject) => {
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
