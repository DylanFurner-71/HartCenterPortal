const { postResult, getSurveys, getQuestions, getTitle } = require("../models/survey_model");
module.exports = function survey(app, logger) {
    app.route(`${process.env.HART}/survey/`)
    .get( (req, res, next) => {
      getSurveys(req).then(response => {
        console.log("GetSurveys")
        return res.send({response});
    })    
    .catch((e)=>{
      console.log(e)
      return res.status(400).send(e);
  
    });
    })
    app.route(`${process.env.HART}'/survey/edit/:id/:qid'`)
    .post( (req, res, next) => {
      const survey_id = req.params['id']
      const questionid = req.params['qid']
      addAssessmenntQuestion({survey_id, questionid}).then(response => {
        return res.send({response});
    })    
    .catch((e)=>{
      return res.status(400).send(e);
    })
  })

    app.route(`${process.env.HART}/survey/:id`) 
    .get( (req, res, next) => {
      const survey_id = req.params['id']
    
      console.log(survey_id, "<<<<<<<<<<<<<<<<")
      // console.log(req.params.id, "REQUEST>ID");
      getQuestions(survey_id).then(response => {
        // console.log(response)
        // console.log("GetSurvey----;lj;lk----------")
        return res.send({response});
    })    
    .catch((e)=>{
      console.log(e)
      return res.status(400).send(e);
  
    });
      }).post((req, res, next)=> { //can't remember what goes here but there is a way to make sure the id is passed as a parameter
        try{
          console.log("Posting results", req)
         postResult(req).then(resp => res.send(resp))
         } catch(error){
           console.log(error);
           return res.status(400).send(error);
         }
       })
      
      app.route(`${process.env.HART}/survey/title/:id`) 
    .get((req, res, next) => {
      getTitle(req.params['id']).then(response => {
        return res.send({response});
      });

    }) 
}