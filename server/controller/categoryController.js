const express = require("express");
const router = express.Router();
const Category = require("../models/categoriesModel");


exports.createCategory = async (req, res) => {
    try {
        const { name, type } = req.body; 
        const userId = req.user._id; 
    
        const newCategory = await Category.create({ name, type, userId });
        res.status(201).json(newCategory);
      } catch (error) {
        res.status(500).json({ message: "Error al crear la categoría", error });
      }
}

exports.getCategories = async (req, res) => {
    try {
        const  userId  = req.user._id;
        const categories = await Category.find({userId});
        if (!categories) {
            console.log("Categoría no encontrada");
        }else{
            res.status(200).json({categories});
        }
    } catch (error) {
        console.log("Error al obtener las categorías", error);
        
    }

}

exports. updateCategory =async (req, res) => {
    try {
        const { id } = req.params;
        const { name, type } = req.body
        const category = await Category.findByIdAndUpdate(
            id,
            {name, type},
            {new: true}
        )
        if (!category) {
            console.log("Categoría no encontrada");
        }else{
            res.status(200).json(category)
        }
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar la categoría", error });
    }
}

exports.deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
    
        const category = await Category.findByIdAndDelete(id);
        if (!category) {
          return res.status(404).json({ message: "Categoría no encontrada" });
        }
    
        res.status(200).json({ message: "Categoría eliminada exitosamente" });
      } catch (error) {
        res.status(500).json({ message: "Error al eliminar la categoría", error });
      }
}
  
