const sendMail = require("../helpers/sendMail");
const enquiryModel = require("../models/enquiryModel");
const { mailHTML2 } = require("../utils/mailHTML");

const enquiryController = async (req, res) => {
    try {
        const { name, email, contact, relatedTo, enquiryFor } = req.body;
        const enquiry = new enquiryModel(req.body);
        await enquiry.save();
        await sendMail(
            '"Legal Sathi" <abhirewa6699@gmail.com>',
            // 'Legal Sathi',
            "abhirewa6699@gmail.com",
            `${name} has made a new enquiry`,
            mailHTML2(name, email, contact, relatedTo, enquiryFor)
        );
        return res.status(201).send({
            status: true,
            message: "Enquiry has been sent successfully."
        });
    } catch (error) {
        return res.status(500).send({
            status: false,
            message: `Error in enquiryController API ${error}`,
        })
    }
}

module.exports = {enquiryController}