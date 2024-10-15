const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log(username, email, password);

    const userWithUsername = await User.findOne({ username: username });

    if (userWithUsername) {
      return res
        .status(400)
        .json({ message: "User already exists with that username" });
    }

    const userWithEmail = await User.findOne({ email: email });

    if (userWithEmail) {
      return res
        .status(400)
        .json({ message: "User already exists with that email" });
    }

    const user = new User({
      username,
      email,
      password,
    });

    user.save();

    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { usernameOrEmail, password } = req.body;
    console.log(usernameOrEmail, password);
    const query = usernameOrEmail.includes('@')
    ? { email: usernameOrEmail }
    : { username: usernameOrEmail };

    const user = await User.findOne(query);

    if (!user) {
      return res.status(400).json({ message: "Account not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const payload = {
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {
        expiresIn: "24h",
      },
      (err, token) => {
        if (err) {
          throw err;
        }
        res.status(200).json({ message: "Successful Login", token: token });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const fetchUserDetails = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid user ID format" });
    }

    const user = await User.findById(id);
    console.log(user);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
      // res.status(200).json(null);
    }

    return res.status(200).json(user);

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { registerUser, loginUser, fetchUserDetails };
