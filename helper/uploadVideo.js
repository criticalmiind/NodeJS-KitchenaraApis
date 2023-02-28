const util = require("util");
const multer = require("multer");
const baseUrl = require("../config/baseUrl");
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, baseUrl + "/assets/foodVideos/");
  },
  filename: (req, file, cb) => {
    console.log(req.headers);
    cb(null, Date.now() + file.originalname);
  },
});
let uploadFile = multer({
  storage: storage,
}).single("file");
// var uploadFiles = multer({ storage: storage }).array("multi-files", 10);
let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;
