const nodemailer = require('nodemailer');

// create a transporter object with Gmail SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kamaljankamal4@gmail.com',
        pass: 'okoytszgjousicxm'
    }
});

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