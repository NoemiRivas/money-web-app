import React, { useEffect, useState } from "react";
import { useCategories } from "../../context/CategoriesContext";
import { useForm } from "react-hook-form";
import {  Button, Select, TextField, Modal, Box, MenuItem  } from "@mui/material";


export default function CategorySelector({categories = []}) {
  const {  getCategories, deleteCategories, updateCategories } =
    useCategories();
  const [editingCategory, setEditingCategory] = useState(null);

  const handleClose = () => {
  setEditingCategory(null);
  reset();
};

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    getCategories();
  }, []);

  const onEdit = (cat) => {
    setEditingCategory(cat);
    reset({ name: cat.name, type: cat.type });
  };

  const onSubmitEdit = async (data) => {
    await updateCategories(editingCategory._id, data);
    setEditingCategory(null);
    getCategories();
  };
  return (
    <>
      {categories.map((item, key) => (
        <div
          key={key}
          className=" w-4/6 bg-cyan-600 rounded-xl shadow-md cursor-pointer shadow-sky-700 p-4 text-left hover:shadow-lg transition"
        >
          <h2 className=" text-yellow-200 font-bold text-2xl mb-6">
            {item.name}
          </h2>
          <p className="text-white font-semibold text-md">{item.type}</p>
          <div className="mt-2 flex gap-2">
            <button
              className="text-blue-500 cursor-pointer "
              onClick={() => onEdit(item)}
            >
              ✏️
            </button>
            <button
              className="text-red-500 cursor-pointer "
              onClick={() => deleteCategories(item._id)}
            >
              🗑️
            </button>
          </div>
        </div>
      ))}
      <Modal
        open={!!editingCategory}
        onClose={handleClose}
        aria-labelledby="modal-editar-categoria"
        aria-describedby="modal-editar-categoria-descripcion"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            minWidth: 300,
          }}
        >
          <form
            onSubmit={handleSubmit(onSubmitEdit)}
            className="flex flex-col gap-2"
          >
            <TextField {...register("name")} label="Nombre" />
            <Select {...register("type")} defaultValue="" displayEmpty>
              <MenuItem value="" disabled>
                Selecciona tipo
              </MenuItem>
              <MenuItem value="gasto">Gasto</MenuItem>
              <MenuItem value="ingreso">Ingreso</MenuItem>
            </Select>
            <div className="flex justify-between gap-2 mt-4">
              <Button onClick={handleClose} type="button" color="secondary">
                Cancelar
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Guardar
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </>
  );
}
