const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const KEY = process.env.SECRET_KEY;
dotenv.config();
const isAutenticated = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) return res.status(404).json("no estas autorizado");
    jwt.verify(token, KEY, (err, user) => {
      if (err) return res.status(403).json("token no valido");
      req.user = user;

      next();
    });
  } catch (error) {
    res.status(401).json({ message: "algo salio mal con el token" });
  }
};

module.exports = isAutenticated;
