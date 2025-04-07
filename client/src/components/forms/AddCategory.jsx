import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
export default function AddCategory() {
  const { addCategory } = useContext(UserContext);
  const [formData, setFormData] = useState({
    name: "",
    type: "gasto",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCategory(formData);
    setFormData({
      name: "",
      type: "gasto",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre de la categoria"
        value={formData.name}
        name="name"
        onChange={handleChange}
        className="w-full p-2 my-2 border-2 border-gray-300 rounded-md"
      />

      <select
        className="w-full p-2 my-2 border-2 border-gray-300 rounded-md"
        name="type"
        value={formData.type}
        onChange={handleChange}
      >
        <option value="ingreso">Ingreso</option>
        <option value="gasto">Gasto</option>
      </select>

      <button type="submit" className="defaulbutton">
        Agregar
      </button>
    </form>
  );
}
