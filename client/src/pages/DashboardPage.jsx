import React from "react";
//components
import TransaccionHistory from "../components/table/TransaccionHistory";
import TotalBalance from "../components/TotalBalance";
import { Container } from "@mui/material";

export default function DashboardPage() {
  return (

    <Container>
      <TotalBalance/>
      <TransaccionHistory/>
    </Container>
  );
}
