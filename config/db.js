const mongoose = require("mongoose");
const config = require("./config");

const mongoConnect = async () => {
    try {
        const conn = await mongoose.connect(config.MONGO_URL);
        console.log(`MONGO DB connect ${conn.connection.host}`.bgGreen);
    } catch (error) {
        console.log(`Error in mongoConnect function ${error}`.bgRed);
    }
}
module.exports = mongoConnect