const fs = require("fs");
const util = require("util");
const path = require("path");
const { promisify } = require("util");
const multer = require("multer");
const baseUrl = require("../config/baseUrl");

function uploadPhoto(req, res, next) {
  const { profilePic, thumbnail } = req.body;
  let base64 = false
  if (profilePic) base64 = profilePic
  if (thumbnail) base64 = thumbnail
  if (base64) {
    const base64Data = base64.replace(/^data:image\/png;base64,/, ""); // remove the data:image/png;base64 prefix
    const fileName = `${Date.now()}.png`; // generate a unique filename
    let fileFolder = 'Photos'
    if(thumbnail) fileFolder = 'Thumbnail'
    const filePath = path.join(__dirname, "..", "assets", fileFolder, fileName);

    fs.writeFile(filePath, Buffer.from(base64Data, "base64"), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Error saving profile picture" });
      }
      // req.profilePicUrl = `/assets/profilePics/${fileName}`;
      if (profilePic) req.body.profilePic = `${req.protocol}://${req.headers.host}/api/get/photo/${fileName}`;
      if (thumbnail) req.body.thumbnail = `${req.protocol}://${req.headers.host}/api/get/thumbnail/${fileName}`;

      next();
    });
  }else{
    next()
  }
}

module.exports = uploadPhoto;