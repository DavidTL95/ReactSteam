import React, { useEffect, useState } from "react";
import { getDeals, getDealsByTitle } from "../../services/apiCalls";
import { DealCard } from "../../common/DealCard/DealCard";
import { Col, Container, Row } from "react-bootstrap";
import './Home.css'
import { useDebounce } from "use-debounce";

const Home = () => {
  const [deals, setDeals] = useState([]);
  const [search, setSearch] = useState("");
  const [debounceSearch] = useDebounce(search, 750);

  useEffect(() => {
    if(debounceSearch){
      getDealsByTitle(debounceSearch)
      .then((res) => {
        setDeals(res)
      })
    }else{
      getDeals().then((res) => setDeals(res));
    }
  }, [debounceSearch]);

  const inputHandler = ({target}) => {
    const {value} = target;
    setSearch(value);
  }

  return (
    <>
      <Container fluid>
        <Row className="d-flex justify-content-center m-2">
          <Col className="d-flex justify-content-center" xs={10} md={6}>
            <input
              className="buscador"
              name="criteria"
              type="text"
              placeholder="Search a character"
              onChange={inputHandler}
              />
              {/* {<button onClick={searchHandler}>SEARCH</button>} */}
          </Col>
        </Row>

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
