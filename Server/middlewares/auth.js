const User = require('../models/user')
const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Auth Error" });
  try {
    const decoded = jwt.verify(token, "randomString");
    const user = await User.findById(decoded.user._id);
    req.user = user;
    next();
  } catch (e) {
    res.status(500).send({ message: "Invalid Token" });
  }
};
