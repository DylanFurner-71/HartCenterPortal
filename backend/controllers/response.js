const { getResponses, getResponseBySMUID, saveResponse, editResponse, deleteResponse
} = require('../models/survey_Resp_Model');
module.exports = function response(app, logger) {

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
        })
}