import React, { useEffect, useState } from "react";
import { getDeals } from "../../services/apiCalls";
import { DealCard } from "../../common/DealCard/DealCard";
import { Col, Container, Row } from "react-bootstrap";
import './Home.css'

const Home = () => {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    getDeals().then((res) => setDeals(res));
  }, []);

  return (
    <>
      <Container fluid>
        <Row className="contenedorTarjetas justify-content-center">
          {deals?.map((deal) => {
            return (
              <Col
                className="d-flex justify-content-center"
                xs={10}
                md={4}
                xl={3}
                key={deal.gameID}
              >
                <DealCard
                  title={deal.title}
                  score={deal.metacriticScore}
                  imagen={deal.thumb}
                  precioOriginal={deal.normalPrice}
                  precio={deal.salePrice}
                  descuento={deal.savings}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Home;
