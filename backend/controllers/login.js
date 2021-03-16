const pool = require('../db')
const hartPrefix = "/hartBE/v1";
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const {callLogin} = require('../models/login_model');
module.exports = function login(app, logger) {
  // POST
  app.route(`${process.env.HART}/login/`) 
  .post((req, res, next) => {  //the response here is all of the user's data minus smu password
//POST: Login Account
  //Authenticate user
  // console.log(req.body);
  let smu_email = req.body.smu_email;
  let smu_id = req.body.smu_id;
  if (smu_email && smu_id) {
    callLogin(smu_email, smu_id).then(response => { //once I finish this I will add a check to see i the user is admin and thenn call an admin login
      let user = {info: response[0], isStudent: true};
      let accessToken = jwt.sign({"user": user}, process.env.ACCESS_TOKEN_SECRET,  { algorithm: 'HS256' });
        return res.send({accessToken, user});
    })      

  }    else {
    return res.status(400).send('incorrect username/password')
  }
})   
}
// .catch(err){
//   return res.status(400).send(err)
// }
        