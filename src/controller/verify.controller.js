const jwt = require("jsonwebtoken")
const kays = require("../keys/keys");

module.exports = async (req, res) => {
    const hreaders = req.headers.authorization;
    const token = hreaders.replace("Bearer ", "");
    if (token == "") {
        return res.status(401).json({ "message": "Not auth" })
    }
    try {
        const obj = jwt.verify(token, kays.SECRET);
        return res.status(200).json({ "status": "OK", "payload": { ...obj } })
    } catch (e) {
        return res.status(400).json({ "message": "Bad token" })
    }
}
