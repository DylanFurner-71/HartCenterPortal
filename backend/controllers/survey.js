const { postResult, 
  getSurveys, 
  getQuestions, 
  getTitle,     
  addAssessmentMCQuestion,
  addAssessmentFRQuestion,
  addAssessmentMSQuestion, deleteAssessmentQuestion} = require("../models/survey_model");
module.exports = function survey(app, logger) {
    app.route(`${process.env.HART}/survey/`)
      .get( (req, res, next) => {
      getSurveys(req).then(response => {
         res.send({response});
    })    
    .catch((e)=>{
       res.status(400).send(e);
  
    });
    })
    app.route(`${process.env.HART}/survey/edit/:id/mc`)
      .post( (req, res, next) => {
      const survey_id = req.params.id
      const send = {
        //req.body
      }
      addAssessmentMCQuestion(req).then(response => {
        res.send({response});
    }).catch((e) => {
      res.status(400).send(e);
    })
  })
    .put( (req, res, next) => {
      const survey_id = req.params.id
      editAssessmentMCQuestion({survey_id, questionid}).then(response => {
        res.send({response});

    })    
    .catch((e)=>{
      res.status(400).send(e);
    })
  })
  app.route(`${process.env.HART}/survey/edit/:id/fr`)
  .post( (req, res, next) => {
    const survey_id = req.params.id
    addAssessmentFRQuestion(req.body).then(response => {
      res.send({response});
  }) .catch((e) => {
    res.status(400).send(e);
  })
})
  .put( (req, res, next) => {
    const survey_id = req.params.id
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
  addAssessmentMSQuestion(req.body).then(response => {
     res.send({response});
})    
.catch((e)=>{
   res.status(400).send(e);
})
})  
.put( (req, res, next) => {
  const survey_id = req.params.id
  editAssessmenMSCQuestion({survey_id}).then(response => {
     res.send({response});

              }) .catch((e)=>{
                 res.status(400).send(e);
              })
        })
      
  app.route(`${process.env.HART}/survey/:id`) 
    .get( (req, res, next) => {
      const survey_id = req.params.id
      getQuestions(survey_id).then(response => {
        return res.send({response});
    })    
    .catch((e)=>{
      return res.status(400).send(e);
  
    });
      })
      app.route(`${process.env.HART}/survey/1/:id`) 
      .post((req, res, next)=> { //can't remember what goes here but there is a way to make sure the id is passed as a parameter
        try{
         postResult(req).then(resp => res.send(resp))
         } catch(error){
          res.status(400).send(error);
         }
       })
    
      
      app.route(`${process.env.HART}/survey/title/:id`) 
    .get((req, res, next) => {
      getTitle(req.params.id).then(response => {
        res.send({response});
      });

    }) 
    app.route(`${process.env.HART}/survey/:qid/:id`)
    .delete((req, res, next) => {
      try {
        deleteAssessmentQuestion(req.params.id, req.params.qid).then(resp => {
          return res.send({resp});
        })
      } catch(error){
        res.status(400).send(error);
      }
      })
  }
  