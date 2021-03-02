// const pool = require('../db')
// const hartPrefix = "/hartBE/v1";
// const jwt = require('jsonwebtoken');

// module.exports = function login(app, logger) {
//   // GET /
//   // POST /reset
//   app.route(`${hartPrefix}/login/`) 
//   .post((req, res, next) => {  //the response here is all of the user's data minus smu password
// //POST: Login Account
//   //Authenticate user
//   let smu_email = req.body.smu_email;
//   let smu_id = req.body.smu_id;
//   if (smu_email && smu_id) {
//     pool.query('SELECT * FROM Student WHERE smu_email = ? AND smu_id = ?', [smu_email, smu_id], 
//     function(err, result, fields) {
//       if(result) {
//         let user = result;
//         let accessToken = jwt.sign("user", process.env.ACCESS_TOKEN_SECRET);
//         let response = {
//           accessToken: accessToken,
//           user: user,
//         }
//         res.send((response));
//       }
//       else  {
//         res.status(400).send('incorrect username/password')
//       }
//       res.end();
//     });
//   }
//   else {
//     res.send('please enter username and password');
//     res.end();
//   }
// })
//   .all((req, res, next) => { //idk
//   res.send('Other requests called'); 
//   }); 
//          app.route(`${hartPrefix}/student/:id`) 
//         .get((req, res, next) => {
//           pool.query(
//             "SELECT * FROM Student WHERE smu_id = ?", [req.params.id], (err, result) => {
//                 if (err) throw err;
//               res.end(JSON.stringify(result));
//               });   
//         })
//         .post((req, res, next) => { //probably append a new students list to the existing one
//             res.send('POST request called'); 
//             }) 
//             .all((req, res, next) => { //idk
//             res.send('Other requests called'); 
//             });  
// }