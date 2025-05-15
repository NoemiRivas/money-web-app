const router = require("express").Router();
const {register, login, updateUser, logout, profile, verifyRequest} = require("../controller/userController")
const middleware = require("../middleware/isAuthenticate")
const validateSchema = require("../middleware/validetor.middleware")
const {registerSchema, loginSchema}= require("../schemas/userSchema")

router.post("/register",validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.get("/update/:id", updateUser);
router.post("/logout", logout);
router.get("/profile", middleware, profile);
router.get("/verify", verifyRequest);

module.exports = router