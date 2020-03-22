const { Router } = require("express");
const router = Router()
const { login, create } = require("../controller/auth.controller")

// /api/auth/login
router.post("/login", login)
// /api/auth/create
router.post("/create", create)

module.exports = router