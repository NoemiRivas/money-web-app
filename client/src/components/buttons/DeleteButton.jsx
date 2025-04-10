import React, { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { UserContext } from "../../context/UserContext";

export default function DeleteButton({ categoryId }) {
  const { deleteCategory } = useContext(UserContext);

  const handleDelete = async () => {
    try {
        console.log("Intentando eliminar categoría con ID:", categoryId);
     await deleteCategory(categoryId);
     console.log("Categoría eliminada correctamente");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button onClick={handleDelete} className="cursor-pointer hover:scale-120 transition-all duration-200">
      <DeleteIcon />
    </button>
  );
}
