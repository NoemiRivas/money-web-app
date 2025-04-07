import React from "react";
//components
import TransaccionHistory from "../components/table/TransaccionHistory";
import TotalBalance from "../components/TotalBalance";

export default function DashboardPage() {
  return (
    <main className="container mx-auto p-4 fade-in ">
      <TotalBalance/>
      <TransaccionHistory/>
    </main>
  );
}
