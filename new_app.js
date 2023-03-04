const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const { createServer } = require('http');
const { createReadStream } = require('fs');
const { promisify } = require('util');
const { pipeline } = require('stream');
const rangeParser = require('range-parser');
const morgan = require('morgan');

const videoPath = path.join(__dirname, 'assets', 'foodVideos', '16779522877522c5c62930907162a9eabeb00180cac6f.mp4');
const stat = promisify(fs.stat);

const PORT = process.env.PORT || 8001;
const server = createServer(app);

app.use(morgan('dev'));

// Route for serving the video stream
app.get('/video', async (req, res) => {
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
    res.status(200).set({
      'Content-Length': size,
      'Content-Type': 'video/mp4',
    });

    const fileStream = createReadStream(videoPath);
    pipeline(fileStream, res, (err) => {
      if (err) {
        console.error(err);
        res.sendStatus(500);
      }
    });
  }
});

// Serve the index page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
