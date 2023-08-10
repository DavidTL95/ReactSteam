import React, { useEffect, useState } from 'react'

import { TextInput } from '../TextInput/TextInput'
import { Col, Container, Row } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getDealsByTitle } from '../../services/apiCalls';

import { addFindings, deleteFindings } from '../../pages/searchSlice';
import { userData } from '../../pages/userSlice';
import { FavIcon } from '../FavIcon/FavIcon';

const Header = () => {

  // const [searchInfo, setSearchInfo] = useState("");

  const datosCredencialesRedux = useSelector(userData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("123456789ABCD", datosCredencialesRedux.credentials)
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
    <Container fluid className='contenedorHeader' xs={12} md={12} xl={12}>
      <Row className='justify-content-center py-5'>
        <Col className='d-flex justify-content-center' xs={10} md={4} xl={4}></Col>
        <Col className='d-flex justify-content-center' xs={10} md={4} xl={4}></Col>
        <Col className='d-flex justify-content-end align-items-end' xs={10} md={4} xl={4}>
          <Row>
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
                  {datosCredencialesRedux.credentials?.rol === true && (<Col className='linlDesign' onClick={()=>navigate("/admin")}>Admin</Col>)}
                  <Col className="linkDesign">{datosCredencialesRedux.credentials?.name}</Col>
                  <Col className="linkDesign" onClick={() => logOut()}>Logout</Col>
                  <Col onClick={() => navigate("/cart")}><FavIcon/></Col>
                </>
              )
            }
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Header