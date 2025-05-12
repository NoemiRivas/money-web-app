/*
this is a componnet that show at dashboard the total balance
*/
import React from "react";
//components
import ModalAddIncome from "./mui/ModalAddIncome";
import UserSummaryBadget from "./auth/UserSummaryBadget";

export default function TotalBalance() {
  return (
    <>
      <section className="flex items-center justify-between">
        <UserSummaryBadget />
        <ModalAddIncome />
      </section>
    </>
  );
}
