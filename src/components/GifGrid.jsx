import React from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  // MANDAMOS TODO ESTE CODIGO A UN HOOK PERSONALIZADO
  // const [gifs, setGifs] = useState([]);

  // const setGifList = async () => {
  //   const gifList = await getGifs(category);
  //   setGifs(gifList);
  // };

  // useEffect(() => {
  //   setGifList();
  // }, []);
  // // ARRRAY DE DEPENDENCIAS => SI ESTA VACIO SE EJECUTA SOLO LA PRIMERA VEZ EL CONTENIDO DENTRO
  // // DEL CALLBACK DEL useEffect, SI TIENE EL VALOR DE ALGUNA VARIABLE, SE EJECUTA LA PRIMERA VEZ Y CADA
  // // VEZ QUE SE DETECTE ALGUN CAMBIO DE ESTA VARIABLE
  // /////// IMPORTANTE ///////////
  // // EN CONSOLA SE EJECUTA DOS VECES AL REFRESCAR LA PAGINA DEBIDO AL <React.StrictMode> QUE HAY
  // // EN EL COMPONENTE main.jsx. SOLO SE LANZA DOS VECES EN DESARROLLO, EN PRODUCCION SOLO SE EJECUTA
  // // UNA SOLA VEZ. SI COMENTAMOS LA ETIQUETA <React.StrictMode> DEL main.jsx SE EJECUTA SOLO UNA VEZ.

  // LLAMAMOS AL HOOK PERSONALIZADO
  const { isLoading, gifs } = useFetchGifs(category);
  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && (<h2>Cargando...</h2>)
      }
      <div className="card-grid">
        {gifs.map((imageGif) => (
          // <li key={id}>{title}</li>
          // <GifItem
          //   key={imageGif.id}
          //   id={imageGif.id}
          //   title={imageGif.title}
          //   url={imageGif.url}
          // /> // FORMA DE MANDAR LAS PROPS QUE NECESITAMOS AL COMPONENTE HIJO
          // CODIGO EQUIVALENTE
          <GifItem
            key={imageGif.id}
            {...imageGif}
            // ASI MANDAMOS TODOS LAS PROPIEDADES DE imageGif SIN TENER QUE
            // DESCOMPONERLO, ESPARCIRMOS SUS PROPIEDADES
          />
        ))}
      </div>
    </>
  );
};
