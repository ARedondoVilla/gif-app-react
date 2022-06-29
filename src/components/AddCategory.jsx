import React, { useState } from "react";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const onChangeInput = (event) => {
    // console.log('>> event', event.target.value);
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // EVITA QUE SE ACTUALICE LA PAGINA CUANDO HAGAMOS submit
    // console.log(">> event submit", event);
    // console.log("inputValue", inputValue);
    setCategories((categories) => [inputValue, ...categories]);
    if (inputValue.trim().length <= 1) return;
    // SE MANDA EL setCategories MEDIAENTE LAS PROPS, PERO COMO NO TENEMOS LAS categories, USAMOS
    // EL CALLBACK PARA MODIFICAR EL ARRAY DE categories, USANDO EL CALLBACK ACCEDEMOS A LA INFORMACION
    // DE categories.
  };

  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Busca un gif"
        value={inputValue}
        // onChange={(event) => onChangeInput(event)}
        // CODIGO EQUIVALENTE, PERO EN LA DEFINCION DE LA FUNCION SE SIGUE PASANDO EL PARAMETRO event
        onChange={onChangeInput}
      />
    </form>
  );
};
