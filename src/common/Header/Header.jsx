import React, { useEffect, useState } from 'react'

import { TextInput } from '../TextInput/TextInput'
import { Container } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getDealsByTitle } from '../../services/apiCalls';

import { addFindings, deleteFindings } from '../../pages/searchSlice';

const Header = () => {

  const [searchInfo, setSearchInfo] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if(searchInfo){
      const bringData = setTimeout(() => {
        getDealsByTitle(searchInfo)
        .then(
          res => {
            dispatch(addFindings({findings: res}))
          }
        )
        .catch(error => console.log(error))
      }, 750)
      return () => clearTimeout(bringData)
    }else{
      dispatch(deleteFindings({findings: []}))
    }
  }, [searchInfo])

  return (
    <Container fluid className='contenedorHeader' xs={12} md={12} xl={12}>
    <TextInput className='search' name="search" type="text" placeholder="Search..." state = {setSearchInfo}/>
</Container>
  )
}

export default Header