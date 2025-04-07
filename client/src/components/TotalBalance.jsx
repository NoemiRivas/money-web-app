/*
this is a componnet that show at dashboard the total balance
*/
import React from "react";
//components
import ModalAddIncome from "./mui/ModalAddIncome";
import UserSummaryBadget from "./auth/UserSummaryBadget";


const containerStyle =
  "max-w-[1100px] p-4 bg-white rounded-xl shadow-md flex justify-between items-center mx-auto my-4 gap-4 flex-col md:flex-row ";

export default function TotalBalance() {
  return (
    <section className={containerStyle}>
      <UserSummaryBadget />
      <ModalAddIncome />
    </section>
  );
}
