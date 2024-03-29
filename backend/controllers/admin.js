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
    //Omar - return all students probably going to delete this since i wrote this same route but he didn't know how teamwork functions 
    // app.route(`${process.env.HART}/getAllStudents/`) 
    // .get((req, res, next) => {
    //   pool.query(
    //     "SELECT * FROM student", (err, result) => {
    //       if (err) throw err;
    //       res.end(JSON.stringify(result));
    //       });   
    // }); 
    app.route(`${process.env.HART}/getBatch/`) 
    .get((req, res, next) => {
      pool.query(
        "SELECT DISTINCT(batch) FROM student", (err, result) => {
          if (err) throw err;
          res.end(JSON.stringify(result));
          });   
    }); 
    app.route(`${process.env.HART}/getStudy/`) 
    .get((req, res, next) => {
      pool.query(
        "SELECT DISTINCT(study) FROM student", (err, result) => {
          if (err) throw err;
          res.end(JSON.stringify(result));
          });   
    }); 
    app.route(`${process.env.HART}/getMessage/:theTerm`) 
    .get((req, res, next) => {
      pool.query(
        "SELECT thankyounote, session_date FROM debrief_info WHERE Term = ? and updated_data = (SELECT max(updated_data) from debrief_info)", [req.params.theTerm], (err, result) => {
          if (err) throw err;
          res.end(JSON.stringify(result));
          });   
    });   
    app.route(`${process.env.HART}/getStats/:theTerm/:theStudy`) 
    .get((req, res, next) => {
      pool.query(
        "SELECT * FROM student WHERE batch = ? and study = ?", [req.params.theTerm, req.params.theStudy], (err, result) => {
          if (err) throw err;
          res.end(JSON.stringify(result));
          });   
    });   
    app.route(`${process.env.HART}/insertMessage`) 
    .post((req, res, next) => {
      pool.query(
        "INSERT INTO debrief_info(session_date, thankyounote, updated_data, term) VALUES (?,?,?,?)", [req.body.date,req.body.note,req.body.newDate,req.body.term], (err, result) => {
          if (err) throw err;
          res.send('POST request called'); 
          });   
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
