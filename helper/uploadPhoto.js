const fs = require("fs");
const util = require("util");
const path = require("path");
const { promisify } = require("util");
const multer = require("multer");
const baseUrl = require("../config/baseUrl");

// let storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, baseUrl + "/assets/foodVideos/");
//   },
//   filename: (req, file, cb) => {
//     // console.log(file.originalname);
//     cb(null, `${req.protocol}://${req.get('host')}/get/video/${Date.now()}${file.originalname}`);
//   },
// });
// let uploadFile = multer({
//   storage: storage,
//   limits: { fileSize: 1000000000 } // adjust the file size limit as per your requirement
// }).single("file");
// let uploadFileMiddleware = util.promisify(uploadFile);
// module.exports = uploadFileMiddleware;


function uploadPhoto(req, res, next) {
  const base64Data = req.body.profilePic.replace(/^data:image\/png;base64,/, ""); // remove the data:image/png;base64 prefix
  const fileName = `${Date.now()}.png`; // generate a unique filename
  const filePath = path.join(__dirname, "..", "assets", "Photos", fileName);

  fs.writeFile(filePath, Buffer.from(base64Data, "base64"), (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error saving profile picture" });
    }
    // req.profilePicUrl = `/assets/profilePics/${fileName}`;
    req.body.profilePic = `${req.protocol}://${req.headers.host}/api/get/photo/${fileName}`;
    next();
  });
}

module.exports = uploadPhoto;