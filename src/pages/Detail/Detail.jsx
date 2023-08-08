
// import { useEffect, useState } from 'react'
// import { useParams } from "react-router-dom"
// import { getDealsByID } from "../../services/apiCalls"
import { Col, Container, Row } from "react-bootstrap"
import { useSelector } from 'react-redux'
import { dealData } from '../detailSlice'

import './Detail.css'

export const Detail = () => {

    const reduxDealData = useSelector(dealData);

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
        </Container>
    </>
  )
}

export default Detail