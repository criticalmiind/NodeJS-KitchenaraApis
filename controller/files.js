const path = require("path");
const baseUrl = require("../config/baseUrl");
const fs = require('fs');
const { createReadStream } = require('fs');
const { promisify } = require('util');
const { pipeline } = require('stream');
const rangeParser = require('range-parser');

// const playVideo = (req, res) => {
//   const filePath = path.join(baseUrl, 'assets', 'foodVideos', req.params.filename);
//   res.sendFile(filePath);
// }

const getPhoto = (req, res) => {
  const filePath = path.join(baseUrl, 'assets', 'Photos', req.params.filename);
  res.sendFile(filePath);
}

const getThumbnail = (req, res) => {
  const filePath = path.join(baseUrl, 'assets', 'Thumbnail', req.params.filename);
  res.sendFile(filePath);
}

const playVideo = async(req, res) => {
  const videoPath = path.join(baseUrl, 'assets', 'foodVideos', req.params.filename);
  const stat = promisify(fs.stat);

  const { size } = await stat(videoPath);
  const range = req.headers.range;

  if (range) {
    const parts = rangeParser(size, range, { combine: true });

    // If the range can't be fulfilled.
    if (parts === -1 || parts === -2) {
      res.status(416).send('Range Not Satisfiable');
      return;
    }

    // Set headers for partial content
    res.status(206).set({
      'Content-Range': `bytes ${parts[0].start}-${parts[0].end}/${size}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': parts[0].end - parts[0].start + 1,
      'Content-Type': 'video/mp4',
    });

    const fileStream = createReadStream(videoPath, { start: parts[0].start, end: parts[0].end });
    pipeline(fileStream, res, (err) => {
      if (err) {
        console.error(err);
        res.sendStatus(500);
      }
    });
  } else {
    // Set headers for full content
    res.status(200).set({ 'Content-Length': size, 'Content-Type': 'video/mp4' });

    const fileStream = createReadStream(videoPath);
    pipeline(fileStream, res, (err) => {
      if (err) {
        console.error(err);
        res.sendStatus(500);
      }
    });
  }
}


module.exports = {
  "playVideo": playVideo,
  "getPhoto": getPhoto,
  "getThumbnail": getThumbnail
};
