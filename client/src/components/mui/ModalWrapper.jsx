import React, { useState } from "react";
import ModalAddIncome from "./ModalAddIncome";
import AddCategory from "../forms/AddCategory";
import { Button, IconButton, Tooltip } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CategoryIcon from "@mui/icons-material/Category";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

export default function ModalWrapper() {
  const [open, setOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  const handleOpen = (type) => {
    setModalType(type);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setModalType(null);
  };

  return (
    <>
      {/* Botones solo visibles en pantallas medianas/grandes */}
      <div className="hidden sm:flex sm:flex-col gap-2">
        <Button
          onClick={() => handleOpen("income")}
          startIcon={<MonetizationOnIcon />}
          variant="contained"
          color="primary"
        >
          Agregar Ingreso
        </Button>
        <Button
          onClick={() => handleOpen("category")}
          startIcon={<CategoryIcon />}
          variant="contained"
          color="primary"
        >
          Agregar Categoría
        </Button>
      </div>
      {/* Iconos solo visibles en pantallas pequeñas */}
      <div className="flex flex-col sm:hidden   max-lg:fixed max-lg:bottom-4 max-lg:right-4 gap-2 z-50 ">
        <Tooltip title="Agregar Ingreso">
          <IconButton color="primary" onClick={() => handleOpen("income")}>
            <MonetizationOnIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Agregar Categoría">
          <IconButton color="primary" onClick={() => handleOpen("category")}>
            <CategoryIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      </div>

      {/* Renderiza el modal según el tipo */}
      {modalType === "income" && (
        <ModalAddIncome open={open} handleClose={handleClose} />
      )}
      {modalType === "category" && (
        <AddCategory open={open} handleClose={handleClose} />
      )}
    </>
  );
}