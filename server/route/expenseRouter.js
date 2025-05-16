const router = require("express").Router();
const {addExpense, getAllExpenses,removeExpense,updateExpense,getExpenseById } = require("../controller/expenseController")
const clearkAuth = require("../middleware/clearkAuth")

router.post("/add-expense",clearkAuth, addExpense)
router.get("/all-expenses",clearkAuth, getAllExpenses)
router.get("/getExpense/:id", clearkAuth,getExpenseById)
router.delete("/remove/:id", clearkAuth,removeExpense)
router.put("/update/:id",clearkAuth, updateExpense)


module.exports = router