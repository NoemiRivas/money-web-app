const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config()

const createdAcessToken=(payload)=> {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.SECRET_KEY,
      {
        expiresIn: "1d",
      },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
}
module.exports = createdAcessToken;