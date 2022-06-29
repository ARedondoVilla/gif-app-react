import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

/**
 * Componente principal de la aplicacion
 */
export const GifApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  console.log(">> categories", categories);

  const handleAddCategory = () => {
    setCategories([...categories, "Iron Man"]);
  };
  
  return (
    <>
      {/* TITULO */}
      <h1>GifApp</h1>

      {/* INPUT */}
      <AddCategory setCategories={setCategories} />
      {/* LISTADO */}
      <button onClick={handleAddCategory}>Agregar</button>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
