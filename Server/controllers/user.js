const User = require('../models/user');
const bcrypt = require("bcryptjs");
const generateToken = require('./constant');
const jwt = require("jsonwebtoken");

exports.subscribe = async (req, res, next) => {
    const { email, firstName, password , lastName, address} = req.body;
    try {
        const user = await User.findOne({ email }).exec();
        if (!user) {
            const user = new User({ email, firstName, password , lastName, address, cart: { items: [] } });
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
            const userInfo = await user.save();     
            return generateToken(res , userInfo);
        }
        else {
            res.send("Email already exist");
        }
    }
    catch {
        res.status(500).send({ error: "subscribe error" });
    }
};
exports.login = async (req, res, next) => {
    try {
        const { login, password } = req.body;
        const user = await User.findOne({ email : login }).exec();
        const isMatch = await bcrypt.compare(password, user.password);
        console.log(user , isMatch);
        if (isMatch) {
            return generateToken(res , user);
        }       
        
    }
    catch {
        res.status(500).send({ error: "subscribe error" });
    }
};

exports.getUserWithToken = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Auth Error" });
  try {
    const decoded = jwt.verify(token, "randomString");
    const user = await User.findById(decoded.user._id);
    console.log(user , token)
    res.send(user);
  } catch (e) {
    res.status(500).send({ message: "Invalid Token" });
  }
};


