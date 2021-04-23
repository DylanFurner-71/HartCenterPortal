const { getOtherSurveys, AddOtherSurvey } = require("../models/other_model");

module.exports = function other(app, logger) {
    app.route(`${process.env.HART}/other/survey/`) 
    .get((req, res, next) => {
      getOtherSurveys(req).then(response => {
        return res.send({response})
    });
    })
    .post((req, res, next) => { //probably append a new students list to the existing one
      AddOtherSurvey(req)
        }) 
        .all((req, res, next) => { //idk
        res.send('Other requests called'); 
        })
}