const express = require("express");
const { registerUser, loginUser, fetchUserDetails } = require("../controllers/userController");
const auth = require("../middlewares/authMiddlewares")
const router = express.Router();

router.post("/register-user", registerUser);
router.post("/login-user", loginUser);
router.get("/fetch-user/:id",auth, fetchUserDetails);

module.exports = router;
