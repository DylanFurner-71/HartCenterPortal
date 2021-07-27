var db = require('../db');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

getAllStudent = () => new Promise((resolve, reject) => {
    db.query('SELECT * from Student', function (error, results, fields) {
        if (error){
            reject();
        }else{
            resolve(results[0]);
        }
    });
});

saveStudent = (userinfo) => new Promise((resolve,reject)=>{
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(userinfo.password, salt);

    userinfo.password = hash;
    userinfo.token = jwt.sign({Owner : userinfo.Owner},'secretkey');

    db.query('INSERT INTO Student SET ?',userinfo,function(error,results,fields){
        if(error){
            reject();
        }else{
            resolve(userinfo);
        }
    })
});

getUserByToken = (token) => new Promise((resolve, reject) => {
    var decoded ;
    try{
        decoded = jwt.verify(token,'secretkey');
        resolve(decoded);
    }catch(e){
        reject();
    }
});

/* Functions only used for testing data */

saveUserForTest = (user)=> new Promise((resolve, reject) => {
    db.query('INSERT INTO user SET ?',user,function (error, results, fields) {
        if (error){
            reject();
        }else {
            resolve();
        }
    });
});




module.exports = {
    saveStudent,
    getUserByToken,
    saveUserForTest,
    removeAllUser
};

