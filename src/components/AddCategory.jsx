import React, { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState("Iron Man");

  const onChangeInput = (event) => {
    // console.log('>> event', event.target.value);
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // EVITA QUE SE ACTUALICE LA PAGINA CUANDO HAGAMOS submit
    console.log('>> event submit', event);
    console.log('inputValue', inputValue);
  }
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
