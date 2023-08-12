import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { TextInput } from "../../common/TextInput/TextInput";
import { logMe } from "../../services/apiCalls";
import { login, userData } from "../userSlice";
import './Login.css'


export const Login = () => {

    const navigate = useNavigate();

    const reduxUserCredentials = useSelector(userData);

    const dispatch = useDispatch();

    const[userCredentials, setUserCredentials] = useState({
        email: "",
        password: ""
    });

    const [welcome, setWelcome] = useState("");

    useEffect(() => {
        if(reduxUserCredentials.credentials?.token){
            navigate("/");
        }
    },[])

    useEffect(() => {
        if(userCredentials.email !== ""){
            console.log(userCredentials)
        }
    }, [userCredentials])

    const submitHandler = (e) => {
        // e.prevenDefault();

        logMe(userCredentials)
        .then((res) => {
            console.log(res);
            dispatch(login({credentials: res}))

            setWelcome(res.name);

            setTimeout(() => {
                navigate("/")
            }, 4500)
        })
        .catch((error) => console.log(error));
    }

    return(
        <>
      <Container fluid className="contenedor" xs={12} md={12} xl={12}>
        {welcome !== "" ? (
          <>
            <Row className="justify-content-center">
              <Col className="d-flex flex-column justify-content-center" xs={10} md={4} xl={3}>
                Bienvenido de nuevo {welcome}....
              </Col>
            </Row>
          </>
        ) : (
          <>
            <Row className="justify-content-center">
              <Col
                className="d-flex flex-column my-2 justify-content-center"
                xs={10}
                md={4}
                xl={3}
              >
                <TextInput
                  name="email"
                  type="email"
                  placeholder="Email"
                  state={setUserCredentials}
                />
                <TextInput
                  name="password"
                  type="password"
                  placeholder="Contraseña"
                  state={setUserCredentials}
                />
                <Button className="login" onClick={(e) => submitHandler(e)}>Login</Button>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </>
    )
}