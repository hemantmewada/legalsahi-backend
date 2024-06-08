const mongoose = require("mongoose")

const enquirySchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: Number, required: true },
    relatedTo: {
        type: String,
        enum: ["Lawyer", "Chartered Accountant", "Company Secretary", "Not sure"],
        required: true
    },
    enquiryFor: { type: String, required: true },
},{timestamps: true});

const enquiryModel = mongoose.model("Enquiry", enquirySchema)
module.exports = enquiryModel