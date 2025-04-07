import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { DataGrid } from "@mui/x-data-grid";
//THIS IS A COMPONENT THAT SHOWS THE HISTORY OF TRANSACTIONS AT DASHBOARPAGE

export default function TransaccionHistory() {
  //context
  const { transactions, loading } = useContext(UserContext);
  console.log("Transacciones:", transactions);
  //---------------------columns--------------------------------

  const columns = [
   
    
    { field: "description", headerName: "Descripción", width: 150 },
  { field: "type", headerName: "Tipo", width: 150 },
  { field: "category", headerName: "Categoría", width: 150 },
  { field: "amount", headerName: "Cantidad", width: 150 },
  ];

  if (loading) {
    return <p>Cargando transacciones...</p>;
  }

  return (
    <section className="max-w-[1100px] p-4 bg-white rounded-xl shadow-md mx-auto my-4 fade-in opacity-0 animate-fadeIn delay-200 ">
      <div className="mb-4">
        <h2>Historial </h2>
        <p className="text-sm font-light text-neutral-400">
          Aqui puedes ver todo el historial de tus transacciones.
        </p>
      </div>

      <div
        style={{
          height: 300,
          maxWidth: "100%",
          margin: "auto",
          marginTop: "4em",
          "@media (max-width: 1400px)": {
            maxWidth: "80%",
            marginTop: "2em",
          },
        }}
      >
        {transactions.length > 0 ? (
          <div className="h-[300px] w-full mt-6">
            <DataGrid rows={transactions} columns={columns}  />
          </div>
        ) : (
          <p className="text-center text-neutral-500">
            Aun no has agragado una nueva transaccion
          </p>
        )}
      </div>
    </section>
  );
}
