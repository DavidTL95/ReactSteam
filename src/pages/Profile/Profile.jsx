import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userData } from "../userSlice";
import { modifyMe, profileUser } from "../../services/apiCalls";
import "./Profile.css";
import { Button, Container } from "react-bootstrap";
import { TextInput } from "../../common/TextInput/TextInput";

export const Profile = () => {
  const reduxUserCredentials = useSelector(userData);
  const navigate = useNavigate();
  const [userDataApi, setUserDataApi] = useState({
    id: 0,
    name: "",
    surname: "",
    age: 0,
    userID: 0,
  });

  useEffect(() => {
    if (!reduxUserCredentials.credentials?.token) {
      navigate("/");
    }

    if (reduxUserCredentials.credentials.id) {
      profileUser(reduxUserCredentials.credentials.id)
        .then((res) => {
          setUserDataApi(res);
        })
        .catch((error) => console.log(error));
    }
  }, [reduxUserCredentials]);

  const keepData = () => {
    modifyMe(userDataApi.id, userDataApi)
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
      {userDataApi?.id !== 0 ? (
        <Container fluid className="contenedorRegistro">
          <h1>Nombre</h1>
          <TextInput
            name="name"
            type="text"
            placeholder={userDataApi.name}
            state={setUserDataApi}
          />
          <h1>Apellidos</h1>
          <TextInput
            name="surname"
            type="text"
            placeholder={userDataApi.surname}
            state={setUserDataApi}
          />
          <h1>Edad</h1>
          <TextInput
            name="age"
            type="text"
            placeholder={userDataApi.age}
            state={setUserDataApi}
          />
          <h1>Email</h1>
          <TextInput
            name="email"
            type="text"
            placeholder={userDataApi.email}
            state={setUserDataApi}
          />
          <h1>Contraseña</h1>
          <TextInput
            name="password"
            type="text"
            placeholder={userDataApi.password}
            state={setUserDataApi}
          />
          <Button className="registrame" onClick={() => keepData()}>
            ENVIAR
          </Button>
        </Container>
      ) : (
        <div>No hay datos de perfil.</div>
      )}
    </>
  );
};
