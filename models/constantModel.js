const mongoose = require("mongoose");

const constantSchema = mongoose.Schema({
    email: String,
});

const constantModel = new mongoose.model("Constant",constantSchema);
module.exports = constantModel;