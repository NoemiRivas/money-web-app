require("dotenv").config();
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { createDefaultCategories } = require("../utils/defaultCategories");
const categoriesModel = require("../models/categoriesModel");

exports.register = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    if (!fullname || !email || !password) {
      return res.status(400).json({
        message: "All fields are required.",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exist with this email.",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      fullname,
      email,
      password: hashedPassword,
    });
    await createDefaultCategories(newUser._id);
    const tokenData = {
      id: newUser._id,
    };
    const token = jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
    return res.status(201).json({
      message: "Account created successfully.",
      user: {
        fullname: newUser.fullname,
        email: newUser.email,
      },
      categories: newUser.categories,
      token: token,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "Todos los campos son requeridos.",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Incorrect email or password",
        success: false,
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Incorrect email or password",
        success: false,
      });
    }
    const tokenData = {
      id: user._id,
    };
    const token = jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "none",
        secure: true,
      })
      .json({
        message: `Welcome back ${user.fullname}`,
        user: {
          id: user._id,
          fullname: user.fullname,
          email: user.email,
        },
        token: token,
        success: true,
      });
  } catch (error) {
    console.log(error);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const userId = req.user.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    let hashedPassword = user.password;
    if (password && password !== user.password) {
      hashedPassword = await bcrypt.hash(password, 10);
    }
    const Updateuser = await User.findOneAndUpdate(
      { _id: userId },
      { fullname, email, password: hashedPassword },
      { new: true }
    );

    return res.status(200).json({
      mesagge: "User updated successfully.",
      user: Updateuser,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.logout = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "User logged out successfully.",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
