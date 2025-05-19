import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, MenuItem, Box, Modal } from "@mui/material";
import { useCategories } from "../../context/CategoriesContext";

export default function AddCategory({ open, handleClose }) {
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
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%" }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: 400,
          bgcolor: "#fff",
          p: 4,
          borderRadius: 2,
          margin: "auto",
          mt: "10vh",
        }}
      >
        <TextField
          label="Nombre de la categoría"
          {...register("name", { required: true })}
          variant="outlined"
          fullWidth
          sx={style.styleInput}
        />
        <TextField
          select
          label="Tipo"
          {...register("type", { required: true })}
          defaultValue="gasto"
          variant="outlined"
          fullWidth
          sx={style.styleInput}
        >
          <MenuItem value="ingreso">Ingreso</MenuItem>
          <MenuItem value="gasto">Gasto</MenuItem>
        </TextField>
        <Button type="submit" variant="contained" color="primary">
          Agregar
        </Button>
      </Box>
    </Modal>
  );
}
