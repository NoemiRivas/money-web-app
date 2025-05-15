const router = require("express").Router();
const {addExpense, getAllExpenses,removeExpense,updateExpense,getExpenseById } = require("../controller/expenseController")
const middleware = require("../middleware/isAuthenticate")

router.post("/add-expense",middleware, addExpense)
router.get("/all-expenses",middleware, getAllExpenses)
router.get("/getExpense/:id", middleware,getExpenseById)
router.delete("/remove/:id", middleware,removeExpense)
router.put("/update/:id",middleware, updateExpense)


module.exports = router