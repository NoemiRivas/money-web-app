const express = require("express");
const router = express.Router();
const Category = require("../models/categoriesModel");


exports.createCategory = async (req, res) => {
  try {
    const { name, type } = req.body;
    const userId = req.auth.userId;

    const newCategory = await Category.create({ name, type, userId });
   
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ message: "Error al crear la categoría", error });
  }
};

exports.getCategories = async (req, res) => {
  try {
    const userId = req.auth.userId;
    const categories = await Category.find({ userId });

    if (!categories) {
      console.log("Categoría no encontrada");
    } else {
      res.status(200).json(categories);
    }
  } catch (error) {
    console.log("Error al obtener las categorías", error);
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const categories = await Category.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!categories)
      return res.status(404).json({ message: "transaccion no encontrada" });
    res.json(categories);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const categories = await Category.findByIdAndDelete({ _id: req.params.id });
    if (!categories)
      return res.status(404).json({ message: "transaccion no encontrada" });
    res.json(categories);
  } catch (error) {
    console.log(error);
  }
};
