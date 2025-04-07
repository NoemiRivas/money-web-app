import React, { useContext, useMemo } from "react";
import { UserContext } from "../../context/UserContext";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import TableModalAdd from "../mui/TableModalAdd";
import ModalUpdateTransaction from "../mui/ModalUpdateTransaction";

export default function AllTransaccions() {
  const { transactions, loading, removeTransaction } = useContext(UserContext);

  const columns = useMemo(()=>[
    { field: "date", headerName: "Fecha", width: 80 },
    { field: "type", headerName: "Tipo", width: 200 },
    { field: "category", headerName: "Categoría", width: 400 },
    { field: "amount", headerName: "Cantidad", width: 300 },
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
          <ModalUpdateTransaction id={params.row.id} />
        </div>
      ),
    },
  ]);
  if (loading) {
    return <p>Cargando transacciones...</p>;
  }
  return (
    <section className="my-4 m-auto w-11/12 fade-in ">
      <div className="mb-6 flex justify-between items-center  max-sm:flex-col max-sm:items-start max-sm:gap-5">
        <div>
          <h2>Transacciones</h2>
          <p className="text-sm font-light text-neutral-400">
            Aqui puedes ver el riepilogo de todas tus transacciones.
          </p>
        </div>
        <TableModalAdd />
      </div>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid rows={transactions} columns={columns} disableColumnResize />
      </div>
    </section>
  );
}
