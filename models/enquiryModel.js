const mongoose = require("mongoose")

const enquirySchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    message: { type: String, required: true },
},{timestamps: true});

const enquiryModel = mongoose.model("Enquiry", enquirySchema)
module.exports = enquiryModel