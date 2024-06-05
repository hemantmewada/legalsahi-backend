const express = require('express')
const config = require('./config/config')
const colors = require("colors");
const cors = require("cors");
const mongoConnect = require('./config/db');
const sendMail = require('./helpers/sendMail');
const { mailHTML2 } = require('./utils/mailHTML');
const enquiryRouter = require('./routes/EnquiryRouter');

const PORT = config.PORT || 3000;

const app = express()
// application level middlewares
app.use(cors())
app.use(express.json())
app.use("/", async (req, res) => {
  return res.status(200).send({
    status: true,
    message: "This domain's API managed by @hemantmewada"
  })
})
app.use("/api",enquiryRouter);

mongoConnect().then(() => {
    app.listen(PORT, () => {
      console.log(`Server app listening on port ${PORT}`.bgGreen)
    })
});