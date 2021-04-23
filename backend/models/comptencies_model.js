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

module.exports = {
    getCompetencies,
}