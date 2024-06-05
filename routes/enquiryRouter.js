const express = require("express");
const {enquiryController} = require("../controllers/enquiryControllers");

const enquiryRouter = express.Router()

enquiryRouter.post("/enquiry",enquiryController);

module.exports = enquiryRouter