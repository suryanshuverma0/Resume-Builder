const express = require("express");
const { registerUser, loginUser, fetchUserDetails } = require("../controllers/userController");

const router = express.Router();

router.post("/register-user", registerUser);
router.post("/login-user", loginUser);
router.get("/fetch-user/:id", fetchUserDetails);

module.exports = router;
