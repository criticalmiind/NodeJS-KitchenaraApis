const nodemailer = require('nodemailer');

// create a transporter object with Gmail SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kamaljankamal4@gmail.com',
        pass: 'okoytszgjousicxm'
    }
});

// // create a mailOptions object
// let mailOptions = {
//     from: 'yourgmailusername@gmail.com',
//     to: 'recipientemailaddress@example.com',
//     subject: 'Test Email from Node.js',
//     text: 'Hello World!'
// };

// // send the email
// transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Email sent: ' + info.response);
//     }
// });


function sendMail({ from = 'support@gmail.com', to = false, subject = 'Kitchenara', text = false }) {
    return new Promise((resolve, reject) => {
        if (!to) reject({ "success":false, "message":"to email is required", "response":{} })
        if (!text) reject({ "success":false, "message":"send email text is required!", "response":{} })
        let mailOptions = { from:from, to:to, subject: subject, text: text };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                reject({ "success":false, "message":"send email failed", "response":error })
            } else {
                resolve({ "success":true, "message":"send mail successfully!", "response":info })
            }
        });
    })
}

module.exports = {
    "sendMail": sendMail
}