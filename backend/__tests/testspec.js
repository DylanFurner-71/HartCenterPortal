// const express = require('express');
// const cors = require('cors');
// const student = require("../student.js");
// // import { mongooseConnect } from "./atlasConnect.js";
// const { log, ExpressAPILogMiddleware } = require('@rama41222/node-logger');
// const routes = require('../routes.js');
// const app = express();
// app.use(cors());
// app.use(express.json());
// var router = express.Router()

// // middleware that is specific to this router
// router.use(function timeLog (req, res, next) {
//   console.log('Time: ', Date.now())
//   next()
// })


// const config = {
//   name: "hartBE"
// }
// const logger = log({ console: true, file: false, label: config.name });
// routes(app, logger);
// student(app, logger);
// // admin(app, logger);

// app.listen(process.env.PORT, () => {
//   console.log(`Server is running on port: ${process.env.PORT}`);
// });

// const hartPrefix = "/hartBE/v1";
const mysql = require('mysql');
describe('My Test Suite', () => {
  beforeAll(() => {
var config = {
  user: 'root', //this has to be changed before deployment but i don't know how
  password: 'password',
  server: 'localhost', 
  database: 'db1',
  port: "3306",
  socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
};
var connection = mysql.createConnection({
host: config.server,
user: config.user,
password: config.password,
port: config.port,
database: config.database
});

    return connection.connect();

  });
  afterAll(() => {
    return connection.close();
  });
    it('My Test Case', () => {
      expect(true).toEqual(true);
    });
    const data = require('./testdata/studenttestdata.json');
    const app = express();
    it('Should get all students', () => {
      const { res } = app.get(`${hartPrefix}/student/`);
      expect(res).toEqual(stringify(data));
      
    });
    
});



