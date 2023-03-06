const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const path = require('path');
const baseUrl = require('../config/baseUrl');

function takeScreenshot(name) {
    return new Promise((resolve, reject) => {
        const videoPath = path.join(baseUrl, 'assets', 'foodVideos', name);
        const thumbnailPath = path.join(baseUrl, 'assets', 'Thumbnail', `${name}.png`);

        const time = '00:00:01'; // specify the time in the video to take the thumbnail from (5 seconds in this case)
        try {
            ffmpeg(videoPath)
                .seek(time)
                .screenshots({
                    count: 1,
                    filename: `${name}.png`,
                    folder: path.join(baseUrl, 'assets', 'Thumbnail'),
                })
                .on('end', () => {
                    resolve(`${name}.png`);
                })
                .on('error', (err) => {
                    console.error(err);
                    resolve(null);
                });
        } catch (error) {
            resolve(null);
        }

    });
}


module.exports = {
    "takeScreenshot": takeScreenshot,
}