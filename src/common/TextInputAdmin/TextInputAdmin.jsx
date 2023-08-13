import React from "react";

import "./TextInputAdmin.css";

//Creación y preparación del input para la búsqueda.

export const TextInputAdmin = ({ name, type, placeholder, state }) => {
  const InputHandler = ({ target }, state) => {
    const { value, name } = target;

    state((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <input
      className="buscadorAdmin my-4 inputDesign"
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={(e) => InputHandler(e, state)}
    />
  );
};
