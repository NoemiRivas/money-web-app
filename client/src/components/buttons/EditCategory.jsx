import React from "react";
import EditIcon from "@mui/icons-material/Edit";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import UpdateForm from "../categories/UpdateForm";
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
export default function EditCategory({category}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <button onClick={handleOpen} className="cursor-pointer hover:scale-120 transition-all duration-200">
        <EditIcon />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            modificar categoria
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 3 }}>
           <UpdateForm category={category} />
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
