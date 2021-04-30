var db = require('../db');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

getResponses = () => new Promise((resolve, reject) => {
    db.query('SELECT * FROM Student_Survey_Resp', function (error, results, fields) {
        if (error){
            reject();
        }else{
            resolve(results);
        }
    });
});

getResponseBySMUID = (req) => new Promise((resolve,reject)=>{
    console.log(req.params.id);
    db.query('SELECT * FROM Student_Survey_Resp WHERE smu_id = ?', [req.params.id], function (error, results, fields) {
        
        if (error){
            reject();
        }else{
            resolve(results);
        }
    });
});

//untested, it would be much easier if we could set up a test suite
saveResponse = (token) => new Promise((resolve, reject) => {
    db.query('INSERT INTO Student_Survey_Response SET ?',user,function (error, results, fields) {
        if (error){
            reject();
        }else {
            resolve();
        }
});
});


editResponse = (user)=> new Promise((resolve, reject) => {
    // db.query('INSERT INTO user SET ?',user,function (error, results, fields) {
    //     if (error){
    //         reject();
    //     }else {
    //         resolve();
    //     }
    // });
});

deleteResponse = () => new Promise((resolve, reject) => {
    // db.query('DELETE from user where ID > 0',function (error, results, fields) {
    //     if (error){
    //         reject();
    //     }else {
    //         resolve();
    //     }
    // });
});


// The code below export the above functios so it can be used in other files.
module.exports = {
    getResponses,
    getResponseBySMUID,
    saveResponse,
    editResponse,
    deleteResponse, 
};