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
    { title: "Tus ingresos", amount: totals.ingreso, color: "text-green-600" },
    { title: "Tus gastos", amount: totals.gasto, color: "text-red-600" },
    {
      title: "Tu balance",
      amount: balance,
      color: balance >= 0 ? "text-green-600" : "text-red-600",
    },
  ];

  return (
    <div className="flex flex-col gap-2 items-start pt-4">
      <div className="flex gap-4 font-normal text-4xl ">
        <p>Gusto en verte de nuevo por aqui</p>
        <p className="font-semibold capitalize">{user.fullname}</p>
      </div>
      <p className=" text-sm font-light text-neutral-400">
        Puedes ver rapidamente tu situacion actual
      </p>
      <div className="flex gap-20  mt-10 max-lg:flex max-lg:gap-8 md:flex max-sm:flex-col">
        {financialData.map((item, index) => (
          <div key={index} className="flex flex-col">
            <div className="bg-neutral-100 border-2 border-neutral-300 rounded-md">
              <h3 className="text-md text-neutral-700 font-normal mx-2 py-2 max-lg:text-sm">
                {item.title}
              </h3>
              <div
                className={`bg-white w-[300px] p-4 rounded-xl md:w-[200px] sm:w-[180px] ${item.color}`}
              >
                <p className="text-3xl font-medium">
                  {item.amount.toLocaleString("es-ES", {
                    style: "currency",
                    currency: "USD",
                  })}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
