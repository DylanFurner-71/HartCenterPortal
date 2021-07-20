const pool = require('../db')
const { postResult, getSurveys,getSurveyQuestions } = require("../models/survey_model");
module.exports = function survey(app, logger) {
  app.route(`${process.env.HART}/survey/`) 
  .get( (req, res, next) => {
    getSurveys(req).then(response => {
      console.log("HERE WE ARE")
      return res.send({response});
  })    
  .catch((e)=>{
    connsole.log(e)
    return res.status(400).send(e);

  });
    })
        .post((req, res, next)=> {
        try{
         postResult(req).then(resp => res.send(resp))
         } catch(error){
           console.log(error);
           return res.status(400).send(error);
         }
       })
      
      app.route(`${process.env.HART}/survey/get/:id`) 
    .get((req, res, next) => {
      getSurveyQuestions(req).then(response => {
        return res.send({response});
      });

    }) 
}