const User = require('../models/user');
const bcrypt = require("bcryptjs");
const generateToken = require('./constant');

exports.subscribe = async (req, res, next) => {
    try {
        const { email, firstName, password , lastName, address} = req.body;
        const user = new User({ email, firstName, password , lastName, address, cart: { items: [] } });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        console.log(user.password)
        const userInfo = await user.save();
        
        return generateToken(res , userInfo);
    }
    catch {
        res.status(500).send({ error: "subscribe error" });
    }
};
exports.login = async (req, res, next) => {
    try {
        const { login, password } = req.body;
        console.log(req.body)
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

