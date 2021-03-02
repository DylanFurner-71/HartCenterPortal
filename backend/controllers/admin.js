const pool = require('../db')
const hartPrefix = "/hartBE/v1";

module.exports = function admin(app, logger) {
  // GET /
  // POST /reset
  app.route(`${hartPrefix}/admin/`) 
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
         app.route(`${hartPrefix}/admin/:id`) 
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