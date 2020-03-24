const jwt = require("jsonwebtoken");
const keys = require("../keys/keys")
const bcrypt = require("bcrypt");
const db = require("../db")
module.exports.login = async (req, res) => {
    const { email, password } = req.body;
    const hash = bcrypt.hashSync(db.password, keys.SOLT);
    const isPasswordCorrect = bcrypt.compareSync(password, hash)
    if (email == db.email) {
        if (isPasswordCorrect) {

            const token = jwt.sign({
                email: email,
                id: db.id
            }, keys.SECRET, { expiresIn: 60 * 60 })
            return res.json({ token })
        } else {
            return res.status(401).json({ "message": "Wrong password" })
        }

    } else {
        return res.status(404).json({ "message": "User not faund" })
    }

}
module.exports.create = async (req, res) => {
    const { email, password } = req.body
}