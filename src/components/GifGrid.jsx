import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  const [gifs, setGifs] = useState([]);

  const setGifList = async () => {
    const gifList = await getGifs(category)
    setGifs(gifList)
  }

  useEffect(() => {
    setGifList();
  }, []); 
  // ARRRAY DE DEPENDENCIAS => SI ESTA VACIO SE EJECUTA SOLO LA PRIMERA VEZ EL CONTENIDO DENTRO
  // DEL CALLBACK DEL useEffect, SI TIENE EL VALOR DE ALGUNA VARIABLE, SE EJECUTA LA PRIMERA VEZ Y CADA
  // VEZ QUE SE DETECTE ALGUN CAMBIO DE ESTA VARIABLE
  /////// IMPORTANTE ///////////
  // EN CONSOLA SE EJECUTA DOS VECES AL REFRESCAR LA PAGINA DEBIDO AL <React.StrictMode> QUE HAY
  // EN EL COMPONENTE main.jsx. SOLO SE LANZA DOS VECES EN DESARROLLO, EN PRODUCCION SOLO SE EJECUTA
  // UNA SOLA VEZ. SI COMENTAMOS LA ETIQUETA <React.StrictMode> DEL main.jsx SE EJECUTA SOLO UNA VEZ.

  return (
    <>
      <h3>{category}</h3>
      <ol>
        {
          gifs.map(({id, title}) => (
            <li key={id}>{title}</li>
          ))
        }
      </ol>
    </>
  );
};
