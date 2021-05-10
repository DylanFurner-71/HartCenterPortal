var db = require('../db');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

getCompetencies = () => new Promise((resolve, reject) => {
    db.query('SELECT * FROM competency', function (error, results, fields) {
        if (error){
            reject();
        }else{
            resolve(results);
        }
    });
});

setCompetencyVideo = async (info) => new Promise((resolve, reject) => {
    db.query("INSERT INTO Competency_Videos(competency_id, video_link, vid_desc, title) VALUES (?, ?, ?, ?)",
    [info.body.competency_id, info.body.video_link, info.body.video_desc, info.body.title],
     function (error, results, fields){
        if (error){
            reject();
        }else {
            resolve();
        }
    })
})
setCompetencyQuote = async (info) => new Promise((resolve, reject) => {
    console.log(info)
    db.query("UPDATE Competency SET quote = ? WHERE competency_id = ?",
    [info.body.quote, info.body.competency_id],
     function (error, results, fields){
        if (error){
            reject();
        }else {
            resolve();
        }
    })
})
setCompetencyTitle = async (info) => new Promise((resolve, reject) => {
    db.query("UPDATE Competency SET competency = ? WHERE competency_id = ?",
    [info.body.title, info.body.competency_id],
     function (error, results, fields){
        if (error){
            reject();
        }else {
            resolve();
        }
    })
})
setCompetencyDesc = async (info) => new Promise((resolve, reject) => {
    db.query("UPDATE Competency SET competency_desc = ? WHERE competency_id = ?",
    [info.body.competency_desc, info.body.competency_id],
     function (error, results, fields){
        if (error){
            reject();
        }else {
            resolve();
        }
    })
})
setCompetencyImage = async (info) => new Promise((resolve, reject) => {
    db.query("UPDATE Competency SET imageName = ? WHERE competency_id = ?",
    [info.body.imageName, info.body.competency_id],
     function (error, results, fields){
        if (error){
            reject();
        }else {
            resolve();
        }
    })
})
getCompetenciesVideo = () => new Promise((resolve, reject) => {
    db.query('SELECT * FROM Competency_Videos', function (error, results, fields) {
        if (error){
            reject();
        }else{
            resolve(results);
        }
    });
});
getCompetenciesVideoQuiz = () => new Promise((resolve, reject) => {
    db.query('SELECT * FROM comp_questions', function (error, results, fields) {
        if (error){
            reject();
        }else{
            resolve(results);
        }
    });
});
addCompetenciesVideoQuizQuestion = (info) => new Promise((resolve, reject) => {
    db.query("INSERT INTO comp_questions(survey_id, type, name, title, correctAnswer, choice1, choice2, choice3, choice4, choiceOrder) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [info.body.survey_id, info.body.type, info.body.name, info.body.title, info.body.correctAnswer, info.body.correctAnswer, info.body.choices[1], info.body.choices[2], info.body.choices[3], "random"],
     function (error, results, fields){
        if (error){
            reject();
        }else {
            resolve();
        }
    });
})
DeleteCompetencyVideo = (req) => new Promise((resolve, reject) => {
    console.log(req)
    db.query("DELETE FROM Competency_Videos WHERE id = ?", [req], 
    function (error, results, fields){
        if (error){
            reject();
        } else {
            resolve();
        }
    })
})
DeleteCompetencyVideoQuiz = (req) => new Promise((resolve, reject) => {
    console.log(req)
    db.query("DELETE FROM comp_questions WHERE question_id = ?", [req], 
    function (error, results, fields){
        if (error){
            reject();
        } else {
            resolve();
        }
    })
})

module.exports = {
    getCompetencies,
    setCompetencyVideo,
    getCompetenciesVideo,
    setCompetencyQuote,
    setCompetencyDesc,
    setCompetencyTitle,
    DeleteCompetencyVideo,
    setCompetencyImage, 
    getCompetenciesVideoQuiz,
    addCompetenciesVideoQuizQuestion,
    DeleteCompetencyVideoQuiz
}