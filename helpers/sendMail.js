const transporter = require("../utils/smtp");

const sendMail = async (from, to, subject, html) => {
    try {
        // send mail with defined transport object
        const info = await transporter.sendMail({from, to, subject, html});
        console.log("Message sent: %s", info.messageId);
        // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
    } catch (error) {
        console.log(`Error in sendMail func ${error}`);
    }
}

module.exports = sendMail