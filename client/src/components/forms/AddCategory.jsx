import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, MenuItem, Box } from "@mui/material";
import { useCategories } from "../../context/CategoriesContext";

export default function AddCategory() {
  const { createCategories, getCategories } = useCategories();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      type: "gasto",
    },
  });

  useEffect(() => {
    getCategories();
  }, []);

  const onSubmit = (data) => {
    createCategories(data);
    reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%" }}
    >
      <TextField
        label="Nombre de la categoría"
        {...register("name", { required: true })}
        variant="outlined"
        fullWidth
      />
      <TextField
        select
        label="Tipo"
        {...register("type", { required: true })}
        defaultValue="gasto"
        variant="outlined"
        fullWidth
      >
        <MenuItem value="ingreso">Ingreso</MenuItem>
        <MenuItem value="gasto">Gasto</MenuItem>
      </TextField>
      <Button type="submit" variant="contained" color="primary">
        Agregar
      </Button>
    </Box>
  );
}