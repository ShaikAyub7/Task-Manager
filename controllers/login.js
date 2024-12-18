const User = require("../models/users");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const sendEmail = require("../utils/sendEmail");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const register = async (req, res) => {
  // const { name, email, password } = req.body;
  const users = await User.create(req.body);
  const token = users.createJWT();
  res.status(200).json({
    user: {
      email: users.email,
      lastName: users.lastName,
      loaction: users.location,
      name: users.name,
      token,
    },
  });
};

const login = async (req, res) => {
  const { email, password, name } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }
  console.log(email);
  const user = await User.findOne({ email });
  const userName = user.name;
  console.log(userName);
  sendEmail(email, userName);

  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid Credentials");
  }

  const token = user.createJWT();
  res.status(200).json({
    user: {
      email: user.email,
      name: user.name,
      token,
    },
  });
};
const logout = (req, res) => {
  res.send("register");
};
module.exports = {
  register,
  login,
  logout,
};
