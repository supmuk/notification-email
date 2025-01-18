const nodemailer = require("nodemailer");
const {
    SMTP_EMAIL,
    SMTP_PASSWORD,
    SMTP_HOST,
    SMTP_PORT
} = require('./server-config')

// New Code of send mailer to send email
// const transporter = nodemailer.createTransport({
//     host: SMTP_HOST,
//     port: SMTP_PORT,
//     // secure: false, // true for port 465, false for other ports
//     auth: {
//         user: SMTP_EMAIL,
//         pass: SMTP_PASSWORD,
//     },
// });


var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: SMTP_EMAIL,
        pass: SMTP_PASSWORD
    }
});

module.exports = transporter;

