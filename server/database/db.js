require("dotenv").config();
const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("mongodb connected successfully");
  } catch (error) {
    console.log(error, error.message);
  }
};

module.exports = connectDB;
