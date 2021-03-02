import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });
import express from "express";
import cors from "cors";
import student from "./controllers/student.js";
import login from "./controllers/login.js";
import {mongooseConnect} from './mongooseConnect.js';
const Admin = require("./controllers/admin");
const { log, ExpressAPILogMiddleware } = require('@rama41222/node-logger');
const routes = require('./routes.js');
const app = express();
app.use(cors());
app.use(express.json());
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
const config = {
  name: "hartBE"
}
const logger = log({ console: true, file: false, label: config.name });
routes(app, logger);
student(app, logger);
Admin(app, logger);
login(app, logger);
// mongooseConnect();
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});

app.get("/", (req, res) => {
  res.send("/ is running just fine");
});
    module.exports = { app };