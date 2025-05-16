import React, { useEffect, useState } from "react";
import { useCategories } from "../../context/CategoriesContext";

export default function CategorySelector({ onSelect }) {
  const { categories, getCategories } = useCategories();
  const [selected, setSelected] = useState("");

  useEffect(() => {
    getCategories();
  }, []);

  const handleChange = (e) => {
    setSelected(e.target.value);
    onSelect(e.target.value);
  };

  return (
    <>
      <h1>categorias creadas</h1>{ categories.map((item, key)=> (<div key={key}>
        <h2>{item.name} </h2>
        <ul>
          <li>{item.type} </li>
        </ul>
      </div>
      ))}
     
    </>
  );
}
