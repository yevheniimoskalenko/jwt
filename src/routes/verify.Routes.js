const { Router } = require("express");
const router = Router()
const verefy = require("../controller/verify.controller")

//api/auth/verefy 
router.get("/verefy", verefy)


module.exports = router