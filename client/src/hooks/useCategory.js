import { useState, useCallback } from "react";
import axios from "axios";
export const useCategory = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const addCategory = useCallback(async (formData) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setLoading(false);
        return;
      }
      const response = await axios.post(
        `http://localhost:5000/api/add-category`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response) {
        console.log("Categoria agregada exitosamente");
        await getCategories();
      } else {
        console.log("Error al agregar la categoria");
      }
    } catch (error) {
      console.log("ocurrio un error, no se guardo la categoria:", error);
    }
  });
  const getCategories = useCallback(async (userId) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setLoading(false);
        return;
      }

      const response = await axios.get(
        `http://localhost:5000/api/get-categories/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setCategories(response.data.categories);

      setLoading(false);
    } catch (error) {
      console.error("Error al obtener las categorías:", error);
      setLoading(false);
    }
  }, []);
  const modifyCategory = useCallback(async (formData) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setLoading(false);
        return;
      }
      const response = await axios.put(
        `http://localhost:5000/api/update-category/${formData._id}`,
        {
          name: formData.name,
          type: formData.type,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response) {
        console.log("Categoria actualizada exitosamente");
        await getCategories();
      } else {
        console.log("Error al actualizar la categoria");
      }
    } catch (error) {
      console.error("Error al actualizar la categoria:", error);
    }
  }, []);
  const deleteCategory = useCallback(async (categoryId) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setLoading(false);
        return;
      }
      const response = await axios.delete(
        `http://localhost:5000/api/delete/${categoryId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response) {
        console.log("no se ha encontrado la categoria");
      }
      await getCategories();
      alert("categoria eliminada");
    } catch (error) {
      console.error("Error completo:", error.response?.data || error.message);
    }
  });

  return {
    categories,
    getCategories,
    addCategory,
    modifyCategory,
    deleteCategory,
  };
};
