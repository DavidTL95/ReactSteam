import React, { useEffect, useState } from 'react'

import { TextInput } from '../TextInput/TextInput'
import { Col, Container, Row } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getDealsByTitle } from '../../services/apiCalls';

import { addFindings, deleteFindings } from '../../pages/searchSlice';
import { userData, userout } from '../../pages/userSlice';
import { FavIcon } from '../FavIcon/FavIcon';

import './Header.css'

const Header = () => {

  // const [searchInfo, setSearchInfo] = useState("");

  const datosCredencialesRedux = useSelector(userData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("123456789ABCD", datosCredencialesRedux.credentials)
  }, [datosCredencialesRedux])

  const logOut = () => {
    dispatch(userout({credentials: {}}))
  }

  // useEffect(() => {
  //   if(searchInfo){
  //     const bringData = setTimeout(() => {
  //       getDealsByTitle(searchInfo)
  //       .then(
  //         res => {
  //           dispatch(addFindings({findings: res}))
  //         }
  //       )
  //       .catch(error => console.log(error))
  //     }, 750)
  //     return () => clearTimeout(bringData)
  //   }else{
  //     dispatch(deleteFindings({findings: []}))
  //   }
  // }, [searchInfo])

  return (
    <Container className='contenedor' fluid xs={12} md={12} xl={12}>

        <Col className='contenedorHeader'>
        {<div className="triangle">
          <Row className='contenedorPerfil'>
            {
              !datosCredencialesRedux.credentials?.token ? (
                <>
                  <Col className='linkDesign' onClick={()=>navigate("/")}>Home</Col>
                  <Col className='linkDesign' onClick={()=>navigate("/login")}>Login</Col>
                  <Col className='linkDesign' onClick={()=>navigate("/register")}>Register</Col>
                </>
              ) : (
                <>
                  <Col className='linkDesign' onClick={()=>navigate("/")}>Home</Col>
                  <Col className='linkDesign' onClick={()=>navigate("/profile")}>Perfil</Col>
                  {datosCredencialesRedux.credentials?.rol === true && (
                  <Col className='linkDesign' onClick={()=>navigate("/admin")}>Admin</Col>)}
                  <Col className="linkDesign" onClick={() => logOut()}>Logout</Col>
                  <Col className='linkDesign' onClick={() => navigate("/fav")}>Fav</Col>
                </>
              )
            }
          </Row>
          {/* <Row className='contenedorLinks'></Row> */}
        </div>}

        </Col>
    </Container>
  )
}

export default Header