const pool = require('../db')
const hartPrefix = "/hartBE/v1";
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const {callLogin} = require('../models/login_model');
const { getAdmins } = require('../models/admin_model');
module.exports = function login(app, logger) {
  // POST
  app.route(`${process.env.HART}/login/`) 
  .post((req, res, next) => {  //the response here is all of the user's data minus smu password
//POST: Login Account

  let smu_email = req.body.smu_email;
  let smu_id = req.body.smu_id;

  if (smu_email && smu_id) {
   try {
      callLogin(smu_email, smu_id).then(response => { //once I finish this I will add a check to see i the user is admin and thenn call an admin login
        if (response && response.length > 0) {
          const isStudent = response[0].role.includes('admin') ? false : true;
        let user = {info: response[0], isStudent};
      let accessToken = jwt.sign({"user": user}, process.env.ACCESS_TOKEN_SECRET,  { algorithm: 'HS256' });
        return res.send({accessToken, user});
      }
    })  
  } catch(err) {
    console.log("ERR", err);
  }
  }    else {
    return res.status(400).send('incorrect username/password')
  }
})   
}
// .catch(err){
//   return res.status(400).send(err)
// }
        

/*
  //   callAdminLogin(smu_email, smu_id).then(response => { //once I finish this I will add a check to see i the user is admin and thenn call an admin login
  //     if (response != []){
  //     let user = {info: response[0], isStudent: false};
  //     let accessToken = jwt.sign({"user": user}, process.env.ACCESS_TOKEN_SECRET,  { algorithm: 'HS256' });
  //       return res.send({accessToken, user});
  // }  
// }) 
*/