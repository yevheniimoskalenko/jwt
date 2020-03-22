const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const keys = require("../keys/keys")
const db = require("../db")

module.exports.AuthMiddleware = (req, res, next) => {
    const hreaders = req.headers.authorization;
    if (!hreaders) {
        return res.status(400).json({
            "status": "error",
            "payload": {
                "message": "Token not set"
            }
        })
    }
    const token = hreaders.replace("Bearer ", "");

    if (token === "") {
        return res.status(400).json({
            "status": "error", "payload": {
                "message": "empty token"
            }
        })
    }
    try {
        const obj = jwt.verify(token, keys.SECRET)
        req.email = obj;
        return next();
    } catch (e) {
        return res.status(401).json({
            "status": "error", "payload": {
                "message": "Can`t authorize"
            }
        })
    }

}