const fs = require("fs");
const util = require("util");
const path = require("path");
const { promisify } = require("util");
const multer = require("multer");
const baseUrl = require("../config/baseUrl");

function uploadPhoto(req, res, next) {
  if (req.body.profilePic) {
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
  }else{
    next()
  }
}

module.exports = uploadPhoto;