const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express();

const authRoutes = require("./routes/auth.Routes")
const authVerify = require("./routes/verify.Routes")


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.use("/api/auth", authRoutes)
app.use("/api/auth", authVerify)
module.exports = app