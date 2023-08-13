import { DropdownButton } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

export const Drop = ({ state, titulo }) => {
  const dropDownHandler = (value) => {
    state(value);
  };

  return (
    <DropdownButton id="dropdown-basic-button" title={titulo}>
      <DropdownItem onClick={() => dropDownHandler(true)}>Hombre</DropdownItem>
      <DropdownItem onClick={() => dropDownHandler(false)}>Mujer</DropdownItem>
    </DropdownButton>
  );
};
