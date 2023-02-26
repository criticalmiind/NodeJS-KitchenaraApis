const util = require("util");
const multer = require("multer");
const baseUrl = require("../config/baseUrl");
const maxSize = 2 * 1024 * 1024;
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, baseUrl + "/assets/profilePicture/");
  },
  filename: (req, file, cb) => {
    // console.log(file.originalname);
    cb(null, Date.now() + file.originalname);
  },
});
let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("file");
// var uploadFiles = multer({ storage: storage }).array("multi-files", 10);
let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;
