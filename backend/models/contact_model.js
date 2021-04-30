var pool = require('../db');

getContactHeader = async () => new Promise((resolve, reject) => {
    pool.query('SELECT * FROM contactHeader',
    function(err, result, fields) {
      if (err){
        reject();
    }else{
        resolve(result);
    }
    });
  });
  getContactCardInfo = async () => new Promise((resolve, reject) => {
    pool.query('SELECT * from ccard',
     function (error, results, fields){
        if (error){
            reject();
        }else {
            resolve(results);
        }
    })
})
  editContactHeaderTitle = async (info) => new Promise((resolve, reject) => {
    pool.query("UPDATE contactHeader SET ContactTitle = ?",
    [info.body.title],    
    function(err, result, fields) {
      if (err){
        reject();
    }else{
        resolve(result);
    }
    });
  });
  editContactHeaderSchoolName = async () => new Promise((resolve, reject) => {
    pool.query("UPDATE contactHeader SET schoolName = ?",
    [info.body.name],        
    function(err, result, fields) {
      if (err){
        reject();
    }else{
        resolve(result);
    }
    });
  });
  editContactHeaderBuilding= async () => new Promise((resolve, reject) => {
    pool.query("UPDATE contactHeader SET buildingName = ?",
    [info.body.name],   
        function(err, result, fields) {
      if (err){
        reject();
    }else{
        resolve(result);
    }
    });
  });
  editContactHeaderAddress1 = async () => new Promise((resolve, reject) => {
    pool.query("UPDATE contactHeader SET addressLine1 = ?",
    [info.body.address1], 
        function(err, result, fields) {
      if (err){
        reject();
    }else{
        resolve(result);
    }
    });
  });
  editContactHeaderAddress2 = async () => new Promise((resolve, reject) => {
    pool.query("UPDATE contactHeader SET addressLine2 = ?",
    [info.body.address2], 
        function(err, result, fields) {
      if (err){
        reject();
    }else{
        resolve(result);
    }
    });
  });
  editContactHeaderFax = async () => new Promise((resolve, reject) => {
    pool.query("UPDATE contactHeader SET fax = ?",
    [info.body.fax], 
        function(err, result, fields) {
      if (err){
        reject();
    }else{
        resolve(result);
    }
    });
  });
  editContactHeaderEmail = async () => new Promise((resolve, reject) => {
    pool.query("UPDATE contactHeader SET email = ?",
    [info.body.email], 
        function(err, result, fields) {
      if (err){
        reject();
    }else{
        resolve(result);
    }
    });
  });
  function readImageFile(file) {
    // read binary data from a file:
    const bitmap = fs.readFileSync(file);
    const buf = new Buffer(bitmap);
    return buf;
  }
addContactCard = (info) => new Promise((resolve, reject) => {
    pool.query("insert into ccard(name, email, phoneNumber, jobTitle, imageName) VALUES (?, ?, ?, ?, ?)",
    [info.body.name, info.body.email, info.body.phoneNumber,  info.body.jobTitle, info.body.imageName],
    function (error, results, fields){
        if (error){
            reject();
        } else {
            resolve();
        }
    })
    //maybe call the image upload function here
  })



deleteContactCard = (req) => new Promise((resolve, reject) => {
    pool.query("DELETE FROM ccard WHERE id = ?", [req], 
    function (error, results, fields){
        if (error){
            reject();
        } else {
            resolve();
        }
    })
})

module.exports = {
    deleteContactCard,
    addContactCard,
    editContactHeaderSchoolName,
    editContactHeaderTitle,
    editContactHeaderFax,
    editContactHeaderAddress1,
    editContactHeaderAddress2,
    editContactHeaderEmail,
    editContactHeaderBuilding,
    getContactHeader,
    getContactCardInfo
}