import { MenuItem, Select, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useTransaction } from "../../context/TransactionContext";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCategories } from "../../context/CategoriesContext";

export default function AddTransaccion() {
  const { categories, getCategories } = useCategories();
  const { oneTransaction, createTransactions } = useTransaction();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
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
       <Typography className=" text-white font-bold">
        Selecciona el tipo de categoria
      </Typography>
      <Select
        sx={style.styleInput}
        defaultValue="selecciona el tipo"
        {...register("category", { required: "Crea primero una categoria" })}
      >
        <MenuItem value="" >Selecciona una categoría</MenuItem>
        {categories.map((cat) => (
          <MenuItem key={cat._id} value={cat._id}>
            {cat.name}
          </MenuItem>
        ))}
      </Select>
      {errors.category && (
        <p className="text-red-500 font-bold  ">{errors.category.message}</p>
      )}
     
      <Typography className=" text-white font-bold">
        Nombre de la transaccion
      </Typography>
      <TextField
        sx={style.styleInput}
        type="text"
        placeholder="Nombre de la transaccion"
        {...register("description", { required: "Campo requerido" })}
      />
      {errors.description && (
        <p className="text-red-500 font-bold ">{errors.description.message}</p>
      )}
      <Typography className=" text-white font-bold">Cantidad</Typography>
      <TextField
        sx={style.styleInput}
        placeholder="Cantidad"
        type="number"
        {...register("amount", { required: "Campo requerido" })}
      />
      {errors.amount && <p className="text-red-500 font-bold ">{errors.amount.message}</p>}
      <Typography className=" text-white font-bold">
        Selecciona el tipo de transaccion
      </Typography>
      <Select
        {...register("type", { required: "selecciona el tipo de categoria" })}
        value={type}
        onChange={(e) => setValue("type", e.target.value)} // Actualiza el valor en react-hook-form
        sx={style.styleInput}
        placeholder="selecciona el tipo"
      >
        <MenuItem value="gasto">Gasto</MenuItem>
        <MenuItem value="ingreso">Ingreso</MenuItem>
      </Select>
      {errors.type && <p className="text-red-500 font-bold ">{errors.type.message}</p>}
      <button type="submit" className="defaulbutton my-4">
        Agregar
      </button>
    </form>
  );
}
