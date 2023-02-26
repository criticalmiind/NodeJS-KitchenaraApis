const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const multer = require("multer");
const baseUrl = require("../config/baseUrl");

// create a temporary file to store the uploaded video
const tempFilePath = path.join(__dirname, "../assets/videos");

let storage = multer.memoryStorage();

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: 1000000000 } // adjust the file size limit as per your requirement
}).single("file");

let uploadFileMiddleware = async (req, res, next) => {
  uploadFile(req, res, async (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ message: "File too large or invalid file type" });
    } else if (err) {
      return res.status(400).json({ message: err.message });
    }

    // decode the base64 video
    const base64Video = req.body.videoBase64;
    const decodedVideo = Buffer.from(base64Video, "base64");

    try {
      // create the directory to store the videos, if it doesn't exist
      const videoPath = path.join(baseUrl, "assets/foodVideos");
      if (!fs.existsSync(videoPath)) {
        fs.mkdirSync(videoPath, { recursive: true });
      }

      // create a unique filename for the video
      const videoName = Date.now() + "-" + Math.round(Math.random() * 1e9) + ".mp4";
      const videoFilePath = path.join(videoPath, videoName);

      // write the video to the file system
      const writeFile = promisify(fs.writeFile);
      // await writeFile(tempFilePath, decodedVideo);
      // await promisify(fs.rename)(tempFilePath, videoFilePath);

      // return the URL of the video
      // req.video = baseUrl + "/assets/foodVideos/" + videoName;
      req.video = "http://localhost:8000/assets/foodVideos/" + videoName;
      next();
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error });
    }
  });
};

module.exports = uploadFileMiddleware;


// const util = require("util");
// const multer = require("multer");
// const baseUrl = require("../config/baseUrl");
// let storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, baseUrl + "/assets/foodVideos/");
//   },
//   filename: (req, file, cb) => {
//     // console.log(file.originalname);
//     cb(null, Date.now() + file.originalname);
//   },
// });
// let uploadFile = multer({
//   storage: storage,
// }).single("file");
// // var uploadFiles = multer({ storage: storage }).array("multi-files", 10);
// let uploadFileMiddleware = util.promisify(uploadFile);
// module.exports = uploadFileMiddleware;
