const { getOtherSurveys, AddOtherSurvey, deleteOtherSurvey} = require("../models/other_model");
const { deleteImage } = require("../models/image_support_model");

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
        return res.status(400).send(error);
;
      }
    })
    app.route(`${process.env.HART}/other/survey/:id/:image`) 
    .delete((req, res, next) => {
      let title = req.params.id
      let image = req.params.image
      deleteImage(image)
      try {
        deleteOtherSurvey(title).then(response => {
          return res.send({response});
        }).catch((e)=>{
          return res.status(400).send(e);
        })
      } catch(error){
        return res.status(400).send(error);

      }
    })
}