import React, { useEffect, useState } from "react";

import { Col, Container, Row } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { userData, userout } from "../../pages/userSlice";

import "./Header.css";

const Header = () => {
  const datosCredencialesRedux = useSelector(userData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {}, [datosCredencialesRedux]);

  const logOut = () => {
    dispatch(userout({ credentials: {} }));
  };

  return (
    <Container className="contenedor" fluid xs={12} md={12} xl={12}>
      <Col className="contenedorHeader">
        {
          <div className="triangle">
            <Row className="contenedorPerfil">
              {!datosCredencialesRedux.credentials?.token ? (
                <>
                  <Col className="linkDesign" onClick={() => navigate("/")}>
                    Home
                  </Col>
                  <Col
                    className="linkDesign"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </Col>
                  <Col
                    className="linkDesign"
                    onClick={() => navigate("/register")}
                  >
                    Register
                  </Col>
                </>
              ) : (
                <>
                  <Col className="linkDesign" onClick={() => navigate("/")}>
                    Home
                  </Col>
                  <Col
                    className="linkDesign"
                    onClick={() => navigate("/profile")}
                  >
                    Perfil
                  </Col>
                  {datosCredencialesRedux.credentials?.rol === true && (
                    <Col
                      className="linkDesign"
                      onClick={() => navigate("/admin")}
                    >
                      Admin
                    </Col>
                  )}
                  <Col className="linkDesign" onClick={() => logOut()}>
                    Logout
                  </Col>
                  <Col className="linkDesign" onClick={() => navigate("/fav")}>
                    Fav
                  </Col>
                </>
              )}
            </Row>
          </div>
        }
      </Col>
    </Container>
  );
};

export default Header;
