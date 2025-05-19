import React from "react";
//components
import TransaccionHistory from "../components/table/TransaccionHistory";
import TotalBalance from "../components/TotalBalance";
import { Container } from "@mui/material";
import { useCategories } from "../context/CategoriesContext";
import UserSummaryBadget from "../components/auth/UserSummaryBadget";
import ModalWrapper from "../components/mui/ModalWrapper";

export default function DashboardPage() {
  const { categories } = useCategories();
  const topCategories = categories.slice(0, 3);
  return (
    <Container className="flex flex-col gap-4" >
      <div className="flex items-center justify-between lg:flex-row max-lg:flex-col">
        <UserSummaryBadget />
        <ModalWrapper />
      </div>
      <TransaccionHistory />
      <TotalBalance categories={topCategories} />
    </Container>
  );
}
