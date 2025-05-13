import React, { useState } from "react";
import OpenModal from "../buttons/OpenModal";
import ModalAddIncome from "./ModalAddIncome";

export default function ModalWrapper() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <OpenModal handleOpen={handleOpen} />
      <ModalAddIncome open={open} handleClose={handleClose} />
    </>
  );
}