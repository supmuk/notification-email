require('dotenv').config();

module.exports = {
    SMTP_PASSWORD: process.env.SMTP_PASSWORD,
    SMTP_EMAIL: process.env.SMTP_EMAIL,
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT
}