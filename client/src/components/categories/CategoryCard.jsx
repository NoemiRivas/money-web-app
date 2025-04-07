import React, { useContext, useMemo } from "react";

import { UserContext } from "../../context/UserContext";
import { useEffect } from "react";
import EditCategory from "../buttons/EditCategory";
import DeleteButton from "../buttons/DeleteButton";

export default function CategoryCard({ userId }) {
  const { categories = [], getCategories, loading } = useContext(UserContext);

  useEffect(() => {
    getCategories(userId);
  }, [userId, getCategories]);

  const memoizedCategories = useMemo(() => categories, [categories]);

  if (loading) {
    return <p>Cargando categorías...</p>;
  }
  return (
    <>
      {memoizedCategories.map((category) => (
        <div
          key={category._id}
          className="bg-white shadow-md rounded-lg w-auto p-4"
        >
          <div className="flex justify-between items-center ">
            <div className="flex flex-col">
              <h3 className="text-base font-semibold capitalize">
                {category.name}
              </h3>
              <p className="text-sm text-neutral-400">
                {category.type}
              </p>
            </div>

            <div className="flex gap-2 sm:gap-4">
              <EditCategory category={category}  />
              <DeleteButton categoryId={category._id} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
