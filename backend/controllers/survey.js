const { postResult, 
  getSurveys, 
  getQuestions, 
  getTitle,     
  addAssessmentMCQuestion,
  addAssessmentFRQuestion,
  addAssessmentMSQuestion, deleteAssessmentQuestion } = require("../models/survey_model");
module.exports = function survey(app, logger) {
    app.route(`${process.env.HART}/survey/`)
      .get( (req, res, next) => {
      getSurveys(req).then(response => {
        console.log("GetSurveys")
        console.log(response)
         res.send({response});
    })    
    .catch((e)=>{
      console.log(e)
       res.status(400).send(e);
  
    });
    })
    app.route(`${process.env.HART}/survey/edit/:id/mc`)
      .post( (req, res, next) => {
      console.log("EW ARE INSIDIDDIDIDIDIDIDID")
      const survey_id = req.params.id
      const send = {
        //req.body
      }
      console.log("requestssssssss:", req)
      addAssessmentMCQuestion(req).then(response => {
        console.log("response::: ", response)
        res.send({response});
    }).catch((e) => {
      console.log(e)
      res.status(400).send(e);
    })
  })
    .put( (req, res, next) => {
      const survey_id = req.params.id
      console.log("Survey_id", survey_id)
      editAssessmentMCQuestion({survey_id, questionid}).then(response => {
        res.send({response});

    })    
    .catch((e)=>{
      res.status(400).send(e);
    })
  })
  app.route(`${process.env.HART}'/survey/edit/:id/fr'`)
  .post( (req, res, next) => {
    const survey_id = req.params.id
    console.log("Survey_id", survey_id)
    addAssessmentFRQuestion({survey_id}).then(response => {
      res.send({response});
  }) .catch((e) => {
    console.log(e)
    res.status(400).send(e);
  })
})
  .put( (req, res, next) => {
    const survey_id = req.params.id
    console.log("Survey_id", survey_id)
    editAssessmentFRQuestion({survey_id, questionid}).then(response => {
       res.send({response});

  })    
  .catch((e)=>{
     res.status(400).send(e);
  })
})
app.route(`${process.env.HART}/survey/edit/:id/ms`)
.post( (req, res, next) => {
  const survey_id = req.params.id
  console.log("WE ARE INSIDE OF MS", req.body)
  console.log("Survey_id", survey_id)
  addAssessmentMSQuestion(req.body).then(response => {
     res.send({response});
})    
.catch((e)=>{
   res.status(400).send(e);
})
})  
.put( (req, res, next) => {
  const survey_id = req.params.id
  console.log("Survey_id", survey_id)
  editAssessmenMSCQuestion({survey_id}).then(response => {
    console.log("REEEEZ", response)
     res.send({response});

              }) .catch((e)=>{
                 res.status(400).send(e);
              })
        })
      
  app.route(`${process.env.HART}/survey/:id`) 
    .get( (req, res, next) => {
      const survey_id = req.params.id
    
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
      })
      .post((req, res, next)=> { //can't remember what goes here but there is a way to make sure the id is passed as a parameter
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
      getTitle(req.params.id).then(response => {
        return res.send({response});
      });

    }) 
  }
  