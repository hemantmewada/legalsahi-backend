const express = require("express");
const { enquiryController } = require("../controllers/enquiryControllers");
const { getConstants } = require("../middlewares/commonMiddlewares");

const enquiryRouter = express.Router()

enquiryRouter.post("/enquiry", getConstants, enquiryController);

module.exports = enquiryRouter