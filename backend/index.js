
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const express = require("express");
// var path = require('path');
const cors = require("cors");
const student = require("./controllers/student.js");
const login = require("./controllers/login.js");
const Admin = require("./controllers/admin");
const { log, ExpressAPILogMiddleware } = require('@rama41222/node-logger');
const routes = require('./routes.js');
const app = express();
const path = "./public";
const hartPrefix = "/hartBE/v1";
app.use(cors());
// const publicPath = path.join(path, './public');
const publicPath = path;
app.use(express.json());
app.use(express.static(publicPath));
var router = express.Router()
// The code below allows the node js to find the public directory with the index.html file
// Node js is using port 3000/ and when you push to cloud it will use process.env.PORT
const port = process.env.PORT || 3000;
// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
const config = {
  name: "hartBE"
}
const logger = log({ console: true, file: false, label: config.name });
routes(app, logger);
// student(app, logger);
// Admin(app, logger);
// login(app, logger);
// mongooseConnect();

const pool = require('./db')


var server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});

app.get("/", (req, res) => {
  res.send("/ is running just fine");
});

app.post('/createUser',(req,res,next)=>{
  saveUser(req.body).then((result)=>{
      return res.header('x-auth', result.token).send({email : result.email});
  }).catch((e)=>{
      return res.status(400).send(e);
  });
});
app.route(`${hartPrefix}/student/`) 
.get((req, res, next) => {
  pool.query(
    "SELECT * FROM Student", (err, result) => {
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
       app.route(`${hartPrefix}/student/:id`) 
      .get((req, res, next) => {
        pool.query(
          "SELECT * FROM Student WHERE smu_id = ?", [req.params.id], (err, result) => {
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
// GET /
  // POST /reset
  app.route(`${hartPrefix}/login/`) 
  .post((req, res, next) => {  //the response here is all of the user's data minus smu password
//POST: Login Account
  //Authenticate user
  let smu_email = req.body.smu_email;
  let smu_id = req.body.smu_id;
  if (smu_email && smu_id) {
    pool.query('SELECT * FROM Student WHERE smu_email = ? AND smu_id = ?', [smu_email, smu_id], 
    function(err, result, fields) {
      if(result) {
        let user = result;
        let accessToken = jwt.sign("user", process.env.ACCESS_TOKEN_SECRET);
        let response = {
          accessToken: accessToken,
          user: user,
        }
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
         app.route(`${hartPrefix}/student/:id`) 
        .get((req, res, next) => {
          pool.query(
            "SELECT * FROM Student WHERE smu_id = ?", [req.params.id], (err, result) => {
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
    module.exports = server;