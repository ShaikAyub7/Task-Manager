const User = require("../models/users");
const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors");

const auth = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ error: "Authentication invalid" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Authentication invalid" });
  }
};

module.exports = auth;
