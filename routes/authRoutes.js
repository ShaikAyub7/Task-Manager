const express = require("express");
const { register, login, logout } = require("../controllers/login");
// // const { verifyOtpHandler } = require("../controllers/sendOtp");
// const authenticate = require("../middleware/authentication");
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);

// router.route("/verifyOtp").post(verifyOtpHandler);
module.exports = router;
