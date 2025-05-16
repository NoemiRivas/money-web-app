const router = require("express").Router();
const {createCategory, deleteCategory, updateCategory, getCategories} = require("../controller/categoryController")
const clerAuth = require("../middleware/clearkAuth")
router.post("/add-categories",clerAuth, createCategory)
router.get("/get-categories",clerAuth, getCategories)
router.put("/update-category/:id",clerAuth, updateCategory)
router.delete("/delete/:id",clerAuth, deleteCategory)




module.exports = router