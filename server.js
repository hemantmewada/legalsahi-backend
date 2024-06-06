const express = require('express')
const config = require('./config/config')
const colors = require("colors");
const cors = require("cors");
const mongoConnect = require('./config/db');
const enquiryRouter = require('./routes/enquiryRouter');

const PORT = config.PORT || 3000;

const app = express()
// application level middlewares
app.use(cors())
app.use(express.json())

app.get("/", async (req, res) => {
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