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
    db.query("INSERT INTO Competency_Videos (competency_id, video_link, vid_desc) VALUES (?, ?, ?)",
    [info.body.competency_id, info.body.video_link, info.body.video_desc],
     function (error, results, fields){
        if (error){
            reject();
        }else {
            resolve();
        }
    })
})
setCompetencyQuote = async (info) => new Promise((resolve, reject) => {
    console.log("Updating quote");
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
getCompetenciesVideo = () => new Promise((resolve, reject) => {
    db.query('SELECT * FROM Competency_Videos', function (error, results, fields) {
        if (error){
            reject();
        }else{
            resolve(results);
        }
    });
});

module.exports = {
    getCompetencies,
    setCompetencyVideo,
    getCompetenciesVideo,
    setCompetencyQuote,
    setCompetencyDesc,
    setCompetencyTitle,

}