const { getOtherSurveys, AddOtherSurvey, deleteOtherSurvey} = require("../models/other_model");

module.exports = function other(app, logger) {
    app.route(`${process.env.HART}/other/survey/`) 
    .get((req, res, next) => {
      getOtherSurveys(req).then(response => {
        return res.send({response})
    }).catch((e)=>{
      return res.status(400).send(e);
    })})
    .post((req, res, next)=> { //probably append a new students list to the existing one
     try{
      AddOtherSurvey(req).then(resp => res.send(resp)).then(res => {return res}).catch((e)=>{
        return res.status(400).send(e);
      })
      } catch(error){
        console.log(error);
      }
    })
    app.route(`${process.env.HART}/other/survey/:id`) 
    .delete((req, res, next) => {
      let title = req.params.id
      try {
        deleteOtherSurvey(title).then(response => {
          return res.send({response});
        }).catch((e)=>{
          return res.status(400).send(e);
        })
      } catch(error){
        console.log(error)
      }
    })
}