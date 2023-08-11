
// import { useEffect, useState } from 'react'
// import { useParams } from "react-router-dom"
// import { getDealsByID } from "../../services/apiCalls"
import { Button, Col, Container, Row } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux'
import { dealData } from '../detailSlice'

import './Detail.css'
import { userData } from "../userSlice"
import { add } from "../favSlice"

export const Detail = () => {

    const reduxDealData = useSelector(dealData);

    const reduxUserData = useSelector(userData);

    const dispatch = useDispatch();

  return (
    <>
        <Container fluid>
            <Row className="justify-content-center">
                <Col xs={10} md={8} lg={6}>
                    <p>{reduxDealData.title}</p>
                    <p>{reduxDealData.metacriticScore}</p>
                    <p>{reduxDealData.salePrice}</p>
                </Col>
            </Row>    
            {reduxUserData.credentials.token
                ?(
                    <Row>
                        <Button onClick={() => dispatch(add(reduxDealData.character))}>Add</Button>   
                    </Row>
                ) : (
                    <Row>
                        Ha petao todo.
                    </Row>    
                    )
                    }
        </Container>
    </>
  )
}

export default Detail