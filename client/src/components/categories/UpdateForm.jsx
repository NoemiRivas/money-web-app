import React, { useContext, useState, useEffect } from "react";


export default function UpdateForm({category}) {

  const [formData, setFormData] = useState({
    _id: '',  
    name:  '',
    type: 'ingreso',
  });
  useEffect(() => {
    if (category) {
      setFormData({
        _id: category._id,
        name: category.name,
        type: category.type,
      });
    }
  }, [category]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData._id) {
      console.error("Error: No hay ID de categoría");
      return;
    }
    
    try {
      await modifyCategory(formData);
      console.log("Categoria actualizada exitosamente");
    } catch (error) {
      console.log("Error al actualizar la categoria");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <p className="text-sm font-light text-neutral-400">
  {category.type} {category.isDefault && "(Por defecto)"}
</p>
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
        modificar
      </button>
    </form>
  );
}
