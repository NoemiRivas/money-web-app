require("dotenv").config();
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config()
const KEY = process.env.SECRET_KEY;
const createdAccesToken = require("../utils/createdAccessToken") 

exports.register = async (req, res) => {
  const { fullname, email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user) return res.status(400).json(["el usuario ya existe"]);

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({
      fullname,
      email,
      password: passwordHash,
    });

    const userSaved = await newUser.save();
    const token = await createdAccesToken({ id: userSaved._id });
    res.cookie("token", token);

    res.status(201).json({
      mesage: "Usuario creado con exito",
      id: userSaved._id,
      fullname: userSaved.fullname,
      email: userSaved.email,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error del servidor",
      error: error.message,
    });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    console.log(user);
    
    if (!user) {
      return res.status(400).json("Usuario no encontrado");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json("Contraseña incorrecta");
    }

    try {
       const token = await createdAccesToken({ id: user._id });
       console.log(token);
       res.cookie("token", token);
    } catch (error) {
      console.log(error);
      
    }
   
   
    
    
    res.status(200).json({ id: user._id, fullname: user.fullname, email: user.email });
  
    
  } catch (error) {
    console.log(error);
  }
};

exports.updateUser = async (req, res) => {
  const { fullname, email, password } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      { _id: req.params.id },
      { fullname, email, password },
      { new: true }
    );
    res.status(200).json("Usuario actualizado con exito", user);
  } catch (error) {
    console.log(error);
  }
};

exports.logout = async (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.status(200).json("sesion cerrada con exito");
};

exports.profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);
  if (!userFound) return res.status(404).json("Usuario no encontrado");
  res.status(200).json({
    id: userFound._id,
    fullname: userFound.fullname,
    email: userFound.email,
  });
};

exports.verifyRequest = async (req, res) => {
  const { token } = res.cookie;
  if (!token) return res.status(401).json("No hay token");
  jwt.verify(token, KEY, async (err, user) => {
    if (err) return res.status(403).json("Token no valido");
    const userFound = await User.findById(user.id);
    if (!userFound) return res.status(404).json({ message: "unauthorized" });
    return res.status(200).json({
      id: userFound._id,
      fullname: userFound.fullname,
      email: userFound.email,
    });
  });
};

