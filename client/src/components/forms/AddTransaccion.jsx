import { MenuItem, Select, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useTransaction } from "../../context/TransactionContext";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCategories } from "../../context/CategoriesContext";

export default function AddTransaccion() {
   const { categories, getCategories } = useCategories();
  const { oneTransaction, createTransactions } = useTransaction();
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      type: "", // Valor inicial para el campo "type"
      description: "",
      amount: "",
      category: "",
    },
  });
  const params = useParams();

  useEffect(() => {
    async function loadTransactions() {
      if (params.id) {
        const transaccion = await oneTransaction(params.id);
        setValue("type", transaccion.type);
        setValue("amount", transaccion.amount);
        setValue("category", transaccion.category);
        setValue("description", transaccion.description);
      }
    }
    loadTransactions();
  }, []);

  const onSubmit = handleSubmit((data) => {
    try {
      createTransactions(data);
    } catch (error) {
      console.log("error al crear la transaction", error);
    }
  });

  //---------------------------------------------------------------------------------
  const style = {
    styleInput: {
      backgroundColor: "#fff",
      borderRadius: 3,
      outline: "none",
      border: "none",
      "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
    },
  };
  const type = watch("type");
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2">
      <Select
        {...register("type", { required: true })}
        value={type}
        onChange={(e) => setValue("type", e.target.value)} // Actualiza el valor en react-hook-form
        sx={style.styleInput}
      >
        <MenuItem value="gasto">Gasto</MenuItem>
        <MenuItem value="ingreso">Ingreso</MenuItem>
      </Select>
      <TextField
        sx={style.styleInput}
        type="text"
        placeholder="Nombre de la transaccion"
        {...register("description", { required: true })}
      />
      <TextField
        sx={style.styleInput}
        placeholder="Cantidad"
       type= "number"
        {...register("amount", { required: true })}
      />
      <Select
  sx={style.styleInput}
  defaultValue=""
  {...register("category", { required: true })}
>
  <MenuItem value="">Selecciona una categoría</MenuItem>
  {categories.map((cat) => (
    <MenuItem key={cat._id} value={cat._id}>
      {cat.name}
    </MenuItem>
  ))}
</Select>

      <button type="submit" className="defaulbutton my-4">
        Agregar
      </button>
    </form>
  );
}
