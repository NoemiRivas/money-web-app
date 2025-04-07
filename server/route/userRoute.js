const router = require("express").Router();
const {register, login, logout,updateUser} = require("../controller/userController")
const middleware = require("../middleware/isAuthenticate")

router.post("/register", register)
router.post("/login", login)
router.put("/update",middleware, updateUser)
router.post("/logout",logout)

module.exports = router