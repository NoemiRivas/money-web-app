import React, { createContext, useContext, useState } from "react";
import {
  getCategoriesRequest,
  createCategoriesRequest,
  deleteCategoriesRequest,
  updateCategoriesRequest,
} from "../hooks/categories";
const CategoriesContext = createContext();
export const useCategories = () => {
  const context = useContext(CategoriesContext);
  if (!context) {
    throw new Error("useTask must be used within a CategoriesProvider");
  }
  return context;
};

function CategoriesProvider({ children }) {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const res = await getCategoriesRequest();

      setCategories(res.data);
      console.log("Categorías recibidas:", res);
    } catch (error) {
      console.log(error);
    }
  };

  const createCategories = async (data) => {
    try {
      const res = await createCategoriesRequest(data);
      setCategories([...categories, res.data]);
      await getCategories();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCategories = async (id) => {
    try {
      const res = await deleteCategoriesRequest(id);
      if (res.status === 200) {
        setCategories(categories.filter((category) => category._id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateCategories = async (id, category) => {
    try {
      await updateCategoriesRequest(id, category);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CategoriesContext.Provider
      value={{
        categories,
        updateCategories,
        getCategories,
        createCategories,
        deleteCategories,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
}
export default CategoriesProvider;
