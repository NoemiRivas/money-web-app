const Category = require('../models/categoriesModel');

const createDefaultCategories = async (userId) => {
    const defaultCategories = [
      { name: "Alimentos", type: "gasto", userId, isDefault: true },
      { name: "Transporte", type: "gasto", userId, isDefault: true },
      { name: "Salud", type: "gasto", userId, isDefault: true },
      { name: "Salario", type: "ingreso", userId, isDefault: true },
      { name: "Inversiones", type: "ingreso", userId, isDefault: true },
    ];
  
    await Category.insertMany(defaultCategories);
  };
  
  module.exports = { createDefaultCategories };