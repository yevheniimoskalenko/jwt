const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express();

const authRoutes = require("./routes/auth.Routes")


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.use("/api/auth", authRoutes)
module.exports = app