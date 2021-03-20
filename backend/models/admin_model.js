var db = require('../db');


getAdmins = async() => await new Promise((resolve, reject) => {
    db.query('SELECT * FROM Admin', function (error, results, fields) {
        if (error){
            reject();
        }else{
            resolve(results);
        }
    });
});


module.exports = {
    getAdmins,
}