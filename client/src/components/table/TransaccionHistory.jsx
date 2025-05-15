import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { useTransaction } from "../../context/TransactionContext";

export default function TransaccionHistory() {
  //context
  const { transactions, getTransactions } = useTransaction();
  useEffect(()=>{
    getTransactions()
  },[])

  //---------------------columns--------------------------------

  const columns = [
    {
      field: "description",
      headerName: "Descripción",
      width: 287,
      backgroundColor: "#0092b8",
    },
    { field: "type", headerName: "Tipo", width: 287 },
    { field: "category", headerName: "Categoría", width: 287 },
    {
      field: "amount",
      headerName: "Cantidad",
      width: 287,
    },
  ];
 ;

  const stayle = {
    button: {
      borderRadius: "8px",
      "&:hover": {
        backgroundColor: "#0077a3",
        color: "#fff",
      },
    },
  };

  return (
    <>
      <div className=" py-8 ">
        <h2 className="text-4xl font-bold text-sky-800">
          Transacciones agregadas ultimamente...{" "}
        </h2>
      </div>
      <div className="py-2">
        <Link to={"/transacciones"}>
          <Button sx={stayle.button}>ver todas</Button>
        </Link>
      </div>

      {transactions.length > 0 ? (
        <Paper
          sx={{
            width: "100%",

            "& .font-tabular-nums": {
              fontVariantNumeric: "tabular-nums",
            },
          }}
        >
          <DataGrid
            disableColumnResize
              getRowId={(row) => row._id}
              rows={transactions}
            columns={columns}
            pageSize={5}
            pageSizeOptions={[4]}
            sx={{
              backgroundColor: "#f0f4f8",
              borderRadius: "8px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              "--DataGrid-overlayHeight": "300px",
            }}
          />
        </Paper>
      ) : (
        <p className="text-center text-neutral-500">
          Aun no has agragado una nueva transaccion
        </p>
      )}
    </>
  );
}
