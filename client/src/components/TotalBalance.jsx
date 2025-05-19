import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import CategorySelector from "./categories/CategoryCard";

import { useCategories } from "../context/CategoriesContext";

export default function TotalBalance({ categories }) {
  const [IsShowed, setIsShowed] = useState(true);
  const { getCategories } = useCategories();
  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    if (categories && categories.length > 0) {
      setIsShowed(false);
    }
  }, [categories]);
  return (
    <>
      <section>
        {IsShowed && (
          <div className=" max-sm:absolute max-sm:top-50 max-sm:w-full w-2/6  bg-cyan-600 rounded-xl shadow-md shadow-sky-700 p-6  hover:shadow-lg transition">
            <IconButton
              sx={{ color: "#fff" }}
              onClick={() => setIsShowed(false)}
            >
              <CloseIcon />
            </IconButton>
            <h2 className=" text-yellow-200 font-bold text-2xl mb-6">
              Antes de comenzar es necesario crear tus categorías ☺️
            </h2>
          </div>
        )}
        <h3 className="text-2xl  font-medium text-sky-900">
          Tus categorias mas recientes
        </h3>
        <div className="flex gap-2 mt-4 pb-10 ">
          {categories && categories.length === 0 ? (
            <div className="w-full mt-4 text-white col-span-3 text-center  bg-cyan-800 rounded-xl shadow-md shadow-sky-700 p-6  hover:shadow-lg transition">
              No tienes categorías creadas. ¡Crea una para comenzar!
            </div>
          ) : (
            <CategorySelector categories={categories} />
          )}
        </div>
      </section>
    </>
  );
}
