var pool = require('../db');
  postResult = async (info) => new Promise((resolve, reject) => {
    pool.query("INSERT INTO Student_Survey_Resp (smu_id, Survey_Resp) VALUES (?, ?)",
    [info.body.smu_id, info.body.Survey_Resp],
     function (error, results, fields){
        if (error){
            reject();
        }else {
            resolve();
        }
    })
})
 

module.exports = {
    postResult
}
