const jwt =require("jsonwebtoken")
const User = require("../models/userModel")

const isAutenticated = async (req, res, next) => {
    let token = req.headers.authorization?.split(" ")[1];


   if(!token) return res.status(401).json({message:"No token found"})

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY)

        const user = await User.findById(decoded.id).select("-password"); // Busca al usuario en la base de datos
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }
    
        req.user = user;
      
       next()
    } catch (error) {
        res.status(401).json({message:"Invalid token"})
    }
}

module.exports = isAutenticated