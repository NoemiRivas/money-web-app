import React, { useContext, useEffect } from "react";
import CategoryCard from "../components/categories/CategoryCard";
import ButtonCategoryModal from "../components/buttons/ButtonCategoryModal";
import { useCategories } from "../context/CategoriesContext";

export default function CategoryPages() {
const {categories, getCategories}= useCategories()


  useEffect(() => {
  getCategories();
}, []);
  /**
   * ADD THE FUNCTIONALITY WHEN THE ADD NEW CATEGORY AND SHOWS ALL DATA OF THE CATEGORY
   * * 1. save category automatically when user create new transaction
   * * * 2. show all categories in the category card
   */
  return (
    <main className="container flex flex-col gap-6 my-4 mx-auto fade-in">
      <div className="flex flex-wrap justify-between items-center gap-5 ">
        <div>
          <h2 className="text-lg font-semibold">categorias</h2>
          <p className="text-sm text-neutral-500">
            Modifica tus categorias favoritas
          </p>
        </div>
        <ButtonCategoryModal />
      </div>
      {
        /**
         * ADD LOGIC TO FILTER CATEGORIES BY TYPE
         * * 1. Create a state to hold the selected type (ingresos or gastos)
         * * 2. Create a function to handle the button click and set the selected type
         */
      }
      <div className="flex justify-center gap-4 my-4">
        <button className="bg-neutral-900 text-white px-4 py-2 rounded-lg cursor-pointer hover:scale-105 transition-all duration-300">ingresos</button>
        <button className="bg-neutral-900 text-white px-4 py-2 rounded-lg cursor-pointer hover:scale-105 transition-all duration-300">gastos</button>
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <CategoryCard />
      </div>
    </main>
  );
}
