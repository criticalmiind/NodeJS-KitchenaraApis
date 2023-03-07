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

function isEmailOrPhoneNumber(input) {
    // Check if input is a valid email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(input)) {
        return 'email';
    }

    // Check if input is a valid phone number
    const phoneRegex = /^\d{10}$/;
    const saudiRegex = /^((\+|00)966|0)?5[0-9]{8}$/;
    if (saudiRegex.test(input)) {
        return 'phoneNumber';
    }

    // If input is neither a valid email nor a valid phone number
    return false;
}


module.exports = {
    "takeScreenshot": takeScreenshot,
    "isEmailOrPhoneNumber": isEmailOrPhoneNumber,
}