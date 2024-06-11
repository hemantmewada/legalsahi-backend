const constantModel = require("../models/constantModel");

const getConstants = async (req, res, next) => {
    try {
        const constants = await constantModel.findOne({});
        req.body.constants = constants;
        next();
    } catch (error) {
        return res.status(500).send({
            status: false,
            message: `Error in getConstants ${error}`,
        })
    }
}
module.exports = { getConstants }