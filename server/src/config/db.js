const mongoose = require("mongoose");

require("dotenv").config();

const DB_URI = process.env.DB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;
