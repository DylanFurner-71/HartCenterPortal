const pool = require('../db')
const hartPrefix = "/hartBE/v1";
const jwt = require('jsonwebtoken');
const {imageUpload} = require("../models/image_support_model");
module.exports = function image_support(app, logger, multer, storage, upload) {
  app.route(`${process.env.HART}/image/write/`) 
 .post( upload.single('file'),(req, res, err) => {
    const image = req.files.file
    const path = `./public/images/${image.name}`;
  
  
    image.mv(path, (error) => {
      if (error) {
        console.error(error)
        res.writeHead(500, {
          'Content-Type': 'application/json'
        })
        res.end(JSON.stringify({ status: 'error', message: error }))
        return
      }
      res.end(JSON.stringify({ status: 'success', path: '/images/' + image.name }))
    })
})
app.route(`${process.env.HART}/static/public/images/:imgName`) 
 .get((req, res, err) => {
  let imgName = req.params.imgName;
  // console.log(imgName)
  
    const path = `./public/images/${imgName}`;
    // console.log(path);
      if (err) {
        // res.writeHead(500, {
        //   'Content-Type': 'application/json'
        // })
        // res.end(JSON.stringify({ status: 'error', message: err }))
        // return
      }
      res.sendFile(`${imgName}`, { root: "./public/images" });
      // res.sendFile(path);
      // res.end(JSON.stringify({ status: 'success', path: '/images/' + image.name }))
    });
}