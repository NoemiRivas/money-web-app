import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

// This component displays a summary of the user's financial data, including income, expenses, and balance.

export default function UserSummaryBadget() {
  const { transactions, user } = useContext(UserContext);

  const totals = transactions.reduce(
    (data, transaction) => {
      if (transaction.type === "ingreso") {
        data.ingreso += transaction.amount;
      } else if (transaction.type === "gasto") {
        data.gasto += transaction.amount;
      }
      return data;
    },
    { ingreso: 0, gasto: 0 }
  );

  const balance = totals.ingreso - totals.gasto;

  const financialData = [
    { title: "ingresos", amount: totals.ingreso, color: "text-yellow-200 " },
    { title: "gastos", amount: totals.gasto, color: "text-yellow-200 " },
    {
      title: "Total",
      amount: balance,
      color: balance >= 0 ? "text-green-300 " : "text-red-300",
    },
  ];

  return (
    <div className="flex flex-col gap-2 items-start pt-4">
      <div className="flex gap-6 font-bold text-4xl text-sky-800 ">
        <p>Gusto en verte de nuevo por aqui</p>
        <p className="capitalize text-blue-400">{user.fullname}</p>
      </div>
      <p className=" text-lg font-light text-neutral-400">
        Aqui puedes ver rapidamente tu situacion actual
      </p>
      <div className="flex gap-4  mt-4 max-lg:flex max-lg:gap-8 md:flex max-sm:flex-col ">
        {financialData.map((item, index) => (
          <div key={index} className="flex flex-col">
            <div className="bg-cyan-600 rounded-xl shadow-md shadow-sky-700 p-6 text-left hover:shadow-lg transition">
              <h3 className="text-lg  text-white font-bold mx-2 py-2 max-lg:text-sm capitalize">
                {item.title}
              </h3>
              <div
                className={`w-[300px] p-4 rounded-xl md:w-[200px] sm:w-[180px] ${item.color}`}
              >
                <p className="text-3xl font-medium">
                  {item.amount}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
