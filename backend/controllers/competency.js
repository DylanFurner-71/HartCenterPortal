const pool = require('../db')
const hartPrefix = "/hartBE/v1";
const jwt = require('jsonwebtoken');
const { getCompetencies, setCompetencyVideo, getCompetenciesVideo,DeleteCompetencyVideo, setCompetencyTitle, setCompetencyDesc, setCompetencyQuote, setCompetencyImage, getCompetenciesVideoQuiz, addCompetenciesVideoQuizQuestion, DeleteCompetencyVideoQuiz } = require("../models/comptencies_model");

module.exports = function competency(app, logger) {
  app.route(`${process.env.HART}/competency/get/video`) 
.get( (req, res, next) => {
  getCompetenciesVideo(req).then(response => {
    return res.send({response});
})    
.catch((e)=>{
  return res.status(400).send(e);
})
});
app.route(`${process.env.HART}/competency/get/video/quiz/`) 
.get( (req, res, next) => {
  getCompetenciesVideoQuiz(req).then(response => {
    return res.send({response});
})    
.catch((e)=>{
  return res.status(400).send(e);
})
});
app.route(`${process.env.HART}/competency/video/quiz/`) 
.post( (req, res, next) => {
  addCompetenciesVideoQuizQuestion(req).then(response => {
    return res.send({response});
})    
.catch((e)=>{
  return res.status(400).send(e);
})
});
    app.route(`${process.env.HART}/competency/`) 
    .get( (req, res, next) => {
      getCompetencies(req).then(response => {
        return res.send({response});
    })    
    .catch((e)=>{
      return res.status(400).send(e);
    });
  })
  app.route(`${process.env.HART}/competency/insert/video`) 
  .post( (req, res, next) => {
    setCompetencyVideo(req).then(response => {
      return res.send({response});
  })    
  .catch((e)=>{
    return res.status(400).send(e);
  });
})
app.route(`${process.env.HART}/competency/edit/quote`) 
.put( (req, res, next) => {
  setCompetencyQuote(req).then(response => {
    return res.send({response});
})    
.catch((e)=>{
  return res.status(400).send(e);
});
})
    .delete((req, res, next) => {
      let title = req.params.id
      try {
        deleteOtherSurvey(title).then(response => {
          return res.send({response});
        })
      } catch(error){
        return res.status(400).send(error);
      }
    })
app.route(`${process.env.HART}/competency/edit/title`) 
.put( (req, res, next) => {
  setCompetencyTitle(req).then(response => {
    return res.send({response});
})    
.catch((e)=>{
  return res.status(400).send(e);
});
})
app.route(`${process.env.HART}/competency/edit/desc`) 
.put( (req, res, next) => {
  setCompetencyDesc(req).then(response => {
    return res.send({response});
})    
.catch((e)=>{
  return res.status(400).send(e);
});
})
app.route(`${process.env.HART}/competency/edit/image`) 
.put( (req, res, next) => {
  setCompetencyImage(req).then(response => {
    return res.send({response});
})    
.catch((e)=>{
  return res.status(400).send(e);
});
})
app.route(`${process.env.HART}/competency/video/:id`) 
.delete((req, res, next) => {
  let title = req.params.id
  try {
    DeleteCompetencyVideo(title).then(response => {
      return res.send({response});
    })
  } catch(error){
    return res.status(400).send(error);
  }
})
app.route(`${process.env.HART}/competency/video/question/:id`) 
.delete((req, res, next) => {
  let title = req.params.id
  try {
    DeleteCompetencyVideoQuiz(title).then(response => {
      return res.send({response});
    })
  } catch(error){
    return res.status(400).send(error);

  }
})
}
