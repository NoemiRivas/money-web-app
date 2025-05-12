import { MenuItem, Select, TextField } from "@mui/material";
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
  const style = {
    styleInput: {
      backgroundColor: "#fff",
      borderRadius: 3,
      outline:"none",
      border: "none",
       "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          }
    },
  };

  return (
    <form onSubmit={handleAddIncome} className="flex flex-col gap-2">
      <Select
        name="type"
        value={formData.type}
        onChange={handleChange}
        sx={style.styleInput}
      >
        <MenuItem value="gasto">Gasto</MenuItem>
        <MenuItem value="ingreso">Ingreso</MenuItem>
      </Select>{" "}
      <TextField sx={style.styleInput}
        type="text"
        placeholder="Nombre de la transaccion"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
      <TextField sx={style.styleInput}
        placeholder="Cantidad"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
      />
      <TextField sx={style.styleInput}
        type="text"
        placeholder="Categoria"
        name="category"
        value={formData.category}
        onChange={handleChange}
      />
      <TextField sx={style.styleInput}
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />
      <button type="submit" className="defaulbutton my-4">
        Agregar
      </button>
    </form>
  );
}
