require("dotenv").config();

const config = {
    PORT: String(process.env.PORT),
    MONGO_URL: String(process.env.MONGO_URL),
    SMTP_HOST: String(process.env.SMTP_HOST),
    SMTP_PORT: String(process.env.SMTP_PORT),
    SMTP_USER: String(process.env.SMTP_USER),
    SMTP_PASSWORD: String(process.env.SMTP_PASSWORD),
}
module.exports = config