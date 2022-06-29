import { useState } from "react";

export const GifApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])

  console.log('>> categories', categories);

  const handleAddCategory = () => {
    setCategories([...categories, 'Iron Man'])
  }
  return (
    <>
      {/* TITULO */}
      <h1>GifApp</h1>

      {/* INPUT */}

      {/* LISTADO */}
      <button onClick={handleAddCategory}>Agregar</button>
      <ol>
        {
          categories.map(category => {
            return <li key={category}>{category}</li>
          })
        }
      </ol>
    </>    
  );
};
