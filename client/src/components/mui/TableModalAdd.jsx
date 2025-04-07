import React from "react";

import AddCircleIcon from "@mui/icons-material/AddCircle";

//mui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddTransaccion from "../forms/AddTransaccion";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function TableModalAdd() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div
        onClick={handleOpen}
        className="cursor-pointer mr-30 flex items-center gap-2 md:mr-0"
      >
        <p className="text-sm font-light text-neutral-400 max-md:hidden max-sm:hidden">
          Agrega una nueva transaccion
        </p>
        <AddCircleIcon fontSize="large" color="action" />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Agregar Nueva Transaccion
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <AddTransaccion />
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
