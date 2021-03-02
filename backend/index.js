
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const express = require("express");
// var path = require('path');
const cors = require("cors");
const { log, ExpressAPILogMiddleware } = require('@rama41222/node-logger');
const routes = require('./routes.js');
const app = express();
const path = "./public";
app.use(cors());
const jwt = require('jsonwebtoken');

const publicPath = path;
app.use(express.json());
app.use(express.static(publicPath));
var router = express.Router()
const port = process.env.PORT || 8000;
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

//define our model below
const { getResponses, getResponseBySMUID, saveResponse, editResponse, deleteResponse
} = require('./models/survey_Resp_Model');
const { getCompetencies } = require('./models/comptencies_model');


//end defining of models

app.get("/", (req, res) => {
  res.send("/ is running just fine");
});

//student table restful calls
app.route(`${process.env.HART}/student/`) 
.get((req, res, next) => {
  pool.query(
    "SELECT * FROM Student", (err, result) => {
      if (err) throw err;
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



          //admin table and access
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


            //login functionality
            //works outside of duo, authenticates with info stored in our sql database and jwtoken
  app.route(`${process.env.HART}/login/`) 
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

//restful calls on response, returning promises from here on

app.route(`${process.env.HART}/response/`) 
        .get((req, res, next) => {
          getResponses().then((result)=> {
            return res.send({result})
          })
          .catch((e)=>{
            return res.status(400).send(e);
        });
        })
        .post((req, res, next) => { //probably append a new students list to the existing one
            res.send('POST request called'); 
            }) 
            .all((req, res, next) => { //idk
            res.send('Other requests called'); 
            });  
            //end of response

//response with smu_id as param id=

            app.route(`${process.env.HART}/response/:id`) 
          .get( (req, res, next) => {
            getResponseBySMUID(req).then(response => {
              return res.send({response});
          })    
          .catch((e)=>{
            return res.status(400).send(e);
          });
        })
        .post((req, res, next) => { //probably append a new students list to the existing one
            res.send('POST request called'); 
            }) 
            .all((req, res, next) => { //idk
            res.send('Other requests called'); 
            });  
//competency
            app.route(`${process.env.HART}/competency/`) 
            .get( (req, res, next) => {
              getCompetencies(req).then(response => {
                return res.send({response});
            })    
            .catch((e)=>{
              return res.status(400).send(e);
            });
          })
          // .post((req, res, next) => { //probably append a new students list to the existing one
          //     res.send('POST request called'); 
          //     }) 
          //     .all((req, res, next) => { //idk
          //     res.send('Other requests called'); 
          //     }); 

          //end competency
   
    module.exports = server;