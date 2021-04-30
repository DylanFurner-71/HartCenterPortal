const pool = require('../db')

module.exports = function survey(app, logger) {
    
    app.route(`${process.env.HART}/surveys/`) 
    .get((req, res, next) => {
      pool.query(
        "SELECT * FROM questions WHERE survey_id = 00001", (err, result) => {
          if (err) throw err;
          res.end(JSON.stringify(result));
          });   
    }) 
    .post((req, res, next)=> {
        try{
   
         postResult(req).then(resp => res.send(resp))
         } catch(error){
           console.log(error);
         }
       })

  
}