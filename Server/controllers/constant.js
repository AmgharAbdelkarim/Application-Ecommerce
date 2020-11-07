
const jwt = require("jsonwebtoken");
module.exports = (res , user) => {
    return jwt.sign(
        {user},
        "randomString",
        (err, token) => {
            if (err) throw err; 
            return res.send({ user, token });
        }
    );
};