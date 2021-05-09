const pool = require('../db')
const hartPrefix = "/hartBE/v1";
const jwt = require('jsonwebtoken');
const {    deleteContactCard,
    addContactCard,
    editContactHeaderSchoolName,
    editContactHeaderTitle,
    editContactHeaderFax,
    editContactHeaderAddress1,
    editContactHeaderAddress2,
    editContactHeaderEmail,
    editContactHeaderBuilding,
    getContactCardInfo,
    getContactHeader
} = require("../models/contact_model");
const { deleteImage } = require('../models/image_support_model');
module.exports = function competency(app, logger) {
  app.route(`${process.env.HART}/contact/contactInfo`) 
.get( (req, res, next) => {
    getContactHeader(req).then(response => {
    return res.send({response});
})    
.catch((e)=>{
  return res.status(400).send(e);
})
});
app.route(`${process.env.HART}/contact/contactCardInfo`) 
.get( (req, res, next) => {
    getContactCardInfo(req).then(response => {
    return res.send({response});
})    
.catch((e)=>{
  return res.status(400).send(e);
})
});
app.route(`${process.env.HART}/contact/contactCard/add`) 
.post( (req, res, next) => {
  addContactCard(req).then(response => {
    return res.send({response});
})    
.catch((e)=>{
  return res.status(400).send(e);
});
})
app.route(`${process.env.HART}/contact/contactInfo/title`) 
.put( (req, res, next) => {
    edi(req).then(response => {
    return res.send({response});
})    
.catch((e)=>{
  return res.status(400).send(e);
})
});
app.route(`${process.env.HART}/contact/contactInfo/schoolName`) 
.put( (req, res, next) => {
    edi(req).then(response => {
    return res.send({response});
})    
.catch((e)=>{
  return res.status(400).send(e);
})
});
app.route(`${process.env.HART}/contact/contactInfo/buildingName`) 
.put( (req, res, next) => {
    edi(req).then(response => {
    return res.send({response});
})    
.catch((e)=>{
  return res.status(400).send(e);
})
});
app.route(`${process.env.HART}/contact/contactInfo/addresslineone`) 
.put( (req, res, next) => {
    edi(req).then(response => {
    return res.send({response});
})    
.catch((e)=>{
  return res.status(400).send(e);
})
});
app.route(`${process.env.HART}/contact/contactInfo/addresslinetwo`) 
.put( (req, res, next) => {
    edi(req).then(response => {
    return res.send({response});
})    
.catch((e)=>{
  return res.status(400).send(e);
})
});
app.route(`${process.env.HART}/contact/contactInfo/fax`) 
.put( (req, res, next) => {
    edi(req).then(response => {
    return res.send({response});
})    
.catch((e)=>{
  return res.status(400).send(e);
})
});
app.route(`${process.env.HART}/contact/contactInfo/email`) 
.put( (req, res, next) => {
    edi(req).then(response => {
    return res.send({response});
})    
.catch((e)=>{
  return res.status(400).send(e);
})
});
app.route(`${process.env.HART}/contact/contactCardInfo/:id/:image`) 
.delete((req, res, next) => {
  let id = req.params.id
  let image = req.params.image
  deleteImage(image)
  try {
    deleteContactCard(id).then(response => {
      return res.send({response});
    })
  } catch(error){
    console.log(error)
  }
})
}