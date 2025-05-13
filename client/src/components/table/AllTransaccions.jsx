import React, { useContext, useMemo } from "react";
import { UserContext } from "../../context/UserContext";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ModalUpdateTransaction from "../mui/ModalUpdateTransaction";
import { Link } from "react-router-dom";
import { Button, Container, Paper } from "@mui/material";
import ModalWrapper from "../mui/ModalWrapper";

export default function AllTransaccions() {
  const { transactions, loading, removeTransaction } = useContext(UserContext);

  const columns = useMemo(() => [
    { field: "date", headerName: "Fecha", width: 150 },
    { field: "description", headerName: "Descripción", width: 300 },
    { field: "type", headerName: "Tipo", width: 150 },
    { field: "category", headerName: "Categoría", width: 150 },
    { field: "amount", headerName: "Cantidad", width: 150 },
    {
      field: "col5",
      headerName: "Accion",
      width: 150,
      renderCell: (params) => (
        <IconButton
          variant="contained"
          color="##171717"
          onClick={() => removeTransaction(params.row.id)}
        >
          <DeleteIcon />
        </IconButton>
      ),
    },
    {
      field: "col6",
      headerName: "Modficar",
      width: 80,
      renderCell: (params) => (
        <div className="cursor-pointer">
          <Link to={`/update/${params.row.id}`}>
            <Button>Modificar</Button>
          </Link>
        </div>
      ),
    },
  ]);
  if (loading) {
    return <p>Cargando transacciones...</p>;
  }
  return (
    <Container className="fade-in ">
      <div className="mb-6 flex justify-between items-center  max-sm:flex-col max-sm:items-start max-sm:gap-5">
        <div className=" py-8 ">
          <h2 className="text-4xl font-bold text-sky-800">
            Todas las trasacciones
          </h2>
        </div>
        <ModalWrapper />
      </div>
      <Paper sx={{ width: "full" }}>
        <DataGrid
          rows={transactions}
          columns={columns}
          disableColumnResize
          pageSize={5}
          pageSizeOptions={4}
        />
      </Paper>
    </Container>
  );
}
