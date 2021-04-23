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
getCompetenciesVideo = () => new Promise((resolve, reject) => {
    db.query('SELECT * FROM Competency_Videos', function (error, results, fields) {
        console.log("Getting competency videos")
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
    getCompetenciesVideo
}