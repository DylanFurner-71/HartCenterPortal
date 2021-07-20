
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const express = require("express");
let multer = require('multer');
const DIR = './uploads';
const image_support = require("./controllers/image_support")
const fileUpload = require("express-fileupload")
let storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, DIR);
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
let upload = multer({storage: storage});
// var path = require('path');
const cors = require("cors");
const { log, ExpressAPILogMiddleware } = require('@rama41222/node-logger');
const app = express();
const path = require('path');
app.use(cors());
const contact = require("./controllers/contact");
//controller imports 
const student = require("./controllers/student");
const login = require("./controllers/login");
const admin = require("./controllers/admin");
const response = require("./controllers/response");
const competency = require("./controllers/competency");
const other = require("./controllers/other");
const survey = require("./controllers/survey");
const publicPath = path;
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, '/public/')))
var router = express.Router()
const port = process.env.PORT || 8000;
// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
const config = {
  name: "hartBE"
}
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
   extended: false
}));

app.use(bodyParser.json());
app.use(fileUpload());
const logger = log({ console: true, file: false, label: config.name });
student(app, logger);
admin(app, logger);
login(app, logger);
response(app, logger);
competency(app, logger);
other(app, logger);
contact(app, logger);
survey(app, logger);
image_support(app, logger, multer, storage, upload)
var server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});
app.get("/", (req, res) => {
  res.send("/ is running just fine");
});

module.exports = server;