const Expense = require("../models/expenseModel");


exports.addExpense = async (req, res) => {
  try {
    const { description, amount, category, type } = req.body;
    if (!req.user) {
      return res.status(401).json({
        message: "Usuario no autenticado.",
        success: false,
      });
    }
    if (!description || !amount || !category) {
      return res.status(400).json({
        message: "Something is missing!",
        success: false,
      });
    }
    const expense = await Expense.create({
      description,
      amount: Number(amount),
      category,
      type,
      userId: req.user._id,
    });

    return res.status(201).json({
      message: "New Expense Added.",
      expense,
      success: true,
    });
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
    const userId = req.user._id;

    const expenses = await Expense.find({ userId });

    if (!expenses) {
      return res.status(404).json({
        message: "No expenses found.",
        success: false,
      });
    }

    return res.status(200).json({
      expenses,
      success: true,
    });
  } catch (error) {
    console.log("error al obtener todas las entradas", error);
  }
};

exports.removeExpense = async (req, res) => {
  try {
    const expenseId = req.params.id;
    await Expense.findByIdAndDelete(expenseId);
    return res.status(200).json({
      message: "Expense removed.",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
exports.updateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const expense = await Expense.findByIdAndUpdate(
      { _id: id, userId: req.user._id },
      updateData,
      { new: true }
    );
    return res.status(200).json({
      message: "Expense Updated.",
      expense,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
