
import { UserContext } from "../../context/UserContext";
import { useContext, useState } from "react";

export default function AddTransaccion() {
  const [formData, setFormData] = useState({
    description: "",
    amount: 0,
    category: "",
    date: "",
    type: "gasto",
  });
  //context
  const { addTransaction } = useContext(UserContext);
  //cambiar el estado de los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  //-------------refactorizado------------
  //api call
  const handleAddIncome = async (e) => {
    e.preventDefault();
    addTransaction(formData);
    setFormData({
      description: "",
      amount: 0,
      category: "",
      date: "",
      type: "gasto",
    });
  };
  //---------------------------------------------------------------------------------
  return (
    <form onSubmit={handleAddIncome}>
      <input
        type="text"
        placeholder="Nombre de la transaccion"
        className="w-full p-2 my-2 border-2 border-gray-300 rounded-md"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
      <select
        className="w-full p-2 my-2 border-2 border-gray-300 rounded-md"
        name="type"
        value={formData.type}
        onChange={handleChange}
      >
        <option value="gasto">Gasto</option>
        <option value="ingreso">Ingreso</option>
      </select>
      <input
        type="number"
        placeholder="Cantidad"
        className="w-full p-2 my-2 border-2 border-gray-300 rounded-md"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Categoria"
        className="w-full p-2 my-2 border-2 border-gray-300 rounded-md"
        name="category"
        value={formData.category}
        onChange={handleChange}
      />
      <input
        type="date"
        className="w-full p-2 my-2 border-2 border-gray-300 rounded-md"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />
      <button type="submit" className="defaulbutton">
        Agregar
      </button>
    </form>
  );
}
