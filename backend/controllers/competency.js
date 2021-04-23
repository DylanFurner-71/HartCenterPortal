const pool = require('../db')
const hartPrefix = "/hartBE/v1";
const jwt = require('jsonwebtoken');
const { getCompetencies, setCompetencyVideo, getCompetenciesVideo } = require("../models/comptencies_model");

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
    console.log("REQUEST", req.body)
    setCompetencyVideo(req).then(response => {
      console.log("RESPONSE:::::", response);
      return res.send({response});
  })    
  .catch((e)=>{
    return res.status(400).send(e);
  });
})

}