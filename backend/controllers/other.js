const pool = require('../db')
const { getOtherSurveys } = require("../models/other_model");

module.exports = function other(app, logger) {
    app.route(`${process.env.HART}/other/survey/`) 
    .get( (req, res, next) => {
        getOtherSurveys(req).then(response => {
        return res.send({response});
    })    
    .catch((e)=>{
      return res.status(400).send(e);
    })
    });
}