import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextInput } from "../../common/TextInput/TextInput";
import { Button, Container } from "react-bootstrap";
import { registerMe } from "../../services/apiCalls";
import "./Register.css";

export const Register = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    id: 0,
    name: "",
    surname: "",
    age: 0,
    userID: 0,
  });

  useEffect(() => {
    // console.log(userData)
  }, [userData]);

  const keepData = () => {
    registerMe(userData)
      .then((res) => {
        if (res.id !== 0) {
          setTimeout(() => {
            navigate("/login");
          }, 750);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Container fluid className="contenedorRegistro">
        <TextInput
          name="name"
          type="text"
          placeholder="Nombre"
          state={setUserData}
        />
        <TextInput
          name="surname"
          type="text"
          placeholder="Apellidos"
          state={setUserData}
        />
        <TextInput
          name="age"
          type="text"
          placeholder="Edad"
          state={setUserData}
        />
        <TextInput name="id" type="text" placeholder="ID" state={setUserData} />
        <TextInput
          name="userId"
          type="text"
          placeholder="Nº usuario"
          state={setUserData}
        />
        <Button className="registrame" onClick={() => keepData()}>
          ENVIAR
        </Button>
      </Container>
    </>
  );
};
