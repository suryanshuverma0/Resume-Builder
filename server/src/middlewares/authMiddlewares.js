const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

require("dotenv").config();

const authMiddleware = (req, res, next) => {
  let token = req.header("Authorization");
  if (token) {
    token = token.replace("Bearer ", "");
  } else if (!token) {
    return res
      .status(401)
      .json({ message: "No token, authorization denied !" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

module.exports = authMiddleware;
