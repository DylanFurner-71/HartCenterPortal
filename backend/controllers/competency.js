const pool = require('../db')
const hartPrefix = "/hartBE/v1";
const jwt = require('jsonwebtoken');
const { getCompetencies } = require('./models/comptencies_model');

module.exports = function competency(app, logger) {
    app.route(`${process.env.HART}/competency/`) 
    .get( (req, res, next) => {
      getCompetencies(req).then(response => {
        return res.send({response});
    })    
    .catch((e)=>{
      return res.status(400).send(e);
    });
  })
}