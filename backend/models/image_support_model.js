var pool = require('../db');
const { unlink } = require('fs');

deleteImage = (info) => new Promise((resolve, reject) => {
    const path = `./public/images/${image}`
    unlink(path, (err) => {
      if (err) throw err
      console.log("Deleted filenane: ", path)
    })
    })
    module.exports = {
        deleteImage
    }