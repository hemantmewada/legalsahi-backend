const nodemailer = require("nodemailer");
const config = require("../config/config");

const transporter = nodemailer.createTransport({
    host: config.SMTP_HOST,
    port: config.SMTP_PORT,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: config.SMTP_USER,
        pass: config.SMTP_PASSWORD,
    },
});

module.exports = transporter;