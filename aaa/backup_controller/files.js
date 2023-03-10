const path = require("path");
const baseUrl = require("../config/baseUrl");

const playVideo = (req, res) => {
  const filePath = path.join(baseUrl, 'assets', 'foodVideos', req.params.filename);
  res.sendFile(filePath);
}

const getPhoto = (req, res) => {
  const filePath = path.join(baseUrl, 'assets', 'Photos', req.params.filename);
  res.sendFile(filePath);
}

module.exports = {
  "playVideo": playVideo,
  "getPhoto": getPhoto
};
