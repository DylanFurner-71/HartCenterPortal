const pool = require('../db')
// const hartPrefix = "/hartBE/v1";

module.exports = function student(app, logger) {
    app.route(`${process.env.HART}/student/`) 
    .get((req, res, next) => {
      pool.query(
        "SELECT * FROM Student", (err, result) => {
          if (err) throw err;
          console.log(req);
          console.log("inside of student");
          res.end(JSON.stringify(result));
          });   
    }) 
    .post((req, res, next) => { //probably append a new students list to the existing one
    res.send('POST /student/ request called'); 
    }) 
    .all((req, res, next) => { //idk
    res.send('Other /student/ request requests called'); 
    }); 
    //student table but by id as req parameter
           app.route(`${process.env.HART}/student/:id`) 
          .get((req, res, next) => {
            pool.query(
              "SELECT * FROM Student WHERE smu_id = ?", [req.params.id], (err, result) => {
                  if (err) throw err;
                res.end(JSON.stringify(result));
                });   
          })
          .post((req, res, next) => { //probably append a new students list to the existing one
              res.send('POST /student/:id request called'); 
              }) 
              .all((req, res, next) => { //idk
              res.send('Other requests called'); 
              }); 
}