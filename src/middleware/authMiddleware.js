const { AuthencationError } = require("../core/ApiError");
const jwt = require('jsonwebtoken');

const isLoggedIn = async(req, res, next) => {
    const { token } = req.cookies;
    try {
        const payload = await jwt.verify(token, process.env.JWT_SECRET);
        return next();
    }
    catch (err) {
        console.log(err);
        throw new AuthencationError('Please login to continue');
    }
}

module.exports = {
    isLoggedIn
}