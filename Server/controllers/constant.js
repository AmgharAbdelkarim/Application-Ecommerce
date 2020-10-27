
const jwt = require("jsonwebtoken");
module.exports = (res , user) => {
    console.log("token" , "eeeee");
    return jwt.sign(
        {user},
        "randomString", {
            expiresIn: 20
        },
        (err, token) => {
            if (err) throw err; 
            return res.send({ user, token });
        }
    );
};