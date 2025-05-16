const Expense = require("../models/expenseModel");

exports.addExpense = async (req, res) => {
  try {
    const userId = req.auth.userId;
    const { description, amount, category, type } = req.body;

    const newExpense = new Expense({
      description,
      amount: Number(amount),
      category,
      type,
      user: userId,
    });

    const savedExpense = await newExpense.save();
    res.json(savedExpense);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error interno del servidor al agregar el gasto.",
      success: false,
    });
  }
};

exports.getAllExpenses = async (req, res) => {
  try {
    const userId = req.auth.userId;
    const expense = await Expense.find({
      user: userId,
    }).populate("category");

    if (!expense)
      return res.status(404).json({ message: "transaccion no encontrada" });
    res.json(expense);
    console.log("Transacciones obtenidas del backend:", expense);
  } catch (error) {
    console.log("error al obtener todas las entradas", error);
  }
};

exports.getExpenseById = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);
    if (!expense)
      return res.status(404).json({ message: "transaccion no encontrada" });
    res.json(expense);
  } catch (error) {
    console.log("error al obtener todas las entradas", error);
  }
};

exports.removeExpense = async (req, res) => {
  try {
    const expense = await Expense.findByIdAndDelete({ _id: req.params.id });
    if (!expense)
      return res.status(404).json({ message: "transaccion no encontrada" });
    res.json(expense);
  } catch (error) {
    console.log(error);
  }
};
exports.updateExpense = async (req, res) => {
  try {
    const expense = await Expense.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!expense)
      return res.status(404).json({ message: "transaccion no encontrada" });
    res.json(expense);
  } catch (error) {
    console.log(error);
  }
};
