const router = require("express").Router();
const {createCategory, deleteCategory, updateCategory, getCategories} = require("../controller/categoryController")
const middleware = require("../middleware/isAuthenticate")

router.post("/add-category",middleware, createCategory)
router.get("/get-categories/:id",middleware, getCategories)
router.put("/update-category/:id",middleware, updateCategory)
router.delete("/delete/:id",middleware, deleteCategory)




module.exports = router