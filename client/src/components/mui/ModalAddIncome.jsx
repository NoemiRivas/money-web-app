import React from "react";

//mui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddTransaccion from "../forms/AddTransaccion";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#0092b8",
  p: 4,
  borderRadius: "16px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
  button:{
    bgcolor: "#00598a",
    borderRadius:3,
    
  }
  
};

export default function ModalAddIncome() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="contained"
        color="primary"
        size="large"
        className="flex items-center justify-center"
        sx={style.button}
      >
        <AddIcon />
        <Typography sx={{ ml: 2, fontSize: 14 }}>nueva Transacción</Typography>
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style }>
          <Typography id="modal-modal-title" variant="h5" component="h2" color="white" textAlign={"center"} >
            Nueva transaccion
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            <AddTransaccion />
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
