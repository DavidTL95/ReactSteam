
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { getDealsByID } from "../../services/apiCalls"
import { Col, Container, Row } from "react-bootstrap"

export const Detail = () => {
    const id = useParams().id
    const [deal, setDeals] = useState()

    useEffect(() => {
        getDealsByID(id)
        .then(res => setDeals(res))
    }, [])

    console.log(deal);

  return (
    <>
        <Container fluid>
            <Row className="justify-content-center">
                <Col xs={10} md={8} lg={6}>
                    <p>{deal.title}</p>
                    <p>{deal.metacriticScore}</p>
                    <p>{deal.salePrice}</p>
                </Col>
            </Row>    
        </Container>
    </>
  )
}

export default Detail