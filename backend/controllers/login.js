const pool = require('../db')
const hartPrefix = "/hartBE/v1";
const jwt = require('jsonwebtoken');

module.exports = function login(app, logger) {
  // POST
  app.route(`${process.env.HART}/login/`) 
  .post((req, res, next) => {  //the response here is all of the user's data minus smu password
//POST: Login Account
  //Authenticate user
  console.log(req.body);
  let smu_email = req.body.smu_email;
  let smu_id = req.body.smu_id;
  if (smu_email && smu_id) {
    pool.query('SELECT * FROM Student WHERE smu_email = ? AND smu_id = ?', [smu_email, smu_id], 
    function(err, result, fields) {
      if (err) throw err;
      if(result) {
        let info = result[0];
        console.log("result,", result);
        let accessToken = jwt.sign("user", process.env.ACCESS_TOKEN_SECRET);
        let response = {
          accessToken: accessToken,
          user: {info, isStudent: true},
        }
        console.log("responnse", response);
        res.send((response));
      }
      else  {
        res.status(400).send('incorrect username/password')
      }
      res.end();
    });
  }
  else {
    res.send('please enter username and password');
    res.end();
  }
})
  .all((req, res, next) => { //idk
  res.send('Other requests called'); 
  }); 
}