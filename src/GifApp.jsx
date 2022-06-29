import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

/**
 * Componente principal de la aplicacion
 */
export const GifApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  // console.log(">> categories", categories);

  const handleAddCategory = (newCategory) => {
    if (categories.includes(newCategory.toLowerCase())) return;
    setCategories([newCategory.toLowerCase(), ...categories]);
  };

  return (
    <>
      {/* TITULO */}
      <h1>GifApp</h1>

      {/* INPUT */}
      {/* DE ESTA FORMA SE LE PASA EL setState AL COMPONENTE HIJO */}
      {/* <AddCategory setCategories={setCategories} />  */}
      {/* DE ESTA FORMA SE ATRAPA DESDE EL PADRE UN EVENTO QUE HA EMITIDO EL COMPONENTE HIJO */}
      <AddCategory onAddCategory={(event) => handleAddCategory(event)} />
      {/* CODIGO EQUIVALENTE */}
      {/* <AddCategory onAddCategory={handleAddCategory}/> */}
      {/* LISTADO */}
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
