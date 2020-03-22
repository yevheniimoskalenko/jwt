const express = require("express")
const app = require("./app")

const port = process.env.port || 3000

app.listen(port, () => {
    console.log(`Server listining on http://localhost:${port}`)
})