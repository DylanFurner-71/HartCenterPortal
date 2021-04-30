const pool = require('../db')

module.exports = function admin(app, logger) {
    //Dylan
    app.route(`${process.env.HART}/admin/`) 
    .get((req, res, next) => {
      pool.query(
        "SELECT * FROM Admin", (err, result) => {
          if (err) throw err;
          res.end(JSON.stringify(result));
          });   
    }) 
    .post((req, res, next) => { //probably append a new students list to the existing one
    res.send('POST request called'); 
    }) 
    .all((req, res, next) => { //idk
    res.send('Other requests called'); 
    }); 

    //Omar
    app.route(`${process.env.HART}/getAllStudents/`) 
    .get((req, res, next) => {
      pool.query(
        "SELECT * FROM student", (err, result) => {
          if (err) throw err;
          res.end(JSON.stringify(result));
          });   
    }) 
    .post((req, res, next) => { //probably append a new students list to the existing one
    res.send('POST request called'); 
    }) 
    .all((req, res, next) => { //idk
    res.send('Other requests called'); 
    }); 
  
    //admin table access by smu_id in parameter
           app.route(`${process.env.HART}/admin/:id`) 
          .get((req, res, next) => {
            pool.query(
              "SELECT * FROM Admin WHERE smu_id = ?", [req.params.id], (err, result) => {
                  if (err) throw err;
                res.end(JSON.stringify(result));
                });   
          })
          .post((req, res, next) => { //probably append a new students list to the existing one
              res.send('POST request called'); 
              }) 
              .all((req, res, next) => { //idk
              res.send('Other requests called'); 
              }); 
}