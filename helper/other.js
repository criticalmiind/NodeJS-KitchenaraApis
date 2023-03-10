const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const path = require('path');
const baseUrl = require('../config/baseUrl');
const jwt = require("jsonwebtoken");

function generateToken(data1) {
    return new Promise((resolve, reject) => {
        jwt.sign(
            { data1 },
            "secretKey",
            { expiresIn: "10d" },
            (err, token) => {
                if (err) {
                    reject({ "token": false });
                }
                resolve({ "token": token });
            }
        );
    });
}


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
    // const phoneRegex = /^\d{10}$/;
    const saudiRegex = /^((\+|00)966|0)?5[0-9]{8}$/;
    if (saudiRegex.test(input)) {
        return 'phoneNumber';
    }

    // If input is neither a valid email nor a valid phone number
    return false;
}

function getTimeDiff(date1_str) {
    // Define the two dates as strings
    let date2_str = new Date().toISOString(); // Current date and time

    // Convert the strings to Date objects
    let date1 = new Date(date1_str.toISOString());
    let date2 = new Date(date2_str);

    // Calculate the time difference in milliseconds
    const diff_ms = Math.abs(date2 - date1);

    // Convert milliseconds to hours, days, weeks, etc.
    const diff_seconds = Math.floor(diff_ms / 1000);
    const diff_minutes = Math.floor(diff_seconds / 60);
    const diff_hours = Math.floor(diff_minutes / 60);
    const diff_days = Math.floor(diff_hours / 24);
    const diff_weeks = Math.floor(diff_days / 7);
    const diff_months = Math.floor(diff_days / 30);
    const diff_years = Math.floor(diff_months / 12);

    if (diff_seconds < 60) {
        return "Just Now"
    } else if (diff_minutes < 60) {
        return diff_minutes + " Minutes ago"
    } else if (diff_hours < 24) {
        return diff_hours + " Hours ago"
    } else if (diff_days < 7) {
        return (diff_days + " Days ago");
    } else if (diff_weeks < 4) {
        return (diff_weeks + " Weeks ago");
    } else if (diff_months < 12) {
        return (diff_months + " Months ago");
    } else {
        return (diff_years + " Years ago");
    }
}

// Shuffle function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

module.exports = {
    "takeScreenshot": takeScreenshot,
    "isEmailOrPhoneNumber": isEmailOrPhoneNumber,
    "getTimeDiff": getTimeDiff,
    "shuffleArray": shuffleArray,
    "generateToken": generateToken
}