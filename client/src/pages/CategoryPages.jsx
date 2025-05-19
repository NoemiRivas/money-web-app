import React, { useContext, useEffect } from "react";
import CategoryCard from "../components/categories/CategoryCard";
import { useCategories } from "../context/CategoriesContext";
import { useState } from "react";
import { Button, Container } from "@mui/material";
import ModalWrapper from "../components/mui/ModalWrapper";

export default function CategoryPages() {
  const { categories, getCategories } = useCategories();
  const [filterCategories, setFilterCategories] = useState("Todos");
  const types = ["Todos", "ingreso", "gasto"];

  const categoryFilter = categories.filter(
    (category) =>
      filterCategories === "Todos" || category.type === filterCategories
  );

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Container className="container fade-in">
      <div className="flex justify-between items-center gap-5 ">
        <div>
          <h2 className="text-4xl font-bold text-sky-800 mb-3">
            Crea nuevas categorias
          </h2>
          <p className="text-lg text-neutral-500">
            Creas nuevas categorias para tus transacciones, puedes crear tantas
            como necesites!
          </p>
        </div>
        <ModalWrapper />
      </div>

      <div className="flex justify-between gap-4 my-4">
        <h3 className="font-semibold text-3xl text-sky-700">
          Filtra por categorias de entrada
        </h3>
        <div className="flex">
          {types.map((types, i) => (
            <Button key={i} onClick={() => setFilterCategories(types)}>
              {types}
            </Button>
          ))}
        </div>
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <CategoryCard categories={categoryFilter} />
      </div>
    </Container>
  );
}
